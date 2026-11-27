# IT English Notes · IT 英语口语笔记

写给 IT 从业者的英语交流手册：从音标与日常问候起步，到站会、邮件、Code Review、线上故障和技术面试。每个词、每句话都能一键看英文、看音标、听发音，还能遮住英文自测。

## 内容

| 分类 | 覆盖 |
| --- | --- |
| 入门基础 | 怎么用本站、48 个音标、IT 缩写 / 符号 / 数字怎么读、问候与自我介绍、办公室闲聊、没听清怎么说、请求感谢道歉 |
| 职场沟通 | 每日站会、进度汇报、会议发言、视频会议、工作邮件、Slack 与即时消息、请假与异步协作、英文面试（自我介绍、行为面试、技术面试） |
| IT 词汇与场景 | 开发 / 后端与数据库 / 网络安全云 / DevOps / 敏捷五类核心词汇、高频动词与搭配，Code Review、Git、Bug、线上故障、需求估算、技术方案讨论 |
| 深入进阶 | 委婉表达、技术分享、谈判与说不、习语与短语动词、技术写作、事后复盘、跨文化协作、绩效与职业发展 |

## 页面上的三种卡片

- **词句卡**：中文在上，英文 + 音标默认模糊，点右侧 **EN** 或点模糊文字即可显示；喇叭朗读。
- **单词卡**：单词 + 音标 + 词性释义 + IT 场景例句（例句有自己的喇叭）。
- **对话卡**：左右气泡，「播放整段对话」两位说话人用不同声音依次朗读。

顶部工具条可一次性显示 / 遮住英文、音标、中文，调语速、换声音。设置保存在浏览器里。朗读用的是浏览器自带的语音合成（推荐 Edge，声音最自然），不需要联网下载音频。

## 本地预览

页面通过 `fetch` 加载 Markdown，需要本地静态服务器：

```bash
python -m http.server 8000
```

然后打开 http://localhost:8000 。纯静态站点，无构建步骤。

## 写作与工具

写作格式见 [WRITING_GUIDE.md](WRITING_GUIDE.md)。词句只写 `英文 | 中文 | 备注`，**音标由工具生成**：

```bash
python tools/ipa.py            # 给缺音标的词句补上 /…/（美式）；末尾列出词典查不到的词
python tools/ipa.py --redo     # 改了覆盖词表后，全部重算
python tools/ipa.py --say "Could you review my pull request?"   # 看某句话的音标
python tools/check.py          # 校验页面登记、格式、音标、链接、搜索索引
python tools/build_index.py    # 重建搜索索引
```

音标来自 CMU Pronouncing Dictionary（`tools/data/cmudict.dict`，许可见 `tools/data/CMUDICT-LICENSE`）转换成美式 IPA；IT 术语和词典里没有的词放在 `tools/data/ipa_overrides*.json`。生成的是词典读音，不体现连读弱读，学习时以朗读按钮为准。

修改 `assets/app.js`、`assets/nav.js`、`assets/style.css` 后，记得把 `index.html` 里对应的 `?v=` 版本号加一，避免浏览器缓存旧文件。
