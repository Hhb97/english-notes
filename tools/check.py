#!/usr/bin/env python3
"""内容校验：在仓库根目录运行 `python tools/check.py`。

检查项：nav.js 登记的页面都有 .md、front matter（level / summary）、单一 H1 且与导航标题一致、
词句 / 单词 / 对话块的格式（有音标、有中文、英文字段不含中文、音标里没有漏掉的字母）、
英文词是否都能在词典里查到音标、站内链接是否有效、搜索索引是否最新、docs 下是否有未登记（孤儿）页面。
发现问题时以非零状态退出。
"""
import json
import pathlib
import re
import sys

for _s in (sys.stdout, sys.stderr):
    if hasattr(_s, 'reconfigure'):
        _s.reconfigure(encoding='utf-8')

ARGS = [a for a in sys.argv[1:] if not a.startswith('--')]
ONLY = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--only=')), None)   # 只检查某个前缀的页面，如 --only=work/
root = pathlib.Path(ARGS[0] if ARGS else '.').resolve()
sys.path.insert(0, str(root / 'tools'))
import build_index  # noqa: E402
import ipa  # noqa: E402

nav = (root / 'assets' / 'nav.js').read_text(encoding='utf-8')
entries = re.findall(r"title: '([^']+)', path: '([^']+)'", nav)
paths = [p for _, p in entries]
valid = set(paths) | {'index'}
if ONLY:
    entries = [(a, b) for a, b in entries if b.startswith(ONLY)]
problems = []
LEVELS = {'入门', '进阶', '深入'}
CJK = re.compile(r'[\u4e00-\u9fff]')
IPA_OK = re.compile(r"^/[a-zɑæʌɔəɛɚɜɪʊʃʒθðŋɡːˈˌ ]+/$")
SPEAKER = re.compile(r'^([A-Za-z][\w .]{0,18}):\s+')
OPEN = re.compile(r'^((?:>\s?)*)```(phrases|words|dialog)\s*$')
CLOSE = re.compile(r'^(?:>\s?)*```\s*$')
tot_items = tot_dialogs = tot_q = tot_chars = 0

if len(paths) != len(set(paths)):
    problems.append('nav.js 中存在重复 path')


def check_ipa(where, en, field, unknown):
    if not ipa.IPA_RE.match(field or ''):
        problems.append(f'{where}: 缺音标 ——「{en[:40]}」（运行 python tools/ipa.py 补全）')
        return
    if not IPA_OK.match(field):
        problems.append(f'{where}: 音标里有非法字符 {field[:60]}')
    ipa.ipa_for(en, unknown)


def check_block(p, n, kind, lines, unknown):
    """lines: [(行号, 文本)]"""
    global tot_items
    for ln, raw in lines:
        s = re.sub(r'^(?:>\s?)*', '', raw).strip()
        if not s or s.startswith('#'):
            continue
        where = f'{p}.md:{ln}'
        if kind == 'dialog' and re.match(r'^title:', s, re.I):
            continue
        tot_items += 1
        f = [x.strip() for x in s.split(' | ')]
        if kind == 'dialog':
            m = SPEAKER.match(f[0])
            if not m:
                problems.append(f'{where}: 对话行缺少「说话人: 」前缀')
                continue
            f[0] = f[0][m.end():]
        if len(f) < 3:
            problems.append(f'{where}: 字段不足（英文 | /音标/ | 中文）：{s[:50]}')
            continue
        en, ip, zh = f[0], f[1], f[2]
        if CJK.search(en):
            problems.append(f'{where}: 英文字段里含中文：{en[:40]}')
        if not CJK.search(zh) and not re.search(r'[\u4e00-\u9fff]', ''.join(f[2:3])):
            problems.append(f'{where}: 第三个字段应是中文释义：{zh[:40]}')
        check_ipa(where, en, ip, unknown)
        if kind == 'words' and len(f) > 3:
            if len(f) != 6:
                problems.append(f'{where}: words 行应是 单词 | /音标/ | 中文 | 例句 | /音标/ | 例句中文（共 6 段），现为 {len(f)} 段')
            else:
                if CJK.search(f[3]):
                    problems.append(f'{where}: 例句字段里含中文')
                check_ipa(where, f[3], f[4], unknown)
                if not CJK.search(f[5]):
                    problems.append(f'{where}: 例句中文缺失')


for title, p in entries:
    f = root / 'docs' / (p + '.md')
    if not f.exists():
        problems.append(f'MISSING {p}')
        continue
    s = f.read_text(encoding='utf-8')
    tot_chars += len(s)
    if not s.startswith('---\n') and not s.startswith('---\r\n'):
        problems.append(f'{p}: no front matter')
    meta, body = build_index.parse_front(s.replace('\r\n', '\n'))
    if meta.get('level') not in LEVELS:
        problems.append(f'{p}: front matter 的 level 必须是 入门 / 进阶 / 深入')
    if not meta.get('summary'):
        problems.append(f'{p}: 缺少 summary')
    body_nocode = re.sub(r'```[\s\S]*?```', '', body)
    h1 = re.findall(r'^# (.+)$', body_nocode, re.M)
    if len(h1) != 1:
        problems.append(f'{p}: {len(h1)} H1 headings')
    elif h1[0].strip() != title.strip():
        problems.append(f'{p}: H1 与 nav 标题不一致 ({h1[0].strip()!r} vs {title!r})')
    tot_q += len(re.findall(r'^>\s*\[!QUESTION\]', body, re.M))

    # 词句 / 单词 / 对话块
    unknown = set()
    kind, start, buf = None, 0, []
    blocks = 0
    for ln, line in enumerate(body.split('\n'), 1):
        m = OPEN.match(line)
        if kind is None and m:
            kind, buf, blocks = m.group(2), [], blocks + 1
            if kind == 'dialog':
                tot_dialogs += 1
            continue
        if kind:
            if CLOSE.match(line):
                check_block(p, ln, kind, buf, unknown)
                kind = None
            else:
                buf.append((ln, line))
    if kind:
        problems.append(f'{p}: 有未闭合的 ```{kind} 块')
    for w in sorted(unknown):
        if w.endswith('（按字母读）'):
            continue   # 全大写缩写按字母读，属于正常情况
        problems.append(f'{p}: 词典里查不到「{w}」，请加进 tools/data/ipa_overrides.json')
    if blocks == 0 and p.split('/')[-1] not in ('how-to',):
        problems.append(f'{p}: 没有任何 phrases / words / dialog 块')

    for link in re.findall(r'\]\(#/([^)#\s]+)', body_nocode):
        if link not in valid:
            problems.append(f'{p}: broken link #/{link}')

# 孤儿页面与索引新鲜度只在全量检查时看
if ONLY:
    print('pages', len(entries), 'items', tot_items, 'dialogs', tot_dialogs, 'questions', tot_q, 'chars', tot_chars)
    print(chr(10).join(problems) if problems else 'NO PROBLEMS')
    sys.exit(1 if problems else 0)

registered = set(paths) | {'index'}
for f in (root / 'docs').rglob('*.md'):
    key = f.relative_to(root / 'docs').as_posix()[:-3]
    if key not in registered:
        problems.append(f'ORPHAN docs/{key}.md 未登记到 nav.js')

# 搜索索引是否最新
idx = root / 'assets' / 'search-index.json'
if idx.exists():
    fresh = build_index.build(root)
    cur = json.loads(idx.read_text(encoding='utf-8'))
    if cur != fresh:
        problems.append('search-index.json 已过期：请运行 python tools/build_index.py')
else:
    problems.append('缺少 assets/search-index.json：请运行 python tools/build_index.py')

print('pages', len(paths), 'items', tot_items, 'dialogs', tot_dialogs, 'questions', tot_q, 'chars', tot_chars)
print('\n'.join(problems) if problems else 'NO PROBLEMS')
sys.exit(1 if problems else 0)
