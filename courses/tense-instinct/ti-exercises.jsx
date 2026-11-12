/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · exercise engine
 * Один рушій для уроків і Tense Gym.
 *
 * Схема вправи (усі поля, крім id/type/prompt, — необов'язкові):
 * {
 *   id, type,               // див. TI_EXERCISE_TYPES
 *   prompt, promptUk,       // завдання
 *   context: { text, meaning, image },   // Meaning First: ситуація перед граматикою
 *   options: [{ id, text, image, feedback }],
 *   answer: ['a'],          // mcq/image/situation/listening: будь-яка з цих; multi: точний набір
 *   partial: true,          // multi/match/gap: часткові бали
 *   pairs: [{ left, right }],                 // match
 *   words: ['I', 'have', …], acceptOrders: [[…]],  // order (sentence builder)
 *   text: 'I ___ here since 2019.', gaps: [['have lived', "'ve lived"]],  // gap
 *   accept: ['…'],          // input / error: прийнятні відповіді (кілька варіантів!)
 *   wrong: 'sentence with a mistake',          // error
 *   events: [{ id, label }], order: ['e1','e2'],   // timeline placement
 *   audio: { src, transcript },                // listening
 *   open: true, model: '…', criteria: ['…'],  // відкрита відповідь: зразок + самооцінка
 *   explanation, hints: ['…', '…'], mistakes: [{ answer, feedback }],
 *   tags: { skill, world, aspect, pair }       // skill: understanding|recognition|form|speed|natural
 * }
 * Автоматично перевіряються лише обмежені відповіді. Вільне мовлення —
 * зразок відповіді + самооцінка або перевірка вчителем.
 * ═══════════════════════════════════════════════════════════════ */

const TI_EXERCISE_TYPES = {
  mcq: 'Multiple choice', multi: 'Multiple select', match: 'Matching', order: 'Sentence ordering',
  gap: 'Gap fill', input: 'Text input', error: 'Error correction', timeline: 'Timeline placement',
  image: 'Image selection', listening: 'Listening comprehension', speaking: 'Speaking prompt',
  situation: 'Situation-based tense selection',
};

/* ── Нормалізація відповідей: регістр, апострофи, пробіли, скорочення ── */
function tiNormalize(s) {
  return String(s || '').toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'").replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ').trim()
    .replace(/^["'\s]+|["'\s.!?,;:]+$/g, '');
}
// Розгортає скорочення; неоднозначні 's / 'd дають кілька варіантів.
function tiVariants(s) {
  let base = ' ' + tiNormalize(s) + ' ';
  base = base.replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'can not').replace(/\bcannot\b/g, 'can not').replace(/\bshan't\b/g, 'shall not')
    .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will');
  let out = [base];
  if (/'s\b/.test(base)) out = out.flatMap(v => [v.replace(/'s\b/g, ' is'), v.replace(/'s\b/g, ' has'), v]);
  if (/'d\b/.test(base)) out = out.flatMap(v => [v.replace(/'d\b/g, ' had'), v.replace(/'d\b/g, ' would')]);
  // Внутрішні коми/знаки не впливають на правильність часу
  return new Set(out.map(v => v.replace(/[,;:!?]/g, '').replace(/\s+/g, ' ').trim()));
}
function tiMatches(answer, accepted) {
  const a = tiVariants(answer);
  return (accepted || []).some(acc => { for (const v of tiVariants(acc)) if (a.has(v)) return true; return false; });
}
function tiFindMistake(answer, mistakes) {
  return (mistakes || []).find(m => m.answer && tiMatches(answer, [m.answer]));
}

/* ── Оцінювання: повертає { score 0..1, correct, detail } ── */
function tiEvaluate(ex, response) {
  switch (ex.type) {
    case 'mcq': case 'image': case 'situation': case 'listening': {
      const ok = (ex.answer || []).includes(response);
      return { score: ok ? 1 : 0, correct: ok };
    }
    case 'multi': {
      const sel = new Set(response || []); const ans = new Set(ex.answer || []);
      let hit = 0, miss = 0; sel.forEach(id => (ans.has(id) ? hit++ : miss++));
      const exact = hit === ans.size && miss === 0;
      const score = exact ? 1 : ex.partial ? Math.max(0, (hit - miss) / ans.size) : 0;
      return { score, correct: exact };
    }
    case 'match': {
      const pairs = ex.pairs || []; let hit = 0;
      pairs.forEach((p, i) => { if ((response || {})[i] === i) hit++; });
      const exact = hit === pairs.length;
      return { score: exact ? 1 : ex.partial === false ? 0 : hit / pairs.length, correct: exact, detail: { hit } };
    }
    case 'order': {
      const built = (response || []).map(i => ex.words[i]).join(' ');
      const orders = [ex.words, ...(ex.acceptOrders || [])].map(o => o.join(' '));
      const ok = tiMatches(built, orders);
      return { score: ok ? 1 : 0, correct: ok };
    }
    case 'gap': {
      const gaps = ex.gaps || []; const per = gaps.map((acc, i) => tiMatches((response || [])[i] || '', acc));
      const hit = per.filter(Boolean).length; const exact = hit === gaps.length;
      return { score: exact ? 1 : ex.partial === false ? 0 : hit / gaps.length, correct: exact, detail: { per } };
    }
    case 'input': case 'error': {
      const ok = tiMatches(response || '', ex.accept || []);
      return { score: ok ? 1 : 0, correct: ok, detail: { mistake: tiFindMistake(response, ex.mistakes) } };
    }
    case 'timeline': {
      const ok = JSON.stringify(response || []) === JSON.stringify(ex.order || []);
      return { score: ok ? 1 : 0, correct: ok };
    }
    default: return { score: 0, correct: false };
  }
}

/* ── Відображення правильної відповіді (для «Reveal») ── */
function tiAnswerText(ex) {
  const opt = (id) => { const o = (ex.options || []).find(o => o.id === id); return o ? o.text : id; };
  switch (ex.type) {
    case 'mcq': case 'image': case 'situation': case 'listening': case 'multi':
      return (ex.answer || []).map(opt).join(ex.type === 'multi' ? ' + ' : ' / ');
    case 'match': return (ex.pairs || []).map(p => `${p.left} → ${p.right}`).join(' · ');
    case 'order': return [ex.words, ...(ex.acceptOrders || [])].map(o => o.join(' ')).join('  /  ');
    case 'gap': return (ex.gaps || []).map(g => g.join(' / ')).join('  ·  ');
    case 'input': case 'error': return (ex.accept || []).join('  /  ');
    case 'timeline': return (ex.order || []).map(id => (ex.events.find(e => e.id === id) || {}).label).join(' → ');
    default: return ex.model || '';
  }
}

/* ═══════════════════════════════════════════════════════════════
 * <Exercise> — інтерфейс однієї вправи
 * props: exercise, onResult(result), revealAnswers (вчитель), hideExplanation,
 *        timeLimit (сек, лише Gym), compact, autoFocus
 * onResult викликається один раз — після першої перевірки (для статистики).
 * ═══════════════════════════════════════════════════════════════ */
function Exercise({ exercise: ex, onResult, revealAnswers, hideExplanation, compact, onNext, nextLabel = 'Далі', autoFocus }) {
  const initial = () => {
    switch (ex.type) {
      case 'multi': return [];
      case 'match': return {};
      case 'order': case 'timeline': return [];
      case 'gap': return (ex.gaps || []).map(() => '');
      case 'error': return ex.wrong || '';
      default: return null;
    }
  };
  const [resp, setResp] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | correct | partial | wrong | revealed | done
  const [result, setResult] = useState(null);
  const [hints, setHints] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const reported = useRef(false);
  const started = useRef(Date.now());
  const locked = status === 'correct' || status === 'revealed' || status === 'done';
  const showAnswers = revealAnswers || status === 'revealed';

  const check = () => {
    const r = tiEvaluate(ex, resp);
    setResult(r); setAttempts(a => a + 1);
    setStatus(r.correct ? 'correct' : r.score > 0 ? 'partial' : 'wrong');
    if (!reported.current) {
      reported.current = true;
      onResult && onResult({ ...r, ms: Date.now() - started.current, hintsUsed: hints, exercise: ex });
    }
  };
  const retry = () => { setStatus('idle'); setResult(null); if (['order', 'timeline'].includes(ex.type)) setResp(initial()); };
  const reveal = () => {
    if (!reported.current) { reported.current = true; onResult && onResult({ score: 0, correct: false, revealed: true, ms: Date.now() - started.current, hintsUsed: hints, exercise: ex }); }
    setStatus('revealed');
  };
  const reset = () => { setResp(initial()); setStatus('idle'); setResult(null); setHints(0); setAttempts(0); started.current = Date.now(); };

  const canCheck = (() => {
    switch (ex.type) {
      case 'multi': return resp.length > 0;
      case 'match': return Object.keys(resp).length === (ex.pairs || []).length;
      case 'order': return resp.length === (ex.words || []).length;
      case 'timeline': return resp.length === (ex.events || []).length;
      case 'gap': return resp.every(v => v.trim());
      case 'input': case 'error': return !!(resp && resp.trim());
      default: return resp != null;
    }
  })();

  // Відкриті відповіді та говоріння — без автоматичної перевірки
  if (ex.type === 'speaking' || ex.open) return <OpenResponse ex={ex} onResult={onResult} revealAnswers={revealAnswers} onNext={onNext} nextLabel={nextLabel} compact={compact} />;

  const onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey && canCheck && !locked && status === 'idle') { e.preventDefault(); check(); } };

  return (
    <div className={cx('ti-ex', `ti-ex-${ex.type}`, compact && 'is-compact', `is-${status}`)} onKeyDown={onKey}>
      <div className="ti-ex-head">
        <span className="ti-ex-type">{TI_EXERCISE_TYPES[ex.type] || ex.type}</span>
        {ex.tags && ex.tags.pair && <span className="ti-ex-pair">{ex.tags.pair.split('|').map(id => (tiCell(id) || { name: id }).name).join(' vs ')}</span>}
      </div>
      {ex.context && (
        <div className="ti-ex-context">
          {ex.context.image && <TiImage media={ex.context.image} />}
          {ex.context.text && <p className="ti-ex-context-text">{ex.context.text}</p>}
          {ex.context.meaning && <p className="ti-ex-meaning"><TiIcon name="target" size={15} /> {ex.context.meaning}</p>}
        </div>
      )}
      {ex.type === 'listening' && <TiAudio audio={ex.audio} compact />}
      <div className="ti-ex-prompt">{ex.prompt}{ex.promptUk && <div className="ti-ex-prompt-uk">{ex.promptUk}</div>}</div>

      <ExerciseBody ex={ex} resp={resp} setResp={setResp} locked={locked} status={status} result={result} showAnswers={showAnswers} autoFocus={autoFocus} />

      {hints > 0 && <ul className="ti-ex-hints">{(ex.hints || []).slice(0, hints).map((h, i) => <li key={i}><TiIcon name="hint" size={14} /> {h}</li>)}</ul>}

      <ExerciseFeedback ex={ex} status={status} result={result} resp={resp} hideExplanation={hideExplanation} showAnswers={showAnswers} />

      <div className="ti-ex-actions">
        {status === 'idle' && <TiButton variant="primary" icon="check" disabled={!canCheck} onClick={check}>Перевірити</TiButton>}
        {(status === 'wrong' || status === 'partial') && <TiButton variant="primary" icon="refresh" onClick={retry}>Спробувати ще</TiButton>}
        {!locked && ex.hints && hints < ex.hints.length && <TiButton icon="hint" onClick={() => setHints(h => h + 1)}>Підказка{ex.hints.length > 1 ? ` ${hints + 1}/${ex.hints.length}` : ''}</TiButton>}
        {!locked && attempts > 0 && <TiButton icon="eye" onClick={reveal}>Показати відповідь</TiButton>}
        {(locked || attempts > 0) && <TiButton icon="replay" onClick={reset} aria-label="Почати вправу заново">Скинути</TiButton>}
        {onNext && (locked || status !== 'idle') && <TiButton variant="accent" iconRight="next" onClick={onNext} className="ti-ex-next">{nextLabel}</TiButton>}
      </div>
    </div>
  );
}

function ExerciseFeedback({ ex, status, result, resp, hideExplanation, showAnswers }) {
  if (status === 'idle' && !showAnswers) return null;
  const opt = ['mcq', 'image', 'situation', 'listening'].includes(ex.type) ? (ex.options || []).find(o => o.id === resp) : null;
  const mistake = result && result.detail && result.detail.mistake;
  const tone = status === 'correct' ? 'good' : status === 'partial' ? 'mid' : status === 'revealed' ? 'info' : status === 'wrong' ? 'bad' : 'info';
  const title = status === 'correct' ? 'Correct!' : status === 'partial' ? `Partly right · ${Math.round((result.score || 0) * 100)}%` : status === 'wrong' ? 'Not quite' : 'Answer';
  return (
    <div className={cx('ti-feedback', `is-${tone}`)} role="status" aria-live="polite">
      <div className="ti-feedback-title"><TiIcon name={status === 'correct' ? 'check' : status === 'wrong' ? 'x' : 'eye'} size={16} /> {title}</div>
      {status === 'wrong' && opt && opt.feedback && <p>{opt.feedback}</p>}
      {status === 'wrong' && mistake && <p>{mistake.feedback}</p>}
      {status === 'correct' && opt && opt.feedback && <p>{opt.feedback}</p>}
      {(showAnswers && status !== 'correct') && <p className="ti-feedback-answer"><strong>Прийнятні відповіді:</strong> {tiAnswerText(ex)}</p>}
      {!hideExplanation && ex.explanation && (status === 'correct' || status === 'revealed' || showAnswers) && <p className="ti-feedback-expl">{ex.explanation}</p>}
    </div>
  );
}

function ExerciseBody({ ex, resp, setResp, locked, status, result, showAnswers, autoFocus }) {
  const markOpt = (id) => {
    const isAns = (ex.answer || []).includes(id);
    if (showAnswers && isAns) return 'is-answer';
    if (status === 'idle') return '';
    const chosen = ex.type === 'multi' ? resp.includes(id) : resp === id;
    if (!chosen) return '';
    return isAns ? 'is-right' : 'is-wrong';
  };
  switch (ex.type) {
    case 'mcq': case 'situation': case 'listening': case 'image': case 'multi': {
      const multi = ex.type === 'multi';
      return (
        <div className={cx('ti-options', ex.type === 'image' && 'ti-options-images')} role={multi ? 'group' : 'radiogroup'} aria-label="Варіанти відповіді">
          {(ex.options || []).map((o, i) => {
            const on = multi ? resp.includes(o.id) : resp === o.id;
            return (
              <button key={o.id} type="button" role={multi ? 'checkbox' : 'radio'} aria-checked={on} disabled={locked}
                className={cx('ti-option', on && 'is-on', markOpt(o.id))} autoFocus={autoFocus && i === 0}
                onClick={() => {
                  if (status !== 'idle') return;
                  setResp(multi ? (on ? resp.filter(x => x !== o.id) : [...resp, o.id]) : o.id);
                }}>
                {o.image && <span className="ti-option-img"><TiImage media={{ ...o.image, ratio: o.image.ratio || '4/3' }} /></span>}
                {o.timeline && <span className="ti-option-tl"><Timeline spec={o.timeline} compact animate={false} label={o.text} /></span>}
                <span className="ti-option-key" aria-hidden="true">{multi ? (on ? '✓' : '') : String.fromCharCode(65 + i)}</span>
                <span className="ti-option-text">{o.text}</span>
              </button>
            );
          })}
          {multi && <p className="ti-ex-note">Обери всі правильні варіанти.</p>}
        </div>
      );
    }
    case 'match': return <MatchBody ex={ex} resp={resp} setResp={setResp} locked={locked || status !== 'idle'} status={status} showAnswers={showAnswers} />;
    case 'order': return <OrderBody items={ex.words} resp={resp} setResp={setResp} locked={locked || status !== 'idle'} kind="words" />;
    case 'timeline': return <TimelinePlaceBody ex={ex} resp={resp} setResp={setResp} locked={locked || status !== 'idle'} />;
    case 'gap': {
      const parts = String(ex.text || '').split('___');
      const per = result && result.detail && result.detail.per;
      return (
        <p className="ti-gap-text">
          {parts.map((p, i) => (
            <React.Fragment key={i}>
              {p}
              {i < parts.length - 1 && (
                <input className={cx('ti-gap-input', per && status !== 'idle' && (per[i] ? 'is-right' : 'is-wrong'))} value={resp[i] || ''} disabled={locked || status !== 'idle'}
                  aria-label={`Пропуск ${i + 1}`} autoFocus={autoFocus && i === 0} autoCapitalize="off" autoComplete="off" spellCheck="false"
                  size={Math.max(8, ((ex.gaps[i] || [''])[0] || '').length + 2)}
                  onChange={(e) => { const n = [...resp]; n[i] = e.target.value; setResp(n); }} />
              )}
            </React.Fragment>
          ))}
        </p>
      );
    }
    case 'input': case 'error':
      return (
        <div className="ti-input-wrap">
          {ex.type === 'error' && <p className="ti-error-src"><span className="ti-strike">{ex.wrong}</span></p>}
          <textarea className="ti-input" rows={2} value={resp || ''} disabled={locked || status !== 'idle'} autoFocus={autoFocus}
            aria-label={ex.type === 'error' ? 'Виправлене речення' : 'Твоя відповідь'} autoCapitalize="sentences" spellCheck="false"
            placeholder={ex.type === 'error' ? 'Виправ речення…' : 'Напиши відповідь…'} onChange={(e) => setResp(e.target.value)} />
        </div>
      );
    default: return <p className="ti-ex-note">Невідомий тип вправи: {ex.type}</p>;
  }
}

// Matching: натисни ліворуч, потім праворуч (працює на дотик і з клавіатури)
function MatchBody({ ex, resp, setResp, locked, status, showAnswers }) {
  const [active, setActive] = useState(null);
  const rights = useMemo(() => shuffleArr((ex.pairs || []).map((p, i) => ({ i, text: p.right }))), [ex.id]);
  const usedRight = new Set(Object.values(resp));
  const pairOf = (ri) => Object.keys(resp).find(k => resp[k] === ri);
  const pick = (ri) => {
    if (locked || active == null) return;
    const next = { ...resp }; Object.keys(next).forEach(k => { if (next[k] === ri) delete next[k]; });
    next[active] = ri; setResp(next); setActive(null);
  };
  return (
    <div className="ti-match">
      <div className="ti-match-col">
        {(ex.pairs || []).map((p, i) => (
          <button key={i} type="button" disabled={locked} className={cx('ti-match-item', active === i && 'is-active', resp[i] != null && 'is-paired',
            status !== 'idle' && resp[i] != null && (resp[i] === i ? 'is-right' : 'is-wrong'))}
            onClick={() => setActive(active === i ? null : i)} aria-pressed={active === i}>
            <span className="ti-match-n">{i + 1}</span>{p.left}
            {showAnswers && <span className="ti-match-ans">→ {p.right}</span>}
          </button>
        ))}
      </div>
      <div className="ti-match-col">
        {rights.map(r => {
          const k = pairOf(r.i);
          return (
            <button key={r.i} type="button" disabled={locked || active == null} className={cx('ti-match-item is-right-col', usedRight.has(r.i) && 'is-paired')} onClick={() => pick(r.i)}>
              {k != null && <span className="ti-match-n">{Number(k) + 1}</span>}{r.text}
            </button>
          );
        })}
      </div>
      {!locked && <p className="ti-ex-note">Обери елемент ліворуч, потім його пару праворуч.</p>}
    </div>
  );
}

// Sentence builder / ordering: натискай слова по черзі; натисни ще раз, щоб прибрати
function OrderBody({ items, resp, setResp, locked, kind }) {
  const pool = useMemo(() => shuffleArr(items.map((w, i) => i)), [items.join('|')]);
  return (
    <div className="ti-order">
      <div className="ti-order-built" aria-label="Твоє речення" aria-live="polite">
        {resp.length === 0 && <span className="ti-order-ph">Натискай слова в правильному порядку…</span>}
        {resp.map((i, k) => <button key={k} type="button" className="ti-token is-placed" disabled={locked} onClick={() => setResp(resp.filter((_, j) => j !== k))}>{items[i]}</button>)}
      </div>
      <div className="ti-order-pool">
        {pool.map(i => <button key={i} type="button" className={cx('ti-token', resp.includes(i) && 'is-used')} disabled={locked || resp.includes(i)} onClick={() => setResp([...resp, i])}>{items[i]}</button>)}
      </div>
    </div>
  );
}

// Timeline placement: розмісти події в хронологічному порядку на осі
function TimelinePlaceBody({ ex, resp, setResp, locked }) {
  const events = ex.events || [];
  const pool = useMemo(() => shuffleArr(events.map(e => e.id)), [ex.id]);
  const label = (id) => (events.find(e => e.id === id) || {}).label;
  return (
    <div className="ti-tplace">
      <div className="ti-tplace-axis" aria-label="Шкала часу: від раніше до пізніше">
        <span className="ti-tplace-end">earlier</span>
        {events.map((_, k) => (
          <div key={k} className={cx('ti-tplace-slot', resp[k] && 'is-filled')}>
            <span className="ti-tplace-dot" />
            {resp[k]
              ? <button type="button" className="ti-token is-placed" disabled={locked} onClick={() => setResp(resp.filter((_, j) => j !== k))}>{label(resp[k])}</button>
              : <span className="ti-tplace-empty">{k + 1}</span>}
          </div>
        ))}
        <span className="ti-tplace-end">later</span>
      </div>
      <div className="ti-order-pool">
        {pool.map(id => <button key={id} type="button" className={cx('ti-token', resp.includes(id) && 'is-used')} disabled={locked || resp.includes(id)} onClick={() => setResp([...resp, id])}>{label(id)}</button>)}
      </div>
    </div>
  );
}

/* ── Говоріння / відкриті відповіді: таймер, зразок, самооцінка ── */
const TI_SELF_RATINGS = [
  { v: 0, label: 'Not yet', uk: 'Поки ні' },
  { v: 1, label: 'Partly', uk: 'Частково' },
  { v: 2, label: 'Mostly', uk: 'Здебільшого' },
  { v: 3, label: 'Confidently', uk: 'Впевнено' },
];
function SpeakingTimer({ seconds, autoStart }) {
  const [left, setLeft] = useState(seconds);
  const [running, setRunning] = useState(!!autoStart);
  useEffect(() => { setLeft(seconds); setRunning(!!autoStart); }, [seconds]);
  useEffect(() => {
    if (!running) return;
    if (left <= 0) { setRunning(false); return; }
    const t = setTimeout(() => setLeft(l => l - 1), 1000);
    return () => clearTimeout(t);
  }, [running, left]);
  const pct = seconds ? (left / seconds) * 100 : 0;
  return (
    <div className={cx('ti-timer', left === 0 && 'is-done')} role="timer" aria-live="off">
      <div className="ti-timer-ring" style={{ '--p': `${pct}%` }}><span>{left}s</span></div>
      <TiButton size="sm" icon={running ? 'pause' : 'play'} onClick={() => { if (left === 0) setLeft(seconds); setRunning(r => !r); }}>{running ? 'Пауза' : left === 0 ? 'Ще раз' : 'Старт'}</TiButton>
      <TiButton size="sm" icon="replay" onClick={() => { setLeft(seconds); setRunning(false); }} aria-label="Скинути таймер" />
    </div>
  );
}
function OpenResponse({ ex, onResult, revealAnswers, onNext, nextLabel, compact }) {
  const [text, setText] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [rating, setRating] = useState(null);
  const rate = (v) => {
    setRating(v);
    onResult && onResult({ score: v / 3, correct: v >= 2, selfRating: v, self: true, exercise: { ...ex, tags: { ...(ex.tags || {}), skill: 'natural' } } });
  };
  return (
    <div className={cx('ti-ex ti-ex-open', compact && 'is-compact')}>
      <div className="ti-ex-head"><span className="ti-ex-type">{ex.type === 'speaking' ? 'Speaking prompt' : 'Open answer'}</span><span className="ti-ex-pair">Без автоперевірки · самооцінка</span></div>
      {ex.context && <div className="ti-ex-context">{ex.context.image && <TiImage media={ex.context.image} />}{ex.context.text && <p className="ti-ex-context-text">{ex.context.text}</p>}</div>}
      <div className="ti-ex-prompt">{ex.prompt}{ex.promptUk && <div className="ti-ex-prompt-uk">{ex.promptUk}</div>}</div>
      {ex.timer && <SpeakingTimer seconds={ex.timer} />}
      {ex.type !== 'speaking' && <textarea className="ti-input" rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder="Напиши свою відповідь…" aria-label="Твоя відповідь" />}
      {ex.criteria && <ul className="ti-criteria">{ex.criteria.map((c, i) => <li key={i}>{c}</li>)}</ul>}
      {(ex.model) && (
        <div className="ti-model">
          {(showModel || revealAnswers)
            ? <p><strong>Зразок відповіді:</strong> {ex.model} <SpeakButton text={ex.model} /></p>
            : <TiButton icon="eye" onClick={() => setShowModel(true)}>Показати зразок</TiButton>}
        </div>
      )}
      <div className="ti-self">
        <span>Як вийшло?</span>
        {TI_SELF_RATINGS.map(r => <button key={r.v} type="button" className={cx('ti-chip', rating === r.v && 'is-on')} aria-pressed={rating === r.v} onClick={() => rate(r.v)} title={r.uk}>{r.label}</button>)}
      </div>
      {onNext && <div className="ti-ex-actions"><TiButton variant="accent" iconRight="next" onClick={onNext} className="ti-ex-next">{nextLabel}</TiButton></div>}
    </div>
  );
}
