---
level: 进阶
summary: 技术面试里边想边说的整句：澄清题目、说思路、讲复杂度、权衡取舍、自测、求提示、坦承不会，以及系统设计和读代码的说法。
tags: [面试, 技术面试, 算法, 系统设计, 复杂度]
---

# 技术面试：边想边说

> [!ABSTRACT]
> - 英文技术面试的核心不是只写出答案，而是**让面试官听见你的思考**：**Let me think out loud.**
> - 标准流程：**澄清题目 → 举例 → 提方案 → 讲复杂度 → 写代码 → 自测**。每一步都要说出来。
> - 卡住了不要沉默，用 **Can I get a hint?** 或者 **Let me try a simpler case first.**
> - 不会就说不会，但要接着说你的推理：**I'm not sure, but here's how I'd reason about it.**

## 一、先别急着写：澄清问题

面试官给的题目故意不完整。先问清楚输入、输出、边界条件，是加分项，不是示弱。

```phrases
Before I start, can I ask a few clarifying questions? | /bɪˈfɔːr aɪ stɑːrt kæn aɪ æsk ə fjuː ˈklerəˌfaɪɪŋ ˈkwestʃənz/ | 开始之前，我能先问几个澄清问题吗？
Just to make sure I understand, you want me to return the index, not the value? | /dʒʌst tuː meɪk ʃʊr aɪ ˌʌndərˈstænd juː wɑːnt miː tuː rɪˈtɜːrn ðə ˈɪndeks nɑːt ðə ˈvælju/ | 确认一下我没理解错：你要我返回下标，而不是值？
Can the input array be empty? | /kæn ðə ˈɪnˌpʊt ərˈeɪ biː ˈempti/ | 输入数组可以为空吗？
Are the numbers sorted, or in random order? | /ɑːr ðə ˈnʌmbərz ˈsɔːrtɪd ɔːr ɪn ˈrændəm ˈɔːrdər/ | 这些数字是排好序的，还是随机顺序？
Can there be duplicates in the list? | /kæn ðer biː ˈdjuːpləˌkeɪts ɪn ðə lɪst/ | 列表里会有重复元素吗？
What should I return if there's no valid answer? | /wʌt ʃʊd aɪ rɪˈtɜːrn ɪf ðerz noʊ ˈvælɪd ˈænsər/ | 如果没有合法答案，应该返回什么？
How large can the input get? | /haʊ lɑːrdʒ kæn ðə ˈɪnˌpʊt ɡet/ | 输入最大会有多大？ | 规模决定算法选择，这个问题能显示你有工程意识
Should I optimize for time or for memory? | /ʃʊd aɪ ˈɑːptəˌmaɪz fɔːr taɪm ɔːr fɔːr ˈmeməri/ | 我应该优先优化时间还是内存？
Do you want a working solution first, or the most optimal one? | /duː juː wɑːnt ə ˈwɜːrkɪŋ səˈluːʃən fɜːrst ɔːr ðə moʊst ˈɑːptəməl wʌn/ | 你想先看到一个能跑的解法，还是直接最优解？
Let me restate the problem to be sure. | /let miː riˈsteɪt ðə ˈprɑːbləm tuː biː ʃʊr/ | 让我复述一下问题，确认一下。
```

> [!TIP] 先举一个例子
> 澄清之后，用一个小例子走一遍：**Let me walk through an example.** 例子能暴露你理解上的偏差，也给你思考时间。

## 二、边想边说：Think aloud

沉默十秒在面试里会显得很长。把脑子里想的话说出来，哪怕还没想清楚。

```phrases
Let me think out loud for a moment. | /let miː θɪŋk aʊt laʊd fɔːr ə ˈmoʊmənt/ | 让我边想边说一会儿。
My first thought is to use a hash map. | /maɪ fɜːrst θɔːt ɪz tuː juːs ə hæʃ mæp/ | 我的第一个想法是用哈希表。
The brute-force approach would be to check every pair. | /ðə bruːt fɔːrs əˈproʊtʃ wʊd biː tuː tʃek ˈevəri per/ | 暴力解法是检查每一对元素。
That would work, but it might be too slow for large inputs. | /ðæt wʊd wɜːrk bʌt ɪt maɪt biː tuː sloʊ fɔːr lɑːrdʒ ˈɪnˌpʊts/ | 那样可行，但输入大的时候可能太慢。
Hmm, what if I sorted the array first? | /hm wʌt ɪf aɪ ˈsɔːrtɪd ðə ərˈeɪ fɜːrst/ | 嗯，如果我先把数组排序呢？
I'm thinking about whether a two-pointer approach would work here. | /aɪm ˈθɪŋkɪŋ əˈbaʊt ˈweðər ə tuː ˈpɔɪntər əˈproʊtʃ wʊd wɜːrk hiːr/ | 我在想双指针方法在这里行不行。
Let me start with a simple case and build up. | /let miː stɑːrt wɪð ə ˈsɪmpəl keɪs ənd bɪld ʌp/ | 我先从简单的情况开始，逐步推广。
So the key observation is that we only need to look at each element once. | /soʊ ðə kiː ˌɑːbzərˈveɪʃən ɪz ðæt wiː ˈoʊnli niːd tuː lʊk æt iːtʃ ˈeləmənt wʌns/ | 所以关键的观察是，我们只需要看每个元素一次。
Actually, wait. I think I see a problem with that idea. | /ˈækˌtʃuːəli weɪt aɪ θɪŋk aɪ siː ə ˈprɑːbləm wɪð ðæt aɪˈdiːə/ | 其实等一下，我觉得这个想法有问题。 | 自我纠正是好信号，面试官喜欢看到
Let me take a step back and think about this differently. | /let miː teɪk ə step bæk ənd θɪŋk əˈbaʊt ðɪs ˈdɪfrəntli/ | 让我退一步，换个角度想。
```

## 三、提出方案，并征求同意

在动手写之前，先讲方案并问一句，免得写了二十分钟发现方向不对。

```phrases
Here's my approach. I'll go through the list once and store each number in a map. | /hɪrz maɪ əˈproʊtʃ aɪl ɡoʊ θruː ðə lɪst wʌns ənd stɔːr iːtʃ ˈnʌmbər ɪn ə mæp/ | 我的方案是：遍历一遍列表，把每个数存进哈希表。
For each element, I'll check whether its complement is already in the map. | /fɔːr iːtʃ ˈeləmənt aɪl tʃek ˈweðər ɪts ˈkɑːmpləmənt ɪz ɔːlˈredi ɪn ðə mæp/ | 对每个元素，我检查它的补数是否已经在表里。
Does that sound reasonable to you? | /dʌz ðæt saʊnd ˈriːzənəbəl tuː juː/ | 你觉得这样合理吗？
Would you like me to start coding, or should I discuss other options first? | /wʊd juː laɪk miː tuː stɑːrt ˈkoʊdɪŋ ɔːr ʃʊd aɪ dɪˈskʌs ˈʌðər ˈɑːpʃənz fɜːrst/ | 你想让我开始写代码，还是先聊聊其他方案？
I'll start with the brute-force solution, then optimize it. | /aɪl stɑːrt wɪð ðə bruːt fɔːrs səˈluːʃən ðen ˈɑːptəˌmaɪz ɪt/ | 我先写暴力解，再优化。
Let me write the function signature first. | /let miː raɪt ðə ˈfʌŋkʃən ˈsɪɡnətʃər fɜːrst/ | 我先写函数签名。
I'll use a helper function to keep the main logic clean. | /aɪl juːs ə ˈhelpər ˈfʌŋkʃən tuː kiːp ðə meɪn ˈlɑːdʒɪk kliːn/ | 我会用一个辅助函数让主逻辑更清晰。
```

## 四、讲复杂度：时间和空间

读法要熟：**O of n**（线性）、**O of n squared**、**O of log n**、**O of one**（常数）。

| 写法 | 英文读法 | 常用名称 |
| --- | --- | --- |
| O(1) | O of one | constant time（常数时间） |
| O(log n) | O of log n | logarithmic time（对数时间） |
| O(n) | O of n | linear time（线性时间） |
| O(n log n) | O of n log n | linearithmic time |
| O(n²) | O of n squared | quadratic time（平方时间） |
| O(2ⁿ) | O of two to the n | exponential time（指数时间） |

```phrases
The time complexity is O of n, since we visit each element once. | /ðə taɪm kəmˈpleksəti ɪz oʊ ʌv en sɪns wiː ˈvɪzɪt iːtʃ ˈeləmənt wʌns/ | 时间复杂度是 O of n，因为每个元素只访问一次。
The space complexity is also linear, because of the hash map. | /ðə speɪs kəmˈpleksəti ɪz ˈɔːlsoʊ ˈlɪniər bɪˈkɔːz ʌv ðə hæʃ mæp/ | 空间复杂度也是线性的，因为用了哈希表。
This runs in linear time and uses constant extra space. | /ðɪs rʌnz ɪn ˈlɪniər taɪm ənd ˈjuːsəz ˈkɑːnstənt ˈekstrə speɪs/ | 这个算法线性时间运行，额外空间是常数。
Sorting dominates the cost, so it's O of n log n overall. | /ˈsɔːrtɪŋ ˈdɑːməˌneɪts ðə kɑːst soʊ ɪts oʊ ʌv en lɔːɡ en ˈoʊvərˌɔːl/ | 排序占了主要开销，所以整体是 O of n log n。
The brute-force version is O of n squared. | /ðə bruːt fɔːrs ˈvɜːrʒən ɪz oʊ ʌv en skwerd/ | 暴力版本是 O of n squared。
In the worst case, it's quadratic. In the average case, it's much better. | /ɪn ðə wɜːrst keɪs ɪts kwɑːˈdrɑːtɪk ɪn ðə ˈævərɪdʒ keɪs ɪts mʌtʃ ˈbetər/ | 最坏情况是平方级，平均情况要好得多。
We can trade space for time by adding a cache. | /wiː kæn treɪd speɪs fɔːr taɪm baɪ ˈædɪŋ ə kæʃ/ | 我们可以加一个缓存，用空间换时间。
The lookup is O of one on average. | /ðə ˈlʊkəp ɪz oʊ ʌv wʌn ɑːn ˈævərɪdʒ/ | 查找平均是常数时间。
Can we do better than O of n squared? | /kæn wiː duː ˈbetər ðæn oʊ ʌv en skwerd/ | 我们能做得比 O of n squared 更好吗？
```

## 五、讲取舍：Trade-offs

```phrases
There's a trade-off between memory usage and speed here. | /ðerz ə treɪd ɔːf bɪˈtwiːn ˈmeməri ˈjuːsədʒ ənd spiːd hiːr/ | 这里需要在内存使用和速度之间权衡。
The upside is it's simple, but the downside is it uses extra memory. | /ðə ˈʌpˈsaɪd ɪz ɪts ˈsɪmpəl bʌt ðə ˈdaʊnˌsaɪd ɪz ɪt ˈjuːsəz ˈekstrə ˈmeməri/ | 好处是简单，坏处是多用内存。
If memory is tight, I'd choose the in-place version. | /ɪf ˈmeməri ɪz taɪt aɪd tʃuːz ðə ɪn pleɪs ˈvɜːrʒən/ | 如果内存紧张，我会选原地版本。
For small inputs, the simpler approach is probably fine. | /fɔːr smɔːl ˈɪnˌpʊts ðə ˈsɪmpələr əˈproʊtʃ ɪz ˈprɑːbəˌbliː faɪn/ | 输入小的时候，更简单的方法大概就够了。
I'd go with this one because it's easier to maintain. | /aɪd ɡoʊ wɪð ðɪs wʌn bɪˈkɔːz ɪts ˈiːziər tuː meɪnˈteɪn/ | 我会选这个，因为更容易维护。 | 面试官也在看你的工程判断，不只是算法
The cost of that choice is slower writes. | /ðə kɑːst ʌv ðæt tʃɔɪs ɪz ˈsloʊər raɪts/ | 这个选择的代价是写入更慢。
```

## 六、写完要测试

不要写完就说 "Done"。主动测试是资深工程师的标志。

```phrases
Let me walk through the code with an example. | /let miː wɔːk θruː ðə koʊd wɪð æn ɪɡˈzæmpəl/ | 让我用一个例子把代码走一遍。
Let me trace through it with the input one, two, three. | /let miː treɪs θruː ɪt wɪð ðə ˈɪnˌpʊt wʌn tuː θriː/ | 让我用输入一、二、三跟踪一遍。
Now let me test the edge cases. | /naʊ let miː test ðə edʒ ˈkeɪsəz/ | 现在我来测试边界情况。
What if the array is empty or has a single element? | /wʌt ɪf ðə ərˈeɪ ɪz ˈempti ɔːr hæz ə ˈsɪŋɡəl ˈeləmənt/ | 如果数组为空或只有一个元素呢？
I think there's an off-by-one error here. Let me fix that. | /aɪ θɪŋk ðerz æn ɔːf baɪ wʌn ˈerər hiːr let miː fɪks ðæt/ | 我觉得这里有个差一错误，我来改。
Let me double-check the loop condition. | /let miː ˈdʌbəl tʃek ðə luːp kənˈdɪʃən/ | 我再检查一下循环条件。
I'd also write unit tests for negative numbers and duplicates. | /aɪd ˈɔːlsoʊ raɪt ˈjuːnət tests fɔːr ˈneɡətɪv ˈnʌmbərz ənd ˈdjuːpləˌkeɪts/ | 我还会为负数和重复元素写单元测试。
I think this handles all the cases I can think of. | /aɪ θɪŋk ðɪs ˈhændəlz ɔːl ðə ˈkeɪsəz aɪ kæn θɪŋk ʌv/ | 我觉得这涵盖了我能想到的所有情况。
```

## 七、卡住了：求提示与坦承不会

卡住不丢脸。面试官常常是想看你**怎么和人协作着解决问题**。

```phrases
I'm a bit stuck here. Could I get a small hint? | /aɪm ə bɪt stʌk hiːr kʊd aɪ ɡet ə smɔːl hɪnt/ | 我在这里有点卡住了，能给个小提示吗？
Can you point me in the right direction? | /kæn juː pɔɪnt miː ɪn ðə raɪt dərˈekʃən/ | 你能给我指个方向吗？
I'm not sure how to proceed, but let me try something simpler. | /aɪm nɑːt ʃʊr haʊ tuː prəˈsiːd bʌt let miː traɪ ˈsʌmθɪŋ ˈsɪmpələr/ | 我不确定怎么继续，但让我试个更简单的。
Am I on the right track? | /æm aɪ ɑːn ðə raɪt træk/ | 我的方向对吗？ | 在卡点主动确认，比沉默强
Is there a data structure I should be thinking about? | /ɪz ðer ə ˈdeɪtə ˈstrʌktʃər aɪ ʃʊd biː ˈθɪŋkɪŋ əˈbaʊt/ | 我是不是该想想用某种数据结构？
Thanks, that hint helps. I think I see it now. | /θæŋks ðæt hɪnt helps aɪ θɪŋk aɪ siː ɪt naʊ/ | 谢谢，这个提示很有帮助，我想我明白了。
I don't know this offhand, but I'd look it up. | /aɪ doʊnt noʊ ðɪs ˈɔːfˈhænd bʌt aɪd lʊk ɪt ʌp/ | 我一时想不起来，不过我会去查。
I haven't worked with that directly, but here's how I'd reason about it. | /aɪ ˈhævənt wɜːrkt wɪð ðæt dərˈektli bʌt hɪrz haʊ aɪd ˈriːzən əˈbaʊt ɪt/ | 我没直接用过，但我会这样推理。
I'm not 100 percent sure, but I believe it's closer to linear. | /aɪm nɑːt wʌn ˈhʌndrəd pərˈsent ʃʊr bʌt aɪ bɪˈliːv ɪts ˈkloʊsər tuː ˈlɪniər/ | 我不是百分之百确定，但我认为更接近线性。
```

> [!CAUTION] 千万别在面试里这样说
> - 不要说：**I don't know. Skip it.** 或者 **This question is too hard.**
> - 改成：**I'm not sure, but let me think it through.**
> - 不要说：**I forgot.**（然后沉默）
> - 改成：**I don't remember the exact syntax, but the idea is...**
> - 不要说：**It's easy.**（会显得轻视题目）
> - 改成：**That seems straightforward. Let me make sure I'm not missing something.**

## 八、系统设计面试

系统设计没有标准答案。要先问需求，估算规模，再画高层架构，最后深入瓶颈。

```phrases
Let's start with the requirements. What are we building? | /lets stɑːrt wɪð ðə rɪˈkwaɪrmənts wʌt ɑːr wiː ˈbɪldɪŋ/ | 我们从需求开始：要做的是什么？
What are the functional requirements, and what are the non-functional ones? | /wʌt ɑːr ðə ˈfʌŋkʃənəl rɪˈkwaɪrmənts ənd wʌt ɑːr ðə nɑːn ˈfʌŋkʃənəl wʌnz/ | 功能需求是什么，非功能需求又是什么？
How many users do we expect, and what's the read-to-write ratio? | /haʊ ˈmeni ˈjuːzərz duː wiː ɪkˈspekt ənd wʌts ðə red tuː raɪt ˈreɪʃiˌoʊ/ | 预计多少用户，读写比例是多少？
Let me do a quick back-of-the-envelope estimate. | /let miː duː ə kwɪk bæk ʌv ðə ˈenvəˌloʊp ˈestəmət/ | 我来做个快速估算。 | back-of-the-envelope 指「粗略估算」
Let me sketch a high-level architecture first. | /let miː sketʃ ə haɪ ˈlevəl ˈɑːrkəˌtektʃər fɜːrst/ | 我先画个高层架构图。
We'll have a load balancer in front of a few stateless API servers. | /wiːl hæv ə loʊd ˈbælənsər ɪn frʌnt ʌv ə fjuː ˈsteɪtləs ˌeɪˌpiːˈaɪ ˈsɜːrvərz/ | 前面是负载均衡器，后面是几台无状态的 API 服务器。
For storage, I'd use a relational database with read replicas. | /fɔːr ˈstɔːrədʒ aɪd juːs ə riˈleɪʃənəl ˈdeɪtəˌbeɪs wɪð red ˈrepləkəz/ | 存储方面，我会用关系型数据库加只读副本。
To reduce latency, we can add a cache layer with Redis. | /tuː rəˈduːs ˈleɪtənsi wiː kæn æd ə kæʃ ˈleɪər wɪð ˈredɪs/ | 为了降低延迟，我们可以加一层 Redis 缓存。
This component is a bottleneck, so I'd shard the database by user ID. | /ðɪs kəmˈpoʊnənt ɪz ə ˈbɑːtəlˌnek soʊ aɪd ʃɑːrd ðə ˈdeɪtəˌbeɪs baɪ ˈjuːzər ɪd/ | 这个组件是瓶颈，所以我会按用户 ID 对数据库分片。
We could use a message queue to decouple the services. | /wiː kʊd juːs ə ˈmesədʒ kjuː tuː diˈkʌpəl ðə ˈsɜːrvəsəz/ | 我们可以用消息队列把服务解耦。
For consistency, we'd go with eventual consistency here. | /fɔːr kənˈsɪstənsi wiːd ɡoʊ wɪð əˈventʃuəl kənˈsɪstənsi hiːr/ | 一致性方面，这里我们会采用最终一致性。
What happens if this service goes down? | /wʌt ˈhæpənz ɪf ðɪs ˈsɜːrvəs ɡoʊz daʊn/ | 如果这个服务挂了会怎样？
We can add retries with exponential backoff to handle failures. | /wiː kæn æd riːˈtraɪz wɪð ˌekspoʊˈnenʃəl ˈbækˌɔːf tuː ˈhændəl ˈfeɪljərz/ | 我们可以加带指数退避的重试来处理故障。
I'd start simple and scale out when we see the need. | /aɪd stɑːrt ˈsɪmpəl ənd skeɪl aʊt wen wiː siː ðə niːd/ | 我会从简单开始，有需要再横向扩展。
Which part would you like me to go deeper on? | /wɪtʃ pɑːrt wʊd juː laɪk miː tuː ɡoʊ ˈdiːpər ɑːn/ | 你想让我深入讲哪一部分？
```

## 九、大声读代码

面试官常让你读一段代码、解释它做什么，或者在你写的时候讲解。

```phrases
This function takes a list of integers and returns the largest sum. | /ðɪs ˈfʌŋkʃən teɪks ə lɪst ʌv ˈɪntədʒərz ənd rɪˈtɜːrnz ðə ˈlɑːrdʒəst sʌm/ | 这个函数接收一个整数列表，返回最大的和。
Here, we loop over the array with an index called i. | /hiːr wiː luːp ˈoʊvər ðə ərˈeɪ wɪð æn ˈɪndeks kɔːld aɪ/ | 这里我们用叫 i 的下标遍历数组。
If the current value is greater than max, we update max. | /ɪf ðə ˈkɜːrənt ˈvælju ɪz ˈɡreɪtər ðæn mæks wiː əpˈdeɪt mæks/ | 如果当前值大于 max，就更新 max。
This line checks whether the key already exists in the map. | /ðɪs laɪn tʃeks ˈweðər ðə kiː ɔːlˈredi ɪɡˈzɪsts ɪn ðə mæp/ | 这一行检查键是否已经存在于哈希表中。
Then we return early if the input is null. | /ðen wiː rɪˈtɜːrn ˈɜːrli ɪf ðə ˈɪnˌpʊt ɪz nʌl/ | 然后如果输入为 null，我们提前返回。
This part is recursive, and the base case is when n equals zero. | /ðɪs pɑːrt ɪz ˌriːˈkɜːrsɪv ənd ðə beɪs keɪs ɪz wen en ˈiːkwəlz ˈzɪroʊ/ | 这部分是递归的，基本情形是 n 等于零。
Notice that this variable is shared across calls. | /ˈnoʊtəs ðæt ðɪs ˈveriəbəl ɪz ʃerd əˈkrɔːs kɔːlz/ | 注意这个变量在多次调用之间是共享的。
Here we're allocating a new array on every iteration. | /hiːr wiːr ˈæləˌkeɪtɪŋ ə nuː ərˈeɪ ɑːn ˈevəri ˌɪtərˈeɪʃən/ | 这里我们每次迭代都分配一个新数组。
The bug is on this line. We're comparing a string with an integer. | /ðə bʌɡ ɪz ɑːn ðɪs laɪn wiːr kəmˈperɪŋ ə strɪŋ wɪð æn ˈɪntədʒər/ | 问题出在这一行，我们把字符串和整数做了比较。
```

```words
brute force | /bruːt fɔːrs/ | n. 暴力法 | The brute force solution checks every possible pair. | /ðə bruːt fɔːrs səˈluːʃən tʃeks ˈevəri ˈpɑːsəbəl per/ | 暴力解法会检查每一种可能的配对。
edge case | /edʒ keɪs/ | n. 边界情况 | We should test the edge case where the list is empty. | /wiː ʃʊd test ðə edʒ keɪs wer ðə lɪst ɪz ˈempti/ | 我们应该测试列表为空的边界情况。
trade-off | /treɪd ɔːf/ | n. 取舍，权衡 | There's a trade-off between speed and memory. | /ðerz ə treɪd ɔːf bɪˈtwiːn spiːd ənd ˈmeməri/ | 速度和内存之间要做取舍。
bottleneck | /ˈbɑːtəlˌnek/ | n. 瓶颈 | The database is the bottleneck in this design. | /ðə ˈdeɪtəˌbeɪs ɪz ðə ˈbɑːtəlˌnek ɪn ðɪs dɪˈzaɪn/ | 在这个设计中数据库是瓶颈。
complexity | /kəmˈpleksəti/ | n. 复杂度 | The time complexity is linear. | /ðə taɪm kəmˈpleksəti ɪz ˈlɪniər/ | 时间复杂度是线性的。
iterate | /ˈɪtəreɪt/ | v. 迭代，遍历 | We iterate over the list once. | /wiː ˈɪtəreɪt ˈoʊvər ðə lɪst wʌns/ | 我们把列表遍历一遍。
optimize | /ˈɑːptəˌmaɪz/ | v. 优化 | Can we optimize this to run in linear time? | /kæn wiː ˈɑːptəˌmaɪz ðɪs tuː rʌn ɪn ˈlɪniər taɪm/ | 我们能把它优化到线性时间吗？
recursion | /rɪˈkɜːrʒən/ | n. 递归 | The solution uses recursion with memoization. | /ðə səˈluːʃən ˈjuːsəz rɪˈkɜːrʒən wɪð ˌmemoʊɪˈzeɪʃən/ | 这个解法用了带记忆化的递归。
```

## 十、对话：三种典型的面试场景

### 对话一：编码题

```dialog
title: 编码题：两数之和
Interviewer: Given an array of numbers and a target, return the indices of two numbers that add up to the target. | /ˈɡɪvən æn ərˈeɪ ʌv ˈnʌmbərz ənd ə ˈtɑːrɡət rɪˈtɜːrn ðə ˈɪndɪˌsiːz ʌv tuː ˈnʌmbərz ðæt æd ʌp tuː ðə ˈtɑːrɡət/ | 给一个数组和一个目标值，返回两个相加等于目标值的数字的下标。
Candidate: Before I start, can I ask a few questions? Can the array have duplicates? | /bɪˈfɔːr aɪ stɑːrt kæn aɪ æsk ə fjuː ˈkwestʃənz kæn ðə ərˈeɪ hæv ˈdjuːpləˌkeɪts/ | 开始之前，我能问几个问题吗？数组里能有重复元素吗？
Interviewer: Yes, but you can't use the same element twice. | /jes bʌt juː kænt juːs ðə seɪm ˈeləmənt twaɪs/ | 可以，但同一个元素不能用两次。
Candidate: Got it. And is there always exactly one valid answer? | /ɡɑːt ɪt ənd ɪz ðer ˈɔːlˌweɪz ɪɡˈzæktli wʌn ˈvælɪd ˈænsər/ | 明白。是不是总是恰好有一个合法答案？
Interviewer: Yes, you can assume that. | /jes juː kæn əˈsuːm ðæt/ | 是的，你可以这么假设。
Candidate: My first thought is brute force, checking every pair. That's O of n squared. | /maɪ fɜːrst θɔːt ɪz bruːt fɔːrs ˈtʃekɪŋ ˈevəri per ðæts oʊ ʌv en skwerd/ | 我的第一个想法是暴力解，检查每一对，那是 O of n squared。
Candidate: We can do better with a hash map. For each number, I check if the target minus that number is already in the map. | /wiː kæn duː ˈbetər wɪð ə hæʃ mæp fɔːr iːtʃ ˈnʌmbər aɪ tʃek ɪf ðə ˈtɑːrɡət ˈmaɪnəs ðæt ˈnʌmbər ɪz ɔːlˈredi ɪn ðə mæp/ | 用哈希表可以更好：对每个数，检查目标值减去它是否已在表里。
Interviewer: Sounds good. What's the complexity? | /saʊndz ɡʊd wʌts ðə kəmˈpleksəti/ | 听起来不错，复杂度是多少？
Candidate: Linear time and linear space, since we visit each element once and store it in the map. | /ˈlɪniər taɪm ənd ˈlɪniər speɪs sɪns wiː ˈvɪzɪt iːtʃ ˈeləmənt wʌns ənd stɔːr ɪt ɪn ðə mæp/ | 线性时间和线性空间，因为每个元素只访问一次并存进表里。
Interviewer: Great. Go ahead and code it. | /ɡreɪt ɡoʊ əˈhed ənd koʊd ɪt/ | 很好，写代码吧。
Candidate: Done. Let me trace through an example, and then test an empty array. | /dʌn let miː treɪs θruː æn ɪɡˈzæmpəl ənd ðen test æn ˈempti ərˈeɪ/ | 写完了。我用一个例子走一遍，再测一下空数组。
```

### 对话二：系统设计

```dialog
title: 系统设计：短链接服务
Interviewer: Design a URL shortening service, like a simple link shortener. | /dɪˈzaɪn ə ˌjuːˌɑːˈrel ˈʃɔːrtənɪŋ ˈsɜːrvəs laɪk ə ˈsɪmpəl lɪŋk ˈʃɔːrtənər/ | 设计一个短链接服务。
Candidate: Sure. Let me start with the requirements. Users submit a long URL and get a short one back, right? | /ʃʊr let miː stɑːrt wɪð ðə rɪˈkwaɪrmənts ˈjuːzərz səbˈmɪt ə lɔːŋ ˌjuːˌɑːˈrel ənd ɡet ə ʃɔːrt wʌn bæk raɪt/ | 好的，先看需求。用户提交长链接，换回短链接，对吗？
Interviewer: Right. And the short link redirects to the original. | /raɪt ənd ðə ʃɔːrt lɪŋk ˌriːdərˈekts tuː ðə ərˈɪdʒənəl/ | 对，短链接要重定向到原链接。
Candidate: How many requests do we expect? And is it read-heavy? | /haʊ ˈmeni rɪˈkwests duː wiː ɪkˈspekt ənd ɪz ɪt red ˈhevi/ | 预计多少请求？是读多写少吗？
Interviewer: About one hundred million redirects a day, and writes are much fewer. | /əˈbaʊt wʌn ˈhʌndrəd ˈmɪljən ˌriːdərˈekts ə deɪ ənd raɪts ɑːr mʌtʃ ˈfjuːər/ | 每天大约一亿次重定向，写入要少得多。
Candidate: Then I'll optimize for reads. I'd put a cache like Redis in front of the database. | /ðen aɪl ˈɑːptəˌmaɪz fɔːr riːdz aɪd pʊt ə kæʃ laɪk ˈredɪs ɪn frʌnt ʌv ðə ˈdeɪtəˌbeɪs/ | 那我会针对读优化，在数据库前面放 Redis 这样的缓存。
Candidate: For the short code, I'd generate a unique ID and encode it in base sixty-two. | /fɔːr ðə ʃɔːrt koʊd aɪd ˈdʒenərˌeɪt ə juˈniːk ɪd ənd enˈkoʊd ɪt ɪn beɪs ˈsɪksti tuː/ | 短码方面，我会生成唯一 ID 并用六十二进制编码。
Interviewer: What if the ID service goes down? | /wʌt ɪf ðə ɪd ˈsɜːrvəs ɡoʊz daʊn/ | 如果 ID 服务挂了怎么办？
Candidate: Good question. We could pre-generate IDs in batches, so each server keeps a local range. | /ɡʊd ˈkwestʃən wiː kʊd priː ˈdʒenərˌeɪt ˈaɪˈdiːz ɪn ˈbætʃəz soʊ iːtʃ ˈsɜːrvər kiːps ə ˈloʊkəl reɪndʒ/ | 好问题。我们可以批量预生成 ID，每台服务器保留本地的一段区间。
Interviewer: Nice. Which part is the bottleneck? | /naɪs wɪtʃ pɑːrt ɪz ðə ˈbɑːtəlˌnek/ | 不错，哪个部分是瓶颈？
Candidate: Probably the database writes. If it grows, I'd shard by the short code. | /ˈprɑːbəˌbliː ðə ˈdeɪtəˌbeɪs raɪts ɪf ɪt ɡroʊz aɪd ʃɑːrd baɪ ðə ʃɔːrt koʊd/ | 可能是数据库写入。如果规模变大，我会按短码分片。
```

### 对话三：卡住后恢复

```dialog
title: 卡住了，求提示后恢复
Interviewer: How is it going? You've been quiet for a minute. | /haʊ ɪz ɪt ˈɡoʊɪŋ juːv bɪn ˈkwaɪət fɔːr ə ˈmɪnət/ | 进展怎么样？你已经安静一分钟了。
Candidate: Sorry, I'm a bit stuck. I'm trying to avoid checking every substring. | /ˈsɑːri aɪm ə bɪt stʌk aɪm ˈtraɪɪŋ tuː əˈvɔɪd ˈtʃekɪŋ ˈevəri ˈsʌbˌstrɪŋ/ | 抱歉，我有点卡住了，我想避免检查每个子串。
Interviewer: That's fine. Tell me what you're thinking. | /ðæts faɪn tel miː wʌt jʊr ˈθɪŋkɪŋ/ | 没关系，说说你的想法。
Candidate: I think I need to track characters I've already seen, but I'm not sure which structure to use. | /aɪ θɪŋk aɪ niːd tuː træk ˈkærəktərz aɪv ɔːlˈredi siːn bʌt aɪm nɑːt ʃʊr wɪtʃ ˈstrʌktʃər tuː juːs/ | 我觉得需要记录已经见过的字符，但不确定用什么结构。
Interviewer: What operation do you need to be fast? | /wʌt ˌɑːpərˈeɪʃən duː juː niːd tuː biː fæst/ | 你需要哪个操作很快？
Candidate: Checking whether a character is already in the window. So a set would work. | /ˈtʃekɪŋ ˈweðər ə ˈkerɪktər ɪz ɔːlˈredi ɪn ðə ˈwɪndoʊ soʊ ə set wʊd wɜːrk/ | 检查一个字符是否已在窗口里，所以用集合可以。
Interviewer: Exactly. How would you move the window? | /ɪɡˈzæktli haʊ wʊd juː muːv ðə ˈwɪndoʊ/ | 没错，窗口怎么移动？
Candidate: Thanks, that helps. I'd use two pointers and shrink from the left when I see a duplicate. | /θæŋks ðæt helps aɪd juːs tuː ˈpɔɪntərz ənd ʃrɪŋk frʌm ðə left wen aɪ siː ə ˈduːpləkət/ | 谢谢，很有帮助。我会用双指针，遇到重复时从左边收缩。
Interviewer: And the complexity? | /ənd ðə kəmˈpleksəti/ | 复杂度呢？
Candidate: Linear time, since each pointer moves at most n steps. | /ˈlɪniər taɪm sɪns iːtʃ ˈpɔɪntər muːvz æt moʊst en steps/ | 线性时间，因为每个指针最多移动 n 步。
```

> [!QUESTION] 想检验自己：拿到题目后，怎么礼貌地先问几个问题？
> ```phrases
> Before I start, can I ask a few clarifying questions? | /bɪˈfɔːr aɪ stɑːrt kæn aɪ æsk ə fjuː ˈklerəˌfaɪɪŋ ˈkwestʃənz/ | 开始之前，我能先问几个澄清问题吗？
> ```

> [!QUESTION] 想检验自己：怎么用英文说「时间复杂度是线性的，因为每个元素只访问一次」？
> ```phrases
> The time complexity is O of n, since we visit each element once. | /ðə taɪm kəmˈpleksəti ɪz oʊ ʌv en sɪns wiː ˈvɪzɪt iːtʃ ˈeləmənt wʌns/ | 时间复杂度是 O of n，因为每个元素只访问一次。
> ```

> [!QUESTION] 想检验自己：不会某个知识点，怎么说既诚实又不丢分？
> ```phrases
> I haven't worked with that directly, but here's how I'd reason about it. | /aɪ ˈhævənt wɜːrkt wɪð ðæt dərˈektli bʌt hɪrz haʊ aɪd ˈriːzən əˈbaʊt ɪt/ | 我没直接用过，但我会这样推理。
> ```

> [!QUESTION] 想检验自己：卡住了，怎么向面试官求提示？
> ```phrases
> I'm a bit stuck here. Could I get a small hint? | /aɪm ə bɪt stʌk hiːr kʊd aɪ ɡet ə smɔːl hɪnt/ | 我在这里有点卡住了，能给个小提示吗？
> ```
