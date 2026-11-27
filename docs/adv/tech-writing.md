---
level: 深入
summary: commit 信息、PR 描述、README、API 文档、代码注释、issue 和发布说明的写法与关键句式，照着模板写就能被同事看懂。
tags: [技术写作, commit, PR, 文档, issue, 深入]
---

# 技术文档、PR 描述与 commit 信息

> [!ABSTRACT]
> - **commit 标题**用祈使句（Fix、Add、Remove），不超过五十个字符左右，只写“做了什么”；原因和细节写在正文里。
> - **PR 描述**回答四个问题：做了什么（What）、为什么（Why）、怎么做的（How）、怎么验证的（Testing）。
> - 技术文档的敌人是**含糊**和**长句**。用短句、主动语态、具体数字，读者里有很多人不是母语者。

## 一、commit 信息

commit 是写给“半年后的自己和陌生同事”看的。标题回答“这个提交做了什么”，正文回答“为什么这么做”。

### 1. 格式与规则

```text
<type>(<scope>): <short summary in imperative mood>

<body: explain what and why, not how>

<footer: issue references, breaking changes>
```

常见的类型前缀（Conventional Commits 风格）：

| 前缀 | 含义 | 例子 |
| --- | --- | --- |
| feat | 新功能 | feat(search): add fuzzy matching |
| fix | 修复 bug | fix(auth): handle expired tokens |
| docs | 只改文档 | docs: update setup guide |
| refactor | 重构，行为不变 | refactor(api): extract validation helpers |
| test | 增加或修改测试 | test(cart): cover empty cart case |
| chore | 杂项（依赖、配置） | chore: bump the lint version |
| perf | 性能优化 | perf(db): add index on user email |
| revert | 撤销提交 | revert: undo the cache change |

> [!TIP] 祈使句：把标题想成“If applied, this commit will ___”
> 把标题接在 *If applied, this commit will* 后面能读通，就是对的。**Add retry logic** 对，**Added retry logic** 和 **Adds retry logic** 都不对。

### 2. 好与坏的对比

```text
Bad:
  fixed bug
  update
  changes for the thing we talked about
  fix login issue again!!!

Good:
  fix(auth): return a clear error when the token has expired
  feat(export): add CSV download to the report page
  refactor(db): replace raw queries with the query builder
  perf(search): cache the result of the category lookup
```

一个带正文的完整例子：

```text
fix(payment): retry failed webhook calls

The payment provider sometimes returns a temporary server error.
Before this change, we dropped the event and the order stayed in
the pending state.

Now we retry up to three times with an increasing delay. If all
retries fail, we log the event for manual review.

Fixes the stuck pending orders reported in the support queue.
```

### 3. 关键句式

```phrases
Fix null pointer error in the login handler | /fɪks nʌl ˈpɔɪntər ˈerər ɪn ðə ˈlɔːˌɡɪn ˈhændlər/ | 修复登录处理函数里的空指针错误 | 动词开头，不加句号
Add retry logic to the webhook client | /æd riˈtraɪ ˈlɑːdʒɪk tuː ðə ˈwebhʊk ˈklaɪənt/ | 给 webhook 客户端增加重试逻辑
Remove unused imports from the billing module | /riˈmuːv əˈnjuːzd ˌɪmˈpɔːrts frʌm ðə ˈbɪlɪŋ ˈmɑːdʒul/ | 删除计费模块里没用到的导入
Update the README with new setup steps | /əpˈdeɪt ðə ˈriːdmiː wɪð nuː ˈseˌtʌp steps/ | 用新的安装步骤更新 README
Rename getUser to fetchUser for clarity | /riˈneɪm ɡet ˈjuːzər tuː fetʃ ˈjuːzər fɔːr ˈklerəti/ | 把 getUser 改名为 fetchUser，更清楚 | 改名类提交最好说明原因
Revert the cache change that caused stale data | /rɪˈvɜːrt ðə kæʃ tʃeɪndʒ ðæt kɑːzd steɪl ˈdeɪtə/ | 撤销导致数据过期的缓存改动 | revert 要写明原因
Bump the library version to fix a security issue | /bʌmp ðə ˈlaɪbreˌriː ˈvɜːrʒən tuː fɪks ə sɪˈkjʊrəti ˈɪʃu/ | 升级库版本以修复安全问题 | bump 是“提升版本号”的口语
Refactor the parser to make it easier to test | /riːˈfæktər ðə ˈpɑːrsər tuː meɪk ɪt ˈiːziər tuː test/ | 重构解析器，使其更容易测试
This change fixes a race condition in the queue worker. | /ðɪs tʃeɪndʒ ˈfɪksɪz ə reɪs kənˈdɪʃən ɪn ðə kjuː ˈwɜːrkər/ | 这次改动修复了队列消费者里的竞态条件。 | 正文里可以用完整句子
The old query was slow because it scanned the whole table. | /ðə oʊld ˈkwiːri wɑːz sloʊ bɪˈkɔːz ɪt skænd ðə hoʊl ˈteɪbəl/ | 旧的查询很慢，因为它扫描了整张表。 | 正文写“为什么”比写“怎么做”更重要
```

> [!CAUTION] 千万别这样说
> - 错：fix bug / update code / some changes —— 没有任何信息量，半年后没人看得懂。
> - 对：fix(cart): prevent a crash when the item list is empty
> - 错：Fixed the thing. 过去式加含糊的 thing。
> - 对：Fix the timeout when uploading large files

## 二、PR 描述

好的 PR 描述能让评审者在两分钟内明白“我在看什么、怎么看”。

### 1. 模板

```text
## What
Add rate limiting to the public search API.

## Why
Last week a single client sent thousands of requests per minute
and slowed down the service for everyone. See the incident notes
in the team wiki.

## How
- Add a middleware that counts requests per API key.
- Return a clear error with a retry-after header when the limit is exceeded.
- Make the limit configurable per environment.

## Testing
- Added unit tests for the counter and the middleware.
- Tested manually in staging with a load script.
- Verified that normal traffic is not affected.

## Notes for reviewers
- The main logic is in the middleware file.
- The config change is small, but please check the default value.
- Not included: per-user limits, which I'll do in a follow-up PR.
```

### 2. PR 里的常用句式

```phrases
This PR adds rate limiting to the public search API. | /ðɪs ˌpiː ˈɑːr ædz reɪt ˈlɪmətɪŋ tuː ðə ˈpʌblɪk sɜːrtʃ ˌeɪˌpiːˈaɪ/ | 这个 PR 给公共搜索接口增加了限流。 | 开头一句话讲清楚内容
This PR fixes a bug where the cart total was wrong after a coupon was removed. | /ðɪs ˌpiː ˈɑːr ˈfɪksɪz ə bʌɡ wer ðə kɑːrt ˈtoʊtəl wɑːz rɔːŋ ˈæftər ə ˈkuːˌpɔːn wɑːz riˈmuːvd/ | 这个 PR 修复了移除优惠券后购物车总价不对的问题。
The goal is to reduce the average page load time. | /ðə ɡoʊl ɪz tuː rəˈduːs ðə ˈævərɪdʒ peɪdʒ loʊd taɪm/ | 目标是降低页面平均加载时间。
I chose this approach because it keeps the change small and easy to roll back. | /aɪ tʃoʊz ðɪs əˈproʊtʃ bɪˈkɔːz ɪt kiːps ðə tʃeɪndʒ smɔːl ənd ˈiːzi tuː roʊl bæk/ | 我选这个方案，是因为改动小，也容易回滚。 | 写出取舍，评审者才知道你想过
I considered adding a cache, but it would make debugging harder. | /aɪ kənˈsɪdərd ˈædɪŋ ə kæʃ bʌt ɪt wʊd meɪk diˈbʌɡɪŋ ˈhɑːrdər/ | 我考虑过加缓存，但会让调试更难。 | 说明被放弃的方案，避免评审者重复提
I tested this locally and in staging. | /aɪ ˈtestɪd ðɪs ˈloʊkəli ənd ɪn ˈsteɪdʒɪŋ/ | 我在本地和预发布环境测试过。
Steps to test: open the settings page and change the language. | /steps tuː test ˈoʊpən ðə ˈsetɪŋz peɪdʒ ənd tʃeɪndʒ ðə ˈlæŋɡwədʒ/ | 测试步骤：打开设置页，切换语言。
Please focus on the error handling in the retry loop. | /pliːz ˈfoʊkəs ɑːn ðə ˈerər ˈhændlɪŋ ɪn ðə riˈtraɪ luːp/ | 请重点看重试循环里的错误处理。 | 引导评审者的注意力
This change is backward compatible. | /ðɪs tʃeɪndʒ ɪz ˈbækwərd kəmˈpætəbəl/ | 这个改动向后兼容。
This is a breaking change, so we need to update the clients. | /ðɪs ɪz ə ˈbreɪkɪŋ tʃeɪndʒ soʊ wiː niːd tuː əpˈdeɪt ðə ˈklaɪənts/ | 这是个破坏性变更，所以需要更新客户端。 | breaking change 要特别醒目地标出来
Not in scope: I'll handle the mobile layout in a separate PR. | /nɑːt ɪn skoʊp aɪl ˈhændəl ðə ˈmoʊbəl ˈleɪˌaʊt ɪn ə ˈsepərˌeɪt ˌpiː ˈɑːr/ | 不在本次范围内：移动端布局我会放到另一个 PR 里。 | 主动划定范围，减少无谓争论
Closes the login timeout issue reported by the support team. | /ˈkloʊzɪz ðə ˈlɔːˌɡɪn ˈtaɪˌmaʊt ˈɪʃu ˌriːˈpɔːrtɪd baɪ ðə səˈpɔːrt tiːm/ | 关闭支持团队报告的登录超时问题。 | GitHub 里写 Closes 加 issue 编号，合并时会自动关闭
```

> [!TIP] PR 要小
> 一个 PR 只做一件事。PR 越小，评审越快，也越容易回滚。如果描述里需要写“also”超过两次，考虑拆成两个 PR。

## 三、README 与 API 文档

README 回答“这是什么、怎么跑起来、怎么用、怎么贡献”。API 文档回答“怎么调用、会返回什么、会出什么错”。

```text
# Order Service

A small service that creates and tracks customer orders.

## Requirements
- Node version eighteen or later
- A running database instance

## Getting started
1. Install the dependencies.
2. Copy the example config file and fill in your values.
3. Start the server.

## Usage
Send a request to the orders endpoint to create a new order.

## Contributing
Open an issue first, then submit a pull request.
```

```text
GET /orders/{id}

Returns the order with the given ID.

Parameters
  id (string, required): The unique ID of the order.

Responses
  200: The order was found.
  404: No order exists with this ID.
  429: Too many requests. Try again later.
```

```phrases
This service creates and tracks customer orders. | /ðɪs ˈsɜːrvəs kriˈeɪts ənd træks ˈkʌstəmər ˈɔːrdərz/ | 这个服务负责创建和跟踪客户订单。 | README 第一句：这是什么
To get started, install the dependencies and run the setup script. | /tuː ɡet ˈstɑːrtɪd ˌɪnˈstɔːl ðə dɪˈpendənsiz ənd rʌn ðə ˈseˌtʌp skrɪpt/ | 开始使用前，先安装依赖并运行安装脚本。
Make sure you have version eighteen or later installed. | /meɪk ʃʊr juː hæv ˈvɜːrʒən eɪˈtiːn ɔːr ˈleɪtər ˌɪnˈstɔːld/ | 请确认已安装版本十八或更高的版本。
Copy the example config file and fill in your own values. | /ˈkɑːpi ðə ɪɡˈzæmpəl ˈkɑːnfɪɡ faɪl ənd fɪl ɪn jɔːr oʊn ˈvæljuz/ | 复制示例配置文件，填入你自己的值。
Returns the order with the given ID. | /rɪˈtɜːrnz ðə ˈɔːrdər wɪð ðə ˈɡɪvən ɪd/ | 返回指定 ID 的订单。 | API 文档用第三人称现在时，不用 You can use it to…
This endpoint requires authentication. | /ðɪs ˈendˌpɔɪnt riˈkwaɪərz ɔːˌθentəˈkeɪʃən/ | 这个接口需要认证。
Returns a not found error if the order does not exist. | /rɪˈtɜːrnz ə nɑːt faʊnd ˈerər ɪf ðə ˈɔːrdər dʌz nɑːt ɪɡˈzɪst/ | 订单不存在时返回 not found 错误。
This parameter is optional. The default value is twenty. | /ðɪs pərˈæmətər ɪz ˈɑːpʃənəl ðə dɪˈfɔːlt ˈvælju ɪz ˈtwenti/ | 这个参数可选，默认值是二十。
Rate limit: you can send up to one hundred requests per minute. | /reɪt ˈlɪmət juː kæn send ʌp tuː wʌn ˈhʌndrəd rɪˈkwests pɜːr ˈmɪnət/ | 限流：每分钟最多可发送一百个请求。
Note: this field is deprecated and will be removed in the next major version. | /noʊt ðɪs fiːld ɪz ˈdeprəˌkeɪtəd ənd wɪl biː riˈmuːvd ɪn ðə nekst ˈmeɪdʒər ˈvɜːrʒən/ | 注意：该字段已弃用，将在下一个大版本中移除。 | 弃用要写清楚替代方案和时间
If you run into problems, check the troubleshooting section first. | /ɪf juː rʌn ˈɪntu ˈprɑːbləmz tʃek ðə ˈtrʌbəlˌʃuːtɪŋ ˈsekʃən fɜːrst/ | 如果遇到问题，请先看故障排查部分。
```

## 四、代码注释

好的注释解释 **why（为什么）**，而不是重复 **what（做了什么）**。代码已经告诉读者“做了什么”。

```text
Bad comment:
  // increment i by one
  i++;

Good comment:
  // The server returns pages starting from one, so skip page zero.
  page = max(page, 1);

TODO / FIXME conventions:
  // TODO: replace this with the new pricing API when it is ready.
  // FIXME: this fails when the username contains a space.
  // NOTE: the order of these checks matters. Do not rearrange them.
  // HACK: temporary workaround for a bug in the upstream library.
```

```phrases
We retry here because the provider sometimes returns a temporary error. | /wiː riˈtraɪ hiːr bɪˈkɔːz ðə prəˈvaɪdər səmˈtaɪmz rɪˈtɜːrnz ə ˈtempərˌeri ˈerər/ | 这里要重试，因为服务商有时会返回临时错误。 | 解释“为什么”
This check must run before the cache lookup. | /ðɪs tʃek mʌst rʌn bɪˈfɔːr ðə kæʃ ˈlʊkəp/ | 这个检查必须在缓存查找之前运行。
TODO: remove this workaround once the upstream bug is fixed. | /ˌtuːˈduː riˈmuːv ðɪs ˈwɜːrkəraʊnd wʌns ðə ˈʌpˈstriːm bʌɡ ɪz fɪkst/ | 待办：上游 bug 修复后，删掉这个临时方案。 | TODO 要写明什么时候可以删
Do not change this value without talking to the data team. | /duː nɑːt tʃeɪndʒ ðɪs ˈvælju wɪˈθaʊt ˈtɔːkɪŋ tuː ðə ˈdeɪtə tiːm/ | 没有和数据团队商量，不要修改这个值。
This function is not thread safe. | /ðɪs ˈfʌŋkʃən ɪz nɑːt θred seɪf/ | 这个函数不是线程安全的。
Returns null if no matching user is found. | /rɪˈtɜːrnz nʌl ɪf noʊ ˈmætʃɪŋ ˈjuːzər ɪz faʊnd/ | 找不到匹配用户时返回 null。 | 函数注释要写清楚边界情况
```

## 五、issue 与 bug 报告

好的 bug 报告让别人不用追问就能复现。

```text
Title: Search page crashes when the query contains an emoji

Description
When I type an emoji into the search box and press Enter,
the page goes blank.

Steps to reproduce
1. Open the search page.
2. Type an emoji into the search box.
3. Press Enter.

Expected behavior
The search results page loads.

Actual behavior
The page goes blank, and the console shows a parse error.

Environment
- Browser: latest Chrome
- Operating system: Windows eleven
- App version: the latest release

Additional context
This started after the last release. It works fine in staging.
```

```text
Feature request template

Problem
Users cannot export the report as a spreadsheet.

Proposed solution
Add a button on the report page to download a CSV file.

Alternatives considered
Copying the table by hand, which is slow and error prone.

Priority
Nice to have. About ten customers have asked for this.
```

```phrases
Steps to reproduce: open the page, click save, and wait. | /steps tuː ˌriːprəˈduːs ˈoʊpən ðə peɪdʒ klɪk seɪv ənd weɪt/ | 复现步骤：打开页面，点击保存，然后等待。
Expected behavior: the form is saved. Actual behavior: the page shows an error. | /ɪkˈspektəd bɪˈheɪvjər ðə fɔːrm ɪz seɪvd ˈæktʃəwəl bɪˈheɪvjər ðə peɪdʒ ʃoʊz æn ˈerər/ | 预期行为：表单被保存。实际行为：页面显示错误。 | Expected 和 Actual 对比是 bug 报告的核心
I can reproduce this consistently. | /aɪ kæn ˌriːprəˈduːs ðɪs kənˈsɪstəntli/ | 我能稳定复现这个问题。
This happens intermittently, about once in every ten tries. | /ðɪs ˈhæpənz ˌɪntərˈmɪtəntli əˈbaʊt wʌns ɪn ˈevəri ten traɪz/ | 这个问题是间歇性的，大约十次出现一次。 | 间歇性问题要给出频率
It works fine in staging but fails in production. | /ɪt wɜːrks faɪn ɪn ˈsteɪdʒɪŋ bʌt feɪlz ɪn prəˈdʌkʃən/ | 在预发布环境正常，但在生产环境失败。
This started after the last release. | /ðɪs ˈstɑːrtɪd ˈæftər ðə læst riˈliːs/ | 这个问题是从上次发布后开始的。 | 帮助定位引入问题的改动
Attached are the logs and a screenshot. | /əˈtætʃt ɑːr ðə lɔːɡz ənd ə ˈskriːnˌʃɑːt/ | 附上了日志和截图。
Could you share the full error message and the browser version? | /kʊd juː ʃer ðə fʊl ˈerər ˈmesədʒ ənd ðə ˈbraʊzər ˈvɜːrʒən/ | 你能分享完整的错误信息和浏览器版本吗？ | 向报告者要补充信息时的写法
Thanks for the report. I can reproduce it on my machine. | /θæŋks fɔːr ðə riˈpɔːrt aɪ kæn ˌriːprəˈduːs ɪt ɑːn maɪ məˈʃiːn/ | 谢谢你的报告，我在自己的机器上也能复现。
I'm closing this as a duplicate of the earlier issue. | /aɪm ˈkloʊzɪŋ ðɪs æz ə ˈduːpləkət ʌv ðə ˈɜːrliər ˈɪʃu/ | 我把它作为早前那个 issue 的重复项关闭。
This is working as intended. Here is why. | /ðɪs ɪz ˈwɜːrkɪŋ æz ˌɪnˈtendɪd hiːr ɪz waɪ/ | 这是按设计预期工作的，原因如下。 | 关闭别人的 issue 时要解释原因，语气尽量友好
```

## 六、变更日志与发布说明

Changelog 给开发者看，Release notes 给用户看。用动词开头，写“用户能感受到什么”。

```text
## Version two point four

### New
- Added dark mode to the dashboard.
- Added CSV export for reports.

### Improved
- Search results now load about twice as fast.
- The error messages on the sign-in page are clearer.

### Fixed
- Fixed a crash when uploading files larger than one hundred megabytes.
- Fixed the wrong time zone shown in the activity log.

### Deprecated
- The old export endpoint is deprecated and will be removed in version three.

### Breaking changes
- The date format in the API response is now ISO eight six zero one.
```

```phrases
Added dark mode to the dashboard. | /ˈædəd dɑːrk moʊd tuː ðə ˈdæʃˌbɔːrd/ | 为看板新增了深色模式。 | Added / Improved / Fixed 是最常见的分类动词
Improved the loading speed of the search page. | /ˌɪmˈpruːvd ðə ˈloʊdɪŋ spiːd ʌv ðə sɜːrtʃ peɪdʒ/ | 提升了搜索页的加载速度。
Fixed an issue where files failed to upload. | /fɪkst æn ˈɪʃu wer faɪlz feɪld tuː ˈʌˌploʊd/ | 修复了文件上传失败的问题。 | Fixed an issue where… 是发布说明的万能句式
Removed support for the legacy login method. | /riˈmuːvd səˈpɔːrt fɔːr ðə ˈleɡəsi ˈlɔːˌɡɪn ˈmeθəd/ | 移除了对旧登录方式的支持。
You can now export your data as a CSV file. | /juː kæn naʊ ˈekspɔːrt jɔːr ˈdeɪtə æz ə ˈsiːˈesˈviː faɪl/ | 现在你可以把数据导出为 CSV 文件了。 | 面向用户时用 You can now…
Upgrade note: please update your configuration before installing this version. | /əpˈɡreɪd noʊt pliːz əpˈdeɪt jɔːr kənˌfɪɡjərˈeɪʃən bɪˈfɔːr ˌɪnˈstɔːlɪŋ ðɪs ˈvɜːrʒən/ | 升级提示：安装此版本前请先更新配置。
We're sorry for any inconvenience this may have caused. | /wiːr ˈsɑːri fɔːr ˈeni ˌɪnkənˈviːnjəns ðɪs meɪ hæv kɑːzd/ | 对由此造成的不便，我们深表歉意。 | 用于事故后的公告
```

## 七、写给非母语读者

很多技术文档的读者不是母语者。写得简单，是对读者的尊重，不是水平低。

```phrases
Use short sentences. One idea in each sentence. | /juːs ʃɔːrt ˈsentənsəz wʌn aɪˈdiːə ɪn iːtʃ ˈsentəns/ | 用短句，每句只讲一件事。
Prefer simple words: use "use" instead of "utilize". | /prəˈfɜːr ˈsɪmpəl wɜːrdz juːs juːs ˌɪnˈsted ʌv ˈjuːtəˌlaɪz/ | 多用简单的词：用 use，不要用 utilize。 | start 比 commence、show 比 demonstrate 更好
Avoid idioms and slang in documentation. | /əˈvɔɪd ˈɪdiəmz ənd slæŋ ɪn ˌdɑːkjəmenˈteɪʃən/ | 文档里避免习语和俚语。
Use the active voice: "The server sends a response." | /juːs ðə ˈæktɪv vɔɪs ðə ˈsɜːrvər sendz ə rɪˈspɑːns/ | 用主动语态：“服务器发送一个响应。”
Be specific: write "after thirty seconds", not "after a while". | /biː spəˈsɪfɪk raɪt ˈæftər ˈθɜːrˌdiː ˈsekəndz nɑːt ˈæftər ə waɪl/ | 要具体：写“三十秒后”，不要写“一会儿后”。
Define each acronym the first time you use it. | /dɪˈfaɪn iːtʃ ˈækrənɪm ðə fɜːrst taɪm juː juːs ɪt/ | 每个缩写在第一次使用时给出全称。
Use the same word for the same thing every time. | /juːs ðə seɪm wɜːrd fɔːr ðə seɪm θɪŋ ˈevəri taɪm/ | 同一个东西，每次都用同一个词。 | 不要一会儿 user，一会儿 customer，一会儿 account
```

> [!WARNING] 技术文档里的常见问题
> - 一句话里有太多 which / that / because，读者读到后面忘了前面。拆成两句。
> - 代词不明确：*It doesn't work after it is restarted.* 第一个 it 和第二个 it 分别是什么？写出名词。
> - 用 should / might / could 写步骤，读者不知道是“必须”还是“可选”。必须做的步骤用 **must** 或祈使句（Run the script.），可选的明确写 **optionally**。

## 八、对话

```dialog
title: 评审一份含糊的 PR 描述
Reviewer: Thanks for the PR. Could you add a bit more context to the description? | /θæŋks fɔːr ðə ˌpiː ˈɑːr kʊd juː æd ə bɪt mɔːr ˈkɑːntekst tuː ðə dɪˈskrɪpʃən/ | 谢谢你的 PR。你能在描述里多补充一点背景吗？
Author: Sure. What's missing? | /ʃʊr wʌts ˈmɪsɪŋ/ | 当然，缺了什么？
Reviewer: I can see what changed, but I don't know why. Is this fixing a bug? | /aɪ kæn siː wʌt tʃeɪndʒd bʌt aɪ doʊnt noʊ waɪ ɪz ðɪs ˈfɪksɪŋ ə bʌɡ/ | 我能看到改了什么，但不知道为什么改。这是在修 bug 吗？
Author: Yes. The cart total was wrong when a coupon was removed. | /jes ðə kɑːrt ˈtoʊtəl wɑːz rɔːŋ wen ə ˈkuːˌpɔːn wɑːz riˈmuːvd/ | 是的，移除优惠券后购物车总价不对。
Reviewer: Got it. Could you also add steps to test it? | /ɡɑːt ɪt kʊd juː ˈɔːlsoʊ æd steps tuː test ɪt/ | 明白了。你也能加一下测试步骤吗？
Author: Of course. I'll add a short test plan and a link to the ticket. | /ʌv kɔːrs aɪl æd ə ʃɔːrt test plæn ənd ə lɪŋk tuː ðə ˈtɪkət/ | 当然，我加一份简短的测试计划，再附上工单链接。
Reviewer: Perfect. Also, is this a breaking change? | /pərˈfekt ˈɔːlsoʊ ɪz ðɪs ə ˈbreɪkɪŋ tʃeɪndʒ/ | 太好了。另外，这是破坏性变更吗？
Author: No, it's backward compatible. I'll say that in the description. | /noʊ ɪts ˈbækwərd kəmˈpætəbəl aɪl seɪ ðæt ɪn ðə dɪˈskrɪpʃən/ | 不是，向后兼容。我会在描述里写明。
```

```dialog
title: 修改一条含糊的 commit 信息
Lead: I saw your commit message: "fix stuff". Can we make it clearer? | /aɪ sɔː jɔːr kəˈmɪt ˈmesədʒ fɪks stʌf kæn wiː meɪk ɪt ˈklɪrər/ | 我看到你的 commit 信息是 fix stuff。我们能写得更清楚吗？
Dev: Sorry, I was in a hurry. What should I write? | /ˈsɑːri aɪ wɑːz ɪn ə ˈhɜːri wʌt ʃʊd aɪ raɪt/ | 抱歉，我当时很急。该怎么写？
Lead: Start with the scope and what the fix does. For example, "fix(cart): handle empty item list". | /stɑːrt wɪð ðə skoʊp ənd wʌt ðə fɪks dʌz fɔːr ɪɡˈzæmpəl fɪks kɑːrt ˈhændəl ˈempti ˈaɪtəm lɪst/ | 先写范围，再写这个修复做了什么，比如 fix(cart): handle empty item list。
Dev: That makes sense. Should I use the past tense? | /ðæt meɪks sens ʃʊd aɪ juːs ðə pæst tens/ | 有道理。要用过去式吗？
Lead: No, use the imperative. Think "this commit will fix the crash." | /noʊ juːs ðə ˌɪmˈperətɪv θɪŋk ðɪs kəˈmɪt wɪl fɪks ðə kræʃ/ | 不用，用祈使句，想成“这个提交会修复崩溃”。
Dev: Okay. And what goes in the body? | /ˌoʊˈkeɪ ənd wʌt ɡoʊz ɪn ðə ˈbɑːdi/ | 好的，那正文写什么？
Lead: The reason. Why was it crashing, and why is your fix the right one? | /ðə ˈriːzən waɪ wɑːz ɪt ˈkræʃɪŋ ənd waɪ ɪz jɔːr fɪks ðə raɪt wʌn/ | 原因：为什么会崩溃，为什么你的修复是对的？
Dev: Got it. I'll amend the commit and push again. | /ɡɑːt ɪt aɪl əˈmend ðə kəˈmɪt ənd pʊʃ əˈɡen/ | 明白了，我去修改这个提交再推送。
```

> [!QUESTION] 想检验自己：把 “Fixed login bug” 改成规范的 commit 标题。
> ```phrases
> fix(auth): prevent login failure when the password has a space | /fɪks ɔːθ prɪˈvent ˈlɔːˌɡɪn ˈfeɪljər wen ðə ˈpæˌswɜːrd hæz ə speɪs/ | 修复密码含空格时登录失败的问题 | 祈使句 + 范围 + 具体问题
> ```

> [!QUESTION] 想检验自己：在 PR 里怎么礼貌地提醒评审者“这部分不在本次范围”？
> ```phrases
> Not in scope: I'll handle the mobile layout in a follow-up PR. | /nɑːt ɪn skoʊp aɪl ˈhændəl ðə ˈmoʊbəl ˈleɪˌaʊt ɪn ə ˈfɑːloʊ ʌp ˌpiː ˈɑːr/ | 不在本次范围内：移动端布局我会在后续 PR 里处理。
> ```

> [!QUESTION] 想检验自己：怎么向 bug 报告者要更多信息？
> ```phrases
> Could you share the steps to reproduce and the full error message? | /kʊd juː ʃer ðə steps tuː ˌriːprəˈduːs ənd ðə fʊl ˈerər ˈmesədʒ/ | 你能分享复现步骤和完整的错误信息吗？
> ```
