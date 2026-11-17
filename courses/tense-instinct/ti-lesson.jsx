/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · lesson workspace
 * HYBRID WORKSPACE + FOCUS MODE · ONE SCREEN — ONE FOCUS
 *
 * Схема екрана:
 * { id, type, title, section, content: {...}, media: {...}, exercise: {...},
 *   teacherNotes: '…' | ['…'], settings: { timer, align } }
 * type — один із ключів TI_SCREEN_TEMPLATES (20 шаблонів нижче).
 * Схема уроку (файл lessons/ti-XX.js):
 * { id, objectives: [], estimatedDuration, sections: [{ id, title }],
 *   screens: [...], teacherNotes, completionCriteria: { minScreens } }
 * ═══════════════════════════════════════════════════════════════ */

/* ── Допоміжні блоки ── */
function ScreenTitle({ screen, kicker }) {
  if (!screen.title && !kicker) return null;
  return (
    <header className="ti-screen-head">
      {kicker && <div className="ti-eyebrow">{kicker}</div>}
      {screen.title && <h2 className="ti-screen-title">{screen.title}</h2>}
      {screen.subtitle && <p className="ti-uk">{screen.subtitle}</p>}
    </header>
  );
}
const Paras = ({ items }) => (items || []).map((p, i) => <p key={i} className="ti-para">{p}</p>);
function cellOrSpec(c) { return c && c.cellId ? tiCell(c.cellId) : null; }

/* ═══ 20 шаблонів екранів ═════════════════════════════════════ */
function ScreenCover({ screen, lesson }) {
  const c = screen.content || {};
  return (
    <div className="ti-scr-cover">
      {screen.media && screen.media.src ? <TiImage media={{ ...screen.media, overlay: true }} className="ti-cover-bg" eager /> : <div className="ti-cover-bg ti-cover-art" aria-hidden="true"><Timeline spec={{ items: [{ t: 'repeat', from: 6, to: 96, n: 12 }] }} compact showZones={false} /></div>}
      <div className="ti-cover-body">
        <div className="ti-eyebrow">{c.kicker || `Lesson ${String(lesson.number).padStart(2, '0')}`}</div>
        <h1 className="ti-cover-title">{c.title || lesson.title}</h1>
        {(c.subtitle || lesson.description) && <p className="ti-cover-sub">{c.subtitle || lesson.description}</p>}
        {c.objectives && <ul className="ti-objectives">{c.objectives.map((o, i) => <li key={i}><TiIcon name="target" size={15} /> {o}</li>)}</ul>}
      </div>
    </div>
  );
}
function ScreenWarmup({ screen }) {
  const c = screen.content || {};
  const [open, setOpen] = useState(0);
  return (
    <div className="ti-scr-warmup">
      <ScreenTitle screen={screen} kicker="Warm-up" />
      <div className="ti-warm-list">
        {(c.questions || []).map((q, i) => (
          <button key={i} type="button" className={cx('ti-warm-q', open === i && 'is-open')} onClick={() => setOpen(i)} aria-expanded={open === i}>
            <span className="ti-warm-n">{i + 1}</span>
            <span><span className="ti-warm-en">{q.en}</span>{open === i && q.uk && <span className="ti-uk">{q.uk}</span>}</span>
          </button>
        ))}
      </div>
      {screen.settings && screen.settings.timer && <SpeakingTimer seconds={screen.settings.timer} />}
    </div>
  );
}
function ScreenStory({ screen }) {
  const c = screen.content || {};
  return (
    <div className={cx('ti-scr-story', screen.media && 'has-media')}>
      {screen.media && <TiImage media={screen.media} />}
      <div className="ti-story-text">
        <ScreenTitle screen={screen} kicker={c.scene || 'Story'} />
        <Paras items={c.paragraphs} />
        {c.question && <p className="ti-story-q"><TiIcon name="target" size={15} /> {c.question}</p>}
      </div>
    </div>
  );
}
function ScreenExplain({ screen }) {
  const c = screen.content || {}; const cell = cellOrSpec(c);
  return (
    <div className="ti-scr-explain">
      <ScreenTitle screen={screen} kicker={cell ? cell.name : 'How it works'} />
      {(cell || c.timeline) && <Timeline spec={c.timeline || cell.timeline} label={c.caption || (cell && cell.core)} />}
      <div className="ti-explain-points">
        {(c.points || []).map((p, i) => (
          <div key={i} className="ti-explain-point">
            <div className="ti-explain-title">{p.title}</div>
            {p.text && <p>{p.text}</p>}
            {p.example && <p className="ti-quote">{p.example} <SpeakButton text={p.example} /></p>}
          </div>
        ))}
      </div>
    </div>
  );
}
// Інтерактивний таймлайн: покроково змінює стан (крок = spec + підпис)
function ScreenTimeline({ screen }) {
  const c = screen.content || {}; const cell = cellOrSpec(c);
  const steps = c.steps && c.steps.length ? c.steps : [{ label: c.caption || (cell && cell.core) || '', spec: c.timeline || (cell && cell.timeline) }];
  const [k, setK] = useState(0);
  const step = steps[Math.min(k, steps.length - 1)];
  return (
    <div className="ti-scr-timeline">
      <ScreenTitle screen={screen} kicker="Interactive timeline" />
      <Timeline spec={step.spec} label={step.label} key={k} />
      {step.sentence && <p className="ti-quote ti-center">{step.sentence} <SpeakButton text={step.sentence} /></p>}
      {steps.length > 1 && (
        <div className="ti-steps" role="tablist" aria-label="Кроки таймлайну">
          {steps.map((s, i) => <button key={i} type="button" role="tab" aria-selected={k === i} className={cx('ti-step', k === i && 'is-on')} onClick={() => setK(i)}>{s.short || i + 1}</button>)}
        </div>
      )}
    </div>
  );
}
function ScreenCompare({ screen }) {
  const c = screen.content || {};
  const A = tiCell(c.a), B = tiCell(c.b);
  if (!A || !B) return <MissingMedia text="Не вказано, що порівнювати (content.a / content.b)" />;
  const diff = differenceText(A.id, B.id);
  return (
    <div className="ti-scr-compare">
      <ScreenTitle screen={screen} kicker="Tense comparison" />
      <div className="ti-compare-grid">
        {[A, B].map((x, i) => (
          <div key={x.id} className={cx('ti-compare-col', `w-${x.world}`)}>
            <div className="ti-compare-name">{x.name}</div>
            <Timeline spec={x.timeline} compact label={x.core} />
            {(c.examples && c.examples[i]) && <p className="ti-quote">{c.examples[i]} <SpeakButton text={c.examples[i]} /></p>}
          </div>
        ))}
      </div>
      {diff && <div className="ti-diff"><p>{c.note || diff.en}</p><p className="ti-uk">{c.noteUk || diff.uk}</p></div>}
    </div>
  );
}
function ScreenWithExercise({ screen, ctx, kicker }) {
  return (
    <div className={cx('ti-scr-ex', screen.media && 'has-media')}>
      <ScreenTitle screen={screen} kicker={kicker} />
      {screen.media && screen.type !== 'listening' && <TiImage media={screen.media} />}
      {screen.content && screen.content.instructions && <p className="ti-instructions">{screen.content.instructions}</p>}
      {screen.exercise ? <Exercise key={ctx.exKey} exercise={screen.exercise} onResult={ctx.onResult} revealAnswers={ctx.revealAnswers} hideExplanation={ctx.hideExplanation} />
        : <MissingMedia text="Для цього екрана ще не додано вправу" />}
    </div>
  );
}
// Drag-and-drop сортування: перетягни (миша) або натисни картку, потім кошик (дотик/клавіатура)
function SortExercise({ data, onResult, revealAnswers, exKey }) {
  const items = data.items || []; const buckets = data.buckets || [];
  const [place, setPlace] = useState({}); const [sel, setSel] = useState(null); const [checked, setChecked] = useState(false);
  const reported = useRef(false);
  const put = (i, b) => { if (checked) return; setPlace(p => ({ ...p, [i]: b })); setSel(null); };
  const done = Object.keys(place).length === items.length;
  const hit = items.filter((it, i) => place[i] === it.bucket).length;
  const check = () => { setChecked(true); if (!reported.current) { reported.current = true; onResult && onResult({ correct: hit === items.length, score: hit / items.length, exercise: { id: data.id || 'sort', tags: data.tags } }); } };
  return (
    <div className="ti-ex ti-sort">
      {data.prompt && <div className="ti-ex-prompt">{data.prompt}</div>}
      <div className="ti-sort-pool" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { const i = e.dataTransfer.getData('text/plain'); if (i !== '') setPlace(p => { const n = { ...p }; delete n[i]; return n; }); }}>
        {items.map((it, i) => place[i] == null && (
          <button key={i} type="button" draggable={!checked} onDragStart={(e) => e.dataTransfer.setData('text/plain', String(i))}
            className={cx('ti-token', sel === i && 'is-active')} onClick={() => setSel(sel === i ? null : i)} aria-pressed={sel === i}>{it.text}</button>
        ))}
        {done && !checked && <span className="ti-muted">Усе розкладено — перевір!</span>}
      </div>
      <div className="ti-sort-buckets">
        {buckets.map((b, bi) => (
          <div key={bi} className={cx('ti-bucket', sel != null && 'is-target')} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); put(e.dataTransfer.getData('text/plain'), bi); }}>
            <button type="button" className="ti-bucket-head" disabled={sel == null || checked} onClick={() => put(sel, bi)} aria-label={`Покласти в «${b}»`}>{b}</button>
            <div className="ti-bucket-items">
              {items.map((it, i) => place[i] === bi && (
                <button key={i} type="button" draggable={!checked} onDragStart={(e) => e.dataTransfer.setData('text/plain', String(i))}
                  className={cx('ti-token is-placed', checked && (it.bucket === bi ? 'is-right' : 'is-wrong'))} onClick={() => !checked && setPlace(p => { const n = { ...p }; delete n[i]; return n; })}>
                  {it.text}{(revealAnswers && it.bucket !== bi) && <em> → {buckets[it.bucket]}</em>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {checked && <div className={cx('ti-feedback', hit === items.length ? 'is-good' : 'is-mid')} role="status"><div className="ti-feedback-title">{hit}/{items.length} правильно</div>{data.explanation && <p className="ti-feedback-expl">{data.explanation}</p>}</div>}
      <div className="ti-ex-actions">
        {!checked && <TiButton variant="primary" icon="check" disabled={!done} onClick={check}>Перевірити</TiButton>}
        {checked && <TiButton icon="replay" onClick={() => { setPlace({}); setChecked(false); }}>Ще раз</TiButton>}
      </div>
    </div>
  );
}
function ScreenDragDrop({ screen, ctx }) {
  return <div className="ti-scr-ex"><ScreenTitle screen={screen} kicker="Drag & drop" /><SortExercise key={ctx.exKey} data={screen.content || {}} onResult={ctx.onResult} revealAnswers={ctx.revealAnswers} /></div>;
}
function ScreenYouTube({ screen, ctx }) {
  const c = screen.content || {};
  return (
    <div className="ti-scr-video">
      <ScreenTitle screen={screen} kicker="Video" />
      {c.instructions && <p className="ti-instructions">{c.instructions}</p>}
      <TiYouTube video={screen.media} />
      {screen.exercise && <Exercise key={ctx.exKey} exercise={screen.exercise} onResult={ctx.onResult} revealAnswers={ctx.revealAnswers} hideExplanation={ctx.hideExplanation} />}
    </div>
  );
}
function ScreenListening({ screen, ctx }) {
  return (
    <div className="ti-scr-ex">
      <ScreenTitle screen={screen} kicker="Listening" />
      {screen.content && screen.content.instructions && <p className="ti-instructions">{screen.content.instructions}</p>}
      {screen.exercise ? <Exercise key={ctx.exKey} exercise={{ ...screen.exercise, type: screen.exercise.type || 'listening', audio: screen.exercise.audio || screen.media }} onResult={ctx.onResult} revealAnswers={ctx.revealAnswers} hideExplanation={ctx.hideExplanation} />
        : <TiAudio audio={screen.media} />}
    </div>
  );
}
// Інтерактивний діалог: репліки з'являються по черзі; на репліці з choice — вибір учня
function ScreenDialogue({ screen, ctx }) {
  const lines = (screen.content && screen.content.lines) || [];
  const [shown, setShown] = useState(1); const [picks, setPicks] = useState({});
  const cur = lines[shown - 1];
  const blocked = cur && cur.choice && picks[shown - 1] == null;
  return (
    <div className="ti-scr-dialogue">
      <ScreenTitle screen={screen} kicker="Dialogue" />
      <div className="ti-dialogue" aria-live="polite">
        {lines.slice(0, shown).map((l, i) => {
          const pick = picks[i]; const ch = l.choice;
          return (
            <div key={i} className={cx('ti-line', l.me ? 'is-me' : 'is-them')}>
              <span className="ti-line-who">{l.who}</span>
              {ch ? (
                <div className="ti-line-choice">
                  {ch.options.map(o => {
                    const isAns = (ch.answer || []).includes(o.id);
                    return <button key={o.id} type="button" disabled={pick != null} className={cx('ti-option is-small', pick === o.id && (isAns ? 'is-right' : 'is-wrong'), ctx.revealAnswers && isAns && 'is-answer')}
                      onClick={() => { setPicks(p => ({ ...p, [i]: o.id })); ctx.onResult && ctx.onResult({ correct: isAns, score: isAns ? 1 : 0, exercise: { id: `${screen.id}-${i}`, tags: ch.tags } }); }}>{o.text}</button>;
                  })}
                  {pick != null && ch.explanation && <p className="ti-feedback-expl">{ch.explanation}</p>}
                </div>
              ) : <span className="ti-line-text">{l.text} <SpeakButton text={l.text} /></span>}
            </div>
          );
        })}
      </div>
      {shown < lines.length && <TiButton variant="primary" iconRight="next" disabled={blocked} onClick={() => setShown(s => s + 1)}>{blocked ? 'Обери відповідь' : 'Наступна репліка'}</TiButton>}
    </div>
  );
}
// Reflex challenge: швидкі питання поспіль, необов'язковий таймер
function ScreenReflex({ screen, ctx }) {
  const c = screen.content || {}; const items = c.items || [];
  const [i, setI] = useState(0); const [score, setScore] = useState(0); const [done, setDone] = useState(false);
  const [secs, setSecs] = useState(c.seconds || 0);
  const ex = items[i];
  if (!items.length) return <MissingMedia text="Додай content.items — короткі вправи для reflex challenge" />;
  return (
    <div className="ti-scr-reflex">
      <ScreenTitle screen={screen} kicker="Reflex challenge" />
      <div className="ti-seg is-small" role="radiogroup" aria-label="Таймер">
        {TI_TIMER_OPTIONS.map(s => <button key={s} type="button" role="radio" aria-checked={secs === s} className={cx('ti-seg-btn', secs === s && 'is-on')} onClick={() => setSecs(s)}>{s ? `${s}s` : 'Untimed'}</button>)}
      </div>
      {done ? (
        <div className="ti-results-big"><span>{score}/{items.length}</span><small>правильно</small><TiButton icon="replay" onClick={() => { setI(0); setScore(0); setDone(false); }}>Ще раз</TiButton></div>
      ) : (
        <>
          <div className="ti-counter">{i + 1} / {items.length}</div>
          {secs > 0 && <div className="ti-reflex-bar" key={`${i}-${secs}-${ctx.exKey}`} style={{ animationDuration: `${secs}s` }} aria-hidden="true" />}
          <Exercise key={`${ctx.exKey}-${i}`} exercise={ex} compact revealAnswers={ctx.revealAnswers} hideExplanation={ctx.hideExplanation}
            onResult={(r) => { if (r.correct) setScore(s => s + 1); ctx.onResult && ctx.onResult({ ...r, timed: secs > 0 }); }}
            onNext={() => (i + 1 >= items.length ? setDone(true) : setI(i + 1))} nextLabel={i + 1 >= items.length ? 'Підсумок' : 'Далі'} />
        </>
      )}
    </div>
  );
}
function ScreenMission({ screen }) {
  const c = screen.content || {};
  const [doneTasks, setDoneTasks] = useState({}); const [twist, setTwist] = useState(false);
  return (
    <div className={cx('ti-scr-mission', screen.media && 'has-media')}>
      {screen.media && <TiImage media={screen.media} />}
      <div>
        <ScreenTitle screen={screen} kicker="Story mission" />
        {c.brief && <p className="ti-para">{c.brief}</p>}
        <ul className="ti-tasks">
          {(c.tasks || []).map((t, i) => (
            <li key={i}><label className="ti-task"><input type="checkbox" checked={!!doneTasks[i]} onChange={() => setDoneTasks(d => ({ ...d, [i]: !d[i] }))} /><span>{t}</span></label></li>
          ))}
        </ul>
        {c.twist && (twist ? <div className="ti-twist" role="status"><TiIcon name="sparkles" size={16} /> {c.twist}</div>
          : <TiButton variant="accent" icon="sparkles" onClick={() => setTwist(true)}>Unexpected twist!</TiButton>)}
      </div>
    </div>
  );
}
function ScreenSummary({ screen }) {
  const c = screen.content || {};
  return (
    <div className="ti-scr-summary">
      <ScreenTitle screen={screen} kicker="Summary" />
      <ul className="ti-summary-points">{(c.points || []).map((p, i) => <li key={i}><TiIcon name="check" size={16} /> <span>{p}</span></li>)}</ul>
      {c.cells && <div className="ti-mini-matrix" aria-label="Часи цього уроку">{TI_ASPECTS.map(a => TI_WORLDS.map(w => { const id = tiCellId(w.key, a.key); return <span key={id} className={cx('ti-mini-cell', `w-${w.key}`, c.cells.includes(id) && 'is-on')} title={tiCell(id).name} />; }))}</div>}
    </div>
  );
}
function ScreenComplete({ screen, lesson, ctx }) {
  const c = screen.content || {};
  const reduced = useReducedMotion();
  return (
    <div className="ti-scr-complete">
      {!reduced && <div className="ti-complete-burst" aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <span key={i} style={{ '--i': i }} />)}</div>}
      <div className="ti-complete-badge"><TiIcon name="award" size={40} /></div>
      <h2 className="ti-screen-title">{c.title || 'Lesson complete'}</h2>
      <p className="ti-uk">{c.text || `«${lesson.title}» пройдено. Твій інстинкт росте!`}</p>
      {ctx.stats && ctx.stats.n > 0 && <p className="ti-muted">Вправи в уроці: {ctx.stats.ok}/{ctx.stats.n} з першої спроби</p>}
      {ctx.demo && <p className="ti-demo-note">Демо / режим вчителя: завершення не записується в прогрес.</p>}
      <div className="ti-ex-actions ti-center">
        {ctx.nextLesson && <TiButton variant="primary" iconRight="next" onClick={ctx.goNextLesson}>Наступний урок</TiButton>}
        <TiButton icon="dumbbell" onClick={ctx.goGym}>Tense Gym</TiButton>
        <TiButton icon="map" onClick={ctx.goCourse}>До курсу</TiButton>
      </div>
    </div>
  );
}

const TI_SCREEN_TEMPLATES = {
  cover: { label: 'Cinematic lesson cover', C: ScreenCover },
  warmup: { label: 'Warm-up', C: ScreenWarmup },
  story: { label: 'Story introduction', C: ScreenStory },
  explain: { label: 'Visual grammar explanation', C: ScreenExplain },
  timeline: { label: 'Interactive timeline', C: ScreenTimeline },
  compare: { label: 'Tense comparison', C: ScreenCompare },
  situation: { label: 'Image-based situation', C: (p) => <ScreenWithExercise {...p} kicker="Situation" /> },
  mcq: { label: 'Multiple-choice exercise', C: (p) => <ScreenWithExercise {...p} kicker="Practice" /> },
  builder: { label: 'Sentence builder', C: (p) => <ScreenWithExercise {...p} kicker="Sentence builder" /> },
  match: { label: 'Matching exercise', C: (p) => <ScreenWithExercise {...p} kicker="Matching" /> },
  dragdrop: { label: 'Drag-and-drop exercise', C: ScreenDragDrop },
  error: { label: 'Error correction', C: (p) => <ScreenWithExercise {...p} kicker="Error correction" /> },
  listening: { label: 'Listening activity', C: ScreenListening },
  youtube: { label: 'YouTube video', C: ScreenYouTube },
  speaking: { label: 'Speaking prompt', C: (p) => <ScreenWithExercise {...p} kicker="Speaking" /> },
  dialogue: { label: 'Interactive dialogue', C: ScreenDialogue },
  reflex: { label: 'Reflex challenge', C: ScreenReflex },
  mission: { label: 'Story mission', C: ScreenMission },
  summary: { label: 'Summary', C: ScreenSummary },
  complete: { label: 'Lesson completion', C: ScreenComplete },
};

function ScreenRenderer({ screen, lesson, ctx }) {
  const T = TI_SCREEN_TEMPLATES[screen.type];
  if (!T) return <MissingMedia text={`Невідомий тип екрана: ${screen.type}`} />;
  const C = T.C;
  return <C screen={screen} lesson={lesson} ctx={ctx} />;
}

/* ═══ Порожній урок: чесна заглушка ═════════════════════════════ */
function LessonPlaceholder({ lesson, unit, go, locked }) {
  return (
    <div className="ti-placeholder">
      <div className="ti-scr-cover is-placeholder">
        <div className="ti-cover-bg ti-cover-art" aria-hidden="true"><Timeline spec={{ items: [{ t: 'repeat', from: 6, to: 96, n: 12 }] }} compact showZones={false} animate={false} /></div>
        <div className="ti-cover-body">
          <div className="ti-eyebrow">Unit {unit.number} · {unit.title} · Lesson {String(lesson.number).padStart(2, '0')}</div>
          <h1 className="ti-cover-title">{lesson.title}</h1>
          <p className="ti-cover-sub">{lesson.description}</p>
          {lesson.titleUk && <p className="ti-uk">{lesson.titleUk}</p>}
        </div>
      </div>
      <div className="ti-placeholder-grid">
        <div className="ti-panel">
          {locked
            ? <><h2 className="ti-h3"><TiIcon name="lock" size={16} /> Урок ще не відкрито</h2><p>Його відкриє вчитель — і він з’явиться тут.</p></>
            : <><h2 className="ti-h3"><TiIcon name="clock" size={16} /> Content coming soon</h2><p>Цей урок ще в розробці. Прогрес для нього не записується, доки не з’явиться контент.</p></>}
          {lesson.plannedSections && (
            <>
              <h3 className="ti-h4">Planned structure</h3>
              <ol className="ti-planned">{lesson.plannedSections.map((s, i) => <li key={i}>{s}</li>)}</ol>
            </>
          )}
        </div>
        <div className="ti-panel">
          <h2 className="ti-h3">Тим часом</h2>
          <p>Досліджуй систему часів або потренуйся на демо-вправах.</p>
          <div className="ti-stack">
            <TiButton variant="primary" icon="compass" onClick={() => go('explorer')}>Tense Explorer</TiButton>
            <TiButton icon="dumbbell" onClick={() => go('gym')}>Tense Gym</TiButton>
            <TiButton icon="map" onClick={() => go('')}>До карти курсу</TiButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ Teacher Studio ════════════════════════════════════════════ */
function useTeacherChannel(lessonId, enabled, onCmd) {
  const ch = useRef(null);
  useEffect(() => {
    if (!enabled || typeof BroadcastChannel === 'undefined') return;
    const c = new BroadcastChannel(`ti-teacher-${lessonId}`); ch.current = c;
    c.onmessage = (e) => { if (e.data && e.data.type === 'cmd') onCmd(e.data); if (e.data && e.data.type === 'hello') c.postMessage({ type: 'ping' }); };
    return () => { c.close(); ch.current = null; };
  }, [lessonId, enabled]);
  return (msg) => { if (ch.current) ch.current.postMessage(msg); };
}

function StudentPicker() {
  const key = 'inkwell-ti-roster';
  const [names, setNames] = useState(() => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; } });
  const [draft, setDraft] = useState('');
  const [picked, setPicked] = useState(null);
  const [queue, setQueue] = useState([]);
  const save = (n) => { setNames(n); try { localStorage.setItem(key, JSON.stringify(n)); } catch (e) {} };
  const loadInkwell = async () => {
    const { data, error } = await window.SB.from('profiles').select('display_name, username').eq('role', 'student');
    if (!error && data) save(Array.from(new Set([...names, ...data.map(s => s.display_name || s.username).filter(Boolean)])));
  };
  const pick = () => {
    if (!names.length) return;
    let pool = queue.length ? queue : shuffleArr(names);
    const [first, ...rest] = pool; setPicked(first); setQueue(rest);
  };
  return (
    <div className="ti-picker">
      <div className="ti-picker-row">
        <input className="ti-input is-small" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Ім’я учня" aria-label="Додати учня"
          onKeyDown={(e) => { if (e.key === 'Enter' && draft.trim()) { save([...names, draft.trim()]); setDraft(''); } }} />
        <TiButton size="sm" onClick={() => { if (draft.trim()) { save([...names, draft.trim()]); setDraft(''); } }}>Додати</TiButton>
        <TiButton size="sm" icon="users" onClick={loadInkwell}>Учні з Inkwell</TiButton>
      </div>
      {names.length > 0 && <div className="ti-picker-names">{names.map((n, i) => <span key={i} className="ti-chip">{n}<button type="button" aria-label={`Прибрати ${n}`} onClick={() => save(names.filter((_, j) => j !== i))}>×</button></span>)}</div>}
      <div className="ti-picker-row">
        <TiButton variant="primary" size="sm" icon="shuffle" onClick={pick} disabled={!names.length}>{queue.length ? 'Наступний' : 'Випадковий учень'}</TiButton>
        {picked && <strong className="ti-picked" aria-live="polite">{picked}</strong>}
      </div>
      <p className="ti-muted">Черга: кожен учень по одному разу, потім коло починається знову.</p>
    </div>
  );
}

// Структуровані нотатки вчителя: screen.teacher = { script, prompts, expected, followUps, notes }
// (старе поле screen.teacherNotes теж підтримується)
const TI_TEACHER_GROUPS = [
  ['script', 'Сценарій'], ['prompts', 'Питання для обговорення'], ['expected', 'Очікувані відповіді / ключ'],
  ['followUps', 'Додаткові питання'], ['notes', 'Нотатки'],
];
function teacherGroups(screen) {
  if (!screen) return [];
  const t = screen.teacher || {};
  const out = TI_TEACHER_GROUPS.map(([k, title]) => ({ key: k, title, items: [].concat(t[k] || []) })).filter(g => g.items.length);
  if (screen.teacherNotes) out.push({ key: 'legacy', title: 'Нотатки до екрана', items: [].concat(screen.teacherNotes) });
  return out;
}
function TeacherNotesView({ screen }) {
  const groups = teacherGroups(screen);
  if (!groups.length) return <section><h4>Нотатки до екрана</h4><p className="ti-muted">Для цього екрана нотаток немає.</p></section>;
  return groups.map(g => (
    <section key={g.key} className={cx('ti-tnotes', `is-${g.key}`)}>
      <h4>{g.title}</h4>
      <ul>{g.items.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </section>
  ));
}

function TeacherPanel({ open, setOpen, screen, sections, jumpTo, tools, setTools, onRestart, onReset, onOpenWindow, presenting }) {
  const [timer, setTimer] = useState(0);
  return (
    <aside className={cx('ti-teacher', open && 'is-open')} aria-label="Teacher Studio">
      <button type="button" className="ti-teacher-tab" onClick={() => setOpen(!open)} aria-expanded={open}>
        <TiIcon name="notes" size={16} /> Teacher {open ? '›' : '‹'}
      </button>
      {open && (
        <div className="ti-teacher-body">
          <p className="ti-teacher-warn"><TiIcon name="eye" size={14} /> {presenting
            ? 'Ця панель видима на спільному екрані! Сховай її (Teacher ›) або відкрий окреме вікно вчителя.'
            : 'Панель на цій сторінці бачать усі, хто бачить екран. Для прихованих нотаток під час Zoom — «Вікно вчителя» і демонструй лише вікно уроку.'}</p>
          <TeacherNotesView screen={screen} />
          <section className="ti-teacher-toggles">
            <h4>Показ</h4>
            <label className="ti-switch"><input type="checkbox" checked={tools.reveal} onChange={(e) => setTools({ ...tools, reveal: e.target.checked })} /> Показати відповіді</label>
            <label className="ti-switch"><input type="checkbox" checked={!tools.hideExpl} onChange={(e) => setTools({ ...tools, hideExpl: !e.target.checked })} /> Показувати пояснення</label>
            <div className="ti-stack-row">
              <TiButton size="sm" icon="refresh" onClick={onRestart}>Скинути активність</TiButton>
              <TiButton size="sm" icon="replay" onClick={onReset}>Скинути демо</TiButton>
            </div>
          </section>
          {sections.length > 1 && (
            <section><h4>Перейти до розділу</h4>
              <div className="ti-stack-row">{sections.map(s => <button key={s.index} type="button" className="ti-chip" onClick={() => jumpTo(s.index)}>{s.title}</button>)}</div>
            </section>
          )}
          <section><h4>Таймер говоріння</h4>
            <div className="ti-seg is-small">{[30, 60, 90].map(s => <button key={s} type="button" className={cx('ti-seg-btn', timer === s && 'is-on')} onClick={() => setTimer(timer === s ? 0 : s)}>{s}s</button>)}</div>
            {timer > 0 && <SpeakingTimer key={timer} seconds={timer} autoStart />}
          </section>
          <section><h4>Учні</h4><StudentPicker /></section>
          <TiButton size="sm" icon="external" onClick={onOpenWindow}>Вікно вчителя (нотатки окремо)</TiButton>
        </div>
      )}
    </aside>
  );
}

// Окреме вікно вчителя: нотатки й відповіді не потрапляють на спільний екран
// (якщо в Zoom демонструється лише вікно/вкладка уроку, а не весь екран).
function TeacherWindow({ lessonId, lessonMeta, content: given }) {
  const [state, setState] = useState(null);
  const [connected, setConnected] = useState(false);
  const [content, setContent] = useState(given || null);
  const ch = useRef(null);
  useEffect(() => {
    if (given || !lessonMeta) return;
    let alive = true;
    loadLessonContent(lessonMeta).then(c => alive && setContent(c)).catch(() => {});
    return () => { alive = false; };
  }, [lessonId]);
  useEffect(() => {
    if (typeof BroadcastChannel === 'undefined') return;
    const c = new BroadcastChannel(`ti-teacher-${lessonId}`); ch.current = c;
    c.onmessage = (e) => { if (e.data && e.data.type === 'state') { setState(e.data); setConnected(true); } if (e.data && e.data.type === 'ping') setConnected(true); };
    c.postMessage({ type: 'hello' }); c.postMessage({ type: 'cmd', action: 'sync' });
    return () => c.close();
  }, [lessonId]);
  const send = (action) => ch.current && ch.current.postMessage({ type: 'cmd', action });
  const screen = content && state ? content.screens[state.index] : null;
  return (
    <div className="ti-twin">
      <h1 className="ti-h2">Teacher window</h1>
      {typeof BroadcastChannel === 'undefined' && <p>Цей браузер не підтримує зв’язок між вікнами.</p>}
      {!connected && <p className="ti-muted">Чекаю на урок… Відкрий урок у Teacher Mode в іншій вкладці чи вікні цього ж браузера.</p>}
      {screen && (
        <>
          <div className="ti-eyebrow">Екран {state.index + 1} / {state.total} · {TI_SCREEN_TEMPLATES[screen.type] ? TI_SCREEN_TEMPLATES[screen.type].label : screen.type}</div>
          <h2 className="ti-h3">{screen.navTitle || screen.title || '—'}</h2>
          <div className="ti-panel ti-twin-notes"><TeacherNotesView screen={screen} /></div>
          {screen.exercise && <section className="ti-panel"><h4>Відповідь</h4><p>{tiAnswerText(screen.exercise) || '—'}</p>{screen.exercise.explanation && <p className="ti-muted">{screen.exercise.explanation}</p>}</section>}
        </>
      )}
      <div className="ti-ex-actions">
        <TiButton icon="left" onClick={() => send('prev')}>Назад</TiButton>
        <TiButton variant="primary" iconRight="right" onClick={() => send('next')}>Далі</TiButton>
        <TiButton icon="eye" onClick={() => send('toggle-reveal')}>Відповіді на екрані: {state && state.reveal ? 'показано' : 'приховано'}</TiButton>
        <TiButton icon="refresh" onClick={() => send('reset-activity')}>Скинути активність</TiButton>
      </div>
    </div>
  );
}

/* ── Український переклад: глобальний перемикач, англійська лишається основною ── */
const TI_UK_KEY = 'inkwell-ti-uk';
function Uk({ show, children, className, block }) {
  if (!show || !children) return null;
  return <span className={cx('ti-uk ti-uk-line', block && 'is-block', className)} lang="uk">{children}</span>;
}

/* ═══ Програвач уроку ═══════════════════════════════════════════
 * Додатково для уроків із власними інтерактивними екранами:
 *  • ctx.sstate / ctx.setS — стан поточного екрана (зберігається в прогресі
 *    учня як `lstate:<lessonId>`; у режимі вчителя — лише в пам'яті);
 *  • content.completionCriteria.explicit — урок завершується не «дійшов до
 *    кінця», а викликом ctx.completeLesson() (умови перевіряє сам екран);
 *  • screen.optional — додаткові екрани після основних (не входять у прогрес).
 * ═══════════════════════════════════════════════════════════════ */
function LessonPlayer({ lesson, unit, content, startIndex, onIndex, isTeacher, go, nextLesson, upcomingLesson, isDemo }) {
  const ti = useTi();
  const screens = content.screens || [];
  const coreCount = screens.filter(s => !s.optional).length || screens.length;
  const [index, setIndex] = useState(() => clamp(startIndex || 0, 0, Math.max(0, screens.length - 1)));
  const [focus, setFocus] = useState(false);
  const [presenting, setPresenting] = useState(false);
  const [teacherMode, setTeacherMode] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [tools, setTools] = useState({ reveal: false, hideExpl: false });
  const [exNonce, setExNonce] = useState(0);
  const [stats, setStats] = useState({ n: 0, ok: 0 });
  const [showUk, setShowUkRaw] = useState(() => { try { return localStorage.getItem(TI_UK_KEY) === '1'; } catch (e) { return false; } });
  const setShowUk = (v) => { setShowUkRaw(v); try { localStorage.setItem(TI_UK_KEY, v ? '1' : '0'); } catch (e) {} };
  const rootRef = useRef(null);
  const screen = screens[index];
  const persist = !isDemo && ti && ti.mode !== 'demo';
  const explicit = !!(content.completionCriteria && content.completionCriteria.explicit);
  const isT = isTeacher && teacherMode;

  // Стан екранів уроку
  const stateKey = `lstate:${lesson.id}`;
  const [memState, setMemState] = useState({});
  const [memDone, setMemDone] = useState(false);
  const lstate = persist ? (ti.get(stateKey) || {}) : memState;
  const tiUpdate = ti && ti.update;
  const setLState = useCallback((sid, fn) => {
    const apply = (s) => { const cur = s || {}; const prev = cur[sid] || {}; return { ...cur, [sid]: typeof fn === 'function' ? fn(prev) : { ...prev, ...fn } }; };
    if (persist) tiUpdate(stateKey, apply); else setMemState(apply);
  }, [persist, tiUpdate, stateKey]);
  const resetScreenState = useCallback((sid) => {
    const drop = (s) => { const n = { ...(s || {}) }; delete n[sid]; return n; };
    if (persist) tiUpdate(stateKey, drop); else setMemState(drop);
  }, [persist, tiUpdate, stateKey]);
  const lessonProgress = (persist && ti.get(`lesson:${lesson.id}`)) || {};
  const lessonCompleted = persist ? !!lessonProgress.completedAt : memDone;
  const completeLesson = useCallback(() => {
    setMemDone(true);
    if (persist) tiUpdate(`lesson:${lesson.id}`, (p) => (p.completedAt ? p : { ...p, completedAt: new Date().toISOString() }));
  }, [persist, tiUpdate, lesson.id]);

  // Розділи: з поля screen.section
  const sections = useMemo(() => {
    const out = []; screens.forEach((s, i) => { const t = s.section || (s.type === 'cover' ? 'Intro' : null); if (t && !out.some(o => o.title === t)) out.push({ title: t, index: i }); });
    return out;
  }, [content]);
  const currentSection = useMemo(() => { let cur = null; sections.forEach(s => { if (s.index <= index) cur = s; }); return cur; }, [sections, index]);

  // Прогрес: позиція, відвідані екрани, завершення (лише учень і лише урок із контентом)
  useEffect(() => {
    onIndex && onIndex(index);
    if (screen && !((lstate._nav || {}).visited || []).includes(screen.id)) setLState('_nav', (p) => ({ ...p, visited: [...(p.visited || []), screen.id] }));
    if (!persist) return;
    const last = index >= coreCount - 1;
    ti.update(`lesson:${lesson.id}`, (p) => ({
      ...p, screen: index, total: coreCount, maxScreen: Math.max(p.maxScreen || 0, Math.min(index, coreCount - 1)),
      startedAt: p.startedAt || new Date().toISOString(),
      completedAt: p.completedAt || (!explicit && last ? new Date().toISOString() : undefined),
    }));
    ti.update('course', (c) => ({ ...c, lastLesson: lesson.id, lastAt: new Date().toISOString() }));
  }, [index]);

  const go2 = useCallback((i) => { setIndex(clamp(i, 0, screens.length - 1)); setExNonce(n => n + 1); setOutlineOpen(false); }, [screens.length]);
  const prev = () => go2(index - 1), next = () => go2(index + 1);

  // Клавіатура: ← → (не в полях вводу й не всередині власних радіогруп/вкладок), Esc — вийти з Focus
  useEffect(() => {
    const onKey = (e) => {
      if (e.defaultPrevented) return;
      const tag = (e.target.tagName || '').toLowerCase();
      const textInput = tag === 'input' && !['checkbox', 'radio', 'button', 'range'].includes((e.target.type || '').toLowerCase());
      if (textInput || tag === 'textarea' || tag === 'select' || e.target.isContentEditable) return;
      const local = e.target.closest && e.target.closest('[role="radiogroup"],[role="tablist"],[data-ti-keys]');
      if (e.key === 'Escape') { setOutlineOpen(false); if ((focus || presenting) && !document.fullscreenElement) { setFocus(false); setPresenting(false); } return; }
      if (local) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); setIndex(i => clamp(i + 1, 0, screens.length - 1)); setExNonce(n => n + 1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); setIndex(i => clamp(i - 1, 0, screens.length - 1)); setExNonce(n => n + 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [screens.length, focus, presenting]);

  // Focus / Presentation: ховаємо навігацію Inkwell (клас на body, стилі — у ti.css)
  useEffect(() => {
    document.body.classList.toggle('ti-focus', focus || presenting);
    return () => document.body.classList.remove('ti-focus');
  }, [focus, presenting]);
  useEffect(() => {
    const onFs = () => { if (!document.fullscreenElement) setPresenting(false); };
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);
  const toggleFullscreen = () => {
    const el = document.documentElement;
    if (document.fullscreenElement) document.exitFullscreen && document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  };
  const togglePresent = () => {
    const nextVal = !presenting; setPresenting(nextVal);
    if (nextVal) { setPanelOpen(false); if (!document.fullscreenElement && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {}); }
    else if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
  };

  // Вікно вчителя (BroadcastChannel)
  const post = useTeacherChannel(lesson.id, isT, (cmd) => {
    if (cmd.action === 'next') { setIndex(i => clamp(i + 1, 0, screens.length - 1)); setExNonce(n => n + 1); }
    if (cmd.action === 'prev') { setIndex(i => clamp(i - 1, 0, screens.length - 1)); setExNonce(n => n + 1); }
    if (cmd.action === 'toggle-reveal') setTools(t => ({ ...t, reveal: !t.reveal }));
    if (cmd.action === 'reset-activity') restartActivityRef.current();
    if (cmd.action === 'sync') syncRef.current && syncRef.current();
  });
  const syncRef = useRef(null);
  syncRef.current = () => post({ type: 'state', index, total: screens.length, reveal: tools.reveal });
  useEffect(() => { post({ type: 'state', index, total: screens.length, reveal: tools.reveal }); }, [index, tools.reveal, teacherMode]);
  const restartActivity = () => { if (screen) resetScreenState(screen.id); setExNonce(n => n + 1); };
  const restartActivityRef = useRef(restartActivity); restartActivityRef.current = restartActivity;

  const onResult = (r) => {
    setStats(s => ({ n: s.n + (r.self ? 0 : 1), ok: s.ok + (r.correct && !r.self ? 1 : 0) }));
    if (!persist) return;
    const ex = r.exercise || {}; const t = ex.tags || {};
    ti.recordAttempt({ itemId: `lesson:${lesson.id}:${screen.id}:${ex.id || ''}`, correct: !!r.correct, score: r.score, ms: r.ms, timed: !!r.timed, skill: r.self ? 'natural' : (t.skill || 'recognition'), selfRating: r.selfRating, world: t.world, aspect: t.aspect, pair: t.pair });
  };
  const sid = screen ? screen.id : 'x';
  const ctx = {
    exKey: `${sid}:${exNonce}`, onResult,
    revealAnswers: isT && tools.reveal,
    hideExplanation: isT && tools.hideExpl,
    stats, demo: !persist, nextLesson, upcomingLesson,
    goNextLesson: () => nextLesson && go(`lesson/${nextLesson.id}`), goGym: () => go('gym'), goCourse: () => go(''),
    // для інтерактивних екранів
    index, screens, coreCount, next, prev, goTo: go2,
    goToScreen: (id) => { const i = screens.findIndex(s => s.id === id); if (i >= 0) go2(i); },
    lstate, sstate: lstate[sid] || {}, setS: (fn) => setLState(sid, fn), setLState, resetScreen: () => resetScreenState(sid),
    showUk, setShowUk, teacherMode: isT, isTeacher, persist,
    completeLesson, lessonCompleted, visited: (lstate._nav || {}).visited || [],
  };
  if (!screen) return <LessonPlaceholder lesson={lesson} unit={unit} go={go} />;
  const coreIdx = Math.min(index, coreCount - 1);
  const pct = coreCount > 1 ? (coreIdx / (coreCount - 1)) * 100 : 100;
  const doneOf = (s) => !!(lstate[s.id] && lstate[s.id].done);
  const visitedOf = (s) => ctx.visited.includes(s.id);
  const screenName = (s) => s.navTitle || s.title || (TI_SCREEN_TEMPLATES[s.type] || {}).label || s.type;

  return (
    <div ref={rootRef} className={cx('ti-player', focus && 'is-focus', presenting && 'is-present', isT && 'is-teacher')}>
      <div className="ti-topbar" role="toolbar" aria-label="Керування уроком">
        <TiButton icon="back" onClick={() => go('')} className="ti-topbar-back" aria-label="Повернутися до курсу">{focus || presenting ? '' : 'Course'}</TiButton>
        <div className="ti-topbar-title">
          <span className="ti-topbar-crumb">{isDemo ? 'Tense Instinct' : `Tense Instinct · Unit ${unit.number}`}</span>
          <span className="ti-topbar-lesson">{isDemo ? 'Component gallery' : `${String(lesson.number).padStart(2, '0')} · ${lesson.title}`}</span>
          {currentSection && <span className="ti-topbar-section">{currentSection.title}</span>}
        </div>
        <div className="ti-topbar-progress" role="progressbar" aria-label="Прогрес уроку" aria-valuemin={1} aria-valuemax={coreCount} aria-valuenow={coreIdx + 1}><span style={{ width: `${pct}%` }} /></div>
        <div className="ti-topbar-tools">
          {isTeacher
            ? <div className="ti-seg is-small ti-mode-seg" role="radiogroup" aria-label="Режим навчання">
                <button type="button" role="radio" aria-checked={!teacherMode} className={cx('ti-seg-btn', !teacherMode && 'is-on')} onClick={() => setTeacherMode(false)}>Self-Study</button>
                <button type="button" role="radio" aria-checked={teacherMode} className={cx('ti-seg-btn', teacherMode && 'is-on')} onClick={() => setTeacherMode(true)}>Teacher</button>
              </div>
            : <span className="ti-chip ti-mode-chip" title="Режим самостійного навчання">Self-Study</span>}
          <TiButton icon="layers" onClick={() => setOutlineOpen(o => !o)} aria-expanded={outlineOpen} aria-controls="ti-outline" title="План уроку">Outline</TiButton>
          <TiButton onClick={() => setShowUk(!showUk)} aria-pressed={showUk} title="Український переклад і пояснення" aria-label="Український переклад" className="ti-uk-toggle"><b className="ti-uk-flag" aria-hidden="true">UA</b></TiButton>
          <TiButton icon="focus" onClick={() => setFocus(f => !f)} aria-pressed={focus} title="Focus Mode">{focus ? 'Exit focus' : 'Focus'}</TiButton>
          {isT && <TiButton icon="monitor" onClick={togglePresent} aria-pressed={presenting}>{presenting ? 'Stop' : 'Present'}</TiButton>}
          <TiButton icon={document.fullscreenElement ? 'compress' : 'expand'} onClick={toggleFullscreen} aria-label="На весь екран" title="На весь екран" className="ti-fs-btn" />
        </div>
      </div>

      {outlineOpen && (
        <nav id="ti-outline" className="ti-outline" aria-label="План уроку">
          <div className="ti-outline-head"><strong>Lesson outline</strong><TiButton size="sm" icon="x" onClick={() => setOutlineOpen(false)} aria-label="Закрити план" /></div>
          <ol>
            {screens.map((s, i) => (
              <li key={s.id}>
                <button type="button" className={cx('ti-outline-item', i === index && 'is-on', s.optional && 'is-optional')} onClick={() => go2(i)} aria-current={i === index ? 'step' : undefined}>
                  <span className="ti-outline-n">{s.optional ? '+' : String(i + 1).padStart(2, '0')}</span>
                  <span className="ti-outline-t">{screenName(s)}{s.minutes ? <small> · {s.minutes} min</small> : null}</span>
                  <span className="ti-outline-st">{doneOf(s) ? <><TiIcon name="check" size={14} /> done</> : visitedOf(s) ? 'seen' : ''}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="ti-workspace">
        <main className={cx('ti-canvas', `scr-${screen.type}`)} aria-label={`Екран ${index + 1} з ${screens.length}`}>
          <p className="ti-sr-only" aria-live="polite">{`Screen ${index + 1}: ${screenName(screen)}`}</p>
          <div className="ti-canvas-inner" key={index}>
            <ScreenRenderer screen={screen} lesson={lesson} ctx={ctx} />
          </div>
        </main>
        {isT && (
          <TeacherPanel open={panelOpen} setOpen={setPanelOpen} screen={screen} sections={sections} jumpTo={go2} tools={tools} setTools={setTools} presenting={presenting}
            onRestart={restartActivity}
            onReset={() => { ti && ti.resetDemo(); setMemState({}); setMemDone(false); setStats({ n: 0, ok: 0 }); setTools({ reveal: false, hideExpl: false }); go2(0); }}
            onOpenWindow={() => window.open(`${window.location.pathname}${window.location.search}#/${'tense-instinct'}/teacher/${lesson.id}`, `ti-teacher-${lesson.id}`, 'width=520,height=760')} />
        )}
      </div>

      <nav className="ti-bottombar" aria-label="Навігація екранами">
        <TiButton icon="left" onClick={prev} disabled={index === 0}>Previous</TiButton>
        <div className="ti-dots" aria-hidden="true">
          {sections.length > 1
            ? sections.map((s, i) => { const end = i + 1 < sections.length ? sections[i + 1].index : screens.length; const on = index >= s.index && index < end; const done = index >= end; return <span key={s.index} className={cx('ti-dot is-section', on && 'is-on', done && 'is-done', screens[s.index].optional && 'is-optional')} style={{ flex: end - s.index }} />; })
            : screens.map((s, i) => <span key={i} className={cx('ti-dot', i === index && 'is-on', i < index && 'is-done')} />)}
        </div>
        <span className="ti-counter">{screen.optional ? 'Extra' : `${coreIdx + 1} / ${coreCount}`}</span>
        <TiButton variant="primary" iconRight="right" onClick={next} disabled={index >= screens.length - 1}>{index === coreCount - 1 && screens.length > coreCount ? 'Extras' : 'Next'}</TiButton>
      </nav>
    </div>
  );
}

/* ═══ ДЕМО-урок для галереї компонентів (не навчальний контент) ═══ */
const TI_DEMO_LESSON = {
  id: 'gallery', number: 0, title: 'Component gallery', description: 'Every reusable screen template with sample data.',
  screens: [
    { id: 'd1', type: 'cover', section: 'Intro', content: { kicker: 'Template 1 · Cinematic cover', title: 'Component Gallery', subtitle: 'Each screen shows one reusable template with sample data. This is not lesson content.', objectives: ['See every screen type', 'Test interactions', 'Try Teacher Mode'] }, teacherNotes: 'Нотатки вчителя видно лише в Teacher Mode або у вікні вчителя.' },
    { id: 'd2', type: 'warmup', section: 'Intro', title: 'Template 2 · Warm-up', content: { questions: [{ en: 'What did you do last weekend?', uk: 'Що ти робив(-ла) минулих вихідних?' }, { en: 'What are you doing this week that’s different?', uk: 'Що цього тижня в тебе інакше, ніж зазвичай?' }] }, settings: { timer: 60 } },
    { id: 'd3', type: 'story', section: 'Intro', title: 'Template 3 · Story introduction', media: { src: '', alt: 'Story scene (image not added yet)' }, content: { scene: 'Sample scene', paragraphs: ['Sample story text goes here. Missing images show a clear placeholder instead of breaking the layout.'], question: 'What is the situation?' } },
    { id: 'd4', type: 'explain', section: 'Understand', title: 'Template 4 · Visual explanation', content: { cellId: 'present-perfect', points: [{ title: 'Seen from now', text: 'The time of the action is not the focus.', example: "I've been to Rome twice." }, { title: 'Open period', text: 'The period can still continue.', example: "I've had three coffees today." }] } },
    { id: 'd5', type: 'timeline', section: 'Understand', title: 'Template 5 · Interactive timeline', content: { steps: [
      { short: 'Past Simple', label: 'A finished moment', spec: tiCell('past-simple').timeline, sentence: 'I met her in 2022.' },
      { short: 'Present Perfect', label: 'Seen from now', spec: tiCell('present-perfect').timeline, sentence: "I've met her before." },
      { short: 'Past Perfect', label: 'Before another past moment', spec: tiCell('past-perfect').timeline, sentence: 'I had met her before the party.' },
    ] } },
    { id: 'd6', type: 'compare', section: 'Understand', title: 'Template 6 · Tense comparison', content: { a: 'past-simple', b: 'present-perfect', examples: ['I lost my keys yesterday.', "I've lost my keys."] } },
    { id: 'd7', type: 'situation', section: 'Practice', title: 'Template 7 · Image-based situation', media: { src: '', alt: 'Situation image (not added yet)', ratio: '16/9' }, exercise: TI_GYM_BANK.find(e => e.id === 'g-keys'), teacherNotes: 'Обидві відповіді a та b приймаються — обговоріть різницю BrE / AmE.' },
    { id: 'd8', type: 'mcq', section: 'Practice', title: 'Template 8 · Multiple choice', exercise: TI_GYM_BANK.find(e => e.id === 'g-shower') },
    { id: 'd9', type: 'builder', section: 'Practice', title: 'Template 9 · Sentence builder', exercise: TI_GYM_BANK.find(e => e.id === 'g-ord-dinner') },
    { id: 'd10', type: 'match', section: 'Practice', title: 'Template 10 · Matching', exercise: { id: 'demo-match', type: 'match', prompt: 'Match the sentence to its meaning.', partial: true,
      pairs: [{ left: "I've lived here for years.", right: 'still true now' }, { left: 'I lived there for years.', right: 'finished period' }, { left: "I'm living here this month.", right: 'temporary' }],
      explanation: 'Same verb, three perspectives.', tags: { skill: 'understanding' } } },
    { id: 'd11', type: 'dragdrop', section: 'Practice', title: 'Template 11 · Drag & drop', content: { prompt: 'Sort the sentences: finished time or connected to now?', buckets: ['Finished time', 'Connected to now'],
      items: [{ text: 'I saw it yesterday.', bucket: 0 }, { text: "I've seen it twice.", bucket: 1 }, { text: 'She left in 2020.', bucket: 0 }, { text: "She's just left.", bucket: 1 }], explanation: 'Finished time → Past Simple. Connection to now → Present Perfect.' } },
    { id: 'd12', type: 'error', section: 'Practice', title: 'Template 12 · Error correction', exercise: TI_GYM_BANK.find(e => e.id === 'g-film') },
    { id: 'd13', type: 'listening', section: 'Media', title: 'Template 13 · Listening', content: { instructions: 'Audio not added yet — the player shows a safe placeholder.' }, exercise: { id: 'demo-listen', type: 'listening', prompt: 'What was the speaker doing?', options: [{ id: 'a', text: 'Cooking' }, { id: 'b', text: 'Driving' }], answer: ['a'], audio: { src: '' }, tags: { skill: 'recognition' } } },
    { id: 'd14', type: 'youtube', section: 'Media', title: 'Template 14 · YouTube', content: { instructions: 'Paste any YouTube link or ID into media.url. No autoplay; privacy-enhanced embed.' }, media: { url: '', title: 'Video' } },
    { id: 'd15', type: 'speaking', section: 'Speak', title: 'Template 15 · Speaking prompt', exercise: TI_GYM_BANK.find(e => e.id === 'g-sp-never'), teacherNotes: ['Дайте 20 с на підготовку.', 'Попросіть двох учнів поставити follow-up питання.'] },
    { id: 'd16', type: 'dialogue', section: 'Speak', title: 'Template 16 · Interactive dialogue', content: { lines: [
      { who: 'Sam', text: 'Hey! You look tired.' },
      { who: 'You', me: true, choice: { options: [{ id: 'a', text: "Yeah, I've been studying all night." }, { id: 'b', text: 'Yeah, I study all night.' }], answer: ['a'], explanation: 'Visible result of a recent long activity → Present Perfect Continuous.', tags: { skill: 'recognition', world: 'present', aspect: 'perfectContinuous' } } },
      { who: 'Sam', text: 'For the exam tomorrow?' },
    ] } },
    { id: 'd17', type: 'reflex', section: 'Speak', title: 'Template 17 · Reflex challenge', content: { seconds: 0, items: [TI_GYM_BANK.find(e => e.id === 'g-temp'), TI_GYM_BANK.find(e => e.id === 'g-call6')] } },
    { id: 'd18', type: 'mission', section: 'Speak', title: 'Template 18 · Story mission', content: { brief: 'Tell the story of a strange morning in pairs.', tasks: ['Set the scene (Past Continuous)', 'Say what happened (Past Simple)', 'Explain what had happened before (Past Perfect)'], twist: 'Twist: it all happened on your first day at a new school!' } },
    { id: 'd19', type: 'summary', section: 'Finish', title: 'Template 19 · Summary', content: { points: ['Simple shows the whole action.', 'Continuous shows it in progress.', 'Perfect looks back from a reference point.'], cells: ['past-simple', 'present-perfect', 'past-perfect'] } },
    { id: 'd20', type: 'complete', section: 'Finish', content: { title: 'Template 20 · Lesson completion', text: 'Completion screen — in real lessons this records completion for students.' } },
  ],
};
