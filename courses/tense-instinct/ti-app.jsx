/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · app shell
 * Роутер курсу (#/tense-instinct/...), лендинг, roadmap, прогрес,
 * інструменти вчителя. Реєструє модуль у window.INKWELL.modules.
 * Маршрути:  ''  · lesson/<id>[/<screen>] · explorer[/<cell>|/compare/<a>/<b>]
 *            gym[/<mode>] · gallery[/<screen>] · teacher/<lessonId>
 * ═══════════════════════════════════════════════════════════════ */

const TI_UNIT_THEMES = { indigo: '#6366F1', blue: '#38BDF8', violet: '#A78BFA', teal: '#2DD4BF', gold: '#F5C76B', rose: '#F472B6' };

function useCourseRouter(courseId, initialPath, onExit) {
  const [path, setPath] = useState(initialPath || '');
  const prefix = `#/${courseId}`;
  const hashFor = (p) => (p ? `${prefix}/${p}` : prefix);
  useEffect(() => {
    const target = hashFor(initialPath || '');
    try {
      if ((window.location.hash || '').startsWith(prefix)) history.replaceState(null, '', target);
      else history.pushState(null, '', target);
    } catch (e) {}
    const onPop = () => {
      const h = window.location.hash || '';
      if (h === prefix || h.startsWith(prefix + '/')) setPath(decodeURIComponent(h.slice(prefix.length + 1)));
      else onExit();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = useCallback((p, opts = {}) => {
    setPath(p);
    const h = hashFor(p);
    if (window.location.hash !== h) { try { history[opts.replace ? 'replaceState' : 'pushState'](null, '', h); } catch (e) {} }
  }, []);
  return [path, navigate];
}

function TiRoot({ course, initialPath, session, isTeacher, canSeeLesson, isLessonCompleted, theme, inkwell }) {
  const ti = useTiProgress(session, isTeacher);
  const [path, navigate] = useCourseRouter(course.id, initialPath, () => inkwell.goBack());
  const seg = path.split('/').filter(Boolean);
  const top = seg[0] || '';
  const allLessons = useMemo(() => course.units.flatMap(u => u.lessons.map(l => ({ lesson: l, unit: u }))), [course]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [top, top === 'lesson' ? seg[1] : '']);

  const lessonState = (l) => {
    const locked = !isTeacher && !canSeeLesson(course.id, l.id);
    const p = ti.get(`lesson:${l.id}`) || {};
    const has = lessonHasContent(l);
    const completed = isLessonCompleted(course.id, l.id) || (has && !!p.completedAt);
    const started = has && !!p.startedAt;
    return { locked, has, completed, inProgress: started && !completed, progress: p };
  };
  const ctx = { course, isTeacher, canSeeLesson, lessonState, allLessons, navigate, inkwell, session };

  let body;
  if (top === 'lesson') body = <LessonRoute key={seg[1]} lessonId={seg[1]} screenNo={seg[2]} ctx={ctx} />;
  else if (top === 'explorer') body = <TenseExplorer key="explorer" initial={seg.slice(1).join('/')} navigate={navigate} inkwell={inkwell} />;
  else if (top === 'gym') body = <TenseGym key="gym" initial={seg.slice(1).join('/')} navigate={navigate} />;
  else if (top === 'gallery') body = <LessonPlayer key="gallery" lesson={TI_DEMO_LESSON} unit={{ number: 0, title: 'Gallery' }} content={TI_DEMO_LESSON} isDemo isTeacher={isTeacher}
    startIndex={Math.max(0, (parseInt(seg[1], 10) || 1) - 1)} onIndex={(i) => navigate(`gallery/${i + 1}`, { replace: true })} go={navigate} />;
  else if (top === 'teacher' && isTeacher) body = <TeacherWindow lessonId={seg[1]} getLesson={() => (seg[1] === 'gallery' ? TI_DEMO_LESSON : (window.INKWELL.tiLessons || {})[seg[1]])} />;
  else body = <CourseLanding ctx={ctx} />;

  const inSubpage = top && top !== 'lesson' && top !== 'gallery' && top !== 'teacher';
  return (
    <TiCtx.Provider value={ti}>
      <div className={cx('ti-root', theme === 'dark' ? 'ti-dark' : 'ti-light', `ti-at-${top || 'home'}`)}>
        <div className="ti-bg" aria-hidden="true"><span className="ti-bg-a" /><span className="ti-bg-b" /></div>
        {inSubpage && (
          <div className="ti-subnav">
            <TiButton icon="back" onClick={() => navigate('')}>Tense Instinct</TiButton>
            <div className="ti-subnav-links">
              <button type="button" className={cx('ti-subnav-link', top === 'explorer' && 'is-on')} onClick={() => navigate('explorer')}><TiIcon name="compass" size={15} /> Explorer</button>
              <button type="button" className={cx('ti-subnav-link', top === 'gym' && 'is-on')} onClick={() => navigate('gym')}><TiIcon name="dumbbell" size={15} /> Gym</button>
            </div>
          </div>
        )}
        <div className="ti-page">{body}</div>
      </div>
    </TiCtx.Provider>
  );
}

/* ── Маршрут уроку: доступ → контент → програвач / заглушка ── */
function LessonRoute({ lessonId, screenNo, ctx }) {
  const found = ctx.allLessons.find(x => x.lesson.id === lessonId);
  const [state, setState] = useState({ status: 'loading', content: null, error: null });
  const lesson = found && found.lesson;
  const st = lesson ? ctx.lessonState(lesson) : null;
  useEffect(() => {
    if (!lesson || st.locked || !st.has) { setState({ status: 'empty' }); return; }
    let alive = true;
    loadLessonContent(lesson).then(c => alive && setState({ status: c ? 'ready' : 'empty', content: c }))
      .catch(err => alive && setState({ status: 'error', error: err.message || String(err) }));
    return () => { alive = false; };
  }, [lessonId]);
  if (!found) return <div className="ti-panel"><h2 className="ti-h3">Урок не знайдено</h2><TiButton icon="map" onClick={() => ctx.navigate('')}>До курсу</TiButton></div>;
  const idx = ctx.allLessons.indexOf(found);
  const nextFound = ctx.allLessons[idx + 1];
  if (state.status === 'loading') return <div className="ti-loading" role="status"><span className="ti-spinner" /> Завантажую урок…</div>;
  if (state.status === 'error') return <div className="ti-panel"><h2 className="ti-h3">Не вдалося завантажити урок</h2><p>{state.error}</p><TiButton onClick={() => ctx.navigate('')}>До курсу</TiButton></div>;
  if (state.status === 'empty' || !state.content || !(state.content.screens || []).length) return <LessonPlaceholder lesson={lesson} unit={found.unit} go={ctx.navigate} locked={st.locked} />;
  const saved = (st.progress && st.progress.screen) || 0;
  const start = screenNo ? Math.max(0, parseInt(screenNo, 10) - 1) : saved;
  return <LessonPlayer lesson={lesson} unit={found.unit} content={state.content} startIndex={start} isTeacher={ctx.isTeacher}
    onIndex={(i) => ctx.navigate(`lesson/${lesson.id}/${i + 1}`, { replace: true })} go={ctx.navigate}
    nextLesson={nextFound && !ctx.lessonState(nextFound.lesson).locked ? nextFound.lesson : null} />;
}

/* ═══ Лендинг курсу ════════════════════════════════════════════ */
function CourseLanding({ ctx }) {
  const ti = useTi();
  const { course, navigate, isTeacher, allLessons, lessonState } = ctx;
  const roadmapRef = useRef(null);
  const last = (ti.get('course') || {}).lastLesson;
  const lastFound = last && allLessons.find(x => x.lesson.id === last);
  const canContinue = !isTeacher && lastFound && lessonHasContent(lastFound.lesson) && !lessonState(lastFound.lesson).completed && !lessonState(lastFound.lesson).locked;
  const firstOpen = allLessons.find(x => !lessonState(x.lesson).locked) || allLessons[0];
  const totalLessons = allLessons.length;

  return (
    <div className="ti-landing">
      <section className="ti-hero">
        <div className="ti-hero-text">
          <div className="ti-eyebrow"><TiIcon name="clock" size={15} /> Inkwell · Interactive course</div>
          <h1 className="ti-hero-title">TENSE<br />INSTINCT</h1>
          <p className="ti-hero-sub">{course.subtitle}</p>
          <p className="ti-hero-desc">English tenses aren’t twelve separate mysteries. Discover the system behind them — and learn to use it naturally.</p>
          <p className="ti-hero-tag">{course.tagline}</p>
          <div className="ti-hero-actions">
            {canContinue
              ? <TiButton variant="primary" size="lg" icon="play" onClick={() => navigate(`lesson/${last}`)}>Continue Learning</TiButton>
              : <TiButton variant="primary" size="lg" icon="play" onClick={() => navigate(`lesson/${firstOpen.lesson.id}`)}>Start Course</TiButton>}
            {canContinue && <TiButton size="lg" onClick={() => navigate(`lesson/${firstOpen.lesson.id}`)}>Start Course</TiButton>}
            <TiButton size="lg" icon="map" onClick={() => roadmapRef.current && roadmapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Explore the Course</TiButton>
          </div>
          <div className="ti-hero-actions is-secondary">
            <TiButton icon="compass" onClick={() => navigate('explorer')}>Open Tense Explorer</TiButton>
            <TiButton icon="dumbbell" onClick={() => navigate('gym')}>Open Tense Gym</TiButton>
          </div>
        </div>
        <HeroTimeVisual onPick={(id) => navigate(`explorer/${id}`)} />
      </section>

      <ul className="ti-facts" aria-label="Про курс">
        <li><strong>{course.levelLabel}</strong><span>Level</span></li>
        <li><strong>{course.ageLabel}</strong><span>Audience</span></li>
        <li><strong>{totalLessons}</strong><span>Lessons</span></li>
        <li><strong>{course.units.length}</strong><span>Units</span></li>
        <li><strong>Self-Study</strong><span>& Teacher Mode</span></li>
      </ul>

      <section className="ti-block">
        <div className="ti-block-head"><div className="ti-eyebrow">01 · Your learning journey</div><h2 className="ti-h2">Understand → Compare → React</h2></div>
        <div className="ti-journey">
          {[
            { n: 'I', t: 'See the system', d: '3 time worlds × 4 ways to look at an action.', u: 'Units 1–3', uk: 'Зрозумій систему' },
            { n: 'II', t: 'Win the battles', d: 'Compare the pairs that are easy to mix up.', u: 'Unit 4', uk: 'Порівнюй пари' },
            { n: 'III', t: 'Build the reflex', d: 'React fast, tell stories, speak naturally.', u: 'Units 5–6', uk: 'Реагуй природно' },
          ].map(s => (
            <div key={s.n} className="ti-journey-step"><span className="ti-journey-n">{s.n}</span><div><div className="ti-journey-t">{s.t}</div><p>{s.d}</p><span className="ti-muted">{s.u} · {s.uk}</span></div></div>
          ))}
        </div>
      </section>

      <section className="ti-block" ref={roadmapRef} id="ti-roadmap">
        <div className="ti-block-head"><div className="ti-eyebrow">02 · Course roadmap</div><h2 className="ti-h2">A journey through time</h2>
          <p className="ti-uk">Уроки доступні за замовчуванням, коли їх відкриває вчитель. Уроки без контенту позначені як «Coming soon».</p></div>
        <CourseRoadmap ctx={ctx} />
      </section>

      <section className="ti-block ti-two">
        <div className="ti-preview">
          <div className="ti-eyebrow">03 · Tense Explorer</div>
          <h2 className="ti-h2">The whole system on one screen</h2>
          <p>Tap a cell to see its meaning, timeline, and examples. Compare any two.</p>
          <div className="ti-mini-matrix is-large" role="group" aria-label="Відкрити клітинку в Tense Explorer">
            {TI_ASPECTS.map(a => TI_WORLDS.map(w => { const c = tiCellAt(w.key, a.key); return (
              <button key={c.id} type="button" className={cx('ti-mini-cell', `w-${w.key}`, 'is-on')} onClick={() => navigate(`explorer/${c.id}`)} aria-label={c.name}><span>{c.name.replace(' (will)', '').replace(' Continuous', ' Cont.')}</span></button>
            ); }))}
          </div>
          <TiButton variant="primary" icon="compass" onClick={() => navigate('explorer')}>Open Tense Explorer</TiButton>
        </div>
        <div className="ti-preview">
          <div className="ti-eyebrow">04 · Tense Gym</div>
          <h2 className="ti-h2">Seven ways to train</h2>
          <p>Short workouts with feedback, hints, and an optional reflex timer.</p>
          <div className="ti-gym-chips">{TI_GYM_MODES.map(m => <button key={m.id} type="button" className="ti-chip" onClick={() => navigate(`gym/${m.id}`)}><TiIcon name={m.icon} size={14} /> {m.title}</button>)}</div>
          <TiButton variant="primary" icon="dumbbell" onClick={() => navigate('gym')}>Open Tense Gym</TiButton>
        </div>
      </section>

      <section className="ti-block">
        <div className="ti-block-head"><div className="ti-eyebrow">05 · Progress</div><h2 className="ti-h2">Your instinct, measured honestly</h2></div>
        <ProgressOverview ctx={ctx} />
      </section>

      <section className="ti-block">
        <div className="ti-block-head"><div className="ti-eyebrow">06 · Philosophy</div><h2 className="ti-h2">Meaning first</h2></div>
        <div className="ti-philo">
          <div><h3 className="ti-h3">Stop translating</h3><p>Every exercise starts with a situation or an intended meaning. Grammar terms support understanding — they don’t replace it.</p></div>
          <div><h3 className="ti-h3">A lens, not a law</h3><p>“3 worlds × 4 aspects” is a teaching map. Real English is richer: the same form can mean different things in different contexts.</p></div>
          <div><h3 className="ti-h3">Instinct through use</h3><p>Understand → compare → react. Accuracy first, speed second, natural speech as the goal.</p></div>
        </div>
      </section>

      {isTeacher && <TeacherTools ctx={ctx} />}
    </div>
  );
}

// Hero: три світи часу та чотири інтерактивні шари аспектів
function HeroTimeVisual({ onPick }) {
  const [layer, setLayer] = useState(1);
  const asp = TI_ASPECTS[layer];
  return (
    <div className="ti-hero-vis">
      <div className="ti-hv-worlds" aria-hidden="true">{TI_WORLDS.map(w => <span key={w.key} className={`w-${w.key}`}>{w.label}</span>)}</div>
      <div className="ti-hv-axis" aria-hidden="true"><span className="ti-hv-now">NOW</span></div>
      <div className="ti-hv-layers" role="radiogroup" aria-label="Аспекти — шари погляду на дію">
        {TI_ASPECTS.map((a, i) => (
          <button key={a.key} type="button" role="radio" aria-checked={layer === i} className={cx('ti-hv-layer', `a-${a.key}`, layer === i && 'is-on')}
            onMouseEnter={() => setLayer(i)} onFocus={() => setLayer(i)} onClick={() => onPick(tiCellId('present', a.key))}>
            <span className="ti-hv-label">{a.label}</span>
            <span className="ti-hv-cells">{TI_WORLDS.map(w => <span key={w.key} className={`w-${w.key}`}>{tiCellAt(w.key, a.key).form}</span>)}</span>
          </button>
        ))}
      </div>
      <Timeline spec={tiCellAt('present', asp.key).timeline} compact label={`${asp.label}: ${asp.lens}`} key={asp.key} />
      <p className="ti-hv-caption"><strong>{asp.label}</strong> — {asp.lens}. <span className="ti-uk">{asp.uk}</span></p>
    </div>
  );
}

/* ═══ Roadmap ═════════════════════════════════════════════════ */
function CourseRoadmap({ ctx }) {
  const { course, lessonState, navigate } = ctx;
  const [open, setOpen] = useState(null);
  const total = ctx.allLessons.length;
  const done = ctx.allLessons.filter(x => lessonState(x.lesson).completed).length;
  return (
    <div className="ti-roadmap" style={{ '--fill': `${total ? (done / total) * 100 : 0}%` }}>
      <div className="ti-roadmap-rail" aria-hidden="true"><span /></div>
      {course.units.map(u => (
        <div key={u.id} className="ti-unit" style={{ '--unit': TI_UNIT_THEMES[u.theme] || TI_UNIT_THEMES.indigo }}>
          <div className="ti-unit-head">
            <span className="ti-unit-n">Unit {u.number}</span>
            <h3 className="ti-unit-title">{u.title}</h3>
            <span className="ti-unit-sub">{u.subtitle}</span>
          </div>
          <div className="ti-unit-lessons">
            {u.lessons.map(l => {
              const st = lessonState(l);
              const status = st.locked ? 'locked' : !st.has ? (st.completed ? 'completed' : 'soon') : st.completed ? 'completed' : st.inProgress ? 'progress' : 'new';
              const label = { locked: 'Locked', soon: 'Coming soon', completed: 'Completed', progress: 'In progress', new: 'Not started' }[status];
              const action = { locked: 'Деталі', soon: 'Preview', completed: 'Review', progress: 'Continue', new: 'Start' }[status];
              const isOpen = open === l.id;
              return (
                <article key={l.id} className={cx('ti-node', `is-${status}`, isOpen && 'is-open')}>
                  <span className="ti-node-dot" aria-hidden="true">{status === 'completed' ? <TiIcon name="check" size={14} /> : status === 'locked' ? <TiIcon name="lock" size={12} /> : String(l.number).padStart(2, '0')}</span>
                  <div className="ti-node-card">
                    <div className="ti-node-top">
                      <span className="ti-node-num">Lesson {String(l.number).padStart(2, '0')}</span>
                      <span className={cx('ti-status', `is-${status}`)}>{label}</span>
                    </div>
                    <h4 className="ti-node-title">{l.title}</h4>
                    <p className="ti-node-desc">{l.description}</p>
                    {status === 'progress' && st.progress.total > 0 && <div className="ti-node-bar"><span style={{ width: `${((st.progress.maxScreen + 1) / st.progress.total) * 100}%` }} /></div>}
                    {isOpen && (
                      <div className="ti-node-more">
                        {l.titleUk && <p className="ti-uk">{l.titleUk}</p>}
                        {l.plannedSections && <><div className="ti-h4">Planned structure</div><ol className="ti-planned is-inline">{l.plannedSections.map((s, i) => <li key={i}>{s}</li>)}</ol></>}
                        {l.estimatedDuration && <p className="ti-muted">~{l.estimatedDuration} min</p>}
                      </div>
                    )}
                    <div className="ti-node-actions">
                      <TiButton size="sm" variant={status === 'locked' ? 'ghost' : 'primary'} disabled={status === 'locked'} onClick={() => navigate(`lesson/${l.id}`)}>{status === 'locked' ? 'Відкриє вчитель' : action}</TiButton>
                      <button type="button" className="ti-link" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : l.id)}>{isOpen ? 'Згорнути' : 'Деталі'}</button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══ Огляд прогресу (без єдиного «відсотка майстерності») ═══════ */
function pctOf(o) { return o && o.n ? Math.round((o.ok / o.n) * 100) : null; }
function ProgressOverview({ ctx }) {
  const ti = useTi();
  const stats = ti.get('stats') || {};
  const dims = stats.dims || {};
  const lessonsStarted = ctx.allLessons.filter(x => ctx.lessonState(x.lesson).inProgress).length;
  const lessonsDone = ctx.allLessons.filter(x => ctx.lessonState(x.lesson).completed).length;
  const seen = ((ti.get('explorer') || {}).seen || []).length;
  const gym = ti.get('gym') || {};
  const modeLabel = { db: 'Прогрес зберігається у твоєму акаунті Inkwell.', local: 'Прогрес зберігається лише в цьому браузері (таблицю в базі ще не створено).', demo: 'Режим вчителя: демо-сесія, нічого не зберігається.', loading: 'Завантаження прогресу…' }[ti.mode];
  const dimValue = (d) => {
    if (d.key === 'speed') { const s = dims.speed; return s && s.n ? `${(s.ms / s.n / 1000).toFixed(1)} s` : null; }
    const p = pctOf(dims[d.key]); return p == null ? null : `${p}%`;
  };
  const dimCount = (d) => (dims[d.key] && dims[d.key].n) || 0;
  return (
    <div className="ti-progress">
      <p className="ti-muted">{modeLabel}</p>
      <div className="ti-progress-row">
        <div className="ti-stat"><strong>{lessonsDone}<small>/{ctx.allLessons.length}</small></strong><span>lessons completed</span></div>
        <div className="ti-stat"><strong>{lessonsStarted}</strong><span>in progress</span></div>
        <div className="ti-stat"><strong>{seen}<small>/12</small></strong><span>Explorer cells viewed</span></div>
        <div className="ti-stat"><strong>{gym.sessions || 0}</strong><span>Gym sessions</span></div>
      </div>
      <div className="ti-dims">
        {TI_DIMENSIONS.map(d => {
          const v = dimValue(d);
          return (
            <div key={d.key} className={cx('ti-dim', !v && 'is-empty')}>
              <div className="ti-dim-name">{d.label}<small>{d.uk}</small></div>
              <div className="ti-dim-val">{v || '—'}</div>
              <div className="ti-dim-meta">{v ? (d.key === 'speed' ? `${dims.speed.n} швидких правильних` : d.key === 'natural' ? `${dimCount(d)} самооцінок` : `${dimCount(d)} спроб`) : 'Ще немає даних'}</div>
            </div>
          );
        })}
      </div>
      <div className="ti-mastery">
        <MasteryBars title="By time world" items={TI_WORLDS.map(w => ({ key: w.key, label: w.label, v: (stats.worlds || {})[w.key] }))} />
        <MasteryBars title="By aspect" items={TI_ASPECTS.map(a => ({ key: a.key, label: a.label, v: (stats.aspects || {})[a.key] }))} />
      </div>
      {!stats.attempts && <p className="ti-muted">Тут з’являться лише реальні результати твоїх вправ — без вигаданих чисел.</p>}
    </div>
  );
}
function MasteryBars({ title, items }) {
  return (
    <div className="ti-bars">
      <h3 className="ti-h4">{title}</h3>
      {items.map(it => { const p = pctOf(it.v); return (
        <div key={it.key} className="ti-bar-row">
          <span className="ti-bar-label">{it.label}</span>
          <span className="ti-bar" role="img" aria-label={p == null ? `${it.label}: немає даних` : `${it.label}: ${p}%`}><span style={{ width: `${p || 0}%` }} /></span>
          <span className="ti-bar-val">{p == null ? '—' : `${p}%`}</span>
        </div>
      ); })}
    </div>
  );
}

/* ═══ Інструменти вчителя (видимі лише ролі teacher з Supabase) ═══ */
function TeacherTools({ ctx }) {
  const [rows, setRows] = useState(null);
  const [tableState, setTableState] = useState('checking'); // checking | ok | missing
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let alive = true;
    (async () => {
      const { data, error } = await window.SB.from(TI_TABLE).select('student_id, item_key, data, updated_at');
      if (!alive) return;
      if (error) { setTableState('missing'); return; }
      setTableState('ok');
      const ids = Array.from(new Set((data || []).map(r => r.student_id)));
      let names = {};
      if (ids.length) {
        const { data: profs } = await window.SB.from('profiles').select('id, display_name, username').in('id', ids);
        (profs || []).forEach(p => { names[p.id] = p.display_name || p.username || 'Учень'; });
      }
      const by = {};
      (data || []).forEach(r => {
        const s = by[r.student_id] = by[r.student_id] || { id: r.student_id, name: names[r.student_id] || 'Учень', done: 0, started: 0, attempts: 0, last: null };
        if (r.item_key.startsWith('lesson:')) { if (r.data && r.data.completedAt) s.done++; else s.started++; }
        if (r.item_key === 'stats') s.attempts = (r.data && r.data.attempts) || 0;
        if (!s.last || r.updated_at > s.last) s.last = r.updated_at;
      });
      if (alive) setRows(Object.values(by).sort((a, b) => (b.last || '').localeCompare(a.last || '')));
    })();
    return () => { alive = false; };
  }, []);
  const copy = () => { try { navigator.clipboard.writeText(TI_PROGRESS_SQL).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }); } catch (e) {} };
  return (
    <section className="ti-block ti-teacher-tools">
      <div className="ti-block-head"><div className="ti-eyebrow">07 · Teacher tools</div><h2 className="ti-h2">Teacher Studio</h2>
        <p className="ti-uk">Видно лише вчителю. Teacher Mode вмикається всередині уроку: нотатки, показ відповідей, таймери, вибір учня, презентація.</p></div>
      <div className="ti-two">
        <div className="ti-panel">
          <h3 className="ti-h3"><TiIcon name="grid" size={16} /> Component gallery</h3>
          <p>Усі 20 шаблонів екранів на демо-даних — для перевірки програвача й Teacher Mode.</p>
          <TiButton variant="primary" icon="play" onClick={() => ctx.navigate('gallery')}>Відкрити галерею</TiButton>
        </div>
        <div className="ti-panel">
          <h3 className="ti-h3"><TiIcon name="users" size={16} /> Прогрес учнів</h3>
          {tableState === 'checking' && <p className="ti-muted">Перевіряю…</p>}
          {tableState === 'missing' && (
            <>
              <p>Таблиці <code>{TI_TABLE}</code> ще немає — прогрес учнів зараз зберігається лише в їхніх браузерах. Щоб зберігати в акаунтах, виконай цей SQL у Supabase → SQL Editor (безпечно: створює лише нову таблицю).</p>
              <textarea className="ti-sql" readOnly value={TI_PROGRESS_SQL} rows={8} aria-label="SQL для створення таблиці прогресу" />
              <TiButton size="sm" icon="check" onClick={copy}>{copied ? 'Скопійовано' : 'Скопіювати SQL'}</TiButton>
            </>
          )}
          {tableState === 'ok' && (rows && rows.length
            ? <table className="ti-table"><thead><tr><th>Учень</th><th>Завершено</th><th>В процесі</th><th>Вправ</th></tr></thead>
                <tbody>{rows.map(r => <tr key={r.id}><td>{r.name}</td><td>{r.done}</td><td>{r.started}</td><td>{r.attempts}</td></tr>)}</tbody></table>
            : <p className="ti-muted">Таблиця готова. Учні ще не мають активності в курсі.</p>)}
        </div>
      </div>
    </section>
  );
}

/* ── Реєстрація модуля ── */
window.INKWELL.modules = window.INKWELL.modules || {};
window.INKWELL.modules['tense-instinct'] = { Root: TiRoot, version: '1.0.0' };
