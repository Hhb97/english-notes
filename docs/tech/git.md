---
level: 进阶
summary: 把 commit、rebase、merge、cherry-pick、force push 等 Git 操作和 PR 流程用地道英文说出来，含冲突、误推送、发布分支三段对话。
tags: [Git, 分支, PR, 合并冲突, 协作, 进阶]
---

# Git 与协作流程

> [!ABSTRACT]
> - Git 命令在口语里既是名词也是动词：**I'll rebase onto main**、**Let me cherry-pick that commit**、**I force-pushed by mistake**。
> - 协作时常说三类话：**告知**（我要做什么）、**请求**（请你做什么）、**认错**（我不小心做了什么）。
> - 读命令的惯例：`git pull` 读 "git pull"，`origin/main` 读 "origin main" 或 "origin slash main"，`HEAD` 读 "head"。
> - 出了事故先说事实，再说影响和补救：**I accidentally pushed to main. I'm reverting it now.**

## 一、基本操作怎么说

多数 Git 动词既可以单独说，也可以带上分支名。注意过去式：push - pushed、pull - pulled、commit - committed。

```phrases
I'll commit my changes and push them. | /aɪl kəˈmɪt maɪ ˈtʃeɪndʒəz ənd pʊʃ ðem/ | 我提交改动然后推送。
I just pushed a fix to the feature branch. | /aɪ dʒʌst pʊʃt ə fɪks tuː ðə ˈfiːtʃər bræntʃ/ | 我刚往功能分支推了一个修复。
Let me pull the latest changes first. | /let miː pʊl ðə ˈleɪtəst ˈtʃeɪndʒəz fɜːrst/ | 我先拉一下最新代码。
I need to fetch before I can see your branch. | /aɪ niːd tuː fetʃ bɪˈfɔːr aɪ kæn siː jɔːr bræntʃ/ | 我得先 fetch 才能看到你的分支。 | fetch 只下载不合并，pull 等于 fetch 加 merge
Let me stash my changes and switch branches. | /let miː stæʃ maɪ ˈtʃeɪndʒəz ənd swɪtʃ ˈbræntʃəz/ | 我先把改动 stash 起来，再切换分支。 | stash 是名词也是动词，暂存未提交的改动
I'll create a new branch off main. | /aɪl kriˈeɪt ə nuː bræntʃ ɔːf meɪn/ | 我从 main 拉一个新分支。 | off main = 以 main 为起点
Could you check out my branch and run the tests? | /kʊd juː tʃek aʊt maɪ bræntʃ ənd rʌn ðə tests/ | 你能切到我的分支跑一下测试吗？ | check out 是动词短语，checkout 是名词
Let me amend the commit message. | /let miː əˈmend ðə kəˈmɪt ˈmesədʒ/ | 我来改一下 commit 信息。
I tagged the release as version two point one. | /aɪ tæɡd ðə riˈliːs æz ˈvɜːrʒən tuː pɔɪnt wʌn/ | 我给这个发布打了标签，版本二点一。 | 版本号写成英文读法，见页面规范
```

## 二、合并、变基、拣选

merge、rebase、cherry-pick 是最容易讲不清的三个。先说你做了什么，再说原因。

```phrases
I'll merge main into my branch. | /aɪl mɜːrdʒ meɪn ˈɪntu maɪ bræntʃ/ | 我把 main 合并到我的分支里。
I'll rebase onto main before opening the PR. | /aɪl riːˈbeɪs ˈɑːntu meɪn bɪˈfɔːr ˈoʊpənɪŋ ðə ˌpiː ˈɑːr/ | 提 PR 之前我会先 rebase 到 main 上。 | rebase onto = 把我的提交挪到 main 最新提交的后面
Let me cherry-pick that fix onto the release branch. | /let miː ˈtʃeri pɪk ðæt fɪks ˈɑːntu ðə riˈliːs bræntʃ/ | 我把那个修复 cherry-pick 到发布分支。 | cherry-pick = 只挑某个提交过来
Could you squash your commits before merging? | /kʊd juː skwɑːʃ jɔːr kəˈmɪts bɪˈfɔːr ˈmɜːrdʒɪŋ/ | 合并前你能把 commit squash 一下吗？ | squash = 压成一个提交，保持历史干净
We usually squash and merge. | /wiː ˈjuːʒəwəli skwɑːʃ ənd mɜːrdʒ/ | 我们一般用 squash and merge。
Do we prefer merge commits or rebasing? | /duː wiː prəˈfɜːr mɜːrdʒ kəˈmɪts ɔːr riːˈbeɪsɪŋ/ | 我们更倾向用 merge commit 还是 rebase？
I'd rather rebase to keep the history linear. | /aɪd ˈræðər riːˈbeɪs tuː kiːp ðə ˈhɪstəri ˈlɪniər/ | 我更想 rebase，让历史保持线性。
Please don't rebase a shared branch. | /pliːz doʊnt riːˈbeɪs ə ʃerd bræntʃ/ | 请不要对共用分支做 rebase。 | rebase 会改写历史，会让别人的本地分支对不上
This commit needs to be reverted. | /ðɪs kəˈmɪt niːdz tuː biː rɪˈvɜːrtɪd/ | 这个 commit 需要回滚。 | revert 是生成一个反向提交，不改写历史
```

## 三、冲突与强制推送

```phrases
I have a merge conflict in the config file. | /aɪ hæv ə mɜːrdʒ ˈkɑːnflɪkt ɪn ðə ˈkɑːnfɪɡ faɪl/ | 我在配置文件里有个合并冲突。
Could you resolve the merge conflicts on your branch? | /kʊd juː riˈzɑːlv ðə mɜːrdʒ kənˈflɪkts ɑːn jɔːr bræntʃ/ | 你能解决一下你分支上的合并冲突吗？ | 请别人处理冲突的标准说法
We both changed the same function, so Git can't merge it automatically. | /wiː boʊθ tʃeɪndʒd ðə seɪm ˈfʌŋkʃən soʊ ɡɪt kænt mɜːrdʒ ɪt ˌɔːtəˈmætɪkli/ | 我们俩改了同一个函数，所以 Git 没法自动合并。
Let me resolve the conflicts and push again. | /let miː riˈzɑːlv ðə kənˈflɪkts ənd pʊʃ əˈɡen/ | 我来解决冲突，再推一次。
I resolved the conflict by keeping both changes. | /aɪ riˈzɑːlvd ðə ˈkɑːnflɪkt baɪ ˈkiːpɪŋ boʊθ ˈtʃeɪndʒəz/ | 我把两边的改动都保留来解决冲突。
I'll force push after the rebase. | /aɪl fɔːrs pʊʃ ˈæftər ðə riːˈbeɪs/ | rebase 之后我会 force push。 | 只对自己的分支这样做
Please use force-with-lease instead of a plain force push. | /pliːz juːs fɔːrs wɪð liːs ˌɪnˈsted ʌv ə pleɪn fɔːrs pʊʃ/ | 请用 force-with-lease，不要直接 force push。 | force-with-lease 在远端有别人新提交时会拒绝，更安全
Heads up, I'm about to force push to my feature branch. | /hedz ʌp aɪm əˈbaʊt tuː fɔːrs pʊʃ tuː maɪ ˈfiːtʃər bræntʃ/ | 提醒一下，我要对我的功能分支 force push 了。 | heads up = 提前打个招呼
```

> [!CAUTION] 千万别这样说
> **"I will cover your commit."** 想说「覆盖了你的提交」，要用 **overwrite**：**"I overwrote your commit by mistake."**
> 同理，「合并」不要说 combine the branch，说 **merge the branch**；「回退版本」用 **revert** 或 **roll back**，不要说 return back。

## 四、出了事故：说事实，说补救

```phrases
I accidentally pushed to main. | /aɪ ˌæksəˈdentəli pʊʃt tuː meɪn/ | 我不小心推到了 main。
I pushed my changes to the wrong branch. | /aɪ pʊʃt maɪ ˈtʃeɪndʒəz tuː ðə rɔːŋ bræntʃ/ | 我把改动推错分支了。
I committed a secret key by mistake. I'm rotating it now. | /aɪ kəˈmɪtɪd ə ˈsiːkrət kiː baɪ mɪˈsteɪk aɪm ˈroʊˌteɪtɪŋ ɪt naʊ/ | 我误提交了密钥，正在更换。
Sorry, I broke the build on main. I'm reverting now. | /ˈsɑːri aɪ broʊk ðə bɪld ɑːn meɪn aɪm rɪˈvɜːrtɪŋ naʊ/ | 抱歉，我把 main 的构建弄坏了，正在回滚。
Please don't merge anything until I fix this. | /pliːz doʊnt mɜːrdʒ ˈeniˌθɪŋ ənˈtɪl aɪ fɪks ðɪs/ | 我修好之前请先别合并任何东西。
It's fixed now. You can pull again. | /ɪts fɪkst naʊ juː kæn pʊl əˈɡen/ | 已经修好了，你可以重新拉了。
I lost some commits after the rebase. Can anyone help? | /aɪ lɔːst sʌm kəˈmɪts ˈæftər ðə riːˈbeɪs kæn ˈeniˌwʌn help/ | rebase 之后我丢了几个 commit，有人能帮忙吗？ | 求助时先说清楚发生了什么
You can recover it from the reflog. | /juː kæn rɪˈkʌvər ɪt frʌm ðə ˈrefˌlɔːɡ/ | 你可以从 reflog 里找回来。 | reflog 读 "ref log"
```

> [!TIP] 犯错之后的三句话
> 美国团队不喜欢隐瞒。发现问题马上说：**1) What happened**（发生了什么）；**2) What's the impact**（影响是什么）；**3) What I'm doing about it**（我在做什么）。

## 五、分支策略：功能、发布、热修复

```phrases
Every feature gets its own branch. | /ˈevəri ˈfiːtʃər ɡets ɪts oʊn bræntʃ/ | 每个功能都有自己的分支。
We branch off main for new features. | /wiː bræntʃ ɔːf meɪn fɔːr nuː ˈfiːtʃərz/ | 新功能从 main 拉分支。
We cut a release branch every two weeks. | /wiː kʌt ə riˈliːs bræntʃ ˈevəri tuː wiːks/ | 我们每两周切一次发布分支。 | cut a branch = 切出一个分支
Only bug fixes go into the release branch. | /ˈoʊnli bʌɡ ˈfɪksɪz ɡoʊ ˈɪntu ðə riˈliːs bræntʃ/ | 发布分支只收 bug 修复。
We need a hotfix for production. | /wiː niːd ə ˈhɑːtfɪks fɔːr prəˈdʌkʃən/ | 我们需要给生产环境打一个热修复。
I'll branch the hotfix from the latest tag. | /aɪl bræntʃ ðə ˈhɑːtfɪks frʌm ðə ˈleɪtəst tæɡ/ | 我从最新的 tag 拉热修复分支。
Don't forget to merge the hotfix back into main. | /doʊnt fərˈɡet tuː mɜːrdʒ ðə ˈhɑːtfɪks bæk ˈɪntu meɪn/ | 别忘了把热修复合并回 main。
```

## 六、PR 流程与审批

```phrases
I opened a pull request for the login fix. | /aɪ ˈoʊpənd ə pʊl rɪˈkwest fɔːr ðə ˈlɔːˌɡɪn fɪks/ | 我为登录修复开了一个 pull request。
The PR needs two approvals before it can be merged. | /ðə ˌpiː ˈɑːr niːdz tuː əˈpruːvəlz bɪˈfɔːr ɪt kæn biː mɜːrdʒd/ | 这个 PR 合并前需要两个批准。
Branch protection won't let me push directly to main. | /bræntʃ prəˈtekʃən woʊnt let miː pʊʃ dərˈektli tuː meɪn/ | 分支保护不允许我直接推到 main。
The CI check failed. Could you take a look? | /ðə siː aɪ tʃek feɪld kʊd juː teɪk ə lʊk/ | CI 检查失败了，你能看看吗？
Let me rebase and re-run the pipeline. | /let miː riːˈbeɪs ənd reɪ rʌn ðə ˈpaɪˌplaɪn/ | 我 rebase 一下，重新跑流水线。
```

## 七、口头怎么读 Git 命令

开会或结对时要把命令念出来。命令名按单词读，分支名照读，符号一般省略。

```phrases
Run git status to see what changed. | /rʌn ɡɪt ˈstætəs tuː siː wʌt tʃeɪndʒd/ | 运行 git status 看看有什么改动。
Try git pull origin main. | /traɪ ɡɪt pʊl ˈɔːrədʒən meɪn/ | 试试 git pull origin main。 | origin 读 "origin"，main 读 "main"
Run git log and look for the commit hash. | /rʌn ɡɪt lɔːɡ ənd lʊk fɔːr ðə kəˈmɪt hæʃ/ | 运行 git log，找一下 commit 的哈希值。 | hash 读 "hash"
Use git rebase main, then git push with force-with-lease. | /juːs ɡɪt riːˈbeɪs meɪn ðen ɡɪt pʊʃ wɪð fɔːrs wɪð liːs/ | 先 git rebase main，再用 force-with-lease 推送。
```

## 八、对话

```dialog
title: 合并冲突
Ken: Hey Mia, your PR has merge conflicts with main. | /heɪ ˈmiːə jɔːr ˌpiː ˈɑːr hæz mɜːrdʒ kənˈflɪkts wɪð meɪn/ | 嗨 Mia，你的 PR 和 main 有合并冲突。
Mia: Oh, I didn't notice. Which files? | /oʊ aɪ ˈdɪdənt ˈnoʊtəs wɪtʃ faɪlz/ | 哦，我没注意到，是哪些文件？
Ken: The config file and the user service. We both touched them. | /ðə ˈkɑːnfɪɡ faɪl ənd ðə ˈjuːzər ˈsɜːrvəs wiː boʊθ tʌtʃt ðem/ | 配置文件和用户服务，我们俩都改了。
Mia: Sorry. I'll rebase onto main and resolve them. | /ˈsɑːri aɪl riːˈbeɪs ˈɑːntu meɪn ənd riˈzɑːlv ðem/ | 抱歉，我 rebase 到 main 上解决冲突。
Ken: Please keep my change in the config. It fixes a timeout. | /pliːz kiːp maɪ tʃeɪndʒ ɪn ðə ˈkɑːnfɪɡ ɪt ˈfɪksɪz ə ˈtaɪˌmaʊt/ | 配置文件请保留我的改动，那个修复了超时问题。
Mia: Will do. Should I squash the commits too? | /wɪl duː ʃʊd aɪ skwɑːʃ ðə kəˈmɪts tuː/ | 好的，要不要把 commit 也 squash 一下？
Ken: Yes, please. Then force push and ping me. | /jes pliːz ðen fɔːrs pʊʃ ənd pɪŋ miː/ | 要，然后 force push 再叫我。
Mia: Done. It's updated, and CI is running. | /dʌn ɪts əpˈdeɪtɪd ənd siː aɪ ɪz ˈrʌnɪŋ/ | 好了，已更新，CI 在跑。
```

```dialog
title: 不小心推到了 main
Sam: Quick heads up. I accidentally pushed to main. | /kwɪk hedz ʌp aɪ ˌæksəˈdentəli pʊʃt tuː meɪn/ | 提醒一下，我不小心推到了 main。
Lead: What did you push? | /wʌt dɪd juː pʊʃ/ | 你推了什么？
Sam: A half-finished change to the payment code. It hasn't been deployed yet. | /ə hæf ˈfɪnɪʃt tʃeɪndʒ tuː ðə ˈpeɪmənt koʊd ɪt ˈhæzənt bɪn dɪˈplɔɪd jet/ | 支付代码里一个没写完的改动，还没部署。
Lead: Okay. Can you revert it? | /ˌoʊˈkeɪ kæn juː rɪˈvɜːrt ɪt/ | 好的，你能把它 revert 吗？
Sam: Yes. I'm creating the revert commit now. | /jes aɪm kriˈeɪtɪŋ ðə rɪˈvɜːrt kəˈmɪt naʊ/ | 能，我正在创建 revert 提交。
Lead: Don't force push. Others may have pulled already. | /doʊnt fɔːrs pʊʃ ˈʌðərz meɪ hæv pʊld ɔːlˈredi/ | 别 force push，别人可能已经拉过了。
Sam: Right. I'll send a message to the team once it's reverted. | /raɪt aɪl send ə ˈmesədʒ tuː ðə tiːm wʌns ɪts rɪˈvɜːrtɪd/ | 对，revert 完我会通知团队。
Lead: Good. And let's turn on branch protection for main. | /ɡʊd ənd lets tɜːrn ɑːn bræntʃ prəˈtekʃən fɔːr meɪn/ | 好，我们也给 main 开启分支保护。
```

```dialog
title: 发布分支和热修复
Anna: Are we ready to cut the release branch? | /ɑːr wiː ˈredi tuː kʌt ðə riˈliːs bræntʃ/ | 我们准备好切发布分支了吗？
Tom: Almost. Two PRs are still waiting for approval. | /ˈɔːlˌmoʊst tuː ˌpiː ˈɑːrz ɑːr stɪl ˈweɪtɪŋ fɔːr əˈpruːvəl/ | 差不多了，还有两个 PR 在等批准。
Anna: Let's merge them today and cut it tomorrow morning. | /lets mɜːrdʒ ðem təˈdeɪ ənd kʌt ɪt təˈmɑːˌroʊ ˈmɔːrnɪŋ/ | 今天合了它们，明天早上切分支。
Tom: Sounds good. What about the bug in checkout? | /saʊndz ɡʊd wʌt əˈbaʊt ðə bʌɡ ɪn ˈtʃeˌkaʊt/ | 好的，结账那个 bug 怎么办？
Anna: I'll fix it on main, then cherry-pick it onto the release branch. | /aɪl fɪks ɪt ɑːn meɪn ðen ˈtʃeri pɪk ɪt ˈɑːntu ðə riˈliːs bræntʃ/ | 我在 main 上修，然后 cherry-pick 到发布分支。
Tom: Should we tag the release candidate after that? | /ʃʊd wiː tæɡ ðə riˈliːs ˈkændədeɪt ˈæftər ðæt/ | 之后要给候选版本打标签吗？
Anna: Yes. I'll tag it and tell QA to start testing. | /jes aɪl tæɡ ɪt ənd tel kjuː eɪ tuː stɑːrt ˈtestɪŋ/ | 要，我来打标签，通知 QA 开始测试。
```

> [!QUESTION] 想检验自己：你推送被拒绝，因为远端有新提交，怎么对同事说明并说出你的计划？
> ```phrases
> My push was rejected because main has new commits. I'll pull and rebase first. | /maɪ pʊʃ wɑːz rɪˈdʒektɪd bɪˈkɔːz meɪn hæz nuː kəˈmɪts aɪl pʊl ənd riːˈbeɪs fɜːrst/ | 我的推送被拒绝了，因为 main 有新提交，我先 pull 再 rebase。
> ```

> [!QUESTION] 想检验自己：怎么请同事在合并前把一堆零碎 commit 合成一个？
> ```phrases
> Could you squash your commits before we merge? | /kʊd juː skwɑːʃ jɔːr kəˈmɪts bɪˈfɔːr wiː mɜːrdʒ/ | 合并前你能把 commit squash 成一个吗？
> ```

> [!QUESTION] 想检验自己：你把 bug 修复提交到了 main，现在要把它同步到发布分支，怎么说？
> ```phrases
> I'll cherry-pick the fix onto the release branch. | /aɪl ˈtʃeri pɪk ðə fɪks ˈɑːntu ðə riˈliːs bræntʃ/ | 我把这个修复 cherry-pick 到发布分支。
> ```
