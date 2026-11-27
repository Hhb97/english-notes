---
level: 深入
summary: 线上故障从宣布、分级、分工、同步进展、止血回滚，到向客户和高管沟通、交接 on-call 与事后复盘的完整英文说法和模板。
tags: [故障, Incident, On-call, 状态更新, 复盘, 深入]
---

# 线上故障沟通

> [!ABSTRACT]
> - 故障沟通的原则：**先说事实、再说影响、最后说下一步和下次更新时间**。不猜测，不甩锅。
> - 关键区分：**mitigation**（止血，先让用户恢复）和 **fix**（根治）；**root cause**（根因）要等确认后再说。
> - 状态更新有固定节奏：**Investigating → Identified → Monitoring → Resolved**。
> - 对客户用简单、诚恳的话；对高管先给结论和影响面；技术细节放后面。

## 一、宣布故障与分级

发现问题的第一个人要大声说出来，别等别人先开口。

```phrases
I'm declaring an incident. | /aɪm dɪˈklerɪŋ æn ˈɪnsədənt/ | 我宣布进入故障处理。 | declare an incident 是正式启动流程的说法
We have a production issue. Checkout is failing for some users. | /wiː hæv ə prəˈdʌkʃən ˈɪʃu ˈtʃeˌkaʊt ɪz ˈfeɪlɪŋ fɔːr sʌm ˈjuːzərz/ | 我们有个线上问题，部分用户结账失败。
The error rate has spiked to thirty percent. | /ðə ˈerər reɪt hæz spaɪkt tuː ˈθɜːrˌdiː pərˈsent/ | 错误率飙升到了百分之三十。 | spike = 突然飙升
Alerts are firing for the payment service. | /əˈlɜːrts ɑːr ˈfaɪrɪŋ fɔːr ðə ˈpeɪmənt ˈsɜːrvəs/ | 支付服务的告警在响。 | fire 用于告警触发
Is anyone else seeing this? | /ɪz ˈeniˌwʌn els ˈsiːɪŋ ðɪs/ | 还有别人看到这个情况吗？
Let's open a bridge call. | /lets ˈoʊpən ə brɪdʒ kɔːl/ | 我们拉个应急电话会议吧。 | bridge call = 故障处理时临时开的多人会议
I'm setting this as severity one. | /aɪm ˈsetɪŋ ðɪs æz sɪˈverɪti wʌn/ | 我把它定为一级故障。 | severity one 是最高级，常写作 Sev one 或 P zero
This is severity two. Users are affected, but there's a workaround. | /ðɪs ɪz sɪˈverɪti tuː ˈjuːzərz ɑːr əˈfektɪd bʌt ðerz ə ˈwɜːrkəraʊnd/ | 这是二级故障，用户受影响，但有绕过办法。
What's the customer impact? | /wʌts ðə ˈkʌstəmər ˌɪmˈpækt/ | 对客户的影响是什么？
It's a partial outage. Roughly ten percent of requests are failing. | /ɪts ə ˈpɑːrʃəl ˈaʊtədʒ ˈrʌfli ten pərˈsent ʌv rɪˈkwests ɑːr ˈfeɪlɪŋ/ | 这是部分故障，大约有百分之十的请求在失败。
```

> [!TIP] 严重级别的常见定义
> 各公司叫法不同（Sev one、P zero、Critical），大意类似：**一级**：核心功能全面不可用或数据受损，所有人立刻处理；**二级**：核心功能部分受影响；**三级**：影响小，工作时间处理即可。开会前先确认大家用的是哪套定义。

## 二、分配角色

人多的故障要有明确的角色，否则大家会一起查、没人沟通。

```phrases
Who's the incident commander? | /huːz ðə ˈɪnsədənt kəˈmændər/ | 谁是故障指挥官？ | incident commander，常缩写 IC，负责协调、不亲自动手改代码
I'll take incident commander. | /aɪl teɪk ˈɪnsədənt kəˈmændər/ | 我来当指挥官。
Can you be the communications lead and post updates? | /kæn juː biː ðə kəˌmjuːnəˈkeɪʃənz led ənd poʊst əpˈdeɪts/ | 你来当沟通负责人，负责发更新吗？
I'll lead the investigation on the database side. | /aɪl led ðə ˌɪnˌvestəˈɡeɪʃən ɑːn ðə ˈdeɪtəˌbeɪs saɪd/ | 数据库这块我来主导排查。
Please keep the chat focused on the incident. | /pliːz kiːp ðə tʃæt ˈfoʊkəst ɑːn ðə ˈɪnsədənt/ | 请让聊天频道只讨论故障。
I'm paging the on-call engineer for the database team. | /aɪm ˈpeɪdʒɪŋ ðə ɑːn kɔːl ˈendʒəˈnɪr fɔːr ðə ˈdeɪtəˌbeɪs tiːm/ | 我正在呼叫数据库团队的值班工程师。 | page = 通过呼叫系统叫人
```

## 三、同步进展

状态更新按固定节奏发，哪怕「没有新进展」也要发。

```phrases
We're investigating the issue. | /wiːr ˌɪnˈvestəˌɡeɪtɪŋ ðə ˈɪʃu/ | 我们正在调查这个问题。 | 刚发现时的第一句
We've identified the root cause. | /wiːv aɪˈdentəˌfaɪd ðə ruːt kɑːz/ | 我们已经找到了根因。 | 确认后再说，不要过早下结论
We think it's related to the last deployment, but we haven't confirmed it yet. | /wiː θɪŋk ɪts rɪˈleɪtɪd tuː ðə læst dɪˈplɔɪmənt bʌt wiː ˈhævənt kənˈfɜːrmd ɪt jet/ | 我们认为与上次部署有关，但还没有确认。 | think 和 confirmed 区分猜测和事实
We don't have an ETA yet. | /wiː doʊnt hæv æn iː tiː eɪ jet/ | 我们还没有预计恢复时间。 | ETA = estimated time of arrival
The next update will be in thirty minutes. | /ðə nekst əpˈdeɪt wɪl biː ɪn ˈθɜːrˌdiː ˈmɪnəts/ | 下次更新在三十分钟后。 | 一定要说下次更新时间
A fix is being deployed now. | /ə fɪks ɪz ˈbiːɪŋ dɪˈplɔɪd naʊ/ | 修复正在部署中。
We're monitoring the system to make sure it's stable. | /wiːr ˈmɑːnətərɪŋ ðə ˈsɪstəm tuː meɪk ʃʊr ɪts ˈsteɪbəl/ | 我们在观察系统，确保它稳定。
Error rates are back to normal. | /ˈerər reɪts ɑːr bæk tuː ˈnɔːrməl/ | 错误率已经恢复正常。
The issue has been resolved. | /ðə ˈɪʃu hæz bɪn riˈzɑːlvd/ | 问题已经解决。
```

```text
[Internal status update]
Incident: Checkout errors
Severity: One
Status: Investigating
Time: 02:15 UTC

Impact:
About thirty percent of checkout requests are failing since 01:50 UTC.

What we know:
- Errors started right after the 01:45 deployment of the payment service.
- The database looks healthy.

What we're doing:
- Mia is rolling back the deployment.
- Ken is checking the payment provider logs.

Next update: 02:45 UTC or sooner if something changes.
Incident commander: Sam
```

## 四、止血、回滚、修复

```phrases
Let's mitigate first. We can investigate the cause later. | /lets ˈmɪtəˌɡeɪt fɜːrst wiː kæn ˌɪnˈvestəˌɡeɪt ðə kɑːz ˈleɪtər/ | 先止血，原因之后再查。 | mitigate = 缓解影响，未必根治
The quickest way to mitigate is to roll back. | /ðə ˈkwɪkɪst weɪ tuː ˈmɪtəˌɡeɪt ɪz tuː roʊl bæk/ | 最快的止血方式是回滚。
Let's roll back the last release. | /lets roʊl bæk ðə læst riˈliːs/ | 我们把上次发布回滚吧。
Can we turn off the feature flag? | /kæn wiː tɜːrn ɔːf ðə ˈfiːtʃər flæɡ/ | 我们能把功能开关关掉吗？
I'm scaling up the servers as a temporary measure. | /aɪm ˈskeɪlɪŋ ʌp ðə ˈsɜːrvərz æz ə ˈtempərˌeri ˈmeʒər/ | 我正在扩容服务器作为临时措施。
This is a temporary fix. We'll do a proper fix later. | /ðɪs ɪz ə ˈtempərˌeri fɪks wiːl duː ə ˈprɑːpər fɪks ˈleɪtər/ | 这是临时修复，之后再做彻底的修复。
The rollback is complete. Error rates are dropping. | /ðə ˈroʊlbæk ɪz kəmˈpliːt ˈerər reɪts ɑːr ˈdrɑːpɪŋ/ | 回滚完成了，错误率在下降。
```

## 五、对客户与高管沟通

对外的话要短、真诚、不暴露内部细节；对高管要先说结论。

```text
[Public status page post]
Title: Delays when placing orders

Investigating - 02:20 UTC
Some customers are unable to complete their orders. We're investigating
and will share an update within thirty minutes.

Identified - 02:50 UTC
We've found the cause and are working on a fix. Orders placed in the
meantime will be processed once the issue is resolved.

Resolved - 03:30 UTC
The issue has been resolved and orders are going through normally.
We apologize for the inconvenience.
```

```phrases
We're aware that some customers can't place orders. | /wiːr əˈwer ðæt sʌm ˈkʌstəmərz kænt pleɪs ˈɔːrdərz/ | 我们已经知道部分客户无法下单。
We're sorry for the inconvenience. | /wiːr ˈsɑːri fɔːr ðə ˌɪnkənˈviːnjəns/ | 对由此造成的不便，我们深表歉意。
Your data was not affected. | /jɔːr ˈdeɪtə wɑːz nɑːt əˈfektɪd/ | 您的数据没有受到影响。 | 先回应客户最担心的事
Thank you for your patience. | /θæŋk juː fɔːr jɔːr ˈpeɪʃəns/ | 感谢您的耐心等待。
We'll share a full explanation once we've completed our review. | /wiːl ʃer ə fʊl ˌekspləˈneɪʃən wʌns wiːv kəmˈpliːtəd ˈaʊər ˌriːˈvjuː/ | 我们完成复盘后会给出完整说明。
Here's the short version: checkout is down, we know why, and we're fixing it. | /hɪrz ðə ʃɔːrt ˈvɜːrʒən ˈtʃeˌkaʊt ɪz daʊn wiː noʊ waɪ ənd wiːr ˈfɪksɪŋ ɪt/ | 简单来说：结账不可用，我们知道原因，正在修复。 | 给高管先给短版本
About twelve percent of customers are affected. | /əˈbaʊt twelv pərˈsent ʌv ˈkʌstəmərz ɑːr əˈfektɪd/ | 大约百分之十二的客户受到影响。
We expect to restore service within an hour, but we'll confirm soon. | /wiː ɪkˈspekt tuː rɪˈstɔːr ˈsɜːrvəs wɪˈðɪn æn ˈaʊər bʌt wiːl kənˈfɜːrm suːn/ | 我们预计一小时内恢复服务，稍后会确认。 | 给预估时要加条件，不要承诺
I don't want to guess. I'll update you as soon as I know more. | /aɪ doʊnt wɑːnt tuː ɡes aɪl əpˈdeɪt juː æz suːn æz aɪ noʊ mɔːr/ | 我不想猜测，有更多信息会马上告诉你。
```

> [!WARNING] 别在故障中承诺具体时间
> 高管和客户最爱问 "When will it be fixed?"。如果不确定，说 **"I don't have a confirmed ETA yet, but I'll update you in thirty minutes."** 比随口说 "In ten minutes" 然后爽约要好。

> [!CAUTION] 千万别这样说
> **"It's the intern's fault."** 或 **"The other team broke it."** 故障沟通要对事不对人，复盘会上再讨论流程问题。
> 同样，**"It should be fine now."** 太含糊，改成 **"Error rates have been normal for twenty minutes."**

## 六、交接 on-call、收尾与复盘

```phrases
I'm handing over to the next on-call. | /aɪm ˈhændɪŋ ˈoʊvər tuː ðə nekst ɑːn kɔːl/ | 我把值班交接给下一位。
Here's a quick summary of what happened. | /hɪrz ə kwɪk ˈsʌməri ʌv wʌt ˈhæpənd/ | 这是对发生情况的简短总结。
The incident is mitigated, but the root cause is still unknown. | /ðə ˈɪnsədənt ɪz ˈmɪtəˌɡeɪtɪd bʌt ðə ruːt kɑːz ɪz stɪl ənˈnoʊn/ | 故障已止血，但根因还不明。
Please keep an eye on the error rate for the next two hours. | /pliːz kiːp æn aɪ ɑːn ðə ˈerər reɪt fɔːr ðə nekst tuː ˈaʊərz/ | 接下来两小时请留意一下错误率。
All clear. The incident is over. | /ɔːl klɪr ðə ˈɪnsədənt ɪz ˈoʊvər/ | 一切正常，故障结束。 | all clear 是宣布故障结束的惯用语
We'll do a post-incident review on Thursday. | /wiːl duː ə poʊst ˈɪnsədənt ˌriːˈvjuː ɑːn ˈθɜːrzˌdeɪ/ | 我们周四做故障复盘。 | postmortem 或 post-incident review，原则是 blameless，不追责
Let's capture the action items and assign owners. | /lets ˈkæptʃər ðə ˈækʃən ˈaɪtəmz ənd əˈsaɪn ˈoʊnərz/ | 我们把行动项记下来并指定负责人。
The root cause was a missing index on the orders table. | /ðə ruːt kɑːz wɑːz ə ˈmɪsɪŋ ˈɪndeks ɑːn ðə ˈɔːrdərz ˈteɪbəl/ | 根因是订单表缺了一个索引。
```

## 七、对话

```dialog
title: 深夜的应急电话
Sam: Sorry to wake you. We have a severity one incident. Checkout is failing. | /ˈsɑːri tuː weɪk juː wiː hæv ə sɪˈverɪti wʌn ˈɪnsədənt ˈtʃeˌkaʊt ɪz ˈfeɪlɪŋ/ | 抱歉吵醒你，我们有个一级故障，结账在失败。
Mia: I'm here. What's the impact? | /aɪm hiːr wʌts ðə ˌɪmˈpækt/ | 我在，影响是什么？
Sam: About thirty percent of requests fail since one fifty. | /əˈbaʊt ˈθɜːrˌdiː pərˈsent ʌv rɪˈkwests feɪl sɪns wʌn ˈfɪfti/ | 从一点五十开始，大约百分之三十的请求失败。
Mia: Did we deploy anything recently? | /dɪd wiː dɪˈplɔɪ ˈeniˌθɪŋ ˈriːsəntli/ | 最近部署过什么吗？
Sam: Yes, the payment service at one forty-five. | /jes ðə ˈpeɪmənt ˈsɜːrvəs æt wʌn ˈfɔːrti faɪv/ | 有，一点四十五部署了支付服务。
Mia: Let's roll back first. I can do it now. | /lets roʊl bæk fɜːrst aɪ kæn duː ɪt naʊ/ | 先回滚，我现在就可以做。
Sam: Do it. I'll post an update to the status page. | /duː ɪt aɪl poʊst æn əpˈdeɪt tuː ðə ˈstætəs peɪdʒ/ | 去做吧，我来更新状态页。
Mia: Rollback started. Give me five minutes. | /ˈroʊlbæk ˈstɑːrtɪd ɡɪv miː faɪv ˈmɪnəts/ | 回滚开始了，给我五分钟。
```

```dialog
title: 高管问什么时候能修好
Exec: What's going on with checkout? Customers are complaining. | /wʌts ˈɡoʊɪŋ ɑːn wɪð ˈtʃeˌkaʊt ˈkʌstəmərz ɑːr kəmˈpleɪnɪŋ/ | 结账怎么回事？客户在投诉。
Lead: We have an incident. Some payments are failing. | /wiː hæv æn ˈɪnsədənt sʌm ˈpeɪmənts ɑːr ˈfeɪlɪŋ/ | 我们有个故障，部分支付失败。
Exec: When will it be fixed? | /wen wɪl ɪt biː fɪkst/ | 什么时候能修好？
Lead: I don't have a confirmed ETA yet. We're rolling back a release. | /aɪ doʊnt hæv ə kənˈfɜːrmd iː tiː eɪ jet wiːr ˈroʊlɪŋ bæk ə riˈliːs/ | 我还没有确定的时间，我们正在回滚一次发布。
Exec: How many customers are affected? | /haʊ ˈmeni ˈkʌstəmərz ɑːr əˈfektɪd/ | 多少客户受影响？
Lead: About ten percent. No data has been lost. | /əˈbaʊt ten pərˈsent noʊ ˈdeɪtə hæz bɪn lɔːst/ | 大约百分之十，没有数据丢失。
Exec: Okay. Please update me every thirty minutes. | /ˌoʊˈkeɪ pliːz əpˈdeɪt miː ˈevəri ˈθɜːrˌdiː ˈmɪnəts/ | 好，请每三十分钟告诉我一次。
Lead: Will do. The next update is at three fifteen. | /wɪl duː ðə nekst əpˈdeɪt ɪz æt θriː fɪfˈtiːn/ | 没问题，下次更新在三点十五分。
```

```dialog
title: 值班交接
Ken: I'm going offline now. Here's where we are. | /aɪm ˈɡoʊɪŋ ˈɔːˌflaɪn naʊ hɪrz wer wiː ɑːr/ | 我要下线了，现状是这样的。
Anna: Thanks. Is the incident still open? | /θæŋks ɪz ðə ˈɪnsədənt stɪl ˈoʊpən/ | 谢谢，故障还没关闭吗？
Ken: Yes. We mitigated it by rolling back, but we haven't found the root cause. | /jes wiː ˈmɪtəˌɡeɪtɪd ɪt baɪ ˈroʊlɪŋ bæk bʌt wiː ˈhævənt faʊnd ðə ruːt kɑːz/ | 是的，我们回滚止了血，但还没找到根因。
Anna: What should I watch? | /wʌt ʃʊd aɪ wɑːtʃ/ | 我该盯什么？
Ken: The error rate on the dashboard. It should stay under one percent. | /ðə ˈerər reɪt ɑːn ðə ˈdæʃˌbɔːrd ɪt ʃʊd steɪ ˈʌndər wʌn pərˈsent/ | 监控面板上的错误率，应该保持在百分之一以下。
Anna: And if it goes up again? | /ənd ɪf ɪt ɡoʊz ʌp əˈɡen/ | 如果又涨了呢？
Ken: Page the database team. The runbook link is in the doc. | /peɪdʒ ðə ˈdeɪtəˌbeɪs tiːm ðə ˈrʌnbʊk lɪŋk ɪz ɪn ðə dɑːk/ | 呼叫数据库团队，运行手册的链接在文档里。
Anna: Got it. Get some sleep. | /ɡɑːt ɪt ɡet sʌm sliːp/ | 明白，你好好休息。
```

```dialog
title: 宣布故障结束
Sam: Error rates have been normal for thirty minutes. | /ˈerər reɪts hæv bɪn ˈnɔːrməl fɔːr ˈθɜːrˌdiː ˈmɪnəts/ | 错误率已经正常三十分钟了。
Mia: I agree. I think we can close the incident. | /aɪ əˈɡriː aɪ θɪŋk wiː kæn kloʊs ðə ˈɪnsədənt/ | 我同意，可以结束故障了。
Sam: Okay. All clear. I'll post the final update. | /ˌoʊˈkeɪ ɔːl klɪr aɪl poʊst ðə ˈfaɪnəl əpˈdeɪt/ | 好，一切正常，我发最后的更新。
Mia: Should we schedule the post-incident review? | /ʃʊd wiː ˈskedʒʊl ðə poʊst ˈɪnsədənt ˌriːˈvjuː/ | 要约一下复盘会吗？
Sam: Yes, Thursday afternoon. I'll send the invite. | /jes ˈθɜːrzˌdeɪ ˌæftərˈnuːn aɪl send ðə ˌɪnˈvaɪt/ | 要，周四下午，我来发邀请。
Mia: I'll start writing the timeline now while it's fresh. | /aɪl stɑːrt ˈraɪtɪŋ ðə ˈtaɪmlaɪn naʊ waɪl ɪts freʃ/ | 趁记忆还新，我现在先写时间线。
Sam: Thanks. Let's keep it blameless. | /θæŋks lets kiːp ɪt ˈbleɪmləs/ | 谢谢，我们保持不追责。
```

> [!QUESTION] 想检验自己：故障刚发现，你要在频道里发第一条状态更新，怎么写？
> ```phrases
> We're investigating an issue with checkout. Some users can't place orders. Next update in thirty minutes. | /wiːr ˌɪnˈvestəˌɡeɪtɪŋ æn ˈɪʃu wɪð ˈtʃeˌkaʊt sʌm ˈjuːzərz kænt pleɪs ˈɔːrdərz nekst əpˈdeɪt ɪn ˈθɜːrˌdiː ˈmɪnəts/ | 我们正在调查结账问题，部分用户无法下单，三十分钟后更新。
> ```

> [!QUESTION] 想检验自己：CEO 问「什么时候修好」，你还不确定，怎么回答？
> ```phrases
> I don't have a confirmed ETA yet. I'll update you in thirty minutes. | /aɪ doʊnt hæv ə kənˈfɜːrmd iː tiː eɪ jet aɪl əpˈdeɪt juː ɪn ˈθɜːrˌdiː ˈmɪnəts/ | 我还没有确定的时间，三十分钟后给你更新。
> ```

> [!QUESTION] 想检验自己：怎么说「先回滚止血，原因之后再查」？
> ```phrases
> Let's roll back first to mitigate. We can find the root cause later. | /lets roʊl bæk fɜːrst tuː ˈmɪtəˌɡeɪt wiː kæn faɪnd ðə ruːt kɑːz ˈleɪtər/ | 我们先回滚止血，根因之后再找。
> ```
