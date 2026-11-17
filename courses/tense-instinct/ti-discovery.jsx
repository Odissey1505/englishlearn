/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · discovery components
 * Багаторазові інтерактивні екрани для уроків-«відкриттів»
 * (уперше використані в Lesson 01 · The Big Picture).
 *
 *  TimeExplorer        — три світи часу на інтерактивній осі
 *  FourLensSimulator   — чотири погляди (аспекти) на дію
 *  TenseMatrixBoard    — матриця 3 × 4 з деталями клітинки
 *  TenseLab            — TIME × PERSPECTIVE → речення, сцена, таймлайн
 *  InstinctChallenge   — ситуаційний квіз із чесним Instinct Report
 *  DiscoveryQuestion   — кероване питання з підказкою та фідбеком
 *
 * Контент приходить з файлу уроку (screen.content), стан — через
 * ctx.sstate / ctx.setS (див. LessonPlayer). Тут немає текстів уроку.
 * ═══════════════════════════════════════════════════════════════ */

Object.assign(TI_ICON_PATHS, {
  repeat: <><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
  activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
  hourglass: <path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2" />,
  unlock: <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></>,
  pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></>,
  flask: <><path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3" /><path d="M7 15h10" /></>,
  copy: <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
  save: <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></>,
  search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  flag: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></>,
});

/* ── Дрібні спільні блоки ───────────────────────────────────── */
function DHead({ kicker, title, subtitle, uk, showUk }) {
  return (
    <header className="ti-screen-head ti-dhead">
      {kicker && <div className="ti-eyebrow">{kicker}</div>}
      {title && <h2 className="ti-screen-title">{title}</h2>}
      {subtitle && <p className="ti-dsub">{subtitle}</p>}
      <Uk show={showUk} block>{uk}</Uk>
    </header>
  );
}

// Речення з підсвіченою граматичною конструкцією (hl — рядок або масив рядків)
function HlSentence({ text, hl, className }) {
  const parts = [];
  let rest = String(text || '');
  [].concat(hl || []).forEach((h, k) => {
    const i = h ? rest.indexOf(h) : -1;
    if (i < 0) return;
    parts.push(rest.slice(0, i)); parts.push(<mark key={k} className="ti-hl">{h}</mark>);
    rest = rest.slice(i + h.length);
  });
  parts.push(rest);
  return <span className={cx('ti-sentence', className)}>{parts}</span>;
}

function DiscoveryBanner({ title, text, uk, showUk, icon = 'sparkles', tone }) {
  return (
    <div className={cx('ti-discovery', tone && `is-${tone}`)} role="status">
      <span className="ti-discovery-icon" aria-hidden="true"><TiIcon name={icon} size={22} /></span>
      <div>
        {title && <div className="ti-discovery-title">{title}</div>}
        {text && <p className="ti-discovery-text">{text}</p>}
        <Uk show={showUk} block>{uk}</Uk>
      </div>
    </div>
  );
}

// Кроки всередині одного екрана: одна дія за раз (One Screen — One Focus)
function DSteps({ steps, cur, reached, onPick }) {
  return (
    <ol className="ti-dsteps" aria-label="Кроки цього екрана">
      {steps.map((s, i) => (
        <li key={i}>
          <button type="button" className={cx('ti-dstep', i === cur && 'is-on', i < reached && 'is-done', i <= reached && 'is-reachable')}
            disabled={i > reached} aria-current={i === cur ? 'step' : undefined} onClick={() => onPick(i)}>
            <span className="ti-dstep-n">{i < reached && i !== cur ? <TiIcon name="check" size={13} /> : i + 1}</span>{s}
          </button>
        </li>
      ))}
    </ol>
  );
}
function useScreenSteps(ctx, count) {
  const S = ctx.sstate;
  const cur = clamp(S.step || 0, 0, count - 1);
  const reached = clamp(Math.max(S.reached || 0, cur), 0, count - 1);
  const go = (i) => ctx.setS(p => ({ ...p, step: i, reached: Math.max(p.reached || 0, i) }));
  return { cur, reached, go };
}

// Оновлення вкладеного стану питання в межах екрана
const setNested = (ctx, key, id, val) => ctx.setS(p => ({ ...p, [key]: { ...(p[key] || {}), [id]: typeof val === 'function' ? val(((p[key] || {})[id]) || {}) : val } }));

/* ═══ DiscoveryQuestion ═══════════════════════════════════════
 * q = { id, prompt, promptUk, options: [{ id, text, uk }], answer,
 *       hint, hintUk, explanation, explanationUk, open: true (відкрите питання → зразок),
 *       expected (зразок для open) }
 * st = { tries: [], solved, revealed, hint }  — зберігається батьком
 * Перша спроба повідомляється через onFirst(correct) — лише один раз.
 * ═══════════════════════════════════════════════════════════════ */
function DiscoveryQuestion({ q, st = {}, onChange, reveal, showUk, onFirst, number, compact }) {
  const tries = st.tries || [];
  const solved = !!st.solved, revealed = !!st.revealed;
  const finished = solved || revealed;
  const wrongCount = tries.filter(t => t !== q.answer).length;
  const last = tries[tries.length - 1];
  const pick = (id) => {
    if (finished) return;
    const ok = id === q.answer;
    if (!tries.length && onFirst) onFirst(ok);
    onChange({ ...st, tries: [...tries, id], solved: ok });
  };
  const optText = (id) => { const o = (q.options || []).find(o => o.id === id); return o ? o.text : id; };
  if (q.open) {
    return (
      <div className={cx('ti-dq is-open-q', compact && 'is-compact', finished && 'is-finished')}>
        <div className="ti-dq-prompt">{number && <span className="ti-dq-n">{number}</span>}<span>{q.prompt}<Uk show={showUk} block>{q.promptUk}</Uk></span></div>
        {(finished || reveal)
          ? <div className="ti-feedback is-info" role="status"><div className="ti-feedback-title"><TiIcon name="message" size={16} /> Example answer</div><p>{q.expected}</p><Uk show={showUk} block>{q.expectedUk}</Uk></div>
          : <div className="ti-ex-actions"><TiButton icon="eye" onClick={() => { if (onFirst) onFirst(true, true); onChange({ ...st, revealed: true }); }}>Think first — then show an example answer</TiButton></div>}
      </div>
    );
  }
  return (
    <div className={cx('ti-dq', compact && 'is-compact', finished && 'is-finished')}>
      <div className="ti-dq-prompt">{number && <span className="ti-dq-n">{number}</span>}<span>{q.prompt}<Uk show={showUk} block>{q.promptUk}</Uk></span></div>
      <div className="ti-dq-options" role="group" aria-label="Варіанти відповіді" data-ti-keys>
        {(q.options || []).map(o => {
          const chosen = tries.includes(o.id);
          const isAns = o.id === q.answer;
          return (
            <button key={o.id} type="button" disabled={(finished && !isAns) || (chosen && !isAns)}
              aria-pressed={chosen && o.id === last}
              className={cx('ti-option is-small', chosen && (isAns ? 'is-right' : 'is-wrong'), (revealed || reveal) && isAns && 'is-answer')}
              onClick={() => pick(o.id)}>
              {o.key && <span className="ti-option-key" aria-hidden="true">{o.key}</span>}
              <span className="ti-option-text">{o.text}<Uk show={showUk && !!o.uk}>{o.uk ? ` · ${o.uk}` : ''}</Uk></span>
              {chosen && <span className="ti-sr-only">{isAns ? ' — correct' : ' — not correct'}</span>}
            </button>
          );
        })}
      </div>
      {!finished && st.hint && q.hint && <p className="ti-dq-hint"><TiIcon name="hint" size={14} /> {q.hint}<Uk show={showUk}>{q.hintUk ? ` · ${q.hintUk}` : ''}</Uk></p>}
      <div aria-live="polite">
        {solved && <div className="ti-feedback is-good"><div className="ti-feedback-title"><TiIcon name="check" size={16} /> {tries.length === 1 ? 'Correct!' : 'Yes — you got it.'}</div>{q.explanation && <p>{q.explanation}</p>}<Uk show={showUk} block>{q.explanationUk}</Uk></div>}
        {revealed && <div className="ti-feedback is-info"><div className="ti-feedback-title"><TiIcon name="eye" size={16} /> Answer: {optText(q.answer)}</div>{q.explanation && <p>{q.explanation}</p>}<Uk show={showUk} block>{q.explanationUk}</Uk></div>}
        {!finished && last != null && <div className="ti-feedback is-mid"><div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> Not quite — try again.</div>{q.hint && <p>{q.hint}</p>}<Uk show={showUk} block>{q.hintUk}</Uk></div>}
      </div>
      {!finished && (
        <div className="ti-ex-actions">
          {!tries.length && q.hint && !st.hint && <TiButton size="sm" icon="hint" onClick={() => onChange({ ...st, hint: true })}>Hint</TiButton>}
          {wrongCount >= 2 && <TiButton size="sm" icon="eye" onClick={() => onChange({ ...st, revealed: true })}>Show answer</TiButton>}
        </div>
      )}
    </div>
  );
}
const qDone = (st) => !!(st && (st.solved || st.revealed));

// Послідовність питань: одне за раз, з поверненням до попередніх
function QuestionSequence({ ctx, questions, stateKey = 'q', onAllDone, idPrefix = '' }) {
  const S = ctx.sstate; const qs = S[stateKey] || {};
  const firstOpen = questions.findIndex(q => !qDone(qs[q.id]));
  const [view, setView] = useState(firstOpen < 0 ? questions.length - 1 : firstOpen);
  const q = questions[view];
  const allDone = questions.every(x => qDone(qs[x.id]));
  useEffect(() => { if (allDone && onAllDone) onAllDone(); }, [allDone]);
  return (
    <div className="ti-qseq">
      <div className="ti-qseq-head">
        <span className="ti-counter">Question {view + 1} of {questions.length}</span>
        <div className="ti-qseq-dots" aria-hidden="true">{questions.map((x, i) => <span key={x.id} className={cx('ti-qdot', i === view && 'is-on', qDone(qs[x.id]) && 'is-done')} />)}</div>
      </div>
      <DiscoveryQuestion key={q.id} q={q} st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
        onChange={(v) => setNested(ctx, stateKey, q.id, v)}
        onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `${idPrefix}${q.id}`, tags: { skill: 'understanding', ...(q.tags || {}) } } })} />
      <div className="ti-ex-actions">
        {view > 0 && <TiButton size="sm" icon="left" onClick={() => setView(view - 1)}>Previous question</TiButton>}
        {view < questions.length - 1 && <TiButton size="sm" variant={qDone(qs[q.id]) ? 'primary' : 'ghost'} iconRight="right" disabled={!qDone(qs[q.id])} onClick={() => setView(view + 1)}>Next question</TiButton>}
      </div>
    </div>
  );
}

/* ═══ Screen · intro hero (Welcome) ════════════════════════════ */
function ConvergeMotif() {
  return (
    <svg className="ti-converge" viewBox="0 0 420 260" aria-hidden="true">
      <defs>
        <radialGradient id="ti-cv-glow"><stop offset="0" stopColor="var(--ti-gold)" stopOpacity="0.9" /><stop offset="1" stopColor="var(--ti-gold)" stopOpacity="0" /></radialGradient>
      </defs>
      <path className="cv-path cv-past" d="M 10 40 C 160 40 220 130 330 130" />
      <path className="cv-path cv-now" d="M 10 130 C 140 130 220 130 330 130" />
      <path className="cv-path cv-future" d="M 10 220 C 160 220 220 130 330 130" />
      <text x="14" y="30" className="cv-label cv-past-l">PAST</text>
      <text x="14" y="120" className="cv-label cv-now-l">PRESENT</text>
      <text x="14" y="244" className="cv-label cv-future-l">FUTURE</text>
      <circle cx="330" cy="130" r="54" fill="url(#ti-cv-glow)" className="cv-glow" />
      <circle cx="330" cy="130" r="11" className="cv-core" />
      <text x="330" y="196" textAnchor="middle" className="cv-label cv-sys">ONE SYSTEM</text>
    </svg>
  );
}
// Фото-версія мотиву: три промені часу сходяться в «одну систему».
// Анімація: фото проявляється зліва направо, по кожному променю до ядра
// летять світлові імпульси, ядро пульсує. Координати — у пікселях фото 1583×993.
const HERO_W = 1583, HERO_H = 993;
const HERO_PATHS = [
  { k: 'past', d: 'M -10 150 C 450 180, 800 430, 1200 488', c: '#C4B5FD', begin: 1.6 },
  { k: 'now', d: 'M -10 488 L 1200 488', c: '#7DD3FC', begin: 2.2 },
  { k: 'future', d: 'M -10 828 C 450 770, 800 560, 1200 490', c: '#5EEAD4', begin: 2.8 },
];
function HeroMotif({ src, alt }) {
  const reduced = useReducedMotion();
  const [failed, setFailed] = useState(false);
  if (failed) return <ConvergeMotif />;
  return (
    <figure className={cx('ti-hero-motif', !reduced && 'is-anim')}>
      <img src={src} alt={alt || ''} onError={() => setFailed(true)} decoding="async" />
      {!reduced && (
        <svg viewBox={`0 0 ${HERO_W} ${HERO_H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <radialGradient id="hm-photon"><stop offset="0" stopColor="#fff" /><stop offset="0.35" stopColor="#fff" stopOpacity="0.85" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
          </defs>
          {HERO_PATHS.map(p => (
            <g key={p.k}>
              <path id={`hm-${p.k}`} d={p.d} fill="none" stroke="none" />
              {[0, 1.6].map((off, i) => (
                <g key={i} className="hm-photon">
                  <circle r="34" fill={p.c} opacity="0.35" />
                  <circle r="16" fill="url(#hm-photon)" />
                  <animateMotion dur="3.2s" begin={`${p.begin + off}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.45 0 0.9 0.6">
                    <mpath href={`#hm-${p.k}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="3.2s" begin={`${p.begin + off}s`} repeatCount="indefinite" />
                </g>
              ))}
            </g>
          ))}
          <circle cx="1250" cy="490" r="62" className="hm-core-ring" />
          <circle cx="1250" cy="490" r="62" className="hm-core-ring is-2" />
        </svg>
      )}
    </figure>
  );
}

function ScreenIntroHero({ screen, ctx }) {
  const c = screen.content || {};
  const mood = ctx.sstate.mood;
  const chosen = (c.mood && c.mood.options || []).find(o => o.id === mood);
  return (
    <div className="ti-ihero">
      <section className={cx('ti-ihero-main', c.heroImage && 'has-photo')}>
        <div className={cx('ti-ihero-art', c.heroImage && 'is-photo')}>{c.heroImage ? <HeroMotif src={c.heroImage} alt={c.heroAlt} /> : <ConvergeMotif />}</div>
        <div className="ti-ihero-text">
          <div className="ti-eyebrow">{c.kicker}</div>
          <h1 className="ti-cover-title">{c.title}</h1>
          <p className="ti-cover-sub">{c.subtitle}</p>
          <Uk show={ctx.showUk} block>{c.subtitleUk}</Uk>
          <div className="ti-ihero-lines">
            {(c.intro || []).map((l, i) => <p key={i} className="ti-ihero-line" style={{ '--d': `${0.25 + i * 0.45}s` }}>{l.en}<Uk show={ctx.showUk} block>{l.uk}</Uk></p>)}
          </div>
          <div className="ti-ex-actions">
            <TiButton variant="primary" size="lg" iconRight="next" onClick={ctx.next}>{c.cta || 'Start'}</TiButton>
            {ctx.teacherMode && <button type="button" className="ti-link" onClick={ctx.next}>Skip the introductory discussion</button>}
          </div>
        </div>
      </section>
      {c.mood && (
        <section className="ti-mood ti-panel" aria-labelledby={`${screen.id}-mood`}>
          <h2 id={`${screen.id}-mood`} className="ti-h3">{c.mood.question}</h2>
          <Uk show={ctx.showUk} block>{c.mood.questionUk}</Uk>
          <div className="ti-mood-options" role="radiogroup" aria-label={c.mood.question}>
            {c.mood.options.map(o => (
              <button key={o.id} type="button" role="radio" aria-checked={mood === o.id} className={cx('ti-mood-opt', mood === o.id && 'is-on')}
                onClick={() => ctx.setS({ mood: o.id })}>
                <span className="ti-mood-emoji" aria-hidden="true">{o.emoji}</span><span>{o.text}</span>
              </button>
            ))}
          </div>
          <div aria-live="polite">
            {chosen && <p className="ti-mood-reply"><TiIcon name="sparkles" size={16} /> <span>{chosen.reply}<Uk show={ctx.showUk} block>{chosen.replyUk}</Uk></span></p>}
          </div>
          <p className="ti-muted">{c.mood.note}</p>
        </section>
      )}
    </div>
  );
}

/* ═══ Screen · perspective cards (The Tense Illusion) ══════════ */
function ScreenPerspectiveCards({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const opened = S.opened || [];
  const sel = S.sel || (opened[opened.length - 1]) || null;
  const card = (c.cards || []).find(k => k.id === sel);
  const steps = useScreenSteps(ctx, 3);
  const allOpened = (c.cards || []).every(k => opened.includes(k.id));
  const qs = S.q || {};
  const allQ = (c.questions || []).every(q => qDone(qs[q.id]));
  useEffect(() => { if (allQ && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allQ]);
  useEffect(() => { preloadScenes([c.scene, ...(c.cards || []).map(k => k.scene)]); }, []);
  const open = (id) => ctx.setS(p => ({ ...p, sel: id, opened: (p.opened || []).includes(id) ? p.opened : [...(p.opened || []), id] }));
  const questions = (c.questions || []).map(q => ({ ...q, options: q.options || (c.cards || []).map(k => ({ id: k.id, key: k.id, text: k.text })) }));
  return (
    <div className="ti-pcards">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} showUk={ctx.showUk} uk={c.subtitleUk} />
      <DSteps steps={['Meet Maya', 'Discover', 'Discovery']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur < 2 && (
        <div className="ti-pcards-layout">
          <div className="ti-pcards-visual">
            {steps.cur === 0 && <div className="ti-story-intro">{(c.intro || []).map((l, i) => <p key={i} className="ti-para" style={{ '--d': `${i * 0.35}s` }}>{l.en}<Uk show={ctx.showUk} block>{l.uk}</Uk></p>)}</div>}
            <MayaScene scene={card ? card.scene : c.scene} />
          </div>
          <div className="ti-pcards-right">
            <div className="ti-pcards-grid" role="group" aria-label="Чотири речення Маї" data-ti-keys>
              {(c.cards || []).map(k => {
                const seen = opened.includes(k.id);
                return (
                  <div key={k.id} className="ti-pcard-wrap">
                    <button type="button" className={cx('ti-pcard', sel === k.id && 'is-on', seen && 'is-seen')} aria-pressed={sel === k.id} onClick={() => open(k.id)}>
                      <span className="ti-pcard-key">{k.id}</span>
                      <span className="ti-pcard-text">“{k.text}”</span>
                      {ctx.showUk && seen && <span className="ti-uk ti-uk-line" lang="uk">{k.uk}</span>}
                      <span className={cx('ti-pcard-meaning', !seen && 'is-hidden')}>{seen ? k.meaning : 'Tap to explore'}</span>
                    </button>
                    <span className="ti-pcard-speak"><SpeakButton text={k.text} /></span>
                  </div>
                );
              })}
            </div>
            {steps.cur === 0 && (
              <div className="ti-ex-actions">
                <span className="ti-muted" aria-live="polite">{allOpened ? 'All four explored.' : `Explored ${opened.length} of ${(c.cards || []).length} — tap each card.`}</span>
                <TiButton variant="primary" iconRight="right" disabled={!allOpened && !ctx.teacherMode} onClick={() => steps.go(1)}>Discover the difference</TiButton>
              </div>
            )}
            {steps.cur === 1 && <QuestionSequence ctx={ctx} questions={questions} idPrefix="illusion-" />}
            {steps.cur === 1 && allQ && <div className="ti-ex-actions"><TiButton variant="primary" icon="sparkles" onClick={() => steps.go(2)}>Unlock the discovery</TiButton></div>}
          </div>
        </div>
      )}
      {steps.cur === 2 && (
        <div className="ti-pcards-final">
          <DiscoveryBanner title={c.discovery.title} text={c.discovery.text} uk={c.discovery.uk} showUk={ctx.showUk} />
          <div className="ti-pcards-recap">{(c.cards || []).map(k => <div key={k.id} className="ti-recap"><strong>{k.id}</strong><span>“{k.text}”</span><em>{k.meaning}</em></div>)}</div>
          <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
        </div>
      )}
    </div>
  );
}

/* ═══ TimeExplorer — три світи часу на осі ════════════════════
 * states: [{ key: 'past'|'present'|'future', label, sentence, uk, explanation, explanationUk,
 *            marker: { x, label } }]  (для present — інтервал навколо NOW)
 * ═══════════════════════════════════════════════════════════════ */
const TE_H = 170, TE_Y = 104;
function TimeExplorer({ states, value, onChange, showUk }) {
  const idx = Math.max(0, states.findIndex(s => s.key === value));
  const cur = states[idx];
  const nowX = tlX(TI_NOW);
  const zones = { past: [TL_PAD, nowX - 26], present: [nowX - 26, nowX + 26], future: [nowX + 26, TL_W - TL_PAD] };
  const btnRefs = useRef([]);
  const move = (d) => { const n = clamp(idx + d, 0, states.length - 1); onChange(states[n].key); };
  const onKeys = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); move(1); const n = clamp(idx + 1, 0, states.length - 1); btnRefs.current[n] && e.currentTarget.getAttribute('role') === 'radiogroup' && btnRefs.current[n].focus(); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); move(-1); const n = clamp(idx - 1, 0, states.length - 1); btnRefs.current[n] && e.currentTarget.getAttribute('role') === 'radiogroup' && btnRefs.current[n].focus(); }
  };
  const mx = tlX(cur.marker && cur.marker.x != null ? cur.marker.x : TI_NOW);
  const isSpan = cur.key === 'present';
  return (
    <div className="ti-texp">
      <div className="ti-seg ti-texp-btns" role="radiogroup" aria-label="Choose a time world" onKeyDown={onKeys}>
        {states.map((s, i) => (
          <button key={s.key} ref={el => (btnRefs.current[i] = el)} type="button" role="radio" aria-checked={i === idx} tabIndex={i === idx ? 0 : -1}
            className={cx('ti-seg-btn', `w-${s.key}`, i === idx && 'is-on')} onClick={() => onChange(s.key)}>{s.label}</button>
        ))}
      </div>
      <div className="ti-texp-stage" tabIndex={0} role="slider" aria-label="Timeline marker" aria-valuemin={0} aria-valuemax={states.length - 1} aria-valuenow={idx} aria-valuetext={cur.label} onKeyDown={onKeys}>
        <svg viewBox={`0 0 ${TL_W} ${TE_H}`} className={cx('ti-texp-svg', `is-${cur.key}`)} aria-hidden="true">
          {Object.entries(zones).map(([k, [a, b]]) => (
            <g key={k} className={cx('te-zone', `te-zone-${k}`, k === cur.key && 'is-on')} onClick={() => onChange(k)}>
              <rect x={a} y={TE_Y - 70} width={b - a} height="96" rx="12" />
              <text x={(a + b) / 2} y={TE_Y + 20} textAnchor="middle" className="te-zone-label">{k === 'present' ? 'NOW' : k.toUpperCase()}</text>
            </g>
          ))}
          <line x1={TL_PAD} y1={TE_Y} x2={TL_W - TL_PAD} y2={TE_Y} className="te-axis" />
          <line x1={nowX} y1={TE_Y - 56} x2={nowX} y2={TE_Y + 6} className="tl-now-line" />
          <text x={nowX} y={TE_Y + 50} textAnchor="middle" className="tl-label tl-label-now">reference point: NOW</text>
          <path d={wavePath(nowX - 70, nowX + 70, TE_Y - 20)} className={cx('te-span', isSpan && 'is-on')} />
          <g className={cx('te-marker', !isSpan && 'is-on')} style={{ transform: `translateX(${isSpan ? nowX : mx}px)` }}>
            <circle cx="0" cy={TE_Y} r="11" />
            <circle cx="0" cy={TE_Y} r="20" className="te-marker-halo" />
          </g>
          <g className="te-label-g" style={{ transform: `translateX(${isSpan ? nowX : mx}px)` }}>
            <text x="0" y={isSpan ? TE_Y - 36 : TE_Y - 26} textAnchor="middle" className="te-marker-label">{cur.marker && cur.marker.label}</text>
          </g>
        </svg>
      </div>
      <div className="ti-texp-out" aria-live="polite">
        <p className="ti-texp-sentence"><HlSentence text={cur.sentence} hl={cur.hl} /> <SpeakButton text={cur.sentence} /></p>
        <Uk show={showUk} block>{cur.uk}</Uk>
        <p className="ti-texp-expl"><TiIcon name="clock" size={16} /> {cur.explanation}<Uk show={showUk}>{cur.explanationUk ? ` · ${cur.explanationUk}` : ''}</Uk></p>
      </div>
    </div>
  );
}

// Міні-виклик: розмісти речення на осі (Past / Present / Future)
function PlaceOnTimeline({ ctx, items, stateKey = 'place' }) {
  const S = ctx.sstate; const st = S[stateKey] || {};
  const [i, setI] = useState(() => { const f = items.findIndex(it => !qDone(st[it.id])); return f < 0 ? items.length - 1 : f; });
  const it = items[i]; const s = st[it.id] || {};
  const tries = s.tries || []; const finished = qDone(s);
  const last = tries[tries.length - 1];
  const zones = [{ key: 'past', label: 'Past' }, { key: 'present', label: 'Present' }, { key: 'future', label: 'Future' }];
  const pick = (k) => {
    if (finished) return;
    const ok = k === it.answer;
    if (!tries.length) ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `place-${it.id}`, tags: { skill: 'recognition', world: it.answer } } });
    setNested(ctx, stateKey, it.id, { ...s, tries: [...tries, k], solved: ok });
  };
  const score = items.filter(x => (st[x.id] || {}).tries && st[x.id].tries[0] === x.answer).length;
  const all = items.every(x => qDone(st[x.id]));
  return (
    <div className="ti-place">
      <div className="ti-qseq-head">
        <span className="ti-counter">Sentence {i + 1} of {items.length}</span>
        <div className="ti-qseq-dots" aria-hidden="true">{items.map((x, k) => <span key={x.id} className={cx('ti-qdot', k === i && 'is-on', qDone(st[x.id]) && 'is-done')} />)}</div>
      </div>
      <p className="ti-place-sentence">“{it.sentence}” <SpeakButton text={it.sentence} /></p>
      <Uk show={ctx.showUk} block>{it.uk}</Uk>
      <div className="ti-place-zones" role="group" aria-label="Where is this on the timeline?" data-ti-keys>
        {zones.map(z => {
          const chosen = tries.includes(z.key); const isAns = z.key === it.answer;
          return <button key={z.key} type="button" className={cx('ti-place-zone', `w-${z.key}`, chosen && (isAns ? 'is-right' : 'is-wrong'), ctx.revealAnswers && isAns && 'is-answer')} disabled={(finished && !isAns) || (chosen && !isAns)} onClick={() => pick(z.key)}>
            <span>{z.label}</span>{chosen && <TiIcon name={isAns ? 'check' : 'x'} size={16} />}
          </button>;
        })}
      </div>
      <div aria-live="polite">
        {finished && (
          <div className="ti-feedback is-good">
            <div className="ti-feedback-title"><TiIcon name="check" size={16} /> {s.revealed ? `Answer: ${it.answer}` : 'Correct!'}</div>
            <p>{it.explanation}</p><Uk show={ctx.showUk} block>{it.explanationUk}</Uk>
            <Timeline spec={it.timeline} compact label={it.timelineLabel} key={it.id} />
          </div>
        )}
        {!finished && last && <div className="ti-feedback is-mid"><div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> Not quite — try again.</div><p>{it.hint}</p></div>}
      </div>
      <div className="ti-ex-actions">
        {!finished && tries.length >= 2 && <TiButton size="sm" icon="eye" onClick={() => setNested(ctx, stateKey, it.id, { ...s, revealed: true })}>Show answer</TiButton>}
        {i > 0 && <TiButton size="sm" icon="left" onClick={() => setI(i - 1)}>Previous</TiButton>}
        {i < items.length - 1 && <TiButton size="sm" variant={finished ? 'primary' : 'ghost'} iconRight="right" disabled={!finished} onClick={() => setI(i + 1)}>Next sentence</TiButton>}
      </div>
      {all && <p className="ti-place-score" role="status"><TiIcon name="award" size={16} /> First-try score: {score} / {items.length}</p>}
    </div>
  );
}

function ScreenTimeExplorer({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const steps = useScreenSteps(ctx, 3);
  const explored = S.explored || [];
  const value = S.world || 'past';
  const setWorld = (k) => ctx.setS(p => ({ ...p, world: k, explored: (p.explored || []).includes(k) ? p.explored : [...(p.explored || []), k] }));
  useEffect(() => { if (!explored.includes(value)) setWorld(value); }, []);
  const guidedDone = (c.questions || []).every(q => qDone((S.q || {})[q.id]));
  const placeDone = (c.challenge.items || []).every(it => qDone((S.place || {})[it.id]));
  useEffect(() => { if (placeDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [placeDone]);
  return (
    <div className="ti-tw">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <DSteps steps={['Time Explorer', 'Discover', 'Put it on the timeline']} cur={steps.cur} reached={steps.reached} onPick={steps.go} />
      {steps.cur === 0 && (
        <>
          <TimeExplorer states={c.states} value={value} onChange={setWorld} showUk={ctx.showUk} />
          <div className="ti-ex-actions">
            <span className="ti-muted">{explored.length < 3 ? `Try all three worlds (${explored.length}/3).` : 'You visited all three time worlds.'}</span>
            <TiButton variant="primary" iconRight="right" disabled={explored.length < 3 && !ctx.teacherMode} onClick={() => steps.go(1)}>Next: discover</TiButton>
          </div>
        </>
      )}
      {steps.cur === 1 && (
        <div className="ti-tw-discover">
          <div className="ti-tw-mini">{c.states.map(s => <button key={s.key} type="button" className={cx('ti-tw-chip', `w-${s.key}`)} onClick={() => { setWorld(s.key); steps.go(0); }}><strong>{s.label}</strong><span>{s.sentence}</span></button>)}</div>
          <QuestionSequence ctx={ctx} questions={c.questions} idPrefix="time-" />
          {guidedDone && (
            <>
              <DiscoveryBanner title="Discovery" text={c.discovery.text} uk={c.discovery.uk} showUk={ctx.showUk} icon="clock" />
              <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="right" onClick={() => steps.go(2)}>Mini challenge</TiButton></div>
            </>
          )}
        </div>
      )}
      {steps.cur === 2 && (
        <>
          <h3 className="ti-h3"><TiIcon name="target" size={17} /> {c.challenge.title}</h3>
          <p className="ti-instructions">{c.challenge.instructions}</p>
          <PlaceOnTimeline ctx={ctx} items={c.challenge.items} />
          {placeDone && <DiscoveryBanner text={c.challenge.takeaway} uk={c.challenge.takeawayUk} showUk={ctx.showUk} icon="repeat" tone="soft" />}
          {placeDone && <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>}
        </>
      )}
    </div>
  );
}

/* ═══ FourLensSimulator — чотири погляди на дію ════════════════
 * lenses: [{ key, name, short, icon, example, hl, uk, meaning, meaningUk,
 *            timeline, scene, questions: [DiscoveryQuestion] }]
 * ═══════════════════════════════════════════════════════════════ */
function FourLensSimulator({ ctx, lenses, active, onPick }) {
  const S = ctx.sstate; const qs = S.q || {};
  const lens = lenses.find(l => l.key === active) || lenses[0];
  const lensDone = (l) => (l.questions || []).every(q => qDone(qs[q.id]));
  const refs = useRef([]);
  useEffect(() => { preloadScenes(lenses.map(l => l.scene)); }, []);
  const idx = lenses.indexOf(lens);
  const onKeys = (e) => {
    const d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
    if (!d) return; e.preventDefault();
    const n = (idx + d + lenses.length) % lenses.length; onPick(lenses[n].key); refs.current[n] && refs.current[n].focus();
  };
  return (
    <div className="ti-lens">
      <div className="ti-lens-cards" role="radiogroup" aria-label="Four perspectives" onKeyDown={onKeys}>
        {lenses.map((l, i) => (
          <button key={l.key} ref={el => (refs.current[i] = el)} type="button" role="radio" aria-checked={l.key === lens.key} tabIndex={l.key === lens.key ? 0 : -1}
            className={cx('ti-lens-card', `a-${l.key}`, l.key === lens.key && 'is-on', lensDone(l) && 'is-done')} onClick={() => onPick(l.key)}>
            <span className="ti-lens-icon" aria-hidden="true"><TiIcon name={l.icon} size={20} /></span>
            <span className="ti-lens-name">{l.name}</span>
            <span className="ti-lens-short">{l.short}</span>
            {lensDone(l) && <span className="ti-lens-check"><TiIcon name="check" size={13} /> explored</span>}
          </button>
        ))}
      </div>
      <div className={cx('ti-lens-detail', `a-${lens.key}`)} key={lens.key}>
        <div className="ti-lens-visual">
          <MayaScene scene={lens.scene} />
          <Timeline spec={lens.timeline} label={lens.timelineLabel} />
        </div>
        <div className="ti-lens-text">
          <div className="ti-eyebrow">{lens.name}</div>
          <p className="ti-lens-example"><span>“<HlSentence text={lens.example} hl={lens.hl} />”</span> <SpeakButton text={lens.example} /></p>
          <Uk show={ctx.showUk} block>{lens.uk}</Uk>
          <p className="ti-lens-meaning">{lens.meaning}</p>
          <Uk show={ctx.showUk} block>{lens.meaningUk}</Uk>
          {lens.note && <p className="ti-myth"><TiIcon name="hint" size={16} /> <span>{lens.note}</span></p>}
          <div className="ti-lens-qs">
            {(lens.questions || []).map((q, i) => (
              <DiscoveryQuestion key={q.id} q={q} number={i + 1} compact st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
                onChange={(v) => setNested(ctx, 'q', q.id, v)}
                onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `lens-${q.id}`, tags: { skill: 'understanding', aspect: lens.key } } })} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function ScreenAspectLenses({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const qs = S.q || {};
  const active = S.lens || c.lenses[0].key;
  const allDone = c.lenses.every(l => (l.questions || []).every(q => qDone(qs[q.id])));
  useEffect(() => { if (allDone && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allDone]);
  const doneCount = c.lenses.filter(l => (l.questions || []).every(q => qDone(qs[q.id]))).length;
  const nextOpen = c.lenses.find(l => !(l.questions || []).every(q => qDone(qs[q.id])));
  const curDone = (c.lenses.find(l => l.key === active).questions || []).every(q => qDone(qs[q.id]));
  return (
    <div className="ti-aspects">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <FourLensSimulator ctx={ctx} lenses={c.lenses} active={active} onPick={(k) => ctx.setS(p => ({ ...p, lens: k }))} />
      <div className="ti-ex-actions">
        <span className="ti-muted" aria-live="polite">Perspectives explored: {doneCount} / {c.lenses.length}</span>
        {!allDone && curDone && nextOpen && <TiButton variant="primary" iconRight="right" onClick={() => ctx.setS(p => ({ ...p, lens: nextOpen.key }))}>Next lens: {nextOpen.name}</TiButton>}
      </div>
      {allDone && (
        <div className="ti-celebrate">
          <DiscoveryBanner title={c.discovery.title} text={c.discovery.text} uk={c.discovery.uk} showUk={ctx.showUk} icon="layers" />
          <div className="ti-ex-actions ti-center"><TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton></div>
        </div>
      )}
    </div>
  );
}

/* ═══ TenseMatrixBoard — 3 × 4 ═════════════════════════════════
 * tenses: [{ id, name, time, aspect, combo, iForm, example, hl, uk, meaning,
 *            meaningUk, structure, structureNote, timeline, extra: [{ en, uk }], note }]
 * ═══════════════════════════════════════════════════════════════ */
function TenseMatrixBoard({ ctx, tenses, worlds, aspects, intro }) {
  const S = ctx.sstate;
  const unlocked = !!S.unlocked;
  const sel = S.sel || null;
  const tab = S.tab || 'meaning';
  const [mobWorld, setMobWorld] = useState(() => (tenses.find(t => t.id === sel) || {}).time || 'past');
  const t = tenses.find(x => x.id === sel);
  const at = (w, a) => tenses.find(x => x.time === w && x.aspect === a);
  const pick = (id) => ctx.setS(p => ({ ...p, sel: id, seen: (p.seen || []).includes(id) ? p.seen : [...(p.seen || []), id] }));
  const tabs = [['meaning', 'Meaning'], ['structure', 'Structure'], ['example', 'Example']];
  const tabRefs = useRef([]);
  const onTabKeys = (e) => {
    const i = tabs.findIndex(x => x[0] === tab);
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
    e.preventDefault(); const n = (i + d + tabs.length) % tabs.length; ctx.setS({ tab: tabs[n][0] }); tabRefs.current[n] && tabRefs.current[n].focus();
  };
  if (!unlocked) {
    return (
      <div className="ti-mx-locked">
        <div className="ti-mx-groups">
          <div className="ti-mx-group"><div className="ti-h4">{intro.timeLabel}</div>{worlds.map((w, i) => <span key={w.key} className={cx('ti-mx-chip', `w-${w.key}`)} style={{ '--i': i }}>{w.label}</span>)}</div>
          <span className="ti-mx-times" aria-hidden="true">×</span>
          <div className="ti-mx-group"><div className="ti-h4">{intro.aspectLabel}</div>{aspects.map((a, i) => <span key={a.key} className="ti-mx-chip is-aspect" style={{ '--i': i + 3 }}>{a.label}</span>)}</div>
        </div>
        <div className="ti-mx-ghost" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i}><TiIcon name="lock" size={14} /></span>)}</div>
        <TiButton variant="primary" size="lg" icon="unlock" onClick={() => ctx.setS(p => ({ ...p, unlocked: true }))}>{intro.cta}</TiButton>
      </div>
    );
  }
  const cellBtn = (x, i) => (
    <button key={x.id} type="button" className={cx('ti-mx-cell', `w-${x.time}`, sel === x.id && 'is-selected', (S.seen || []).includes(x.id) && 'is-seen')}
      style={{ '--i': i }} aria-pressed={sel === x.id} onClick={() => pick(x.id)} aria-label={`${x.name}: ${x.iForm}`}>
      <span className="ti-mx-form">{x.iForm}</span><span className="ti-mx-name">{x.name}</span>
    </button>
  );
  return (
    <div className="ti-mx">
      <div className="ti-mx-equation" aria-label="3 times 4 equals 12"><span>3</span><small>time worlds</small><b>×</b><span>4</span><small>perspectives</small><b>=</b><span className="is-total">12</span><small>combinations</small></div>
      <div className="ti-mx-scroll">
        <div className="ti-mx-grid" role="group" aria-label="Tense matrix">
          <span className="ti-mx-corner" />
          {aspects.map(a => <span key={a.key} className="ti-mx-colhead">{a.label}</span>)}
          {worlds.map((w, wi) => (
            <React.Fragment key={w.key}>
              <span className={cx('ti-mx-rowhead', `w-${w.key}`)}>{w.label}</span>
              {aspects.map((a, ai) => cellBtn(at(w.key, a.key), wi * 4 + ai))}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="ti-mx-mobile">
        <div className="ti-seg" role="radiogroup" aria-label="Time world">
          {worlds.map(w => <button key={w.key} type="button" role="radio" aria-checked={mobWorld === w.key} className={cx('ti-seg-btn', mobWorld === w.key && 'is-on')} onClick={() => setMobWorld(w.key)}>{w.label}</button>)}
        </div>
        <div className="ti-mx-mobgrid">{aspects.map((a, ai) => cellBtn(at(mobWorld, a.key), ai))}</div>
      </div>
      {!t && <p className="ti-muted ti-center"><TiIcon name="target" size={15} /> Choose any cell to see what it means.</p>}
      {t && (
        <div className={cx('ti-mx-detail', `w-${t.time}`)}>
          <div className="ti-mx-detail-head">
            <div><div className="ti-eyebrow">{t.combo}</div><h3 className="ti-h2">{t.name}</h3></div>
            <div className="ti-mx-tabs" role="tablist" aria-label="Cell details" onKeyDown={onTabKeys}>
              {tabs.map(([k, l], i) => <button key={k} ref={el => (tabRefs.current[i] = el)} type="button" role="tab" id={`mx-tab-${k}`} aria-selected={tab === k} aria-controls="mx-panel" tabIndex={tab === k ? 0 : -1} className={cx('ti-step', tab === k && 'is-on')} onClick={() => ctx.setS({ tab: k })}>{l}</button>)}
            </div>
          </div>
          <div id="mx-panel" role="tabpanel" aria-labelledby={`mx-tab-${tab}`} className="ti-mx-panel" key={`${t.id}-${tab}`}>
            {tab === 'meaning' && <>
              <p className="ti-core">{t.meaning}</p><Uk show={ctx.showUk} block>{t.meaningUk}</Uk>
              <Timeline spec={t.timeline} label={t.timelineLabel} />
            </>}
            {tab === 'structure' && <>
              <p className="ti-mx-structure">{t.structure}</p>
              <p className="ti-lens-example"><HlSentence text={t.iForm} hl={t.iHl} /></p>
              {t.structureNote && <p className="ti-muted">{t.structureNote}</p>}
              <p className="ti-muted">You don’t need to memorise this today — it’s here when you want it.</p>
            </>}
            {tab === 'example' && <>
              <p className="ti-lens-example"><span>“<HlSentence text={t.example} hl={t.hl} />”</span> <SpeakButton text={t.example} /></p>
              <Uk show={ctx.showUk} block>{t.uk}</Uk>
              {(t.extra || []).map((x, i) => <div key={i}><p className="ti-quote">{x.en} <SpeakButton text={x.en} /></p><Uk show={ctx.showUk} block>{x.uk}</Uk></div>)}
            </>}
            {t.note && <p className="ti-myth"><TiIcon name="hint" size={16} /> <span>{t.note}</span></p>}
          </div>
        </div>
      )}
    </div>
  );
}
function ScreenTenseMatrix({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const ok = !!S.unlocked && (S.seen || []).length > 0;
  useEffect(() => { if (ok && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [ok]);
  return (
    <div className="ti-matrix-screen">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <TenseMatrixBoard ctx={ctx} tenses={c.tenses} worlds={c.worlds} aspects={c.aspects} intro={c.intro} />
      {S.unlocked && <p className="ti-model-note"><TiIcon name="layers" size={15} /> {c.modelNote}</p>}
      {S.unlocked && <div className="ti-ex-actions"><span className="ti-muted">Explored {(S.seen || []).length} / 12 cells — exploring them all is optional.</span><TiButton variant="primary" iconRight="next" onClick={ctx.next} disabled={!ok && !ctx.teacherMode}>Continue to the Tense Lab</TiButton></div>}
    </div>
  );
}

/* ═══ TenseLab — TIME × PERSPECTIVE ════════════════════════════
 * content: { tenses (як у матриці + scene, ref), worlds, aspects,
 *            experiments: [{ id, title, start: { time, aspect }, target: { time, aspect },
 *              instruction, compare: [{ label, en }], question: DiscoveryQuestion }],
 *            finale: { lines: [], title } }
 * ═══════════════════════════════════════════════════════════════ */
function LabSelector({ label, items, value, onChange, cls }) {
  const refs = useRef([]);
  const idx = Math.max(0, items.findIndex(x => x.key === value));
  const onKeys = (e) => {
    const d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
    if (!d) return; e.preventDefault(); const n = (idx + d + items.length) % items.length; onChange(items[n].key); refs.current[n] && refs.current[n].focus();
  };
  return (
    <div className="ti-lab-sel">
      <div className="ti-lab-sel-label">{label}</div>
      <div className={cx('ti-lab-sel-btns', cls)} role="radiogroup" aria-label={label} onKeyDown={onKeys}>
        {items.map((x, i) => (
          <button key={x.key} ref={el => (refs.current[i] = el)} type="button" role="radio" aria-checked={x.key === value} tabIndex={x.key === value ? 0 : -1}
            className={cx('ti-lab-btn', `w-${x.key}`, `a-${x.key}`, x.key === value && 'is-on')} onClick={() => onChange(x.key)}>{x.label}</button>
        ))}
      </div>
    </div>
  );
}
function TenseLab({ ctx, content }) {
  const c = content;
  const S = ctx.sstate;
  const time = S.time || c.default.time, aspect = S.aspect || c.default.aspect;
  const t = c.tenses.find(x => x.time === time && x.aspect === aspect);
  const exps = c.experiments || [];
  const expState = S.exp || {};
  const expIdx = clamp(S.expIdx || 0, 0, exps.length);
  const allExp = exps.every(e => qDone(expState[e.id]));
  const free = !!S.free;
  const exp = !free && expIdx < exps.length ? exps[expIdx] : null;
  useEffect(() => { preloadScenes(c.tenses.map(x => x.scene)); }, []);
  const atTarget = exp && time === exp.target.time && aspect === exp.target.aspect;
  const set = (patch) => ctx.setS(p => {
    const nt = patch.time || p.time || c.default.time, na = patch.aspect || p.aspect || c.default.aspect;
    const id = tiCellId(nt, na);
    return { ...p, ...patch, seen: (p.seen || []).includes(id) ? (p.seen || []) : [...(p.seen || []), id] };
  });
  const startExp = (e) => { if (e.start) set({ time: e.start.time, aspect: e.start.aspect, expStarted: e.id }); else ctx.setS({ expStarted: e.id }); };
  useEffect(() => { if (allExp && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allExp]);
  return (
    <div className="ti-lab">
      <div className="ti-lab-a">
        <div className="ti-lab-area-label">A · The scene</div>
        <MayaScene scene={t.scene} />
      </div>
      <div className="ti-lab-b">
        <div className="ti-lab-area-label">B · The controls</div>
        <LabSelector label="TIME" items={c.worlds} value={time} onChange={(k) => set({ time: k })} cls="is-time" />
        <LabSelector label="PERSPECTIVE" items={c.aspects} value={aspect} onChange={(k) => set({ aspect: k })} cls="is-aspect" />
        <div className="ti-lab-mini" aria-label={`Combinations explored: ${(S.seen || []).length} of 12`}>
          {c.aspects.map(a => c.worlds.map(w => { const id = tiCellId(w.key, a.key); return <span key={id} className={cx('ti-mini-cell', `w-${w.key}`, (S.seen || []).includes(id) && 'is-on', id === t.id && 'is-cur')} title={(c.tenses.find(x => x.id === id) || {}).name} />; }))}
          <span className="ti-muted">{(S.seen || []).length}/12 explored</span>
        </div>
      </div>
      <div className="ti-lab-c" aria-live="polite">
        <div className="ti-lab-area-label">C · Meaning explorer</div>
        <div className={cx('ti-lab-out', `w-${t.time}`)} key={t.id}>
          <div className="ti-lab-name"><span className="ti-eyebrow">{t.combo}</span><strong>{t.name}</strong></div>
          <p className="ti-lab-sentence"><span>“<HlSentence text={t.example} hl={t.hl} />”</span> <SpeakButton text={t.example} /></p>
          <Uk show={ctx.showUk} block>{t.uk}</Uk>
          <p className="ti-lab-meaning">{t.labMeaning || t.meaning}</p>
          <Uk show={ctx.showUk} block>{t.labMeaningUk || t.meaningUk}</Uk>
          <Timeline spec={t.timeline} label={t.timelineLabel} />
          <p className="ti-lab-ref"><TiIcon name="flag" size={15} /> Reference point: <strong>{t.ref}</strong></p>
        </div>
      </div>
      <div className="ti-lab-d">
        {exp && (
          <div className="ti-lab-exp">
            <div className="ti-lab-exp-head"><span className="ti-eyebrow"><TiIcon name="flask" size={14} /> Experiment {expIdx + 1} of {exps.length}</span><strong>{exp.title}</strong></div>
            {S.expStarted !== exp.id
              ? <><p>{exp.intro}</p><TiButton variant="primary" icon="flask" onClick={() => startExp(exp)}>Start experiment</TiButton></>
              : <>
                  <p className="ti-lab-exp-instr"><TiIcon name="target" size={15} /> {exp.instruction}</p>
                  {!atTarget && <div className="ti-ex-actions"><span className="ti-muted">Use the controls above…</span><TiButton size="sm" onClick={() => set({ time: exp.target.time, aspect: exp.target.aspect })}>Set it for me</TiButton></div>}
                  {atTarget && <>
                    <div className="ti-lab-compare">{exp.compare.map((x, i) => <div key={i} className="ti-lab-compare-row"><span>{x.label}</span><em>“{x.en}”</em></div>)}</div>
                    <DiscoveryQuestion key={exp.id} q={exp.question} st={expState[exp.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk} compact
                      onChange={(v) => setNested(ctx, 'exp', exp.id, v)}
                      onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `lab-${exp.id}`, tags: { skill: 'understanding' } } })} />
                    {qDone(expState[exp.id]) && <div className="ti-ex-actions">
                      <TiButton variant="primary" iconRight="right" onClick={() => ctx.setS(p => ({ ...p, expIdx: expIdx + 1, free: expIdx + 1 >= exps.length ? true : p.free }))}>{expIdx + 1 < exps.length ? 'Next experiment' : 'Unlock Free Exploration'}</TiButton>
                    </div>}
                  </>}
                </>}
            <button type="button" className="ti-link" onClick={() => ctx.setS({ free: true })}>Skip to free exploration</button>
          </div>
        )}
        {!exp && (
          <div className="ti-lab-free">
            <div className="ti-lab-exp-head"><span className="ti-eyebrow"><TiIcon name="compass" size={14} /> Free exploration</span><strong>Try any of the twelve combinations.</strong></div>
            {allExp
              ? <div className="ti-lab-finale">{c.finale.lines.map((l, i) => <p key={i} style={{ '--d': `${i * 0.35}s` }}>{l}</p>)}<div className="ti-lab-director" style={{ '--d': `${c.finale.lines.length * 0.35}s` }}>{c.finale.title}</div></div>
              : <p className="ti-muted">Guided experiments: {exps.filter(e => qDone(expState[e.id])).length} / {exps.length}. <button type="button" className="ti-link" onClick={() => ctx.setS(p => ({ ...p, free: false, expIdx: exps.findIndex(e => !qDone(expState[e.id])) }))}>Back to the experiments</button></p>}
            <div className="ti-ex-actions">
              <TiButton size="sm" icon="replay" onClick={() => ctx.setS(p => ({ ...p, time: c.default.time, aspect: c.default.aspect }))}>Reset the lab</TiButton>
              {allExp && <TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function ScreenTenseLab({ screen, ctx }) {
  const c = screen.content || {};
  return (
    <div className="ti-lab-screen">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      {c.story && <div className="ti-lab-story">{c.story.map((l, i) => <span key={i}>{l}</span>)}</div>}
      <TenseLab ctx={ctx} content={c} />
    </div>
  );
}

/* ═══ InstinctChallenge ════════════════════════════════════════
 * questions: [{ id, title, situation, situationUk, prompt, options, answer,
 *               example, feedback, feedbackUk, hint, hintUk, category, tags }]
 * categories: [{ key, label, uk }]
 * Стан: { run, i, q: { [id]: { tries, revealed } }, finished, firstRun: { score, attempts } }
 * Оцінка — лише за ПЕРШОЮ спробою; повторні натискання не додають балів.
 * ═══════════════════════════════════════════════════════════════ */
function InstinctChallenge({ ctx, questions, categories, intro }) {
  const S = ctx.sstate;
  const run = S.run || 1;
  const qs = S.q || {};
  const i = clamp(S.i || 0, 0, questions.length - 1);
  const q = questions[i];
  const st = qs[q.id] || {};
  const tries = st.tries || [];
  const solved = tries.includes(q.answer);
  const revealed = !!st.revealed;
  const finished = solved || revealed;
  const wrong = tries.filter(t => t !== q.answer).length;
  const [sel, setSel] = useState(null);
  const [review, setReview] = useState(false);
  useEffect(() => { setSel(null); }, [i, run]);
  const firstOk = (x) => { const s = qs[x.id]; return !!(s && s.tries && s.tries[0] === x.answer); };
  const score = questions.filter(firstOk).length;
  const attempts = questions.reduce((n, x) => n + (((qs[x.id] || {}).tries) || []).length, 0);
  const check = () => {
    if (sel == null || finished) return;
    const ok = sel === q.answer;
    if (!tries.length && run === 1) ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `challenge-${q.id}`, tags: { skill: 'understanding', ...(q.tags || {}) } } });
    setNested(ctx, 'q', q.id, { ...st, tries: [...tries, sel] });
  };
  const nextQ = () => {
    if (i + 1 < questions.length) ctx.setS(p => ({ ...p, i: i + 1 }));
    else ctx.setS(p => ({ ...p, finished: true, done: true, firstRun: p.firstRun || { score, attempts, at: new Date().toISOString() } }));
  };
  const retry = () => { setReview(false); ctx.setS(p => ({ ...p, run: (p.run || 1) + 1, i: 0, q: {}, finished: false })); };

  if (S.finished) {
    const cat = categories.map(k => {
      const items = questions.filter(x => x.category === k.key);
      const ok = items.filter(firstOk).length;
      return { ...k, n: items.length, ok };
    }).filter(k => k.n);
    const strengths = cat.filter(k => k.ok === k.n);
    const practice = cat.filter(k => k.ok < k.n);
    return (
      <div className="ti-report">
        <div className="ti-report-head">
          <div className="ti-eyebrow"><TiIcon name="award" size={15} /> Your Instinct Report{run > 1 ? ` · attempt ${run}` : ''}</div>
          <div className="ti-results-big"><span>{score}/{questions.length}</span><small>correct on the first try</small></div>
          <p className="ti-muted">Total answers submitted: {attempts}. Only your first answer to each question counts towards the score.</p>
          {run > 1 && S.firstRun && <p className="ti-muted">First attempt at this challenge: {S.firstRun.score}/{questions.length}.</p>}
        </div>
        <div className="ti-report-cats">
          {cat.map(k => (
            <div key={k.key} className={cx('ti-report-cat', k.ok === k.n ? 'is-strong' : 'is-practice')}>
              <div className="ti-report-cat-name">{k.label}<Uk show={ctx.showUk}>{k.uk ? ` · ${k.uk}` : ''}</Uk></div>
              <div className="ti-bar" role="img" aria-label={`${k.label}: ${k.ok} of ${k.n}`}><span style={{ width: `${(k.ok / k.n) * 100}%` }} /></div>
              <div className="ti-report-cat-val">{k.ok}/{k.n} <span>{k.ok === k.n ? '— strength' : '— practise more'}</span></div>
            </div>
          ))}
        </div>
        <div className="ti-two">
          <div className="ti-panel"><h3 className="ti-h3"><TiIcon name="check" size={16} /> Strengths</h3>{strengths.length ? <ul>{strengths.map(k => <li key={k.key}>{k.label}</li>)}</ul> : <p className="ti-muted">No category was perfect on the first try yet — that’s normal for a first lesson.</p>}</div>
          <div className="ti-panel"><h3 className="ti-h3"><TiIcon name="target" size={16} /> Practise more</h3>{practice.length ? <ul>{practice.map(k => <li key={k.key}>{k.label}</li>)}</ul> : <p className="ti-muted">Nothing here — every category was right on the first try.</p>}</div>
        </div>
        <div className="ti-ex-actions">
          <TiButton icon="book" onClick={() => setReview(r => !r)} aria-expanded={review}>{review ? 'Hide explanations' : 'Review explanations'}</TiButton>
          <TiButton icon="replay" onClick={retry}>Retry the challenge</TiButton>
          <TiButton variant="primary" iconRight="next" onClick={ctx.next}>Continue</TiButton>
        </div>
        {review && (
          <ol className="ti-review">
            {questions.map(x => { const o = x.options.find(o => o.id === x.answer); return (
              <li key={x.id} className={firstOk(x) ? 'is-ok' : 'is-miss'}>
                <div className="ti-review-t"><TiIcon name={firstOk(x) ? 'check' : 'x'} size={15} /> {x.title}</div>
                <p className="ti-muted">{x.situation}</p>
                <p><strong>{o.text}</strong>{x.example && x.example !== o.text ? <> — “{x.example}”</> : null}</p>
                <p className="ti-feedback-expl">{x.feedback}</p>
              </li>
            ); })}
          </ol>
        )}
      </div>
    );
  }

  return (
    <div className="ti-challenge">
      <div className="ti-qseq-head">
        <span className="ti-counter">Question {i + 1} of {questions.length}</span>
        <div className="ti-challenge-bar" role="progressbar" aria-label="Challenge progress" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={i}><span style={{ width: `${(i / questions.length) * 100}%` }} /></div>
      </div>
      <div className="ti-challenge-card" key={`${run}-${q.id}`}>
        <div className="ti-eyebrow">{q.title}</div>
        <div className="ti-ex-context"><p className="ti-ex-context-text">{q.situation}</p><Uk show={ctx.showUk} block>{q.situationUk}</Uk></div>
        <div className="ti-ex-prompt">{q.prompt}<Uk show={ctx.showUk} block>{q.promptUk}</Uk></div>
        <div className="ti-options" role="radiogroup" aria-label={q.prompt}>
          {q.options.map((o, k) => {
            const tried = tries.includes(o.id); const isAns = o.id === q.answer;
            return (
              <button key={o.id} type="button" role="radio" aria-checked={sel === o.id} disabled={finished || (tried && !isAns)}
                className={cx('ti-option', sel === o.id && !finished && 'is-on', tried && (isAns ? 'is-right' : 'is-wrong'), (revealed || ctx.revealAnswers) && isAns && 'is-answer')}
                onClick={() => setSel(o.id)}>
                <span className="ti-option-key" aria-hidden="true">{String.fromCharCode(65 + k)}</span>
                <span className="ti-option-text">{o.text}</span>
                {tried && <span className="ti-sr-only">{isAns ? ' — correct' : ' — not correct'}</span>}
              </button>
            );
          })}
        </div>
        <div aria-live="polite">
          {finished && <div className={cx('ti-feedback', solved ? 'is-good' : 'is-info')}>
            <div className="ti-feedback-title"><TiIcon name={solved ? 'check' : 'eye'} size={16} /> {solved ? (tries.length === 1 ? 'Correct — great instinct!' : 'Correct!') : `Answer: ${q.options.find(o => o.id === q.answer).text}`}</div>
            {q.example && <p className="ti-quote">“{q.example}” <SpeakButton text={q.example} /></p>}
            <p>{q.feedback}</p><Uk show={ctx.showUk} block>{q.feedbackUk}</Uk>
          </div>}
          {!finished && wrong > 0 && <div className="ti-feedback is-mid">
            <div className="ti-feedback-title"><TiIcon name="refresh" size={16} /> Not quite — try again.</div>
            <p><TiIcon name="hint" size={14} /> {q.hint}</p><Uk show={ctx.showUk} block>{q.hintUk}</Uk>
          </div>}
        </div>
        <div className="ti-ex-actions">
          {!finished && <TiButton variant="primary" icon="check" disabled={sel == null || tries.includes(sel)} onClick={check}>Check</TiButton>}
          {!finished && wrong >= 2 && <TiButton icon="eye" onClick={() => setNested(ctx, 'q', q.id, { ...st, revealed: true })}>Show the correct answer</TiButton>}
          {finished && <TiButton variant="accent" iconRight="next" className="ti-ex-next" onClick={nextQ}>{i + 1 < questions.length ? 'Next question' : 'See my Instinct Report'}</TiButton>}
        </div>
      </div>
    </div>
  );
}
function ScreenInstinctChallenge({ screen, ctx }) {
  const c = screen.content || {};
  return (
    <div className="ti-challenge-screen">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <InstinctChallenge ctx={ctx} questions={c.questions} categories={c.categories} />
    </div>
  );
}

/* ═══ Personal writing (без вигаданої автоперевірки) ═══════════ */
function ScreenPersonalWriting({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate;
  const ans = S.answers || {};
  const self = S.self || {};
  const [shown, setShown] = useState({});
  const [confirmReset, setConfirmReset] = useState(false);
  const [copied, setCopied] = useState(false);
  const filled = c.prompts.filter(p => (ans[p.id] || '').trim()).length;
  const setAns = (id, v) => ctx.setS(p => ({ ...p, answers: { ...(p.answers || {}), [id]: v }, editedAt: new Date().toISOString() }));
  const saveDraft = () => ctx.setS(p => ({ ...p, savedAt: new Date().toISOString(), done: c.prompts.every(x => ((p.answers || {})[x.id] || '').trim()) }));
  const text = c.prompts.map(p => `${p.label}: ${(ans[p.id] || '').trim() || '—'}`).join('\n');
  const copy = () => {
    const ok = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    const fallback = () => {
      try { const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); const r = document.execCommand('copy'); document.body.removeChild(ta); if (r) ok(); } catch (e) {}
    };
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback); else fallback(); } catch (e) { fallback(); }
  };
  const time = (iso) => { try { return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; } };
  return (
    <div className="ti-write">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <p className="ti-instructions">{c.instructions}</p>
      <Uk show={ctx.showUk} block>{c.instructionsUk}</Uk>
      <div className="ti-write-grid">
        {c.prompts.map((p, i) => (
          <div key={p.id} className={cx('ti-write-card', `a-${p.aspect}`)}>
            <div className="ti-write-top"><span className="ti-eyebrow">{i + 1} · {p.label}</span><span className="ti-muted">{p.focus}</span></div>
            <label className="ti-write-label" htmlFor={`w-${p.id}`}>{p.start}</label>
            <textarea id={`w-${p.id}`} className="ti-input" rows={2} value={ans[p.id] || ''} placeholder={p.placeholder} onChange={(e) => setAns(p.id, e.target.value)} />
            <Uk show={ctx.showUk} block>{p.uk}</Uk>
            <div className="ti-write-tools">
              <TiButton size="sm" icon="eye" onClick={() => setShown(s => ({ ...s, [p.id]: !s[p.id] }))} aria-expanded={!!shown[p.id]}>{shown[p.id] ? 'Hide example' : 'Example'}</TiButton>
              <label className="ti-switch"><input type="checkbox" checked={!!self[p.id]} onChange={(e) => ctx.setS(prev => ({ ...prev, self: { ...(prev.self || {}), [p.id]: e.target.checked } }))} /> {p.check}</label>
            </div>
            {shown[p.id] && <p className="ti-quote">“{p.example}” <SpeakButton text={p.example} /></p>}
          </div>
        ))}
      </div>
      <p className="ti-model-note"><TiIcon name="hint" size={15} /> {c.validationNote}</p>
      <div className="ti-ex-actions">
        <TiButton variant="primary" icon="save" onClick={saveDraft}>Save draft</TiButton>
        <TiButton icon="copy" onClick={copy} disabled={!filled}>{copied ? 'Copied!' : 'Copy answers'}</TiButton>
        {!confirmReset
          ? <TiButton icon="replay" onClick={() => setConfirmReset(true)} disabled={!filled}>Reset</TiButton>
          : <span className="ti-confirm" role="alert">Delete all four sentences? <TiButton size="sm" onClick={() => { ctx.setS(p => ({ ...p, answers: {}, self: {}, savedAt: null, done: false })); setConfirmReset(false); }}>Yes, delete</TiButton><TiButton size="sm" variant="primary" onClick={() => setConfirmReset(false)}>Keep them</TiButton></span>}
        <span className="ti-muted" aria-live="polite">{filled}/{c.prompts.length} written · {S.savedAt ? `Draft saved at ${time(S.savedAt)}` : S.editedAt ? (ctx.persist ? 'Changes are kept automatically' : 'Teacher mode: kept only during this session') : 'Nothing written yet'}</span>
        <TiButton iconRight="next" className="ti-ex-next" onClick={ctx.next}>Continue</TiButton>
      </div>
    </div>
  );
}

/* ═══ Final discovery + completion ═════════════════════════════ */
function ScreenFinalDiscovery({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const qs = S.q || {};
  const reflectionDone = c.reflection.every(q => qDone(qs[q.id]));
  const coreIds = ctx.screens.filter(s => !s.optional && s.id !== screen.id).map(s => s.id);
  const reqs = [
    { key: 'visited', label: 'Visit every lesson screen', ok: coreIds.every(id => ctx.visited.includes(id)), go: coreIds.find(id => !ctx.visited.includes(id)) },
    ...c.requirements.map(r => ({ key: r.screen, label: r.label, ok: !!((ctx.lstate[r.screen] || {}).done), go: r.screen })),
    { key: 'reflection', label: 'Answer the three final questions (below)', ok: reflectionDone },
  ];
  const allOk = reqs.every(r => r.ok);
  useEffect(() => { if (allOk && !ctx.lessonCompleted) ctx.completeLesson(); if (allOk && !S.done) ctx.setS(p => ({ ...p, done: true })); }, [allOk]);
  const screenTitle = (id) => { const s = ctx.screens.find(x => x.id === id); return s ? (s.navTitle || s.title) : id; };
  return (
    <div className="ti-final">
      <div className="ti-final-hero">
        <div className="ti-eyebrow">{c.kicker}</div>
        <h2 className="ti-cover-title">{screen.title}</h2>
        <p className="ti-cover-sub">{c.subtitle}</p>
        <Uk show={ctx.showUk} block>{c.subtitleUk}</Uk>
        <div className="ti-final-eq" aria-label="3 time worlds plus 4 perspectives equals 12 traditional combinations">
          <div className="ti-eq-item" style={{ '--d': '0.1s' }}><span>3</span><small>Time Worlds</small></div>
          <b style={{ '--d': '0.5s' }}>+</b>
          <div className="ti-eq-item" style={{ '--d': '0.8s' }}><span>4</span><small>Perspectives</small></div>
          <b style={{ '--d': '1.2s' }}>=</b>
          <div className="ti-eq-item is-total" style={{ '--d': '1.5s' }}><span>12</span><small>Traditional Combinations</small></div>
        </div>
        <div className="ti-final-formula" style={{ '--d': '2.1s' }} aria-label="Time plus aspect plus context equals meaning">
          {['TIME', '+', 'ASPECT', '+', 'CONTEXT', '=', 'MEANING'].map((w, i) => <span key={i} className={cx(w.length > 1 ? 'is-word' : 'is-op', w === 'MEANING' && 'is-meaning')} style={{ '--d': `${2.1 + i * 0.12}s` }}>{w}</span>)}
        </div>
      </div>
      <section className="ti-final-reflect">
        <h3 className="ti-h3"><TiIcon name="target" size={17} /> Final reflection</h3>
        <div className="ti-final-qs">
          {c.reflection.map((q, i) => (
            <DiscoveryQuestion key={q.id} q={q} number={i + 1} compact st={qs[q.id]} reveal={ctx.revealAnswers} showUk={ctx.showUk}
              onChange={(v) => setNested(ctx, 'q', q.id, v)}
              onFirst={(ok, self) => !self && ctx.onResult({ correct: ok, score: ok ? 1 : 0, exercise: { id: `final-${q.id}`, tags: { skill: 'understanding' } } })} />
          ))}
        </div>
      </section>
      <section className={cx('ti-final-status', allOk && 'is-complete')} aria-live="polite">
        {allOk ? (
          <>
            <div className="ti-complete-badge"><TiIcon name="award" size={40} /></div>
            <h3 className="ti-h2">{c.completeTitle}</h3>
            <div className="ti-final-text">{c.finalText.map((l, i) => <p key={i}>{l}</p>)}</div>
            {!ctx.persist && <p className="ti-demo-note">Teacher mode / demo: completion is not saved to anyone’s progress.</p>}
            {ctx.persist && <p className="ti-muted"><TiIcon name="check" size={14} /> Lesson marked as completed in your Tense Instinct progress.</p>}
          </>
        ) : (
          <>
            <h3 className="ti-h3"><TiIcon name="flag" size={17} /> To complete the lesson</h3>
            <ul className="ti-reqs">
              {reqs.map(r => (
                <li key={r.key} className={r.ok ? 'is-ok' : ''}>
                  <TiIcon name={r.ok ? 'check' : 'target'} size={15} /> <span>{r.label}</span>
                  {!r.ok && r.go && <button type="button" className="ti-link" onClick={() => ctx.goToScreen(r.go)}>Go to “{screenTitle(r.go)}”</button>}
                </li>
              ))}
            </ul>
            <p className="ti-muted">A perfect score is not required. Optional activities are not required.</p>
          </>
        )}
        <div className="ti-ex-actions ti-center">
          <TiButton icon="map" onClick={ctx.goCourse}>Back to the course</TiButton>
          {ctx.nextLesson && <TiButton variant="primary" iconRight="next" onClick={ctx.goNextLesson}>Next lesson: {ctx.nextLesson.title}</TiButton>}
          {ctx.screens.some(s => s.optional) && <TiButton icon="sparkles" onClick={() => ctx.goTo(ctx.coreCount)}>Optional: speaking & homework</TiButton>}
        </div>
        {!ctx.nextLesson && ctx.upcomingLesson && <p className="ti-muted ti-center">Next: Lesson {String(ctx.upcomingLesson.number).padStart(2, '0')} · {ctx.upcomingLesson.title} — {lessonHasContent(ctx.upcomingLesson) ? 'your teacher will open it for you.' : 'coming soon.'}</p>}
      </section>
    </div>
  );
}

/* ═══ Optional · Extra speaking ═══════════════════════════════ */
function ScreenSpeakingExtra({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const open = S.open || {};
  const [timer, setTimer] = useState(false);
  return (
    <div className="ti-speak-extra">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.subtitle} uk={c.subtitleUk} showUk={ctx.showUk} />
      <div className="ti-ex-actions"><TiButton size="sm" icon="clock" onClick={() => setTimer(t => !t)} aria-pressed={timer}>Speaking timer</TiButton>{timer && <SpeakingTimer seconds={60} />}</div>
      <ol className="ti-speak-list">
        {c.questions.map((q, i) => (
          <li key={i} className="ti-speak-item">
            <div className="ti-speak-q"><span className="ti-warm-n">{i + 1}</span><div><div className="ti-speak-en">{q.q} <SpeakButton text={q.q} /></div><Uk show={ctx.showUk} block>{q.uk}</Uk></div></div>
            <div className="ti-ex-actions"><TiButton size="sm" icon="eye" aria-expanded={!!open[i]} onClick={() => ctx.setS(p => ({ ...p, open: { ...(p.open || {}), [i]: !(p.open || {})[i] } }))}>{open[i] ? 'Hide possible answer' : 'Possible answer'}</TiButton></div>
            {(open[i] || ctx.revealAnswers) && <div className="ti-model"><p><strong>Possible answer:</strong> {q.answer} <SpeakButton text={q.answer} /></p><Uk show={ctx.showUk} block>{q.answerUk}</Uk></div>}
            {ctx.teacherMode && <div className="ti-speak-teacher"><span><strong>Follow-up:</strong> {q.followUp}</span>{q.note && <span><strong>Note:</strong> {q.note}</span>}</div>}
          </li>
        ))}
      </ol>
      <div className="ti-ex-actions"><TiButton iconRight="next" className="ti-ex-next" onClick={ctx.next}>Homework: Tense Detective</TiButton></div>
    </div>
  );
}

/* ═══ Optional · Tense Detective homework ═════════════════════ */
function ScreenTenseDetective({ screen, ctx }) {
  const c = screen.content || {};
  const S = ctx.sstate; const ex = S.examples || {};
  const setF = (i, k, v) => ctx.setS(p => ({ ...p, examples: { ...(p.examples || {}), [i]: { ...((p.examples || {})[i] || {}), [k]: v } }, editedAt: new Date().toISOString() }));
  const count = Array.from({ length: c.count }, (_, i) => i).filter(i => ((ex[i] || {}).sentence || '').trim()).length;
  const chipRow = (i, k, opts, label) => (
    <div className="ti-det-chips" role="radiogroup" aria-label={label}>
      {opts.map(o => <button key={o} type="button" role="radio" aria-checked={(ex[i] || {})[k] === o} className={cx('ti-chip', (ex[i] || {})[k] === o && 'is-on')} onClick={() => setF(i, k, (ex[i] || {})[k] === o ? '' : o)}>{o}</button>)}
    </div>
  );
  return (
    <div className="ti-detective">
      <DHead kicker={c.kicker} title={screen.title} subtitle={c.instructions} uk={c.instructionsUk} showUk={ctx.showUk} />
      <p className="ti-muted">Sources: {c.sources.join(' · ')}</p>
      <div className="ti-det-grid">
        {Array.from({ length: c.count }, (_, i) => (
          <fieldset key={i} className="ti-det-card">
            <legend className="ti-eyebrow"><TiIcon name="search" size={14} /> Example {i + 1}</legend>
            <label className="ti-write-label" htmlFor={`d-${i}-s`}>1. {c.questions[0]}</label>
            <textarea id={`d-${i}-s`} className="ti-input is-small" rows={2} value={(ex[i] || {}).sentence || ''} onChange={(e) => setF(i, 'sentence', e.target.value)} placeholder="Copy the sentence here" />
            <div className="ti-det-src">{chipRow(i, 'source', c.sources, 'Source')}</div>
            <label className="ti-write-label" htmlFor={`d-${i}-a`}>2. {c.questions[1]}</label>
            <input id={`d-${i}-a`} className="ti-input is-small" value={(ex[i] || {}).about || ''} onChange={(e) => setF(i, 'about', e.target.value)} />
            <div className="ti-write-label">3. {c.questions[2]}</div>
            {chipRow(i, 'time', c.timeOptions, c.questions[2])}
            <div className="ti-write-label">4. {c.questions[3]}</div>
            {chipRow(i, 'focus', c.focusOptions, c.questions[3])}
          </fieldset>
        ))}
      </div>
      <p className="ti-muted" aria-live="polite">{count}/{c.count} examples · {ctx.persist ? 'saved automatically in your Tense Instinct progress' : 'Teacher mode: kept only during this session'}</p>
      <div className="ti-ex-actions"><TiButton icon="map" onClick={ctx.goCourse}>Back to the course</TiButton></div>
    </div>
  );
}

/* ── Реєстрація нових типів екранів у програвачі ── */
Object.assign(TI_SCREEN_TEMPLATES, {
  'intro-hero': { label: 'Intro hero + mood check', C: ScreenIntroHero },
  'perspective-cards': { label: 'Perspective cards (discovery)', C: ScreenPerspectiveCards },
  'time-explorer': { label: 'Time Explorer', C: ScreenTimeExplorer },
  'aspect-lenses': { label: 'Four Lens Simulator', C: ScreenAspectLenses },
  'tense-matrix': { label: 'Tense Matrix', C: ScreenTenseMatrix },
  'tense-lab': { label: 'Tense Lab', C: ScreenTenseLab },
  'instinct-challenge': { label: 'Instinct Challenge', C: ScreenInstinctChallenge },
  'personal-writing': { label: 'Personal writing', C: ScreenPersonalWriting },
  'final-discovery': { label: 'Final discovery & completion', C: ScreenFinalDiscovery },
  'speaking-extra': { label: 'Extra speaking (optional)', C: ScreenSpeakingExtra },
  'tense-detective': { label: 'Tense Detective homework (optional)', C: ScreenTenseDetective },
});
