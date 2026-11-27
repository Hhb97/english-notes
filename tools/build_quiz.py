#!/usr/bin/env python3
"""生成三级练习数据 assets/quiz-index.json。

在仓库根目录运行 `python tools/build_quiz.py`。
从每页词句卡中挑最多 3 条，生成：
  1. 能认出：给中文选英文（干扰项来自同分类其他页面）；
  2. 能回忆：给中文和挖空英文，填出关键词；
  3. 能使用：在新要求下自己写一句，再对照参考句。
数据由脚本确定性生成，重复运行结果一致。
"""
import collections
import json
import pathlib
import random
import re
import sys

ROOT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
OPEN = re.compile(r'^(?:>\s?)*```(phrases|words|dialog)\s*$')
CLOSE = re.compile(r'^(?:>\s?)*```\s*$')
IPA_RE = re.compile(r'^/.*/$')
SPEAKER = re.compile(r'^([A-Za-z][\w .]{0,18}):\s+')
CJK = re.compile(r'[\u4e00-\u9fff]')
STOP = set('''a an the and or but if then than to of in on at for with from by as is are was were be been being do does did have has had will would can could should may might must not no yes this that these those it its they them their we us our you your he she his her i me my what which who when where why how all some any more most very just also about into out up down over under again once here there'''.split())


def parse_front(md):
    m = re.match(r'^---\r?\n([\s\S]*?)\r?\n---\r?\n?', md)
    if not m:
        return {}, md
    meta = {}
    for line in m.group(1).splitlines():
        kv = re.match(r'^(\w+):\s*(.*)$', line)
        if kv:
            meta[kv.group(1)] = kv.group(2).strip()
    return meta, md[m.end():]


def category_map(nav):
    cat = {}
    for block in re.split(r'\n  \{\n    id: ', nav)[1:]:
        cid = re.match(r"'([^']+)'", block).group(1)
        for p in re.findall(r"path: '([^']+)'", block):
            cat[p] = cid
    return cat


def collect_items(body):
    items = []
    kind = None
    for line in body.replace('\r\n', '\n').split('\n'):
        m = OPEN.match(line)
        if kind is None and m:
            kind = m.group(1)
            continue
        if kind is not None:
            if CLOSE.match(line):
                kind = None
                continue
            s = re.sub(r'^(?:>\s?)*', '', line).strip()
            if not s or s.startswith('#'):
                continue
            f = [x.strip() for x in s.split(' | ')]
            if len(f) < 3 or not IPA_RE.match(f[1]):
                continue
            en = f[0]
            if kind == 'dialog':
                if re.match(r'^title:', en, re.I):
                    continue
                en = SPEAKER.sub('', en).strip()
            zh = f[2]
            note = f[3] if len(f) > 3 and not IPA_RE.match(f[3]) else ''
            if kind == 'words':
                ex = f[3] if len(f) > 3 else ''
                exzh = f[5] if len(f) > 5 else ''
                items.append({'kind': 'word', 'en': en, 'zh': zh, 'note': note, 'ref': ex, 'refZh': exzh})
            else:
                items.append({'kind': 'phrase', 'en': en, 'zh': zh, 'note': note, 'ref': en, 'refZh': zh})
    return items


def make_recall(en, zh):
    words = re.findall(r"[A-Za-z]+", en)
    cands = [w for w in words if len(w) >= 4 and w.lower() not in STOP]
    key = max(cands, key=len) if cands else (words[-1] if words else en)
    blank = re.sub(r'\b' + re.escape(key) + r'\b', '____', en, count=1)
    hint = key[0] + '_' * (len(key) - 1)
    return {'q': zh, 'blank': blank, 'answer': key.lower(), 'hint': hint}


def make_recognize(item, pool, rng):
    correct = item['en']
    same = [en for en, kind in pool if kind == item['kind']]
    others = [en for en, _ in pool]
    options = [correct]
    for group in (same, others):
        for d in group:
            if len(options) >= 3:
                break
            if d in options or d == correct:
                continue
            if 0.55 * len(correct) <= len(d) <= 1.8 * len(correct):
                options.append(d)
    for d in others:
        if len(options) >= 3:
            break
        if d not in options:
            options.append(d)
    rng.shuffle(options)
    return {'q': item['zh'], 'options': options, 'answer': options.index(correct)}


def make_produce(item):
    if item['kind'] == 'word':
        q = '用 "' + item['en'] + '" 写一句和你自己工作或生活相关的英文。'
    else:
        q = '根据「' + item['zh'] + '」自己写一句英文，不要照抄原文。'
    return {'q': q, 'ref': item['ref'] or item['en'], 'refZh': item['refZh'] or item['zh']}


def build(root):
    nav = (root / 'assets' / 'nav.js').read_text(encoding='utf-8')
    cat = category_map(nav)
    paths = list(cat)
    by_cat = collections.defaultdict(list)
    freq = collections.Counter()
    raw = {}
    for p in paths:
        f = root / 'docs' / (p + '.md')
        if not f.exists():
            continue
        text = f.read_text(encoding='utf-8').replace('\r\n', '\n')
        _, body = parse_front(text)
        items = collect_items(body)
        raw[p] = items
        for it in items:
            by_cat[cat[p]].append((it['en'], it['kind']))
            freq[it['en'].lower()] += 1

    pages = {}
    for p, items in raw.items():
        phrases = [x for x in items if x['kind'] == 'phrase' and 6 <= len(x['en']) <= 150 and CJK.search(x['zh'])]
        words = [x for x in items if x['kind'] == 'word' and len(x['en']) <= 40 and CJK.search(x['zh'])]
        chosen = phrases[:2] + words[:1]
        if len(chosen) < 3:
            chosen += [x for x in phrases[2:] + words[1:] if x not in chosen][:3 - len(chosen)]
        if not chosen:
            continue
        rng = random.Random(p)
        out = []
        for i, it in enumerate(chosen):
            out.append({
                'id': p + '-' + str(i + 1),
                'kind': it['kind'],
                'en': it['en'],
                'zh': it['zh'],
                'note': it['note'],
                'freq': freq[it['en'].lower()],
                'recognize': make_recognize(it, by_cat[cat[p]], rng),
                'recall': make_recall(it['en'], it['zh']),
                'produce': make_produce(it),
            })
        pages[p] = {'cat': cat[p], 'items': out}
    return {'v': 1, 'pages': pages}


if __name__ == '__main__':
    data = build(ROOT)
    out = ROOT / 'assets' / 'quiz-index.json'
    out.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    n = sum(len(v['items']) for v in data['pages'].values())
    print(f'{len(data["pages"])} pages, {n} triads -> {out.name} ({out.stat().st_size // 1024} KB)')
