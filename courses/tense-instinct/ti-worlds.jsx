/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · Lesson 02 · Three Time Worlds — компоненти
 * Історія Alex + Chrono Compass. Контент — у lessons/ti-02.js,
 * стан — через ctx.sstate / ctx.setS (див. LessonPlayer).
 *
 *  TwScene        — фото-сцена або SVG-ілюстрація (fallback без запитів)
 *  TwCompass      — Chrono Compass: Past / Present / Future (radiogroup)
 *  TwWorldItem    — «який це світ?» з поступовими підказками (3 рівні)
 *  TwAnswerField  — відповідь-речення з чесною «розумною» перевіркою
 *  TwOrderBoard   — впорядкування карток: мишка, дотик, клавіатура, кнопки
 *  + 11 екранів (тип 'tw-…'), зареєстровані в TI_SCREEN_TEMPLATES.
 * ═══════════════════════════════════════════════════════════════ */

Object.assign(TI_ICON_PATHS, {
  ball: <><circle cx="12" cy="12" r="10" /><path d="M12 7l4 3-1.5 4.5h-5L8 10z" /><path d="M12 2v5M16 10l5-1.5M14.5 14.5l3 4.5M9.5 14.5l-3 4.5M8 10L3 8.5" /></>,
  plane: <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />,
  backpack: <><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><path d="M8 14h8v4H8z" /></>,
  school: <><path d="M3 21h18M5 21V10l7-5 7 5v11" /><path d="M10 21v-5h4v5" /><circle cx="12" cy="11" r="1.6" /></>,
  cap: <><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></>,
  dice: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1.2" /><circle cx="16" cy="16" r="1.2" /><circle cx="12" cy="12" r="1.2" /><circle cx="16" cy="8" r="1.2" /><circle cx="8" cy="16" r="1.2" /></>,
  volumeOff: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></>,
  grip: <><circle cx="9" cy="6" r="1.3" /><circle cx="15" cy="6" r="1.3" /><circle cx="9" cy="12" r="1.3" /><circle cx="15" cy="12" r="1.3" /><circle cx="9" cy="18" r="1.3" /><circle cx="15" cy="18" r="1.3" /></>,
  up: <polyline points="18 15 12 9 6 15" />,
  down: <polyline points="6 9 12 15 18 9" />,
  camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>,
});

const TW_WORLDS = [
  { key: 'past', label: 'Past', sub: 'before now', uk: 'Минуле' },
  { key: 'present', label: 'Present', sub: 'now / generally', uk: 'Теперішнє' },
  { key: 'future', label: 'Future', sub: 'after now', uk: 'Майбутнє' },
];
const twWorld = (k) => TW_WORLDS.find(w => w.key === k) || TW_WORLDS[1];

/* ── Звук: необов’язковий, за замовчуванням вимкнений ── */
const TW_SOUND_KEY = 'inkwell-ti-sound';
let twAudioCtx = null;
function twSoundOn() { try { return localStorage.getItem(TW_SOUND_KEY) === '1'; } catch (e) { return false; } }
function twPlay(kind) {
  if (!twSoundOn()) return;
  try {
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    twAudioCtx = twAudioCtx || new AC();
    const ac = twAudioCtx; const t0 = ac.currentTime + 0.02;
    const notes = { portal: [392, 523, 659, 784], ok: [660, 880], soft: [392], spin: [330, 440], win: [523, 659, 784, 1046] }[kind] || [440];
    notes.forEach((f, i) => {
      const o = ac.createOscillator(), g = ac.createGain(); const t = t0 + i * 0.09;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.07, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + 0.42);
    });
  } catch (e) {}
}
function TwSoundToggle() {
  const [on, setOn] = useState(twSoundOn);
  const flip = () => { const v = !on; setOn(v); try { localStorage.setItem(TW_SOUND_KEY, v ? '1' : '0'); } catch (e) {} if (v) setTimeout(() => twPlay('ok'), 0); };
  return <TiButton size="sm" icon={on ? 'volume' : 'volumeOff'} onClick={flip} aria-pressed={on} className="tw-sound">{on ? 'Sound on' : 'Sound off'}</TiButton>;
}

/* ── Випадкові числа: crypto, якщо є ── */
function twRandInt(n) {
  try { if (window.crypto && window.crypto.getRandomValues) { const a = new Uint32Array(1); window.crypto.getRandomValues(a); return a[0] % n; } } catch (e) {}
  return Math.floor(Math.random() * n);
}

/* ── Нормалізація відповідей: регістр, пунктуація, пробіли, скорочення ── */
const TW_CONTRACTIONS = [
  [/\bi'm\b/g, 'i am'], [/\b(i|you|we|they|he|she|it)'ll\b/g, '$1 will'], [/\b(you|we|they)'re\b/g, '$1 are'],
  [/\b(he|she|it)'s (going|getting|coming)\b/g, '$1 is $2'], [/\bwon't\b/g, 'will not'], [/\bcan't\b/g, 'cannot'],
  [/\b(do|does|did|is|are|was|were|have|has)n't\b/g, '$1 not'], [/\b(i|you|we|they)'ve\b/g, '$1 have'],
];
function twNorm(s) {
  let t = String(s || '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”"«»]/g, '');
  TW_CONTRACTIONS.forEach(([re, r]) => { t = t.replace(re, r); });
  return t.replace(/[.,!?;:()]+/g, ' ').replace(/\s+/g, ' ').trim();
}
// item: { accept, diagnose:[{any,hint,hintUk}], needs, oldTime, newTime, verbs, verbHint }
// → { status: 'empty' | 'ok' | 'hint' | 'unsure', hint, hintUk }
function twCheck(item, raw, prefix) {
  let a = twNorm(raw);
  if (prefix) { const p = twNorm(prefix); if (a === p) a = ''; else if (a.startsWith(p + ' ')) a = a.slice(p.length + 1); }
  if (!a) return { status: 'empty' };
  if ((item.accept || []).map(twNorm).includes(a)) return { status: 'ok' };
  const has = (x) => (' ' + a + ' ').includes(' ' + twNorm(x) + ' ');
  for (const d of item.diagnose || []) if (d.any.some(has)) return { status: 'hint', hint: d.hint, hintUk: d.hintUk };
  const old = (item.oldTime || []).find(x => a.includes(twNorm(x)));
  if (old) return { status: 'hint', hint: `Remove the old time expression “${old}”. The new time is “${item.newTime}”.`, hintUk: `Прибери старий вираз часу «${old}». Новий час — «${item.newTime}».` };
  if ((item.needs || []).length && !item.needs.every(x => a.includes(twNorm(x)))) return { status: 'hint', hint: `Use the new time expression: “${item.newTime}”.`, hintUk: `Використай новий вираз часу: «${item.newTime}».` };
  if ((item.verbs || []).length && !item.verbs.some(has)) return { status: 'hint', hint: item.verbHint, hintUk: item.verbHintUk };
  return { status: 'unsure' };
}

/* ── Речення з позначками: дієслово, вираз часу, цільова частина ── */
function twSegments(text, marks) {
  const t = String(text || '');
  const cls = Array.from(t, () => []);
  marks.forEach(m => { if (!m || !m.s) return; const i = t.indexOf(m.s); if (i < 0) return; for (let j = i; j < i + m.s.length; j++) cls[j].push(m.k); });
  const out = []; let cur = null;
  Array.from(t).forEach((ch, j) => { const key = cls[j].join(' '); if (!cur || cur.key !== key) { cur = { key, t: '' }; out.push(cur); } cur.t += ch; });
  return out;
}
function TwSentence({ text, verb, verbs, marker, target, showVerb = true, showMarker = true, className }) {
  const marks = [{ s: target, k: 'target' }];
  if (showMarker) marks.push({ s: marker, k: 'time' });
  if (showVerb) [].concat(verbs || verb || []).forEach(v => marks.push({ s: v, k: 'verb' }));
  return (
    <span className={cx('tw-sentence', className)}>
      {twSegments(text, marks).map((g, i) => g.key ? <mark key={i} className={g.key.split(' ').map(k => `tw-m-${k}`).join(' ')}>{g.t}</mark> : <React.Fragment key={i}>{g.t}</React.Fragment>)}
    </span>
  );
}

/* ── Alex: репліки (поступово або одразу) ── */
function TwAlex({ lines, showUk, count, compact }) {
  const shown = (lines || []).slice(0, count == null ? lines.length : count);
  return (
    <div className={cx('tw-alex', compact && 'is-compact')}>
      <div className="tw-alex-avatar" aria-hidden="true"><span>A</span></div>
      <div className="tw-alex-lines" aria-live="polite">
        <div className="tw-alex-name">Alex</div>
        {shown.map((l, i) => <p key={i} className="tw-alex-line" style={{ '--d': `${i * 0.08}s` }}>“{l.en}”<Uk show={showUk} block>{l.uk}</Uk></p>)}
      </div>
    </div>
  );
}
function TwAlexLine({ line, showUk }) { return line ? <TwAlex lines={[line]} showUk={showUk} compact /> : null; }

/* ═══ Сцени: фото або SVG-ілюстрація ═════════════════════════════ */
function useTwUid(p) { return useMemo(() => p + Math.random().toString(36).slice(2, 8), []); }

function TwLabArt({ state }) {
  const u = useTwUid('lab');
  const P = [{ k: 'past', x: 330 }, { k: 'present', x: 800 }, { k: 'future', x: 1270 }];
  const arch = (x) => `M ${x - 118} 640 L ${x - 118} 330 A 118 118 0 0 1 ${x + 118} 330 L ${x + 118} 640 Z`;
  const sector = (a0, a1, r0, r1) => {
    const p = (a, r) => { const t = (a - 90) * Math.PI / 180; return `${(Math.cos(t) * r).toFixed(1)} ${(Math.sin(t) * r).toFixed(1)}`; };
    return `M ${p(a0, r1)} A ${r1} ${r1} 0 0 1 ${p(a1, r1)} L ${p(a1, r0)} A ${r0} ${r0} 0 0 0 ${p(a0, r0)} Z`;
  };
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className={cx('tw-art tw-lab', `is-${state || 'broken'}`)} aria-hidden="true">
      <defs>
        <radialGradient id={`${u}-bg`} cx="0.5" cy="0.42" r="0.8"><stop offset="0" stopColor="#1D2650" /><stop offset="1" stopColor="#05070F" /></radialGradient>
        <linearGradient id={`${u}-brass`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F6DC9A" /><stop offset="0.45" stopColor="#C0903F" /><stop offset="1" stopColor="#5E421A" /></linearGradient>
        <linearGradient id={`${u}-floor`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#151C3A" /><stop offset="1" stopColor="#04060C" /></linearGradient>
        {P.map(p => (
          <radialGradient key={p.k} id={`${u}-${p.k}`} cx="0.5" cy="0.45" r="0.65">
            <stop offset="0" stopColor="#fff" stopOpacity="0.95" /><stop offset="0.35" className={`tw-stop-${p.k}`} stopOpacity="0.85" /><stop offset="1" className={`tw-stop-${p.k}`} stopOpacity="0.05" />
          </radialGradient>
        ))}
      </defs>
      <rect width="1600" height="900" fill={`url(#${u}-bg)`} />
      {Array.from({ length: 9 }, (_, i) => <rect key={i} x={i * 180 - 20} y="40" width="164" height="560" rx="8" className="tw-lab-panel" />)}
      {Array.from({ length: 14 }, (_, i) => <circle key={i} cx={64 + i * 113} cy="78" r="5" className="tw-lab-led" style={{ '--i': i }} />)}
      <rect y="620" width="1600" height="280" fill={`url(#${u}-floor)`} />
      <ellipse cx="800" cy="770" rx="560" ry="70" className="tw-lab-floorglow" />
      {P.map((p, i) => (
        <g key={p.k} className={cx('tw-portal', `is-${p.k}`)} style={{ '--i': i }}>
          <ellipse cx={p.x} cy="650" rx="150" ry="20" className="tw-portal-base" />
          <path d={arch(p.x)} fill={`url(#${u}-${p.k})`} className="tw-portal-fill" />
          <path d={arch(p.x)} className="tw-portal-ring" />
          <text x={p.x} y="186" textAnchor="middle" className="tw-portal-label">{p.k.toUpperCase()}</text>
        </g>
      ))}
      <g transform="translate(800 590)" className="tw-lab-compass">
        <path d="M -78 60 L 78 60 L 96 200 L -96 200 Z" className="tw-ped" />
        <circle r="156" className="tw-compass-halo" />
        <circle r="146" fill={`url(#${u}-brass)`} />
        <circle r="124" className="tw-dial" />
        {Array.from({ length: 36 }, (_, i) => <line key={i} x1="0" y1="-120" x2="0" y2={i % 3 ? -110 : -102} transform={`rotate(${i * 10})`} className="tw-tick" />)}
        <path d={sector(-80, -40, 66, 98)} className="tw-sector is-past" />
        <path d={sector(-20, 20, 66, 98)} className="tw-sector is-present" />
        <path d={sector(40, 80, 66, 98)} className="tw-sector is-future" />
        <g className="tw-needle"><path d="M 0 -104 L 10 0 L 0 22 L -10 0 Z" /></g>
        <circle r="13" fill={`url(#${u}-brass)`} />
      </g>
    </svg>
  );
}

// Футбольне поле: та сама композиція, різне світло (минуле / теперішнє / майбутнє)
function TwFigure({ world }) {
  const ghost = world === 'future';
  return (
    <g className={cx('tw-figure', ghost && 'is-ghost')} transform="translate(700 812) scale(1.08)">
      <path d="M -6 -150 L -14 -4" className="tw-fig-leg" />
      <path d="M 10 -150 L 58 -86 L 112 -66" className="tw-fig-leg" />
      <path d="M -40 -150 C -46 -210 -40 -262 -6 -282 L 18 -282 C 46 -262 50 -210 42 -150 Z" className="tw-fig-hoodie" />
      <path d="M -30 -262 L -92 -206" className="tw-fig-arm" /><path d="M 34 -262 L 92 -230" className="tw-fig-arm" />
      <circle cx="4" cy="-312" r="30" className="tw-fig-head" />
      <path d="M -26 -318 C -26 -350 34 -354 36 -316 C 24 -330 -6 -334 -26 -318 Z" className="tw-fig-hair" />
      <circle cx="140" cy="-58" r="22" className="tw-fig-ball" />
      <path d="M 140 -70 L 151 -62 L 147 -49 L 133 -49 L 129 -62 Z" className="tw-fig-ball-p" />
    </g>
  );
}
const TW_SKY = { past: ['#4A2724', '#C0653A', '#F4BE78'], present: ['#4C9BDD', '#9FD0F2', '#E6F3FB'], future: ['#0B0D30', '#262C78', '#5A62C8'] };
const TW_GRASS = { past: ['#8C8A3C', '#5A5A22'], present: ['#5CAA4C', '#357A30'], future: ['#2A5470', '#132A3E'] };
function TwFieldArt({ world }) {
  const u = useTwUid('fld'); const w = TW_SKY[world] ? world : 'present';
  const sky = TW_SKY[w], grass = TW_GRASS[w];
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className={cx('tw-art tw-field', `is-${w}`)} aria-hidden="true">
      <defs>
        <linearGradient id={`${u}-sky`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="0.55" stopColor={sky[1]} /><stop offset="1" stopColor={sky[2]} /></linearGradient>
        <linearGradient id={`${u}-grass`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={grass[0]} /><stop offset="1" stopColor={grass[1]} /></linearGradient>
        <radialGradient id={`${u}-sun`}><stop offset="0" stopColor="#FFF6D8" /><stop offset="0.4" stopColor={w === 'future' ? '#B9C3FF' : '#FFD98A'} stopOpacity="0.9" /><stop offset="1" stopColor={w === 'future' ? '#7C86FF' : '#FFB347'} stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="1600" height="900" fill={`url(#${u}-sky)`} />
      {w === 'past' && <circle cx="330" cy="520" r="260" fill={`url(#${u}-sun)`} />}
      {w === 'present' && <circle cx="1320" cy="150" r="200" fill={`url(#${u}-sun)`} />}
      {w === 'future' && <>
        {Array.from({ length: 40 }, (_, i) => <circle key={i} cx={(i * 397) % 1600} cy={(i * 173) % 430} r={i % 4 ? 1.6 : 2.6} className="tw-star" style={{ '--i': i }} />)}
        <circle cx="1260" cy="170" r="190" fill={`url(#${u}-sun)`} opacity="0.75" />
        <g className="tw-holo">{Array.from({ length: 9 }, (_, i) => <line key={i} x1={800} y1={250} x2={i * 200} y2={560} />)}<line x1="0" y1="470" x2="1600" y2="470" /><line x1="0" y1="520" x2="1600" y2="520" /></g>
      </>}
      <path d="M 0 560 L 0 470 C 120 430 200 470 300 440 C 420 400 520 450 640 430 C 780 400 900 450 1020 420 C 1160 390 1260 440 1380 420 C 1480 404 1550 430 1600 420 L 1600 560 Z" className="tw-trees" />
      <path d="M 0 900 L 0 560 L 1600 560 L 1600 900 Z" fill={`url(#${u}-grass)`} />
      {Array.from({ length: 6 }, (_, i) => <path key={i} d={`M ${-200 + i * 380} 900 L ${80 + i * 300} 560 L ${230 + i * 300} 560 L ${-20 + i * 380} 900 Z`} className="tw-stripe" />)}
      <path d="M 120 900 L 400 560 M 1480 900 L 1200 560 M 0 700 L 1600 700" className="tw-line" />
      <g className="tw-goal"><path d="M 1180 600 L 1180 470 L 1430 470 L 1430 600" /><path d="M 1180 470 L 1230 500 L 1380 500 L 1430 470 M 1230 500 L 1230 610 M 1380 500 L 1380 610" className="tw-net" /></g>
      <TwFigure world={w} />
      {w === 'past' && <g className="tw-leaves">{[[220, 160], [520, 90], [980, 210], [1280, 120], [1450, 330], [760, 300]].map(([x, y], i) => <path key={i} d={`M ${x} ${y} q 16 -14 30 0 q -14 16 -30 0 z`} style={{ '--i': i }} />)}</g>}
      {w === 'past' && <rect width="1600" height="900" className="tw-sepia" />}
    </svg>
  );
}

// Історія Алекса: телефон (минуле) · камера в парку (теперішнє) · уявне майбутнє
function TwStoryArt({ world }) {
  const u = useTwUid('st');
  if (world === 'past') return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="tw-art tw-storyart is-past" aria-hidden="true">
      <defs><linearGradient id={`${u}-r`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F2B76C" /><stop offset="0.5" stopColor="#9C5A34" /><stop offset="1" stopColor="#3A2216" /></linearGradient></defs>
      <rect width="1600" height="900" fill={`url(#${u}-r)`} />
      <path d="M 120 0 L 520 0 L 900 900 L 380 900 Z" className="tw-ray" /><path d="M 620 0 L 760 0 L 1240 900 L 1000 900 Z" className="tw-ray" />
      <rect x="0" y="640" width="1600" height="260" className="tw-table" />
      {[[260, 560, -12], [1240, 540, 9], [1080, 690, -5], [330, 720, 7]].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} className="tw-print"><rect x="-110" y="-80" width="220" height="170" rx="6" /><rect x="-96" y="-66" width="192" height="122" className="tw-print-img" style={{ '--i': i }} /></g>
      ))}
      <g transform="translate(800 470) rotate(-6)" className="tw-phone">
        <rect x="-140" y="-270" width="280" height="540" rx="38" /><rect x="-122" y="-238" width="244" height="470" rx="18" className="tw-phone-screen" />
        <circle cx="0" cy="-20" r="54" className="tw-flower-c" />{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="0" cy="-92" rx="26" ry="44" transform={`rotate(${i * 45} 0 -20)`} className="tw-petal" />)}
        <path d="M 0 34 C -10 90 6 140 0 200" className="tw-stem" /><circle cx="0" cy="190" r="22" className="tw-shutter" />
      </g>
      <rect width="1600" height="900" className="tw-sepia" />
    </svg>
  );
  if (world === 'present') return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="tw-art tw-storyart is-present" aria-hidden="true">
      <defs><linearGradient id={`${u}-s`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5BA8E6" /><stop offset="1" stopColor="#DDF0FA" /></linearGradient></defs>
      <rect width="1600" height="900" fill={`url(#${u}-s)`} />
      {[[160, 420, 170], [420, 380, 210], [1180, 400, 200], [1450, 430, 170]].map(([x, y, r], i) => <g key={i} className="tw-tree"><rect x={x - 14} y={y + r * 0.4} width="28" height={r * 0.9} /><circle cx={x} cy={y} r={r * 0.62} /><circle cx={x - r * 0.4} cy={y + r * 0.2} r={r * 0.45} /><circle cx={x + r * 0.42} cy={y + r * 0.18} r={r * 0.48} /></g>)}
      <path d="M 0 900 L 0 620 C 400 580 1200 580 1600 620 L 1600 900 Z" className="tw-park-grass" />
      <path d="M 640 900 C 700 760 760 680 800 610 C 840 680 900 760 960 900 Z" className="tw-path" />
      <g transform="translate(800 560)" className="tw-camera">
        <rect x="-230" y="-120" width="460" height="260" rx="34" /><rect x="-130" y="-170" width="150" height="70" rx="14" />
        <circle cx="10" cy="10" r="104" className="tw-lens-o" /><circle cx="10" cy="10" r="72" className="tw-lens-i" /><circle cx="-14" cy="-14" r="18" className="tw-lens-g" />
        <rect x="150" y="-96" width="48" height="26" rx="6" className="tw-flash" />
      </g>
      <g transform="translate(1210 210)" className="tw-share"><rect x="-130" y="-70" width="260" height="140" rx="20" /><rect x="-110" y="-50" width="100" height="100" rx="10" className="tw-share-img" /><path d="M 52 8 c -18 -18 -42 6 -18 26 l 18 16 l 18 -16 c 24 -20 0 -44 -18 -26 z" className="tw-heart" /></g>
    </svg>
  );
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="tw-art tw-storyart is-future" aria-hidden="true">
      <defs><linearGradient id={`${u}-n`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0A0C2E" /><stop offset="0.6" stopColor="#2C3388" /><stop offset="1" stopColor="#6C74D8" /></linearGradient></defs>
      <rect width="1600" height="900" fill={`url(#${u}-n)`} />
      {Array.from({ length: 30 }, (_, i) => <circle key={i} cx={(i * 331) % 1600} cy={(i * 127) % 360} r={i % 3 ? 1.6 : 2.6} className="tw-star" style={{ '--i': i }} />)}
      <path d="M 120 470 C 520 170 1060 170 1480 420" className="tw-flight" />
      <g transform="translate(1480 420) rotate(28)"><path d="M -30 -8 L 30 0 L -30 8 L -18 0 Z" className="tw-planeicon" /></g>
      <g className="tw-city">{Array.from({ length: 22 }, (_, i) => { const w = 60 + ((i * 37) % 50); const h = 140 + ((i * 89) % 260); const x = i * 76 - 20; return <g key={i}><rect x={x} y={900 - h - 60} width={w} height={h + 60} />{Array.from({ length: Math.floor(h / 44) }, (_, k) => <rect key={k} x={x + 12 + (k % 2) * 22} y={900 - h - 40 + k * 44} width="12" height="16" className="tw-win" style={{ '--i': (i + k) % 7 }} />)}</g>; })}</g>
      <g className="tw-viewfinder" strokeLinecap="round">
        <path d="M 360 180 L 300 180 L 300 240 M 1240 180 L 1300 180 L 1300 240 M 360 720 L 300 720 L 300 660 M 1240 720 L 1300 720 L 1300 660" />
        <circle cx="800" cy="450" r="26" /><line x1="760" y1="450" x2="840" y2="450" /><line x1="800" y1="410" x2="800" y2="490" />
      </g>
    </svg>
  );
}

// Маленькі ілюстрації для карток світів (екран 03)
function TwMiniArt({ world }) {
  const u = useTwUid('mn'); const w = TW_SKY[world] ? world : 'present';
  const sky = TW_SKY[w], grass = TW_GRASS[w];
  return (
    <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" className={cx('tw-art tw-mini', `is-${w}`)} aria-hidden="true">
      <defs><linearGradient id={`${u}-s`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[2]} /></linearGradient></defs>
      <rect width="320" height="180" fill={`url(#${u}-s)`} />
      {w === 'past' && <><circle cx="90" cy="112" r="34" fill="#FFD48A" opacity="0.9" />{[[60, 40], [200, 30], [260, 70]].map(([x, y], i) => <path key={i} d={`M ${x} ${y} q 8 -7 16 0 q -8 8 -16 0 z`} fill="#E58A3A" />)}</>}
      {w === 'present' && <><circle cx="250" cy="42" r="22" fill="#FFF3C4" /><rect x="120" y="70" width="80" height="62" rx="4" fill="#F4F7FB" opacity="0.9" /><path d="M 112 72 L 160 40 L 208 72 Z" fill="#E7EEF6" /></>}
      {w === 'future' && <>{Array.from({ length: 16 }, (_, i) => <circle key={i} cx={(i * 71) % 320} cy={(i * 37) % 90} r="1.4" fill="#fff" />)}<path d="M 160 180 L 150 120 L 170 120 Z" fill="#9AA6FF" opacity="0.7" /><circle cx="160" cy="112" r="10" fill="#C7CEFF" /></>}
      <path d={`M 0 180 L 0 130 C 80 118 240 118 320 130 L 320 180 Z`} fill={grass[0]} />
    </svg>
  );
}

function TwScene({ scene, className, children, compact }) {
  const s = scene || {};
  const [failed, setFailed] = useState(null);
  const usePhoto = !!s.image && failed !== s.image;
  const world = s.world || 'present';
  let art = null;
  if (!usePhoto) {
    if (s.kind === 'lab') art = <TwLabArt state={s.state} />;
    else if (s.kind === 'football') art = <TwFieldArt world={world} />;
    else if (s.kind === 'story') art = <TwStoryArt world={world} />;
    else art = <TwMiniArt world={world} />;
  }
  return (
    <figure className={cx('tw-scene', `tw-w-${world}`, `tw-k-${s.kind || 'mini'}`, usePhoto && 'is-photo', compact && 'is-compact', s.state && `is-${s.state}`, className)}>
      {usePhoto
        ? <img src={s.image} alt={s.alt || ''} decoding="async" onError={() => setFailed(s.image)} />
        : <div className="tw-scene-art" role="img" aria-label={s.alt || ''}>{art}</div>}
      {usePhoto && (world === 'past' || world === 'future') && <div className={`tw-tone tw-tone-${world}`} aria-hidden="true" />}
      {s.badge && <figcaption className="tw-scene-badge"><i aria-hidden="true" />{s.badge}</figcaption>}
      {children}
    </figure>
  );
}

/* ═══ Chrono Compass (radiogroup) ════════════════════════════════ */
function TwCompass({ value, onChange, visited = [], label = 'Chrono Compass', worlds = TW_WORLDS, small }) {
  const idx = worlds.findIndex(w => w.key === value);
  const angle = idx < 0 ? 180 : [-60, 0, 60][idx];
  const refs = useRef([]);
  const move = (d, e) => {
    const n = clamp((idx < 0 ? 1 : idx) + d, 0, worlds.length - 1);
    onChange(worlds[n].key); if (refs.current[n] && e.currentTarget.contains(document.activeElement)) refs.current[n].focus();
  };
  const onKeys = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); move(1, e); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); move(-1, e); }
    else if (e.key === 'Home') { e.preventDefault(); move(-9, e); } else if (e.key === 'End') { e.preventDefault(); move(9, e); }
  };
  const sec = (a0, a1) => {
    const p = (a, r) => { const t = (a - 90) * Math.PI / 180; return `${(100 + Math.cos(t) * r).toFixed(1)} ${(100 + Math.sin(t) * r).toFixed(1)}`; };
    return `M ${p(a0, 86)} A 86 86 0 0 1 ${p(a1, 86)} L ${p(a1, 52)} A 52 52 0 0 0 ${p(a0, 52)} Z`;
  };
  return (
    <div className={cx('tw-compass', small && 'is-small')}>
      <svg viewBox="0 0 200 200" className="tw-compass-dial" aria-hidden="true">
        <circle cx="100" cy="100" r="98" className="tw-cd-rim" />
        <circle cx="100" cy="100" r="90" className="tw-cd-face" />
        {Array.from({ length: 24 }, (_, i) => <line key={i} x1="100" y1="14" x2="100" y2={i % 2 ? 20 : 25} transform={`rotate(${i * 15} 100 100)`} className="tw-cd-tick" />)}
        {worlds.map((w, i) => <path key={w.key} d={sec([-80, -20, 40][i], [-40, 20, 80][i])} className={cx('tw-cd-sec', `is-${w.key}`, value === w.key && 'is-on', visited.includes(w.key) && 'is-seen')} onClick={() => onChange(w.key)} />)}
        <g className="tw-cd-needle" style={{ transform: `rotate(${angle}deg)` }}><path d="M 100 26 L 107 100 L 100 116 L 93 100 Z" /></g>
        <circle cx="100" cy="100" r="9" className="tw-cd-hub" />
      </svg>
      <div className="tw-compass-btns" role="radiogroup" aria-label={label} onKeyDown={onKeys}>
        {worlds.map((w, i) => (
          <button key={w.key} ref={el => (refs.current[i] = el)} type="button" role="radio" aria-checked={value === w.key} tabIndex={value === w.key || (idx < 0 && i === 0) ? 0 : -1}
            className={cx('tw-cbtn', `is-${w.key}`, value === w.key && 'is-on')} onClick={() => onChange(w.key)}>
            <span className="tw-cbtn-l">{w.label}</span>
            <span className="tw-cbtn-s">{visited.includes(w.key) ? <><TiIcon name="check" size={12} /> visited</> : w.sub}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══ «Який це світ?» — три великі кнопки + поступові підказки ═════
 * q = { id, sentence, verb, marker, target, answer, hint, hintUk, clue, clueUk,
 *       explanation, explanationUk, uk, prompt }
 * st = { tries: [], solved, revealed, level }  (level — добровільні підказки)
 * ladder: 1-ша помилка → підказка про значення; 2-га → підсвічене дієслово
 *         + мовна підказка; далі — ще спроба або «Show answer».
 * ═══════════════════════════════════════════════════════════════ */
function twItemHintLevel(q, st, ladder) {
  const s = st || {}; const wrong = (s.tries || []).filter(t => t !== q.answer).length;
  return Math.max(s.level || 0, ladder ? Math.min(wrong, 2) : Math.min(wrong, 1));
}
function TwWorldButtons({ tries = [], answer, finished, reveal, onPick, label }) {
  return (
    <div className="tw-wbtns" role="group" aria-label={label || 'Choose a time world'} data-ti-keys>
      {TW_WORLDS.map(w => {
        const tried = tries.includes(w.key); const isAns = w.key === answer;
        return (
          <button key={w.key} type="button" className={cx('tw-wbtn', `is-${w.key}`, tried && (isAns ? 'is-right' : 'is-wrong'), reveal && isAns && 'is-answer')}
            disabled={(finished && !isAns) || (tried && !isAns)} onClick={() => onPick(w.key)}>
            <span className="tw-wbtn-l">{w.label}</span><span className="tw-wbtn-s">{w.sub}</span>
            {tried && <span className="tw-wbtn-mark" aria-hidden="true"><TiIcon name={isAns ? 'check' : 'x'} size={16} /></span>}
            {tried && <span className="ti-sr-only">{isAns ? ' — correct' : ' — not correct'}</span>}
          </button>
        );
      })}
    </div>
  );
}
function TwWorldItem({ q, st = {}, onChange, reveal, showUk, onFirst, ladder = true, prompt, promptUk, big, evidence }) {
  const tries = st.tries || [];
  const solved = tries.includes(q.answer), revealed = !!st.revealed, finished = solved || revealed;
  const wrong = tries.filter(t => t !== q.answer).length;
  const level = twItemHintLevel(q, st, ladder);
  const showVerb = finished || (ladder && level >= 2);
  const pick = (k) => {
    if (finished || tries.includes(k)) return;
    const ok = k === q.answer;
    if (!tries.length && onFirst) onFirst(ok);
    onChange({ ...st, tries: [...tries, k], solved: ok });
    twPlay(ok ? 'ok' : 'soft');
  };
  const w = twWorld(q.answer);
  return (
    <div className={cx('tw-item', big && 'is-big', finished && 'is-finished')}>
      <div className={cx('tw-evidence', evidence && 'is-evidence')}>
        {evidence && <div className="tw-evidence-top"><span>{evidence}</span><span className="tw-evidence-label" aria-label="Time label missing">TIME: <s>██████</s></span></div>}
        <p className="tw-item-sentence">“<TwSentence text={q.sentence} verb={q.verb} marker={q.marker} target={q.target} showVerb={showVerb} showMarker={false} />” <SpeakButton text={q.sentence} /></p>
        <Uk show={showUk} block>{q.uk}</Uk>
      </div>
      <div className="tw-item-prompt">{q.prompt || prompt}<Uk show={showUk}>{(q.promptUk || promptUk) ? ` · ${q.promptUk || promptUk}` : ''}</Uk></div>
      <TwWorldButtons tries={tries} answer={q.answer} finished={finished} reveal={reveal || revealed} onPick={pick} label={q.prompt || prompt} />
      <div aria-live="polite">
        {solved && <div className="ti-feedback is-good"><div className="ti-feedback-title"><TiIcon name="check" size={16} /> {tries.length === 1 ? `Correct — ${w.label}!` : `Yes — ${w.label}. You found it.`}</div><p>{q.explanation}</p><Uk show={showUk} block>{q.explanationUk}</Uk></div>}
        {revealed && !solved && <div className="ti-feedback is-info"><div className="ti-feedback-title"><TiIcon name="eye" size={16} /> Answer: {w.label}</div><p>{q.explanation}</p><Uk show={showUk} block>{q.explanationUk}</Uk></div>}
        {!finished && wrong > 0 && (
          <div className="ti-feedback is-mid">
            <div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> Not quite. Think about when it happens.</div>
            {level >= 2 && q.clue ? <p><TiIcon name="search" size={14} /> {q.clue}<Uk show={showUk}>{q.clueUk ? ` · ${q.clueUk}` : ''}</Uk></p> : <p><TiIcon name="hint" size={14} /> {q.hint}<Uk show={showUk}>{q.hintUk ? ` · ${q.hintUk}` : ''}</Uk></p>}
          </div>
        )}
        {!finished && !wrong && level > 0 && (
          <div className="ti-feedback is-info">
            <p><TiIcon name="hint" size={14} /> {q.hint}<Uk show={showUk}>{q.hintUk ? ` · ${q.hintUk}` : ''}</Uk></p>
            {level >= 2 && q.clue && <p><TiIcon name="search" size={14} /> {q.clue}<Uk show={showUk}>{q.clueUk ? ` · ${q.clueUk}` : ''}</Uk></p>}
          </div>
        )}
      </div>
      {!finished && (
        <div className="ti-ex-actions">
          {ladder && level < 2 && <TiButton size="sm" icon="hint" onClick={() => onChange({ ...st, level: level + 1 })}>{level === 0 ? 'Hint' : 'Another hint'}</TiButton>}
          {wrong >= 2 && <TiButton size="sm" icon="eye" onClick={() => onChange({ ...st, revealed: true })}>Show answer</TiButton>}
        </div>
      )}
    </div>
  );
}

// Послідовність «який світ?» — одне речення за раз
function TwWorldQuiz({ ctx, items, stateKey = 'q', idPrefix = '', ladder = true, prompt, promptUk, evidence }) {
  const S = ctx.sstate; const qs = S[stateKey] || {};
  const done = (q) => { const s = qs[q.id]; return !!(s && (s.solved || s.revealed)); };
  const firstOpen = items.findIndex(q => !done(q));
  const [view, setView] = useState(firstOpen < 0 ? items.length - 1 : firstOpen);
  const q = items[view];
  return (
    <div className="tw-quiz">
      <div className="ti-qseq-head">
        <span className="ti-counter">{evidence ? 'Clue' : 'Sentence'} {view + 1} of {items.length}</span>
        <div className="ti-qseq-dots" aria-hidden="true">{items.map((x, i) => <span key={x.id} className={cx('ti-qdot', i === view && 'is-on', done(x) && 'is-done')} />)}</div>
      </div>
      <TwWorldItem key={q.id} q={q} st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk} ladder={ladder} prompt={prompt} promptUk={promptUk}
        evidence={evidence ? `${evidence} #${view + 1}` : null}
        onChange={(v) => setNested(ctx, stateKey, q.id, v)}
        onFirst={(ok) => ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `${idPrefix}${q.id}`, tags: { skill: 'recognition', world: q.answer } } })} />
      <div className="ti-ex-actions">
        {view > 0 && <TiButton size="sm" icon="left" onClick={() => setView(view - 1)}>Previous</TiButton>}
        {view < items.length - 1 && <TiButton size="sm" variant={done(q) ? 'primary' : 'ghost'} iconRight="right" disabled={!done(q) && !ctx.teacherMode} onClick={() => setView(view + 1)}>Next {evidence ? 'clue' : 'sentence'}</TiButton>}
      </div>
    </div>
  );
}

/* ═══ TwAnswerField — відповідь-речення з чесною перевіркою ═══════
 * st = { value, tries, result: { status, hint }, done, how: 'ok'|'self'|'shown' }
 * 'unsure' → не відхиляємо: показуємо зразок, учень порівнює сам.
 * ═══════════════════════════════════════════════════════════════ */
function TwAnswerField({ id, item, st = {}, onChange, showUk, prefix, label, placeholder, onFirst, reveal }) {
  const res = st.result;
  const tries = st.tries || 0;
  const check = () => {
    const r = twCheck(item, st.value, prefix);
    if (r.status === 'empty') { onChange({ ...st, result: r }); return; }
    if (!tries && onFirst) onFirst(r.status === 'ok');
    const ok = r.status === 'ok';
    onChange({ ...st, tries: tries + 1, result: r, done: st.done || ok, how: ok && !st.done ? 'ok' : st.how });
    twPlay(ok ? 'ok' : 'soft');
  };
  return (
    <div className={cx('tw-afield', st.done && 'is-done')}>
      {label && <label className="tw-afield-label" htmlFor={id}>{label}</label>}
      <div className="tw-afield-row">
        {prefix && <span className="tw-afield-prefix" aria-hidden="true">{prefix}</span>}
        <input id={id} className="ti-input" value={st.value || ''} placeholder={placeholder || 'Type your answer…'} autoComplete="off" spellCheck="false"
          aria-label={prefix ? `${prefix} …` : undefined}
          onChange={(e) => onChange({ ...st, value: e.target.value, result: null })}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); check(); } }} />
        <TiButton variant="primary" icon="check" onClick={check}>Check</TiButton>
      </div>
      <div aria-live="polite">
        {res && res.status === 'empty' && <p className="tw-afield-note"><TiIcon name="pen" size={14} /> Write your answer first.</p>}
        {res && res.status === 'ok' && <div className="ti-feedback is-good"><div className="ti-feedback-title"><TiIcon name="check" size={16} /> {tries <= 1 ? 'Correct!' : 'Yes — that’s it!'}</div>
          <p>Model: “{prefix ? `${prefix} ` : ''}{item.model}”</p>{item.alsoNote && <p className="ti-feedback-expl">{item.alsoNote}</p>}<Uk show={showUk} block>{item.uk}</Uk></div>}
        {res && res.status === 'hint' && <div className="ti-feedback is-mid"><div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> Not quite — try again.</div><p><TiIcon name="hint" size={14} /> {res.hint}</p><Uk show={showUk} block>{res.hintUk}</Uk></div>}
        {res && res.status === 'unsure' && !st.done && (
          <div className="ti-feedback is-info">
            <div className="ti-feedback-title"><TiIcon name="eye" size={16} /> We can’t check this sentence automatically.</div>
            <p>Compare it with the model: “{prefix ? `${prefix} ` : ''}{item.model}”</p>
            <Uk show={showUk} block>Ми не можемо перевірити це речення автоматично. Порівняй його зі зразком.</Uk>
            <div className="ti-ex-actions">
              <TiButton size="sm" variant="primary" icon="check" onClick={() => onChange({ ...st, done: true, how: 'self' })}>Mine means the same</TiButton>
              <TiButton size="sm" icon="pen" onClick={() => { onChange({ ...st, result: null }); const el = document.getElementById(id); if (el) el.focus(); }}>I’ll change it</TiButton>
            </div>
          </div>
        )}
        {st.done && st.how === 'self' && <div className="ti-feedback is-good"><div className="ti-feedback-title"><TiIcon name="check" size={16} /> Self-checked</div><p>Model: “{prefix ? `${prefix} ` : ''}{item.model}”</p></div>}
        {st.done && st.how === 'shown' && <div className="ti-feedback is-info"><div className="ti-feedback-title"><TiIcon name="eye" size={16} /> Answer</div><p>“{prefix ? `${prefix} ` : ''}{item.model}”</p>{item.alsoNote && <p className="ti-feedback-expl">{item.alsoNote}</p>}<Uk show={showUk} block>{item.uk}</Uk></div>}
        {!st.done && reveal && <p className="tw-afield-note"><TiIcon name="eye" size={14} /> Answer: {prefix ? `${prefix} ` : ''}{item.model}</p>}
      </div>
      {!st.done && tries >= 2 && <div className="ti-ex-actions"><TiButton size="sm" icon="eye" onClick={() => onChange({ ...st, done: true, how: 'shown' })}>Show answer</TiButton></div>}
    </div>
  );
}

/* ═══ TwOrderBoard — впорядкування карток ═══════════════════════
 * Миша й дотик: перетягування (pointer events). Клавіатура: фокус на
 * картці → Space/Enter «бере» її, ↑↓/←→ пересувають, Space кладе.
 * Кнопки «раніше/пізніше» — доступна альтернатива для всіх.
 * ═══════════════════════════════════════════════════════════════ */
function TwOrderBoard({ cards, order, onOrder, locked, showWorld, showUk }) {
  const boardRef = useRef(null);
  const slotRefs = useRef([]);
  const cardRefs = useRef({});
  const [drag, setDrag] = useState(null); // { id, x0, y0, dx, dy, target }
  const [held, setHeld] = useState(null);
  const [msg, setMsg] = useState('');
  const byId = (id) => cards.find(c => c.id === id);
  const moveTo = (id, to) => {
    const from = order.indexOf(id); to = clamp(to, 0, order.length - 1);
    if (from < 0 || from === to) return;
    const next = order.filter(x => x !== id); next.splice(to, 0, id); onOrder(next);
    setMsg(`Card moved to position ${to + 1} of ${order.length}.`);
  };
  const targetAt = (px, py) => {
    let best = 0, bestD = Infinity;
    slotRefs.current.forEach((el, i) => {
      if (!el) return; const r = el.getBoundingClientRect();
      const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  };
  const onDown = (e, id) => {
    if (locked || e.button > 0 || (e.target.closest && e.target.closest('button'))) return;
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
    setDrag({ id, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0, target: order.indexOf(id), moved: false });
  };
  const onMove = (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    setDrag(d => d && ({ ...d, dx, dy, moved: d.moved || Math.hypot(dx, dy) > 6, target: targetAt(e.clientX, e.clientY) }));
  };
  const onUp = () => { if (drag) { if (drag.moved) moveTo(drag.id, drag.target); setDrag(null); } };
  const onKey = (e, id) => {
    if (locked) return;
    const i = order.indexOf(id);
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setHeld(h => { const v = h === id ? null : id; setMsg(v ? `Picked up card ${i + 1}. Use the arrow keys to move it, Space to drop.` : `Dropped at position ${i + 1}.`); return v; }); }
    else if (held === id && (e.key === 'ArrowUp' || e.key === 'ArrowLeft')) { e.preventDefault(); moveTo(id, i - 1); }
    else if (held === id && (e.key === 'ArrowDown' || e.key === 'ArrowRight')) { e.preventDefault(); moveTo(id, i + 1); }
    else if (e.key === 'Escape') setHeld(null);
  };
  useEffect(() => { if (held && cardRefs.current[held]) cardRefs.current[held].focus(); }, [order]);
  return (
    <div className={cx('tw-board', locked && 'is-locked')} ref={boardRef} data-ti-keys>
      <p className="ti-sr-only" aria-live="assertive">{msg}</p>
      <ol className="tw-slots">
        {order.map((id, i) => {
          const c = byId(id); const isDrag = drag && drag.id === id && drag.moved;
          return (
            <li key={id} ref={el => (slotRefs.current[i] = el)} className={cx('tw-slot', drag && drag.moved && drag.target === i && drag.id !== id && 'is-target')}>
              <span className="tw-slot-n" aria-hidden="true">{i + 1}</span>
              <div ref={el => (cardRefs.current[id] = el)} className={cx('tw-ocard', isDrag && 'is-drag', held === id && 'is-held', showWorld && `is-${c.world}`)}
                tabIndex={locked ? -1 : 0} role="group" aria-roledescription="sortable card" aria-label={`Position ${i + 1}: ${c.text}`}
                style={isDrag ? { transform: `translate(${drag.dx}px, ${drag.dy}px)` } : undefined}
                onPointerDown={(e) => onDown(e, id)} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={() => setDrag(null)} onKeyDown={(e) => onKey(e, id)}>
                {!locked && <span className="tw-ocard-grip" aria-hidden="true"><TiIcon name="grip" size={18} /></span>}
                <span className="tw-ocard-icon" aria-hidden="true"><TiIcon name={c.icon} size={22} /></span>
                <span className="tw-ocard-text">“{c.text}”<Uk show={showUk} block>{c.uk}</Uk>{showWorld && <span className={cx('tw-wtag', `is-${c.world}`)}>{twWorld(c.world).label}</span>}</span>
                {!locked && (
                  <span className="tw-ocard-moves">
                    <TiButton size="sm" icon="up" disabled={i === 0} onClick={() => moveTo(id, i - 1)} aria-label={`Move “${c.text}” earlier`} title="Earlier" />
                    <TiButton size="sm" icon="down" disabled={i === order.length - 1} onClick={() => moveTo(id, i + 1)} aria-label={`Move “${c.text}” later`} title="Later" />
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="tw-axis" aria-hidden="true"><span>earlier</span><b /><span>later</span></div>
    </div>
  );
}

/* ═══ Бейдж Time Explorer (локальна ілюстрація уроку) ═════════════ */
function TwBadge({ title, subtitle }) {
  const u = useTwUid('bd');
  return (
    <svg viewBox="0 0 240 260" className="tw-badge" role="img" aria-label={`${title} — ${subtitle}`}>
      <defs><linearGradient id={`${u}-g`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FBE3A2" /><stop offset="0.5" stopColor="#D9A441" /><stop offset="1" stopColor="#8A5F1C" /></linearGradient></defs>
      <path d="M 70 160 L 46 250 L 82 232 L 104 258 L 120 176 Z" className="tw-badge-rib is-a" />
      <path d="M 170 160 L 194 250 L 158 232 L 136 258 L 120 176 Z" className="tw-badge-rib is-b" />
      <circle cx="120" cy="108" r="98" fill={`url(#${u}-g)`} />
      <circle cx="120" cy="108" r="80" className="tw-badge-face" />
      <path d="M 120 108 m -62 0 a 62 62 0 0 1 31 -53.7" className="tw-badge-arc is-past" />
      <path d="M 120 108 m -31 -53.7 a 62 62 0 0 1 62 0" className="tw-badge-arc is-present" />
      <path d="M 120 108 m 31 -53.7 a 62 62 0 0 1 31 53.7" className="tw-badge-arc is-future" />
      <path d="M 120 52 L 129 108 L 120 124 L 111 108 Z" className="tw-badge-needle" transform="rotate(20 120 108)" />
      <circle cx="120" cy="108" r="8" fill={`url(#${u}-g)`} />
      <text x="120" y="160" textAnchor="middle" className="tw-badge-t">TIME EXPLORER</text>
    </svg>
  );
}

/* ── Нотатки вчителя прямо на екрані (лише Teacher Mode, згорнуті) ── */
function TwTeacherTalk({ title, items, showUk }) {
  const [open, setOpen] = useState({});
  return (
    <details className="tw-talk">
      <summary><TiIcon name="notes" size={15} /> Teacher Notes · {title}</summary>
      <ol>
        {items.map((it, i) => (
          <li key={i}>
            <div className="tw-talk-q">{it.q}<Uk show={showUk}>{it.uk ? ` · ${it.uk}` : ''}</Uk></div>
            {it.sample && (open[i]
              ? <p className="tw-talk-a"><TiIcon name="message" size={14} /> {it.sample} <button type="button" className="ti-link" onClick={() => setOpen(o => ({ ...o, [i]: false }))}>Hide</button></p>
              : <button type="button" className="ti-link" onClick={() => setOpen(o => ({ ...o, [i]: true }))}>Show sample answer</button>)}
          </li>
        ))}
      </ol>
    </details>
  );
}

/* ═══ 01 · Mission Briefing ════════════════════════════════════ */
function ScreenTwBriefing({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const reduced = useReducedMotion();
  const total = (c.dialogue || []).length;
  const [count, setCount] = useState(() => (S.seenAll || reduced) ? total : 1);
  const [phase, setPhase] = useState('idle'); // idle | activating
  const timer = useRef(null);
  useEffect(() => {
    if (count >= total) { if (!S.seenAll) ctx.setS(p => ({ ...p, seenAll: true })); return; }
    const t = setTimeout(() => setCount(n => Math.min(total, n + 1)), 1400);
    return () => clearTimeout(t);
  }, [count]);
  useEffect(() => () => clearTimeout(timer.current), []);
  const activate = (go) => {
    ctx.setS(p => ({ ...p, activated: true, seenAll: true, done: true }));
    setCount(total); setPhase('activating'); twPlay('portal');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { setPhase('idle'); if (go) ctx.next(); }, reduced ? 1300 : 2700);
  };
  const skip = () => { clearTimeout(timer.current); setPhase('idle'); ctx.next(); };
  const active = phase === 'activating' || S.activated;
  const sc = active ? c.activeScene : c.scene;
  return (
    <div className="ti-l02 tw-brief">
      <header className="tw-brief-head">
        <div className="ti-eyebrow">{c.kicker}</div>
        <h1 className="ti-cover-title tw-brief-title">{screen.title}</h1>
        <p className="ti-cover-sub">{c.subtitle}</p>
        <Uk show={ctx.showUk} block>{c.subtitleUk}</Uk>
      </header>
      <TwScene scene={sc} className={cx('tw-brief-scene', phase === 'activating' && 'is-activating')}>
        {phase === 'activating' && <div className="tw-confirm" role="status"><TiIcon name="compass" size={20} /> <span>{c.confirm}<Uk show={ctx.showUk} block>{c.confirmUk}</Uk></span></div>}
      </TwScene>
      <div className="tw-brief-row">
        <div className="tw-brief-talk">
          <TwAlex lines={c.dialogue} count={count} showUk={ctx.showUk} />
          {count < total && <button type="button" className="ti-link" onClick={() => setCount(total)}>Show all lines</button>}
        </div>
        <div className={cx('tw-mission', count >= total && 'is-on')}>
          {count >= total ? (
            <>
              <div className="tw-mission-label"><TiIcon name="flag" size={16} /> {c.mission}</div>
              <Uk show={ctx.showUk} block>{c.missionUk}</Uk>
              <p className="ti-muted tw-mission-who">Alex · {c.alex && c.alex.note}</p>
              <div className="ti-ex-actions">
                {phase === 'activating'
                  ? <TiButton iconRight="next" onClick={skip}>Skip animation</TiButton>
                  : !S.activated
                    ? <TiButton variant="primary" size="lg" iconRight="next" onClick={() => activate(true)}>{c.cta}</TiButton>
                    : <><TiButton variant="primary" size="lg" iconRight="next" onClick={ctx.next}>Continue the mission</TiButton><TiButton icon="replay" onClick={() => activate(false)}>Replay activation</TiButton></>}
                <TwSoundToggle />
              </div>
            </>
          ) : <p className="ti-muted">Listen to Alex…</p>}
        </div>
      </div>
      {ctx.teacherMode && c.warmup && <TwTeacherTalk title={c.warmup.title} items={c.warmup.items} showUk={ctx.showUk} />}
    </div>
  );
}

/* ═══ 02 · Activate the Time Portal ════════════════════════════ */
function ScreenTwPortal({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const steps = useScreenSteps(ctx, 3);
  const visited = S.visited || [];
  const st = (c.states || []).find(s => s.key === S.world);
  const setWorld = (k) => ctx.setS(p => ({ ...p, world: k, visited: (p.visited || []).includes(k) ? p.visited : [...(p.visited || []), k] }));
  const allVisited = c.states.every(s => visited.includes(s.key));
  const questions = c.questions.map(q => q.sentenceOptions ? { ...q, options: c.states.map((s, i) => ({ id: s.key, key: String.fromCharCode(65 + i), text: s.sentence })) } : q);
  const qs = S.q || {}; const allQ = questions.every(q => qDone(qs[q.id]));
  useEffect(() => { if (allQ && S.concl && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allQ, S.concl]);
  return (
    <div className="ti-l02 tw-portalscr">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <DSteps steps={['Explore the worlds', 'Discover', 'Conclusion']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur === 0 && (
        <>
          <div className="tw-split">
            <TwScene scene={st ? st.scene : { ...c.states[1].scene, badge: null, alt: 'A football field, still in grey: no time world is selected yet.' }} className={cx('tw-portal-scene', !st && 'is-idle')} key={st ? st.key : 'idle'}>
              {!st && <div className="tw-idle-msg"><TiIcon name="compass" size={22} /> Turn the Chrono Compass to open a portal.</div>}
            </TwScene>
            <div className="tw-console">
              <p className="ti-instructions">{c.instructions}<Uk show={ctx.showUk} block>{c.instructionsUk}</Uk></p>
              <TwCompass value={S.world} onChange={setWorld} visited={visited} label="Chrono Compass: choose a time world" />
              <div className="tw-out" aria-live="polite">
                {st ? (
                  <div className={cx('tw-out-card', `is-${st.key}`)} key={st.key}>
                    <span className={cx('tw-time-chip', `is-${st.key}`)}><TiIcon name="clock" size={14} /> {st.time}<Uk show={ctx.showUk}>{` · ${st.timeUk}`}</Uk></span>
                    <p className="tw-out-sentence"><TwSentence text={st.sentence} verb={st.verb} marker={st.marker} /> <SpeakButton text={st.sentence} /></p>
                    <Uk show={ctx.showUk} block>{st.uk}</Uk>
                    <p className="tw-out-meaning"><TiIcon name="sparkles" size={15} /> {st.meaning}<Uk show={ctx.showUk}>{` · ${st.meaningUk}`}</Uk></p>
                  </div>
                ) : <p className="ti-muted">Choose Past, Present or Future.</p>}
              </div>
            </div>
          </div>
          <div className="ti-ex-actions tw-foot">
            <span className="ti-muted" aria-live="polite">{allVisited ? 'All three worlds visited. The discovery questions are unlocked.' : `Worlds visited: ${visited.length} / 3`}</span>
            <TiButton variant="primary" iconRight="right" disabled={!allVisited && !ctx.teacherMode} onClick={() => steps.go(1)}>{allVisited ? 'Discovery questions' : 'Visit all three worlds'}</TiButton>
          </div>
        </>
      )}
      {steps.cur === 1 && (
        <div className="tw-discover">
          <div className="ti-tw-mini">{c.states.map((s, i) => <button key={s.key} type="button" className={cx('ti-tw-chip', `w-${s.key}`, 'tw-chip3', `is-${s.key}`)} onClick={() => { setWorld(s.key); steps.go(0); }}><strong>{String.fromCharCode(65 + i)} · {s.label}</strong><span>{s.sentence}</span></button>)}</div>
          <QuestionSequence ctx={ctx} questions={questions} idPrefix="portal-" />
          {allQ && <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="right" onClick={() => steps.go(2)}>Go to the conclusion</TiButton></div>}
        </div>
      )}
      {steps.cur === 2 && (
        <div className="tw-concl">
          {!S.concl ? (
            <div className="tw-locked">
              <TiIcon name="lock" size={22} />
              <p>What did you discover? Say it in your own words first — then reveal the conclusion.</p>
              <Uk show={ctx.showUk} block>Що ти відкрив(-ла)? Спершу скажи своїми словами — потім відкрий висновок.</Uk>
              <TiButton variant="primary" icon="unlock" onClick={() => { ctx.setS(p => ({ ...p, concl: true })); twPlay('ok'); }}>Reveal the conclusion</TiButton>
            </div>
          ) : (
            <>
              <DiscoveryBanner title="Discovery" text={c.conclusion.text} uk={c.conclusion.uk} showUk={ctx.showUk} icon="compass" />
              <div className="tw-recap3">{c.states.map(s => <div key={s.key} className={cx('tw-recap', `is-${s.key}`)}><strong>{s.label}</strong><span><TwSentence text={s.sentence} verb={s.verb} marker={s.marker} /></span></div>)}</div>
              {!allQ && <p className="ti-muted">Finish the discovery questions to complete this screen.</p>}
              <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══ 03 · Explore the Three Worlds ═════════════════════════════ */
function ScreenTwWorlds({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const steps = useScreenSteps(ctx, 3);
  const opened = S.opened || [];
  const sel = (c.worlds || []).find(w => w.key === S.sel);
  const open = (k) => ctx.setS(p => ({ ...p, sel: k, opened: (p.opened || []).includes(k) ? p.opened : [...(p.opened || []), k] }));
  const allOpened = c.worlds.every(w => opened.includes(w.key));
  const qs = S.q || {};
  const checkDone = c.check.every(q => { const s = qs[q.id]; return !!(s && (s.solved || s.revealed)); });
  useEffect(() => { if (checkDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [checkDone]);
  const obs = S.obs || {};
  return (
    <div className="ti-l02 tw-worlds">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <DSteps steps={['Explore', 'Quick Check', 'Discovery']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur === 0 && (
        <>
          <p className="ti-instructions">{c.instructions}<Uk show={ctx.showUk} block>{c.instructionsUk}</Uk></p>
          <div className="tw-tl3" role="group" aria-label="Timeline: three time worlds">
            {c.worlds.map(w => (
              <button key={w.key} type="button" className={cx('tw-tl3-zone', `is-${w.key}`, S.sel === w.key && 'is-on', opened.includes(w.key) && 'is-seen')}
                aria-expanded={S.sel === w.key} aria-controls="tw-world-card" onClick={() => open(w.key)}>
                <span className="tw-tl3-label">{w.key === 'past' ? '← ' : ''}{w.label.toUpperCase()}{w.key === 'future' ? ' →' : ''}</span>
                <span className="tw-tl3-sub">{w.zone}</span>
                <Uk show={ctx.showUk}>{w.zoneUk}</Uk>
                {opened.includes(w.key) && <span className="tw-tl3-seen"><TiIcon name="check" size={13} /> opened</span>}
              </button>
            ))}
            <span className="tw-tl3-now" aria-hidden="true">NOW</span>
          </div>
          <div id="tw-world-card" aria-live="polite">
            {sel ? (
              <div className={cx('tw-wcard', `is-${sel.key}`)} key={sel.key}>
                <div className="tw-wcard-art"><TwScene scene={{ kind: 'mini', world: sel.key, alt: `${sel.label}: ${sel.zone}` }} compact /></div>
                <div className="tw-wcard-body">
                  <h3 className="ti-h3"><span className={cx('tw-dot', `is-${sel.key}`)} aria-hidden="true" /> {sel.label} — {sel.zone}</h3>
                  <p className="tw-wcard-def">{sel.definition}<Uk show={ctx.showUk} block>{sel.definitionUk}</Uk></p>
                  <ul className="tw-examples">
                    {sel.examples.map((e, i) => <li key={i}><span><TwSentence text={e.en} verb={e.verb} /> <SpeakButton text={e.en} /></span><Uk show={ctx.showUk} block>{e.uk}</Uk></li>)}
                  </ul>
                  <DiscoveryQuestion key={sel.observe.id} q={sel.observe} compact st={obs[sel.observe.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
                    onChange={(v) => setNested(ctx, 'obs', sel.observe.id, v)}
                    onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `worlds-${sel.observe.id}`, tags: { skill: 'understanding', world: sel.key } } })} />
                </div>
              </div>
            ) : <p className="tw-hint-empty"><TiIcon name="target" size={16} /> Click a world on the timeline to open it.</p>}
          </div>
          <div className="ti-ex-actions tw-foot">
            <span className="ti-muted">{allOpened ? 'All three worlds opened.' : `Opened: ${opened.length} / 3`}</span>
            <TiButton variant="primary" iconRight="right" disabled={!allOpened && !ctx.teacherMode} onClick={() => steps.go(1)}>Quick Check</TiButton>
          </div>
        </>
      )}
      {steps.cur === 1 && (
        <>
          <h3 className="ti-h3"><TiIcon name="target" size={17} /> Quick Check</h3>
          <TwWorldQuiz ctx={ctx} items={c.check} idPrefix="worlds-" prompt="Which time world?" promptUk="Який це світ часу?" />
          {checkDone && <div className="ti-ex-actions ti-center"><TiButton variant="primary" icon="sparkles" onClick={() => steps.go(2)}>Unlock the discovery</TiButton></div>}
        </>
      )}
      {steps.cur === 2 && (
        <>
          <DiscoveryBanner title="Discovery" text={c.discovery.text} uk={c.discovery.uk} showUk={ctx.showUk} icon="clock" />
          <div className="tw-recap3">{c.worlds.map(w => <div key={w.key} className={cx('tw-recap', `is-${w.key}`)}><strong>{w.label}</strong><span>{w.definition}</span></div>)}</div>
          <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
        </>
      )}
    </div>
  );
}

/* ═══ 04 · Time Detective ══════════════════════════════════════ */
function ScreenTwDetective({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const qs = S.q || {};
  const items = c.items || [];
  const fin = (q) => { const s = qs[q.id]; return !!(s && (s.solved || s.revealed)); };
  const allDone = items.every(fin);
  useEffect(() => { if (allDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allDone]);
  const firstTry = items.filter(q => ((qs[q.id] || {}).tries || [])[0] === q.answer).length;
  const hinted = items.filter(q => twItemHintLevel(q, qs[q.id], true) > 0).length;
  const shown = items.filter(q => (qs[q.id] || {}).revealed && !(qs[q.id] || {}).solved).length;
  return (
    <div className="ti-l02 tw-detective">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <TwAlexLine line={c.alexLine} showUk={ctx.showUk} />
      <div className="tw-desk">
        <TwWorldQuiz ctx={ctx} items={items} idPrefix="detective-" prompt="Which time world does this message belong to?" promptUk="До якого світу часу належить це повідомлення?" evidence="Evidence" />
      </div>
      {allDone && (
        <section className="tw-report" aria-labelledby="tw-report-h">
          <div className="ti-eyebrow"><TiIcon name="search" size={15} /> Detective Report</div>
          <h3 id="tw-report-h" className="ti-h2">{items.length} time clues investigated.</h3>
          <ul className="tw-report-stats">
            <li><strong>{firstTry}</strong> solved on the first try</li>
            <li><strong>{hinted}</strong> {hinted === 1 ? 'clue' : 'clues'} with a hint</li>
            {shown > 0 && <li><strong>{shown}</strong> answer{shown === 1 ? '' : 's'} shown</li>}
          </ul>
          <ol className="tw-report-list">
            {items.map(q => <li key={q.id}><span className={cx('tw-wtag', `is-${q.answer}`)}>{twWorld(q.answer).label}</span> “<TwSentence text={q.sentence} verb={q.verb} />”</li>)}
          </ol>
          <p className="ti-muted">Clue words: verb forms like <em>forgot</em>, <em>speaks</em>, <em>’re going to</em>, <em>’ll</em> — no time expressions needed!</p>
          <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
        </section>
      )}
    </div>
  );
}

/* ═══ 05 · One Story, Three Worlds ═════════════════════════════ */
function ScreenTwStory({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const qs = S.q || {};
  const steps = useScreenSteps(ctx, 2);
  const scenes = c.scenes || [];
  const world = S.world || 'past';
  const sc = scenes.find(s => s.key === world) || scenes[0];
  const scs = (S.sc || {})[sc.key] || {};
  const visited = Object.keys(S.sc || {}).filter(k => (S.sc[k] || {}).read);
  const setSc = (patch) => ctx.setS(p => ({ ...p, sc: { ...(p.sc || {}), [sc.key]: { ...((p.sc || {})[sc.key] || {}), ...patch } } }));
  const [tr, setTr] = useState(false);
  const [hlOn, setHlOn] = useState(true);
  const sceneDone = (s) => s.questions.every(q => qDone(qs[q.id]));
  const allScenes = scenes.every(sceneDone);
  const ch = S.ch || {};
  const chDone = c.changes.items.every(it => (ch[it.id] || {}).done);
  useEffect(() => { if (allScenes && chDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allScenes, chDone]);
  const nextScene = scenes.find(s => s.key !== sc.key && !sceneDone(s));
  const pred = sc.predict; const picked = scs.pred;
  return (
    <div className="ti-l02 tw-story">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <DSteps steps={['Alex’s story', 'What has changed?']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur === 0 && (
        <>
          <h3 className="tw-story-title"><TiIcon name="camera" size={18} /> {c.storyTitle}<Uk show={ctx.showUk}>{` · ${c.storyTitleUk}`}</Uk></h3>
          <div className="tw-split">
            <div className="tw-story-visual">
              <TwScene scene={sc.scene} key={sc.key}>
                {sc.imagined && <div className="tw-imagined" role="note"><TiIcon name="sparkles" size={14} /> {sc.imaginedNote}<Uk show={ctx.showUk} block>{sc.imaginedNoteUk}</Uk></div>}
              </TwScene>
              <TwCompass value={sc.key} onChange={(k) => { ctx.setS(p => ({ ...p, world: k })); setTr(false); }} visited={scenes.filter(sceneDone).map(s => s.key)} label="Travel through Alex’s story" small />
            </div>
            <div className={cx('tw-story-panel', `is-${sc.key}`)} key={sc.key}>
              <div className="ti-eyebrow">{sc.label} · {sc.title}<Uk show={ctx.showUk}>{` · ${sc.titleUk}`}</Uk></div>
              {!scs.read ? (
                <div className="tw-predict">
                  <p className="tw-predict-q"><TiIcon name="eye" size={16} /> {pred.prompt}<Uk show={ctx.showUk} block>{pred.promptUk}</Uk></p>
                  <div className="tw-predict-opts" role="radiogroup" aria-label={pred.prompt}>
                    {pred.options.map(o => <button key={o.id} type="button" role="radio" aria-checked={picked === o.id} className={cx('ti-option is-small', picked === o.id && 'is-on')} onClick={() => setSc({ pred: o.id })}>{o.text}</button>)}
                  </div>
                  <div aria-live="polite">{picked && <p className="tw-predict-fb"><TiIcon name="sparkles" size={14} /> {picked === pred.fits ? 'Good prediction! Let’s read and check.' : 'Interesting guess! Let’s read and see what happened.'}</p>}</div>
                  <div className="ti-ex-actions">
                    <TiButton variant="primary" icon="book" disabled={!picked} onClick={() => setSc({ read: true })}>Read the story</TiButton>
                    {!picked && <button type="button" className="ti-link" onClick={() => setSc({ read: true })}>Skip the prediction</button>}
                  </div>
                </div>
              ) : (
                <>
                  <p className="tw-story-text"><TwSentence text={sc.text} verbs={sc.verbs} showVerb={hlOn} /> <SpeakButton text={sc.text} /></p>
                  {(tr || ctx.showUk) && <p className="ti-uk ti-uk-line is-block" lang="uk">{sc.uk}</p>}
                  <div className="ti-ex-actions">
                    <TiButton size="sm" onClick={() => setTr(t => !t)} aria-pressed={tr || ctx.showUk} disabled={ctx.showUk}>{tr || ctx.showUk ? 'Hide translation' : 'Show translation'}</TiButton>
                    <TiButton size="sm" icon="search" onClick={() => setHlOn(h => !h)} aria-pressed={hlOn}>{hlOn ? 'Hide verb highlights' : 'Highlight verbs'}</TiButton>
                  </div>
                  {sc.note && <p className="tw-note"><TiIcon name="clock" size={15} /> {sc.note}<Uk show={ctx.showUk} block>{sc.noteUk}</Uk></p>}
                  <div className="tw-story-qs">
                    {sc.questions.map((q, i) => (
                      <DiscoveryQuestion key={q.id} q={q} number={i + 1} compact st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
                        onChange={(v) => setNested(ctx, 'q', q.id, v)}
                        onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `story-${q.id}`, tags: { skill: 'understanding', world: sc.key } } })} />
                    ))}
                  </div>
                  {sceneDone(sc) && (
                    <div className="ti-ex-actions">
                      {nextScene
                        ? <TiButton variant="primary" iconRight="right" onClick={() => { ctx.setS(p => ({ ...p, world: nextScene.key })); setTr(false); }}>Travel to: {nextScene.label}</TiButton>
                        : <TiButton variant="primary" iconRight="right" onClick={() => steps.go(1)}>What has changed?</TiButton>}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="ti-ex-actions tw-foot">
            <span className="ti-muted">{allScenes ? 'All three parts of the story are done.' : `Story parts finished: ${scenes.filter(sceneDone).length} / 3`}</span>
            <TiButton iconRight="right" disabled={!allScenes && !ctx.teacherMode} onClick={() => steps.go(1)}>What has changed?</TiButton>
          </div>
        </>
      )}
      {steps.cur === 1 && (
        <div className="tw-changes">
          <h3 className="ti-h3"><TiIcon name="pen" size={17} /> {c.changes.title}<Uk show={ctx.showUk}>{` · ${c.changes.titleUk}`}</Uk></h3>
          <p className="ti-instructions">{c.changes.instructions}<Uk show={ctx.showUk} block>{c.changes.instructionsUk}</Uk></p>
          {c.changes.items.map(it => (
            <div key={it.id} className={cx('tw-change', `is-${it.world}`)}>
              <span className={cx('tw-wtag', `is-${it.world}`)}>{twWorld(it.world).label}</span>
              <TwAnswerField id={`tw-ch-${it.id}`} item={it} st={ch[it.id]} prefix={it.start} showUk={ctx.showUk} reveal={ctx.revealAnswers} placeholder="…"
                onChange={(v) => setNested(ctx, 'ch', it.id, v)}
                onFirst={(ok) => ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `story-${it.id}`, tags: { skill: 'production', world: it.world } } })} />
            </div>
          ))}
          <p className="ti-model-note"><TiIcon name="hint" size={15} /> Different correct answers are possible. Common answers are recognised automatically; anything else you compare with the model yourself.</p>
          {chDone && (
            <>
              <DiscoveryBanner text="Alex’s life moved through time: what he did then, what he does now, and what he hopes for." uk="Життя Алекса рухається в часі: що він робив тоді, що робить тепер і на що сподівається." showUk={ctx.showUk} icon="camera" tone="soft" />
              <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══ 06 · The Time Shift Lab ══════════════════════════════════ */
function TwParts({ parts, prev }) {
  return <span className={cx('tw-sentence', prev && 'is-prev')}>{parts.map((p, i) => p.k ? <mark key={i} className={`tw-m-${p.k}`}>{p.t}</mark> : <React.Fragment key={i}>{p.t}</React.Fragment>)}</span>;
}
const twPartsText = (parts) => parts.map(p => p.t).join('');
function TwLever({ value, onChange }) {
  const idx = Math.max(0, TW_WORLDS.findIndex(w => w.key === value));
  const refs = useRef([]);
  const onKeys = (e) => {
    const d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
    if (!d) return; e.preventDefault(); const n = clamp(idx + d, 0, 2); onChange(TW_WORLDS[n].key); refs.current[n] && refs.current[n].focus();
  };
  return (
    <div className="tw-lever" role="radiogroup" aria-label="Time Shifter: choose a time" onKeyDown={onKeys} style={{ '--pos': idx }}>
      <span className={cx('tw-lever-knob', `is-${TW_WORLDS[idx].key}`)} aria-hidden="true" />
      {TW_WORLDS.map((w, i) => <button key={w.key} ref={el => (refs.current[i] = el)} type="button" role="radio" aria-checked={i === idx} tabIndex={i === idx ? 0 : -1} className={cx('tw-lever-opt', `is-${w.key}`, i === idx && 'is-on')} onClick={() => onChange(w.key)}>{w.label}</button>)}
    </div>
  );
}
function ScreenTwShifter({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const steps = useScreenSteps(ctx, 3);
  const exps = c.experiments || [];
  const exp = exps.find(e => e.id === S.exp) || exps[0];
  const world = S.world || 'past';
  const seen = S.seen || [];
  const [prev, setPrev] = useState(null);
  useEffect(() => { if (!seen.includes(`${exp.id}:${world}`)) ctx.setS(p => ({ ...p, seen: [...(p.seen || []), `${exp.id}:${world}`] })); }, []);
  const shift = (eId, w) => {
    if (eId === exp.id && w === world) return;
    setPrev(eId === exp.id ? { world } : null);
    ctx.setS(p => ({ ...p, exp: eId, world: w, seen: (p.seen || []).includes(`${eId}:${w}`) ? p.seen : [...(p.seen || []), `${eId}:${w}`] }));
    if (eId === exp.id) twPlay('spin');
  };
  const form = exp.forms[world];
  const prevForm = prev && prev.world !== world ? exp.forms[prev.world] : null;
  const fullOne = exps.some(e => TW_WORLDS.every(w => seen.includes(`${e.id}:${w.key}`)));
  const pr = S.pr || {};
  const prDone = c.practice.items.every(it => (pr[it.id] || {}).done);
  useEffect(() => { if (prDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [prDone]);
  const rf = S.rf || {};
  return (
    <div className="ti-l02 tw-shifter">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <DSteps steps={['Experiment', 'Your turn', 'What changed?']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur === 0 && (
        <>
          <TwAlexLine line={c.alexLine} showUk={ctx.showUk} />
          <div className={cx('tw-lab-console', `is-${world}`)}>
            <div className="tw-lab-row">
              <div className="tw-lab-label">1 · Activity</div>
              <div className="tw-acts" role="radiogroup" aria-label="Choose an activity">
                {exps.map(e => <button key={e.id} type="button" role="radio" aria-checked={e.id === exp.id} className={cx('tw-act', e.id === exp.id && 'is-on')} onClick={() => shift(e.id, world)}><TiIcon name={e.icon} size={18} /> {e.label}</button>)}
              </div>
            </div>
            <div className="tw-lab-row">
              <div className="tw-lab-label">2 · Time</div>
              <TwLever value={world} onChange={(w) => shift(exp.id, w)} />
            </div>
            <div className="tw-lab-screen" aria-live="polite">
              {prevForm && <p className="tw-lab-prev" key={`p-${exp.id}-${prev.world}-${world}`}><span className="tw-lab-was">Before:</span> <TwParts parts={prevForm.parts} prev /></p>}
              <p className="tw-lab-sentence" key={`${exp.id}-${world}`}><TwParts parts={form.parts} /> <SpeakButton text={twPartsText(form.parts)} /></p>
              <Uk show={ctx.showUk} block>{form.uk}</Uk>
              <div className="tw-lab-tags">
                <span className={cx('tw-wtag', `is-${world}`)}>{twWorld(world).label}</span>
                <span className="tw-lab-tag">{form.tag}<Uk show={ctx.showUk}>{` · ${form.tagUk}`}</Uk></span>
                <span className="tw-legend"><mark className="tw-m-time">time</mark> <mark className="tw-m-verb">verb</mark> = what changed</span>
              </div>
            </div>
          </div>
          <div className="ti-ex-actions tw-foot">
            <span className="ti-muted">Combinations explored: {seen.length} / {exps.length * 3}{fullOne ? '' : ' · try all three times for at least one activity'}</span>
            <TiButton variant="primary" iconRight="right" disabled={!fullOne && !ctx.teacherMode} onClick={() => steps.go(1)}>Your turn</TiButton>
          </div>
        </>
      )}
      {steps.cur === 1 && (
        <div className="tw-practice">
          <h3 className="ti-h3"><TiIcon name="flask" size={17} /> {c.practice.title}<Uk show={ctx.showUk}>{` · ${c.practice.titleUk}`}</Uk></h3>
          {c.practice.items.map((it, i) => (
            <div key={it.id} className={cx('tw-task', `is-${it.world}`)}>
              <div className="tw-task-top">
                <span className="tw-task-n">{i + 1}</span>
                <span className="tw-task-orig">“{it.original}”</span>
                <span className="tw-task-arrow" aria-hidden="true">→</span>
                <span className={cx('tw-time-chip', `is-${it.world}`)}><TiIcon name="clock" size={13} /> New time: <strong>{it.newTime}</strong></span>
              </div>
              <TwAnswerField id={`tw-t-${it.id}`} item={it} st={pr[it.id]} showUk={ctx.showUk} reveal={ctx.revealAnswers} placeholder="Write the new sentence…"
                label={`Rewrite the sentence with “${it.newTime}”.`}
                onChange={(v) => setNested(ctx, 'pr', it.id, v)}
                onFirst={(ok) => ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `shift-${it.id}`, tags: { skill: 'production', world: it.world } } })} />
            </div>
          ))}
          <p className="ti-model-note"><TiIcon name="hint" size={15} /> Capitals, full stops, extra spaces and short forms (we’ll = we will) don’t matter.</p>
          {prDone && <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="right" onClick={() => steps.go(2)}>What changed?</TiButton></div>}
        </div>
      )}
      {steps.cur === 2 && (
        <div className="tw-reflect">
          <h3 className="ti-h3"><TiIcon name="search" size={17} /> {c.reflect.prompt}</h3>
          <Uk show={ctx.showUk} block>{c.reflect.promptUk}</Uk>
          <p className="ti-muted">Tick everything you think changed.</p>
          <div className="tw-checks">
            {c.reflect.options.map(o => {
              const on = !!rf[o.id]; const judged = S.rfChecked;
              const right = judged && on === o.correct;
              return (
                <label key={o.id} className={cx('tw-check', on && 'is-on', judged && (o.correct ? 'is-yes' : 'is-no'))}>
                  <input type="checkbox" checked={on} disabled={judged} onChange={(e) => ctx.setS(p => ({ ...p, rf: { ...(p.rf || {}), [o.id]: e.target.checked } }))} />
                  <span>{o.text}</span>
                  {judged && <span className="tw-check-mark"><TiIcon name={o.correct ? 'check' : 'x'} size={15} /> {o.correct ? 'changed' : 'stayed the same'}{!right && <span className="ti-sr-only"> (your choice was different)</span>}</span>}
                </label>
              );
            })}
          </div>
          {!S.rfChecked
            ? <div className="ti-ex-actions"><TiButton variant="primary" icon="eye" onClick={() => ctx.setS(p => ({ ...p, rfChecked: true }))}>Reveal</TiButton></div>
            : <>
                <DiscoveryBanner title="Discovery" text={c.reflect.reveal} uk={c.reflect.revealUk} showUk={ctx.showUk} icon="flask" />
                <div className="ti-ex-actions ti-center">
                  <TiButton icon="replay" onClick={() => ctx.setS(p => ({ ...p, rf: {}, rfChecked: false }))}>Try the question again</TiButton>
                  <TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton>
                </div>
              </>}
          {!prDone && <p className="ti-muted">Finish the three tasks in “Your turn” to complete this screen.</p>}
        </div>
      )}
    </div>
  );
}

/* ═══ 07 · Broken Timeline ═════════════════════════════════════ */
function twScrambled(ids) {
  for (let k = 0; k < 10; k++) { const s = shuffleArr(ids); if (s.join() !== ids.join()) return s; }
  return [...ids].reverse();
}
function ScreenTwTimeline({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const initial = useRef(null);
  if (!initial.current) initial.current = twScrambled(c.order);
  const order = S.order || initial.current;
  useEffect(() => { if (!S.order) ctx.setS(p => ({ ...p, order: initial.current })); }, []);
  const solved = !!S.solved, shown = !!S.shown, finished = solved || shown;
  const wrong = S.wrong || 0;
  const check = () => {
    if (order.join() === c.order.join()) { ctx.setS(p => ({ ...p, solved: true, done: true, last: 'ok' })); twPlay('win'); if (!wrong) ctx.onResult({ correct: true, score: 1, exercise: { id: 'timeline-order', tags: { skill: 'understanding' } } }); }
    else { if (!wrong) ctx.onResult({ correct: false, score: 0, exercise: { id: 'timeline-order', tags: { skill: 'understanding' } } }); ctx.setS(p => ({ ...p, wrong: (p.wrong || 0) + 1, last: 'wrong' })); twPlay('soft'); }
  };
  const hint = c.hints[Math.min(Math.max(wrong - 1, 0), c.hints.length - 1)];
  const bq = S.bq || {};
  const bonusQs = c.bonus.questions.map(q => q.statementOptions ? { ...q, options: c.bonus.statements.map(s => ({ id: s.id, text: s.text })) } : q);
  return (
    <div className="ti-l02 tw-timeline">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <TwAlexLine line={c.alexLine} showUk={ctx.showUk} />
      <p className="ti-instructions">{c.instructions}<Uk show={ctx.showUk} block>{c.instructionsUk}</Uk></p>
      <TwOrderBoard cards={c.cards} order={order} locked={finished} showWorld={finished} showUk={ctx.showUk}
        onOrder={(o) => ctx.setS(p => ({ ...p, order: o, last: p.last === 'wrong' ? 'moved' : p.last }))} />
      <div aria-live="polite">
        {finished && <div className="ti-feedback is-good"><div className="ti-feedback-title"><TiIcon name="check" size={16} /> {shown && !solved ? 'Here is the correct order.' : c.success}</div><p className="tw-pp"><span className="tw-wtag is-past">Past</span> → <span className="tw-wtag is-present">Present</span> → <span className="tw-wtag is-future">Future</span></p><Uk show={ctx.showUk} block>{c.successUk}</Uk></div>}
        {!finished && wrong > 0 && <div className="ti-feedback is-mid"><div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> {S.last === 'wrong' ? 'Not quite — the timeline is still broken.' : 'Try checking again.'}</div><p><TiIcon name="hint" size={14} /> {hint.en}</p><Uk show={ctx.showUk} block>{hint.uk}</Uk></div>}
      </div>
      <div className="ti-ex-actions">
        {!finished && <TiButton variant="primary" icon="check" onClick={check}>Check the order</TiButton>}
        {!finished && wrong >= 2 && <TiButton icon="eye" onClick={() => ctx.setS(p => ({ ...p, order: c.order, shown: true, done: true }))}>Show the correct order</TiButton>}
        {finished && <TiButton iconRight="next" variant="primary" onClick={ctx.next}>Continue</TiButton>}
      </div>
      <details className="tw-bonus" open={finished || undefined}>
        <summary><TiIcon name="sparkles" size={15} /> {c.bonus.title} <small>(optional)</small></summary>
        <p className="tw-bonus-set"><TiIcon name="clock" size={15} /> {c.bonus.setting}<Uk show={ctx.showUk} block>{c.bonus.settingUk}</Uk></p>
        <ul className="tw-bonus-list">{c.bonus.statements.map(s => <li key={s.id}>“{s.text}”</li>)}</ul>
        <div className="tw-bonus-qs">
          {bonusQs.map((q, i) => <DiscoveryQuestion key={q.id} q={q} number={i + 1} compact st={bq[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk} onChange={(v) => setNested(ctx, 'bq', q.id, v)} />)}
        </div>
      </details>
      <div className="tw-talkbox">
        <div className="ti-eyebrow"><TiIcon name="message" size={14} /> Talk about it</div>
        <p>{c.followUp.prompt}<Uk show={ctx.showUk} block>{c.followUp.promptUk}</Uk></p>
        <div className="tw-starters">{c.followUp.starters.map((s, i) => <span key={i} className="ti-chip">{s}</span>)}</div>
      </div>
    </div>
  );
}

/* ═══ 08 · My Three Time Worlds ════════════════════════════════ */
function ScreenTwPersonal({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const ans = S.answers || {}; const more = S.more || {}; const self = S.self || {};
  const [ui, setUi] = useState({});
  const [help, setHelp] = useState(false);
  const flip = (id, k) => setUi(u => ({ ...u, [`${id}:${k}`]: !u[`${id}:${k}`] }));
  const on = (id, k) => !!ui[`${id}:${k}`];
  const filled = c.cards.filter(k => (ans[k.id] || '').trim()).length;
  useEffect(() => { if (filled === c.cards.length && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [filled]);
  const setAns = (key, id, v) => ctx.setS(p => ({ ...p, [key]: { ...(p[key] || {}), [id]: v }, editedAt: new Date().toISOString() }));
  const focusEnd = (id) => setTimeout(() => { const el = document.getElementById(id); if (el) { el.focus(); const n = el.value.length; try { el.setSelectionRange(n, n); } catch (e) {} } }, 0);
  const addWord = (k, w) => { const cur = ans[k.id] || ''; setAns('answers', k.id, (cur && !/\s$/.test(cur) ? cur + ' ' : cur) + w + ' '); focusEnd(`tw-p-${k.id}`); };
  return (
    <div className="ti-l02 tw-personal">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <TwAlexLine line={c.alexLine} showUk={ctx.showUk} />
      <div className="tw-personal-bar">
        <p className="ti-instructions">{c.instructions}<Uk show={ctx.showUk} block>{c.instructionsUk}</Uk></p>
        <div className="ti-ex-actions">
          <TiButton icon="hint" onClick={() => setHelp(h => !h)} aria-expanded={help} aria-controls="tw-help">Need help?</TiButton>
          <TiButton icon="sparkles" onClick={() => ctx.setS(p => ({ ...p, extraOn: !p.extraOn }))} aria-pressed={!!S.extraOn}>Extra challenge</TiButton>
        </div>
      </div>
      {help && (
        <section id="tw-help" className="tw-help" aria-label="Help">
          <div><h4 className="ti-h4">{c.help.verbsTitle}</h4><div className="tw-chips">{c.help.verbs.map(v => <span key={v} className="ti-chip">{v}</span>)}</div></div>
          <div><h4 className="ti-h4">Useful structures</h4><ul>{c.help.structures.map((s, i) => <li key={i}><strong>{s.en}</strong> <span className="ti-uk">— {s.uk}</span></li>)}</ul></div>
          <div><h4 className="ti-h4">Model answers</h4><ul>{c.cards.map(k => <li key={k.id}><span className={cx('tw-wtag', `is-${k.world}`)}>{k.label}</span> {k.model} <SpeakButton text={k.model} /><div className="ti-uk">{k.modelUk}</div></li>)}</ul></div>
          <TiButton size="sm" icon="x" onClick={() => setHelp(false)}>Close help</TiButton>
        </section>
      )}
      {S.extraOn && <p className="tw-extra-note"><TiIcon name="sparkles" size={15} /> {c.extra}<Uk show={ctx.showUk} block>{c.extraUk}</Uk></p>}
      <div className="tw-pgrid">
        {c.cards.map(k => {
          const val = ans[k.id] || '';
          return (
            <div key={k.id} className={cx('tw-pcard', `is-${k.world}`)}>
              <div className="tw-pcard-top"><span className={cx('tw-wtag', `is-${k.world}`)}>{k.label}</span>{val.trim() && <span className="tw-pcard-ok"><TiIcon name="check" size={14} /> written</span>}</div>
              <label className="tw-pcard-q" htmlFor={`tw-p-${k.id}`}>{k.question}</label>
              <Uk show={ctx.showUk} block>{k.questionUk}</Uk>
              <textarea id={`tw-p-${k.id}`} className="ti-input" rows={3} value={val} placeholder={k.starter + '…'} onChange={(e) => setAns('answers', k.id, e.target.value)} />
              {S.extraOn && <textarea className="ti-input is-small" rows={2} aria-label={`${k.label}: one more sentence`} placeholder="One more sentence…" value={more[k.id] || ''} onChange={(e) => setAns('more', k.id, e.target.value)} />}
              <div className="tw-pcard-tools">
                {!val.trim() && <TiButton size="sm" icon="pen" onClick={() => { setAns('answers', k.id, k.starter); focusEnd(`tw-p-${k.id}`); }}>Use starter</TiButton>}
                <TiButton size="sm" onClick={() => flip(k.id, 'v')} aria-expanded={on(k.id, 'v')}>Words</TiButton>
                <TiButton size="sm" icon="eye" onClick={() => flip(k.id, 'm')} aria-expanded={on(k.id, 'm')}>{on(k.id, 'm') ? 'Hide model' : 'Model'}</TiButton>
                {val.trim() && canSpeak() && <TiButton size="sm" icon="volume" onClick={() => speak(val)}>Listen</TiButton>}
              </div>
              {on(k.id, 'v') && <div className="tw-chips" role="group" aria-label="Add a word">{k.verbs.map(v => <button key={v} type="button" className="ti-chip" onClick={() => addWord(k, v)}>+ {v}</button>)}</div>}
              {on(k.id, 'm') && <div className="ti-model"><p>“{k.model}” <SpeakButton text={k.model} /></p><Uk show={ctx.showUk} block>{k.modelUk}</Uk></div>}
              <label className="ti-switch tw-selfcheck"><input type="checkbox" checked={!!self[k.id]} onChange={(e) => setAns('self', k.id, e.target.checked)} /> <span>{k.check}<Uk show={ctx.showUk} block>{k.checkUk}</Uk></span></label>
              <details className="tw-follow" open={ctx.teacherMode || undefined}>
                <summary>{ctx.teacherMode ? 'Follow-up questions' : 'Think further'}</summary>
                <ul>{k.followUps.map((f, i) => <li key={i}>{f}</li>)}</ul>
              </details>
            </div>
          );
        })}
      </div>
      <p className="ti-model-note"><TiIcon name="hint" size={15} /> {c.validationNote}</p>
      <div className="ti-ex-actions">
        <span className="ti-muted" aria-live="polite">{filled}/{c.cards.length} written · {ctx.persist ? 'your answers stay with your lesson progress when you move between screens' : 'Teacher Mode: kept only during this session'}</span>
        <TiButton variant="primary" iconRight="next" className="ti-ex-next" onClick={ctx.next}>Continue</TiButton>
      </div>
    </div>
  );
}

/* ═══ 09 · Instinct Challenge ══════════════════════════════════ */
function ScreenTwInstinct({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const qsList = c.questions || [];
  const run = S.run || 1;
  const qs = S.q || {};
  const i = clamp(S.i || 0, 0, qsList.length - 1);
  const q = qsList[i];
  const st = qs[q.id] || {};
  const finished = !!(st.solved || st.revealed);
  const [review, setReview] = useState(false);
  const firstOk = (x) => ((qs[x.id] || {}).tries || [])[0] === x.answer;
  const score = qsList.filter(firstOk).length;
  const nextQ = () => {
    if (i + 1 < qsList.length) ctx.setS(p => ({ ...p, i: i + 1 }));
    else { ctx.setS(p => ({ ...p, finished: true, done: true, firstRun: p.firstRun || { score, at: new Date().toISOString() } })); twPlay('win'); }
  };
  const retry = () => { setReview(false); ctx.setS(p => ({ ...p, run: (p.run || 1) + 1, i: 0, q: {}, finished: false })); };
  if (S.finished) {
    const msg = (c.results || []).find(r => score >= r.min) || {};
    return (
      <div className="ti-l02 tw-instinct">
        <DHead kicker={c.kicker} title={screen.title} />
        <div className="tw-results">
          <div className="ti-eyebrow"><TiIcon name="award" size={15} /> Your result{run > 1 ? ` · attempt ${run}` : ''}</div>
          <div className="ti-results-big"><span>{score}/{qsList.length}</span><small>correct on the first try</small></div>
          <p className="tw-results-msg">{msg.en}<Uk show={ctx.showUk} block>{msg.uk}</Uk></p>
          {run > 1 && S.firstRun && <p className="ti-muted">First attempt: {S.firstRun.score}/{qsList.length}.</p>}
          <p className="ti-muted">Only your first answer to each question counts. Hints from earlier screens don’t change this score.</p>
          <div className="ti-ex-actions ti-center">
            <TiButton icon="book" onClick={() => setReview(r => !r)} aria-expanded={review}>{review ? 'Hide answers' : 'Review Answers'}</TiButton>
            <TiButton icon="replay" onClick={retry}>Try Again</TiButton>
            <TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton>
          </div>
          {review && (
            <ol className="ti-review tw-review">
              {qsList.map(x => { const first = ((qs[x.id] || {}).tries || [])[0]; return (
                <li key={x.id} className={firstOk(x) ? 'is-ok' : 'is-miss'}>
                  <div className="ti-review-t"><TiIcon name={firstOk(x) ? 'check' : 'x'} size={15} /> “<TwSentence text={x.sentence} verb={x.verb} target={x.target} />”</div>
                  <p><strong>{twWorld(x.answer).label}</strong>{first && first !== x.answer ? <span className="ti-muted"> · your first answer: {twWorld(first).label}</span> : null}</p>
                  <p className="ti-feedback-expl">{x.explanation}</p><Uk show={ctx.showUk} block>{x.explanationUk}</Uk>
                </li>
              ); })}
            </ol>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="ti-l02 tw-instinct">
      <DHead kicker={c.kicker} title={screen.title} />
      <TwAlexLine line={c.alexLine} showUk={ctx.showUk} />
      <div className="tw-qcard" key={`${run}-${q.id}`}>
        <div className="ti-qseq-head">
          <span className="ti-counter">Question {i + 1} of {qsList.length}</span>
          <div className="ti-challenge-bar" role="progressbar" aria-label="Challenge progress" aria-valuemin={0} aria-valuemax={qsList.length} aria-valuenow={i + (finished ? 1 : 0)}><span style={{ width: `${((i + (finished ? 1 : 0)) / qsList.length) * 100}%` }} /></div>
        </div>
        <TwWorldItem q={q} st={st} big ladder={false} prompt={c.prompt} promptUk={c.promptUk} reveal={ctx.revealAnswers} showUk={ctx.showUk}
          onChange={(v) => setNested(ctx, 'q', q.id, v)}
          onFirst={(ok) => run === 1 && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `instinct-${q.id}`, tags: { skill: 'recognition', world: q.answer } } })} />
        {finished && <div className="ti-ex-actions"><TiButton variant="accent" iconRight="next" className="ti-ex-next" onClick={nextQ}>{i + 1 < qsList.length ? 'Next question' : 'See my result'}</TiButton></div>}
      </div>
    </div>
  );
}

/* ═══ 10 · Mission Complete ════════════════════════════════════ */
function ScreenTwComplete({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const qs = S.q || {};
  const reflectionDone = c.reflection.every(q => qDone(qs[q.id]));
  const coreIds = ctx.screens.filter(s => !s.optional && s.id !== screen.id).map(s => s.id);
  const reqs = [
    { key: 'visited', label: 'Visit every lesson screen', ok: coreIds.every(id => ctx.visited.includes(id)), go: coreIds.find(id => !ctx.visited.includes(id)) },
    ...c.requirements.map(r => ({ key: r.screen, label: r.label, ok: !!((ctx.lstate[r.screen] || {}).done), go: r.screen })),
    { key: 'reflection', label: 'Answer the three reflection questions (above)', ok: reflectionDone },
  ];
  const allOk = reqs.every(r => r.ok);
  useEffect(() => {
    if (allOk && !ctx.lessonCompleted) { ctx.completeLesson(); twPlay('win'); }
    if (allOk && !S.done) ctx.setS(p => ({ ...p, done: true }));
  }, [allOk]);
  const screenTitle = (id) => { const s = ctx.screens.find(x => x.id === id); return s ? (s.navTitle || s.title) : id; };
  const roulette = ctx.screens.find(s => s.optional);
  return (
    <div className="ti-l02 tw-complete">
      <div className="tw-complete-hero">
        <TwScene scene={c.scene} className="tw-complete-scene" />
        <div className="tw-complete-talk">
          <div className="ti-eyebrow">{c.kicker}</div>
          <h2 className="ti-cover-title">{screen.title}</h2>
          <TwAlex lines={c.dialogue} showUk={ctx.showUk} />
        </div>
      </div>
      <section className="tw-recap-cards" aria-label="Learning recap">
        {c.recap.map(r => (
          <div key={r.key} className={cx('tw-rcard', `is-${r.key}`)}>
            <div className="tw-rcard-l">{r.label.toUpperCase()}</div>
            <div className="tw-rcard-m">{r.meaning}<Uk show={ctx.showUk} block>{r.meaningUk}</Uk></div>
            <p className="tw-rcard-e">“<TwSentence text={r.example} verb={r.verb} />” <SpeakButton text={r.example} /></p>
          </div>
        ))}
      </section>
      <section className="tw-final-reflect">
        <h3 className="ti-h3"><TiIcon name="target" size={17} /> Reflection</h3>
        <div className="ti-final-qs">
          {c.reflection.map((q, i) => (
            <DiscoveryQuestion key={q.id} q={q} number={i + 1} compact st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
              onChange={(v) => setNested(ctx, 'q', q.id, v)}
              onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `complete-${q.id}`, tags: { skill: 'understanding' } } })} />
          ))}
        </div>
      </section>
      <section className="tw-motto">
        <p className="tw-motto-t">{c.finalTitle}</p>
        <p className="tw-motto-s">{c.finalSub}</p>
        <Uk show={ctx.showUk} block>{c.finalUk} {c.finalSubUk}</Uk>
      </section>
      <section className={cx('ti-final-status tw-status', allOk && 'is-complete')} aria-live="polite">
        {allOk ? (
          <div className="tw-award">
            <TwBadge title={c.badge.title} subtitle={c.badge.subtitle} />
            <div>
              <div className="ti-eyebrow"><TiIcon name="award" size={15} /> Badge earned</div>
              <h3 className="ti-h2">{c.badge.title}</h3>
              <p className="tw-award-sub">{c.badge.subtitle}<Uk show={ctx.showUk} block>{c.badge.subtitleUk}</Uk></p>
              {!ctx.persist && <p className="ti-demo-note">Teacher mode / demo: completion is not saved to anyone’s progress.</p>}
              {ctx.persist && <p className="ti-muted"><TiIcon name="check" size={14} /> Lesson marked as completed in your Tense Instinct progress.</p>}
            </div>
          </div>
        ) : (
          <>
            <h3 className="ti-h3"><TiIcon name="flag" size={17} /> To complete the mission</h3>
            <ul className="ti-reqs">
              {reqs.map(r => (
                <li key={r.key} className={r.ok ? 'is-ok' : ''}>
                  <TiIcon name={r.ok ? 'check' : 'target'} size={15} /> <span>{r.label}</span>
                  {!r.ok && r.go && <button type="button" className="ti-link" onClick={() => ctx.goToScreen(r.go)}>Go to “{screenTitle(r.go)}”</button>}
                </li>
              ))}
            </ul>
            <p className="ti-muted">A perfect score is not required. Time Portal Roulette is optional.</p>
          </>
        )}
        <div className="ti-ex-actions ti-center">
          <TiButton icon="map" onClick={ctx.goCourse}>Return to Course</TiButton>
          <TiButton icon="replay" onClick={() => ctx.goTo(0)}>Review Lesson</TiButton>
          {ctx.nextLesson && <TiButton variant="primary" iconRight="next" onClick={ctx.goNextLesson}>Continue Learning: {ctx.nextLesson.title}</TiButton>}
          {roulette && <TiButton icon="dice" onClick={() => ctx.goToScreen(roulette.id)}>Optional: Game Zone</TiButton>}
        </div>
        {!ctx.nextLesson && ctx.upcomingLesson && <p className="ti-muted ti-center">Next: Lesson {String(ctx.upcomingLesson.number).padStart(2, '0')} · {ctx.upcomingLesson.title} — {lessonHasContent(ctx.upcomingLesson) ? 'your teacher will open it for you.' : 'coming soon.'}</p>}
      </section>
    </div>
  );
}

/* ═══ 11 · Time Portal Roulette (optional) ═════════════════════ */
function ScreenTwRoulette({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const reduced = useReducedMotion();
  const worlds = c.worlds || [], actions = c.actions || [];
  const combos = useMemo(() => worlds.flatMap(w => actions.map(a => `${w.key}|${a.id}`)), [worlds, actions]);
  const cur = S.cur ? { w: worlds.find(x => x.key === S.cur.w), a: actions.find(x => x.id === S.cur.a) } : null;
  const [spin, setSpin] = useState(null); // { w, a } під час анімації
  const [show, setShow] = useState({ ex: false, tip: false });
  const [draft, setDraft] = useState('');
  const [rated, setRated] = useState(null);
  const tick = useRef(null);
  useEffect(() => () => clearInterval(tick.current), []);
  const doSpin = () => {
    if (spin) return;
    const hist = S.hist || [];
    const last = S.cur ? `${S.cur.w}|${S.cur.a}` : null;
    let pool = combos.filter(k => !hist.includes(k) && k !== last);
    let fresh = false;
    if (!pool.length) { pool = combos.filter(k => k !== last); fresh = true; }
    const [w, a] = pool[twRandInt(pool.length)].split('|');
    const land = () => {
      clearInterval(tick.current); setSpin(null); setShow({ ex: false, tip: false }); setDraft(''); setRated(null);
      ctx.setS(p => ({ ...p, cur: { w, a }, rounds: (p.rounds || 0) + 1, hist: [...(fresh ? [] : (p.hist || [])), `${w}|${a}`] }));
    };
    twPlay('spin');
    if (reduced) { land(); return; }
    let n = 0;
    setSpin({ w: worlds[twRandInt(worlds.length)], a: actions[twRandInt(actions.length)] });
    tick.current = setInterval(() => {
      n++; setSpin({ w: worlds[twRandInt(worlds.length)], a: actions[twRandInt(actions.length)] });
      if (n >= 9) land();
    }, 85);
  };
  const restart = () => { clearInterval(tick.current); setSpin(null); setDraft(''); setRated(null); ctx.setS(p => ({ ...p, cur: null, rounds: 0, hist: [], confirmed: 0 })); };
  const shownW = spin ? spin.w : cur && cur.w;
  const shownA = spin ? spin.a : cur && cur.a;
  const example = cur && cur.a.examples[cur.w.key];
  return (
    <div className="ti-l02 tw-roulette">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <div className="tw-reels" aria-live="polite" aria-busy={!!spin}>
        <div className={cx('tw-reel', shownW && `is-${shownW.key}`, spin && 'is-spinning')}>
          <div className="tw-reel-h">Time world</div>
          <div className="tw-reel-v">{shownW ? shownW.label : '?'}</div>
        </div>
        <span className="tw-reel-plus" aria-hidden="true">+</span>
        <div className={cx('tw-reel is-action', spin && 'is-spinning')}>
          <div className="tw-reel-h">Action</div>
          <div className="tw-reel-v">{shownA ? shownA.label : '?'}</div>
        </div>
      </div>
      <div className="ti-ex-actions ti-center">
        <TiButton variant="primary" size="lg" icon="dice" onClick={doSpin} disabled={!!spin}>{cur ? 'Next Round' : 'Spin the Portals'}</TiButton>
        {(S.rounds || 0) > 0 && <TiButton icon="replay" onClick={restart}>Restart</TiButton>}
        <TwSoundToggle />
      </div>
      {cur && !spin && (
        <div className={cx('tw-round', `is-${cur.w.key}`)}>
          <p className="tw-round-task"><TiIcon name="target" size={16} /> Make a sentence: <strong>{cur.w.label}</strong> + <strong>{cur.a.label.toLowerCase()}</strong>.</p>
          {ctx.teacherMode ? (
            <div className="ti-ex-actions">
              <span className="ti-muted">The student answers aloud.</span>
              <TiButton icon="check" variant="primary" onClick={() => { ctx.setS(p => ({ ...p, confirmed: (p.confirmed || 0) + 1 })); doSpin(); }}>Good answer — next round</TiButton>
            </div>
          ) : (
            <div className="tw-round-write">
              <label className="ti-sr-only" htmlFor="tw-rl-in">Your sentence</label>
              <input id="tw-rl-in" className="ti-input" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Say it aloud — or type it here…" autoComplete="off" />
            </div>
          )}
          <div className="ti-ex-actions">
            <TiButton size="sm" icon="hint" onClick={() => setShow(s => ({ ...s, tip: !s.tip }))} aria-expanded={show.tip}>Tip</TiButton>
            <TiButton size="sm" icon="eye" onClick={() => setShow(s => ({ ...s, ex: !s.ex }))} aria-expanded={show.ex}>{!ctx.teacherMode && draft.trim() ? 'Compare with an example' : 'Example answer'}</TiButton>
          </div>
          {show.tip && <p className="tw-note"><TiIcon name="hint" size={15} /> {cur.w.tip}<Uk show={ctx.showUk} block>{cur.w.tipUk}</Uk></p>}
          {show.ex && (
            <div className="ti-model">
              <p>“{example}” <SpeakButton text={example} /></p>
              {!ctx.teacherMode && draft.trim() && (
                <div className="tw-selfrate">
                  <span>Your sentence: “{draft.trim()}”. Does it match <strong>{cur.w.label}</strong> + {cur.a.label.toLowerCase()}?</span>
                  <div className="ti-ex-actions">
                    <TiButton size="sm" icon="check" aria-pressed={rated === 'yes'} onClick={() => setRated('yes')}>Yes, it matches</TiButton>
                    <TiButton size="sm" aria-pressed={rated === 'unsure'} onClick={() => setRated('unsure')}>Not sure</TiButton>
                  </div>
                  {rated === 'yes' && <p className="ti-muted">Great — your sentence doesn’t have to be the same as the example.</p>}
                  {rated === 'unsure' && <p className="ti-muted">Check the tip above, or ask your teacher. Different sentences can be correct.</p>}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <p className="ti-muted ti-center">Rounds played: {S.rounds || 0}{ctx.teacherMode && S.confirmed ? ` · confirmed by the teacher: ${S.confirmed}` : ''} · This game is optional.</p>
      <div className="ti-ex-actions ti-center"><TiButton icon="left" onClick={() => ctx.goToScreen('s10')}>Back to Mission Complete</TiButton><TiButton icon="map" onClick={ctx.goCourse}>Return to Course</TiButton></div>
    </div>
  );
}

/* ── Реєстрація типів екранів Lesson 02 ── */
Object.assign(TI_SCREEN_TEMPLATES, {
  'tw-briefing': { label: 'Mission Briefing (story intro)', C: ScreenTwBriefing },
  'tw-portal': { label: 'Chrono Compass — time portal', C: ScreenTwPortal },
  'tw-worlds': { label: 'Three worlds timeline + quick check', C: ScreenTwWorlds },
  'tw-detective': { label: 'Time Detective', C: ScreenTwDetective },
  'tw-story': { label: 'One story, three worlds', C: ScreenTwStory },
  'tw-shifter': { label: 'Time Shift Lab', C: ScreenTwShifter },
  'tw-timeline': { label: 'Broken Timeline (ordering)', C: ScreenTwTimeline },
  'tw-personal': { label: 'My Three Time Worlds (speaking)', C: ScreenTwPersonal },
  'tw-instinct': { label: 'Instinct Challenge (time worlds)', C: ScreenTwInstinct },
  'tw-complete': { label: 'Mission Complete', C: ScreenTwComplete },
  'tw-roulette': { label: 'Time Portal Roulette (optional)', C: ScreenTwRoulette },
});
