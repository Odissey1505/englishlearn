/* ─────────────────────────────────────────────────────────────
 * ШАБЛОН файлу уроку Tense Instinct (цей файл НЕ підключено).
 *
 * 1. Скопіюй як lessons/ti-01.js і заміни 'ti-XX' на id уроку.
 * 2. У courses/tense-instinct.js для цього уроку встанови:
 *      status: 'ready', contentFile: 'courses/tense-instinct/lessons/ti-01.js',
 *      estimatedDuration: 45
 * 3. Готово: програвач, прогрес і Teacher Mode підхоплять урок самі.
 *
 * Типи екранів (type): cover, warmup, story, explain, timeline, compare,
 *   situation, mcq, builder, match, dragdrop, error, listening, youtube,
 *   speaking, dialogue, reflex, mission, summary, complete
 * Типи вправ (exercise.type): mcq, multi, match, order, gap, input, error,
 *   timeline, image, listening, speaking, situation  — схема в ti-exercises.jsx
 * Клітинки матриці (cellId): past|present|future + -simple|-continuous|
 *   -perfect|-perfectContinuous, напр. 'present-perfectContinuous'
 * Приклади всіх екранів — у галереї компонентів (#/tense-instinct/gallery)
 * та в TI_DEMO_LESSON (ti-lesson.jsx).
 * ───────────────────────────────────────────────────────────── */

window.INKWELL.tiLessons = window.INKWELL.tiLessons || {};
window.INKWELL.tiLessons['ti-XX'] = {
  id: 'ti-XX',
  objectives: ['…'],
  estimatedDuration: 45,
  completionCriteria: { reachLastScreen: true },
  screens: [
    { id: 's1', type: 'cover', section: 'Intro', content: { objectives: ['…'] },
      media: { src: 'courses/tense-instinct/assets/ti-XX-cover.webp', alt: '…' },
      teacherNotes: ['…'] },

    { id: 's2', type: 'situation', section: 'Understand', title: '…',
      media: { src: '', alt: '…' },
      exercise: {
        id: 'ex1', type: 'situation',
        context: { text: '…', meaning: '…' },
        prompt: '…',
        options: [{ id: 'a', text: '…' }, { id: 'b', text: '…', feedback: '…' }],
        answer: ['a'],                 // кілька id = кілька правильних відповідей
        explanation: '…', hints: ['…'],
        tags: { skill: 'understanding', world: 'present', aspect: 'perfect', pair: 'past-simple|present-perfect' },
      } },

    { id: 's3', type: 'youtube', section: 'Media', title: '…',
      content: { instructions: '…' },
      media: { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: '…', start: 30, end: 95 } },

    { id: 's9', type: 'complete', section: 'Finish' },
  ],
};
