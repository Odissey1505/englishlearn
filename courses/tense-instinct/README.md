# Tense Instinct — інтерактивний курс усередині Inkwell

**Stop Translating. Start Thinking in English.** · A2–B1 · Teens 13–17 & Adults · 6 units · 10 lessons

## Як це підключено

| Файл | Роль |
|---|---|
| `courses/tense-instinct.js` | Метадані курсу й 10 уроків (`kind: 'interactive'`). Вантажиться разом з іншими курсами через `courses-index.js` |
| `courses/tense-instinct/*.jsx` | Код курсу. Вантажиться **лише при відкритті курсу**, компілюється Babel і кешується (`inkwell-mod:tense-instinct` у localStorage) |
| `courses/tense-instinct/ti.css` | Тема Midnight Academy (темна й світла), усі правила обмежені `.ti-root` |
| `courses/tense-instinct/lessons/` | Файли з контентом уроків: `ti-01.js` (The Big Picture), `ti-02.js` (Three Time Worlds); шаблон — `_template.js` |
| `courses/tense-instinct/ti-discovery.jsx` | Інтерактивні екрани Lesson 01 |
| `courses/tense-instinct/ti-worlds.jsx` | Інтерактивні екрани Lesson 02 (типи `tw-…`): Chrono Compass, Time Detective, Time Shift Lab, Broken Timeline, Roulette тощо |
| `courses/tense-instinct/assets/l02/` | Фото-сцени Lesson 02 (поки SVG-ілюстрації; список потрібних фото — `assets/l02/README.md`) |

Правки в `index.html` (позначені коментарями):

- `isInteractiveCourse` / `courseLevels` / `courseAges`;
- мультирівневі фільтри;
- `MidnightCourseCard`;
- `InteractiveCourseHost` разом із `loadInteractiveModule`;
- маршрут `#/tense-instinct/...`.

## Адреси (працюють після refresh і як прямі посилання)

- `#/tense-instinct` — лендинг
- `#/tense-instinct/lesson/ti-03` — урок; `…/ti-03/5` — конкретний екран
- `#/tense-instinct/explorer/past-perfect`, `…/explorer/compare/past-simple/present-perfect`
- `#/tense-instinct/gym`, `…/gym/battles`
- `#/tense-instinct/gallery` — галерея всіх 20 шаблонів (для вчителя)

## Прогрес

- **Учні:** таблиця `tense_instinct_progress` у Supabase. Поки таблиці немає — прогрес зберігається в браузері, а після її створення автоматично переноситься в акаунт. SQL є на лендингу курсу в блоці «Teacher tools».
- **Вчитель:** працює демо-сесія лише в пам'яті. Демонстрація на уроці ніколи не записує прогрес.
- Порожні уроки («Coming soon») не створюють записів прогресу і не можуть бути завершені.
- Доступ до курсу й уроків видає той самий механізм Inkwell: `course_access` і `lesson_access`.

## Lesson 02 · Three Time Worlds

- 10 обов’язкових екранів + 1 необов’язковий (Time Portal Roulette, `optional: true`).
- Урок завершується на екрані «Mission Complete» (`completionCriteria.explicit`): усі екрани відвідано, ключові активності виконано, Instinct Challenge пройдено (будь-який результат) і три питання рефлексії. Бейдж «Time Explorer» — локальна ілюстрація уроку; завершення пишеться в той самий прогрес Tense Instinct (`lesson:ti-02`).
- Вільні відповіді не перевіряються «штучним інтелектом»: речення-трансформації й пропуски порівнюються з наборами прийнятних відповідей (без урахування регістру, пунктуації, пробілів і скорочень), а невідомі варіанти учень порівнює зі зразком сам.
- Звук вимкнено за замовчуванням (`inkwell-ti-sound` у localStorage).

## Як додати урок

Дивись `lessons/_template.js`.
