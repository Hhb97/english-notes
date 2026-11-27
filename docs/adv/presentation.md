---
level: 深入
summary: 用英文做技术分享和演示的整句：开场、议程、过渡、讲架构与图表、类比、现场演示翻车、应对问答和刁难、收尾与缓解紧张，附完整讲稿。
tags: [演讲, 技术分享, 演示, Q&A, 架构]
---

# 技术分享与演示

> [!ABSTRACT]
> - 一场好的技术分享有清晰的骨架：**开场 → 议程 → 正文（每段有路标）→ 总结 → Q&A**。
> - **路标语（signposting）**是听众的导航：**First… Next… Finally…**，每一段开始和结束都说一句。
> - 讲架构时用 **This component is responsible for…**，讲图表时先说图的内容，再说「所以呢」。
> - 演示会出错，提前准备好一句话：**Let me switch to the recording.** 淡定比完美重要。
> - 英语不是母语的人更要**放慢语速、多停顿**，这样反而显得有把握。

## 一、开场：先抓住注意力

前三十秒定调。问候、自我介绍、说明今天听众能得到什么。

```phrases
Good morning, everyone. Thanks for joining. | /ɡʊd ˈmɔːrnɪŋ ˈevriˌwʌn θæŋks fɔːr ˈdʒɔɪnɪŋ/ | 大家早上好，谢谢参加。
I'm Ming, and I work on the platform team. | /aɪm mɪŋ ənd aɪ wɜːrk ɑːn ðə ˈplætˌfɔːrm tiːm/ | 我是 Ming，在平台团队工作。
Today I'm going to talk about how we reduced our deployment time. | /təˈdeɪ aɪm ˈɡoʊɪŋ tuː tɔːk əˈbaʊt haʊ wiː rəˈduːst ˈaʊər dɪˈplɔɪmənt taɪm/ | 今天我要讲我们是怎么缩短部署时间的。
By the end of this talk, you'll know three ways to speed up your pipeline. | /baɪ ðə end ʌv ðɪs tɔːk juːl noʊ θriː weɪz tuː spiːd ʌp jɔːr ˈpaɪˌplaɪn/ | 到这次分享结束时，你们会了解三种加速流水线的办法。 | 先承诺收获，听众更愿意听下去
Quick show of hands. Who here has dealt with a flaky test? | /kwɪk ʃoʊ ʌv hændz huː hiːr hæz delt wɪð ə ˈfleɪki test/ | 快速举个手，在座谁遇到过不稳定的测试？ | 互动开场，缓解自己的紧张
Let me start with a quick story. | /let miː stɑːrt wɪð ə kwɪk ˈstɔːri/ | 我先讲个简短的故事。
Feel free to interrupt me if something is unclear. | /fiːl friː tuː ˌɪntərˈʌpt miː ɪf ˈsʌmθɪŋ ɪz ənˈklɪr/ | 如果有哪里不清楚，随时打断我。
We'll leave time for questions at the end. | /wiːl liːv taɪm fɔːr ˈkwestʃənz æt ðə end/ | 最后会留时间提问。
```

## 二、议程与路标

听众在英文演讲里最怕「迷路」。每一段的开头和结尾都要说一句话告诉他们位置。

```phrases
Here's the agenda. I'll cover three things. | /hɪrz ðə əˈdʒendə aɪl ˈkʌvər θriː θɪŋz/ | 这是议程，我会讲三件事。
First, the problem. Second, our solution. Third, what we learned. | /fɜːrst ðə ˈprɑːbləm ˈsekənd ˈaʊər səˈluːʃən θɜːrd wʌt wiː lɜːrnd/ | 第一，问题；第二，我们的方案；第三，我们学到的。
Let's start with some background. | /lets stɑːrt wɪð sʌm ˈbækˌɡraʊnd/ | 我们先从背景说起。
That covers the first part. Now let's move on to the design. | /ðæt ˈkʌvərz ðə fɜːrst pɑːrt naʊ lets muːv ɑːn tuː ðə dɪˈzaɪn/ | 第一部分讲完了，现在讲设计。
So far, we've looked at the problem. Next, let's see how we solved it. | /soʊ fɑːr wiːv lʊkt æt ðə ˈprɑːbləm nekst lets siː haʊ wiː sɑːlvd ɪt/ | 到目前为止我们看了问题，接下来看我们怎么解决的。
Before I go on, does anyone have questions so far? | /bɪˈfɔːr aɪ ɡoʊ ɑːn dʌz ˈeniˌwʌn hæv ˈkwestʃənz soʊ fɑːr/ | 继续之前，到目前为止有人有问题吗？
This brings me to my next point. | /ðɪs brɪŋz miː tuː maɪ nekst pɔɪnt/ | 这就引出了我的下一个观点。
To sum up this section, the key takeaway is simplicity. | /tuː sʌm ʌp ðɪs ˈsekʃən ðə kiː ˈteɪkəˌweɪ ɪz sɪmˈplɪsəti/ | 总结这一部分，核心要点是简单。
Let me come back to this later. | /let miː kʌm bæk tuː ðɪs ˈleɪtər/ | 这个我稍后再回来讲。
I'll skip this slide in the interest of time. | /aɪl skɪp ðɪs slaɪd ɪn ðə ˈɪntrəst ʌv taɪm/ | 为了节省时间，这页我跳过。
```

## 三、讲解架构：This component is responsible for…

讲架构图的套路：先说整体，再按数据流或层次逐个讲组件，每个组件一句话说职责。

```phrases
This diagram shows the high-level architecture of the system. | /ðɪs ˈdaɪəˌɡræm ʃoʊz ðə haɪ ˈlevəl ˈɑːrkəˌtektʃər ʌv ðə ˈsɪstəm/ | 这张图展示了系统的高层架构。
On the left, we have the client. On the right, the backend services. | /ɑːn ðə left wiː hæv ðə ˈklaɪənt ɑːn ðə raɪt ðə ˈbækend ˈsɜːrvəsəz/ | 左边是客户端，右边是后端服务。
Requests first hit the load balancer. | /rɪˈkwests fɜːrst hɪt ðə loʊd ˈbælənsər/ | 请求首先到达负载均衡器。
This component is responsible for authenticating users. | /ðɪs kəmˈpoʊnənt ɪz riˈspɑːnsəbəl fɔːr ɔːˈθentəˌkeɪtɪŋ ˈjuːzərz/ | 这个组件负责用户认证。
The API gateway routes each request to the right service. | /ðə ˌeɪˌpiːˈaɪ ˈɡeɪˌtweɪ ruːts iːtʃ rɪˈkwest tuː ðə raɪt ˈsɜːrvəs/ | API 网关把每个请求路由到对应的服务。
Data flows from the producer to the queue, and then to the consumers. | /ˈdeɪtə floʊz frʌm ðə prəˈduːsər tuː ðə kjuː ənd ðen tuː ðə kənˈsuːmərz/ | 数据从生产者流向队列，再流向消费者。
Behind the scenes, a worker processes the jobs asynchronously. | /bɪˈhaɪnd ðə siːnz ə ˈwɜːrkər ˈprɑːsesəz ðə dʒɑːbz eɪˈsɪŋkrənəsli/ | 在幕后，一个 worker 异步处理这些任务。
Each service owns its own database. | /iːtʃ ˈsɜːrvəs oʊnz ɪts oʊn ˈdeɪtəˌbeɪs/ | 每个服务拥有自己的数据库。
The cache sits between the API and the database. | /ðə kæʃ sɪts bɪˈtwiːn ðə ˌeɪˌpiːˈaɪ ənd ðə ˈdeɪtəˌbeɪs/ | 缓存位于 API 和数据库之间。
If you look at this arrow, you can see where the bottleneck is. | /ɪf juː lʊk æt ðɪs ˈæroʊ juː kæn siː wer ðə ˈbɑːtəlˌnek ɪz/ | 看这个箭头，你们能看出瓶颈在哪里。
```

### 打比方：Analogies

向非技术听众或新人解释概念，类比比定义更有效。

```phrases
Think of a load balancer as a traffic cop at a busy intersection. | /θɪŋk ʌv ə loʊd ˈbælənsər æz ə ˈtræfɪk kɑːp æt ə ˈbɪzi ˌɪntərˈsekʃən/ | 把负载均衡器想象成繁忙路口的交警。
A cache is like keeping your most-used tools on your desk instead of in the garage. | /ə kæʃ ɪz laɪk ˈkiːpɪŋ jɔːr moʊst juːzd tuːlz ɑːn jɔːr desk ˌɪnˈsted ʌv ɪn ðə ɡərˈɑːʒ/ | 缓存就像把最常用的工具放在桌上，而不是放在车库里。
You can think of a message queue as a mailbox. | /juː kæn θɪŋk ʌv ə ˈmesədʒ kjuː æz ə ˈmeɪlˌbɑːks/ | 你可以把消息队列想成一个信箱。
It works like a post office: you drop the letter, and someone else delivers it. | /ɪt wɜːrks laɪk ə poʊst ˈɔːfɪs juː drɑːp ðə ˈletər ənd ˈsʌmˌwʌn els dɪˈlɪvərz ɪt/ | 它的工作方式像邮局：你投信，别人来送。
In simple terms, an API is a menu at a restaurant. | /ɪn ˈsɪmpəl tɜːrmz æn ˌeɪˌpiːˈaɪ ɪz ə ˈmenju æt ə ˈrestərˌɑːnt/ | 简单来说，API 就像餐厅的菜单。
Here's an analogy that might help. | /hɪrz æn əˈnælədʒi ðæt maɪt help/ | 这里有个也许有帮助的类比。
```

## 四、讲图表和数据

先说「图在表达什么」，再指出重点，最后给出结论。不要只念数字。

```phrases
This chart shows the response time over the past month. | /ðɪs tʃɑːrt ʃoʊz ðə rɪˈspɑːns taɪm ˈoʊvər ðə pæst mʌnθ/ | 这张图展示了过去一个月的响应时间。
The horizontal axis is time, and the vertical axis is latency. | /ðə ˌhɔːrəˈzɑːntəl ˈæksəs ɪz taɪm ənd ðə ˈvɜːrtɪkəl ˈæksəs ɪz ˈleɪtənsi/ | 横轴是时间，纵轴是延迟。
As you can see, the latency dropped sharply after the release. | /æz juː kæn siː ðə ˈleɪtənsi drɑːpt ˈʃɑːrpli ˈæftər ðə riˈliːs/ | 如你所见，发布之后延迟急剧下降。
The red line represents the old system, and the blue line the new one. | /ðə red laɪn ˌreprɪˈzents ðə oʊld ˈsɪstəm ənd ðə bluː laɪn ðə nuː wʌn/ | 红线代表旧系统，蓝线代表新系统。
What's interesting here is the spike on Tuesday. | /wʌts ˈɪntrəstɪŋ hiːr ɪz ðə spaɪk ɑːn ˈtuːzdi/ | 这里有意思的是周二的峰值。
The takeaway is that caching cut the median latency in half. | /ðə ˈteɪkəˌweɪ ɪz ðæt ˈkæʃɪŋ kʌt ðə ˈmiːdiən ˈleɪtənsi ɪn hæf/ | 要点是缓存把延迟中位数砍掉了一半。
These numbers are from our staging environment, so production may differ. | /ðiːz ˈnʌmbərz ɑːr frʌm ˈaʊər ˈsteɪdʒɪŋ ɪnˈvaɪrənmənt soʊ prəˈdʌkʃən meɪ ˈdɪfər/ | 这些数字来自预发布环境，所以生产环境可能有差异。
Let me zoom in on this part. | /let miː zuːm ɪn ɑːn ðɪs pɑːrt/ | 我把这部分放大一下。
```

> [!TIP] 一页幻灯片只讲一个观点
> 英文听众习惯「一页一结论」。每页标题写成完整的结论句，比如 **Caching cut latency by fifty percent**，比 **Performance** 更好。你只需要对着标题展开，不用念满页文字。

## 五、演示：Demo 怎么说，翻车了怎么办

现场演示最怕出错。不要慌张，也不要沉默，用一句话把局面接过来。

```phrases
Let me show you how it works in a live demo. | /let miː ʃoʊ juː haʊ ɪt wɜːrks ɪn ə laɪv ˈdemoʊ/ | 我用现场演示给大家看它是怎么工作的。
I'll share my screen. Can everyone see it? | /aɪl ʃer maɪ skriːn kæn ˈevriˌwʌn siː ɪt/ | 我来共享屏幕，大家看得到吗？
First, I'll log in and create a new project. | /fɜːrst aɪl lɔːɡ ɪn ənd kriˈeɪt ə nuː ˈprɑːdʒekt/ | 首先我登录并创建一个新项目。
Now I'll click the deploy button. | /naʊ aɪl klɪk ðə dɪˈplɔɪ ˈbʌtən/ | 现在我点击部署按钮。
As you can see, it takes only a few seconds. | /æz juː kæn siː ɪt teɪks ˈoʊnli ə fjuː ˈsekəndz/ | 如你所见，只需要几秒钟。
Watch what happens when I submit this form. | /wɑːtʃ wʌt ˈhæpənz wen aɪ səbˈmɪt ðɪs fɔːrm/ | 看看我提交这个表单会发生什么。
Bear with me for a second while this loads. | /ber wɪð miː fɔːr ə ˈsekənd waɪl ðɪs loʊdz/ | 请稍等一下，这个正在加载。
Hmm, that's not what I expected. | /hm ðæts nɑːt wʌt aɪ ɪkˈspektəd/ | 嗯，这和我预期的不一样。
The demo gods are not with me today. | /ðə ˈdemoʊ ɡɑːdz ɑːr nɑːt wɪð miː təˈdeɪ/ | 今天演示之神没站在我这边。 | 经典自嘲，美国人听了会笑
Let me try that again. | /let miː traɪ ðæt əˈɡen/ | 我再试一次。
It looks like the network is down. Let me switch to a recording. | /ɪt lʊks laɪk ðə ˈneˌtwɜːrk ɪz daʊn let miː swɪtʃ tuː ə rəˈkɔːrdɪŋ/ | 看起来网络断了，我切换到录屏。 | 提前录一段备用视频，是最好的保险
I'll walk you through it with screenshots instead. | /aɪl wɔːk juː θruː ɪt wɪð ˈskriːnˌʃɑːts ˌɪnˈsted/ | 我改用截图给大家讲一遍。
Rather than debug this live, let's move on, and I'll fix it afterward. | /ˈræðər ðæn diˈbʌɡ ðɪs laɪv lets muːv ɑːn ənd aɪl fɪks ɪt ˈæftərwərd/ | 与其现场调试，不如继续，我之后修好。
```

## 六、Q&A：接住各种问题

问答环节有四种常见情况：好问题、听不清、不会答、刁难。

```phrases
Great question. Thanks for asking. | /ɡreɪt ˈkwestʃən θæŋks fɔːr ˈæskɪŋ/ | 好问题，谢谢你问。
Let me make sure I understand your question. | /let miː meɪk ʃʊr aɪ ˌʌndərˈstænd jɔːr ˈkwestʃən/ | 我确认一下我理解了你的问题。
Could you repeat the question, please? | /kʊd juː rɪˈpiːt ðə ˈkwestʃən pliːz/ | 你能重复一下问题吗？
Does that answer your question? | /dʌz ðæt ˈænsər jɔːr ˈkwestʃən/ | 这回答了你的问题吗？
That's a good point. We haven't tested that yet. | /ðæts ə ɡʊd pɔɪnt wiː ˈhævənt ˈtestɪd ðæt jet/ | 说得好，我们还没测试过。
I don't have the exact number in front of me. Let me get back to you. | /aɪ doʊnt hæv ðə ɪɡˈzækt ˈnʌmbər ɪn frʌnt ʌv miː let miː ɡet bæk tuː juː/ | 我手头没有确切数字，我之后回复你。 | Let me get back to you 是应付不会答问题的标准说法
I'm not sure, but I can find out and follow up by email. | /aɪm nɑːt ʃʊr bʌt aɪ kæn faɪnd aʊt ənd ˈfɑːloʊ ʌp baɪ iˈmeɪl/ | 我不确定，但我可以查清楚后用邮件跟进。
That's outside the scope of today's talk, but I'm happy to chat afterward. | /ðæts ˈaʊtˈsaɪd ðə skoʊp ʌv təˈdeɪz tɔːk bʌt aɪm ˈhæpi tuː tʃæt ˈæftərwərd/ | 这超出了今天分享的范围，不过我很乐意会后聊。
Let's take that offline, so we can keep to the schedule. | /lets teɪk ðæt ˈɔːˌflaɪn soʊ wiː kæn kiːp tuː ðə ˈskedʒʊl/ | 这个我们会后单独聊，以便按时间进行。 | take it offline 是「会后单独谈」
Can I take one more question? | /kæn aɪ teɪk wʌn mɔːr ˈkwestʃən/ | 我可以再接一个问题吗？
We're running out of time, so this will be the last question. | /wiːr ˈrʌnɪŋ aʊt ʌv taɪm soʊ ðɪs wɪl biː ðə læst ˈkwestʃən/ | 时间快到了，所以这是最后一个问题。
```

### 应对刁难或质疑

```phrases
I understand your concern. Let me explain our reasoning. | /aɪ ˌʌndərˈstænd jɔːr kənˈsɜːrn let miː ɪkˈspleɪn ˈaʊər ˈriːzənɪŋ/ | 我理解你的担忧，让我解释一下我们的思路。
That's a fair criticism. We made that trade-off for simplicity. | /ðæts ə fer ˈkrɪtɪˌsɪzəm wiː meɪd ðæt treɪd ɔːf fɔːr sɪmˈplɪsəti/ | 这是个公平的批评，我们为了简单做了那个取舍。
I see it a little differently, but let's look at the data together. | /aɪ siː ɪt ə ˈlɪtəl ˈdɪfrəntli bʌt lets lʊk æt ðə ˈdeɪtə təˈɡeðər/ | 我的看法略有不同，我们一起看看数据吧。
You raise an important point, and we're working on it. | /juː reɪz æn ˌɪmˈpɔːrtənt pɔɪnt ənd wiːr ˈwɜːrkɪŋ ɑːn ɪt/ | 你提了一个重要的问题，我们正在处理。
I respect that view. Many teams chose a different path. | /aɪ rɪˈspekt ðæt vjuː ˈmeni tiːmz tʃoʊz ə ˈdɪfərənt pæθ/ | 我尊重这种看法，很多团队选择了另一条路。
I'd rather not speculate. Let me check and come back to you. | /aɪd ˈræðər nɑːt ˈspekjəˌleɪt let miː tʃek ənd kʌm bæk tuː juː/ | 我不想瞎猜，让我查一下再回复你。
```

## 七、收尾与缓解紧张

结尾要有力：回顾要点，给出下一步，留下联系方式。

```phrases
Let me quickly summarize the main points. | /let miː ˈkwɪkli ˈsʌmərˌaɪz ðə meɪn pɔɪnts/ | 让我快速总结一下要点。
To recap, we covered the problem, the design, and the results. | /tuː ˈriːˌkæp wiː ˈkʌvərd ðə ˈprɑːbləm ðə dɪˈzaɪn ənd ðə rɪˈzʌlts/ | 回顾一下，我们讲了问题、设计和结果。
If you remember only one thing, remember this. | /ɪf juː rɪˈmembər ˈoʊnli wʌn θɪŋ rɪˈmembər ðɪs/ | 如果你只记住一件事，请记住这个。
The next step is to roll this out to all teams. | /ðə nekst step ɪz tuː roʊl ðɪs aʊt tuː ɔːl tiːmz/ | 下一步是把这个推广到所有团队。
The slides will be shared in the team channel after this. | /ðə slaɪdz wɪl biː ʃerd ɪn ðə tiːm ˈtʃænəl ˈæftər ðɪs/ | 幻灯片会在会后发到团队频道。
Thank you for your time. I'm happy to take questions. | /θæŋk juː fɔːr jɔːr taɪm aɪm ˈhæpi tuː teɪk ˈkwestʃənz/ | 谢谢大家的时间，我很乐意回答问题。
You can reach me on Slack or by email. | /juː kæn riːtʃ miː ɑːn slæk ɔːr baɪ iˈmeɪl/ | 你们可以通过 Slack 或邮件联系我。
```

> [!TIP] 缓解紧张的办法
> - 开头一两句话**背熟**，第一分钟稳了，后面就自然了。
> - 说得**比平时慢百分之二十**，句与句之间停一拍，这会显得自信，也给你思考时间。
> - 英语是第二语言没关系：可以直接说 **English isn't my first language, so please stop me if anything is unclear.** 听众通常很友善。
> - 紧张时深呼吸，喝口水，放在句子间的停顿里完成。

## 八、完整示范稿：三分钟技术分享

下面是一份虚构的三分钟分享讲稿，主题是减少构建时间。

```text
Good morning, everyone. I'm Ming from the platform team. Today I'll talk
about how we cut our build time from twenty minutes to six minutes.

I'll cover three things: first, the problem; second, what we changed; and
third, what we learned.

Let's start with the problem. This chart shows our build time over the last
six months. As you can see, it kept growing, and developers were waiting
about twenty minutes for every pull request. That's a lot of lost focus.

So what did we change? We made three changes. First, we added a dependency
cache. Think of it as keeping your most-used tools on your desk instead of
in the garage. Second, we ran tests in parallel. Third, we removed tests
that were slow and rarely failed.

Here's the architecture. Each pull request triggers the pipeline. This
component, the build cache, is responsible for storing the compiled
dependencies. The test runners then split the test suite into five groups.

The result was that build time dropped from twenty minutes to six minutes,
and developers now get feedback three times faster.

To recap: cache your dependencies, run tests in parallel, and review your
slow tests regularly. If you remember only one thing, remember that fast
feedback changes how people work.

Thank you. I'm happy to take questions.
```

下面把讲稿里最值得背的句子拆出来练习：

```phrases
Today I'll talk about how we cut our build time from twenty minutes to six minutes. | /təˈdeɪ aɪl tɔːk əˈbaʊt haʊ wiː kʌt ˈaʊər bɪld taɪm frʌm ˈtwenti ˈmɪnəts tuː sɪks ˈmɪnəts/ | 今天我要讲我们怎么把构建时间从二十分钟降到六分钟。
Developers were waiting about twenty minutes for every pull request. | /dɪˈveləpərz wɜːr ˈweɪtɪŋ əˈbaʊt ˈtwenti ˈmɪnəts fɔːr ˈevəri pʊl rɪˈkwest/ | 开发者每个 PR 要等大约二十分钟。
We made three changes. | /wiː meɪd θriː ˈtʃeɪndʒəz/ | 我们做了三个改动。
This component is responsible for storing the compiled dependencies. | /ðɪs kəmˈpoʊnənt ɪz riˈspɑːnsəbəl fɔːr ˈstɔːrɪŋ ðə kəmˈpaɪld dɪˈpendənsiz/ | 这个组件负责存储编译好的依赖。
The test runners split the test suite into five groups. | /ðə test ˈrʌnərz splɪt ðə test swiːt ˈɪntu faɪv ɡruːps/ | 测试执行器把测试集分成五组。
Developers now get feedback three times faster. | /dɪˈveləpərz naʊ ɡet ˈfiːdˌbæk θriː taɪmz ˈfæstər/ | 开发者现在得到反馈的速度快了三倍。
Fast feedback changes how people work. | /fæst ˈfiːdˌbæk ˈtʃeɪndʒəz haʊ ˈpiːpəl wɜːrk/ | 快速反馈改变人们的工作方式。
```

## 九、对话：三个场景

### 对话一：Q&A 环节

```dialog
title: 分享结束后的提问
Host: Thanks, Ming. We have time for a few questions. | /θæŋks mɪŋ wiː hæv taɪm fɔːr ə fjuː ˈkwestʃənz/ | 谢谢 Ming，我们还有时间问几个问题。
Anna: Great talk. How did you decide which tests to remove? | /ɡreɪt tɔːk haʊ dɪd juː ˌdɪˈsaɪd wɪtʃ tests tuː riˈmuːv/ | 讲得很好。你们怎么决定删哪些测试？
Ming: Great question. We looked at which tests were slow and almost never failed. | /ɡreɪt ˈkwestʃən wiː lʊkt æt wɪtʃ tests wɜːr sloʊ ənd ˈɔːlˌmoʊst ˈnevər feɪld/ | 好问题。我们看了哪些测试又慢又几乎从不失败。
Anna: Did you worry about losing coverage? | /dɪd juː ˈwɜːri əˈbaʊt ˈluːzɪŋ ˈkʌvərədʒ/ | 你们担心损失覆盖率吗？
Ming: A little. So we moved them to a nightly run instead of deleting them. | /ə ˈlɪtəl soʊ wiː muːvd ðem tuː ə ˈnaɪtli rʌn ˌɪnˈsted ʌv dɪˈliːtɪŋ ðem/ | 有一点，所以我们把它们挪到了夜间运行，而不是直接删除。
Tom: What about the cost of the extra build machines? | /wʌt əˈbaʊt ðə kɑːst ʌv ðə ˈekstrə bɪld məˈʃiːnz/ | 额外构建机器的成本呢？
Ming: I don't have the exact number in front of me. Let me get back to you after the talk. | /aɪ doʊnt hæv ðə ɪɡˈzækt ˈnʌmbər ɪn frʌnt ʌv miː let miː ɡet bæk tuː juː ˈæftər ðə tɔːk/ | 我手头没有确切数字，会后回复你。
Tom: Sure, thanks. | /ʃʊr θæŋks/ | 好的，谢谢。
Host: Let's take one more question. | /lets teɪk wʌn mɔːr ˈkwestʃən/ | 我们再接一个问题。
```

### 对话二：应对刁难的问题

```dialog
title: 听众提出尖锐质疑
Skeptic: Honestly, I think this approach is overkill. A simple retry would have fixed your flaky tests. | /ˈɑːnəstli aɪ θɪŋk ðɪs əˈproʊtʃ ɪz ˈoʊvərˌkɪl ə ˈsɪmpəl riˈtraɪ wʊd hæv fɪkst jɔːr ˈfleɪki tests/ | 说实话，我觉得这个方法是小题大做，简单重试就能解决你们的不稳定测试。
Ming: I understand your concern. Retries were actually our first attempt. | /aɪ ˌʌndərˈstænd jɔːr kənˈsɜːrn riːˈtraɪz wɜːr ˈækˌtʃuːəli ˈaʊər fɜːrst əˈtempt/ | 我理解你的顾虑。重试其实是我们的第一次尝试。
Skeptic: And? | /ənd/ | 然后呢？
Ming: They hid the real problem. The flakiness was caused by shared test data. | /ðeɪ hɪd ðə riːl ˈprɑːbləm ðə ˈfleɪkinəs wɑːz kɑːzd baɪ ʃerd test ˈdeɪtə/ | 它们掩盖了真正的问题，不稳定是共享测试数据造成的。
Skeptic: Fair enough, but it still sounds like a lot of work. | /fer ɪˈnʌf bʌt ɪt stɪl saʊndz laɪk ə lɑːt ʌv wɜːrk/ | 有道理，不过听起来工作量还是很大。
Ming: That's a fair point. It took us about three weeks. | /ðæts ə fer pɔɪnt ɪt tʊk ʌs əˈbaʊt θriː wiːks/ | 这点说得对，我们花了大约三周。
Ming: But we've saved far more than that in waiting time. I'm happy to share the numbers afterward. | /bʌt wiːv seɪvd fɑːr mɔːr ðæn ðæt ɪn ˈweɪtɪŋ taɪm aɪm ˈhæpi tuː ʃer ðə ˈnʌmbərz ˈæftərwərd/ | 不过我们节省的等待时间远超三周，会后我很乐意分享数据。
Skeptic: Okay, I'd like to see them. | /ˌoʊˈkeɪ aɪd laɪk tuː siː ðem/ | 好，我想看看。
```

### 对话三：演示翻车

```dialog
title: 现场演示失败的应对
Ming: Now I'll show you the new pipeline. I'll click deploy. | /naʊ aɪl ʃoʊ juː ðə nuː ˈpaɪˌplaɪn aɪl klɪk dɪˈplɔɪ/ | 现在我给大家演示新的流水线，我点部署。
Ming: Hmm, that's not what I expected. It's stuck on the login step. | /hm ðæts nɑːt wʌt aɪ ɪkˈspektəd ɪts stʌk ɑːn ðə ˈlɔːˌɡɪn step/ | 嗯，这和我预期的不一样，卡在登录步骤了。
Host: Is everything okay? | /ɪz ˈevriˌθɪŋ ˌoʊˈkeɪ/ | 一切还好吗？
Ming: The demo gods are not with me today. Let me try that again. | /ðə ˈdemoʊ ɡɑːdz ɑːr nɑːt wɪð miː təˈdeɪ let miː traɪ ðæt əˈɡen/ | 今天演示之神没站在我这边，我再试一次。
Ming: Same thing. It looks like the network is down. | /seɪm θɪŋ ɪt lʊks laɪk ðə ˈneˌtwɜːrk ɪz daʊn/ | 一样，看起来网络断了。
Ming: Rather than debug this live, let me switch to a recording I made yesterday. | /ˈræðər ðæn diˈbʌɡ ðɪs laɪv let miː swɪtʃ tuː ə rəˈkɔːrdɪŋ aɪ meɪd ˈjestərˌdeɪ/ | 与其现场调试，我切换到昨天录的视频吧。
Host: Great idea. | /ɡreɪt aɪˈdiːə/ | 好主意。
Ming: Here you can see the pipeline running end to end in under six minutes. | /hiːr juː kæn siː ðə ˈpaɪˌplaɪn ˈrʌnɪŋ end tuː end ɪn ˈʌndər sɪks ˈmɪnəts/ | 这里你们可以看到流水线在不到六分钟里端到端跑完。
Ming: I'll fix the network issue and share a live link in the team channel afterward. | /aɪl fɪks ðə ˈneˌtwɜːrk ˈɪʃu ənd ʃer ə laɪv lɪŋk ɪn ðə tiːm ˈtʃænəl ˈæftərwərd/ | 我会修好网络，之后在团队频道里分享可用的链接。
```

> [!QUESTION] 想检验自己：被问到不会答的问题，怎么说既不丢脸又留有后路？
> ```phrases
> I don't have the exact number in front of me. Let me get back to you. | /aɪ doʊnt hæv ðə ɪɡˈzækt ˈnʌmbər ɪn frʌnt ʌv miː let miː ɡet bæk tuː juː/ | 我手头没有确切数字，我之后回复你。
> ```

> [!QUESTION] 想检验自己：怎么在讲完一部分后，自然地过渡到下一部分？
> ```phrases
> That covers the first part. Now let's move on to the design. | /ðæt ˈkʌvərz ðə fɜːrst pɑːrt naʊ lets muːv ɑːn tuː ðə dɪˈzaɪn/ | 第一部分讲完了，现在讲设计。
> ```

> [!QUESTION] 想检验自己：怎么用一句话向非技术人员解释「缓存」？
> ```phrases
> A cache is like keeping your most-used tools on your desk instead of in the garage. | /ə kæʃ ɪz laɪk ˈkiːpɪŋ jɔːr moʊst juːzd tuːlz ɑːn jɔːr desk ˌɪnˈsted ʌv ɪn ðə ɡərˈɑːʒ/ | 缓存就像把最常用的工具放在桌上，而不是放在车库里。
> ```

> [!QUESTION] 想检验自己：现场演示失败了，怎么稳住场面？
> ```phrases
> It looks like the network is down. Let me switch to a recording. | /ɪt lʊks laɪk ðə ˈneˌtwɜːrk ɪz daʊn let miː swɪtʃ tuː ə rəˈkɔːrdɪŋ/ | 看起来网络断了，我切换到录屏。
> ```
