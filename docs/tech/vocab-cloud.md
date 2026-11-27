---
level: 进阶
summary: IP、DNS、防火墙、负载均衡、加密、证书、漏洞、补丁、实例、区域、存储桶、无服务器等网络、安全与云词汇，配真实工作例句。
tags: [词汇, 网络, 安全, 云计算, 进阶]
---

# 网络、安全与云词汇

> [!ABSTRACT]
> - 本页 49 个词，分三组：**网络**、**安全**、**云**。
> - 容易混的几对：**encryption vs hash**、**vulnerability vs breach**、**region vs availability zone**、**instance vs container**。
> - 读音陷阱集中在 TIP 里：**vulnerability**、**certificate**、**phishing**、**proxy**。

## 一、网络基础

和运维、后端、网络同事沟通时，这一组是共同语言。

```words
IP address | /ˈaɪˈpiː ˈæˌdres/ | n. IP 地址 | The server's IP address changed after we moved it. | /ðə ˈsɜːrvərz ˈaɪˈpiː ˈæˌdres tʃeɪndʒd ˈæftər wiː muːvd ɪt/ | 我们迁移服务器之后，它的 IP 地址变了。
DNS | /ˌdiːˌeˈnes/ | n. 域名系统（读 D-N-S；DNS record 是域名解析记录） | The site is down because the DNS record points to the wrong address. | /ðə saɪt ɪz daʊn bɪˈkɔːz ðə ˌdiːˌeˈnes rəˈkɔːrd pɔɪnts tuː ðə rɔːŋ ˈæˌdres/ | 网站打不开，因为 DNS 记录指向了错误的地址。
domain name | /doʊˈmeɪn neɪm/ | n. 域名 | We need to renew the domain name before it expires. | /wiː niːd tuː rɪˈnuː ðə doʊˈmeɪn neɪm bɪˈfɔːr ɪt ɪkˈspaɪərz/ | 我们要在域名过期之前续费。
port | /pɔːrt/ | n. 端口 | The app listens on port eighty eighty. | /ðə æp ˈlɪsənz ɑːn pɔːrt ˈeɪti ˈeɪti/ | 这个应用监听八零八零端口。
protocol | /ˈproʊtəˌkɑːl/ | n. 协议（重音在第一个音节：PROH-tuh-kawl） | Both services use the same protocol, so they can talk to each other. | /boʊθ ˈsɜːrvəsəz juːs ðə seɪm ˈproʊtəˌkɑːl soʊ ðeɪ kæn tɔːk tuː iːtʃ ˈʌðər/ | 两个服务用的是同一个协议，所以能互相通信。
packet | /ˈpækət/ | n. 数据包 | We lost a lot of packets between the two data centers. | /wiː lɔːst ə lɑːt ʌv ˈpækɪts bɪˈtwiːn ðə tuː ˈdeɪtə ˈsentərz/ | 两个机房之间丢了很多数据包。
bandwidth | /ˈbændwɪdθ/ | n. 带宽 | The upload is slow because we're running out of bandwidth. | /ðə ˈʌˌploʊd ɪz sloʊ bɪˈkɔːz wiːr ˈrʌnɪŋ aʊt ʌv ˈbændwɪdθ/ | 上传很慢，因为我们的带宽快用完了。
latency | /ˈleɪtənsi/ | n. 延迟 | Network latency between regions is about eighty milliseconds. | /ˈneˌtwɜːrk ˈleɪtənsi bɪˈtwiːn ˈriːdʒənz ɪz əˈbaʊt ˈeɪti ˈmɪlɪˌsekəndz/ | 区域之间的网络延迟大约是八十毫秒。
firewall | /ˈfaɪrwɑːl/ | n. 防火墙 | The firewall blocks all traffic except ports eighty and four hundred forty-three. | /ðə ˈfaɪrwɑːl blɑːks ɔːl ˈtræfɪk ɪkˈsept pɔːrts ˈeɪti ənd fɔːr ˈhʌndrəd ˈfɔːrti θriː/ | 防火墙拦截了除八十和四百四十三端口之外的所有流量。
load balancer | /loʊd ˈbælənsər/ | n. 负载均衡器 | The load balancer spreads requests across four servers. | /ðə loʊd ˈbælənsər spredz rɪˈkwests əˈkrɔːs fɔːr ˈsɜːrvərz/ | 负载均衡器把请求分发到四台服务器上。
proxy | /ˈprɑːksi/ | n. 代理（重音在第一个音节：PROK-see） | All outgoing traffic goes through a proxy. | /ɔːl ˈaʊtˌɡoʊɪŋ ˈtræfɪk ɡoʊz θruː ə ˈprɑːksi/ | 所有对外的流量都要经过代理。
gateway | /ˈɡeɪˌtweɪ/ | n. 网关 | The API gateway checks the token before forwarding the request. | /ðə ˌeɪˌpiːˈaɪ ˈɡeɪˌtweɪ tʃeks ðə ˈtoʊkən bɪˈfɔːr ˈfɔːrwərdɪŋ ðə rɪˈkwest/ | API 网关会先检查 token，再转发请求。
VPN | /viː piː en/ | n. 虚拟专用网络 | You need to connect to the VPN to access the staging server. | /juː niːd tuː kəˈnekt tuː ðə viː piː en tuː ˈækˌses ðə ˈsteɪdʒɪŋ ˈsɜːrvər/ | 你要先连上 VPN，才能访问预发布服务器。
CDN | /siː diː en/ | n. 内容分发网络 | We serve images through a CDN, so they load faster. | /wiː sɜːrv ˈɪmədʒəz θruː ə siː diː en soʊ ðeɪ loʊd ˈfæstər/ | 我们通过 CDN 提供图片服务，所以加载更快。
HTTPS | /ˌeɪtʃˌtiːˌtiːˈpiːz/ | n. 加密的 HTTP 协议 | The site only accepts HTTPS connections. | /ðə saɪt ˈoʊnli ækˈsepts ˌeɪtʃˌtiːˌtiːˈpiːz kəˈnekʃənz/ | 网站只接受 HTTPS 连接。
traffic | /ˈtræfɪk/ | n. 流量 | Traffic doubles every Monday morning. | /ˈtræfɪk ˈdʌbəlz ˈevəri ˈmʌndi ˈmɔːrnɪŋ/ | 每周一早上流量都会翻倍。
outage | /ˈaʊtədʒ/ | n. 中断；宕机 | The network outage lasted about forty minutes. | /ðə ˈneˌtwɜːrk ˈaʊtədʒ ˈlæstəd əˈbaʊt ˈfɔːrti ˈmɪnəts/ | 这次网络中断持续了大约四十分钟。
```

## 二、安全

安全词汇经常出现在周会、事故复盘和合规检查里。注意 **vulnerability**（漏洞，还没被利用）和 **breach**（已经发生的数据泄露）不是一回事。

```words
encryption | /enˈkrɪpʃən/ | n. 加密（加密后可以用密钥解密回来） | All customer data is protected with encryption at rest. | /ɔːl ˈkʌstəmər ˈdeɪtə ɪz prəˈtektɪd wɪð enˈkrɪpʃən æt rest/ | 所有客户数据都用静态加密保护。
hash | /hæʃ/ | n./v. 哈希；做哈希（区分：hash 是单向的，不能还原；encryption 是双向的，有密钥就能解密） | We store a hash of the password, never the password itself. | /wiː stɔːr ə hæʃ ʌv ðə ˈpæˌswɜːrd ˈnevər ðə ˈpæˌswɜːrd ˌɪtˈself/ | 我们存密码的哈希，绝不存密码本身。
certificate | /sərˈtɪfɪkət/ | n. 证书（重音在第二个音节：ser-TIF-ih-kit） | The browser shows a warning because the certificate expired. | /ðə ˈbraʊzər ʃoʊz ə ˈwɔːrnɪŋ bɪˈkɔːz ðə sərˈtɪfɪkət ɪkˈspaɪrd/ | 浏览器出现警告，因为证书过期了。
vulnerability | /ˌvʌlnərəˈbɪlɪti/ | n. 漏洞（区分：vulnerability 是弱点，breach 是已发生的泄露） | The scan found a critical vulnerability in an old library. | /ðə skæn faʊnd ə ˈkrɪtɪkəl ˌvʌlnərəˈbɪlɪti ɪn æn oʊld ˈlaɪbreˌriː/ | 扫描在一个旧库里发现了一个严重漏洞。
breach | /briːtʃ/ | n. 数据泄露；入侵事件 | The company reported a data breach affecting ten thousand users. | /ðə ˈkʌmpəˌniː ˌriːˈpɔːrtɪd ə ˈdeɪtə briːtʃ əˈfektɪŋ ten ˈθaʊzənd ˈjuːzərz/ | 公司通报了一起影响一万名用户的数据泄露事件。
patch | /pætʃ/ | n./v. 补丁；打补丁 | We need to patch the servers before the end of the week. | /wiː niːd tuː pætʃ ðə ˈsɜːrvərz bɪˈfɔːr ðə end ʌv ðə wiːk/ | 我们要在本周末之前给服务器打补丁。
two-factor authentication | /tuː ˈfæktər ɔːˌθentəˈkeɪʃən/ | n. 双因素认证（常缩写为 2FA，口语里说 two-factor 或 two F A） | We require two-factor authentication for all admin accounts. | /wiː ˌriːˈkwaɪər tuː ˈfæktər ɔːˌθentəˈkeɪʃən fɔːr ɔːl ˈædmɪn əˈkaʊnts/ | 所有管理员账号都要求开启双因素认证。
phishing | /ˈfɪʃɪŋ/ | n. 钓鱼攻击（读音和 fishing 一样） | Don't click that link, it looks like a phishing email. | /doʊnt klɪk ðæt lɪŋk ɪt lʊks laɪk ə ˈfɪʃɪŋ iˈmeɪl/ | 别点那个链接，看起来像钓鱼邮件。
malware | /ˈmælˌwer/ | n. 恶意软件 | The laptop was infected with malware from a fake download. | /ðə ˈlæpˌtɑːp wɑːz ˌɪnˈfektɪd wɪð ˈmælˌwer frʌm ə feɪk ˈdaʊnˌloʊd/ | 这台笔记本因为一个假的下载而感染了恶意软件。
password | /ˈpæˌswɜːrd/ | n. 密码 | Please don't share your password over chat. | /pliːz doʊnt ʃer jɔːr ˈpæˌswɜːrd ˈoʊvər tʃæt/ | 请不要通过聊天工具分享你的密码。
credentials | /krəˈdenʃəlz/ | n. 登录凭据（通常用复数，指用户名加密码、密钥等） | Never commit credentials to the repository. | /ˈnevər kəˈmɪt krəˈdenʃəlz tuː ðə riˈpɑːzəˌtɔːri/ | 绝对不要把凭据提交到代码仓库里。
least privilege | /liːst ˈprɪvlədʒ/ | n. 最小权限原则 | We follow the principle of least privilege for all service accounts. | /wiː ˈfɑːloʊ ðə ˈprɪnsəpəl ʌv liːst ˈprɪvlədʒ fɔːr ɔːl ˈsɜːrvəs əˈkaʊnts/ | 所有服务账号我们都遵循最小权限原则。
access control | /ˈækˌses kənˈtroʊl/ | n. 访问控制 | Access control for the production database is very strict. | /ˈækˌses kənˈtroʊl fɔːr ðə prəˈdʌkʃən ˈdeɪtəˌbeɪs ɪz ˈveri strɪkt/ | 生产数据库的访问控制非常严格。
audit | /ˈɔːdɪt/ | n./v. 审计 | The security team will audit our access logs next month. | /ðə sɪˈkjʊrəti tiːm wɪl ˈɔːdɪt ˈaʊər ˈækˌses lɔːɡz nekst mʌnθ/ | 安全团队下个月会审计我们的访问日志。
secret | /ˈsiːkrət/ | n. 密钥；机密信息 | We keep API keys in a secret manager, not in the code. | /wiː kiːp ˌeɪˌpiːˈaɪ kiːz ɪn ə ˈsiːkrət ˈmænədʒər nɑːt ɪn ðə koʊd/ | 我们把 API 密钥放在密钥管理工具里，不放在代码里。
penetration test | /ˌpenəˈtreɪʃən test/ | n. 渗透测试（口语常说 pen test） | We hire an outside team to run a penetration test every year. | /wiː ˈhaɪər æn ˈaʊtˈsaɪd tiːm tuː rʌn ə ˌpenəˈtreɪʃən test ˈevəri jɪr/ | 我们每年请外部团队做一次渗透测试。
```

> [!TIP] 读音陷阱
> - **vulnerability** 重音在第四个音节：vul-ner-uh-BIL-uh-tee。
> - **encryption** 重音在第二个音节：en-KRIP-shun；**encrypt** 是 en-KRIPT。
> - **certificate** 名词读 ser-TIF-ih-kit，重音在第二个音节。
> - **phishing** 的 ph 读 f，和 fishing 一模一样。
> - **proxy** 读 PROK-see，重音在第一个音节。
> - **hash** 就是 hæsh，不是 haash。

> [!CAUTION] 千万别这样说
> - 别说 ~~Our password was hacked, so we need to change a new one.~~ 要说 **Our password was compromised, so we need to reset it.**
> - 别说 ~~We have a vulnerability leak.~~ 要说 **We found a vulnerability.**（漏洞）或 **We had a data breach.**（泄露事件）。

## 三、云计算

云厂商的产品名各不相同，但下面这些通用词到哪家都能用。

```words
instance | /ˈɪnstəns/ | n. 实例；云主机（区分：instance 通常指一台虚拟机，container 是更轻量的运行环境） | We launched ten new instances to handle the traffic. | /wiː lɔːntʃt ten nuː ˈɪnstənsəz tuː ˈhændəl ðə ˈtræfɪk/ | 我们启动了十个新实例来应对流量。
region | /ˈriːdʒən/ | n. 区域（地理上的数据中心群）（区分：region 是大区域，availability zone 是区域里独立的机房） | Please deploy the service in the same region as the database. | /pliːz dɪˈplɔɪ ðə ˈsɜːrvəs ɪn ðə seɪm ˈriːdʒən æz ðə ˈdeɪtəˌbeɪs/ | 请把服务部署在和数据库相同的区域。
availability zone | /əˌveɪləˈbɪləti zoʊn/ | n. 可用区（常缩写成 AZ，读 A-Z） | We run in three availability zones, so one failure won't take us down. | /wiː rʌn ɪn θriː əˌveɪləˈbɪləti zoʊnz soʊ wʌn ˈfeɪljər woʊnt teɪk ʌs daʊn/ | 我们跑在三个可用区里，所以一个故障不会让整个服务挂掉。
bucket | /ˈbʌkət/ | n. 存储桶 | The backup files are stored in an object storage bucket. | /ðə ˈbæˌkʌp faɪlz ɑːr stɔːrd ɪn æn ˈɑːbdʒekt ˈstɔːrədʒ ˈbʌkət/ | 备份文件存在对象存储的一个存储桶里。
object storage | /ˈɑːbdʒekt ˈstɔːrədʒ/ | n. 对象存储 | We keep user uploads in object storage. | /wiː kiːp ˈjuːzər ˈʌˌploʊdz ɪn ˈɑːbdʒekt ˈstɔːrədʒ/ | 我们把用户上传的文件放在对象存储里。
container | /kənˈteɪnər/ | n. 容器 | Each service runs in its own container. | /iːtʃ ˈsɜːrvəs rʌnz ɪn ɪts oʊn kənˈteɪnər/ | 每个服务都跑在自己的容器里。
virtual machine | /ˈvɜːrtʃuəl məˈʃiːn/ | n. 虚拟机 | The old app still runs on a virtual machine. | /ðə oʊld æp stɪl rʌnz ɑːn ə ˈvɜːrtʃuəl məˈʃiːn/ | 那个老应用还跑在一台虚拟机上。
serverless | /ˈsɜːrvərləs/ | adj. 无服务器的（不是真的没有服务器，只是不用自己管理服务器） | We run the image resize job as a serverless function. | /wiː rʌn ðə ˈɪmədʒ riːˈsaɪz dʒɑːb æz ə ˈsɜːrvərləs ˈfʌŋkʃən/ | 图片缩放任务我们用无服务器函数来跑。
autoscaling | /ˈɔːtoʊˌskeɪlɪŋ/ | n. 自动扩缩容 | Autoscaling adds more instances when the CPU goes above seventy percent. | /ˈɔːtoʊˌskeɪlɪŋ ædz mɔːr ˈɪnstənsəz wen ðə ˌsiːˌpiːˈjuː ɡoʊz əˈbʌv ˈsevənti pərˈsent/ | CPU 超过百分之七十时，自动扩缩容会增加实例。
VPC | /viː piː siː/ | n. 虚拟私有云（读 V-P-C，是 virtual private cloud 的缩写） | The database sits in a private subnet inside the VPC. | /ðə ˈdeɪtəˌbeɪs sɪts ɪn ə ˈpraɪvət ˈsʌbnet ˌɪnˈsaɪd ðə viː piː siː/ | 数据库放在 VPC 里的一个私有子网中。
subnet | /ˈsʌbnet/ | n. 子网 | Each subnet has its own set of security rules. | /iːtʃ ˈsʌbnet hæz ɪts oʊn set ʌv sɪˈkjʊrəti ruːlz/ | 每个子网都有自己的一套安全规则。
managed service | /ˈmænədʒd ˈsɜːrvəs/ | n. 托管服务 | We chose a managed service so we don't maintain the database ourselves. | /wiː tʃoʊz ə ˈmænədʒd ˈsɜːrvəs soʊ wiː doʊnt meɪnˈteɪn ðə ˈdeɪtəˌbeɪs aʊərˈselvz/ | 我们选择了托管服务，这样就不用自己维护数据库。
cost optimization | /kɑːst ɑːptəməˈzeɪʃən/ | n. 成本优化 | Cost optimization is our main goal this quarter. | /kɑːst ɑːptəməˈzeɪʃən ɪz ˈaʊər meɪn ɡoʊl ðɪs ˈkwɔːrtər/ | 成本优化是我们这个季度的主要目标。
on-premises | /ɑːn ˈpreməsəz/ | adj. 本地部署的（自建机房）（重音在第二个音节：on-PREM-ih-ziz；不要说成 on-premise） | Some legacy systems are still on-premises. | /sʌm ˈleɡəsi ˈsɪstəmz ɑːr stɪl ɑːn ˈpreməsəz/ | 有些老系统还在自建机房里。
multi-tenant | /ˈmʌlti ˈtenənt/ | adj. 多租户的 | The platform is multi-tenant, so customers share the same infrastructure. | /ðə ˈplætˌfɔːrm ɪz ˈmʌlti ˈtenənt soʊ ˈkʌstəmərz ʃer ðə seɪm ˌɪnfrəˈstrʌktʃər/ | 这个平台是多租户的，客户共用同一套基础设施。
data center | /ˈdeɪtə ˈsentər/ | n. 数据中心 | Both data centers are in the same city. | /boʊθ ˈdeɪtə ˈsentərz ɑːr ɪn ðə seɪm ˈsɪti/ | 两个数据中心在同一个城市。
```

## 四、用这些词说完整的话

```phrases
The firewall blocks the port, so the request never reaches the server. | /ðə ˈfaɪrwɑːl blɑːks ðə pɔːrt soʊ ðə rɪˈkwest ˈnevər ˈriːtʃəz ðə ˈsɜːrvər/ | 防火墙拦截了这个端口，所以请求根本到不了服务器。
We store the hash of the password, not the password itself. | /wiː stɔːr ðə hæʃ ʌv ðə ˈpæˌswɜːrd nɑːt ðə ˈpæˌswɜːrd ˌɪtˈself/ | 我们存密码的哈希，而不是密码本身。 | hash 单向，不能还原
The certificate expires tomorrow, so we need to renew it today. | /ðə sərˈtɪfɪkət ɪkˈspaɪərz təˈmɑːˌroʊ soʊ wiː niːd tuː rɪˈnuː ɪt təˈdeɪ/ | 证书明天就过期了，所以我们今天要续期。
We found a critical vulnerability, and we need to patch it right away. | /wiː faʊnd ə ˈkrɪtɪkəl ˌvʌlnərəˈbɪlɪti ənd wiː niːd tuː pætʃ ɪt raɪt əˈweɪ/ | 我们发现了一个严重漏洞，需要马上打补丁。
We run in two regions, and each region has three availability zones. | /wiː rʌn ɪn tuː ˈriːdʒənz ənd iːtʃ ˈriːdʒən hæz θriː əˌveɪləˈbɪləti zoʊnz/ | 我们跑在两个区域里，每个区域有三个可用区。
Autoscaling helps with traffic spikes, but it also increases the cost. | /ˈɔːtoʊˌskeɪlɪŋ helps wɪð ˈtræfɪk spaɪks bʌt ɪt ˈɔːlsoʊ ɪnˈkriːsəz ðə kɑːst/ | 自动扩缩容能应对流量高峰，但也会增加成本。
We follow least privilege, so developers can't access production data. | /wiː ˈfɑːloʊ liːst ˈprɪvlədʒ soʊ dɪˈveləpərz kænt ˈækˌses prəˈdʌkʃən ˈdeɪtə/ | 我们遵循最小权限原则，所以开发人员不能访问生产数据。
Please turn on two-factor authentication for your account. | /pliːz tɜːrn ɑːn tuː ˈfæktər ɔːˌθentəˈkeɪʃən fɔːr jɔːr əˈkaʊnt/ | 请给你的账号开启双因素认证。
```

```dialog
title: 安全检查之后的跟进
Security: The scan found a critical vulnerability in the old library. | /ðə skæn faʊnd ə ˈkrɪtɪkəl ˌvʌlnərəˈbɪlɪti ɪn ðə oʊld ˈlaɪbreˌriː/ | 扫描在旧库里发现了一个严重漏洞。
Dev: Is it already exploited? Do we have a breach? | /ɪz ɪt ɔːlˈredi ˈekˌsplɔɪtəd duː wiː hæv ə briːtʃ/ | 已经被利用了吗？我们有数据泄露吗？
Security: No sign of a breach, but we should patch today. | /noʊ saɪn ʌv ə briːtʃ bʌt wiː ʃʊd pætʃ təˈdeɪ/ | 没有泄露的迹象，但今天就应该打补丁。
Dev: Okay. I'll upgrade the library and redeploy the containers. | /ˌoʊˈkeɪ aɪl əpˈɡreɪd ðə ˈlaɪbreˌriː ənd ˌriːdɪˈplɔɪ ðə kənˈteɪnərz/ | 好，我会升级这个库，并重新部署容器。
Security: Also, the certificate for the staging site expires on Friday. | /ˈɔːlsoʊ ðə sərˈtɪfɪkət fɔːr ðə ˈsteɪdʒɪŋ saɪt ɪkˈspaɪərz ɑːn ˈfraɪdi/ | 另外，预发布站点的证书周五到期。
Dev: Got it. I'll renew it and check the DNS record too. | /ɡɑːt ɪt aɪl rɪˈnuː ɪt ənd tʃek ðə ˌdiːˌeˈnes rəˈkɔːrd tuː/ | 明白，我会续期，也检查一下 DNS 记录。
Security: One more thing. Please enable two-factor authentication on the cloud console. | /wʌn mɔːr θɪŋ pliːz eˈneɪbəl tuː ˈfæktər ɔːˌθentəˈkeɪʃən ɑːn ðə klaʊd ˈkɑːnsoʊl/ | 还有一件事，请在云控制台上开启双因素认证。
Dev: Sure. Should I also review who has admin access? | /ʃʊr ʃʊd aɪ ˈɔːlsoʊ ˌriːˈvjuː huː hæz ˈædmɪn ˈækˌses/ | 好的。我要不要也检查一下谁有管理员权限？
Security: Yes, please apply least privilege there. | /jes pliːz əˈplaɪ liːst ˈprɪvlədʒ ðer/ | 要，请在那里落实最小权限原则。
```

> [!QUESTION] 想检验自己：怎么说「这个漏洞要尽快修复，但目前没有数据泄露」？
> ```phrases
> We need to patch this vulnerability soon, but there's no breach so far. | /wiː niːd tuː pætʃ ðɪs ˌvʌlnərəˈbɪlɪti suːn bʌt ðerz noʊ briːtʃ soʊ fɑːr/ | 这个漏洞需要尽快打补丁，但目前还没有数据泄露。
> ```

> [!QUESTION] 想检验自己：同事问 "Why do we use multiple availability zones?"，一句话怎么答？
> ```phrases
> If one zone goes down, the other zones keep the service running. | /ɪf wʌn zoʊn ɡoʊz daʊn ðə ˈʌðər zoʊnz kiːp ðə ˈsɜːrvəs ˈrʌnɪŋ/ | 一个可用区挂了，其他可用区还能让服务继续运行。
> ```
