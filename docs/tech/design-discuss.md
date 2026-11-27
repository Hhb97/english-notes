---
level: 深入
summary: 提出技术方案、讨论取舍与替代方案、评审设计文档、追问关键问题、礼貌地否决提案并记录决策的英文表达。
tags: [技术方案, 架构评审, 取舍, 设计文档, ADR, 深入]
---

# 技术方案讨论

> [!ABSTRACT]
> - 提方案的结构：**背景 → 目标 → 方案 → 取舍 → 建议**。先说问题，再说方案，别一上来就讲实现。
> - 评审时多用**问题**代替**判断**：**What happens if the queue backs up?** 比 **This won't scale.** 更容易被接受。
> - 表达担忧的万能句：**My main concern is…**；表达偏好的万能句：**I'd suggest… because…**
> - 否决提案要先肯定、再说理由、最后给出下一步，把「拒绝」变成「改进」。
> - 重要决定要写下来（ADR），包括背景、选项、决定和后果。

## 一、提出方案

先说清楚要解决的问题，再给出方案和你的推荐。

```phrases
Let me walk you through the proposal. | /let miː wɔːk juː θruː ðə prəˈpoʊzəl/ | 我来给大家讲一下这个方案。
The problem we're trying to solve is slow search. | /ðə ˈprɑːbləm wiːr ˈtraɪɪŋ tuː sɑːlv ɪz sloʊ sɜːrtʃ/ | 我们想解决的问题是搜索太慢。
Our goal is to reduce the latency to under two hundred milliseconds. | /ˈaʊər ɡoʊl ɪz tuː rəˈduːs ðə ˈleɪtənsi tuː ˈʌndər tuː ˈhʌndrəd ˈmɪlɪˌsekəndz/ | 我们的目标是把延迟降到两百毫秒以下。
I'm proposing that we move the cache to a separate service. | /aɪm prəˈpoʊzɪŋ ðæt wiː muːv ðə kæʃ tuː ə ˈsepərˌeɪt ˈsɜːrvəs/ | 我建议把缓存迁到一个独立服务里。
I'd suggest we start with a simple approach and iterate. | /aɪd səˈdʒest wiː stɑːrt wɪð ə ˈsɪmpəl əˈproʊtʃ ənd ˈɪtəreɪt/ | 我建议先用简单的方案，再迭代。 | I'd suggest 比 You should 柔和得多
I looked at three options. Here's how they compare. | /aɪ lʊkt æt θriː ˈɑːpʃənz hɪrz haʊ ðeɪ kəmˈper/ | 我看了三个选项，对比如下。
My recommendation is option two, for these reasons. | /maɪ ˌrekəmənˈdeɪʃən ɪz ˈɑːpʃən tuː fɔːr ðiːz ˈriːzənz/ | 我推荐第二个方案，理由如下。
Here's the high-level architecture. | /hɪrz ðə haɪ ˈlevəl ˈɑːrkəˌtektʃər/ | 这是整体架构。 | high-level = 概览层面，不涉及细节
The design doc is in the shared folder. I'd love your feedback. | /ðə dɪˈzaɪn dɑːk ɪz ɪn ðə ʃerd ˈfoʊldər aɪd lʌv jɔːr ˈfiːdˌbæk/ | 设计文档在共享文件夹里，希望听听你们的意见。
```

## 二、取舍：优点、缺点与替代方案

好的设计讨论一定会提到 trade-off（权衡）。说清楚你放弃了什么。

```phrases
There's a trade-off between consistency and availability. | /ðerz ə treɪd ɔːf bɪˈtwiːn kənˈsɪstənsi ənd əˌveɪləˈbɪləti/ | 一致性和可用性之间需要取舍。
The upside is that it's simple. The downside is that it doesn't scale well. | /ðə ˈʌpˈsaɪd ɪz ðæt ɪts ˈsɪmpəl ðə ˈdaʊnˌsaɪd ɪz ðæt ɪt ˈdʌzənt skeɪl wel/ | 好处是简单，坏处是扩展性不好。 | upside / downside 是 pros / cons 的口语版
The main advantage is lower cost. | /ðə meɪn ædˈvæntɪdʒ ɪz ˈloʊər kɑːst/ | 主要优势是成本更低。
The main drawback is the added complexity. | /ðə meɪn ˈdrɔːˌbæk ɪz ðə ˈædəd kəmˈpleksəti/ | 主要的缺点是增加了复杂度。
We're trading some flexibility for speed. | /wiːr ˈtreɪdɪŋ sʌm ˌfleksəˈbɪləti fɔːr spiːd/ | 我们用一部分灵活性换取速度。
An alternative would be to use a message queue. | /æn ɔːlˈtɜːrnətɪv wʊd biː tuː juːs ə ˈmesədʒ kjuː/ | 另一个方案是用消息队列。
What if we used a managed service instead? | /wʌt ɪf wiː juːzd ə ˈmænədʒd ˈsɜːrvəs ˌɪnˈsted/ | 如果我们改用托管服务呢？
We considered that, but it was too expensive. | /wiː kənˈsɪdərd ðæt bʌt ɪt wɑːz tuː ɪkˈspensɪv/ | 我们考虑过，但太贵了。
It's good enough for now, and we can revisit it later. | /ɪts ɡʊd ɪˈnʌf fɔːr naʊ ənd wiː kæn riˈvɪzɪt ɪt ˈleɪtər/ | 目前够用，以后可以再重新评估。 | good enough for now 是务实的态度
Both options would work. It comes down to cost versus maintenance. | /boʊθ ˈɑːpʃənz wʊd wɜːrk ɪt kʌmz daʊn tuː kɑːst ˈvɜːrsəs ˈmeɪntənəns/ | 两个方案都可行，关键在成本和维护的取舍。 | it comes down to = 归根结底取决于
```

## 三、谈论可扩展性、一致性、成本

```phrases
Will this scale to ten times the traffic? | /wɪl ðɪs skeɪl tuː ten taɪmz ðə ˈtræfɪk/ | 这个方案能扛住十倍流量吗？
Where is the bottleneck? | /wer ɪz ðə ˈbɑːtəlˌnek/ | 瓶颈在哪里？
The database will become the bottleneck at around ten thousand requests per second. | /ðə ˈdeɪtəˌbeɪs wɪl bɪˈkʌm ðə ˈbɑːtəlˌnek æt ərˈaʊnd ten ˈθaʊzənd rɪˈkwests pɜːr ˈsekənd/ | 大约每秒一万个请求时，数据库会成为瓶颈。
We can scale horizontally by adding more instances. | /wiː kæn skeɪl ˌhɔːrɪˈzɑːntəli baɪ ˈædɪŋ mɔːr ˈɪnstənsəz/ | 我们可以通过增加实例来横向扩展。
Eventual consistency is fine for this use case. | /əˈventʃuəl kənˈsɪstənsi ɪz faɪn fɔːr ðɪs juːs keɪs/ | 这个场景用最终一致性就够了。
We need strong consistency for payments. | /wiː niːd strɔːŋ kənˈsɪstənsi fɔːr ˈpeɪmənts/ | 支付需要强一致性。
How much would this cost per month? | /haʊ mʌtʃ wʊd ðɪs kɑːst pɜːr mʌnθ/ | 这个每月要花多少钱？
The cost grows linearly with the number of users. | /ðə kɑːst ɡroʊz ˈlɪniərli wɪð ðə ˈnʌmbər ʌv ˈjuːzərz/ | 成本随用户数线性增长。
How will we monitor it? | /haʊ wɪl wiː ˈmɑːnətər ɪt/ | 我们怎么监控它？
What's the rollback plan if it doesn't work? | /wʌts ðə ˈroʊlbæk plæn ɪf ɪt ˈdʌzənt wɜːrk/ | 如果不奏效，回滚方案是什么？
```

## 四、评审设计文档，追问关键问题

提问的目的是帮作者发现盲点。语气要好奇，不要像审问。

```phrases
Thanks for putting this together. It's very clear. | /θæŋks fɔːr ˈpʌtɪŋ ðɪs təˈɡeðər ɪts ˈveri klɪr/ | 谢谢你整理这个，写得很清楚。
Could you clarify what you mean by "real-time"? | /kʊd juː ˈklerəˌfaɪ wʌt juː miːn baɪ riːl taɪm/ | 你能说明一下「实时」具体指什么吗？
What happens if the queue backs up? | /wʌt ˈhæpənz ɪf ðə kjuː bæks ʌp/ | 如果队列积压了会怎样？
What if the third-party service is down? | /wʌt ɪf ðə θɜːrd ˈpɑːrti ˈsɜːrvəs ɪz daʊn/ | 如果第三方服务挂了呢？
How do we handle retries without creating duplicates? | /haʊ duː wiː ˈhændəl riːˈtraɪz wɪˈθaʊt kriˈeɪtɪŋ ˈdjuːpləˌkeɪts/ | 我们怎么处理重试才不产生重复数据？
Have we thought about data migration? | /hæv wiː θɔːt əˈbaʊt ˈdeɪtə maɪˈɡreɪʃən/ | 我们考虑过数据迁移吗？
What are the failure modes? | /wʌt ɑːr ðə ˈfeɪljər moʊdz/ | 有哪些故障模式？
I don't see the security section. Did we cover authentication? | /aɪ doʊnt siː ðə sɪˈkjʊrəti ˈsekʃən dɪd wiː ˈkʌvər ɔːˌθentəˈkeɪʃən/ | 我没看到安全部分，认证问题考虑了吗？
My main concern is the operational overhead. | /maɪ meɪn kənˈsɜːrn ɪz ðə ˌɑːpərˈeɪʃənəl ˈoʊvərˈhed/ | 我主要担心的是运维负担。
I'm not convinced this is worth the complexity. | /aɪm nɑːt kənˈvɪnst ðɪs ɪz wɜːrθ ðə kəmˈpleksəti/ | 我不确定这值得增加这么多复杂度。 | not convinced 比 disagree 温和
Could you add a diagram of the data flow? | /kʊd juː æd ə ˈdaɪəˌɡræm ʌv ðə ˈdeɪtə floʊ/ | 你能加一张数据流图吗？
```

## 五、礼貌地否决，总结决定

```phrases
I like the idea, but I have some concerns. | /aɪ laɪk ðə aɪˈdiːə bʌt aɪ hæv sʌm kənˈsɜːrnz/ | 我喜欢这个想法，但有些顾虑。 | 先肯定，再说担忧
I don't think we should go with this approach, mainly because of the risk. | /aɪ doʊnt θɪŋk wiː ʃʊd ɡoʊ wɪð ðɪs əˈproʊtʃ ˈmeɪnli bɪˈkɔːz ʌv ðə rɪsk/ | 我觉得我们不该用这个方案，主要是因为风险。
I'd rather not introduce a new database right now. | /aɪd ˈræðər nɑːt ˌɪntrəˈduːs ə nuː ˈdeɪtəˌbeɪs raɪt naʊ/ | 我现在不太想引入新的数据库。
Let's go back to the drawing board. | /lets ɡoʊ bæk tuː ðə ˈdrɔːɪŋ bɔːrd/ | 我们回头重新设计吧。 | drawing board = 设计的起点，重新来过
Could we try a smaller version first to validate the idea? | /kʊd wiː traɪ ə ˈsmɔːlər ˈvɜːrʒən fɜːrst tuː ˈvælədeɪt ðə aɪˈdiːə/ | 我们能先做个小版本来验证想法吗？
I don't want to block this, but I'd like us to think about the cost. | /aɪ doʊnt wɑːnt tuː blɑːk ðɪs bʌt aɪd laɪk ʌs tuː θɪŋk əˈbaʊt ðə kɑːst/ | 我不想卡住这件事，但希望大家想想成本。
Let's do a proof of concept before we commit. | /lets duː ə pruːf ʌv ˈkɑːnsept bɪˈfɔːr wiː kəˈmɪt/ | 我们先做个概念验证，再正式决定。
So, to summarize, we're going with option two. | /soʊ tuː ˈsʌmərˌaɪz wiːr ˈɡoʊɪŋ wɪð ˈɑːpʃən tuː/ | 总结一下，我们采用第二个方案。
Let's record this decision in the design doc. | /lets rəˈkɔːrd ðɪs dɪˈsɪʒən ɪn ðə dɪˈzaɪn dɑːk/ | 我们把这个决定记在设计文档里。
I'll write an ADR so we have a record of why we chose this. | /aɪl raɪt æn eɪ diː ɑːr soʊ wiː hæv ə rəˈkɔːrd ʌv waɪ wiː tʃoʊz ðɪs/ | 我来写一份 ADR，记录我们为什么选它。 | ADR = architecture decision record，架构决策记录
```

下面是一个简短的 ADR 骨架。

```text
Title: Use a message queue for order notifications

Status: Accepted

Context:
Order notifications are sent synchronously. When the email service is slow,
checkout slows down too.

Options considered:
1. Keep it synchronous and add a timeout.
2. Use a message queue and send notifications in the background.
3. Use a third-party notification service.

Decision:
We will use a message queue (option two).

Consequences:
- Checkout no longer depends on the email service.
- We need to monitor the queue and handle retries.
- Notifications may be delayed by a few seconds.
```

> [!WARNING] 文化差异：直接 vs. 委婉
> 美国同事通常欢迎直接的技术意见，但会用缓冲语（**I think**、**I wonder if**、**Have we considered**）包装。如果你只说 **"This is bad."**，很容易被理解为否定人。直接表达观点没问题，重点是把理由和替代方案一起给出。

> [!CAUTION] 千万别这样说
> **"Your design is wrong."** 改成 **"I'm worried this design might not handle failures well. Could we discuss it?"**
> **"This is impossible."** 改成 **"I don't see how we could do this within the current constraints."**
> 另外，别用 **"I don't like it."** 当唯一理由，要说清具体担忧。

## 六、对话

```dialog
title: 架构评审会
Anna: Let me walk you through the proposal. We want to split the order service. | /let miː wɔːk juː θruː ðə prəˈpoʊzəl wiː wɑːnt tuː splɪt ðə ˈɔːrdər ˈsɜːrvəs/ | 我来讲一下方案，我们想拆分订单服务。
Tom: What problem does it solve? | /wʌt ˈprɑːbləm dʌz ɪt sɑːlv/ | 它解决什么问题？
Anna: Deploys are slow, and one bug can take down everything. | /dɪˈplɔɪz ɑːr sloʊ ənd wʌn bʌɡ kæn teɪk daʊn ˈevriˌθɪŋ/ | 部署很慢，而且一个 bug 就能让整个系统挂掉。
Tom: My main concern is the added complexity. Who will operate the new services? | /maɪ meɪn kənˈsɜːrn ɪz ðə ˈædəd kəmˈpleksəti huː wɪl ˈɑːpərˌeɪt ðə nuː ˈsɜːrvəsəz/ | 我主要担心增加的复杂度，谁来运维这些新服务？
Anna: Good question. The platform team agreed to support them. | /ɡʊd ˈkwestʃən ðə ˈplætˌfɔːrm tiːm əˈɡriːd tuː səˈpɔːrt ðem/ | 好问题，平台团队同意支持。
Tom: What about transactions across services? | /wʌt əˈbaʊt trænˈzækʃənz əˈkrɔːs ˈsɜːrvəsəz/ | 跨服务的事务呢？
Anna: We'd use an event-based approach and accept eventual consistency. | /wiːd juːs æn ɪˈvent beɪst əˈproʊtʃ ənd ækˈsept əˈventʃuəl kənˈsɪstənsi/ | 我们用事件驱动的方式，接受最终一致性。
Tom: Okay. Please add that to the doc. I'd like more detail there. | /ˌoʊˈkeɪ pliːz æd ðæt tuː ðə dɑːk aɪd laɪk mɔːr dɪˈteɪl ðer/ | 好，请把它写进文档，我想看到更多细节。
```

```dialog
title: 二选一
Ken: We have two options for the job scheduler. Option A is a cron on one server. | /wiː hæv tuː ˈɑːpʃənz fɔːr ðə dʒɑːb ˈskedʒʊlər ˈɑːpʃən ə ɪz ə krɑːn ɑːn wʌn ˈsɜːrvər/ | 任务调度器有两个选项，A 是在一台服务器上用 cron。
Mia: It's simple, but it's a single point of failure. | /ɪts ˈsɪmpəl bʌt ɪts ə ˈsɪŋɡəl pɔɪnt ʌv ˈfeɪljər/ | 简单，但是单点故障。
Ken: Right. Option B is a managed workflow service. | /raɪt ˈɑːpʃən biː ɪz ə ˈmænədʒd ˈwɜːrkfloʊ ˈsɜːrvəs/ | 对，B 是托管的工作流服务。
Mia: What's the cost? | /wʌts ðə kɑːst/ | 成本呢？
Ken: About two hundred dollars a month at our volume. | /əˈbaʊt tuː ˈhʌndrəd ˈdɑːlərz ə mʌnθ æt ˈaʊər ˈvɑːljum/ | 按我们的量，每月大约两百美元。
Mia: That's fine. I'd suggest option B. The maintenance savings are worth it. | /ðæts faɪn aɪd səˈdʒest ˈɑːpʃən biː ðə ˈmeɪntənəns ˈseɪvɪŋz ɑːr wɜːrθ ɪt/ | 可以，我建议选 B，省下的维护成本值得。
Ken: Agreed. Let's write an ADR and share it with the team. | /əˈɡriːd lets raɪt æn eɪ diː ɑːr ənd ʃer ɪt wɪð ðə tiːm/ | 同意，我们写一份 ADR 发给团队。
Mia: I'll draft it today. | /aɪl dræft ɪt təˈdeɪ/ | 我今天起草。
```

```dialog
title: 礼貌地否决提案
Sam: I'm proposing we rewrite the backend in a new language. | /aɪm prəˈpoʊzɪŋ wiː riˈraɪt ðə ˈbækend ɪn ə nuː ˈlæŋɡwədʒ/ | 我建议用一种新语言重写后端。
Lead: I like the ambition. What's the main benefit? | /aɪ laɪk ðə æmˈbɪʃən wʌts ðə meɪn ˈbenəfɪt/ | 我欣赏这份雄心，主要好处是什么？
Sam: Better performance, and it's more fun to work with. | /ˈbetər pərˈfɔːrməns ənd ɪts mɔːr fʌn tuː wɜːrk wɪð/ | 性能更好，而且用起来更有意思。
Lead: Performance is a real issue. But I'm worried about the risk of a full rewrite. | /pərˈfɔːrməns ɪz ə riːl ˈɪʃu bʌt aɪm ˈwɜːrid əˈbaʊt ðə rɪsk ʌv ə fʊl riˈraɪt/ | 性能确实是个问题，但我担心全部重写的风险。
Sam: We could do it step by step. | /wiː kʊd duː ɪt step baɪ step/ | 我们可以一步步来。
Lead: That's better. I don't think we should rewrite everything right now. | /ðæts ˈbetər aɪ doʊnt θɪŋk wiː ʃʊd riˈraɪt ˈevriˌθɪŋ raɪt naʊ/ | 这样好些，不过我觉得现在不该全部重写。
Lead: Can we find the slowest endpoints and fix those first? | /kæn wiː faɪnd ðə ˈsloʊəst ˈendˌpɔɪnts ənd fɪks ðoʊz fɜːrst/ | 我们能先找出最慢的接口，先修那些吗？
Sam: Fair enough. I'll profile the top five endpoints. | /fer ɪˈnʌf aɪl ˈproʊˌfaɪl ðə tɑːp faɪv ˈendˌpɔɪnts/ | 有道理，我去分析最慢的五个接口。
```

```dialog
title: 评审结束时总结决定
Lead: Let me summarize what we agreed. | /let miː ˈsʌmərˌaɪz wʌt wiː əˈɡriːd/ | 我来总结一下我们达成的共识。
Lead: We'll move notifications to a queue. | /wiːl muːv ˌnoʊtəfəˈkeɪʃənz tuː ə kjuː/ | 我们把通知迁到队列里。
Dev: And we'll keep the current database for now. | /ənd wiːl kiːp ðə ˈkɜːrənt ˈdeɪtəˌbeɪs fɔːr naʊ/ | 暂时保留现在的数据库。
Lead: Right. Anna will write the ADR by Wednesday. | /raɪt ˈænə wɪl raɪt ðə eɪ diː ɑːr baɪ ˈwenzdi/ | 对，Anna 周三前写 ADR。
Anna: Okay. Should I include the cost estimate? | /ˌoʊˈkeɪ ʃʊd aɪ ˌɪnˈkluːd ðə kɑːst ˈestəmət/ | 好，要包括成本估算吗？
Lead: Yes, and the rollback plan too. | /jes ənd ðə ˈroʊlbæk plæn tuː/ | 要，回滚方案也要有。
Dev: Do we need a follow-up meeting? | /duː wiː niːd ə ˈfɑːloʊ ʌp ˈmiːtɪŋ/ | 需要再开个跟进会吗？
Lead: Only if someone has objections after reading the ADR. | /ˈoʊnli ɪf ˈsʌmˌwʌn hæz əbˈdʒekʃənz ˈæftər ˈriːdɪŋ ðə eɪ diː ɑːr/ | 只有读完 ADR 后有人反对才需要。
```

> [!QUESTION] 想检验自己：怎么礼貌地表达「我担心这个方案的运维负担」？
> ```phrases
> I like the idea, but my main concern is the operational overhead. | /aɪ laɪk ðə aɪˈdiːə bʌt maɪ meɪn kənˈsɜːrn ɪz ðə ˌɑːpərˈeɪʃənəl ˈoʊvərˈhed/ | 我喜欢这个想法，但我主要担心运维负担。
> ```

> [!QUESTION] 想检验自己：你想对一个方案说不，但不想伤和气，怎么说？
> ```phrases
> I don't think we should go with this approach right now. Could we try a smaller version first? | /aɪ doʊnt θɪŋk wiː ʃʊd ɡoʊ wɪð ðɪs əˈproʊtʃ raɪt naʊ kʊd wiː traɪ ə ˈsmɔːlər ˈvɜːrʒən fɜːrst/ | 我觉得现在不该用这个方案，我们能先做个小版本吗？
> ```

> [!QUESTION] 想检验自己：会议快结束了，怎么总结并记录决定？
> ```phrases
> To summarize, we're going with option two. I'll write an ADR to record the decision. | /tuː ˈsʌmərˌaɪz wiːr ˈɡoʊɪŋ wɪð ˈɑːpʃən tuː aɪl raɪt æn eɪ diː ɑːr tuː rəˈkɔːrd ðə dɪˈsɪʒən/ | 总结一下，我们采用方案二，我来写份 ADR 记录这个决定。
> ```
