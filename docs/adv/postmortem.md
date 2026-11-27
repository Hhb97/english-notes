---
level: 深入
summary: 怎么用英文写和讲一份无责复盘（blameless postmortem）：各部分的句式、影响与根因的措辞、行动项，附完整虚构范例和复盘会对话。
tags: [复盘, postmortem, 事故, 无责文化, 深入]
---

# 事后复盘文档 Postmortem

> [!ABSTRACT]
> - Postmortem（复盘文档）的目的是**学习和改进**，不是追究责任。文化上叫 **blameless（无责）**。
> - 固定结构：**Summary、Impact、Timeline、Root cause、Contributing factors、Resolution、What went well / poorly、Lessons learned、Action items**。
> - 语言原则：写**系统和流程**，不写“谁犯了错”。主语用 we、the system、the deploy process，不要用人名加 failed。

## 一、结构总览

| 部分 | 回答什么问题 |
| --- | --- |
| Summary | 一段话：发生了什么、多久、影响多大 |
| Impact | 谁受到影响、影响多大 |
| Timeline | 按时间顺序，发生了什么、谁做了什么 |
| Root cause | 根本原因是什么 |
| Contributing factors | 哪些因素让问题更严重或更晚被发现 |
| Resolution | 怎么修好的 |
| What went well / poorly | 哪些做得好、哪些做得不好 |
| Lessons learned | 学到了什么 |
| Action items | 要做什么、谁负责、什么时候完成 |

> [!TIP] 时间怎么写
> 复盘里的时间要带上**时区**（Pacific time、UTC），按 24 小时或 am / pm 统一格式。口语里读作 **at two oh five p.m. Pacific**。时间线里每一行一个事件，用过去时。

## 二、摘要（Summary）

摘要要让一个没参加事故的人，读三句话就明白全貌。

```phrases
On Tuesday, the checkout service was unavailable for forty-two minutes. | /ɑːn ˈtuːzdi ðə ˈtʃeˌkaʊt ˈsɜːrvəs wɑːz ˌʌnəˈveɪləbəl fɔːr ˈfɔːrti tuː ˈmɪnəts/ | 周二，结账服务有四十二分钟不可用。 | 第一句：什么服务、什么时候、多久
The outage was caused by a configuration change that was deployed to all servers at once. | /ðə ˈaʊtədʒ wɑːz kɑːzd baɪ ə kənˌfɪɡjərˈeɪʃən tʃeɪndʒ ðæt wɑːz dɪˈplɔɪd tuː ɔːl ˈsɜːrvərz æt wʌns/ | 这次故障是由一次同时部署到所有服务器的配置变更引起的。 | 用被动语态，把重点放在原因，不放在人
About thirty percent of customers could not complete a purchase. | /əˈbaʊt ˈθɜːrˌdiː pərˈsent ʌv ˈkʌstəmərz kʊd nɑːt kəmˈpliːt ə ˈpɜːrtʃəs/ | 大约百分之三十的客户无法完成购买。
No customer data was lost. | /noʊ ˈkʌstəmər ˈdeɪtə wɑːz lɔːst/ | 没有客户数据丢失。 | 一定要明确说数据是否受影响
The issue was resolved by rolling back the change. | /ðə ˈɪʃu wɑːz riˈzɑːlvd baɪ ˈroʊlɪŋ bæk ðə tʃeɪndʒ/ | 问题通过回滚这次变更得到解决。
This document describes what happened, why it happened, and what we are doing to prevent it. | /ðɪs ˈdɑːkjəment dɪˈskraɪbz wʌt ˈhæpənd waɪ ɪt ˈhæpənd ənd wʌt wiː ɑːr ˈduːɪŋ tuː prɪˈvent ɪt/ | 本文档描述发生了什么、为什么发生，以及我们将怎么避免再次发生。 | 摘要结尾常用的句子
```

## 三、影响（Impact）

影响要**量化**：多少用户、多久、多少钱、多少请求。没有数字就写“我们估计……”。

```phrases
The incident lasted forty-two minutes. | /ðə ˈɪnsədənt ˈlæstəd ˈfɔːrti tuː ˈmɪnəts/ | 这次事故持续了四十二分钟。
During this time, about twelve thousand requests failed. | /ˈdʊrɪŋ ðɪs taɪm əˈbaʊt twelv ˈθaʊzənd rɪˈkwests feɪld/ | 在这段时间里，大约一万两千个请求失败。
Approximately thirty percent of users saw an error page. | /əˈprɑːksəmətli ˈθɜːrˌdiː pərˈsent ʌv ˈjuːzərz sɔː æn ˈerər peɪdʒ/ | 大约百分之三十的用户看到了错误页面。
We estimate that about four hundred orders were delayed. | /wiː ˈestəmət ðæt əˈbaʊt fɔːr ˈhʌndrəd ˈɔːrdərz wɜːr dɪˈleɪd/ | 我们估计大约四百个订单被延迟了。 | 估算时用 we estimate
The support team received sixty tickets about the problem. | /ðə səˈpɔːrt tiːm rəˈsiːvd ˈsɪksti ˈtɪkəts əˈbaʊt ðə ˈprɑːbləm/ | 支持团队收到了六十个关于这个问题的工单。
There was no data loss and no security impact. | /ðer wɑːz noʊ ˈdeɪtə lɔːs ənd noʊ sɪˈkjʊrəti ˌɪmˈpækt/ | 没有数据丢失，也没有安全影响。
The incident affected only the web checkout. The mobile app was not affected. | /ðə ˈɪnsədənt əˈfektɪd ˈoʊnli ðə web ˈtʃeˌkaʊt ðə ˈmoʊbəl æp wɑːz nɑːt əˈfektɪd/ | 事故只影响了网页结账，移动应用没有受影响。 | 明确什么没受影响，同样重要
We are still calculating the full financial impact. | /wiː ɑːr stɪl ˈkælkjəˌleɪtɪŋ ðə fʊl fəˈnænʃəl ˌɪmˈpækt/ | 我们仍在计算完整的财务影响。
```

## 四、时间线（Timeline）

时间线只陈述事实：什么时候，发生了什么，谁（用角色）做了什么。

```phrases
At two oh five p.m. Pacific, we began receiving alerts for a high error rate. | /æt tuː oʊ faɪv ˌpiː ˈem pəˈsɪfɪk wiː bɪˈɡæn rəˈsiːvɪŋ əˈlɜːrts fɔːr ə haɪ ˈerər reɪt/ | 太平洋时间下午两点零五分，我们开始收到高错误率告警。 | 时间线第一条通常是“第一次发现”
At two ten, the on-call engineer acknowledged the alert and started investigating. | /æt tuː ten ðə ɑːn kɔːl ˈendʒəˈnɪr ækˈnɑːlɪdʒd ðə əˈlɜːrt ənd ˈstɑːrtɪd ˌɪnˈvestəˌɡeɪtɪŋ/ | 两点十分，值班工程师确认了告警并开始排查。
At two twenty, we declared a major incident and opened a channel for coordination. | /æt tuː ˈtwenti wiː dɪˈklerd ə ˈmeɪdʒər ˈɪnsədənt ənd ˈoʊpənd ə ˈtʃænəl fɔːr koʊˌɔːrdəˈneɪʃən/ | 两点二十分，我们宣布了重大事故，并开了一个协调频道。
At two thirty-five, the team identified a recent configuration change as the likely cause. | /æt tuː ˈθɜːrˌdiː faɪv ðə tiːm aɪˈdentəˌfaɪd ə ˈriːsənt kənˌfɪɡjərˈeɪʃən tʃeɪndʒ æz ðə ˈlaɪkli kɑːz/ | 两点三十五分，团队认定最近的一次配置变更是可能的原因。
At two fifty, we started rolling back the change. | /æt tuː ˈfɪfti wiː ˈstɑːrtɪd ˈroʊlɪŋ bæk ðə tʃeɪndʒ/ | 两点五十分，我们开始回滚这次变更。
At three oh seven, error rates returned to normal. | /æt θriː oʊ ˈsevən ˈerər reɪts rɪˈtɜːrnd tuː ˈnɔːrməl/ | 三点零七分，错误率恢复正常。
At three twenty, we confirmed the service was healthy and closed the incident. | /æt θriː ˈtwenti wiː kənˈfɜːrmd ðə ˈsɜːrvəs wɑːz ˈhelθi ənd kloʊzd ðə ˈɪnsədənt/ | 三点二十分，我们确认服务恢复健康，并关闭了事故。
The first customer report came in about ten minutes before our alert fired. | /ðə fɜːrst ˈkʌstəmər riˈpɔːrt keɪm ɪn əˈbaʊt ten ˈmɪnəts bɪˈfɔːr ˈaʊər əˈlɜːrt ˈfaɪərd/ | 在告警触发前大约十分钟，已经有了第一个客户反馈。 | 暴露监控的盲点，很有价值
```

## 五、根因与影响因素

“根因”不是某个人的失误，而是**让失误成为可能的系统缺陷**。常用方法：连续问五次 why。

```phrases
The root cause was a configuration change that set the connection limit too low. | /ðə ruːt kɑːz wɑːz ə kənˌfɪɡjərˈeɪʃən tʃeɪndʒ ðæt set ðə kəˈnekʃən ˈlɪmət tuː loʊ/ | 根本原因是一次配置变更把连接数上限设得太低。 | 主语是 change，不是人
The change was deployed to all servers at the same time, with no gradual rollout. | /ðə tʃeɪndʒ wɑːz dɪˈplɔɪd tuː ɔːl ˈsɜːrvərz æt ðə seɪm taɪm wɪð noʊ ˈɡrædʒuəl ˈroʊˌlaʊt/ | 这个变更同时部署到了所有服务器，没有灰度发布。
The configuration was valid, so our automated checks did not catch the problem. | /ðə kənˌfɪɡjərˈeɪʃən wɑːz ˈvælɪd soʊ ˈaʊər ˈɔːtəˌmeɪtɪd tʃeks dɪd nɑːt kætʃ ðə ˈprɑːbləm/ | 配置本身是合法的，所以我们的自动检查没有发现问题。
Several factors made the incident worse. | /ˈsevrəl ˈfæktərz meɪd ðə ˈɪnsədənt wɜːrs/ | 有几个因素让这次事故更严重。 | 引出 contributing factors
There was no alert for the connection pool running out. | /ðer wɑːz noʊ əˈlɜːrt fɔːr ðə kəˈnekʃən puːl ˈrʌnɪŋ aʊt/ | 连接池耗尽没有对应的告警。
The runbook for this service was out of date. | /ðə ˈrʌnbʊk fɔːr ðɪs ˈsɜːrvəs wɑːz aʊt ʌv deɪt/ | 这个服务的运行手册已经过时。
The review process did not require a second person to check configuration changes. | /ðə ˌriːˈvjuː ˈprɑːˌses dɪd nɑːt ˌriːˈkwaɪər ə ˈsekənd ˈpɜːrsən tuː tʃek kənˌfɪɡjərˈeɪʃən ˈtʃeɪndʒəz/ | 评审流程并不要求配置变更由第二个人检查。 | 把问题归到流程上
We asked why five times to find the underlying cause. | /wiː æskt waɪ faɪv taɪmz tuː faɪnd ðə ˌʌndərˈlaɪɪŋ kɑːz/ | 我们连续问了五个为什么来找到深层原因。
```

> [!WARNING] 无责语言：写系统，不写个人
> - 不要写：*John pushed a bad config and took down the site.*
> - 要写：*A configuration change reduced the connection limit, which caused the site to become unavailable.*
> - 不要写：*The on-call engineer was too slow to respond.*
> - 要写：*The alert did not include enough context, so it took ten minutes to find the right dashboard.*
>
> 想一想：如果下次换另一个人处于同样的位置，会不会出同样的问题？如果会，问题就在系统里。

## 六、恢复与经验

```phrases
We resolved the incident by rolling back the configuration change. | /wiː riˈzɑːlvd ðə ˈɪnsədənt baɪ ˈroʊlɪŋ bæk ðə kənˌfɪɡjərˈeɪʃən tʃeɪndʒ/ | 我们通过回滚配置变更解决了事故。
As a temporary fix, we increased the connection limit manually. | /æz ə ˈtempərˌeri fɪks wiː ˌɪnˈkriːst ðə kəˈnekʃən ˈlɪmət ˈmænjuəli/ | 作为临时措施，我们手动调高了连接数上限。
We have fully restored the service and verified it with synthetic checks. | /wiː hæv ˈfʊli rɪˈstɔːrd ðə ˈsɜːrvəs ənd ˈverəˌfaɪd ɪt wɪð sɪnˈθetɪk tʃeks/ | 我们已完全恢复服务，并用合成监控验证过。
What went well: the on-call engineer responded within five minutes. | /wʌt went wel ðə ɑːn kɔːl ˈendʒəˈnɪr rɪˈspɑːndɪd wɪˈðɪn faɪv ˈmɪnəts/ | 做得好的地方：值班工程师在五分钟内响应了。
What went well: the rollback process worked as expected. | /wʌt went wel ðə ˈroʊlbæk ˈprɑːˌses wɜːrkt æz ɪkˈspektəd/ | 做得好的地方：回滚流程按预期运行。
What went poorly: we did not have a dashboard for connection usage. | /wʌt went ˈpuːrli wiː dɪd nɑːt hæv ə ˈdæʃˌbɔːrd fɔːr kəˈnekʃən ˈjuːsədʒ/ | 做得不好的地方：我们没有连接使用情况的仪表盘。
What went poorly: customers learned about the outage from social media before we told them. | /wʌt went ˈpuːrli ˈkʌstəmərz lɜːrnd əˈbaʊt ðə ˈaʊtədʒ frʌm ˈsoʊʃəl ˈmiːdiə bɪˈfɔːr wiː toʊld ðem/ | 做得不好的地方：客户先从社交媒体得知故障，之后才收到我们的通知。
We got lucky: the incident happened during a low traffic period. | /wiː ɡɑːt ˈlʌki ðə ˈɪnsədənt ˈhæpənd ˈdʊrɪŋ ə loʊ ˈtræfɪk ˈpɪriəd/ | 我们比较幸运：事故发生在流量较低的时段。 | We got lucky 在复盘里很常见，表示“侥幸”，并提醒不能靠运气
Lesson learned: configuration changes need the same care as code changes. | /ˈlesən lɜːrnd kənˌfɪɡjərˈeɪʃən ˈtʃeɪndʒəz niːd ðə seɪm ker æz koʊd ˈtʃeɪndʒəz/ | 经验教训：配置变更需要和代码变更一样谨慎。
```

## 七、行动项（Action items）

行动项要**具体、有负责人、有日期**。没有负责人的行动项等于没有行动项。

```phrases
Action item: add an alert for connection pool usage above eighty percent. | /ˈækʃən ˈaɪtəm æd æn əˈlɜːrt fɔːr kəˈnekʃən puːl ˈjuːsədʒ əˈbʌv ˈeɪti pərˈsent/ | 行动项：为连接池使用率超过百分之八十添加告警。
Owner: Priya. Due date: March fifteenth. | /ˈoʊnər ˈpriːjə duː deɪt mɑːrtʃ fɪfˈtiːnθ/ | 负责人：Priya。截止日期：三月十五日。 | 每个行动项都要有 Owner 和 Due date
We will require a second reviewer for all configuration changes. | /wiː wɪl ˌriːˈkwaɪər ə ˈsekənd riˈvjuːər fɔːr ɔːl kənˌfɪɡjərˈeɪʃən ˈtʃeɪndʒəz/ | 我们将要求所有配置变更都要有第二位评审者。
We will roll out configuration changes gradually, starting with five percent of servers. | /wiː wɪl roʊl aʊt kənˌfɪɡjərˈeɪʃən ˈtʃeɪndʒəz ˈɡrædʒuəli ˈstɑːrtɪŋ wɪð faɪv pərˈsent ʌv ˈsɜːrvərz/ | 我们将逐步发布配置变更，先从百分之五的服务器开始。
We will update the runbook and review it every quarter. | /wiː wɪl əpˈdeɪt ðə ˈrʌnbʊk ənd ˌriːˈvjuː ɪt ˈevəri ˈkwɔːrtər/ | 我们会更新运行手册，并每季度复查一次。
This item is tracked in the ticket system. The link is below. | /ðɪs ˈaɪtəm ɪz trækt ɪn ðə ˈtɪkət ˈsɪstəm ðə lɪŋk ɪz bɪˈloʊ/ | 这个行动项已在工单系统里跟踪，链接在下面。
We will follow up on the status of these items in two weeks. | /wiː wɪl ˈfɑːloʊ ʌp ɑːn ðə ˈstætəs ʌv ðiːz ˈaɪtəmz ɪn tuː wiːks/ | 两周后我们会跟进这些行动项的状态。
```

## 八、完整范例

下面是一份虚构的完整 postmortem，可以当模板。

```text
Postmortem: Checkout outage on Tuesday

Status: Complete. Incident severity: High.
Authors: Priya Shah, Marcus Lee. Reviewers: the platform team.

Summary
On Tuesday afternoon, the checkout service was unavailable for
forty-two minutes. About thirty percent of customers could not
complete a purchase. The cause was a configuration change that
set the database connection limit too low. We resolved the issue
by rolling back the change. No customer data was lost.

Impact
- Duration: forty-two minutes.
- About twelve thousand requests failed.
- We estimate that about four hundred orders were delayed.
- The support team received sixty tickets.
- The mobile app was not affected.

Timeline (all times Pacific)
- Two oh five p.m.: We began receiving alerts for a high error rate.
- Two ten p.m.: The on-call engineer acknowledged the alert.
- Two twenty p.m.: We declared a major incident.
- Two thirty-five p.m.: The team identified a recent configuration
  change as the likely cause.
- Two fifty p.m.: We started rolling back the change.
- Three oh seven p.m.: Error rates returned to normal.
- Three twenty p.m.: We confirmed the service was healthy.

Root cause
A configuration change reduced the maximum number of database
connections per server. During the afternoon traffic peak, the
servers ran out of connections and began to reject requests.
The change was valid, so automated checks did not catch it.

Contributing factors
- The change was deployed to all servers at once.
- We had no alert for connection pool usage.
- The runbook did not describe this failure.
- The review process did not require a second reviewer for
  configuration changes.

Resolution
We rolled back the configuration change. Error rates returned
to normal within seventeen minutes after the rollback started.

What went well
- The on-call engineer responded within five minutes.
- The incident channel kept everyone informed.
- The rollback worked as designed.

What went poorly
- Customers reported the problem ten minutes before our alert.
- It took fifteen minutes to find the right dashboard.
- The status page was updated late.

Lessons learned
- Configuration changes are as risky as code changes.
- A valid configuration is not always a safe configuration.
- Monitoring should cover resource limits, not only errors.

Action items
1. Add an alert for connection pool usage above eighty percent.
   Owner: Priya. Due: March fifteenth.
2. Require a second reviewer for configuration changes.
   Owner: Marcus. Due: March twentieth.
3. Roll out configuration changes gradually, starting with a
   small group of servers.
   Owner: Dana. Due: April first.
4. Update the runbook and add a link to it in the alert.
   Owner: Priya. Due: March tenth.
5. Update the status page process so customers hear from us first.
   Owner: Sam. Due: March thirty-first.
```

> [!TIP] 写完自检
> 1. 一个没参加事故的人，只读 Summary 能不能明白？
> 2. 有没有出现人名加“犯错”的句子？
> 3. 每个行动项有没有负责人和日期？
> 4. 影响有没有量化？

## 九、对话：复盘评审会

```dialog
title: 复盘评审会上讨论根因
Facilitator: Thanks, everyone. This is a blameless review, so let's focus on the system. | /θæŋks ˈevriˌwʌn ðɪs ɪz ə ˈbleɪmləs ˌriːˈvjuː soʊ lets ˈfoʊkəs ɑːn ðə ˈsɪstəm/ | 谢谢大家。这是一次无责复盘，我们把重点放在系统上。
Priya: Sure. In short, a configuration change set the connection limit too low. | /ʃʊr ɪn ʃɔːrt ə kənˌfɪɡjərˈeɪʃən tʃeɪndʒ set ðə kəˈnekʃən ˈlɪmət tuː loʊ/ | 好的。简单说，一次配置变更把连接数上限设得太低。
Marcus: And we deployed it to all servers at once. | /ənd wiː dɪˈplɔɪd ɪt tuː ɔːl ˈsɜːrvərz æt wʌns/ | 而且我们同时部署到了所有服务器。
Facilitator: Why did our checks not catch it? | /waɪ dɪd ˈaʊər tʃeks nɑːt kætʃ ɪt/ | 为什么我们的检查没有发现它？
Priya: The configuration was valid. We only check the format, not the values. | /ðə kənˌfɪɡjərˈeɪʃən wɑːz ˈvælɪd wiː ˈoʊnli tʃek ðə ˈfɔːrˌmæt nɑːt ðə ˈvæljuz/ | 配置本身合法，我们只检查格式，不检查数值。
Facilitator: That's a good point. What could we do about it? | /ðæts ə ɡʊd pɔɪnt wʌt kʊd wiː duː əˈbaʊt ɪt/ | 这点很好。我们能做点什么？
Marcus: We could require a second reviewer and roll out gradually. | /wiː kʊd ˌriːˈkwaɪər ə ˈsekənd riˈvjuːər ənd roʊl aʊt ˈɡrædʒuəli/ | 我们可以要求第二个评审者，并且逐步发布。
Facilitator: Agreed. Who can own the gradual rollout? | /əˈɡriːd huː kæn oʊn ðə ˈɡrædʒuəl ˈroʊˌlaʊt/ | 同意。谁来负责灰度发布？
Dana: I can take that. I'll have a plan by the end of the month. | /aɪ kæn teɪk ðæt aɪl hæv ə plæn baɪ ðə end ʌv ðə mʌnθ/ | 我来吧，月底前我会给出方案。
Facilitator: Great. Let's also check in on these items in two weeks. | /ɡreɪt lets ˈɔːlsoʊ tʃek ɪn ɑːn ðiːz ˈaɪtəmz ɪn tuː wiːks/ | 太好了。两周后我们也来检查一下这些事项。
```

```dialog
title: 把一句带指责的话改成无责措辞
Lead: I noticed this sentence in the draft: "Tom ignored the alert." | /aɪ ˈnoʊtəst ðɪs ˈsentəns ɪn ðə dræft tɑːm ˌɪɡˈnɔːrd ðə əˈlɜːrt/ | 我注意到草稿里有这句：Tom 忽略了告警。
Author: Oh, I see. That sounds like blame, doesn't it? | /oʊ aɪ siː ðæt saʊndz laɪk bleɪm ˈdʌzənt ɪt/ | 哦，我明白了。这听起来像在指责，对吧？
Lead: Yes. What actually happened? | /jes wʌt ˈækˌtʃuːəli ˈhæpənd/ | 对。实际发生了什么？
Author: The alert came in at night, and it didn't say which service was affected. | /ðə əˈlɜːrt keɪm ɪn æt naɪt ənd ɪt ˈdɪdənt seɪ wɪtʃ ˈsɜːrvəs wɑːz əˈfektɪd/ | 告警是半夜来的，而且没有说明是哪个服务受影响。
Lead: Then let's write that. "The alert did not include enough context." | /ðen lets raɪt ðæt ðə əˈlɜːrt dɪd nɑːt ˌɪnˈkluːd ɪˈnʌf ˈkɑːntekst/ | 那就这么写：告警没有包含足够的上下文。
Author: And the action item is to improve the alert message. | /ənd ðə ˈækʃən ˈaɪtəm ɪz tuː ˌɪmˈpruːv ðə əˈlɜːrt ˈmesədʒ/ | 行动项就是改进告警信息。
Lead: Exactly. That fixes the system for everyone. | /ɪɡˈzæktli ðæt ˈfɪksɪz ðə ˈsɪstəm fɔːr ˈevriˌwʌn/ | 没错，这样是在为所有人修复系统。
```

> [!QUESTION] 想检验自己：把 “John deployed a bad change” 改成无责的说法。
> ```phrases
> A configuration change caused the service to become unavailable. | /ə kənˌfɪɡjərˈeɪʃən tʃeɪndʒ kɑːzd ðə ˈsɜːrvəs tuː bɪˈkʌm ˌʌnəˈveɪləbəl/ | 一次配置变更导致服务不可用。 | 主语是变更，不是人
> ```

> [!QUESTION] 想检验自己：怎么写一个合格的行动项？
> ```phrases
> Add an alert for connection pool usage. Owner: Priya. Due: March fifteenth. | /æd æn əˈlɜːrt fɔːr kəˈnekʃən puːl ˈjuːsədʒ ˈoʊnər ˈpriːjə duː mɑːrtʃ fɪfˈtiːnθ/ | 为连接池使用率添加告警。负责人：Priya。截止：三月十五日。 | 动作 + 负责人 + 日期
> ```

> [!QUESTION] 想检验自己：在复盘会上，怎么引导大家把讨论转到“系统”而不是“个人”？
> ```phrases
> This is a blameless review, so let's focus on the process. | /ðɪs ɪz ə ˈbleɪmləs ˌriːˈvjuː soʊ lets ˈfoʊkəs ɑːn ðə ˈprɑːˌses/ | 这是无责复盘，我们把重点放在流程上。
> ```
