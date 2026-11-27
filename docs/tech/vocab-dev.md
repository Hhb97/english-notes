---
level: 入门
summary: 变量、函数、类、参数、编译、调试、重构等软件开发基础词汇，每个词配一句真实的工作例句。
tags: [词汇, 软件开发, 编程基础, 入门]
---

# 软件开发基础词汇

> [!ABSTRACT]
> - 本页 48 个开发基础词，分四组：**数据**、**函数与类**、**代码组织**、**构建运行与质量**。
> - 每个词都配一句同事之间真会说的话，先看中文想英文，再点开核对。
> - 容易混的几对：**parameter vs argument**、**library vs framework**、**build vs compile**、**bug vs feature**，备注里已标出区别。

## 一、数据与变量

聊代码时最先用到的是「数据长什么样」：存在哪、是什么类型、怎么成组。

```words
variable | /ˈveriəbəl/ | n. 变量 | I renamed the variable because the old name was confusing. | /aɪ riˈneɪmd ðə ˈveriəbəl bɪˈkɔːz ðə oʊld neɪm wɑːz kənˈfjuːzɪŋ/ | 我把这个变量改名了，因为原来的名字容易让人误解。
string | /strɪŋ/ | n. 字符串 | The API expects the user ID as a string, not a number. | /ðə ˌeɪˌpiːˈaɪ ɪkˈspekts ðə ˈjuːzər ɪd æz ə strɪŋ nɑːt ə ˈnʌmbər/ | 这个接口要求用户 ID 是字符串，不是数字。
integer | /ˈɪntədʒər/ | n. 整数 | The page size must be an integer between one and one hundred. | /ðə peɪdʒ saɪz mʌst biː æn ˈɪntədʒər bɪˈtwiːn wʌn ənd wʌn ˈhʌndrəd/ | 每页数量必须是一到一百之间的整数。
boolean | /buˈliːən/ | n. 布尔值（真 / 假） | I added a boolean to track whether the user is logged in. | /aɪ ˈædəd ə buˈliːən tuː træk ˈweðər ðə ˈjuːzər ɪz lɔːɡd ɪn/ | 我加了一个布尔值来记录用户是否已登录。
array | /ərˈeɪ/ | n. 数组 | The response contains an array of order objects. | /ðə rɪˈspɑːns kənˈteɪnz æn ərˈeɪ ʌv ˈɔːrdər ˈɑːbdʒekts/ | 响应里有一个订单对象的数组。
list | /lɪst/ | n. 列表（array 偏固定长度的底层结构，list 更口语、更通用；Python 里的 list 就是常说的数组） | Loop through the list and skip any empty items. | /luːp θruː ðə lɪst ənd skɪp ˈeni ˈempti ˈaɪtəmz/ | 遍历这个列表，跳过所有空项。
object | /ˈɑːbdʒekt/ | n. 对象 | Each object in the response has an ID and a name. | /iːtʃ ˈɑːbdʒekt ɪn ðə rɪˈspɑːns hæz æn ɪd ənd ə neɪm/ | 响应里的每个对象都有 ID 和名称。
value | /ˈvælju/ | n. 值 | The default value for this field is zero. | /ðə dɪˈfɔːlt ˈvælju fɔːr ðɪs fiːld ɪz ˈzɪroʊ/ | 这个字段的默认值是零。
type | /taɪp/ | n. 类型 | What type is this field, a string or an integer? | /wʌt taɪp ɪz ðɪs fiːld ə strɪŋ ɔːr æn ˈɪntədʒər/ | 这个字段是什么类型，字符串还是整数？
```

> [!TIP] 先把读音记准的几个词
> - **variable** 重音在第一个音节：VAIR-ee-uh-bul，中间的 ia 要读轻。
> - **integer** 重音在第一个音节：IN-tuh-jer，不是 in-TEE-jer。
> - **boolean** 读 BOO-lee-un，第一个音节是 boo，不是 bao。
> - **array** 重音在第二个音节：uh-RAY。
> - **algorithm** 重音在第一个音节：AL-guh-rith-um，中间是 th 不是 t。

## 二、函数、类与接口

面试和 Code Review 里最高频的一组。**parameter** 和 **argument** 最容易说混，下面分开记。

```words
function | /ˈfʌŋkʃən/ | n. 函数 | This function takes a user ID and returns the profile. | /ðɪs ˈfʌŋkʃən teɪks ə ˈjuːzər ɪd ənd rɪˈtɜːrnz ðə ˈproʊˌfaɪl/ | 这个函数接收一个用户 ID，返回用户资料。
method | /ˈmeθəd/ | n. 方法（属于类的函数）（function 是独立的函数，method 属于某个类或对象） | You can call the save method on any model object. | /juː kæn kɔːl ðə seɪv ˈmeθəd ɑːn ˈeni ˈmɑːdəl ˈɑːbdʒekt/ | 你可以在任何模型对象上调用 save 方法。
class | /klæs/ | n. 类 | I'll move the validation logic into a separate class. | /aɪl muːv ðə ˌvæləˈdeɪʃən ˈlɑːdʒɪk ˈɪntu ə ˈsepərˌeɪt klæs/ | 我会把校验逻辑挪到一个单独的类里。
parameter | /pərˈæmətər/ | n. 形参（定义里的参数）（parameter 是定义函数时写的占位名） | The function has two parameters, a name and a timeout. | /ðə ˈfʌŋkʃən hæz tuː pərˈæmətərz ə neɪm ənd ə ˈtaɪˌmaʊt/ | 这个函数有两个参数，名称和超时时间。
argument | /ˈɑːrɡjəmənt/ | n. 实参（调用时传的值）（argument 是调用时实际传入的值；日常口语里两者常混用，但正式讨论时要分清） | You're passing the wrong argument to this function. | /jʊr ˈpæsɪŋ ðə rɔːŋ ˈɑːrɡjəmənt tuː ðɪs ˈfʌŋkʃən/ | 你给这个函数传错参数了。
return value | /rɪˈtɜːrn ˈvælju/ | n. 返回值 | What's the return value if the user doesn't exist? | /wʌts ðə rɪˈtɜːrn ˈvælju ɪf ðə ˈjuːzər ˈdʌzənt ɪɡˈzɪst/ | 如果用户不存在，返回值是什么？
constructor | /kənˈstrʌktər/ | n. 构造函数 | Please set the default values in the constructor. | /pliːz set ðə dɪˈfɔːlt ˈvæljuz ɪn ðə kənˈstrʌktər/ | 请在构造函数里设置默认值。
instance | /ˈɪnstəns/ | n. 实例 | Each request creates a new instance of the handler. | /iːtʃ rɪˈkwest kriˈeɪts ə nuː ˈɪnstəns ʌv ðə ˈhændlər/ | 每个请求都会创建一个新的处理器实例。
interface | /ˈɪntərˌfeɪs/ | n. 接口（代码层面的约定）（这里的 interface 指代码约定；对外的 HTTP 接口通常叫 API 或 endpoint） | The payment module exposes a simple interface to other services. | /ðə ˈpeɪmənt ˈmɑːdʒul ɪkˈspoʊzɪz ə ˈsɪmpəl ˈɪntərˌfeɪs tuː ˈʌðər ˈsɜːrvəsəz/ | 支付模块对其他服务暴露了一个简单的接口。
inheritance | /ˌɪnˈherətəns/ | n. 继承 | I'd avoid deep inheritance here, composition is simpler. | /aɪd əˈvɔɪd diːp ˌɪnˈherətəns hiːr ˌkɑːmpəˈzɪʃən ɪz ˈsɪmpələr/ | 这里我会避免多层继承，组合更简单。
loop | /luːp/ | n./v. 循环；循环处理 | The loop runs ten thousand times, which is too slow. | /ðə luːp rʌnz ten ˈθaʊzənd taɪmz wɪtʃ ɪz tuː sloʊ/ | 这个循环要跑一万次，太慢了。
condition | /kənˈdɪʃən/ | n. 条件（也指 if 里的判断表达式；注意和 situation 区分） | Add a condition to check whether the list is empty. | /æd ə kənˈdɪʃən tuː tʃek ˈweðər ðə lɪst ɪz ˈempti/ | 加一个条件判断列表是否为空。
syntax | /ˈsɪnˌtæks/ | n. 语法 | I'm getting a syntax error on line forty-two. | /aɪm ˈɡetɪŋ ə ˈsɪnˌtæks ˈerər ɑːn laɪn ˈfɔːrti tuː/ | 第四十二行报了一个语法错误。
```

> [!WARNING] 别把 parameter 和 argument 说成同一个东西
> 定义 `def greet(name)` 时，`name` 是 **parameter**；调用 `greet("Ming")` 时，`"Ming"` 是 **argument**。同事聊天时混着用没人会纠正，但写文档和面试时分清更专业。

## 三、代码组织与版本管理

代码怎么拆、怎么引用别人的代码、怎么存放，这些词每天都在用。

```words
library | /ˈlaɪbreˌriː/ | n. 库（library 是你主动调用的工具集，控制权在你手里） | We use a small library to parse dates. | /wiː juːs ə smɔːl ˈlaɪbreˌriː tuː pɑːrs deɪts/ | 我们用一个小型库来解析日期。
framework | /ˈfreɪmˌwɜːrk/ | n. 框架（framework 反过来调用你的代码，控制权在框架手里） | The framework handles routing, so we only write the handlers. | /ðə ˈfreɪmˌwɜːrk ˈhændəlz ˈraʊtɪŋ soʊ wiː ˈoʊnli raɪt ðə ˈhændlərz/ | 框架负责路由，我们只需要写处理函数。
package | /ˈpækədʒ/ | n. 包 | You can install the package with one command. | /juː kæn ˌɪnˈstɔːl ðə ˈpækədʒ wɪð wʌn kəˈmænd/ | 你用一条命令就能安装这个包。
module | /ˈmɑːdʒul/ | n. 模块 | I split the code into three modules to keep it clean. | /aɪ splɪt ðə koʊd ˈɪntu θriː ˈmɑːdʒulz tuː kiːp ɪt kliːn/ | 我把代码拆成了三个模块，保持整洁。
dependency | /dɪˈpendənsi/ | n. 依赖 | We should remove unused dependencies before the release. | /wiː ʃʊd riˈmuːv əˈnjuːzd dɪˈpendənsiz bɪˈfɔːr ðə riˈliːs/ | 发布前应该把没用的依赖删掉。
repository | /riˈpɑːzəˌtɔːri/ | n. 代码仓库 | The repository is private, so I need to add you first. | /ðə riˈpɑːzəˌtɔːri ɪz ˈpraɪvət soʊ aɪ niːd tuː æd juː fɜːrst/ | 这个仓库是私有的，我得先把你加进去。
branch | /bræntʃ/ | n. 分支 | I created a new branch for the login fix. | /aɪ kriˈeɪtəd ə nuː bræntʃ fɔːr ðə ˈlɔːˌɡɪn fɪks/ | 我为登录问题的修复建了一个新分支。
source code | /sɔːrs koʊd/ | n. 源代码 | Can you share the source code for the export script? | /kæn juː ʃer ðə sɔːrs koʊd fɔːr ðə ˈekspɔːrt skrɪpt/ | 你能把导出脚本的源代码发给我吗？
comment | /ˈkɑːment/ | n./v. 注释；评论 | Please add a comment explaining why we retry three times. | /pliːz æd ə ˈkɑːment ɪkˈspleɪnɪŋ waɪ wiː riˈtraɪ θriː taɪmz/ | 请加一条注释，说明为什么我们重试三次。
version | /ˈvɜːrʒən/ | n. 版本 | Which version of the library are you using? | /wɪtʃ ˈvɜːrʒən ʌv ðə ˈlaɪbreˌriː ɑːr juː ˈjuːzɪŋ/ | 你用的是这个库的哪个版本？
commit | /kəˈmɪt/ | n./v. 提交 | I'll commit the change and open a pull request. | /aɪl kəˈmɪt ðə tʃeɪndʒ ənd ˈoʊpən ə pʊl rɪˈkwest/ | 我先提交这次改动，然后开一个 PR。
codebase | /ˈkoʊdbeɪs/ | n. 代码库（整个项目的代码）（repository 强调存放位置，codebase 强调代码本身） | I'm still learning the codebase, so I have a lot of questions. | /aɪm stɪl ˈlɜːrnɪŋ ðə ˈkoʊdbeɪs soʊ aɪ hæv ə lɑːt ʌv ˈkwestʃənz/ | 我还在熟悉整个代码库，所以问题比较多。
```

> [!TIP] library 和 framework 怎么一句话分清
> 一句常被引用的说法：**You call a library, but a framework calls you.** 你调用库；框架调用你。面试里被问到区别时，这句话加一个例子就够了。

## 四、构建、运行与质量

出了问题怎么说、怎么描述测试和改进代码，是和同事沟通最频繁的部分。

```words
compile | /kəmˈpaɪl/ | v. 编译 | The code doesn't compile because of a missing import. | /ðə koʊd ˈdʌzənt kəmˈpaɪl bɪˈkɔːz ʌv ə ˈmɪsɪŋ ˌɪmˈpɔːrt/ | 代码编译不过，因为少了一个 import。
build | /bɪld/ | n./v. 构建；打包（compile 只是把源码转成可执行代码；build 还包括打包、链接、跑脚本等整个过程） | The build takes about five minutes on my laptop. | /ðə bɪld teɪks əˈbaʊt faɪv ˈmɪnəts ɑːn maɪ ˈlæpˌtɑːp/ | 在我的笔记本上构建大约要五分钟。
runtime | /ˈrʌntaɪm/ | n. 运行时；运行期（重音在第一个音节：RUN-time） | This error only shows up at runtime, not at compile time. | /ðɪs ˈerər ˈoʊnli ʃoʊz ʌp æt ˈrʌntaɪm nɑːt æt kəmˈpaɪl taɪm/ | 这个错误只在运行时出现，编译时没有。
exception | /ɪkˈsepʃən/ | n. 异常（重音在第二个音节：ik-SEP-shun，注意和 except 同源） | The service throws an exception when the file is missing. | /ðə ˈsɜːrvəs θroʊz æn ɪkˈsepʃən wen ðə faɪl ɪz ˈmɪsɪŋ/ | 文件不存在时，服务会抛出一个异常。
debug | /diˈbʌɡ/ | v. 调试（重音在第二个音节：dee-BUG） | I spent the whole afternoon debugging a memory leak. | /aɪ spent ðə hoʊl ˌæftərˈnuːn diˈbʌɡɪŋ ə ˈmeməri liːk/ | 我花了一整个下午调试一个内存泄漏。
bug | /bʌɡ/ | n. 缺陷，Bug | We found a bug in the discount calculation. | /wiː faʊnd ə bʌɡ ɪn ðə dɪˈskaʊnt ˌkælkjəˈleɪʃən/ | 我们在折扣计算里发现了一个 bug。
feature | /ˈfiːtʃər/ | n. 功能，特性（口头玩笑：It's not a bug, it's a feature.） | The export feature is already in production. | /ðə ˈekspɔːrt ˈfiːtʃər ɪz ɔːlˈredi ɪn prəˈdʌkʃən/ | 导出功能已经上线了。
test | /test/ | n./v. 测试 | Did you test it with an empty input? | /dɪd juː test ɪt wɪð æn ˈempti ˈɪnˌpʊt/ | 你用空输入测过吗？
unit test | /ˈjuːnət test/ | n. 单元测试 | Every new function needs at least one unit test. | /ˈevəri nuː ˈfʌŋkʃən niːdz æt liːst wʌn ˈjuːnət test/ | 每个新函数至少需要一个单元测试。
refactor | /riːˈfæktər/ | v./n. 重构（重音在第二个音节：ree-FAK-ter；重构不改变外部行为） | I'd like to refactor this class before adding more logic. | /aɪd laɪk tuː riːˈfæktər ðɪs klæs bɪˈfɔːr ˈædɪŋ mɔːr ˈlɑːdʒɪk/ | 在加更多逻辑之前，我想先重构这个类。
algorithm | /ˈælɡərˌɪðəm/ | n. 算法 | We need a faster algorithm for sorting these records. | /wiː niːd ə ˈfæstər ˈælɡərˌɪðəm fɔːr ˈsɔːrtɪŋ ðiːz rəˈkɔːrdz/ | 我们需要一个更快的算法来给这些记录排序。
output | /ˈaʊtˌpʊt/ | n. 输出 | The output looks wrong when the input is negative. | /ðə ˈaʊtˌpʊt lʊks rɔːŋ wen ðə ˈɪnˌpʊt ɪz ˈneɡətɪv/ | 输入是负数时，输出看起来不对。
error message | /ˈerər ˈmesədʒ/ | n. 错误信息 | Can you paste the full error message in the chat? | /kæn juː peɪst ðə fʊl ˈerər ˈmesədʒ ɪn ðə tʃæt/ | 你能把完整的错误信息贴到聊天里吗？
log | /lɔːɡ/ | n./v. 日志；记录日志 | Check the log to see what happened before the crash. | /tʃek ðə lɔːɡ tuː siː wʌt ˈhæpənd bɪˈfɔːr ðə kræʃ/ | 看一下日志，了解崩溃之前发生了什么。
```

> [!CAUTION] 千万别这样说
> - 别说 ~~The code has a compile problem.~~ 要说 **The code doesn't compile.**
> - 别说 ~~I'm debugging the bug of the login page.~~ 自然说法是 **I'm debugging an issue on the login page.**
> - bug 是名词，修它叫 **fix a bug**，找它叫 **track down a bug**；**debug** 是动词，后面直接跟出问题的东西。

## 五、用这些词说完整的话

下面这些句子把本页多个词放在一起，可以直接套用。

```phrases
The function throws an exception when the parameter is null. | /ðə ˈfʌŋkʃən θroʊz æn ɪkˈsepʃən wen ðə pərˈæmətər ɪz nʌl/ | 参数为空时，这个函数会抛出异常。 | parameter 在这里指函数定义里的形参
I passed a string as the argument, but it expects an integer. | /aɪ pæst ə strɪŋ æz ðə ˈɑːrɡjəmənt bʌt ɪt ɪkˈspekts æn ˈɪntədʒər/ | 我传了一个字符串作参数，但它要的是整数。
This library has a lot of dependencies, so the build is slow. | /ðɪs ˈlaɪbreˌriː hæz ə lɑːt ʌv dɪˈpendənsiz soʊ ðə bɪld ɪz sloʊ/ | 这个库依赖很多，所以构建很慢。
Let's refactor this module and add a unit test for each method. | /lets riːˈfæktər ðɪs ˈmɑːdʒul ənd æd ə ˈjuːnət test fɔːr iːtʃ ˈmeθəd/ | 我们重构一下这个模块，再给每个方法加一个单元测试。
The code compiles, but it crashes at runtime. | /ðə koʊd kəmˈpaɪlz bʌt ɪt ˈkræʃɪz æt ˈrʌntaɪm/ | 代码能编译通过，但运行时会崩溃。
Which version of the framework does the repository use? | /wɪtʃ ˈvɜːrʒən ʌv ðə ˈfreɪmˌwɜːrk dʌz ðə riˈpɑːzəˌtɔːri juːs/ | 这个仓库用的是框架的哪个版本？
I'll create a branch, fix the bug, and push the source code. | /aɪl kriˈeɪt ə bræntʃ fɪks ðə bʌɡ ənd pʊʃ ðə sɔːrs koʊd/ | 我会建一个分支，修好这个 bug，再把代码推上去。
Can you add a comment above the loop to explain the condition? | /kæn juː æd ə ˈkɑːment əˈbʌv ðə luːp tuː ɪkˈspleɪn ðə kənˈdɪʃən/ | 你能在循环上面加一条注释，解释一下这个条件吗？
```

```dialog
title: 一起调试一个报错
Anna: The build passes, but the app crashes at runtime. | /ðə bɪld ˈpæsəz bʌt ðə æp ˈkræʃɪz æt ˈrʌntaɪm/ | 构建是过的，但应用在运行时崩了。
Ming: Do you see an error message in the log? | /duː juː siː æn ˈerər ˈmesədʒ ɪn ðə lɔːɡ/ | 日志里有错误信息吗？
Anna: Yes, it throws an exception in the parse function. | /jes ɪt θroʊz æn ɪkˈsepʃən ɪn ðə pɑːrs ˈfʌŋkʃən/ | 有，在 parse 函数里抛了一个异常。
Ming: What argument are you passing in? | /wʌt ˈɑːrɡjəmənt ɑːr juː ˈpæsɪŋ ɪn/ | 你传进去的参数是什么？
Anna: A string. The function expects an integer, I think. | /ə strɪŋ ðə ˈfʌŋkʃən ɪkˈspekts æn ˈɪntədʒər aɪ θɪŋk/ | 一个字符串。我想这个函数要的是整数。
Ming: Right, the parameter type is an integer. Can you add a check? | /raɪt ðə pərˈæmətər taɪp ɪz æn ˈɪntədʒər kæn juː æd ə tʃek/ | 对，参数类型是整数。你能加一个检查吗？
Anna: Sure. I'll also write a unit test for that case. | /ʃʊr aɪl ˈɔːlsoʊ raɪt ə ˈjuːnət test fɔːr ðæt keɪs/ | 好的。我也会为这种情况写一个单元测试。
Ming: Great. And please leave a comment, so nobody removes the check later. | /ɡreɪt ənd pliːz liːv ə ˈkɑːment soʊ ˈnoʊˌbɑːˌdiː riˈmuːvz ðə tʃek ˈleɪtər/ | 太好了。再留一条注释，免得以后有人把检查删掉。
Anna: Will do. I'll push to my branch in ten minutes. | /wɪl duː aɪl pʊʃ tuː maɪ bræntʃ ɪn ten ˈmɪnəts/ | 没问题，十分钟后我推到我的分支上。
```

> [!QUESTION] 想检验自己：同事问你 "What's the difference between a library and a framework?"，你怎么用一句话回答？
> ```phrases
> You call a library, but a framework calls your code. | /juː kɔːl ə ˈlaɪbreˌriː bʌt ə ˈfreɪmˌwɜːrk kɔːlz jɔːr koʊd/ | 库由你来调用，框架反过来调用你的代码。
> ```

> [!QUESTION] 想检验自己：在 Code Review 里，怎么礼貌地让对方把这个函数的参数说清楚？
> ```phrases
> Could you add a comment explaining what this parameter does? | /kʊd juː æd ə ˈkɑːment ɪkˈspleɪnɪŋ wʌt ðɪs pərˈæmətər dʌz/ | 你能加一条注释说明这个参数是干什么的吗？
> ```
