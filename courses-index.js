/* ─────────────────────────────────────────────────────────────
 * Inkwell — courses registry
 * ─────────────────────────────────────────────────────────────
 * Щоб додати новий курс:
 *   1. Створи файл у папці courses/, наприклад: courses/beginner-7-9.js
 *   2. Додай його шлях у масив COURSE_FILES нижче
 *   3. Готово — головна сторінка автоматично його підхопить
 * ───────────────────────────────────────────────────────────── */

window.INKWELL = window.INKWELL || { courses: [] };

window.INKWELL.COURSE_FILES = [
  'courses/intermediate-10-12.js',
  // 'courses/beginner-7-9.js',
  // 'courses/advanced-teens.js',
];
