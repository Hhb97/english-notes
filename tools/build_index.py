#!/usr/bin/env python3
"""生成全站搜索索引 assets/search-index.json。

在仓库根目录运行 `python tools/build_index.py`。浏览器首次搜索只需下载这一个文件，
而不是逐页请求全部 Markdown。纯文本处理逻辑与 assets/app.js 里的 plain() / countOf() 保持一致。
"""
import json
import pathlib
import re
import sys

MAX_CHARS = 40000  # 单页索引文本上限
BLOCK_OPEN = re.compile(r'^(?:>\s?)*```(phrases|words|dialog)\s*$')
BLOCK_CLOSE = re.compile(r'^(?:>\s?)*```\s*$')


def parse_front(md):
    m = re.match(r'^---\r?\n([\s\S]*?)\r?\n---\r?\n?', md)
    meta, body = {}, md
    if m:
        body = md[m.end():]
        for line in m.group(1).splitlines():
            kv = re.match(r'^(\w+):\s*(.*)$', line)
            if kv:
                meta[kv.group(1)] = kv.group(2).strip()
    return meta, body


def tags_of(meta):
    raw = meta.get('tags', '').strip()
    if raw.startswith('[') and raw.endswith(']'):
        raw = raw[1:-1]
    return ' '.join(t.strip() for t in raw.split(',') if t.strip()).lower()


def plain(md):
    md = re.sub(r'```\w*', ' ', md)
    md = re.sub(r'<[^>]+>', ' ', md)
    md = re.sub(r'\[!(\w+)\]', ' ', md)
    md = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', md)
    md = re.sub(r'[#>*`|_]+', ' ', md)
    md = re.sub(r'-{3,}', ' ', md)
    md = re.sub(r'\s+', ' ', md)
    return md.strip()


def count_items(body):
    """返回 (词句条数, 对话段数)。"""
    w = d = 0
    kind = None
    for line in body.split('\n'):
        m = BLOCK_OPEN.match(line)
        if kind is None and m:
            kind = m.group(1)
            if kind == 'dialog':
                d += 1
            continue
        if kind:
            if BLOCK_CLOSE.match(line):
                kind = None
                continue
            s = re.sub(r'^(?:>\s?)*', '', line).strip()
            if s and not s.startswith('#') and not re.match(r'^title:', s, re.I):
                w += 1
    return w, d


def build(root):
    root = pathlib.Path(root)
    nav = (root / 'assets' / 'nav.js').read_text(encoding='utf-8')
    paths = re.findall(r"path: '([^']+)'", nav)
    docs = {}
    for p in paths:
        f = root / 'docs' / (p + '.md')
        if not f.exists():
            continue
        text = f.read_text(encoding='utf-8').replace('\r\n', '\n')  # 统一换行，保证 Windows 与 CI 生成结果一致
        meta, body = parse_front(text)
        w, d = count_items(body)
        docs[p] = {'t': tags_of(meta), 'x': plain(body)[:MAX_CHARS], 'w': w, 'd': d}
    return {'v': 1, 'docs': docs}


if __name__ == '__main__':
    base = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
    data = build(base)
    out = base / 'assets' / 'search-index.json'
    out.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    print(f'{len(data["docs"])} pages -> {out.name} ({out.stat().st_size // 1024} KB)')
