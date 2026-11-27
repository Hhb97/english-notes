---
level: 进阶
summary: Slack 等即时消息里的短句、@提醒、线程、Quick question、FYI、LGTM，常见缩写怎么读怎么用，以及文字沟通的语气陷阱和异步礼仪。
tags: [Slack, 即时消息, 缩写, 异步, 语气, 进阶]
---

# Slack 与即时消息

> [!ABSTRACT]
> - 聊天消息要**短、直接、一条消息带上足够的上下文**，不要只发一个 **Hi** 然后等对方回。
> - 常见开头：**Quick question…**（简单问个问题）、**FYI…**（供参考）、**Heads up…**（提前打个招呼）。
> - 缩写在聊天里很多，但**读出来的方式**和**用法的场合**要学会：LGTM、ASAP、EOD、ICYMI、PTAL。
> - 文字没有表情和语气，**太短会显得冷淡，太直接会显得生硬**，必要时加一句缓冲。

## 一、消息要短，但要带上下文

聊天不是写邮件：一两句话就够，但要让对方不用追问就知道你要什么。

```phrases
Quick question: do you know where the staging logs are? | /kwɪk ˈkwestʃən duː juː noʊ wer ðə ˈsteɪdʒɪŋ lɔːɡz ɑːr/ | 简单问一下：你知道测试环境的日志在哪吗？
Hey Anna, do you have a minute? | /heɪ ˈænə duː juː hæv ə ˈmɪnət/ | 嘿 Anna，你有空吗？ | 比只发 Hi 好，但最好直接把问题带上
Hi Tom, I'm seeing a timeout on the login API. Any idea what's going on? | /haɪ tɑːm aɪm ˈsiːɪŋ ə ˈtaɪˌmaʊt ɑːn ðə ˈlɔːˌɡɪn ˌeɪˌpiːˈaɪ ˈeni aɪˈdiːə wʌts ˈɡoʊɪŋ ɑːn/ | Tom 你好，我看到登录接口超时，知道怎么回事吗？ | 一条消息里讲完问题，对方不用来回追问
Not urgent, but could you take a look when you get a chance? | /nɑːt ˈɜːrdʒənt bʌt kʊd juː teɪk ə lʊk wen juː ɡet ə tʃæns/ | 不急，但你有空时能看一下吗？ | 说明紧急程度能减轻对方压力
Sorry to bug you, but I'm stuck on this. | /ˈsɑːri tuː bʌɡ juː bʌt aɪm stʌk ɑːn ðɪs/ | 抱歉打扰你，但我被这个卡住了。 | bug 在这里是动词，指"打扰"
Thanks, that worked! | /θæŋks ðæt wɜːrkt/ | 谢谢，成功了！
Got it, thanks. | /ɡɑːt ɪt θæŋks/ | 明白了，谢谢。
Makes sense. | /meɪks sens/ | 有道理。
Sounds good. | /saʊndz ɡʊd/ | 听起来不错。
No worries. | /noʊ ˈwɜːriz/ | 没关系。 | 回应别人的道歉或感谢，很随意
Let me know if that helps. | /let miː noʊ ɪf ðæt helps/ | 看看这样有没有帮助，告诉我。
Happy to help. | /ˈhæpi tuː help/ | 乐意帮忙。
```

> [!TIP] 别只发 "Hi" 就沉默
> 很多人发完 **Hi Anna** 就等她回，Anna 回了 **Hi**，两个人来回三轮才开始说正事。英语职场里，**直接在第一条消息里把问题写完**是礼貌，因为对方可以在方便时一次性回答。

## 二、@提醒与线程

**@mention** 会给对方发通知；**thread（线程）**能把对话收在一条消息下面，避免刷屏。

```phrases
@Anna, could you take a look at this? | /ˈænə kʊd juː teɪk ə lʊk æt ðɪs/ | @Anna，能看一下这个吗？
@here, the staging environment is down. | /hiːr ðə ˈsteɪdʒɪŋ ɪnˈvaɪrənmənt ɪz daʊn/ | @here，测试环境挂了。 | @here 通知频道里在线的人
@channel, please read before the meeting. | /ˈtʃænəl pliːz red bɪˈfɔːr ðə ˈmiːtɪŋ/ | @channel，开会前请阅读。 | @channel 会通知所有人，要谨慎使用
Let's move this to a thread. | /lets muːv ðɪs tuː ə θred/ | 我们把这个挪到线程里吧。
Replying in thread to keep the channel clean. | /rɪˈplaɪɪŋ ɪn θred tuː kiːp ðə ˈtʃænəl kliːn/ | 在线程里回复，免得刷频道。
Adding Tom to this conversation. | /ˈædɪŋ tɑːm tuː ðɪs ˌkɑːnvərˈseɪʃən/ | 把 Tom 拉到这个对话里。
Can you tag me in the pull request? | /kæn juː tæɡ miː ɪn ðə pʊl rɪˈkwest/ | 你能在 PR 里 @ 我吗？
Following this thread. | /ˈfɑːloʊɪŋ ðɪs θred/ | 我关注一下这个线程。
Let me start a thread for the details. | /let miː stɑːrt ə θred fɔːr ðə dɪˈteɪlz/ | 我开个线程讲细节。
Can we take this to a call? | /kæn wiː teɪk ðɪs tuː ə kɔːl/ | 我们能转成语音通话吗？ | 文字讲不清楚时的最好办法
```

> [!WARNING] @channel 和 @here 要少用
> 一个有两百人的频道里发 **@channel**，会让每个人手机震一下。只有真正重要、紧急、所有人都要知道的事才用。其他情况直接 @ 具体的人。

## 三、几个常用的开头词

这些词放在消息最前面，让对方一眼知道这条消息的性质。

```phrases
FYI, the release is moved to Thursday. | /ˌef waɪ ˈaɪ ðə riˈliːs ɪz muːvd tuː ˈθɜːrzˌdeɪ/ | 供参考，发布挪到周四了。 | 不需要回复
Heads up: we're deploying at five today. | /hedz ʌp wiːr dɪˈplɔɪɪŋ æt faɪv təˈdeɪ/ | 提醒一下：我们今天五点部署。 | 提前通知，让大家有准备
Quick update: the fix is merged. | /kwɪk əpˈdeɪt ðə fɪks ɪz mɜːrdʒd/ | 简短更新：修复已合并。
Reminder: the demo is tomorrow at ten. | /riˈmaɪndər ðə ˈdemoʊ ɪz təˈmɑːˌroʊ æt ten/ | 提醒：演示在明天十点。
Question for the group: who owns the billing service? | /ˈkwestʃən fɔːr ðə ɡruːp huː oʊnz ðə ˈbɪlɪŋ ˈsɜːrvəs/ | 向大家问一下：账单服务是谁负责的？
Ping me if you need anything. | /pɪŋ miː ɪf juː niːd ˈeniˌθɪŋ/ | 需要什么就找我。 | ping 是"发消息给我"的意思
I'll ping you after the meeting. | /aɪl pɪŋ juː ˈæftər ðə ˈmiːtɪŋ/ | 会后我给你发消息。
Can you ping Tom about this? | /kæn juː pɪŋ tɑːm əˈbaʊt ðɪs/ | 你能为这件事找一下 Tom 吗？
Just a nudge on this. | /dʒʌst ə nʌdʒ ɑːn ðɪs/ | 轻轻提醒一下这件事。 | nudge 是"轻推"，比 reminder 更温和
Any thoughts? | /ˈeni θɔːts/ | 有什么想法吗？
```

## 四、代码评审与确认类消息

在工程团队里，这几句每天都会听到。

```phrases
LGTM. Merging now. | /ˌel dʒiː tiː ˈem ˈmɜːrdʒɪŋ naʊ/ | 看起来没问题，我现在合并。 | LGTM 读作 L-G-T-M，是 looks good to me 的缩写
Looks good to me. | /lʊks ɡʊd tuː miː/ | 我觉得没问题。
Approved. Nice work! | /əˈpruːvd naɪs wɜːrk/ | 批准了，干得漂亮！
Left a few comments. | /left ə fjuː ˈkɑːments/ | 我留了几条评论。
Can you please take another look? | /kæn juː pliːz teɪk əˈnʌðər lʊk/ | 你能再看一眼吗？
PTAL when you have time. | /piː tiː eɪ el wen juː hæv taɪm/ | 有空时请看一下。 | PTAL 是 please take a look，常见于 PR 描述
This is ready for review. | /ðɪs ɪz ˈredi fɔːr ˌriːˈvjuː/ | 这个可以评审了。
Just a small nit, but otherwise looks good. | /dʒʌst ə smɔːl nɪt bʌt ˈʌðərˌwaɪz lʊks ɡʊd/ | 只有个小细节，其余没问题。 | nit 是 nitpick 的缩写，指无关紧要的小问题
Can you add a test for this? | /kæn juː æd ə test fɔːr ðɪs/ | 你能为这个加个测试吗？
I'll take this one. | /aɪl teɪk ðɪs wʌn/ | 这个我来接。
I'm on it. | /aɪm ɑːn ɪt/ | 我来处理。 | 表示"我在做了"
Done. | /dʌn/ | 做完了。
```

## 五、缩写：怎么读，怎么用

聊天里的缩写大多数按字母读，少数当单词读。下面的单词卡把读音和意思一起记。

### 日常聊天缩写

```words
BRB | /biː ɑːr biː/ | phr. 马上回来 (be right back) | BRB, grabbing a coffee. | /biː ɑːr biː ˈɡræbɪŋ ə ˈkɑːfi/ | 马上回来，去拿杯咖啡。
AFK | /eɪ ef keɪ/ | phr. 暂时离开键盘 (away from keyboard) | I'll be AFK for lunch. | /aɪl biː eɪ ef keɪ fɔːr lʌntʃ/ | 我午饭时不在。
NP | /en piː/ | phr. 没问题 (no problem) | Thanks for the help! NP. | /θæŋks fɔːr ðə help en piː/ | 谢谢你的帮忙！没问题。
TY | /ˌtiːˈwaɪ/ | phr. 谢谢 (thank you) | TY for the quick fix. | /ˌtiːˈwaɪ fɔːr ðə kwɪk fɪks/ | 谢谢你快速修复。
IMO | /ˌaɪˌemˈoʊ/ | phr. 在我看来 (in my opinion) | IMO, the old design was simpler. | /ˌaɪˌemˈoʊ ðə oʊld dɪˈzaɪn wɑːz ˈsɪmpələr/ | 在我看来，旧设计更简单。
IIRC | /aɪ aɪ ɑːr siː/ | phr. 如果我没记错 (if I recall correctly) | IIRC, we set the limit to one hundred. | /aɪ aɪ ɑːr siː wiː set ðə ˈlɪmət tuː wʌn ˈhʌndrəd/ | 如果我没记错，我们把限额设成了一百。
AFAIK | /eɪ ef eɪ aɪ keɪ/ | phr. 据我所知 (as far as I know) | AFAIK, the deploy is tonight. | /eɪ ef eɪ aɪ keɪ ðə dɪˈplɔɪ ɪz təˈnaɪt/ | 据我所知，部署在今晚。
ICYMI | /aɪ siː waɪ em aɪ/ | phr. 以防你错过 (in case you missed it) | ICYMI, the recording is in the channel. | /aɪ siː waɪ em aɪ ðə rəˈkɔːrdɪŋ ɪz ɪn ðə ˈtʃænəl/ | 以防你错过，录像在频道里。
NVM | /en viː em/ | phr. 算了 (never mind) | NVM, I found the bug. | /en viː em aɪ faʊnd ðə bʌɡ/ | 算了，我找到 bug 了。
IDK | /aɪ diː keɪ/ | phr. 我不知道 (I don't know) | IDK, let me check. | /aɪ diː keɪ let miː tʃek/ | 我不知道，我去查一下。
```

### 工作进度类缩写

```words
ASAP | /ˌeɪ es eɪ ˈpiː/ | adv. 尽快 (as soon as possible) | Can you review this ASAP? | /kæn juː ˌriːˈvjuː ðɪs ˌeɪ es eɪ ˈpiː/ | 你能尽快评审这个吗？
EOD | /iː oʊ diː/ | n. 下班前 (end of day) | I'll send the report by EOD. | /aɪl send ðə riˈpɔːrt baɪ iː oʊ diː/ | 我下班前发报告。
ETA | /iː tiː eɪ/ | n. 预计完成时间 (estimated time of arrival) | What's the ETA for the fix? | /wʌts ðə iː tiː eɪ fɔːr ðə fɪks/ | 修复预计什么时候好？
TL;DR | /ˌtiː ˈel ˌdiː ˈɑːr/ | n. 太长不看；摘要 (too long, didn't read) | TL;DR: we need two more days. | /ˌtiː ˈel ˌdiː ˈɑːr wiː niːd tuː mɔːr deɪz/ | 简单说：我们还需要两天。
WIP | /ˌdʌbəl juː aɪ ˈpiː/ | n. 进行中的工作 (work in progress) | This pull request is a WIP. | /ðɪs pʊl rɪˈkwest ɪz ə ˌdʌbəl juː aɪ ˈpiː/ | 这个 PR 还在进行中。
OOO | /oʊ oʊ oʊ/ | adj. 不在办公室 (out of office) | I'm OOO next week. | /aɪm oʊ oʊ oʊ nekst wiːk/ | 我下周不在。
WFH | /ˈdʌbəl juː ef eɪtʃ/ | n. 在家办公 (work from home) | I'm WFH tomorrow. | /aɪm ˈdʌbəl juː ef eɪtʃ təˈmɑːˌroʊ/ | 我明天在家办公。
PTO | /piː tiː oʊ/ | n. 带薪休假 (paid time off) | I'll be on PTO from Monday. | /aɪl biː ɑːn piː tiː oʊ frʌm ˈmʌndi/ | 我从周一开始休带薪假。
FYI | /ˌef waɪ ˈaɪ/ | phr. 供参考 (for your information) | FYI, the API changed. | /ˌef waɪ ˈaɪ ðə ˌeɪˌpiːˈaɪ tʃeɪndʒd/ | 供参考，接口变了。
TBD | /ˌtiːˌbiːˈdiː/ | adj. 待定 (to be decided) | The release date is TBD. | /ðə riˈliːs deɪt ɪz ˌtiːˌbiːˈdiː/ | 发布日期待定。
```

> [!TIP] 读法记两点
> - **ASAP** 有两种读法：A-S-A-P（按字母）或 AY-sap（当单词读），都可以。
> - **TL;DR** 读作 T-L-D-R，或 **too long, didn't read**。**LGTM** 读 L-G-T-M。

```phrases
I'll be AFK for a bit. | /aɪl biː eɪ ef keɪ fɔːr ə bɪt/ | 我离开一会儿。
BRB. | /biː ɑːr biː/ | 马上回来。
I'm OOO next Monday. | /aɪm oʊ oʊ oʊ nekst ˈmʌndi/ | 我下周一不在。
I'll be WFH on Wednesday. | /aɪl biː ˈdʌbəl juː ef eɪtʃ ɑːn ˈwenzdi/ | 我周三在家办公。
Can you send it by EOD? | /kæn juː send ɪt baɪ iː oʊ diː/ | 你能在下班前发出来吗？
TL;DR: the fix is merged. | /ˌtiː ˈel ˌdiː ˈɑːr ðə fɪks ɪz mɜːrdʒd/ | 简单说：修复已合并。
IMO, we should wait. | /ˌaɪˌemˈoʊ wiː ʃʊd weɪt/ | 在我看来，我们应该等等。
NP, glad I could help. | /en piː ɡlæd aɪ kʊd help/ | 没事，很高兴能帮上忙。
```

## 六、表情符号与语气

Slack 里的表情符号不是装饰，它是**异步沟通里的"点头和微笑"**。几个常见含义：

| 表情 | 含义 |
| --- | --- |
| thumbs up | 收到了，同意，没问题 |
| eyes | 我在看，我在跟进 |
| check mark | 做完了 |
| raised hands | 感谢，庆祝 |
| thinking face | 我在想，不确定 |

```phrases
I'll react with a thumbs up if I've seen it. | /aɪl riˈækt wɪð ə θʌmz ʌp ɪf aɪv siːn ɪt/ | 我看过了就用点赞回应一下。
Just react with an eyes emoji if you're looking at it. | /dʒʌst riˈækt wɪð æn aɪz ɪˈmoʊdʒi ɪf jʊr ˈlʊkɪŋ æt ɪt/ | 如果你在看，就加个"眼睛"表情。
Adding a check mark when it's done. | /ˈædɪŋ ə tʃek mɑːrk wen ɪts dʌn/ | 做完后我加一个对勾。
We use a thumbs up to say "I've read this." | /wiː juːs ə θʌmz ʌp tuː seɪ aɪv red ðɪs/ | 我们用点赞表示"我已读"。
Let's use emoji to vote. | /lets juːs ɪˈmoʊdʒi tuː voʊt/ | 我们用表情来投票吧。
```

> [!TIP] 一个 thumbs up 就可以回复
> 对"收到请回复"类的消息，点个 thumbs up 比发一条 **OK** 更轻、更少打扰对方。但如果对方问了问题，就得文字回答。

## 七、文字沟通里的语气陷阱

打字没有语调，**短句容易被读成冷淡甚至生气**。尤其是中国同事习惯"能短则短"，在英文聊天里要多加一点缓冲。

```phrases
Hey, could you take a look at this when you have a minute? | /heɪ kʊd juː teɪk ə lʊk æt ðɪs wen juː hæv ə ˈmɪnət/ | 嘿，你有空时能看一下这个吗？ | 加了 Hey 和 when you have a minute，语气柔和
Thanks for flagging this! | /θæŋks fɔːr ˈflæɡɪŋ ðɪs/ | 谢谢你指出这点！ | 对别人的提醒先表示感谢
I might be missing something, but should this be a string? | /aɪ maɪt biː ˈmɪsɪŋ ˈsʌmθɪŋ bʌt ʃʊd ðɪs biː ə strɪŋ/ | 也许我漏了什么，但这里是不是应该是字符串？ | I might be missing something 是指出问题前的缓冲
Totally understand. Let's figure it out. | /ˈtoʊtəli ˌʌndərˈstænd lets ˈfɪɡjər ɪt aʊt/ | 完全理解，我们一起想办法。
Sorry, I think I wasn't clear. Let me rephrase. | /ˈsɑːri aɪ θɪŋk aɪ ˈwɑːzənt klɪr let miː riˈfreɪz/ | 抱歉，我想我没讲清楚，让我换种说法。
No rush on this. | /noʊ rʌʃ ɑːn ðɪs/ | 这个不急。
Just to make sure we're on the same page. | /dʒʌst tuː meɪk ʃʊr wiːr ɑːn ðə seɪm peɪdʒ/ | 只是确认一下我们理解一致。 | on the same page 是"想法一致"
Hope that makes sense! | /hoʊp ðæt meɪks sens/ | 希望这样说得通！ | 结尾加一句，显得友好
Great catch! | /ɡreɪt kætʃ/ | 抓得好！ | 夸别人发现了问题
```

> [!CAUTION] 容易被误读的几种写法
> - 只发 **Ok.**（带句号）：在英语聊天里会显得冷淡甚至不耐烦。用 **Ok, thanks!** 或 **Sounds good.**
> - 只发 **Why?**：像质问。改成 **Could you help me understand why?**
> - 全大写 **PLEASE FIX THIS**：等于在喊叫。
> - **Do you have time?** 然后不说事：对方不知道你要占用多久。直接说 **Do you have five minutes to look at a bug?**
> - 连续发多条短消息刷屏：把话合并成一条，或者放进线程。

## 八、异步沟通的礼仪

异步（async）意味着对方不需要立刻回复。让对方能在自己方便的时候一次读懂、一次回复。

```phrases
No rush, reply when you get a chance. | /noʊ rʌʃ rɪˈplaɪ wen juː ɡet ə tʃæns/ | 不着急，你方便时回复。
Let's keep this async. | /lets kiːp ðɪs ˈeɪsɪŋk/ | 我们用异步方式处理吧。
I'll respond when I'm back at my desk. | /aɪl rɪˈspɑːnd wen aɪm bæk æt maɪ desk/ | 我回到座位后回复。
I won't be online until after lunch. | /aɪ woʊnt biː ˈɔːnˌlaɪn ənˈtɪl ˈæftər lʌntʃ/ | 我午饭之后才在线。
Sorry for the late reply. I was in meetings all day. | /ˈsɑːri fɔːr ðə leɪt rɪˈplaɪ aɪ wɑːz ɪn ˈmiːtɪŋz ɔːl deɪ/ | 抱歉回复晚了，我开了一整天会。
Please reply in this thread so we can keep track. | /pliːz rɪˈplaɪ ɪn ðɪs θred soʊ wiː kæn kiːp træk/ | 请在这个线程里回复，方便追踪。
I'll respond by end of day. | /aɪl rɪˈspɑːnd baɪ end ʌv deɪ/ | 我今天下班前回复。
Let me think about it and get back to you. | /let miː θɪŋk əˈbaʊt ɪt ənd ɡet bæk tuː juː/ | 让我想想，回头再答复你。
Can we sync for five minutes on this? | /kæn wiː sɪŋk fɔːr faɪv ˈmɪnəts ɑːn ðɪs/ | 我们能就这个简单同步五分钟吗？ | sync 指短时间面对面或语音沟通
Do not disturb until nine. | /duː nɑːt dɪˈstɜːrb ənˈtɪl naɪn/ | 九点之前请勿打扰。
I'm heads-down this afternoon. | /aɪm hedz daʊn ðɪs ˌæftərˈnuːn/ | 我今天下午要专心工作。 | heads-down 指"埋头做事，不看消息"
```

> [!WARNING] 美国同事下班后通常不回消息
> 在美国，大家默认下班后和周末不回工作消息。如果你发的不紧急，可以说 **No rush, tomorrow is fine.**；如果真的紧急，才直接打电话，并写明 **urgent**。

## 九、对话：聊天里的真实交流

### 问一个简单的问题

```dialog
title: Slack 里问同事一个问题
Ming: Hey Anna, quick question: where do I find the staging logs? | /heɪ ˈænə kwɪk ˈkwestʃən wer duː aɪ faɪnd ðə ˈsteɪdʒɪŋ lɔːɡz/ | 嘿 Anna，简单问一下：测试环境的日志在哪看？
Anna: They're in the monitoring dashboard. Let me send you the link. | /ðer ɪn ðə ˈmɑːnətərɪŋ ˈdæʃˌbɔːrd let miː send juː ðə lɪŋk/ | 在监控面板里，我把链接发你。
Anna: Here you go. | /hiːr juː ɡoʊ/ | 给你。
Ming: Thanks! That's exactly what I needed. | /θæŋks ðæts ɪɡˈzæktli wʌt aɪ ˈniːdəd/ | 谢谢！这正是我要的。
Anna: NP. Let me know if you can't find the right filter. | /en piː let miː noʊ ɪf juː kænt faɪnd ðə raɪt ˈfɪltər/ | 不客气，如果找不到合适的过滤条件告诉我。
Ming: Will do. | /wɪl duː/ | 好的。
Anna: Also, FYI, the logs are only kept for seven days. | /ˈɔːlsoʊ ˌef waɪ ˈaɪ ðə lɔːɡz ɑːr ˈoʊnli kept fɔːr ˈsevən deɪz/ | 另外供参考，日志只保留七天。
Ming: Good to know, thanks. | /ɡʊd tuː noʊ θæŋks/ | 知道了，谢谢。
```

### 代码评审

```dialog
title: 在聊天里请人看 PR
Ming: Hi Tom, PTAL at my pull request when you have time. | /haɪ tɑːm piː tiː eɪ el æt maɪ pʊl rɪˈkwest wen juː hæv taɪm/ | Tom 你好，有空时请看一下我的 PR。
Tom: Sure, is it urgent? | /ʃʊr ɪz ɪt ˈɜːrdʒənt/ | 好的，紧急吗？
Ming: Not really. EOD tomorrow is fine. | /nɑːt ˈrɪli iː oʊ diː təˈmɑːˌroʊ ɪz faɪn/ | 不算，明天下班前就行。
Tom: Got it. I'll look at it this afternoon. | /ɡɑːt ɪt aɪl lʊk æt ɪt ðɪs ˌæftərˈnuːn/ | 明白，我今天下午看。
Tom: Left a few comments. Just a small nit on the naming. | /left ə fjuː ˈkɑːments dʒʌst ə smɔːl nɪt ɑːn ðə ˈneɪmɪŋ/ | 留了几条评论，命名上有个小细节。
Ming: Thanks, I'll fix it now. | /θæŋks aɪl fɪks ɪt naʊ/ | 谢谢，我现在改。
Ming: Updated. PTAL again? | /əpˈdeɪtɪd piː tiː eɪ el əˈɡen/ | 改好了，能再看一下吗？
Tom: LGTM. Merging now. | /ˌel dʒiː tiː ˈem ˈmɜːrdʒɪŋ naʊ/ | 没问题，现在合并。
```

### 一场事故里的快速沟通

```dialog
title: 事故频道里的短消息
Lead: Heads up, the checkout page is returning errors. | /hedz ʌp ðə ˈtʃeˌkaʊt peɪdʒ ɪz rɪˈtɜːrnɪŋ ˈerərz/ | 注意，结账页面在报错。
Dev: I'm on it. | /aɪm ɑːn ɪt/ | 我来处理。
Lead: Do we know the cause? | /duː wiː noʊ ðə kɑːz/ | 知道原因吗？
Dev: IIRC, we changed the cache settings this morning. Checking now. | /aɪ aɪ ɑːr siː wiː tʃeɪndʒd ðə kæʃ ˈsetɪŋz ðɪs ˈmɔːrnɪŋ ˈtʃekɪŋ naʊ/ | 如果我没记错，今天早上我们改了缓存配置，我在查。
Lead: ETA for a fix? | /iː tiː eɪ fɔːr ə fɪks/ | 修好大概要多久？
Dev: About thirty minutes. I'll update you in this thread. | /əˈbaʊt ˈθɜːrˌdiː ˈmɪnəts aɪl əpˈdeɪt juː ɪn ðɪs θred/ | 大概三十分钟，我会在这个线程里更新。
Lead: Thanks. @Anna, can you let support know? | /θæŋks ˈænə kæn juː let səˈpɔːrt noʊ/ | 谢谢。@Anna，你能通知客服吗？
Anna: Done. Support is informed. | /dʌn səˈpɔːrt ɪz ˌɪnˈfɔːrmd/ | 好了，客服已通知。
```

> [!QUESTION] 想检验自己：怎么在聊天里礼貌地问同事一个问题，同时不打扰对方？
> ```phrases
> Quick question when you get a chance: where do I find the staging logs? | /kwɪk ˈkwestʃən wen juː ɡet ə tʃæns wer duː aɪ faɪnd ðə ˈsteɪdʒɪŋ lɔːɡz/ | 你有空时我想问一下：测试环境日志在哪看？
> ```

> [!QUESTION] 想检验自己：想请同事评审你的 PR，怎么说？
> ```phrases
> PTAL at my pull request when you have time. No rush. | /piː tiː eɪ el æt maɪ pʊl rɪˈkwest wen juː hæv taɪm noʊ rʌʃ/ | 有空时请看一下我的 PR，不着急。
> ```

> [!QUESTION] 想检验自己：怎么说"我今天下班前回复你"？
> ```phrases
> I'll get back to you by end of day. | /aɪl ɡet bæk tuː juː baɪ end ʌv deɪ/ | 我今天下班前答复你。
> ```
