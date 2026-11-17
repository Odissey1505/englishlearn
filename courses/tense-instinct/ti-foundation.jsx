/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · foundation
 * Спільна основа модуля: модель часів (3 × 4), таймлайни, медіа,
 * сховище прогресу. Усі файли модуля компілюються разом в одній
 * IIFE (див. InteractiveCourseHost в index.html), тож оголошення
 * звідси доступні в інших ti-*.jsx без імпортів.
 * ═══════════════════════════════════════════════════════════════ */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

const cx = (...a) => a.filter(Boolean).join(' ');
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function shuffleArr(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function useReducedMotion() {
  const q = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const [reduced, setReduced] = useState(q ? q.matches : false);
  useEffect(() => {
    if (!q) return;
    const on = () => setReduced(q.matches);
    q.addEventListener ? q.addEventListener('change', on) : q.addListener(on);
    return () => { q.removeEventListener ? q.removeEventListener('change', on) : q.removeListener(on); };
  }, []);
  return reduced;
}

/* ── Іконки (лише ті, що потрібні курсу) ─────────────────────── */
const TI_ICON_PATHS = {
  back: <><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>,
  next: <><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>,
  left: <polyline points="15 18 9 12 15 6" />,
  right: <polyline points="9 18 15 12 9 6" />,
  play: <polygon points="6 3 20 12 6 21 6 3" />,
  pause: <><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></>,
  replay: <><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></>,
  expand: <><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></>,
  compress: <><polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" /><line x1="14" y1="10" x2="21" y2="3" /><line x1="3" y1="21" x2="10" y2="14" /></>,
  focus: <><circle cx="12" cy="12" r="3" /><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /></>,
  eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></>,
  hint: <><path d="M9 18h6M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></>,
  check: <polyline points="20 6 9 17 4 12" />,
  x: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  shuffle: <><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /><line x1="4" y1="4" x2="9" y2="9" /></>,
  sparkles: <><path d="M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z" /></>,
  lock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  book: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  mic: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></>,
  volume: <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></>,
  refresh: <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  notes: <><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" /><path d="M15 3v6h6" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  dumbbell: <><path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" /></>,
  compass: <><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></>,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  map: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></>,
  image: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></>,
  video: <><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" /></>,
  external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>,
  zoom: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></>,
};
function TiIcon({ name, size = 18, className, title }) {
  return (
    <svg className={cx('ti-icon', className)} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden={title ? undefined : 'true'} role={title ? 'img' : undefined}>
      {title && <title>{title}</title>}
      {TI_ICON_PATHS[name] || null}
    </svg>
  );
}

function TiButton({ variant = 'ghost', size, icon, iconRight, children, className, type = 'button', ...rest }) {
  return (
    <button type={type} className={cx('ti-btn', `ti-btn-${variant}`, size && `ti-btn-${size}`, !children && 'ti-btn-icon', className)} {...rest}>
      {icon && <TiIcon name={icon} size={size === 'lg' ? 20 : 17} />}
      {children && <span>{children}</span>}
      {iconRight && <TiIcon name={iconRight} size={size === 'lg' ? 20 : 17} />}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * МОДЕЛЬ: 3 Time Worlds × 4 Aspects
 * Це навчальна рамка, а не повний опис англійського часу:
 * значення кожної клітинки залежать від контексту.
 * ═══════════════════════════════════════════════════════════════ */
const TI_WORLDS = [
  { key: 'past', label: 'Past', uk: 'Минуле' },
  { key: 'present', label: 'Present', uk: 'Теперішнє' },
  { key: 'future', label: 'Future', uk: 'Майбутнє' },
];
const TI_ASPECTS = [
  { key: 'simple', label: 'Simple', uk: 'Дія цілком', lens: 'the whole action — a fact, a routine, an event' },
  { key: 'continuous', label: 'Continuous', uk: 'Дія в процесі', lens: 'the action in progress, from inside' },
  { key: 'perfect', label: 'Perfect', uk: 'Погляд з точки відліку', lens: 'an earlier action, seen from a reference point' },
  { key: 'perfectContinuous', label: 'Perfect Continuous', uk: 'Тривалість до точки відліку', lens: 'an activity stretching up to a reference point' },
];
const tiCellId = (world, aspect) => `${world}-${aspect}`;

// Таймлайн-специфікація: x — 0..100 (NOW = 60). Типи елементів:
// point, repeat, span (ongoing → хвиляста лінія), link (дуга до точки відліку), interrupt.
const TI_NOW = 60;
const TI_CELLS = [
  /* ── PRESENT ── */
  {
    id: 'present-simple', world: 'present', aspect: 'simple', name: 'Present Simple', uk: 'Теперішній простий',
    form: 'V / V-s', formNeg: "don't / doesn't + V", formQ: 'Do / Does … + V?',
    core: 'The action as a whole: a fact, a routine, or a stable situation.',
    coreUk: 'Дія як ціле: факт, звичка чи стала ситуація.',
    uses: [
      { en: 'Habits and routines', uk: 'Звички та розпорядок', ex: 'I walk to school every day.' },
      { en: 'Facts and general truths', uk: 'Факти й загальні істини', ex: 'Water boils at 100°C.' },
      { en: 'Permanent or long-term situations', uk: 'Сталі ситуації', ex: 'My aunt lives in Lviv.' },
      { en: 'States (know, like, want, belong…)', uk: 'Стани', ex: 'I know the answer.' },
      { en: 'Timetables', uk: 'Розклади', ex: 'The train leaves at 7:40 tomorrow.' },
    ],
    myth: 'Not only habits: Present Simple also describes facts, states, and even timetabled future events.',
    mythUk: 'Не лише звички: ще факти, стани й навіть розклад на майбутнє.',
    timeline: { ref: null, items: [{ t: 'repeat', from: 8, to: 96, n: 9 }] },
    grammarBank: 'present-simple',
  },
  {
    id: 'present-continuous', world: 'present', aspect: 'continuous', name: 'Present Continuous', uk: 'Теперішній тривалий',
    form: 'am / is / are + V-ing', formNeg: "am not / isn't / aren't + V-ing", formQ: 'Am / Is / Are … + V-ing?',
    core: 'The action seen from inside: in progress, unfinished, temporary, or changing.',
    coreUk: 'Дія зсередини: в процесі, незавершена, тимчасова чи така, що змінюється.',
    uses: [
      { en: 'In progress now', uk: 'Відбувається зараз', ex: "Shh — the baby's sleeping." },
      { en: 'Temporary situations', uk: 'Тимчасові ситуації', ex: "I'm staying with my cousin this week." },
      { en: 'Changing situations', uk: 'Зміни, що тривають', ex: "It's getting darker earlier." },
      { en: 'Arranged future plans', uk: 'Домовлені плани', ex: "We're meeting Anna on Friday." },
      { en: 'Annoying repetition (with always)', uk: 'Дратівливе повторення', ex: "He's always losing his keys!" },
    ],
    myth: 'Not only "right now": also temporary periods, trends, and arranged plans.',
    mythUk: 'Не лише «прямо зараз»: ще тимчасові періоди, зміни й домовлені плани.',
    timeline: { ref: { x: TI_NOW }, items: [{ t: 'span', from: 46, to: 76, ongoing: true, open: 'both' }] },
    grammarBank: 'present-continuous',
  },
  {
    id: 'present-perfect', world: 'present', aspect: 'perfect', name: 'Present Perfect', uk: 'Теперішній доконаний',
    form: 'have / has + V3', formNeg: "haven't / hasn't + V3", formQ: 'Have / Has … + V3?',
    core: 'A past action or state seen from now: it connects to the present moment.',
    coreUk: 'Дія чи стан з минулого, на які ми дивимось із «зараз»: є зв’язок із теперішнім.',
    uses: [
      { en: 'Life experience (no specific time)', uk: 'Досвід (без точного часу)', ex: "I've been to Rome twice." },
      { en: 'Recent action, present result', uk: 'Недавня дія — результат зараз', ex: "I've lost my keys, so I can't get in." },
      { en: 'Unfinished time period', uk: 'Період ще триває', ex: "I've had three coffees today." },
      { en: 'State continuing up to now', uk: 'Стан, що триває досі', ex: "We've known each other since 2019." },
    ],
    myth: 'Not only a finished result: the period can still be open ("since 2019", "today"). With a finished past time ("yesterday"), use Past Simple.',
    mythUk: 'Не лише «завершений результат»: період може ще тривати. З точним минулим часом (yesterday) — Past Simple.',
    timeline: { ref: { x: TI_NOW, label: 'now' }, items: [{ t: 'point', x: 22, faint: true }, { t: 'point', x: 38, faint: true }, { t: 'link', from: 38, to: TI_NOW }] },
    grammarBank: 'present-perfect',
  },
  {
    id: 'present-perfectContinuous', world: 'present', aspect: 'perfectContinuous', name: 'Present Perfect Continuous', uk: 'Теперішній доконано-тривалий',
    form: 'have / has been + V-ing', formNeg: "haven't / hasn't been + V-ing", formQ: 'Have / Has … been + V-ing?',
    core: 'An activity stretching up to now (or just stopped) — the focus is on the activity and its duration.',
    coreUk: 'Діяльність, що тягнеться до «зараз» (або щойно скінчилась): фокус на процесі й тривалості.',
    uses: [
      { en: 'Activity continuing up to now', uk: 'Триває до цього моменту', ex: "I've been learning English for five years." },
      { en: 'Recent activity with visible evidence', uk: 'Щойно тривало — видно наслідки', ex: "Your eyes are red. Have you been crying?" },
      { en: 'Repeated activity lately', uk: 'Повторювана дія останнім часом', ex: "I've been going to the gym a lot lately." },
    ],
    myth: 'No "for" or "since" needed: "It\'s been raining — the streets are wet."',
    mythUk: 'Слова for / since не обов’язкові: «It’s been raining — вулиці мокрі».',
    timeline: { ref: { x: TI_NOW, label: 'now' }, items: [{ t: 'span', from: 24, to: TI_NOW, ongoing: true, open: 'start' }] },
    grammarBank: 'present-perfect-continuous',
  },
  /* ── PAST ── */
  {
    id: 'past-simple', world: 'past', aspect: 'simple', name: 'Past Simple', uk: 'Минулий простий',
    form: 'V-ed / V2', formNeg: "didn't + V", formQ: 'Did … + V?',
    core: 'A completed action or state at a definite time in the past, seen as a whole.',
    coreUk: 'Завершена дія чи стан у визначений момент минулого — як ціле.',
    uses: [
      { en: 'Finished events at a known time', uk: 'Завершені події в певний час', ex: 'I called her yesterday.' },
      { en: 'A sequence of events in a story', uk: 'Послідовність подій в історії', ex: 'She opened the door and screamed.' },
      { en: 'Past habits and states', uk: 'Минулі звички й стани', ex: 'We lived in Odesa when I was a child.' },
    ],
    myth: 'The time can be clear from context — "yesterday" is not required.',
    mythUk: 'Час може бути зрозумілим із контексту — слово yesterday не обов’язкове.',
    timeline: { ref: { x: 28, label: 'then' }, items: [{ t: 'point', x: 28 }] },
    grammarBank: 'past-simple',
  },
  {
    id: 'past-continuous', world: 'past', aspect: 'continuous', name: 'Past Continuous', uk: 'Минулий тривалий',
    form: 'was / were + V-ing', formNeg: "wasn't / weren't + V-ing", formQ: 'Was / Were … + V-ing?',
    core: 'An action in progress around a moment in the past.',
    coreUk: 'Дія в процесі навколо певного моменту в минулому.',
    uses: [
      { en: 'Background of a story', uk: 'Тло історії', ex: 'The sun was shining and birds were singing.' },
      { en: 'Interrupted action', uk: 'Перервана дія', ex: 'I was cooking when the phone rang.' },
      { en: 'Two actions in progress together', uk: 'Дві паралельні дії', ex: 'While I was reading, he was watching TV.' },
      { en: 'In progress at a past time', uk: 'В процесі у певний час', ex: 'At 8 p.m. we were having dinner.' },
    ],
    myth: 'It describes the situation around an event — it often works together with Past Simple.',
    mythUk: 'Описує ситуацію навколо події — часто працює разом із Past Simple.',
    timeline: { ref: { x: 30, label: 'then' }, items: [{ t: 'span', from: 14, to: 44, ongoing: true, open: 'both' }, { t: 'interrupt', x: 30 }] },
    grammarBank: 'past-continuous',
  },
  {
    id: 'past-perfect', world: 'past', aspect: 'perfect', name: 'Past Perfect', uk: 'Минулий доконаний',
    form: 'had + V3', formNeg: "hadn't + V3", formQ: 'Had … + V3?',
    core: 'An earlier past: something happened before another past moment.',
    coreUk: '«Ще раніше в минулому»: дія сталася до іншого минулого моменту.',
    uses: [
      { en: 'Earlier event before a past moment', uk: 'Подія до іншої минулої події', ex: 'When we arrived, the film had already started.' },
      { en: 'Explaining a past situation', uk: 'Пояснення минулої ситуації', ex: 'She was upset because she had lost her phone.' },
      { en: 'Experience up to a past point', uk: 'Досвід до точки в минулому', ex: 'I had never seen snow before that winter.' },
    ],
    myth: 'Only needed when the order matters or isn\'t clear: "I ate after I finished work" works fine with Past Simple.',
    mythUk: 'Потрібен, коли порядок важливий або неочевидний: «I ate after I finished work» — нормально з Past Simple.',
    timeline: { ref: { x: 38, label: 'past moment' }, items: [{ t: 'point', x: 18 }, { t: 'link', from: 18, to: 38 }] },
    grammarBank: 'past-perfect',
  },
  {
    id: 'past-perfectContinuous', world: 'past', aspect: 'perfectContinuous', name: 'Past Perfect Continuous', uk: 'Минулий доконано-тривалий',
    form: 'had been + V-ing', formNeg: "hadn't been + V-ing", formQ: 'Had … been + V-ing?',
    core: 'An activity stretching up to a moment in the past.',
    coreUk: 'Діяльність, що тяглася до певного моменту в минулому.',
    uses: [
      { en: 'Duration up to a past moment', uk: 'Тривалість до минулого моменту', ex: 'We had been waiting for an hour when the bus came.' },
      { en: 'Cause of a past situation', uk: 'Причина минулої ситуації', ex: 'He was exhausted because he had been working all night.' },
    ],
    myth: 'No "for" needed: "The ground was wet. It had been raining."',
    mythUk: 'for не обов’язкове: «The ground was wet. It had been raining.»',
    timeline: { ref: { x: 40, label: 'past moment' }, items: [{ t: 'span', from: 10, to: 40, ongoing: true, open: 'start' }] },
    grammarBank: 'past-perfect-continuous',
  },
  /* ── FUTURE ── */
  {
    id: 'future-simple', world: 'future', aspect: 'simple', name: 'Future Simple (will)', uk: 'Майбутній простий',
    form: 'will + V', formNeg: "won't + V", formQ: 'Will … + V?',
    core: 'The future as a whole: predictions, decisions made now, promises, offers.',
    coreUk: 'Майбутнє як ціле: прогнози, рішення в момент мовлення, обіцянки, пропозиції.',
    uses: [
      { en: 'Predictions and opinions', uk: 'Прогнози й думки', ex: 'I think it will rain later.' },
      { en: 'Decisions at the moment of speaking', uk: 'Рішення «тут і зараз»', ex: "I'm cold. I'll close the window." },
      { en: 'Promises and offers', uk: 'Обіцянки та пропозиції', ex: "Don't worry, I'll help you." },
    ],
    myth: 'English has several ways to talk about the future: "be going to" and Present Continuous are often more natural for plans.',
    mythUk: 'Майбутнє в англійській — не лише will: для планів часто природніше going to чи Present Continuous.',
    timeline: { ref: null, items: [{ t: 'point', x: 82 }] },
    grammarBank: 'future-simple',
  },
  {
    id: 'future-continuous', world: 'future', aspect: 'continuous', name: 'Future Continuous', uk: 'Майбутній тривалий',
    form: 'will be + V-ing', formNeg: "won't be + V-ing", formQ: 'Will … be + V-ing?',
    core: 'An action in progress around a future moment.',
    coreUk: 'Дія в процесі навколо майбутнього моменту.',
    uses: [
      { en: 'In progress at a future time', uk: 'В процесі в певний момент майбутнього', ex: "This time tomorrow, I'll be flying to Rome." },
      { en: 'Future events in the normal course of things', uk: 'Те, що й так станеться', ex: "I'll be passing the shop anyway — I can get some milk." },
      { en: 'Polite questions about plans', uk: 'Ввічливі питання про плани', ex: 'Will you be using the car tonight?' },
    ],
    myth: 'It\'s also a polite, neutral way to ask about someone\'s plans.',
    mythUk: 'Це ще й ввічливий спосіб запитати про чиїсь плани.',
    timeline: { ref: { x: 84, label: 'future moment' }, items: [{ t: 'span', from: 72, to: 96, ongoing: true, open: 'both' }] },
    grammarBank: 'future-continuous',
  },
  {
    id: 'future-perfect', world: 'future', aspect: 'perfect', name: 'Future Perfect', uk: 'Майбутній доконаний',
    form: 'will have + V3', formNeg: "won't have + V3", formQ: 'Will … have + V3?',
    core: 'Something completed before a future reference point.',
    coreUk: 'Дія завершиться до певної точки в майбутньому.',
    uses: [
      { en: 'Completed by a future time', uk: 'Завершиться до певного часу', ex: "By Friday, I'll have finished the project." },
      { en: 'Looking back from the future', uk: 'Погляд назад із майбутнього', ex: "By June, she'll have worked here for a year." },
    ],
    myth: 'The key is the future reference point ("by Friday", "by the time you arrive").',
    mythUk: 'Ключ — точка відліку в майбутньому (by Friday, by the time…).',
    timeline: { ref: { x: 90, label: 'future point' }, items: [{ t: 'point', x: 74 }, { t: 'link', from: 74, to: 90 }] },
    grammarBank: 'future-perfect',
  },
  {
    id: 'future-perfectContinuous', world: 'future', aspect: 'perfectContinuous', name: 'Future Perfect Continuous', uk: 'Майбутній доконано-тривалий',
    form: 'will have been + V-ing', formNeg: "won't have been + V-ing", formQ: 'Will … have been + V-ing?',
    core: 'The duration of an activity up to a future reference point.',
    coreUk: 'Тривалість діяльності до точки в майбутньому.',
    uses: [
      { en: 'Duration up to a future point', uk: 'Тривалість до майбутньої точки', ex: "By July, I'll have been travelling for six months." },
    ],
    myth: 'Rare in everyday speech — but useful for "how long" at a future moment.',
    mythUk: 'У повсякденному мовленні рідкісний, але корисний для «скільки часу» в майбутньому.',
    timeline: { ref: { x: 90, label: 'future point' }, items: [{ t: 'span', from: 66, to: 90, ongoing: true, open: 'start' }] },
    grammarBank: 'future-perfect-continuous',
  },
];
const tiCell = (id) => TI_CELLS.find(c => c.id === id);
const tiCellAt = (world, aspect) => tiCell(tiCellId(world, aspect));

/* ── One Action, Twelve Perspectives — перевірені демо-приклади ── */
// Британський правопис (travelling). Порядок полів = id клітинки.
const TI_VERB_PERSPECTIVES = {
  work: {
    label: 'work', subject: 'she',
    'present-simple': 'She works at a hospital.',
    'present-continuous': "She's working from home this week.",
    'present-perfect': "She's worked in three different countries.",
    'present-perfectContinuous': "She's been working all morning — she needs a break.",
    'past-simple': 'She worked late yesterday.',
    'past-continuous': 'She was working when I called.',
    'past-perfect': 'By 2019, she had worked in three different cities.',
    'past-perfectContinuous': 'She was tired because she had been working all night.',
    'future-simple': "I think she'll work late tonight.",
    'future-continuous': "This time tomorrow, she'll be working in London.",
    'future-perfect': "By June, she'll have worked here for a year.",
    'future-perfectContinuous': "By 6 p.m., she'll have been working for twelve hours.",
  },
  study: {
    label: 'study', subject: 'he',
    'present-simple': 'He studies law at university.',
    'present-continuous': "He's studying for his exams at the moment.",
    'present-perfect': "He's studied Spanish, so he can help us.",
    'present-perfectContinuous': "He's been studying a lot lately — he looks tired.",
    'past-simple': 'He studied in Lviv for four years.',
    'past-continuous': 'He was studying when the lights went out.',
    'past-perfect': 'He had never studied Japanese before he moved to Tokyo.',
    'past-perfectContinuous': 'His eyes were red because he had been studying all night.',
    'future-simple': "Don't worry — he'll study harder next term.",
    'future-continuous': "Don't call him at eight — he'll be studying.",
    'future-perfect': "By the end of the year, he'll have studied all twelve units.",
    'future-perfectContinuous': "In September, he'll have been studying English for five years.",
  },
  go: {
    label: 'go', subject: 'they',
    'present-simple': 'They go to the gym on Mondays.',
    'present-continuous': "They're going to the cinema tonight.",
    'present-perfect': "They've gone home — the office is empty.",
    'present-perfectContinuous': "They've been going to that café for years.",
    'past-simple': 'They went to Italy last summer.',
    'past-continuous': 'They were going home when it started to rain.',
    'past-perfect': 'When we arrived, they had already gone.',
    'past-perfectContinuous': 'They had been going to the same school for years before they finally met.',
    'future-simple': "They'll go by train, I'm sure.",
    'future-continuous': "They'll be going past the shop anyway, so they can buy some bread.",
    'future-perfect': "By the time you get there, they'll have gone.",
    'future-perfectContinuous': "Next month, they'll have been going to this school for three years.",
  },
  travel: {
    label: 'travel', subject: 'I',
    'present-simple': 'I travel a lot for work.',
    'present-continuous': "I'm travelling around Spain at the moment.",
    'present-perfect': "I've travelled to twelve countries.",
    'present-perfectContinuous': "I've been travelling for three weeks, and I'm a bit homesick.",
    'past-simple': 'I travelled to Japan in 2023.',
    'past-continuous': 'I was travelling through Poland when I met her.',
    'past-perfect': 'I had never travelled alone before that trip.',
    'past-perfectContinuous': 'I had been travelling for hours, so I fell asleep at once.',
    'future-simple': "I'll travel more when I retire.",
    'future-continuous': "This time next week, I'll be travelling to Lisbon.",
    'future-perfect': "By the end of the year, I'll have travelled to five new countries.",
    'future-perfectContinuous': "By July, I'll have been travelling for six months.",
  },
};

/* ═══════════════════════════════════════════════════════════════
 * TIMELINE — SVG-візуалізація значення (не декорація)
 * ═══════════════════════════════════════════════════════════════ */
const TL_W = 600, TL_H = 150, TL_Y = 96, TL_PAD = 26;
const tlX = (x) => TL_PAD + (x / 100) * (TL_W - TL_PAD * 2);

function wavePath(x1, x2, y, amp = 6, len = 18) {
  let d = `M ${x1} ${y}`;
  for (let x = x1; x < x2; x += len) {
    const xm = Math.min(x + len / 2, x2), xe = Math.min(x + len, x2);
    d += ` Q ${(x + xm) / 2} ${y - amp} ${xm} ${y} Q ${(xm + xe) / 2} ${y + amp} ${xe} ${y}`;
  }
  return d;
}

// Додаткові (необов'язкові) поля специфікації — сумісні зі старими:
//   spec.refs: [{ x, label }]           — ще точки відліку, крім ref
//   point: { label, below, done }       — підпис; done = позначка «завершено»
//   span / repeat / interrupt: { label } — підпис над елементом
//   { t: 'duration', from, to, label }  — дужка тривалості під віссю
function Timeline({ spec, label, compact, animate = true, className, showZones = true, highlight }) {
  const reduced = useReducedMotion();
  const anim = animate && !reduced;
  const id = useMemo(() => 'tl' + Math.random().toString(36).slice(2, 8), []);
  const nowX = tlX(TI_NOW);
  const items = (spec && spec.items) || [];
  const ref = spec && spec.ref;
  const refs = (spec && spec.refs) || [];
  const hasDuration = items.some(it => it.t === 'duration');
  const H = TL_H + (hasDuration ? 36 : 0);
  let delay = 0; const d = () => { delay += 0.18; return { animationDelay: `${delay}s` }; };
  const itemLabel = (x, y, text, cls) => text ? <text x={x} y={y} textAnchor="middle" className={cx('tl-label tl-item-label', cls)}>{text}</text> : null;
  return (
    <figure className={cx('ti-timeline', compact && 'ti-timeline-compact', anim && 'ti-tl-anim', className)}>
      <svg viewBox={`0 0 ${TL_W} ${H}`} role="img" aria-label={label || 'Timeline'} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`${id}-axis`} x1="0" x2="1">
            <stop offset="0" stopColor="var(--ti-past)" /><stop offset={TI_NOW / 100} stopColor="var(--ti-now)" /><stop offset="1" stopColor="var(--ti-future)" />
          </linearGradient>
          <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--ti-gold)" />
          </marker>
        </defs>
        {showZones && <>
          <rect x={TL_PAD} y={TL_Y - 52} width={nowX - TL_PAD} height="74" rx="10" className={cx('tl-zone tl-zone-past', highlight === 'past' && 'is-hl')} />
          <rect x={nowX} y={TL_Y - 52} width={TL_W - TL_PAD - nowX} height="74" rx="10" className={cx('tl-zone tl-zone-future', highlight === 'future' && 'is-hl')} />
        </>}
        <line x1={TL_PAD} y1={TL_Y} x2={TL_W - TL_PAD} y2={TL_Y} stroke={`url(#${id}-axis)`} strokeWidth="3" strokeLinecap="round" className="tl-axis" />
        <line x1={nowX} y1={TL_Y - 58} x2={nowX} y2={TL_Y + 16} className="tl-now-line" />
        <text x={nowX} y={TL_Y + 34} textAnchor="middle" className="tl-label tl-label-now">NOW</text>
        <text x={TL_PAD + 4} y={TL_Y + 34} className="tl-label">PAST</text>
        <text x={TL_W - TL_PAD - 4} y={TL_Y + 34} textAnchor="end" className="tl-label">FUTURE</text>
        {[ref, ...refs].filter(Boolean).map((r, i) => (
          <g key={`ref${i}`}>
            {r.x !== TI_NOW && <g className="tl-item" style={d()}><line x1={tlX(r.x)} y1={TL_Y - 58} x2={tlX(r.x)} y2={TL_Y + 12} className="tl-ref-line" /></g>}
            {r.label && <text x={tlX(r.x)} y={TL_Y - 62} textAnchor="middle" className="tl-label tl-label-ref">{r.label}</text>}
          </g>
        ))}
        {items.map((it, i) => {
          if (it.t === 'point') {
            const cxp = tlX(it.x);
            return (
              <g key={i} className="tl-item" style={d()}>
                <circle cx={cxp} cy={TL_Y} r={it.done ? 10.5 : it.faint ? 6.5 : 8.5} className={cx('tl-point', it.faint && 'is-faint', it.done && 'is-done')} />
                {it.done && <path d={`M ${cxp - 4.5} ${TL_Y} l 3 3.2 l 6 -6.4`} className="tl-check" />}
                {itemLabel(cxp, it.below ? TL_Y + 50 : TL_Y - 18, it.label)}
              </g>
            );
          }
          if (it.t === 'interrupt') return <g key={i} className="tl-item" style={d()}><path d={`M ${tlX(it.x)} ${TL_Y - 34} L ${tlX(it.x) - 7} ${TL_Y - 16} L ${tlX(it.x) + 3} ${TL_Y - 16} L ${tlX(it.x) - 4} ${TL_Y + 2}`} className="tl-interrupt" />{itemLabel(tlX(it.x), TL_Y - 40, it.label, 'is-gold')}</g>;
          if (it.t === 'repeat') {
            const n = it.n || 6; const step = (it.to - it.from) / (n - 1);
            return <g key={i}>{Array.from({ length: n }, (_, k) => <circle key={k} cx={tlX(it.from + step * k)} cy={TL_Y} r="5.5" className="tl-item tl-point tl-repeat" style={d()} />)}{it.label && <g className="tl-item" style={d()}>{itemLabel(tlX((it.from + it.to) / 2), TL_Y - 18, it.label)}</g>}</g>;
          }
          if (it.t === 'span') {
            const x1 = tlX(it.from), x2 = tlX(it.to);
            return (
              <g key={i} className="tl-item" style={d()}>
                <path d={it.ongoing ? wavePath(x1, x2, TL_Y - 22) : `M ${x1} ${TL_Y - 22} L ${x2} ${TL_Y - 22}`} className={cx('tl-span', it.ongoing && 'is-ongoing')} />
                {(it.open === 'both' || it.open === 'start') && <text x={x1 - 4} y={TL_Y - 18} textAnchor="end" className="tl-ellipsis">…</text>}
                {(it.open === 'both' || it.open === 'end') && <text x={x2 + 4} y={TL_Y - 18} className="tl-ellipsis">…</text>}
                {itemLabel((x1 + x2) / 2, TL_Y - 38, it.label)}
              </g>
            );
          }
          if (it.t === 'link') {
            const x1 = tlX(it.from), x2 = tlX(it.to), mid = (x1 + x2) / 2;
            return <path key={i} d={`M ${x1} ${TL_Y - 10} Q ${mid} ${TL_Y - 58} ${x2 - 3} ${TL_Y - 12}`} className="tl-item tl-link" markerEnd={`url(#${id}-arrow)`} style={d()} />;
          }
          if (it.t === 'duration') {
            const x1 = tlX(it.from), x2 = tlX(it.to), y = TL_Y + 46;
            return (
              <g key={i} className="tl-item" style={d()}>
                <path d={`M ${x1} ${y - 7} L ${x1} ${y} L ${x2} ${y} L ${x2} ${y - 7}`} className="tl-duration" />
                {itemLabel((x1 + x2) / 2, y + 18, it.label, 'is-duration')}
              </g>
            );
          }
          return null;
        })}
      </svg>
      {label && !compact && <figcaption className="ti-tl-caption">{label}</figcaption>}
    </figure>
  );
}

/* ═══════════════════════════════════════════════════════════════
 * MEDIA — зображення, YouTube, аудіо, голос браузера
 * Будь-який ресурс замінюється в даних уроку без зміни компонентів.
 * ═══════════════════════════════════════════════════════════════ */
function MissingMedia({ kind = 'image', text }) {
  return (
    <div className={cx('ti-missing', `ti-missing-${kind}`)} role="note">
      <TiIcon name={kind === 'video' ? 'video' : kind === 'audio' ? 'volume' : 'image'} size={26} />
      <span>{text || (kind === 'video' ? 'Відео ще не додано' : kind === 'audio' ? 'Аудіо ще не додано' : 'Зображення ще не додано')}</span>
    </div>
  );
}

// media: { src, alt, caption, fit: 'cover'|'contain', focus: 'center top' (crop), ratio: '16/9', overlay: true, zoom: true }
function TiImage({ media, className, eager }) {
  const [failed, setFailed] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  if (!media || !media.src || failed) return <MissingMedia kind="image" text={failed ? 'Не вдалося завантажити зображення' : undefined} />;
  const img = (
    <img src={media.src} alt={media.alt || ''} loading={eager ? 'eager' : 'lazy'} decoding="async"
      style={{ objectFit: media.fit || 'cover', objectPosition: media.focus || 'center' }} onError={() => setFailed(true)} />
  );
  return (
    <figure className={cx('ti-image', media.overlay && 'has-overlay', className)} style={{ aspectRatio: media.ratio || undefined }}>
      {media.zoom
        ? <button type="button" className="ti-image-zoom" onClick={() => setZoomed(true)} aria-label={`Збільшити: ${media.alt || 'зображення'}`}>{img}<span className="ti-zoom-badge"><TiIcon name="zoom" size={16} /></span></button>
        : img}
      {media.caption && <figcaption>{media.caption}</figcaption>}
      {zoomed && (
        <div className="ti-lightbox" role="dialog" aria-modal="true" aria-label={media.alt || 'Зображення'} onClick={() => setZoomed(false)}
          onKeyDown={(e) => { if (e.key === 'Escape') setZoomed(false); }}>
          <img src={media.src} alt={media.alt || ''} />
          <button type="button" className="ti-lightbox-close" autoFocus onClick={() => setZoomed(false)} aria-label="Закрити"><TiIcon name="x" /></button>
        </div>
      )}
    </figure>
  );
}

// Приймає URL (watch, youtu.be, shorts, embed) або 11-символьний ID
function parseYouTubeId(input) {
  if (!input) return null;
  const s = String(input).trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
  return m ? m[1] : null;
}
// video: { url | id, title, start (сек), end (сек), instructions }
function TiYouTube({ video }) {
  const [active, setActive] = useState(false);
  const id = video && parseYouTubeId(video.url || video.id);
  if (!video || !(video.url || video.id)) return <MissingMedia kind="video" />;
  if (!id) return <MissingMedia kind="video" text="Не вдалося розпізнати посилання на YouTube" />;
  const params = new URLSearchParams({ rel: '0', modestbranding: '1', playsinline: '1' });
  if (video.start) params.set('start', String(Math.floor(video.start)));
  if (video.end) params.set('end', String(Math.floor(video.end)));
  if (active) params.set('autoplay', '1'); // лише після явного кліку учня
  const watchUrl = `https://www.youtube.com/watch?v=${id}${video.start ? `&t=${Math.floor(video.start)}s` : ''}`;
  return (
    <div className="ti-video">
      <div className="ti-video-frame">
        {active
          ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?${params}`} title={video.title || 'YouTube video'} loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
          : <button type="button" className="ti-video-poster" onClick={() => setActive(true)} aria-label={`Відтворити відео: ${video.title || ''}`}>
              <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="ti-video-play"><TiIcon name="play" size={30} /></span>
              {video.title && <span className="ti-video-title">{video.title}</span>}
            </button>}
      </div>
      <div className="ti-video-meta">
        <span>Відео не відтворюється? Можливо, автор заборонив вбудовування.</span>
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">Відкрити на YouTube <TiIcon name="external" size={13} /></a>
      </div>
    </div>
  );
}

// audio: { src, title, transcript }
function TiAudio({ audio, compact }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const [failed, setFailed] = useState(false);
  const [prog, setProg] = useState(0);
  const [showText, setShowText] = useState(false);
  if (!audio || !audio.src) return <MissingMedia kind="audio" />;
  if (failed) return <MissingMedia kind="audio" text="Не вдалося завантажити аудіо" />;
  const toggle = () => { const a = ref.current; if (!a) return; if (a.paused) a.play().catch(() => setFailed(true)); else a.pause(); };
  const replay = () => { const a = ref.current; if (!a) return; a.currentTime = 0; a.play().catch(() => setFailed(true)); };
  const cycleRate = () => { const next = rate === 1 ? 0.75 : rate === 0.75 ? 1.25 : 1; setRate(next); if (ref.current) ref.current.playbackRate = next; };
  return (
    <div className={cx('ti-audio', compact && 'is-compact')}>
      <audio ref={ref} src={audio.src} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => setFailed(true)} onTimeUpdate={(e) => { const a = e.currentTarget; setProg(a.duration ? a.currentTime / a.duration : 0); }} />
      <TiButton variant="primary" icon={playing ? 'pause' : 'play'} onClick={toggle} aria-label={playing ? 'Пауза' : 'Відтворити'} />
      <TiButton icon="replay" onClick={replay} aria-label="Слухати знову" />
      <div className="ti-audio-track" aria-hidden="true"><span style={{ width: `${prog * 100}%` }} /></div>
      <button type="button" className="ti-chip" onClick={cycleRate} aria-label={`Швидкість ${rate}×`}>{rate}×</button>
      {audio.title && !compact && <div className="ti-audio-title">{audio.title}</div>}
      {audio.transcript && <button type="button" className="ti-link" onClick={() => setShowText(s => !s)}>{showText ? 'Сховати текст' : 'Показати текст'}</button>}
      {showText && <p className="ti-audio-transcript">{audio.transcript}</p>}
    </div>
  );
}

// Озвучення прикладу голосом браузера (Web Speech). Чесно позначене як синтезований голос.
function canSpeak() { return typeof window !== 'undefined' && 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'; }
function speak(text, rate = 0.95) {
  if (!canSpeak()) return false;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-GB'; u.rate = rate;
    const v = window.speechSynthesis.getVoices().find(v => /^en(-|_)GB/i.test(v.lang)) || window.speechSynthesis.getVoices().find(v => /^en/i.test(v.lang));
    if (v) u.voice = v;
    window.speechSynthesis.speak(u);
    return true;
  } catch (e) { return false; }
}
function SpeakButton({ text, label = 'Послухати (голос браузера)' }) {
  if (!canSpeak()) return null;
  return <button type="button" className="ti-speak" onClick={(e) => { e.stopPropagation(); speak(text); }} aria-label={label} title={label}><TiIcon name="volume" size={15} /></button>;
}

/* ═══════════════════════════════════════════════════════════════
 * ПРОГРЕС — Supabase (tense_instinct_progress) → localStorage → демо
 * • Учень: акаунт (якщо таблиця існує) або цей браузер.
 * • Вчитель: «демо-сесія» лише в пам'яті — демонстрація на уроці
 *   ніколи не записує й не перезаписує прогрес учнів.
 * ═══════════════════════════════════════════════════════════════ */
const TI_TABLE = 'tense_instinct_progress';
const TI_PROGRESS_SQL = `-- Tense Instinct · прогрес учнів (безпечна, окрема таблиця; інші дані не змінює)
create table if not exists public.tense_instinct_progress (
  student_id uuid not null references public.profiles(id) on delete cascade,
  item_key text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (student_id, item_key)
);

alter table public.tense_instinct_progress enable row level security;
drop policy if exists "ti_progress: own rows" on public.tense_instinct_progress;
create policy "ti_progress: own rows" on public.tense_instinct_progress
  for all to authenticated
  using (student_id = auth.uid())
  with check (student_id = auth.uid());
drop policy if exists "ti_progress: teachers read" on public.tense_instinct_progress;
create policy "ti_progress: teachers read" on public.tense_instinct_progress
  for select to authenticated
  using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'teacher'));

-- Відкат (за потреби): drop table if exists public.tense_instinct_progress;`;

const TI_SRS_DAYS = [1, 3, 7, 14, 30]; // інтервали повторення (днів)
const TI_DIMENSIONS = [
  { key: 'understanding', label: 'Understanding', uk: 'Розуміння значення' },
  { key: 'recognition', label: 'Recognition', uk: 'Впізнавання часу' },
  { key: 'form', label: 'Form production', uk: 'Побудова форми' },
  { key: 'speed', label: 'Response speed', uk: 'Швидкість реакції' },
  { key: 'natural', label: 'Natural use', uk: 'Природне мовлення' },
];

function useTiProgress(session, isTeacher) {
  const uid = session.user.id;
  const localKey = `inkwell-ti:${uid}`;
  const [store, setStore] = useState(() => new Map());
  const [mode, setMode] = useState(isTeacher ? 'demo' : 'loading'); // loading | db | local | demo
  const storeRef = useRef(store); storeRef.current = store;
  const modeRef = useRef(mode); modeRef.current = mode;
  const pending = useRef(new Map());
  const timer = useRef(null);

  const readLocal = () => { try { return new Map(Object.entries(JSON.parse(localStorage.getItem(localKey) || '{}'))); } catch (e) { return new Map(); } };
  const writeLocal = (m) => { try { localStorage.setItem(localKey, JSON.stringify(Object.fromEntries(m))); } catch (e) {} };

  useEffect(() => {
    if (isTeacher) { setMode('demo'); return; }
    let alive = true;
    window.SB.from(TI_TABLE).select('item_key, data').eq('student_id', uid).then(({ data, error }) => {
      if (!alive) return;
      if (error) { setStore(readLocal()); setMode('local'); return; }
      const m = new Map((data || []).map(r => [r.item_key, r.data || {}]));
      // Перенести в акаунт те, що збереглося в браузері до створення таблиці
      const local = readLocal(); const move = [];
      local.forEach((v, k) => { if (!m.has(k)) { m.set(k, v); move.push({ student_id: uid, item_key: k, data: v }); } });
      if (move.length) window.SB.from(TI_TABLE).upsert(move, { onConflict: 'student_id,item_key' }).then(({ error: e2 }) => { if (!e2) { try { localStorage.removeItem(localKey); } catch (e) {} } });
      setStore(m); setMode('db');
    }, () => { if (alive) { setStore(readLocal()); setMode('local'); } });
    return () => { alive = false; };
  }, [uid, isTeacher]);

  const flush = useCallback(() => {
    clearTimeout(timer.current); timer.current = null;
    if (!pending.current.size || modeRef.current !== 'db') return;
    const now = new Date().toISOString();
    const rows = Array.from(pending.current.entries()).map(([k, v]) => ({ student_id: uid, item_key: k, data: v, updated_at: now }));
    pending.current.clear();
    window.SB.from(TI_TABLE).upsert(rows, { onConflict: 'student_id,item_key' }).then(({ error }) => {
      if (error) { console.warn('[Tense Instinct] progress save failed', error); writeLocal(storeRef.current); }
    });
  }, [uid]);
  useEffect(() => {
    const onHide = () => flush();
    window.addEventListener('pagehide', onHide);
    return () => { window.removeEventListener('pagehide', onHide); flush(); };
  }, [flush]);

  const update = useCallback((key, fn) => {
    const next = new Map(storeRef.current);
    const value = fn(next.get(key) || {});
    next.set(key, value);
    storeRef.current = next;
    setStore(next);
    const m = modeRef.current;
    if (m === 'local') writeLocal(next);
    else if (m === 'db') { pending.current.set(key, value); clearTimeout(timer.current); timer.current = setTimeout(flush, 700); }
    // demo / loading → лише в пам'яті
  }, [flush]);

  // Скинути демо-стан (лише в пам'яті вчителя)
  const resetDemo = useCallback((prefix) => {
    if (modeRef.current !== 'demo') return;
    const next = new Map(); storeRef.current.forEach((v, k) => { if (prefix && !k.startsWith(prefix)) next.set(k, v); });
    storeRef.current = next; setStore(next);
  }, []);

  // ev: { itemId, correct, score (0..1), ms, timed, skill, world, aspect, pair, selfRating }
  const recordAttempt = useCallback((ev) => {
    update('stats', (s) => {
      const st = JSON.parse(JSON.stringify(s || {}));
      const bump = (obj, key, ok) => { obj[key] = obj[key] || { n: 0, ok: 0 }; obj[key].n++; obj[key].ok += ok; };
      const ok = typeof ev.score === 'number' ? ev.score : (ev.correct ? 1 : 0);
      st.dims = st.dims || {}; st.worlds = st.worlds || {}; st.aspects = st.aspects || {}; st.pairs = st.pairs || {};
      if (ev.skill === 'natural') {
        st.dims.natural = st.dims.natural || { n: 0, ok: 0 };
        st.dims.natural.n++; st.dims.natural.ok += (ev.selfRating || 0) / 3;
      } else {
        if (ev.skill) bump(st.dims, ev.skill, ok);
        if (ev.world) bump(st.worlds, ev.world, ok);
        if (ev.aspect) bump(st.aspects, ev.aspect, ok);
        if (ev.pair) { st.pairs[ev.pair] = st.pairs[ev.pair] || { n: 0, wrong: 0 }; st.pairs[ev.pair].n++; if (!ev.correct) st.pairs[ev.pair].wrong++; }
        if (ev.timed && ev.correct && ev.ms) { st.dims.speed = st.dims.speed || { n: 0, ms: 0 }; st.dims.speed.n++; st.dims.speed.ms += ev.ms; }
      }
      st.attempts = (st.attempts || 0) + 1;
      st.lastAt = new Date().toISOString();
      return st;
    });
    if (ev.itemId && ev.skill !== 'natural') {
      update('review', (r) => {
        const next = { ...(r || {}) };
        const prev = next[ev.itemId] || { box: -1 };
        const box = ev.correct ? clamp(prev.box + 1, 0, TI_SRS_DAYS.length - 1) : 0;
        const due = ev.correct ? Date.now() + TI_SRS_DAYS[box] * 86400000 : Date.now();
        next[ev.itemId] = { box, due, wrong: (prev.wrong || 0) + (ev.correct ? 0 : 1), seen: (prev.seen || 0) + 1 };
        return next;
      });
    }
  }, [update]);

  return useMemo(() => ({
    mode, ready: mode !== 'loading', store,
    get: (key) => store.get(key),
    update, recordAttempt, resetDemo, flush,
  }), [mode, store, update, recordAttempt, resetDemo, flush]);
}

const TiCtx = React.createContext(null);
const useTi = () => React.useContext(TiCtx);

/* ── Вміст уроків: ліниве завантаження файлів-даних ─────────────
 * Файл уроку робить: window.INKWELL.tiLessons['ti-01'] = { screens: [...] } */
const tiLessonLoads = {};
function loadLessonContent(lesson) {
  window.INKWELL.tiLessons = window.INKWELL.tiLessons || {};
  if (window.INKWELL.tiLessons[lesson.id]) return Promise.resolve(window.INKWELL.tiLessons[lesson.id]);
  if (!lesson.contentFile) return Promise.resolve(null);
  if (!tiLessonLoads[lesson.id]) {
    tiLessonLoads[lesson.id] = loadScript(lesson.contentFile).then(() => {
      const c = window.INKWELL.tiLessons[lesson.id];
      if (!c) throw new Error(`Файл ${lesson.contentFile} не зареєстрував урок ${lesson.id}`);
      return c;
    });
    tiLessonLoads[lesson.id].catch(() => { delete tiLessonLoads[lesson.id]; });
  }
  return tiLessonLoads[lesson.id];
}
const lessonHasContent = (lesson) => lesson.status === 'ready' && !!lesson.contentFile;
