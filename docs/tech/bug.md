---
level: 进阶
summary: 怎么写一份别人一看就懂的 bug 报告，以及追问信息、分级、复现、定位根因、验证修复时 QA 和开发之间的常用说法。
tags: [Bug, 测试, QA, 排查, 复现, 进阶]
---

# Bug 报告与排查沟通

> [!ABSTRACT]
> - 一份好的 bug 报告有固定结构：**Summary、Steps to reproduce、Expected result、Actual result、Environment、Logs / screenshots**。
> - 标题说现象，不说猜测：**Checkout fails with a 500 error when the cart has more than ten items**，而不是 "Checkout is broken"。
> - **Severity**（严重程度，影响有多大）和 **priority**（优先级，多快修）是两件事：前者由影响决定，后者由业务决定。
> - 复现不了时不要说 "It works on my machine" 就结束，要问环境、数据、步骤，再一起缩小范围。

## 一、写 bug 报告

先看一个完整的模板，之后把关键句式拆开练。

```text
Title: Checkout fails with a 500 error when the cart has more than ten items

Environment:
- App version: 2.4.1 (build 318)
- Environment: staging
- Browser: Chrome 126 on Windows 11

Steps to reproduce:
1. Log in as a test user.
2. Add eleven items to the cart.
3. Click "Place order".

Expected result:
The order is created and the confirmation page is shown.

Actual result:
The page shows "Something went wrong". The API returns a 500 error.

Frequency: Always (tried five times)

Logs / screenshots:
Attached: screenshot.png, request-id abc-123 (see the server log at 10:42 UTC)

Notes:
Works fine with ten items or fewer. Started after yesterday's release.
```

```phrases
I'd like to report a bug in the checkout flow. | /aɪd laɪk tuː riˈpɔːrt ə bʌɡ ɪn ðə ˈtʃeˌkaʊt floʊ/ | 我想报告一下结账流程里的一个 bug。
Here are the steps to reproduce. | /hiːr ɑːr ðə steps tuː ˌriːprəˈduːs/ | 复现步骤如下。 | steps to reproduce 常缩写为 STR 或 repro steps
I can reproduce this every time. | /aɪ kæn ˌriːprəˈduːs ðɪs ˈevəri taɪm/ | 这个问题我每次都能复现。
It happens intermittently, about one in five tries. | /ɪt ˈhæpənz ˌɪntərˈmɪtəntli əˈbaʊt wʌn ɪn faɪv traɪz/ | 这个问题是间歇性的，大约五次出现一次。 | intermittent = 时有时无
Expected result: the order is saved. Actual result: the page shows an error. | /ɪkˈspektəd rɪˈzʌlt ðə ˈɔːrdər ɪz seɪvd ˈæktʃəwəl rɪˈzʌlt ðə peɪdʒ ʃoʊz æn ˈerər/ | 预期结果：订单被保存。实际结果：页面报错。 | 两行并排写，对比一目了然
I've attached the logs and a screenshot. | /aɪv əˈtætʃt ðə lɔːɡz ənd ə ˈskriːnˌʃɑːt/ | 我附上了日志和截图。
The error message in the console says "undefined is not a function". | /ðə ˈerər ˈmesədʒ ɪn ðə ˈkɑːnsoʊl sez ˌʌndɪˈfaɪnd ɪz nɑːt ə ˈfʌŋkʃən/ | 控制台里的报错是 "undefined is not a function"。
This started after the last release. | /ðɪs ˈstɑːrtɪd ˈæftər ðə læst riˈliːs/ | 这是从上次发布之后开始的。
It looks like a regression from the latest build. | /ɪt lʊks laɪk ə rəˈɡreʃən frʌm ðə ˈleɪtəst bɪld/ | 看起来是最新版本引入的回归问题。
```

> [!CAUTION] 千万别这样说
> **"The system has a bug, please fix it."** 太模糊，开发无从下手。
> 改成：**"Searching with an empty keyword returns a 500 error. Steps to reproduce are below."**
> 另外，不要写 "the bug is on you / your code"，bug 报告只描述现象，不指责人。

## 二、追问更多信息

收到一份不完整的报告，先客气地问，把要的东西列清楚。

```phrases
Could you provide more details? | /kʊd juː prəˈvaɪd mɔːr dɪˈteɪlz/ | 你能提供更多细节吗？
Can you share the exact steps you took? | /kæn juː ʃer ðə ɪɡˈzækt steps juː tʊk/ | 你能说一下你具体的操作步骤吗？
What were you expecting to happen? | /wʌt wɜːr juː ɪkˈspektɪŋ tuː ˈhæpən/ | 你原本期望发生什么？
Which environment did you see this in? | /wɪtʃ ɪnˈvaɪrənmənt dɪd juː siː ðɪs ɪn/ | 你是在哪个环境看到这个问题的？
Do you have the request ID or the timestamp? | /duː juː hæv ðə rɪˈkwest ɪd ɔːr ðə ˈtaɪmstæmp/ | 你有请求 ID 或者时间点吗？ | 有时间点和 request ID，查日志快很多
Could you attach the logs from the time of the error? | /kʊd juː əˈtætʃ ðə lɔːɡz frʌm ðə taɪm ʌv ðə ˈerər/ | 你能附上出错时间段的日志吗？
Is it reproducible on production, or only on staging? | /ɪz ɪt ˌriːprəˈduːsəbəl ɑːn prəˈdʌkʃən ɔːr ˈoʊnli ɑːn ˈsteɪdʒɪŋ/ | 生产环境能复现吗，还是只在预发环境有？
Did it work before? When did it stop working? | /dɪd ɪt wɜːrk bɪˈfɔːr wen dɪd ɪt stɑːp ˈwɜːrkɪŋ/ | 之前是正常的吗？什么时候开始不行的？
Does this happen for all users or just one account? | /dʌz ðɪs ˈhæpən fɔːr ɔːl ˈjuːzərz ɔːr dʒʌst wʌn əˈkaʊnt/ | 是所有用户都这样，还是只有某个账号？
```

## 三、分级：严重程度与优先级

```phrases
What's the severity of this bug? | /wʌts ðə sɪˈverɪti ʌv ðɪs bʌɡ/ | 这个 bug 的严重程度是什么？
This is a blocker. Users can't log in at all. | /ðɪs ɪz ə ˈblɑːkər ˈjuːzərz kænt lɔːɡ ɪn æt ɔːl/ | 这是阻塞级问题，用户完全无法登录。 | blocker 通常对应最高级别
I'd classify it as high severity, but low priority. | /aɪd ˈklæsəˌfaɪ ɪt æz haɪ sɪˈverɪti bʌt loʊ praɪˈɔːrəti/ | 我把它定为严重程度高，但优先级低。 | 严重程度看影响，优先级看业务时间表
It's a minor cosmetic issue. The button is misaligned. | /ɪts ə ˈmaɪnər kɑːzˈmetɪk ˈɪʃu ðə ˈbʌtən ɪz ˌmɪsəˈlaɪnd/ | 这是个小的界面问题，按钮没对齐。 | cosmetic = 只影响外观
It only affects a small number of users. | /ɪt ˈoʊnli əˈfekts ə smɔːl ˈnʌmbər ʌv ˈjuːzərz/ | 它只影响很少一部分用户。
Is there a workaround? | /ɪz ðer ə ˈwɜːrkəraʊnd/ | 有临时的绕过办法吗？
The workaround is to refresh the page. | /ðə ˈwɜːrkəraʊnd ɪz tuː rɪˈfreʃ ðə peɪdʒ/ | 绕过的办法是刷新页面。
We'll triage this in tomorrow's bug review. | /wiːl ˈtraɪɪdʒ ðɪs ɪn təˈmɑːˌroʊz bʌɡ ˌriːˈvjuː/ | 我们明天的 bug 评审会上分诊这个问题。 | triage = 分诊，先排序再分配
Let's fix this in the next sprint. | /lets fɪks ðɪs ɪn ðə nekst sprɪnt/ | 我们在下个迭代修它吧。
This needs to be fixed before the release. | /ðɪs niːdz tuː biː fɪkst bɪˈfɔːr ðə riˈliːs/ | 这个必须在发布前修好。
```

> [!TIP] Severity 和 priority 的区别
> - **Severity high / priority low**：公司年报页面在极少见的浏览器上崩溃，影响大，但没几个人碰到。
> - **Severity low / priority high**：官网首页公司名拼错了，影响小，但老板要求今天改。
>
> 在站会上先说影响面（谁受影响、多少人），再说你建议的优先级。

## 四、复现不了，缩小范围

```phrases
I can't reproduce this on my machine. | /aɪ kænt ˌriːprəˈduːs ðɪs ɑːn maɪ məˈʃiːn/ | 我在我这儿复现不了。 | 比 It works on my machine 更友好，后者带点推卸的意思
It works on my machine, but I'd like to find out why. | /ɪt wɜːrks ɑːn maɪ məˈʃiːn bʌt aɪd laɪk tuː faɪnd aʊt waɪ/ | 在我机器上是好的，但我想搞清楚原因。 | 同事之间可以开玩笑说，但要接着往下查
Could you walk me through exactly what you did? | /kʊd juː wɔːk miː θruː ɪɡˈzæktli wʌt juː dɪd/ | 你能带我走一遍你具体的操作吗？
Let's compare our environments. | /lets kəmˈper ˈaʊər ɪnˈvaɪrənmənts/ | 我们对比一下环境吧。
Are you using the same version of the app? | /ɑːr juː ˈjuːzɪŋ ðə seɪm ˈvɜːrʒən ʌv ðə æp/ | 你用的是同一个版本吗？
Maybe it depends on the data. Which account did you use? | /ˈmeɪbi ɪt dɪˈpendz ɑːn ðə ˈdeɪtə wɪtʃ əˈkaʊnt dɪd juː juːs/ | 可能和数据有关，你用的是哪个账号？
Let me try again with your test data. | /let miː traɪ əˈɡen wɪð jɔːr test ˈdeɪtə/ | 我用你的测试数据再试一次。
I'll add more logging to find out where it fails. | /aɪl æd mɔːr ˈlɔːɡɪŋ tuː faɪnd aʊt wer ɪt feɪlz/ | 我加一些日志，看看它是在哪里失败的。
It looks like it only happens under heavy load. | /ɪt lʊks laɪk ɪt ˈoʊnli ˈhæpənz ˈʌndər ˈhevi loʊd/ | 看起来只在高负载下出现。
I've narrowed it down to the payment service. | /aɪv ˈneroʊd ɪt daʊn tuː ðə ˈpeɪmənt ˈsɜːrvəs/ | 我已经把范围缩小到支付服务了。
Can we bisect to find the commit that broke it? | /kæn wiː baɪˈsekt tuː faɪnd ðə kəˈmɪt ðæt broʊk ɪt/ | 我们能用 bisect 找出是哪个 commit 弄坏的吗？ | bisect = 二分查找，git bisect 的常见说法
```

## 五、根因、修复与验证

```phrases
I found the root cause. | /aɪ faʊnd ðə ruːt kɑːz/ | 我找到根因了。
The root cause is a race condition in the cache update. | /ðə ruːt kɑːz ɪz ə reɪs kənˈdɪʃən ɪn ðə kæʃ əpˈdeɪt/ | 根因是缓存更新里的竞态条件。
We forgot to handle the case where the list is empty. | /wiː fərˈɡɑːt tuː ˈhændəl ðə keɪs wer ðə lɪst ɪz ˈempti/ | 我们漏掉了列表为空的情况。
It's a one-line fix. | /ɪts ə wʌn laɪn fɪks/ | 只需要改一行。
The fix is in the PR. Could you review it? | /ðə fɪks ɪz ɪn ðə ˌpiː ˈɑːr kʊd juː ˌriːˈvjuː ɪt/ | 修复在这个 PR 里，你能 review 一下吗？
The fix is deployed to staging. Could you verify it? | /ðə fɪks ɪz dɪˈplɔɪd tuː ˈsteɪdʒɪŋ kʊd juː ˈverəˌfaɪ ɪt/ | 修复已部署到预发环境，你能验证一下吗？
I've verified the fix. The order goes through now. | /aɪv ˈverəˌfaɪd ðə fɪks ðə ˈɔːrdər ɡoʊz θruː naʊ/ | 我验证了修复，订单现在能正常提交了。
Let's add a regression test so this doesn't happen again. | /lets æd ə rəˈɡreʃən test soʊ ðɪs ˈdʌzənt ˈhæpən əˈɡen/ | 我们加一个回归测试，避免再次发生。
This is a duplicate of ticket one two three. | /ðɪs ɪz ə ˈduːpləkət ʌv ˈtɪkət wʌn tuː θriː/ | 这是工单一二三的重复问题。 | 数字这样读，见页面规范
This is working as designed. | /ðɪs ɪz ˈwɜːrkɪŋ æz dɪˈzaɪnd/ | 这是按设计工作的，不是 bug。 | 常见的关单理由，最好附上说明
I'm closing this ticket. Please reopen it if it happens again. | /aɪm ˈkloʊzɪŋ ðɪs ˈtɪkət pliːz riˈoʊpən ɪt ɪf ɪt ˈhæpənz əˈɡen/ | 我先关闭这个工单，如果再出现请重新打开。
```

## 六、对话

```dialog
title: QA 提交 bug，开发追问
QA: I found a bug. Search crashes when the keyword is empty. | /aɪ faʊnd ə bʌɡ sɜːrtʃ ˈkræʃɪz wen ðə ˈkiːˌwɜːrd ɪz ˈempti/ | 我发现一个 bug，搜索关键词为空时会崩溃。
Dev: Thanks. Can you share the steps? | /θæŋks kæn juː ʃer ðə steps/ | 谢谢，能说一下步骤吗？
QA: Open the search page, leave the box empty, and click Search. | /ˈoʊpən ðə sɜːrtʃ peɪdʒ liːv ðə bɑːks ˈempti ənd klɪk sɜːrtʃ/ | 打开搜索页，输入框留空，点搜索。
Dev: What do you see? | /wʌt duː juː siː/ | 你看到什么？
QA: A white screen. The console shows a null pointer error. | /ə waɪt skriːn ðə ˈkɑːnsoʊl ʃoʊz ə nʌl ˈpɔɪntər ˈerər/ | 白屏，控制台里有空指针错误。
Dev: Which environment is this? | /wɪtʃ ɪnˈvaɪrənmənt ɪz ðɪs/ | 是哪个环境？
QA: Staging, version two point four point one. I attached a screenshot. | /ˈsteɪdʒɪŋ ˈvɜːrʒən tuː pɔɪnt fɔːr pɔɪnt wʌn aɪ əˈtætʃt ə ˈskriːnˌʃɑːt/ | 预发环境，版本二点四点一，我附了截图。
Dev: Got it. I can reproduce it. I'll fix it today. | /ɡɑːt ɪt aɪ kæn ˌriːprəˈduːs ɪt aɪl fɪks ɪt təˈdeɪ/ | 明白了，我能复现，今天就修。
```

```dialog
title: 在我机器上没问题
Dev: I can't reproduce your bug. It works on my machine. | /aɪ kænt ˌriːprəˈduːs jɔːr bʌɡ ɪt wɜːrks ɑːn maɪ məˈʃiːn/ | 我复现不了你的 bug，在我机器上是好的。
QA: Interesting. I see it every time on staging. | /ˈɪntrəstɪŋ aɪ siː ɪt ˈevəri taɪm ɑːn ˈsteɪdʒɪŋ/ | 有意思，我在预发环境每次都能看到。
Dev: Which account are you using? | /wɪtʃ əˈkaʊnt ɑːr juː ˈjuːzɪŋ/ | 你用的哪个账号？
QA: The test account with the premium plan. | /ðə test əˈkaʊnt wɪð ðə ˈpriːmiəm plæn/ | 那个高级套餐的测试账号。
Dev: Ah, I was using a free account. Maybe it depends on the plan. | /ɑː aɪ wɑːz ˈjuːzɪŋ ə friː əˈkaʊnt ˈmeɪbi ɪt dɪˈpendz ɑːn ðə plæn/ | 啊，我用的是免费账号，可能跟套餐有关。
QA: That makes sense. Premium users have extra fields. | /ðæt meɪks sens ˈpriːmiəm ˈjuːzərz hæv ˈekstrə fiːldz/ | 有道理，高级用户多几个字段。
Dev: Let me try with your account and check the logs. | /let miː traɪ wɪð jɔːr əˈkaʊnt ənd tʃek ðə lɔːɡz/ | 我用你的账号试一下，顺便看日志。
QA: Thanks. I'll send you the exact time of the error. | /θæŋks aɪl send juː ðə ɪɡˈzækt taɪm ʌv ðə ˈerər/ | 谢谢，我把出错的准确时间发给你。
```

```dialog
title: Bug 分诊会
PM: Let's go through the open bugs. What's the first one? | /lets ɡoʊ θruː ðə ˈoʊpən bʌɡz wʌts ðə fɜːrst wʌn/ | 我们过一下未解决的 bug，第一个是什么？
QA: The export button fails for large files. It's high severity. | /ðə ˈekspɔːrt ˈbʌtən feɪlz fɔːr lɑːrdʒ faɪlz ɪts haɪ sɪˈverɪti/ | 导出按钮对大文件会失败，严重程度高。
PM: How many users does it affect? | /haʊ ˈmeni ˈjuːzərz dʌz ɪt əˈfekt/ | 影响多少用户？
Dev: Only enterprise customers. Most of them use small files. | /ˈoʊnli ˈentərˌpraɪz ˈkʌstəmərz moʊst ʌv ðem juːs smɔːl faɪlz/ | 只有企业客户，他们大多用小文件。
PM: Is there a workaround? | /ɪz ðer ə ˈwɜːrkəraʊnd/ | 有绕过办法吗？
Dev: They can split the file into smaller parts. | /ðeɪ kæn splɪt ðə faɪl ˈɪntu ˈsmɔːlər pɑːrts/ | 他们可以把文件拆小。
PM: Okay. Let's make it medium priority and fix it next sprint. | /ˌoʊˈkeɪ lets meɪk ɪt ˈmiːdiəm praɪˈɔːrəti ənd fɪks ɪt nekst sprɪnt/ | 好，优先级定中等，下个迭代修。
QA: Fine. I'll update the ticket. | /faɪn aɪl əpˈdeɪt ðə ˈtɪkət/ | 好，我来更新工单。
```

```dialog
title: 验证修复和回归
Dev: The fix for the search bug is on staging now. | /ðə fɪks fɔːr ðə sɜːrtʃ bʌɡ ɪz ɑːn ˈsteɪdʒɪŋ naʊ/ | 搜索 bug 的修复已经在预发环境了。
QA: Great. I'll test it this afternoon. | /ɡreɪt aɪl test ɪt ðɪs ˌæftərˈnuːn/ | 太好了，我今天下午测。
Dev: Please also check the filter. I touched the same code. | /pliːz ˈɔːlsoʊ tʃek ðə ˈfɪltər aɪ tʌtʃt ðə seɪm koʊd/ | 也请测一下筛选功能，我动了同一段代码。
QA: Sure. I'll run the regression suite too. | /ʃʊr aɪl rʌn ðə rəˈɡreʃən swiːt tuː/ | 好，我也会跑一遍回归测试。
QA: The search works now, but the filter breaks with special characters. | /ðə sɜːrtʃ wɜːrks naʊ bʌt ðə ˈfɪltər breɪks wɪð ˈspeʃəl ˈkærəktərz/ | 搜索现在正常了，但筛选遇到特殊字符会出错。
Dev: Oh no, that's a regression from my change. | /oʊ noʊ ðæts ə rəˈɡreʃən frʌm maɪ tʃeɪndʒ/ | 糟了，这是我的改动引入的回归。
QA: No problem. I'll reopen the ticket and add the details. | /noʊ ˈprɑːbləm aɪl riˈoʊpən ðə ˈtɪkət ənd æd ðə dɪˈteɪlz/ | 没关系，我重新打开工单并补上细节。
Dev: Thanks. I'll fix it and add a test for it. | /θæŋks aɪl fɪks ɪt ənd æd ə test fɔːr ɪt/ | 谢谢，我来修并加个测试。
```

> [!QUESTION] 想检验自己：你收到一份只写了「页面打不开」的 bug，怎么礼貌地追问？
> ```phrases
> Could you share the exact steps and the error message you saw? | /kʊd juː ʃer ðə ɪɡˈzækt steps ənd ðə ˈerər ˈmesədʒ juː sɔː/ | 你能说一下具体步骤和你看到的报错信息吗？
> ```

> [!QUESTION] 想检验自己：怎么向同事说「我在我这里复现不了，想对比一下环境」？
> ```phrases
> I can't reproduce this on my machine. Let's compare our environments. | /aɪ kænt ˌriːprəˈduːs ðɪs ɑːn maɪ məˈʃiːn lets kəmˈper ˈaʊər ɪnˈvaɪrənmənts/ | 我在我这儿复现不了，我们对比一下环境吧。
> ```

> [!QUESTION] 想检验自己：怎么表达「这个 bug 影响很大，但只有很少用户碰到，所以优先级不高」？
> ```phrases
> The severity is high, but the priority is low because it affects very few users. | /ðə sɪˈverɪti ɪz haɪ bʌt ðə praɪˈɔːrəti ɪz loʊ bɪˈkɔːz ɪt əˈfekts ˈveri fjuː ˈjuːzərz/ | 严重程度高，但只影响很少用户，所以优先级低。
> ```
