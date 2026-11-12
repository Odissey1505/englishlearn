/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · Tense Explorer (signature feature)
 * Матриця 3 × 4, значення в контексті, таймлайн, порівняння двох
 * клітинок і «One Action, Twelve Perspectives».
 * ═══════════════════════════════════════════════════════════════ */

// Курировані пояснення для пар, які найчастіше плутають
const TI_PAIR_NOTES = {
  'past-simple|present-perfect': {
    en: 'Past Simple looks at a finished time ("in 2023", "yesterday"). Present Perfect looks from now: when exactly is not important — the connection to now is.',
    uk: 'Past Simple — завершений час у минулому. Present Perfect — погляд із «зараз»: важливий зв’язок із теперішнім, а не точний момент.',
    ex: ['I lost my keys yesterday. (a story about yesterday)', "I've lost my keys. (so I can't get in now)"],
  },
  'present-continuous|present-simple': {
    en: 'Simple shows the whole picture — routines, facts, stable situations. Continuous zooms in on something in progress, temporary, or changing.',
    uk: 'Simple — загальна картина. Continuous — «наближення» до процесу, тимчасового чи змінного.',
    ex: ['I work in Kyiv. (my stable situation)', "I'm working in Kyiv this month. (temporary)"],
  },
  'past-continuous|past-simple': {
    en: 'Past Continuous builds the scene (what was in progress); Past Simple moves the story forward (what happened).',
    uk: 'Past Continuous малює сцену, Past Simple рухає сюжет уперед.',
    ex: ['I was walking home when it started to rain.'],
  },
  'past-perfect|past-simple': {
    en: 'Past Perfect steps one level further back from a past moment. Use it when the earlier order matters for the meaning.',
    uk: 'Past Perfect — крок іще далі в минуле від минулого моменту, коли порядок важливий для змісту.',
    ex: ['When I got to the station, the train left. (I saw it leave)', 'When I got to the station, the train had left. (I missed it)'],
  },
  'present-perfect|present-perfectContinuous': {
    en: 'Perfect often focuses on the result or how many; Perfect Continuous focuses on the activity and how long.',
    uk: 'Perfect — результат чи «скільки»; Perfect Continuous — сама діяльність і «як довго».',
    ex: ["I've read three chapters. (result)", "I've been reading all afternoon. (activity)"],
  },
  'future-continuous|future-simple': {
    en: '"Will" gives the future event as a whole (a prediction, a decision). "Will be + -ing" puts you inside an activity at a future moment.',
    uk: 'will — подія як ціле; will be + -ing — ти «всередині» дії в майбутній момент.',
    ex: ["I'll call you at six. (a promise)", "I'll be driving at six — call me later. (in progress then)"],
  },
};
const pairKey = (a, b) => [a, b].sort().join('|');
function pairNote(a, b) { return TI_PAIR_NOTES[pairKey(a, b)] || null; }

function differenceText(a, b) {
  const A = tiCell(a), B = tiCell(b);
  if (!A || !B || a === b) return null;
  const note = pairNote(a, b);
  if (note) return note;
  const aspA = TI_ASPECTS.find(x => x.key === A.aspect), aspB = TI_ASPECTS.find(x => x.key === B.aspect);
  const wA = TI_WORLDS.find(x => x.key === A.world), wB = TI_WORLDS.find(x => x.key === B.world);
  if (A.world === B.world) return {
    en: `Same time world (${wA.label}), different lens: ${A.name} shows ${aspA.lens}; ${B.name} shows ${aspB.lens}.`,
    uk: `Той самий світ часу (${wA.uk}), різний погляд: «${aspA.uk}» проти «${aspB.uk}».`,
  };
  if (A.aspect === B.aspect) return {
    en: `Same lens (${aspA.label}), moved to a different time world: ${wA.label} → ${wB.label}. The way we look at the action stays the same.`,
    uk: `Той самий погляд (${aspA.label}), інший світ часу: ${wA.uk} → ${wB.uk}. Спосіб бачити дію не змінюється.`,
  };
  return {
    en: `Different time world (${wA.label} vs ${wB.label}) and different lens (${aspA.label} vs ${aspB.label}).`,
    uk: `Різний світ часу і різний погляд на дію.`,
  };
}

function TenseExplorer({ initial, navigate, inkwell, embedded }) {
  const ti = useTi();
  const parts = (initial || '').split('/').filter(Boolean);
  const startCompare = parts[0] === 'compare';
  const [selected, setSelected] = useState(() => (startCompare ? parts[1] : parts[0]) && tiCell(startCompare ? parts[1] : parts[0]) ? (startCompare ? parts[1] : parts[0]) : 'present-perfect');
  const [compareWith, setCompareWith] = useState(() => startCompare && tiCell(parts[2]) ? parts[2] : null);
  const [picking, setPicking] = useState(false);
  const [verb, setVerb] = useState('work');
  const [layer, setLayer] = useState(null); // підсвітка рядка/стовпця
  const gridRef = useRef(null);
  const cell = tiCell(selected);

  // Запам'ятати, які клітинки учень відкривав (лише факт перегляду, не «володіння»)
  useEffect(() => {
    if (!ti || !ti.ready) return;
    const seen = (ti.get('explorer') || {}).seen || [];
    if (!seen.includes(selected)) ti.update('explorer', (e) => ({ ...e, seen: [...((e && e.seen) || []), selected] }));
  }, [selected, ti && ti.ready]);

  useEffect(() => {
    if (embedded || !navigate) return;
    navigate(compareWith ? `explorer/compare/${selected}/${compareWith}` : `explorer/${selected}`, { replace: true });
  }, [selected, compareWith]);

  // Синхронізація з адресою (кнопка «Назад» або пряме посилання)
  useEffect(() => {
    if (embedded) return;
    const ps = (initial || '').split('/').filter(Boolean);
    const cmp = ps[0] === 'compare';
    const a = cmp ? ps[1] : ps[0], b = cmp ? ps[2] : null;
    if (a && tiCell(a) && a !== selected) setSelected(a);
    if ((b && tiCell(b) ? b : null) !== compareWith && (cmp || !ps.length || tiCell(ps[0]))) setCompareWith(b && tiCell(b) ? b : null);
  }, [initial]);

  const choose = (id) => {
    if (picking) { if (id !== selected) setCompareWith(id); setPicking(false); return; }
    setSelected(id);
  };
  const onGridKey = (e) => {
    const c = tiCell(selected); if (!c) return;
    let w = TI_WORLDS.findIndex(x => x.key === c.world), a = TI_ASPECTS.findIndex(x => x.key === c.aspect);
    if (e.key === 'ArrowRight') w = Math.min(2, w + 1); else if (e.key === 'ArrowLeft') w = Math.max(0, w - 1);
    else if (e.key === 'ArrowDown') a = Math.min(3, a + 1); else if (e.key === 'ArrowUp') a = Math.max(0, a - 1); else return;
    e.preventDefault();
    const id = tiCellId(TI_WORLDS[w].key, TI_ASPECTS[a].key);
    setSelected(id);
    requestAnimationFrame(() => { const el = gridRef.current && gridRef.current.querySelector(`[data-cell="${id}"]`); if (el) el.focus(); });
  };
  const seenCount = ((ti && ti.get('explorer')) || {}).seen ? ti.get('explorer').seen.length : 0;
  const diff = compareWith ? differenceText(selected, compareWith) : null;

  return (
    <div className={cx('ti-explorer', embedded && 'is-embedded')}>
      {!embedded && (
        <header className="ti-section-head">
          <div className="ti-eyebrow"><TiIcon name="compass" size={15} /> Tense Explorer</div>
          <h1 className="ti-h1">3 Time Worlds × 4 Aspects</h1>
          <p className="ti-lead">Choose a cell to see what it <em>means</em>, how it looks on a timeline, and how one action changes across all twelve perspectives.</p>
          <p className="ti-lead-uk">Обери клітинку: значення, таймлайн і приклади. Ця сітка — навчальна рамка, а не повний опис англійського часу: значення залежить від контексту.</p>
        </header>
      )}

      <div className="ti-explorer-layout">
        <div className="ti-matrix-wrap">
          <div className="ti-matrix-toolbar">
            {picking
              ? <span className="ti-picking"><TiIcon name="layers" size={15} /> Обери другу клітинку для порівняння <button type="button" className="ti-link" onClick={() => setPicking(false)}>Скасувати</button></span>
              : <span className="ti-muted ti-kbd-hint">Стрілки ← → ↑ ↓ — навігація клавіатурою</span>}
            {ti && ti.ready && <span className="ti-muted">Переглянуто: {seenCount}/12</span>}
          </div>
          <div className="ti-matrix" ref={gridRef} role="grid" aria-label="Матриця часів: стовпці — світи часу, рядки — аспекти" onKeyDown={onGridKey}>
            <div className="ti-matrix-corner" role="presentation" />
            {TI_WORLDS.map(w => (
              <button key={w.key} type="button" role="columnheader" className={cx('ti-matrix-head', `w-${w.key}`, layer === w.key && 'is-hl')}
                onMouseEnter={() => setLayer(w.key)} onMouseLeave={() => setLayer(null)} onFocus={() => setLayer(w.key)} onBlur={() => setLayer(null)}
                onClick={() => setSelected(tiCellId(w.key, cell ? cell.aspect : 'simple'))} aria-label={`${w.label} — перейти в цей світ часу`}>
                {w.label}<small>{w.uk}</small>
              </button>
            ))}
            {TI_ASPECTS.map(a => (
              <React.Fragment key={a.key}>
                <button type="button" role="rowheader" className={cx('ti-matrix-head is-row', `a-${a.key}`, layer === a.key && 'is-hl')}
                  onMouseEnter={() => setLayer(a.key)} onMouseLeave={() => setLayer(null)} onFocus={() => setLayer(a.key)} onBlur={() => setLayer(null)}
                  onClick={() => setSelected(tiCellId(cell ? cell.world : 'present', a.key))} aria-label={`${a.label} — ${a.uk}`}>
                  {a.label}<small>{a.uk}</small>
                </button>
                {TI_WORLDS.map(w => {
                  const c = tiCellAt(w.key, a.key);
                  const isSel = c.id === selected, isCmp = c.id === compareWith;
                  return (
                    <button key={c.id} type="button" role="gridcell" data-cell={c.id} tabIndex={isSel ? 0 : -1}
                      aria-selected={isSel} aria-label={`${c.name}: ${c.form}`}
                      className={cx('ti-cell', `w-${w.key}`, `a-${a.key}`, isSel && 'is-selected', isCmp && 'is-compare', (layer === w.key || layer === a.key) && 'is-hl', picking && 'is-pickable')}
                      onClick={() => choose(c.id)}>
                      <span className="ti-cell-name">{c.name.replace(' (will)', '')}</span>
                      <span className="ti-cell-form">{c.form}</span>
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>

        {cell && !compareWith && (
          <CellDetail cell={cell} verb={verb} inkwell={inkwell}
            onCompare={() => setPicking(true)} />
        )}
        {cell && compareWith && (
          <div className="ti-compare" aria-live="polite">
            <div className="ti-compare-head">
              <h2 className="ti-h2">{cell.name} <span className="ti-vs">vs</span> {tiCell(compareWith).name}</h2>
              <TiButton icon="x" onClick={() => setCompareWith(null)}>Закрити порівняння</TiButton>
            </div>
            <div className="ti-compare-grid">
              {[cell, tiCell(compareWith)].map(c => (
                <div key={c.id} className={cx('ti-compare-col', `w-${c.world}`)}>
                  <div className="ti-compare-name">{c.name}</div>
                  <div className="ti-form-line">{c.form}</div>
                  <Timeline spec={c.timeline} label={c.core} compact />
                  <p className="ti-core">{c.core}</p>
                  <p className="ti-quote">“{TI_VERB_PERSPECTIVES[verb][c.id]}” <SpeakButton text={TI_VERB_PERSPECTIVES[verb][c.id]} /></p>
                </div>
              ))}
            </div>
            {diff && (
              <div className="ti-diff">
                <div className="ti-eyebrow"><TiIcon name="sparkles" size={14} /> Key difference</div>
                <p>{diff.en}</p>
                <p className="ti-uk">{diff.uk}</p>
                {diff.ex && <ul>{diff.ex.map((e, i) => <li key={i}>{e}</li>)}</ul>}
              </div>
            )}
            <div className="ti-compare-quick">
              <span className="ti-muted">Інші пари:</span>
              {Object.keys(TI_PAIR_NOTES).map(k => {
                const [a, b] = k.split('|');
                return <button key={k} type="button" className="ti-chip" onClick={() => { setSelected(a); setCompareWith(b); }}>{tiCell(a).name.replace(' (will)', '')} / {tiCell(b).name.replace(' (will)', '')}</button>;
              })}
            </div>
          </div>
        )}
      </div>

      <OneActionTwelve verb={verb} setVerb={setVerb} selected={selected} onSelect={(id) => { setCompareWith(null); setSelected(id); }} />
    </div>
  );
}

function CellDetail({ cell, verb, inkwell, onCompare }) {
  const world = TI_WORLDS.find(w => w.key === cell.world), aspect = TI_ASPECTS.find(a => a.key === cell.aspect);
  return (
    <article className={cx('ti-cell-detail', `w-${cell.world}`)} aria-live="polite">
      <div className="ti-cell-detail-head">
        <div>
          <div className="ti-eyebrow">{world.label} world · {aspect.label} lens</div>
          <h2 className="ti-h2">{cell.name}</h2>
          <div className="ti-uk">{cell.uk}</div>
        </div>
        <div className="ti-cell-actions">
          <TiButton icon="layers" onClick={onCompare}>Порівняти</TiButton>
          {cell.grammarBank && inkwell && <TiButton icon="book" onClick={() => inkwell.setRoute({ page: 'grammar', topic: cell.grammarBank })}>У Grammar Bank</TiButton>}
        </div>
      </div>
      <Timeline spec={cell.timeline} label={cell.core} key={cell.id} />
      <p className="ti-core">{cell.core}</p>
      <p className="ti-uk">{cell.coreUk}</p>
      <div className="ti-forms">
        <div><span>+</span>{cell.form}</div><div><span>−</span>{cell.formNeg}</div><div><span>?</span>{cell.formQ}</div>
      </div>
      <h3 className="ti-h3">Meanings in context <span className="ti-muted">· значення залежить від ситуації</span></h3>
      <ul className="ti-uses">
        {cell.uses.map((u, i) => (
          <li key={i}>
            <div className="ti-use-name">{u.en} <span className="ti-uk">· {u.uk}</span></div>
            <div className="ti-use-ex">{u.ex} <SpeakButton text={u.ex} /></div>
          </li>
        ))}
      </ul>
      <div className="ti-myth"><TiIcon name="hint" size={16} /><div><strong>Instinct tip.</strong> {cell.myth}<div className="ti-uk">{cell.mythUk}</div></div></div>
      <p className="ti-quote">With <strong>{verb}</strong>: “{TI_VERB_PERSPECTIVES[verb][cell.id]}” <SpeakButton text={TI_VERB_PERSPECTIVES[verb][cell.id]} /></p>
    </article>
  );
}

function OneActionTwelve({ verb, setVerb, selected, onSelect }) {
  const data = TI_VERB_PERSPECTIVES[verb];
  return (
    <section className="ti-oat" aria-labelledby="ti-oat-title">
      <div className="ti-oat-head">
        <div>
          <div className="ti-eyebrow"><TiIcon name="sparkles" size={14} /> One Action, Twelve Perspectives</div>
          <h2 className="ti-h2" id="ti-oat-title">One verb. Twelve ways to see it.</h2>
          <p className="ti-uk">Та сама дія — різний погляд на час. Натисни речення, щоб побачити його клітинку.</p>
        </div>
        <div className="ti-seg" role="radiogroup" aria-label="Дієслово">
          {Object.keys(TI_VERB_PERSPECTIVES).map(v => (
            <button key={v} type="button" role="radio" aria-checked={verb === v} className={cx('ti-seg-btn', verb === v && 'is-on')} onClick={() => setVerb(v)}>{v}</button>
          ))}
        </div>
      </div>
      <div className="ti-oat-grid">
        {TI_ASPECTS.map(a => TI_WORLDS.map(w => {
          const id = tiCellId(w.key, a.key);
          return (
            <button key={id} type="button" className={cx('ti-oat-card', `w-${w.key}`, selected === id && 'is-selected')} onClick={() => onSelect(id)} aria-pressed={selected === id}>
              <span className="ti-oat-label">{tiCell(id).name.replace(' (will)', '')}</span>
              <span className="ti-oat-sentence">{data[id]}</span>
            </button>
          );
        }))}
      </div>
    </section>
  );
}
