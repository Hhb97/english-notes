---
level: 入门
summary: 每日站会的 yesterday / today / blockers 模板、进度动词、阻塞与求助说法，以及 Slack 异步站会的写法。
tags: [站会, 进度, 阻塞, 敏捷, 入门]
---

# 每日站会 Daily Standup

> [!ABSTRACT]
> - 站会只讲三件事：**Yesterday（昨天做了什么）、Today（今天做什么）、Blockers（卡在哪）**，每人一分钟以内。
> - 进度动词要选对：**finished / wrapped up**（完成了）、**still working on**（还在做）、**about to start**（马上开始）。
> - 有阻塞就直说 **I'm blocked by…**，并且说清楚你需要谁、需要什么。
> - 不在现场时，用 Slack 发一条三行的异步站会。

## 一、站会的基本模板

美国团队的站会通常十五分钟以内，站着开（stand-up 就是这么来的）。轮到你时，按"昨天、今天、阻塞"三段说完就行。

```phrases
Good morning, everyone. I'll go first. | /ɡʊd ˈmɔːrnɪŋ ˈevriˌwʌn aɪl ɡoʊ fɜːrst/ | 大家早。我先来。
Yesterday I finished the login API. | /ˈjestərˌdeɪ aɪ ˈfɪnɪʃt ðə ˈlɔːˌɡɪn ˌeɪˌpiːˈaɪ/ | 昨天我把登录接口做完了。
Today I'm going to write the unit tests. | /təˈdeɪ aɪm ˈɡoʊɪŋ tuː raɪt ðə ˈjuːnət tests/ | 今天我要写单元测试。
No blockers on my side. | /noʊ ˈblɑːkərz ɑːn maɪ saɪd/ | 我这边没有阻塞。 | on my side 比 I have no blockers 更自然
Same as yesterday. I'm still on the payment bug. | /seɪm æz ˈjestərˌdeɪ aɪm stɪl ɑːn ðə ˈpeɪmənt bʌɡ/ | 跟昨天一样，我还在查那个支付 bug。
Yesterday I fixed two bugs and reviewed three pull requests. | /ˈjestərˌdeɪ aɪ fɪkst tuː bʌɡz ənd riˈvjuːd θriː pʊl rɪˈkwests/ | 昨天我修了两个 bug，还 review 了三个 PR。
Today I'll pick up the next ticket in the sprint. | /təˈdeɪ aɪl pɪk ʌp ðə nekst ˈtɪkət ɪn ðə sprɪnt/ | 今天我会接着做 sprint 里的下一个工单。 | pick up 指"领取并开始做"
That's it from me. | /ðæts ɪt frʌm miː/ | 我说完了。 | 结束时的固定说法，把话筒交给下一位
Over to you, Anna. | /ˈoʊvər tuː juː ˈænə/ | 轮到你了，Anna。
Nothing new to report. | /ˈnʌθɪŋ nuː tuː riˈpɔːrt/ | 没有什么新进展要汇报。
```

> [!TIP] 三段式就是你的脚手架
> 紧张的时候不要即兴发挥，先在心里过一遍：**Yesterday… Today… Blockers…**。把名词换成你自己的任务就行，比如 login API → search index、payment bug → flaky test。

## 二、进度动词：做完了、做到哪了、要开始了

同样是"做完"，不同动词的感觉不一样。**finished** 最中性，**wrapped up** 是"收尾完成"，**shipped / merged / deployed** 说明已经上线或合入。

```phrases
I finished the database migration yesterday. | /aɪ ˈfɪnɪʃt ðə ˈdeɪtəˌbeɪs maɪˈɡreɪʃən ˈjestərˌdeɪ/ | 我昨天做完了数据库迁移。
I wrapped up the code review for the search feature. | /aɪ ræpt ʌp ðə koʊd ˌriːˈvjuː fɔːr ðə sɜːrtʃ ˈfiːtʃər/ | 我把搜索功能的 code review 收尾了。 | wrap up 带有"最后收个尾"的意思
I merged the pull request this morning. | /aɪ mɜːrdʒd ðə pʊl rɪˈkwest ðɪs ˈmɔːrnɪŋ/ | 我今天早上合并了那个 PR。
We deployed the hotfix last night. | /wiː dɪˈplɔɪd ðə ˈhɑːtfɪks læst naɪt/ | 我们昨晚部署了热修复。
I'm still working on the caching layer. | /aɪm stɪl ˈwɜːrkɪŋ ɑːn ðə ˈkæʃɪŋ ˈleɪər/ | 我还在做缓存层。
I'm about halfway through the refactor. | /aɪm əˈbaʊt ˈhæfˈweɪ θruː ðə riːˈfæktər/ | 重构大概做了一半。
I'm about to start on the dashboard. | /aɪm əˈbaʊt tuː stɑːrt ɑːn ðə ˈdæʃˌbɔːrd/ | 我马上要开始做仪表盘了。
I'm waiting on review for my pull request. | /aɪm ˈweɪtɪŋ ɑːn ˌriːˈvjuː fɔːr maɪ pʊl rɪˈkwest/ | 我的 PR 在等人 review。 | wait on review 是固定搭配，不用写 wait for
I'm waiting on a response from the design team. | /aɪm ˈweɪtɪŋ ɑːn ə rɪˈspɑːns frʌm ðə dɪˈzaɪn tiːm/ | 我在等设计团队的回复。
I got pulled into an incident yesterday, so I didn't make much progress. | /aɪ ɡɑːt pʊld ˈɪntu æn ˈɪnsədənt ˈjestərˌdeɪ soʊ aɪ ˈdɪdənt meɪk mʌtʃ ˈprɑːˌɡres/ | 昨天被拉去处理线上事故，所以没什么进展。 | get pulled into 表示被临时叫去做别的事
I spent most of yesterday debugging a flaky test. | /aɪ spent moʊst ʌv ˈjestərˌdeɪ diˈbʌɡɪŋ ə ˈfleɪki test/ | 昨天大部分时间都在排查一个不稳定的测试。
I made good progress on the API. | /aɪ meɪd ɡʊd ˈprɑːˌɡres ɑːn ðə ˌeɪˌpiːˈaɪ/ | 接口这块进展不错。
I'm making progress, but it's slower than I expected. | /aɪm ˈmeɪkɪŋ ˈprɑːˌɡres bʌt ɪts ˈsloʊər ðæn aɪ ɪkˈspektəd/ | 在推进，但比预期慢。
I haven't started on that yet. | /aɪ ˈhævənt ˈstɑːrtɪd ɑːn ðæt jet/ | 那个我还没开始。
```

### 单词卡：站会里的高频词

```words
standup | /ˈstændʌp/ | n. 站会 | We have standup every day at ten. | /wiː hæv ˈstændʌp ˈevəri deɪ æt ten/ | 我们每天十点开站会。
blocker | /ˈblɑːkər/ | n. 阻塞项，卡住进度的事 | The missing API key is my only blocker. | /ðə ˈmɪsɪŋ ˌeɪˌpiːˈaɪ kiː ɪz maɪ ˈoʊnli ˈblɑːkər/ | 缺少 API 密钥是我唯一的阻塞。
ticket | /ˈtɪkət/ | n. 工单，任务单 | I closed three tickets yesterday. | /aɪ kloʊzd θriː ˈtɪkəts ˈjestərˌdeɪ/ | 我昨天关掉了三个工单。
sprint | /sprɪnt/ | n. 冲刺（敏捷迭代周期） | We have five days left in the sprint. | /wiː hæv faɪv deɪz left ɪn ðə sprɪnt/ | 这个 sprint 还剩五天。
wrap up | /ræp ʌp/ | phr. 收尾，完成 | I'll wrap up the tests by noon. | /aɪl ræp ʌp ðə tests baɪ nuːn/ | 我中午前把测试收尾。
pick up | /pɪk ʌp/ | phr. 接手，开始做 | I can pick up that ticket tomorrow. | /aɪ kæn pɪk ʌp ðæt ˈtɪkət təˈmɑːˌroʊ/ | 我明天可以接那个工单。
carry over | /ˈkæri ˈoʊvər/ | phr. 顺延到下一个周期 | We had to carry over two tickets to the next sprint. | /wiː hæd tuː ˈkæri ˈoʊvər tuː ˈtɪkəts tuː ðə nekst sprɪnt/ | 我们不得不把两个工单顺延到下个 sprint。
```

## 三、阻塞：说清楚卡在哪、需要谁

阻塞的说法有轻重：**stuck on**（自己卡住了，还没想通）、**blocked by**（被别人或别的事挡住了）、**waiting for / depends on**（依赖外部）。说完阻塞，一定要接一句"我需要什么"。

```phrases
I'm stuck on a weird timeout error. | /aɪm stʌk ɑːn ə wɪrd ˈtaɪˌmaʊt ˈerər/ | 我被一个奇怪的超时错误卡住了。 | stuck on 偏向自己没思路
I'm blocked by the staging environment. It's down again. | /aɪm blɑːkt baɪ ðə ˈsteɪdʒɪŋ ɪnˈvaɪrənmənt ɪts daʊn əˈɡen/ | 我被测试环境卡住了，它又挂了。 | blocked by 偏向外部原因
I'm blocked until the backend team finishes the endpoint. | /aɪm blɑːkt ənˈtɪl ðə ˈbækend tiːm ˈfɪnɪʃɪz ðə ˈendˌpɔɪnt/ | 后端团队把接口做完之前，我都动不了。
I'm waiting for access to the production logs. | /aɪm ˈweɪtɪŋ fɔːr ˈækˌses tuː ðə prəˈdʌkʃən lɔːɡz/ | 我在等生产日志的访问权限。
My task depends on the schema change from Tom. | /maɪ tæsk dɪˈpendz ɑːn ðə ˈskiːmə tʃeɪndʒ frʌm tɑːm/ | 我的任务依赖 Tom 的表结构变更。
The build has been failing since yesterday, and I can't figure out why. | /ðə bɪld hæz bɪn ˈfeɪlɪŋ sɪns ˈjestərˌdeɪ ənd aɪ kænt ˈfɪɡjər aʊt waɪ/ | 构建从昨天起一直失败，我找不到原因。
I need a decision from product before I can continue. | /aɪ niːd ə dɪˈsɪʒən frʌm ˈprɑːdəkt bɪˈfɔːr aɪ kæn kənˈtɪnju/ | 我需要产品给个决定才能继续。
It's not a blocker yet, but it could become one. | /ɪts nɑːt ə ˈblɑːkər jet bʌt ɪt kʊd bɪˈkʌm wʌn/ | 现在还不算阻塞，但可能会变成阻塞。 | 提前预警，很受管理者欢迎
This might slow me down, so I wanted to flag it. | /ðɪs maɪt sloʊ miː daʊn soʊ aɪ ˈwɔːntɪd tuː flæɡ ɪt/ | 这可能会拖慢我，所以想提前说一声。 | flag it 就是"提出来让大家知道"
```

> [!WARNING] 不要把阻塞藏起来
> 很多中国同事习惯"自己再想想办法"，一个人卡了两天才开口。在美国团队里，这会被看作风险没有暴露。**卡住超过半天，就在站会上说出来**，没人会觉得你能力差。

### 单词卡：阻塞相关

```words
stuck | /stʌk/ | adj. 卡住的 | I'm stuck on a failing integration test. | /aɪm stʌk ɑːn ə ˈfeɪlɪŋ ˌɪntəˈɡreɪʃən test/ | 我被一个失败的集成测试卡住了。
blocked | /blɑːkt/ | adj. 被阻塞的 | I'm blocked on the design review. | /aɪm blɑːkt ɑːn ðə dɪˈzaɪn ˌriːˈvjuː/ | 我被设计评审卡住了。
depend on | /dɪˈpend ɑːn/ | phr. 依赖于 | The release depends on the security review. | /ðə riˈliːs dɪˈpendz ɑːn ðə sɪˈkjʊrəti ˌriːˈvjuː/ | 这次发布依赖安全评审。
unblock | /ʌnˈblɑːk/ | v. 解除阻塞 | Can someone unblock me on the access request? | /kæn ˈsʌmˌwʌn ʌnˈblɑːk miː ɑːn ðə ˈækˌses rɪˈkwest/ | 谁能帮我解决一下那个权限申请？
workaround | /ˈwɜːrkəraʊnd/ | n. 临时绕过方案 | I found a workaround, but it's not ideal. | /aɪ faʊnd ə ˈwɜːrkəraʊnd bʌt ɪts nɑːt aɪˈdiːl/ | 我找到了一个临时办法，但不太理想。
```

## 四、求助：别人能怎么帮你

站会最大的价值之一就是找到能帮你的人。求助时说明你卡在哪、想要多少时间。

```phrases
Does anyone have experience with Kafka consumer groups? | /dʌz ˈeniˌwʌn hæv ɪkˈspɪriəns wɪð ˈkɑːfkə kənˈsuːmər ɡruːps/ | 有人用过 Kafka 的消费者组吗？
Could someone help me with this after standup? | /kʊd ˈsʌmˌwʌn help miː wɪð ðɪs ˈæftər ˈstændʌp/ | 站会后有人能帮我看一下吗？
Ming, do you have ten minutes to look at this with me? | /mɪŋ duː juː hæv ten ˈmɪnəts tuː lʊk æt ðɪs wɪð miː/ | Ming，你有十分钟跟我一起看看这个吗？
I could use a second pair of eyes on this. | /aɪ kʊd juːs ə ˈsekənd per ʌv aɪz ɑːn ðɪs/ | 这个我需要另一个人帮我看看。 | a second pair of eyes 指"找人复查"
Can we pair on this later today? | /kæn wiː per ɑːn ðɪs ˈleɪtər təˈdeɪ/ | 我们今天晚些时候能结对做一下吗？ | pair 在这里是动词，指结对编程
Who owns the notification service? | /huː oʊnz ðə ˌnoʊtəfəˈkeɪʃən ˈsɜːrvəs/ | 通知服务是谁负责的？
I'll follow up with Sarah after this. | /aɪl ˈfɑːloʊ ʌp wɪð ˈserə ˈæftər ðɪs/ | 会后我去找 Sarah 跟进。
Let's take that offline. | /lets teɪk ðæt ˈɔːˌflaɪn/ | 这个我们会后单独聊。 | 站会里的万能收尾句，避免讨论拖长
```

## 五、保持简短

站会不是详细汇报。控制在三四句话，细节会后聊。

```phrases
I'll keep it short. | /aɪl kiːp ɪt ʃɔːrt/ | 我简单说。
To make a long story short, it's fixed. | /tuː meɪk ə lɔːŋ ˈstɔːri ʃɔːrt ɪts fɪkst/ | 长话短说，已经修好了。
I can give more details after standup. | /aɪ kæn ɡɪv mɔːr dɪˈteɪlz ˈæftər ˈstændʌp/ | 细节我可以会后再说。
We're going a bit long. Let's wrap up. | /wiːr ˈɡoʊɪŋ ə bɪt lɔːŋ lets ræp ʌp/ | 我们有点超时了，收一收吧。 | 主持人常用
Let's stay focused on yesterday, today, and blockers. | /lets steɪ ˈfoʊkəst ɑːn ˈjestərˌdeɪ təˈdeɪ ənd ˈblɑːkərz/ | 我们还是聚焦在昨天、今天和阻塞上。
Can we move this to a separate meeting? | /kæn wiː muːv ðɪs tuː ə ˈsepərˌeɪt ˈmiːtɪŋ/ | 我们能把这个挪到单独的会议上吗？
Quick update: I'm done with the migration script. | /kwɪk əpˈdeɪt aɪm dʌn wɪð ðə maɪˈɡreɪʃən skrɪpt/ | 简短更新：迁移脚本我做完了。
```

> [!CAUTION] 别说"I have no problem"
> 被问 Any blockers? 时，中式回答常是 **No problem.** 或 **I have no problem.**，听起来像"没有问题"，但也可能被理解成答非所问。更自然的是：**No blockers.** / **Nothing blocking me.** / **I'm good.**

## 六、Slack 上的异步站会

团队跨时区或者远程办公时，常在 Slack 频道里发一条异步站会。格式固定，三行就行，别人扫一眼就懂。

```text
Standup - Wednesday
Yesterday: Finished the login API and reviewed Tom's PR.
Today: Writing unit tests, then starting on the password reset flow.
Blockers: Waiting on the QA environment. Pinged Sarah.
```

```phrases
Here's my async standup for today. | /hɪrz maɪ ˈeɪsɪŋk ˈstændʌp fɔːr təˈdeɪ/ | 这是我今天的异步站会更新。
Yesterday: finished the search API and fixed two bugs. | /ˈjestərˌdeɪ ˈfɪnɪʃt ðə sɜːrtʃ ˌeɪˌpiːˈaɪ ənd fɪkst tuː bʌɡz/ | 昨天：做完搜索接口，修了两个 bug。
Today: writing tests and picking up the next ticket. | /təˈdeɪ ˈraɪtɪŋ tests ənd ˈpɪkɪŋ ʌp ðə nekst ˈtɪkət/ | 今天：写测试，然后接下一个工单。
Blockers: none. | /ˈblɑːkərz nʌn/ | 阻塞：无。
Blockers: waiting on access to the staging database. | /ˈblɑːkərz ˈweɪtɪŋ ɑːn ˈækˌses tuː ðə ˈsteɪdʒɪŋ ˈdeɪtəˌbeɪs/ | 阻塞：在等测试库的访问权限。
I'm out tomorrow, so this is my last update this week. | /aɪm aʊt təˈmɑːˌroʊ soʊ ðɪs ɪz maɪ læst əpˈdeɪt ðɪs wiːk/ | 我明天不在，所以这是我这周最后一次更新。
Heads up: I'll be offline from two to four this afternoon. | /hedz ʌp aɪl biː ˈɔːˌflaɪn frʌm tuː tuː fɔːr ðɪs ˌæftərˈnuːn/ | 提醒一下：我今天下午两点到四点不在线。 | heads up 是"提前打个招呼"
Thanks for the update, everyone. | /θæŋks fɔːr ðə əpˈdeɪt ˈevriˌwʌn/ | 谢谢大家的更新。
```

## 七、对话

### 正常的一天

```dialog
title: 一切顺利的站会
Lead: Morning, Ming. What did you work on yesterday? | /ˈmɔːrnɪŋ mɪŋ wʌt dɪd juː wɜːrk ɑːn ˈjestərˌdeɪ/ | 早啊，Ming。你昨天做了什么？
Ming: I finished the search API and got it merged. | /aɪ ˈfɪnɪʃt ðə sɜːrtʃ ˌeɪˌpiːˈaɪ ənd ɡɑːt ɪt mɜːrdʒd/ | 我把搜索接口做完并合进去了。
Lead: Nice. And today? | /naɪs ənd təˈdeɪ/ | 不错。今天呢？
Ming: Today I'll write the integration tests and update the docs. | /təˈdeɪ aɪl raɪt ðə ˌɪntəˈɡreɪʃən tests ənd əpˈdeɪt ðə dɑːks/ | 今天我写集成测试，再更新一下文档。
Lead: Any blockers? | /ˈeni ˈblɑːkərz/ | 有阻塞吗？
Ming: No blockers on my side. | /noʊ ˈblɑːkərz ɑːn maɪ saɪd/ | 我这边没有阻塞。
Lead: Great. Anna, you're up. | /ɡreɪt ˈænə jʊr ʌp/ | 好。Anna，轮到你了。
Ming: That's it from me. | /ðæts ɪt frʌm miː/ | 我说完了。
```

### 有阻塞的一天

```dialog
title: 汇报阻塞并求助
Lead: Anna, how's the notification feature going? | /ˈænə haʊz ðə ˌnoʊtəfəˈkeɪʃən ˈfiːtʃər ˈɡoʊɪŋ/ | Anna，通知功能进展怎么样？
Anna: I'm about eighty percent done, but I'm blocked on one thing. | /aɪm əˈbaʊt ˈeɪti pərˈsent dʌn bʌt aɪm blɑːkt ɑːn wʌn θɪŋ/ | 大概做了八成，但有一件事卡住了。
Lead: What's the blocker? | /wʌts ðə ˈblɑːkər/ | 卡在哪？
Anna: The message queue in staging keeps timing out. | /ðə ˈmesədʒ kjuː ɪn ˈsteɪdʒɪŋ kiːps ˈtaɪmɪŋ aʊt/ | 测试环境的消息队列一直超时。
Lead: Have you talked to the infrastructure team? | /hæv juː tɔːkt tuː ðə ˌɪnfrəˈstrʌktʃər tiːm/ | 你找过基础设施团队了吗？
Anna: I opened a ticket yesterday, but nobody has replied yet. | /aɪ ˈoʊpənd ə ˈtɪkət ˈjestərˌdeɪ bʌt ˈnoʊˌbɑːˌdiː hæz rɪˈplaɪd jet/ | 我昨天提了工单，但还没人回复。
Lead: Okay. I'll ping Tom after standup and get you unblocked. | /ˌoʊˈkeɪ aɪl pɪŋ tɑːm ˈæftər ˈstændʌp ənd ɡet juː ʌnˈblɑːkt/ | 好，站会后我去找 Tom，帮你解决。
Anna: Thanks. Until then, I'll write the tests with a mock. | /θæŋks ənˈtɪl ðen aɪl raɪt ðə tests wɪð ə mɑːk/ | 谢谢。在那之前，我先用 mock 写测试。
```

### 有人讲太长

```dialog
title: 有人讲得太久
Lead: Dev, can you give us a quick update on the checkout bug? | /dev kæn juː ɡɪv ʌs ə kwɪk əpˈdeɪt ɑːn ðə ˈtʃeˌkaʊt bʌɡ/ | Dev，能简单说说结账 bug 的进展吗？
Dev: Sure. So it started last week when we changed the cache settings, and then the session handling broke, and... | /ʃʊr soʊ ɪt ˈstɑːrtɪd læst wiːk wen wiː tʃeɪndʒd ðə kæʃ ˈsetɪŋz ənd ðen ðə ˈseʃən ˈhændlɪŋ broʊk ənd/ | 当然。事情是上周我们改了缓存配置，然后会话处理就坏了，然后……
Lead: Sorry to cut in. Let's take the details offline. Is it fixed? | /ˈsɑːri tuː kʌt ɪn lets teɪk ðə dɪˈteɪlz ˈɔːˌflaɪn ɪz ɪt fɪkst/ | 抱歉打断一下，细节会后聊。修好了吗？
Dev: Not yet. I need a few more hours. | /nɑːt jet aɪ niːd ə fjuː mɔːr ˈaʊərz/ | 还没有，还需要几个小时。
Lead: Okay. Any blockers? | /ˌoʊˈkeɪ ˈeni ˈblɑːkərz/ | 好。有阻塞吗？
Dev: No, I just need to finish the fix. | /noʊ aɪ dʒʌst niːd tuː ˈfɪnɪʃ ðə fɪks/ | 没有，我只要把修复做完。
Lead: Perfect. Let's talk after standup if you need help. | /pərˈfekt lets tɔːk ˈæftər ˈstændʌp ɪf juː niːd help/ | 好。需要帮忙的话，站会后聊。
Dev: Will do. Sorry for going long. | /wɪl duː ˈsɑːri fɔːr ˈɡoʊɪŋ lɔːŋ/ | 好的。抱歉说久了。
```

> [!QUESTION] 想检验自己：昨天被拉去处理线上事故，没做完自己的任务，站会上怎么说？
> ```phrases
> I got pulled into an incident yesterday, so I didn't finish my ticket. I'll wrap it up today. | /aɪ ɡɑːt pʊld ˈɪntu æn ˈɪnsədənt ˈjestərˌdeɪ soʊ aɪ ˈdɪdənt ˈfɪnɪʃ maɪ ˈtɪkət aɪl ræp ɪt ʌp təˈdeɪ/ | 昨天被拉去处理线上事故，所以没做完工单，今天我会收尾。
> ```

> [!QUESTION] 想检验自己：怎么说"我在等 PR 被 review，所以暂时动不了"？
> ```phrases
> I'm blocked until my pull request gets reviewed. | /aɪm blɑːkt ənˈtɪl maɪ pʊl rɪˈkwest ɡets riˈvjuːd/ | 我的 PR 被 review 之前我动不了。
> I'm waiting on review, so I'll start the next ticket in the meantime. | /aɪm ˈweɪtɪŋ ɑːn ˌriːˈvjuː soʊ aɪl stɑːrt ðə nekst ˈtɪkət ɪn ðə ˈmiːnˌtaɪm/ | 我在等 review，所以先开始下一个工单。
> ```

> [!QUESTION] 想检验自己：别人讲得太长，主持人怎么礼貌地把话题带走？
> ```phrases
> Let's take the details offline. Can you give us the short version? | /lets teɪk ðə dɪˈteɪlz ˈɔːˌflaɪn kæn juː ɡɪv ʌs ðə ʃɔːrt ˈvɜːrʒən/ | 细节会后聊。你能说下简短版吗？
> ```
