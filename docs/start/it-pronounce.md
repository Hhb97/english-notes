---
level: 入门
summary: 缩写、符号、版本号、端口、IP、网址、邮箱、百分比和命令，用英语怎么念出来，附口头结对编程对话。
tags: [发音, 缩写, 符号, 数字, 命令行, 入门]
---

# IT 词汇怎么读：缩写、符号与数字

> [!ABSTRACT]
> - IT 里很多东西「写出来你认识，念出来不会」：API、nginx、`@`、`/`、`192.168.1.1`、`ls -la`。
> - 缩写有两种读法：**逐个字母读**（API、URL、AWS），或**当作一个单词读**（JSON、SaaS、nginx）。拿不准就逐个字母读，一般不会错。
> - 本页的口语卡片里，**英文栏就是你要说出口的话**（全部拼成单词），中文栏说明它写出来是什么样子。

## 一、缩写：逐个字母读，还是当单词读

大致规律：**能拼成好读的音节，就当单词读**（JSON、YAML、SaaS、GUI）；**否则逐个字母读**（API、CPU、URL）。字母要读重、读清楚，最后一个字母的重音最强。

| 读法 | 例子 |
| --- | --- |
| 逐个字母 | API, URL, CLI, IDE, SDK, HTTP, HTTPS, SSH, AWS, GCP, JWT |
| 当单词读 | JSON（杰森）, YAML（亚末）, SaaS（萨斯）, GUI（谷伊）, CRUD（克拉德）, nginx（engine-x）, regex（瑞该克斯） |
| 两种都有 | SQL：S-Q-L 或 sequel；GIF 也有两种读法 |

### 1. 最常用的缩写

```words
API | /ˌeɪˌpiːˈaɪ/ | n. 应用程序接口 | The API returns JSON. | /ðə ˌeɪˌpiːˈaɪ rɪˈtɜːrnz ˈdʒeɪsɑːn/ | 这个接口返回 JSON。
SQL | /ˌeˌskjuːˈel/ | n. 结构化查询语言 | Our team uses SQL every day. | /ˈaʊər tiːm ˈjuːsəz ˌeˌskjuːˈel ˈevəri deɪ/ | 我们团队每天都用 SQL。
URL | /ˌjuːˌɑːˈrel/ | n. 网址 | Please paste the URL into the chat. | /pliːz peɪst ðə ˌjuːˌɑːˈrel ˈɪntu ðə tʃæt/ | 请把网址贴到聊天里。
CLI | /siː el aɪ/ | n. 命令行工具 | The CLI is faster than the web console. | /ðə siː el aɪ ɪz ˈfæstər ðæn ðə web ˈkɑːnsoʊl/ | 命令行工具比网页控制台快。
GUI | /ˈɡuːi/ | n. 图形界面 | We built a simple GUI for the tool. | /wiː bɪlt ə ˈsɪmpəl ˈɡuːi fɔːr ðə tuːl/ | 我们给这个工具做了个简单的图形界面。
IDE | /aɪd/ | n. 集成开发环境 | Which IDE do you use? | /wɪtʃ aɪd duː juː juːs/ | 你用哪个开发工具？
SDK | /es diː keɪ/ | n. 软件开发工具包 | Download the SDK from our website. | /ˈdaʊnˌloʊd ðə es diː keɪ frʌm ˈaʊər ˈwebˌsaɪt/ | 从我们的网站下载 SDK。
SaaS | /sæs/ | n. 软件即服务 | We sell a SaaS product. | /wiː sel ə sæs ˈprɑːdəkt/ | 我们卖的是一款软件即服务产品。
CI/CD | /siː aɪ ˌsiːˈdiː/ | n. 持续集成与持续交付 | Our CI/CD pipeline runs on every push. | /ˈaʊər siː aɪ ˌsiːˈdiː ˈpaɪˌplaɪn rʌnz ɑːn ˈevəri pʊʃ/ | 每次推送都会触发我们的持续集成与交付流水线。
```

```phrases
You can say S Q L or sequel. Both are fine. | /juː kæn seɪ es kjuː el ɔːr ˈsiːkwəl boʊθ ɑːr faɪn/ | S-Q-L 和 sequel 两种读法都可以。 | 读 sequel 常见于 MySQL 之外的场合；MySQL 通常读 my S Q L
```

### 2. 数据格式与协议

```words
JSON | /ˈdʒeɪsɑːn/ | n. 一种数据格式 | The server sends the response as JSON. | /ðə ˈsɜːrvər sendz ðə rɪˈspɑːns æz ˈdʒeɪsɑːn/ | 服务器以 JSON 格式返回响应。
YAML | /ˈjæməl/ | n. 一种配置格式 | The settings are stored in a YAML file. | /ðə ˈsetɪŋz ɑːr stɔːrd ɪn ə ˈjæməl faɪl/ | 配置存放在一个 YAML 文件里。
OAuth | /ˈoʊɔːθ/ | n. 授权协议 | We use OAuth for third-party login. | /wiː juːs ˈoʊɔːθ fɔːr θɜːrd ˈpɑːrti ˈlɔːˌɡɪn/ | 我们用 OAuth 做第三方登录。
JWT | /dʒeɪ ˈdʌbəl juː tiː/ | n. 令牌格式 | The API checks the JWT on every request. | /ðə ˌeɪˌpiːˈaɪ tʃeks ðə dʒeɪ ˈdʌbəl juː tiː ɑːn ˈevəri rɪˈkwest/ | 接口会在每次请求时校验 JWT。
HTTP | /ˌeɪtʃˌtiːˌtiːˈpiː/ | n. 超文本传输协议 | The server only accepts HTTP requests. | /ðə ˈsɜːrvər ˈoʊnli ækˈsepts ˌeɪtʃˌtiːˌtiːˈpiː rɪˈkwests/ | 服务器只接受 HTTP 请求。
HTTPS | /ˌeɪtʃˌtiːˌtiːˈpiːz/ | n. 安全超文本传输协议 | Please always use HTTPS. | /pliːz ˈɔːlˌweɪz juːs ˌeɪtʃˌtiːˌtiːˈpiːz/ | 请始终使用 HTTPS。
SSH | /ˌes es ˈeɪtʃ/ | n. 远程登录协议 | I connect to the server over SSH. | /aɪ kəˈnekt tuː ðə ˈsɜːrvər ˈoʊvər ˌes es ˈeɪtʃ/ | 我通过 SSH 连接服务器。
```

### 3. 工具、平台与操作系统

专有名字常有固定读法，记住一次就行。

```words
nginx | /ˈendʒɪn eks/ | n. 一种 Web 服务器 | We put nginx in front of the app. | /wiː pʊt ˈendʒɪn eks ɪn frʌnt ʌv ðə æp/ | 我们在应用前面放了 nginx。
Kubernetes | /ˌkuːbərˈnetiːz/ | n. 容器编排平台 | We run our services on Kubernetes. | /wiː rʌn ˈaʊər ˈsɜːrvəsəz ɑːn ˌkuːbərˈnetiːz/ | 我们的服务运行在 Kubernetes 上。
Docker | /ˈdɑːkər/ | n. 容器工具 | Run the app in a Docker container. | /rʌn ðə æp ɪn ə ˈdɑːkər kənˈteɪnər/ | 在 Docker 容器里运行这个应用。
GitHub | /ˈɡɪthʌb/ | n. 代码托管平台 | The code is on GitHub. | /ðə koʊd ɪz ɑːn ˈɡɪthʌb/ | 代码在 GitHub 上。
Linux | /ˈlɪnəks/ | n. 操作系统 | Our servers all run Linux. | /ˈaʊər ˈsɜːrvərz ɔːl rʌn ˈlɪnəks/ | 我们的服务器都跑 Linux。
Ubuntu | /ʊˈbʊntuː/ | n. 一个 Linux 发行版 | We use Ubuntu on the build machines. | /wiː juːs ʊˈbʊntuː ɑːn ðə bɪld məˈʃiːnz/ | 构建机器上我们用 Ubuntu。
iOS | /ˌaɪ oʊ ˈes/ | n. 苹果手机系统 | The iOS app needs a new release. | /ðə ˌaɪ oʊ ˈes æp niːdz ə nuː riˈliːs/ | iOS 应用需要发一个新版本。
macOS | /ˈmæk oʊ ˈes/ | n. 苹果电脑系统 | The script only works on macOS. | /ðə skrɪpt ˈoʊnli wɜːrks ɑːn ˈmæk oʊ ˈes/ | 这个脚本只能在 macOS 上用。
AWS | /ɔːz/ | n. 亚马逊云服务 | We host everything on AWS. | /wiː hoʊst ˈevriˌθɪŋ ɑːn ɔːz/ | 我们所有东西都托管在 AWS 上。
GCP | /dʒiː siː piː/ | n. 谷歌云平台 | The data team uses GCP. | /ðə ˈdeɪtə tiːm ˈjuːsəz dʒiː siː piː/ | 数据团队用 GCP。
MySQL | /maɪ ˌes kjuː ˈel/ | n. 一种数据库 | The orders are stored in MySQL. | /ðə ˈɔːrdərz ɑːr stɔːrd ɪn maɪ ˌes kjuː ˈel/ | 订单存在 MySQL 里。
PostgreSQL | /ˈpoʊstɡres ˌkjuː ˈel/ | n. 一种数据库 | We moved from MySQL to PostgreSQL. | /wiː muːvd frʌm maɪ ˌes kjuː ˈel tuː ˈpoʊstɡres ˌkjuː ˈel/ | 我们从 MySQL 迁到了 PostgreSQL。
Redis | /ˈredɪs/ | n. 一种内存数据库 | We keep the sessions in Redis. | /wiː kiːp ðə ˈseʃənz ɪn ˈredɪs/ | 我们把会话放在 Redis 里。
npm | /en piː em/ | n. Node 包管理器 | Run npm install first. | /rʌn en piː em ˌɪnˈstɔːl fɜːrst/ | 先运行 npm install。
regex | /ˈredʒeks/ | n. 正则表达式 | I wrote a regex to match the email. | /aɪ roʊt ə ˈredʒeks tuː mætʃ ðə iˈmeɪl/ | 我写了个正则来匹配邮箱。
```

```phrases
Kates is short for Kubernetes. | /keɪts ɪz ʃɔːrt fɔːr ˌkuːbərˈnetiːz/ | k8s 是 Kubernetes 的缩写，读作 kates。 | 8 代表中间省略的 8 个字母（k-ubernete-s），口语里多读 kates，也有人读 K eight S
```

> [!TIP] 怎么确认一个专有名词的读法
> 1. 看官方的发布会视频或会议演讲，创始人自己怎么读；
> 2. 听同事怎么读，跟着读就不会错；
> 3. 实在不确定，大方问：**How do you pronounce this?** 这是非常正常的问题。

> [!WARNING] 常见读错
> - **nginx** 读 engine-x，不是「恩金克斯」；
> - **Linux** 重音在第一个音节：LIN-ux；
> - **Kubernetes** 重音在第三个音节：koo-ber-NET-eez；
> - **SQL**、**GIF** 没有绝对唯一的读法，对方读哪种，你就跟哪种。

## 二、符号怎么读

写代码和报路径时，符号是最容易卡住的地方。**符号单独读，每个都要读出来，中间没有「空格」这个词，除非特别强调。**

```words
slash | /slæʃ/ | n. 正斜杠 / | Go to slash var slash log. | /ɡoʊ tuː slæʃ vɑːr slæʃ lɔːɡ/ | 进入 /var/log。
backslash | /ˈbækˌslæʃ/ | n. 反斜杠 \ | Windows paths use a backslash. | /ˈwɪndoʊz pæðz juːs ə ˈbækˌslæʃ/ | Windows 路径使用反斜杠。
at | /æt/ | n. 艾特符号 @ | Send it to ming at example dot com. | /send ɪt tuː mɪŋ æt ɪɡˈzæmpəl dɑːt kɑːm/ | 发到 ming@example.com。
dot | /dɑːt/ | n. 点 . | The file is called config dot yaml. | /ðə faɪl ɪz kɔːld ˈkɑːnfɪɡ dɑːt ˈjæməl/ | 这个文件叫 config.yaml。
dash | /dæʃ/ | n. 短横线 - | Use dash dash help for more options. | /juːs dæʃ dæʃ help fɔːr mɔːr ˈɑːpʃənz/ | 用 --help 查看更多选项。
hyphen | /ˈhaɪfən/ | n. 连字符 - | The name has a hyphen in the middle. | /ðə neɪm hæz ə ˈhaɪfən ɪn ðə ˈmɪdəl/ | 这个名字中间有一个连字符。
underscore | /ˌʌndərˈskɔːr/ | n. 下划线 _ | The variable is user underscore name. | /ðə ˈveriəbəl ɪz ˈjuːzər ˌʌndərˈskɔːr neɪm/ | 变量是 user_name。
hash | /hæʃ/ | n. 井号 # | Add a hash at the start of the line to comment it out. | /æd ə hæʃ æt ðə stɑːrt ʌv ðə laɪn tuː ˈkɑːment ɪt aʊt/ | 在行首加一个井号，把它注释掉。
asterisk | /ˈæstərɪsk/ | n. 星号 * | Type asterisk dot log to match every log file. | /taɪp ˈæstərɪsk dɑːt lɔːɡ tuː mætʃ ˈevəri lɔːɡ faɪl/ | 输入 *.log 匹配所有日志文件。
tilde | /ˈtɪldə/ | n. 波浪号 ~ | Copy it to tilde slash projects. | /ˈkɑːpi ɪt tuː ˈtɪldə slæʃ ˈprɑːdʒekts/ | 复制到 ~/projects。
```

```words
pipe | /paɪp/ | n./v. 管道符；管道传递 | Pipe the output to grep. | /paɪp ðə ˈaʊtˌpʊt tuː ɡrep/ | 把输出用管道传给 grep。
colon | /ˈkoʊlən/ | n. 冒号 : | Put a colon after the key. | /pʊt ə ˈkoʊlən ˈæftər ðə kiː/ | 在键后面加一个冒号。
semicolon | /ˈsemiˌkoʊlən/ | n. 分号 ; | Every line ends with a semicolon. | /ˈevəri laɪn endz wɪð ə ˈsemiˌkoʊlən/ | 每一行都以分号结束。
ampersand | /ˈæmpərˌsænd/ | n. 和号 & | Use double ampersand to chain two commands. | /juːs ˈdʌbəl ˈæmpərˌsænd tuː tʃeɪn tuː kəˈmændz/ | 用 && 把两条命令连起来。
curly braces | /ˈkɜːrli ˈbreɪsəz/ | n. 花括号 { } | Put the function body in curly braces. | /pʊt ðə ˈfʌŋkʃən ˈbɑːdi ɪn ˈkɜːrli ˈbreɪsəz/ | 把函数体放在花括号里。
square brackets | /skwer ˈbrækəts/ | n. 方括号 [ ] | A list goes inside square brackets. | /ə lɪst ɡoʊz ˌɪnˈsaɪd skwer ˈbrækəts/ | 列表要放在方括号里。
parentheses | /pərˈenθəˌsiːz/ | n. 圆括号 ( ) | Wrap the condition in parentheses. | /ræp ðə kənˈdɪʃən ɪn pərˈenθəˌsiːz/ | 把条件包在圆括号里。
angle brackets | /ˈæŋɡəl ˈbrækəts/ | n. 尖括号 < > | HTML tags use angle brackets. | /ˌeɪtʃˌtiːˌeˈmel tæɡz juːs ˈæŋɡəl ˈbrækəts/ | HTML 标签使用尖括号。
quotes | /kwoʊts/ | n. 引号 | Put the string in double quotes. | /pʊt ðə strɪŋ ɪn ˈdʌbəl kwoʊts/ | 把字符串放在双引号里。
backtick | /ˈbæktɪk/ | n. 反引号 ` | Use backticks for inline code. | /juːs ˈbæktɪks fɔːr ˌɪnˈlaɪn koʊd/ | 行内代码用反引号。
dollar sign | /ˈdɑːlər saɪn/ | n. 美元符号 $ | Variables start with a dollar sign. | /ˈveriəbəlz stɑːrt wɪð ə ˈdɑːlər saɪn/ | 变量以美元符号开头。
```

```phrases
Press the pound key. | /pres ðə paʊnd kiː/ | 按井号键。 | 美式口语里，电话键盘的 # 叫 pound key；在代码里更常说 hash
Double equals compares two values. | /ˈdʌbəl ˈiːkwəlz kəmˈperz tuː ˈvæljuz/ | 双等号用来比较两个值。 | == 读 double equals，= 读 equals，!= 读 bang equals 或 not equals
Is that a capital I or a lowercase L? | /ɪz ðæt ə ˈkæpətəl aɪ ɔːr ə ˈloʊərˌkeɪs el/ | 那是大写 I 还是小写 l？ | 报密码、编号时这类混淆很常见，主动确认很专业
```

> [!TIP] 「dash」「hyphen」「minus」怎么分
> 同一个符号 `-`：命令行参数读 **dash**（dash dash help）；单词中间读 **hyphen**；做减法读 **minus**。「dot」是 `.`，句号也是 `.`，但句子里的句号读 period，网址和文件名里读 dot。

> [!CAUTION] 千万别这样说
> - 把 `@` 读成「圈 a」，应该说 **at**；
> - 把 `/` 说成「斜线」的直译 slant line，应该说 **slash**；
> - 把 `_` 说成 under line，应该说 **underscore**。

## 三、数字、版本号、端口与 IP

读数字时英语有几个固定习惯：小数点读 **point**，**0 读 zero 或 oh**（版本号、端口里常读 oh），IP 地址每段按整数读，段与段之间读 **dot**。

```phrases
version three point two | /ˈvɜːrʒən θriː pɔɪnt tuː/ | 版本 3.2 | 版本号逐个数字读，点读 point 或 dot
version three point two point one | /ˈvɜːrʒən θriː pɔɪnt tuː pɔɪnt wʌn/ | 版本 3.2.1 | 三段版本号：major、minor、patch
version two dot oh | /ˈvɜːrʒən tuː dɑːt oʊ/ | 版本 2.0 | 零在版本号里常读 oh
We are still on Python three point nine. | /wiː ɑːr stɪl ɑːn ˈpaɪθɑːn θriː pɔɪnt naɪn/ | 我们还在用 Python 3.9。
It requires Node eighteen or later. | /ɪt riˈkwaɪərz noʊd eɪˈtiːn ɔːr ˈleɪtər/ | 它需要 Node 18 或更新的版本。
This feature came out in release two point four. | /ðɪs ˈfiːtʃər keɪm aʊt ɪn riˈliːs tuː pɔɪnt fɔːr/ | 这个功能是在 2.4 版本里发布的。
```

```phrases
The server listens on port eighty eighty. | /ðə ˈsɜːrvər ˈlɪsənz ɑːn pɔːrt ˈeɪti ˈeɪti/ | 服务器监听 8080 端口。 | 四位端口号常两两分开读
Connect to port four four three. | /kəˈnekt tuː pɔːrt fɔːr fɔːr θriː/ | 连接 443 端口。 | 三位端口号逐个读或按整数读都行，443 常读 four four three
SSH uses port twenty-two. | /ˌes es ˈeɪtʃ ˈjuːsəz pɔːrt ˈtwenti tuː/ | SSH 用 22 端口。
The dev server runs on port three thousand. | /ðə dev ˈsɜːrvər rʌnz ɑːn pɔːrt θriː ˈθaʊzənd/ | 开发服务器跑在 3000 端口。 | 整千可以直接读 thousand
The database is on port five four three two. | /ðə ˈdeɪtəˌbeɪs ɪz ɑːn pɔːrt faɪv fɔːr θriː tuː/ | 数据库在 5432 端口。
```

```phrases
one ninety-two dot one sixty-eight dot one dot one | /wʌn ˈnaɪnti tuː dɑːt wʌn ˈsɪksti eɪt dɑːt wʌn dɑːt wʌn/ | IP 地址 192.168.1.1 的读法 | 每一段按整数读，段与段之间读 dot
ten dot zero dot zero dot one | /ten dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt wʌn/ | IP 地址 10.0.0.1 的读法 | 0 读 zero
one twenty-seven dot zero dot zero dot one | /wʌn ˈtwenti ˈsevən dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt wʌn/ | 本机地址 127.0.0.1 的读法 | 也可以直接说 localhost
ten dot zero dot zero dot zero slash twenty-four | /ten dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ slæʃ ˈtwenti fɔːr/ | 网段 10.0.0.0/24 的读法 | 斜杠后面的数字读成整数，也可以说 a slash twenty-four network
```

## 四、网址、邮箱与路径

报网址时，**协议逐个字母读，冒号和斜杠分开读，域名里的点读 dot**。听的人通常会边听边敲，所以语速要放慢，在关键位置停顿。

```phrases
H T T P S colon slash slash W W W dot example dot com | /eɪtʃ tiː tiː piː es ˈkoʊlən slæʃ slæʃ ˈdʌbəlju ˈdʌbəlju ˈdʌbəlju dɑːt ɪɡˈzæmpəl dɑːt kɑːm/ | 网址 https://www.example.com 的读法 | https 逐个字母读，冒号读 colon，两个斜杠读 slash slash
H T T P S colon slash slash api dot example dot com slash v one slash users | /eɪtʃ tiː tiː piː es ˈkoʊlən slæʃ slæʃ ˌeɪˌpiːˈaɪ dɑːt ɪɡˈzæmpəl dɑːt kɑːm slæʃ viː wʌn slæʃ ˈjuːzərz/ | 网址 https://api.example.com/v1/users 的读法 | 路径里的 v1 读 v one
H T T P colon slash slash localhost colon three thousand | /eɪtʃ tiː tiː piː ˈkoʊlən slæʃ slæʃ ˈloʊkəlhoʊst ˈkoʊlən θriː ˈθaʊzənd/ | 网址 http://localhost:3000 的读法 | localhost 当单词读，3000 读 three thousand
github dot com slash acme slash demo dash app | /ˈɡɪthʌb dɑːt kɑːm slæʃ ˈækmi slæʃ ˈdemoʊ dæʃ æp/ | github.com/acme/demo-app 的读法 | 仓库地址：组织名 slash 项目名
```

```phrases
ming dot li at example dot com | /mɪŋ dɑːt liː æt ɪɡˈzæmpəl dɑːt kɑːm/ | 邮箱 ming.li@example.com 的读法 | at 读得很轻，dot 要读清楚
sales hyphen team at example dot com | /seɪlz ˈhaɪfən tiːm æt ɪɡˈzæmpəl dɑːt kɑːm/ | 邮箱 sales-team@example.com 的读法
support underscore dev at example dot com | /səˈpɔːrt ˌʌndərˈskɔːr dev æt ɪɡˈzæmpəl dɑːt kɑːm/ | 邮箱 support_dev@example.com 的读法
slash var slash log slash nginx | /slæʃ vɑːr slæʃ lɔːɡ slæʃ ˈendʒɪn eks/ | 路径 /var/log/nginx 的读法 | 每个斜杠都要读出来
tilde slash projects slash demo dash app | /ˈtɪldə slæʃ ˈprɑːdʒekts slæʃ ˈdemoʊ dæʃ æp/ | 路径 ~/projects/demo-app 的读法
```

## 五、百分比、单位、时间与复杂度

```phrases
ninety-nine point nine percent | /ˈnaɪnti naɪn pɔɪnt naɪn pərˈsent/ | 百分比 99.9% | 小数点读 point，百分号读 percent
We promise five nines of availability. | /wiː ˈprɑːməs faɪv naɪnz ʌv əˌveɪləˈbɪləti/ | 我们承诺五个九的可用性。 | five nines 指 99.999%；three nines 指 99.9%
Our uptime last month was ninety-nine point nine five percent. | /ˈaʊər ˈʌptaɪm læst mʌnθ wɑːz ˈnaɪnti naɪn pɔɪnt naɪn faɪv pərˈsent/ | 我们上个月的正常运行时间是 99.95%。
CPU usage hit eighty percent. | /ˌsiːˌpiːˈjuː ˈjuːsədʒ hɪt ˈeɪti pərˈsent/ | CPU 使用率达到了 80%。
```

```phrases
The log file is two point five gigabytes. | /ðə lɔːɡ faɪl ɪz tuː pɔɪnt faɪv ˈɡɪɡəˌbaɪts/ | 这个日志文件有 2.5 GB。 | GB 读 gigabytes，也可以读 gigs
The container needs five hundred twelve megabytes of memory. | /ðə kənˈteɪnər niːdz faɪv ˈhʌndrəd twelv ˈmeɡəˌbaɪts ʌv ˈmeməri/ | 这个容器需要 512 MB 内存。
We have two terabytes of storage left. | /wiː hæv tuː ˌterəˈbaɪts ʌv ˈstɔːrədʒ left/ | 我们还剩 2 TB 存储。
The response time is two hundred milliseconds. | /ðə rɪˈspɑːns taɪm ɪz tuː ˈhʌndrəd ˈmɪlɪˌsekəndz/ | 响应时间是 200 毫秒。 | ms 读 milliseconds，不要读 M S
P ninety-five latency is three hundred milliseconds. | /piː ˈnaɪnti faɪv ˈleɪtənsi ɪz θriː ˈhʌndrəd ˈmɪlɪˌsekəndz/ | 第 95 百分位的延迟是 300 毫秒。 | p95 读 P ninety-five
We handle ten thousand requests per second. | /wiː ˈhændəl ten ˈθaʊzənd rɪˈkwests pɜːr ˈsekənd/ | 我们每秒处理 10000 个请求。
```

```phrases
The meeting starts at ten thirty A M. | /ðə ˈmiːtɪŋ stɑːrts æt ten ˈθɜːrˌdiː ə em/ | 会议上午 10:30 开始。 | A M 逐个字母读，美式口语常用十二小时制
Let's meet at quarter past three. | /lets miːt æt ˈkwɔːrtər pæst θriː/ | 我们三点一刻见。 | 三点半读 half past three，三点四十五读 quarter to four
The release is at midnight Pacific time. | /ðə riˈliːs ɪz æt ˈmɪdˌnaɪt pəˈsɪfɪk taɪm/ | 发布定在太平洋时间午夜。
Our servers use U T C. | /ˈaʊər ˈsɜːrvərz juːs juː tiː siː/ | 我们的服务器用 UTC 时间。 | UTC 逐个字母读
The deadline is March third. | /ðə ˈdedˌlaɪn ɪz mɑːrtʃ θɜːrd/ | 截止日期是三月三日。 | 日期用序数词：third、twenty-first；也可以说 the third of March
The launch is in twenty twenty-six. | /ðə lɔːntʃ ɪz ɪn ˈtwenti ˈtwenti sɪks/ | 发布在 2026 年。 | 年份常读成两组：twenty twenty-six
```

读算法复杂度时，**O 读 big O 或 O of**，括号读 of。

```phrases
O of one | /oʊ ʌv wʌn/ | 时间复杂度 O(1)，常数时间
O of n | /oʊ ʌv en/ | 时间复杂度 O(n)，线性时间
O of log n | /oʊ ʌv lɔːɡ en/ | 时间复杂度 O(log n)
O of n squared | /oʊ ʌv en skwerd/ | 时间复杂度 O(n²)
O of n log n | /oʊ ʌv en lɔːɡ en/ | 时间复杂度 O(n log n)
```

## 六、把一行命令或代码念出来

读命令时，**每个符号按它的名字读，命令名按单词或字母读，参数照原样**。对方通常在边听边敲，读完一行可以问一句：**Did you get that?**

```phrases
git commit dash m, quote fix login bug, close quote | /ɡɪt kəˈmɪt dæʃ em kwoʊt fɪks ˈlɔːˌɡɪn bʌɡ kloʊs kwoʊt/ | 命令 git commit -m "fix login bug" 的读法 | quote 开始，close quote 结束；对方明白时可省略 close quote
git push origin main | /ɡɪt pʊʃ ˈɔːrədʒən meɪn/ | 命令 git push origin main 的读法
npm install dash dash save dash dev jest | /en piː em ˌɪnˈstɔːl dæʃ dæʃ seɪv dæʃ dev dʒest/ | 命令 npm install --save-dev jest 的读法 | 两个减号读成 dash dash
C D dot dot slash source | /siː diː dɑːt dɑːt slæʃ sɔːrs/ | 命令 cd ../src 的读法 | cd 也可以读 change directory
L S dash L A | /el es dæʃ el ə/ | 命令 ls -la 的读法 | ls 逐个字母读
cat error dot log pipe grep timeout | /kæt ˈerər dɑːt lɔːɡ paɪp ɡrep ˈtaɪˌmaʊt/ | 管道命令 cat error.log 加竖线再接 grep timeout 的读法 | pipe 就是竖线
sudo system C T L restart nginx | /ˈsuːduː ˈsɪstəm siː tiː el riˈstɑːrt ˈendʒɪn eks/ | 命令 sudo systemctl restart nginx 的读法 | sudo 读 sue-doo，不是 S U D O
chmod plus X deploy dot S H | /tʃɪˈmɑːd plʌs eks dɪˈplɔɪ dɑːt es eɪtʃ/ | 命令 chmod +x deploy.sh 的读法 | chmod 读 ch-mod 或 change mod，sh 读 S H
docker run dash P eighty eighty colon eighty app | /ˈdɑːkər rʌn dæʃ piː ˈeɪti ˈeɪti ˈkoʊlən ˈeɪti æp/ | 命令 docker run -p 8080:80 app 的读法 | 端口映射：主机端口 colon 容器端口
S S H deploy at ten dot zero dot zero dot five | /es es eɪtʃ dɪˈplɔɪ æt ten dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt faɪv/ | 命令 ssh deploy@10.0.0.5 的读法
```

```phrases
select star from users where I D equals one | /səˈlekt stɑːr frʌm ˈjuːzərz wer aɪ diː ˈiːkwəlz wʌn/ | SQL 语句 SELECT * FROM users WHERE id = 1 的读法 | star 就是星号
if open paren x double equals ten close paren open curly brace | /ɪf ˈoʊpən pəˈren eks ˈdʌbəl ˈiːkwəlz ten kloʊs pəˈren ˈoʊpən ˈkɜːrli breɪs/ | 代码 if (x == 10) { 的读法 | 括号读 open paren / close paren
print open paren quote hello world close quote close paren | /prɪnt ˈoʊpən pəˈren kwoʊt həˈloʊ wɜːrld kloʊs kwoʊt kloʊs pəˈren/ | 代码 print("hello world") 的读法
const items equals open bracket one comma two comma three close bracket | /kɑːnst ˈaɪtəmz ˈiːkwəlz ˈoʊpən ˈbrækɪt wʌn ˈkɑːmə tuː ˈkɑːmə θriː kloʊs ˈbrækɪt/ | 代码 const items = [1, 2, 3] 的读法
```

### 报字母和数字时的确认

```phrases
Can you spell that out? | /kæn juː spel ðæt aʊt/ | 你能一个字母一个字母拼出来吗？
M as in Mike, L as in Lima | /em æz ɪn maɪk el æz ɪn ˈlaɪmə/ | M 像 Mike，L 像 Lima | 用单词代表字母，北约字母表：A 是 Alpha，B 是 Bravo 等
Is that a zero or the letter O? | /ɪz ðæt ə ˈzɪroʊ ɔːr ðə ˈletər oʊ/ | 那是数字零还是字母 O？
Capital B, lowercase a, lowercase d. | /ˈkæpətəl biː ˈloʊərˌkeɪs ə ˈloʊərˌkeɪs diː/ | 大写 B，小写 a，小写 d。
Is that one word or two? | /ɪz ðæt wʌn wɜːrd ɔːr tuː/ | 是一个词还是两个词？
Sorry, how do you read this one? | /ˈsɑːri haʊ duː juː red ðɪs wʌn/ | 不好意思，这个怎么读？ | 看到不会读的符号，直接问
```

## 七、对话：结对编程时口头报网址和命令

```dialog
title: 结对编程，Anna 让 Ming 打开本地接口
Anna: Open your browser and type H T T P colon slash slash localhost colon three thousand. | /ˈoʊpən jɔːr ˈbraʊzər ənd taɪp eɪtʃ tiː tiː piː ˈkoʊlən slæʃ slæʃ ˈloʊkəlhoʊst ˈkoʊlən θriː ˈθaʊzənd/ | 打开浏览器，输入 http://localhost:3000。
Ming: Got it. Port three thousand, right? | /ɡɑːt ɪt pɔːrt θriː ˈθaʊzənd raɪt/ | 好了。是 3000 端口，对吧？
Anna: Right. Now add slash api slash users at the end. | /raɪt naʊ æd slæʃ ˌeɪˌpiːˈaɪ slæʃ ˈjuːzərz æt ðə end/ | 对。现在在末尾加上 /api/users。
Ming: Slash api slash users. Is that all lowercase? | /slæʃ ˌeɪˌpiːˈaɪ slæʃ ˈjuːzərz ɪz ðæt ɔːl ˈloʊərˌkeɪs/ | /api/users。全是小写吗？
Anna: Yes, all lowercase. No spaces. | /jes ɔːl ˈloʊərˌkeɪs noʊ ˈspeɪsəz/ | 对，全小写，没有空格。
Ming: I'm getting a four oh four. | /aɪm ˈɡetɪŋ ə fɔːr oʊ fɔːr/ | 我这边显示 404。
Anna: Did you start the server? Run npm start in the terminal. | /dɪd juː stɑːrt ðə ˈsɜːrvər rʌn en piː em stɑːrt ɪn ðə ˈtɜːrmənəl/ | 你启动服务器了吗？在终端里运行 npm start。
Ming: Oh, I forgot. Okay, it's running on port three thousand now. | /oʊ aɪ fərˈɡɑːt ˌoʊˈkeɪ ɪts ˈrʌnɪŋ ɑːn pɔːrt θriː ˈθaʊzənd naʊ/ | 哦，我忘了。好了，现在它在 3000 端口运行了。
Anna: Great. Reload the page. | /ɡreɪt riˈloʊd ðə peɪdʒ/ | 好，刷新页面。
Ming: Now I see the JSON. Thanks! | /naʊ aɪ siː ðə ˈdʒeɪsɑːn θæŋks/ | 现在能看到 JSON 了，谢谢！
```

```dialog
title: 电话里让同事检查服务器
Ops: Can you S S H into the staging server? | /kæn juː es es eɪtʃ ˈɪntu ðə ˈsteɪdʒɪŋ ˈsɜːrvər/ | 你能 SSH 登录预发服务器吗？
Dev: Sure. What's the address? | /ʃʊr wʌts ðə ˈæˌdres/ | 可以。地址是什么？
Ops: ten dot zero dot zero dot five. The user is deploy. | /ten dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt faɪv ðə ˈjuːzər ɪz dɪˈplɔɪ/ | 10.0.0.5，用户名是 deploy。
Dev: ten dot zero dot zero dot five, user deploy. Okay, I'm in. | /ten dɑːt ˈzɪroʊ dɑːt ˈzɪroʊ dɑːt faɪv ˈjuːzər dɪˈplɔɪ ˌoʊˈkeɪ aɪm ɪn/ | 10.0.0.5，用户 deploy。好，我登进去了。
Ops: Run tail dash f slash var slash log slash nginx slash error dot log. | /rʌn teɪl dæʃ ef slæʃ vɑːr slæʃ lɔːɡ slæʃ ˈendʒɪn eks slæʃ ˈerər dɑːt lɔːɡ/ | 运行 tail -f /var/log/nginx/error.log。
Dev: Sorry, can you say that again, a bit slower? | /ˈsɑːri kæn juː seɪ ðæt əˈɡen ə bɪt ˈsloʊər/ | 抱歉，能再说一遍，慢一点吗？
Ops: Sure. tail, dash F, slash var, slash log, slash nginx, slash error dot log. | /ʃʊr teɪl dæʃ ef slæʃ vɑːr slæʃ lɔːɡ slæʃ ˈendʒɪn eks slæʃ ˈerər dɑːt lɔːɡ/ | 好的。tail，-f，/var，/log，/nginx，/error.log。
Dev: Got it. I see a lot of timeout errors. | /ɡɑːt ɪt aɪ siː ə lɑːt ʌv ˈtaɪˌmaʊt ˈerərz/ | 好了。我看到很多超时错误。
```

> [!QUESTION] 想检验自己：怎么用英语读出这个邮箱 `dev_team@example.org`？
> 先自己读一遍，再点开答案对照。
>
> ```phrases
> dev underscore team at example dot org | /dev ˌʌndərˈskɔːr tiːm æt ɪɡˈzæmpəl dɑːt ɔːrɡ/ | 邮箱 dev_team@example.org 的读法
> ```

> [!QUESTION] 想检验自己：怎么读出「8080 端口，99.9% 的可用性」？
> ```phrases
> Port eighty eighty, with ninety-nine point nine percent availability. | /pɔːrt ˈeɪti ˈeɪti wɪð ˈnaɪnti naɪn pɔɪnt naɪn pərˈsent əˌveɪləˈbɪləti/ | 8080 端口，99.9% 的可用性。
> ```

> [!QUESTION] 想检验自己：对方读命令太快，你怎么请他慢一点并确认？
> ```phrases
> Sorry, could you read that command again, a bit slower? | /ˈsɑːri kʊd juː red ðæt kəˈmænd əˈɡen ə bɪt ˈsloʊər/ | 不好意思，能把那条命令再念一遍，慢一点吗？
> Let me repeat that back to make sure I got it. | /let miː rɪˈpiːt ðæt bæk tuː meɪk ʃʊr aɪ ɡɑːt ɪt/ | 我复述一遍，确认我没听错。
> ```
