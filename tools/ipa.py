#!/usr/bin/env python3
"""为英文词句补全国际音标（美式），在仓库根目录运行：

    python tools/ipa.py              # 给 docs 里缺音标的词句补上 /…/，并列出词典里查不到的词
    python tools/ipa.py docs/work    # 只处理某个目录或文件（多人同时写作时用）
    python tools/ipa.py --redo       # 丢弃已有音标，全部按词典重算（改了 ipa_overrides.json 后用）
    python tools/ipa.py --say "text" # 只看某句话会得到什么音标

数据来源：CMU Pronouncing Dictionary（tools/data/cmudict.dict，许可见 CMUDICT-LICENSE）转成美式 IPA，
词典里没有的 IT 术语放在 tools/data/ipa_overrides.json（键为小写单词，值为不带斜线的音标）。
词句写作格式见 WRITING_GUIDE.md。生成的是「词典读音」：连读、弱读不体现，学习时以朗读按钮为准。
"""
import json
import pathlib
import re
import sys

for _s in (sys.stdout, sys.stderr):
    if hasattr(_s, 'reconfigure'):
        _s.reconfigure(encoding='utf-8')  # Windows 控制台默认 GBK，打不出音标符号

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / 'tools' / 'data'

VOWELS = {
    'AA': 'ɑː', 'AE': 'æ', 'AH': 'ʌ', 'AO': 'ɔː', 'AW': 'aʊ', 'AY': 'aɪ', 'EH': 'e', 'ER': 'ɜːr',
    'EY': 'eɪ', 'IH': 'ɪ', 'IY': 'iː', 'OW': 'oʊ', 'OY': 'ɔɪ', 'UH': 'ʊ', 'UW': 'uː',
}
CONS = {
    'B': 'b', 'CH': 'tʃ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'ɡ', 'HH': 'h', 'JH': 'dʒ', 'K': 'k', 'L': 'l',
    'M': 'm', 'N': 'n', 'NG': 'ŋ', 'P': 'p', 'R': 'r', 'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v',
    'W': 'w', 'Y': 'j', 'Z': 'z', 'ZH': 'ʒ',
}
# 英语里合法的词首辅音丛（用来决定重音符号落在哪个音节开头）
ONSETS2 = {
    'P L', 'P R', 'B L', 'B R', 'T R', 'D R', 'K L', 'K R', 'G L', 'G R', 'F L', 'F R', 'TH R', 'SH R',
    'T W', 'D W', 'K W', 'G W', 'TH W', 'S W', 'S P', 'S T', 'S K', 'S M', 'S N', 'S F', 'S L', 'HH Y',
    'P Y', 'B Y', 'T Y', 'D Y', 'K Y', 'G Y', 'F Y', 'V Y', 'M Y', 'N Y', 'L Y', 'S Y', 'Z Y', 'TH Y',
}
ONSETS3 = {'S P L', 'S P R', 'S T R', 'S K R', 'S K W', 'S K L', 'S P Y', 'S T Y', 'S K Y'}
LETTERS = {
    'a': 'eɪ', 'b': 'biː', 'c': 'siː', 'd': 'diː', 'e': 'iː', 'f': 'ef', 'g': 'dʒiː', 'h': 'eɪtʃ', 'i': 'aɪ',
    'j': 'dʒeɪ', 'k': 'keɪ', 'l': 'el', 'm': 'em', 'n': 'en', 'o': 'oʊ', 'p': 'piː', 'q': 'kjuː', 'r': 'ɑːr',
    's': 'es', 't': 'tiː', 'u': 'juː', 'v': 'viː', 'w': 'ˈdʌbəl juː', 'x': 'eks', 'y': 'waɪ', 'z': 'ziː',
}
ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


def num_words(n):
    if n < 20:
        return [ONES[n]]
    if n < 100:
        return [TENS[n // 10]] + ([ONES[n % 10]] if n % 10 else [])
    if n < 1000:
        return [ONES[n // 100], 'hundred'] + (num_words(n % 100) if n % 100 else [])
    if n < 1000000:
        return num_words(n // 1000) + ['thousand'] + (num_words(n % 1000) if n % 1000 else [])
    return list(str(n))  # 太大的数字逐位读


def load_dict():
    d = {}
    for line in (DATA / 'cmudict.dict').read_text(encoding='utf-8', errors='replace').splitlines():
        if not line or line.startswith(';;;'):
            continue
        word, _, phones = line.partition(' ')
        m = re.match(r'^(.*)\((\d+)\)$', word)
        if m:
            continue  # 只取第一读音
        d.setdefault(word, phones.split())
    return d


CMU = load_dict()
OVR = {}
for _f in sorted(DATA.glob('ipa_overrides*.json')):   # ipa_overrides.json 与 ipa_overrides.<名字>.json 都会加载
    OVR.update({k.lower(): v for k, v in json.loads(_f.read_text(encoding='utf-8')).items()})


def arpa_to_ipa(phones):
    """ARPAbet 音素序列 → IPA，重音符号放在重读音节的开头；单音节词不标重音。"""
    syl = [i for i, p in enumerate(phones) if p[:2] in VOWELS and p[-1].isdigit()]
    out = []
    marks = {}
    if len(syl) > 1:
        prev_v = -1
        for vi in syl:
            stress = phones[vi][-1]
            run = phones[prev_v + 1:vi]
            start = vi
            if run:
                start = vi - 1
                if len(run) >= 2 and ' '.join(run[-2:]) in ONSETS2:
                    start = vi - 2
                if len(run) >= 3 and ' '.join(run[-3:]) in ONSETS3:
                    start = vi - 3
            if stress == '1':
                marks[start] = 'ˈ'
            elif stress == '2':
                marks[start] = 'ˌ'
            prev_v = vi
    for i, p in enumerate(phones):
        out.append(marks.get(i, ''))
        base, st = p[:-1], p[-1]
        if p[-1].isdigit() and base in VOWELS:
            if base == 'AH':
                out.append('ə' if st == '0' else 'ʌ')
            elif base == 'ER':
                out.append('ər' if st == '0' else 'ɜːr')
            elif st == '0' and base in ('IY', 'UW'):
                out.append('i' if base == 'IY' else 'u')   # 词尾 happy、into 里不重读的 i / u 不带长音符
            else:
                out.append(VOWELS[base])
        else:
            out.append(CONS.get(p, ''))
    return ''.join(out)


def add_suffix(base_ipa, kind):
    last = base_ipa[-1]
    if kind == 's':
        if base_ipa.endswith(('s', 'z', 'ʃ', 'ʒ', 'tʃ', 'dʒ')):
            return base_ipa + 'ɪz'
        return base_ipa + ('s' if last in 'ptkfθ' else 'z')
    if kind == 'ed':
        if last in 'td':
            return base_ipa + 'ɪd'
        return base_ipa + ('t' if last in 'pkfsʃθ' or base_ipa.endswith('tʃ') else 'd')
    if kind == 'ing':
        return base_ipa + 'ɪŋ'
    return base_ipa


def lookup(word, unknown):
    w = word.lower()
    if w in OVR:
        return OVR[w]
    if w in CMU:
        return arpa_to_ipa(CMU[w])
    if w.endswith("'s") and (w[:-2] in CMU or w[:-2] in OVR):
        return add_suffix(lookup(w[:-2], unknown), 's')
    for suffix, kind, strip in (('ing', 'ing', 3), ('ed', 'ed', 2), ('d', 'ed', 1), ('es', 's', 2), ('s', 's', 1)):
        if w.endswith(suffix) and len(w) > strip + 1:
            for base in (w[:-strip], w[:-strip] + 'e'):
                if base in OVR or base in CMU:
                    return add_suffix(lookup(base, unknown), kind)
    if word.isupper() and 2 <= len(word) <= 5 and word.isalpha():
        unknown.add(word + '（按字母读）')
        return ' '.join(LETTERS[c] for c in w)
    unknown.add(word)
    return None


def ipa_for(text, unknown=None):
    unknown = unknown if unknown is not None else set()
    parts = []
    text = re.sub(r'(?<![A-Za-z])([ap])\.m\.', lambda m: m.group(1) + 'yem', text, flags=re.I)   # a.m. / p.m.
    tokens = re.findall(r"[A-Za-z]+(?:['’][A-Za-z]+)*|\d+", text.replace('’', "'"))
    for tok in tokens:
        if tok.isdigit():
            words = num_words(int(tok))
            parts.extend(lookup(x, unknown) or x for x in words)
            continue
        got = lookup(tok, unknown)
        if got is None and '-' in tok:
            got = ' '.join(lookup(x, unknown) or x for x in tok.split('-'))
        parts.append(got if got is not None else tok)
    return '/' + ' '.join(parts) + '/'


IPA_RE = re.compile(r'^/.*/$')
SPEAKER_RE = re.compile(r'^([A-Za-z][\w .]{0,18}):\s+')
FENCE_RE = re.compile(r'^(?:>\s?)*```(phrases|words|dialog)\s*$')
CLOSE_RE = re.compile(r'^(?:>\s?)*```\s*$')
PREFIX_RE = re.compile(r'^((?:>\s?)*)(.*)$')


def split_fields(line):
    return [f.strip() for f in line.split(' | ')]


def fix_line(kind, line, redo, unknown):
    """补全一行；返回新行文本。"""
    if not line.strip() or line.lstrip().startswith('#'):
        return line
    f = split_fields(line)
    speaker = ''
    if kind == 'dialog':
        if re.match(r'^title:', f[0], re.I):
            return line
        m = SPEAKER_RE.match(f[0])
        if not m:
            return line
        speaker = f[0][:m.end()]
        f[0] = f[0][m.end():]

    def take_ipa(i, en):
        """f[i] 是音标则取出，否则新算一个；返回 (ipa, 下一个下标)。"""
        if i < len(f) and IPA_RE.match(f[i]):
            return (ipa_for(en, unknown) if redo else f[i]), i + 1
        return ipa_for(en, unknown), i

    out = [f[0]]
    ipa, i = take_ipa(1, f[0])
    out.append(ipa)
    out.extend(f[i:i + 1])  # 中文
    i += 1
    if kind == 'words' and i < len(f):
        ex = f[i]
        out.append(ex)
        ipa2, i = take_ipa(i + 1, ex)
        out.append(ipa2)
        out.extend(f[i:])
    else:
        out.extend(f[i:])
    out[0] = speaker + out[0]
    return ' | '.join(out)


def process(path, redo, unknown, write=True):
    text = path.read_text(encoding='utf-8')
    nl = '\r\n' if '\r\n' in text else '\n'
    lines = text.replace('\r\n', '\n').split('\n')
    kind = None
    changed = 0
    for n, line in enumerate(lines):
        m = FENCE_RE.match(line)
        if kind is None and m:
            kind = m.group(1)
            continue
        if kind is not None:
            if CLOSE_RE.match(line):
                kind = None
                continue
            prefix, rest = PREFIX_RE.match(line).groups()   # 块可以写在 > 引用里（如练习题答案）
            new = prefix + fix_line(kind, rest, redo, unknown)
            if new != line:
                lines[n] = new
                changed += 1
    if changed and write:
        path.write_text(nl.join(lines), encoding='utf-8')
    return changed


def main():
    args = sys.argv[1:]
    if args and args[0] == '--say':
        unknown = set()
        print(ipa_for(' '.join(args[1:]), unknown))
        if unknown:
            print('查不到：', ', '.join(sorted(unknown)))
        return 0
    redo = '--redo' in args
    targets = [pathlib.Path(a) for a in args if not a.startswith('--')]
    files = []
    for t in targets or [ROOT / 'docs']:
        t = t if t.is_absolute() else pathlib.Path.cwd() / t
        files += sorted(t.rglob('*.md')) if t.is_dir() else [t]
    unknown = set()
    total = 0
    for f in files:
        c = process(f, redo, unknown)
        total += c
        if c:
            print(f'{f.relative_to(ROOT).as_posix()}: 补全 {c} 行')
    print(f'共补全 {total} 行')
    if unknown:
        print('词典里查不到或按字母读的词（请检查，必要时加进 tools/data/ipa_overrides.json）：')
        print('  ' + ', '.join(sorted(unknown)))
    return 0


if __name__ == '__main__':
    sys.exit(main())
