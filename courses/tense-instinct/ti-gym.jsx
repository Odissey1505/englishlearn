/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · Tense Gym (practice hub)
 * Доступний незалежно від уроків. Невеликий набір ДЕМО-вправ —
 * повна база вправ буде додана пізніше в TI_GYM_BANK (та сама схема).
 * ═══════════════════════════════════════════════════════════════ */

const TI_GYM_MODES = [
  { id: 'reflex', title: 'Daily Reflex', uk: 'Щоденна розминка', icon: 'sparkles', desc: 'Short mixed practice — a little every day.', timed: true, size: 8 },
  { id: 'battles', title: 'Tense Battles', uk: 'Битви часів', icon: 'layers', desc: 'Commonly confused pairs, side by side.', timed: true, size: 6 },
  { id: 'timeline', title: 'Timeline Trainer', uk: 'Тренажер таймлайну', icon: 'map', desc: 'Match events to their order and shape in time.', timed: false, size: 4 },
  { id: 'builder', title: 'Sentence Builder', uk: 'Конструктор речень', icon: 'grid', desc: 'Build natural sentences word by word.', timed: false, size: 4 },
  { id: 'story', title: 'Story Switch', uk: 'Зміни перспективу', icon: 'book', desc: 'Move a story to another time world.', timed: false, size: 4 },
  { id: 'speaking', title: 'Speaking Arena', uk: 'Арена говоріння', icon: 'mic', desc: 'Answer realistic prompts out loud. Self-assessed.', timed: false, size: 3 },
  { id: 'weak', title: 'Weak Spot Trainer', uk: 'Слабкі місця', icon: 'target', desc: 'Your own mistakes come back for review.', timed: true, size: 6 },
];
const TI_TIMER_OPTIONS = [0, 8, 5, 3];

// ДЕМО-вправи (перевірені). tags.pair = дві клітинки матриці, що порівнюються.
const TI_GYM_BANK = [
  { id: 'g-keys', type: 'situation', modes: ['reflex', 'battles'],
    context: { text: "You're standing at your front door, searching your bag. No keys.", meaning: 'News with a result now: you can’t get in.' },
    prompt: 'What do you say?',
    options: [
      { id: 'a', text: "I've lost my keys!" },
      { id: 'b', text: 'I lost my keys!', feedback: 'Also correct — common in American English. British speakers usually prefer the Present Perfect for news with a present result.' },
      { id: 'c', text: 'I was losing my keys!', feedback: 'Continuous shows a process in progress — losing keys happens in a moment.' },
    ],
    answer: ['a', 'b'],
    explanation: 'Both a and b are natural here. The Present Perfect stresses the connection to now (I can’t get in).',
    tags: { skill: 'understanding', world: 'present', aspect: 'perfect', pair: 'past-simple|present-perfect' } },
  { id: 'g-temp', type: 'situation', modes: ['reflex', 'battles'],
    prompt: 'Which sentence describes a temporary situation?',
    options: [{ id: 'a', text: 'My dad works in Warsaw.' }, { id: 'b', text: "My dad's working in Warsaw this month." }],
    answer: ['b'], explanation: '"This month" + Continuous = a temporary situation. "Works" presents it as his stable job.',
    hints: ['Which one could change soon?'],
    tags: { skill: 'understanding', world: 'present', aspect: 'continuous', pair: 'present-continuous|present-simple' } },
  { id: 'g-snow', type: 'gap', modes: ['reflex', 'battles'],
    prompt: 'Complete the sentence.', text: 'Look out of the window! It ___ (snow)!',
    gaps: [["'s snowing", 'is snowing']], explanation: '"Look!" shows it is in progress right now.',
    hints: ['Is it happening now, in front of your eyes?'],
    tags: { skill: 'form', world: 'present', aspect: 'continuous', pair: 'present-continuous|present-simple' } },
  { id: 'g-boil', type: 'gap', modes: ['reflex'],
    prompt: 'Complete the sentence.', text: 'Water ___ (boil) at 100°C.',
    gaps: [['boils']], explanation: 'A general fact → Present Simple.',
    tags: { skill: 'form', world: 'present', aspect: 'simple' } },
  { id: 'g-sushi', type: 'gap', modes: ['reflex'],
    prompt: 'Complete about your life experience.', text: 'I ___ (never / try) sushi.',
    gaps: [["have never tried", "'ve never tried"]], explanation: 'Life experience up to now, no specific time → Present Perfect.',
    hints: ['Experience in your whole life so far.', 'have + never + V3'],
    tags: { skill: 'form', world: 'present', aspect: 'perfect' } },
  { id: 'g-shower', type: 'mcq', modes: ['reflex', 'battles'],
    prompt: 'I ___ a shower when the lights went out.',
    options: [
      { id: 'a', text: 'was having' },
      { id: 'b', text: 'had', feedback: 'Possible only if you mean the shower started after the lights went out.' },
      { id: 'c', text: 'have had', feedback: 'The whole story is in the past — Present Perfect doesn’t fit here.' },
    ],
    answer: ['a'], explanation: 'An action in progress (was having) interrupted by a short event (went out).',
    tags: { skill: 'recognition', world: 'past', aspect: 'continuous', pair: 'past-continuous|past-simple' } },
  { id: 'g-film', type: 'error', modes: ['reflex', 'battles'],
    prompt: 'Correct the sentence.', wrong: 'I have seen this film yesterday.',
    accept: ['I saw this film yesterday.'],
    mistakes: [{ answer: 'I had seen this film yesterday.', feedback: 'Past Perfect needs another past moment to look back from.' }],
    explanation: '"Yesterday" is a finished time → Past Simple.',
    tags: { skill: 'form', world: 'past', aspect: 'simple', pair: 'past-simple|present-perfect' } },
  { id: 'g-know', type: 'error', modes: ['reflex'],
    prompt: 'Correct the sentence.', wrong: 'She is knowing the answer.',
    accept: ['She knows the answer.'], explanation: '"Know" is a state verb — it is normally not used in the Continuous.',
    tags: { skill: 'form', world: 'present', aspect: 'simple', pair: 'present-continuous|present-simple' } },
  { id: 'g-arrived', type: 'error', modes: ['reflex', 'battles'],
    prompt: 'Make the order of events clear.', wrong: 'When we arrived, the film already started.',
    accept: ['When we arrived, the film had already started.', 'The film had already started when we arrived.'],
    explanation: 'The film started before we arrived → Past Perfect for the earlier event.',
    tags: { skill: 'form', world: 'past', aspect: 'perfect', pair: 'past-perfect|past-simple' } },
  { id: 'g-ord-wait', type: 'order', modes: ['builder'],
    prompt: 'Build the sentence.', words: ['She', 'has', 'been', 'waiting', 'for', 'an', 'hour'],
    explanation: 'have/has + been + V-ing — activity up to now.',
    tags: { skill: 'form', world: 'present', aspect: 'perfectContinuous' } },
  { id: 'g-ord-dinner', type: 'order', modes: ['builder'],
    prompt: 'Build the sentence.', words: ['they', 'were', 'having', 'dinner', 'when', 'I', 'called'],
    acceptOrders: [['when', 'I', 'called', 'they', 'were', 'having', 'dinner']],
    explanation: 'Both orders are correct: the background (were having) and the short event (called).',
    tags: { skill: 'form', world: 'past', aspect: 'continuous' } },
  { id: 'g-ord-friday', type: 'order', modes: ['builder'],
    prompt: 'Build the sentence.', words: ['by', 'Friday', 'I', 'will', 'have', 'finished', 'the', 'project'],
    acceptOrders: [['I', 'will', 'have', 'finished', 'the', 'project', 'by', 'Friday']],
    explanation: 'Completed before a future point → Future Perfect.',
    tags: { skill: 'form', world: 'future', aspect: 'perfect' } },
  { id: 'g-ord-ill', type: 'order', modes: ['builder'],
    prompt: 'Build the sentence.', words: ["I'll", 'be', 'working', 'at', 'six'],
    acceptOrders: [['at', 'six', "I'll", 'be', 'working']],
    explanation: 'In progress at a future moment → Future Continuous.',
    tags: { skill: 'form', world: 'future', aspect: 'continuous' } },
  { id: 'g-tl-party', type: 'timeline', modes: ['timeline'],
    context: { text: 'When Max got to the party, Lily had already left. He was talking to Sam when the music suddenly stopped.' },
    prompt: 'Put the events in the order they started.',
    events: [{ id: 'e1', label: 'Lily left' }, { id: 'e2', label: 'Max got to the party' }, { id: 'e3', label: 'Max started talking to Sam' }, { id: 'e4', label: 'The music stopped' }],
    order: ['e1', 'e2', 'e3', 'e4'],
    explanation: '"Had left" happened before Max arrived. The music stopped while the conversation was in progress.',
    tags: { skill: 'understanding', world: 'past', aspect: 'perfect' } },
  { id: 'g-tl-shape', type: 'mcq', modes: ['timeline'],
    prompt: 'Which timeline shows: "I\'ve been waiting for ages"?',
    options: [
      { id: 'a', text: 'Activity up to now', timeline: TI_CELLS.find(c => c.id === 'present-perfectContinuous').timeline },
      { id: 'b', text: 'In progress around a past moment', timeline: TI_CELLS.find(c => c.id === 'past-continuous').timeline },
      { id: 'c', text: 'Repeated, general', timeline: TI_CELLS.find(c => c.id === 'present-simple').timeline },
    ],
    answer: ['a'], explanation: 'The waiting started in the past and continues up to now.',
    tags: { skill: 'understanding', world: 'present', aspect: 'perfectContinuous' } },
  { id: 'g-tl-fp', type: 'mcq', modes: ['timeline'],
    prompt: 'Which timeline shows: "By Friday, I\'ll have finished"?',
    options: [
      { id: 'a', text: 'Point in the future', timeline: TI_CELLS.find(c => c.id === 'future-simple').timeline },
      { id: 'b', text: 'Completed before a future point', timeline: TI_CELLS.find(c => c.id === 'future-perfect').timeline },
      { id: 'c', text: 'Earlier past', timeline: TI_CELLS.find(c => c.id === 'past-perfect').timeline },
    ],
    answer: ['b'], explanation: '"By Friday" is the future reference point; finishing happens before it.',
    tags: { skill: 'understanding', world: 'future', aspect: 'perfect' } },
  { id: 'g-st-tom', type: 'gap', modes: ['story'],
    prompt: 'Story Switch: from routine to one past morning.',
    text: 'Usually Tom wakes up at seven, but yesterday he ___ (wake) up at ten because he ___ (watch) films all night.',
    gaps: [['woke'], ['had been watching', 'had watched']], partial: true,
    explanation: '"Woke" — finished past event. "Had been watching" stresses the long activity before that moment ("had watched" is also possible).',
    tags: { skill: 'form', world: 'past', aspect: 'perfectContinuous' } },
  { id: 'g-st-train', type: 'gap', modes: ['story'],
    prompt: 'Story Switch: tell it as a memory.', text: 'Now: "I’m sitting on the train. A man is reading next to me." → Then: I ___ on the train. A man ___ next to me.',
    gaps: [['was sitting'], ['was reading']], partial: true,
    explanation: 'Background in the past → Past Continuous.',
    tags: { skill: 'form', world: 'past', aspect: 'continuous' } },
  { id: 'g-st-rome', type: 'gap', modes: ['story', 'reflex'],
    prompt: 'Story Switch: move to the future.', text: 'Today I’m flying to Rome. → This time tomorrow, I ___ (fly) to Rome.',
    gaps: [["'ll be flying", 'will be flying']],
    explanation: 'In progress at a future moment → Future Continuous.',
    tags: { skill: 'form', world: 'future', aspect: 'continuous' } },
  { id: 'g-call6', type: 'mcq', modes: ['reflex', 'battles'],
    context: { text: 'A: Can I call you at six?' },
    prompt: 'B: Better not — I ___ dinner then.',
    options: [
      { id: 'a', text: "'ll be cooking" },
      { id: 'b', text: 'cook', feedback: 'Present Simple sounds like a routine, not what will be in progress at six.' },
      { id: 'c', text: "'ll cook", feedback: 'Grammatically possible, but it presents cooking as a decision — "will be cooking" explains why six is a bad time.' },
    ],
    answer: ['a'], explanation: 'You’ll be in the middle of cooking at six → Future Continuous.',
    tags: { skill: 'recognition', world: 'future', aspect: 'continuous', pair: 'future-continuous|future-simple' } },
  { id: 'g-future-multi', type: 'multi', modes: ['reflex'], partial: true,
    prompt: 'Which sentences talk about the future?',
    options: [{ id: 'a', text: 'The train leaves at 7:40 tomorrow.' }, { id: 'b', text: "We're meeting Anna on Friday." }, { id: 'c', text: "I'll help you later." }, { id: 'd', text: 'I worked late.' }],
    answer: ['a', 'b', 'c'],
    explanation: 'English talks about the future in several ways: timetables (Present Simple), arrangements (Present Continuous), and will.',
    tags: { skill: 'understanding', world: 'future' } },
  { id: 'g-sp-never', type: 'speaking', modes: ['speaking'], timer: 45,
    prompt: "Tell a partner about something you've never done but would like to try. Why?",
    promptUk: 'Розкажи про те, чого ти ще ніколи не робив(-ла), але хочеш спробувати. Чому?',
    model: "I've never been skiing, but I'd love to try it because my friends say it's amazing.",
    criteria: ['Present Perfect for experience (have never + V3)', 'At least two sentences', 'A reason (because…)'],
    tags: { skill: 'natural', world: 'present', aspect: 'perfect' } },
  { id: 'g-sp-8pm', type: 'speaking', modes: ['speaking'], timer: 45,
    prompt: 'Describe what was happening in your home at 8 p.m. yesterday.',
    promptUk: 'Опиши, що відбувалось у тебе вдома вчора о 20:00.',
    model: 'At 8 p.m. my mum was cooking, my brother was playing games, and I was doing my homework.',
    criteria: ['Past Continuous for actions in progress', 'Three different people or actions'],
    tags: { skill: 'natural', world: 'past', aspect: 'continuous' } },
  { id: 'g-sp-2030', type: 'speaking', modes: ['speaking'], timer: 60,
    prompt: "Imagine it's 2030. What will you have done by then? What will you be doing?",
    promptUk: 'Уяви, що зараз 2030 рік. Що ти вже встигнеш зробити? Чим займатимешся?',
    model: "By 2030, I'll have finished university, and I'll probably be working as a designer in Kyiv.",
    criteria: ['Future Perfect for things completed by 2030', 'Future Continuous for an activity in progress then'],
    tags: { skill: 'natural', world: 'future', aspect: 'perfect' } },
];

function gymPool(mode, ti) {
  if (mode === 'weak') {
    const review = (ti && ti.get('review')) || {};
    const stats = (ti && ti.get('stats')) || {};
    const pairs = stats.pairs || {};
    const weakPairs = Object.keys(pairs).filter(k => pairs[k].wrong > 0).sort((a, b) => pairs[b].wrong / pairs[b].n - pairs[a].wrong / pairs[a].n);
    const due = TI_GYM_BANK.filter(e => { const r = review[`gym:${e.id}`]; return r && r.due <= Date.now() && e.type !== 'speaking'; });
    const byPair = TI_GYM_BANK.filter(e => e.tags && e.tags.pair && weakPairs.includes(e.tags.pair) && !due.includes(e));
    return { items: [...shuffleArr(due), ...shuffleArr(byPair)], dueCount: due.length, weakPairs };
  }
  if (mode === 'battles') return { items: shuffleArr(TI_GYM_BANK.filter(e => e.tags && e.tags.pair && e.type !== 'speaking')) };
  return { items: shuffleArr(TI_GYM_BANK.filter(e => (e.modes || []).includes(mode))) };
}

function TenseGym({ initial, navigate }) {
  const ti = useTi();
  const [modeId, setModeId] = useState(() => { const m = (initial || '').split('/')[0]; return TI_GYM_MODES.some(x => x.id === m) ? m : null; });
  useEffect(() => { navigate && navigate(modeId ? `gym/${modeId}` : 'gym', { replace: true }); }, [modeId]);
  // Кнопка «Назад» браузера / пряма адреса → синхронізуємо режим з URL
  useEffect(() => {
    const m = (initial || '').split('/')[0];
    const want = TI_GYM_MODES.some(x => x.id === m) ? m : null;
    if (want !== modeId) setModeId(want);
  }, [initial]);
  const mode = TI_GYM_MODES.find(m => m.id === modeId);
  const gym = (ti && ti.get('gym')) || {};
  const review = (ti && ti.get('review')) || {};
  const dueNow = Object.keys(review).filter(k => k.startsWith('gym:') && review[k].due <= Date.now()).length;

  if (mode) return <GymSession key={mode.id} mode={mode} onExit={() => setModeId(null)} />;

  return (
    <div className="ti-gym">
      <header className="ti-section-head">
        <div className="ti-eyebrow"><TiIcon name="dumbbell" size={15} /> Tense Gym</div>
        <h1 className="ti-h1">Train your instinct</h1>
        <p className="ti-lead">Short, focused workouts. Accuracy first — speed comes later.</p>
        <p className="ti-lead-uk">Зараз тут невеликий набір демо-вправ. Повну базу вправ додамо разом з уроками.</p>
      </header>
      <div className="ti-gym-grid">
        {TI_GYM_MODES.map(m => {
          const best = gym.best && gym.best[m.id];
          const count = m.id === 'weak' ? dueNow : TI_GYM_BANK.filter(e => m.id === 'battles' ? (e.tags && e.tags.pair && e.type !== 'speaking') : (e.modes || []).includes(m.id)).length;
          return (
            <button key={m.id} type="button" className={cx('ti-gym-card', `gm-${m.id}`)} onClick={() => setModeId(m.id)}>
              <span className="ti-gym-icon"><TiIcon name={m.icon} size={22} /></span>
              <span className="ti-gym-title">{m.title}</span>
              <span className="ti-gym-uk">{m.uk}</span>
              <span className="ti-gym-desc">{m.desc}</span>
              <span className="ti-gym-meta">
                {m.id === 'weak' ? (count ? `${count} на повторення` : 'Ще немає помилок для повторення') : `${count} демо-вправ`}
                {best != null && <> · найкраще: {best}%</>}
              </span>
            </button>
          );
        })}
      </div>
      <p className="ti-muted ti-gym-srs">Повторення помилок: неправильна відповідь повертається одразу, правильні — через {TI_SRS_DAYS.join(' / ')} дн. Розклад зберігається разом із твоїм прогресом.</p>
    </div>
  );
}

function GymSession({ mode, onExit }) {
  const ti = useTi();
  const [timer, setTimer] = useState(0);
  const [phase, setPhase] = useState('setup'); // setup | run | results
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [log, setLog] = useState([]);
  const [timedOut, setTimedOut] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [weakInfo, setWeakInfo] = useState(null);

  const start = () => {
    const pool = gymPool(mode.id, ti);
    setWeakInfo(pool);
    setItems(pool.items.slice(0, mode.size)); setIdx(0); setLog([]); setTimedOut(false); setAnswered(false);
    setPhase('run');
  };
  const record = (r, ex, extra = {}) => {
    const t = ex.tags || {};
    const entry = { id: ex.id, correct: !!r.correct, score: r.score || 0, ms: r.ms, timedOut: !!extra.timedOut, pair: t.pair, self: r.self };
    setLog(l => [...l, entry]);
    if (ti) ti.recordAttempt({ itemId: `gym:${ex.id}`, correct: !!r.correct, score: r.score, ms: r.ms, timed: timer > 0, skill: r.self ? 'natural' : t.skill, selfRating: r.selfRating, world: t.world, aspect: t.aspect, pair: t.pair });
  };
  const next = () => {
    if (idx + 1 >= items.length) {
      const scored = log.filter(l => !l.self);
      const acc = scored.length ? Math.round((scored.reduce((s, l) => s + l.score, 0) / scored.length) * 100) : null;
      if (ti && acc != null) ti.update('gym', (g) => {
        const best = { ...((g && g.best) || {}) }; const isBest = best[mode.id] == null || acc > best[mode.id];
        if (isBest) best[mode.id] = acc;
        return { ...g, best, sessions: ((g && g.sessions) || 0) + 1, lastAt: new Date().toISOString(), lastBest: isBest ? mode.id : null };
      });
      setPhase('results'); return;
    }
    setIdx(i => i + 1); setTimedOut(false); setAnswered(false);
  };
  const ex = items[idx];
  useEffect(() => {
    if (phase !== 'run' || !timer || !ex || ex.type === 'speaking' || answered || timedOut) return;
    const t = setTimeout(() => { setTimedOut(true); record({ correct: false, score: 0, ms: timer * 1000 }, ex, { timedOut: true }); }, timer * 1000);
    return () => clearTimeout(t);
  }, [phase, idx, timer, answered, timedOut]);

  if (phase === 'setup') return (
    <div className="ti-gym-session">
      <div className="ti-gym-session-head">
        <TiButton icon="back" onClick={onExit}>Tense Gym</TiButton>
        <h1 className="ti-h1">{mode.title}</h1><p className="ti-lead-uk">{mode.uk} · {mode.desc}</p>
      </div>
      <div className="ti-panel ti-gym-setup">
        {mode.timed ? (
          <>
            <h3 className="ti-h3">Reflex timer <span className="ti-muted">· необов'язково</span></h3>
            <div className="ti-seg" role="radiogroup" aria-label="Таймер">
              {TI_TIMER_OPTIONS.map(s => <button key={s} type="button" role="radio" aria-checked={timer === s} className={cx('ti-seg-btn', timer === s && 'is-on')} onClick={() => setTimer(s)}>{s ? `${s} s` : 'Untimed'}</button>)}
            </div>
            <p className="ti-muted">Порада: спершу тренуйся без таймера. Швидкість має сенс лише тоді, коли відповіді вже точні.</p>
          </>
        ) : <p className="ti-muted">Цей режим без таймера — тут важливіші точність і природність.</p>}
        {mode.id === 'weak' && (() => { const p = gymPool('weak', ti); return p.items.length
          ? <p>Готово до повторення: <strong>{p.items.length}</strong> {p.weakPairs.length ? `· найчастіше плутаєш: ${p.weakPairs.slice(0, 2).map(k => k.split('|').map(id => tiCell(id).name.replace(' (will)', '')).join(' vs ')).join('; ')}` : ''}</p>
          : <p>Поки що немає даних про помилки. Пройди Daily Reflex або Tense Battles — і сюди потраплять саме твої слабкі місця.</p>; })()}
        <TiButton variant="primary" size="lg" icon="play" onClick={start} disabled={mode.id === 'weak' && !gymPool('weak', ti).items.length}>Почати</TiButton>
      </div>
    </div>
  );

  if (phase === 'results') {
    const scored = log.filter(l => !l.self);
    const acc = scored.length ? Math.round((scored.reduce((s, l) => s + l.score, 0) / scored.length) * 100) : null;
    const fast = scored.filter(l => l.correct && l.ms && !l.timedOut);
    const avg = timer && fast.length ? (fast.reduce((s, l) => s + l.ms, 0) / fast.length / 1000).toFixed(1) : null;
    const pairErr = {}; log.forEach(l => { if (!l.correct && l.pair) pairErr[l.pair] = (pairErr[l.pair] || 0) + 1; });
    const g = (ti && ti.get('gym')) || {};
    return (
      <div className="ti-gym-session">
        <div className="ti-gym-session-head"><TiButton icon="back" onClick={onExit}>Tense Gym</TiButton><h1 className="ti-h1">{mode.title} · результати</h1></div>
        <div className="ti-panel ti-results">
          {acc != null && <div className="ti-results-big"><span>{acc}%</span><small>точність</small></div>}
          <div className="ti-results-stats">
            {scored.length > 0 && <div><strong>{scored.filter(l => l.correct).length}/{scored.length}</strong> правильно з першої спроби</div>}
            {avg && <div><strong>{avg} s</strong> середній час правильної відповіді</div>}
            {log.some(l => l.timedOut) && <div><strong>{log.filter(l => l.timedOut).length}</strong> не встиг(-ла) — це нормально, спробуй довший таймер</div>}
            {log.some(l => l.self) && <div><strong>{log.filter(l => l.self).length}</strong> відповідей із самооцінкою</div>}
            {g.lastBest === mode.id && acc != null && <div className="ti-best"><TiIcon name="award" size={16} /> Новий особистий рекорд!</div>}
          </div>
          {Object.keys(pairErr).length > 0 && <p className="ti-muted">Варто повторити: {Object.keys(pairErr).map(k => k.split('|').map(id => tiCell(id).name.replace(' (will)', '')).join(' vs ')).join('; ')} — ці вправи з’являться у Weak Spot Trainer.</p>}
          {ti && ti.mode === 'demo' && <p className="ti-demo-note">Демо-сесія вчителя: результати не зберігаються в прогрес учнів.</p>}
          <div className="ti-ex-actions">
            <TiButton variant="primary" icon="refresh" onClick={start}>Ще раз</TiButton>
            <TiButton icon="back" onClick={onExit}>До всіх режимів</TiButton>
          </div>
        </div>
      </div>
    );
  }

  if (!ex) return <div className="ti-gym-session"><p>Немає вправ для цього режиму.</p><TiButton onClick={onExit}>Назад</TiButton></div>;
  return (
    <div className="ti-gym-session">
      <div className="ti-gym-run-head">
        <TiButton icon="x" onClick={onExit} aria-label="Завершити тренування" />
        <div className="ti-gym-progress" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={idx + 1} aria-label="Прогрес тренування">
          <span style={{ width: `${((idx + (answered || timedOut ? 1 : 0)) / items.length) * 100}%` }} />
        </div>
        <span className="ti-counter">{idx + 1} / {items.length}</span>
        <TiButton icon="replay" onClick={start} aria-label="Почати спочатку">Restart</TiButton>
      </div>
      {timer > 0 && ex.type !== 'speaking' && !answered && !timedOut && <div className="ti-reflex-bar" key={`${idx}-${timer}`} style={{ animationDuration: `${timer}s` }} aria-hidden="true" />}
      {timedOut
        ? <div className="ti-panel ti-timeout" role="status">
            <div className="ti-feedback is-info"><div className="ti-feedback-title"><TiIcon name="clock" size={16} /> Час вийшов</div>
              <p className="ti-ex-prompt">{ex.prompt}</p>
              <p className="ti-feedback-answer"><strong>Відповідь:</strong> {tiAnswerText(ex)}</p>
              {ex.explanation && <p className="ti-feedback-expl">{ex.explanation}</p>}
            </div>
            <div className="ti-ex-actions"><TiButton variant="accent" iconRight="next" onClick={next} autoFocus>{idx + 1 >= items.length ? 'Результати' : 'Далі'}</TiButton></div>
          </div>
        : <Exercise key={ex.id + ':' + idx} exercise={ex} autoFocus
            onResult={(r) => { setAnswered(true); record(r, ex); }}
            onNext={next} nextLabel={idx + 1 >= items.length ? 'Результати' : 'Далі'} />}
    </div>
  );
}
