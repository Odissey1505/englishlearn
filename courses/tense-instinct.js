/* ─────────────────────────────────────────────────────────────
 * Course: TENSE INSTINCT · A2–B1 · Teens 13–17 & Adults
 * ─────────────────────────────────────────────────────────────
 * Інтерактивний курс (kind: 'interactive'). Цей файл містить ЛИШЕ
 * метадані курсу й уроків — він вантажиться разом з іншими курсами.
 *
 * Сам інтерфейс курсу (лендинг, roadmap, програвач уроків, Tense
 * Explorer, Tense Gym) живе в courses/tense-instinct/ і вантажиться
 * ТІЛЬКИ коли курс відкривають (див. module нижче).
 *
 * Як додати контент уроку пізніше:
 *   1. Створи courses/tense-instinct/lessons/ti-01.js
 *      (шаблон — courses/tense-instinct/lessons/_template.js)
 *   2. У потрібному уроці нижче встанови:
 *        status: 'ready',
 *        contentFile: 'courses/tense-instinct/lessons/ti-01.js'
 *   Програвач уроків переписувати не потрібно.
 * ───────────────────────────────────────────────────────────── */

(function () {
  // Спільні поля, щоб загальні частини Inkwell (сітки, прогрес учня)
  // коректно показували уроки цього курсу.
  function lesson(o) {
    return Object.assign({
      type: 'Grammar',
      accent: 'plum',
      updated: 'Coming soon',
      status: 'coming-soon',      // 'coming-soon' | 'ready'
      contentFile: null,          // шлях до файлу з екранами уроку
      estimatedDuration: null,    // хв — заповнимо, коли буде контент
      pptUrl: null, notesUrl: null,
    }, o);
  }

  window.INKWELL.courses.push({
    id: 'tense-instinct',
    kind: 'interactive',
    cardVariant: 'midnight',

    title: 'Tense Instinct',
    subtitle: 'Stop Translating. Start Thinking in English.',
    tagline: 'Understand the meaning. Master the patterns. Build your instinct.',
    description: 'An interactive journey through English tenses. Discover how time, aspect, and context work together, then train your instinct through visual explanations, real-life situations, and speaking challenges.',
    category: 'Grammar / Tenses',

    // Сумісність зі старими фільтрами (один рядок) + мультизначення
    level: 'Pre-Intermediate',
    levels: ['Pre-Intermediate', 'Intermediate'],
    levelLabel: 'A2–B1',
    age: 'Teens 13–17',
    ages: ['Teens 13–17', 'Adults'],
    ageLabel: 'Teens & Adults',
    accent: 'plum',

    // Лінивий модуль: вантажиться лише при відкритті курсу.
    // Усі .jsx компілюються разом в одній області видимості.
    module: {
      id: 'tense-instinct',
      css: 'courses/tense-instinct/ti.css',
      files: [
        'courses/tense-instinct/ti-foundation.jsx',
        'courses/tense-instinct/ti-exercises.jsx',
        'courses/tense-instinct/ti-explorer.jsx',
        'courses/tense-instinct/ti-gym.jsx',
        'courses/tense-instinct/ti-lesson.jsx',
        'courses/tense-instinct/ti-app.jsx',
      ],
    },

    units: [
      {
        id: 'ti-u1', number: 1, title: 'The Big Picture', subtitle: 'Уся система часів одним поглядом',
        theme: 'indigo',
        lessons: [
          lesson({
            id: 'ti-01', number: 1, title: 'The Big Picture', titleUk: 'Загальна картина',
            description: 'Understanding the overall system of 3 Time Worlds and 4 Aspects.',
            tags: ['tenses', 'system', 'aspect'],
            plannedSections: ['Cover', 'Warm-up', 'Story introduction', 'Visual explanation', 'Interactive timeline', 'Practice', 'Summary'],
          }),
        ],
      },
      {
        id: 'ti-u2', number: 2, title: 'Time Worlds', subtitle: 'Минуле, теперішнє, майбутнє',
        theme: 'blue',
        lessons: [
          lesson({
            id: 'ti-02', number: 2, title: 'The Three Time Worlds', titleUk: 'Три світи часу',
            description: 'Past, Present, and Future — where the action sits and where we are looking from.',
            tags: ['past', 'present', 'future'],
            plannedSections: ['Cover', 'Warm-up', 'Image-based situations', 'Interactive timeline', 'Practice', 'Speaking', 'Summary'],
          }),
        ],
      },
      {
        id: 'ti-u3', number: 3, title: 'Aspect Worlds', subtitle: 'Як ми дивимось на дію',
        theme: 'violet',
        lessons: [
          lesson({
            id: 'ti-03', number: 3, title: 'Simple vs Continuous', titleUk: 'Simple проти Continuous',
            description: 'Facts, habits, situations, and processes.',
            tags: ['simple', 'continuous', 'aspect'],
            plannedSections: ['Cover', 'Story introduction', 'Tense comparison', 'Practice', 'Dialogue', 'Summary'],
          }),
          lesson({
            id: 'ti-04', number: 4, title: 'Perfect: The Reference Point', titleUk: 'Perfect: точка відліку',
            description: 'Reference points, previous events, experience, connection, and completion.',
            tags: ['perfect', 'reference-point'],
            plannedSections: ['Cover', 'Warm-up', 'Visual explanation', 'Interactive timeline', 'Practice', 'Speaking', 'Summary'],
          }),
          lesson({
            id: 'ti-05', number: 5, title: 'Perfect Continuous: The Duration Perspective', titleUk: 'Perfect Continuous: погляд на тривалість',
            description: 'Duration, ongoing processes, and reference points.',
            tags: ['perfect-continuous', 'duration'],
            plannedSections: ['Cover', 'Story introduction', 'Interactive timeline', 'Tense comparison', 'Practice', 'Summary'],
          }),
        ],
      },
      {
        id: 'ti-u4', number: 4, title: 'Tense Battles', subtitle: 'Пари, які найчастіше плутають',
        theme: 'teal',
        lessons: [
          lesson({
            id: 'ti-06', number: 6, title: 'Tense Battles I', titleUk: 'Битви часів I',
            description: 'Present contrasts and Past Simple vs Present Perfect.',
            tags: ['contrast', 'present-perfect', 'past-simple'],
            plannedSections: ['Cover', 'Warm-up', 'Tense comparison', 'Error correction', 'Reflex challenge', 'Summary'],
          }),
          lesson({
            id: 'ti-07', number: 7, title: 'Tense Battles II', titleUk: 'Битви часів II',
            description: 'Past contrasts, future forms, and mixed contexts.',
            tags: ['contrast', 'past', 'future'],
            plannedSections: ['Cover', 'Story introduction', 'Tense comparison', 'Practice', 'Dialogue', 'Summary'],
          }),
        ],
      },
      {
        id: 'ti-u5', number: 5, title: 'Real-Life Reflexes', subtitle: 'Швидкі реакції в живій мові',
        theme: 'gold',
        lessons: [
          lesson({
            id: 'ti-08', number: 8, title: 'Think Fast, Speak Naturally', titleUk: 'Думай швидко, говори природно',
            description: 'Quick reactions and spontaneous conversations.',
            tags: ['speaking', 'reflex'],
            plannedSections: ['Cover', 'Warm-up', 'Reflex challenge', 'Interactive dialogue', 'Speaking', 'Summary'],
          }),
          lesson({
            id: 'ti-09', number: 9, title: 'The Story Switch Challenge', titleUk: 'Виклик: зміни історію',
            description: 'Storytelling, timelines, and unexpected twists.',
            tags: ['storytelling', 'narrative-tenses'],
            plannedSections: ['Cover', 'Story introduction', 'Story mission', 'Interactive timeline', 'Speaking', 'Summary'],
          }),
        ],
      },
      {
        id: 'ti-u6', number: 6, title: 'The Instinct Test', subtitle: 'Фінальна місія',
        theme: 'rose',
        lessons: [
          lesson({
            id: 'ti-10', number: 10, title: 'The Final Instinct Mission', titleUk: 'Фінальна місія інстинкту',
            description: 'Final assessment and personalized mastery feedback.',
            type: 'Exam',
            tags: ['assessment', 'mastery'],
            plannedSections: ['Cover', 'Mission briefing', 'Mixed challenges', 'Speaking mission', 'Mastery feedback', 'Completion'],
          }),
        ],
      },
    ],
  });
})();
