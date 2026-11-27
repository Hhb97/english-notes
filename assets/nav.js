// 学习目录
// 顶层是「大分类」（显示为顶部标签），children 可嵌套；叶子节点 path 对应 docs/<path>.md
window.NAV = [
  {
    id: 'start', title: '入门基础', desc: '音标发音、IT 词汇读法、问候与日常基础句型',
    children: [
      {
        title: '起步', children: [
          { title: '先看这里：怎么用这个站学英语', path: 'start/how-to' },
          { title: '音标速成：48 个音与 IT 常用词', path: 'start/ipa' },
          { title: 'IT 词汇怎么读：缩写、符号与数字', path: 'start/it-pronounce' }
        ]
      },
      {
        title: '日常交流', children: [
          { title: '问候、自我介绍与寒暄', path: 'start/greetings' },
          { title: '办公室闲聊 Small Talk', path: 'start/smalltalk' },
          { title: '没听清、没听懂时怎么说', path: 'start/clarify' },
          { title: '请求、感谢与道歉', path: 'start/polite-basic' }
        ]
      }
    ]
  },
  {
    id: 'work', title: '职场沟通', desc: '站会、汇报、会议、邮件、即时消息与面试',
    children: [
      {
        title: '会议', children: [
          { title: '每日站会 Daily Standup', path: 'work/standup' },
          { title: '进度汇报与同步', path: 'work/status' },
          { title: '会议发言：提问、插话与表达观点', path: 'work/meeting-speak' },
          { title: '视频会议常用语', path: 'work/remote-meeting' }
        ]
      },
      {
        title: '书面沟通', children: [
          { title: '工作邮件', path: 'work/email' },
          { title: 'Slack 与即时消息', path: 'work/chat' },
          { title: '请假、改期与异步协作', path: 'work/leave-async' }
        ]
      },
      {
        title: '面试', children: [
          { title: '英文自我介绍与项目经历', path: 'work/interview-intro' },
          { title: '行为面试：用 STAR 讲故事', path: 'work/interview-behavior' },
          { title: '技术面试：边想边说', path: 'work/interview-tech' }
        ]
      }
    ]
  },
  {
    id: 'tech', title: 'IT 词汇与场景', desc: 'IT 核心词汇，以及代码评审、故障、方案讨论等工作场景',
    children: [
      {
        title: '核心词汇', children: [
          { title: '软件开发基础词汇', path: 'tech/vocab-dev' },
          { title: '后端与数据库词汇', path: 'tech/vocab-backend' },
          { title: '网络、安全与云词汇', path: 'tech/vocab-cloud' },
          { title: 'DevOps 与运维词汇', path: 'tech/vocab-devops' },
          { title: '敏捷与项目管理词汇', path: 'tech/vocab-agile' },
          { title: '技术场景高频动词与搭配', path: 'tech/verbs' }
        ]
      },
      {
        title: '工作场景', children: [
          { title: 'Code Review 怎么说', path: 'tech/code-review' },
          { title: 'Git 与协作流程', path: 'tech/git' },
          { title: 'Bug 报告与排查沟通', path: 'tech/bug' },
          { title: '线上故障沟通', path: 'tech/incident' },
          { title: '需求澄清与工作量估算', path: 'tech/estimate' },
          { title: '技术方案讨论', path: 'tech/design-discuss' }
        ]
      }
    ]
  },
  {
    id: 'adv', title: '深入进阶', desc: '委婉表达、技术分享、谈判、习语，以及书面与跨文化沟通',
    children: [
      {
        title: '表达升级', children: [
          { title: '委婉表达与高情商沟通', path: 'adv/tone' },
          { title: '技术分享与演示', path: 'adv/presentation' },
          { title: '谈判：争取资源与礼貌说不', path: 'adv/negotiate' },
          { title: 'IT 职场习语与短语动词', path: 'adv/idioms' }
        ]
      },
      {
        title: '书面深入', children: [
          { title: '技术文档、PR 描述与 commit 信息', path: 'adv/tech-writing' },
          { title: '事后复盘文档 Postmortem', path: 'adv/postmortem' }
        ]
      },
      {
        title: '软技能', children: [
          { title: '远程与跨文化协作', path: 'adv/cross-culture' },
          { title: '绩效面谈与职业发展', path: 'adv/career' }
        ]
      }
    ]
  }
];
