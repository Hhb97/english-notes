---
level: 进阶
summary: implement、refactor、migrate、handle、fetch、ship、reproduce、triage 等技术工作高频动词，以及 fix a bug、push to main 这类固定搭配。
tags: [词汇, 动词, 搭配, 技术场景, 进阶]
---

# 技术场景高频动词与搭配

> [!ABSTRACT]
> - 本页 50 个高频动词，按场景分四组：**写代码**、**数据与流程**、**发布与运维**、**排查与协作**。
> - 例句里展示的是**动词 + 名词的搭配**，直接记整个搭配，比单独背动词有用。
> - 页末有 30 多个固定表达（fix a bug、push to main、hit the rate limit……），可以直接在站会和 Code Review 里套用。

## 一、写代码与改代码

这一组动词在技术方案、Code Review 和周报里最常见。**implement**（实现）比 **write**（写）更像在说完成一个功能。

```words
implement | /ˈɪmpləmənt/ | v. 实现（常见搭配：implement a feature / an interface / an algorithm） | We implemented the search feature in two weeks. | /wiː ˈɪmpləˌmentəd ðə sɜːrtʃ ˈfiːtʃər ɪn tuː wiːks/ | 我们两周实现了搜索功能。
refactor | /riːˈfæktər/ | v. 重构（重音在第二个音节：ree-FAK-ter；搭配 refactor a module / a function） | I want to refactor the payment module before adding more code. | /aɪ wɑːnt tuː riːˈfæktər ðə ˈpeɪmənt ˈmɑːdʒul bɪˈfɔːr ˈædɪŋ mɔːr koʊd/ | 在加更多代码之前，我想先重构支付模块。
optimize | /ˈɑːptəˌmaɪz/ | v. 优化（搭配 optimize a query / performance / memory usage） | We need to optimize this query because it scans the whole table. | /wiː niːd tuː ˈɑːptəˌmaɪz ðɪs ˈkwiːri bɪˈkɔːz ɪt skænz ðə hoʊl ˈteɪbəl/ | 我们需要优化这个查询，因为它会扫描整张表。
migrate | /ˈmaɪˌɡreɪt/ | v. 迁移（搭配 migrate data / a service from A to B；重音在第一个音节：MY-grayt） | We're migrating the database to a new server this weekend. | /wiːr ˈmaɪˌɡreɪtɪŋ ðə ˈdeɪtəˌbeɪs tuː ə nuː ˈsɜːrvər ðɪs ˈwiːˌkend/ | 我们这个周末把数据库迁移到新服务器上。
integrate | /ˈɪntəˌɡreɪt/ | v. 集成；对接（搭配 integrate A with B / integrate A into B） | We integrated the payment API into the checkout flow. | /wiː ˈɪntəˌɡreɪtəd ðə ˈpeɪmənt ˌeɪˌpiːˈaɪ ˈɪntu ðə ˈtʃeˌkaʊt floʊ/ | 我们把支付接口集成到了结算流程里。
configure | /kənˈfɪɡjər/ | v. 配置（搭配 configure a server / a timeout / the environment） | You can configure the timeout in the settings file. | /juː kæn kənˈfɪɡjər ðə ˈtaɪˌmaʊt ɪn ðə ˈsetɪŋz faɪl/ | 你可以在设置文件里配置超时时间。
deprecate | /ˈdeprəˌkeɪt/ | v. 弃用（搭配 deprecate an API / a method；被弃用的叫 deprecated） | We deprecated the old endpoint and will remove it next year. | /wiː ˈdeprəˌkeɪtəd ðə oʊld ˈendˌpɔɪnt ənd wɪl riˈmuːv ɪt nekst jɪr/ | 我们已经弃用了旧接口，明年会把它删掉。
validate | /ˈvælədeɪt/ | v. 校验；验证（搭配 validate input / a form / a token） | The server validates every field before saving. | /ðə ˈsɜːrvər ˈvæləˌdeɪts ˈevəri fiːld bɪˈfɔːr ˈseɪvɪŋ/ | 服务器在保存之前会校验每个字段。
initialize | /ˌɪˈnɪʃəˌlaɪz/ | v. 初始化（搭配 initialize a variable / a connection） | The app initializes the database connection at startup. | /ðə æp ˌɪˈnɪʃəˌlaɪzɪz ðə ˈdeɪtəˌbeɪs kəˈnekʃən æt ˈstɑːrˌtʌp/ | 应用在启动时初始化数据库连接。
serialize | /ˈsɪˌriːəˌlaɪz/ | v. 序列化（搭配 serialize an object / data；反过来叫 deserialize） | We serialize the object to JSON before sending it. | /wiː ˈsɪˌriːəˌlaɪz ðə ˈɑːbdʒekt tuː ˈdʒeɪsɑːn bɪˈfɔːr ˈsendɪŋ ɪt/ | 我们在发送之前把对象序列化成 JSON。
hard-code | /hɑːrd koʊd/ | v. 写死在代码里（搭配 hard-code a value / a URL / a key） | Please don't hard-code the password in the source. | /pliːz doʊnt hɑːrd koʊd ðə ˈpæˌswɜːrd ɪn ðə sɔːrs/ | 请不要把密码写死在源码里。
override | /ˈoʊvərˌraɪd/ | v. 覆盖；重写（搭配 override a method / a setting / a default） | The child class overrides the save method. | /ðə tʃaɪld klæs ˈoʊvərˌraɪdz ðə seɪv ˈmeθəd/ | 子类重写了 save 方法。
```

> [!TIP] 几个动词的重音与区别
> - **refactor** 重音在后：ree-FAK-ter；**deprecate** 是 DEP-ruh-kayt；**validate** 是 VAL-uh-dayt。
> - **migrate** 重音在前：MY-grayt，不是 my-GRATE；**initialize** 是 ih-NISH-uh-lyz。

## 二、数据与程序流程

描述代码「做了什么」时，下面这些动词能让你说得又短又准。

```words
trigger | /ˈtrɪɡər/ | v. 触发（搭配 trigger an alert / a job / an event） | The upload triggers a background job. | /ðə ˈʌˌploʊd ˈtrɪɡərz ə ˈbækˌɡraʊnd dʒɑːb/ | 上传会触发一个后台任务。
handle | /ˈhændəl/ | v. 处理（搭配 handle errors / requests / edge cases） | The function handles invalid input by returning an error. | /ðə ˈfʌŋkʃən ˈhændəlz ˈɪnvələd ˈɪnˌpʊt baɪ rɪˈtɜːrnɪŋ æn ˈerər/ | 这个函数通过返回错误来处理非法输入。
fetch | /fetʃ/ | v. 获取（去拿数据）（搭配 fetch data / a record / a page；强调去远端拿） | The page fetches the user's profile when it loads. | /ðə peɪdʒ ˈfetʃɪz ðə ˈjuːzərz ˈproʊˌfaɪl wen ɪt loʊdz/ | 页面加载时会获取用户资料。
retrieve | /rɪˈtriːv/ | v. 检索；取回（比 fetch 更正式，常用于数据库和存储） | We retrieve the order history from the database. | /wiː rɪˈtriːv ðə ˈɔːrdər ˈhɪstəri frʌm ðə ˈdeɪtəˌbeɪs/ | 我们从数据库里取回订单历史。
parse | /pɑːrs/ | v. 解析（搭配 parse JSON / a file / a date；读 PARSS） | The script parses the log file and counts the errors. | /ðə skrɪpt pɑːrzɪz ðə lɔːɡ faɪl ənd kaʊnts ðə ˈerərz/ | 脚本解析日志文件并统计错误数量。
render | /ˈrendər/ | v. 渲染（搭配 render a page / a component / HTML） | The browser renders the page in under one second. | /ðə ˈbraʊzər ˈrendərz ðə peɪdʒ ɪn ˈʌndər wʌn ˈsekənd/ | 浏览器在一秒之内渲染出页面。
persist | /pərˈsɪst/ | v. 持久化；保存（重音在第二个音节：per-SIST） | The app persists the user's settings in local storage. | /ðə æp pərˈsɪsts ðə ˈjuːzərz ˈsetɪŋz ɪn ˈloʊkəl ˈstɔːrədʒ/ | 应用把用户设置保存在本地存储里。
expose | /ɪkˈspoʊz/ | v. 对外暴露（搭配 expose an endpoint / an API / a port） | The service exposes a REST API for other teams. | /ðə ˈsɜːrvəs ɪkˈspoʊzɪz ə rest ˌeɪˌpiːˈaɪ fɔːr ˈʌðər tiːmz/ | 这个服务对其他团队暴露了一个 REST 接口。
bind | /baɪnd/ | v. 绑定（搭配 bind to a port / an address；过去式 bound） | The server binds to port eighty eighty at startup. | /ðə ˈsɜːrvər baɪndz tuː pɔːrt ˈeɪti ˈeɪti æt ˈstɑːrˌtʌp/ | 服务器启动时绑定到八零八零端口。
invoke | /ˌɪnˈvoʊk/ | v. 调用（搭配 invoke a function / a method / an API；比 call 更正式） | The handler invokes the validation function first. | /ðə ˈhændlər ˌɪnˈvoʊks ðə ˌvæləˈdeɪʃən ˈfʌŋkʃən fɜːrst/ | 处理器先调用校验函数。
iterate | /ˈɪtəreɪt/ | v. 遍历；迭代（搭配 iterate over a list / an array；重音在第一个音节：IT-uh-rayt） | I iterate over the list and skip empty values. | /aɪ ˈɪtəreɪt ˈoʊvər ðə lɪst ənd skɪp ˈempti ˈvæljuz/ | 我遍历这个列表，并跳过空值。
return | /rɪˈtɜːrn/ | v. 返回（搭配 return a value / an error / a response） | The API returns an empty list when nothing matches. | /ðə ˌeɪˌpiːˈaɪ rɪˈtɜːrnz æn ˈempti lɪst wen ˈnʌθɪŋ ˈmætʃəz/ | 没有匹配结果时，API 返回一个空列表。
throw | /θroʊ/ | v. 抛出（搭配 throw an exception / an error；对应 catch 捕获） | The method throws an exception if the file is missing. | /ðə ˈmeθəd θroʊz æn ɪkˈsepʃən ɪf ðə faɪl ɪz ˈmɪsɪŋ/ | 文件不存在时，这个方法会抛出异常。
cache | /kæʃ/ | v./n. 缓存（搭配 cache a response / a result；读 cash） | We cache the result for ten minutes. | /wiː kæʃ ðə rɪˈzʌlt fɔːr ten ˈmɪnəts/ | 我们把结果缓存十分钟。
sync | /sɪŋk/ | v. 同步（搭配 sync data / files / with the server；是 synchronize 的缩写） | The app syncs the data every five minutes. | /ðə æp sɪŋks ðə ˈdeɪtə ˈevəri faɪv ˈmɪnəts/ | 应用每五分钟同步一次数据。
log | /lɔːɡ/ | v. 记录日志（搭配 log an error / a warning / a request） | The service logs every failed login attempt. | /ðə ˈsɜːrvəs lɔːɡz ˈevəri feɪld ˈlɔːˌɡɪn əˈtempt/ | 服务会记录每一次失败的登录尝试。
```

## 三、发布与运维

发版、上线、扩容、销毁环境，日常运维的动词。

```words
ship | /ʃɪp/ | v. 发布；交付（搭配 ship a feature / a release；口语里的 ship it 就是「上线吧」） | We shipped the new checkout on Tuesday. | /wiː ʃɪpt ðə nuː ˈtʃeˌkaʊt ɑːn ˈtuːzdi/ | 我们周二发布了新的结算流程。
deploy | /dɪˈplɔɪ/ | v. 部署（搭配 deploy to staging / production；重音在第二个音节） | We deploy the service to production every Thursday. | /wiː dɪˈplɔɪ ðə ˈsɜːrvəs tuː prəˈdʌkʃən ˈevəri ˈθɜːrzˌdeɪ/ | 我们每周四把服务部署到生产环境。
roll out | /roʊl aʊt/ | phr. 逐步推出（名词是 rollout；搭配 roll out a feature / an update） | We're rolling out the change to ten percent of users first. | /wiːr ˈroʊlɪŋ aʊt ðə tʃeɪndʒ tuː ten pərˈsent ʌv ˈjuːzərz fɜːrst/ | 我们先把这次改动推给百分之十的用户。
roll back | /roʊl bæk/ | phr. 回滚（动词是两个词 roll back，名词是一个词 rollback） | We rolled back the release after the error rate went up. | /wiː roʊld bæk ðə riˈliːs ˈæftər ðə ˈerər reɪt went ʌp/ | 错误率上升之后，我们回滚了这次发布。
revert | /rɪˈvɜːrt/ | v. 撤销提交（搭配 revert a commit / a change；比 roll back 更常用在 Git 里） | I reverted the commit because it broke the build. | /aɪ rɪˈvɜːrtɪd ðə kəˈmɪt bɪˈkɔːz ɪt broʊk ðə bɪld/ | 我把那次提交撤销了，因为它让构建失败了。
merge | /mɜːrdʒ/ | v. 合并（搭配 merge a pull request / a branch） | I'll merge the branch after the tests pass. | /aɪl mɜːrdʒ ðə bræntʃ ˈæftər ðə tests pæs/ | 测试通过之后我会合并这个分支。
spin up | /spɪn ʌp/ | phr. 快速创建；拉起（口语说法，搭配 spin up a server / a container / an instance） | Let me spin up a test environment for the demo. | /let miː spɪn ʌp ə test ɪnˈvaɪrənmənt fɔːr ðə ˈdemoʊ/ | 我来为演示拉起一个测试环境。
tear down | /ter daʊn/ | phr. 销毁；拆除（搭配 tear down an environment / a cluster） | The script tears down the environment after the tests. | /ðə skrɪpt terz daʊn ðə ɪnˈvaɪrənmənt ˈæftər ðə tests/ | 测试结束后，脚本会销毁这个环境。
scale | /skeɪl/ | v. 扩缩容（搭配 scale up / scale down / scale out） | We scaled the service up to ten instances. | /wiː skeɪld ðə ˈsɜːrvəs ʌp tuː ten ˈɪnstənsəz/ | 我们把服务扩容到了十个实例。
patch | /pætʃ/ | v. 打补丁（搭配 patch a vulnerability / a server / a library） | We patched the server to fix the security hole. | /wiː pætʃt ðə ˈsɜːrvər tuː fɪks ðə sɪˈkjʊrəti hoʊl/ | 我们给服务器打了补丁，修复这个安全漏洞。
enforce | /enˈfɔːrs/ | v. 强制执行（搭配 enforce a rule / a policy / a limit） | The pipeline enforces a minimum test coverage. | /ðə ˈpaɪˌplaɪn enˈfɔːrsɪz ə ˈmɪnəməm test ˈkʌvərədʒ/ | 流水线强制要求最低的测试覆盖率。
```

## 四、排查与协作

出了问题怎么说，是英文沟通里最需要「准」的部分。

```words
reproduce | /ˌriːprəˈduːs/ | v. 复现（搭配 reproduce a bug / an issue / an error；重音在第三个音节） | I can't reproduce the bug on my machine. | /aɪ kænt ˌriːprəˈduːs ðə bʌɡ ɑːn maɪ məˈʃiːn/ | 我在自己的机器上复现不了这个 bug。
investigate | /ˌɪnˈvestəˌɡeɪt/ | v. 调查（搭配 investigate an issue / a failure / the cause） | I'm investigating why the job keeps failing. | /aɪm ˌɪnˈvestəˌɡeɪtɪŋ waɪ ðə dʒɑːb kiːps ˈfeɪlɪŋ/ | 我正在调查这个任务为什么一直失败。
mitigate | /ˈmɪtəˌɡeɪt/ | v. 缓解（搭配 mitigate a risk / the impact；先止损，不是根治） | We mitigated the impact by turning off the feature. | /wiː ˈmɪtəˌɡeɪtɪd ðə ˌɪmˈpækt baɪ ˈtɜːrnɪŋ ɔːf ðə ˈfiːtʃər/ | 我们通过关掉这个功能缓解了影响。
escalate | /ˈeskəˌleɪt/ | v. 上报；升级（搭配 escalate an issue / a ticket / to someone） | I escalated the issue to the security team. | /aɪ ˈeskəˌleɪtɪd ðə ˈɪʃu tuː ðə sɪˈkjʊrəti tiːm/ | 我把这个问题上报给了安全团队。
triage | /ˈtraɪɪdʒ/ | v. 分诊（排优先级）（读 TREE-ahzh；搭配 triage bugs / tickets / alerts） | We triage the new bugs every morning. | /wiː ˈtraɪɪdʒ ðə nuː bʌɡz ˈevəri ˈmɔːrnɪŋ/ | 我们每天早上对新 bug 做分诊排优先级。
resolve | /riˈzɑːlv/ | v. 解决（搭配 resolve an issue / a conflict / a ticket） | We resolved the issue by upgrading the library. | /wiː riˈzɑːlvd ðə ˈɪʃu baɪ əpˈɡreɪdɪŋ ðə ˈlaɪbreˌriː/ | 我们通过升级这个库解决了问题。
track down | /træk daʊn/ | phr. 追查出（搭配 track down a bug / the cause / a leak） | It took me a day to track down the memory leak. | /ɪt tʊk miː ə deɪ tuː træk daʊn ðə ˈmeməri liːk/ | 我花了一天才追查出这个内存泄漏。
rule out | /ruːl aʊt/ | phr. 排除（搭配 rule out a cause / a possibility） | We ruled out the network as the cause. | /wiː ruːld aʊt ðə ˈneˌtwɜːrk æz ðə kɑːz/ | 我们排除了网络是原因的可能。
benchmark | /ˈbentʃˌmɑːrk/ | v./n. 做基准测试（搭配 benchmark a function / a library） | We benchmarked both libraries before choosing one. | /wiː ˈbentʃˌmɑːrkt boʊθ ˈlaɪbreˌriːz bɪˈfɔːr ˈtʃuːzɪŋ wʌn/ | 我们在选择之前对这两个库做了基准测试。
follow up | /ˈfɑːloʊ ʌp/ | phr. 跟进（搭配 follow up with someone / on an issue） | I'll follow up with the vendor about the outage. | /aɪl ˈfɑːloʊ ʌp wɪð ðə ˈvendər əˈbaʊt ðə ˈaʊtədʒ/ | 我会就这次故障去跟进供应商。
unblock | /ʌnˈblɑːk/ | v. 解除阻塞（搭配 unblock someone / get unblocked） | Can you review my PR so I can get unblocked? | /kæn juː ˌriːˈvjuː maɪ ˌpiː ˈɑːr soʊ aɪ kæn ɡet ʌnˈblɑːkt/ | 你能评审一下我的 PR 吗？这样我就不被卡住了。
```

> [!WARNING] 容易搞混的几个动词
> - **fetch vs retrieve**：口语里 fetch 多用于从远端拿数据，retrieve 更书面，常用于数据库和存储。
> - **revert vs roll back**：Git 里撤销一次提交用 **revert**；发布出问题退回旧版本用 **roll back**。
> - **resolve vs fix**：resolve 常用于问题单和冲突，fix 更口语，多用于 bug。

## 五、固定表达与搭配

下面是技术工作里最常见的整句搭配，可以直接套用。

### 1. 开发与代码管理

```phrases
I fixed the bug in the login page. | /aɪ fɪkst ðə bʌɡ ɪn ðə ˈlɔːˌɡɪn peɪdʒ/ | 我修好了登录页面的 bug。 | fix a bug 是最基础的搭配
Can you open a pull request for this change? | /kæn juː ˈoʊpən ə pʊl rɪˈkwest fɔːr ðɪs tʃeɪndʒ/ | 你能为这个改动开一个 PR 吗？
I'll push my changes to the feature branch. | /aɪl pʊʃ maɪ ˈtʃeɪndʒəz tuː ðə ˈfiːtʃər bræntʃ/ | 我会把改动推到功能分支上。
Please don't push to main without a review. | /pliːz doʊnt pʊʃ tuː meɪn wɪˈθaʊt ə ˌriːˈvjuː/ | 没有评审请不要直接推到主分支。 | push to main 是直接推送主分支，很多团队禁止
I need to resolve the merge conflicts before I can merge. | /aɪ niːd tuː riˈzɑːlv ðə mɜːrdʒ kənˈflɪkts bɪˈfɔːr aɪ kæn mɜːrdʒ/ | 合并之前我得先解决合并冲突。
I'll bump the version and update the changelog. | /aɪl bʌmp ðə ˈvɜːrʒən ənd əpˈdeɪt ðə ˈtʃeɪndʒlɔːɡ/ | 我会升一下版本号，并更新变更日志。
Could you rebase your branch on main? | /kʊd juː riːˈbeɪs jɔːr bræntʃ ɑːn meɪn/ | 你能把你的分支变基到主分支上吗？
Let's add a unit test to cover this case. | /lets æd ə ˈjuːnət test tuː ˈkʌvər ðɪs keɪs/ | 我们加一个单元测试来覆盖这种情况。
We need to handle edge cases like empty input. | /wiː niːd tuː ˈhændəl edʒ ˈkeɪsəz laɪk ˈempti ˈɪnˌpʊt/ | 我们需要处理像空输入这样的边界情况。
Please pin the dependency to a specific version. | /pliːz pɪn ðə dɪˈpendənsi tuː ə spəˈsɪfɪk ˈvɜːrʒən/ | 请把这个依赖固定到一个具体的版本。
I'll clean up the code before the review. | /aɪl kliːn ʌp ðə koʊd bɪˈfɔːr ðə ˌriːˈvjuː/ | 评审之前我会先整理一下代码。
```

### 2. 排查与报错

```phrases
I ran into an error when I tried to deploy. | /aɪ ræn ˈɪntu æn ˈerər wen aɪ traɪd tuː dɪˈplɔɪ/ | 我在部署的时候遇到了一个错误。 | run into 是「碰到」，比 meet 自然
Can you reproduce the issue on your side? | /kæn juː ˌriːprəˈduːs ðə ˈɪʃu ɑːn jɔːr saɪd/ | 你那边能复现这个问题吗？
The function throws an exception when the input is null. | /ðə ˈfʌŋkʃən θroʊz æn ɪkˈsepʃən wen ðə ˈɪnˌpʊt ɪz nʌl/ | 输入为空时，这个函数会抛出异常。
We hit the rate limit after about a hundred requests. | /wiː hɪt ðə reɪt ˈlɪmət ˈæftər əˈbaʊt ə ˈhʌndrəd rɪˈkwests/ | 大约一百个请求之后，我们触到了限流。 | hit the rate limit 是「触到限流」
The request timed out after thirty seconds. | /ðə rɪˈkwest taɪmd aʊt ˈæftər ˈθɜːrˌdiː ˈsekəndz/ | 这个请求三十秒后超时了。
I'll look into it and get back to you. | /aɪl lʊk ˈɪntu ɪt ənd ɡet bæk tuː juː/ | 我去查一下，回头告诉你。 | look into 是「调查」，非常口语
I think the cache is returning stale data. | /aɪ θɪŋk ðə kæʃ ɪz rɪˈtɜːrnɪŋ steɪl ˈdeɪtə/ | 我觉得缓存返回了过期的数据。
Let me track down where the memory leak comes from. | /let miː træk daʊn wer ðə ˈmeməri liːk kʌmz frʌm/ | 让我来追查一下内存泄漏是从哪儿来的。
We can't rule out a network problem yet. | /wiː kænt ruːl aʊt ə ˈneˌtwɜːrk ˈprɑːbləm jet/ | 我们还不能排除网络问题。
I'm blocked, so I can't continue until I get access. | /aɪm blɑːkt soʊ aɪ kænt kənˈtɪnju ənˈtɪl aɪ ɡet ˈækˌses/ | 我被卡住了，拿到权限之前没法继续。
```

### 3. 发布与运维

```phrases
We're going to roll out the feature gradually. | /wiːr ˈɡoʊɪŋ tuː roʊl aʊt ðə ˈfiːtʃər ˈɡrædʒuəli/ | 我们打算逐步推出这个功能。
Let's roll back the release and investigate later. | /lets roʊl bæk ðə riˈliːs ənd ˌɪnˈvestəˌɡeɪt ˈleɪtər/ | 我们先回滚发布，之后再调查。
I'll spin up a test environment for the demo. | /aɪl spɪn ʌp ə test ɪnˈvaɪrənmənt fɔːr ðə ˈdemoʊ/ | 我来为演示拉起一个测试环境。
Please kick off the build once the tests pass. | /pliːz kɪk ɔːf ðə bɪld wʌns ðə tests pæs/ | 测试通过后请触发构建。 | kick off 是「启动」，口语
We're going to take the service down for ten minutes. | /wiːr ˈɡoʊɪŋ tuː teɪk ðə ˈsɜːrvəs daʊn fɔːr ten ˈmɪnəts/ | 我们打算把服务停十分钟。
The service is back up after the restart. | /ðə ˈsɜːrvəs ɪz bæk ʌp ˈæftər ðə riˈstɑːrt/ | 重启之后服务恢复了。
Let's put the new feature behind a feature flag. | /lets pʊt ðə nuː ˈfiːtʃər bɪˈhaɪnd ə ˈfiːtʃər flæɡ/ | 我们把新功能放到功能开关后面。
Please clear the cache and try again. | /pliːz klɪr ðə kæʃ ənd traɪ əˈɡen/ | 请清一下缓存再试一次。
We need to scale up before the sale starts. | /wiː niːd tuː skeɪl ʌp bɪˈfɔːr ðə seɪl stɑːrts/ | 促销开始之前我们需要先扩容。
Let's set up an alert for the error rate. | /lets set ʌp æn əˈlɜːrt fɔːr ðə ˈerər reɪt/ | 我们给错误率设一个告警吧。
```

> [!CAUTION] 千万别这样说
> - 别说 ~~I solved the bug.~~ 要说 **I fixed the bug.**；**solve** 常搭配 problem、puzzle，**fix** 搭配 bug、issue。
> - 别说 ~~We make a deploy to production.~~ 要说 **We deploy to production.** 或 **We push a release to production.**
> - 别说 ~~Please check the bug whether it exists.~~ 要说 **Please check whether the bug still happens.**

## 六、对话：排查一个线上问题

```dialog
title: 一起排查线上报错
Anna: The API keeps returning errors since the last release. | /ðə ˌeɪˌpiːˈaɪ kiːps rɪˈtɜːrnɪŋ ˈerərz sɪns ðə læst riˈliːs/ | 上次发布之后，API 一直在返回错误。
Ming: Can you reproduce it on staging? | /kæn juː ˌriːprəˈduːs ɪt ɑːn ˈsteɪdʒɪŋ/ | 你能在预发布环境复现吗？
Anna: Yes. The function throws an exception when the input is empty. | /jes ðə ˈfʌŋkʃən θroʊz æn ɪkˈsepʃən wen ðə ˈɪnˌpʊt ɪz ˈempti/ | 能，输入为空时函数会抛出异常。
Ming: Okay. We didn't handle that edge case. Let's revert the commit first. | /ˌoʊˈkeɪ wiː ˈdɪdənt ˈhændəl ðæt edʒ keɪs lets rɪˈvɜːrt ðə kəˈmɪt fɜːrst/ | 好，我们没处理这个边界情况。先把那次提交撤销吧。
Anna: Reverted. I'll redeploy and monitor the error rate. | /rɪˈvɜːrtɪd aɪl ˌriːdɪˈplɔɪ ənd ˈmɑːnətər ðə ˈerər reɪt/ | 撤销了。我重新部署，并监控错误率。
Ming: Good. Then please add a validation and a unit test. | /ɡʊd ðen pliːz æd ə ˌvæləˈdeɪʃən ənd ə ˈjuːnət test/ | 好。然后请加一个校验和一个单元测试。
Anna: Will do. Should I open a ticket for the follow-up? | /wɪl duː ʃʊd aɪ ˈoʊpən ə ˈtɪkət fɔːr ðə ˈfɑːloʊ ʌp/ | 好的。后续的工作我要开个工单吗？
Ming: Yes, and flag it as high priority so we can triage it tomorrow. | /jes ənd flæɡ ɪt æz haɪ praɪˈɔːrəti soʊ wiː kæn ˈtraɪɪdʒ ɪt təˈmɑːˌroʊ/ | 要，标成高优先级，我们明天好分诊。
Anna: Got it. I'll push the fix to a new branch by noon. | /ɡɑːt ɪt aɪl pʊʃ ðə fɪks tuː ə nuː bræntʃ baɪ nuːn/ | 明白，中午前我把修复推到一个新分支上。
```

> [!QUESTION] 想检验自己：怎么说「我在本地复现不了这个 bug，你能给我更多信息吗？」
> ```phrases
> I can't reproduce the bug on my machine. Could you share more details? | /aɪ kænt ˌriːprəˈduːs ðə bʌɡ ɑːn maɪ məˈʃiːn kʊd juː ʃer mɔːr dɪˈteɪlz/ | 我在自己的机器上复现不了这个 bug，你能提供更多细节吗？
> ```

> [!QUESTION] 想检验自己：发布后错误率上升了，怎么说「我们先回滚，之后再调查」？
> ```phrases
> Let's roll back the release now and investigate later. | /lets roʊl bæk ðə riˈliːs naʊ ənd ˌɪnˈvestəˌɡeɪt ˈleɪtər/ | 我们现在先回滚发布，之后再调查。
> ```
