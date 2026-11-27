---
level: 进阶
summary: 流水线、发布、回滚、灰度、监控告警、值班、故障、基础设施即代码、集群等 DevOps 与运维词汇，配真实工作例句。
tags: [词汇, DevOps, 运维, 监控, 进阶]
---

# DevOps 与运维词汇

> [!ABSTRACT]
> - 本页 50 个词，分四组：**构建与发布**、**监控与告警**、**故障与值班**、**基础设施**。
> - 易混的几对：**staging vs production**、**canary vs blue-green**、**hotfix vs rollback**、**log vs metric vs trace**。
> - 读音和缩写集中在 TIP 里：**canary**、**cluster**、**SLA / SLO**、**Kubernetes**。

## 一、构建与发布

上线前后每天都会说的词。**deploy** 是把代码放到某个环境里，**release** 是把功能正式交给用户，两者不一定同时发生。

```words
pipeline | /ˈpaɪˌplaɪn/ | n. 流水线 | The pipeline runs all the tests before every deploy. | /ðə ˈpaɪˌplaɪn rʌnz ɔːl ðə tests bɪˈfɔːr ˈevəri dɪˈplɔɪ/ | 每次部署之前，流水线都会跑所有测试。
build | /bɪld/ | n./v. 构建 | The build failed because of a missing environment variable. | /ðə bɪld feɪld bɪˈkɔːz ʌv ə ˈmɪsɪŋ ɪnˈvaɪrənmənt ˈveriəbəl/ | 构建失败了，因为少了一个环境变量。
artifact | /ˈɑːrtəˌfækt/ | n. 构建产物（重音在第一个音节：AR-tuh-fakt） | The pipeline uploads the build artifact to the registry. | /ðə ˈpaɪˌplaɪn ˈʌˌploʊdz ðə bɪld ˈɑːrtəˌfækt tuː ðə ˈredʒɪstri/ | 流水线会把构建产物上传到制品库。
deploy | /dɪˈplɔɪ/ | v. 部署（重音在第二个音节：dih-PLOY） | We deploy to production every Tuesday and Thursday. | /wiː dɪˈplɔɪ tuː prəˈdʌkʃən ˈevəri ˈtuːzdi ənd ˈθɜːrzˌdeɪ/ | 我们每周二和周四部署到生产环境。
release | /riˈliːs/ | n./v. 发布 | The release is scheduled for Friday morning. | /ðə riˈliːs ɪz ˈskedʒʊld fɔːr ˈfraɪdi ˈmɔːrnɪŋ/ | 这次发布排在周五上午。
rollback | /ˈroʊlbæk/ | n./v. 回滚（名词读 ROLL-back，动词是两个词 roll back） | We did a rollback within five minutes. | /wiː dɪd ə ˈroʊlbæk wɪˈðɪn faɪv ˈmɪnəts/ | 我们五分钟内就完成了回滚。
staging | /ˈsteɪdʒɪŋ/ | n. 预发布环境（区分：staging 是上线前的演练环境，production 是真实用户在用的环境） | We test the change in staging before it goes live. | /wiː test ðə tʃeɪndʒ ɪn ˈsteɪdʒɪŋ bɪˈfɔːr ɪt ɡoʊz laɪv/ | 改动上线之前，我们先在预发布环境测试。
production | /prəˈdʌkʃən/ | n. 生产环境（口语常缩成 prod，重音在第二个音节：pruh-DUK-shun） | The bug only happens in production, not in staging. | /ðə bʌɡ ˈoʊnli ˈhæpənz ɪn prəˈdʌkʃən nɑːt ɪn ˈsteɪdʒɪŋ/ | 这个 bug 只在生产环境出现，预发布没有。
environment | /ɪnˈvaɪrənmənt/ | n. 环境（重音在第二个音节：en-VY-run-ment） | Each environment has its own database. | /iːtʃ ɪnˈvaɪrənmənt hæz ɪts oʊn ˈdeɪtəˌbeɪs/ | 每个环境都有自己的数据库。
hotfix | /ˈhɑːtfɪks/ | n. 紧急修复（区分：hotfix 是向前修，rollback 是退回旧版本） | We shipped a hotfix to stop the payment errors. | /wiː ʃɪpt ə ˈhɑːtfɪks tuː stɑːp ðə ˈpeɪmənt ˈerərz/ | 我们发了一个紧急修复来止住支付错误。
canary | /kəˈneri/ | n. 金丝雀发布；灰度（区分：canary 是逐步放量，blue-green 是整套环境切换） | We started with a canary release to five percent of users. | /wiː ˈstɑːrtɪd wɪð ə kəˈneri riˈliːs tuː faɪv pərˈsent ʌv ˈjuːzərz/ | 我们先做了一次面向百分之五用户的灰度发布。
blue-green | /bluː ɡriːn/ | adj. 蓝绿（部署） | We use blue-green deployment, so we can switch back instantly. | /wiː juːs bluː ɡriːn dɪˈplɔɪmənt soʊ wiː kæn swɪtʃ bæk ˈɪnstəntli/ | 我们用蓝绿部署，所以可以立刻切回去。
feature flag | /ˈfiːtʃər flæɡ/ | n. 功能开关 | The new checkout is behind a feature flag. | /ðə nuː ˈtʃeˌkaʊt ɪz bɪˈhaɪnd ə ˈfiːtʃər flæɡ/ | 新的结算流程放在一个功能开关后面。
downtime | /ˈdaʊntaɪm/ | n. 停机时间 | The migration needs about ten minutes of downtime. | /ðə maɪˈɡreɪʃən niːdz əˈbaʊt ten ˈmɪnəts ʌv ˈdaʊntaɪm/ | 这次迁移需要大约十分钟的停机时间。
```

> [!TIP] 读音与缩写
> - **canary** 读 kuh-NAIR-ee，重音在第二个音节。
> - **cluster** 是 KLUS-ter，不是 klaster。
> - **SLA** 读 S-L-A，**SLO** 读 S-L-O；**uptime** 读 UP-time。
> - **Kubernetes** 读 koo-ber-NET-eez，口语里常缩成 **K8s**，读 kates。
> - **deploy** 重音在后面：dih-PLOY；**production** 也是重音在第二个音节。

## 二、监控与告警

出事之前靠这些词发现问题。**log**、**metric**、**trace** 合称可观测性的三大支柱，分清它们很重要。

```words
monitoring | /ˈmɑːnətərɪŋ/ | n. 监控 | We set up monitoring for the new service last week. | /wiː set ʌp ˈmɑːnətərɪŋ fɔːr ðə nuː ˈsɜːrvəs læst wiːk/ | 上周我们给这个新服务搭了监控。
alert | /əˈlɜːrt/ | n./v. 告警；通知 | We got an alert that the error rate went up. | /wiː ɡɑːt æn əˈlɜːrt ðæt ðə ˈerər reɪt went ʌp/ | 我们收到告警，说错误率上升了。
dashboard | /ˈdæʃˌbɔːrd/ | n. 仪表盘 | I'll share the dashboard so you can watch the latency. | /aɪl ʃer ðə ˈdæʃˌbɔːrd soʊ juː kæn wɑːtʃ ðə ˈleɪtənsi/ | 我把仪表盘分享给你，你可以盯着延迟看。
log | /lɔːɡ/ | n./v. 日志；记录日志（区分：log 是一条条发生过的事件记录） | The log shows a timeout right before the crash. | /ðə lɔːɡ ʃoʊz ə ˈtaɪˌmaʊt raɪt bɪˈfɔːr ðə kræʃ/ | 日志显示崩溃之前刚好有一个超时。
metric | /ˈmetrɪk/ | n. 指标（区分：metric 是随时间变化的数字，比如每秒请求数） | The key metrics are latency, error rate and throughput. | /ðə kiː ˈmetrɪks ɑːr ˈleɪtənsi ˈerər reɪt ənd ˈθruːpʊt/ | 关键指标是延迟、错误率和吞吐量。
trace | /treɪs/ | n. 调用链（区分：trace 记录一个请求经过了哪些服务，各花了多久） | The trace shows which service is slow. | /ðə treɪs ʃoʊz wɪtʃ ˈsɜːrvəs ɪz sloʊ/ | 调用链能看出是哪个服务慢。
observability | /əbˌzɜːrvəˈbɪləti/ | n. 可观测性 | Better observability would have helped us find the issue sooner. | /ˈbetər əbˌzɜːrvəˈbɪləti wʊd hæv helpt ʌs faɪnd ðə ˈɪʃu ˈsuːnər/ | 更好的可观测性本可以帮我们更早发现问题。
threshold | /ˈθreˌʃoʊld/ | n. 阈值 | The alert fires when the error rate crosses the threshold. | /ðə əˈlɜːrt ˈfaɪərz wen ðə ˈerər reɪt ˈkrɔːsɪz ðə ˈθreˌʃoʊld/ | 错误率超过阈值时，告警就会触发。
health check | /helθ tʃek/ | n. 健康检查 | The load balancer removes a server when the health check fails. | /ðə loʊd ˈbælənsər riˈmuːvz ə ˈsɜːrvər wen ðə helθ tʃek feɪlz/ | 健康检查失败时，负载均衡器会把这台服务器摘掉。
uptime | /ˈʌptaɪm/ | n. 正常运行时间 | Our uptime last month was ninety-nine point nine percent. | /ˈaʊər ˈʌptaɪm læst mʌnθ wɑːz ˈnaɪnti naɪn pɔɪnt naɪn pərˈsent/ | 我们上个月的正常运行时间是百分之九十九点九。
SLA | /es el eɪ/ | n. 服务等级协议（区分：SLA 是对客户的承诺，常带赔偿条款） | The SLA promises ninety-nine point nine percent availability. | /ðə es el eɪ ˈprɑːməsəz ˈnaɪnti naɪn pɔɪnt naɪn pərˈsent əˌveɪləˈbɪləti/ | 服务等级协议承诺了百分之九十九点九的可用性。
SLO | /es el oʊ/ | n. 服务等级目标（SLO 是团队自己定的目标，通常比 SLA 严格） | Our internal SLO is stricter than the SLA. | /ˈaʊər ˌɪnˈtɜːrnəl es el oʊ ɪz ˈstrɪktər ðæn ðə es el eɪ/ | 我们内部的服务等级目标比对外的协议更严。
error rate | /ˈerər reɪt/ | n. 错误率 | The error rate dropped to almost zero after the fix. | /ðə ˈerər reɪt drɑːpt tuː ˈɔːlˌmoʊst ˈzɪroʊ ˈæftər ðə fɪks/ | 修复之后，错误率降到了几乎为零。
spike | /spaɪk/ | n./v. 突增 | There was a traffic spike right after the campaign started. | /ðer wɑːz ə ˈtræfɪk spaɪk raɪt ˈæftər ðə kæmˈpeɪn ˈstɑːrtɪd/ | 活动一开始，流量就出现了突增。
```

> [!WARNING] 别把 log、metric、trace 混着说
> 简单记法：**log** 回答 what happened（发生了什么），**metric** 回答 how much（有多少、多快），**trace** 回答 where（慢在哪个环节）。排查线上问题时，通常先看 metric 发现异常，再看 trace 定位，最后看 log 找原因。

## 三、故障与值班

故障发生时说话要短、准、清楚。这一组词在故障沟通和复盘会上频率最高。

```words
incident | /ˈɪnsədənt/ | n. 故障；事故 | We declared an incident when the checkout stopped working. | /wiː dɪˈklerd æn ˈɪnsədənt wen ðə ˈtʃeˌkaʊt stɑːpt ˈwɜːrkɪŋ/ | 结算功能不能用时，我们宣布进入故障处理。
outage | /ˈaʊtədʒ/ | n. 服务中断 | The outage lasted forty minutes and affected all users. | /ðə ˈaʊtədʒ ˈlæstəd ˈfɔːrti ˈmɪnəts ənd əˈfektɪd ɔːl ˈjuːzərz/ | 这次中断持续了四十分钟，影响了所有用户。
on-call | /ɑːn kɔːl/ | adj./n. 值班（重音在 on 上：ON-call） | I'm on-call this week, so call me if anything breaks. | /aɪm ɑːn kɔːl ðɪs wiːk soʊ kɔːl miː ɪf ˈeniˌθɪŋ breɪks/ | 这周我值班，出问题就打我电话。
runbook | /ˈrʌnbʊk/ | n. 运维手册；处理手册 | Follow the runbook to restart the service safely. | /ˈfɑːloʊ ðə ˈrʌnbʊk tuː riˈstɑːrt ðə ˈsɜːrvəs ˈseɪfli/ | 按运维手册的步骤来安全重启服务。
severity | /sɪˈverɪti/ | n. 严重程度 | We marked it as a high severity incident. | /wiː mɑːrkt ɪt æz ə haɪ sɪˈverɪti ˈɪnsədənt/ | 我们把它标成了高严重级别的故障。
escalate | /ˈeskəˌleɪt/ | v. 升级上报 | If you can't fix it in fifteen minutes, escalate to the tech lead. | /ɪf juː kænt fɪks ɪt ɪn fɪfˈtiːn ˈmɪnəts ˈeskəˌleɪt tuː ðə tek led/ | 如果十五分钟内修不好，就上报给技术负责人。
mitigate | /ˈmɪtəˌɡeɪt/ | v. 缓解（区分：mitigate 是先止损，fix 才是根治） | We mitigated the issue by turning off the new feature. | /wiː ˈmɪtəˌɡeɪtɪd ðə ˈɪʃu baɪ ˈtɜːrnɪŋ ɔːf ðə nuː ˈfiːtʃər/ | 我们通过关掉新功能缓解了这个问题。
root cause | /ruːt kɑːz/ | n. 根因 | The root cause was an expired certificate. | /ðə ruːt kɑːz wɑːz æn ɪkˈspaɪrd sərˈtɪfɪkət/ | 根因是一个过期的证书。
postmortem | /poʊstˈmɔːrtəm/ | n. 复盘（也说 retrospective 或 RCA 报告） | We'll write a blameless postmortem after the incident. | /wiːl raɪt ə ˈbleɪmləs poʊstˈmɔːrtəm ˈæftər ðə ˈɪnsədənt/ | 故障之后我们会写一份不追责的复盘。
workaround | /ˈwɜːrkəraʊnd/ | n. 临时规避办法 | There's a workaround, but it's not a permanent fix. | /ðerz ə ˈwɜːrkəraʊnd bʌt ɪts nɑːt ə ˈpɜːrmənənt fɪks/ | 有个临时规避办法，但不是长久的修复。
status page | /ˈstætəs peɪdʒ/ | n. 状态页 | Please update the status page every thirty minutes. | /pliːz əpˈdeɪt ðə ˈstætəs peɪdʒ ˈevəri ˈθɜːrˌdiː ˈmɪnəts/ | 请每三十分钟更新一次状态页。
```

## 四、基础设施与容器

基础设施一旦写成代码，就能像应用代码一样评审、测试、回滚。

```words
infrastructure as code | /ˌɪnfrəˈstrʌktʃər æz koʊd/ | n. 基础设施即代码（常缩写 IaC，读 I-A-C） | We manage all cloud resources with infrastructure as code. | /wiː ˈmænədʒ ɔːl klaʊd ˈriːsɔːrsɪz wɪð ˌɪnfrəˈstrʌktʃər æz koʊd/ | 我们用基础设施即代码管理所有云资源。
provision | /prəˈvɪʒən/ | v. 创建资源；开通 | The script provisions three servers and a database. | /ðə skrɪpt prəˈvɪʒənz θriː ˈsɜːrvərz ənd ə ˈdeɪtəˌbeɪs/ | 这个脚本会创建三台服务器和一个数据库。
container | /kənˈteɪnər/ | n. 容器 | The container starts in less than two seconds. | /ðə kənˈteɪnər stɑːrts ɪn les ðæn tuː ˈsekəndz/ | 这个容器启动不到两秒。
image | /ˈɪmədʒ/ | n. 镜像（在容器语境里不是图片，是打包好的运行模板） | I pushed a new image to the registry. | /aɪ pʊʃt ə nuː ˈɪmədʒ tuː ðə ˈredʒɪstri/ | 我把一个新镜像推到了镜像仓库。
orchestration | /ˌɔːrkəˈstreɪʃən/ | n. 编排 | Container orchestration handles scaling and restarts for us. | /kənˈteɪnər ˌɔːrkəˈstreɪʃən ˈhændəlz ˈskeɪlɪŋ ənd riˈstɑːrts fɔːr ʌs/ | 容器编排帮我们处理扩缩容和重启。
cluster | /ˈklʌstər/ | n. 集群 | The cluster has twelve nodes. | /ðə ˈklʌstər hæz twelv noʊdz/ | 这个集群有十二个节点。
node | /noʊd/ | n. 节点 | One node ran out of memory and crashed. | /wʌn noʊd ræn aʊt ʌv ˈmeməri ənd kræʃt/ | 其中一个节点内存耗尽，崩溃了。
pod | /pɑːd/ | n. 容器组（Pod） | The pod keeps restarting because it runs out of memory. | /ðə pɑːd kiːps riˈstɑːrtɪŋ bɪˈkɔːz ɪt rʌnz aʊt ʌv ˈmeməri/ | 这个 pod 一直重启，因为它内存不够。
scale | /skeɪl/ | v. 扩缩容 | We scale the service up when the traffic goes up. | /wiː skeɪl ðə ˈsɜːrvəs ʌp wen ðə ˈtræfɪk ɡoʊz ʌp/ | 流量上升时，我们把服务扩容。
secret | /ˈsiːkrət/ | n. 密钥配置 | Secrets are injected into the pod at startup. | /ˈsiːkrəts ɑːr ˌɪnˈdʒektəd ˈɪntu ðə pɑːd æt ˈstɑːrˌtʌp/ | 密钥会在启动时注入到 pod 里。
tear down | /ter daʊn/ | phr. 销毁；拆除 | We tear down the test environment every night to save cost. | /wiː ter daʊn ðə test ɪnˈvaɪrənmənt ˈevəri naɪt tuː seɪv kɑːst/ | 我们每晚销毁测试环境来省钱。
```

## 五、用这些词说完整的话

```phrases
The pipeline builds the artifact and deploys it to staging. | /ðə ˈpaɪˌplaɪn bɪldz ðə ˈɑːrtəˌfækt ənd dɪˈplɔɪz ɪt tuː ˈsteɪdʒɪŋ/ | 流水线构建产物，并把它部署到预发布环境。
We're rolling out the change with a canary release first. | /wiːr ˈroʊlɪŋ aʊt ðə tʃeɪndʒ wɪð ə kəˈneri riˈliːs fɜːrst/ | 我们先用灰度发布来推这次改动。
The error rate crossed the threshold, so the alert fired. | /ðə ˈerər reɪt krɔːst ðə ˈθreˌʃoʊld soʊ ðə əˈlɜːrt ˈfaɪərd/ | 错误率超过阈值，所以告警触发了。
Let's roll back now and investigate the root cause later. | /lets roʊl bæk naʊ ənd ˌɪnˈvestəˌɡeɪt ðə ruːt kɑːz ˈleɪtər/ | 我们先回滚，根因以后再查。 | 故障时先止损再查因
I'm on-call tonight, so I'll watch the dashboard. | /aɪm ɑːn kɔːl təˈnaɪt soʊ aɪl wɑːtʃ ðə ˈdæʃˌbɔːrd/ | 我今晚值班，所以我会盯着仪表盘。
The runbook says to restart the pod, then check the logs. | /ðə ˈrʌnbʊk sez tuː riˈstɑːrt ðə pɑːd ðen tʃek ðə lɔːɡz/ | 运维手册说先重启 pod，再查日志。
The new feature is behind a feature flag, so we can turn it off. | /ðə nuː ˈfiːtʃər ɪz bɪˈhaɪnd ə ˈfiːtʃər flæɡ soʊ wiː kæn tɜːrn ɪt ɔːf/ | 新功能放在功能开关后面，所以我们可以随时关掉它。
We'll write a blameless postmortem and share it with the team. | /wiːl raɪt ə ˈbleɪmləs poʊstˈmɔːrtəm ənd ʃer ɪt wɪð ðə tiːm/ | 我们会写一份不追责的复盘，发给团队。
```

```dialog
title: 发布后告警响了
Oncall: The alert just fired. Error rate is up on checkout. | /ðə əˈlɜːrt dʒʌst ˈfaɪərd ˈerər reɪt ɪz ʌp ɑːn ˈtʃeˌkaʊt/ | 告警刚响了，结算的错误率上升了。
Lead: Did we release anything in the last hour? | /dɪd wiː riˈliːs ˈeniˌθɪŋ ɪn ðə læst ˈaʊər/ | 过去一小时发布过什么吗？
Oncall: Yes, the new version went out at ten. It's a canary for ten percent. | /jes ðə nuː ˈvɜːrʒən went aʊt æt ten ɪts ə kəˈneri fɔːr ten pərˈsent/ | 有，新版本十点发出去的，是面向百分之十用户的灰度。
Lead: Turn off the feature flag first. That's the quickest mitigation. | /tɜːrn ɔːf ðə ˈfiːtʃər flæɡ fɜːrst ðæts ðə ˈkwɪkɪst ˌmɪtɪˈɡeɪʃən/ | 先把功能开关关掉，那是最快的缓解办法。
Oncall: Done. The error rate is dropping. | /dʌn ðə ˈerər reɪt ɪz ˈdrɑːpɪŋ/ | 关了，错误率在下降。
Lead: Good. Please open an incident and update the status page. | /ɡʊd pliːz ˈoʊpən æn ˈɪnsədənt ənd əpˈdeɪt ðə ˈstætəs peɪdʒ/ | 好，请开一个故障单，并更新状态页。
Oncall: Will do. Should I roll back the release too? | /wɪl duː ʃʊd aɪ roʊl bæk ðə riˈliːs tuː/ | 好的。发布也要回滚吗？
Lead: Yes, roll back. We'll check the logs and the trace tomorrow. | /jes roʊl bæk wiːl tʃek ðə lɔːɡz ənd ðə treɪs təˈmɑːˌroʊ/ | 要，回滚。我们明天再查日志和调用链。
Oncall: Understood. I'll write the postmortem draft by Friday. | /ˌʌndərˈstʊd aɪl raɪt ðə poʊstˈmɔːrtəm dræft baɪ ˈfraɪdi/ | 明白，我周五前写好复盘草稿。
```

> [!QUESTION] 想检验自己：出故障时，怎么向领导说「我们先回滚，根因之后再查」？
> ```phrases
> Let's roll back first and look for the root cause afterwards. | /lets roʊl bæk fɜːrst ənd lʊk fɔːr ðə ruːt kɑːz ˈæftərwərdz/ | 我们先回滚，之后再找根因。
> ```

> [!QUESTION] 想检验自己：怎么解释 staging 和 production 的区别？
> ```phrases
> Staging is for testing, and production is where real users are. | /ˈsteɪdʒɪŋ ɪz fɔːr ˈtestɪŋ ənd prəˈdʌkʃən ɪz wer riːl ˈjuːzərz ɑːr/ | 预发布用来测试，生产环境才是真实用户在用的地方。
> ```
