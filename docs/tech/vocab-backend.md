---
level: 进阶
summary: 服务器、接口、认证授权、缓存、消息队列、数据库、事务、并发、幂等、限流等后端与数据库词汇，配真实工作例句。
tags: [词汇, 后端, 数据库, 并发, 进阶]
---

# 后端与数据库词汇

> [!ABSTRACT]
> - 本页 50 个后端词，分三组：**请求与接口**、**性能与架构**、**数据库**。
> - 重点分清：**authentication vs authorization**、**latency vs throughput**、**concurrency vs parallelism**、**primary key vs foreign key**。
> - 不少词读音有陷阱：**cache** 读 cash，**queue** 读 kyoo，**schema** 读 SKEE-muh，见页面中间的 TIP。

## 一、请求、接口与身份

前后端联调、写接口文档、排查线上问题，每天都在说这一组。

```words
server | /ˈsɜːrvər/ | n. 服务器；服务端 | The server returned an error after about thirty seconds. | /ðə ˈsɜːrvər rɪˈtɜːrnd æn ˈerər ˈæftər əˈbaʊt ˈθɜːrˌdiː ˈsekəndz/ | 服务器大约三十秒后返回了一个错误。
client | /ˈklaɪənt/ | n. 客户端；调用方 | The client sends a request every five seconds. | /ðə ˈklaɪənt sendz ə rɪˈkwest ˈevəri faɪv ˈsekəndz/ | 客户端每五秒发送一次请求。
endpoint | /ˈendˌpɔɪnt/ | n. 接口端点（一个具体的 URL） | We added a new endpoint for exporting reports. | /wiː ˈædəd ə nuː ˈendˌpɔɪnt fɔːr ɪkˈspɔːrtɪŋ rɪˈpɔːrts/ | 我们新增了一个导出报表的接口。
request | /rɪˈkwest/ | n./v. 请求 | The request fails when the body is empty. | /ðə rɪˈkwest feɪlz wen ðə ˈbɑːdi ɪz ˈempti/ | 请求体为空时，这个请求会失败。
response | /rɪˈspɑːns/ | n. 响应 | The response includes a list of orders and a total count. | /ðə rɪˈspɑːns ˌɪnˈkluːdz ə lɪst ʌv ˈɔːrdərz ənd ə ˈtoʊtəl kaʊnt/ | 响应里包含订单列表和总数。
payload | /ˈpeɪˌloʊd/ | n. 请求或响应的数据体 | The payload is too large, so the gateway rejects it. | /ðə ˈpeɪˌloʊd ɪz tuː lɑːrdʒ soʊ ðə ˈɡeɪˌtweɪ rɪˈdʒekts ɪt/ | 数据体太大了，所以网关把它拒绝了。
header | /ˈhedər/ | n. 请求头；响应头 | Please pass the token in the authorization header. | /pliːz pæs ðə ˈtoʊkən ɪn ðə ˌɔːθərəˈzeɪʃən ˈhedər/ | 请把 token 放在 authorization 请求头里。
status code | /ˈstætəs koʊd/ | n. 状态码 | The API returns a five hundred status code when the database is down. | /ðə ˌeɪˌpiːˈaɪ rɪˈtɜːrnz ə faɪv ˈhʌndrəd ˈstætəs koʊd wen ðə ˈdeɪtəˌbeɪs ɪz daʊn/ | 数据库挂掉时，这个 API 会返回五百状态码。
authentication | /ɔːˌθentəˈkeɪʃən/ | n. 认证（你是谁）（区分：authentication 验证身份，authorization 验证权限） | Authentication failed because the password was wrong. | /ɔːˌθentəˈkeɪʃən feɪld bɪˈkɔːz ðə ˈpæˌswɜːrd wɑːz rɔːŋ/ | 认证失败了，因为密码错了。
authorization | /ˌɔːθərəˈzeɪʃən/ | n. 授权（你能做什么）（区分：先 authentication，再 authorization） | The user is logged in, but authorization fails for the admin page. | /ðə ˈjuːzər ɪz lɔːɡd ɪn bʌt ˌɔːθərəˈzeɪʃən feɪlz fɔːr ðə ˈædmɪn peɪdʒ/ | 用户已登录，但访问管理页面的授权失败了。
session | /ˈseʃən/ | n. 会话 | The session expires after thirty minutes of inactivity. | /ðə ˈseʃən ɪkˈspaɪərz ˈæftər ˈθɜːrˌdiː ˈmɪnəts ʌv ˌɪnækˈtɪvɪti/ | 会话在三十分钟没有操作后过期。
token | /ˈtoʊkən/ | n. 令牌 | The access token is valid for one hour. | /ðə ˈækˌses ˈtoʊkən ɪz ˈvælɪd fɔːr wʌn ˈaʊər/ | 访问令牌的有效期是一小时。
middleware | /ˈmɪdəlwer/ | n. 中间件 | We added a middleware that logs every incoming request. | /wiː ˈædəd ə ˈmɪdəlwer ðæt lɔːɡz ˈevəri ˈɪnˌkʌmɪŋ rɪˈkwest/ | 我们加了一个中间件，记录每个收到的请求。
rate limiting | /reɪt ˈlɪmətɪŋ/ | n. 限流 | We use rate limiting to stop clients from flooding the API. | /wiː juːs reɪt ˈlɪmətɪŋ tuː stɑːp ˈklaɪənts frʌm ˈflʌdɪŋ ðə ˌeɪˌpiːˈaɪ/ | 我们用限流来防止客户端把 API 刷爆。
pagination | /ˌpædʒəˈneɪʃən/ | n. 分页 | The list endpoint supports pagination with a page size parameter. | /ðə lɪst ˈendˌpɔɪnt səˈpɔːrts ˌpædʒəˈneɪʃən wɪð ə peɪdʒ saɪz pərˈæmətər/ | 这个列表接口支持用页大小参数做分页。
idempotent | /ˌaɪdemˈpoʊtənt/ | adj. 幂等的（重复调用结果相同） | The payment endpoint must be idempotent, so retries don't charge twice. | /ðə ˈpeɪmənt ˈendˌpɔɪnt mʌst biː ˌaɪdemˈpoʊtənt soʊ riːˈtraɪz doʊnt tʃɑːrdʒ twaɪs/ | 支付接口必须是幂等的，这样重试才不会重复扣款。
timeout | /ˈtaɪˌmaʊt/ | n. 超时 | The request hit a timeout after ten seconds. | /ðə rɪˈkwest hɪt ə ˈtaɪˌmaʊt ˈæftər ten ˈsekəndz/ | 这个请求十秒后超时了。
```

> [!TIP] 先读准这几个词
> - **authentication** 重音在 -CA-：aw-then-ti-KAY-shun；**authorization** 重音在 -ZA-：aw-thuh-ruh-ZAY-shun。口语里常缩写成 **authn** 和 **authz**，也可以说 **auth**。
> - **idempotent** 读 eye-dem-POH-tent，重音在第三个音节。
> - **payload** 是 PAY-load，重音在第一个音节。
> - **middleware** 是 MID-ul-wair。

> [!WARNING] 别把 authentication 和 authorization 说反
> 先 **authenticate**（确认你是谁，比如登录），再 **authorize**（确认你有没有权限，比如能不能删除）。日志里 `unauthenticated` 通常对应还没登录；`forbidden` 或 `unauthorized` 常常是登录了但没权限。

## 二、性能、并发与架构

聊系统为什么慢、怎么扩展、怎么拆服务，用的就是这一组。

```words
cache | /kæʃ/ | n./v. 缓存；缓存起来（读音和 cash 一样，不是 ca-che） | We cache the product list for five minutes. | /wiː kæʃ ðə ˈprɑːdəkt lɪst fɔːr faɪv ˈmɪnəts/ | 我们把商品列表缓存五分钟。
queue | /kjuː/ | n. 队列（读音和字母 Q 一样） | The email jobs are waiting in a queue. | /ðə iˈmeɪl dʒɑːbz ɑːr ˈweɪtɪŋ ɪn ə kjuː/ | 邮件任务正在队列里排队。
message broker | /ˈmesədʒ ˈbroʊkər/ | n. 消息中间件 | We use a message broker to pass events between services. | /wiː juːs ə ˈmesədʒ ˈbroʊkər tuː pæs ɪˈvents bɪˈtwiːn ˈsɜːrvəsəz/ | 我们用消息中间件在服务之间传递事件。
microservice | /ˈmaɪkroʊˌsɜːrvɪs/ | n. 微服务 | We split the monolith into about ten microservices. | /wiː splɪt ðə ˈmɑːnəˌlɪθ ˈɪntu əˈbaʊt ten ˈmaɪkroʊˌsɜːrvɪsɪz/ | 我们把单体应用拆成了大约十个微服务。
monolith | /ˈmɑːnəˌlɪθ/ | n. 单体应用 | The monolith is hard to deploy because everything is coupled. | /ðə ˈmɑːnəˌlɪθ ɪz hɑːrd tuː dɪˈplɔɪ bɪˈkɔːz ˈevriˌθɪŋ ɪz ˈkʌpəld/ | 单体应用很难部署，因为所有东西都耦合在一起。
concurrency | /kənˈkɜːrənsi/ | n. 并发（concurrency 是同时处理多个任务；parallelism 是真正同时执行） | The bug only appears under high concurrency. | /ðə bʌɡ ˈoʊnli əˈpɪrz ˈʌndər haɪ kənˈkɜːrənsi/ | 这个 bug 只在高并发下出现。
thread | /θred/ | n. 线程 | Each request is handled by a separate thread. | /iːtʃ rɪˈkwest ɪz ˈhændəld baɪ ə ˈsepərˌeɪt θred/ | 每个请求都由单独一个线程处理。
asynchronous | /ˈeɪˈsɪŋkrənəs/ | adj. 异步的 | The upload is asynchronous, so the user doesn't have to wait. | /ðə ˈʌˌploʊd ɪz ˈeɪˈsɪŋkrənəs soʊ ðə ˈjuːzər ˈdʌzənt hæv tuː weɪt/ | 上传是异步的，用户不用等。
synchronous | /ˈsɪŋkrənəs/ | adj. 同步的 | The call is synchronous, so it blocks until the result comes back. | /ðə kɔːl ɪz ˈsɪŋkrənəs soʊ ɪt blɑːks ənˈtɪl ðə rɪˈzʌlt kʌmz bæk/ | 这个调用是同步的，结果返回之前会一直阻塞。
scalability | /ˌskeɪləˈbɪləti/ | n. 可扩展性 | Scalability is our biggest concern for the launch. | /ˌskeɪləˈbɪləti ɪz ˈaʊər ˈbɪɡəst kənˈsɜːrn fɔːr ðə lɔːntʃ/ | 可扩展性是我们这次上线最担心的事。
throughput | /ˈθruːpʊt/ | n. 吞吐量（throughput 是单位时间处理多少；latency 是单个请求要多久） | The throughput dropped from five thousand to one thousand requests per second. | /ðə ˈθruːpʊt drɑːpt frʌm faɪv ˈθaʊzənd tuː wʌn ˈθaʊzənd rɪˈkwests pɜːr ˈsekənd/ | 吞吐量从每秒五千个请求掉到了每秒一千个。
latency | /ˈleɪtənsi/ | n. 延迟 | The average latency is under two hundred milliseconds. | /ðə ˈævərɪdʒ ˈleɪtənsi ɪz ˈʌndər tuː ˈhʌndrəd ˈmɪlɪˌsekəndz/ | 平均延迟低于两百毫秒。
bottleneck | /ˈbɑːtəlˌnek/ | n. 瓶颈 | The database is the bottleneck, not the application code. | /ðə ˈdeɪtəˌbeɪs ɪz ðə ˈbɑːtəlˌnek nɑːt ðə ˌæpləˈkeɪʃən koʊd/ | 瓶颈在数据库，不在应用代码。
retry | /riˈtraɪ/ | v./n. 重试 | The client will retry three times before giving up. | /ðə ˈklaɪənt wɪl riˈtraɪ θriː taɪmz bɪˈfɔːr ˈɡɪvɪŋ ʌp/ | 客户端在放弃之前会重试三次。
fallback | /ˈfɔːlˌbæk/ | n. 降级方案；兜底 | If the cache is down, we fall back to the database. | /ɪf ðə kæʃ ɪz daʊn wiː fɔːl bæk tuː ðə ˈdeɪtəˌbeɪs/ | 如果缓存挂了，我们就退回到查数据库。
```

> [!TIP] 读音和易混点
> - **cache** 读 cash，**queue** 读 kyoo，两个都是中国同事最容易读错的词。
> - **asynchronous** 重音在第二个音节：ay-SIN-kruh-nus；口语里常缩成 **async**。
> - **latency** 是 LAY-tun-see，**throughput** 是 THROO-put。
> - **thread** 里的 th 要把舌尖放在齿间，别读成 sread。

## 三、数据库

数据库词汇既要会说，也要会和 SQL 关键词对应起来。**SQL** 可以读 S-Q-L，也可以读 sequel，两种都常见。

```words
database | /ˈdeɪtəˌbeɪs/ | n. 数据库 | The database runs on a separate server. | /ðə ˈdeɪtəˌbeɪs rʌnz ɑːn ə ˈsepərˌeɪt ˈsɜːrvər/ | 数据库跑在一台单独的服务器上。
table | /ˈteɪbəl/ | n. 表 | The orders table has about fifty million rows. | /ðə ˈɔːrdərz ˈteɪbəl hæz əˈbaʊt ˈfɪfti ˈmɪljən roʊz/ | 订单表大约有五千万行。
row | /roʊ/ | n. 行（一条记录） | Each row represents one customer. | /iːtʃ roʊ ˌreprɪˈzents wʌn ˈkʌstəmər/ | 每一行代表一位客户。
column | /ˈkɑːləm/ | n. 列（字段）（末尾的 n 不发音：COL-um） | I added a new column for the phone number. | /aɪ ˈædəd ə nuː ˈkɑːləm fɔːr ðə foʊn ˈnʌmbər/ | 我加了一个新的列来存手机号。
index | /ˈɪndeks/ | n./v. 索引；建索引（数据库里复数常说 indexes，也可以说 indices） | Adding an index made the query ten times faster. | /ˈædɪŋ æn ˈɪndeks meɪd ðə ˈkwiːri ten taɪmz ˈfæstər/ | 加了索引之后，这个查询快了十倍。
query | /ˈkwiːri/ | n./v. 查询 | This query scans the whole table, which is slow. | /ðɪs ˈkwiːri skænz ðə hoʊl ˈteɪbəl wɪtʃ ɪz sloʊ/ | 这个查询会扫描整张表，所以很慢。
transaction | /trænˈzækʃən/ | n. 事务 | The two updates run in one transaction, so they succeed or fail together. | /ðə tuː əpˈdeɪts rʌn ɪn wʌn trænˈzækʃən soʊ ðeɪ səkˈsiːd ɔːr feɪl təˈɡeðər/ | 这两个更新在同一个事务里，要么都成功，要么都失败。
schema | /ˈskiːmə/ | n. 数据库结构；模式（读音 SKEE-muh） | The schema changed, so the old code stopped working. | /ðə ˈskiːmə tʃeɪndʒd soʊ ðə oʊld koʊd stɑːpt ˈwɜːrkɪŋ/ | 表结构变了，所以旧代码不能用了。
migration | /maɪˈɡreɪʃən/ | n. 迁移脚本；数据迁移 | I wrote a migration to add the new column. | /aɪ roʊt ə maɪˈɡreɪʃən tuː æd ðə nuː ˈkɑːləm/ | 我写了一个迁移脚本来加这个新列。
primary key | /ˈpraɪˌmeri kiː/ | n. 主键（区分：primary key 唯一标识本表的一行） | The primary key of the users table is the user ID. | /ðə ˈpraɪˌmeri kiː ʌv ðə ˈjuːzərz ˈteɪbəl ɪz ðə ˈjuːzər ɪd/ | 用户表的主键是用户 ID。
foreign key | /ˈfɔːrən kiː/ | n. 外键（区分：foreign key 指向另一张表的主键） | The foreign key links each order to a customer. | /ðə ˈfɔːrən kiː lɪŋks iːtʃ ˈɔːrdər tuː ə ˈkʌstəmər/ | 外键把每个订单关联到一个客户。
join | /dʒɔɪn/ | n./v. 连表查询 | The report joins the orders table with the customers table. | /ðə riˈpɔːrt dʒɔɪnz ðə ˈɔːrdərz ˈteɪbəl wɪð ðə ˈkʌstəmərz ˈteɪbəl/ | 这份报表把订单表和客户表连起来查询。
ORM | /oʊ ɑːr em/ | n. 对象关系映射（读 O-R-M，是 object-relational mapping 的缩写） | The ORM generates a lot of extra queries behind the scenes. | /ðə oʊ ɑːr em ˈdʒenərˌeɪts ə lɑːt ʌv ˈekstrə ˈkwɪriz bɪˈhaɪnd ðə siːnz/ | ORM 在背后生成了很多多余的查询。
replica | /ˈreplɪkə/ | n. 副本；从库（重音在第一个音节：REP-lih-kuh） | Read queries go to the replica to reduce load on the primary. | /red ˈkwɪriz ɡoʊ tuː ðə ˈreplɪkə tuː rəˈduːs loʊd ɑːn ðə ˈpraɪˌmeri/ | 读查询走从库，减轻主库的压力。
shard | /ʃɑːrd/ | n./v. 分片 | We shard the data by user ID across eight databases. | /wiː ʃɑːrd ðə ˈdeɪtə baɪ ˈjuːzər ɪd əˈkrɔːs eɪt ˈdeɪtəˌbeɪsɪz/ | 我们按用户 ID 把数据分到八个数据库里。
backup | /ˈbæˌkʌp/ | n. 备份 | We take a full backup of the database every night. | /wiː teɪk ə fʊl ˈbæˌkʌp ʌv ðə ˈdeɪtəˌbeɪs ˈevəri naɪt/ | 我们每晚对数据库做一次全量备份。
constraint | /kənˈstreɪnt/ | n. 约束 | A unique constraint prevents duplicate email addresses. | /ə juˈniːk kənˈstreɪnt prɪˈvents ˈduːpləkət iˈmeɪl ˈæˈdresɪz/ | 唯一约束可以防止重复的邮箱地址。
deadlock | /ˈdedˌlɑːk/ | n. 死锁 | Two transactions waited for each other and caused a deadlock. | /tuː trænˈzækʃənz ˈweɪtɪd fɔːr iːtʃ ˈʌðər ənd kɑːzd ə ˈdedˌlɑːk/ | 两个事务互相等待，造成了死锁。
```

> [!CAUTION] 千万别这样说
> - 别说 ~~The query is very quick, so no need index.~~ 自然说法是 **The query is fast enough, so we don't need an index.**
> - 别说 ~~Database has a delay.~~ 要说 **There's high latency on the database.** 或 **The database is slow to respond.**
> - 别把 **row** 和 **raw** 混成一个读音：row 读 roh，raw 读 raw。

## 四、用这些词说完整的话

```phrases
The endpoint is idempotent, so the client can safely retry. | /ðə ˈendˌpɔɪnt ɪz ˌaɪdemˈpoʊtənt soʊ ðə ˈklaɪənt kæn ˈseɪfli riˈtraɪ/ | 这个接口是幂等的，所以客户端可以放心重试。
We cache the response to reduce the load on the database. | /wiː kæʃ ðə rɪˈspɑːns tuː rəˈduːs ðə loʊd ɑːn ðə ˈdeɪtəˌbeɪs/ | 我们缓存响应，来减轻数据库的负载。
Authentication succeeds, but authorization fails for this token. | /ɔːˌθentəˈkeɪʃən səkˈsiːdz bʌt ˌɔːθərəˈzeɪʃən feɪlz fɔːr ðɪs ˈtoʊkən/ | 认证通过了，但这个 token 的授权失败了。
The slow query is the bottleneck, so let's add an index. | /ðə sloʊ ˈkwiːri ɪz ðə ˈbɑːtəlˌnek soʊ lets æd æn ˈɪndeks/ | 慢查询是瓶颈，我们加个索引吧。
We moved the long job to a queue to make it asynchronous. | /wiː muːvd ðə lɔːŋ dʒɑːb tuː ə kjuː tuː meɪk ɪt ˈeɪˈsɪŋkrənəs/ | 我们把耗时任务挪到了队列里，让它变成异步的。
Latency is fine, but throughput drops when concurrency goes up. | /ˈleɪtənsi ɪz faɪn bʌt ˈθruːpʊt drɑːps wen kənˈkɜːrənsi ɡoʊz ʌp/ | 延迟没问题，但并发一高吞吐量就下降。
Let's put both updates in one transaction. | /lets pʊt boʊθ əpˈdeɪts ɪn wʌn trænˈzækʃən/ | 我们把这两个更新放进同一个事务里。 | 保证要么都成功，要么都失败
Can you write a migration before we change the schema? | /kæn juː raɪt ə maɪˈɡreɪʃən bɪˈfɔːr wiː tʃeɪndʒ ðə ˈskiːmə/ | 在改表结构之前，你能先写一个迁移脚本吗？
```

```dialog
title: 讨论接口为什么变慢
Lead: The orders endpoint is slow again. What's the latency? | /ðə ˈɔːrdərz ˈendˌpɔɪnt ɪz sloʊ əˈɡen wʌts ðə ˈleɪtənsi/ | 订单接口又变慢了，延迟是多少？
Dev: About two seconds at peak. The query joins three tables. | /əˈbaʊt tuː ˈsekəndz æt piːk ðə ˈkwiːri dʒɔɪnz θriː ˈteɪbəlz/ | 高峰期大约两秒，这个查询连了三张表。
Lead: Do we have an index on the foreign key? | /duː wiː hæv æn ˈɪndeks ɑːn ðə ˈfɔːrən kiː/ | 外键上有索引吗？
Dev: No, we don't. I'll write a migration to add one. | /noʊ wiː doʊnt aɪl raɪt ə maɪˈɡreɪʃən tuː æd wʌn/ | 没有，我写一个迁移脚本加上。
Lead: Good. Should we also cache the response? | /ɡʊd ʃʊd wiː ˈɔːlsoʊ kæʃ ðə rɪˈspɑːns/ | 好。我们要不要也把响应缓存起来？
Dev: Yes, for five minutes. The data doesn't change often. | /jes fɔːr faɪv ˈmɪnəts ðə ˈdeɪtə ˈdʌzənt tʃeɪndʒ ˈɔːfən/ | 要，缓存五分钟，这个数据不常变。
Lead: What about the traffic spike? Is the API rate limited? | /wʌt əˈbaʊt ðə ˈtræfɪk spaɪk ɪz ðə ˌeɪˌpiːˈaɪ reɪt ˈlɪmətəd/ | 流量突增怎么办？API 做了限流吗？
Dev: Yes, each client gets a hundred requests per minute. | /jes iːtʃ ˈklaɪənt ɡets ə ˈhʌndrəd rɪˈkwests pɜːr ˈmɪnət/ | 做了，每个客户端每分钟一百个请求。
Lead: Nice. Let's ship it and watch the throughput. | /naɪs lets ʃɪp ɪt ənd wɑːtʃ ðə ˈθruːpʊt/ | 好，那就上线，然后盯着吞吐量。
```

> [!QUESTION] 想检验自己：怎么向同事解释 authentication 和 authorization 的区别？
> ```phrases
> Authentication checks who you are. Authorization checks what you're allowed to do. | /ɔːˌθentəˈkeɪʃən tʃeks huː juː ɑːr ˌɔːθərəˈzeɪʃən tʃeks wʌt jʊr əˈlaʊd tuː duː/ | 认证是确认你是谁，授权是确认你能做什么。
> ```

> [!QUESTION] 想检验自己：想建议把耗时任务挪到队列里，用英文怎么说？
> ```phrases
> Let's move this job to a queue and make it asynchronous. | /lets muːv ðɪs dʒɑːb tuː ə kjuː ənd meɪk ɪt ˈeɪˈsɪŋkrənəs/ | 我们把这个任务挪到队列里，改成异步的吧。
> ```
