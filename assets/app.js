(function () {
  'use strict';

  var NAV = window.NAV;
  var $ = function (id) { return document.getElementById(id); };
  var content = $('content'), navEl = $('nav'), tocEl = $('toc'), docHead = $('docHead'), studyBar = $('studyBar');
  var SITE = 'IT 英语口语笔记';

  var cache = {};           // path -> 原始 markdown
  var pages = [];           // 扁平化文章 {title, path, cat, trail}
  var byPath = {};
  var current = { path: null };
  var spy = null;

  /* ================= 目录数据 ================= */
  NAV.forEach(function (cat) {
    cat.pages = [];
    (function walk(items, trail) {
      items.forEach(function (n) {
        if (n.children) return walk(n.children, trail.concat(n.title));
        var p = { title: n.title, path: n.path, cat: cat, trail: trail };
        pages.push(p); cat.pages.push(p); byPath[n.path] = p;
      });
    })(cat.children, []);
  });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  var ICON = {
    chev: '<svg class="chev" viewBox="0 0 16 16" width="16" height="16"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    card: '<svg viewBox="0 0 16 16" width="14" height="14"><rect x="1.8" y="3" width="12.4" height="10" rx="2" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M4.5 6.5h7M4.5 9.5h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    chat: '<svg viewBox="0 0 16 16" width="14" height="14"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/></svg>',
    qa: '<svg viewBox="0 0 16 16" width="14" height="14"><circle cx="8" cy="8" r="6.2" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="M6.2 6.3a1.9 1.9 0 1 1 2.7 1.7c-.6.3-.9.7-.9 1.3M8 11.4v.1" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>',
    spk: '<svg viewBox="0 0 16 16" width="16" height="16"><path d="M2.5 6.3h2.3L8 3.6v8.8L4.8 9.7H2.5z" fill="currentColor"/><path d="M10.2 5.6a3.6 3.6 0 0 1 0 4.8M11.9 3.9a6 6 0 0 1 0 8.2" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>'
  };
  var CALLOUT = {
    NOTE: ['说明', '<circle cx="8" cy="8" r="6.3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 7.2v4M8 4.9v.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'],
    TIP: ['小技巧', '<path d="M5.5 11.5h5M6.3 14h3.4M8 1.8a4.4 4.4 0 0 0-2.6 8c.4.3.6.7.6 1.2v.5h4v-.5c0-.5.2-.9.6-1.2A4.4 4.4 0 0 0 8 1.8z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/>'],
    IMPORTANT: ['重要', '<path d="M2.5 3h11v8h-6l-3 2.5V11h-2z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/><path d="M8 5v3M8 9.6v.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'],
    WARNING: ['注意', '<path d="M8 1.8L14.6 13.5H1.4z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/><path d="M8 6.3v3.3M8 11.5v.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'],
    CAUTION: ['千万别这样说', '<path d="M5.3 1.8h5.4l3.5 3.5v5.4l-3.5 3.5H5.3l-3.5-3.5V5.3z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/><path d="M8 4.8v3.8M8 10.8v.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'],
    ABSTRACT: ['本页要点', '<path d="M3 3.5h10M3 6.5h10M3 9.5h7M3 12.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>']
  };

  /* ================= 顶部分类 & 侧边栏 ================= */
  (function buildTabs() {
    $('tabs').innerHTML = NAV.map(function (c) {
      return '<a class="tab" data-cat="' + c.id + '" href="#/' + c.pages[0].path + '">' + esc(c.title) + '</a>';
    }).join('');
  })();

  function renderNavItems(items, depth) {
    return items.map(function (n) {
      if (!n.children) {
        return '<a class="nav-link" href="#/' + n.path + '" data-path="' + n.path + '">' + esc(n.title) + '</a>';
      }
      if (depth === 0) {
        var count = 0;
        (function c(xs) { xs.forEach(function (x) { if (x.children) c(x.children); else count++; }); })(n.children);
        return '<div class="nav-section"><div class="nav-label"><span>' + esc(n.title) + '</span><span>' + count + '</span></div>' +
          renderNavItems(n.children, depth + 1) + '</div>';
      }
      return '<div class="nav-group"><button class="nav-head">' + ICON.chev + '<span>' + esc(n.title) + '</span></button>' +
        '<div class="nav-children">' + renderNavItems(n.children, depth + 1) + '</div></div>';
    }).join('');
  }

  var navCat;
  function renderSidebar(cat) {
    if (navCat === cat) return;
    navCat = cat;
    if (!cat) {
      $('sideHead').innerHTML = '<div class="kicker">IT English</div><h2>全部分类</h2><p>' + pages.length + ' 篇，从入门到深入。</p>';
      navEl.innerHTML = NAV.map(function (c) {
        return '<a class="nav-cat" href="#/' + c.pages[0].path + '"><b>' + esc(c.title) + '</b><small>' + esc(c.desc) + ' · ' + c.pages.length + ' 篇</small></a>';
      }).join('');
      return;
    }
    $('sideHead').innerHTML = '<div class="side-cats">' + NAV.map(function (c) {
      return '<a class="' + (c === cat ? 'on' : '') + '" href="#/' + c.pages[0].path + '">' + esc(c.title) + '</a>';
    }).join('') + '</div>' +
      '<div class="kicker">分类</div><h2>' + esc(cat.title) + '</h2><p>' + esc(cat.desc) + '</p>' +
      '<span class="count">' + cat.pages.length + ' 篇</span>';
    navEl.innerHTML = renderNavItems(cat.children, 0);
  }
  navEl.addEventListener('click', function (e) {
    var h = e.target.closest('.nav-head');
    if (h) h.parentElement.classList.toggle('open');
  });

  function markActive(path, cat) {
    document.querySelectorAll('.tab').forEach(function (t) {
      t.classList.toggle('active', !!cat && t.dataset.cat === cat.id);
    });
    var prev = navEl.querySelector('.nav-link.active');
    if (prev) prev.classList.remove('active');
    var a = navEl.querySelector('.nav-link[data-path="' + path + '"]');
    if (!a) return;
    a.classList.add('active');
    for (var el = a.parentElement; el && el !== navEl; el = el.parentElement) {
      if (el.classList.contains('nav-group')) el.classList.add('open');
    }
    var box = $('sidebar'), r = a.getBoundingClientRect(), br = box.getBoundingClientRect();
    if (r.top < br.top + 60 || r.bottom > br.bottom - 40) a.scrollIntoView({ block: 'center' });
  }

  /* ================= 词句 / 单词 / 对话 的解析与渲染 ================= */
  // 行格式（字段用「 | 」分隔，音标写在 /…/ 里，缺音标时由 tools/ipa.py 补全）：
  //   phrases:  英文 | /音标/ | 中文 | 备注（可选）
  //   words:    单词 | /音标/ | 词性 中文 | 例句 | /音标/ | 例句中文
  //   dialog:   说话人: 英文 | /音标/ | 中文
  var IPA_RE = /^\/.*\/$/;
  var SPEAKER_RE = /^([A-Za-z][\w .]{0,18}):\s+/;

  function fields(line) { return line.split(' | ').map(function (s) { return s.trim(); }); }

  function eachLine(code, fn) {
    code.split(/\r?\n/).forEach(function (l) {
      if (l.trim() && l.trim().charAt(0) !== '#') fn(l);
    });
  }

  // 取出「英文 + 音标」；音标可能缺失（此时下一个字段就是中文）
  function takeEnIpa(f, i) {
    var en = f[i] || '', ipa = '';
    if (f[i + 1] && IPA_RE.test(f[i + 1])) { ipa = f[i + 1]; i += 2; } else { i += 1; }
    return { en: en, ipa: ipa, next: i };
  }

  function zhHtml(zh) {
    var m = /^((?:[a-z]+\.)(?:\/[a-z]+\.)*)\s*(.*)$/.exec(zh);
    return m ? '<span class="pos">' + esc(m[1]) + '</span>' + esc(m[2]) : esc(zh);
  }

  function speakBtn(text) {
    return '<button type="button" class="ibtn spk" data-say="' + esc(text) + '" title="朗读" aria-label="朗读">' + ICON.spk + '</button>';
  }

  function enBlock(en, ipa) {
    return '<div class="ph-en ew"><span class="en">' + esc(en) + '</span>' + (ipa ? '<span class="ipa">' + esc(ipa) + '</span>' : '') + '</div>';
  }

  function renderPhrase(f) {
    var e = takeEnIpa(f, 0), zh = f[e.next] || '', note = f[e.next + 1] || '';
    return '<div class="ph"><div class="ph-main"><div class="ph-zh zw">' + esc(zh) + '</div>' + enBlock(e.en, e.ipa) +
      (note ? '<div class="ph-note">' + esc(note) + '</div>' : '') + '</div>' +
      '<div class="ph-act">' + speakBtn(e.en) + '<button type="button" class="ibtn rev" aria-pressed="false" title="显示 / 隐藏英文">EN</button></div></div>';
  }

  function renderWord(f) {
    var w = takeEnIpa(f, 0), zh = f[w.next] || '', i = w.next + 1, ex = '';
    if (f[i]) {
      var x = takeEnIpa(f, i), exZh = f[x.next] || '';
      ex = '<div class="ph-ex">' + enBlock(x.en, x.ipa) +
        (exZh ? '<div class="zh zw">' + esc(exZh) + '</div>' : '') + speakBtn(x.en) + '</div>';
    }
    return '<div class="ph wd"><div class="ph-main"><div class="ph-zh zw">' + zhHtml(zh) + '</div>' + enBlock(w.en, w.ipa) + ex + '</div>' +
      '<div class="ph-act">' + speakBtn(w.en) + '<button type="button" class="ibtn rev" aria-pressed="false" title="显示 / 隐藏英文">EN</button></div></div>';
  }

  function renderDialog(code) {
    var order = [], html = '', title = '';
    eachLine(code, function (line) {
      var f = fields(line);
      if (/^title:/i.test(f[0])) { title = f[0].replace(/^title:\s*/i, ''); return; }
      var m = SPEAKER_RE.exec(f[0]);
      if (!m) return;
      var sp = m[1];
      f[0] = f[0].slice(m[0].length);
      if (order.indexOf(sp) < 0) order.push(sp);
      var side = order.indexOf(sp) % 2 ? 'right' : 'left';
      var e = takeEnIpa(f, 0), zh = f[e.next] || '';
      html += '<div class="turn ' + side + '" data-sp="' + order.indexOf(sp) + '"><span class="sp">' + esc(sp) + '</span>' +
        '<div class="ph"><div class="ph-main"><div class="ph-zh zw">' + esc(zh) + '</div>' + enBlock(e.en, e.ipa) + '</div>' +
        '<div class="ph-act">' + speakBtn(e.en) + '<button type="button" class="ibtn rev" aria-pressed="false" title="显示 / 隐藏英文">EN</button></div></div></div>';
    });
    return '<div class="dl"><div class="dl-head"><b>' + (title ? esc(title) : '情景对话') + '</b>' +
      '<button type="button" class="dl-play">▶ 播放整段对话</button></div>' + html + '</div>';
  }

  marked.use({
    gfm: true,
    renderer: {
      code: function (code, info) {
        var lang = (info || '').trim().split(/\s+/)[0].toLowerCase();
        if (lang === 'phrases' || lang === 'words') {
          var out = '';
          eachLine(code, function (l) { out += (lang === 'words' ? renderWord : renderPhrase)(fields(l)); });
          return '<div class="cards">' + out + '</div>';
        }
        if (lang === 'dialog') return renderDialog(code);
        return '<div class="code' + (lang ? '' : ' plain') + '"><div class="code-bar"><span class="dots"><i></i><i></i><i></i></span>' +
          '<span class="lang">' + esc(lang || '') + '</span><button class="copy-btn" type="button">复制</button></div>' +
          '<pre><code>' + esc(code) + '</code></pre></div>';
      }
    }
  });

  function parseFront(md) {
    var meta = {}, m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(md);
    if (!m) return { meta: meta, body: md };
    m[1].split(/\r?\n/).forEach(function (line) {
      var kv = /^(\w+)\s*:\s*(.*)$/.exec(line);
      if (!kv) return;
      var v = kv[2].trim();
      if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map(function (s) { return s.trim().replace(/^['"]|['"]$/g, ''); }).filter(Boolean);
      else v = v.replace(/^['"]|['"]$/g, '');
      meta[kv[1]] = v;
    });
    return { meta: meta, body: md.slice(m[0].length) };
  }

  function fetchDoc(path) {
    if (cache[path] !== undefined) return Promise.resolve(cache[path]);
    return fetch('docs/' + path + '.md').then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) { cache[path] = t; return t; });
  }

  function slugify(s, used) {
    var base = s.trim().toLowerCase().replace(/[^\w一-龥]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
    var id = base, i = 1;
    while (used[id]) id = base + '-' + (++i);
    used[id] = true;
    return id;
  }

  function transformCallouts(root) {
    root.querySelectorAll('blockquote').forEach(function (bq) {
      var p = bq.firstElementChild;
      if (!p || p.tagName !== 'P') return;
      var m = /^\s*\[!(\w+)\][ \t]*([^\n]*)(?:\n|$)/.exec(p.innerHTML);
      if (!m) return;
      var type = m[1].toUpperCase(), title = m[2].trim();
      var rest = p.innerHTML.slice(m[0].length);
      if (rest.trim()) p.innerHTML = rest; else p.remove();

      if (type === 'QUESTION') {
        var d = document.createElement('details');
        d.className = 'qa';
        d.innerHTML = '<summary><span class="q">Q</span><span class="qt">' + (title || '试试看') + '</span>' + ICON.chev + '</summary><div class="qa-body"></div>';
        var body = d.querySelector('.qa-body');
        while (bq.firstChild) body.appendChild(bq.firstChild);
        bq.replaceWith(d);
        return;
      }
      var def = CALLOUT[type] || CALLOUT.NOTE;
      var box = document.createElement('div');
      box.className = 'callout callout-' + (CALLOUT[type] ? type : 'NOTE');
      box.innerHTML = '<div class="callout-title"><svg viewBox="0 0 16 16" width="16" height="16">' + def[1] + '</svg><span>' + (title || def[0]) + '</span></div>';
      while (bq.firstChild) box.appendChild(bq.firstChild);
      bq.replaceWith(box);
    });

    var qas = root.querySelectorAll('.qa');
    if (qas.length > 1) {
      var bar = document.createElement('div');
      bar.className = 'qa-tools';
      bar.innerHTML = '<button type="button">全部展开</button>';
      qas[0].parentNode.insertBefore(bar, qas[0]);
      bar.firstChild.addEventListener('click', function () {
        var open = this.textContent === '全部展开';
        root.querySelectorAll('.qa').forEach(function (q) { q.open = open; });
        this.textContent = open ? '全部收起' : '全部展开';
      });
    }
  }

  // CommonMark 中「**含全角标点结尾**紧跟汉字」不会被识别为加粗，这里补一遍
  function fixStrong(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeValue.indexOf('**') < 0) return NodeFilter.FILTER_REJECT;
        return n.parentElement.closest('code, pre, script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var parts = n.nodeValue.split(/\*\*([^*\n]+?)\*\*/);
      if (parts.length < 3) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function (s, i) {
        if (i % 2) { var b = document.createElement('strong'); b.textContent = s; frag.appendChild(b); }
        else if (s) frag.appendChild(document.createTextNode(s));
      });
      n.parentNode.replaceChild(frag, n);
    });
  }

  function enhance(path) {
    fixStrong(content);
    transformCallouts(content);
    content.querySelectorAll('table').forEach(function (t) {
      var w = document.createElement('div');
      w.className = 'table-wrap';
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });
    content.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^https?:/.test(h)) { a.target = '_blank'; a.rel = 'noopener'; }
      else if (/^#[^/]/.test(h)) a.setAttribute('href', '#/' + path + h);
      else if (/^#\//.test(h)) {
        var target = h.slice(2).split('#')[0];
        if (target !== 'index' && !byPath[target]) {   // 目标页面尚未发布
          a.classList.add('soon');
          a.title = '该页面编写中';
          a.removeAttribute('href');
        }
      }
    });
  }

  /* ================= 朗读（浏览器自带语音合成） ================= */
  var TTS = {
    ok: 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window,
    voices: [], token: 0, current: null
  };

  function loadVoices() {
    if (!TTS.ok) return;
    TTS.voices = speechSynthesis.getVoices().filter(function (v) { return /^en[-_]/i.test(v.lang); });
    // 美式优先，其次英式；「Natural / Online」这类神经网络语音（Edge）听起来最自然
    TTS.voices.sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
    fillVoiceSelect();
  }
  function voiceScore(v) {
    return (/en[-_]US/i.test(v.lang) ? 10 : 0) + (/natural|online/i.test(v.name) ? 5 : 0) + (/google/i.test(v.name) ? 2 : 0);
  }
  if (TTS.ok) {
    loadVoices();
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', loadVoices);
  }
  function findVoice(name) {
    for (var i = 0; i < TTS.voices.length; i++) if (TTS.voices[i].name === name) return TTS.voices[i];
    return TTS.voices[0] || null;
  }
  // 对话里第二位说话人换一个声音；找不到就压低音调
  function altVoice(main) {
    var want = /male|david|mark|guy|davis|tony|alex|daniel|george|ryan/i;
    for (var i = 0; i < TTS.voices.length; i++) {
      var v = TTS.voices[i];
      if (v !== main && want.test(v.name) && !/female/i.test(v.name) && /^en[-_]/i.test(v.lang)) return v;
    }
    return null;
  }

  function stopSpeaking() {
    TTS.token++;
    if (TTS.ok) speechSynthesis.cancel();
    document.querySelectorAll('.ph.playing').forEach(function (e) { e.classList.remove('playing'); });
    document.querySelectorAll('.ibtn.spk.on').forEach(function (e) { e.classList.remove('on'); });
    var pb = document.querySelector('.dl-play.stop');
    if (pb) { pb.classList.remove('stop'); pb.textContent = '▶ 播放整段对话'; }
  }

  // 朗读一段英文，返回在读完（或被打断）时结束的 Promise
  function speak(text, opt) {
    opt = opt || {};
    return new Promise(function (resolve) {
      if (!TTS.ok) { resolve(); return; }
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      var v = opt.voice || findVoice(prefs.voice);
      if (v) { u.voice = v; u.lang = v.lang; }
      u.rate = prefs.rate;
      if (opt.pitch) u.pitch = opt.pitch;
      u.onend = u.onerror = function () { resolve(); };
      TTS.current = u;     // 保持引用，避免个别浏览器提前回收导致 onend 不触发
      speechSynthesis.speak(u);
    });
  }

  function say(btn) {
    var text = btn.getAttribute('data-say');
    if (!TTS.ok) { toast('当前浏览器不支持语音朗读，建议用 Edge 或 Chrome'); return; }
    stopSpeaking();
    var my = TTS.token;
    btn.classList.add('on');
    var card = btn.closest('.ph');
    if (card) card.classList.add('playing');
    speak(text).then(function () {
      if (my !== TTS.token) return;
      btn.classList.remove('on');
      if (card) card.classList.remove('playing');
    });
  }

  function playDialog(btn) {
    if (!TTS.ok) { toast('当前浏览器不支持语音朗读，建议用 Edge 或 Chrome'); return; }
    if (btn.classList.contains('stop')) { stopSpeaking(); return; }
    stopSpeaking();
    var my = TTS.token, dl = btn.closest('.dl');
    var turns = Array.prototype.slice.call(dl.querySelectorAll('.turn'));
    var main = findVoice(prefs.voice), alt = altVoice(main);
    btn.classList.add('stop');
    btn.textContent = '■ 停止';
    (function next(i) {
      if (my !== TTS.token) return;
      if (i >= turns.length) { stopSpeaking(); return; }
      var t = turns[i], card = t.querySelector('.ph'), text = t.querySelector('.spk').getAttribute('data-say');
      var second = t.getAttribute('data-sp') === '1';
      card.classList.add('playing');
      card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      speak(text, { voice: second ? (alt || main) : main, pitch: second && !alt ? 0.8 : 1 }).then(function () {
        if (my !== TTS.token) return;
        card.classList.remove('playing');
        setTimeout(function () { next(i + 1); }, 350);
      });
    })(0);
  }

  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById('toast');
    if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  /* ================= 学习设置：英文 / 音标 / 中文 的遮盖，语速，声音 ================= */
  var saved = { hideEn: true, hideIpa: false, hideZh: false, rate: 0.9, voice: '' };
  try { saved = Object.assign(saved, JSON.parse(localStorage.getItem('en-study') || '{}')); } catch (e) { /* 存储不可用时用默认值 */ }
  var prefs = saved;                                  // 语速、声音
  var view = { hideEn: saved.hideEn, hideIpa: saved.hideIpa, hideZh: saved.hideZh };   // 当前页的显示状态
  function persist() { try { localStorage.setItem('en-study', JSON.stringify(saved)); } catch (e) { /* 忽略 */ } }

  function applyView() {
    content.classList.toggle('hide-en', view.hideEn);
    content.classList.toggle('hide-ipa', view.hideIpa);
    content.classList.toggle('hide-zh', view.hideZh);
    studyBar.querySelectorAll('.tg').forEach(function (b) {
      var k = b.dataset.k;
      b.setAttribute('aria-pressed', String(!view[k]));    // 按下 = 显示
    });
    refreshRev();
  }
  // EN 按钮的按下状态 = 这一条的英文当前是否可见
  function refreshRev() {
    content.querySelectorAll('.ph').forEach(function (c) {
      var hidden = view.hideEn !== c.classList.contains('flip');
      var b = c.querySelector('.rev');
      if (b) b.setAttribute('aria-pressed', String(!hidden));
    });
  }

  function fillVoiceSelect() {
    var sel = document.getElementById('voiceSel');
    if (!sel) return;
    if (!TTS.voices.length) { sel.innerHTML = '<option>默认声音</option>'; return; }
    var cur = findVoice(prefs.voice);
    sel.innerHTML = TTS.voices.map(function (v) {
      return '<option value="' + esc(v.name) + '"' + (v === cur ? ' selected' : '') + '>' + esc(v.name.replace(/^Microsoft /, '').replace(/ - English.*$/, '')) + ' (' + esc(v.lang) + ')</option>';
    }).join('');
  }

  function buildStudyBar(hasCards) {
    if (!hasCards) { studyBar.innerHTML = ''; return; }
    studyBar.innerHTML =
      '<span class="lbl">显示</span>' +
      '<button type="button" class="tg" data-k="hideEn" title="显示或遮住全部英文（也可以点每条右侧的 EN）">英文</button>' +
      '<button type="button" class="tg" data-k="hideIpa" title="显示或隐藏音标">音标</button>' +
      '<button type="button" class="tg" data-k="hideZh" title="显示或遮住中文，用来练习听力和回忆">中文</button>' +
      '<span class="sep"></span><span class="lbl">语速</span>' +
      '<select id="rateSel" aria-label="语速"><option value="0.65">慢</option><option value="0.9">正常</option><option value="1.1">快</option></select>' +
      (TTS.ok ? '<span class="lbl">声音</span><select id="voiceSel" aria-label="声音"></select>' : '<span class="hint">此浏览器不支持朗读</span>');
    var rs = $('rateSel'); if (rs) rs.value = String(prefs.rate);
    fillVoiceSelect();
    applyView();
  }

  studyBar.addEventListener('click', function (e) {
    var b = e.target.closest('.tg');
    if (!b) return;
    var k = b.dataset.k;
    view[k] = !view[k]; saved[k] = view[k]; persist();
    content.querySelectorAll('.flip, .zflip').forEach(function (c) { c.classList.remove('flip', 'zflip'); });
    applyView();
  });
  studyBar.addEventListener('change', function (e) {
    if (e.target.id === 'rateSel') prefs.rate = parseFloat(e.target.value) || 0.9;
    if (e.target.id === 'voiceSel') prefs.voice = e.target.value;
    persist();
  });

  content.addEventListener('click', function (e) {
    var t = e.target;
    var btn = t.closest('.copy-btn');
    if (btn) {
      var txt = btn.closest('.code').querySelector('code').innerText;
      var done = function () { btn.textContent = '已复制'; setTimeout(function () { btn.textContent = '复制'; }, 1400); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done); else done();
      return;
    }
    var spk = t.closest('.ibtn.spk');
    if (spk) { say(spk); return; }
    var rev = t.closest('.ibtn.rev');
    if (rev) { rev.closest('.ph').classList.toggle('flip'); refreshRev(); return; }
    var dp = t.closest('.dl-play');
    if (dp) { playDialog(dp); return; }
    // 点被遮住的英文 / 中文，直接显示
    var ew = t.closest('.ew'), zw = t.closest('.zw'), card = t.closest('.ph');
    if (ew && card && view.hideEn !== card.classList.contains('flip')) { card.classList.toggle('flip'); refreshRev(); return; }
    if (zw && card && view.hideZh !== card.classList.contains('zflip')) { card.classList.toggle('zflip'); }
  });

  /* ================= 文章头 / 目录 / 翻页 ================= */
  function renderHead(p, meta, h1) {
    var title = h1 ? h1.textContent : p.title;
    var cards = content.querySelectorAll('.ph').length - content.querySelectorAll('.turn').length;
    var dls = content.querySelectorAll('.dl').length;
    var turns = content.querySelectorAll('.turn').length;
    var qas = content.querySelectorAll('.qa').length;
    var tags = Array.isArray(meta.tags) ? meta.tags : (meta.tags ? [meta.tags] : []);
    var html = '<h1>' + esc(title) + '</h1>';
    if (meta.summary) html += '<p class="summary">' + esc(meta.summary) + '</p>';
    html += '<div class="meta">';
    if (meta.level) html += '<span class="lv lv-' + esc(meta.level) + '">' + esc(meta.level) + '</span>';
    if (cards > 0) html += '<span class="m">' + ICON.card + cards + ' 个词句</span>';
    if (dls) html += '<span class="m">' + ICON.chat + dls + ' 段对话 · ' + turns + ' 句</span>';
    if (qas) html += '<span class="m">' + ICON.qa + qas + ' 道练习</span>';
    if (tags.length) html += '<span class="tags">' + tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</span>';
    html += '</div>';
    docHead.innerHTML = html;
    if (h1) h1.remove();
    return title;
  }

  function buildToc(path) {
    var used = {}, heads = content.querySelectorAll('h2, h3');
    if (spy) spy.disconnect();
    if (heads.length < 2) { tocEl.innerHTML = ''; return; }
    var html = '<h4>本页目录</h4>';
    heads.forEach(function (h) {
      h.id = slugify(h.textContent, used);
      var href = '#/' + path + '#' + h.id;
      h.insertAdjacentHTML('afterbegin', '<a class="anchor" href="' + href + '" aria-hidden="true">#</a>');
      html += '<a href="' + href + '" data-id="' + h.id + '" class="' + (h.tagName === 'H3' ? 'l3' : 'l2') + '">' + esc(h.textContent.replace(/^#/, '')) + '</a>';
    });
    html += '<a class="back-top" href="#/' + path + '">↑ 回到顶部</a>';
    tocEl.innerHTML = html;
    var links = tocEl.querySelectorAll('a[data-id]');
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('active', l.dataset.id === en.target.id); });
      });
    }, { rootMargin: '-72px 0px -72% 0px' });
    heads.forEach(function (h) { spy.observe(h); });
  }

  function buildPager(path) {
    var i = pages.findIndex(function (p) { return p.path === path; });
    var html = '';
    if (i > 0) html += '<a class="prev" href="#/' + pages[i - 1].path + '"><small>← 上一篇 · ' + esc(pages[i - 1].cat.title) + '</small><b>' + esc(pages[i - 1].title) + '</b></a>';
    if (i >= 0 && i < pages.length - 1) html += '<a class="next" href="#/' + pages[i + 1].path + '"><small>' + esc(pages[i + 1].cat.title) + ' · 下一篇 →</small><b>' + esc(pages[i + 1].title) + '</b></a>';
    $('pager').innerHTML = html;
  }

  function buildCrumbs(p) {
    var parts = ['<a href="#/index">首页</a>'];
    if (p) {
      parts.push('<a href="#/' + p.cat.pages[0].path + '">' + esc(p.cat.title) + '</a>');
      p.trail.forEach(function (t) { parts.push('<span>' + esc(t) + '</span>'); });
    }
    $('crumbs').innerHTML = parts.join('<span class="sep">/</span>');
  }

  /* ================= 首页 ================= */
  function renderHome() {
    var cats = $('home-cats');
    if (cats) {
      cats.className = 'cat-grid';
      cats.innerHTML = NAV.map(function (c) {
        var groups = c.children.map(function (g) { return g.title; }).slice(0, 6);
        return '<a class="cat-card" href="#/' + c.pages[0].path + '"><div class="ch"><b>' + esc(c.title) + '</b><span class="n">' + c.pages.length + ' 篇</span></div>' +
          '<p>' + esc(c.desc) + '</p><ul>' + groups.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('') + '</ul></a>';
      }).join('');
    }
    var stats = $('home-stats');
    if (!stats) return;
    stats.className = 'stats';
    var set = function (items, dls) {
      stats.innerHTML = [[NAV.length, '个分类'], [pages.length, '篇学习笔记'], [items, '个词句'], [dls, '段情景对话']]
        .map(function (s) { return '<div class="stat"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('');
    };
    set('…', '…');
    ensureIndex().then(function () {
      var items = 0, dls = 0;
      docs.forEach(function (d) { items += d.w; dls += d.d; });
      if ($('home-stats') === stats) set(items, dls);
    });
  }

  /* ================= 路由 ================= */
  function parseHash() {
    var h = decodeURIComponent(location.hash || '');
    if (h.indexOf('#/') !== 0) return { path: 'index', anchor: '' };
    var rest = h.slice(2), k = rest.indexOf('#');
    return { path: k >= 0 ? rest.slice(0, k) : rest, anchor: k >= 0 ? rest.slice(k + 1) : '' };
  }

  function scrollToAnchor(anchor, smooth) {
    if (!anchor) return false;
    var t = document.getElementById(anchor);
    if (t) t.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    return !!t;
  }

  function route() {
    var r = parseHash(), path = r.path;
    if (path !== 'index' && !byPath[path]) path = 'index';
    if (path === current.path) { scrollToAnchor(r.anchor, true); return; }
    current.path = path;
    stopSpeaking();
    document.body.classList.remove('nav-open');
    var p = byPath[path] || null;
    renderSidebar(p ? p.cat : null);
    markActive(path, p ? p.cat : null);

    fetchDoc(path).then(function (md) {
      if (current.path !== path) return;
      var fm = parseFront(md);
      // 页面可在 front matter 里写 show: en，打开时直接显示英文（如音标课），不改动用户保存的偏好
      view.hideEn = fm.meta.show === 'en' ? false : saved.hideEn;
      content.innerHTML = marked.parse(fm.body);
      enhance(path);
      buildCrumbs(p);
      if (p) {
        var title = renderHead(p, fm.meta, content.querySelector('h1'));
        document.title = title + ' · ' + SITE;
        buildPager(path);
      } else {
        docHead.innerHTML = '';
        document.title = SITE;
        $('pager').innerHTML = '';
        renderHome();
      }
      buildStudyBar(!!content.querySelector('.ph'));
      if (!content.querySelector('.ph')) applyView();
      buildToc(path);
      if (!scrollToAnchor(r.anchor, false)) window.scrollTo(0, 0);
      updateProgress();
    }).catch(function () {
      docHead.innerHTML = '<h1>页面未找到</h1>';
      content.innerHTML = '<p>无法加载 <code>docs/' + esc(path) + '.md</code>，这一页可能还在编写中。</p>';
      studyBar.innerHTML = ''; tocEl.innerHTML = ''; $('pager').innerHTML = '';
    });
  }
  window.addEventListener('hashchange', route);

  /* ================= 阅读进度 ================= */
  function updateProgress() {
    var d = document.documentElement, max = d.scrollHeight - d.clientHeight;
    $('progress').style.width = (max > 0 ? Math.min(100, d.scrollTop / max * 100) : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ================= 搜索（英文、中文都能搜） ================= */
  var palette = $('palette'), searchEl = $('search'), resultsEl = $('results');
  var indexReady = null, docs = null, activeIdx = -1;

  function plain(md) {
    return md.replace(/```\w*/g, ' ').replace(/<[^>]+>/g, ' ')
      .replace(/\[!(\w+)\]/g, ' ').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[#>*`|_]+/g, ' ').replace(/-{3,}/g, ' ').replace(/\s+/g, ' ');
  }
  function countOf(body) {
    var w = 0, d = 0, kind = null;
    body.split(/\r?\n/).forEach(function (l) {
      var m = /^(?:>\s?)*```(phrases|words|dialog)\s*$/.exec(l);
      if (!kind && m) { kind = m[1]; if (kind === 'dialog') d++; return; }
      if (kind) {
        if (/^(?:>\s?)*```\s*$/.test(l)) { kind = null; return; }
        var s = l.replace(/^(?:>\s?)*/, '').trim();
        if (s && s.charAt(0) !== '#' && !/^title:/i.test(s)) w++;
      }
    });
    return { w: w, d: d };
  }
  function ensureIndex() {
    if (!indexReady) {
      // 优先使用构建好的单文件索引（tools/build_index.py）；缺的页面再逐页加载
      indexReady = fetch('assets/search-index.json').then(function (r) {
        if (!r.ok) throw new Error('no index');
        return r.json();
      }).catch(function () { return null; }).then(function (idx) {
        var pre = (idx && idx.docs) || {};
        return Promise.all(pages.map(function (p) {
          if (pre[p.path]) return pre[p.path];
          return fetchDoc(p.path).then(function (md) {
            var fm = parseFront(md || ''), c = countOf(fm.body);
            var tags = Array.isArray(fm.meta.tags) ? fm.meta.tags.join(' ') : (fm.meta.tags || '');
            return { t: tags.toLowerCase(), x: plain(fm.body), w: c.w, d: c.d };
          }).catch(function () { return { t: '', x: '', w: 0, d: 0 }; });
        })).then(function (list) {
          docs = pages.map(function (p, i) { return { p: p, text: list[i].x, tags: list[i].t, w: list[i].w || 0, d: list[i].d || 0 }; });
        });
      });
    }
    return indexReady;
  }

  function openSearch() {
    palette.hidden = false;
    searchEl.focus(); searchEl.select();
    ensureIndex().then(doSearch);
  }
  function closeSearch() { palette.hidden = true; }

  function doSearch() {
    var q = searchEl.value.trim().toLowerCase();
    activeIdx = -1;
    if (!q) {
      resultsEl.innerHTML = '<div class="grp">快速跳转</div>' + NAV.map(function (c) {
        return '<a href="#/' + c.pages[0].path + '"><span class="r-title">' + esc(c.title) + '</span><span class="r-path">' + esc(c.desc) + '</span></a>';
      }).join('');
      return;
    }
    if (!docs) { resultsEl.innerHTML = '<div class="empty">正在建立索引…</div>'; return; }
    var terms = q.split(/\s+/).filter(Boolean);
    var hits = [];
    docs.forEach(function (d) {
      var title = d.p.title.toLowerCase(), low = d.text.toLowerCase(), score = 0, firstPos = -1;
      for (var i = 0; i < terms.length; i++) {
        var t = terms[i], s = 0;
        if (title.indexOf(t) >= 0) s += 100;
        if (d.tags.indexOf(t) >= 0) s += 40;
        var pos = low.indexOf(t);
        if (pos >= 0) { s += 10 + Math.min(20, low.split(t).length); if (firstPos < 0) firstPos = pos; }
        if (!s) return;          // 所有关键词都要命中
        score += s;
      }
      var snip = '';
      if (firstPos >= 0) {
        var st = Math.max(0, firstPos - 30), en = Math.min(d.text.length, firstPos + 90);
        snip = (st > 0 ? '…' : '') + esc(d.text.slice(st, en)) + (en < d.text.length ? '…' : '');
        terms.forEach(function (t) {
          var re = new RegExp(esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
          snip = snip.replace(re, '<mark>$&</mark>');
        });
      }
      hits.push({ p: d.p, score: score, snip: snip });
    });
    hits.sort(function (a, b) { return b.score - a.score; });
    if (!hits.length) { resultsEl.innerHTML = '<div class="empty">没有找到「' + esc(q) + '」相关内容</div>'; return; }
    var html = '', lastCat = null;
    hits.slice(0, 20).forEach(function (h) {
      if (h.p.cat !== lastCat) { html += '<div class="grp">' + esc(h.p.cat.title) + '</div>'; lastCat = h.p.cat; }
      html += '<a href="#/' + h.p.path + '"><span class="r-title">' + esc(h.p.title) + '</span><span class="r-path">' +
        esc(h.p.trail.join(' / ')) + '</span>' + (h.snip ? '<div class="r-snip">' + h.snip + '</div>' : '') + '</a>';
    });
    resultsEl.innerHTML = html;
  }

  searchEl.addEventListener('input', doSearch);
  searchEl.addEventListener('keydown', function (e) {
    var items = resultsEl.querySelectorAll('a');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!items.length) return;
      e.preventDefault();
      activeIdx = (activeIdx + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items.forEach(function (a, i) { a.classList.toggle('active', i === activeIdx); });
      items[activeIdx].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && items.length) {
      location.hash = items[Math.max(activeIdx, 0)].getAttribute('href');
      closeSearch();
    }
  });
  resultsEl.addEventListener('click', function (e) { if (e.target.closest('a')) closeSearch(); });
  palette.addEventListener('click', function (e) { if (e.target === palette) closeSearch(); });
  $('searchBtn').addEventListener('click', openSearch);

  document.addEventListener('keydown', function (e) {
    var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.hidden ? openSearch() : closeSearch(); }
    else if (e.key === '/' && !typing && palette.hidden) { e.preventDefault(); openSearch(); }
    else if (e.key === 'Escape') { if (!palette.hidden) closeSearch(); else stopSpeaking(); }
  });

  /* ================= 主题 / 移动端菜单 ================= */
  $('themeBtn').addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* 忽略 */ }
  });
  $('menuBtn').addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  $('scrim').addEventListener('click', function () { document.body.classList.remove('nav-open'); });

  route();
})();
