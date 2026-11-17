/* ═══════════════════════════════════════════════════════════════
 * TENSE INSTINCT · MayaScene
 * Векторна ілюстрація кімнати Маї (без зовнішніх файлів-зображень).
 * Одна сцена — багато станів: кожен стан пояснює значення часу.
 *
 * scene = {
 *   alt: 'опис для екранного читача',
 *   time: 'day' | 'evening' | 'night',
 *   world: 'past' | 'present' | 'future',   // тонування + позначка
 *   pose: 'writing' | 'relaxed' | 'phone',
 *   badge: 'Yesterday · 8 p.m.',            // підпис у кутку
 *   clock: { h: 20, m: 0, from: 18 },       // from — сектор тривалості
 *   calendar: { top: 'FRI', label: 'EXAM', circle: true } | { streak: 14, filled: 14, label: '2 weeks' },
 *   week: true,                              // смужка тижня з позначками (звичка)
 *   tests: { total: 3, done: 3 },            // пробні тести на столі
 *   homework: 'done',                        // зошит із позначкою «готово»
 *   phone: 'ring' | 'desk',                  // телефон дзвонить / лежить
 *   plate: true,                             // вечеря (точка відліку «before dinner»)
 *   thought: 'Friday',                       // хмаринка-думка (майбутнє)
 * }
 * Майбутні сцени намальовані пунктиром і прозоріше: цього ще не сталося.
 * ═══════════════════════════════════════════════════════════════ */

const TI_SCENE_SKY = {
  day: ['#8FD0F5', '#D7EEFB'], evening: ['#F4A36C', '#8D6BC0'], night: ['#0C1533', '#22306A'],
};
const TI_SCENE_WALL = { day: '#24335A', evening: '#2B2652', night: '#151B36' };

function sceneClockHand(cx0, cy0, len, deg) {
  const r = (deg - 90) * Math.PI / 180;
  return { x: cx0 + Math.cos(r) * len, y: cy0 + Math.sin(r) * len };
}
function sceneArc(cx0, cy0, r, fromDeg, toDeg) {
  const a = sceneClockHand(cx0, cy0, r, fromDeg), b = sceneClockHand(cx0, cy0, r, toDeg);
  const large = ((toDeg - fromDeg + 360) % 360) > 180 ? 1 : 0;
  return `M ${cx0} ${cy0} L ${a.x} ${a.y} A ${r} ${r} 0 ${large} 1 ${b.x} ${b.y} Z`;
}

function MayaScene({ scene, className, compact }) {
  const s = scene || {};
  const time = s.time || 'day';
  const world = s.world || 'present';
  const pose = s.pose || 'writing';
  const sky = TI_SCENE_SKY[time];
  const id = useMemo(() => 'ms' + Math.random().toString(36).slice(2, 8), []);
  const lampOn = time !== 'day';
  const future = world === 'future';
  const clock = s.clock;
  const cal = s.calendar;

  return (
    <figure className={cx('ti-scene', `is-${world}`, `is-${time}`, compact && 'is-compact', className)}>
      <svg viewBox="0 0 520 340" role="img" aria-label={s.alt || 'Maya at her desk'} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[1]} /></linearGradient>
          <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#F5C76B" stopOpacity="0.55" /><stop offset="1" stopColor="#F5C76B" stopOpacity="0" /></radialGradient>
          <linearGradient id={`${id}-desk`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7A5D48" /><stop offset="1" stopColor="#5A4334" /></linearGradient>
          <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7A4B2D" /><stop offset="1" stopColor="#4B2C19" /></linearGradient>
        </defs>

        {/* Кімната */}
        <rect x="0" y="0" width="520" height="340" fill={TI_SCENE_WALL[time]} />
        <rect x="0" y="262" width="520" height="78" fill="#10162C" opacity="0.55" />
        {/* Вікно */}
        <g className="ms-window">
          <rect x="30" y="36" width="128" height="122" rx="10" fill={`url(#${id}-sky)`} stroke="#3C4B77" strokeWidth="6" />
          <line x1="94" y1="36" x2="94" y2="158" stroke="#3C4B77" strokeWidth="5" />
          <line x1="30" y1="97" x2="158" y2="97" stroke="#3C4B77" strokeWidth="5" />
          {time === 'day' && <circle cx="128" cy="66" r="13" fill="#FFE7A3" opacity="0.95" />}
          {time === 'evening' && <circle cx="62" cy="140" r="16" fill="#FFD08A" opacity="0.9" />}
          {time === 'night' && <><path d="M 132 58 a 13 13 0 1 0 10 20 a 10 10 0 1 1 -10 -20 z" fill="#F3F5FF" opacity="0.9" />
            <circle cx="50" cy="56" r="1.6" fill="#fff" /><circle cx="72" cy="78" r="1.2" fill="#fff" /><circle cx="114" cy="122" r="1.4" fill="#fff" /><circle cx="56" cy="128" r="1.1" fill="#fff" /></>}
        </g>

        {/* Смужка тижня (звичка) */}
        {s.week && (
          <g className="ms-week" transform="translate(186 34)">
            <rect x="-8" y="-8" width="210" height="44" rx="12" fill="#1B2445" stroke="#3C4B77" />
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <g key={i} transform={`translate(${i * 28 + 6} 0)`}>
                <text x="8" y="6" textAnchor="middle" className="ms-text-sm">{d}</text>
                <circle cx="8" cy="20" r="8" fill="#38BDF8" opacity="0.9" />
                <path d="M 4.5 20 l 2.5 2.6 l 5 -5.2" fill="none" stroke="#0B1020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ))}
          </g>
        )}

        {/* Годинник */}
        {clock && (
          <g className="ms-clock" transform="translate(0 0)">
            <circle cx="440" cy="74" r="30" fill="#F3F5FF" stroke="#3C4B77" strokeWidth="5" />
            {clock.from != null && <path d={sceneArc(440, 74, 24, ((clock.from % 12) * 30), (((clock.h % 12) + (clock.m || 0) / 60) * 30) || 359.9)} fill="#2DD4BF" opacity="0.45" />}
            {Array.from({ length: 12 }, (_, i) => { const p = sceneClockHand(440, 74, 25, i * 30), q = sceneClockHand(440, 74, 21, i * 30); return <line key={i} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#45507A" strokeWidth={i % 3 ? 1.5 : 2.5} />; })}
            {(() => { const hd = ((clock.h % 12) + (clock.m || 0) / 60) * 30; const md = (clock.m || 0) * 6; const a = sceneClockHand(440, 74, 13, hd), b = sceneClockHand(440, 74, 20, md); return <><line x1="440" y1="74" x2={a.x} y2={a.y} stroke="#121833" strokeWidth="3.5" strokeLinecap="round" /><line x1="440" y1="74" x2={b.x} y2={b.y} stroke="#121833" strokeWidth="2.2" strokeLinecap="round" /><circle cx="440" cy="74" r="2.6" fill="#F472B6" /></>; })()}
          </g>
        )}

        {/* Календар */}
        {cal && (
          <g className="ms-calendar" transform="translate(338 34)">
            <rect x="0" y="0" width="70" height="80" rx="8" fill="#F3F5FF" />
            <rect x="0" y="0" width="70" height="22" rx="8" fill="#F472B6" /><rect x="0" y="14" width="70" height="8" fill="#F472B6" />
            <text x="35" y="16" textAnchor="middle" className="ms-text-cal-top">{cal.top || (cal.streak ? 'DAYS' : '')}</text>
            {cal.streak
              ? <g transform="translate(7 28)">{Array.from({ length: cal.streak }, (_, i) => <rect key={i} x={(i % 7) * 8.2} y={Math.floor(i / 7) * 12} width="6.4" height="9" rx="2" fill={i < (cal.filled || 0) ? '#2DD4BF' : '#D5DAEE'} />)}
                  {cal.label && <text x="28" y="44" textAnchor="middle" className="ms-text-cal">{cal.label}</text>}</g>
              : <>
                  <text x="35" y="56" textAnchor="middle" className="ms-text-cal-big">{cal.label}</text>
                  {cal.circle && <ellipse cx="35" cy="50" rx="27" ry="17" fill="none" stroke="#F472B6" strokeWidth="2.5" className="ms-circle" />}
                </>}
          </g>
        )}

        {/* Лампа */}
        {lampOn && <circle cx="430" cy="196" r="110" fill={`url(#${id}-glow)`} className="ms-glow" />}
        <g className="ms-lamp">
          <rect x="462" y="226" width="34" height="8" rx="3" fill="#C9CFE6" />
          <path d="M 478 228 L 470 178 L 438 160" fill="none" stroke="#C9CFE6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 420 150 L 452 150 L 446 172 L 426 172 Z" fill={lampOn ? '#F5C76B' : '#8591B0'} transform="rotate(-18 436 160)" />
        </g>

        {/* Стілець */}
        <rect x="150" y="166" width="20" height="110" rx="8" fill="#3B3150" />
        <rect x="142" y="248" width="104" height="14" rx="6" fill="#3B3150" />

        {/* Мая */}
        <g className={cx('ms-maya', `pose-${pose}`)}>
          {/* волосся ззаду */}
          <path d="M 180 120 C 172 160 176 196 196 212 L 238 206 C 248 178 246 140 238 118 Z" fill={`url(#${id}-hair)`} />
          {/* тулуб */}
          <path d="M 176 262 C 172 222 178 196 198 186 C 214 178 238 178 252 188 C 266 200 270 230 268 262 Z" fill="#5B62C9" />
          <path d="M 206 184 C 214 194 232 194 240 184" fill="none" stroke="#454BA8" strokeWidth="5" strokeLinecap="round" />
          {/* шия й голова */}
          <rect x="214" y="160" width="16" height="22" rx="7" fill="#E2AE8D" />
          <ellipse cx="222" cy="136" rx="29" ry="32" fill="#E9B99A" />
          <ellipse cx="200" cy="140" rx="5" ry="7" fill="#E2AE8D" />
          {/* обличчя */}
          {pose === 'relaxed'
            ? <path d="M 230 133 q 5 -4 10 0" fill="none" stroke="#3A2416" strokeWidth="2.4" strokeLinecap="round" />
            : <ellipse cx="236" cy="134" rx="2.6" ry="3.2" fill="#3A2416" />}
          <path d="M 228 124 q 7 -4 14 -1" fill="none" stroke="#4B2C19" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M 247 140 q 3 4 0 7" fill="none" stroke="#C98E6E" strokeWidth="2" strokeLinecap="round" />
          <path d={pose === 'relaxed' ? 'M 232 152 q 7 6 13 -1' : 'M 234 153 q 5 3 10 0'} fill="none" stroke="#A85A4E" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="236" cy="146" r="5" fill="#F29C8F" opacity="0.35" />
          {/* волосся спереду: проділ збоку */}
          <path d="M 192 132 C 188 100 214 92 236 100 C 248 104 254 114 252 126 C 240 112 222 110 206 118 C 200 124 196 132 192 140 Z" fill={`url(#${id}-hair)`} />

          {/* руки за позою */}
          {pose === 'writing' && (
            <g className="ms-arm-write">
              <path d="M 246 196 C 264 210 282 220 306 224" fill="none" stroke="#5B62C9" strokeWidth="18" strokeLinecap="round" />
              <circle cx="310" cy="224" r="8" fill="#E9B99A" />
              <line x1="306" y1="228" x2="322" y2="210" stroke="#F5C76B" strokeWidth="3.5" strokeLinecap="round" className="ms-pen" />
            </g>
          )}
          {pose === 'relaxed' && (
            <g>
              <path d="M 196 196 C 178 170 184 132 206 104" fill="none" stroke="#5B62C9" strokeWidth="16" strokeLinecap="round" />
              <path d="M 250 196 C 270 178 272 140 250 110" fill="none" stroke="#5B62C9" strokeWidth="16" strokeLinecap="round" />
              <circle cx="207" cy="102" r="8" fill="#E9B99A" /><circle cx="249" cy="107" r="8" fill="#E9B99A" />
            </g>
          )}
          {pose === 'phone' && (
            <g>
              <path d="M 248 196 C 268 190 268 160 254 146" fill="none" stroke="#5B62C9" strokeWidth="16" strokeLinecap="round" />
              <rect x="244" y="122" width="13" height="26" rx="3" fill="#121833" stroke="#AAB5D1" strokeWidth="1.5" transform="rotate(14 250 135)" />
              <circle cx="252" cy="148" r="7" fill="#E9B99A" />
            </g>
          )}
        </g>

        {/* Стіл */}
        <rect x="120" y="230" width="380" height="16" rx="5" fill={`url(#${id}-desk)`} />
        <rect x="142" y="246" width="12" height="70" rx="4" fill="#4A3729" />
        <rect x="466" y="246" width="12" height="70" rx="4" fill="#4A3729" />

        {/* Зошит / домашнє */}
        <g className="ms-notebook">
          <path d="M 270 230 L 282 214 L 346 214 L 336 230 Z" fill="#F3F5FF" />
          <path d="M 284 219 L 340 219 M 281 223 L 337 223 M 278 227 L 334 227" stroke="#AAB5D1" strokeWidth="1" />
          {s.homework === 'done' && <g className="ms-stamp"><circle cx="312" cy="200" r="13" fill="#34D399" /><path d="M 305 200 l 5 5 l 9 -10" fill="none" stroke="#0B1020" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>}
        </g>

        {/* Пробні тести */}
        {s.tests && (
          <g className="ms-tests" transform="translate(372 192)">
            {Array.from({ length: s.tests.total }, (_, i) => (
              <g key={i} transform={`translate(${i * 6} ${-i * 9})`}>
                <rect x="0" y="0" width="42" height="36" rx="3" fill="#F3F5FF" stroke="#C9CFE6" />
                <path d="M 6 9 h 22 M 6 15 h 26 M 6 21 h 18" stroke="#AAB5D1" strokeWidth="1.4" />
                {i < (s.tests.done || 0)
                  ? <g><circle cx="33" cy="26" r="7" fill="#34D399" /><path d="M 29.5 26 l 2.4 2.6 l 4.6 -5" fill="none" stroke="#0B1020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
                  : <circle cx="33" cy="26" r="6" fill="none" stroke="#AAB5D1" strokeWidth="1.6" strokeDasharray="3 2" />}
              </g>
            ))}
            <text x="22" y="54" textAnchor="middle" className="ms-text-sm">{s.tests.done}/{s.tests.total} tests</text>
          </g>
        )}

        {/* Вечеря */}
        {s.plate && (
          <g className="ms-plate" transform="translate(196 224)">
            <ellipse cx="0" cy="4" rx="22" ry="6" fill="#D5DAEE" /><ellipse cx="0" cy="3" rx="14" ry="3.6" fill="#F3F5FF" />
            <line x1="28" y1="0" x2="28" y2="8" stroke="#AAB5D1" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* Телефон */}
        {s.phone === 'desk' && <rect x="352" y="222" width="28" height="7" rx="2" fill="#121833" stroke="#AAB5D1" strokeWidth="1" />}
        {s.phone === 'ring' && (
          <g className="ms-phone-ring">
            <rect x="352" y="206" width="14" height="24" rx="3" fill="#121833" stroke="#F5C76B" strokeWidth="1.6" />
            <path d="M 372 206 q 8 8 0 16" fill="none" stroke="#F5C76B" strokeWidth="2.2" strokeLinecap="round" className="ms-ring" />
            <path d="M 378 200 q 13 14 0 28" fill="none" stroke="#F5C76B" strokeWidth="2.2" strokeLinecap="round" className="ms-ring is-2" />
          </g>
        )}

        {/* Думка про майбутнє */}
        {s.thought && (
          <g className="ms-thought" transform="translate(262 46)">
            <circle cx="-14" cy="62" r="4" fill="#F3F5FF" opacity="0.8" /><circle cx="-4" cy="50" r="6" fill="#F3F5FF" opacity="0.85" />
            <rect x="0" y="0" width="92" height="40" rx="20" fill="#F3F5FF" />
            <text x="46" y="25" textAnchor="middle" className="ms-text-thought">{s.thought}</text>
          </g>
        )}

        {/* Тонування світу часу */}
        {world === 'past' && <rect x="0" y="0" width="520" height="340" fill="#A78BFA" opacity="0.10" style={{ mixBlendMode: 'color' }} />}
        {future && <rect x="6" y="6" width="508" height="328" rx="16" fill="none" stroke="#2DD4BF" strokeWidth="3" strokeDasharray="10 8" opacity="0.8" />}
        {s.badge && (
          <g className="ms-badge" transform="translate(16 296)">
            <rect x="0" y="0" width={Math.max(110, s.badge.length * 8.4 + 34)} height="30" rx="15" fill="#0B1020" opacity="0.82" />
            <circle cx="16" cy="15" r="5" fill={world === 'past' ? '#A78BFA' : world === 'future' ? '#2DD4BF' : '#38BDF8'} />
            <text x="28" y="20" className="ms-text-badge">{s.badge}</text>
          </g>
        )}
      </svg>
    </figure>
  );
}
