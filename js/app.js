/* Bitácora — motor de la aplicación.
   Vanilla JS, sin dependencias externas en tiempo de ejecución.
   Todo funciona sin conexión una vez cargada la app por primera vez. */

/* ---------------------------------------------------------- */
/* Iconos (lucide-static, ISC) — ver CREDITS.md                */
/* ---------------------------------------------------------- */
const ICONS = {
  volume_2: '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',
  mic: '<path d="M12 19v3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><rect x="9" y="2" width="6" height="13" rx="3" />',
  arrow_left: '<path d="m12 19-7-7 7-7" /><path d="M19 12H5" />',
  search: '<path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />',
  book_open: '<path d="M12 5v16" /><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',
  check: '<path d="M20 6 9 17l-5-5" />',
  x: '<path d="M18 6 6 18" /><path d="m6 6 12 12" />',
  shuffle: '<path d="m18 14 4 4-4 4" /><path d="m18 2 4 4-4 4" /><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" /><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" /><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />',
  map_pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />',
  bus: '<path d="M8 6v6" /><path d="M15 6v6" /><path d="M2 12h19.6" /><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" /><circle cx="7" cy="18" r="2" /><path d="M9 18h5" /><circle cx="16" cy="18" r="2" />',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" />',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" />',
  route: '<circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" />',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" />'
};
function icon(name, cls) {
  return `<svg class="icon ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}
function moduleIcon(num) {
  return { 1: "book_open", 2: "bus", 3: "route", 4: "users", 5: "briefcase" }[num] || "book_open";
}

/* ---------------------------------------------------------- */
/* Almacenamiento local (persistente entre sesiones, offline)  */
/* ---------------------------------------------------------- */
const Storage = {
  PREFIX: "bitacora:",
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) { return false; }
  }
};

function todayStr(d = new Date()) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

/* ---------------------------------------------------------- */
/* Repetición espaciada — SM-2 simplificado                    */
/* ---------------------------------------------------------- */
const SRS = {
  blank() { return { interval: 0, reps: 0, ease: 2.5, due: Date.now(), seen: false }; },
  getAll() { return Storage.get("srs", {}); },
  saveAll(all) { Storage.set("srs", all); },
  stateFor(cardId) { const all = this.getAll(); return all[cardId] || this.blank(); },
  review(cardId, quality) {
    const all = this.getAll();
    const s = all[cardId] || this.blank();
    s.seen = true;
    if (quality === 1) { s.reps = 0; s.interval = 1; }
    else {
      if (s.reps === 0) s.interval = 1;
      else if (s.reps === 1) s.interval = 6;
      else s.interval = Math.max(1, Math.round(s.interval * s.ease));
      s.reps += 1;
    }
    const q5 = { 1: 1, 2: 3, 3: 4, 4: 5 }[quality];
    s.ease = Math.max(1.3, s.ease + (0.1 - (5 - q5) * (0.08 + (5 - q5) * 0.02)));
    s.due = Date.now() + s.interval * 24 * 60 * 60 * 1000;
    s.last = Date.now();
    all[cardId] = s;
    this.saveAll(all);
    return s;
  },
  isDue(cardId) { const s = this.stateFor(cardId); return s.seen && s.due <= Date.now(); },
  isNew(cardId) { return !this.stateFor(cardId).seen; }
};

/* ---------------------------------------------------------- */
/* Texto a voz — usa las voces ya instaladas en el dispositivo  */
/* ---------------------------------------------------------- */
const TTS = {
  voices: [], supported: "speechSynthesis" in window,
  init() {
    if (!this.supported) return;
    const load = () => { this.voices = speechSynthesis.getVoices(); };
    load();
    speechSynthesis.onvoiceschanged = load;
  },
  hasVoice(shortCode) { return this.voices.some(v => v.lang.toLowerCase().startsWith(shortCode.toLowerCase())); },
  speak(text, fullLang, shortLang) {
    if (!this.supported) return { ok: false, reason: "unsupported" };
    try { speechSynthesis.cancel(); } catch (e) {}
    const utter = new SpeechSynthesisUtterance(text);
    let voice = this.voices.find(v => v.lang.toLowerCase() === fullLang.toLowerCase());
    if (!voice) voice = this.voices.find(v => v.lang.toLowerCase().startsWith(shortLang.toLowerCase()));
    if (voice) { utter.voice = voice; utter.lang = voice.lang; } else { utter.lang = fullLang; }
    utter.rate = 0.88;
    speechSynthesis.speak(utter);
    return { ok: true, hadVoice: !!voice };
  }
};

/* ---------------------------------------------------------- */
/* Grabadora — para practicar "hablar" comparándote con el nativo */
/* ---------------------------------------------------------- */
const Recorder = {
  supported: !!(navigator.mediaDevices && window.MediaRecorder),
  mr: null, chunks: [], stream: null, lastUrl: null,
  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.chunks = [];
    this.mr = new MediaRecorder(this.stream);
    this.mr.ondataavailable = e => { if (e.data.size > 0) this.chunks.push(e.data); };
    this.mr.start();
  },
  stop() {
    return new Promise(resolve => {
      this.mr.onstop = () => {
        const blob = new Blob(this.chunks, { type: "audio/webm" });
        if (this.lastUrl) URL.revokeObjectURL(this.lastUrl);
        this.lastUrl = URL.createObjectURL(blob);
        this.stream.getTracks().forEach(t => t.stop());
        resolve(this.lastUrl);
      };
      this.mr.stop();
    });
  }
};

/* ---------------------------------------------------------- */
/* Utilidades                                                   */
/* ---------------------------------------------------------- */
function normalize(str) {
  return String(str).toLowerCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:'’]/g, "")
    .replace(/\s+/g, " ");
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr;
}
function allCardsForLang(lang) {
  return lang.modules.flatMap(m => m.cards.map(c => ({ ...c, moduleId: m.id, moduleTitle: m.title })));
}
function dictFor(lang) { return lang.code === "fr" ? BITACORA_DICT_FR : BITACORA_DICT_PT; }

/* ---------------------------------------------------------- */
/* Estado de la app                                             */
/* ---------------------------------------------------------- */
const state = {
  view: "home",          // home | langHome | module | review | dictionary
  langCode: null,
  moduleId: null,
  tab: "learn",           // learn | speak | read | write
  reviewQueue: [], reviewPos: 0, reviewRevealed: false, _reviewInit: false,
  speakIdx: 0, recording: false,
  writeIdx: 0, writeChecked: null,
  readRevealed: false,
  dictQuery: "", dictShown: 50,
  pendingFact: null,
  deferredInstallPrompt: null
};

function currentLang() { return BITACORA_DATA.langs[state.langCode]; }
function currentModule() { return currentLang() ? currentLang().modules.find(m => m.id === state.moduleId) : null; }

/* ---------------------------------------------------------- */
/* Progreso / racha / dato curioso                               */
/* ---------------------------------------------------------- */
function touchStreak() {
  const p = Storage.get("progress", { streak: 0, last: null });
  const today = todayStr();
  if (p.last !== today) {
    const yest = todayStr(new Date(Date.now() - 86400000));
    p.streak = (p.last === yest) ? p.streak + 1 : 1;
    p.last = today;
  }
  Storage.set("progress", p);
  return p;
}
function getProgress() { return Storage.get("progress", { streak: 0, last: null }); }

function checkForFact() {
  const p = getProgress();
  if (p.streak > 0 && p.streak % 2 === 0 && p.lastFactStreak !== p.streak) {
    const codes = ["pt", "fr"];
    const pick = codes[Math.floor(Math.random() * codes.length)];
    const set = BITACORA_FACTS[pick];
    p.factIndex = p.factIndex || {};
    const idx = (p.factIndex[pick] || 0) % set.items.length;
    state.pendingFact = { flag: set.flag, country: set.country, text: set.items[idx] };
    p.factIndex[pick] = idx + 1;
    p.lastFactStreak = p.streak;
    Storage.set("progress", p);
  }
}

function moduleStats(mod) {
  const total = mod.cards.length;
  const seen = mod.cards.filter(c => SRS.stateFor(c.id).seen).length;
  return { total, seen };
}
function langReviewCount(lang) {
  const all = allCardsForLang(lang);
  const due = all.filter(c => SRS.isDue(c.id)).length;
  const fresh = Math.min(15, all.filter(c => SRS.isNew(c.id)).length);
  return due + fresh;
}

/* ---------------------------------------------------------- */
/* Render raíz                                                   */
/* ---------------------------------------------------------- */
function render() {
  const app = document.getElementById("app");
  const p = getProgress();
  app.innerHTML = `
    <header class="app-header">
      <div class="brand" data-action="go-home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-name">Bitácora</span>
      </div>
      <div class="streak-badge" title="Racha de días activos">
        <span class="streak-num">${p.streak || 0}</span>
        <span class="streak-label">días</span>
      </div>
    </header>
    <main class="view" id="view"></main>
  `;
  renderView();
}

function renderView() {
  const el = document.getElementById("view");
  if (state.view === "home") el.innerHTML = viewHome();
  else if (state.view === "langHome") el.innerHTML = viewLangHome();
  else if (state.view === "review") el.innerHTML = viewReview();
  else if (state.view === "dictionary") el.innerHTML = viewDictionary();
  else el.innerHTML = viewModule();
  attachHandlers();
  window.scrollTo(0, 0);
}

/* ---------------------------------------------------------- */
/* Vista: inicio                                                 */
/* ---------------------------------------------------------- */
function viewHome() {
  const langs = Object.values(BITACORA_DATA.langs);
  const factCard = state.pendingFact ? `
    <div class="fact-card">
      <button class="fact-dismiss" data-action="dismiss-fact" aria-label="Cerrar">${icon("x")}</button>
      <p class="fact-eyebrow">${state.pendingFact.flag} Dato de ${esc(state.pendingFact.country)} · racha de ${getProgress().streak} días</p>
      <p class="fact-text">${esc(state.pendingFact.text)}</p>
    </div>` : "";

  const cards = langs.map(lang => {
    const allCards = allCardsForLang(lang);
    const totalSeen = allCards.filter(c => SRS.stateFor(c.id).seen).length;
    const pct = Math.round((totalSeen / allCards.length) * 100);
    return `
      <button class="lang-card" data-action="open-lang" data-lang="${lang.code}" style="--accent: var(--${lang.code})">
        <div class="lang-card-top">
          <span class="lang-flag">${lang.flagShort}</span>
          <span class="lang-name">${lang.label}</span>
        </div>
        <p class="lang-tagline">${esc(lang.tagline)}</p>
        <div class="lang-progress">
          <div class="lang-progress-bar"><div class="lang-progress-fill" style="width:${pct}%"></div></div>
          <span class="lang-progress-text">${totalSeen}/${allCards.length} palabras · ${lang.modules.length} módulos</span>
        </div>
      </button>`;
  }).join("");

  return `
    ${factCard}
    <section class="hero">
      <p class="hero-eyebrow">Cuaderno de bitácora</p>
      <h1 class="hero-title">Tu ruta del español<br>al portugués y al francés</h1>
    </section>
    <section class="lang-grid">${cards}</section>
    <section class="install-hint" id="installHint" hidden>
      <p>Puedes instalar Bitácora en tu pantalla de inicio para abrirla como una app y usarla sin conexión.</p>
      <button class="btn btn-ghost" data-action="install">Instalar</button>
    </section>
  `;
}

/* ---------------------------------------------------------- */
/* Vista: hub del idioma (repaso global + módulos + diccionario) */
/* ---------------------------------------------------------- */
function viewLangHome() {
  const lang = currentLang();
  const reviewCount = langReviewCount(lang);
  const dict = dictFor(lang);

  const modules = lang.modules.map(m => {
    const st = moduleStats(m);
    const pct = Math.round((st.seen / st.total) * 100);
    return `
      <button class="module-card" data-action="open-module" data-module="${m.id}">
        <span class="module-card-icon">${icon(moduleIcon(m.num))}</span>
        <span class="module-card-body">
          <span class="module-card-title">${m.num}. ${esc(m.title)}</span>
          <span class="module-card-sub">${esc(m.subtitle)}</span>
          <span class="module-card-bar"><span style="width:${pct}%"></span></span>
        </span>
        <span class="module-card-count">${st.seen}/${st.total}</span>
      </button>`;
  }).join("");

  return `
    <div class="module-wrap" style="--accent: var(--${lang.code})">
      <div class="module-header">
        <button class="back-btn" data-action="go-back" aria-label="Volver">${icon("arrow_left")}</button>
        <div>
          <p class="module-eyebrow">${lang.label}</p>
          <h2 class="module-title">${lang.country}</h2>
        </div>
      </div>
      <button class="review-cta" data-action="go-review">
        <span class="review-cta-icon">${icon("shuffle")}</span>
        <span class="review-cta-body">
          <span class="review-cta-label">Repasar (todos los módulos)</span>
          <span class="review-cta-count">${reviewCount > 0 ? reviewCount + " tarjetas listas hoy" : "Todo al día por ahora"}</span>
        </span>
      </button>
      <button class="dict-cta" data-action="go-dict">
        <span class="review-cta-icon">${icon("book_open")}</span>
        <span class="review-cta-body">
          <span class="review-cta-label">Diccionario de frecuencia</span>
          <span class="review-cta-count">${dict.length} palabras más usadas, con IPA</span>
        </span>
      </button>
      <h3 class="section-title">Módulos</h3>
      <div class="module-list">${modules}</div>
    </div>
  `;
}

/* ---------------------------------------------------------- */
/* Vista: repaso global (todas las tarjetas del idioma)          */
/* ---------------------------------------------------------- */
function viewReview() {
  const lang = currentLang();
  if (!state._reviewInit) {
    const all = allCardsForLang(lang);
    const due = all.filter(c => SRS.isDue(c.id));
    const fresh = all.filter(c => SRS.isNew(c.id)).slice(0, 15);
    state.reviewQueue = shuffle([...due, ...fresh]);
    state.reviewPos = 0; state.reviewRevealed = false; state._reviewInit = true;
  }
  const queue = state.reviewQueue;
  const header = `
    <div class="module-header">
      <button class="back-btn" data-action="go-back" aria-label="Volver">${icon("arrow_left")}</button>
      <div><p class="module-eyebrow">${lang.label}</p><h2 class="module-title">Repasar</h2></div>
    </div>`;

  let inner;
  if (state.reviewPos >= queue.length) {
    inner = `
      <div class="empty-state">
        <div class="stamp-mini">${icon("check")}</div>
        <h3>¡Repaso completado!</h3>
        <p>No quedan tarjetas pendientes de ningún módulo por ahora. Vuelve más tarde o sigue con «Hablar» y «Leer» en un módulo.</p>
        <button class="btn btn-secondary" data-action="restart-review">Repasar de nuevo</button>
      </div>`;
  } else {
    const card = queue[state.reviewPos];
    const progressText = `${state.reviewPos + 1} / ${queue.length}`;
    if (!state.reviewRevealed) {
      inner = `
        <p class="review-progress">${progressText} · ${esc(card.moduleTitle)}</p>
        <div class="flashcard">
          <p class="flash-label">¿Qué significa?</p>
          <p class="flash-target">${esc(card.target)}</p>
          <button class="audio-btn audio-btn-lg" data-action="speak" data-text="${esc(card.target)}" aria-label="Escuchar">${icon("volume_2")} Escuchar</button>
        </div>
        <button class="btn btn-primary btn-block" data-action="reveal">Mostrar respuesta</button>
      `;
    } else {
      inner = `
        <p class="review-progress">${progressText} · ${esc(card.moduleTitle)}</p>
        <div class="flashcard is-revealed">
          <p class="flash-label">¿Qué significa?</p>
          <p class="flash-target">${esc(card.target)}</p>
          <button class="audio-btn audio-btn-lg" data-action="speak" data-text="${esc(card.target)}" aria-label="Escuchar">${icon("volume_2")} Escuchar</button>
          <hr class="flash-divider">
          <p class="flash-es">${esc(card.es)}</p>
          <p class="flash-phon">/${esc(card.phon)}/</p>
          ${card.note ? `<p class="vocab-note">${esc(card.note)}</p>` : ""}
        </div>
        <div class="rate-grid">
          <button class="rate-btn rate-again" data-action="rate" data-q="1" data-card="${card.id}">Otra vez</button>
          <button class="rate-btn rate-hard" data-action="rate" data-q="2" data-card="${card.id}">Difícil</button>
          <button class="rate-btn rate-good" data-action="rate" data-q="3" data-card="${card.id}">Bien</button>
          <button class="rate-btn rate-easy" data-action="rate" data-q="4" data-card="${card.id}">Fácil</button>
        </div>
      `;
    }
  }
  return `<div class="module-wrap" style="--accent: var(--${lang.code})">${header}${inner}</div>`;
}

/* ---------------------------------------------------------- */
/* Vista: diccionario de frecuencia                              */
/* ---------------------------------------------------------- */
function viewDictionary() {
  const lang = currentLang();
  const dict = dictFor(lang);
  const q = normalize(state.dictQuery || "");
  const filtered = q ? dict.filter(e => normalize(e.word).includes(q)) : dict;
  const shown = filtered.slice(0, state.dictShown);
  const rows = shown.map(e => `
    <div class="dict-row">
      <span class="dict-rank">#${e.rank}</span>
      <span class="dict-word-wrap">
        <span class="dict-word">${esc(e.word)}</span>
        <span class="dict-ipa">/${esc(e.ipa)}/</span>
      </span>
      <button class="audio-btn audio-btn-sm" data-action="speak" data-text="${esc(e.word)}" aria-label="Escuchar">${icon("volume_2")}</button>
    </div>`).join("");

  const sourceNote = lang.code === "fr"
    ? "IPA real de open-dict-data/ipa-dict (MIT)."
    : "IPA generado con tugaphone (Apache-2.0), al no existir un diccionario IPA abierto para portugués europeo.";

  return `
    <div class="module-wrap" style="--accent: var(--${lang.code})">
      <div class="module-header">
        <button class="back-btn" data-action="go-back" aria-label="Volver">${icon("arrow_left")}</button>
        <div><p class="module-eyebrow">${lang.label}</p><h2 class="module-title">Diccionario de frecuencia</h2></div>
      </div>
      <p class="dict-credit">Las ${dict.length} palabras más usadas según listas de frecuencia abiertas (hermitdave/FrequencyWords, MIT). ${sourceNote} Detalles completos en CREDITS.md.</p>
      <div class="search-box">${icon("search")}<input type="text" id="dictSearch" placeholder="Buscar una palabra…" value="${esc(state.dictQuery || "")}" autocomplete="off"></div>
      <div class="dict-list">${rows || '<p class="hint-muted">Sin resultados para esa búsqueda.</p>'}</div>
      ${filtered.length > state.dictShown ? `<button class="btn btn-secondary btn-block" data-action="dict-more">Cargar más (quedan ${filtered.length - state.dictShown})</button>` : ""}
    </div>
  `;
}

/* ---------------------------------------------------------- */
/* Vista: dentro de un módulo (Aprender / Hablar / Leer / Escribir) */
/* ---------------------------------------------------------- */
function viewModule() {
  const lang = currentLang();
  const mod = currentModule();
  const tabs = [["learn", "Aprender"], ["speak", "Hablar"], ["read", "Leer"], ["write", "Escribir"]];
  const tabBtns = tabs.map(([id, label]) =>
    `<button class="tab-btn ${state.tab === id ? "is-active" : ""}" data-action="set-tab" data-tab="${id}">${label}</button>`
  ).join("");

  let body = "";
  if (state.tab === "learn") body = tabLearn(lang, mod);
  else if (state.tab === "speak") body = tabSpeak(lang, mod);
  else if (state.tab === "read") body = tabRead(lang, mod);
  else if (state.tab === "write") body = tabWrite(lang, mod);

  return `
    <div class="module-wrap" style="--accent: var(--${lang.code})">
      <div class="module-header">
        <button class="back-btn" data-action="go-back" aria-label="Volver">${icon("arrow_left")}</button>
        <div>
          <p class="module-eyebrow">${lang.label} · Módulo ${mod.num}</p>
          <h2 class="module-title">${esc(mod.title)}</h2>
        </div>
      </div>
      <nav class="tabbar">${tabBtns}</nav>
      <div class="tab-body">${body}</div>
    </div>
  `;
}

/* ---- Aprender ---- */
function tabLearn(lang, mod) {
  const pron = mod.num === 1 ? lang.pronunciation.map(r => `
    <div class="pron-rule">
      <span class="pron-rule-tag">${esc(r.rule)}</span>
      <span class="pron-rule-desc">${esc(r.desc)}</span>
    </div>`).join("") : "";

  const cards = mod.cards.map(c => `
    <div class="vocab-card">
      <div class="vocab-main">
        <div>
          <p class="vocab-es">${esc(c.es)}</p>
          <p class="vocab-target">${esc(c.target)}</p>
          <p class="vocab-phon">/${esc(c.phon)}/</p>
        </div>
        <button class="audio-btn" data-action="speak" data-text="${esc(c.target)}" aria-label="Escuchar">${icon("volume_2")}</button>
      </div>
      ${c.note ? `<p class="vocab-note">${esc(c.note)}</p>` : ""}
    </div>`).join("");

  const ff = mod.falseFriends.map(f => `
    <div class="ff-item">
      <div class="ff-word ff-es"><span class="ff-tag">ES</span> ${esc(f.es)} <span class="ff-meaning">— ${esc(f.esMeaning)}</span></div>
      <div class="ff-word ff-target"><span class="ff-tag">${lang.flagShort}</span> ${esc(f.target)} <span class="ff-meaning">— ${esc(f.targetMeaning)}</span></div>
    </div>`).join("");

  return `
    ${mod.num === 1 ? `
    <details class="disclosure" open>
      <summary>Cómo suena el ${lang.label.toLowerCase()}</summary>
      <p class="bridge-note">${esc(lang.bridgeNote)}</p>
      <div class="pron-guide">${pron}</div>
    </details>` : ""}
    <h3 class="section-title">Vocabulario del módulo</h3>
    <div class="card-list">${cards}</div>
    <details class="disclosure">
      <summary>⚠️ Falsos amigos con el español</summary>
      <div class="ff-list">${ff}</div>
    </details>
    <button class="btn btn-primary btn-block" data-action="go-review">Repasar estas tarjetas →</button>
  `;
}

/* ---- Hablar (shadowing + grabación) ---- */
function tabSpeak(lang, mod) {
  const lines = mod.dialogue.lines;
  const i = state.speakIdx % lines.length;
  const line = lines[i];
  const recBlock = Recorder.supported ? `
    <div class="record-row">
      <button class="btn ${state.recording ? "btn-recording" : "btn-secondary"}" data-action="toggle-record">
        ${state.recording ? "⏺ Grabando… toca para parar" : icon("mic") + " Grabarme"}
      </button>
      ${Recorder.lastUrl ? `<audio class="playback" controls src="${Recorder.lastUrl}"></audio>` : ""}
    </div>` : `<p class="hint-muted">Tu navegador no permite grabar audio aquí; puedes seguir practicando en voz alta sin grabarte.</p>`;

  return `
    <p class="review-progress">Frase ${i + 1} / ${lines.length} · ${esc(mod.dialogue.title)}</p>
    <div class="speak-card">
      <p class="speak-who">${esc(line.who)}</p>
      <p class="speak-target">${esc(line.target)}</p>
      <p class="speak-es">${esc(line.es)}</p>
      <button class="audio-btn audio-btn-lg" data-action="speak" data-text="${esc(line.target)}" aria-label="Escuchar">${icon("volume_2")} Escuchar nativo</button>
    </div>
    ${recBlock}
    <button class="btn btn-primary btn-block" data-action="next-speak">Siguiente frase →</button>
  `;
}

/* ---- Leer (diálogo + comprensión) ---- */
function tabRead(lang, mod) {
  const d = mod.dialogue;
  const lines = d.lines.map(l => `
    <div class="dialogue-line">
      <button class="audio-btn" data-action="speak" data-text="${esc(l.target)}" aria-label="Escuchar">${icon("volume_2")}</button>
      <div>
        <p class="dialogue-who">${esc(l.who)}</p>
        <p class="dialogue-target">${esc(l.target)}</p>
        <p class="dialogue-es">${esc(l.es)}</p>
      </div>
    </div>`).join("");

  let quiz = "";
  if (state.readRevealed) {
    quiz = `<h3 class="section-title">Comprueba que entendiste</h3>` + d.questions.map((q, qi) => `
      <div class="quiz-q">
        <p class="quiz-question">${esc(q.q)}</p>
        <div class="quiz-options">
          ${q.options.map((opt, oi) => `<button class="quiz-opt" data-action="quiz-answer" data-qi="${qi}" data-oi="${oi}">${esc(opt)}</button>`).join("")}
        </div>
        <p class="quiz-feedback" id="qf-${qi}"></p>
      </div>`).join("");
  }

  return `
    <p class="dialogue-context">${esc(d.context)}</p>
    <div class="dialogue-list">${lines}</div>
    ${state.readRevealed ? quiz : `<button class="btn btn-primary btn-block" data-action="reveal-read">Comprobar comprensión →</button>`}
  `;
}

/* ---- Escribir (traducción directa + huecos con palabras frecuentes) ---- */
function writeItems(mod) {
  const cardItems = mod.cards.map(c => ({ type: "card", id: c.id, es: c.es, target: c.target }));
  const clozeItems = (mod.cloze || []).map(cl => ({ type: "cloze", ...cl }));
  return [...cardItems, ...clozeItems];
}

function tabWrite(lang, mod) {
  const items = writeItems(mod);
  const i = state.writeIdx % items.length;
  const item = items[i];
  const checked = state.writeChecked;

  if (item.type === "cloze" && item.mode === "select") {
    const sentenceShown = checked
      ? `${esc(item.before)}<strong class="cloze-blank-filled">${esc(item.blank)}</strong>${esc(item.after)}`
      : `${esc(item.before)}<span class="cloze-blank">___</span>${esc(item.after)}`;
    return `
      <p class="review-progress">${i + 1} / ${items.length}</p>
      <div class="write-card">
        <p class="write-prompt">Completa la frase</p>
        <p class="cloze-sentence">${sentenceShown}</p>
        <p class="write-es">${esc(item.es)}</p>
        ${!checked ? `
          <div class="quiz-options">
            ${item.options.map(opt => `<button class="quiz-opt" data-action="select-cloze" data-value="${esc(opt)}">${esc(opt)}</button>`).join("")}
          </div>` : `
          <p class="write-feedback ${checked.correct ? "is-correct" : "is-wrong"}">
            ${checked.correct ? icon("check") + " Correcto." : icon("x") + " Incorrecto. La respuesta correcta es:"}
          </p>
          ${!checked.correct ? `<p class="write-answer">${esc(item.blank)}</p>` : ""}
        `}
      </div>
      ${checked ? `<button class="btn btn-primary btn-block" data-action="next-write">Siguiente →</button>` : ""}
    `;
  }

  // card directo, o cloze en modo "type"
  const promptEs = item.type === "card" ? item.es : item.es;
  const expected = item.type === "card" ? item.target : item.blank;
  const sentenceShown = item.type === "cloze"
    ? (checked
        ? `${esc(item.before)}<strong class="cloze-blank-filled">${esc(item.blank)}</strong>${esc(item.after)}`
        : `${esc(item.before)}<span class="cloze-blank">___</span>${esc(item.after)}`)
    : "";

  return `
    <p class="review-progress">${i + 1} / ${items.length}</p>
    <div class="write-card">
      <p class="write-prompt">${item.type === "cloze" ? "Completa la frase" : "¿Cómo se dice…?"}</p>
      ${item.type === "cloze" ? `<p class="cloze-sentence">${sentenceShown}</p>` : ""}
      <p class="write-es">${esc(promptEs)}</p>
      <input type="text" id="writeInput" class="write-input" placeholder="Escribe en ${lang.label.toLowerCase()}…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${checked ? esc(checked.value) : ""}">
      ${checked ? `
        <p class="write-feedback ${checked.correct ? "is-correct" : "is-wrong"}">
          ${checked.correct ? icon("check") + " Correcto." : icon("x") + " Incorrecto. La respuesta correcta es:"}
        </p>
        ${!checked.correct ? `<p class="write-answer">${esc(expected)}</p>` : ""}
      ` : ""}
    </div>
    <div class="write-actions">
      ${!checked ? `<button class="btn btn-primary btn-block" data-action="check-write" data-expected="${esc(expected)}">Comprobar</button>` : `<button class="btn btn-primary btn-block" data-action="next-write">Siguiente →</button>`}
    </div>
  `;
}

/* ---------------------------------------------------------- */
/* Manejo de eventos (delegación)                               */
/* ---------------------------------------------------------- */
function attachHandlers() {
  document.querySelectorAll("[data-action]").forEach(el => el.addEventListener("click", onAction));
  const wi = document.getElementById("writeInput");
  if (wi) {
    wi.focus();
    wi.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const btn = document.querySelector('[data-action="check-write"], [data-action="next-write"]');
        if (btn) btn.click();
      }
    });
  }
  const ds = document.getElementById("dictSearch");
  if (ds) {
    ds.addEventListener("input", e => {
      state.dictQuery = e.target.value;
      state.dictShown = 50;
      renderView();
      const el = document.getElementById("dictSearch");
      if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
    });
  }
}

async function onAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;

  if (action === "go-home") { state.view = "home"; renderView(); }
  else if (action === "go-back") {
    if (state.view === "langHome") state.view = "home";
    else state.view = "langHome";
    renderView();
  }
  else if (action === "open-lang") {
    state.view = "langHome"; state.langCode = el.dataset.lang;
    renderView();
  }
  else if (action === "open-module") {
    state.view = "module"; state.moduleId = el.dataset.module; state.tab = "learn";
    state.speakIdx = 0; state.writeIdx = 0; state.writeChecked = null; state.readRevealed = false;
    renderView();
  }
  else if (action === "go-review") { state.view = "review"; state._reviewInit = false; renderView(); }
  else if (action === "go-dict") { state.view = "dictionary"; state.dictQuery = ""; state.dictShown = 50; renderView(); }
  else if (action === "dict-more") { state.dictShown += 50; renderView(); }
  else if (action === "set-tab") { state.tab = el.dataset.tab; renderView(); }
  else if (action === "speak") { TTS.speak(el.dataset.text, currentLang().speechLang, currentLang().speechFallback); }
  else if (action === "reveal") { state.reviewRevealed = true; renderView(); }
  else if (action === "reveal-read") { state.readRevealed = true; renderView(); }
  else if (action === "restart-review") { state._reviewInit = false; state.reviewPos = 0; renderView(); }
  else if (action === "dismiss-fact") { state.pendingFact = null; renderView(); }
  else if (action === "rate") {
    SRS.review(el.dataset.card, parseInt(el.dataset.q, 10));
    if (parseInt(el.dataset.q, 10) === 1) state.reviewQueue.push(state.reviewQueue[state.reviewPos]);
    state.reviewPos += 1; state.reviewRevealed = false;
    renderView();
  }
  else if (action === "next-speak") { state.speakIdx += 1; Recorder.lastUrl = null; renderView(); }
  else if (action === "toggle-record") {
    if (!state.recording) {
      try { await Recorder.start(); state.recording = true; renderView(); }
      catch (err) { alert("No se pudo acceder al micrófono. Revisa los permisos de la app."); }
    } else { await Recorder.stop(); state.recording = false; renderView(); }
  }
  else if (action === "quiz-answer") {
    const mod = currentModule();
    const q = mod.dialogue.questions[parseInt(el.dataset.qi, 10)];
    const oi = parseInt(el.dataset.oi, 10);
    const fb = document.getElementById("qf-" + el.dataset.qi);
    fb.innerHTML = oi === q.answer
      ? icon("check") + " Correcto."
      : icon("x") + ` Incorrecto. La respuesta correcta es: <strong>${esc(q.options[q.answer])}</strong>`;
    fb.className = "quiz-feedback " + (oi === q.answer ? "is-correct" : "is-wrong");
  }
  else if (action === "check-write") {
    const val = document.getElementById("writeInput").value;
    const expected = el.dataset.expected;
    const correct = normalize(val) === normalize(expected);
    state.writeChecked = { value: val, correct };
    renderView();
  }
  else if (action === "select-cloze") {
    const items = writeItems(currentModule());
    const item = items[state.writeIdx % items.length];
    state.writeChecked = { value: el.dataset.value, correct: el.dataset.value === item.blank };
    renderView();
  }
  else if (action === "next-write") { state.writeIdx += 1; state.writeChecked = null; renderView(); }
  else if (action === "install") {
    if (state.deferredInstallPrompt) { state.deferredInstallPrompt.prompt(); await state.deferredInstallPrompt.userChoice; state.deferredInstallPrompt = null; }
  }
}

/* ---------------------------------------------------------- */
/* Arranque                                                      */
/* ---------------------------------------------------------- */
function init() {
  TTS.init();
  touchStreak();
  checkForFact();

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    state.deferredInstallPrompt = e;
    const hint = document.getElementById("installHint");
    if (hint) hint.hidden = false;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => { navigator.serviceWorker.register("./sw.js").catch(() => {}); });
  }

  render();
}

document.addEventListener("DOMContentLoaded", init);
