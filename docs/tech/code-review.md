---
level: 进阶
summary: 从请人 review、写评论、夸奖、提出不同意见到批准合并，覆盖 Code Review 全流程的整句和对话。
tags: [Code Review, PR, 评论前缀, 反馈, 进阶]
---

# Code Review 怎么说

> [!ABSTRACT]
> - 请人 review 要说清三件事：**改了什么、为什么改、你希望对方重点看哪里**。
> - 给反馈常用评论前缀：**nit:**（小问题）、**suggestion:**（建议）、**question:**（提问）、**blocking:**（必须改才能合并）。
> - 美式 review 的语气是「对代码不对人」：多用 **we / this**、**Could we…?**、**What do you think?**，少用 **you** 开头的批评句。
> - 被批评时先感谢，再回应；不同意时给理由和数据，而不是直接说 No。

## 一、请人 review

PR 描述写清楚，再在聊天里 ping 一下，这样更容易被尽快看到。

```phrases
Could you take a look at my PR when you get a chance? | /kʊd juː teɪk ə lʊk æt maɪ ˌpiː ˈɑːr wen juː ɡet ə tʃæns/ | 有空的话能帮我看一下我的 PR 吗？ | 最常用、最自然的请求
I just opened a PR for the retry logic. Would you mind reviewing it? | /aɪ dʒʌst ˈoʊpənd ə ˌpiː ˈɑːr fɔːr ðə riˈtraɪ ˈlɑːdʒɪk wʊd juː maɪnd riˈvjuːɪŋ ɪt/ | 我刚提了重试逻辑的 PR，能帮忙 review 吗？
The PR is ready for review. | /ðə ˌpiː ˈɑːr ɪz ˈredi fɔːr ˌriːˈvjuː/ | 这个 PR 可以 review 了。 | 把 draft 转成 ready 之后常这样通知
It's a small change. It should only take five minutes. | /ɪts ə smɔːl tʃeɪndʒ ɪt ʃʊd ˈoʊnli teɪk faɪv ˈmɪnəts/ | 改动很小，大概五分钟就能看完。 | 小 PR 更容易有人先看，主动说明改动大小
I'd really like your eyes on the cache invalidation part. | /aɪd ˈrɪli laɪk jɔːr aɪz ɑːn ðə kæʃ ˌɪnˌvæləˈdeɪʃən pɑːrt/ | 我特别希望你看一下缓存失效那一块。 | your eyes on = 请你过目，指明重点
Please pay special attention to the error handling. | /pliːz peɪ ˈspeʃəl əˈtenʃən tuː ðə ˈerər ˈhændlɪŋ/ | 请特别留意一下错误处理。
I'm not sure about the naming here. Any suggestions? | /aɪm nɑːt ʃʊr əˈbaʊt ðə ˈneɪmɪŋ hiːr ˈeni səˈdʒestʃənz/ | 这里的命名我拿不准，有什么建议吗？
This PR is a bit big. I left comments to guide you through it. | /ðɪs ˌpiː ˈɑːr ɪz ə bɪt bɪɡ aɪ left ˈkɑːments tuː ɡaɪd juː θruː ɪt/ | 这个 PR 有点大，我写了评论来帮你理清思路。
```

> [!TIP] PR 描述的三段式
> 好的 PR 描述写：**What**（改了什么）、**Why**（为什么改）、**How to test**（怎么验证）。reviewer 看完描述就能知道该看什么，来回沟通会少很多。

## 二、给反馈：评论前缀

加前缀能让对方一眼看出这条评论有多重要，是美式 review 里最实用的习惯。

| 前缀 | 含义 | 是否阻止合并 |
| --- | --- | --- |
| nit: | 风格、命名等小问题 | 否 |
| suggestion: | 可以更好的做法，由作者决定 | 否 |
| question: | 我没看懂，想了解原因 | 看答案 |
| blocking: | 有 bug 或风险，必须改 | 是 |

```phrases
nit: Could we rename this to userCount? | /nɪt kʊd wiː riˈneɪm ðɪs tuː ˈjuːzɚ kaʊnt/ | nit：能把它改名为 userCount 吗？
suggestion: We could extract this into a helper function. | /səˈdʒestʃən wiː kʊd ˈekˌstrækt ðɪs ˈɪntu ə ˈhelpər ˈfʌŋkʃən/ | 建议：可以把这段抽成一个辅助函数。
suggestion: Maybe use a map here instead of a loop. | /səˈdʒestʃən ˈmeɪbi juːs ə mæp hiːr ˌɪnˈsted ʌv ə luːp/ | 建议：这里也许用 map 比循环更好。
question: Why do we need a second query here? | /ˈkwestʃən waɪ duː wiː niːd ə ˈsekənd ˈkwiːri hiːr/ | 疑问：这里为什么需要再查一次？ | 先问为什么，再下结论，避免误会对方
question: What happens if the list is empty? | /ˈkwestʃən wʌt ˈhæpənz ɪf ðə lɪst ɪz ˈempti/ | 疑问：如果列表是空的会怎样？
blocking: This will throw a null pointer exception when the user has no address. | /ˈblɑːkɪŋ ðɪs wɪl θroʊ ə nʌl ˈpɔɪntər ɪkˈsepʃən wen ðə ˈjuːzər hæz noʊ ˈæˌdres/ | 阻塞：用户没有地址时这里会抛空指针异常。 | blocking 要写清楚原因
blocking: We can't log the access token. | /ˈblɑːkɪŋ wiː kænt lɔːɡ ðə ˈækˌses ˈtoʊkən/ | 阻塞：我们不能把访问令牌写进日志。
Optional: feel free to ignore this. | /ˈɑːpʃənəl fiːl friː tuː ˌɪɡˈnɔːr ðɪs/ | 可选：不改也完全可以。 | optional 明确告诉对方没压力
FYI, we have a utility for this in the common package. | /ˌef waɪ ˈaɪ wiː hæv ə juˈtɪləti fɔːr ðɪs ɪn ðə ˈkɑːmən ˈpækədʒ/ | 供参考，公共包里已经有这个工具函数了。 | FYI = for your information，不要求修改
```

> [!CAUTION] 千万别这样说
> 不要写 **"Your code is wrong."** 或 **"Why did you write like this?"**，听起来像在指责人。
> 改成：**"I think this might fail when the input is null. Could we add a check?"**（对代码，不对人。）

## 三、礼貌地提出修改请求

```phrases
Could we add a unit test for this case? | /kʊd wiː æd ə ˈjuːnət test fɔːr ðɪs keɪs/ | 我们能给这个场景加个单元测试吗？ | 用 we 比 you 柔和，像是一起解决问题
Can we handle the timeout case as well? | /kæn wiː ˈhændəl ðə ˈtaɪˌmaʊt keɪs æz wel/ | 我们也处理一下超时的情况好吗？
I think this might cause a race condition. | /aɪ θɪŋk ðɪs maɪt kɑːz ə reɪs kənˈdɪʃən/ | 我觉得这里可能引发竞态条件。 | I think / might 是缓冲，不是不确定
I'm worried this could slow down the query. | /aɪm ˈwɜːrid ðɪs kʊd sloʊ daʊn ðə ˈkwiːri/ | 我担心这样会让查询变慢。
Would it make sense to move this logic into the service layer? | /wʊd ɪt meɪk sens tuː muːv ðɪs ˈlɑːdʒɪk ˈɪntu ðə ˈsɜːrvəs ˈleɪər/ | 把这段逻辑挪到 service 层是不是更合理？
Could you add a comment explaining why we need this workaround? | /kʊd juː æd ə ˈkɑːment ɪkˈspleɪnɪŋ waɪ wiː niːd ðɪs ˈwɜːrkəraʊnd/ | 你能加条注释说明为什么需要这个绕过方案吗？
This function is doing too much. Can we split it up? | /ðɪs ˈfʌŋkʃən ɪz ˈduːɪŋ tuː mʌtʃ kæn wiː splɪt ɪt ʌp/ | 这个函数做的事太多了，能拆开吗？
I'm requesting changes. Mostly the missing validation. | /aɪm rɪˈkwestɪŋ ˈtʃeɪndʒəz ˈmoʊstli ðə ˈmɪsɪŋ ˌvæləˈdeɪʃən/ | 我先 request changes，主要是缺少校验。 | GitHub 里的 Request changes 按钮，口头也这样说
```

## 四、夸奖和肯定

Review 不只是挑毛病。具体的夸奖比 "Good job" 有分量。

```phrases
Nice catch! | /naɪs kætʃ/ | 发现得好！
Great refactor. This is much easier to read. | /ɡreɪt riːˈfæktər ðɪs ɪz mʌtʃ ˈiːziər tuː red/ | 重构得漂亮，读起来清楚多了。
I like how you handled the edge cases. | /aɪ laɪk haʊ juː ˈhændəld ðə edʒ ˈkeɪsəz/ | 我喜欢你处理边界情况的方式。
Clean solution. I wouldn't have thought of that. | /kliːn səˈluːʃən aɪ ˈwʊdənt hæv θɔːt ʌv ðæt/ | 方案很干净，我就想不到。
```

## 五、批准合并

LGTM 是 Looks good to me 的缩写，最随意；正式一点或友好一点有更多说法。

```phrases
LGTM! | /ˌel dʒiː tiː ˈem/ | 没问题，可以合并！ | 读作 L-G-T-M，最常见的批准语
Looks good to me. Approved. | /lʊks ɡʊd tuː miː əˈpruːvd/ | 我看没问题，已批准。
LGTM once the CI is green. | /ˌel dʒiː tiː ˈem wʌns ðə siː aɪ ɪz ɡriːn/ | CI 通过后就可以合并。 | 有条件的批准
Approving this. Just fix the nit before you merge. | /əˈpruːvɪŋ ðɪs dʒʌst fɪks ðə nɪt bɪˈfɔːr juː mɜːrdʒ/ | 我先批准，合并前把那个小问题改了。 | 小问题让作者自己改，省一轮往返
Nice work. Ship it! | /naɪs wɜːrk ʃɪp ɪt/ | 干得好，上线吧！ | ship it 很口语，关系熟的同事之间用
Thanks for the quick turnaround. Merging now. | /θæŋks fɔːr ðə kwɪk ˈtɜːrnərˌaʊnd ˈmɜːrdʒɪŋ naʊ/ | 谢谢你这么快改好，我现在合并了。
```

## 六、被批评时怎么回应

```phrases
Good point. I'll fix that. | /ɡʊd pɔɪnt aɪl fɪks ðæt/ | 有道理，我来改。
Thanks for catching that. | /θæŋks fɔːr ˈkætʃɪŋ ðæt/ | 谢谢你发现这个问题。
I'm not sure I follow. Could you give an example? | /aɪm nɑːt ʃʊr aɪ ˈfɑːloʊ kʊd juː ɡɪv æn ɪɡˈzæmpəl/ | 我没太明白，能举个例子吗？ | 没看懂就直接问，别硬猜
Done. Please take another look. | /dʌn pliːz teɪk əˈnʌðər lʊk/ | 改好了，请再看一下。 | 推送新 commit 后通知 reviewer
I pushed a new commit to address your comments. | /aɪ pʊʃt ə nuː kəˈmɪt tuː ˈæˌdres jɔːr ˈkɑːments/ | 我推了一个新 commit 来处理你的评论。
I fixed this in a follow-up commit. | /aɪ fɪkst ðɪs ɪn ə ˈfɑːloʊ ʌp kəˈmɪt/ | 我在后面的 commit 里改了这个。
I'll handle that in a separate PR to keep this one small. | /aɪl ˈhændəl ðæt ɪn ə ˈsepərˌeɪt ˌpiː ˈɑːr tuː kiːp ðɪs wʌn smɔːl/ | 这个我放到单独的 PR 里处理，保持这个 PR 小一点。
```

## 七、解释你的选择，礼貌地不同意

```phrases
I went with this approach because it avoids an extra database call. | /aɪ went wɪð ðɪs əˈproʊtʃ bɪˈkɔːz ɪt əˈvɔɪdz æn ˈekstrə ˈdeɪtəˌbeɪs kɔːl/ | 我选这个方案是因为能省一次数据库调用。
The reason I did it this way is that the API is already public. | /ðə ˈriːzən aɪ dɪd ɪt ðɪs weɪ ɪz ðæt ðə ˌeɪˌpiːˈaɪ ɪz ɔːlˈredi ˈpʌblɪk/ | 我这样做是因为这个接口已经对外公开了。
That's a good idea, but it would break backward compatibility. | /ðæts ə ɡʊd aɪˈdiːə bʌt ɪt wʊd breɪk ˈbækwərd kəmˌpætəˈbɪləˌtiː/ | 这个想法不错，但会破坏向后兼容。 | 先肯定再转折，不同意也不伤和气
I see your point. My concern is that it makes the code harder to test. | /aɪ siː jɔːr pɔɪnt maɪ kənˈsɜːrn ɪz ðæt ɪt meɪks ðə koʊd ˈhɑːrdər tuː test/ | 我明白你的意思，不过我担心这会更难测试。
I'm not sure that's necessary here. The input is validated upstream. | /aɪm nɑːt ʃʊr ðæts ˈnesəˌseri hiːr ðə ˈɪnˌpʊt ɪz ˈvælədeɪtɪd ˈʌpˈstriːm/ | 我觉得这里没必要，输入在上游已经校验过了。
Could we discuss this offline? It might be quicker. | /kʊd wiː dɪˈskʌs ðɪs ˈɔːˌflaɪn ɪt maɪt biː ˈkwɪkər/ | 我们能私下聊一下吗？可能更快。 | 来回超过两轮还没说通，就约个电话或会议
Let's agree to disagree and follow the team guideline. | /lets əˈɡriː tuː dɪsəˈɡriː ənd ˈfɑːloʊ ðə tiːm ˈɡaɪdˌlaɪn/ | 我们保留各自意见，按团队规范来吧。 | 有分歧但不想耗下去时用
I don't feel strongly about it. Happy to change it. | /aɪ doʊnt fiːl ˈstrɔːŋli əˈbaʊt ɪt ˈhæpi tuː tʃeɪndʒ ɪt/ | 我没有特别坚持，可以改。
```

> [!WARNING] 文字没有语气
> 书面评论很容易被读得比本意更冷。美国同事常用 **"Thanks!"**、**"Just a thought:"**、感叹号或一个小表情来软化语气。反过来，对方一句简短的 "Why?" 通常也不是在生气。

## 八、对话

```dialog
title: Review 前的电话沟通
Mia: Thanks for jumping on a call. I wanted to walk you through the PR. | /θæŋks fɔːr ˈdʒʌmpɪŋ ɑːn ə kɔːl aɪ ˈwɔːntɪd tuː wɔːk juː θruː ðə ˌpiː ˈɑːr/ | 谢谢你抽时间开会，我想带你过一下这个 PR。
Ken: Sure. What's the main change? | /ʃʊr wʌts ðə meɪn tʃeɪndʒ/ | 好啊，主要改了什么？
Mia: I replaced the in-memory cache with Redis, so multiple servers can share it. | /aɪ ˌriːˈpleɪst ðə ɪn ˈmeməri kæʃ wɪð ˈredɪs soʊ ˈmʌltəpəl ˈsɜːrvərz kæn ʃer ɪt/ | 我把内存缓存换成了 Redis，这样多台服务器可以共享。
Ken: Makes sense. Where should I focus? | /meɪks sens wer ʃʊd aɪ ˈfoʊkəs/ | 有道理，我该重点看哪里？
Mia: The expiration logic. I'm not sure the time to live is right. | /ðə ˌekspərˈeɪʃən ˈlɑːdʒɪk aɪm nɑːt ʃʊr ðə taɪm tuː laɪv ɪz raɪt/ | 过期逻辑。我不确定过期时间设得对不对。
Ken: Got it. Any known risks? | /ɡɑːt ɪt ˈeni noʊn rɪsks/ | 明白了，有已知的风险吗？
Mia: If Redis goes down, we fall back to the database. It could be slow. | /ɪf ˈredɪs ɡoʊz daʊn wiː fɔːl bæk tuː ðə ˈdeɪtəˌbeɪs ɪt kʊd biː sloʊ/ | 如果 Redis 挂了，会回退到数据库，可能会变慢。
Ken: Okay. I'll review it this afternoon and leave comments. | /ˌoʊˈkeɪ aɪl ˌriːˈvjuː ɪt ðɪs ˌæftərˈnuːn ənd liːv ˈkɑːments/ | 好，我今天下午看，留评论给你。
```

```dialog
title: 对设计有分歧
Ken: I left a comment on line forty. I think we should use a queue here. | /aɪ left ə ˈkɑːment ɑːn laɪn ˈfɔːrti aɪ θɪŋk wiː ʃʊd juːs ə kjuː hiːr/ | 我在第四十行留了评论，我觉得这里应该用队列。
Mia: I thought about that, but it adds a new dependency. | /aɪ θɔːt əˈbaʊt ðæt bʌt ɪt ædz ə nuː dɪˈpendənsi/ | 我考虑过，但会引入一个新依赖。
Ken: True. But the sync call could block the request thread. | /truː bʌt ðə sɪŋk kɔːl kʊd blɑːk ðə rɪˈkwest θred/ | 确实，不过同步调用可能会阻塞请求线程。
Mia: The call usually takes under fifty milliseconds, though. | /ðə kɔːl ˈjuːʒəwəli teɪks ˈʌndər ˈfɪfti ˈmɪlɪˌsekəndz ðoʊ/ | 不过这个调用通常不到五十毫秒。
Ken: Usually. What about during a traffic spike? | /ˈjuːʒəwəli wʌt əˈbaʊt ˈdʊrɪŋ ə ˈtræfɪk spaɪk/ | 通常是这样，流量高峰时呢？
Mia: Fair point. I don't have data for that. Let me run a load test first. | /fer pɔɪnt aɪ doʊnt hæv ˈdeɪtə fɔːr ðæt let miː rʌn ə loʊd test fɜːrst/ | 说得对，我没有这方面的数据，我先做个压测。
Ken: Sounds good. If it holds up, I'm fine with your approach. | /saʊndz ɡʊd ɪf ɪt hoʊldz ʌp aɪm faɪn wɪð jɔːr əˈproʊtʃ/ | 好，如果撑得住，我同意你的方案。
Mia: Thanks. I'll share the results tomorrow. | /θæŋks aɪl ʃer ðə rɪˈzʌlts təˈmɑːˌroʊ/ | 谢谢，明天把结果发给你。
```

```dialog
title: 很挑剔的 reviewer
Sam: You left twelve comments on my PR. Most of them are about spacing. | /juː left twelv ˈkɑːments ɑːn maɪ ˌpiː ˈɑːr moʊst ʌv ðem ɑːr əˈbaʊt ˈspeɪsɪŋ/ | 你在我的 PR 上留了十二条评论，大部分都是关于空格的。
Lee: Sorry, they're all nits. Only the last one is blocking. | /ˈsɑːri ðer ɔːl nɪts ˈoʊnli ðə læst wʌn ɪz ˈblɑːkɪŋ/ | 抱歉，都是 nit，只有最后一条是必须改的。
Sam: Could we set up a linter instead? | /kʊd wiː set ʌp ə ˈlɪntɚ ˌɪnˈsted/ | 我们能不能配个 linter 来管这些？
Lee: Good idea. That would save us both time. | /ɡʊd aɪˈdiːə ðæt wʊd seɪv ʌs boʊθ taɪm/ | 好主意，这样我们俩都省时间。
Sam: And for the blocking one, you want a null check, right? | /ənd fɔːr ðə ˈblɑːkɪŋ wʌn juː wɑːnt ə nʌl tʃek raɪt/ | 那条必须改的，你是想要一个空值检查，对吧？
Lee: Yes. The payload can be empty when the user cancels. | /jes ðə ˈpeɪˌloʊd kæn biː ˈempti wen ðə ˈjuːzər ˈkænsəlz/ | 对，用户取消时 payload 可能是空的。
Sam: Oh, I didn't think of that. I'll fix it and ignore the nits. | /oʊ aɪ ˈdɪdənt θɪŋk ʌv ðæt aɪl fɪks ɪt ənd ˌɪɡˈnɔːr ðə nɪts/ | 噢，我没想到。我改掉它，小问题先不管。
Lee: Perfect. I'll approve once it's updated. | /pərˈfekt aɪl əˈpruːv wʌns ɪts əpˈdeɪtɪd/ | 好的，更新后我就批准。
```

```dialog
title: 迟到的 review
Mia: Hi Ken, sorry for the late review. I just saw this PR was already merged. | /haɪ ken ˈsɑːri fɔːr ðə leɪt ˌriːˈvjuː aɪ dʒʌst sɔː ðɪs ˌpiː ˈɑːr wɑːz ɔːlˈredi mɜːrdʒd/ | 嗨 Ken，抱歉 review 晚了，我刚看到这个 PR 已经合并了。
Ken: No worries. Did you find anything? | /noʊ ˈwɜːriz dɪd juː faɪnd ˈeniˌθɪŋ/ | 没事，你发现什么问题了吗？
Mia: One thing. The retry loop has no maximum number of attempts. | /wʌn θɪŋ ðə riˈtraɪ luːp hæz noʊ ˈmæksəməm ˈnʌmbər ʌv əˈtempts/ | 有一个，重试循环没有最大次数。
Ken: Oh no, good catch. It could retry forever. | /oʊ noʊ ɡʊd kætʃ ɪt kʊd riˈtraɪ fərˈevər/ | 糟了，发现得好，它可能会无限重试。
Mia: Right. It's not urgent, but we should fix it before the release. | /raɪt ɪts nɑːt ˈɜːrdʒənt bʌt wiː ʃʊd fɪks ɪt bɪˈfɔːr ðə riˈliːs/ | 对，不紧急，但发布前该修掉。
Ken: I'll open a follow-up PR today. | /aɪl ˈoʊpən ə ˈfɑːloʊ ʌp ˌpiː ˈɑːr təˈdeɪ/ | 我今天提一个后续 PR。
Mia: Thanks. I'll review it right away. | /θæŋks aɪl ˌriːˈvjuː ɪt raɪt əˈweɪ/ | 谢谢，我会马上 review。
```

> [!QUESTION] 想检验自己：你觉得变量命名不够好，但不影响合并，怎么写评论？
> 用 nit 前缀 + 提问式语气。
>
> ```phrases
> nit: Could we rename this to retryCount? It's a bit clearer. | /nɪt kʊd wiː riˈneɪm ðɪs tuː riˈtraɪ kaʊnt ɪts ə bɪt ˈklɪrər/ | nit：能改名叫 retryCount 吗？更清楚一些。
> ```

> [!QUESTION] 想检验自己：reviewer 要你改成另一种实现，但你认为会破坏兼容性，怎么礼貌地回应？
> ```phrases
> That's a good idea, but it would break backward compatibility. Could we do it in a separate PR? | /ðæts ə ɡʊd aɪˈdiːə bʌt ɪt wʊd breɪk ˈbækwərd kəmˌpætəˈbɪləˌtiː kʊd wiː duː ɪt ɪn ə ˈsepərˌeɪt ˌpiː ˈɑːr/ | 这个想法不错，但会破坏向后兼容，我们能放到单独的 PR 里做吗？
> ```

> [!QUESTION] 想检验自己：你改完了 reviewer 提的所有问题，怎么通知对方再看一遍？
> ```phrases
> I've addressed all your comments. Could you take another look? | /aɪv əˈdrest ɔːl jɔːr ˈkɑːments kʊd juː teɪk əˈnʌðər lʊk/ | 你的评论我都处理了，能再看一下吗？
> ```
