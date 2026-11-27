// 学习目录
// 顶层是「大分类」（显示为顶部标签），children 可嵌套；叶子节点 path 对应 docs/<path>.md
window.NAV = [
  {
    id: 'start', title: '入门基础', desc: '音标、读音规则、问候与基础句型，从零开始也不怕',
    children: [
      {
        title: '起步', children: [
          { title: '先看这里：怎么用这个站学英语', path: 'start/how-to' },
          { title: '音标速成：48 个音与常用词', path: 'start/ipa' },
          { title: '单词怎么读：缩写、符号与数字', path: 'start/it-pronounce' }
        ]
      },
      {
        title: '基础交流', children: [
          { title: '问候、自我介绍与寒暄', path: 'start/greetings' },
          { title: '办公室闲聊 Small Talk', path: 'start/smalltalk' },
          { title: '没听清、没听懂时怎么说', path: 'start/clarify' },
          { title: '请求、感谢与道歉', path: 'start/polite-basic' }
        ]
      }
    ]
  },
  {
    id: 'daily', title: '日常生活', desc: '起床、家务、做饭、吃饭、购物、天气、时间与钱',
    children: [
      {
        title: '居家日常', children: [
          { title: '起床、洗漱与一天安排', path: 'daily/routine' },
          { title: '家务与家居整理', path: 'daily/home' },
          { title: '厨房与做饭', path: 'daily/cooking' },
          { title: '点餐、吃饭与结账', path: 'daily/food' }
        ]
      },
      {
        title: '生活琐事', children: [
          { title: '超市购物与买菜', path: 'daily/groceries' },
          { title: '买衣服与试穿', path: 'daily/clothes' },
          { title: '天气、季节与温度', path: 'daily/weather' },
          { title: '时间、日期与守时', path: 'daily/time' },
          { title: '付钱、转账与省钱', path: 'daily/money' },
          { title: '快递、物业与邻居', path: 'daily/neighbors' }
        ]
      }
    ]
  },
  {
    id: 'social', title: '人际社交', desc: '邀约、情绪、赞美、安慰、道歉、电话与社交媒体',
    children: [
      {
        title: '与人相处', children: [
          { title: '聚会破冰与闲聊', path: 'social/party' },
          { title: '邀请、约定与改期', path: 'social/invite' },
          { title: '表达心情与情绪', path: 'social/feelings' },
          { title: '赞美、感谢与安慰', path: 'social/compliment' },
          { title: '不同意见、道歉与和好', path: 'social/apology' }
        ]
      },
      {
        title: '沟通方式', children: [
          { title: '打电话与留口信', path: 'social/phone' },
          { title: '社交媒体与消息回复', path: 'social/messages' }
        ]
      }
    ]
  },
  {
    id: 'travel', title: '出行旅行', desc: '问路、公交地铁、机场、酒店与旅行中的突发状况',
    children: [
      {
        title: '城市出行', children: [
          { title: '问路与指路', path: 'travel/directions' },
          { title: '公交、地铁与打车', path: 'travel/transport' }
        ]
      },
      {
        title: '旅行场景', children: [
          { title: '机场值机与安检', path: 'travel/airport' },
          { title: '飞机上与转机', path: 'travel/flight' },
          { title: '酒店入住与退房', path: 'travel/hotel' },
          { title: '旅行中的突发状况', path: 'travel/trouble' }
        ]
      }
    ]
  },
  {
    id: 'health', title: '健康生活', desc: '看医生、买药、健身、饮食与情绪健康',
    children: [
      {
        title: '生病时', children: [
          { title: '看医生与描述症状', path: 'health/doctor' },
          { title: '买药与说明用法', path: 'health/pharmacy' }
        ]
      },
      {
        title: '日常健康', children: [
          { title: '健身与运动', path: 'health/fitness' },
          { title: '饮食与睡眠', path: 'health/diet' },
          { title: '压力与情绪健康', path: 'health/mind' }
        ]
      }
    ]
  },
  {
    id: 'words', title: '主题词汇', desc: '按主题积累单词与搭配，动词、形容词、食物、家居、出行、情绪',
    children: [
      {
        title: '高频词', children: [
          { title: '日常高频动词', path: 'words/verbs' },
          { title: '日常高频形容词', path: 'words/adjectives' }
        ]
      },
      {
        title: '生活词汇', children: [
          { title: '食物与烹饪词汇', path: 'words/food' },
          { title: '家居与家电词汇', path: 'words/home' },
          { title: '出行与地点词汇', path: 'words/places' },
          { title: '情绪与性格词汇', path: 'words/emotions' }
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
    id: 'tech', title: 'IT 英语', desc: 'IT 核心词汇，以及代码评审、故障、方案讨论等技术场景',
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
    id: 'adv', title: '深入进阶', desc: '委婉表达、分享演示、谈判、习语与跨文化沟通',
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
