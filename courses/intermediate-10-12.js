/* ─────────────────────────────────────────────────────────────
 * Course: Intermediate · 10–12 років
 * ─────────────────────────────────────────────────────────────
 * Цей файл реєструє один курс у глобальному реєстрі INKWELL.
 * Не залежить від інших файлів окрім index.html, який створює
 * window.INKWELL = { courses: [] } перед завантаженням курсів.
 * ───────────────────────────────────────────────────────────── */

window.INKWELL.courses.push({
  id: 'intermediate-10-12',
  title: 'Intermediate · 10–12 років',
  subtitle: 'Курс для дітей середнього рівня',
  description: 'Структурований курс для учнів 10–12 років рівня Intermediate. Лексика, граматика, говоріння — крок за кроком, юніт за юнітом.',
  level: 'Intermediate',
  age: 'Kids 10–12',
  accent: 'terracotta',

  units: [
    {
      id: 'unit-1',
      number: 1,
      title: 'Activities, countries, clothes, appearance',
      subtitle: 'Дозвілля, країни, одяг, зовнішність',
      lessons: [

        /* ═══════════════════════════════════════════════════════
         * LESSON 1 · Free-time activities (Дозвілля)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u1-l1', number: 1,
          title: 'Free-time activities', titleUk: 'Дозвілля',
          type: 'Vocabulary', tags: ['hobbies', 'free-time', 'future-tenses'],
          updated: 'today', accent: 'sage', current: true,
          pptUrl: null, notesUrl: null,
          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🎮', en: "If you had a whole free Saturday with no homework — what's the first thing you'd do?", uk: 'Якби в тебе була ціла вільна субота без домашки — що б ти зробив(-ла) першим?' },
              { emoji: '📱', en: "What's an activity you secretly love but most people your age would find weird or boring?", uk: 'Яке заняття ти таємно любиш, але більшість твоїх однолітків вважала б дивним чи нудним?' },
              { emoji: '🌟', en: "If you could turn one of your hobbies into a YouTube channel, what would it be about?", uk: 'Якби ти міг(-ла) перетворити одне зі своїх захоплень на YouTube-канал, про що б він був?' }
            ]
          },
          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Here are nine cool free-time activities. Read each one carefully — try to understand the meaning from the English explanation first, and only open the spoiler if you're really stuck.",
            introUk: 'Ось дев\u2019ять класних занять для вільного часу. Спершу спробуй зрозуміти значення з англійського пояснення, і відкривай спойлер, тільки якщо застряг(-ла).',
            items: [
              { emoji: '🐾', en: 'volunteer at the animal shelter', uk: 'волонтерити у притулку для тварин', explain: "When you spend your free time helping at a place where lost cats and dogs live, without getting paid — you do it because you care.", accent: 'sage' },
              { emoji: '🤖', en: 'build and program robots', uk: 'створювати і програмувати роботів', explain: "You put together small machines from parts, and then write code that tells them what to do — move, talk, blink lights.", accent: 'terracotta' },
              { emoji: '📚', en: 'read adventure books', uk: 'читати пригодницькі книги', explain: "Stories full of action — heroes who explore jungles, find treasure, fight monsters, or travel to magical places.", accent: 'mustard' },
              { emoji: '🎮', en: 'play video games', uk: 'грати у відеоігри', explain: "Spend time on a console, computer or phone playing games — alone, with friends, or with people online.", accent: 'plum' },
              { emoji: '🌳', en: 'enjoy going to the park', uk: 'любити ходити в парк', explain: "You really like the feeling of being in a park — walking, sitting on the grass, watching dogs, just chilling outside.", accent: 'sage' },
              { emoji: '🥘', en: 'try out new recipes', uk: 'пробувати нові рецепти', explain: "Cook a dish you've never made before — pick something interesting from a YouTube video and see how it turns out.", accent: 'terracotta' },
              { emoji: '🗿', en: 'sculpt', uk: 'ліпити (зі скульптури)', explain: "Make 3D objects with your hands — usually from clay, plasticine, or even soap. You shape it into anything you imagine.", accent: 'mustard' },
              { emoji: '🎨', en: 'paint', uk: 'малювати фарбами', explain: "Use a brush and colours (watercolour, acrylic, gouache) to create pictures on paper or canvas.", accent: 'plum' },
              { emoji: '📸', en: 'take pictures', uk: 'фотографувати', explain: "Use a phone or camera to capture moments — your dog, the sky, a delicious dinner, or a funny face your friend made.", accent: 'sage' }
            ]
          },
          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right activity',
                instruction: 'Read the situation and choose the activity that fits best.',
                questions: [
                  { q: "Mia spends every Saturday at a place where she walks lost dogs and cleans cat cages. She doesn't get paid — she just loves animals.", options: ['volunteer at the animal shelter', 'play video games', 'paint'], correct: 0 },
                  { q: "Daniel just bought a kit with 200 small parts and a tiny motor. Tonight he's going to write code so it can move on its own.", options: ['take pictures', 'build and program robots', 'read adventure books'], correct: 1 },
                  { q: "Sofia is curled up under a blanket with a book about a girl who travels through time to find a lost city.", options: ['try out new recipes', 'sculpt', 'read adventure books'], correct: 2 },
                  { q: "It's 9 p.m. and Max is online with three friends, all playing the same battle royale.", options: ['play video games', 'paint', 'enjoy going to the park'], correct: 0 },
                  { q: "Anya saw a Korean dish on TikTok this morning. She bought the ingredients and is making it for the first time tonight.", options: ['volunteer at the animal shelter', 'try out new recipes', 'take pictures'], correct: 1 },
                  { q: "Leo has a big lump of clay on the table. He's slowly shaping it into a small dragon.", options: ['paint', 'sculpt', 'play video games'], correct: 1 },
                  { q: "On sunny days, Olivia just wants to walk between the trees, sit on the grass and watch the dogs run.", options: ['enjoy going to the park', 'read adventure books', 'build and program robots'], correct: 0 },
                  { q: "Tom carries his phone everywhere and snaps cool shots of street art, his cat, and weird-shaped clouds.", options: ['take pictures', 'sculpt', 'paint'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the conversations',
                instruction: 'Fill in the missing word or phrase. Use the word bank below — every chip is used exactly once.',
                bank: ['volunteer', 'robots', 'adventure', 'video games', 'park', 'recipes', 'sculpt', 'paint', 'pictures'],
                questions: [
                  { before: '— My birthday is in May. I want to play', after: 'with my friends all night, snacks and energy drinks included.', answer: 'video games' },
                  { before: '— You should join us at the shelter on Saturday — we', after: 'there every weekend.', answer: 'volunteer' },
                  { before: '— Look at this clay! I\u2019m going to', after: 'a tiny model of my cat.', answer: 'sculpt' },
                  { before: '— My grandma still reads', after: 'books at 70 — she\u2019s a real fan of mystery and travel stories.', answer: 'adventure' },
                  { before: '— Don\u2019t move! I want to take', after: 'of you with the sunset behind.', answer: 'pictures' },
                  { before: '— My brother loves to', after: 'walls. Last week he painted a giant whale in his room.', answer: 'paint' },
                  { before: '— On weekends I just go to the', after: 'with my dog and chill on a bench.', answer: 'park' },
                  { before: '— He builds tiny', after: 'and even programs them to dance to music.', answer: 'robots' },
                  { before: '— I follow this YouTuber who tries weird', after: 'every week — last time it was banana pizza!', answer: 'recipes' }
                ]
              },
              {
                type: 'match',
                title: 'Match the activity to the place',
                instruction: 'Match each activity (left) with the place where it usually happens (right). Click one tile on each side to pair them.',
                pairs: [
                  { left: 'volunteer at the animal shelter', right: 'a building with cages, food bowls, and lots of barking' },
                  { left: 'build and program robots', right: 'a maker space, robotics club, or a desk full of wires' },
                  { left: 'try out new recipes', right: 'the kitchen, with flour and YouTube open on the phone' },
                  { left: 'enjoy going to the park', right: 'somewhere with grass, trees, benches, and dogs' },
                  { left: 'paint', right: 'an art studio or a corner with brushes, water and paper' },
                  { left: 'take pictures', right: 'literally anywhere — the world is your subject' },
                  { left: 'play video games', right: 'on the sofa with a controller or in front of a glowing PC' }
                ]
              }
            ]
          },
          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read these three short messages from a chat between friends. They're all talking about the future — but in three different ways. Look at the highlighted parts and try to answer the questions below.",
            taskUk: 'Прочитай три коротких повідомлення з чату між друзями. Вони всі говорять про майбутнє — але трьома різними способами. Подивися на виділені частини і спробуй відповісти на питання нижче.',
            sentences: [
              { id: 1, html: '<strong>Anya, 6:14 p.m.:</strong> Don\u2019t forget — <span class="marker">we\'re meeting</span> at 5 tomorrow at the park. Bring your camera!' },
              { id: 2, html: '<strong>Max, 6:16 p.m.:</strong> Cool. I just decided — <span class="marker">I\'m going to try</span> that crazy ramen recipe tonight. Wish me luck.' },
              { id: 3, html: '<strong>Leo, 6:17 p.m.:</strong> Wait, I forgot my charger at school 😩 — <span class="marker">I\'ll bring</span> snacks instead, sorry!!' }
            ],
            questions: [
              "Anya already arranged the meeting yesterday — there's a fixed time and place. Which form does she use?",
              "Max decided to try the recipe earlier today — it's an intention, not a fixed plan. Which form?",
              "Leo decided to bring snacks RIGHT NOW, in the moment — it's a quick promise. Which form?",
              "Can you guess the rule? Three different futures for three different situations — fixed plan, intention, or instant decision."
            ]
          },
          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'In English, there are several ways to talk about the future. The three most common ones use <strong>Present Continuous</strong>, <strong>be going to</strong>, and <strong>will</strong>. Each one is used in a slightly different situation — and once you see the pattern, it becomes easy.',
            introUk: 'В англійській мові є кілька способів говорити про майбутнє. Три найпоширеніші використовують <em>Present Continuous</em>, <em>be going to</em> і <em>will</em>. Кожен використовується у трохи різних ситуаціях — і коли ти зрозумієш цю логіку, все стане простим.',
            blocks: [
              {
                title: 'Present Continuous', letter: 'A',
                when: 'fixed arrangements', whenUk: 'фіксовані домовленості',
                explain: "We use Present Continuous for future plans that are <strong>already arranged</strong> — there's a time, a place, maybe a ticket or a calendar invite. It's something both sides have agreed on.",
                explainUk: "Використовуємо Present Continuous для майбутніх планів, які <em>вже домовлені</em> — є час, місце, можливо квиток чи запис у календарі. Це те, про що обидві сторони домовилися.",
                formula: 'subject + <em>am / is / are</em> + verb-<em>ing</em>',
                examples: [
                  { en: "I'm meeting my friends at the park tomorrow at 5.", uk: 'Я зустрічаюся з друзями в парку завтра о 5-й.' },
                  { en: "We're flying to Spain next Saturday — the tickets are already booked.", uk: 'Ми летимо до Іспанії наступної суботи — квитки вже куплено.' },
                  { en: "She's having a sleepover party on Friday.", uk: 'У неї нічна вечірка в п\u2019ятницю.' }
                ]
              },
              {
                title: 'be going to', letter: 'B',
                when: 'plans & intentions', whenUk: 'наміри й плани',
                explain: "We use <em>be going to</em> when we've <strong>already decided</strong> to do something, but it's not yet fully arranged. It's our intention — what we plan to do, sometime in the future.",
                explainUk: "Використовуємо <em>be going to</em>, коли ми <em>вже вирішили</em> щось зробити, але це ще не точно сплановано. Це наш намір — те, що ми збираємося зробити колись у майбутньому.",
                formula: 'subject + <em>am / is / are</em> + <em>going to</em> + verb',
                examples: [
                  { en: "I'm going to learn how to sculpt this summer.", uk: 'Я збираюся навчитися ліпити цього літа.' },
                  { en: "He's going to volunteer at the animal shelter when he turns 12.", uk: 'Він збирається волонтерити у притулку для тварин, коли йому виповниться 12.' },
                  { en: "They're going to try out a new recipe tonight.", uk: 'Вони збираються спробувати новий рецепт сьогодні ввечері.' }
                ]
              },
              {
                title: 'will', letter: 'C',
                when: 'offers, promises, instant decisions', whenUk: 'пропозиції, обіцянки, миттєві рішення',
                explain: "We use <em>will</em> when we decide something <strong>at the moment of speaking</strong> — to offer help, to make a quick request, or to give a promise. It often happens spontaneously.",
                explainUk: "Використовуємо <em>will</em>, коли вирішуємо щось <em>у момент мовлення</em> — пропонуємо допомогу, просимо когось, або даємо обіцянку. Часто це відбувається спонтанно.",
                formula: 'subject + <em>will</em> + verb',
                examples: [
                  { en: "I'll help you with the robot — don't worry!", uk: 'Я допоможу тобі з роботом — не хвилюйся!' },
                  { en: "Will you take pictures at the party?", uk: 'Ти зробиш фото на вечірці?' },
                  { en: "I promise I'll read that adventure book this weekend.", uk: 'Обіцяю, що прочитаю ту пригодницьку книгу на вихідних.' }
                ]
              }
            ]
          },
          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right future',
                instruction: 'Read each situation and choose the best form: Present Continuous, be going to, or will.',
                questions: [
                  { q: 'Maya already booked the cinema tickets for Saturday. — "We ___ Wonka 2 at 6 p.m."', options: ["'re seeing", "'re going to see", "will see"], correct: 0 },
                  { q: 'Ben just decided to start saving money. — "I ___ save €5 a week from now on."', options: ['am saving', "'m going to save", "will save"], correct: 1 },
                  { q: 'Your friend\u2019s bag is heavy. You see this and immediately say: "Wait! I ___ help you carry it."', options: ["'m helping", "'m going to help", "'ll help"], correct: 2 },
                  { q: '"What ___ for your birthday?" "I think a sleepover with five friends — but no time yet."', options: ['are you doing', 'are you going to do', 'will you do'], correct: 1 },
                  { q: 'A friend asks if you\u2019re free. — "Sorry, I ___ Anya at the park at 4. We arranged it yesterday."', options: ["'m meeting", "'m going to meet", "will meet"], correct: 0 },
                  { q: 'A waiter approaches the table. You quickly look at the menu: "I ___ the burger and a cola, please."', options: ['am having', "'m going to have", "'ll have"], correct: 2 },
                  { q: '"Why are you wearing that apron?" "I ___ a cake. I have all the ingredients."', options: ['am baking', "'m going to bake", "will bake"], correct: 1 },
                  { q: '"Don\u2019t worry, Mum — I promise I ___ home by 9!"', options: ["'m being", "'m going to be", "'ll be"], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Open the brackets',
                instruction: 'Put the verb in the right future form. Use contractions like I\u2019m, he\u2019s, we\u2019ll.',
                questions: [
                  { before: '"Where are you tomorrow at 7?" "I', after: '(meet) Anya in front of the cinema — we already bought tickets."', answer: "'m meeting", hint: 'fixed plan' },
                  { before: '"What\u2019s in those bags?" "Flour, eggs, sugar — I', after: '(try) a new recipe tonight!"', answer: "'m going to try", hint: 'decided earlier' },
                  { before: 'OK, fine — I', after: '(call) you later, I promise.', answer: "'ll call", hint: 'promise' },
                  { before: '"Hold on, this box is heavy!" "I', after: '(help) you, give me one second."', answer: "'ll help", hint: 'instant offer' },
                  { before: 'My sister', after: '(start) painting lessons next month — Mum already paid for them.', answer: "'s starting", hint: 'fixed' },
                  { before: 'Look at those clouds — it', after: '(rain).', answer: "'s going to rain", hint: 'prediction' },
                  { before: '"Did you decide?" "Yes, I', after: '(volunteer) at the shelter every Saturday from now on."', answer: "'m going to volunteer", hint: 'intention' },
                  { before: '"What time', after: 'you (leave) for school?" "At 7:50, like always."', answer: 'are leaving', hint: 'fixed' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the natural one',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural one (the one a real teen would actually say).',
                questions: [
                  { q: 'Quick promise to your mum:', options: ["I'm calling you when I'm there.", "I'll call you when I get there."], correct: 1 },
                  { q: 'Pre-arranged dentist appointment:', options: ["I'm seeing the dentist on Friday at 4.", "I'll see the dentist on Friday at 4."], correct: 0 },
                  { q: 'You see your friend struggling with homework — instant offer:', options: ["I'm helping you with that.", "I'll help you with that."], correct: 1 },
                  { q: 'You and your dad just decided to repaint your room:', options: ["We'll repaint my room next month.", "We're going to repaint my room next month."], correct: 1 },
                  { q: 'Tomorrow\u2019s flight — already booked:', options: ["I'm flying to Lviv tomorrow morning.", "I'll fly to Lviv tomorrow morning."], correct: 0 },
                  { q: 'A waiter just took your friend\u2019s order, now it\u2019s your turn:', options: ["I'm having the chicken sandwich.", "I'll have the chicken sandwich."], correct: 1 },
                  { q: 'Talking about your big plan for next summer:', options: ["I'm going to learn how to surf.", "I'm learning how to surf."], correct: 0 }
                ]
              }
            ]
          },
          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '📖',
            textTitle: "Daniel's Saturday plan",
            text: [
              "It's Friday evening, and Daniel is texting his best friend Leo. Tomorrow is going to be a big day.",
              "First, in the morning, he's volunteering at the animal shelter — he does it every Saturday now. He's going to walk three dogs and help feed the cats.",
              "After lunch, he's meeting Anya at the park at 2 p.m. They arranged it on Wednesday. Anya wants to take pictures of the autumn leaves for her photography blog, and Daniel just enjoys going to the park with her.",
              "In the evening, Daniel is going to try out a new recipe — Korean tteokbokki. He saw it on a YouTube video and immediately decided to cook it. He has all the ingredients ready.",
              "But there's one problem: his little brother Max wants to play video games together at exactly 7 p.m. Daniel said, \"Don't worry, I'll play with you for an hour after dinner — I promise.\"",
              "Daniel is also going to start something new soon — he wants to build and program robots. He's saving money for a kit. \"I think I'll buy it in December,\" he told Leo. \"Maybe for my birthday.\""
            ],
            questions: [
              { q: "Why is Daniel volunteering at the animal shelter on Saturday morning?", options: ["He's doing it for the first time", "He goes there every Saturday now", "His mum told him to"], correct: 1 },
              { q: 'When did Daniel arrange to meet Anya?', options: ['Friday evening', 'Saturday morning', 'Wednesday'], correct: 2 },
              { q: 'Why is Anya going to the park?', options: ['To walk her dog', 'To take pictures for her blog', 'To meet new friends'], correct: 1 },
              { q: 'When did Daniel decide to try the new recipe?', options: ['Just now, while reading the recipe', 'After watching a YouTube video', 'A long time ago'], correct: 1 },
              { q: 'What did Daniel promise his brother?', options: ['He\u2019ll buy him a video game', 'He\u2019ll play video games with him for an hour', 'He\u2019ll cook him dinner'], correct: 1 },
              { q: 'What does Daniel want to do soon?', options: ['Start painting', 'Build and program robots', 'Read more adventure books'], correct: 1 },
              { q: 'Daniel\u2019s "I\u2019ll play with you for an hour" sounds like:', options: ['a fixed arrangement', 'a plan he made yesterday', 'a quick promise made on the spot'], correct: 2 }
            ]
          },
          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Pick three activities from the lesson. Which one is most YOU? Which one is least you? Why?",
              "Imagine: tomorrow at 5 p.m. — what's something you're already doing (a real fixed plan)? Who with?",
              "What's a hobby you're going to start in the next 6 months? What do you need to start it?",
              "If a younger kid asks you, \"Should I try video games or robotics?\" — what would you answer?",
              "Last weekend, did you do anything from this lesson's list? Tell us about it.",
              "Your friend looks bored on a rainy Sunday afternoon. What will you offer to do together — right now, in the moment?",
              "If you could have a YouTube channel about ONE of these activities, which would you pick? What would your first video be about?"
            ]
          },
          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 free-time activities — from volunteering at the shelter to building robots to taking pictures.",
              "Three ways to talk about the future:",
              "Present Continuous → fixed arrangements (already planned, time set).",
              "be going to → intentions and plans (decided earlier, not yet fully arranged).",
              "will → instant decisions, offers, and promises (decided in the moment of speaking)."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"I just decided — I ___ try painting this weekend." Which form?', options: ["'m trying", "'m going to try", "'ll try"], correct: 1 },
                { q: '"We ___ to the cinema tonight — tickets are booked." Which form?', options: ["'re going", "'re going to go", "will go"], correct: 0 },
                { q: '"That bag looks heavy — I ___ help you with it!" Which form?', options: ["'m helping", "'m going to help", "'ll help"], correct: 2 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My perfect weekend plan',
              task: "Write a short post (4–6 sentences) called <strong>\"My plan for next weekend\"</strong>. Use at least <strong>3 free-time activities</strong> from the lesson and <strong>all three future forms</strong> (Present Continuous for a fixed plan, <em>be going to</em> for an intention, and <em>will</em> for a promise or offer). Example start: <em>\"This Saturday I'm meeting my friends at the park...\"</em>",
              taskUk: 'Напиши короткий пост (4–6 речень) під назвою \"Мій план на наступні вихідні\". Використай щонайменше 3 заняття з уроку і всі три майбутні форми (Present Continuous для домовленості, be going to для наміру, will для обіцянки чи пропозиції).',
              tip: "Don't make it perfect — make it real. Even \"I'm going to play video games all day\" totally counts!"
            },
            speaking: {
              title: 'Record a 60-second hobby pitch',
              task: "Record a <strong>60-second voice message</strong> (to send to your teacher or a friend) where you try to convince someone to try YOUR favourite free-time activity. Tell them what it is, why it's awesome, and what they're going to need to start. Pretend you're making a TikTok!",
              taskUk: 'Запиши голосове повідомлення на 60 секунд, де ти переконуєш когось спробувати твоє улюблене заняття. Скажи, що це, чому воно класне, і що знадобиться, щоб почати. Уяви, що знімаєш TikTok!',
              tip: 'Speak naturally, like you\u2019re talking to a friend. Mistakes are fine — fluency beats perfection!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 2 · Around the world (Навколо світу)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u1-l2', number: 2,
          title: 'Around the world', titleUk: 'Навколо світу',
          type: 'Vocabulary', tags: ['countries', 'landmarks', 'articles'],
          updated: 'today', accent: 'mustard', current: false,
          pptUrl: null, notesUrl: null,
          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🌍', en: "If you could teleport to any country RIGHT NOW for just one day — where would you go and what's the first thing you'd do?", uk: 'Якби ти зараз міг(-ла) телепортуватися в будь-яку країну на один день — куди б ти подався(-лася) і що зробив(-ла) би першим?' },
              { emoji: '📸', en: "Which famous landmark do you see on Instagram or TikTok all the time? Have you ever wanted to visit it?", uk: 'Яку відому пам\u2019ятку ти постійно бачиш в Instagram чи TikTok? Чи хотів(-ла) ти колись її відвідати?' },
              { emoji: '🍣', en: "Imagine you can only eat food from ONE foreign country for the rest of your life. Which country, and why?", uk: 'Уяви, що тобі залишилося їсти страви тільки з ОДНІЄЇ іноземної країни до кінця життя. З якої країни і чому?' }
            ]
          },
          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Today we're going on a quick tour of 9 countries. Each one has a name, a famous landmark, and something it's known for. Read the English explanation first, and only open the spoiler if you need the Ukrainian translation.",
            introUk: 'Сьогодні ми вирушаємо у швидкий тур 9-ма країнами. У кожної з них — назва, відома пам\u2019ятка і те, чим вона славиться. Спочатку прочитай англійське пояснення, і відкривай спойлер тільки якщо потрібен український переклад.',
            items: [
              { emoji: '🇺🇦', en: 'Ukraine — pysanky & borshch', uk: 'Україна — писанки і борщ', explain: "A country in Eastern Europe famous for its decorated Easter eggs (pysanky), red beetroot soup (borshch), and the golden domes of Saint Sophia in Kyiv.", accent: 'mustard' },
              { emoji: '🇺🇸', en: 'the USA — the Statue of Liberty', uk: 'США — Статуя Свободи', explain: "A huge country in North America with skyscrapers in New York, Hollywood in Los Angeles, and a giant green statue holding a torch.", accent: 'sky' },
              { emoji: '🇯🇵', en: 'Japan — Mount Fuji & sushi', uk: 'Японія — гора Фудзі і суші', explain: "An island country in East Asia known for its perfect snow-capped volcano, cherry blossoms in spring, anime, and incredible food.", accent: 'plum' },
              { emoji: '🇬🇧', en: 'the UK — Big Ben & red buses', uk: 'Велика Британія — Біг Бен і червоні автобуси', explain: "A country in northwestern Europe famous for its huge clock tower in London, double-decker red buses, and the royal family.", accent: 'terracotta' },
              { emoji: '🇮🇹', en: 'Italy — the Colosseum & pizza', uk: 'Італія — Колізей і піца', explain: "A boot-shaped country in southern Europe with ancient ruins in Rome, gondolas in Venice, and the world's best pasta and pizza.", accent: 'terracotta' },
              { emoji: '🇪🇬', en: 'Egypt — the Pyramids', uk: 'Єгипет — піраміди', explain: "A country in North Africa famous for the enormous stone pyramids of Giza, ancient pharaohs, and the long Nile river.", accent: 'mustard' },
              { emoji: '🇧🇷', en: 'Brazil — the Amazon & football', uk: 'Бразилія — Амазонія і футбол', explain: "The biggest country in South America, home to the Amazon rainforest, colourful Rio carnival, and some of the best football players in history.", accent: 'sage' },
              { emoji: '🇦🇺', en: 'Australia — the Opera House & kangaroos', uk: 'Австралія — Оперний театр і кенгуру', explain: "A huge country and continent in the Southern Hemisphere with the famous Sydney Opera House, kangaroos, koalas, and the Great Barrier Reef.", accent: 'sage' },
              { emoji: '🇫🇷', en: 'France — the Eiffel Tower', uk: 'Франція — Ейфелева вежа', explain: "A country in western Europe famous for the iron tower in Paris, the Louvre museum, croissants, and the Champs-Élysées avenue.", accent: 'plum' }
            ]
          },
          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Where is this person right now?',
                instruction: 'Read each Instagram caption and guess which country the person is visiting.',
                questions: [
                  { q: '"Just climbed up 300 steps and finally saw the giant clock tower up close. London is unreal! 🕰️"', options: ['the UK', 'Italy', 'the USA'], correct: 0 },
                  { q: '"The cherry blossoms are everywhere and the ramen is INSANE. I never want to leave Tokyo. 🌸"', options: ['Australia', 'Japan', 'Brazil'], correct: 1 },
                  { q: '"Spent the whole morning at the Pyramids of Giza. Three thousand years old and still standing! 🏜️"', options: ['Egypt', 'France', 'Ukraine'], correct: 0 },
                  { q: '"Got lost in the Amazon trail today and met three different types of monkeys 🐒 No regrets."', options: ['Italy', 'the USA', 'Brazil'], correct: 2 },
                  { q: '"Saw the Statue of Liberty from the boat — even bigger than in the movies! 🗽"', options: ['the UK', 'the USA', 'France'], correct: 1 },
                  { q: '"Pizza for breakfast, pasta for lunch, gelato for dessert. The Colosseum tomorrow! 🍕"', options: ['Italy', 'Japan', 'Australia'], correct: 0 },
                  { q: '"Climbed up the Eiffel Tower at sunset. Paris is just unreal in this light. 🇫🇷"', options: ['France', 'the UK', 'Egypt'], correct: 0 },
                  { q: '"A kangaroo literally jumped past me on the way to Bondi Beach this morning 🦘"', options: ['Brazil', 'Australia', 'Japan'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the travel posts',
                instruction: "Fill in the country name. Look at the landmark or food and decide where the person is. Use the word bank below — every chip is used once.",
                bank: ['Ukraine', 'USA', 'Japan', 'UK', 'Italy', 'Egypt', 'Brazil', 'Australia', 'France'],
                questions: [
                  { before: 'My grandma in', after: 'taught me how to paint pysanky for Easter.', answer: 'Ukraine' },
                  { before: 'In', after: ', we visited Mount Fuji and ate fresh sushi by the sea.', answer: 'Japan' },
                  { before: 'Hollywood, basketball, and the Statue of Liberty — yep, this is the', after: '!', answer: 'USA' },
                  { before: 'I want to see the Pyramids one day — they\u2019re in', after: '.', answer: 'Egypt' },
                  { before: 'The Eiffel Tower is the symbol of', after: ' and especially Paris.', answer: 'France' },
                  { before: 'In', after: ', the football fans are LOUD — Rio carnival is on my bucket list.', answer: 'Brazil' },
                  { before: 'I rode a red double-decker bus through London — only in the', after: '!', answer: 'UK' },
                  { before: 'In', after: ', I saw a real kangaroo on the way to the Sydney Opera House.', answer: 'Australia' },
                  { before: 'Pizza, pasta, and the Colosseum — I love', after: ' so much.', answer: 'Italy' }
                ]
              },
              {
                type: 'match',
                title: 'Match the country to its famous thing',
                instruction: 'Click one tile on each side to pair the country with what it\u2019s most famous for.',
                pairs: [
                  { left: 'Ukraine', right: 'pysanky, borshch, and golden church domes' },
                  { left: 'Japan', right: 'cherry blossoms, sushi, and Mount Fuji' },
                  { left: 'Egypt', right: 'the Pyramids of Giza and the Nile river' },
                  { left: 'France', right: 'the Eiffel Tower, croissants, and the Louvre' },
                  { left: 'Italy', right: 'the Colosseum, gondolas, and the best pizza' },
                  { left: 'Brazil', right: 'the Amazon, Rio carnival, and legendary football' },
                  { left: 'Australia', right: 'kangaroos, the Opera House, and the Barrier Reef' }
                ]
              }
            ]
          },
          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read these travel captions from three friends. Look carefully at the highlighted words — sometimes there's a, sometimes the, and sometimes nothing at all. Why do you think they used different ones?",
            taskUk: 'Прочитай ці підписи до подорожніх фото від трьох друзів. Уважно подивися на виділені слова — десь стоїть a, десь the, а десь нічого. Як ти думаєш, чому використали різні варіанти?',
            sentences: [
              { id: 1, html: '<strong>Mia, day 3 in Paris:</strong> Today I climbed <span class="marker">the</span> Eiffel Tower! There was <span class="marker">a</span> long queue, but it was worth it. I love <span class="marker">— France</span>!' },
              { id: 2, html: '<strong>Leo in Tokyo:</strong> Just took <span class="marker">a</span> photo with <span class="marker">— Mount Fuji</span> in the background. Tomorrow I\u2019m visiting <span class="marker">the</span> oldest temple in Tokyo.' },
              { id: 3, html: '<strong>Anya:</strong> <span class="marker">— Italy</span> is amazing! Yesterday we saw <span class="marker">the</span> Colosseum and ate <span class="marker">an</span> incredible pizza.' }
            ],
            questions: [
              "Why do they say 'the Eiffel Tower' and 'the Colosseum' but just 'France' and 'Italy' (no article)?",
              "Why is it 'a long queue' and 'a photo' but 'the oldest temple'?",
              "Why 'an incredible pizza' (with 'an' not 'a')?",
              "Can you guess the rule? When do we use a/an, when the, and when nothing at all?"
            ]
          },
          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'English has three articles: <strong>a / an</strong> (the indefinite article), <strong>the</strong> (the definite article), and <strong>nothing at all</strong> (called the zero article). The choice depends on what you\u2019re talking about — something new, something specific, or a general category like a country name.',
            introUk: 'В англійській мові є три типи артиклів: <em>a / an</em> (неозначений артикль), <em>the</em> (означений артикль) і <em>нічого</em> (нульовий артикль). Вибір залежить від того, про що ти говориш — щось нове, щось конкретне, чи загальна категорія, як назва країни.',
            blocks: [
              {
                title: 'a / an', letter: 'A',
                when: 'one of many — first mention, any one', whenUk: 'один із багатьох — перша згадка, будь-який',
                explain: "Use <em>a</em> or <em>an</em> when you mention something for the <strong>first time</strong>, or when it could be <strong>any one</strong> of many similar things. Use <em>an</em> before a vowel SOUND (a, e, i, o, u): an apple, an hour. Use <em>a</em> before a consonant sound: a tower, a university.",
                explainUk: "Використовуй <em>a</em> або <em>an</em>, коли згадуєш щось <em>уперше</em>, або коли це може бути <em>будь-який</em> один із багатьох подібних предметів. <em>An</em> ставиться перед голосним ЗВУКОМ, <em>a</em> — перед приголосним.",
                formula: '<em>a / an</em> + singular countable noun',
                examples: [
                  { en: "I want to visit a country in Asia next summer — maybe Japan or Thailand.", uk: 'Я хочу відвідати якусь країну в Азії наступного літа — можливо Японію або Таїланд.' },
                  { en: "We took an Uber to the airport — the driver was super friendly.", uk: 'Ми взяли Uber до аеропорту — водій був дуже привітний.' },
                  { en: "Paris has a famous tower, a famous museum, and a famous river.", uk: 'У Парижі є відома вежа, відомий музей і відома річка.' }
                ]
              },
              {
                title: 'the', letter: 'B',
                when: 'specific, known, or unique', whenUk: 'конкретне, відоме, або унікальне',
                explain: "Use <em>the</em> when both the speaker and listener know <strong>exactly which one</strong> you mean. This includes: things mentioned before, unique things (the sun, the world), specific landmarks (the Eiffel Tower, the Pyramids), superlatives (the best, the oldest), and some country names with 'United', 'Kingdom' or plural form (the USA, the UK, the Netherlands).",
                explainUk: "Використовуй <em>the</em>, коли і той, хто говорить, і той, хто слухає, точно знають, <em>про який саме</em> предмет йдеться. Сюди входять: речі, згадані раніше; унікальні речі (the sun); конкретні пам\u2019ятки (the Eiffel Tower); найвищий ступінь (the best); і деякі назви країн з \"United\", \"Kingdom\" або у множині (the USA, the UK).",
                formula: '<em>the</em> + noun (singular, plural, or uncountable)',
                examples: [
                  { en: "Tomorrow we're climbing the Eiffel Tower — I'm so nervous about the stairs.", uk: 'Завтра ми піднімаємося на Ейфелеву вежу — я так нервую через сходи.' },
                  { en: "The Pyramids are the most famous landmark in Egypt.", uk: 'Піраміди — найвідоміша пам\u2019ятка Єгипту.' },
                  { en: "She's from the UK, but her mum is from the USA.", uk: 'Вона з Великої Британії, а її мама зі США.' }
                ]
              },
              {
                title: 'zero article (no article)', letter: 'C',
                when: 'general categories, most country names, cities', whenUk: 'загальні категорії, більшість назв країн, міста',
                explain: "Use <strong>no article at all</strong> with: most country names (Ukraine, Japan, France), continents (Asia, Europe), cities (Tokyo, Kyiv), languages (English, Spanish), and most general or plural ideas (I love pizza. Cats are cute.).",
                explainUk: "Не використовуй жодного артикля з: більшістю назв країн (Ukraine, Japan), континентами (Asia), містами (Tokyo, Kyiv), мовами (English), і загальними або множинними поняттями (I love pizza. Cats are cute.).",
                formula: '(nothing) + country / city / language / general noun',
                examples: [
                  { en: "I'm from Ukraine and my best friend is from Japan.", uk: 'Я з України, а мій найкращий друг — з Японії.' },
                  { en: "Next year, I want to visit Italy and learn Italian.", uk: 'Наступного року я хочу відвідати Італію і вивчити італійську.' },
                  { en: "Pizza is my favourite food — sorry, sushi!", uk: 'Піца — моя улюблена їжа — вибач, суші!' }
                ]
              }
            ]
          },
          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right article',
                instruction: 'Pick a, an, the, or — (no article) for each gap.',
                questions: [
                  { q: 'My pen-pal lives in ___ Japan. She sends me amazing photos.', options: ['a', 'the', '—'], correct: 2 },
                  { q: 'Look! There\u2019s ___ huge map of the world on the wall.', options: ['a', 'an', 'the'], correct: 0 },
                  { q: '"Where are you flying tomorrow?" "To ___ USA, to see my cousin in Texas."', options: ['a', 'the', '—'], correct: 1 },
                  { q: '___ Eiffel Tower was built in 1889 — it\u2019s in Paris.', options: ['A', 'An', 'The'], correct: 2 },
                  { q: 'My dad bought me ___ Italian phrasebook for our trip.', options: ['a', 'an', 'the'], correct: 1 },
                  { q: 'In ___ summer we usually visit my grandparents in Lviv.', options: ['a', 'the', '—'], correct: 2 },
                  { q: 'I want to learn ___ Spanish before we go to Barcelona.', options: ['a', 'the', '—'], correct: 2 },
                  { q: 'Yesterday we visited ___ oldest temple in Tokyo — it was built in 645.', options: ['a', 'an', 'the'], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Type the article',
                instruction: 'Type a, an, the, or write — (a dash) if no article is needed.',
                questions: [
                  { before: 'Anya is from', after: 'Ukraine. She lives in Kyiv.', answer: '—', hint: 'country name' },
                  { before: 'My uncle is', after: 'engineer. He works in Berlin.', answer: 'an', hint: 'vowel sound' },
                  { before: 'We saw', after: 'Statue of Liberty on our New York trip.', answer: 'the', hint: 'specific landmark' },
                  { before: 'I\u2019m going to', after: 'UK for a school exchange next year.', answer: 'the', hint: 'country with "United"' },
                  { before: 'Look! There\u2019s', after: 'kangaroo in our garden!', answer: 'a', hint: 'first mention' },
                  { before: 'In', after: 'Italy, people often have pasta for dinner.', answer: '—', hint: 'country name' },
                  { before: 'Tokyo is', after: 'capital of Japan.', answer: 'the', hint: 'unique' },
                  { before: 'Have you ever seen', after: 'Pyramids of Giza in real life?', answer: 'the', hint: 'specific landmark' }
                ]
              },
              {
                type: 'mcq',
                title: 'Which sounds natural?',
                instruction: 'A real teenager wouldn\u2019t say both of these — pick the one that sounds right.',
                questions: [
                  { q: 'Texting a friend after landing in London:', options: ["I'm in a UK!", "I'm in the UK!"], correct: 1 },
                  { q: 'Posting a photo from your school in Kyiv:', options: ["I love my school in Ukraine.", "I love my school in the Ukraine."], correct: 0 },
                  { q: 'Describing your favourite food:', options: ["I really love a sushi.", "I really love sushi."], correct: 1 },
                  { q: 'Talking about a famous tower:', options: ["She climbed Eiffel Tower yesterday.", "She climbed the Eiffel Tower yesterday."], correct: 1 },
                  { q: 'Asking a question about a job:', options: ["My mum is doctor.", "My mum is a doctor."], correct: 1 },
                  { q: 'About a language you want to learn:', options: ["I want to learn the Japanese.", "I want to learn Japanese."], correct: 1 },
                  { q: 'Talking about the world:', options: ["She wants to travel around world.", "She wants to travel around the world."], correct: 1 }
                ]
              }
            ]
          },
          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🌍',
            textTitle: "Anya\u2019s dream trip",
            text: [
              "Anya is twelve, she lives in Kyiv, and she has one big dream: to travel around the world.",
              "She keeps a special notebook with a list of all the places she wants to visit. On page one, she wrote: \"the Eiffel Tower in Paris, the Pyramids in Egypt, and Mount Fuji in Japan.\"",
              "Anya\u2019s best friend, Mia, is from the UK. Every summer, Mia comes to Ukraine and they explore Lviv and Odesa together. Anya is saving money to visit Mia in London next year.",
              "Last month, Anya\u2019s dad bought her a huge map of the world for her birthday. She put it on her bedroom wall and stuck a small red sticker on every country she wants to visit.",
              "Her top three are Italy (for the pizza and the Colosseum), Brazil (for the Amazon rainforest), and Australia (for the kangaroos and the Sydney Opera House).",
              "Anya is also learning English at school, and she just started learning Spanish on her phone. \"If I want to see the world,\" she told her mum, \"I need to speak the languages too.\"",
              "Her mum smiled and said, \"You\u2019ll get there, Anya. One day you\u2019ll be the cool aunt who sends postcards from everywhere.\""
            ],
            questions: [
              { q: "Where does Anya live?", options: ['London', 'Kyiv', 'Paris'], correct: 1 },
              { q: "What is on the first page of Anya\u2019s notebook?", options: ['A drawing of a kangaroo', 'A list of three famous landmarks', 'Photos from Italy'], correct: 1 },
              { q: "Where is Anya\u2019s best friend Mia from?", options: ['The USA', 'Brazil', 'The UK'], correct: 2 },
              { q: "What did Anya\u2019s dad give her for her birthday?", options: ['A trip to Paris', 'A huge world map', 'A Spanish phrasebook'], correct: 1 },
              { q: "Which is NOT in Anya\u2019s top three countries?", options: ['Italy', 'Egypt', 'Australia'], correct: 1 },
              { q: "What languages does Anya know or study?", options: ['English and French', 'English and Spanish', 'Italian and Japanese'], correct: 1 },
              { q: 'Why does Anya think languages are important?', options: ['To pass exams at school', 'To talk to her cat', 'Because she wants to see the world'], correct: 2 }
            ]
          },
          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "If you had Anya\u2019s notebook, which 3 places would YOU write on page one? Why those three?",
              "Tell us about a country you\u2019d love to visit. What\u2019s the first thing you\u2019d do there?",
              "Which country\u2019s food do you love most? Try to describe one dish without using its name.",
              "If a tourist comes to Ukraine for ONE day, where would you take them and what would you show them?",
              "Which famous landmark from the lesson looks the most boring to you? Don\u2019t worry — be honest!",
              "If you had to learn one new language for the next 6 months, which would you choose? Why?",
              "Have you ever met someone from another country? Where were they from? What surprised you about them?"
            ]
          },
          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 countries and their famous landmarks — from Ukraine to Australia.",
              "Three types of articles in English:",
              "a / an — for one of many, or first mention. Use 'an' before vowel sounds.",
              "the — for specific, known, unique things, or for landmarks (the Eiffel Tower).",
              "No article (zero) — for most country names, continents, cities, and languages."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"I really want to visit ___ Japan one day." Which article?', options: ['a', 'the', '—'], correct: 2 },
                { q: '"Have you ever climbed ___ Eiffel Tower?" Which article?', options: ['a', 'an', 'the'], correct: 2 },
                { q: '"My cousin is ___ artist who lives in ___ USA." Which combo?', options: ['an / the', 'a / —', 'the / —'], correct: 0 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My dream bucket-list',
              task: "Write your own <strong>travel bucket-list</strong> of <strong>5 places</strong> you want to visit (like Anya's notebook!). For each one, write one sentence with the country AND a famous landmark. Watch your articles carefully! Example: <em>\"1. I want to climb the Eiffel Tower in France.\"</em>",
              taskUk: 'Напиши власний список мрій із 5 місць, які хочеш відвідати (як у блокноті Ані!). Для кожного — одне речення з країною ТА відомою пам\u2019яткою. Уважно стеж за артиклями!',
              tip: 'Remember: most countries take NO article (Japan, Italy), but landmarks take "the" (the Colosseum, the Pyramids).'
            },
            speaking: {
              title: 'Be a 30-second tour guide',
              task: "Record a <strong>30–45 second clip</strong> as a tour guide for <strong>one country</strong> from the lesson. Welcome the tourists, tell them one landmark they MUST see, one food they MUST try, and one fun fact. Start with: <em>\"Welcome to ____! Today I'm going to show you...\"</em>",
              taskUk: 'Запиши кліп на 30–45 секунд як гід для однієї країни з уроку. Привітай туристів, скажи одну пам\u2019ятку, яку обов\u2019язково треба побачити, одну страву і один цікавий факт.',
              tip: 'Pick the country you find most interesting — your excitement will make it sound natural!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 3 · Who we are (Хто ми є)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u1-l3', number: 3,
          title: 'Who we are', titleUk: 'Хто ми є',
          type: 'Vocabulary', tags: ['clothes', 'accessories', 'appearance', 'past-simple', 'past-continuous'],
          updated: 'today', accent: 'plum', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '👕', en: "Look down: what are you wearing RIGHT NOW? Describe your outfit in three items. Boring pyjamas count!", uk: 'Подивись на себе: що на тобі ЗАРАЗ? Опиши свій наряд у трьох речах. Нудні піжами теж рахуються!' },
              { emoji: '💫', en: "What\u2019s the ONE piece of clothing you own that instantly makes you feel like YOU? Why does that piece feel so \u201cyou\u201d?", uk: 'Яка ОДНА річ одягу з твого гардеробу миттєво робить тебе \u2014 тобою? Чому саме вона така «твоя»?' },
              { emoji: '🕰️', en: "Think back to yesterday afternoon. What were you wearing? What were you doing at 4 PM? Try to remember both — details matter!", uk: 'Повернись у вчорашній день. Що на тобі було одягнено? Що ти робив(-ла) о 16:00? Спробуй пригадати і те, і те \u2014 деталі важливі!' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to a huge wardrobe upgrade! Today we\u2019re unpacking 20 words for clothes and accessories \u2014 the vocabulary you need to describe ANY outfit, from cosy Sunday hoodie to fancy wedding shoes. This is the vocabulary of \u201cwho we are\u201d, because what we wear tells a story about us every single day.",
            introUk: 'Ласкаво просимо до великого апгрейду гардеробу! Сьогодні ми розкриваємо 20 слів для одягу та аксесуарів — лексика, яка знадобиться, щоб описати БУДЬ-ЯКИЙ наряд, від затишного недільного худі до модельних весільних туфель. Це лексика «хто ми є», бо те, що ми носимо, щодня розповідає історію про нас.',
            items: [
              // Footwear
              { emoji: '👢', en: 'boots', uk: 'чоботи / берці', explain: "Tall or ankle-high shoes that cover part of your leg \u2014 perfect for cold, rain or looking cool.", accent: 'terracotta' },
              { emoji: '👟', en: 'trainers', uk: 'кросівки', explain: "Sports shoes for running, PE class, or just everyday comfort. Also called \u201csneakers\u201d in the US.", accent: 'sky' },
              { emoji: '👡', en: 'sandals', uk: 'сандалі / босоніжки', explain: "Open summer shoes with straps \u2014 for the beach, the park, or just a hot July day.", accent: 'mustard' },
              // Tops
              { emoji: '👔', en: 'shirt', uk: 'сорочка', explain: "A top with buttons and a collar \u2014 for school uniform, family events, or looking a bit smart.", accent: 'sky' },
              { emoji: '🧥', en: 'hoodie', uk: 'худі', explain: "A cosy sweatshirt with a hood \u2014 the uniform of every teenager on a chilly afternoon.", accent: 'plum' },
              { emoji: '🧶', en: 'cardigan', uk: 'кардиган', explain: "A soft knitted jacket that buttons up the front \u2014 like a warm hug for autumn.", accent: 'sage' },
              // Outerwear
              { emoji: '🧥', en: 'jacket', uk: 'куртка', explain: "A short coat for spring, autumn, or a cool summer evening \u2014 lighter than a coat.", accent: 'terracotta' },
              { emoji: '🧣', en: 'coat', uk: 'пальто', explain: "A long, warm outer garment for winter \u2014 the big serious cousin of the jacket.", accent: 'plum' },
              // Bottoms
              { emoji: '👖', en: 'skirt', uk: 'спідниця', explain: "A piece of clothing from waist down, no separate legs \u2014 short, long, pleated, denim, anything.", accent: 'mustard' },
              { emoji: '🩳', en: 'shorts', uk: 'шорти', explain: "Short trousers that stop above the knee \u2014 summer, PE, sleeping, playing football.", accent: 'sky' },
              { emoji: '🩱', en: 'leggings', uk: 'легінси', explain: "Tight stretchy trousers \u2014 for yoga, dancing, gym, or just weekend comfort.", accent: 'sage' },
              { emoji: '🧦', en: 'tights', uk: 'колготки', explain: "Very thin, tight leg-covering that goes from waist to toes \u2014 usually worn under skirts.", accent: 'terracotta' },
              // Accessories — daily
              { emoji: '🧢', en: 'hat', uk: 'капелюх / шапка', explain: "Anything you wear on your head \u2014 winter beanie, summer cap, straw hat for the beach.", accent: 'mustard' },
              { emoji: '🧣', en: 'scarf', uk: 'шарф / шалик', explain: "A long piece of fabric around your neck \u2014 for warmth in winter or style in autumn.", accent: 'sky' },
              { emoji: '👜', en: 'handbag', uk: 'сумочка', explain: "A bag you carry in your hand or over your shoulder \u2014 for your phone, keys, small stuff.", accent: 'terracotta' },
              { emoji: '👞', en: 'belt', uk: 'ремінь / пасок', explain: "A strip of leather or fabric around your waist \u2014 keeps trousers up, also just for style.", accent: 'plum' },
              { emoji: '👔', en: 'tie', uk: 'краватка', explain: "A long thin piece of fabric men wear around the neck \u2014 school uniform, weddings, business.", accent: 'sage' },
              // Jewellery
              { emoji: '💍', en: 'ring', uk: 'каблучка / перстень', explain: "A small circle you wear on your finger \u2014 could be a birthday gift, a friendship ring, or fancy jewellery.", accent: 'mustard' },
              { emoji: '📿', en: 'bracelet', uk: 'браслет', explain: "A piece of jewellery you wear around your wrist \u2014 friendship bracelet, silver chain, colourful beads.", accent: 'terracotta' },
              { emoji: '💎', en: 'earrings', uk: 'сережки', explain: "Small jewellery pieces you wear on your ears \u2014 studs, hoops, sparkly, silver, gold.", accent: 'plum' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right clothing word',
                instruction: 'Read each situation and choose the item that fits best.',
                questions: [
                  { q: "It\u2019s snowing hard, and Sofia is going outside. She puts on her long, warm ___ .", options: ['shorts', 'coat', 'sandals'], correct: 1 },
                  { q: 'For PE class on Monday, Nick always wears his black ___ .', options: ['trainers', 'boots', 'tie'], correct: 0 },
                  { q: 'It\u2019s a hot summer day. Anya slips on her comfy ___ and goes to the beach.', options: ['sandals', 'boots', 'coat'], correct: 0 },
                  { q: 'Grandma gave Maya a silver ___ for her birthday. It\u2019s her favourite one on her finger.', options: ['bracelet', 'ring', 'earring'], correct: 1 },
                  { q: 'The autumn wind is cold, so Anya wraps her long ___ around her neck.', options: ['scarf', 'belt', 'tights'], correct: 0 },
                  { q: 'Sofia keeps her phone, keys and lip balm in a small brown ___ .', options: ['handbag', 'ring', 'hat'], correct: 0 },
                  { q: 'For the school concert, Nick wore a formal white ___ with a blue ___ .', options: ['hoodie / cardigan', 'shirt / tie', 'jacket / boots'], correct: 1 },
                  { q: "On Sunday morning, Maya always wears her comfy ___ and stays home reading.", options: ['tights and skirt', 'shorts and hoodie', 'coat and tie'], correct: 1 },
                  { q: 'Anya\u2019s grandma knitted her a soft, buttoned ___ in her favourite green colour.', options: ['jacket', 'cardigan', 'tie'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Anya\u2019s wardrobe diary',
                instruction: 'Anya is writing about her outfits for the whole week. Fill in the missing words. Every chip is used exactly once.',
                bank: ['boots', 'trainers', 'skirt', 'hoodie', 'cardigan', 'scarf', 'earrings', 'bracelet', 'handbag'],
                questions: [
                  { before: 'Monday: School day. My denim', after: 'and white shirt \u2014 classic.', answer: 'skirt' },
                  { before: 'Tuesday: PE morning! Black leggings and my old red', after: 'that I\u2019ve had since I was 9.', answer: 'trainers' },
                  { before: 'Wednesday: It rained. I wore my black', after: 'and jumped through every puddle.', answer: 'boots' },
                  { before: 'Thursday: Concert night! Fancy silver', after: 'in both ears \u2014 they SPARKLE!', answer: 'earrings' },
                  { before: 'Friday: Cold morning. My warm', after: 'wrapped twice around my neck.', answer: 'scarf' },
                  { before: 'Saturday: Cinema day with Sofia. Cosy grey', after: 'and jeans \u2014 no makeup, all comfort.', answer: 'hoodie' },
                  { before: "Sunday: Grandma\u2019s house. Grandma\u2019s hand-knitted", after: 'over my shoulders \u2014 she made it for my birthday.', answer: 'cardigan' },
                  { before: 'BONUS: My favourite', after: 'goes with EVERY outfit \u2014 leather, brown, tiny gold chain.', answer: 'handbag' },
                  { before: 'BONUS 2: Sofia\u2019s friendship', after: 'is on my wrist 24/7. Never take it off.', answer: 'bracelet' }
                ]
              },
              {
                type: 'match',
                title: 'Match the item with where you wear it on your body',
                instruction: 'Each clothing or accessory (left) goes on a specific part of your body (right).',
                pairs: [
                  { left: 'ring', right: 'on your finger' },
                  { left: 'earrings', right: 'on your ears' },
                  { left: 'bracelet', right: 'around your wrist' },
                  { left: 'belt', right: 'around your waist' },
                  { left: 'tie', right: 'around your neck' },
                  { left: 'hat', right: 'on your head' },
                  { left: 'tights', right: 'from waist to toes' },
                  { left: 'sandals', right: 'on your feet in summer' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read this tiny story about Sofia\u2019s morning. Two verb tenses are mixed here \u2014 one shows an ACTION IN PROGRESS in the past, the other shows a QUICK COMPLETED action that interrupted it. Can you spot both?",
            taskUk: 'Прочитай коротеньку історію про ранок Софії. Тут змішані два часи — один показує ДІЮ В ПРОЦЕСІ у минулому, інший — ШВИДКУ ЗАВЕРШЕНУ дію, яка її перервала. Чи можеш ти впізнати обидва?',
            sentences: [
              { id: 1, html: '📖 <em>Yesterday at 8 AM, Sofia <span class="marker">was putting on</span> her new boots when her sister <span class="marker">shouted</span>: \u201cWRONG FEET!\u201d</em>' },
              { id: 2, html: '📖 <em>She <span class="marker">was wearing</span> her favourite hoodie and <span class="marker">was drinking</span> tea at 8:15 when the doorbell <span class="marker">rang</span>.</em>' },
              { id: 3, html: '📖 <em>Then she quickly <span class="marker">grabbed</span> her handbag, <span class="marker">put on</span> her scarf and <span class="marker">ran</span> to school.</em>' }
            ],
            questions: [
              "In sentence 1: which action was LONGER and IN PROGRESS \u2014 putting on the boots, or shouting? Which one interrupted the other?",
              "Look at the verb forms: WAS PUTTING ON vs SHOUTED. One has \u201cwas + -ing\u201d, the other is just Past Simple. Which one is for the long \u201cbackground\u201d action?",
              "In sentence 2, there are TWO long actions happening at 8:15 (wearing, drinking). What single quick action interrupted them?",
              "Sentence 3 has three quick actions in a row: grabbed, put on, ran. All Past Simple. Why NOT \u201cwas grabbing\u201d, \u201cwas putting on\u201d? What\u2019s different about a chain of quick actions?",
              "In one sentence: Past Simple = ___ . Past Continuous = ___ . Which one paints the background, and which one moves the story forward?"
            ]
          },

          grammar: {
            title: 'Past Simple vs Past Continuous', titleUk: 'Past Simple vs Past Continuous',
            intro: "These two tenses are the classic \u201cstoryteller\u2019s duo\u201d. <strong>Past Simple</strong> is the <em>action</em> \u2014 fast, finished, moving the story forward. <strong>Past Continuous</strong> is the <em>scene</em> \u2014 the long thing happening in the background when the action hit. Master this pair and every story you tell will suddenly sound 10x more natural.",
            introUk: 'Ці два часи \u2014 класичний «дует оповідача». <em>Past Simple</em> \u2014 це <strong>дія</strong>: швидка, завершена, рухає історію вперед. <em>Past Continuous</em> \u2014 це <strong>сцена</strong>: щось довге, що відбувалося на фоні, коли ця дія сталася. Освої цю пару \u2014 і кожна твоя історія одразу зазвучить у 10 разів природніше.',
            blocks: [
              {
                title: 'Past Simple \u2014 the quick action', letter: 'A',
                when: 'a finished, quick action in the past', whenUk: 'завершена швидка дія в минулому',
                explain: "Use <strong>Past Simple</strong> for a <em>completed action</em> in the past. When it happened is finished. Formula: <em>V2</em> (second form of the verb) for regular verbs (walked, played, arrived) or the special irregular form (went, ate, wore). Question / negative form uses <em>did / didn\u2019t</em> + base verb. Perfect for chains of actions: \u201cShe woke up, brushed her teeth, put on her jacket, and left.\u201d",
                explainUk: "Вживаємо <em>Past Simple</em> для ЗАВЕРШЕНОЇ швидкої дії в минулому. Час, коли це сталося, закінчився. Формула: <strong>V2</strong> (друга форма) для правильних дієслів (walked, played, arrived) або спеціальна неправильна форма (went, ate, wore). Питання/заперечення: <em>did / didn\u2019t</em> + інфінітив. Ідеально для ланцюжка дій: «She woke up, brushed her teeth, put on her jacket, and left.»",
                formula: '(+) subject + V2 &nbsp;|&nbsp; (\u2013) subject + <em>didn\u2019t</em> + V1 &nbsp;|&nbsp; (?) <em>Did</em> + subject + V1?',
                examples: [
                  { en: "Nick put on his trainers and ran to school.", uk: 'Нік надягнув кросівки і побіг до школи.' },
                  { en: "Anya bought a new hoodie yesterday.", uk: 'Аня купила нове худі вчора.' },
                  { en: "We didn\u2019t wear jackets \u2014 the weather was too warm.", uk: 'Ми не носили курток — погода була занадто теплою.' },
                  { en: "Did you see Sofia\u2019s new earrings this morning?", uk: 'Ти бачив(-ла) сьогодні нові сережки Софії?' }
                ]
              },
              {
                title: 'Past Continuous \u2014 the action in progress', letter: 'B',
                when: 'a long action happening AT a moment in the past', whenUk: 'довга дія в процесі в певний момент минулого',
                explain: "Use <strong>Past Continuous</strong> for an action that was <em>in progress</em> at a specific past moment. It\u2019s the \u201cbackground\u201d of the story. Formula: <em>was / were + -ing</em>. Was for I / he / she / it. Were for you / we / they. Use it with time expressions like <em>at 8 AM, all evening, when Mum called, while I was reading</em>. Perfect for \u201cwhat was going on\u201d before something happened.",
                explainUk: "Вживаємо <em>Past Continuous</em> для дії, яка була В ПРОЦЕСІ у певний момент минулого. Це «фон» історії. Формула: <em>was / were + -ing</em>. <strong>was</strong> для I / he / she / it. <strong>were</strong> для you / we / they. Часто зі словами: <em>at 8 AM, all evening, when Mum called, while I was reading</em>. Ідеально для «що відбувалося», перш ніж щось сталося.",
                formula: '(+) subject + <em>was/were</em> + V-ing &nbsp;|&nbsp; (\u2013) subject + <em>wasn\u2019t/weren\u2019t</em> + V-ing &nbsp;|&nbsp; (?) <em>Was/Were</em> + subject + V-ing?',
                examples: [
                  { en: "At 7 AM, I was tying my shoelaces.", uk: 'О 7-й ранку я зав\u2019язував(-ла) шнурівки.' },
                  { en: "Anya was wearing her red cardigan all evening.", uk: 'Аня була в червоному кардигані весь вечір.' },
                  { en: "We weren\u2019t wearing our coats \u2014 it was surprisingly warm.", uk: 'Ми не були в пальтах — було несподівано тепло.' },
                  { en: "Was Nick wearing that funny hat at the party?", uk: 'Нік був у тій кумедній шапці на вечірці?' }
                ]
              },
              {
                title: 'When they meet: the story pattern', letter: 'C',
                when: 'putting them together in one sentence', whenUk: 'коли зустрічаються в одному реченні',
                explain: "This is where the magic happens. In one sentence, they play different roles: <strong>Past Continuous</strong> sets the SCENE (long, in progress), then <strong>Past Simple</strong> is the ACTION that INTERRUPTED it. Two key connector words: <em>WHILE</em> usually goes with Past Continuous (\u201cwhile I was walking\u201d), <em>WHEN</em> usually goes with Past Simple (\u201cwhen it started raining\u201d). Also: for TWO long parallel actions \u2014 both in Past Continuous with <em>while</em>: \u201cWhile I was cooking, Mum was reading.\u201d",
                explainUk: "Тут відбувається магія. В одному реченні вони грають різні ролі: <em>Past Continuous</em> задає СЦЕНУ (довга, в процесі), потім <em>Past Simple</em> \u2014 ДІЯ, яка її ПЕРЕРВАЛА. Дві ключові сполучники: <strong>WHILE</strong> зазвичай з Past Continuous («while I was walking»), <strong>WHEN</strong> зазвичай з Past Simple («when it started raining»). Також: для ДВОХ довгих паралельних дій \u2014 обидві в Past Continuous зі словом <em>while</em>: «While I was cooking, Mum was reading.»",
                formula: 'Past Continuous + <em>when</em> + Past Simple &nbsp;|&nbsp; <em>While</em> + Past Continuous, Past Simple &nbsp;|&nbsp; <em>While</em> + Past Continuous, Past Continuous',
                examples: [
                  { en: "I was putting on my boots when the phone rang.", uk: 'Я взував(-ла) чоботи, коли задзвонив телефон.' },
                  { en: "While Anya was choosing a scarf, her sister took her handbag.", uk: 'Поки Аня вибирала шарф, сестра забрала її сумочку.' },
                  { en: "Nick was wearing his lucky trainers when he scored the winning goal.", uk: 'Нік був у своїх щасливих кросівках, коли забив переможний гол.' },
                  { en: "While Sofia was doing her homework, her brother was playing video games.", uk: 'Поки Софія робила домашку, її брат грав у відеоігри.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Simple or Continuous? Pick the right form',
                instruction: 'Look at each sentence. Choose the verb form that fits.',
                questions: [
                  { q: 'At 3 PM yesterday, Sofia ___ her new leggings for the first time.', options: ['tried', 'was trying'], correct: 1 },
                  { q: 'Nick ___ his old boots to the party last night.', options: ['wore', 'was wearing'], correct: 0 },
                  { q: 'While Anya ___ her cardigan, the doorbell rang.', options: ['put on', 'was putting on'], correct: 1 },
                  { q: 'Maya ___ her earrings, brushed her hair, and left for school.', options: ['put in', 'was putting in'], correct: 0 },
                  { q: 'When Mum called, I ___ my favourite hoodie.', options: ['wore', 'was wearing'], correct: 1 },
                  { q: 'While Sofia ___ TV, her cat stole her scarf.', options: ['watched', 'was watching'], correct: 1 },
                  { q: 'The rain ___ suddenly, so we ran home without coats.', options: ['started', 'was starting'], correct: 0 },
                  { q: 'What ___ Nick ___ when you saw him at the mall?', options: ['did / wear', 'was / wearing'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the verb in Past Simple or Past Continuous',
                instruction: 'Read each sentence carefully. Is it a quick finished action, or a long one in progress?',
                questions: [
                  { before: 'Anya', after: '(wear) her red boots when she walked into class this morning.', answer: 'was wearing', hint: 'in progress at a moment' },
                  { before: 'Nick', after: '(buy) three new t-shirts last Saturday.', answer: 'bought', hint: 'finished action' },
                  { before: 'At 9 PM, I', after: '(watch) a movie in my pyjamas.', answer: 'was watching', hint: 'at a specific past moment' },
                  { before: 'While Maya', after: '(look) for her earrings, she found 5 UAH on the floor.', answer: 'was looking', hint: 'while + long action' },
                  { before: 'Sofia', after: '(finish) her homework, put on her scarf, and left for the park.', answer: 'finished', hint: 'chain of quick actions' },
                  { before: 'It', after: '(rain) hard when we came out of the shop.', answer: 'was raining', hint: 'background scene' },
                  { before: 'I', after: '(not / wear) a coat yesterday because it was warm.', answer: "didn\u2019t wear", hint: 'negative Past Simple' },
                  { before: 'What', after: 'you (do) at 8 PM last night?', answer: 'were you doing', hint: 'question about action at a moment' }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Nick\u2019s story with the right forms',
                instruction: 'Read Nick\u2019s story about a school photo day disaster. Fill in each verb in Past Simple OR Past Continuous.',
                questions: [
                  { before: 'Last Tuesday, my class', after: '(have) our school photo. Total disaster.', answer: 'had' },
                  { before: 'At 7:45 AM, I', after: '(look) for my school tie \u2014 I couldn\u2019t find it ANYWHERE.', answer: 'was looking' },
                  { before: 'While I', after: '(search) under my bed, my dog', answer: 'was searching' },
                  { before: '', after: '(eat) my clean white shirt. Yes, EATING it.', answer: 'was eating' },
                  { before: 'I', after: '(shout), Mum', answer: 'shouted' },
                  { before: '', after: '(run) into the room, and Dad', answer: 'ran' },
                  { before: '', after: '(laugh) so hard he cried.', answer: 'laughed' },
                  { before: 'While Mum', after: '(iron) my only other shirt, I', answer: 'was ironing' },
                  { before: '', after: '(brush) my teeth in a panic.', answer: 'was brushing' },
                  { before: 'In the end, I', after: '(arrive) at school 15 minutes late \u2014 in the WRONG uniform.', answer: 'arrived' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the correct, natural one.',
                questions: [
                  { q: 'Two long actions at the same time:', options: ['While I read, Mum was cooking.', 'While I was reading, Mum was cooking.'], correct: 1 },
                  { q: 'Quick action interrupts a long one:', options: ['I put on my hat when it started raining.', 'I was putting on my hat when it started raining.'], correct: 1 },
                  { q: 'Chain of quick actions:', options: ['She was grabbing her bag, was opening the door, and was leaving.', 'She grabbed her bag, opened the door, and left.'], correct: 1 },
                  { q: 'At a specific past moment:', options: ['At 10 PM last night, I was doing my homework.', 'At 10 PM last night, I did my homework.'], correct: 0 },
                  { q: 'Question about a moment:', options: ['What did you wear at the party?', 'What were you wearing at the party?'], correct: 1 },
                  { q: 'Two quick past actions:', options: ['I opened the door and saw my cat.', 'I was opening the door and was seeing my cat.'], correct: 0 },
                  { q: 'Background + action:', options: ['Sofia was choosing earrings when her sister came in.', 'Sofia chose earrings when her sister was coming in.'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '👗',
            textTitle: 'Anya\u2019s five-outfit week \u2014 a diary',
            text: [
              "Monday.",
              "I woke up late and everything went wrong immediately. While I was brushing my teeth, my little brother stole my favourite hoodie \u2014 the big grey one with the blue letters. I chased him around the flat in my pyjamas, tights and one sock. Mum was laughing so hard she cried. In the end, I wore my second-favourite hoodie and my jeans. Not the plan, but okay.",
              "Tuesday.",
              "PE morning! I put on my black leggings, my green trainers (they\u2019re old but they\u2019re LUCKY) and my school hoodie. While I was running for the bus, I dropped my handbag. My phone flew out. Miracle: no crack. I said \u201cthank you\u201d to the universe out loud and probably scared a stranger.",
              "Wednesday.",
              "Concert day. I wore my new denim skirt, a white shirt, my grandma\u2019s hand-knitted cardigan, and the silver earrings my aunt sent for my birthday. My friend Sofia gasped when she saw me. \u201cYou look like a magazine!\u201d she said. I don\u2019t. But I felt like one. That counts for something.",
              "Thursday.",
              "It was raining ALL day. I wore my black boots, my long grey coat, and wrapped my woollen scarf around my neck twice. While I was walking to school, an old lady stopped me. \u201cYou look elegant,\u201d she said. I nearly cried. Small kindness matters more than we think.",
              "Friday.",
              "Casual movie night at Sofia\u2019s. I wore shorts (yes, in November! her flat is TROPICAL), a soft t-shirt, and my friendship bracelet. We were watching a comedy when her mum brought us hot chocolate. That was one of those weirdly perfect evenings you can\u2019t plan.",
              "Saturday.",
              "Family lunch at grandma\u2019s. My grandma noticed my new ring immediately. \u201cIs this from someone SPECIAL?\u201d she asked with a wink. I laughed. \u201cGrandma, I\u2019m twelve!\u201d I told her I bought it myself at a school fair. She said, \u201cGood. Buying your own jewellery is a superpower.\u201d I love her.",
              "Sunday.",
              "Reset day. I wore my softest hoodie, no bra, no belt, no jewellery except one earring (I lost the other somewhere yesterday). I read for four hours. When I finally looked up, it was 6 PM and the whole world was orange outside my window.",
              "What did I learn this week? Clothes aren\u2019t just fabric. They tell people who you are before you even open your mouth. But also \u2014 the wrong shirt can\u2019t ruin your day if your heart is in a good place. And the right hoodie can save one."
            ],
            questions: [
              { q: 'What happened while Anya was brushing her teeth on Monday?', options: ['Her mum called her', 'Her brother stole her hoodie', 'Her cat broke a cup'], correct: 1 },
              { q: 'Why does she call her green trainers \u201clucky\u201d?', options: ['They\u2019re new', 'They\u2019re old but lucky', 'They match her hoodie'], correct: 1 },
              { q: 'What did Anya wear to the Wednesday concert?', options: ['Jeans and a t-shirt', 'A denim skirt, white shirt, cardigan and silver earrings', 'A red hoodie and boots'], correct: 1 },
              { q: 'What did the old lady say to her on rainy Thursday?', options: ['\u201cNice boots.\u201d', '\u201cYou look elegant.\u201d', '\u201cIs your coat warm enough?\u201d'], correct: 1 },
              { q: 'Why was Anya wearing shorts on Friday in November?', options: ['She was outside all day', 'Sofia\u2019s flat is very warm', 'She forgot to change'], correct: 1 },
              { q: 'What did grandma say about buying your own jewellery?', options: ['\u201cIt\u2019s a waste of money.\u201d', '\u201cIt\u2019s a superpower.\u201d', '\u201cWait until you\u2019re older.\u201d'], correct: 1 },
              { q: 'What is Anya\u2019s big conclusion?', options: ['You should never wear the same thing twice', 'Clothes tell people who you are, but the right heart matters more', 'Expensive clothes are always better'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Describe what you were wearing yesterday at 6 PM. Use at least 3 vocabulary words from this lesson.",
              "What were you doing when you last saw a rainbow / heard your favourite song / dropped your phone? (Pick one.)",
              "Complete: \u201cLast weekend, while I was ___, suddenly ___.\u201d Make it a fun 15-second story.",
              "What\u2019s the most memorable outfit you\u2019ve ever worn? Where were you? What were you doing? Try to use BOTH Past Simple and Past Continuous.",
              "Describe your best friend\u2019s typical school outfit. Use at least 4 words from today\u2019s vocabulary.",
              "Imagine you were a fashion detective. What was your teacher wearing at your first-ever English class? Try your best to remember!",
              "If you could ONLY wear 5 items of clothing (plus underwear!) for a whole month, which 5 would you choose and why?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "20 words to describe any outfit: boots, ring, belt, bracelet, sandals, scarf, handbag, hat, tie, trainers, earrings, cardigan, coat, skirt, shorts, shirt, tights, hoodie, jacket, leggings.",
              "PAST SIMPLE (V2) \u2192 for a QUICK, FINISHED action in the past. \u201cShe put on her boots.\u201d Chains of actions: \u201cI woke up, got dressed, left.\u201d",
              "PAST CONTINUOUS (was/were + V-ing) \u2192 for an action IN PROGRESS at a moment in the past. \u201cAt 8 AM, I was tying my shoelaces.\u201d",
              "THE MAGIC PAIR: Past Continuous sets the SCENE, Past Simple is the ACTION that interrupts it. \u201cI was putting on my scarf when the phone rang.\u201d",
              "Key connectors: WHILE + Past Continuous (\u201cwhile I was walking\u201d) \u2192 WHEN + Past Simple (\u201cwhen it started raining\u201d).",
              "Two long actions at the same time \u2192 BOTH Past Continuous with WHILE. \u201cWhile I was reading, Mum was cooking.\u201d"
            ],
            finalQuiz: {
              title: 'Quick check \u2014 3 questions',
              questions: [
                { q: "\u201cAt 5 PM, I ___ my new boots for the first time.\u201d Which form?", options: ['tried', 'was trying', 'have tried'], correct: 1 },
                { q: "\u201cWhile Anya ___ her homework, her brother took her hoodie.\u201d Which form?", options: ['did', 'was doing', 'has done'], correct: 1 },
                { q: "\u201cShe grabbed her handbag, put on her jacket, and ___ .\u201d Which form?", options: ['was leaving', 'left', 'has left'], correct: 1 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My most memorable outfit',
              task: "Write a <strong>6\u20138 sentence story</strong> about a memorable day in your life \u2014 real or imaginary \u2014 where a specific OUTFIT played a role. It could be a school concert, a first day, a wedding, a disaster, or just a really good hair day. You MUST include: <strong>at least 5 clothing/accessory words</strong> from the lesson, <strong>at least 2 Past Simple verbs</strong>, and <strong>at least 2 Past Continuous verbs</strong>. Bonus: use \u201cwhile\u201d and \u201cwhen\u201d at least once each.",
              taskUk: 'Напиши історію з 6–8 речень про пам\u2019ятний день у твоєму житті — реальний або уявний — де певний НАРЯД відіграв роль. Це може бути шкільний концерт, перший день, весілля, катастрофа або просто день, коли волосся було ідеальним. Обов\u2019язково включи: щонайменше 5 слів одягу/аксесуарів з уроку, щонайменше 2 дієслова в Past Simple і щонайменше 2 — в Past Continuous. Бонус: використай «while» і «when» хоча б по одному разу.',
              tip: 'Recipe: 1 scene-setter (Past Continuous: what you were wearing / doing) → 1 twist (Past Simple: what suddenly happened) → 2 quick actions (Past Simple chain) → 1 feeling or lesson at the end.'
            },
            speaking: {
              title: '60-second outfit story',
              task: "Record a <strong>60-second story</strong> answering this question: \u201cWhat were you wearing on your FAVOURITE day this year, and what were you doing?\u201d Use <strong>at least 3 clothing words</strong>, at least one <strong>Past Continuous</strong> sentence, and at least one <strong>Past Simple</strong> sentence.",
              taskUk: 'Запиши історію на 60 секунд, відповідаючи на питання: «Що ти був(-ла) одягнений(-а) у свій УЛЮБЛЕНИЙ день цього року і що ти робив(-ла)?» Використай щонайменше 3 слова одягу, одне речення в Past Continuous і одне в Past Simple.',
              tip: 'Start by setting the scene (Past Continuous), then tell what happened (Past Simple). Real stories always sound better than made-up ones!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 4 · Describing a person (Опис людини)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u1-l4', number: 4,
          title: 'Describing a person', titleUk: 'Опис людини',
          type: 'Vocabulary', tags: ['personality', 'appearance', 'adjectives', 'adjective-order'],
          updated: 'today', accent: 'terracotta', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🪞', en: "Describe yourself in exactly THREE adjectives \u2014 no more, no less. Then ask yourself: would your best friend pick the same three?", uk: 'Опиши себе рівно ТРЬОМА прикметниками — не більше, не менше. А тепер спитай себе: чи твій найкращий друг обрав би ті самі три?' },
              { emoji: '❤️', en: "Think about the KINDEST person you know. What ONE tiny action do they do that makes them so kind? Kindness isn\u2019t abstract \u2014 it lives in small things.", uk: 'Подумай про НАЙДОБРІШУ людину, яку ти знаєш. Яка ОДНА маленька дія робить її саме такою доброю? Доброта не абстрактна — вона живе в дрібницях.' },
              { emoji: '🕵️', en: "Detective time! Describe a classmate WITHOUT saying their name \u2014 3 physical details, 2 personality traits. Can your teacher guess who it is?", uk: 'Час бути детективом! Опиши однокласника БЕЗ імені — 3 фізичні деталі, 2 риси характеру. Чи вгадає твій учитель, про кого мова?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to \u201cthe describing-people superpowers\u201d! Today you get 16 words that unlock 90% of every conversation about who someone IS \u2014 their personality (kind or lazy? honest or selfish?) and their appearance (slim, well-built, and so on). By the end, you\u2019ll be able to describe your grandma, your best friend, your teacher, and even yourself in vivid detail.",
            introUk: 'Ласкаво просимо до «суперсили описувати людей»! Сьогодні \u2014 16 слів, які відкривають 90% розмов про те, ЯКА людина: її характер (добра чи ледача? чесна чи егоїстична?) та зовнішність (струнка, атлетична тощо). Наприкінці ти зможеш описати бабусю, найкращого друга, вчителя та навіть себе — яскраво й детально.',
            items: [
              // POSITIVE personality traits
              { emoji: '😊', en: 'friendly', uk: 'привітний / доброзичливий', explain: "Easy to talk to, smiles a lot, makes new people feel welcome \u2014 like your favourite classmate.", accent: 'sage' },
              { emoji: '💛', en: 'kind', uk: 'добрий', explain: "Cares about others and shows it \u2014 helps a lost kid, shares lunch, listens when someone\u2019s sad.", accent: 'terracotta' },
              { emoji: '🎁', en: 'generous', uk: 'щедрий', explain: "Loves to give and share \u2014 time, food, presents, help. Never keeps everything for themselves.", accent: 'mustard' },
              { emoji: '🎩', en: 'polite', uk: 'ввічливий', explain: "Says \u201cplease\u201d, \u201cthank you\u201d, holds the door \u2014 treats every person with respect.", accent: 'sky' },
              { emoji: '🕊️', en: 'honest', uk: 'чесний', explain: "Tells the truth, even when it\u2019s hard. Never lies to make themselves look better.", accent: 'sage' },
              { emoji: '💪', en: 'hard-working', uk: 'працьовитий', explain: "Puts real effort in \u2014 finishes homework, practices piano, doesn\u2019t give up when it\u2019s tough.", accent: 'terracotta' },
              { emoji: '⏳', en: 'patient', uk: 'терплячий', explain: "Can wait calmly without complaining \u2014 in a long queue, when teaching a little kid, in traffic.", accent: 'plum' },
              { emoji: '📋', en: 'organized', uk: 'організований', explain: "Keeps things tidy, plans ahead, uses a schedule \u2014 you never lose their notes because they exist.", accent: 'sky' },
              { emoji: '🎯', en: 'serious', uk: 'серйозний', explain: "Focused, takes things responsibly \u2014 not always joking, gets stuff done properly.", accent: 'plum' },
              // NEUTRAL / mixed traits
              { emoji: '💬', en: 'talkative', uk: 'балакучий', explain: "Loves to talk \u2014 chats non-stop, always has a story. Great at parties, hard to stop before bedtime.", accent: 'mustard' },
              { emoji: '🌷', en: 'shy', uk: 'сором\u2019язливий', explain: "Quiet around new people, blushes easily, prefers small groups \u2014 not \u201cboring\u201d, just gentle.", accent: 'sage' },
              // NEGATIVE traits
              { emoji: '😾', en: 'rude', uk: 'грубий / нечемний', explain: "The opposite of polite \u2014 interrupts, doesn\u2019t say \u201chi\u201d, forgets to say \u201cthanks\u201d.", accent: 'terracotta' },
              { emoji: '🙄', en: 'selfish', uk: 'егоїстичний', explain: "Only thinks about themselves \u2014 takes the biggest slice, never shares, ignores others\u2019 feelings.", accent: 'terracotta' },
              { emoji: '🛋️', en: 'lazy', uk: 'ледачий', explain: "Doesn\u2019t like to make effort \u2014 skips homework, avoids chores, would rather nap than help.", accent: 'mustard' },
              // APPEARANCE
              { emoji: '🏃', en: 'slim', uk: 'струнка / стрункий', explain: "Thin in a healthy, elegant way \u2014 not too thin, just naturally slender.", accent: 'sky' },
              { emoji: '🏋️', en: 'well-built', uk: 'атлетичної статури', explain: "Strong body, muscular but not huge \u2014 like someone who plays sports or works out regularly.", accent: 'plum' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right adjective for each situation',
                instruction: 'Read each mini-story. Which adjective best describes the person?',
                questions: [
                  { q: 'Nick shared his lunch with a hungry classmate and gave his last pencil to a friend who forgot hers. He\u2019s so ___ .', options: ['selfish', 'generous', 'rude'], correct: 1 },
                  { q: 'Sofia always says \u201cplease\u201d, \u201cthank you\u201d, and \u201cexcuse me\u201d. Grandma calls her the most ___ girl in the family.', options: ['polite', 'lazy', 'rude'], correct: 0 },
                  { q: 'Maya keeps her desk perfectly tidy, has a colour-coded schedule, and NEVER forgets homework. She\u2019s super ___ .', options: ['shy', 'organized', 'lazy'], correct: 1 },
                  { q: 'When Anya\u2019s little brother spilled paint everywhere, she didn\u2019t shout \u2014 she calmly helped him clean it. She\u2019s very ___ .', options: ['rude', 'patient', 'selfish'], correct: 1 },
                  { q: 'Nick trains four times a week and has strong arms and shoulders. He\u2019s ___ .', options: ['slim', 'well-built', 'shy'], correct: 1 },
                  { q: 'Sofia is 12, tall, and elegantly thin \u2014 people say she\u2019s ___ .', options: ['well-built', 'slim', 'lazy'], correct: 1 },
                  { q: 'Tom broke a vase and told Mum immediately \u2014 no lies, no hiding. He\u2019s so ___ .', options: ['honest', 'rude', 'shy'], correct: 0 },
                  { q: 'Anya practises piano 2 hours a day, does all her homework, and still helps at home. She\u2019s incredibly ___ .', options: ['lazy', 'hard-working', 'selfish'], correct: 1 },
                  { q: 'At the party, Maya barely said a word and stayed close to her mum. She\u2019s just ___ around new people.', options: ['talkative', 'shy', 'rude'], correct: 1 },
                  { q: 'Ben ate the last piece of cake without asking anyone. He can be so ___ sometimes.', options: ['generous', 'selfish', 'polite'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Anya\u2019s \u201cpeople in my life\u201d list',
                instruction: 'Anya is writing about the people she loves. Fill in each blank with the right adjective. Every chip is used exactly once.',
                bank: ['friendly', 'kind', 'generous', 'polite', 'honest', 'hard-working', 'patient', 'organized', 'talkative', 'shy'],
                questions: [
                  { before: 'My best friend Sofia is the most', after: 'person I know \u2014 she never lies, even about small things.', answer: 'honest' },
                  { before: 'My grandma is so', after: '\u2014 she always gives me the biggest slice of cake and refuses to take any.', answer: 'generous' },
                  { before: 'My English teacher is incredibly', after: 'when I don\u2019t understand something \u2014 she explains it three different ways with a smile.', answer: 'patient' },
                  { before: 'My cousin Anna is a bit', after: 'when she first meets people, but she opens up after five minutes.', answer: 'shy' },
                  { before: 'My little brother is SO', after: '\u2014 he tells me every detail of his day for 45 minutes straight.', answer: 'talkative' },
                  { before: 'My dad is the most', after: 'person on our street \u2014 he says hi to everyone and knows all the neighbours\u2019 names.', answer: 'friendly' },
                  { before: 'My mum is scary', after: '\u2014 colour-coded calendar, meal-planned week, a spreadsheet for everything.', answer: 'organized' },
                  { before: 'My grandpa is always', after: 'at the shops \u2014 \u201cplease\u201d, \u201cthank you\u201d, and holds the door for absolutely everyone.', answer: 'polite' },
                  { before: 'My cousin Max is the most', after: 'kid in our family \u2014 he studies 3 hours a day AND helps in the garden.', answer: 'hard-working' },
                  { before: 'And me? People say I\u2019m', after: '\u2014 I try to help friends when they\u2019re sad. That\u2019s the trait I\u2019m most proud of.', answer: 'kind' }
                ]
              },
              {
                type: 'match',
                title: 'Match the person with the adjective that describes them',
                instruction: 'Each mini-description on the left matches ONE adjective on the right.',
                pairs: [
                  { left: "Interrupts everyone and never says \u201csorry\u201d", right: 'rude' },
                  { left: "Doesn\u2019t like effort, would rather nap than help", right: 'lazy' },
                  { left: 'Takes everything for themselves, ignores others', right: 'selfish' },
                  { left: 'Muscular from playing football and lifting weights', right: 'well-built' },
                  { left: 'Naturally thin and elegant', right: 'slim' },
                  { left: 'Focused, responsible, gets things done properly', right: 'serious' },
                  { left: 'Says \u201cplease\u201d, \u201cthank you\u201d, and holds doors', right: 'polite' },
                  { left: "Colour-coded calendar, never forgets anything", right: 'organized' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Sofia describes three people using SEVERAL adjectives at once. Look at the order of the adjectives she uses \u2014 no accident, they follow a hidden rule. Can you crack the code?",
            taskUk: 'Софія описує трьох людей, використовуючи КІЛЬКА прикметників одразу. Подивись на їхній порядок — це не випадково, за цим стоїть прихована логіка. Чи зможеш ти зламати цей код?',
            sentences: [
              { id: 1, html: '👴 <em>My grandpa is a <span class="marker">kind, tall, old, thin</span> man with grey hair.</em>' },
              { id: 2, html: '👗 <em>Anya was wearing a <span class="marker">beautiful, long, blue Ukrainian</span> dress.</em>' },
              { id: 3, html: '🏋️ <em>Nick\u2019s coach is a <span class="marker">friendly, young, well-built</span> guy in his twenties.</em>' }
            ],
            questions: [
              "In sentence 1, one of the adjectives is your OPINION about grandpa (kind), the others are FACTS (tall, old, thin). Which one comes FIRST — opinion or facts?",
              "In sentence 2: BEAUTIFUL is opinion. What are LONG, BLUE, and UKRAINIAN? Size, colour, and origin, right? Look at their order carefully.",
              "In sentence 3: FRIENDLY (opinion) \u2192 YOUNG (age) \u2192 WELL-BUILT (physical description). Same pattern as sentence 1?",
              "So what\u2019s the golden rule? Opinion adjectives come ___, then ___ facts (size, age, shape, colour). Guess your best hypothesis!",
              "Try to rearrange: \u201ca metal / cool / small\u201d box. Which order sounds RIGHT? Which one sounds wrong \u2014 and why?"
            ]
          },

          grammar: {
            title: 'Order of Adjectives', titleUk: 'Порядок прикметників',
            intro: "In English, when you use TWO OR MORE adjectives before a noun, they follow a strict but secret order. Native speakers do this without thinking \u2014 but for learners, it\u2019s the difference between \u201cshe wore a beautiful long blue dress\u201d (perfect) and \u201cshe wore a blue long beautiful dress\u201d (WEIRD). Today you\u2019ll learn the memory trick that unlocks it forever: <strong>OSASCOMP</strong>. Sounds like a spell. It kind of is.",
            introUk: 'В англійській, коли ти вживаєш ДВА або БІЛЬШЕ прикметників перед іменником, вони йдуть у чіткому, але «прихованому» порядку. Носії мови роблять це автоматично — а для тих, хто вивчає, це різниця між «she wore a beautiful long blue dress» (ідеально) і «she wore a blue long beautiful dress» (ДИВНО). Сьогодні ти дізнаєшся мнемонічну хитрість, яка розв\u2019язує це назавжди: <strong>OSASCOMP</strong>. Звучить як заклинання. Це майже воно і є.',
            blocks: [
              {
                title: 'The OSASCOMP formula', letter: 'A',
                when: 'the master order for stacking adjectives', whenUk: 'головний порядок для «стосу» прикметників',
                explain: "Meet <strong>OSASCOMP</strong> \u2014 the 8-step ladder every adjective climbs: <em>Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose</em>. You never use all 8 in real life (that would be strange), but when you use two or three, they always follow this order. Golden rule: <strong>OPINION always comes first</strong>. Then facts, from most general to most specific.",
                explainUk: "Знайомся з <em>OSASCOMP</em> — 8-ступеневим списком, за яким кожен прикметник «підіймається»: <strong>Opinion (думка) \u2192 Size (розмір) \u2192 Age (вік) \u2192 Shape (форма) \u2192 Colour (колір) \u2192 Origin (походження) \u2192 Material (матеріал) \u2192 Purpose (призначення)</strong>. Усі 8 одразу ніхто не вживає (це було б дивно), але коли ти використовуєш два-три — вони завжди йдуть у цьому порядку. Головне правило: <em>OPINION завжди першим</em>. Далі — факти, від найзагальнішого до найконкретнішого.",
                formula: '<em>Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose</em> \u2192 noun',
                examples: [
                  { en: "a lovely (opinion) small (size) old (age) round (shape) wooden (material) box", uk: 'чудова маленька стара кругла деревʼяна скринька' },
                  { en: "a beautiful (opinion) long (size) blue (colour) Ukrainian (origin) dress", uk: 'красива довга синя українська сукня' },
                  { en: "a friendly (opinion) young (age) well-built (shape) Italian (origin) coach", uk: 'привітний молодий атлетичний італійський тренер' },
                  { en: "an amazing (opinion) big (size) black (colour) leather (material) handbag", uk: 'чудова велика чорна шкіряна сумочка' }
                ]
              },
              {
                title: 'OPINION comes first \u2014 always', letter: 'B',
                when: 'the golden trick that solves 90% of the mistakes', whenUk: 'золоте правило, яке розвʼязує 90% помилок',
                explain: "Here\u2019s the FASTEST fix for most mistakes: separate <em>OPINIONS</em> (what YOU think) from <em>FACTS</em> (what\u2019s true for everyone). Opinion words are things like: <em>beautiful, ugly, nice, boring, delicious, weird, cool, amazing, friendly, kind</em>. Facts are: <em>tall, old, red, wooden, Ukrainian</em>. If you\u2019re not sure of the whole ladder, at least remember: <strong>opinion \u2192 facts</strong>. That single move fixes most weirdness.",
                explainUk: "Найшвидший фікс для більшості помилок: розділи <em>ДУМКИ</em> (що вважаєш ТИ) від <em>ФАКТІВ</em> (що правда для всіх). Слова-думки: <em>beautiful, ugly, nice, boring, delicious, weird, cool, amazing, friendly, kind</em>. Факти: <em>tall, old, red, wooden, Ukrainian</em>. Якщо не памʼятаєш увесь ланцюг, памʼятай хоча б: <strong>думка \u2192 факти</strong>. Це одне правило прибирає більшість «дивностей».",
                formula: '<em>Opinion</em> + facts + noun',
                examples: [
                  { en: "a cool tall boy (NOT a tall cool boy)", uk: 'крутий високий хлопець (НЕ високий крутий хлопець)' },
                  { en: "a beautiful old lady (NOT an old beautiful lady)", uk: 'красива стара пані (НЕ стара красива пані)' },
                  { en: "delicious hot soup (NOT hot delicious soup)", uk: 'смачний гарячий суп (НЕ гарячий смачний суп)' },
                  { en: "a kind, patient teacher (opinion + opinion, both go before facts)", uk: 'добра, терпляча вчителька (думка + думка, обидві перед фактами)' }
                ]
              },
              {
                title: 'Commas or no commas?', letter: 'C',
                when: 'how to punctuate two or three adjectives', whenUk: 'як правильно ставити коми між прикметниками',
                explain: "One useful mini-rule: use a COMMA between two adjectives ONLY IF you can flip their order AND put \u201cand\u201d between them naturally. <em>\u201ca kind, honest boy\u201d</em> \u2192 you can also say <em>\u201ca kind and honest boy\u201d</em>? YES \u2192 comma is fine. But <em>\u201ca beautiful blue dress\u201d</em> \u2192 you can\u2019t say \u201ca beautiful and blue dress\u201d? NO \u2192 no comma. This is why we say <em>\u201ca cool tall boy\u201d</em> (no comma between different categories) but <em>\u201ca kind, patient teacher\u201d</em> (comma between two opinions).",
                explainUk: "Одне корисне правильце: став КОМУ між двома прикметниками ТІЛЬКИ якщо можеш поміняти їх місцями І поставити «and» між ними. <em>«a kind, honest boy»</em> \u2192 чи можна сказати <em>«a kind and honest boy»</em>? ТАК \u2192 кома доречна. Але <em>«a beautiful blue dress»</em> \u2192 «a beautiful and blue dress»? НІ \u2192 без коми. Тому кажемо <em>«a cool tall boy»</em> (без коми між різними категоріями), але <em>«a kind, patient teacher»</em> (кома між двома думками).",
                formula: '<em>Same category \u2192 comma OK. Different categories \u2192 no comma.</em>',
                examples: [
                  { en: "a kind, generous, honest man (three opinions \u2014 commas)", uk: 'добрий, щедрий, чесний чоловік (три думки — коми)' },
                  { en: "a big red apple (size + colour \u2014 no comma)", uk: 'велике червоне яблуко (розмір + колір — без коми)' },
                  { en: "a shy, quiet, hard-working student (three character traits \u2014 commas)", uk: 'сором\u2019язливий, тихий, працьовитий учень (три риси характеру — коми)' },
                  { en: "a lovely little wooden box (opinion + size + material \u2014 no commas)", uk: 'чудова маленька дерев\u2019яна скринька (думка + розмір + матеріал — без ком)' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Which order sounds right?',
                instruction: 'Pick the sentence that sounds natural in English.',
                questions: [
                  { q: 'She was wearing a...', options: ['blue beautiful long dress', 'beautiful long blue dress'], correct: 1 },
                  { q: 'My grandma is a...', options: ['kind, tall, old woman', 'old, tall, kind woman'], correct: 0 },
                  { q: "It's a...", options: ['big black leather handbag', 'leather black big handbag'], correct: 0 },
                  { q: 'Nick is a...', options: ['well-built friendly young boy', 'friendly young well-built boy'], correct: 1 },
                  { q: "That's a...", options: ['small round wooden box', 'wooden round small box'], correct: 0 },
                  { q: "It's a...", options: ['nice long Italian scarf', 'Italian long nice scarf'], correct: 0 },
                  { q: 'She has...', options: ['long straight brown hair', 'brown straight long hair'], correct: 0 },
                  { q: 'My coach is a...', options: ['tall serious Ukrainian man', 'serious tall Ukrainian man'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the adjectives in the right order',
                instruction: "Rewrite the adjectives (in brackets) in the correct order before each noun. Don't add any extra words.",
                questions: [
                  { before: 'I saw a', after: 'boy at the park. (tall / friendly / young)', answer: 'friendly young tall', hint: 'opinion \u2192 age \u2192 size' },
                  { before: 'Grandma gave me a', after: 'ring. (small / silver / beautiful)', answer: 'beautiful small silver', hint: 'opinion \u2192 size \u2192 material' },
                  { before: 'Sofia was wearing a', after: 'dress. (blue / short / cute)', answer: 'cute short blue', hint: 'opinion \u2192 size \u2192 colour' },
                  { before: 'My teacher is a', after: 'lady. (patient / old / kind)', answer: 'kind patient old', hint: 'opinion + opinion \u2192 age' },
                  { before: 'He owns a', after: 'car. (Japanese / red / fast)', answer: 'fast red Japanese', hint: 'opinion \u2192 colour \u2192 origin' },
                  { before: 'She has', after: 'hair. (curly / brown / long)', answer: 'long curly brown', hint: 'size \u2192 shape \u2192 colour' },
                  { before: 'Anya bought a', after: 'handbag. (leather / small / cute)', answer: 'cute small leather', hint: 'opinion \u2192 size \u2192 material' },
                  { before: 'We visited a', after: 'castle. (old / German / mysterious)', answer: 'mysterious old German', hint: 'opinion \u2192 age \u2192 origin' }
                ]
              },
              {
                type: 'match',
                title: 'Match the adjective with its category',
                instruction: 'Which OSASCOMP category does each adjective belong to?',
                pairs: [
                  { left: 'friendly', right: 'Opinion' },
                  { left: 'huge', right: 'Size' },
                  { left: 'young', right: 'Age' },
                  { left: 'round', right: 'Shape' },
                  { left: 'red', right: 'Colour' },
                  { left: 'Italian', right: 'Origin' },
                  { left: 'leather', right: 'Material' },
                  { left: 'kind', right: 'Opinion' },
                  { left: 'tiny', right: 'Size' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural one.',
                questions: [
                  { q: 'Opinion before facts:', options: ['a red big balloon', 'a big red balloon'], correct: 1 },
                  { q: 'Opinion first, then age:', options: ['an old kind woman', 'a kind old woman'], correct: 1 },
                  { q: 'Size before colour:', options: ['a green small hat', 'a small green hat'], correct: 1 },
                  { q: 'Age before origin:', options: ['an old Italian restaurant', 'an Italian old restaurant'], correct: 0 },
                  { q: 'Two opinions with commas:', options: ['a kind, patient teacher', 'a patient kind teacher'], correct: 0 },
                  { q: 'Colour before material:', options: ['a wooden brown table', 'a brown wooden table'], correct: 1 },
                  { q: 'Full stack, correctly ordered:', options: ['a beautiful long red silk scarf', 'a red silk long beautiful scarf'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '👀',
            textTitle: 'Anya\u2019s people: five little portraits',
            text: [
              "There are five people in my life who deserve a proper description. Here they are.",
              "1. My best friend, Sofia.",
              "Sofia is a tall, slim, twelve-year-old girl with long, straight, dark hair and enormous grey eyes. She looks quiet, and she IS shy \u2014 for about ten minutes. Then she starts talking, and honestly, she never stops. She\u2019s the kindest, most honest person I know. Once, she told our teacher SHE broke a window \u2014 the truth was our whole class did it. Sofia said: \u201cSomeone had to be honest.\u201d Legend.",
              "2. My cousin, Max.",
              "Max is a strong, well-built, fifteen-year-old boy who plays football five times a week. He has short, curly, brown hair and a permanent tan from being outside all summer. Everyone thinks he\u2019s just a serious, sporty guy \u2014 but at family dinners, he\u2019s the most generous person at the table. Last Christmas, he spent all his savings on presents for his little cousins and got himself nothing. Nothing.",
              "3. My grandma.",
              "Grandma is a small, thin, elegant seventy-eight-year-old lady with silver, curly hair and warm brown eyes behind gold-framed glasses. She looks fragile, but she is the hardest-working woman I have ever met \u2014 she still bakes bread from scratch every Saturday and has a garden with 47 different flowers. She\u2019s patient with everyone except lazy people. Then she becomes a small, thin, TERRIFYING seventy-eight-year-old lady.",
              "4. My little brother, Tom.",
              "Tom is a short, skinny, seven-year-old boy with messy blond hair and a permanent chocolate stain somewhere on his face. He\u2019s incredibly talkative \u2014 he can tell you what happened at recess for 45 uninterrupted minutes. He can be selfish (that last piece of cake ALWAYS goes missing when he\u2019s near). But he\u2019s also the most creative kid I know. Last week he built a \u201crobot\u201d from twelve empty toilet rolls. It works. Kind of.",
              "5. My English teacher, Mr Roberts.",
              "Mr Roberts is a tall, well-built, thirty-something British man with short, greying hair and glasses that never sit straight. On day one, we thought he was strict and serious. Wrong. He\u2019s the most patient, most friendly teacher in our school. He\u2019s taught for fifteen years and he STILL gets excited when a student finally understands a tense. That\u2019s a superpower.",
              "The end.",
              "Five people, five descriptions. If I had to pick ONE word for each: Sofia \u2014 honest. Max \u2014 generous. Grandma \u2014 hard-working. Tom \u2014 creative. Mr Roberts \u2014 patient. And me? I\u2019m still figuring out my one word. Ask me next year."
            ],
            questions: [
              { q: 'How does Sofia usually seem to new people?', options: ['Loud and rude', 'Shy for about ten minutes, then very talkative', 'Serious and cold'], correct: 1 },
              { q: 'What did Sofia do that Anya calls \u201clegendary\u201d?', options: ['She won a school prize', 'She told the teacher SHE broke a window (though the whole class did)', 'She organized a class trip'], correct: 1 },
              { q: 'What does Max look like?', options: ['Short, thin, with straight blond hair', 'Tall, thin, with red hair', 'Well-built, with short curly brown hair and a tan'], correct: 2 },
              { q: 'What surprising thing does Max do at family dinners?', options: ['He eats a lot', 'He\u2019s very generous \u2014 he spent all his savings on presents', 'He argues with everyone'], correct: 1 },
              { q: 'Who does grandma get impatient with?', options: ['Everyone', 'Only children', 'Lazy people'], correct: 2 },
              { q: 'What is Tom\u2019s big talent?', options: ['Being quiet and organized', 'Being creative \u2014 he built a robot from toilet rolls', 'Being generous with food'], correct: 1 },
              { q: 'What did the class first think about Mr Roberts?', options: ['That he was cool and fun', 'That he was strict and serious', 'That he was too shy to teach'], correct: 1 },
              { q: 'Which \u201cone word\u201d does Anya give herself at the end?', options: ['Honest', 'Kind', 'She hasn\u2019t decided yet \u2014 \u201cAsk me next year.\u201d'], correct: 2 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Describe your best friend using THREE personality adjectives and THREE appearance details. Follow OSASCOMP order!",
              "Who\u2019s the most PATIENT person you know? Give one real example that proves it.",
              "Describe your grandma or grandpa in 4 sentences. Include at least ONE stack of 2+ adjectives (like \u201ca kind old lady\u201d).",
              "Detective challenge: describe a classmate WITHOUT their name \u2014 3 physical + 2 personality traits. Can your partner guess?",
              "Complete: \u201cI wish I were more ___ because ___.\u201d Which adjective from today would you love to become?",
              "Which is worse in a friend: rude, selfish, or lazy? Explain your ranking.",
              "Pick a famous person and describe them using at least 4 OSASCOMP categories in ONE sentence. Example: \u201cRonaldo is a talented, tall, well-built Portuguese footballer.\u201d"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "16 essential adjectives to describe people:",
              "POSITIVE personality: friendly, kind, generous, polite, honest, hard-working, patient, organized, serious.",
              "NEGATIVE personality: rude, selfish, lazy.",
              "MIXED/neutral: talkative, shy.",
              "APPEARANCE: slim, well-built.",
              "ORDER OF ADJECTIVES = OSASCOMP: Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose.",
              "GOLDEN SHORTCUT: opinion (kind, beautiful, cool) ALWAYS comes before facts (tall, red, wooden). This one rule fixes 90% of mistakes.",
              "COMMAS: use them between adjectives of the SAME category (\u201ca kind, patient, honest woman\u201d). No commas between DIFFERENT categories (\u201ca big red apple\u201d)."
            ],
            finalQuiz: {
              title: 'Quick check \u2014 3 questions',
              questions: [
                { q: '\u201cShe was wearing a ___ dress.\u201d Which order is right?', options: ['blue long beautiful', 'beautiful long blue', 'long blue beautiful'], correct: 1 },
                { q: 'Which adjective is an OPINION?', options: ['tall', 'kind', 'wooden'], correct: 1 },
                { q: '\u201cA generous, patient, kind teacher.\u201d Why the commas?', options: ['Random punctuation', 'All three are OPINION adjectives (same category)', 'Every adjective needs a comma'], correct: 1 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'Portrait of a person I love',
              task: "Write a <strong>6\u20138 sentence portrait</strong> of a real person you care about \u2014 grandma, a friend, a teacher, a cousin, anyone. You MUST include: <strong>at least 5 personality/appearance adjectives</strong> from this lesson, AND <strong>at least 2 sentences with 2+ adjectives before a noun</strong> in the correct OSASCOMP order. Bonus: try to include one small story or example that PROVES an adjective (not just \u201cshe is kind\u201d, but \u201cshe is kind because ___\u201d).",
              taskUk: 'Напиши портрет із 6–8 речень про реальну людину, яка тобі дорога — бабусю, друга, учителя, кузена, будь-кого. Обов\u2019язково включи: щонайменше 5 прикметників характеру/зовнішності з уроку, і щонайменше 2 речення з 2+ прикметниками перед іменником у правильному порядку OSASCOMP. Бонус: додай маленьку історію, яка ДОВОДИТЬ якийсь прикметник (не просто «вона добра», а «вона добра, тому що ___»).',
              tip: 'Recipe: 1 sentence intro (who they are) \u2192 1 sentence with 2\u20133 stacked adjectives about their looks \u2192 2\u20133 sentences about their personality with real examples \u2192 1 final sentence with your feelings.'
            },
            speaking: {
              title: '60-second portrait',
              task: "Record a <strong>60-second spoken portrait</strong> of your BEST FRIEND. Include: <strong>at least 3 personality adjectives</strong>, <strong>at least 2 appearance adjectives</strong>, and use <strong>2+ adjectives before a noun</strong> at least once (in OSASCOMP order!). Try to sound natural \u2014 like you\u2019re describing them to someone who\u2019s about to meet them.",
              taskUk: 'Запиши 60-секундний усний портрет свого НАЙКРАЩОГО ДРУГА. Включи: щонайменше 3 прикметники характеру, щонайменше 2 прикметники зовнішності, і хоча б один раз використай 2+ прикметники перед іменником (у порядку OSASCOMP!). Постарайся звучати природно — ніби описуєш друга людині, яка от-от з ним/нею зустрінеться.',
              tip: 'Start with a general impression, then move to specific details. End with one real story or example \u2014 that\u2019s what makes a description come alive.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 5 · Revision (Unit 1 finale)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u1-l5', number: 5,
          title: 'Revision', titleUk: 'Повторення (Unit 1)',
          type: 'Revision', tags: ['activities', 'countries', 'clothes', 'personality', 'future-tenses', 'articles', 'past-tenses'],
          updated: 'today', accent: 'plum', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🧠', en: "Without looking back: how many free-time activities, countries, clothing items or personality adjectives from Unit 1 can you remember in 60 seconds? Say them out loud!", uk: 'Не підглядаючи: скільки слів про дозвілля, країни, одяг чи риси характеру з Unit 1 ти можеш згадати за 60 секунд? Скажи їх уголос!' },
              { emoji: '🏆', en: "Which lesson from Unit 1 did YOU find most fun \u2014 free-time activities, countries, clothes, or describing people? And which one was the HARDEST?", uk: 'Який урок з Unit 1 тобі найбільше сподобався — дозвілля, країни, одяг чи опис людей? А який був НАЙВАЖЧИЙ?' },
              { emoji: '💫', en: "Look at yourself right now \u2014 in ONE English sentence, tell us: what you\u2019re wearing, one personality adjective that describes you today, and one activity you\u2019re going to do later.", uk: 'Подивись на себе зараз — в ОДНОМУ англійському реченні скажи: що на тобі одягнено, один прикметник, який тебе описує сьогодні, і одну справу, яку ти збираєшся зробити пізніше.' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Recap', titleUk: 'Повторення словника',
            intro: "This is Unit 1\u2019s final review, so instead of new words \u2014 a mega-recap of EVERYTHING we learned across Lessons 1, 2, 3 and 4. Open the spoiler only if a phrase feels blurry. If you remember it \u2014 high five yourself and move on.",
            introUk: 'Це фінальне повторення Unit 1. Замість нових слів — мега-огляд УСЬОГО, що ми вивчили в уроках 1, 2, 3 і 4. Відкривай спойлер лише якщо фраза здається розмитою. Якщо памʼятаєш — плесни собі й рухайся далі.',
            items: [
              // From L1: free-time activities
              { emoji: '🎨', en: 'paint / sculpt / take pictures', uk: 'малювати / ліпити / фотографувати', explain: "Three classic creative hobbies \u2014 with a brush, with clay, or with a camera.", accent: 'terracotta' },
              { emoji: '🎮', en: 'play video games / try new recipes', uk: 'грати у відеоігри / пробувати нові рецепти', explain: "One screen hobby, one kitchen hobby \u2014 both need creativity and patience.", accent: 'mustard' },
              { emoji: '🐾', en: 'volunteer at the animal shelter', uk: 'волонтерити у притулку для тварин', explain: "Helping abandoned dogs and cats \u2014 walks, food, cuddles.", accent: 'sage' },
              // From L2: countries + articles
              { emoji: '🗼', en: 'landmarks: the Eiffel Tower / the Great Wall', uk: 'памʼятки: Ейфелева вежа / Велика Китайська стіна', explain: "Famous places take THE. Countries like France, China \u2014 zero article.", accent: 'sky' },
              { emoji: '🌍', en: 'countries: France, Japan, the UK, the USA', uk: 'країни: Франція, Японія, Велика Британія, США', explain: "Most countries: no article. But \u201cUnited\u201d, \u201cKingdom\u201d, \u201cRepublic\u201d \u2192 the.", accent: 'plum' },
              // From L3: clothes
              { emoji: '👖', en: 'jeans, hoodie, trainers, boots', uk: 'джинси, худі, кросівки, чоботи', explain: "The teen essentials \u2014 casual, everyday, comfortable.", accent: 'terracotta' },
              { emoji: '🧣', en: 'scarf, coat, cardigan, hat', uk: 'шарф, пальто, кардиган, шапка', explain: "The autumn/winter kit \u2014 layers, warmth, style.", accent: 'plum' },
              { emoji: '💎', en: 'ring, bracelet, earrings, handbag', uk: 'перстень, браслет, сережки, сумочка', explain: "Accessories that finish the outfit \u2014 small details, big impact.", accent: 'mustard' },
              { emoji: '👗', en: 'shirt, skirt, tie, tights, leggings', uk: 'сорочка, спідниця, краватка, колготки, легінси', explain: "The school-uniform + PE + everyday mix.", accent: 'sky' },
              // From L4: personality + appearance
              { emoji: '💛', en: 'kind, friendly, honest, generous', uk: 'добрий, привітний, чесний, щедрий', explain: "The four \u201cgood person\u201d traits everyone wants in a friend.", accent: 'sage' },
              { emoji: '💪', en: 'hard-working, patient, organized, polite', uk: 'працьовитий, терплячий, організований, ввічливий', explain: "The four \u201cadulting\u201d traits your parents love.", accent: 'terracotta' },
              { emoji: '😾', en: 'rude, selfish, lazy', uk: 'грубий, егоїстичний, ледачий', explain: "The three traits nobody wants in a group project. Avoid.", accent: 'terracotta' },
              { emoji: '🏃', en: 'slim / well-built / talkative / shy', uk: 'стрункий / атлетичний / балакучий / сором\u2019язливий', explain: "Two body types, two personality vibes \u2014 all neutral, all common.", accent: 'mustard' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Mixed review \u2014 Unit 1 vocabulary',
                instruction: 'Words from ALL four lessons of Unit 1 are here. Read each scene carefully.',
                questions: [
                  { q: 'Every Sunday, Anya spends 3 hours at the animal shelter feeding stray dogs. She loves to ___ .', options: ['try new recipes', 'volunteer', 'take pictures'], correct: 1 },
                  { q: 'Sofia has a symmetry-obsessed Pinterest board and colour-codes her notebooks. She\u2019s super ___ .', options: ['lazy', 'organized', 'rude'], correct: 1 },
                  { q: 'Nick shared his lunch AND lent his last pencil in one day. He\u2019s incredibly ___ .', options: ['selfish', 'generous', 'shy'], correct: 1 },
                  { q: 'Maya arrived at the concert in a black skirt, a white shirt, and silver ___ in both ears.', options: ['sandals', 'earrings', 'boots'], correct: 1 },
                  { q: 'On rainy days, Anya always wears her long grey ___ and her tall black ___ .', options: ['hoodie / trainers', 'coat / boots', 'shorts / sandals'], correct: 1 },
                  { q: 'Tom won\u2019t stop talking about his robot for 45 minutes. He\u2019s SO ___ .', options: ['shy', 'talkative', 'polite'], correct: 1 },
                  { q: 'The Eiffel Tower is one of the most famous ___ in Paris.', options: ['landmarks', 'trainers', 'countries'], correct: 0 },
                  { q: 'Nick plays football five times a week and has strong arms and shoulders. He\u2019s ___ .', options: ['slim', 'well-built', 'lazy'], correct: 1 },
                  { q: 'Instead of scrolling, Sofia loves to ___ landscapes with acrylic paints. Real hobby!', options: ['paint', 'volunteer', 'try recipes'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Sofia\u2019s \u201cme in one week\u201d journal',
                instruction: 'Sofia\u2019s writing about her week: outfits, moods, and plans. Fill in every blank. Each chip is used exactly once.',
                bank: ['hoodie', 'polite', 'volunteer', 'the UK', 'friendly', 'trainers', 'organized', 'earrings', 'take pictures'],
                questions: [
                  { before: 'Monday: PE morning. My comfy grey', after: 'and my old red trainers. Basic, but perfect.', answer: 'hoodie' },
                  { before: 'Tuesday: I was late \u2014 grabbed the wrong', after: '(one black, one blue). Class laughed. Cool.', answer: 'trainers' },
                  { before: 'Wednesday: Concert night! Fancy silver', after: 'from grandma. I felt like a movie star.', answer: 'earrings' },
                  { before: 'Thursday: Family reunion. Mum reminded me a hundred times to be', after: '\u2014 you know, please and thank you.', answer: 'polite' },
                  { before: 'Friday: I met a new girl at the shelter. So', after: '\u2014 she smiled at everyone and remembered my name!', answer: 'friendly' },
                  { before: 'Saturday: Time to', after: 'again \u2014 4 hours at the animal shelter, my favourite way to spend a morning.', answer: 'volunteer' },
                  { before: 'Sunday: Perfect weather to', after: 'in the park \u2014 autumn leaves, my camera, so much light!', answer: 'take pictures' },
                  { before: 'Also: I\u2019m planning a trip to', after: 'next summer \u2014 London, please welcome me.', answer: 'the UK' },
                  { before: 'Last note: I\u2019ve started keeping my desk tidy. Mum says I\u2019m finally becoming', after: '\u2014 miracle!', answer: 'organized' }
                ]
              },
              {
                type: 'match',
                title: 'Match Unit 1 words with their group',
                instruction: 'Each word (left) belongs to ONE of four categories from Unit 1 (right).',
                pairs: [
                  { left: 'trainers', right: 'clothes' },
                  { left: 'kind', right: 'personality' },
                  { left: 'volunteer', right: 'free-time activity' },
                  { left: 'the Eiffel Tower', right: 'landmark' },
                  { left: 'slim', right: 'appearance' },
                  { left: 'sculpt', right: 'free-time activity' },
                  { left: 'cardigan', right: 'clothes' },
                  { left: 'talkative', right: 'personality' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "This unit\u2019s revision covers FOUR grammar patterns from Lessons 1-4. Look at these sentences from Maya\u2019s diary. Each one uses a different pattern. Can you spot them all?",
            taskUk: 'Це повторення охоплює ЧОТИРИ граматичні патерни з уроків 1-4. Подивись на речення зі щоденника Майї — кожне використовує інший патерн. Чи можеш ти їх усі впізнати?',
            sentences: [
              { id: 1, html: '📅 <em>\u201cTomorrow, my class <span class="marker">is going to</span> visit <span class="marker">the</span> British Museum in <span class="marker">the UK</span>.\u201d</em>' },
              { id: 2, html: '👗 <em>\u201cI <span class="marker">was choosing</span> my earrings when my mum <span class="marker">shouted</span> that we\u2019re late!\u201d</em>' },
              { id: 3, html: '🌷 <em>\u201cAnya is a <span class="marker">kind, patient, hard-working</span> girl \u2014 also the most <span class="marker">friendly young</span> student in our class.\u201d</em>' },
              { id: 4, html: '🎯 <em>\u201cI <span class="marker">will</span> probably wear my new blue jacket, but I <span class="marker">\u2019m meeting</span> Sofia first at the caf\u00e9.\u201d</em>' }
            ],
            questions: [
              "Sentence 1 uses TWO grammar tools: a FUTURE tense (\u201cis going to\u201d) and ARTICLES (\u201cthe British Museum\u201d, \u201cthe UK\u201d). Why \u201cthe UK\u201d but no \u201cthe\u201d before \u201cBritish Museum\u201d? Actually \u2014 there IS \u201cthe\u201d in the museum too. Landmarks and organizations take THE.",
              "Sentence 2 mixes TWO past tenses: \u201cwas choosing\u201d (Past Continuous) and \u201cshouted\u201d (Past Simple). Which one is the LONG background action, and which one INTERRUPTED it?",
              "Sentence 3 stacks THREE personality adjectives (kind, patient, hard-working) and then two more (friendly, young) in a specific order. Why commas between the first three but not between \u201cfriendly young\u201d?",
              "Sentence 4 uses TWO different futures: \u201cwill\u201d (probably) and \u201c\u2019m meeting\u201d (Present Continuous for a fixed plan). Which one is the spontaneous decision, and which one is the arranged plan?",
              "Can you say what each pattern is for? FUTURES \u2192 ___ . ARTICLES \u2192 ___ . PAST tenses \u2192 ___ . ADJECTIVE ORDER \u2192 ___ ."
            ]
          },

          grammar: {
            title: 'Grammar Revision: Unit 1 essentials', titleUk: 'Повторення: ключова граматика юніту 1',
            intro: 'This unit gave us <strong>four big grammar tools</strong> \u2014 the essential toolkit for talking about your plans, your world, your past, and the people around you. Let\u2019s revise them all in one place.',
            introUk: 'Цей юніт дав нам <em>чотири великі граматичні інструменти</em> — базовий набір, щоб розповідати про плани, про світ, про минуле і про людей навколо. Повторимо всі чотири в одному місці.',
            blocks: [
              {
                title: 'Future tenses \u2014 3 ways', letter: 'A',
                when: 'three futures for three situations', whenUk: 'три майбутніх часи для трьох ситуацій',
                explain: "Three tools, three jobs. <strong>Present Continuous</strong> (<em>I\u2019m meeting Sofia at 5</em>) \u2192 fixed arrangements with a time/place. <strong>be going to</strong> (<em>I\u2019m going to volunteer this weekend</em>) \u2192 intentions and plans decided BEFORE speaking, OR predictions based on evidence you can see. <strong>will</strong> (<em>I\u2019ll probably wear my jacket</em>) \u2192 spontaneous decisions, predictions from feelings, promises, and future facts.",
                explainUk: "Три інструменти, три задачі. <em>Present Continuous</em> (I\u2019m meeting Sofia at 5) \u2192 домовленості з конкретним часом/місцем. <em>be going to</em> (I\u2019m going to volunteer) \u2192 плани, прийняті ДО розмови, або передбачення з видимих ознак. <em>will</em> (I\u2019ll probably wear my jacket) \u2192 спонтанні рішення, передбачення на почуттях, обіцянки, факти майбутнього.",
                formula: 'Arrangement: <em>am/is/are + V-ing</em> &nbsp;·&nbsp; Plan/evidence: <em>am/is/are going to + V1</em> &nbsp;·&nbsp; Decision now / prediction: <em>will + V1</em>',
                examples: [
                  { en: "I\u2019m meeting Sofia at the caf\u00e9 at 6 PM. (fixed arrangement)", uk: 'Я зустрічаюся з Софією в кафе о 6-й. (домовленість)' },
                  { en: "I\u2019m going to buy a new hoodie next weekend. (plan)", uk: 'Я збираюся купити нове худі наступного тижня. (план)' },
                  { en: "Look at those clouds \u2014 it\u2019s going to rain. (evidence)", uk: 'Поглянь на ті хмари — буде дощ. (за ознаками)' },
                  { en: "I\u2019m tired \u2014 I\u2019ll go to bed early. (decision NOW)", uk: 'Я втомилася — піду рано спати. (рішення прямо зараз)' }
                ]
              },
              {
                title: 'Articles \u2014 a / an / the / zero', letter: 'B',
                when: 'the tiny words that shape every noun', whenUk: 'крихітні слова, що надають форму кожному іменнику',
                explain: "Four choices for every noun. <strong>a / an</strong> \u2192 one of many, first mention (an apple, a hoodie). <strong>the</strong> \u2192 THE specific one we both know (the Eiffel Tower, the UK, the sun). <strong>Zero article</strong> \u2192 general truths, most country names, plural things (France, cats, love). Simple order for countries: most \u2192 no article (France, Japan). Words like \u201cUnited\u201d, \u201cKingdom\u201d, \u201cRepublic\u201d, \u201cStates\u201d \u2192 THE. Famous landmarks \u2192 THE.",
                explainUk: "Чотири варіанти для кожного іменника. <em>a / an</em> \u2192 один із багатьох, перша згадка (an apple, a hoodie). <em>the</em> \u2192 ТА конкретна, яку обидва знаємо (the Eiffel Tower, the UK, the sun). <em>Нульовий артикль</em> \u2192 загальні істини, більшість країн, множина (France, cats, love). Просте правило для країн: більшість \u2192 без артикля (France, Japan). Слова «United», «Kingdom», «Republic», «States» \u2192 THE. Відомі памʼятки \u2192 THE.",
                formula: 'first mention / one: <em>a/an</em> &nbsp;·&nbsp; specific / famous: <em>the</em> &nbsp;·&nbsp; general / most countries / plural: <em>\u2013</em>',
                examples: [
                  { en: "I bought a new scarf yesterday. The scarf is red.", uk: 'Я купила новий шарф вчора. Той шарф червоний.' },
                  { en: "We\u2019re flying to Japan next summer, then to the USA.", uk: 'Ми летимо в Японію наступного літа, потім у США.' },
                  { en: "The Eiffel Tower is in Paris, France.", uk: 'Ейфелева вежа у Парижі, у Франції.' },
                  { en: "Cats are lazy, but I love them anyway.", uk: 'Коти ліниві, але я їх все одно люблю.' }
                ]
              },
              {
                title: 'Past Simple vs Past Continuous', letter: 'C',
                when: 'the storyteller\u2019s duo', whenUk: 'дует оповідача',
                explain: "<strong>Past Simple</strong> (V2) \u2192 a QUICK, FINISHED action. Chains of actions: <em>I woke up, put on my boots, and left</em>. <strong>Past Continuous</strong> (was/were + V-ing) \u2192 an action IN PROGRESS at a past moment. The SCENE. When they meet in one sentence: Past Continuous is the LONG background action, Past Simple is the QUICK action that INTERRUPTS it. Connectors: <em>while</em> \u2192 Past Continuous. <em>when</em> \u2192 Past Simple.",
                explainUk: "<em>Past Simple</em> (V2) \u2192 ШВИДКА завершена дія. Ланцюжок дій: I woke up, put on my boots, and left. <em>Past Continuous</em> (was/were + V-ing) \u2192 дія В ПРОЦЕСІ в певний момент. Це СЦЕНА. Разом в одному реченні: Past Continuous — довга «фонова» дія, Past Simple — швидка, яка її перериває. Сполучники: <em>while</em> \u2192 Past Continuous. <em>when</em> \u2192 Past Simple.",
                formula: 'Past Simple: <em>V2</em> (chains, finished) &nbsp;·&nbsp; Past Continuous: <em>was/were + V-ing</em> (scene) &nbsp;·&nbsp; while + PC, when + PS',
                examples: [
                  { en: "Sofia put on her coat and left the house.", uk: 'Софія одягла пальто і вийшла з дому.' },
                  { en: "At 8 AM I was choosing my earrings.", uk: 'О 8-й ранку я вибирала сережки.' },
                  { en: "I was wearing my new boots when it started to rain.", uk: 'Я була в нових чоботях, коли почався дощ.' },
                  { en: "While Anya was reading, her brother was gaming.", uk: 'Поки Аня читала, її брат грав у ігри.' }
                ]
              },
              {
                title: 'Order of adjectives \u2014 OSASCOMP', letter: 'D',
                when: 'stacking 2+ adjectives before a noun', whenUk: 'коли ставимо 2+ прикметники перед іменником',
                explain: "The 8-step ladder: <strong>Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose \u2192 noun</strong>. Golden shortcut: <em>OPINION comes first</em>, then facts. <em>a kind old lady</em> (opinion + age), NOT <em>an old kind lady</em>. Commas: use them between adjectives of the SAME category (\u201ca kind, honest, generous man\u201d). NO commas between different categories (\u201ca big red apple\u201d). Test: can you say \u201cand\u201d between them? Then comma is OK.",
                explainUk: "Драбина з 8 сходинок: <em>Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose \u2192 іменник</em>. Золоте правило: <strong>OPINION йде першим</strong>, далі — факти. <em>a kind old lady</em> (думка + вік), а НЕ <em>an old kind lady</em>. Коми: між прикметниками ОДНІЄЇ категорії (a kind, honest, generous man). БЕЗ ком між різними (a big red apple). Тест: чи можна поставити «and» між ними? Тоді і кома можлива.",
                formula: '<em>Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose</em>',
                examples: [
                  { en: "a beautiful long blue Ukrainian dress (opinion + size + colour + origin)", uk: 'красива довга синя українська сукня' },
                  { en: "a kind, patient, old teacher (opinion + opinion + age)", uk: 'добра, терпляча, стара вчителька' },
                  { en: "a big red leather handbag (size + colour + material)", uk: 'велика червона шкіряна сумочка' },
                  { en: "a friendly young well-built Italian coach", uk: 'привітний молодий атлетичний італійський тренер' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Mixed grammar review',
                instruction: 'Grammar from all Unit 1 lessons is mixed here. Choose the correct form.',
                questions: [
                  { q: 'I ___ Sofia at the caf\u00e9 at 5 PM (already agreed \u2014 fixed plan).', options: ['will meet', "\u2019m meeting", 'meet'], correct: 1 },
                  { q: 'Look at those dark clouds \u2014 it ___ rain.', options: ["'s going to", 'will', 'is'], correct: 0 },
                  { q: '\u201cThe phone\u2019s ringing!\u201d \u2014 \u201cDon\u2019t worry, I ___ answer it.\u201d (spontaneous)', options: ["\u2019m answering", "\u2019m going to answer", "\u2019ll answer"], correct: 2 },
                  { q: 'We\u2019re flying to ___ USA next month.', options: ['\u2013', 'a', 'the'], correct: 2 },
                  { q: 'Anya loves visiting ___ Japan every summer.', options: ['\u2013', 'a', 'the'], correct: 0 },
                  { q: '___ Eiffel Tower is one of the most famous landmarks in the world.', options: ['\u2013', 'A', 'The'], correct: 2 },
                  { q: 'At 8 AM yesterday, I ___ my new leggings for the first time.', options: ['tried', 'was trying', 'have tried'], correct: 1 },
                  { q: 'While Anya ___ her cardigan, the doorbell rang.', options: ['put on', 'was putting on', 'has put on'], correct: 1 },
                  { q: 'She grabbed her handbag, put on her scarf, and ___ .', options: ['was leaving', 'left', 'has left'], correct: 1 },
                  { q: 'Which order is right? Anya was wearing a...', options: ['blue beautiful long dress', 'beautiful long blue dress', 'long blue beautiful dress'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the verb / word in the right form',
                instruction: 'This mixes all four grammar tools of Unit 1. Read each sentence carefully!',
                questions: [
                  { before: 'I\u2019m tired \u2014 I', after: '(go) to bed early tonight.', answer: "'ll go", hint: 'decision made NOW \u2192 will' },
                  { before: 'Sofia', after: '(meet) her cousin at the airport tomorrow at 3 PM.', answer: "'s meeting", hint: 'fixed arrangement \u2192 Present Continuous' },
                  { before: 'Look at Anya\u2019s face \u2014 she', after: '(cry) any second.', answer: "'s going to cry", hint: 'evidence \u2192 be going to' },
                  { before: 'We visited', after: 'Louvre in', answer: 'the', hint: 'famous landmark \u2192 the' },
                  { before: 'She was born in', after: 'Ukraine but now lives in', answer: '\u2013 (no article)', hint: 'most country names \u2192 no article' },
                  { before: 'I', after: '(wear) my new boots when I met Nick at the mall.', answer: 'was wearing', hint: 'background action \u2192 Past Continuous' },
                  { before: 'Yesterday I', after: '(buy) three new hoodies at the sale.', answer: 'bought', hint: 'finished quick action \u2192 Past Simple' },
                  { before: 'Anya is a', after: 'girl. (young / kind / tall)', answer: 'kind young tall', hint: 'OSASCOMP: opinion \u2192 age \u2192 size' },
                  { before: 'I bought a', after: 'handbag. (leather / small / beautiful / brown)', answer: 'beautiful small brown leather', hint: 'OSASCOMP: opinion \u2192 size \u2192 colour \u2192 material' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural one.',
                questions: [
                  { q: 'Fixed arrangement:', options: ['I meet Sofia tomorrow at 5.', 'I\u2019m meeting Sofia tomorrow at 5.'], correct: 1 },
                  { q: 'Spontaneous decision:', options: ['Wait, I\u2019m going to open the door.', 'Wait, I\u2019ll open the door.'], correct: 1 },
                  { q: 'Country name:', options: ['I love the France.', 'I love France.'], correct: 1 },
                  { q: 'Famous landmark:', options: ['We climbed Eiffel Tower.', 'We climbed the Eiffel Tower.'], correct: 1 },
                  { q: 'Two long past actions at the same time:', options: ['While I read, Mum was cooking.', 'While I was reading, Mum was cooking.'], correct: 1 },
                  { q: 'Quick action interrupts a long one:', options: ['I put on my hat when it started raining.', 'I was putting on my hat when it started raining.'], correct: 1 },
                  { q: 'OSASCOMP order:', options: ['a red big balloon', 'a big red balloon'], correct: 1 },
                  { q: 'Opinion first:', options: ['an old kind woman', 'a kind old woman'], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '💌',
            textTitle: "Anya\u2019s letter to Grandma \u2014 the whole Unit 1 in one page",
            text: [
              "Dear Grandma,",
              "I\u2019m writing this on Sunday evening because I have SO much to tell you \u2014 and Mum said phone calls don\u2019t count as \u201creal letters\u201d anymore.",
              "First, big news: I\u2019m going to visit you in Lviv next month! Mum already bought the train tickets. I\u2019m meeting Sofia at Kyiv station on July 12th at 9 AM, and then we\u2019re both traveling to you together. Please tell grandpa \u2014 he\u2019ll probably want to cook something huge.",
              "Now, everything else. Unit 1 at school was WILD.",
              "In our free-time chapter, our teacher asked what we love to do outside school. I said: I paint, I volunteer at the animal shelter every Saturday, and I try new recipes with Mum on Sundays. Nick said he plays video games and \u201cbuilds robots\u201d (Grandma, they\u2019re toilet rolls with faces). Sofia said she takes pictures and reads adventure books. Same girl who three years ago said reading was \u201cboring\u201d.",
              "In our countries chapter, we studied famous landmarks. We now know the Eiffel Tower is in Paris, France; the Great Wall is in China; and the Statue of Liberty is in the USA. Small trick: countries like France, Japan, Italy don\u2019t need \u201cthe\u201d, but the UK, the USA, and the Netherlands do. I got 9 out of 10 on the article quiz \u2014 the only mistake was \u201cthe France\u201d. Sofia laughed for a full minute.",
              "In our clothes chapter, we did a fashion project. We had to describe our favourite outfit in five sentences. Mine was: my dark blue denim skirt, a soft white shirt, my grandma\u2019s hand-knitted grey cardigan (yes, YOUR cardigan \u2014 I wear it EVERY week), silver earrings from Aunt Olena, and my old brown boots. Miss Iryna said it was \u201clike a poem\u201d. I nearly cried.",
              "Then we learned about Past Simple and Past Continuous. I finally understood why we say \u201cI was walking to school when it started raining\u201d and NOT \u201cI walked when it was starting raining\u201d. Grammar makes so much more sense when you use real examples.",
              "In our describing-people chapter, we wrote portraits of five people we love. I wrote about you, of course. I said you were kind, patient, and hard-working \u2014 the three most important adjectives in the world. Miss Iryna also asked me to describe YOUR appearance. So I wrote: \u201cA small, thin, elegant, seventy-eight-year-old lady with silver curly hair and warm brown eyes.\u201d Then I added a sentence about how you become TERRIFYING when you meet lazy people. Miss Iryna laughed for THREE minutes.",
              "The whole class then had to spot my mistakes in \u201cadjective order.\u201d I wrote \u201ca kind small elegant old lady\u201d \u2014 which was NOT right. Correct order: opinion \u2192 size \u2192 age. So: \u201ca kind small old elegant lady\u201d... wait, no. \u201ca kind, elegant, small, old lady.\u201d Hmm, still weird. Grandma, this is why grammar is a lifetime sport.",
              "Anyway. This whole unit made me realize something: I\u2019m going to spend the rest of my life describing people, plans, places, and outfits. Might as well learn how to do it properly.",
              "See you July 12th at your kitchen table. I\u2019ll bring the raspberry jam. You bring the stories.",
              "With all my love,",
              "Anya \u2764\ufe0f",
              "P.S. Please, PLEASE make your pancakes with sour cream. I\u2019ve been dreaming about them since May."
            ],
            questions: [
              { q: 'Why is Anya writing a letter instead of calling?', options: ['She lost her phone', 'Mum said phone calls don\u2019t count as \u201creal letters\u201d', 'She wants to practise handwriting'], correct: 1 },
              { q: 'When and where is Anya meeting Sofia?', options: ['July 12th at Kyiv station at 9 AM', 'Tomorrow at the caf\u00e9', 'Next weekend at grandma\u2019s'], correct: 0 },
              { q: 'What was Anya\u2019s only article mistake?', options: ['She wrote \u201cthe Japan\u201d', 'She wrote \u201cthe France\u201d', 'She forgot \u201cthe\u201d before the Eiffel Tower'], correct: 1 },
              { q: 'What was Anya\u2019s favourite outfit for the fashion project?', options: ['A red dress and gold jewellery', 'A dark blue denim skirt, white shirt, grandma\u2019s cardigan, silver earrings, brown boots', 'Black leggings, a hoodie, and trainers'], correct: 1 },
              { q: 'What was Anya\u2019s grammar breakthrough with Past Simple / Past Continuous?', options: ['She still doesn\u2019t get it', 'She understood the \u201cwas walking when it started raining\u201d pattern', 'She learned that all past verbs are the same'], correct: 1 },
              { q: 'What three adjectives did Anya pick for grandma\u2019s personality?', options: ['Loud, funny, tall', 'Kind, patient, hard-working', 'Serious, quiet, generous'], correct: 1 },
              { q: 'Why does Anya say grammar is \u201ca lifetime sport\u201d?', options: ['Because it\u2019s boring', 'Because she keeps messing up adjective order and it\u2019s hard', 'Because her teacher told her to say that'], correct: 1 },
              { q: 'What\u2019s the P.S. request?', options: ['To bake bread', 'To make pancakes with sour cream', 'To buy new earrings'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Tell us your TOP 3 free-time activities. Use at least one \u201cI\u2019m going to\u201d for your next weekend plan.",
              "Describe the outfit you\u2019re wearing RIGHT NOW using at least 3 clothing words and one stack of 2+ adjectives (OSASCOMP order!).",
              "Which country from Unit 1 would you love to visit \u2014 and which landmark would you go to first? Use \u201cthe\u201d correctly!",
              "Complete: \u201cLast weekend, while I was ___, suddenly ___.\u201d Make it a 15-second story.",
              "Describe your BEST FRIEND using 5 adjectives \u2014 personality AND appearance mixed. At least one stack of 2+ adjectives in OSASCOMP order.",
              "What are you doing this Saturday? Try to use ALL THREE futures in your answer: \u201cI\u2019m meeting ___\u201d, \u201cI\u2019m going to ___\u201d, and \u201cI\u2019ll probably ___\u201d.",
              "Look back at Unit 1: what surprised you the most? What was harder than you expected \u2014 and what turned out to be easier?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We revised ALL the vocabulary from Unit 1: free-time activities (L1), countries and landmarks (L2), clothes and accessories (L3), and personality + appearance (L4).",
              "We revised four grammar tools that give you superpowers:",
              "Future tenses \u2192 Present Continuous (fixed arrangements), be going to (plans + evidence), will (spontaneous decisions + predictions).",
              "Articles \u2192 a/an (one of many), the (specific / famous / with \u201cUnited\u201d, \u201cKingdom\u201d, etc.), zero article (general truths + most country names).",
              "Past tenses \u2192 Past Simple (V2, quick finished action) + Past Continuous (was/were + V-ing, action in progress). Together: PC is the scene, PS is the interrupter. \u201cwhile\u201d + PC / \u201cwhen\u201d + PS.",
              "Order of adjectives \u2192 OSASCOMP: Opinion \u2192 Size \u2192 Age \u2192 Shape \u2192 Colour \u2192 Origin \u2192 Material \u2192 Purpose. Opinion FIRST is the shortcut that saves 90% of stress.",
              "Big takeaway from Unit 1: you now have words AND grammar to describe your world \u2014 what you do, where you\u2019re from, what you wear, and who\u2019s in your life. That\u2019s not a small thing. That\u2019s HALF of every real English conversation."
            ],
            finalQuiz: {
              title: 'Quick check \u2014 3 questions',
              questions: [
                { q: '\u201cI ___ Sofia at 5 PM \u2014 we agreed last week.\u201d Which future fits?', options: ['\u2019ll meet', '\u2019m meeting', "'m going to meet"], correct: 1 },
                { q: '\u201cWe were flying over ___ Ukraine when I saw ___ Carpathian Mountains.\u201d', options: ['the / \u2013', '\u2013 / the', 'the / the'], correct: 1 },
                { q: '\u201cShe was wearing a ___ dress.\u201d Which order is right?', options: ['blue long beautiful', 'beautiful long blue', 'long blue beautiful'], correct: 1 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My Unit 1 story',
              task: "Write a short story or diary entry (<strong>8\u201310 sentences</strong>) using EVERYTHING you learned in Unit 1. Include: <strong>at least 6 words</strong> from the unit (any mix of activities / clothes / personality / countries), <strong>at least 2 different future tenses</strong>, <strong>1 correct use of \u201cthe\u201d</strong> (landmark or country), <strong>1 Past Simple + Past Continuous combo</strong> (with \u201cwhen\u201d or \u201cwhile\u201d), and <strong>1 stack of 2+ adjectives</strong> in OSASCOMP order. Can be about a real weekend, an imaginary trip, or a whole invented character!",
              taskUk: 'Напиши коротку історію або щоденниковий запис (8–10 речень) з УСІМ, що ти вивчив(-ла) у Unit 1. Включи: щонайменше 6 слів з юніту (будь-яка суміш занять/одягу/характеру/країн), щонайменше 2 різних майбутніх часи, 1 правильне використання «the» (памʼятка чи країна), 1 комбо Past Simple + Past Continuous (з «when» або «while») і 1 стек з 2+ прикметників у порядку OSASCOMP. Це може бути реальний вихідний, уявна подорож або цілий вигаданий персонаж!',
              tip: 'Recipe: 1 sentence \u2014 who you are / who the character is → 2 sentences with a past story (Past Simple + Past Continuous) → 2 sentences describing an outfit or a person (adjective stack!) → 2 sentences about future plans (mix futures) → 1 final feeling.'
            },
            speaking: {
              title: '90-second Unit 1 wrap-up',
              task: "Record a <strong>90-second reflection</strong> answering: What was the MOST useful thing you learned in Unit 1? What has changed in your English? What are you going to do next? Use at least <strong>2 different future tenses</strong>, <strong>1 sentence with 2+ adjectives</strong> in OSASCOMP order, and <strong>1 Past Simple or Past Continuous</strong> sentence.",
              taskUk: 'Запиши 90-секундну рефлексію на тему: Що було найкориснішим у Unit 1? Що змінилося у твоїй англійській? Що плануєш далі? Використай щонайменше 2 різних майбутніх часи, 1 речення з 2+ прикметниками у порядку OSASCOMP і 1 речення в Past Simple або Past Continuous.',
              tip: 'Be honest about what worked and what didn\u2019t \u2014 real reflections are always more interesting than perfect ones.'
            }
          }
        }

      ]
    },

    /* ═══════════════════════════════════════════════════════════
     * UNIT 2 · Jobs, Learning, Experiences, Sport
     * ═══════════════════════════════════════════════════════════ */
    {
      id: 'unit-2',
      number: 2,
      title: 'Jobs, Learning, Experiences, Sport',
      subtitle: 'Професії, навчання, досвід, спорт',
      lessons: [

        /* ═══════════════════════════════════════════════════════
         * LESSON 6 · Working hard (Важка праця)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u2-l6', number: 6,
          title: 'Working hard', titleUk: 'Важка праця',
          type: 'Vocabulary', tags: ['jobs', 'professions', 'must', 'have-to', 'modals'],
          updated: 'today', accent: 'sky', current: true,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🚀', en: "When you were 5, what job did you want to be when you grew up? Is it still the same? What changed?", uk: 'Ким ти хотів(-ла) стати, коли тобі було 5? Чи це досі те саме? Що змінилося?' },
              { emoji: '💼', en: "Name ONE job that seems boring but is actually really important. And ONE that seems glamorous but is actually really hard. Explain why!", uk: 'Назви ОДНУ професію, яка здається нудною, але насправді дуже важлива. І ОДНУ, яка здається блискучою, але насправді дуже важка. Поясни чому!' },
              { emoji: '🎯', en: "If you had to work RIGHT NOW at age 10-12, and it had to be a real, useful job \u2014 which one could you actually do well? Not \u201cwant to\u201d, but \u201cCAN\u201d.", uk: 'Якби тобі довелося ПРАЦЮВАТИ прямо зараз у 10-12 років на реальній корисній роботі — яку ти б зміг(-ла) робити добре? Не «хочеш», а «МОЖЕШ».' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to Unit 2! We\u2019re starting big \u2014 the world of work. Today you get 11 professions (from the everyday hero cleaner to the high-tech computer programmer) and 5 adjectives to describe what a job actually FEELS like (exciting? boring? dangerous?). By the end, you\u2019ll be able to talk about ANY job \u2014 yours, your parents\u2019, or a totally imaginary future one.",
            introUk: 'Ласкаво просимо до Unit 2! Починаємо з великого — світу праці. Сьогодні 11 професій (від щоденного героя-прибиральника до high-tech програміста) і 5 прикметників, які описують, ЯКОЮ насправді є робота (захоплива? нудна? небезпечна?). Наприкінці ти зможеш говорити про БУДЬ-ЯКУ роботу — свою, батьків, або цілком уявну майбутню.',
            items: [
              // Everyday / service jobs
              { emoji: '🧹', en: 'cleaner', uk: 'прибиральник(-ця)', explain: "The person who keeps buildings tidy \u2014 schools, offices, hospitals. Small job title, HUGE impact on everyone\u2019s day.", accent: 'sage' },
              { emoji: '💇', en: 'hairdresser', uk: 'перукар(-ка)', explain: "Cuts, styles, colours your hair. Half stylist, half therapist \u2014 clients tell them EVERYTHING.", accent: 'terracotta' },
              { emoji: '📋', en: 'secretary', uk: 'секретар(-ка)', explain: "Organizes an office \u2014 answers phones, books meetings, types letters. Basically holds the whole company together.", accent: 'mustard' },
              { emoji: '🗺️', en: 'tour guide', uk: 'екскурсовод(-ка)', explain: "Shows tourists around cities, museums, castles \u2014 knows every fact, every story, every legend.", accent: 'sky' },
              { emoji: '🏭', en: 'factory worker', uk: 'працівник(-ця) фабрики', explain: "Makes real, physical things \u2014 cars, phones, clothes, chocolate. Without them, nothing on your shelf exists.", accent: 'plum' },
              // Emergency / important jobs
              { emoji: '🚒', en: 'firefighter', uk: 'пожежник(-ця)', explain: "Runs INTO burning buildings while everyone else runs OUT. Rescues people, animals, saves houses.", accent: 'terracotta' },
              { emoji: '🦷', en: 'dentist', uk: 'стоматолог(-иня)', explain: "Takes care of teeth \u2014 checks, cleans, fixes cavities. Half the reason we all fear the chair.", accent: 'sky' },
              // Creative / technical jobs
              { emoji: '📰', en: 'journalist', uk: 'журналіст(-ка)', explain: "Investigates stories and writes news articles. Job motto: find the truth, tell it clearly.", accent: 'mustard' },
              { emoji: '⚙️', en: 'engineer', uk: 'інженер(-ка)', explain: "Designs bridges, machines, roads, robots \u2014 basically the people who solve problems with math and imagination.", accent: 'plum' },
              { emoji: '💻', en: 'computer programmer', uk: 'програміст(-ка)', explain: "Writes code that makes apps, games and websites work. Speaks fluent Python, JavaScript, or C++.", accent: 'sky' },
              { emoji: '🏛️', en: 'architect', uk: 'архітектор(-ка)', explain: "Designs buildings \u2014 houses, schools, skyscrapers. Half artist, half engineer, half genius.", accent: 'terracotta' },
              // Adjectives to describe jobs
              { emoji: '✨', en: 'exciting', uk: 'захоплива / цікава', explain: "Full of interesting moments \u2014 new challenges, adventures, surprises. Never boring.", accent: 'mustard' },
              { emoji: '💰', en: 'well-paid', uk: 'добре оплачувана', explain: "Pays a good salary \u2014 you earn enough for a comfortable life, plus savings.", accent: 'sage' },
              { emoji: '🧗', en: 'challenging', uk: 'важка / складна (у хорошому сенсі)', explain: "Difficult but interesting \u2014 makes you grow, learn, solve tough problems. Not easy, but rewarding.", accent: 'plum' },
              { emoji: '⚠️', en: 'dangerous', uk: 'небезпечна', explain: "Risky \u2014 you could get hurt. Firefighter, police officer, stunt performer, deep-sea diver.", accent: 'terracotta' },
              { emoji: '😴', en: 'boring', uk: 'нудна', explain: "Repetitive, dull \u2014 same task all day, nothing new. Feels like time stops.", accent: 'sky' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right job (or adjective!)',
                instruction: 'Read each mini-story. Which word fits best?',
                questions: [
                  { q: 'Anya\u2019s dad runs INTO burning houses to save people. He\u2019s a ___ .', options: ['dentist', 'firefighter', 'secretary'], correct: 1 },
                  { q: 'Sofia\u2019s mum designs beautiful modern schools all over the country. She\u2019s an ___ .', options: ['engineer', 'architect', 'journalist'], correct: 1 },
                  { q: 'When Nick had a bad tooth, he screamed all the way to the ___ .', options: ['tour guide', 'dentist', 'hairdresser'], correct: 1 },
                  { q: 'Maya\u2019s aunt writes news articles for a big Ukrainian newspaper. She\u2019s a ___ .', options: ['secretary', 'journalist', 'cleaner'], correct: 1 },
                  { q: 'Every day at 6 AM, Anna cleans 5 classrooms before school starts. She\u2019s our ___ .', options: ['cleaner', 'firefighter', 'programmer'], correct: 0 },
                  { q: 'On our Rome trip, our ___ told us amazing stories about the Colosseum for two hours.', options: ['tour guide', 'engineer', 'cleaner'], correct: 0 },
                  { q: 'Being a firefighter is very ___ \u2014 they enter burning buildings every day.', options: ['boring', 'well-paid', 'dangerous'], correct: 2 },
                  { q: 'My cousin says her office job is really ___ \u2014 same tasks every day, nothing new.', options: ['exciting', 'boring', 'challenging'], correct: 1 },
                  { q: 'Software engineers are usually ___ \u2014 they earn very good salaries in top companies.', options: ['well-paid', 'boring', 'dangerous'], correct: 0 },
                  { q: 'Nick\u2019s dad writes code for a big game company. He\u2019s a ___ .', options: ['tour guide', 'computer programmer', 'hairdresser'], correct: 1 },
                  { q: 'Every morning, my mum cuts, dyes and styles clients\u2019 hair. She\u2019s a ___ .', options: ['secretary', 'hairdresser', 'architect'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Anya\u2019s \u201cJobs I know\u201d list',
                instruction: 'Anya interviewed her family and neighbours about their jobs. Fill in the missing words.',
                bank: ['engineer', 'firefighter', 'dentist', 'journalist', 'architect', 'tour guide', 'well-paid', 'exciting', 'challenging'],
                questions: [
                  { before: 'My uncle is an', after: 'who designs bridges over big rivers.', answer: 'engineer' },
                  { before: 'His job is', after: '\u2014 he says every project is a new puzzle.', answer: 'challenging' },
                  { before: 'My aunt is a', after: 'who writes stories about small local heroes.', answer: 'journalist' },
                  { before: 'My cousin is a', after: 'in Lviv \u2014 she shows tourists the beautiful old city.', answer: 'tour guide' },
                  { before: 'Her friend is an', after: 'who designed our brand-new school library.', answer: 'architect' },
                  { before: 'Our neighbour is a', after: 'and he has three medals for bravery.', answer: 'firefighter' },
                  { before: 'His job is', after: 'and dangerous \u2014 no two days are the same.', answer: 'exciting' },
                  { before: 'My mum\u2019s best friend is a', after: '\u2014 no one loves visiting her, but she\u2019s the kindest person.', answer: 'dentist' },
                  { before: 'And my dad? Computer programmer. His job is', after: '\u2014 he bought me a new bike this year!', answer: 'well-paid' }
                ]
              },
              {
                type: 'match',
                title: 'Match the job with what they do',
                instruction: 'Each job (left) goes with the ONE thing they do most (right).',
                pairs: [
                  { left: 'a hairdresser', right: 'cuts and styles hair' },
                  { left: 'a cleaner', right: 'keeps buildings tidy' },
                  { left: 'a firefighter', right: 'rescues people from fires' },
                  { left: 'a tour guide', right: 'shows tourists around' },
                  { left: 'a dentist', right: 'takes care of teeth' },
                  { left: 'an architect', right: 'designs buildings' },
                  { left: 'a computer programmer', right: 'writes code' },
                  { left: 'a secretary', right: 'organizes an office' },
                  { left: 'a journalist', right: 'investigates and writes stories' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read these mini-dialogues about school and work rules. Two little verbs \u2014 MUST and HAVE TO \u2014 sound similar but come from DIFFERENT places. One is inside your head, one is written by someone else. Can you spot which is which?",
            taskUk: 'Прочитай маленькі діалоги про правила школи та роботи. Два маленьких дієслова — MUST і HAVE TO — звучать схоже, але приходять з РІЗНИХ місць. Одне — у твоїй голові, інше — написав хтось інший. Чи можеш ти вловити, де яке?',
            sentences: [
              { id: 1, html: '💬 <em>Anya: \u201cI <span class="marker">must</span> finish this book tonight \u2014 it\u2019s SO good, I can\u2019t stop!\u201d</em>' },
              { id: 2, html: '💬 <em>Nick: \u201cI <span class="marker">have to</span> wear a tie at school on Wednesdays. It\u2019s the uniform rule.\u201d</em>' },
              { id: 3, html: '💬 <em>Sofia: \u201cFirefighters <span class="marker">have to</span> follow strict safety rules \u2014 the law says so.\u201d</em>' },
              { id: 4, html: '💬 <em>Maya: \u201cI <span class="marker">must</span> remember to call grandma today. It\u2019s her birthday!\u201d</em>' }
            ],
            questions: [
              "In sentences 1 and 4, who decided that Anya \u201cmust\u201d finish the book and Maya \u201cmust\u201d call grandma? Was it an outside rule, or their own feelings?",
              "In sentences 2 and 3, who made Nick wear a tie? Who wrote the firefighter safety rules? Did Nick decide? Did the firefighter?",
              "Look at the pattern: MUST = ___ 's decision. HAVE TO = ___ 's decision.",
              "One tricky thing: in questions and negatives, which one do you hear WAY more often in everyday English \u2014 must or have to?",
              "Small test: \u201cIt\u2019s raining hard. You ___ take an umbrella\u201d. Is it your inner voice or a rule? Which fits better \u2014 must or have to?"
            ]
          },

          grammar: {
            title: 'MUST vs HAVE TO', titleUk: 'MUST vs HAVE TO',
            intro: "Two little verbs, both meaning \u201cneed to do\u201d, but coming from TWO DIFFERENT places. <strong>MUST</strong> is your <em>INNER voice</em> \u2014 a rule YOU set for yourself, based on YOUR feelings or opinions. <strong>HAVE TO</strong> is the <em>OUTSIDE voice</em> \u2014 a rule someone else (parents, school, law, boss) set for you. Same meaning, different source. Native speakers know the difference automatically \u2014 today, so will you.",
            introUk: 'Два маленькі дієслова, обидва означають «треба зробити», але приходять з ДВОХ РІЗНИХ місць. <em>MUST</em> — це твій <strong>ВНУТРІШНІЙ голос</strong>, правило, яке ТИ САМ(-А) собі встановив(-ла) на основі своїх почуттів чи переконань. <em>HAVE TO</em> — це <strong>ЗОВНІШНІЙ голос</strong>, правило, яке для тебе встановив хтось інший (батьки, школа, закон, начальник). Значення одне — джерело різне. Носії мови вловлюють різницю автоматично. Сьогодні ти також будеш це відчувати.',
            blocks: [
              {
                title: 'MUST \u2014 your inner voice', letter: 'A',
                when: 'YOUR own decision, YOUR own feeling', whenUk: 'ТВОЄ рішення, ТВОЄ переживання',
                explain: "Use <strong>MUST</strong> when the pressure comes from INSIDE \u2014 your feelings, opinions, strong beliefs, personal goals. \u201cI must clean my room, my mum will freak out\u201d \u2192 that\u2019s NOT must, that\u2019s external pressure! But \u201cI must finish this book, I\u2019m obsessed\u201d \u2192 that\u2019s YOUR own passion \u2192 MUST. Structure: <em>subject + must + V1 (no \u201cto\u201d)</em>. Also used for strong advice: \u201cYou must try that pizza \u2014 it\u2019s incredible!\u201d Only exists in present. No past form.",
                explainUk: "Вживай <em>MUST</em>, коли тиск приходить З СЕРЕДИНИ — твої почуття, переконання, сильна віра, особисті цілі. «I must clean my room, my mum will freak out» — це НЕ must, це зовнішній тиск! А «I must finish this book, I\u2019m obsessed» — твоя власна пристрасть \u2192 MUST. Структура: <strong>subject + must + V1 (без «to»)</strong>. Також для сильної поради: «You must try that pizza \u2014 it\u2019s incredible!» Існує ЛИШЕ в теперішньому. У минулому — форми немає.",
                formula: '<em>subject</em> + <strong>must</strong> + V1 &nbsp;·&nbsp; (\u2013) <em>subject</em> + <strong>mustn\u2019t</strong> + V1 (= forbidden!)',
                examples: [
                  { en: "I must call grandma tonight \u2014 it\u2019s her birthday!", uk: 'Я мушу подзвонити бабусі сьогодні — це її день народження!' },
                  { en: "You must try this cake, Anya, it\u2019s AMAZING!", uk: 'Ти мусиш скуштувати цей торт, Аню, він НЕЙМОВІРНИЙ!' },
                  { en: "I must stop scrolling and go to bed \u2014 it\u2019s 1 AM!", uk: 'Я мушу перестати скролити й лягти спати — уже перша ночі!' },
                  { en: "You mustn\u2019t touch that button! (STRONG prohibition)", uk: 'Ти НЕ повинен(-нна) торкатися тієї кнопки! (сувора заборона)' }
                ]
              },
              {
                title: 'HAVE TO \u2014 the outside rule', letter: 'B',
                when: 'someone or something ELSE decided', whenUk: 'вирішив(-ло) ХТОСЬ або ЩОСЬ інше',
                explain: "Use <strong>HAVE TO</strong> when the rule comes from OUTSIDE \u2014 your parents, the school, the law, your job, the situation. \u201cI have to wear a uniform\u201d \u2192 school rule. \u201cShe has to work Saturdays\u201d \u2192 her boss said so. \u201cWe have to stop at red lights\u201d \u2192 traffic law. Structure: <em>subject + have/has to + V1</em>. Unlike must, HAVE TO has ALL tenses: had to (past), will have to (future), don\u2019t have to (present negative). Bonus: in questions and negatives, English speakers use HAVE TO way more than MUST.",
                explainUk: "Вживай <em>HAVE TO</em>, коли правило приходить ЗЗОВНІ — батьки, школа, закон, робота, ситуація. «I have to wear a uniform» \u2192 правило школи. «She has to work Saturdays» \u2192 бос сказав. «We have to stop at red lights» \u2192 правила дорожнього руху. Структура: <strong>subject + have/has to + V1</strong>. На відміну від must, HAVE TO має ВСІ часи: had to (минулий), will have to (майбутній), don\u2019t have to (заперечення). Бонус: у питаннях і запереченнях носії використовують HAVE TO набагато частіше за MUST.",
                formula: '<em>subject</em> + <strong>have / has to</strong> + V1 &nbsp;·&nbsp; (\u2013) <em>don\u2019t / doesn\u2019t have to</em> = NOT necessary',
                examples: [
                  { en: "I have to wear a tie at school on Wednesdays. (uniform rule)", uk: 'Я маю (мушу) носити краватку в школі по середах. (правило форми)' },
                  { en: "My dad has to leave at 6 AM every day. (his job schedule)", uk: 'Мій тато мусить виходити о 6-й ранку щодня. (його робочий графік)' },
                  { en: "Yesterday, we had to stay home because it was snowing. (past)", uk: 'Вчора ми мусили залишитися вдома, бо йшов сніг. (минуле)' },
                  { en: "You don\u2019t have to come if you\u2019re tired. (NOT necessary \u2014 it\u2019s optional!)", uk: 'Ти НЕ мусиш приходити, якщо втомився(-лася). (це необовʼязково!)' }
                ]
              },
              {
                title: 'The important difference: MUSTN\u2019T vs DON\u2019T HAVE TO', letter: 'C',
                when: 'when they SOUND similar but mean opposite things', whenUk: 'коли ЗВУЧАТЬ схоже, а значення протилежні',
                explain: "This is where 80% of learners make mistakes. <strong>MUSTN\u2019T</strong> = it\u2019s FORBIDDEN. Don\u2019t do it. It\u2019s NOT allowed. \u201cYou mustn\u2019t use your phone during the test\u201d (banned!). <strong>DON\u2019T HAVE TO</strong> = it\u2019s NOT NECESSARY. You can do it if you want, but you don\u2019t need to. \u201cYou don\u2019t have to come to my birthday\u201d (it\u2019s optional). One is a WALL (mustn\u2019t = forbidden), the other is an OPEN DOOR (don\u2019t have to = your choice).",
                explainUk: "Тут 80% учнів роблять помилки. <em>MUSTN\u2019T</em> = це ЗАБОРОНЕНО. Не роби. НЕ дозволено. «You mustn\u2019t use your phone during the test» (заборонено!). <em>DON\u2019T HAVE TO</em> = це НЕОБОВʼЯЗКОВО. Можеш робити, якщо хочеш, але не мусиш. «You don\u2019t have to come to my birthday» (як хочеш). Одне — це СТІНА (mustn\u2019t = заборонено), інше — ВІДКРИТІ ДВЕРІ (don\u2019t have to = твій вибір).",
                formula: '<em>mustn\u2019t</em> = forbidden \u274c &nbsp;·&nbsp; <em>don\u2019t have to</em> = not necessary \u2705',
                examples: [
                  { en: "You mustn\u2019t swim in that river \u2014 it\u2019s dangerous! (FORBIDDEN)", uk: 'Тобі НЕ МОЖНА плавати в тій річці — це небезпечно! (ЗАБОРОНЕНО)' },
                  { en: "You don\u2019t have to swim if you don\u2019t want to. (NOT NECESSARY)", uk: 'Ти НЕ МУСИШ плавати, якщо не хочеш. (НЕОБОВʼЯЗКОВО)' },
                  { en: "Students mustn\u2019t cheat on tests. (school rule = banned)", uk: 'Учням НЕ МОЖНА списувати на тестах. (правило школи = заборонено)' },
                  { en: "You don\u2019t have to answer if you don\u2019t know. (optional)", uk: 'Ти не мусиш відповідати, якщо не знаєш. (за бажанням)' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Inner voice or outside rule?',
                instruction: 'Read each sentence and choose the correct modal.',
                questions: [
                  { q: 'I ___ finish reading this book \u2014 it\u2019s the best story of my life!', options: ['must', 'have to'], correct: 0 },
                  { q: 'Nick ___ wear a school uniform every day. It\u2019s the school rule.', options: ['must', 'has to'], correct: 1 },
                  { q: 'You ___ try Sofia\u2019s brownies! They\u2019re unreal.', options: ['must', 'have to'], correct: 0 },
                  { q: 'Firefighters ___ pass a fitness test every year. It\u2019s the law.', options: ['must', 'have to'], correct: 1 },
                  { q: 'I ___ stop watching TikTok, I\u2019m failing maths! (I\u2019m telling myself this)', options: ['must', 'have to'], correct: 0 },
                  { q: 'Anya\u2019s dad ___ start work at 6 AM because he\u2019s a firefighter.', options: ['must', 'has to'], correct: 1 },
                  { q: 'You ___ come to my birthday party if you don\u2019t want to. (optional)', options: ['mustn\u2019t', "don\u2019t have to"], correct: 1 },
                  { q: 'Students ___ use their phones during the exam! (forbidden!)', options: ["mustn\u2019t", "don\u2019t have to"], correct: 0 },
                  { q: 'I ___ finish this drawing tonight. It\u2019s my art project and I\u2019m proud of it.', options: ['must', 'have to'], correct: 0 },
                  { q: 'Yesterday, we ___ stay after class because the teacher wanted to give extra notes.', options: ['must', 'had to'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Fill in with the right form',
                instruction: 'Choose from: must, have to, has to, had to, mustn\u2019t, don\u2019t have to, doesn\u2019t have to. Read the situation carefully!',
                questions: [
                  { before: 'I', after: 'call grandma today \u2014 I promised her yesterday and I don\u2019t want to disappoint her.', answer: 'must', hint: 'INNER \u2014 promise, own feeling' },
                  { before: 'Sofia', after: 'wear a helmet when she rides her bike. Her parents insist.', answer: 'has to', hint: 'OUTSIDE \u2014 parents\u2019 rule' },
                  { before: 'You', after: 'touch that! It\u2019s hot!!! (BAN!)', answer: "mustn\u2019t", hint: 'FORBIDDEN' },
                  { before: 'You', after: 'buy me a gift for my birthday. Your presence is enough.', answer: "don\u2019t have to", hint: 'NOT necessary' },
                  { before: 'Last week, Anya', after: 'stay home because she was sick.', answer: 'had to', hint: 'past tense of have to' },
                  { before: 'Firefighters', after: 'be brave, strong and calm under pressure.', answer: 'have to', hint: 'OUTSIDE \u2014 job requirement' },
                  { before: 'I', after: 'stop biting my nails. It\u2019s a bad habit and I\u2019ve decided.', answer: 'must', hint: 'INNER \u2014 personal decision' },
                  { before: 'Nick', after: 'wake up early tomorrow \u2014 no school!', answer: "doesn\u2019t have to", hint: 'NOT necessary' },
                  { before: 'You', after: 'be late for your dentist appointment! She was so angry last time.', answer: "mustn\u2019t", hint: 'FORBIDDEN \u2014 don\u2019t do it!' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural, correct one.',
                questions: [
                  { q: 'Inner voice \u2014 personal feeling:', options: ['I must to finish this book.', 'I must finish this book.'], correct: 1 },
                  { q: 'School rule (outside):', options: ['We have to wear a uniform.', 'We must wearing a uniform.'], correct: 0 },
                  { q: 'Forbidden action:', options: ['You don\u2019t have to lie \u2014 it\u2019s wrong!', 'You mustn\u2019t lie \u2014 it\u2019s wrong!'], correct: 1 },
                  { q: 'Optional \u2014 not necessary:', options: ['You don\u2019t have to bring a gift.', 'You mustn\u2019t bring a gift.'], correct: 0 },
                  { q: 'Past tense (external rule yesterday):', options: ['Yesterday, I must stay home.', 'Yesterday, I had to stay home.'], correct: 1 },
                  { q: '3rd person singular \u2014 has to:', options: ['Sofia have to wake up at 6.', 'Sofia has to wake up at 6.'], correct: 1 },
                  { q: 'Strong recommendation:', options: ['You must try that new caf\u00e9!', 'You have to try that new caf\u00e9.'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '💼',
            textTitle: "A day in three lives: three jobs, three worlds",
            text: [
              "Every job looks glamorous from the outside. Every job has hard days. Here\u2019s a peek inside three very different careers \u2014 told by the people who live them.",
              "1. Katya, firefighter, 34 years old.",
              "\u201cMy alarm goes off at 5:45 AM. I have to be at the fire station by 6:30 sharp \u2014 no excuses, no traffic story counts. First hour: equipment check. I must know that every helmet, every hose, every rope is ready. In this job, five seconds can save a life. It\u2019s exciting, yes. It\u2019s dangerous, yes. But the hardest part isn\u2019t the fire \u2014 it\u2019s telling a mother her child is safe. That never gets easier. It also never gets old.\u201d",
              "2. Denys, computer programmer, 28 years old.",
              "\u201cI don\u2019t have to wake up early. I don\u2019t have to wear anything fancy. Most days, I code from home in pyjamas with a cat on my lap. Sounds like a dream? Well \u2014 I also have to solve problems that literally no one in the world has solved before. Some days I sit for 10 hours trying to fix ONE tiny bug. My job is well-paid, yes. It\u2019s challenging, definitely. But you must love the puzzle. If you hate problems, this job will break you.\u201d",
              "3. Iryna, tour guide, 41 years old.",
              "\u201cPeople think my job is holidays every day. HA. I have to walk 15,000 steps in every kind of weather. I have to smile at 6 PM after answering the same 3 questions all day. I have to remember 400 years of history and tell it with fresh energy \u2014 for the 500th time. But when a 10-year-old tourist looks at the Lviv Opera House with wide eyes and says \u2018Wow\u2019 \u2014 I remember why I love it. My job is exciting, tiring, and completely worth it.\u201d",
              "So what have we learned from these three?",
              "Every job has rules from the outside \u2014 what you HAVE TO do. Katya has to check equipment. Denys has to solve problems. Iryna has to walk in the rain. Those rules aren\u2019t choices.",
              "But every job also has rules from the inside \u2014 what you MUST believe. Katya must believe every life matters. Denys must believe every bug has a solution. Iryna must believe every tourist deserves her best story.",
              "That\u2019s the secret of great work. The outside rules make the job. The inside rules make it meaningful.",
              "One day, you\u2019ll pick a career too. When you do, ask both questions. What will I HAVE TO do? And \u2014 more importantly \u2014 what will I MUST believe in?"
            ],
            questions: [
              { q: 'What time does Katya have to be at the fire station?', options: ['5:45 AM', '6:30 AM', '7:00 AM'], correct: 1 },
              { q: 'Why does Katya say five seconds matter?', options: ['Because of traffic rules', 'Because they can save a life', 'Because the alarm is short'], correct: 1 },
              { q: 'What does Denys wear most days when he works?', options: ['A formal suit', 'A school uniform', 'Pyjamas at home'], correct: 2 },
              { q: 'What is the hardest thing about Denys\u2019s job?', options: ['Waking up early', 'Solving problems that no one has solved before', 'Dealing with people'], correct: 1 },
              { q: 'Why does Iryna say people misunderstand her job?', options: ['They think it\u2019s dangerous', 'They think it\u2019s holidays every day', 'They think it\u2019s well-paid'], correct: 1 },
              { q: 'What does Iryna have to remember and share every day?', options: ['400 years of history', 'The daily weather', 'Her personal opinions'], correct: 0 },
              { q: 'According to the text, what makes a great job?', options: ['Money and free time', 'The outside rules AND the inside beliefs', 'Following orders exactly'], correct: 1 },
              { q: 'What two questions should you ask when choosing a career?', options: ['How much? How long?', 'What will I HAVE TO do? What will I MUST believe?', 'Where? When?'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Name ONE job you find exciting AND ONE job you find boring. Explain WHY (opinion first!).",
              "Complete: \u201cI must ___ this week because ___.\u201d Something YOU decided, not your parents.",
              "Complete: \u201cAt school, I have to ___ every day. And I have to ___ every week.\u201d TWO real rules.",
              "Which job would be MOST dangerous \u2014 firefighter, factory worker, or tour guide in the mountains? Why?",
              "What\u2019s ONE rule your parents have that you actually agree with? Start: \u201cI have to ___ , and honestly, I think it\u2019s a good rule.\u201d",
              "If you become a computer programmer, what THREE things would you have to do every day? And what would you MUST believe in?",
              "Complete for a friend: \u201cYou mustn\u2019t ___\u201d (a strong warning) and \u201cYou don\u2019t have to ___\u201d (something optional). Two DIFFERENT sentences!"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "11 essential jobs: cleaner, hairdresser, secretary, tour guide, factory worker, firefighter, dentist, journalist, engineer, computer programmer, architect.",
              "5 adjectives to describe a job: exciting, well-paid, challenging, dangerous, boring.",
              "MUST = your INNER voice \u2014 YOUR decision, YOUR feeling, YOUR strong belief. \u201cI must call grandma \u2014 it\u2019s her birthday!\u201d",
              "HAVE TO = the OUTSIDE rule \u2014 someone ELSE decided (parents, school, law, boss). \u201cI have to wear a uniform. My school\u2019s rule.\u201d",
              "MUST has NO past form. HAVE TO has ALL tenses (has to, had to, will have to, don\u2019t have to).",
              "MUSTN\u2019T = FORBIDDEN. It\u2019s a WALL. \u201cYou mustn\u2019t use your phone during the test.\u201d",
              "DON\u2019T HAVE TO = NOT NECESSARY. It\u2019s an OPEN DOOR. \u201cYou don\u2019t have to come to my party \u2014 up to you!\u201d"
            ],
            finalQuiz: {
              title: 'Quick check \u2014 3 questions',
              questions: [
                { q: '\u201cI ___ finish this book tonight, it\u2019s incredible!\u201d Which fits?', options: ['must', 'have to', 'mustn\u2019t'], correct: 0 },
                { q: '\u201cYou ___ swim in that river \u2014 it\u2019s dangerous!\u201d (STRONG WARNING)', options: ['don\u2019t have to', 'mustn\u2019t', 'have to'], correct: 1 },
                { q: '\u201cLast week, Nick ___ stay home because he was sick.\u201d', options: ['must', 'had to', 'mustn\u2019t'], correct: 1 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'A day in the life of ___',
              task: "Pick ONE job from this lesson (cleaner, hairdresser, secretary, tour guide, factory worker, firefighter, dentist, journalist, engineer, computer programmer, or architect). Write <strong>7\u20139 sentences</strong> describing a typical day for that person. You MUST include: <strong>at least 3 adjectives</strong> from the lesson (exciting / well-paid / challenging / dangerous / boring), <strong>at least 2 sentences with HAVE TO</strong> (outside rules of their job), and <strong>at least 1 sentence with MUST</strong> (their inner belief or motivation).",
              taskUk: 'Обери ОДНУ професію з уроку (cleaner, hairdresser, secretary, tour guide, factory worker, firefighter, dentist, journalist, engineer, computer programmer, або architect). Напиши 7–9 речень про типовий день цієї людини. Обов\u2019язково включи: щонайменше 3 прикметники з уроку (exciting / well-paid / challenging / dangerous / boring), щонайменше 2 речення з HAVE TO (зовнішні правила їхньої роботи) і щонайменше 1 речення з MUST (їхня внутрішня переконаність чи мотивація).',
              tip: 'Recipe: 1 sentence \u2014 who they are and what they love → 2\u20133 sentences \u2014 rules of the job (HAVE TO) → 1 sentence \u2014 what they must believe (MUST) → 2 sentences \u2014 the hard AND the beautiful part.'
            },
            speaking: {
              title: '60-second dream job pitch',
              task: "Record a <strong>60-second pitch</strong> about your DREAM JOB. What is it? Why? Answer these questions using the grammar of the lesson: <strong>What will you HAVE TO do</strong> in this job (outside rules)? What <strong>MUST</strong> you believe in to do it well? Use at least <strong>2 adjectives</strong> from the lesson to describe how the job feels.",
              taskUk: 'Запиши 60-секундну промову про свою МРІЮ-ПРОФЕСІЮ. Що це? Чому? Дай відповіді на ці питання за допомогою граматики уроку: Що ти будеш МУСИТИ (HAVE TO) робити на цій роботі (зовнішні правила)? У ЩО (MUST) ти маєш вірити, щоб добре виконувати цю роботу? Використай щонайменше 2 прикметники з уроку, щоб описати, як відчувається робота.',
              tip: 'Talk with real energy \u2014 as if you were pitching yourself to a company. Real dreams sound better than perfect ones.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 7 · Learning and exams (Навчання та іспити)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u2-l7', number: 7,
          title: 'Learning and exams', titleUk: 'Навчання та іспити',
          type: 'Vocabulary', tags: ['school', 'exams', 'learning', 'ability', 'can-could-be-able-to'],
          updated: 'today', accent: 'mustard', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '📝', en: "Think about your last exam or test. Did you feel prepared or panicked? What did you do the night before \u2014 revise, sleep, or scroll?", uk: 'Пригадай свій останній іспит або тест. Ти був(-ла) готовий(-а) чи в паніці? Що ти робив(-ла) увечері перед — повторював(-ла), спав(-ла), чи скролив(-ла)?' },
              { emoji: '🏆', en: "What\u2019s ONE thing you could do better than most kids your age when you were 8? And what\u2019s ONE thing you can do now that would have BLOWN 8-year-old you\u2019s mind?", uk: 'Одна річ, яку ти вмів(-ла) робити краще, ніж більшість дітей у 8 років? І одна річ, яку ти зараз умієш, що ВРАЗИЛА б тебе-восьмирічного(-ою)?' },
              { emoji: '📚', en: "In your school life, which is more important \u2014 taking good notes, revising properly, or being calm during the exam itself? What matters MOST for actually doing well?", uk: 'У шкільному житті що важливіше — робити хороші нотатки, як слід повторювати, чи бути спокійним(-ою) на самому іспиті? Що НАЙБІЛЬШЕ впливає на добрий результат?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to \u201cthe survive-school toolkit\u201d! Today you get 10 essential school phrases that you\u2019ll use LITERALLY every week for the rest of your school life. Some are about doing well (revising, taking notes). Some are about the tough moments (failing, doing badly). Some are about the ethical grey zone (copying \u2014 which we DON\u2019T recommend, but let\u2019s be honest, we all know the word).",
            introUk: 'Ласкаво просимо в «набір виживання у школі»! Сьогодні 10 обовʼязкових шкільних виразів, які ти будеш вживати БУКВАЛЬНО щотижня до кінця школи. Деякі — про успіх (повторення, нотатки). Деякі — про важкі моменти (провал, погана оцінка). Деякі — про сіру етичну зону (списування — ми його НЕ рекомендуємо, але, будьмо чесні, ми всі знаємо це слово).',
            items: [
              // Positive study actions
              { emoji: '✍️', en: 'take notes', uk: 'робити нотатки / конспектувати', explain: "Write down the key points during a lesson so you can remember them later. Superpower unlocked.", accent: 'sage' },
              { emoji: '📤', en: 'hand in your homework', uk: 'здати домашнє завдання', explain: "Give your finished homework to the teacher. Late? Bad. Never? Worse. On time? Chef\u2019s kiss.", accent: 'sky' },
              { emoji: '🔁', en: 'revise for a test', uk: 'повторювати перед контрольною', explain: "Study the material AGAIN before a test \u2014 go over notes, re-read, practice. UK English (US: \u201cstudy for\u201d).", accent: 'terracotta' },
              { emoji: '🎯', en: 'take an exam', uk: 'складати іспит', explain: "Actually sit down and DO the exam. Not the studying \u2014 the real thing. Sweaty palms not included by default.", accent: 'mustard' },
              // Results
              { emoji: '🌟', en: 'get a good mark / get a bad mark', uk: 'отримати хорошу / погану оцінку', explain: "The score you receive on a test or homework. 12 = celebration, 6 = it\u2019s fine, everyone\u2019s been there.", accent: 'plum' },
              { emoji: '✅', en: 'pass an exam', uk: 'скласти іспит (успішно)', explain: "Get a high enough mark to succeed. \u201cI passed my English exam!\u201d = official happy face.", accent: 'sage' },
              { emoji: '❌', en: 'fail an exam', uk: 'провалити іспит', explain: "Not reach the passing score. Painful, but NOT the end of the world. Everyone fails something. You retake and grow.", accent: 'terracotta' },
              { emoji: '💯', en: 'do well / do badly', uk: 'здати добре / погано', explain: "Perform strongly or weakly. \u201cShe did well in maths\u201d = good result. \u201cI did badly in history\u201d = brutal honesty.", accent: 'sky' },
              // The tricky one
              { emoji: '👀', en: "copy someone\u2019s work", uk: 'списувати чужу роботу', explain: "Take someone else\u2019s work and pretend it\u2019s yours. Also called \u201ccheating\u201d. Short-term win, long-term problem \u2014 you learn nothing.", accent: 'terracotta' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right school phrase',
                instruction: 'Read each mini-story. Which phrase best fits?',
                questions: [
                  { q: 'Sofia spent the whole weekend re-reading her notes and testing herself. She was ___ for Monday\u2019s test.', options: ['taking notes', 'revising', 'copying'], correct: 1 },
                  { q: 'Nick\u2019s history teacher gave him 11 out of 12 on his essay. He ___ .', options: ['failed the exam', 'got a good mark', 'copied someone'], correct: 1 },
                  { q: 'Anya sat down and finally ___ her English exam yesterday morning. Two hours of pure focus.', options: ['took', 'passed', 'revised'], correct: 0 },
                  { q: 'Maya wrote fast during the lecture \u2014 she\u2019s brilliant at ___ .', options: ['handing in homework', 'taking notes', 'failing exams'], correct: 1 },
                  { q: 'Tom scored 3 out of 12 on his maths test. He ___ the exam.', options: ['passed', 'failed', 'took'], correct: 1 },
                  { q: 'Every Sunday evening, Sofia ___ all her homework in a big folder for Monday.', options: ['fails', 'hands in', 'copies'], correct: 1 },
                  { q: 'Anya usually ___ in creative subjects like art and drama, but she struggles a bit in maths.', options: ['does well', 'copies work', 'takes notes'], correct: 0 },
                  { q: 'Nick spent 10 minutes looking at Sofia\u2019s exam paper. The teacher caught him ___ .', options: ['taking notes', "copying someone\u2019s work", 'passing an exam'], correct: 1 },
                  { q: 'Maya was so nervous \u2014 she really thought she was going to ___ her chemistry exam. Then she got 10/12!', options: ['pass', 'fail', 'revise'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Anya\u2019s exam-week diary',
                instruction: "It\u2019s Anya\u2019s toughest school week: 3 tests, 2 homework deadlines, and one small crisis. Fill in the missing phrases.",
                bank: ['revise', 'take notes', 'hand in', 'take', 'pass', 'fail', 'do well', 'get a good mark', "copy someone\u2019s work"],
                questions: [
                  { before: 'Monday. Maths test at 9 AM. I spent all Sunday trying to', after: '\u2014 5 pages of formulas!', answer: 'revise' },
                  { before: 'I sat down to', after: 'the test and my hands were shaking. I finished in 40 minutes.', answer: 'take' },
                  { before: 'Result: I\u2019m PRAYING I', after: 'this one. Fingers crossed.', answer: 'pass' },
                  { before: 'Tuesday. English essay deadline. I need to', after: 'my paper before lunch.', answer: 'hand in' },
                  { before: 'Wednesday. Chemistry class. Miss Iryna talks FAST. I really have to', after: 'if I want to survive Friday\u2019s quiz.', answer: 'take notes' },
                  { before: 'Thursday. Nick asked to', after: '. I said no. Not helping = actually helping.', answer: "copy someone\u2019s work" },
                  { before: 'Friday. Chemistry quiz. Nightmare. If I', after: 'this one, I will DIE of embarrassment.', answer: 'fail' },
                  { before: 'Saturday. Results are in! I actually got 10/12 in maths! I finally', after: 'in a subject I feared.', answer: 'get a good mark' },
                  { before: 'Sunday. Deep breath. This week I learned: preparation matters. If I', after: 'next month, I want it to be because I studied, not because I got lucky.', answer: 'do well' }
                ]
              },
              {
                type: 'match',
                title: 'Match the situation with the phrase',
                instruction: 'Every mini-scene (left) matches ONE phrase (right).',
                pairs: [
                  { left: 'You give your finished essay to the teacher', right: 'hand in your homework' },
                  { left: 'You read your notes again the night before', right: 'revise for a test' },
                  { left: 'You write during the teacher\u2019s explanation', right: 'take notes' },
                  { left: 'You get 3/12 on your test', right: 'fail an exam' },
                  { left: 'You get 11/12 on your test', right: 'get a good mark' },
                  { left: 'You look at your friend\u2019s answers secretly', right: "copy someone\u2019s work" },
                  { left: 'You finish an exam and get a passing score', right: 'pass an exam' },
                  { left: 'You do surprisingly well in a difficult subject', right: 'do well' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read these sentences about Sofia\u2019s abilities \u2014 past, present and future. Three little verbs help her talk about what she CAN do: CAN, COULD, and BE ABLE TO. They\u2019re a team, but they play different positions. Can you spot when each one shows up?",
            taskUk: 'Прочитай речення про здібності Софії — минулі, теперішні й майбутні. Три маленькі дієслова допомагають їй говорити про те, що вона МОЖЕ: CAN, COULD і BE ABLE TO. Вони — команда, але грають на різних позиціях. Чи можеш ти вловити, коли зʼявляється кожне?',
            sentences: [
              { id: 1, html: '💬 <em>\u201cI <span class="marker">can</span> read a whole book in Ukrainian in one day \u2014 and I\u2019m only 11!\u201d</em>' },
              { id: 2, html: '💬 <em>\u201cWhen I was 5, I <span class="marker">could</span> already ride a bike without training wheels.\u201d</em>' },
              { id: 3, html: '💬 <em>\u201cAfter three months of training, I finally <span class="marker">was able to</span> swim across the whole pool!\u201d</em>' },
              { id: 4, html: '💬 <em>\u201cIf I keep studying, I <span class="marker">will be able to</span> pass the exam next year.\u201d</em>' }
            ],
            questions: [
              "In sentence 1, Sofia talks about a skill she has NOW. Which verb does she use? Which tense?",
              "In sentence 2, she talks about something she was good at as a kid \u2014 general ability in the PAST. Which verb?",
              "In sentence 3, she talks about ONE specific past success (\u201cfinally swam across the pool\u201d). She didn\u2019t use \u201ccould\u201d! She used a longer phrase. Why? What\u2019s different?",
              "In sentence 4, she\u2019s talking about the FUTURE. \u201cCan\u201d doesn\u2019t have a future form \u2014 so what did she use instead?",
              "In one line each: CAN is for ___ ability. COULD is for ___ ability (general). BE ABLE TO fills the gaps \u2014 ___ and ___ tenses, or ONE specific past success."
            ]
          },

          grammar: {
            title: 'Expressing Ability: CAN, COULD, BE ABLE TO', titleUk: 'Здатність: CAN, COULD, BE ABLE TO',
            intro: "Three ways to say \u201cI\u2019m able to do this.\u201d They\u2019re a team \u2014 but each one has its own job. <strong>CAN</strong> is your everyday hero for the PRESENT. <strong>COULD</strong> covers GENERAL past ability. <strong>BE ABLE TO</strong> is the shapeshifter \u2014 works in ALL tenses (past, present, future, perfect, infinitive). It also has one special job that CAN and COULD can\u2019t do. Let\u2019s see them all in action.",
            introUk: 'Три способи сказати «я вмію це робити». Це команда, і кожне має свою роль. <em>CAN</em> — твій щоденний герой для ТЕПЕРІШНЬОГО. <em>COULD</em> покриває ЗАГАЛЬНУ здатність у минулому. <em>BE ABLE TO</em> — універсальний зброєносець: працює у ВСІХ часах (минулий, теперішній, майбутній, перфект, інфінітив). Він також має одне унікальне завдання, з яким CAN і COULD не справляться. Дивимося на всіх трьох у дії.',
            blocks: [
              {
                title: 'CAN \u2014 present ability', letter: 'A',
                when: 'saying what you ARE ABLE to do NOW', whenUk: 'сказати, що ти ВМІЄШ ЗАРАЗ',
                explain: "Use <strong>CAN</strong> for a skill or ability you have RIGHT NOW. Structure: <em>subject + can + V1</em> (no \u201cto\u201d!). No \u201cs\u201d for he/she \u2014 same form for everyone: <em>I can, she can, they can</em>. Negative: <em>can\u2019t</em> (or <em>cannot</em>, one word, formal). Question: <em>Can you swim?</em> \u2192 Yes, I can. / No, I can\u2019t. Simple, clean, everywhere.",
                explainUk: "Вживай <em>CAN</em> для вміння чи здатності, яку ти маєш ЗАРАЗ. Структура: <strong>subject + can + V1</strong> (без «to»!). Немає «s» для he/she — форма одна для всіх: <em>I can, she can, they can</em>. Заперечення: <em>can\u2019t</em> (або <em>cannot</em>, одним словом, формально). Питання: <em>Can you swim?</em> \u2192 Yes, I can. / No, I can\u2019t. Просто, чисто, всюди.",
                formula: '(+) <em>subject</em> + <strong>can</strong> + V1 &nbsp;·&nbsp; (\u2013) <em>subject</em> + <strong>can\u2019t</strong> + V1 &nbsp;·&nbsp; (?) <strong>Can</strong> + <em>subject</em> + V1?',
                examples: [
                  { en: "I can read a whole book in one day \u2014 when I really love it!", uk: 'Я можу прочитати цілу книгу за один день — коли вона мені дуже подобається!' },
                  { en: "Sofia can speak three languages: Ukrainian, English, and a bit of French.", uk: 'Софія вміє розмовляти трьома мовами: українською, англійською і трохи французькою.' },
                  { en: "I can\u2019t remember any of these chemistry formulas. HELP.", uk: 'Я НЕ можу згадати жодну з цих хімічних формул. РЯТУЙТЕ.' },
                  { en: "Can you take notes faster than the teacher speaks? Teach me your ways!", uk: 'Ти вмієш конспектувати швидше, ніж говорить вчитель? Навчи мене!' }
                ]
              },
              {
                title: 'COULD \u2014 general past ability', letter: 'B',
                when: 'what you WERE ABLE to do generally in the past', whenUk: 'що ти ЗАГАЛЬНО ВМІВ у минулому',
                explain: "Use <strong>COULD</strong> to talk about a GENERAL ability you had in the past \u2014 something you could do \u201cin general\u201d, not on one specific occasion. \u201cWhen I was 5, I could already read.\u201d \u2192 general skill. Same form for everyone: I could, she could, they could. Negative: <em>couldn\u2019t</em>. Important: for ONE specific successful action in the past, we usually use <em>was/were able to</em>, NOT <em>could</em>. (More on that in block C!)",
                explainUk: "Вживай <em>COULD</em>, щоб говорити про ЗАГАЛЬНУ здатність, яку ти мав(-ла) у минулому — щось, що ти вмів «взагалі», а не в одному конкретному випадку. «Коли мені було 5, я вже вмів читати» \u2192 загальний навик. Форма для всіх одна: <em>I could, she could, they could</em>. Заперечення: <em>couldn\u2019t</em>. Важливо: для ОДНІЄЇ конкретної успішної дії в минулому зазвичай використовується <em>was/were able to</em>, а НЕ <em>could</em>. (Про це — у блоці C!)",
                formula: '(+) <em>subject</em> + <strong>could</strong> + V1 &nbsp;·&nbsp; (\u2013) <em>subject</em> + <strong>couldn\u2019t</strong> + V1',
                examples: [
                  { en: "When I was 8, I could swim like a fish.", uk: 'Коли мені було 8, я плавав(-ла) як риба.' },
                  { en: "My grandma could speak five languages when she was young.", uk: 'Моя бабуся вміла говорити пʼятьма мовами, коли була молодою.' },
                  { en: "In primary school, I couldn\u2019t sit still for more than 5 minutes.", uk: 'У початковій школі я не міг(-ла) всидіти більше 5 хвилин.' },
                  { en: "Anya could already play the guitar at 7 \u2014 tiny hands, big talent.", uk: 'Аня вже вміла грати на гітарі у 7 років — маленькі руки, великий талант.' }
                ]
              },
              {
                title: 'BE ABLE TO \u2014 the shapeshifter', letter: 'C',
                when: 'the flexible one \u2014 works in ALL tenses', whenUk: 'універсальне — працює в УСІХ часах',
                explain: "This is the MVP of the ability team. <strong>BE ABLE TO</strong> works in every tense: <em>am/is/are able to</em> (present), <em>was/were able to</em> (past), <em>will be able to</em> (future), <em>have been able to</em> (perfect). Special job: for ONE specific successful past moment, use <em>was/were able to</em>, NOT <em>could</em>. Compare: \u201cI could swim as a child\u201d (general) vs \u201cAfter 3 months of practice, I was able to swim across the pool\u201d (one specific success). Also: after modals like WILL and MUST, we NEED be able to \u2014 you can\u2019t say \u201cwill can\u201d.",
                explainUk: "Це MVP команди здатності. <em>BE ABLE TO</em> працює у ВСІХ часах: <em>am/is/are able to</em> (теперішній), <em>was/were able to</em> (минулий), <em>will be able to</em> (майбутній), <em>have been able to</em> (перфект). Особлива місія: для ОДНІЄЇ конкретної успішної дії в минулому — <em>was/were able to</em>, а НЕ <em>could</em>. Порівняй: «I could swim as a child» (загалом) vs «After 3 months of practice, I was able to swim across the pool» (конкретний успіх). Також: після модальних WILL і MUST треба BE ABLE TO — не можна сказати «will can».",
                formula: 'am/is/are able to &nbsp;·&nbsp; was/were able to (one past success!) &nbsp;·&nbsp; will be able to &nbsp;·&nbsp; have been able to',
                examples: [
                  { en: "After weeks of revision, I was able to pass my maths exam.", uk: 'Після тижнів повторення я змогла скласти іспит з математики.' },
                  { en: "If you revise properly, you will be able to do well in every subject.", uk: 'Якщо ти нормально повторюєш, ти зможеш добре здавати кожен предмет.' },
                  { en: "I love that I\u2019m finally able to understand English movies without subtitles!", uk: 'Обожнюю, що я нарешті можу розуміти англійські фільми без субтитрів!' },
                  { en: "Nick wasn\u2019t able to hand in his homework because his printer broke.", uk: 'Нік не зміг здати домашку, бо в нього зламався принтер.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Can, could, or be able to?',
                instruction: 'Choose the form that best fits each sentence.',
                questions: [
                  { q: 'Anya ___ read English books without a dictionary. She started this year.', options: ['can', 'could', 'was able to'], correct: 0 },
                  { q: 'When I was 7, I ___ ride a bike, but I ___ swim.', options: ['can / can\u2019t', 'could / couldn\u2019t', 'was able to / wasn\u2019t able to'], correct: 1 },
                  { q: "After three months of revising every day, Nick finally ___ pass his chemistry exam.", options: ['could', 'was able to', 'can'], correct: 1 },
                  { q: 'If you take good notes, you ___ revise faster before the test next week.', options: ['can', 'could', 'will be able to'], correct: 2 },
                  { q: '\u201c___ you speak French?\u201d \u2014 \u201cJust a few words!\u201d', options: ['Can', 'Could', 'Are able to'], correct: 0 },
                  { q: 'Sofia\u2019s grandma ___ speak five languages when she was young.', options: ['can', 'could', 'is able to'], correct: 1 },
                  { q: 'Maya ___ hand in her homework yesterday \u2014 the Wi-Fi was down. (specific past failure)', options: ["couldn\u2019t", "isn\u2019t able to", "won\u2019t be able to"], correct: 0 },
                  { q: 'I really love that I ___ finally understand chemistry after all those extra lessons.', options: ['could', 'am able to', 'was able to'], correct: 1 },
                  { q: '\u201cWill you ___ come to the party?\u201d \u2014 \u201cI hope so!\u201d', options: ['can', 'could', 'be able to'], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Fill in with the right form',
                instruction: 'Read each situation carefully. Present ability? General past ability? One specific past success? Or future?',
                questions: [
                  { before: 'I', after: 'read Ukrainian books for hours, but only when I really love the story.', answer: 'can', hint: 'present ability' },
                  { before: 'When I was little, I', after: 'already speak English pretty well because Mum taught me.', answer: 'could', hint: 'general past ability' },
                  { before: 'After weeks of practice, Sofia finally', after: 'run 5 km without stopping!', answer: 'was able to', hint: 'one specific past success' },
                  { before: 'If Nick revises properly this weekend, he', after: 'do well on Monday\u2019s test.', answer: 'will be able to', hint: 'future ability' },
                  { before: 'Maya', after: 'take notes and listen at the same time \u2014 amazing skill!', answer: 'can', hint: 'present ability' },
                  { before: 'Anya', after: 'hand in her homework yesterday \u2014 her tablet died. (one specific past failure)', answer: "wasn\u2019t able to / couldn\u2019t", hint: 'either works for negative one-time' },
                  { before: 'I love that I finally', after: 'watch English movies without subtitles.', answer: 'am able to', hint: 'present, formal-ish' },
                  { before: 'When Grandma was young, she', after: 'bake bread from just flour, salt and water. Real magic.', answer: 'could', hint: 'general past ability' },
                  { before: '\u201cIf we all revise together, we', after: 'help each other pass every exam.\u201d', answer: 'will be able to', hint: 'future ability' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural, correct one.',
                questions: [
                  { q: 'Present ability:', options: ['I can to speak three languages.', 'I can speak three languages.'], correct: 1 },
                  { q: 'General past ability:', options: ['My grandpa could ride a horse when he was 6.', 'My grandpa was able to ride a horse when he was 6.'], correct: 0 },
                  { q: 'One specific past success:', options: ['After hours of studying, I could pass the exam.', 'After hours of studying, I was able to pass the exam.'], correct: 1 },
                  { q: 'Future ability with WILL:', options: ['You will can travel the world one day.', 'You will be able to travel the world one day.'], correct: 1 },
                  { q: 'Present negative:', options: ["I don't can remember the answer.", "I can't remember the answer."], correct: 1 },
                  { q: '3rd person (present):', options: ['She cans read music.', 'She can read music.'], correct: 1 },
                  { q: 'Perfect tense:', options: ['I have could speak English for 3 years.', 'I have been able to speak English for 3 years.'], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '📚',
            textTitle: 'Sofia\u2019s brutal, honest, semi-successful exam week',
            text: [
              "Monday morning, 7:45 AM.",
              "I was staring at my chemistry textbook, wondering if it was possible to absorb information through my fingertips. Answer: no.",
              "Chemistry test at 9. I had four days to revise for this. I revised for... let\u2019s say \u201cparts of two evenings.\u201d The rest was TikTok. I\u2019m not proud.",
              "In the exam, I stared at question 1 for a long time. My brain said: \u201cSofia, we\u2019ve never seen this equation in our life.\u201d That was a lie \u2014 we HAD seen it, I just didn\u2019t revise properly. When I was 8, I could learn a whole poem in one afternoon. Now, at 11, I can\u2019t remember what H\u2082O stands for under pressure. What happened to me?",
              "Nick was next to me. I could see his paper. For one dark moment, I thought about it. Copying someone\u2019s work is easy \u2014 you\u2019re allowed exactly zero seconds to feel proud of yourself afterwards.",
              "I didn\u2019t copy. I sat there. I did my best on questions 2, 3, and 4. I skipped question 1. I handed in the paper and walked out.",
              "Result: 7 out of 12. Not a good mark, but not a fail. I passed. Barely.",
              "Tuesday afternoon.",
              "I decided something. If I revise properly this weekend, I will be able to do MUCH better in Friday\u2019s English exam. And I revised. Not for 45 minutes. For 5 solid hours across Wednesday and Thursday. Notes, flashcards, mind maps. Grandma made me tea. Dad quizzed me. Mum stayed out of my way \u2014 the best gift.",
              "Friday morning. English exam.",
              "I sat down calmly. My hands didn\u2019t shake. When I opened the paper, I recognised almost every question. This is what \u201cprepared\u201d feels like. I had forgotten.",
              "I was able to answer every essay question. I was able to write faster than I ever had. When I finished, I actually had 15 minutes left to check my work. FIFTEEN minutes!",
              "Result: 11 out of 12. My highest mark of the year.",
              "Sunday evening. Reflection.",
              "Two exams. Two different Sofias. Same brain. What was the difference? Just how much I revised. I can be lazy. I can also work hard. I couldn\u2019t always do this \u2014 last year I would\u2019ve just given up after chemistry. This year I chose differently.",
              "You know what my new rule is? I don\u2019t need to be perfect. I don\u2019t need to be a genius. I just need to do THIS week better than LAST week. That\u2019s it. That\u2019s the whole strategy.",
              "Next week, chemistry retest. I\u2019m ready this time. I can feel it."
            ],
            questions: [
              { q: 'How much did Sofia actually revise for the chemistry test?', options: ['She revised for 4 solid days', 'Just parts of two evenings, mostly scrolled TikTok', 'She didn\u2019t revise at all'], correct: 1 },
              { q: 'What tempting thing did she think about doing during the exam?', options: ['Leaving the room', 'Copying Nick\u2019s work', 'Cheating with her phone'], correct: 1 },
              { q: 'What was her final chemistry mark?', options: ['7 out of 12 \u2014 passed barely', '3 out of 12 \u2014 failed', '11 out of 12 \u2014 excellent'], correct: 0 },
              { q: 'How did Sofia revise for the English exam?', options: ['She didn\u2019t bother', '5 solid hours across two days, with notes, flashcards, mind maps', 'She copied notes from a friend'], correct: 1 },
              { q: 'What did Sofia feel when she opened the English exam paper?', options: ['Panic', 'She recognised almost every question \u2014 she felt prepared', 'Total confusion'], correct: 1 },
              { q: 'What was her English exam result?', options: ['7 out of 12', '9 out of 12', '11 out of 12 \u2014 highest of the year'], correct: 2 },
              { q: 'What is Sofia\u2019s new rule for herself?', options: ['To be perfect and get 12/12 always', 'Just do this week better than last week', 'Never take a test again'], correct: 1 },
              { q: 'How does Sofia feel about her upcoming chemistry retest?', options: ['Terrified', 'Ready \u2014 she can feel it', 'Doesn\u2019t care anymore'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Name ONE thing you can do RIGHT NOW that you couldn\u2019t do a year ago. What changed?",
              "Complete: \u201cWhen I was 6, I could ___, but I couldn\u2019t ___.\u201d Two REAL memories!",
              "Describe your LAST big exam. Did you revise enough? Did you do well or badly? Be honest.",
              "Have you ever seen someone copy someone else\u2019s work? What did YOU do? Would you do the same today?",
              "Complete: \u201cIn the next 3 years, I will be able to ___.\u201d What\u2019s ONE big skill you\u2019re working toward?",
              "Which is MOST important for doing well in school: taking good notes, revising properly, or being calm during the exam? Rank them!",
              "Tell a mini-story: \u201cAfter a lot of practice, I was finally able to ___ .\u201d A real personal moment when you achieved something hard."
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "10 essential school phrases: take notes, hand in your homework, revise for a test, take an exam, get a good/bad mark, pass an exam, fail an exam, do well/badly, copy someone\u2019s work.",
              "Three ways to talk about ability \u2014 they\u2019re a team!",
              "CAN \u2192 present ability. Same form for everyone. \u201cI can speak three languages.\u201d",
              "COULD \u2192 GENERAL past ability. \u201cWhen I was 5, I could already read.\u201d",
              "WAS / WERE ABLE TO \u2192 ONE SPECIFIC past success. \u201cAfter weeks of practice, I was able to swim 500 metres.\u201d (NOT could!)",
              "WILL BE ABLE TO \u2192 future ability. \u201cIf you revise, you will be able to pass.\u201d (You can\u2019t say \u201cwill can\u201d!)",
              "AM / IS / ARE ABLE TO \u2192 works like can, slightly more formal. Also fills gaps in tenses where CAN doesn\u2019t exist."
            ],
            finalQuiz: {
              title: 'Quick check \u2014 3 questions',
              questions: [
                { q: '\u201cAfter three months of training, Sofia ___ swim across the whole pool.\u201d Which fits?', options: ['could', 'was able to', 'can'], correct: 1 },
                { q: '\u201cWhen I was little, I ___ read music.\u201d (general past skill)', options: ['can', 'could', 'am able to'], correct: 1 },
                { q: '\u201cIf you keep studying, you ___ pass the exam next year.\u201d', options: ['can', 'could', 'will be able to'], correct: 2 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My learning story',
              task: "Write <strong>7\u20138 sentences</strong> about your OWN learning journey \u2014 real or invented. You MUST include: <strong>at least 4 school phrases</strong> from the lesson (take notes, hand in, revise, take an exam, pass, fail, get a mark, do well, do badly, copy), <strong>at least 1 sentence with CAN</strong>, <strong>at least 1 with COULD</strong> (past general ability), and <strong>at least 1 with BE ABLE TO</strong> (any tense). Bonus: try to include a moment when you failed at first, then succeeded.",
              taskUk: 'Напиши 7–8 речень про свою навчальну історію — реальну або вигадану. Обовʼязково включи: щонайменше 4 шкільні фрази з уроку (take notes, hand in, revise, take an exam, pass, fail, get a mark, do well, do badly, copy), щонайменше 1 речення з CAN, щонайменше 1 з COULD (загальна минула здатність) і щонайменше 1 з BE ABLE TO (у будь-якому часі). Бонус: додай момент, коли ти спочатку не впорався(-лась), а потім усе вдалося.',
              tip: 'Recipe: 1 sentence \u2014 what you\u2019re currently good at (CAN) → 1\u20132 sentences \u2014 what you were like as a younger kid (COULD) → 1 sentence about an exam or homework moment → 1 sentence \u2014 one thing you finally succeeded at (WAS ABLE TO) → 1 sentence \u2014 what you\u2019ll be able to do in the future.'
            },
            speaking: {
              title: '90-second reflection: my school year',
              task: "Record a <strong>90-second reflection</strong> answering: What has been the BIGGEST learning success of your school year? What has been the toughest moment? Include: <strong>at least 3 school phrases</strong> from the lesson AND <strong>at least 2 different modals of ability</strong> (CAN, COULD, WAS/WERE ABLE TO, or WILL BE ABLE TO).",
              taskUk: 'Запиши 90-секундну рефлексію на тему: Який був НАЙБІЛЬШИЙ навчальний успіх твого шкільного року? А який був найважчий момент? Включи: щонайменше 3 шкільні фрази з уроку І щонайменше 2 різні модальні дієслова здатності (CAN, COULD, WAS/WERE ABLE TO, або WILL BE ABLE TO).',
              tip: 'Speak like you\u2019re telling your grandma over tea \u2014 not writing an essay. Small honest moments are always more interesting than \u201cperfect\u201d ones.'
            }
          }
        }

      ]
    },

    /* ═══════════════════════════════════════════════════════════
     * UNIT 7 · Holidays and Festivals
     * ═══════════════════════════════════════════════════════════ */
    {
      id: 'unit-7',
      number: 7,
      title: 'Holidays and Festivals',
      subtitle: 'Свята та фестивалі',
      lessons: [

        /* ═══════════════════════════════════════════════════════
         * LESSON 33 · Staycation (Відпочинок вдома)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u7-l33', number: 33,
          title: 'Staycation', titleUk: 'Відпочинок вдома',
          type: 'Vocabulary', tags: ['holidays', 'feelings', 'ed-ing-adjectives'],
          updated: 'today', accent: 'plum', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🏠', en: "Imagine you have a whole week off school but you have to stay at home. What's the FIRST thing you'd plan to make it feel like a real holiday?", uk: 'Уяви, що в тебе цілий тиждень без школи, але ти маєш залишитися вдома. Що б ти спланував(-ла) ПЕРШИМ, щоб це справді відчувалося як справжнє свято?' },
              { emoji: '😴', en: "What's the difference between a holiday that feels relaxing and one that feels boring? Can the same activity be both?", uk: 'Яка різниця між відпусткою, яка відчувається розслаблюючою, і тою, яка відчувається нудною? Чи може одне й те саме заняття бути і тим, і тим?' },
              { emoji: '🤗', en: "When you're feeling really down, who in your life always knows what to say? What do they usually do that helps?", uk: 'Коли тобі дуже погано, хто з твого оточення завжди знає, що сказати? Що вони зазвичай роблять, що тобі допомагає?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Today's words come in two groups. First, nine phrases about <strong>supporting your friends and family</strong> — being there for someone when they need you. Then eight pairs of <strong>tricky adjectives</strong> ending in -ed or -ing that describe feelings and things.",
            introUk: 'Сьогоднішні слова поділені на дві групи. По-перше, дев\u2019ять фраз про <em>підтримку друзів і родини</em> — як бути поруч, коли хтось потребує тебе. Потім вісім пар <em>підступних прикметників</em> із закінченнями -ed або -ing, які описують почуття і предмети.',
            items: [
              { emoji: '🛡️', en: 'stand by someone through thick and thin', uk: 'бути поруч і в радості, і в горі', explain: "When a person stays with you and supports you no matter what happens — when life is great AND when it gets really hard.", accent: 'plum' },
              { emoji: '🤝', en: 'count on someone', uk: 'покладатися на когось', explain: "When you're 100% sure that a person will help you or do what they promised — they won't let you down.", accent: 'sage' },
              { emoji: '💬', en: 'chime in', uk: 'додати свою думку до розмови', explain: "When you join a conversation that's already happening by adding your opinion or comment — usually a quick, helpful one.", accent: 'mustard' },
              { emoji: '😔', en: 'feel down', uk: 'почуватися пригніченим', explain: "When you feel sad, low, or unhappy — not seriously depressed, but definitely not in a good mood.", accent: 'sky' },
              { emoji: '💗', en: 'open up (to someone)', uk: 'відкритися комусь', explain: "When you finally start talking about your real feelings, worries, or secrets to a person you trust.", accent: 'terracotta' },
              { emoji: '🚀', en: 'boost (someone\u2019s mood)', uk: 'підняти комусь настрій', explain: "When you do something that makes a person feel better, more confident, or happier than before.", accent: 'mustard' },
              { emoji: '🪜', en: 'lean on someone', uk: 'спертися на когось (у складний момент)', explain: "When you ask for emotional support from someone — relying on them when things are hard, like leaning on a strong friend.", accent: 'sage' },
              { emoji: '📣', en: 'cheer (someone) on', uk: 'підбадьорювати, вболівати за когось', explain: "When you loudly support someone — at a match, a competition, or just in life — shouting \"You can do it!\" and clapping.", accent: 'plum' },
              { emoji: '✨', en: 'make a difference', uk: 'мати значення, змінювати ситуацію', explain: "When your actions actually change something for the better — small or big — in someone's life or in the world.", accent: 'terracotta' },

              // Adjectives -ed / -ing (показані як одна логічна група, з обома формами разом)
              { emoji: '🎢', en: 'exciting / excited', uk: 'захопливий / схвильований (від захвату)', explain: "A film, a trip, or a moment can be EXCITING (it gives you energy). YOU feel EXCITED (you have lots of energy because of it).", accent: 'terracotta' },
              { emoji: '🧘', en: 'relaxing / relaxed', uk: 'розслаблюючий / розслаблений', explain: "A bath, music, or a yoga session is RELAXING. After it, YOU feel RELAXED.", accent: 'sage' },
              { emoji: '💧', en: 'refreshing / refreshed', uk: 'освіжаючий / освіжений', explain: "A cold drink or a shower is REFRESHING. After drinking it, YOU feel REFRESHED — full of new energy.", accent: 'sky' },
              { emoji: '😋', en: 'satisfying / satisfied', uk: 'задовільний / задоволений', explain: "Finishing a tough puzzle is SATISFYING. After finishing, YOU feel SATISFIED with the result.", accent: 'mustard' },
              { emoji: '😲', en: 'surprising / surprised', uk: 'дивовижний / здивований', explain: "Plot twists are SURPRISING. When you see them, YOU feel SURPRISED.", accent: 'plum' },
              { emoji: '😞', en: 'disappointing / disappointed', uk: 'розчаровуючий / розчарований', explain: "A bad movie is DISAPPOINTING. After watching it, YOU feel DISAPPOINTED.", accent: 'terracotta' },
              { emoji: '😤', en: 'annoying / annoyed', uk: 'дратівний / роздратований', explain: "A loud neighbour is ANNOYING. Listening to them, YOU feel ANNOYED.", accent: 'mustard' },
              { emoji: '😟', en: 'worrying / worried', uk: 'тривожний / стурбований', explain: "Bad news on TV is WORRYING. After hearing it, YOU feel WORRIED.", accent: 'sky' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right phrase',
                instruction: 'Read each mini-scene and choose the phrase that fits best.',
                questions: [
                  { q: 'When my parents got divorced, my best friend stayed with me every single day. She really ___.', options: ['chimed in', 'stood by me through thick and thin', 'felt down'], correct: 1 },
                  { q: '"Don\u2019t worry about the homework — you can ___ me. I\u2019ll send you my notes after school."', options: ['count on', 'chime in', 'make a difference'], correct: 0 },
                  { q: 'My grandma was talking about her childhood, and I ___ to say my school is much easier than hers was.', options: ['chimed in', 'leaned on', 'cheered on'], correct: 0 },
                  { q: 'I\u2019ve been ___ all week. The weather is grey and my favourite show ended.', options: ['feeling down', 'opening up', 'making a difference'], correct: 0 },
                  { q: 'It took Sofia three months to ___ to me about her panic attacks. Now we talk about everything.', options: ['boost', 'open up', 'cheer on'], correct: 1 },
                  { q: 'A surprise message from your favourite teacher can really ___ your mood on a bad day.', options: ['boost', 'lean on', 'chime in'], correct: 0 },
                  { q: 'When I broke my leg, I had to ___ my brother for almost everything — even tying my shoes.', options: ['cheer on', 'lean on', 'chime in'], correct: 1 },
                  { q: 'The whole class came to ___ Max at the chess final — even though no one understood the game.', options: ['cheer on', 'open up', 'count on'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Pick -ed or -ing',
                instruction: 'Fill in the right form (-ed for the person\u2019s feeling, -ing for the thing that causes the feeling). Use the words in brackets.',
                questions: [
                  { before: 'The plot twist in the last episode was so', after: 'I screamed out loud. (surprise)', answer: 'surprising', hint: 'describes the thing' },
                  { before: 'I was really', after: 'when I found out the concert was cancelled. (disappoint)', answer: 'disappointed', hint: 'how you feel' },
                  { before: 'A long bath with music is the most', after: 'thing after a school week. (relax)', answer: 'relaxing', hint: 'describes the bath' },
                  { before: 'After three hours of homework, I felt completely', after: '. A walk in the cold air made me', answer: 'refreshed', hint: 'how you feel' },
                  { before: 'My little sister keeps singing the same song for an hour — it\u2019s so', after: '!', answer: 'annoying', hint: 'describes the song' },
                  { before: 'The end of that movie was actually quite', after: 'I felt good after watching it. (satisfy)', answer: 'satisfying', hint: 'describes the ending' },
                  { before: 'I\u2019m a bit', after: 'about my exam tomorrow — I didn\u2019t study enough. (worry)', answer: 'worried', hint: 'how you feel' },
                  { before: 'The trailer was so', after: 'I bought tickets two weeks early! (excite)', answer: 'exciting', hint: 'describes the trailer' },
                  { before: 'I was', after: 'when I heard about the earthquake in the news. (worry)', answer: 'worried', hint: 'how you feel' }
                ]
              },
              {
                type: 'match',
                title: 'Match the situation with the right phrase',
                instruction: 'Click one tile on each side to pair each situation with the phrase a real teenager would use.',
                pairs: [
                  { left: 'Your friend stays up late on a call when you\u2019re crying about a bad day', right: 'lean on someone' },
                  { left: 'You finally tell your mum why you\u2019ve been so quiet for a month', right: 'open up to someone' },
                  { left: 'Your sister sees your sad face and orders your favourite pizza without asking', right: 'boost someone\u2019s mood' },
                  { left: 'Your two friends keep arguing — you join in with a calm comment', right: 'chime in' },
                  { left: 'You promise your little brother you\u2019ll come to his football match — and you do', right: 'be someone he can count on' },
                  { left: 'You shout and clap for your classmate at the science fair', right: 'cheer someone on' },
                  { left: 'You volunteer every Saturday and slowly notice the shelter is cleaner because of you', right: 'make a difference' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Look at these three pairs of sentences. In each pair, the SAME word appears — but with a different ending: -ed in one sentence and -ing in the other. Read carefully and try to spot the pattern.",
            taskUk: 'Подивися на ці три пари речень. У кожній парі повторюється ОДНЕ І ТЕ САМЕ слово — але з різним закінченням: -ed в одному реченні і -ing в іншому. Уважно прочитай і спробуй знайти закономірність.',
            sentences: [
              { id: 1, html: '🎢 <em>The roller coaster was <span class="marker">exciting</span>.</em> &nbsp;|&nbsp; <em>I was <span class="marker">excited</span> after the ride.</em>' },
              { id: 2, html: '🧘 <em>This yoga playlist is so <span class="marker">relaxing</span>.</em> &nbsp;|&nbsp; <em>I felt <span class="marker">relaxed</span> after twenty minutes.</em>' },
              { id: 3, html: '😞 <em>The ending of the film was <span class="marker">disappointing</span>.</em> &nbsp;|&nbsp; <em>We were all <span class="marker">disappointed</span>.</em>' }
            ],
            questions: [
              "Which form (-ed or -ing) describes the THING that causes the feeling — the roller coaster, the playlist, the film?",
              "Which form (-ed or -ing) describes the PERSON who feels it — \"I\", \"we\"?",
              "Can you complete this rule? People feel ___ ; things and situations are ___ .",
              "Tricky one: \"The movie was really boring\" vs \"I was really boring\" — which one is a normal sentence, and which one accidentally says something rude about yourself?"
            ]
          },

          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'Many adjectives in English come in pairs that end in <strong>-ed</strong> or <strong>-ing</strong>. They come from the same verb and have similar meanings, but they\u2019re used in very different ways. Get this wrong, and you might accidentally call yourself <em>boring</em> when you really mean <em>bored</em>!',
            introUk: 'Багато прикметників в англійській мові утворюють пари із закінченнями <em>-ed</em> або <em>-ing</em>. Вони походять від одного дієслова і мають схоже значення, але використовуються зовсім по-різному. Помилитися тут — і ти можеш випадково назвати себе <em>нудним</em>, коли насправді хотів(-ла) сказати, що тобі <em>нудно</em>!',
            blocks: [
              {
                title: '-ing adjectives', letter: 'A',
                when: 'describe the THING that causes the feeling', whenUk: 'описують ПРЕДМЕТ, який викликає почуття',
                explain: "Use the <strong>-ing</strong> form to describe what someone or something IS like — the cause of the feeling. The film, the trip, the lesson, the person — they are the source. They <em>make us feel</em> something.",
                explainUk: "Використовуй форму <em>-ing</em>, щоб описати, ЯКИЙ хтось або щось є — джерело почуття. Фільм, поїздка, урок, людина — вони є причиною. Вони <em>викликають у нас</em> якесь почуття.",
                formula: '<em>This thing / person</em> is <em>boring / exciting / surprising</em>...',
                examples: [
                  { en: "The new Spider-Man trailer is so exciting!", uk: 'Новий трейлер Людини-Павука такий захопливий!' },
                  { en: "Maths homework is boring, but the teacher is really interesting.", uk: 'Домашка з математики нудна, але вчителька дуже цікава.' },
                  { en: "That horror movie was honestly more annoying than scary.", uk: 'Той фільм жахів був, чесно кажучи, скоріше дратівним, ніж страшним.' }
                ]
              },
              {
                title: '-ed adjectives', letter: 'B',
                when: 'describe the PERSON who feels it', whenUk: 'описують ЛЮДИНУ, яка це відчуває',
                explain: "Use the <strong>-ed</strong> form to describe how a person FEELS — the result of the cause. People (and sometimes animals) feel <em>excited, bored, surprised</em>. Things never feel anything — only people do.",
                explainUk: "Використовуй форму <em>-ed</em>, щоб описати, ЯК людина почувається — результат причини. Люди (і іноді тварини) <em>почуваються</em> схвильованими, знудженими, здивованими. Речі ніколи не відчувають — тільки люди.",
                formula: '<em>I / She / We</em> am/is/are/feel <em>bored / excited / surprised</em>...',
                examples: [
                  { en: "I'm so excited about my birthday party tomorrow!", uk: 'Я така схвильована через свою вечірку на день народження завтра!' },
                  { en: "After three hours of cleaning, Mum was completely exhausted.", uk: 'Після трьох годин прибирання мама була повністю виснажена.' },
                  { en: "We were all really disappointed when the concert got cancelled.", uk: 'Ми всі були дуже розчаровані, коли концерт відмінили.' }
                ]
              },
              {
                title: 'Watch out!', letter: 'C',
                when: 'classic mistakes', whenUk: 'класичні помилки',
                explain: "Saying <em>\"I am boring\"</em> means \"I am a boring person\" (people fall asleep when they talk to me 😬). To say you\u2019re feeling bored, use <em>\"I am bored\"</em>. Same trap with <em>tiring / tired</em>, <em>confusing / confused</em>, and many others.",
                explainUk: "Сказати <em>\"I am boring\"</em> означає \"Я нудна людина\" (від мене всі засинають 😬). Щоб сказати, що тобі нудно, кажи <em>\"I am bored\"</em>. Така сама пастка зі словами <em>tiring / tired</em>, <em>confusing / confused</em> та багатьма іншими.",
                formula: '❌ I am boring &nbsp; → &nbsp; ✅ I am bored',
                examples: [
                  { en: "The grammar lesson was confusing, and I was confused for an hour.", uk: 'Урок граматики був заплутаний, і я була збентежена цілу годину.' },
                  { en: "Climbing the mountain was tiring — by the top, we were all tired.", uk: 'Підйом на гору був виснажливим — на вершині ми всі були виснажені.' },
                  { en: "Don\u2019t say \"I\u2019m boring\" unless you really want to call yourself boring!", uk: 'Не кажи \"I\u2019m boring\", якщо ти справді не хочеш назвати себе нудним!' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right ending',
                instruction: 'Pick the -ed or -ing form depending on whether it describes the THING or the PERSON.',
                questions: [
                  { q: '"The match was really ___ — I couldn\u2019t look away for a second."', options: ['excited', 'exciting'], correct: 1 },
                  { q: '"I\u2019m so ___ about our trip to Lviv this weekend!"', options: ['excited', 'exciting'], correct: 0 },
                  { q: '"My grandma\u2019s borshch is the most ___ thing after a cold walk."', options: ['satisfied', 'satisfying'], correct: 1 },
                  { q: '"After finishing all my homework, I felt really ___ ."', options: ['satisfied', 'satisfying'], correct: 0 },
                  { q: '"The end of the season finale was so ___ — I had so many questions!"', options: ['disappointed', 'disappointing'], correct: 1 },
                  { q: '"My little brother won\u2019t stop tapping his pen. It\u2019s so ___ !"', options: ['annoyed', 'annoying'], correct: 1 },
                  { q: '"Mum was ___ when she saw the giant cake I made for her birthday."', options: ['surprised', 'surprising'], correct: 0 },
                  { q: '"I\u2019m a bit ___ about the test — I didn\u2019t finish studying chapter 3."', options: ['worried', 'worrying'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the post',
                instruction: 'Type the correct form of the adjective in brackets (-ed or -ing).',
                questions: [
                  { before: 'OMG, today was so', after: '(exhaust). I just want to sleep for 12 hours.', answer: 'exhausting', hint: 'describes the day' },
                  { before: 'After yoga class, I felt completely', after: '(relax) — like a different person.', answer: 'relaxed', hint: 'how you feel' },
                  { before: 'I just watched the new Marvel trailer and I\u2019m SO', after: '(excite)!!', answer: 'excited', hint: 'how you feel' },
                  { before: 'The plot of that book was actually really', after: '(surprise) — I didn\u2019t expect that ending.', answer: 'surprising', hint: 'describes the plot' },
                  { before: 'I was', after: '(disappoint) when my favourite YouTuber stopped posting.', answer: 'disappointed', hint: 'how you feel' },
                  { before: 'Studying for two exams in one weekend is so', after: '(tire).', answer: 'tiring', hint: 'describes studying' },
                  { before: 'My new puppy is the most', after: '(amaze) thing ever 🐶', answer: 'amazing', hint: 'describes the puppy' },
                  { before: 'I\u2019m honestly really', after: '(worry) about my grandma — she\u2019s been quiet all week.', answer: 'worried', hint: 'how you feel' }
                ]
              },
              {
                type: 'mcq',
                title: 'Which one sounds right?',
                instruction: 'A real teenager wouldn\u2019t mix these up — pick the one that doesn\u2019t accidentally say something weird.',
                questions: [
                  { q: 'You just got back from a 4-hour hike:', options: ["I\u2019m so tiring.", "I\u2019m so tired."], correct: 1 },
                  { q: 'Telling your friend about a maths lesson you didn\u2019t understand:', options: ["The lesson was so confused.", "The lesson was so confusing."], correct: 1 },
                  { q: 'Your friend\u2019s little brother keeps following you around:', options: ["He\u2019s so annoying!", "He\u2019s so annoyed!"], correct: 0 },
                  { q: 'You FINALLY finished a hard puzzle:', options: ["I feel so satisfying.", "I feel so satisfied."], correct: 1 },
                  { q: 'Your favourite show just had a wild season finale:', options: ["The finale was so surprised!", "The finale was so surprising!"], correct: 1 },
                  { q: 'You\u2019re reviewing for an exam tomorrow:', options: ["I\u2019m really worrying about it.", "I\u2019m really worried about it."], correct: 1 },
                  { q: 'After a hot summer day, you take a cold shower:', options: ["The shower was so refreshed.", "The shower was so refreshing."], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🏖️',
            textTitle: "Maya\u2019s perfect staycation",
            text: [
              "Last week, Maya finally had a school holiday. But her family couldn\u2019t afford a trip this year, so she stayed at home. At first, she was really disappointed.",
              "On day one, Maya was just feeling down. \"Everyone is posting beach photos and I\u2019m here,\" she texted her best friend Sofia.",
              "Sofia chimed in right away with an idea: \"Let\u2019s plan a staycation! Like a real holiday, but at home. Day-by-day plans, themed dinners, the whole thing.\"",
              "Maya wasn\u2019t convinced, but she leaned on Sofia and trusted her plan. Day two became \"Japan day\" — they cooked sushi rolls and watched anime. It was surprisingly satisfying.",
              "Day three was \"spa day\" — face masks, music, and a long bath. Maya felt completely relaxed for the first time in months. Day four was \"adventure day\" — a long bike ride to a park she\u2019d never visited.",
              "By day five, Maya was actually excited every morning. Her parents joined in for \"movie marathon night\" — three films in a row, popcorn included. It was honestly refreshing to just be at home, together.",
              "On the last day, Maya posted a photo from her balcony with the caption: \"Best staycation ever. Sometimes the most exciting holiday is the one you didn\u2019t plan to take. Thanks Sofia for standing by me when I felt down — you really made a difference 💗\".",
              "Sofia replied in three seconds: \"You can always count on me, queen.\""
            ],
            questions: [
              { q: 'Why did Maya stay at home for the holidays?', options: ["She didn\u2019t want to travel", "Her family couldn\u2019t afford a trip", "She had to study"], correct: 1 },
              { q: 'How did Maya feel at the very start of the week?', options: ['Excited and happy', 'Disappointed and down', 'Annoyed with her parents'], correct: 1 },
              { q: 'Whose idea was the \"staycation\" with themed days?', options: ['Maya\u2019s', 'Sofia\u2019s', 'Maya\u2019s mum\u2019s'], correct: 1 },
              { q: 'What happened on \"Japan day\"?', options: ['They went to a Japanese restaurant', 'They made sushi rolls and watched anime', 'They learned Japanese phrases'], correct: 1 },
              { q: 'How did Maya feel after the spa day?', options: ['Bored', 'Relaxed', 'Tired'], correct: 1 },
              { q: 'In Maya\u2019s final post, the holiday was \"the most ___ holiday\":', options: ['relaxing', 'exciting', 'tiring'], correct: 1 },
              { q: 'What did Sofia do that \"made a difference\" for Maya?', options: ['She paid for a trip', 'She stood by her when Maya felt down', 'She did Maya\u2019s homework'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "If you had to plan a 5-day staycation right now, what would each day be themed around? Pick at least three days.",
              "Who in your life can you 100% count on? What\u2019s the smallest thing they do that means a lot to you?",
              "Think of the most EXCITING thing that happened to you this month. Now describe how you FELT during it (use both -ing and -ed).",
              "What\u2019s the most ANNOYING sound in the world for you? Why? And does it annoy everyone, or just you?",
              "Tell us about a time you felt really DOWN. What helped — or who helped? (Skip it if it\u2019s too personal.)",
              "Holiday vs staycation — which would you honestly choose if both cost the same? Defend your answer.",
              "Finish this sentence: \"The most SURPRISING thing about my best friend is...\""
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 phrases about supporting people — from \"stand by through thick and thin\" to \"make a difference\".",
              "We met 8 pairs of -ed / -ing adjectives that describe feelings (exciting/excited, relaxing/relaxed, etc.).",
              "The big rule for -ed vs -ing:",
              "-ing → describes the THING that causes the feeling (The film is boring. The trip was exciting.)",
              "-ed → describes the PERSON who feels it (I am bored. We were excited.)",
              "Watch out: \"I am boring\" means YOU are a boring person — not that you feel bored!"
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: 'Your friend listens to you cry on the phone for an hour. You\u2019d say: "I can really ___ you."', options: ['cheer on', 'count on', 'chime in'], correct: 1 },
                { q: '"The new game is so ___ — I played for 4 hours straight!" Which form?', options: ['excited', 'exciting'], correct: 1 },
                { q: '"After my exam, I was completely ___ and just slept all afternoon." Which form?', options: ['exhausting', 'exhausted'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'Plan a 3-day staycation',
              task: "Design your own <strong>3-day staycation</strong> (like Maya's!). Give each day a theme and write <strong>one sentence per day</strong> describing the plan and how it would make you feel. Use at least <strong>3 -ed/-ing adjectives</strong>. Example: <em>\"Day 1 is Movie Day — watching three films sounds so relaxing and I'll feel relaxed afterwards.\"</em>",
              taskUk: 'Сплануй власний 3-денний staycation (як у Майї!). Дай кожному дню тему і напиши по одному реченню, описуючи план і як він змусить тебе почуватися. Використай щонайменше 3 прикметники на -ed/-ing.',
              tip: 'Don\u2019t mix them up: the activity is relaxing, YOU feel relaxed!'
            },
            speaking: {
              title: 'A thank-you voice message',
              task: "Record a short <strong>30–45 second voice message</strong> thanking someone who once stood by you or boosted your mood. Use at least <strong>2 phrases</strong> from the lesson (count on, lean on, make a difference, cheer on...). It can be real or imaginary — a friend, a sibling, even your dog!",
              taskUk: 'Запиши коротке голосове на 30–45 секунд, дякуючи комусь, хто колись був поруч або підняв тобі настрій. Використай щонайменше 2 фрази з уроку. Може бути реальним або вигаданим!',
              tip: 'Speak from the heart — this one is actually nice to send for real.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 34 · Festivals and events (Фестивалі та події)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u7-l34', number: 34,
          title: 'Festivals and events', titleUk: 'Фестивалі та події',
          type: 'Vocabulary', tags: ['festivals', 'events', 'adverbs-vs-adjectives'],
          updated: 'today', accent: 'terracotta', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🎪', en: "What's the best festival, fair, or local event you've ever been to? What made it special — the food, the music, the people, the vibe?", uk: 'Який найкращий фестиваль, ярмарок чи місцева подія, на якій ти був(-ла)? Що зробило її особливою — їжа, музика, люди, атмосфера?' },
              { emoji: '🌃', en: "Imagine you're a tourist visiting YOUR city for one day. Which event or place would you really want to see? Why?", uk: 'Уяви, що ти турист, який приїхав до ТВОГО міста на один день. Яку подію або місце ти б дуже хотів(-ла) побачити? Чому?' },
              { emoji: '🎶', en: "Some people love huge crowded festivals, others prefer small quiet ones. Which one are YOU? Be honest!", uk: 'Хтось обожнює великі людні фестивалі, а хтось — маленькі тихі. Який ТИ? Чесно!' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Festivals are everywhere — in your city, in tiny villages, all around the world. To talk about them, we need two groups of words. First, <strong>9 nouns and noun phrases</strong> about events themselves. Then <strong>6 -ly adverbs</strong> that describe HOW people experience them.",
            introUk: 'Фестивалі є всюди — у твоєму місті, у маленьких селах, по всьому світу. Щоб говорити про них, нам потрібні дві групи слів. По-перше, <em>9 іменників і фраз</em> про самі події. Потім <em>6 прислівників на -ly</em>, які описують ЯК люди їх переживають.',
            items: [
              { emoji: '🎭', en: 'cultural event', uk: 'культурна подія', explain: "An organised gathering — a concert, exhibition, dance show — that celebrates the music, art, food, or traditions of a place or community.", accent: 'plum' },
              { emoji: '💎', en: 'local gem', uk: 'місцева перлина', explain: "A wonderful but not-so-famous place or event — only people who live there usually know about it. Tourists who find it feel like they've discovered a treasure.", accent: 'mustard' },
              { emoji: '🎉', en: 'lively atmosphere', uk: 'жвава, енергійна атмосфера', explain: "When a place feels full of energy — people are laughing, music is playing, kids are running around. The opposite of quiet and empty.", accent: 'terracotta' },
              { emoji: '🏞️', en: 'scenic', uk: 'мальовничий, з гарним краєвидом', explain: "Used to describe a place that looks beautiful — mountains, sunsets, an old town square, a river at golden hour. Worth taking a photo of.", accent: 'sage' },
              { emoji: '🧶', en: 'crafts', uk: 'ремесла, рукоділля', explain: "Things people make with their hands — pottery, embroidery, hand-painted jewellery, wooden toys. Often sold at festivals and markets.", accent: 'mustard' },
              { emoji: '🎤', en: 'entertainment', uk: 'розваги', explain: "All the fun activities that keep people happy at an event — music, magicians, clowns, games, anything that entertains the crowd.", accent: 'plum' },
              { emoji: '🩰', en: 'performances', uk: 'виступи', explain: "Shows where people act, sing, dance, or play music in front of an audience. A festival might have ten performances on different stages.", accent: 'terracotta' },
              { emoji: '🌮', en: 'food stalls', uk: 'продуктові ятки, лотки', explain: "Small open stands where vendors sell street food at a market or festival — tacos, churros, varenyky, kebabs, anything!", accent: 'mustard' },
              { emoji: '🎺', en: 'parade', uk: 'парад', explain: "A long line of people, musicians, dancers, or decorated cars moving down a street — usually celebrating a holiday or special day.", accent: 'sky' },

              // Adverbs of manner
              { emoji: '🥳', en: 'joyfully', uk: 'радісно, з радістю', explain: "Doing something with lots of happiness — laughing, smiling, full of positive energy. \"She danced joyfully.\"", accent: 'mustard' },
              { emoji: '🎢', en: 'excitingly', uk: 'захопливо', explain: "In a way that creates excitement or thrill. \"The band performed excitingly, jumping around the stage.\"", accent: 'terracotta' },
              { emoji: '🌈', en: 'vibrantly', uk: 'яскраво, насичено, жваво', explain: "In a colourful, full-of-life way. \"The streets were vibrantly decorated for the festival.\"", accent: 'plum' },
              { emoji: '🙌', en: 'enthusiastically', uk: 'із захопленням, із запалом', explain: "With lots of energy and clear excitement. \"The kids cheered enthusiastically when the parade started.\"", accent: 'sage' },
              { emoji: '🏃', en: 'actively', uk: 'активно', explain: "Doing something with energy, not just sitting and watching. \"He actively joined every workshop at the festival.\"", accent: 'sky' },
              { emoji: '👥', en: 'socially', uk: 'у соціальному плані, з людьми', explain: "In a way that involves talking and being with other people. \"She socially connected with everyone at the food stalls.\"", accent: 'terracotta' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right word',
                instruction: 'Read each scene and choose the word that fits best.',
                questions: [
                  { q: 'Tiny streets, hand-painted shops, no tourists, just locals laughing — Sofia called this little café "a real ___ ".', options: ['parade', 'local gem', 'food stall'], correct: 1 },
                  { q: 'The Lviv Coffee Festival had jazz, art exhibitions, and traditional dance — a perfect ___ for the whole city.', options: ['food stall', 'cultural event', 'craft'], correct: 1 },
                  { q: 'We watched dancers in colourful costumes march down Khreshchatyk on Independence Day — what a beautiful ___ !', options: ['parade', 'performance', 'food stall'], correct: 0 },
                  { q: 'The Carpathian village is famous for its ___ views — mountains everywhere, with a small wooden church on the hill.', options: ['scenic', 'lively', 'social'], correct: 0 },
                  { q: 'At the Christmas market, every ___ smelled of mulled wine, roasted nuts, and fresh bread.', options: ['parade', 'food stall', 'craft'], correct: 1 },
                  { q: 'My grandma still makes embroidered shirts by hand — traditional Ukrainian ___ that take weeks to finish.', options: ['parades', 'crafts', 'performances'], correct: 1 },
                  { q: 'The square was buzzing with music, laughter and kids running everywhere — such a ___ !', options: ['scenic view', 'lively atmosphere', 'local gem'], correct: 1 },
                  { q: 'The festival had three stages with different ___ — rock bands at one, opera at another, breakdancing at the third.', options: ['food stalls', 'crafts', 'performances'], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the festival review',
                instruction: 'Fill in the missing words. Use the word bank below — every chip is used exactly once.',
                bank: ['cultural event', 'local gem', 'lively atmosphere', 'scenic', 'crafts', 'entertainment', 'performances', 'food stalls', 'parade'],
                questions: [
                  { before: 'Last weekend we visited a small village in the Carpathians — a true', after: 'that tourists usually miss.', answer: 'local gem' },
                  { before: 'The festival started with a colourful', after: 'down the main street, with horses, musicians and dancers.', answer: 'parade' },
                  { before: 'The whole square had such a', after: '— music everywhere, people dancing, kids laughing.', answer: 'lively atmosphere' },
                  { before: 'We tried varenyky, kvas and homemade honey at the', after: 'all along the riverbank.', answer: 'food stalls' },
                  { before: 'In the afternoon there were live music', after: 'on three different stages.', answer: 'performances' },
                  { before: 'The view from the hill above the village was incredibly', after: '— green fields, blue sky, a tiny church.', answer: 'scenic' },
                  { before: 'There was also a market with traditional Ukrainian', after: ' — embroidered shirts, painted pysanky, wooden toys.', answer: 'crafts' },
                  { before: 'For the kids there was special', after: ': face painting, magic shows, and a small circus.', answer: 'entertainment' },
                  { before: 'Overall, it was the best', after: 'I\u2019ve been to all year. Already planning next summer\u2019s visit!', answer: 'cultural event' }
                ]
              },
              {
                type: 'match',
                title: 'Match the adverb with the situation',
                instruction: 'Each adverb describes HOW someone does something. Match it with the situation where you\u2019d hear it.',
                pairs: [
                  { left: 'joyfully', right: 'kids running around with sparklers, laughing the whole time' },
                  { left: 'enthusiastically', right: 'fans jumping and screaming for their favourite band' },
                  { left: 'vibrantly', right: 'flags, lanterns and ribbons everywhere — the whole street looks alive' },
                  { left: 'actively', right: 'instead of just watching, he joined every workshop and dance class' },
                  { left: 'socially', right: 'she made friends with everyone at the food stalls in one hour' },
                  { left: 'excitingly', right: 'the host announced the next act and made the audience scream' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Look at these three pairs of sentences from a festival blog. Each pair uses a similar word — but with a tiny difference. Read carefully and try to figure out the rule.",
            taskUk: 'Подивися на ці три пари речень із блогу про фестиваль. Кожна пара використовує схоже слово — але з маленькою відмінністю. Уважно прочитай і спробуй знайти правило.',
            sentences: [
              { id: 1, html: '🎶 <em>The band was <span class="marker">enthusiastic</span> on stage.</em> &nbsp;|&nbsp; <em>The band performed <span class="marker">enthusiastically</span> on stage.</em>' },
              { id: 2, html: '🎉 <em>The atmosphere was <span class="marker">lively</span>.</em> &nbsp;|&nbsp; <em>The kids ran around <span class="marker">joyfully</span>.</em>' },
              { id: 3, html: '🏞️ <em>The view is <span class="marker">scenic</span>.</em> &nbsp;|&nbsp; <em>The river flows <span class="marker">vibrantly</span> through the village.</em>' }
            ],
            questions: [
              "In each pair, one form describes a NOUN (band, atmosphere, view) and the other form describes a VERB (performed, ran, flows). Which form ends in -ly?",
              "What kind of word describes a noun (a thing or person)? And what kind describes a verb (an action)?",
              "Most adverbs are made by adding -ly to an adjective. Can you spot which words in the lesson follow that pattern?",
              "Tricky: \"lively\" ends in -ly but it\u2019s actually an ADJECTIVE, not an adverb. How can you tell the difference? (Hint: look at what it describes.)"
            ]
          },

          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'In English, <strong>adjectives</strong> and <strong>adverbs</strong> are two different jobs. An adjective describes a <em>noun</em> (a thing, a person, a place). An adverb describes a <em>verb</em> (an action) — how someone does it. Most adverbs are made by adding <strong>-ly</strong> to an adjective. Easy, right? Almost — there are a few tricky cases to watch out for.',
            introUk: 'В англійській мові <em>прикметники</em> і <em>прислівники</em> виконують різні роботи. Прикметник описує <em>іменник</em> (предмет, людину, місце). Прислівник описує <em>дієслово</em> (дію) — як хтось щось робить. Більшість прислівників утворюються додаванням <em>-ly</em> до прикметника. Просто, правда? Майже — є кілька підступних випадків, на які варто звернути увагу.',
            blocks: [
              {
                title: 'Adjectives', letter: 'A',
                when: 'describe a noun (thing, person, place)', whenUk: 'описують іменник (предмет, людину, місце)',
                explain: "<strong>Adjectives</strong> describe what someone or something is LIKE. They answer the question <em>\"What kind of ___?\"</em> Usually they sit right before a noun, or after the verb <em>be</em>.",
                explainUk: "<em>Прикметники</em> описують, ЯКИЙ хтось або щось є. Вони відповідають на питання <em>\"Який?\"</em>. Зазвичай стоять прямо перед іменником або після дієслова <em>be</em>.",
                formula: '<em>adjective + noun</em> &nbsp; or &nbsp; <em>noun + be + adjective</em>',
                examples: [
                  { en: "The festival has a lively atmosphere.", uk: 'У фестивалю жвава атмосфера.' },
                  { en: "Those crafts are really beautiful.", uk: 'Ці ремесла справді гарні.' },
                  { en: "Lviv is a scenic city, especially in autumn.", uk: 'Львів — мальовниче місто, особливо восени.' }
                ]
              },
              {
                title: 'Adverbs', letter: 'B',
                when: 'describe a verb (action — HOW someone does something)', whenUk: 'описують дієслово (дію — ЯК хтось щось робить)',
                explain: "<strong>Adverbs of manner</strong> describe HOW someone does an action. They answer the question <em>\"How?\"</em>. Usually they go after the verb, or after the object of the verb. Most of them are made by adding <strong>-ly</strong> to an adjective: joyful → joyfully, enthusiastic → enthusiastically.",
                explainUk: "<em>Прислівники способу дії</em> описують, ЯК хтось виконує дію. Вони відповідають на питання <em>\"Як?\"</em>. Зазвичай стоять після дієслова або після додатка. Більшість утворюються додаванням <em>-ly</em> до прикметника: joyful → joyfully, enthusiastic → enthusiastically.",
                formula: '<em>subject + verb + adverb</em> &nbsp; (e.g., She danced <em>joyfully</em>.)',
                examples: [
                  { en: "The crowd cheered enthusiastically when the band came on stage.", uk: 'Натовп захоплено вигукував, коли гурт вийшов на сцену.' },
                  { en: "The streets were vibrantly decorated for the parade.", uk: 'Вулиці були яскраво прикрашені до параду.' },
                  { en: "She actively joined every workshop at the festival.", uk: 'Вона активно брала участь у кожному майстер-класі на фестивалі.' }
                ]
              },
              {
                title: 'Watch out!', letter: 'C',
                when: 'tricky cases', whenUk: 'підступні випадки',
                explain: "Some words look like adverbs but they\u2019re actually adjectives: <em>lively, friendly, lonely, lovely</em> — they end in -ly but describe NOUNS, not actions. Also: <em>good</em> is the adjective, but <em>well</em> is the adverb. Don\u2019t say \"She sings good\" — say \"She sings <em>well</em>\".",
                explainUk: "Деякі слова виглядають як прислівники, але насправді є прикметниками: <em>lively, friendly, lonely, lovely</em> — закінчуються на -ly, але описують ІМЕННИКИ, а не дії. Також: <em>good</em> — прикметник, а <em>well</em> — прислівник. Не кажи \"She sings good\" — кажи \"She sings <em>well</em>\".",
                formula: '❌ She sings good. &nbsp; → &nbsp; ✅ She sings <em>well</em>.',
                examples: [
                  { en: "That\u2019s a lovely song. (lovely = adjective, describes \"song\")", uk: 'Це чудова пісня. (lovely = прикметник, описує \"пісню\")' },
                  { en: "She sang the song beautifully. (beautifully = adverb, describes \"sang\")", uk: 'Вона прекрасно заспівала пісню. (beautifully = прислівник, описує \"заспівала\")' },
                  { en: "He\u2019s a good dancer. He dances really well.", uk: 'Він гарний танцюрист. Він справді добре танцює.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Adjective or adverb?',
                instruction: 'Pick the form that fits — adjective describes a NOUN, adverb describes a VERB.',
                questions: [
                  { q: '"The dancers moved ___ across the stage." (Choose the form that describes HOW they moved.)', options: ['joyful', 'joyfully'], correct: 1 },
                  { q: '"The parade was ___ — flags and colours everywhere." (Choose the form that describes the parade.)', options: ['vibrant', 'vibrantly'], correct: 0 },
                  { q: '"The kids cheered ___ when the magician arrived."', options: ['enthusiastic', 'enthusiastically'], correct: 1 },
                  { q: '"Lviv\u2019s old town is so ___ in the evening."', options: ['scenic', 'scenically'], correct: 0 },
                  { q: '"She made friends ___ at every food stall."', options: ['social', 'socially'], correct: 1 },
                  { q: '"The little café we found was a real ___ gem."', options: ['local', 'locally'], correct: 0 },
                  { q: '"He ___ joined every workshop he could find."', options: ['active', 'actively'], correct: 1 },
                  { q: '"What a ___ atmosphere — I never wanted to leave!"', options: ['lively', 'livelily'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Build the adverb',
                instruction: 'Type the adverb form of the adjective in brackets. Most of them just need -ly, but watch out for the tricky ones!',
                questions: [
                  { before: 'The street performer juggled', after: ', surprising everyone in the crowd. (excite → excitingly)', answer: 'excitingly', hint: 'excite + ingly' },
                  { before: 'The children laughed', after: 'as they ran toward the magician. (joyful)', answer: 'joyfully', hint: 'add -ly' },
                  { before: 'The whole square was decorated', after: 'in red, gold and green. (vibrant)', answer: 'vibrantly', hint: 'add -ly' },
                  { before: 'My grandma sings', after: '— she could have been on stage! (good)', answer: 'well', hint: 'irregular' },
                  { before: 'The audience clapped', after: 'after every performance. (enthusiastic)', answer: 'enthusiastically', hint: 'add -ally' },
                  { before: 'Mia talked', after: 'with everyone at the festival — she made five new friends! (social)', answer: 'socially', hint: 'add -ly' },
                  { before: 'The actors performed the play', after: '— I cried at the ending. (beautiful)', answer: 'beautifully', hint: 'add -ly' },
                  { before: 'He', after: 'helped clean up the square after the parade ended. (active)', answer: 'actively', hint: 'add -ly' }
                ]
              },
              {
                type: 'mcq',
                title: 'Which sounds natural?',
                instruction: 'A real English speaker wouldn\u2019t mix these up — pick the one that sounds right.',
                questions: [
                  { q: 'Telling a friend about a great singer:', options: ["She sings really good.", "She sings really well."], correct: 1 },
                  { q: 'Describing a beautiful view:', options: ["The mountains look scenic.", "The mountains look scenically."], correct: 0 },
                  { q: 'Describing how kids ran around:', options: ["They ran joyful.", "They ran joyfully."], correct: 1 },
                  { q: 'Talking about a colourful market:', options: ["The market was vibrant.", "The market was vibrantly."], correct: 0 },
                  { q: 'How fans reacted to the band:', options: ["They cheered enthusiastic.", "They cheered enthusiastically."], correct: 1 },
                  { q: 'About a friendly little café:', options: ["What a lovely place!", "What a lovelily place!"], correct: 0 },
                  { q: 'How someone joined the activities:', options: ["She joined active.", "She joined actively."], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🎪',
            textTitle: "A weekend at Lviv Coffee Festival",
            text: [
              "Last Saturday, my best friend Olya and I went to the Lviv Coffee Festival in Rynok Square. We\u2019d heard about it for years, but this was our first time.",
              "The atmosphere was so lively the moment we arrived. Music was playing on three different stages, and we could smell coffee, chocolate and warm pastries everywhere.",
              "First, we walked through the food stalls. There were stalls selling Vietnamese drip coffee, Italian espresso, even Ukrainian coffee mixed with honey and herbs. Olya tried six different cups in one hour — she was buzzing!",
              "Then we watched some street performances. A jazz band played enthusiastically near the town hall, and a group of dancers moved joyfully through the crowd in colourful costumes.",
              "In the afternoon, there was a parade of baristas. They marched proudly down the cobblestone street, holding silver cups and singing. Honestly, it was the strangest and most beautiful thing I\u2019d ever seen at a festival.",
              "Behind the main square, we found a small market with local crafts — hand-painted mugs, embroidered coffee bags, and tiny wooden spoons. I bought my mum a vibrantly painted cup for her birthday.",
              "The view from the Rynok bell tower was incredibly scenic — red roofs, narrow streets, hundreds of people moving through the square like a colourful river. A real local gem of a city.",
              "We came home tired but happy. Olya already announced she\u2019s going actively volunteering for next year\u2019s festival. \"You can count on me,\" she said. \"And I can count on coffee.\""
            ],
            questions: [
              { q: 'Where did the festival take place?', options: ['Khreshchatyk in Kyiv', 'Rynok Square in Lviv', 'A small village'], correct: 1 },
              { q: 'How does the writer describe the atmosphere when they arrived?', options: ['Quiet and calm', 'Lively and full of music', 'A bit boring'], correct: 1 },
              { q: 'What did Olya try at the food stalls?', options: ['Six different coffees in one hour', 'A traditional Ukrainian dish', 'Nothing — she doesn\u2019t like coffee'], correct: 0 },
              { q: 'How did the jazz band perform?', options: ['Quietly', 'Enthusiastically', 'Sadly'], correct: 1 },
              { q: 'What happened in the afternoon?', options: ['A parade of baristas', 'A cooking competition', 'A magic show'], correct: 0 },
              { q: 'What did the writer buy for their mum?', options: ['An embroidered coffee bag', 'A wooden spoon', 'A vibrantly painted cup'], correct: 2 },
              { q: 'What does Olya plan to do next year?', options: ['Skip the festival', 'Actively volunteer at the festival', 'Open her own coffee stall'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "If you could invent a brand-new festival for your city, what would it celebrate? What 3 things would be there?",
              "Tell us about a local gem in your area — a small place or event that tourists never know about. Why is it special?",
              "Describe HOW your best friend usually does things. Do they speak quickly? Laugh loudly? Walk slowly? Use at least 3 adverbs.",
              "What\u2019s the difference between a lively city and a scenic city? Which one would you rather live in?",
              "Imagine you\u2019re writing a review of your last birthday party. Use these words: lively atmosphere, performances, food stalls, entertainment.",
              "Some people enjoy festivals actively (dancing, joining workshops). Others enjoy them socially (just chatting and people-watching). Which are you? And why?",
              "Finish this sentence: \"The most exciting cultural event I\u2019ve ever been to was...\" — and tell us about it in 30 seconds!"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 nouns and phrases about festivals — from cultural event and local gem to parade and food stalls.",
              "We learned 6 adverbs of manner: joyfully, excitingly, vibrantly, enthusiastically, actively, socially.",
              "The big rule for adjectives vs adverbs:",
              "Adjective → describes a NOUN (thing, person, place): \"a scenic view\", \"a lively atmosphere\".",
              "Adverb → describes a VERB (action — HOW you do it): \"she danced joyfully\", \"they cheered enthusiastically\".",
              "Most adverbs are made by adding -ly to an adjective. But careful: lively, friendly, lovely are ADJECTIVES even though they end in -ly. And remember: good is the adjective, well is the adverb!"
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"The children played ___ in the square." Which form?', options: ['joyful', 'joyfully'], correct: 1 },
                { q: '"It was a ___ atmosphere — music, lights, people everywhere." Which form?', options: ['lively', 'livelily'], correct: 0 },
                { q: '"My cousin dances really ___ — she could be a professional!" Which form?', options: ['good', 'well'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'Invent a festival for your city',
              task: "Invent a brand-new festival for your town and write a short <strong>4–5 sentence announcement</strong> for it. Include: its name, what people can see/do (use words like <em>parade, performances, food stalls, crafts</em>), and describe HOW people will celebrate using at least <strong>2 adverbs</strong> (joyfully, enthusiastically, vibrantly...).",
              taskUk: 'Вигадай новий фестиваль для свого міста і напиши коротке оголошення (4–5 речень). Включи: назву, що люди зможуть побачити/робити, і опиши ЯК люди святкуватимуть, використавши щонайменше 2 прислівники.',
              tip: 'Make it wild! A pizza festival, a cat festival, a meme festival — anything goes.'
            },
            speaking: {
              title: 'Describe a festival photo',
              task: "Find or imagine a <strong>festival photo</strong> (from your gallery, the internet, or your memory) and record a <strong>30–45 second description</strong> of it. Describe what the place looks like (use adjectives: <em>lively, scenic</em>) and what people are doing (use adverbs: <em>joyfully, actively</em>).",
              taskUk: 'Знайди або уяви фото з фестивалю і запиши опис на 30–45 секунд. Опиши, як виглядає місце (прикметники: lively, scenic) і що роблять люди (прислівники: joyfully, actively).',
              tip: 'Remember the rule: adjectives describe the place, adverbs describe what people DO.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 35 · Revision (Повторення)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u7-l35', number: 35,
          title: 'Revision', titleUk: 'Повторення',
          type: 'Revision', tags: ['holidays', 'festivals', 'past-simple'],
          updated: 'today', accent: 'sky', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🧠', en: "Without looking back: how many words from the last two lessons (Staycation + Festivals) can you remember in 30 seconds? Say them out loud!", uk: 'Не підглядаючи: скільки слів з останніх двох уроків (Staycation + Festivals) ти можеш згадати за 30 секунд? Скажи їх уголос!' },
              { emoji: '📅', en: "Think about LAST weekend. What did you do? Did you go anywhere, meet anyone, try anything new?", uk: 'Згадай ОСТАННІ вихідні. Що ти робив(-ла)? Кудись ходив(-ла), з кимось зустрічався(-лася), пробував(-ла) щось нове?' },
              { emoji: '🎉', en: "What's the last festival, party, or event you went to? Tell us ONE thing that happened there.", uk: 'Який останній фестиваль, вечірка чи подія, на якій ти був(-ла)? Розкажи ОДНУ річ, що там сталася.' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Recap', titleUk: 'Повторення словника',
            intro: "This is a revision lesson, so instead of new words, here's a quick recap of everything from Lessons 33 and 34. Read through them, test yourself, and open the spoiler only if you've forgotten one.",
            introUk: 'Це урок-повторення, тож замість нових слів — швидкий огляд усього з уроків 33 і 34. Перечитай їх, перевір себе, і відкривай спойлер тільки якщо щось забув(-ла).',
            items: [
              { emoji: '🛡️', en: 'stand by someone / count on someone', uk: 'бути поруч / покладатися на когось', explain: "Supporting a person no matter what, and being 100% sure they\u2019ll be there for you too.", accent: 'plum' },
              { emoji: '💗', en: 'open up / lean on someone', uk: 'відкритися / спертися на когось', explain: "Sharing your real feelings, and asking someone for emotional support when life is hard.", accent: 'terracotta' },
              { emoji: '🚀', en: 'boost someone\u2019s mood / make a difference', uk: 'підняти настрій / мати значення', explain: "Doing something that makes a person feel better — and that actually changes things for good.", accent: 'mustard' },
              { emoji: '🎢', en: 'exciting / excited, relaxing / relaxed', uk: 'захопливий/схвильований, розслаблюючий/розслаблений', explain: "Remember: -ing for the THING, -ed for the PERSON who feels it.", accent: 'terracotta' },
              { emoji: '😟', en: 'annoying / annoyed, worrying / worried', uk: 'дратівний/роздратований, тривожний/стурбований', explain: "The thing is annoying; YOU feel annoyed. The news is worrying; YOU feel worried.", accent: 'sky' },
              { emoji: '🎭', en: 'cultural event / local gem', uk: 'культурна подія / місцева перлина', explain: "A gathering that celebrates art and traditions; a wonderful place few tourists know about.", accent: 'plum' },
              { emoji: '🎉', en: 'lively atmosphere / scenic', uk: 'жвава атмосфера / мальовничий', explain: "A place full of energy; a place that looks beautiful and is worth a photo.", accent: 'terracotta' },
              { emoji: '🌮', en: 'food stalls / crafts / parade', uk: 'продуктові ятки / ремесла / парад', explain: "Street food stands; handmade things; a line of people marching to celebrate.", accent: 'mustard' },
              { emoji: '🙌', en: 'joyfully / enthusiastically / vibrantly', uk: 'радісно / із запалом / яскраво', explain: "Adverbs describing HOW people celebrate: with joy, with energy, in a colourful way.", accent: 'sage' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Mixed review — choose the word',
                instruction: 'Words from BOTH lessons are mixed here. Read carefully and choose the best one.',
                questions: [
                  { q: 'When Maya felt down, her friend Sofia ___ her through the whole week.', options: ['stood by', 'chimed in', 'cheered on'], correct: 0 },
                  { q: 'The little village café was a real ___ — only locals knew about it.', options: ['parade', 'local gem', 'food stall'], correct: 1 },
                  { q: 'The plot twist was so ___ that I had to pause the show!', options: ['surprised', 'surprising', 'surprise'], correct: 1 },
                  { q: 'The square had such a ___ — music, dancing, and laughter everywhere.', options: ['scenic view', 'lively atmosphere', 'craft'], correct: 1 },
                  { q: 'After a long hike, the cold lemonade was incredibly ___ .', options: ['refreshed', 'refreshing', 'refresh'], correct: 1 },
                  { q: 'The dancers moved ___ down the street during the parade.', options: ['joyful', 'joyfully', 'joy'], correct: 1 },
                  { q: 'You can always ___ me — I\u2019ll never let you down.', options: ['chime in', 'count on', 'feel down'], correct: 1 },
                  { q: 'At the festival there were dozens of ___ selling tacos, varenyky and churros.', options: ['parades', 'food stalls', 'crafts'], correct: 1 },
                  { q: 'I was really ___ when my favourite band cancelled their show.', options: ['disappointing', 'disappointed', 'disappoint'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the festival diary',
                instruction: 'Fill in the missing words. Use the word bank below — every chip is used exactly once.',
                bank: ['parade', 'food stalls', 'lively', 'scenic', 'crafts', 'count on', 'excited', 'enthusiastically', 'local gem'],
                questions: [
                  { before: 'Last Saturday my whole family went to a small festival in a', after: 'village we\u2019d never heard of before.', answer: 'local gem' },
                  { before: 'The day started with a colourful', after: 'marching down the main street.', answer: 'parade' },
                  { before: 'The atmosphere was so', after: '— music, dancing, and people laughing everywhere.', answer: 'lively' },
                  { before: 'We ate amazing street food at the', after: 'along the river.', answer: 'food stalls' },
                  { before: 'My little sister was so', after: 'she couldn\u2019t stop jumping up and down.', answer: 'excited' },
                  { before: 'The crowd cheered', after: 'when the dancers came on stage.', answer: 'enthusiastically' },
                  { before: 'The view from the hill above the village was incredibly', after: '.', answer: 'scenic' },
                  { before: 'I bought some beautiful handmade', after: ' — a painted mug and a wooden toy.', answer: 'crafts' },
                  { before: 'My best friend promised to come too — I knew I could', after: 'her.', answer: 'count on' }
                ]
              },
              {
                type: 'match',
                title: 'Match the two halves',
                instruction: 'Match the start of each sentence with its correct ending.',
                pairs: [
                  { left: 'When I feel down, my best friend always knows how to', right: 'boost my mood' },
                  { left: 'The old town square looked beautiful and', right: 'scenic at sunset' },
                  { left: 'The festival was full of energy — such a', right: 'lively atmosphere' },
                  { left: 'It took me months, but I finally', right: 'opened up to my mum' },
                  { left: 'The dancers performed', right: 'joyfully on the main stage' },
                  { left: 'We discovered a tiny café — a real', right: 'local gem' },
                  { left: 'The kids cheered', right: 'enthusiastically for the magician' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "We're revising the Past Simple today. Look at these three sentences about a festival that already happened. Pay attention to the highlighted verbs — how did they change to show the past?",
            taskUk: 'Сьогодні ми повторюємо Past Simple. Подивися на ці три речення про фестиваль, який уже відбувся. Зверни увагу на виділені дієслова — як вони змінилися, щоб показати минуле?',
            sentences: [
              { id: 1, html: '🎪 <em>Last weekend we <span class="marker">visited</span> a festival and <span class="marker">watched</span> a parade.</em>' },
              { id: 2, html: '🍜 <em>I <span class="marker">ate</span> sushi, <span class="marker">drank</span> bubble tea, and <span class="marker">went</span> to three stages.</em>' },
              { id: 3, html: '❓ <em>We <span class="marker">didn\u2019t go</span> on Sunday. <span class="marker">Did you see</span> the fireworks?</em>' }
            ],
            questions: [
              "In sentence 1, how do \"visit\" and \"watch\" change in the past? What ending do they get?",
              "In sentence 2, \"ate\", \"drank\" and \"went\" don\u2019t follow that pattern. Why? What kind of verbs are these?",
              "In sentence 3, look at \"didn\u2019t go\" and \"Did you see\". After did / didn\u2019t, what form does the main verb take — past or base form?",
              "Can you remember the rule? Regular verbs add ___ . Irregular verbs ___ . And in questions/negatives we use ___ + base verb."
            ]
          },

          grammar: {
            title: 'Grammar Revision: Past Simple', titleUk: 'Повторення: Past Simple',
            intro: 'The <strong>Past Simple</strong> is the tense we use to talk about finished actions in the past — things that already happened and are over. We use it for stories, for what we did yesterday, last weekend, or at the last festival. Let\u2019s revise the three things you need to know: regular verbs, irregular verbs, and questions/negatives.',
            introUk: '<em>Past Simple</em> — це час, який ми використовуємо, щоб говорити про завершені дії в минулому — те, що вже сталося і закінчилося. Ми вживаємо його для розповідей, для того, що робили вчора, минулих вихідних, чи на останньому фестивалі. Повторимо три речі, які треба знати: правильні дієслова, неправильні дієслова, і питання/заперечення.',
            blocks: [
              {
                title: 'Regular verbs', letter: 'A',
                when: 'just add -ed', whenUk: 'просто додай -ed',
                explain: "Most verbs are <strong>regular</strong> — to make the past, just add <em>-ed</em>: walk → walked, visit → visited, dance → danced. If the verb ends in -e, add only -d (dance → danced). If it ends in a consonant + y, change y to i + ed (try → tried).",
                explainUk: "Більшість дієслів <em>правильні</em> — щоб утворити минулий час, просто додай <em>-ed</em>: walk → walked, visit → visited. Якщо дієслово закінчується на -e, додай тільки -d (dance → danced). Якщо на приголосний + y, заміни y на i + ed (try → tried).",
                formula: 'verb + <em>-ed</em> &nbsp; (walk → walk<em>ed</em>)',
                examples: [
                  { en: "We visited a festival last weekend.", uk: 'Ми відвідали фестиваль минулих вихідних.' },
                  { en: "The band played for two hours.", uk: 'Гурт грав дві години.' },
                  { en: "She tried six different coffees.", uk: 'Вона спробувала шість різних кав.' }
                ]
              },
              {
                title: 'Irregular verbs', letter: 'B',
                when: 'you have to learn them', whenUk: 'їх треба просто вивчити',
                explain: "Some common verbs are <strong>irregular</strong> — they don\u2019t follow the -ed rule and you have to memorise them. Common ones: go → went, eat → ate, drink → drank, see → saw, have → had, make → made, buy → bought, take → took.",
                explainUk: "Деякі поширені дієслова <em>неправильні</em> — вони не дотримуються правила -ed, і їх треба запам\u2019ятати. Поширені: go → went, eat → ate, drink → drank, see → saw, have → had, make → made, buy → bought, take → took.",
                formula: 'go → <em>went</em>, eat → <em>ate</em>, see → <em>saw</em>...',
                examples: [
                  { en: "I went to three stages and saw five bands.", uk: 'Я сходив на три сцени і побачив п\u2019ять гуртів.' },
                  { en: "We ate street food and drank fresh juice.", uk: 'Ми їли вуличну їжу і пили свіжий сік.' },
                  { en: "She bought a vibrantly painted cup for her mum.", uk: 'Вона купила яскраво розписану кружку для своєї мами.' }
                ]
              },
              {
                title: 'Questions & negatives', letter: 'C',
                when: 'use did / didn\u2019t + base verb', whenUk: 'використовуй did / didn\u2019t + базова форма',
                explain: "For questions and negatives, we use <em>did</em> (questions) or <em>didn\u2019t</em> (negatives) + the <strong>base form</strong> of the verb (no -ed, no irregular change!). It\u2019s a classic mistake to say \"Did you went?\" — the correct form is \"Did you <em>go</em>?\"",
                explainUk: "Для питань і заперечень ми використовуємо <em>did</em> (питання) або <em>didn\u2019t</em> (заперечення) + <em>базову форму</em> дієслова (без -ed, без неправильної зміни!). Класична помилка — сказати \"Did you went?\" — правильно \"Did you <em>go</em>?\"",
                formula: 'Did + subject + <em>base verb</em>? &nbsp;|&nbsp; didn\u2019t + <em>base verb</em>',
                examples: [
                  { en: "Did you see the parade yesterday?", uk: 'Ти бачив парад учора?' },
                  { en: "We didn\u2019t go to the festival on Sunday.", uk: 'Ми не ходили на фестиваль у неділю.' },
                  { en: "Did she buy anything at the craft market?", uk: 'Вона щось купила на ярмарку ремесел?' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the correct past form',
                instruction: 'Pick the right Past Simple form for each sentence.',
                questions: [
                  { q: 'Last weekend we ___ a small festival in the mountains.', options: ['visited', 'visit', 'visiting'], correct: 0 },
                  { q: 'I ___ sushi for the first time at the food stalls.', options: ['eated', 'ate', 'eat'], correct: 1 },
                  { q: 'The band ___ enthusiastically for two whole hours.', options: ['played', 'play', 'plaied'], correct: 0 },
                  { q: 'She ___ a hand-painted mug for her mum.', options: ['buyed', 'bought', 'buy'], correct: 1 },
                  { q: 'We ___ three different stages on Saturday.', options: ['saw', 'seen', 'seed'], correct: 0 },
                  { q: '___ you ___ the parade yesterday?', options: ['Did / see', 'Did / saw', 'Do / see'], correct: 0 },
                  { q: 'They ___ to the festival on Sunday because of the rain.', options: ["didn't go", "didn't went", "not went"], correct: 0 },
                  { q: 'My sister ___ so excited that she couldn\u2019t sleep that night.', options: ['was', 'were', 'is'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the verb in Past Simple',
                instruction: 'Type the Past Simple form of the verb in brackets. Watch out for irregular verbs!',
                questions: [
                  { before: 'Last summer we', after: '(travel) to Italy and saw the Colosseum.', answer: 'travelled', hint: 'regular (double l in BrE)' },
                  { before: 'At the festival, my friend', after: '(try) six different street foods.', answer: 'tried', hint: 'y → ied' },
                  { before: 'We', after: '(go) to three concerts in one day!', answer: 'went', hint: 'irregular' },
                  { before: 'The dancers', after: '(perform) joyfully on the main stage.', answer: 'performed', hint: 'regular' },
                  { before: 'I', after: '(buy) a vibrantly painted cup at the craft market.', answer: 'bought', hint: 'irregular' },
                  { before: 'We', after: '(eat) varenyky and drank kvas by the river.', answer: 'ate', hint: 'irregular' },
                  { before: 'The whole crowd', after: '(cheer) when the parade started.', answer: 'cheered', hint: 'regular' },
                  { before: 'She', after: '(have) the best staycation of her life last week.', answer: 'had', hint: 'irregular' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair has a Past Simple mistake. Pick the CORRECT one.',
                questions: [
                  { q: 'Asking about yesterday\u2019s event:', options: ['Did you saw the fireworks?', 'Did you see the fireworks?'], correct: 1 },
                  { q: 'Talking about the weekend:', options: ['We didn\u2019t went to the festival.', 'We didn\u2019t go to the festival.'], correct: 1 },
                  { q: 'A finished action with a regular verb:', options: ['The band play for two hours.', 'The band played for two hours.'], correct: 1 },
                  { q: 'A finished action with an irregular verb:', options: ['I eated three slices of pizza.', 'I ate three slices of pizza.'], correct: 1 },
                  { q: 'A question about shopping:', options: ['Did she buy anything?', 'Did she bought anything?'], correct: 0 },
                  { q: 'Describing how you felt:', options: ['I was really excited.', 'I were really excited.'], correct: 0 },
                  { q: 'A negative about last Sunday:', options: ['They didn\u2019t come to the parade.', 'They didn\u2019t came to the parade.'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '📔',
            textTitle: "Our trip to the spring festival",
            text: [
              "Last May, my family and I went to a spring festival in a small town near the Carpathians. It was a real local gem — most tourists never find it.",
              "We arrived early on Saturday morning. The streets were already vibrantly decorated with flowers, ribbons, and colourful flags. The atmosphere was so lively that we forgot how tired we were from the long drive.",
              "First, we watched a parade. Dancers in traditional costumes moved joyfully down the main street, and a brass band played enthusiastically behind them.",
              "Then we walked through the food stalls. I ate three different kinds of varenyky and drank homemade kvas. My little brother tried a giant pretzel and got jam all over his face.",
              "In the afternoon, there were performances on a small wooden stage. We saw folk singers, a puppet show, and even a magician. My sister was so excited that she clapped after every single act.",
              "My mum bought some beautiful crafts at the market — an embroidered tablecloth and two painted mugs. My dad just enjoyed the scenic view from the hill above the town.",
              "We didn\u2019t want to leave, but we had to drive home before dark. On the way back, everyone was tired but happy. \"That was the best festival ever,\" my brother said, half-asleep in the back seat.",
              "I already can\u2019t wait for next spring. I\u2019m definitely going again — and this time, I\u2019ll take even more photos."
            ],
            questions: [
              { q: 'When did the family go to the festival?', options: ['Last May', 'Last December', 'Last weekend'], correct: 0 },
              { q: 'How were the streets decorated?', options: ['Plainly, with no decorations', 'Vibrantly, with flowers and flags', 'Only with lights'], correct: 1 },
              { q: 'What did the writer eat at the food stalls?', options: ['A giant pretzel', 'Three kinds of varenyky', 'Sushi'], correct: 1 },
              { q: 'Why did the little brother get jam on his face?', options: ['He ate a giant pretzel', 'He fell over', 'He was painting'], correct: 0 },
              { q: 'What did Mum buy at the market?', options: ['A cup of coffee', 'Embroidered crafts and painted mugs', 'Nothing'], correct: 1 },
              { q: 'Why did the family leave the festival?', options: ['They were bored', 'They had to drive home before dark', 'It started raining'], correct: 1 },
              { q: 'In the text, "We didn\u2019t want to leave" is an example of:', options: ['a Past Simple negative', 'a Past Simple question', 'a regular -ed verb'], correct: 0 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Tell us about the LAST event or festival you went to. Use Past Simple: Where did you go? What did you do? Who did you go with?",
              "Describe last weekend using at least 5 Past Simple verbs. Try to use both regular and irregular ones!",
              "Pick any 4 words from Lessons 33–34 and tell a short made-up story using all of them.",
              "If you organised a festival in your town last summer, what would you tell people happened there? (Use Past Simple.)",
              "Think of a time a friend really stood by you or boosted your mood. What did they do? How did you feel?",
              "Was the best holiday you ever had relaxing or exciting? Describe it — and use at least two -ed/-ing adjectives.",
              "Quick game: ask your partner three Past Simple questions starting with \"Did you ever...?\" — then answer theirs!"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We revised all the vocabulary from Lessons 33 and 34 — support phrases, -ed/-ing feeling adjectives, festival words, and adverbs of manner.",
              "We revised the Past Simple, the tense for finished past actions:",
              "Regular verbs → add -ed (visit → visited, dance → danced, try → tried).",
              "Irregular verbs → you just learn them (go → went, eat → ate, see → saw, buy → bought).",
              "Questions and negatives → use did / didn\u2019t + the BASE form (Did you go? We didn\u2019t go — never \"Did you went?\").",
              "And remember: the verb \"to be\" has its own past forms — was / were."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"Last weekend we ___ a festival in Lviv." Which form?', options: ['visit', 'visited', 'visiting'], correct: 1 },
                { q: '"___ you ___ the parade yesterday?" Which combo?', options: ['Did / see', 'Did / saw', 'Do / saw'], correct: 0 },
                { q: '"We ___ to the concert because it rained." Which form?', options: ["didn't go", "didn't went", "not went"], correct: 0 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My weekend story',
              task: "Write a short story (<strong>5–7 sentences</strong>) about what you really did <strong>last weekend</strong>. Use the <strong>Past Simple</strong> with at least <strong>3 regular verbs</strong> (-ed) and <strong>3 irregular verbs</strong> (went, ate, saw, had...). Try to include at least one event or festival word if you can!",
              taskUk: 'Напиши коротку розповідь (5–7 речень) про те, що ти насправді робив(-ла) минулих вихідних. Використай Past Simple: щонайменше 3 правильні дієслова (-ed) і 3 неправильні (went, ate, saw, had...).',
              tip: 'If your weekend was boring — invent a cooler one! Just keep all the verbs in the past.'
            },
            speaking: {
              title: 'The "Did you ever?" challenge',
              task: "Record yourself answering these <strong>3 Past Simple questions</strong> (2–3 sentences each): <strong>1)</strong> What was the best event you ever went to? <strong>2)</strong> Did you ever try a food you didn't like? <strong>3)</strong> Who was someone who really stood by you last year?",
              taskUk: 'Запиши свої відповіді на 3 запитання в Past Simple (по 2–3 речення): 1) Яка найкраща подія, на якій ти був(-ла)? 2) Чи пробував(-ла) ти колись їжу, яка не сподобалася? 3) Хто був поруч із тобою минулого року?',
              tip: 'Use full sentences in your answers — "Yes, I did..." or "The best event was..." — to practise the past forms.'
            }
          }
        }

      ]
    },

    /* ═══════════════════════════════════════════════════════════
     * UNIT 8 · Health and Fitness
     * ═══════════════════════════════════════════════════════════ */
    {
      id: 'unit-8',
      number: 8,
      title: 'Health and Fitness',
      subtitle: 'Здоров\u2019я та фітнес',
      lessons: [

        /* ═══════════════════════════════════════════════════════
         * LESSON 36 · Healthy habits (Здорові звички)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u8-l36', number: 36,
          title: 'Healthy habits', titleUk: 'Здорові звички',
          type: 'Vocabulary', tags: ['health', 'fitness', 'comparatives', 'too-enough'],
          updated: 'today', accent: 'sage', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🥗', en: "What's ONE thing you do every day that's actually good for you — and ONE thing you do that's probably not? Be honest!", uk: 'Що ОДНЕ ти робиш кожного дня, що насправді корисне для тебе — і що ОДНЕ, що, мабуть, ні? Будь чесним(-ою)!' },
              { emoji: '💪', en: "If you had to choose: a perfect diet but zero exercise, OR daily sport but eating whatever you want — which would you pick?", uk: 'Якби довелося обирати: ідеальна дієта, але жодного спорту, АБО щоденний спорт, але їсти що завгодно — що б ти вибрав(-ла)?' },
              { emoji: '🧠', en: "What's one thing that puts you in a good mood almost every time? Music? A walk? A specific food? A friend?", uk: 'Що одне майже завжди піднімає тобі настрій? Музика? Прогулянка? Якась їжа? Друг(-иня)?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Today we're talking about health — but not in a boring \"eat your vegetables\" way. These 9 phrases are about how athletes, YouTubers, and ordinary teens really talk about their bodies, food, and minds.",
            introUk: 'Сьогодні ми говоримо про здоров\u2019я — але не в нудному стилі \"їж овочі\". Ці 9 фраз — про те, як спортсмени, YouTubeри і звичайні підлітки реально говорять про своє тіло, їжу і розум.',
            items: [
              { emoji: '🍗', en: 'lean protein', uk: 'нежирний білок', explain: "Meat or fish without too much fat — chicken breast, fish, eggs, beans. Athletes eat this to build muscle without getting heavy.", accent: 'terracotta' },
              { emoji: '⛽', en: 'fuel to perform', uk: 'паливо для діяльності/виступу', explain: "The food and energy your body needs to do its best — at sport, on stage, before a big exam. Like petrol for a car.", accent: 'mustard' },
              { emoji: '🧠', en: 'mental health', uk: 'психічне здоров\u2019я', explain: "How well your mind is doing — your feelings, stress, mood, anxiety. Just as important as your physical health.", accent: 'plum' },
              { emoji: '🥗', en: 'balanced diet', uk: 'збалансоване харчування', explain: "Eating a bit of everything — proteins, vegetables, fruit, grains — instead of only pizza or only salad.", accent: 'sage' },
              { emoji: '🔋', en: 'power source', uk: 'джерело енергії', explain: "Something or someone that gives you energy. Coffee, breakfast, a hype playlist, or even a person who motivates you.", accent: 'mustard' },
              { emoji: '🏃', en: 'stay active', uk: 'залишатися активним(-ою)', explain: "Move your body regularly — not necessarily extreme sport, just don't sit on the sofa all day. Walking counts!", accent: 'sage' },
              { emoji: '🚀', en: 'boost mood', uk: 'підняти настрій', explain: "Do something that quickly makes you feel happier or more energetic — chocolate, a sunny walk, a funny TikTok.", accent: 'terracotta' },
              { emoji: '☯️', en: 'keep mind in harmony', uk: 'тримати розум у гармонії', explain: "Stay mentally calm and balanced — not too stressed, not too lazy. Meditation, breathing, hobbies all help.", accent: 'plum' },
              { emoji: '🌞', en: 'positive outlook on life', uk: 'позитивне ставлення до життя', explain: "Looking at life on the bright side — seeing opportunities and good things instead of only the bad. A mindset, not luck.", accent: 'mustard' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right phrase',
                instruction: 'Read each mini-scene and choose the phrase that fits best.',
                questions: [
                  { q: 'My coach told me: "Before a match, eat some chicken and rice — your body needs ___ ."', options: ['fuel to perform', 'positive outlook', 'mental health'], correct: 0 },
                  { q: 'Sofia eats fish, eggs and chicken every day. She gets a lot of ___ to build muscle for swimming.', options: ['power source', 'lean protein', 'balanced diet'], correct: 1 },
                  { q: "It's not just about your body — taking care of your ___ matters just as much.", options: ['fuel to perform', 'mental health', 'lean protein'], correct: 1 },
                  { q: "My nutritionist said: \"Don't cut out carbs. Just eat a ___ .\"", options: ['power source', 'positive outlook', 'balanced diet'], correct: 2 },
                  { q: 'My morning coffee is honestly my main ___ — without it, I\u2019m a zombie.', options: ['lean protein', 'power source', 'mental health'], correct: 1 },
                  { q: 'I try to ___ even on lazy days — at least a 20-minute walk with my dog.', options: ['stay active', 'fuel to perform', 'keep mind in harmony'], correct: 0 },
                  { q: 'A funny video from my best friend can really ___ when I\u2019m feeling down.', options: ['boost my mood', 'fuel to perform', 'stay active'], correct: 0 },
                  { q: 'Yoga in the morning helps me ___ for the whole day.', options: ['boost mood', 'keep my mind in harmony', 'fuel to perform'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the wellness influencer\u2019s post',
                instruction: 'Fill in the missing words. Use the word bank below — every chip is used exactly once.',
                bank: ['balanced diet', 'lean protein', 'stay active', 'mental health', 'power source', 'boost mood', 'positive outlook', 'fuel to perform', 'mind in harmony'],
                questions: [
                  { before: 'Morning routine, day 23 🌞 Here\u2019s what keeps me going. First, a', after: '— eggs, oats, fruit, a bit of everything.', answer: 'balanced diet' },
                  { before: 'My favourite breakfast', after: 'is Greek yoghurt with honey and almonds.', answer: 'lean protein' },
                  { before: 'I make sure to', after: 'every single day — even just a long walk counts.', answer: 'stay active' },
                  { before: 'Don\u2019t forget your', after: '— a 10-minute meditation in the morning works wonders.', answer: 'mental health' },
                  { before: 'My coffee + sunshine combo is honestly my main', after: '☕☀️', answer: 'power source' },
                  { before: 'Before any workout, eat well — give your body real', after: '.', answer: 'fuel to perform' },
                  { before: 'A 5-minute dance break in your room can totally', after: 'on a stressful day.', answer: 'boost mood' },
                  { before: 'Journalling + breathing helps me keep my', after: '— try it!', answer: 'mind in harmony' },
                  { before: 'And honestly, the biggest thing? A', after: '. The world is what you focus on. 💛', answer: 'positive outlook' }
                ]
              },
              {
                type: 'match',
                title: 'Match the situation with the phrase',
                instruction: 'Click one tile on each side to pair each situation with the right phrase.',
                pairs: [
                  { left: 'Eating chicken, fish and eggs to build muscle', right: 'lean protein' },
                  { left: 'A pre-match meal of pasta and bananas', right: 'fuel to perform' },
                  { left: 'Talking to a therapist about your anxiety', right: 'mental health' },
                  { left: 'A plate with veggies, rice, chicken and fruit', right: 'balanced diet' },
                  { left: 'Going for a run instead of watching TV', right: 'stay active' },
                  { left: 'Listening to your favourite song after a bad day', right: 'boost mood' },
                  { left: 'Always finding the bright side of every problem', right: 'positive outlook on life' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Look at these three pairs of sentences from a fitness blog. Each one compares things — but the comparisons look different. Read carefully and try to spot what changes.",
            taskUk: 'Подивися на ці три пари речень з фітнес-блогу. У кожній порівнюються речі — але порівняння виглядають по-різному. Уважно прочитай і подивись, що змінюється.',
            sentences: [
              { id: 1, html: '🥗 <em>Yoga is <span class="marker">healthier</span> than scrolling on the phone.</em> &nbsp;|&nbsp; <em>Swimming is <span class="marker">the healthiest</span> sport for your back.</em>' },
              { id: 2, html: '💪 <em>Pull-ups are <span class="marker">more difficult</span> than push-ups.</em> &nbsp;|&nbsp; <em>Marathons are <span class="marker">the most difficult</span> running events.</em>' },
              { id: 3, html: '⚖️ <em>This cake is <span class="marker">too sweet</span> for me.</em> &nbsp;|&nbsp; <em>I\u2019m <span class="marker">not strong enough</span> to lift that.</em>' }
            ],
            questions: [
              "In sentence 1, why is the word \"healthier\" (with -er) but in the second part it\u2019s \"the healthiest\" (with -iest)? What\u2019s being compared in each case?",
              "In sentence 2, why isn\u2019t it \"difficulter\" or \"the difficultest\"? What\u2019s special about the word \"difficult\"?",
              "In sentence 3, what\u2019s the difference between \"too sweet\" and \"not strong enough\"? When do we use TOO, and when ENOUGH?",
              "Can you guess the rules? Short word + ___ . Long word + ___ . Too goes ___ the adjective; enough goes ___ the adjective."
            ]
          },

          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'When we compare things, English uses two forms: <strong>comparative</strong> (between two things — A is better than B) and <strong>superlative</strong> (the best out of all of them). The rules depend on how LONG the adjective is. We also have two tiny but powerful words: <strong>too</strong> (more than we want) and <strong>enough</strong> (the right amount, or — with negative — not enough).',
            introUk: 'Коли ми порівнюємо речі, англійська використовує дві форми: <em>вищий ступінь</em> (між двома речами — A is better than B) і <em>найвищий ступінь</em> (найкращий з усіх). Правила залежать від ДОВЖИНИ прикметника. Також маємо два маленькі, але потужні слова: <em>too</em> (більше, ніж треба) і <em>enough</em> (саме стільки, або — з запереченням — недостатньо).',
            blocks: [
              {
                title: 'Short adjectives (1 syllable)', letter: 'A',
                when: 'add -er / -est', whenUk: 'додай -er / -est',
                explain: "For <strong>short adjectives</strong> (1 syllable), add <em>-er</em> for comparative and <em>-est</em> for superlative: <em>fast → faster → the fastest</em>. If the adjective ends in -e, just add -r/-st (large → larger). If it ends in consonant + vowel + consonant, double the last letter (big → bigger, hot → hottest). Watch out for irregular ones: good → better → the best, bad → worse → the worst.",
                explainUk: "Для <em>коротких прикметників</em> (1 склад) додай <em>-er</em> для вищого і <em>-est</em> для найвищого ступеня: fast → faster → the fastest. Якщо закінчується на -e, додай -r/-st (large → larger). Якщо приголосний + голосний + приголосний — подвоюй останню літеру (big → bigger). Обережно з неправильними: good → better → the best, bad → worse → the worst.",
                formula: 'short adj + <em>-er</em> &nbsp; | &nbsp; <em>the</em> + short adj + <em>-est</em>',
                examples: [
                  { en: "Running is faster than walking, but cycling is the fastest of the three.", uk: 'Біг швидший за ходьбу, але велоспорт — найшвидший із трьох.' },
                  { en: "A lean meal is healthier than fast food.", uk: 'Нежирна їжа корисніша за фастфуд.' },
                  { en: "Sleep is the best power source — better than any energy drink.", uk: 'Сон — найкраще джерело енергії — краще за будь-який енергетик.' }
                ]
              },
              {
                title: 'Long adjectives (2+ syllables)', letter: 'B',
                when: 'use more / the most', whenUk: 'використовуй more / the most',
                explain: "For <strong>long adjectives</strong> (2 or more syllables, like \"difficult\", \"important\", \"interesting\"), don\u2019t add -er. Instead, use <em>more</em> before the adjective for comparative, and <em>the most</em> for superlative: <em>difficult → more difficult → the most difficult</em>. NEVER say \"difficulter\" or \"the difficultest\".",
                explainUk: "Для <em>довгих прикметників</em> (2+ склади, як \"difficult\", \"important\", \"interesting\") не додавай -er. Замість цього використовуй <em>more</em> для вищого і <em>the most</em> для найвищого: difficult → more difficult → the most difficult. НІКОЛИ не кажи \"difficulter\".",
                formula: '<em>more</em> + long adj &nbsp; | &nbsp; <em>the most</em> + long adj',
                examples: [
                  { en: "Marathons are more difficult than 5K races.", uk: 'Марафони складніші за забіги на 5 км.' },
                  { en: "Mental health is more important than people think.", uk: 'Психічне здоров\u2019я важливіше, ніж люди думають.' },
                  { en: "Yoga is the most relaxing thing I do all week.", uk: 'Йога — найрозслаблююче, що я роблю за тиждень.' }
                ]
              },
              {
                title: 'too vs enough', letter: 'C',
                when: 'too much, or just right?', whenUk: 'забагато чи якраз?',
                explain: "Use <strong>too</strong> + adjective to say something is <em>more than you want</em> — it\u2019s a problem. <em>This coffee is too hot.</em> &nbsp; Use adjective + <strong>enough</strong> to say something is <em>the right amount</em>. Add <em>not</em> to say it\u2019s less than needed. <em>I\u2019m not tall enough.</em> Important: <em>too</em> goes BEFORE the adjective; <em>enough</em> goes AFTER.",
                explainUk: "<em>too</em> + прикметник — щоб сказати, що чогось <em>більше, ніж треба</em> (проблема). This coffee is too hot. &nbsp; прикметник + <em>enough</em> — щоб сказати, що <em>саме стільки, скільки треба</em>. З <em>not</em> — недостатньо. I\u2019m not tall enough. Важливо: <em>too</em> ставиться ПЕРЕД прикметником, <em>enough</em> — ПІСЛЯ.",
                formula: '<em>too</em> + adjective &nbsp; | &nbsp; adjective + <em>enough</em>',
                examples: [
                  { en: "I can\u2019t finish this — the meal is too big for me.", uk: 'Я не доїм — порція для мене завелика.' },
                  { en: "She\u2019s strong enough to lift 30 kg now.", uk: 'Вона достатньо сильна, щоб підняти 30 кг тепер.' },
                  { en: "I'm not active enough — I really need to start running again.", uk: 'Я недостатньо активний(-на) — мені треба знову почати бігати.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the right form',
                instruction: 'Pick the comparative, superlative, or too/enough form that fits each sentence.',
                questions: [
                  { q: 'Swimming is ___ than running for your knees.', options: ['gooder', 'better', 'the best'], correct: 1 },
                  { q: 'My older brother is ___ in our family — he\u2019s 1.95 m!', options: ['taller', 'the tallest', 'more tall'], correct: 1 },
                  { q: 'Mental health is ___ than people used to think.', options: ['importanter', 'more important', 'the most important'], correct: 1 },
                  { q: 'This is the ___ workout I\u2019ve ever tried — I can barely walk!', options: ['difficulter', 'more difficult', 'most difficult'], correct: 2 },
                  { q: 'My coffee is ___ hot — I burnt my tongue!', options: ['too', 'enough', 'more'], correct: 0 },
                  { q: 'After 3 months of training, I\u2019m finally fast ___ for the team.', options: ['too', 'enough', 'more'], correct: 1 },
                  { q: 'Pizza is ___ than salad. Sad but true.', options: ['tastier', 'more tasty', 'the tastiest'], correct: 0 },
                  { q: 'You\u2019re not ___ to give up. Keep going!', options: ['too tired', 'tired enough', 'more tired'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the adjective in the right form',
                instruction: 'Use the adjective in brackets in the correct form (comparative, superlative, or with too/enough).',
                questions: [
                  { before: 'Yoga is one of', after: '(relaxing) sports in the world.', answer: 'the most relaxing', hint: 'superlative, long' },
                  { before: 'Sleep is', after: '(important) than people realise.', answer: 'more important', hint: 'comparative, long' },
                  { before: 'My grandma walks every morning. She\u2019s', after: '(active) than me!', answer: 'more active', hint: 'comparative, long' },
                  { before: 'A balanced diet is', after: '(healthy) than skipping meals.', answer: 'healthier', hint: 'comparative, short' },
                  { before: 'This cake is', after: '(sweet) — I can\u2019t even finish one bite.', answer: 'too sweet', hint: 'use too' },
                  { before: 'After 3 months of yoga, my back is finally', after: '(strong) to do a handstand.', answer: 'strong enough', hint: 'use enough' },
                  { before: 'Honestly, water is', after: '(good) drink for your body.', answer: 'the best', hint: 'superlative, irregular' },
                  { before: 'My new running shoes are', after: '(comfortable) than my old ones — I can run for hours!', answer: 'more comfortable', hint: 'comparative, long' }
                ]
              },
              {
                type: 'mcq',
                title: 'Which sounds natural?',
                instruction: 'A real native speaker wouldn\u2019t mix these up — pick the one that sounds right.',
                questions: [
                  { q: 'Comparing two sports:', options: ['Football is funner than tennis.', 'Football is more fun than tennis.'], correct: 1 },
                  { q: 'About a workout:', options: ['This is the most hardest exercise!', 'This is the hardest exercise!'], correct: 1 },
                  { q: 'After a big meal:', options: ['I ate too much.', 'I ate enough much.'], correct: 0 },
                  { q: 'A 9-year-old at the gym:', options: ['She\u2019s not enough old for this machine.', 'She\u2019s not old enough for this machine.'], correct: 1 },
                  { q: 'Comparing two diets:', options: ['Mediterranean food is more healthier.', 'Mediterranean food is healthier.'], correct: 1 },
                  { q: 'Talking about your best friend:', options: ['She\u2019s the funniest person I know.', 'She\u2019s the most funny person I know.'], correct: 0 },
                  { q: 'About a heavy backpack:', options: ['This bag is too heavy for me.', 'This bag is heavy too for me.'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🏋️',
            textTitle: "Tom\u2019s healthy habit experiment",
            text: [
              "Three months ago, Tom decided he wasn\u2019t active enough. His new school year had started, and he was tired all the time. He felt slower and weaker than his classmates.",
              "His older sister, Lina, who studies sport at university, made him a deal: \"Try my healthy habits experiment for 90 days. If it doesn\u2019t work, you can go back to your old life.\"",
              "Rule one: eat a balanced diet. Tom started having oats and lean protein for breakfast, instead of just toast and chocolate spread. Boring at first, but the energy lasted longer.",
              "Rule two: stay active every day. Even on lazy days, Tom had to walk for 20 minutes. \"It\u2019s the easiest rule,\" Lina said, \"but it\u2019s the most important one.\"",
              "Rule three: protect your mental health. Tom started writing three good things in a tiny notebook every evening. At first he thought it was silly, but slowly his outlook on life became more positive.",
              "By day 60, Tom noticed something: he was happier. His friends were funnier, his lessons more interesting, even rainy days felt less annoying. His mood was simply better.",
              "On day 90, Lina asked the big question: \"Are you healthier now than 90 days ago?\" Tom didn\u2019t even hesitate. \"Way healthier. And honestly, this is the best thing I\u2019ve ever done for myself.\"",
              "Now Tom is the one telling his friends about it. \"It\u2019s not about being perfect,\" he says. \"It\u2019s just about being a bit better than yesterday.\""
            ],
            questions: [
              { q: "Why did Tom start the experiment?", options: ["He wanted to lose weight", "He wasn\u2019t active enough and felt tired", "His coach made him"], correct: 1 },
              { q: 'Who suggested the 90-day experiment?', options: ['His mum', 'His sister Lina', 'His coach'], correct: 1 },
              { q: 'What did Tom change about his breakfast?', options: ['He started skipping it', 'He started having oats and lean protein', 'He stopped eating chocolate completely'], correct: 1 },
              { q: 'According to Lina, what is "the most important rule"?', options: ['Eat a balanced diet', 'Stay active every day', 'Protect your mental health'], correct: 1 },
              { q: "What did Tom do for his mental health?", options: ['He started meditating', 'He wrote three good things every evening', 'He talked to a therapist'], correct: 1 },
              { q: 'By day 60, what did Tom notice?', options: ['He was thinner', 'He was happier', 'He was sleeping less'], correct: 1 },
              { q: 'What does Tom say at the end? It\u2019s not about being ___ — it\u2019s about being ___ than yesterday.', options: ['rich / richer', 'perfect / a bit better', 'fast / faster'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Be honest — what\u2019s ONE healthy habit you actually have, and one you wish you had? Why don\u2019t you have it yet?",
              "If you had to design your perfect plate for lunch — what would be on it? Use \"balanced diet\" and \"lean protein\" in your answer.",
              "Compare yourself now to yourself 2 years ago. Are you stronger? Healthier? Use at least 3 comparative forms.",
              "What\u2019s the most relaxing thing in your life? The most stressful thing? Try to use superlatives in your answer.",
              "Tell us about one moment when you were too tired or not strong enough for something. What happened?",
              "Some people say mental health is more important than physical health. Do you agree? Defend your opinion.",
              "If you could give every kid your age ONE piece of health advice, what would it be? Why?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 phrases about health and habits — from lean protein and balanced diet to mental health and positive outlook on life.",
              "Two ways to compare things in English:",
              "Short adjectives → add -er / -est (fast → faster → the fastest, good → better → the best).",
              "Long adjectives → use more / the most (difficult → more difficult → the most difficult).",
              "Two important little words:",
              "too + adjective = more than we want (\"too sweet\", \"too heavy\").",
              "adjective + enough = the right amount (\"strong enough\"); with not = less than needed (\"not active enough\")."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"Yoga is ___ than running for your back." Which form?', options: ['gooder', 'better', 'more good'], correct: 1 },
                { q: '"This is the ___ workout I\u2019ve ever tried!" Which form?', options: ['difficulter', 'more difficult', 'most difficult'], correct: 2 },
                { q: '"I\u2019m not strong ___ to lift that yet." Which word?', options: ['too', 'enough', 'more'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My 7-day healthy habit challenge',
              task: "Design your own <strong>7-day healthy habit challenge</strong> for next week. Write <strong>one sentence per day</strong> with what you\u2019ll do (eat, move, or for your mental health). Use at least <strong>2 comparative forms</strong> (\"more active than\", \"healthier than\") and <strong>1 too/enough</strong> phrase. Example: <em>\"Monday: I\u2019m going to drink more water than usual — at least 6 glasses.\"</em>",
              taskUk: 'Сплануй власний 7-денний челендж здорових звичок на наступний тиждень. Напиши по одному реченню на день. Використай щонайменше 2 порівняльні форми і 1 фразу з too/enough.',
              tip: 'Pick realistic things you\u2019ll actually do — small habits beat huge plans you abandon on Tuesday.'
            },
            speaking: {
              title: 'My 60-second wellness reel',
              task: "Record a <strong>60-second \"wellness influencer\" reel</strong> sharing your TOP 3 habits that keep you healthy or happy. Use at least <strong>4 words/phrases</strong> from the lesson (lean protein, stay active, boost mood, balanced diet, etc.). Start with: <em>\"Hey guys, today I\u2019m sharing my top 3...\"</em>",
              taskUk: 'Запиши 60-секундний reel у стилі \"wellness influencer\" про твої ТОП-3 звички для здоров\u2019я. Використай щонайменше 4 фрази з уроку. Почни з: \"Hey guys, today I\u2019m sharing my top 3...\"',
              tip: 'Even if your habits are tiny ("I drink water in the morning") — sell them like a pro. Confidence is everything!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 37 · Health problems and treatments
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u8-l37', number: 37,
          title: 'Health problems and treatments', titleUk: 'Хвороби і лікування',
          type: 'Vocabulary', tags: ['health', 'illness', 'first-aid', 'vocabulary'],
          updated: 'today', accent: 'terracotta', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🤧', en: "When was the last time you got sick? Was it a small thing like a cold, or something worse? How long did it take to feel normal again?", uk: 'Коли востаннє ти хворів(-ла)? Це було щось маленьке, як застуда, чи серйозніше? Скільки часу знадобилося, щоб знову почуватися нормально?' },
              { emoji: '💊', en: "What's your family's secret \"cure\" for a cold? Hot tea with honey? Soup? A specific medicine? Lots of cartoons?", uk: 'Який секретний \"рецепт\" від застуди у твоїй родині? Гарячий чай з медом? Суп? Конкретні ліки? Багато мультиків?' },
              { emoji: '🚑', en: "Have you ever had a really embarrassing or funny injury? What happened? (No serious stuff — just the goofy ones!)", uk: 'Ти колись травмувався(-лася) у смішний чи незручний спосіб? Що сталося? (Без серйозного — тільки кумедні випадки!)' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Today's vocabulary is split into two clear groups. <strong>Group 1 (red)</strong> — health problems you might catch or get. <strong>Group 2 (green)</strong> — treatments and things that actually help you feel better. Mix them up wrong and you might \"apply a pill\" or \"take a bandage\" — let's not do that!",
            introUk: 'Сьогоднішня лексика розділена на дві чіткі групи. <em>Група 1 (червона)</em> — проблеми зі здоров\u2019ям, які можуть статися. <em>Група 2 (зелена)</em> — лікування і речі, що насправді допомагають. Якщо їх переплутати, може вийти, що ти \"мажеш таблетку\" або \"п\u2019єш бинт\"!',
            items: [
              // ── Group 1: Problems ──
              { emoji: '🤧', en: 'catch a cold', uk: 'застудитися, підхопити застуду', explain: "When you start having a runny nose, sneezing, and feeling weak — usually after being in the cold without a jacket or near someone sick.", accent: 'terracotta' },
              { emoji: '🌡️', en: 'fever', uk: 'жар, висока температура', explain: "When your body temperature goes higher than normal (above 37.5°C). You feel hot, then cold, then hot again. Often comes with a cold or flu.", accent: 'terracotta' },
              { emoji: '😣', en: 'sore throat', uk: 'біль у горлі', explain: "When swallowing hurts and your throat feels scratchy, red and painful. Usually one of the first signs of a cold.", accent: 'terracotta' },
              { emoji: '🌸', en: 'allergy', uk: 'алергія', explain: "When your body reacts badly to something normal — pollen, peanuts, cats, dust. You might sneeze, itch, or get a rash even if you\u2019re not sick.", accent: 'terracotta' },
              { emoji: '🔴', en: 'red rash', uk: 'червоний висип', explain: "Red, often itchy spots or patches on your skin. Can come from an allergy, heat, stress, or a plant you shouldn\u2019t have touched.", accent: 'terracotta' },
              { emoji: '😷', en: 'bad cough', uk: 'сильний кашель', explain: "A loud, painful, hard-to-stop cough — sometimes dry, sometimes with mucus. Often keeps you awake at night when you\u2019re sick.", accent: 'terracotta' },
              { emoji: '🤕', en: 'get injured / get hurt', uk: 'травмуватися / поранитися', explain: "When your body gets damaged from an accident — falling off a bike, twisting your ankle, cutting your finger while cooking.", accent: 'terracotta' },

              // ── Group 2: Treatments ──
              { emoji: '🧴', en: 'apply anti-itch cream', uk: 'намазати протиалергійним кремом / від свербіння', explain: "Put a special cream on your skin to stop it from itching. Helps with rashes, bug bites, or allergic reactions.", accent: 'sage' },
              { emoji: '🩹', en: 'apply a bandage', uk: 'накласти бинт / пластир', explain: "Wrap a clean strip of cloth or a sticky plaster around a cut or wound. Keeps it clean while it heals.", accent: 'sage' },
              { emoji: '🧼', en: 'clean the wound', uk: 'промити рану', explain: "Wash the cut carefully with water (or special liquid) to remove dirt before covering it. Skipping this step is a bad idea.", accent: 'sage' },
              { emoji: '💊', en: 'take a pill', uk: 'випити таблетку', explain: "Swallow a small piece of medicine with water. Pills can be for pain, fever, allergies, or many other things.", accent: 'sage' },
              { emoji: '🍵', en: 'drink warm liquid', uk: 'пити теплу рідину', explain: "Drink something hot but not too hot — tea, broth, lemon water with honey. Helps a sore throat and feels comforting.", accent: 'sage' },
              { emoji: '🍬', en: 'cough drops', uk: 'льодяники від кашлю', explain: "Small candies that you suck slowly. They soothe your throat and reduce coughing for a while.", accent: 'sage' },
              { emoji: '😴', en: 'rest', uk: 'відпочивати', explain: "Stop running around and just lie down. Sleep, watch films, do nothing. Your body needs this to fight off illness.", accent: 'sage' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'What\u2019s the problem?',
                instruction: 'Read each mini-scene and choose the problem the person has.',
                questions: [
                  { q: '"My nose is running, I keep sneezing, and I feel terrible. I forgot my jacket yesterday."', options: ['caught a cold', 'got injured', 'red rash'], correct: 0 },
                  { q: '"Mum, my forehead is so hot. I\u2019m boiling and freezing at the same time."', options: ['allergy', 'fever', 'sore throat'], correct: 1 },
                  { q: '"Every time I swallow, it feels like someone scratched my throat. Even water hurts."', options: ['bad cough', 'sore throat', 'red rash'], correct: 1 },
                  { q: '"Every spring, my eyes water and I sneeze for two weeks. It\u2019s the flowers — not a virus."', options: ['fever', 'allergy', 'caught a cold'], correct: 1 },
                  { q: '"Look at my arm — these red itchy spots came out of nowhere after I ate strawberries!"', options: ['red rash', 'bad cough', 'fever'], correct: 0 },
                  { q: '"I\u2019ve been coughing for 5 days straight. It even hurts my chest now."', options: ['allergy', 'bad cough', 'sore throat'], correct: 1 },
                  { q: '"I fell off my skateboard and my knee is bleeding."', options: ['caught a cold', 'got injured', 'fever'], correct: 1 }
                ]
              },
              {
                type: 'mcq',
                title: 'What should they do?',
                instruction: 'Each person has a problem. Choose the BEST treatment from the lesson.',
                questions: [
                  { q: 'Sofia has a red itchy rash from her new shampoo. She should...', options: ['apply anti-itch cream', 'take cough drops', 'clean the wound'], correct: 0 },
                  { q: 'Max cut his finger while making dinner. The first step is to...', options: ['take a pill', 'clean the wound', 'drink warm liquid'], correct: 1 },
                  { q: 'After cleaning the cut, the next step is to...', options: ['apply a bandage', 'take cough drops', 'drink warm liquid'], correct: 0 },
                  { q: 'Anya has a sore throat and feels miserable. Her grandma offers her some...', options: ['anti-itch cream', 'cough drops', 'warm liquid with honey'], correct: 2 },
                  { q: 'Daniel has a bad cough during class. Quietly, he reaches for...', options: ['a cough drop', 'an anti-itch cream', 'a bandage'], correct: 0 },
                  { q: 'Mia\u2019s head is pounding from a fever. Her dad gives her...', options: ['cough drops', 'a pill for the fever', 'a bandage'], correct: 1 },
                  { q: 'Tom feels exhausted and his body aches. The most important thing he needs is to...', options: ['rest in bed', 'apply anti-itch cream', 'clean a wound'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Mum\u2019s text messages',
                instruction: 'Maya is texting her mum from school. Fill in the missing words.',
                bank: ['fever', 'sore throat', 'cough', 'pill', 'warm liquid', 'rest', 'cough drops', 'bandage', 'allergy'],
                questions: [
                  { before: 'Mum, I think I have a', after: ' — my forehead feels really hot 🌡️', answer: 'fever' },
                  { before: 'And every time I swallow, my', after: 'kills me 😩', answer: 'sore throat' },
                  { before: 'Can you bring me some', after: 'when you pick me up? Lemon and honey please ✨', answer: 'warm liquid' },
                  { before: 'Also a', after: 'for the temperature — the school nurse said I can take one', answer: 'pill' },
                  { before: 'Btw I think my', after: 'is getting worse — can\u2019t stop coughing in maths class 😷', answer: 'cough' },
                  { before: 'I need to', after: 'as soon as I get home. Probably gonna sleep for 12 hours 😴', answer: 'rest' },
                  { before: 'OH and I cut my finger in art class — already cleaned it but need a', after: '🩹', answer: 'bandage' },
                  { before: 'P.S. Anya\u2019s', after: 'is back too — she sneezed on me half the day 🌸', answer: 'allergy' },
                  { before: 'Last thing: pls grab', after: 'too, the lemon-flavoured ones I like 🍬', answer: 'cough drops' }
                ]
              },
              {
                type: 'match',
                title: 'Match problem ↔ treatment',
                instruction: 'Match each health problem (left) with the BEST treatment for it (right).',
                pairs: [
                  { left: 'sore throat', right: 'drink warm liquid with honey' },
                  { left: 'fever', right: 'take a pill and rest' },
                  { left: 'small cut on the finger', right: 'clean the wound and apply a bandage' },
                  { left: 'red itchy rash from an allergy', right: 'apply anti-itch cream' },
                  { left: 'bad cough during class', right: 'cough drops' },
                  { left: 'caught a cold, feeling exhausted', right: 'rest in bed all day' },
                  { left: 'twisted ankle from skateboarding', right: 'apply a bandage and rest' }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🏥',
            textTitle: "The worst Sunday ever",
            text: [
              "Last Sunday started like a perfect day. The sun was shining and my best friend Yan and I were riding our skateboards in the park. Then EVERYTHING went wrong.",
              "First, I fell off my board and scraped my whole knee. There was blood, dust, and tiny stones in the wound. Yan stayed calm — he poured water from his bottle to clean the wound and said: \"Don\u2019t worry, we\u2019ll get a bandage from the shop.\"",
              "Twenty minutes later, my knee was wrapped and I was feeling brave again. But then Yan started sneezing. And sneezing. And sneezing. \"Oh no,\" he said. \"My allergy is back. Spring is the worst.\"",
              "We sat on a bench and he took a pill from his backpack. \"I always carry one,\" he said. \"You never know when the flowers will attack.\"",
              "On the way home, the rain started. We were soaked. By the time I got back, I was shivering and my throat felt scratchy. \"Mum,\" I said, \"I think I have a sore throat. And I\u2019m hot.\"",
              "She checked my forehead. \"A fever, definitely. Go shower, then get into bed.\" She made me hot tea with honey and lemon — the best warm liquid in the world.",
              "By 7 p.m., I had a bad cough too. Mum gave me some cough drops and told me to rest. \"No school tomorrow,\" she said.",
              "Yan texted me later: \"Bro, my rash is back too. Anti-itch cream all over my arm.\" I sent him a sad face. \"Catch a cold + allergy + injury in one day. We\u2019re winning at losing.\"",
              "He sent back a thumbs up. \"Worst Sunday ever. 10/10 do not recommend.\""
            ],
            questions: [
              { q: 'How did the writer get hurt?', options: ['Falling off a skateboard', 'Riding a bike', 'Playing football'], correct: 0 },
              { q: 'What did Yan do first to help with the wound?', options: ['Applied a bandage', 'Cleaned it with water', 'Took a pill'], correct: 1 },
              { q: 'Why did Yan start sneezing?', options: ['He had a cold', 'His allergy came back', 'He had a sore throat'], correct: 1 },
              { q: 'What did Yan take from his backpack?', options: ['A bandage', 'A pill', 'Cough drops'], correct: 1 },
              { q: 'What two problems did the writer have when they got home?', options: ['Cough and rash', 'Sore throat and fever', 'Allergy and injury'], correct: 1 },
              { q: 'What did Mum make to help with the sore throat?', options: ['Cough drops', 'Cold water', 'Hot tea with honey and lemon'], correct: 2 },
              { q: 'What problem did Yan also have by the end of the day?', options: ['A red rash on his arm', 'A bad cough', 'A fever'], correct: 0 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Tell us about the WORST time you ever caught a cold or got sick. Where were you? What did your family do to help?",
              "If your best friend texts you \"I have a fever and a sore throat\" — what 3 things would you suggest? Give real advice!",
              "Do you have any allergies? If yes — what to? If no — describe what you imagine it must feel like.",
              "Imagine you cut your finger right now while making a sandwich. Walk us through EXACTLY what you would do, step by step.",
              "What\u2019s a weird home remedy your family swears by? (Examples: garlic for colds, raw onion for cough, vodka rubs for fever — every family has at least ONE!)",
              "Be a school nurse for 30 seconds. Three kids come in: one with a sore throat, one with a cut finger, one with a red rash. What do you say to each?",
              "If you could only pick ONE treatment from this lesson to keep forever — which one and why?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 7 health PROBLEMS: catch a cold, fever, sore throat, allergy, red rash, bad cough, get injured/hurt.",
              "We learned 7 TREATMENTS that match: apply anti-itch cream, apply a bandage, clean the wound, take a pill, drink warm liquid, cough drops, rest.",
              "Key word combinations to remember:",
              "We CATCH a cold (not \"take\" or \"get\"). We TAKE a pill (not \"drink\" or \"apply\").",
              "We APPLY a cream or bandage (we put it ON the skin). We DRINK warm liquid (we put it IN the body).",
              "And one rule that beats all the others: when in doubt — REST. Your body knows what it\u2019s doing!"
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: 'Your throat hurts so much you can\u2019t swallow. You have a ___ .', options: ['sore throat', 'red rash', 'bad cough'], correct: 0 },
                { q: 'You cut your finger. The FIRST thing to do is...', options: ['apply a bandage', 'clean the wound', 'take a pill'], correct: 1 },
                { q: 'Your friend\u2019s mum says: "Drink this hot tea — it\u2019s a ___ that always helps." Which phrase?', options: ['cough drop', 'warm liquid', 'anti-itch cream'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'Sick day diary entry',
              task: "Write a short <strong>diary entry (5–7 sentences)</strong> from a sick day in your life — real or completely made-up! Include at least <strong>2 problems</strong> (cold, fever, cough, rash, etc.) and at least <strong>3 treatments</strong> (rest, pill, warm liquid, bandage, cream, cough drops). Start with: <em>\"Dear diary, today was the worst...\"</em>",
              taskUk: 'Напиши коротку щоденникову нотатку (5–7 речень) про твій хворий день — реальний або повністю вигаданий! Включи щонайменше 2 проблеми і 3 лікування.',
              tip: 'Make it dramatic! Sick-day diaries are the most fun when you exaggerate a little.'
            },
            speaking: {
              title: 'The "School nurse" roleplay',
              task: "Record yourself as a <strong>school nurse</strong> for 60 seconds. Imagine 3 students come in with different problems. Greet them, ask what\u2019s wrong, and give each one a quick treatment recommendation. Use at least <strong>3 problems</strong> and <strong>3 treatments</strong> from the lesson. Be friendly!",
              taskUk: 'Запиши себе як шкільну медсестру/медбрата на 60 секунд. Уяви, що приходять 3 учні з різними проблемами. Привітайся, запитай що болить, і дай рекомендацію кожному.',
              tip: 'Use phrases like "Don\u2019t worry, let\u2019s see..." and "I\u2019d recommend..." — sound caring, like a real nurse!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 38 · Healthy eating
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u8-l38', number: 38,
          title: 'Healthy eating', titleUk: 'Здорове харчування',
          type: 'Vocabulary', tags: ['health', 'food', 'third-conditional'],
          updated: 'today', accent: 'sage', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🍓', en: "If you could ONLY eat 3 foods for the rest of the week — which 3 would you choose? Try to make at least one healthy and one fun!", uk: 'Якби ти міг(-ла) їсти ЛИШЕ 3 продукти весь тиждень — які б ти вибрав(-ла)? Спробуй, щоб хоча б один був корисний і один — веселий!' },
              { emoji: '💧', en: "How much water did you drink yesterday? Be honest! Was it enough, or were you basically a dehydrated raisin?", uk: 'Скільки води ти випив(-ла) вчора? Чесно! Це було достатньо, чи ти був(-ла) практично як зневоднена родзинка?' },
              { emoji: '🤔', en: "Imagine your past self ate something really weird as a kid. What was it? Would you eat it now if I gave you a million dollars?", uk: 'Згадай, як ти в дитинстві їв(-ла) щось дуже дивне. Що це було? Чи з\u2019їв(-ла) би ти це зараз за мільйон доларів?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Today's vocabulary is all about eating smart — but not in a boring way. These 9 phrases describe how food makes your body and mind work better. Read each one, and only open the spoiler if you really need the translation.",
            introUk: 'Сьогоднішня лексика — про розумне харчування, але не в нудний спосіб. Ці 9 фраз описують, як їжа допомагає твоєму тілу і розуму працювати краще. Читай і відкривай спойлер лише якщо справді потрібен переклад.',
            items: [
              { emoji: '⚙️', en: 'run smoothly', uk: 'працювати плавно / без збоїв', explain: "When everything in your body works perfectly — no headaches, no tiredness, just smooth like a well-oiled machine. Good food helps your body run smoothly.", accent: 'sage' },
              { emoji: '🍓', en: 'nature\u2019s power-ups', uk: 'природні «підсилювачі», як у грі', explain: "Fruits, vegetables and nuts — they're like power-ups in a video game. Eat them, and your body gets extra energy, strength, and protection.", accent: 'mustard' },
              { emoji: '🛡️', en: 'immunity', uk: 'імунітет', explain: "Your body\u2019s army that fights off germs and viruses. Strong immunity = fewer colds, fewer sick days, more party invitations.", accent: 'plum' },
              { emoji: '🍰', en: 'treat yourself', uk: 'побалувати себе', explain: "Allowing yourself something fun — chocolate, ice cream, pizza — once in a while. Life without treats is just sad.", accent: 'terracotta' },
              { emoji: '💧', en: 'stay hydrated', uk: 'залишатися гідратованим (пити досить води)', explain: "Drink water during the day so your body doesn\u2019t dry out. If you feel tired or get headaches — you probably need more water.", accent: 'sky' },
              { emoji: '🍭', en: 'sugary treats', uk: 'солодощі (з великою кількістю цукру)', explain: "Candy, cake, soda, cookies — foods packed with sugar. Tasty, but too much makes you tired and grumpy.", accent: 'terracotta' },
              { emoji: '💪', en: 'strong muscles', uk: 'сильні м\u2019язи', explain: "What you get from protein (eggs, meat, fish, beans) PLUS exercise. Strong muscles help you run faster, lift more, and feel powerful.", accent: 'terracotta' },
              { emoji: '🌾', en: 'whole grains', uk: 'цільні зернові', explain: "Bread, rice, pasta and cereals made from the WHOLE grain — not the white processed kind. They give you energy that lasts longer.", accent: 'mustard' },
              { emoji: '🍿', en: 'snacking', uk: 'перекуси (між їжею)', explain: "Eating small things between meals — fruit, nuts, chips, candy. Healthy snacking = good. All-day snacking on junk = not so good.", accent: 'sage' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right phrase',
                instruction: 'Read each scene and choose the phrase that fits best.',
                questions: [
                  { q: 'After eating only fruit and water for a week, Maya said: "My body just feels like it\u2019s ___ for the first time in months."', options: ['running smoothly', 'snacking', 'treating itself'], correct: 0 },
                  { q: 'Mum said blueberries and oranges are ___ — packed with vitamins that boost your energy.', options: ['sugary treats', 'nature\u2019s power-ups', 'whole grains'], correct: 1 },
                  { q: 'I never get sick anymore. My mum says my ___ is finally strong because I eat veggies every day.', options: ['immunity', 'snacking', 'muscles'], correct: 0 },
                  { q: 'You\u2019ve been studying for 4 hours straight. Go on, ___ — you\u2019ve earned that ice cream.', options: ['snack', 'stay hydrated', 'treat yourself'], correct: 2 },
                  { q: 'My PE teacher reminded me: "Drink at least 6 glasses of water a day to ___ ."', options: ['stay hydrated', 'treat yourself', 'snack'], correct: 0 },
                  { q: 'I had three cupcakes, a cola and a chocolate bar — way too many ___ for one afternoon.', options: ['whole grains', 'sugary treats', 'power-ups'], correct: 1 },
                  { q: 'My older brother eats chicken, eggs and beans every day. He says it\u2019s how he gets his ___ .', options: ['immunity', 'strong muscles', 'snacking habits'], correct: 1 },
                  { q: 'Mum switched from white bread to brown — she says ___ keep her full for longer.', options: ['sugary treats', 'whole grains', 'power-ups'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the food blogger\u2019s post',
                instruction: 'Fill in the missing words. Use the word bank below — every chip is used exactly once.',
                bank: ['run smoothly', 'nature\u2019s power-ups', 'immunity', 'treat yourself', 'stay hydrated', 'sugary treats', 'strong muscles', 'whole grains', 'snacking'],
                questions: [
                  { before: '6 simple food rules that changed my life ✨ Rule 1: drink water. A LOT. To', after: 'is honestly the easiest win.', answer: 'stay hydrated' },
                  { before: 'Rule 2: eat your fruits and veggies. They\u2019re literally', after: '— berries, broccoli, carrots, all of it.', answer: 'nature\u2019s power-ups' },
                  { before: 'Rule 3: protein every day. Eggs, chicken, beans = ', after: 'and energy that lasts.', answer: 'strong muscles' },
                  { before: 'Rule 4: switch white for brown.', after: ' (brown rice, oats, whole wheat bread) keep you full for hours.', answer: 'Whole grains' },
                  { before: 'Rule 5: cut back on', after: '. Candy and soda are fine sometimes, but not every single day.', answer: 'sugary treats' },
                  { before: 'Rule 6: smart', after: 'between meals — nuts, fruit, yoghurt. Not chips at midnight.', answer: 'snacking' },
                  { before: 'Bonus: once a week,', after: ' 🍕🍫 Life without joy is not a life.', answer: 'treat yourself' },
                  { before: 'Result? My', after: 'is amazing. I haven\u2019t had a cold all winter!', answer: 'immunity' },
                  { before: 'And honestly? My whole body just feels like it\u2019s starting to', after: 'again 💗', answer: 'run smoothly' }
                ]
              },
              {
                type: 'match',
                title: 'Match the food with its benefit',
                instruction: 'Match each type of food (left) with what it does for your body (right).',
                pairs: [
                  { left: 'Berries, broccoli, oranges', right: 'nature\u2019s power-ups — vitamins everywhere' },
                  { left: 'Chicken, eggs, beans, fish', right: 'strong muscles and lasting energy' },
                  { left: 'Brown rice, oats, whole wheat bread', right: 'whole grains — keep you full for hours' },
                  { left: 'Water (6–8 glasses a day)', right: 'stay hydrated, no headaches' },
                  { left: 'Nuts, fruit, yoghurt', right: 'smart snacking between meals' },
                  { left: 'Garlic, ginger, citrus, vitamins', right: 'boost immunity, fewer colds' },
                  { left: 'Candy, soda, cookies (in moderation!)', right: 'sugary treats — a nice reward, sometimes' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Look at these three sentences. They\u2019re all about regrets — things that did NOT happen in the past. Read carefully and try to figure out the pattern of \"if I HAD done X, I WOULD HAVE Y'd\".",
            taskUk: 'Подивися на ці три речення. Усі вони — про жалі: про те, що НЕ сталося в минулому. Уважно прочитай і спробуй знайти схему «якби я ЗРОБИВ Х, я Б ЗРОБИВ Y».',
            sentences: [
              { id: 1, html: '🍔 <em>If I <span class="marker">had eaten</span> healthier food yesterday, I <span class="marker">would have felt</span> better today.</em>' },
              { id: 2, html: '💧 <em>If she <span class="marker">had stayed</span> hydrated, she <span class="marker">wouldn\u2019t have had</span> that headache.</em>' },
              { id: 3, html: '🎂 <em>If we <span class="marker">hadn\u2019t eaten</span> all that cake, we <span class="marker">would have slept</span> better last night.</em>' }
            ],
            questions: [
              "All three sentences talk about something that didn\u2019t actually happen — the speaker imagines a different past. What kind of feeling does this give? (Hint: regret? wish?)",
              "Look at the IF-part. What tense is \"had eaten\", \"had stayed\", \"hadn\u2019t eaten\"? It looks like a past tense but with an extra word.",
              "Now look at the OTHER part: \"would have felt\", \"wouldn\u2019t have had\", \"would have slept\". What\u2019s the pattern?",
              "Can you guess the rule? If + ___ + V3 (past participle), then would have + ___ ?"
            ]
          },

          grammar: {
            title: 'Grammar Presentation', titleUk: 'Презентація граматики',
            intro: 'The <strong>Third Conditional</strong> is the "what if?" tense — but only for the PAST. It\u2019s how we imagine alternative versions of things that already happened. <em>"If I had eaten breakfast, I wouldn\u2019t have been so hungry"</em> — but I DIDN\u2019T eat breakfast, so I WAS hungry. It\u2019s the tense of regrets, lessons learned, and "what could have been".',
            introUk: '<em>Third Conditional</em> — це час «що, якби?», але лише про МИНУЛЕ. Він описує уявні альтернативні версії того, що вже сталося. Якщо ти кажеш «якби я з\u2019їв сніданок, я б не був таким голодним» — але насправді ти НЕ з\u2019їв сніданок і БУВ голодним. Це час жалів, уроків і «що могло б бути інакше».',
            blocks: [
              {
                title: 'The basic pattern', letter: 'A',
                when: 'imagining a different past', whenUk: 'уявляємо інше минуле',
                explain: "The formula has TWO parts. The <strong>IF-part</strong> uses Past Perfect (had + V3). The <strong>RESULT-part</strong> uses <em>would have</em> + V3. Both parts describe an imaginary past — neither actually happened.",
                explainUk: "Формула складається з ДВОХ частин. У <em>IF-частині</em> — Past Perfect (had + V3). У <em>RESULT-частині</em> — <em>would have</em> + V3. Обидві описують уявне минуле — нічого з цього насправді не сталося.",
                formula: 'If + <em>had</em> + V3, &nbsp; <em>would have</em> + V3',
                examples: [
                  { en: "If I had drunk more water, I wouldn\u2019t have had a headache.", uk: 'Якби я випив більше води, у мене не було б голови.' },
                  { en: "If she had eaten breakfast, she would have done better on the test.", uk: 'Якби вона з\u2019їла сніданок, вона б краще написала тест.' },
                  { en: "If we hadn\u2019t stayed up so late, we would have felt amazing today.", uk: 'Якби ми не сиділи допізна, ми б почувалися чудово сьогодні.' }
                ]
              },
              {
                title: 'Order can be flipped', letter: 'B',
                when: 'two ways to say the same thing', whenUk: 'два способи сказати те саме',
                explain: "You can put the IF-part FIRST or SECOND — both work. When IF is first, use a comma. When IF is second, no comma is needed. The meaning stays exactly the same.",
                explainUk: "Можна поставити IF-частину ПЕРШОЮ або ДРУГОЮ — обидва варіанти правильні. Коли IF на початку — ставимо кому. Коли IF в кінці — кома не потрібна. Зміст не змінюється.",
                formula: '<em>If</em> A, B. &nbsp; = &nbsp; B <em>if</em> A.',
                examples: [
                  { en: "If I had known you were sick, I would have brought soup.", uk: 'Якби я знав, що ти хворієш, я б приніс суп.' },
                  { en: "I would have brought soup if I had known you were sick.", uk: 'Я б приніс суп, якби знав, що ти хворієш.' },
                  { en: "We would have won if we had practised more.", uk: 'Ми б перемогли, якби більше тренувалися.' }
                ]
              },
              {
                title: 'Could have / might have', letter: 'C',
                when: 'softer or more uncertain results', whenUk: 'м\u2019якіші або менш певні результати',
                explain: "Instead of <em>would have</em>, you can use <em>could have</em> (= it was possible) or <em>might have</em> (= maybe, not sure). This makes the imagined result less certain — useful when you\u2019re just guessing.",
                explainUk: "Замість <em>would have</em> можна вживати <em>could have</em> (= це було можливо) або <em>might have</em> (= можливо, не точно). Це робить уявний результат менш певним — корисно, коли ти просто припускаєш.",
                formula: 'If + had + V3, &nbsp; <em>could / might have</em> + V3',
                examples: [
                  { en: "If we had left earlier, we could have caught the train.", uk: 'Якби ми вийшли раніше, ми могли б встигнути на поїзд.' },
                  { en: "If you had asked, I might have helped you.", uk: 'Якби ти попросив, я б, можливо, допоміг тобі.' },
                  { en: "If she had practised more, she could have won.", uk: 'Якби вона більше тренувалася, могла б перемогти.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Choose the correct form',
                instruction: 'Pick the right Third Conditional form for each sentence.',
                questions: [
                  { q: 'If I ___ more water, I wouldn\u2019t have felt so tired.', options: ['drank', 'had drunk', 'would drink'], correct: 1 },
                  { q: 'If she had eaten breakfast, she ___ better in class.', options: ['would feel', 'would have felt', 'felt'], correct: 1 },
                  { q: 'We ___ that flu if we had taken our vitamins.', options: ['wouldn\u2019t have caught', 'didn\u2019t catch', 'wouldn\u2019t catch'], correct: 0 },
                  { q: 'If he ___ those sugary treats, he wouldn\u2019t have had a stomachache.', options: ['didn\u2019t eat', 'hadn\u2019t eaten', 'wouldn\u2019t have eaten'], correct: 1 },
                  { q: 'I ___ healthier last year if I had cooked at home more.', options: ['would be', 'would have been', 'had been'], correct: 1 },
                  { q: 'If we ___ snacks for the trip, we wouldn\u2019t have been so hungry.', options: ['had packed', 'packed', 'would pack'], correct: 0 },
                  { q: 'She ___ her medal if she hadn\u2019t trained every single day.', options: ['wouldn\u2019t have won', 'didn\u2019t win', 'wouldn\u2019t win'], correct: 0 },
                  { q: 'If you had asked me, I ___ helped you carry that.', options: ['would', 'would have', 'will have'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Open the brackets',
                instruction: 'Put the verbs in the correct Third Conditional form.',
                questions: [
                  { before: 'If I', after: '(eat) more vegetables yesterday, I wouldn\u2019t have felt so tired today.', answer: 'had eaten', hint: 'IF-part' },
                  { before: 'If she had drunk more water, she', after: '(not / get) a headache.', answer: "wouldn't have gotten", hint: 'result, negative' },
                  { before: 'We', after: '(catch) the bus if we had left 5 minutes earlier.', answer: 'would have caught', hint: 'result, positive' },
                  { before: 'If he hadn\u2019t eaten all those sugary treats, he', after: '(sleep) better last night.', answer: 'would have slept', hint: 'result, positive' },
                  { before: 'If I', after: '(know) you were sick, I would have brought you some soup.', answer: 'had known', hint: 'IF-part' },
                  { before: 'They', after: '(win) the match if they had practised harder.', answer: 'would have won', hint: 'result, positive' },
                  { before: 'If we', after: '(stay) hydrated all day, we wouldn\u2019t have felt so tired at practice.', answer: 'had stayed', hint: 'IF-part' },
                  { before: 'I', after: '(not / fail) the test if I had studied the night before.', answer: "wouldn't have failed", hint: 'result, negative' }
                ]
              },
              {
                type: 'mcq',
                title: 'Match the regret to the cause',
                instruction: 'Read each "regret" and pick the cause that explains it (in Third Conditional form).',
                questions: [
                  { q: 'Maya: "Ugh, I have such a headache today." Cause:', options: ["If I had drunk more water yesterday, I wouldn't have had a headache.", "If I drink more water, I won't have a headache."], correct: 0 },
                  { q: 'Tom: "I\u2019m exhausted, I couldn\u2019t even finish PE class." Cause:', options: ["If I sleep more, I'll feel better.", "If I had slept more last night, I would have felt better."], correct: 1 },
                  { q: 'Sofia: "I missed the whole school week with the flu." Cause:', options: ["If she had taken her vitamins, she wouldn't have gotten so sick.", "If she takes her vitamins, she won't get sick."], correct: 0 },
                  { q: 'Daniel: "My team lost the championship." Cause:', options: ["If we practised more, we'd win.", "If we had practised more, we would have won."], correct: 1 },
                  { q: 'Anya: "My stomach hurts so much from those cupcakes." Cause:', options: ["If she eats less sugar, she'll feel better.", "If she hadn't eaten so much sugar, she wouldn't have felt sick."], correct: 1 },
                  { q: 'Leo: "I\u2019m starving — I should have packed snacks." Cause:', options: ["If he had packed snacks, he wouldn't have been so hungry.", "If he packs snacks, he won't be hungry."], correct: 0 },
                  { q: 'Mia: "I missed the bus AGAIN." Cause:', options: ["If she had left 5 minutes earlier, she would have caught it.", "If she leaves earlier, she catches it."], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🥗',
            textTitle: "Sofia\u2019s week of regrets (and lessons)",
            text: [
              "Last Monday, Sofia made a tiny decision: skip breakfast because she was running late. That decision sparked the WORST week of her semester.",
              "By lunch, she was starving — so she ate two slices of pizza and a giant cookie. \"If I had eaten breakfast,\" she now says, \"I wouldn\u2019t have been so desperate at lunch.\"",
              "By Tuesday afternoon, she had a terrible headache. Her doctor mum took one look at her and said: \"Sofia, you\u2019re dehydrated. If you had stayed hydrated yesterday, this wouldn\u2019t have happened.\"",
              "On Wednesday, Sofia caught a cold. She missed two classes. \"If I had taken my vitamins this month,\" she told her best friend, \"my immunity would have been stronger.\"",
              "Thursday was Halloween, and Sofia ate way too many sugary treats. By Friday morning, her stomach was wrecked. \"If I hadn\u2019t eaten that whole bag of candy,\" she groaned, \"I would have slept like a baby.\"",
              "On Saturday, she finally rested. She drank water, ate whole grains for breakfast, snacked on fruit, and treated herself to one piece of dark chocolate after dinner.",
              "By Sunday evening, she felt amazing. \"You know what?\" she told her mum. \"If I had eaten this way ALL week, I would have had the best week ever.\"",
              "Her mum smiled. \"Better late than never. Now let\u2019s make sure next week is different.\"",
              "Sofia\u2019s new rule: every Monday breakfast is non-negotiable. \"If past me had known what this week would feel like,\" she laughs, \"she definitely wouldn\u2019t have skipped Monday breakfast.\""
            ],
            questions: [
              { q: 'What tiny decision started Sofia\u2019s bad week?', options: ['Skipping breakfast on Monday', 'Eating too much pizza', 'Forgetting her vitamins'], correct: 0 },
              { q: 'Why did Sofia get a headache on Tuesday?', options: ['She was stressed about school', 'She was dehydrated', 'She caught the flu'], correct: 1 },
              { q: 'What did Sofia say about her vitamins?', options: ["If she had taken them, her immunity would have been stronger", "She loves her vitamins", "She doesn\u2019t need vitamins"], correct: 0 },
              { q: 'What happened on Thursday and Friday?', options: ["She ate too many sugary treats and got a stomachache", "She skipped Halloween", "She ate only fruit"], correct: 0 },
              { q: 'What did Sofia do on Saturday?', options: ["Stayed in bed all day", "Drank water, ate whole grains and snacked on fruit", "Ate even more candy"], correct: 1 },
              { q: 'How did Sofia feel by Sunday evening?', options: ["Still sick", "Amazing", "Tired and grumpy"], correct: 1 },
              { q: 'What is Sofia\u2019s new rule?', options: ["No more sugar ever", "Monday breakfast is non-negotiable", "Take vitamins every hour"], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Tell us about a time you ate something and REGRETTED it. Use Third Conditional: \"If I hadn\u2019t eaten ___, I wouldn\u2019t have ___.\"",
              "If you had eaten healthier food last week, what 3 things would have been different in your life? Be specific!",
              "What\u2019s your honest opinion: are sugary treats really that bad, or are people just too dramatic? Defend your answer.",
              "If you had to design the PERFECT lunch for a 12-year-old — what would be on the plate? Use at least 4 words from the lesson.",
              "Think of one regret you have about something you ate (or didn\u2019t eat). Tell us in Third Conditional form.",
              "If your past self had known about all these healthy eating rules, what would you have done differently as a younger kid?",
              "Quick game: ask your partner three \"What would you have done if...?\" questions about food and health!"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 9 phrases about healthy eating — from run smoothly and immunity to whole grains, snacking, and treat yourself.",
              "Third Conditional — the \"what if?\" tense for the PAST:",
              "Formula: If + had + V3, would have + V3.",
              "Both parts describe imaginary past — neither actually happened.",
              "Use it for regrets (\"If I hadn\u2019t eaten that...\"), missed chances (\"If we had left earlier...\"), and lessons learned.",
              "Order can be flipped: \"If A, B\" = \"B if A\". With comma when IF comes first.",
              "You can also use could have / might have instead of would have for less certain results."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: 'If I ___ more water, I wouldn\u2019t have felt so tired. Which form?', options: ['drank', 'had drunk', 'would have drunk'], correct: 1 },
                { q: '"If she had eaten breakfast, she ___ better in class." Which form?', options: ['would feel', 'would have felt', 'feels'], correct: 1 },
                { q: 'A real native speaker would say:', options: ["If we had practised more, we would have won.", "If we would practise more, we would win."], correct: 0 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My week of food regrets',
              task: "Write a short <strong>diary entry (5–7 sentences)</strong> about a real or made-up week of food choices that went wrong. Use the <strong>Third Conditional</strong> at least <strong>3 times</strong> (\"If I had eaten...\", \"If I hadn\u2019t drunk...\", \"...would have felt better\"). Include at least <strong>3 words</strong> from the lesson (immunity, stay hydrated, sugary treats, whole grains, etc.).",
              taskUk: 'Напиши коротку щоденникову нотатку (5–7 речень) про справжній або вигаданий тиждень харчових помилок. Використай Third Conditional щонайменше 3 рази і 3 слова з уроку.',
              tip: 'Make it funny! Food regrets are the most relatable kind of regrets.'
            },
            speaking: {
              title: '"If I had known..." reflection',
              task: "Record a short <strong>45–60 second reflection</strong> about your past food habits. Start with: <em>\"If I had known about healthy eating earlier, ...\"</em>. Use the <strong>Third Conditional</strong> at least <strong>3 times</strong> and include at least <strong>2 healthy eating phrases</strong>.",
              taskUk: 'Запиши коротку рефлексію на 45–60 секунд про свої колишні харчові звички. Почни з: \"If I had known about healthy eating earlier, ...\". Використай Third Conditional щонайменше 3 рази.',
              tip: 'Be honest! Real reflections sound more interesting than perfect ones.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 39 · At the gym (Всі 4 conditional повторення)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u8-l39', number: 39,
          title: 'At the gym', titleUk: 'У спортзалі',
          type: 'Vocabulary', tags: ['health', 'fitness', 'gym', 'all-conditionals'],
          updated: 'today', accent: 'terracotta', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🏋️', en: "Have you ever been to a real gym? If yes — what did you try first? If no — what would you try first if you went tomorrow?", uk: 'Ти колись був(-ла) у справжньому спортзалі? Якщо так — що спробував(-ла) першим? Якщо ні — що спробував(-ла) би першим, якби пішов(-ла) завтра?' },
              { emoji: '💰', en: "Imagine you won a lottery and could build your DREAM home gym. What 5 things would definitely be in it?", uk: 'Уяви, що ти виграв(-ла) у лотерею і можеш побудувати ідеальний домашній спортзал. Які 5 речей у ньому обов\u2019язково будуть?' },
              { emoji: '😅', en: "What\u2019s the ONE exercise that always defeats you? Push-ups? Squats? Running? Be honest — it happens to everyone!", uk: 'Яка ОДНА вправа тебе завжди перемагає? Віджимання? Присідання? Біг? Чесно — це буває у всіх!' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to the gym! Today's 14 words fall into two clear groups: <strong>equipment</strong> (things you use — dumbbells, mats, ropes) and <strong>exercises</strong> (things you do — planks, squats, cardio). By the end of the lesson, you'll be able to describe any workout like a real coach.",
            introUk: 'Ласкаво просимо до спортзалу! Сьогоднішні 14 слів розділені на дві групи: <em>інвентар</em> (речі, які використовуєш — гантелі, килимки, скакалки) та <em>вправи</em> (що робиш — планка, присідання, кардіо). До кінця уроку ти зможеш описати будь-яке тренування як справжній тренер.',
            items: [
              // Group 1: Equipment
              { emoji: '🏋️', en: 'dumbbells', uk: 'гантелі', explain: "Small weights you hold in each hand. Perfect for building arm and shoulder strength — start light, get heavier over time.", accent: 'terracotta' },
              { emoji: '🧘', en: 'yoga mat', uk: 'килимок для йоги', explain: "A soft mat you put on the floor for yoga, stretching, planks, or any exercise done on the ground. Keeps your knees and back happy.", accent: 'sage' },
              { emoji: '🪢', en: 'jump rope', uk: 'скакалка', explain: "Two handles connected by a rope. You jump over it — sounds simple, but boxers use it because it\u2019s an incredible workout.", accent: 'mustard' },
              { emoji: '⚽', en: 'fitness ball', uk: 'фітбол (гімнастичний м\u2019яч)', explain: "A big rubber ball you can sit, roll or exercise on. Great for balance, core strength, and stretching your back.", accent: 'sky' },
              { emoji: '🥊', en: 'punching bag', uk: 'боксерська груша', explain: "A heavy bag hanging from the ceiling that you hit. Amazing for stress and for getting strong shoulders and arms.", accent: 'plum' },
              { emoji: '🏋️\u200d♂️', en: 'barbell', uk: 'штанга', explain: "A long metal bar with weights on both ends. Serious lifters use it for squats, deadlifts and bench press.", accent: 'terracotta' },
              { emoji: '🏃', en: 'treadmill', uk: 'бігова доріжка', explain: "A machine you can walk or run on — the belt moves under your feet. Perfect for cardio when it\u2019s raining outside.", accent: 'sky' },
              // Group 2: Exercises & activities
              { emoji: '💪', en: 'workout', uk: 'тренування', explain: "The whole session of exercise you do — could be 20 minutes or 2 hours, could be cardio or strength or both.", accent: 'terracotta' },
              { emoji: '🤸', en: 'exercise', uk: 'вправа / вправлятися', explain: "A specific movement you repeat — push-ups, planks, jumping jacks. Both a noun (\"an exercise\") and a verb (\"to exercise\").", accent: 'sage' },
              { emoji: '❤️', en: 'cardio exercise', uk: 'кардіо вправа', explain: "Exercise that makes your heart beat fast — running, cycling, jump rope. Great for your heart, lungs, and mood.", accent: 'terracotta' },
              { emoji: '🌉', en: 'do a plank', uk: 'робити планку', explain: "Hold your body straight like a bridge, on your elbows or hands, for as long as you can. Killer for your core.", accent: 'plum' },
              { emoji: '🤲', en: 'stretch', uk: 'розтягуватися', explain: "Slowly reach and hold to make your muscles longer and more flexible. Do it before AND after every workout.", accent: 'sage' },
              { emoji: '🦵', en: 'squat', uk: 'присідання / присідати', explain: "Go down like you\u2019re sitting on an invisible chair, then stand up. Best exercise for strong legs and glutes.", accent: 'mustard' },
              { emoji: '🚶', en: 'do lunges', uk: 'робити випади', explain: "Take a big step forward, bend both knees, then push back up. Then switch legs. Great for balance and strong legs.", accent: 'mustard' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'What equipment do they need?',
                instruction: 'Read each scene and choose the right piece of equipment or exercise.',
                questions: [
                  { q: 'Sofia wants to build strong arms at home. Her mum bought her a pair of ___ .', options: ['dumbbells', 'yoga mat', 'punching bag'], correct: 0 },
                  { q: 'Max is starting his morning yoga routine. First, he unrolls his ___ on the floor.', options: ['jump rope', 'yoga mat', 'barbell'], correct: 1 },
                  { q: 'Boxers warm up by skipping fast for 3 minutes. What are they using?', options: ['fitness ball', 'treadmill', 'jump rope'], correct: 2 },
                  { q: 'Anya sits on a big rubber ball to work her core muscles. That\u2019s a ___ .', options: ['fitness ball', 'punching bag', 'yoga mat'], correct: 0 },
                  { q: 'Daniel had a rough day at school. He\u2019s hitting the ___ for stress relief.', options: ['treadmill', 'punching bag', 'yoga mat'], correct: 1 },
                  { q: 'Serious weightlifters at the gym use heavy metal bars called ___ .', options: ['dumbbells', 'barbells', 'jump ropes'], correct: 1 },
                  { q: 'It\u2019s raining, but Lina still wants to run. She goes to the gym and uses the ___ .', options: ['treadmill', 'fitness ball', 'punching bag'], correct: 0 },
                  { q: 'Mia holds her body straight like a bridge for 60 seconds. She\u2019s doing a ___ .', options: ['squat', 'plank', 'lunge'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the trainer\u2019s workout plan',
                instruction: "Fill in the missing words. Use the word bank below — every chip is used exactly once.",
                bank: ['workout', 'cardio', 'stretch', 'treadmill', 'squats', 'lunges', 'plank', 'dumbbells', 'jump rope'],
                questions: [
                  { before: 'Beginners full-body', after: 'plan — 30 minutes, 3 times a week 💪', answer: 'workout' },
                  { before: 'Warm-up (5 min): 200 skips with the', after: 'to get your heart rate up.', answer: 'jump rope' },
                  { before: 'Block 1 (10 min): 15', after: '(sit down, stand up — feet shoulder-width apart).', answer: 'squats' },
                  { before: 'Block 2 (5 min): 10', after: 'on each leg (step forward, bend both knees).', answer: 'lunges' },
                  { before: 'Block 3 (5 min): hold a', after: 'for 30 seconds. Rest. Repeat 3 times.', answer: 'plank' },
                  { before: 'Block 4 (5 min): 3 sets of 8 arm curls with light', after: '(3–5 kg).', answer: 'dumbbells' },
                  { before: 'Optional', after: 'finisher: 10 minutes on the', answer: 'cardio' },
                  { before: '10 minutes on the', after: 'at medium speed.', answer: 'treadmill' },
                  { before: 'Cool down (5 min):', after: 'every muscle you used. Drink water. Done!', answer: 'stretch' }
                ]
              },
              {
                type: 'match',
                title: 'Match the exercise with the muscles it works',
                instruction: 'Match each exercise (left) with the part of the body it mainly trains (right).',
                pairs: [
                  { left: 'squats', right: 'legs and glutes' },
                  { left: 'plank', right: 'the whole core (belly, back)' },
                  { left: 'push-ups on the ball', right: 'arms, chest and balance' },
                  { left: 'jump rope skipping', right: 'heart, lungs and calves' },
                  { left: 'dumbbell curls', right: 'biceps (front of the arm)' },
                  { left: 'lunges', right: 'legs and balance' },
                  { left: 'punching bag rounds', right: 'shoulders, arms and stress relief' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Look at these FOUR sentences from a fitness coach. Each one uses a different type of conditional — and each one describes a different kind of situation. Read carefully and try to figure out the pattern.",
            taskUk: 'Подивися на ці ЧОТИРИ речення від фітнес-тренера. Кожне використовує різний тип умовного речення — і кожне описує різну ситуацію. Уважно прочитай і знайди схему.',
            sentences: [
              { id: 1, html: '⚙️ <strong>Zero:</strong> <em>If you <span class="marker">exercise</span> regularly, your body <span class="marker">stays</span> healthy.</em>' },
              { id: 2, html: '🎯 <strong>First:</strong> <em>If I <span class="marker">go</span> to the gym today, I <span class="marker">will feel</span> amazing tomorrow.</em>' },
              { id: 3, html: '💭 <strong>Second:</strong> <em>If I <span class="marker">had</span> more time, I <span class="marker">would train</span> every day.</em>' },
              { id: 4, html: '⏮️ <strong>Third:</strong> <em>If I <span class="marker">had trained</span> harder, I <span class="marker">would have won</span> the match.</em>' }
            ],
            questions: [
              "Sentence 1 is about a general TRUTH — always true. What tenses are in both parts?",
              "Sentence 2 is about a REAL possibility in the near future — it might really happen. What tenses?",
              "Sentence 3 is about an IMAGINARY situation right now — it\u2019s not real. What tenses?",
              "Sentence 4 is about the PAST — something that DIDN\u2019T happen but you\u2019re imagining it. What tenses?",
              "Can you match each conditional with the right description? Truth / Real future / Imaginary present / Imaginary past."
            ]
          },

          grammar: {
            title: 'Grammar Revision: All Conditionals', titleUk: 'Повторення: усі умовні речення',
            intro: 'English has <strong>four main types of conditionals</strong> — four ways to say "if". Each one describes a different kind of situation: from general truths to real future plans to imaginary "what if?" scenarios. Once you learn to spot the pattern, they\u2019re surprisingly simple. Let\u2019s revise all four.',
            introUk: 'В англійській мові є <em>чотири основні типи умовних речень</em> — чотири способи сказати «якщо». Кожен описує різну ситуацію: від загальних істин до реальних планів на майбутнє до уявних «що якби?». Коли ти навчишся впізнавати схему, вони стають несподівано простими. Повторимо всі чотири.',
            blocks: [
              {
                title: 'Zero Conditional', letter: 'A',
                when: 'general truths & facts', whenUk: 'загальні істини та факти',
                explain: "The <strong>Zero Conditional</strong> talks about things that are <strong>always true</strong> — laws of nature, cause-and-effect, general facts. Both parts use <em>Present Simple</em>. You can replace \"if\" with \"when\" and it still means the same.",
                explainUk: "<em>Zero Conditional</em> описує те, що <em>завжди правда</em> — закони природи, причина-наслідок, загальні факти. Обидві частини — Present Simple. Можна замінити «if» на «when» — сенс не зміниться.",
                formula: 'If + <em>Present Simple</em>, &nbsp; <em>Present Simple</em>',
                examples: [
                  { en: "If you exercise regularly, your body stays healthy.", uk: 'Якщо ти регулярно займаєшся, твоє тіло залишається здоровим.' },
                  { en: "If you don\u2019t stretch after workout, your muscles hurt.", uk: 'Якщо ти не розтягуєшся після тренування, у тебе болять м\u2019язи.' },
                  { en: "If you drink enough water, you feel better all day.", uk: 'Якщо ти пʼєш достатньо води, ти цілий день почуваєшся краще.' }
                ]
              },
              {
                title: 'First Conditional', letter: 'B',
                when: 'real possibility in the future', whenUk: 'реальна можливість у майбутньому',
                explain: "The <strong>First Conditional</strong> talks about a real, possible situation in the future — something that <strong>might really happen</strong>. IF-part uses <em>Present Simple</em>, result uses <em>will</em> + V1.",
                explainUk: "<em>First Conditional</em> описує реальну, можливу ситуацію в майбутньому — те, що <em>справді може статися</em>. IF-частина — Present Simple, результат — will + V1.",
                formula: 'If + <em>Present Simple</em>, &nbsp; <em>will</em> + V1',
                examples: [
                  { en: "If I go to the gym today, I will feel amazing tomorrow.", uk: 'Якщо я піду в спортзал сьогодні, завтра почуватимусь чудово.' },
                  { en: "If it doesn\u2019t rain, we will jog in the park.", uk: 'Якщо не буде дощу, ми побігаємо в парку.' },
                  { en: "If you don\u2019t warm up, you will hurt your muscles.", uk: 'Якщо не розігрієшся, ти пошкодиш м\u2019язи.' }
                ]
              },
              {
                title: 'Second Conditional', letter: 'C',
                when: 'imaginary present or future', whenUk: 'уявне сьогодення чи майбутнє',
                explain: "The <strong>Second Conditional</strong> is for imagining situations that are NOT real right now, or that are very unlikely. IF-part uses <em>Past Simple</em>, result uses <em>would</em> + V1. Note: with \"to be\", we often use <em>were</em> for all persons (\"If I were rich...\").",
                explainUk: "<em>Second Conditional</em> — для уявних ситуацій, які НЕ реальні зараз, або дуже малоймовірні. IF-частина — Past Simple, результат — would + V1. Примітка: з «to be» часто використовуємо <em>were</em> для всіх осіб («If I were rich...»).",
                formula: 'If + <em>Past Simple</em>, &nbsp; <em>would</em> + V1',
                examples: [
                  { en: "If I had more time, I would train every day.", uk: 'Якби я мав більше часу, я б тренувався щодня.' },
                  { en: "If I were a fitness coach, I would help kids get strong.", uk: 'Якби я був фітнес-тренером, я б допомагав дітям стати сильними.' },
                  { en: "If we lived closer to the gym, we would go more often.", uk: 'Якби ми жили ближче до спортзалу, ми б ходили частіше.' }
                ]
              },
              {
                title: 'Third Conditional', letter: 'D',
                when: 'imaginary past — regrets', whenUk: 'уявне минуле — жалі',
                explain: "The <strong>Third Conditional</strong> imagines the PAST — something that <strong>didn\u2019t happen</strong>, but you\u2019re imagining an alternative. Perfect for regrets and \"what could have been\". IF-part uses <em>Past Perfect</em>, result uses <em>would have</em> + V3.",
                explainUk: "<em>Third Conditional</em> уявляє МИНУЛЕ — те, що <em>НЕ сталося</em>, але ти уявляєш альтернативу. Ідеально для жалів та «що могло б бути». IF-частина — Past Perfect, результат — would have + V3.",
                formula: 'If + <em>had</em> + V3, &nbsp; <em>would have</em> + V3',
                examples: [
                  { en: "If I had trained harder, I would have won the match.", uk: 'Якби я тренувався краще, я б виграв матч.' },
                  { en: "If we hadn\u2019t skipped the warm-up, we wouldn\u2019t have gotten injured.", uk: 'Якби ми не пропустили розминку, ми б не травмувалися.' },
                  { en: "If she had joined the gym earlier, she would have been stronger by now.", uk: 'Якби вона записалася в зал раніше, вона б уже була сильнішою.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Which conditional is this?',
                instruction: 'Read each sentence and identify which conditional it uses (0, 1, 2 or 3).',
                questions: [
                  { q: '"If you exercise every day, you feel better." Which type?', options: ['Zero', 'First', 'Second'], correct: 0 },
                  { q: '"If I go to the gym after school, I will do cardio." Which type?', options: ['Zero', 'First', 'Third'], correct: 1 },
                  { q: '"If I were rich, I would build my own gym." Which type?', options: ['First', 'Second', 'Third'], correct: 1 },
                  { q: '"If I had bought that yoga mat, I would have started yoga sooner." Which type?', options: ['Second', 'Third', 'Zero'], correct: 1 },
                  { q: '"If you don\u2019t warm up, your muscles get cold and tight." Which type?', options: ['Zero', 'First', 'Second'], correct: 0 },
                  { q: '"If she trains harder next month, she will win the championship." Which type?', options: ['First', 'Second', 'Third'], correct: 0 },
                  { q: '"If I had known about the plank, I would have added it years ago." Which type?', options: ['First', 'Second', 'Third'], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Choose the right conditional form',
                instruction: 'Put the verbs in the correct form for each type of conditional.',
                questions: [
                  { before: 'If you', after: '(skip) the warm-up, you (get) injured. It always happens.', answer: 'skip', hint: 'Zero: Present Simple' },
                  { before: 'If Max', after: '(go) to the gym tomorrow, he will try the new treadmill.', answer: 'goes', hint: 'First: Present Simple' },
                  { before: 'If I had a coach, I', after: '(train) three times a week.', answer: 'would train', hint: 'Second: would + V1' },
                  { before: 'If she', after: '(train) harder last year, she would have won.', answer: 'had trained', hint: 'Third: Past Perfect' },
                  { before: 'If we', after: '(not / practise) more, we would not have improved so fast.', answer: "hadn't practised", hint: 'Third: negative' },
                  { before: 'If Anya', after: '(be) taller, she would play basketball professionally.', answer: 'were', hint: 'Second: were for all persons' },
                  { before: 'If you drink coffee before bed, you', after: '(not / sleep) well.', answer: "don't sleep", hint: 'Zero: general truth' },
                  { before: 'If it', after: '(rain) tomorrow, we will use the treadmill instead of jogging outside.', answer: 'rains', hint: 'First: real future' }
                ]
              },
              {
                type: 'mcq',
                title: 'Which sounds natural?',
                instruction: 'Two sentences that look similar — but only one is grammatically correct. Pick the right one.',
                questions: [
                  { q: 'Real plan for tomorrow:', options: ['If I will go to the gym, I will do cardio.', 'If I go to the gym, I will do cardio.'], correct: 1 },
                  { q: 'Imaginary situation now:', options: ['If I had a personal trainer, I would work out daily.', 'If I have a personal trainer, I would work out daily.'], correct: 0 },
                  { q: 'Regret about the past:', options: ['If I had known about squats, I would have started earlier.', 'If I knew about squats, I would have started earlier.'], correct: 0 },
                  { q: 'A general fact:', options: ['If you do lunges, your legs get stronger.', 'If you would do lunges, your legs get stronger.'], correct: 0 },
                  { q: 'What might really happen tomorrow:', options: ['If it doesn\u2019t rain, we will jog in the park.', 'If it didn\u2019t rain, we would jog in the park.'], correct: 0 },
                  { q: 'Imagining a different life:', options: ['If I were a coach, I would help kids get strong.', 'If I am a coach, I would help kids get strong.'], correct: 0 },
                  { q: 'Something that didn\u2019t happen last week:', options: ['If we practised harder, we won the match.', 'If we had practised harder, we would have won the match.'], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🏋️',
            textTitle: "The gym rules of Coach Nick",
            text: [
              "Coach Nick has been training kids at our local gym for 15 years. He\u2019s famous for his rules — and honestly, they\u2019re gold. Here are the top 5.",
              "\u201cRule number one,\u201d he always starts, \u201cif you don\u2019t warm up, you get injured. It\u2019s not a maybe. It\u2019s not a sometimes. It\u2019s a rule of nature.\u201d Every session starts with 5 minutes on the jump rope and 2 minutes of stretching.",
              "\u201cRule number two: if you come to the gym three times this week, you will feel a difference by next Sunday. Try it. Just three sessions. That\u2019s all.\u201d And it works — every single time.",
              "\u201cRule number three: if I were you, I would forget about the mirror. Focus on how you feel, not how you look.\u201d Coach Nick believes fitness is about health first, appearance second.",
              "\u201cRule number four: if you have twenty minutes, you have time for a workout. Twenty minutes of squats, lunges, planks and a bit of cardio — that\u2019s enough to change your body.\u201d",
              "\u201cRule number five,\u201d he says, and this one hits hard, \u201cif I had listened to my coach when I was your age, I would have been a professional athlete by 20. So listen. Right now. Your future self will thank you.\u201d",
              "Last month, my friend Tom tried the 3-times-a-week plan. In one month, he could hold a plank for 90 seconds, run for 2 kilometres without stopping, and — his favourite part — beat his older brother at arm-wrestling.",
              "\u201cIf I hadn\u2019t started,\u201d Tom says now, \u201cI would still be tired all the time. And I definitely wouldn\u2019t be beating my brother.\u201d",
              "Coach Nick just smiles when he hears things like that. \u201cSee? Rules of nature. They always work.\u201d"
            ],
            questions: [
              { q: 'What is Coach Nick\u2019s first rule?', options: ['Always eat before training', 'If you don\u2019t warm up, you get injured', 'Only work out three times a week'], correct: 1 },
              { q: 'What does Coach Nick say happens if you come to the gym 3 times a week?', options: ['You will feel a difference by next Sunday', 'You will become a professional athlete', 'You will lose weight'], correct: 0 },
              { q: 'What kind of conditional is Rule 1 ("if you don\u2019t warm up, you get injured")?', options: ['Zero Conditional', 'Second Conditional', 'Third Conditional'], correct: 0 },
              { q: 'What is Coach Nick\u2019s advice about the mirror?', options: ['Look at it every day', 'Forget about it — focus on how you feel', 'Take photos every week'], correct: 1 },
              { q: 'What regret does Coach Nick share?', options: ['That he wasn\u2019t a professional athlete because he didn\u2019t listen to his coach', 'That he chose the wrong gym', 'That he doesn\u2019t have time to train anymore'], correct: 0 },
              { q: 'What happened to Tom after one month of the plan?', options: ['He got tired all the time', 'He gave up', 'He could hold a plank for 90 seconds and beat his brother at arm-wrestling'], correct: 2 },
              { q: 'Tom says "If I hadn\u2019t started, I would still be tired." What conditional is this?', options: ['First Conditional', 'Second Conditional (mixed with real result)', 'Third Conditional'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "If you started a serious gym routine tomorrow, what would you do first? (Use First or Second Conditional.)",
              "If you could invent a completely new piece of gym equipment, what would it do? Describe it! (Second Conditional)",
              "Complete this sentence honestly: \u201cIf I had started exercising two years ago, I ___.\u201d (Third Conditional)",
              "Give us 3 GENERAL truths about fitness — things that are always true. Use Zero Conditional: \"If you ___, you ___.\"",
              "Imagine your dream home gym. What 5 things are in it? What would you do there every day? (Second Conditional)",
              "If you had to choose only ONE exercise to do for the rest of your life, which would it be? Why?",
              "What\u2019s ONE moment in sport when you now wish you had trained harder? Tell us about it in Third Conditional."
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We learned 14 gym words: 7 equipment (dumbbells, yoga mat, jump rope, fitness ball, punching bag, barbell, treadmill) and 7 exercise words (workout, exercise, cardio, plank, stretch, squat, lunges).",
              "We revised all 4 English conditionals:",
              "Zero → general truths (If + Pres.S, Pres.S) — \"If you exercise, you feel good.\"",
              "First → real future (If + Pres.S, will + V1) — \"If I go to the gym today, I will feel great.\"",
              "Second → imaginary present/future (If + Past.S, would + V1) — \"If I had time, I would train every day.\"",
              "Third → imaginary past (If + had+V3, would have + V3) — \"If I had trained harder, I would have won.\""
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"If I ___ to the gym tomorrow, I will do cardio." Which form?', options: ['go', 'went', 'had gone'], correct: 0 },
                { q: '"If I were you, I ___ start yoga right now." Which form?', options: ['will', 'would', 'would have'], correct: 1 },
                { q: '"If she ___ practised more, she would have won." Which form?', options: ['practised', 'had practised', 'would practise'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My dream gym story',
              task: "Write a short piece (<strong>6–8 sentences</strong>) about your <strong>dream gym life</strong>. Use <strong>at least one example of each conditional</strong>: Zero (a general truth about fitness), First (something you\u2019ll really do next week), Second (an imaginary dream scenario), Third (a regret about the past). Also include at least <strong>4 gym words</strong> from the lesson.",
              taskUk: 'Напиши коротку розповідь (6–8 речень) про своє «ідеальне спортивне життя». Використай ПРИНАЙМНІ ПО ОДНОМУ з кожного типу умовних (Zero, First, Second, Third) і 4 слова з уроку.',
              tip: 'Structure hint: 1 truth about training → 1 plan for next week → 1 dream → 1 regret. Ready-made recipe!'
            },
            speaking: {
              title: '"If I had a personal trainer..." — 60-second monologue',
              task: "Record a <strong>60-second monologue</strong> starting with: <em>\u201cIf I had a personal trainer for a whole year, ...\u201d</em>. Describe what your dream routine would look like. Use <strong>at least 3 different conditionals</strong> in your answer and <strong>5 gym words</strong> from the lesson.",
              taskUk: 'Запиши 60-секундний монолог, що починається зі слів «If I had a personal trainer for a whole year, ...». Опиши свою ідеальну програму тренувань. Використай щонайменше 3 різні умовні і 5 слів з уроку.',
              tip: 'Speak like you\u2019re daydreaming — this is your imagined perfect gym year!'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 40 · Revision (Unit 8 finale)
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u8-l40', number: 40,
          title: 'Revision', titleUk: 'Повторення (Unit 8)',
          type: 'Revision', tags: ['health', 'fitness', 'conditionals', 'too-enough', 'present-perfect'],
          updated: 'today', accent: 'sky', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '🧠', en: "Without looking back at your notes: how many health, food or gym words from this unit can you remember in 60 seconds? Say them out loud!", uk: 'Не підглядаючи у зошит: скільки слів про здоров\u2019я, харчування чи спортзал з цього юніту ти можеш згадати за 60 секунд? Скажи їх уголос!' },
              { emoji: '🏆', en: "Of everything we\u2019ve learned in Unit 8 — healthy habits, illnesses, food, gym equipment — which topic did YOU find most useful? Which one was the most fun?", uk: 'З усього, що ми вивчили в юніті 8 — здорові звички, хвороби, їжа, тренажерка — яка тема була для тебе найкориснішою? А яка — найцікавішою?' },
              { emoji: '💪', en: "Has anything in your real life actually changed after this unit? A new habit? A new snack? A new opinion about exercise?", uk: 'Чи щось у твоєму реальному житті реально змінилося після цього юніту? Нова звичка? Нова їжа? Нова думка про спорт?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Recap', titleUk: 'Повторення словника',
            intro: "This is Unit 8\u2019s final review, so instead of new words — a mega-recap of EVERYTHING we learned across Lessons 36, 37, 38 and 39. Open the spoiler only if a phrase feels blurry. If you remember it — high five yourself and move on.",
            introUk: 'Це фінальне повторення юніту 8. Замість нових слів — мега-огляд УСЬОГО, що ми вивчили в уроках 36, 37, 38 і 39. Відкривай спойлер лише якщо фраза здається розмитою. Якщо памʼятаєш — плесни собі й рухайся далі.',
            items: [
              // From L36: healthy habits
              { emoji: '🥗', en: 'balanced diet / lean protein', uk: 'збалансоване харчування / нежирний білок', explain: "A mix of everything (proteins, veggies, fruit, grains) — with chicken, eggs, fish and beans for strength.", accent: 'sage' },
              { emoji: '🏃', en: 'stay active / boost mood', uk: 'бути активним / підняти настрій', explain: "Move your body daily and do things that make you feel better — walking, music, a funny video.", accent: 'terracotta' },
              { emoji: '🧠', en: 'mental health / positive outlook', uk: 'психічне здоров\u2019я / позитивне ставлення', explain: "Take care of your mind. Look at life on the bright side — it changes everything.", accent: 'plum' },
              // From L37: problems & treatments
              { emoji: '🤧', en: 'catch a cold / fever / sore throat', uk: 'застудитися / жар / біль у горлі', explain: "Common winter troubles — runny nose, hot forehead, painful swallowing.", accent: 'terracotta' },
              { emoji: '🩹', en: 'clean the wound / apply a bandage', uk: 'промити рану / накласти пластир', explain: "Basic first aid for a small cut — wash first, cover second.", accent: 'sage' },
              { emoji: '💊', en: 'take a pill / drink warm liquid / rest', uk: 'випити таблетку / пити теплу рідину / відпочивати', explain: "The classic three: medicine, hot tea, and doing nothing under a blanket.", accent: 'mustard' },
              // From L38: healthy eating
              { emoji: '💧', en: 'stay hydrated / immunity', uk: 'бути гідратованим / імунітет', explain: "Drink your water and your body\u2019s army stays strong against germs.", accent: 'sky' },
              { emoji: '🌾', en: 'whole grains / nature\u2019s power-ups', uk: 'цільні зернові / природні енерго-бустери', explain: "Brown bread, oats, berries, broccoli — real fuel that lasts.", accent: 'mustard' },
              { emoji: '🍰', en: 'sugary treats / treat yourself', uk: 'солодощі / побалувати себе', explain: "Sometimes candy is the answer — just not every single day.", accent: 'terracotta' },
              // From L39: gym
              { emoji: '🏋️', en: 'dumbbells / barbell / treadmill', uk: 'гантелі / штанга / бігова доріжка', explain: "The classic trio: hand weights, big weights, and the running machine.", accent: 'plum' },
              { emoji: '🧘', en: 'yoga mat / stretch', uk: 'килимок / розтягуватись', explain: "The soft floor + the slow reach that saves your muscles.", accent: 'sage' },
              { emoji: '🦵', en: 'squat / plank / do lunges', uk: 'присідання / планка / випади', explain: "The three moves every trainer will make you do in the first minute.", accent: 'terracotta' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Mixed review — Unit 8 words',
                instruction: 'Words from ALL four lessons of Unit 8 are here. Read each scene carefully.',
                questions: [
                  { q: 'Maya\u2019s eating plan has protein, veggies, fruit and whole grains. Her nutritionist calls it a ___ .', options: ['sugary treat', 'balanced diet', 'workout'], correct: 1 },
                  { q: 'Tom cut his finger while cooking. First step: ___ .', options: ['clean the wound', 'apply anti-itch cream', 'take a pill'], correct: 0 },
                  { q: 'Every morning I skip 3 minutes with my ___ before breakfast. Great cardio!', options: ['barbell', 'jump rope', 'yoga mat'], correct: 1 },
                  { q: 'Sofia\u2019s been sneezing all day and her forehead is hot. She has a ___ and a ___ .', options: ['cough drop / plank', 'cold / fever', 'workout / squat'], correct: 1 },
                  { q: 'Anya\u2019s coach told her to eat more chicken and fish for ___ .', options: ['sugary treats', 'lean protein', 'nature\u2019s power-ups'], correct: 1 },
                  { q: 'It\u2019s raining, so we can\u2019t jog outside. Let\u2019s use the ___ at the gym instead.', options: ['punching bag', 'treadmill', 'fitness ball'], correct: 1 },
                  { q: 'A funny video from your best friend can really ___ on a bad day.', options: ['stretch', 'boost your mood', 'clean the wound'], correct: 1 },
                  { q: 'Coach Nick starts every session with 5 minutes of ___ so nobody gets injured.', options: ['squats and lunges', 'warm-up and stretching', 'sugary treats'], correct: 1 },
                  { q: 'Whenever I feel a cold coming, I drink hot tea with honey — a classic ___ .', options: ['warm liquid', 'sugary treat', 'cardio exercise'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Sofia\u2019s wellness journal',
                instruction: "Sofia has been keeping a health journal for a month. Fill in the missing words. Use the word bank — every chip is used once.",
                bank: ['balanced diet', 'stay hydrated', 'workout', 'stretched', 'immunity', 'positive outlook', 'sugary treats', 'plank', 'mental health'],
                questions: [
                  { before: 'Day 1: Started a proper', after: 'plan today. Two glasses of water before breakfast!', answer: 'stay hydrated' },
                  { before: 'Day 5: Did my first real gym', after: '— 20 minutes only, but I\u2019m proud.', answer: 'workout' },
                  { before: 'Day 10: Held a', after: 'for 45 seconds today! Two weeks ago I couldn\u2019t do 15.', answer: 'plank' },
                  { before: 'Day 14: Mum made a', after: 'chart on the fridge — proteins, veggies, fruit, grains. So helpful.', answer: 'balanced diet' },
                  { before: 'Day 18: Cut my', after: 'to twice a week. Weirdly, I don\u2019t even miss them.', answer: 'sugary treats' },
                  { before: 'Day 22: My', after: 'is finally strong — no colds this month at all!', answer: 'immunity' },
                  { before: 'Day 25: Even my mood is different. My', after: 'has never felt better.', answer: 'mental health' },
                  { before: 'Day 28: After every session I', after: 'for at least 5 minutes. My back thanks me.', answer: 'stretched' },
                  { before: 'Day 30: I now have a', after: 'on life. Small habits really do change everything 💛', answer: 'positive outlook' }
                ]
              },
              {
                type: 'match',
                title: 'Match Unit 8 pairs',
                instruction: 'Match each phrase (left) with its logical partner (right) — one topic covers everything from illness to gym.',
                pairs: [
                  { left: 'sore throat', right: 'drink warm liquid with honey' },
                  { left: 'cut on the finger', right: 'clean the wound + apply a bandage' },
                  { left: 'red itchy rash', right: 'apply anti-itch cream' },
                  { left: 'need strong muscles', right: 'lean protein + squats' },
                  { left: 'want cardio', right: 'jump rope or treadmill' },
                  { left: 'stress-relief workout', right: 'punching bag rounds' },
                  { left: 'core workout', right: 'plank + fitness ball' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "This unit\u2019s revision covers THREE grammar patterns from Lessons 36-39. Look at these three sentences from a fitness coach. Each one uses a different pattern. Can you spot them all?",
            taskUk: 'Це повторення охоплює ТРИ граматичні патерни з уроків 36-39. Подивися на три речення від фітнес-тренера — кожне використовує інший патерн. Чи можеш ти їх усі впізнати?',
            sentences: [
              { id: 1, html: '⚖️ <em>You\u2019re <span class="marker">too tired</span> today because you didn\u2019t sleep <span class="marker">enough</span>.</em>' },
              { id: 2, html: '🎯 <em>If you <span class="marker">had trained</span> harder last month, you <span class="marker">would have won</span> that match.</em>' },
              { id: 3, html: '⏳ <em>I <span class="marker">have been</span> to this gym three times this week, and I <span class="marker">have never felt</span> stronger.</em>' }
            ],
            questions: [
              "Sentence 1 uses two little words: TOO and ENOUGH. Where does TOO go — before or after the adjective? What about ENOUGH?",
              "Sentence 2 is a Third Conditional — a regret about the past. What\u2019s the formula?",
              "Sentence 3 uses Present Perfect (have + V3). Why not Past Simple? What do phrases like \"this week\" and \"never\" tell you?",
              "Can you say what each pattern is for? TOO/ENOUGH → ___ . Third Conditional → ___ . Present Perfect → ___ ."
            ]
          },

          grammar: {
            title: 'Grammar Revision: Unit 8 essentials', titleUk: 'Повторення: ключова граматика юніту 8',
            intro: 'This unit gave us <strong>three big grammar tools</strong> — perfect for talking about health, choices, and looking back at what we\u2019ve done. Let\u2019s revise them all in one place.',
            introUk: 'Цей юніт дав нам <em>три великі граматичні інструменти</em> — ідеальні для розмов про здоров\u2019я, вибори та підбиття підсумків. Повторимо всі три в одному місці.',
            blocks: [
              {
                title: 'Conditionals — all 4 types', letter: 'A',
                when: 'four ways to say "if"', whenUk: 'чотири способи сказати «якщо»',
                explain: "Four patterns for four different situations. <strong>Zero</strong> (facts) — <em>If you exercise, you feel good.</em> <strong>First</strong> (real future) — <em>If I go to the gym today, I will feel great.</em> <strong>Second</strong> (imaginary now) — <em>If I had time, I would train every day.</em> <strong>Third</strong> (imaginary past) — <em>If I had trained harder, I would have won.</em>",
                explainUk: "Чотири схеми для чотирьох ситуацій. <em>Zero</em> (факти) — If you exercise, you feel good. <em>First</em> (реальне майбутнє) — If I go, I will feel great. <em>Second</em> (уявне зараз) — If I had time, I would train. <em>Third</em> (уявне минуле) — If I had trained, I would have won.",
                formula: '0: Pres.S + Pres.S &nbsp;·&nbsp; 1: Pres.S + will+V1 &nbsp;·&nbsp; 2: Past.S + would+V1 &nbsp;·&nbsp; 3: had+V3 + would have+V3',
                examples: [
                  { en: "If you eat vegetables every day, you get stronger. (Zero — general truth)", uk: 'Якщо ти їси овочі щодня, ти стаєш сильнішим. (Zero — загальна істина)' },
                  { en: "If it rains tomorrow, I will use the treadmill. (First — real future)", uk: 'Якщо завтра буде дощ, я скористаюся біговою доріжкою. (First — реальне майбутнє)' },
                  { en: "If I had a personal trainer, I would work out daily. (Second — imaginary now)", uk: 'Якби в мене був особистий тренер, я б тренувався щодня. (Second — уявне зараз)' },
                  { en: "If I hadn\u2019t skipped breakfast, I wouldn\u2019t have felt so tired. (Third — imaginary past)", uk: 'Якби я не пропустив сніданок, я б не почувався так втомлено. (Third — уявне минуле)' }
                ]
              },
              {
                title: 'too vs enough', letter: 'B',
                when: 'too much, or just right?', whenUk: 'забагато чи якраз?',
                explain: "<strong>too</strong> = more than we want (a problem). Comes <em>BEFORE</em> the adjective: <em>too heavy, too hot, too tired.</em> <strong>enough</strong> = the right amount. Comes <em>AFTER</em> the adjective: <em>strong enough, tall enough.</em> With <em>not</em> — less than needed: <em>not active enough.</em>",
                explainUk: "<em>too</em> = більше, ніж треба (проблема). Стоїть ПЕРЕД прикметником: too heavy, too tired. <em>enough</em> = саме стільки, скільки треба. Стоїть ПІСЛЯ прикметника: strong enough, tall enough. З <em>not</em> — недостатньо: not active enough.",
                formula: '<em>too</em> + adjective &nbsp;|&nbsp; adjective + <em>enough</em>',
                examples: [
                  { en: "This barbell is too heavy for me right now.", uk: 'Ця штанга для мене зараз занадто важка.' },
                  { en: "After three months of training, I\u2019m strong enough to do a pull-up.", uk: 'Після трьох місяців тренувань я достатньо сильний(-на), щоб підтягнутися.' },
                  { en: "I\u2019m not fit enough to run 5 km yet — but I will be.", uk: 'Я поки що не в достатній формі, щоб пробігти 5 км — але буду.' }
                ]
              },
              {
                title: 'Present Perfect', letter: 'C',
                when: 'past that touches the present', whenUk: 'минуле, що торкається теперішнього',
                explain: "Present Perfect (<em>have/has + V3</em>) is for a PAST action that connects to NOW. Use it for: experience (\"I have tried yoga\"), unfinished time (\"this week\"), results (\"She has broken her arm\"), and just/already/yet. If the time is finished (yesterday, last year) — use Past Simple instead.",
                explainUk: "Present Perfect (<em>have/has + V3</em>) — для МИНУЛОЇ дії, яка звʼязана з ТЕПЕРІШНІМ. Вживаємо для: досвіду («I have tried yoga»), незакінченого часу («this week»), результату («She has broken her arm»), і just/already/yet. Якщо час завершений (yesterday, last year) — то Past Simple.",
                formula: '<em>have / has</em> + V3 (past participle)',
                examples: [
                  { en: "I have been to the gym three times this week. (Unfinished time)", uk: 'Я був у спортзалі тричі цього тижня. (Незавершений час)' },
                  { en: "Have you ever tried a plank? (Life experience)", uk: 'Ти колись пробував(-ла) планку? (Досвід життя)' },
                  { en: "She has just finished her workout. (Recent action)", uk: 'Вона щойно завершила тренування. (Нещодавня дія)' },
                  { en: "I have never felt stronger. (Life experience up to now)", uk: 'Я ніколи не почувався сильнішим. (Досвід до цього моменту)' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Mixed grammar review',
                instruction: 'Grammar from all Unit 8 lessons is mixed here. Choose the correct form.',
                questions: [
                  { q: 'This dumbbell is ___ heavy — I can\u2019t lift it!', options: ['too', 'enough', 'more'], correct: 0 },
                  { q: 'After 6 months of yoga, she\u2019s finally flexible ___ to touch her toes.', options: ['too', 'enough', 'more'], correct: 1 },
                  { q: 'If you ___ regularly, your immunity gets stronger.', options: ['exercise', 'exercised', 'would exercise'], correct: 0 },
                  { q: 'If I ___ time tomorrow, I will go for a long walk.', options: ['have', 'had', 'had had'], correct: 0 },
                  { q: 'If I ___ a swimming pool at home, I would swim every day!', options: ['have', 'had', 'would have'], correct: 1 },
                  { q: 'If I ___ that yoga class last month, I would have started earlier.', options: ['tried', 'had tried', 'would have tried'], correct: 1 },
                  { q: 'I ___ to this gym three times this week. Never missed one.', options: ['went', 'have been', 'was going'], correct: 1 },
                  { q: 'Have you ___ tried a plank? It\u2019s harder than it looks!', options: ['ever', 'yet', 'yesterday'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Put the verb / word in the right form',
                instruction: 'This mixes all three grammar tools of Unit 8. Read each sentence carefully!',
                questions: [
                  { before: 'If you drink 2 litres of water a day, you', after: '(stay) hydrated. Simple.', answer: 'stay', hint: 'Zero: general truth' },
                  { before: 'If Sofia', after: '(sleep) 8 hours tonight, she will feel amazing tomorrow.', answer: 'sleeps', hint: 'First: real future' },
                  { before: 'If I', after: '(be) taller, I would try basketball.', answer: 'were', hint: 'Second: imaginary now (were!)' },
                  { before: 'If we', after: '(warm up) before the game, we wouldn\u2019t have gotten injured.', answer: 'had warmed up', hint: 'Third: imaginary past' },
                  { before: 'This coffee is', after: 'hot — I burnt my tongue!', answer: 'too', hint: 'before adjective' },
                  { before: 'After 3 months of training, I\u2019m finally strong', after: 'to do 10 push-ups.', answer: 'enough', hint: 'after adjective' },
                  { before: 'I', after: '(never / try) yoga before, but I\u2019m curious.', answer: "have never tried", hint: 'Present Perfect: life experience' },
                  { before: 'She', after: '(just / finish) her plank — 90 seconds!', answer: "has just finished", hint: 'Present Perfect: recent action' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural one.',
                questions: [
                  { q: 'Real plan for tomorrow:', options: ['If I will finish my homework, I will go to the gym.', 'If I finish my homework, I will go to the gym.'], correct: 1 },
                  { q: 'Life experience:', options: ['I have tried yoga last year.', 'I tried yoga last year.'], correct: 1 },
                  { q: 'This week — unfinished time:', options: ['I went to the gym three times this week.', 'I have been to the gym three times this week.'], correct: 1 },
                  { q: 'Regret about the past:', options: ['If I trained more, I would win.', 'If I had trained more, I would have won.'], correct: 1 },
                  { q: 'A backpack is heavy:', options: ['This bag is heavy too for me.', 'This bag is too heavy for me.'], correct: 1 },
                  { q: 'Not big enough to do it:', options: ['She\u2019s not enough tall to reach the shelf.', 'She\u2019s not tall enough to reach the shelf.'], correct: 1 },
                  { q: 'A general truth about training:', options: ['If you don\u2019t stretch, your muscles hurt.', 'If you wouldn\u2019t stretch, your muscles would hurt.'], correct: 0 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '📔',
            textTitle: "Maya\u2019s 30-day fitness journal — last entry",
            text: [
              "Day 30. Thirty. Whole. Days. I still can\u2019t believe I actually stuck with this challenge, but here I am — writing my last journal entry with a smoothie in one hand and no regrets in the other.",
              "When I started, I was too tired to even walk up the stairs at school. Not strong enough for one push-up. Not confident enough to walk into a gym. If you had told me on Day 1 that in 30 days I would run 3 kilometres without stopping, I would have laughed at you.",
              "The first week was hard. If I hadn\u2019t had Sofia texting me every morning \u201cGET UP!\u201d, I would have quit by Wednesday. But Sofia has been my hype-girl through EVERY workout, and I\u2019m so grateful.",
              "By Day 10, I noticed something weird: I had more energy. I hadn\u2019t caught a single cold. My immunity was stronger. And — this is embarrassing — I actually started enjoying salads. WHO AM I.",
              "Week 3 was gym week. Coach Nick introduced me to dumbbells, the treadmill, and my new nemesis — the plank. On Day 20, I held a plank for 60 seconds. My legs were shaking. My stomach was burning. My soul was flying.",
              "I\u2019ve tried ten new healthy recipes. I\u2019ve done more squats than I can count. I\u2019ve stretched every muscle in my body. I\u2019ve even started snacking on almonds instead of chips.",
              "And I\u2019ve realised something big. If I had started this a year ago, I would have felt this good for a year already. That\u2019s the only regret I have. But the good news? I\u2019m starting NOW. The next 30 days start tomorrow.",
              "Mum read this last night and cried. \u201cIf your grandma could see you now,\u201d she said. That made me cry too.",
              "Rule of the month, from Coach Nick: \u201cIf you take care of your body, your body takes care of you.\u201d It\u2019s Zero Conditional. It\u2019s always true. And now I finally get it."
            ],
            questions: [
              { q: 'How does Maya describe herself on Day 1?', options: ['Strong and confident', 'Too tired and not strong enough', 'Ready and excited'], correct: 1 },
              { q: 'What conditional does Maya use to imagine what you would have said on Day 1? "If you had told me... I would have laughed."', options: ['Zero', 'First', 'Third'], correct: 2 },
              { q: 'Who kept Maya motivated during the first hard week?', options: ['Her coach Nick', 'Her mum', 'Her friend Sofia'], correct: 2 },
              { q: 'What did Maya notice by Day 10?', options: ['She was too tired', 'She had more energy and stronger immunity', 'She hated salads'], correct: 1 },
              { q: 'What was Maya\u2019s "new nemesis" at the gym?', options: ['The treadmill', 'The plank', 'The dumbbells'], correct: 1 },
              { q: 'What is Maya\u2019s only regret?', options: ['That she didn\u2019t start earlier', 'That she gave up snacks', 'That she cried'], correct: 0 },
              { q: 'What is Coach Nick\u2019s "rule of the month" using?', options: ['Third Conditional', 'Zero Conditional', 'Present Perfect'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Tell us: what have you actually done for your health this MONTH? Try to use Present Perfect at least 3 times.",
              "Complete this sentence: \u201cIf I had started exercising a year ago, I ___.\u201d (Third Conditional)",
              "What\u2019s ONE gym exercise you\u2019re NOT strong enough for yet — but you WILL be? (Use too / enough.)",
              "Pretend you\u2019re giving advice to a younger cousin about health. Give 3 GENERAL truths using Zero Conditional.",
              "If you could magically be perfectly fit tomorrow, what would you do with your new body? (Second Conditional)",
              "What\u2019s the WORST health mistake you\u2019ve ever made? What did you learn from it?",
              "Look back at Unit 8: what surprised you the most? Was there a topic you thought was boring but ended up loving? Or the opposite?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "We revised ALL the vocabulary from Unit 8: healthy habits (L36), problems and treatments (L37), healthy eating (L38), and gym equipment/exercises (L39).",
              "We revised three grammar tools that give you superpowers:",
              "Conditionals (all 4 types) → for facts, real futures, imaginary present, and regrets about the past.",
              "too + adjective (too heavy) / adjective + enough (strong enough) → to talk about \"more than we want\" or \"the right amount\".",
              "Present Perfect (have/has + V3) → for a past action with a connection to NOW: experience, unfinished time, recent actions.",
              "Big takeaway from Unit 8: you now have words AND grammar to talk about health, food and fitness like a real 10–12 year old — not like a textbook 😉"
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '"If I ___ more sleep last night, I wouldn\u2019t feel so tired now." Which form?', options: ['had', 'had had', 'would have had'], correct: 1 },
                { q: '"This backpack is ___ heavy for a 10-year-old!" Which word?', options: ['too', 'enough', 'more'], correct: 0 },
                { q: '"I ___ tried yoga before, but I want to start now." Which form?', options: ['never', 'have never', 'never have'], correct: 1 }
              ]
            }
          },
          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My Unit 8 story',
              task: "Write a short story or diary entry (<strong>6–8 sentences</strong>) using EVERYTHING you learned in Unit 8. Include: <strong>at least 5 words</strong> from the unit (any of health / food / gym), <strong>1 conditional</strong>, <strong>1 too/enough</strong> phrase, and <strong>1 Present Perfect</strong> sentence. Can be about your real month, or completely made-up!",
              taskUk: 'Напиши коротку розповідь або щоденник (6–8 речень) з УСІМ, що ти вивчив(-ла) у юніті 8. Включи щонайменше 5 слів, 1 conditional, 1 фразу з too/enough і 1 речення в Present Perfect.',
              tip: 'Recipe: 1 truth about you now → 1 recent achievement → 1 dream → 1 regret. Done!'
            },
            speaking: {
              title: '90-second Unit 8 wrap-up',
              task: "Record a <strong>90-second reflection</strong> answering: What was the MOST useful thing you learned in Unit 8? What has changed for you? What are you going to do next? Use at least <strong>2 different conditionals</strong>, <strong>1 too/enough</strong>, and <strong>2 Present Perfect</strong> sentences.",
              taskUk: 'Запиши 90-секундну рефлексію на тему: Що було найкориснішим у юніті 8? Що змінилося? Що плануєш робити далі? Використай щонайменше 2 різні conditional, 1 фразу з too/enough і 2 речення в Present Perfect.',
              tip: 'Be honest about what worked and what didn\u2019t — real reflections are always more interesting.'
            }
          }
        }

      ]
    },

    /* ═══════════════════════════════════════════════════════════
     * UNIT 9 · Social Media and Digital Balance
     * ═══════════════════════════════════════════════════════════ */
    {
      id: 'unit-9',
      number: 9,
      title: 'Social Media and Digital Balance',
      subtitle: 'Соцмережі та цифровий баланс',
      lessons: [

        /* ═══════════════════════════════════════════════════════
         * LESSON 41 · The impact of social media
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u9-l41', number: 41,
          title: 'The impact of social media', titleUk: 'Вплив соціальних мереж',
          type: 'Vocabulary', tags: ['social-media', 'digital', 'both-either-neither', 'online'],
          updated: 'today', accent: 'sky', current: true,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '📱', en: "What's the FIRST app you check when you wake up? And be honest — is that a good habit or a bit of a problem?", uk: 'Який додаток ти перевіряєш ПЕРШИМ після пробудження? І чесно — це хороша звичка чи трохи проблема?' },
              { emoji: '⏱️', en: "How many hours a day do you think you spend on social media? Guess first, then check your phone\u2019s screen-time report. Any surprises?", uk: 'Скільки годин на день, як ти думаєш, ти проводиш у соцмережах? Спочатку вгадай, потім перевір статистику. Є сюрпризи?' },
              { emoji: '🌟', en: "If you could uninvent ONE social media platform forever, which one would it be? Why? What would replace it?", uk: 'Якби ти міг(-ла) назавжди «стерти» одну соцмережу з існування, яку б обрав(-ла)? Чому? Що прийшло б натомість?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "Welcome to Unit 9! We\u2019re starting a topic that touches your life every single day — social media. Before we can talk about how it changes us (for better or worse), we need the right words. Here are 10 essentials that show up in every conversation about the online world.",
            introUk: 'Вітаємо в юніті 9! Ми починаємо тему, яка стосується твого життя щодня — соцмережі. Перед тим як говорити, як вони змінюють нас (на краще чи на гірше), потрібні правильні слова. Ось 10 обов\u2019язкових виразів, які зустрічаються в кожній розмові про онлайн-світ.',
            items: [
              { emoji: '🌐', en: 'online platforms', uk: 'онлайн-платформи', explain: "The apps and websites where people meet, share and chat — Instagram, TikTok, YouTube, Discord.", accent: 'sky' },
              { emoji: '💻', en: 'digital world', uk: 'цифровий світ', explain: "Everything that lives on screens: apps, games, websites, videos, chats. Half our lives are here now.", accent: 'plum' },
              { emoji: '💬', en: 'online engagement', uk: 'онлайн-взаємодія', explain: "When people comment, like, share, or reply — the whole \u201clet\u2019s talk about this\u201d energy on the internet.", accent: 'terracotta' },
              { emoji: '🎓', en: 'online learning', uk: 'онлайн-навчання', explain: "Studying through the internet — video lessons, courses, tutorials on YouTube, apps like Duolingo.", accent: 'sage' },
              { emoji: '📈', en: 'online trends', uk: 'онлайн-тренди', explain: "The dances, songs, memes or challenges that suddenly EVERYONE is doing — for a week, then gone.", accent: 'mustard' },
              { emoji: '📤', en: 'post / share', uk: 'публікувати / ділитися', explain: "To upload a photo, video or thought to your profile so friends (or the whole world) can see it.", accent: 'terracotta' },
              { emoji: '🔗', en: 'stay connected', uk: 'залишатися на зв\u2019язку', explain: "To keep in contact with friends, family or classmates — through messages, calls, or scrolling their posts.", accent: 'sage' },
              { emoji: '📶', en: 'internet connection', uk: 'інтернет-з\u2019єднання', explain: "The signal that lets your phone or laptop go online. When it\u2019s slow — everyone in the house suffers.", accent: 'sky' },
              { emoji: '👤', en: 'username', uk: 'нікнейм / ім\u2019я користувача', explain: "The name you choose for your account. It\u2019s how everyone finds and tags you online.", accent: 'plum' },
              { emoji: '🔐', en: 'password', uk: 'пароль', explain: "The secret code that keeps your account safe. Rule #1: never share it. Rule #2: don\u2019t use \u201c12345\u201d.", accent: 'mustard' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right word for each situation',
                instruction: 'Read each mini-story. Which vocabulary word or phrase fits best?',
                questions: [
                  { q: 'Anya just uploaded a photo of her cat to Instagram. She just ___ it.', options: ['downloaded', 'posted', 'saved'], correct: 1 },
                  { q: 'Tom can\u2019t log in to his account. He forgot his ___ .', options: ['username', 'password', 'engagement'], correct: 1 },
                  { q: 'TikTok, Instagram, YouTube — all of these are ___ .', options: ['digital worlds', 'online platforms', 'online trends'], correct: 1 },
                  { q: 'The Wi-Fi in the café is really slow. The ___ is terrible today.', options: ['online trend', 'internet connection', 'digital world'], correct: 1 },
                  { q: 'This week EVERYONE is doing the same dance in videos. It\u2019s a huge ___ .', options: ['online trend', 'online platform', 'online engagement'], correct: 0 },
                  { q: 'Maria lives in Poland, but she talks with her cousins in Ukraine every day. Social media helps her ___ .', options: ['stay connected', 'post and share', 'log out'], correct: 0 },
                  { q: 'When Nick chose the name \u201cSpaceCat42\u201d for TikTok, that became his ___ .', options: ['password', 'username', 'engagement'], correct: 1 },
                  { q: 'Sofia\u2019s new video got 500 comments and 3000 likes. That\u2019s a lot of ___ .', options: ['online learning', 'online engagement', 'internet connection'], correct: 1 },
                  { q: 'During lockdown, most kids started studying through Zoom. It was pure ___ .', options: ['online learning', 'online engagement', 'online trends'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete Lena\u2019s blog post',
                instruction: 'Lena is writing about her first week on Instagram. Fill in the missing words. Every chip is used exactly once.',
                bank: ['digital world', 'stay connected', 'post', 'internet connection', 'online trends', 'username', 'password', 'online engagement'],
                questions: [
                  { before: 'This is my first blog about the', after: '. I finally made my Instagram account last Monday!', answer: 'digital world' },
                  { before: 'Choosing my', after: 'was HARDER than my geography test. In the end: @lenaloves.books.', answer: 'username' },
                  { before: 'Mum made me write down my', after: 'in three places so I wouldn\u2019t forget it. Smart move.', answer: 'password' },
                  { before: 'My first', after: 'was a photo of my dog reading a book. Yes, reading.', answer: 'post' },
                  { before: 'I honestly didn\u2019t expect any', after: '— but 47 comments in one day? WHAT?', answer: 'online engagement' },
                  { before: 'Now I follow the funniest', after: '— cats doing weird stuff, teen fashion, dance moves.', answer: 'online trends' },
                  { before: 'The best part: I can', after: 'with my grandma in Lviv every single evening.', answer: 'stay connected' },
                  { before: 'The worst part: when the', after: 'is slow, my whole soul suffers.', answer: 'internet connection' }
                ]
              },
              {
                type: 'match',
                title: 'Match the noun with what it does',
                instruction: 'Each word on the left goes with what people DO with it on the right.',
                pairs: [
                  { left: 'a password', right: 'keep it secret and safe' },
                  { left: 'a username', right: 'choose it and tell your friends' },
                  { left: 'a photo or video', right: 'post it and share it' },
                  { left: 'an online trend', right: 'follow it or make your own' },
                  { left: 'an online platform', right: 'create an account and log in' },
                  { left: 'internet connection', right: 'check if the Wi-Fi works' },
                  { left: 'friends abroad', right: 'stay connected through chats' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "Read these three tiny dialogues about picking a social media platform. Each sentence uses one of three little words: BOTH, EITHER, or NEITHER. Can you spot the pattern?",
            taskUk: 'Прочитай три маленькі діалоги про вибір соцмережі. Кожне речення використовує одне з трьох слівець: BOTH, EITHER або NEITHER. Чи можеш ти вловити закономірність?',
            sentences: [
              { id: 1, html: '💬 <em>Anya: \u201cI love <span class="marker">both</span> TikTok <span class="marker">and</span> Instagram — I can\u2019t choose one!\u201d</em>' },
              { id: 2, html: '💬 <em>Nick: \u201cYou can post the video on <span class="marker">either</span> TikTok <span class="marker">or</span> YouTube — <span class="marker">either</span> works fine.\u201d</em>' },
              { id: 3, html: '💬 <em>Sofia: \u201cHonestly? <span class="marker">Neither</span> TikTok <span class="marker">nor</span> Instagram is safe for little kids.\u201d</em>' }
            ],
            questions: [
              "Anya\u2019s sentence has BOTH ___ AND ___. Is she saying yes to one, or yes to two?",
              "Nick\u2019s sentence has EITHER ___ OR ___. Does he care which one you pick? Is the answer positive or a choice?",
              "Sofia\u2019s sentence has NEITHER ___ NOR ___. Look at her verb: is it positive or negative? What is she saying about BOTH options?",
              "In one word each: BOTH = ___ (yes, plus). EITHER = ___ (or). NEITHER = ___ (no, minus). Got it?"
            ]
          },

          grammar: {
            title: 'Both / Either / Neither', titleUk: 'Both / Either / Neither',
            intro: "These are the <strong>three little words that talk about TWO things at once</strong>. They live in the same family and they follow a very clear pattern. Once you get the difference, you\u2019ll use them all the time — for choosing platforms, comparing friends, describing options, or refusing both alternatives.",
            introUk: 'Це <em>три маленькі слівця, які говорять про ДВІ речі одночасно</em>. Вони з однієї сім\u2019ї і мають дуже чітку логіку. Щойно зрозумієш різницю — використовуватимеш їх щоразу: обираючи платформи, порівнюючи друзів, описуючи варіанти або відхиляючи обидва.',
            blocks: [
              {
                title: 'BOTH — the "yes to two" word', letter: 'A',
                when: 'saying YES to two things', whenUk: 'сказати ТАК до двох',
                explain: "Use <strong>both</strong> when you like/have/agree with <em>TWO things together</em>. The verb is <strong>positive</strong> and usually <strong>plural</strong> (because two = plural). Structure: <em>both + noun (plural)</em>, or <em>both + A + and + B</em>, or just <em>both of us / them / you</em>.",
                explainUk: "Вживай <em>both</em>, коли тобі подобаються / у тебе є / ти погоджуєшся з ДВОМА речами. Дієслово — <strong>позитивне</strong> і зазвичай у <strong>множині</strong> (бо два = множина). Схеми: <em>both + іменник (мн.)</em>, <em>both + A + and + B</em>, або просто <em>both of us / them</em>.",
                formula: '<em>both</em> + noun(pl.) &nbsp;|&nbsp; <em>both</em> + A + <em>and</em> + B &nbsp;|&nbsp; <em>both of</em> + us/them/you',
                examples: [
                  { en: "Both platforms are useful for learning English.", uk: 'Обидві платформи корисні для вивчення англійської.' },
                  { en: "I like both TikTok and Instagram — I use them every day.", uk: 'Мені подобаються і TikTok, і Instagram — я користуюся ними щодня.' },
                  { en: "Both of my parents check my screen time on weekends.", uk: 'Обидва мої батьки перевіряють мій екранний час на вихідних.' },
                  { en: "Anya and Nick are both fluent in three languages.", uk: 'Аня і Нік — обидва вільно володіють трьома мовами.' }
                ]
              },
              {
                title: 'EITHER — the "or, whichever" word', letter: 'B',
                when: 'offering a choice between two', whenUk: 'запропонувати вибір з двох',
                explain: "Use <strong>either</strong> when you talk about <em>ONE of TWO options</em> — it doesn\u2019t matter which. Structure: <em>either + A + or + B</em>, or just <em>either of them</em>. The verb is <strong>usually singular</strong>: <em>either app <u>is</u> fine</em> (not <em>are</em>). \u2192 With <em>not</em>: <strong>not either = neither</strong>.",
                explainUk: "Вживай <em>either</em>, коли говориш про ОДИН із ДВОХ варіантів — байдуже, який. Схеми: <em>either + A + or + B</em>, або <em>either of them</em>. Дієслово — <strong>зазвичай в однині</strong>: <em>either app <u>is</u> fine</em> (не <em>are</em>). \u2192 З <em>not</em>: <strong>not either = neither</strong>.",
                formula: '<em>either</em> + A + <em>or</em> + B &nbsp;|&nbsp; <em>either of</em> + us/them &nbsp;|&nbsp; <em>either</em> + noun(sg.)',
                examples: [
                  { en: "You can share the photo on either Instagram or Facebook.", uk: 'Ти можеш поділитися фото або в Instagram, або у Facebook.' },
                  { en: "\u201cWhich platform do you prefer?\u201d — \u201cEither is fine, honestly.\u201d", uk: '«Яку платформу ти обираєш?» — «Будь-яка з них, чесно.»' },
                  { en: "I don\u2019t need either of these apps — I already have enough.", uk: 'Мені не потрібен жоден з цих додатків — у мене вже досить.' },
                  { en: "Either username is available — pick your favourite.", uk: 'Обидва ніки вільні — обирай, який більше подобається.' }
                ]
              },
              {
                title: 'NEITHER — the "no to two" word', letter: 'C',
                when: 'saying NO to two things', whenUk: 'сказати НІ до двох',
                explain: "Use <strong>neither</strong> when the answer is <em>NO to both</em>. Key trick: the verb is <strong>POSITIVE</strong> (not negative) — because \u201cneither\u201d already carries the \u201cno\u201d inside it. Structure: <em>neither + A + nor + B</em>, or <em>neither of them</em>. Verb usually <strong>singular</strong>: <em>neither app <u>is</u> safe</em>.",
                explainUk: "Вживай <em>neither</em>, коли відповідь — НІ до обох. Головна фішка: дієслово <strong>ПОЗИТИВНЕ</strong> (не з <em>not</em>) — бо саме слово <em>neither</em> вже містить «ні» в собі. Схеми: <em>neither + A + nor + B</em>, або <em>neither of them</em>. Дієслово — переважно <strong>в однині</strong>: <em>neither app <u>is</u> safe</em>.",
                formula: '<em>neither</em> + A + <em>nor</em> + B &nbsp;|&nbsp; <em>neither of</em> + us/them &nbsp;|&nbsp; <em>neither</em> + noun(sg.)',
                examples: [
                  { en: "Neither TikTok nor Snapchat is a good place for a 6-year-old.", uk: 'Ані TikTok, ані Snapchat — не місце для 6-річного.' },
                  { en: "\u201cCoffee or tea?\u201d — \u201cNeither, thanks. Just water.\u201d", uk: '«Кава чи чай?» — «Ні те, ні те, дякую. Просто воду.»' },
                  { en: "Neither of my parents uses Instagram — they think it\u2019s just for teens.", uk: 'Ніхто з моїх батьків не користується Instagram — вони вважають, що це для підлітків.' },
                  { en: "I have two phones and neither of them has enough storage today.", uk: 'У мене два телефони, і в жодного з них сьогодні немає достатньо пам\u2019яті.' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Both, either, or neither?',
                instruction: 'Choose the word that fits each sentence.',
                questions: [
                  { q: '___ my sister and I have Instagram accounts.', options: ['Both', 'Either', 'Neither'], correct: 0 },
                  { q: 'You can call me on ___ my phone or my laptop.', options: ['both', 'either', 'neither'], correct: 1 },
                  { q: '___ TikTok nor Facebook is my favourite — I prefer YouTube.', options: ['Both', 'Either', 'Neither'], correct: 2 },
                  { q: 'I love ___ Marvel movies AND Star Wars — don\u2019t make me choose.', options: ['both', 'either', 'neither'], correct: 0 },
                  { q: '\u201cWhich username sounds cooler?\u201d — \u201c___ is great, actually.\u201d', options: ['Both', 'Either', 'Neither'], correct: 1 },
                  { q: '___ of my grandparents uses social media. They just call.', options: ['Both', 'Either', 'Neither'], correct: 2 },
                  { q: 'Anya\u2019s new post got likes from ___ friends and strangers.', options: ['both', 'either', 'neither'], correct: 0 },
                  { q: '\u201cCoffee or tea after class?\u201d — \u201c___, thanks. I just want water.\u201d', options: ['Both', 'Either', 'Neither'], correct: 2 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete with both / either / neither (+ and/or/nor)',
                instruction: "Write both + and, either + or, or neither + nor. Sometimes you'll need to change both words, sometimes just one.",
                questions: [
                  { before: '', after: 'my brother ___ my sister has TikTok. My parents said no.', answer: 'Neither / nor', hint: 'saying NO to both' },
                  { before: 'You can log in with ___ your email ___ your phone number — both work.', after: '', answer: 'either / or', hint: 'a choice between two, either works' },
                  { before: '', after: 'Anya ___ Sofia won the video challenge — they got the same score!', answer: 'Both / and', hint: 'yes to two people' },
                  { before: 'The Wi-Fi is broken. I can\u2019t use ___ my laptop ___ my phone right now.', after: '', answer: 'either / or', hint: 'with NOT — becomes negative' },
                  { before: 'I follow ___ chefs ___ dancers on Instagram — variety is the spice of life!', after: '', answer: 'both / and', hint: 'positive, two things together' },
                  { before: 'This café has terrible internet. ___ the Wi-Fi ___ the mobile signal is working.', after: '', answer: 'Neither / nor', hint: 'NO to both, verb positive' },
                  { before: '\u201cCake or ice cream?\u201d I\u2019ll take ___! Why choose?', after: '', answer: 'both', hint: 'saying YES to both' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the natural one.',
                questions: [
                  { q: 'Saying yes to two:', options: ['Both TikTok and Instagram is fun.', 'Both TikTok and Instagram are fun.'], correct: 1 },
                  { q: 'Saying no to two:', options: ['Neither of my friends don\u2019t use Snapchat.', 'Neither of my friends uses Snapchat.'], correct: 1 },
                  { q: 'A choice between two:', options: ['Either app work fine.', 'Either app works fine.'], correct: 1 },
                  { q: 'Refusing both options:', options: ['Neither the coffee nor the tea is fresh.', 'Neither the coffee nor the tea are fresh.'], correct: 0 },
                  { q: 'Saying yes to two friends:', options: ['Both of us love online learning.', 'Both of us loves online learning.'], correct: 0 },
                  { q: 'Not caring which platform:', options: ['You can post on either TikTok or Instagram.', 'You can post on both TikTok or Instagram.'], correct: 0 },
                  { q: 'Refusing both offers:', options: ['I don\u2019t want neither cake nor ice cream.', 'I want neither cake nor ice cream.'], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '📱',
            textTitle: 'Nick\u2019s 7 days without social media',
            text: [
              "Last week, I did something my friends thought was impossible: I deleted every social media app from my phone. Instagram, TikTok, Snapchat — all gone. My parents didn\u2019t force me. I did it myself. And these 7 days changed how I think about the digital world.",
              "Day 1 was awful. Every 15 minutes I picked up my phone, opened where TikTok used to be, and stared at an empty screen. My thumb had a memory of its own. I felt like I was missing something huge. Neither my books nor my homework could hold my attention.",
              "Day 2 was even worse. My friends were sharing videos in our group chat — jokes I couldn\u2019t see, trends I couldn\u2019t follow. I felt disconnected from both my classmates AND the world. \u201cAm I becoming boring?\u201d I asked my sister. She laughed.",
              "By Day 3, something started to shift. I read 40 pages of a book. Real pages. I called my grandma for the first time in three months. Turns out she\u2019s hilarious.",
              "Day 4: I went for a walk without my phone. Just… a walk. I noticed things. Trees. A cat. A tiny café I\u2019d never seen even though it\u2019s two blocks from my school. Either I had been walking with my eyes glued to a screen, or I had just stopped looking.",
              "Day 5: I did my English homework in 40 minutes instead of 3 hours. Turns out, when you\u2019re not checking your phone every 90 seconds, you actually finish things.",
              "Day 6: My sleep changed. I went to bed at 22:30 instead of 01:00 because there was nothing to scroll. I woke up at 7 without an alarm. My brain felt lighter.",
              "Day 7: I decided the experiment was over. I downloaded Instagram again — and stopped after 15 minutes. It felt too fast. Too loud. Too much.",
              "Both my week and my brain feel different now. I still use social media, but for 30 minutes a day. Not more. And every Sunday, I do one no-phone day.",
              "Neither the platforms nor the apps are evil. But they\u2019re designed to eat your time. And I want my time back."
            ],
            questions: [
              { q: 'How many social media apps did Nick delete?', options: ['Just one (TikTok)', 'All of them (Instagram, TikTok, Snapchat)', 'Only Instagram and Snapchat'], correct: 1 },
              { q: 'Why did he do it?', options: ['His parents made him', 'It was his own decision', 'It was a school project'], correct: 1 },
              { q: 'What did Nick feel on Day 1?', options: ['Free and happy', 'Like he was missing something', 'Angry at his parents'], correct: 1 },
              { q: 'What good thing happened on Day 3?', options: ['He got a new phone', 'He read 40 pages of a book', 'He posted a viral video'], correct: 1 },
              { q: 'What did Nick discover on his Day 4 walk?', options: ['Nothing interesting', 'A café near his school he had never noticed', 'A new social media app'], correct: 1 },
              { q: 'How did his sleep change?', options: ['He slept less', 'He went to bed earlier and woke up rested', 'He couldn\u2019t sleep at all'], correct: 1 },
              { q: 'What is Nick\u2019s conclusion about social media?', options: ['It is evil and everyone should quit', 'The apps are not evil, but they eat too much time', 'It is completely fine to use all day'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Which two social media platforms do you use most? Answer using \u201cBoth ___ and ___\u201d.",
              "Name two apps you personally could delete tomorrow with zero regret. Use \u201cNeither ___ nor ___ is important to me\u201d.",
              "Your friend asks: \u201cShould I post the video on TikTok or Instagram?\u201d Answer using \u201cEither ___ or ___\u201d.",
              "Do BOTH your parents allow you to use social media freely? Explain the rules at home.",
              "Complete: \u201cNeither TikTok nor Instagram would exist if ___.\u201d Be creative!",
              "What are TWO good sides AND TWO bad sides of online learning? Use \u201cboth\u201d at least once in your answer.",
              "If you could invent a new online platform for teens, what would it be? Would it focus on staying connected, learning, or something totally new?"
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "10 essential words for talking about social media: online platforms, digital world, online engagement, online learning, online trends, post/share, stay connected, internet connection, username, password.",
              "Three little \u201ctwo-thing\u201d words that follow one clean pattern:",
              "BOTH + AND — YES to two things. Verb is positive and plural. \u201cBoth apps are fun.\u201d",
              "EITHER + OR — a choice between two. Verb is usually singular. \u201cEither app is fine.\u201d",
              "NEITHER + NOR — NO to both. Verb is positive (not negative!) and usually singular. \u201cNeither app is safe.\u201d",
              "Big idea from the reading: technology isn\u2019t evil, but it\u2019s designed to grab your time. Small daily limits (like 30 minutes) can change everything."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '\u201cI love ___ pizza AND pasta.\u201d Which word?', options: ['both', 'either', 'neither'], correct: 0 },
                { q: '\u201c___ of my friends has TikTok. They all use Discord instead.\u201d Which word?', options: ['Both', 'Either', 'Neither'], correct: 2 },
                { q: '\u201cYou can pay with ___ cash ___ card.\u201d Which pair?', options: ['both / and', 'either / or', 'neither / nor'], correct: 1 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My online life — 6 sentences',
              task: "Write <strong>6 sentences</strong> about your relationship with social media. You MUST include: <strong>at least 5 words</strong> from the vocabulary of this lesson, <strong>1 sentence with BOTH ___ AND ___</strong>, <strong>1 with EITHER ___ OR ___</strong>, and <strong>1 with NEITHER ___ NOR ___</strong>. Be honest — even embarrassing habits are great material!",
              taskUk: 'Напиши 6 речень про свої стосунки з соцмережами. Обов\u2019язково включи: щонайменше 5 слів зі словника цього уроку, 1 речення з BOTH ___ AND ___, 1 з EITHER ___ OR ___, і 1 з NEITHER ___ NOR ___. Будь відвертим — навіть смішні звички — це чудовий матеріал!',
              tip: 'Formula: 2 sentences about platforms you use → 1 about platforms you don\u2019t → 1 about connection/learning → 1 about a habit → 1 about the future.'
            },
            speaking: {
              title: '60-second reflection',
              task: "Record a <strong>60-second answer</strong> to this question: \u201cIf you had to give up EITHER TikTok OR Instagram forever, which would you choose and why?\u201d Use <strong>at least 3 different vocabulary words</strong> from the lesson and <strong>at least 2 of these three: both / either / neither</strong>.",
              taskUk: 'Запиши 60-секундну відповідь на питання: «Якби ти мав(-ла) відмовитися АБО від TikTok, АБО від Instagram назавжди — що обереш і чому?» Використай щонайменше 3 різні слова зі словника уроку і щонайменше 2 з трьох: both / either / neither.',
              tip: 'Speak like you\u2019re telling a friend, not writing an essay. Real thoughts always sound better.'
            }
          }
        },

        /* ═══════════════════════════════════════════════════════
         * LESSON 42 · Finding balance
         * ═══════════════════════════════════════════════════════ */
        {
          id: 'u9-l42', number: 42,
          title: 'Finding balance', titleUk: 'Знаходження балансу',
          type: 'Vocabulary', tags: ['digital-balance', 'offline', 'purpose-reason', 'wellness'],
          updated: 'today', accent: 'sage', current: false,
          pptUrl: null, notesUrl: null,

          warmUp: {
            title: 'Warm-Up', titleUk: 'Розігрів',
            questions: [
              { emoji: '⚖️', en: "In one word: what does BALANCE mean to you? Is your life right now balanced, or leaning too much to one side (school? screens? sleep?)?", uk: 'Одним словом: що для тебе БАЛАНС? Чи твоє життя зараз збалансоване, чи занадто нахилене в один бік (школа? екрани? сон?)?' },
              { emoji: '📵', en: "When was the last time you spent a WHOLE day without your phone? What did you do instead? How did it feel — freeing or scary?", uk: 'Коли востаннє ти провів(-ла) ЦІЛИЙ день без телефону? Що робив(-ла) натомість? Як почувався(-лась) — вільно чи лячно?' },
              { emoji: '🌳', en: "Name your favourite OFFLINE hobby — something that has nothing to do with a screen. Why do you love it? What does it give you that scrolling can\u2019t?", uk: 'Назви свій улюблений ОФЛАЙН-хобі — те, що не має нічого спільного з екраном. Чому ти його любиш? Що воно дає, чого не може дати скролінг?' }
            ]
          },

          vocabPresentation: {
            title: 'Vocabulary Presentation', titleUk: 'Презентація словника',
            intro: "In the last lesson, we talked about what social media DOES to us. Today\u2019s vocabulary is the answer: 6 words about stepping AWAY from screens and building a real, balanced life. These words come up in every conversation about wellness, mental health, and healthy digital habits.",
            introUk: 'На минулому уроці ми говорили про те, як соцмережі впливають на нас. Сьогоднішня лексика — це відповідь: 6 слів про те, як ВІДХОДИТИ від екранів і будувати справжнє, збалансоване життя. Ці вирази з\u2019являються в кожній розмові про wellness, психічне здоров\u2019я та здорові цифрові звички.',
            items: [
              { emoji: '🎨', en: 'offline activity', uk: 'офлайн-заняття', explain: "Anything you do WITHOUT a screen — reading a book, cooking, drawing, playing football. Real life stuff.", accent: 'sage' },
              { emoji: '👥', en: 'social interactions', uk: 'соціальна взаємодія', explain: "Face-to-face conversations with real people — chatting with friends, family dinners, meeting classmates.", accent: 'terracotta' },
              { emoji: '🎯', en: 'leisure activities', uk: 'дозвілля / хобі', explain: "The fun things you do in your free time for pleasure, not for school or work — sports, art, gaming, board games.", accent: 'mustard' },
              { emoji: '🔌', en: 'disconnecting', uk: 'відключатися (від онлайну)', explain: "The act of stepping AWAY from apps, notifications and the internet — turning off, tuning out.", accent: 'plum' },
              { emoji: '🌱', en: 'digital detox', uk: 'цифровий детокс', explain: "A short break from ALL screens (like a weekend or a week) to reset your brain and mood.", accent: 'sage' },
              { emoji: '☕', en: 'take a break', uk: 'зробити перерву', explain: "To stop for a moment and rest — even 10 minutes helps. Coffee, walk, stretch, breathe.", accent: 'sky' }
            ]
          },

          vocabPractice: {
            title: 'Vocabulary Practice', titleUk: 'Практика словника',
            exercises: [
              {
                type: 'mcq',
                title: 'Pick the right word for each situation',
                instruction: 'Read each mini-story. Which vocabulary word or phrase fits best?',
                questions: [
                  { q: 'Every Sunday, Sofia turns off her phone for the whole day. She calls it her weekly ___ .', options: ['online engagement', 'digital detox', 'internet connection'], correct: 1 },
                  { q: 'Nick has been studying for 2 hours straight. Time to ___ and drink some water.', options: ['post and share', 'take a break', 'stay connected'], correct: 1 },
                  { q: 'Meeting friends for coffee, family dinners, chatting after class — these are all healthy ___ .', options: ['online trends', 'social interactions', 'digital worlds'], correct: 1 },
                  { q: 'Painting, cooking, playing chess with grandpa — all of these are great ___ .', options: ['online platforms', 'offline activities', 'online engagement'], correct: 1 },
                  { q: 'On weekends, Maya focuses on her favourite ___ : swimming, painting, and reading fantasy books.', options: ['leisure activities', 'online trends', 'passwords'], correct: 0 },
                  { q: 'Anya spent the whole camping weekend ___ from her phone. No signal, no notifications, no problem.', options: ['posting', 'disconnecting', 'sharing'], correct: 1 },
                  { q: 'Doctors recommend at least one full day of ___ every week to reset your brain.', options: ['online learning', 'digital detox', 'online engagement'], correct: 1 },
                  { q: 'A short 10-minute ___ every hour helps your eyes and your focus.', options: ['break', 'trend', 'password'], correct: 0 }
                ]
              },
              {
                type: 'fill',
                title: 'Complete the wellness magazine article',
                instruction: 'Fill in the missing words using the word bank. Each chip is used exactly once.',
                bank: ['digital detox', 'social interactions', 'offline activities', 'take a break', 'disconnecting', 'leisure activities'],
                questions: [
                  { before: 'A recent study shows that teens who do a weekly', after: 'sleep better and feel happier.', answer: 'digital detox' },
                  { before: 'Real, face-to-face', after: 'are one of the biggest predictors of long-term happiness.', answer: 'social interactions' },
                  { before: 'Instead of scrolling before bed, try', after: 'like reading, drawing, or a quiet walk.', answer: 'offline activities' },
                  { before: 'If your eyes feel tired after 45 minutes of screen time —', after: '. Your body will thank you.', answer: 'take a break' },
                  { before: 'The hardest part of', after: 'from social media is the first 24 hours. After that, you feel free.', answer: 'disconnecting' },
                  { before: 'Make time for', after: 'you loved as a child — sports, music, cooking. They bring back real joy.', answer: 'leisure activities' }
                ]
              },
              {
                type: 'match',
                title: 'Match the situation with the best advice',
                instruction: 'Someone tells you their problem (left). Match it with the best vocabulary-based advice (right).',
                pairs: [
                  { left: '"I\u2019ve been on my phone for 3 hours."', right: 'take a break — even 15 minutes helps' },
                  { left: '"I feel lonely and only chat online."', right: 'try more real social interactions' },
                  { left: '"I only know how to scroll."', right: 'find offline activities you enjoy' },
                  { left: '"I\u2019m stressed and always tired."', right: 'try a full weekend digital detox' },
                  { left: '"I have zero hobbies."', right: 'explore new leisure activities' },
                  { left: '"My brain feels overloaded 24/7."', right: 'practice disconnecting more often' }
                ]
              }
            ]
          },

          discoveryGuide: {
            title: 'Discovery Guide', titleUk: 'Дослідник граматики',
            task: "A journalist is interviewing Maya about her digital detox weekend. Look at her three answers. Each uses a different mini-grammar tool — one to explain a PURPOSE (why she did it), the other to explain a REASON (what caused it). Can you spot the two families?",
            taskUk: 'Журналіст бере інтерв\u2019ю у Майї про її вихідні цифрового детоксу. Подивись на три її відповіді. Кожна використовує різні маленькі граматичні інструменти — одні пояснюють МЕТУ (навіщо вона це робила), інші — ПРИЧИНУ (що це спричинило). Чи можеш ти впізнати ці дві сімʼї?',
            sentences: [
              { id: 1, html: '💬 <em>\u201cI did the detox <span class="marker">in order to</span> reset my sleep <span class="marker">and</span> feel less anxious.\u201d</em>' },
              { id: 2, html: '💬 <em>\u201cI needed it <span class="marker">because</span> I couldn\u2019t focus at school anymore.\u201d</em>' },
              { id: 3, html: '💬 <em>\u201c<span class="marker">Due to</span> constant notifications, my brain never got a real rest — <span class="marker">so that</span>\u2019s why I acted.\u201d</em>' }
            ],
            questions: [
              "Sentence 1 has \u201cIN ORDER TO reset my sleep.\u201d Is she explaining WHY she did it (result she wanted), or WHAT caused it? What comes after \u201cin order to\u201d — a verb or a noun?",
              "Sentence 2 has \u201cBECAUSE I couldn\u2019t focus.\u201d Is that a purpose (future goal) or a cause (past problem)? What comes after BECAUSE — a full sentence, or just a noun?",
              "Sentence 3 has \u201cDUE TO constant notifications.\u201d Same question: cause or purpose? What comes after DUE TO — a noun or a full sentence?",
              "In one word: PURPOSE = ___ (why you WANT to do something) — words like <em>in order to, so that, for</em>. CAUSE = ___ (why something happened) — words like <em>because, since, due to</em>. Got the split?"
            ]
          },

          grammar: {
            title: 'Talking about PURPOSE and REASON', titleUk: 'Мета і причина в англійській',
            intro: "Two sides of the same coin. <strong>PURPOSE</strong> answers <em>\u201cWhy did you do that? What\u2019s the goal?\u201d</em> (looking forward). <strong>REASON</strong> answers <em>\u201cWhat caused this? Why did it happen?\u201d</em> (looking back). English has different mini-grammar patterns for each — and mixing them up is one of the most common mistakes. Let\u2019s make it click.",
            introUk: 'Дві сторони однієї медалі. <em>МЕТА</em> відповідає на «Навіщо ти це зробив(-ла)? Яка ціль?» (дивимося вперед). <em>ПРИЧИНА</em> відповідає на «Що це спричинило? Чому так сталося?» (дивимося назад). В англійській для цього — різні міні-конструкції, і плутати їх — одна з найпоширеніших помилок. Розберемо, щоб клацнуло.',
            blocks: [
              {
                title: 'PURPOSE — in order to / so as to', letter: 'A',
                when: 'a formal way to say WHY (goal)', whenUk: 'формально сказати НАВІЩО (ціль)',
                explain: "Both <strong>in order to</strong> and <strong>so as to</strong> mean \u201cwith the purpose of\u201d — followed by an <em>infinitive (verb without to)</em>. Slightly formal. Common in essays, articles, presentations. \u2192 Same subject in both parts of the sentence. \u2192 Negative form: <strong>in order NOT to</strong> / <strong>so as NOT to</strong>.",
                explainUk: "І <em>in order to</em>, і <em>so as to</em> означають «з метою», після них — <strong>інфінітив (дієслово без to)</strong>. Трохи формальні — часто в есе, статтях, презентаціях. \u2192 Підмет один і той самий в обох частинах речення. \u2192 Заперечення: <em>in order NOT to</em> / <em>so as NOT to</em>.",
                formula: '<em>in order to</em> / <em>so as to</em> + verb (base form)',
                examples: [
                  { en: "I turned off notifications in order to focus on my homework.", uk: 'Я вимкнув сповіщення, щоб зосередитися на домашці.' },
                  { en: "She went for a walk so as to clear her head.", uk: 'Вона пішла на прогулянку, щоб очистити голову.' },
                  { en: "Nick set a screen-time limit in order not to waste his whole evening scrolling.", uk: 'Нік встановив ліміт екранного часу, щоб не марнувати цілий вечір на скролінг.' },
                  { en: "We take breaks every hour so as to stay productive.", uk: 'Ми робимо перерви щогодини, щоб залишатися продуктивними.' }
                ]
              },
              {
                title: 'PURPOSE — so that / for', letter: 'B',
                when: 'the everyday ways to say WHY', whenUk: 'звичайні способи сказати НАВІЩО',
                explain: "<strong>so that</strong> is followed by a <em>FULL clause with a modal</em> (can / could / will / would). Useful when the two parts have DIFFERENT subjects. \u2192 <strong>for</strong> + <em>-ing</em> or noun — talks about the general function of something. <em>\u201cThis app is for staying connected.\u201d</em>",
                explainUk: "<em>so that</em> — після нього <strong>ПОВНЕ речення з модальним дієсловом</strong> (can / could / will / would). Особливо зручне, коли в двох частинах РІЗНІ підмети. \u2192 <em>for</em> + <em>-ing</em> або іменник — говорить про загальне призначення. <em>«This app is for staying connected.»</em>",
                formula: '<em>so that</em> + subject + can/could/will/would + verb &nbsp;|&nbsp; <em>for</em> + -ing / noun',
                examples: [
                  { en: "I disconnect on Sundays so that my brain can rest.", uk: 'Я відключаюсь у неділю, щоб мій мозок міг відпочити.' },
                  { en: "Mum keeps the phones in a basket during dinner so that we can actually talk.", uk: 'Мама тримає телефони в кошику під час вечері, щоб ми могли по-справжньому поговорити.' },
                  { en: "This app is for learning new languages.", uk: 'Цей додаток — для вивчення нових мов.' },
                  { en: "I use my weekends for reading and cooking, not scrolling.", uk: 'Я використовую вихідні для читання і готування, а не для скролінгу.' }
                ]
              },
              {
                title: 'REASON — because / because of', letter: 'C',
                when: 'the everyday ways to say WHY (cause)', whenUk: 'звичайні способи сказати ЧОМУ (причина)',
                explain: "<strong>because</strong> is followed by a <em>FULL sentence</em>: subject + verb. \u201cI\u2019m tired BECAUSE I stayed up late.\u201d \u2192 <strong>because of</strong> is followed by a <em>NOUN or noun phrase</em> (no full sentence!): \u201cI\u2019m tired BECAUSE OF the noise.\u201d This is the #1 source of confusion — always ask: <em>is what comes next a verb or a noun?</em>",
                explainUk: "<em>because</em> — після нього <strong>ПОВНЕ речення</strong>: підмет + присудок. «I\u2019m tired BECAUSE I stayed up late.» \u2192 <em>because of</em> — після нього <em>ІМЕННИК або іменникова фраза</em> (не повне речення!): «I\u2019m tired BECAUSE OF the noise.» Це головне джерело плутанини — завжди питай себе: <em>що йде далі — дієслово чи іменник?</em>",
                formula: '<em>because</em> + subject + verb &nbsp;|&nbsp; <em>because of</em> + noun',
                examples: [
                  { en: "I did a digital detox because I couldn\u2019t sleep.", uk: 'Я зробив цифровий детокс, тому що не міг спати.' },
                  { en: "I did a digital detox because of my terrible sleep.", uk: 'Я зробив цифровий детокс через мій жахливий сон.' },
                  { en: "Sofia deleted TikTok because she was wasting too much time.", uk: 'Софія видалила TikTok, тому що марнувала забагато часу.' },
                  { en: "Sofia deleted TikTok because of the endless scrolling.", uk: 'Софія видалила TikTok через безкінечний скролінг.' }
                ]
              },
              {
                title: 'REASON — as / since / due to', letter: 'D',
                when: 'more formal or slightly different vibes', whenUk: 'більш формально або з інакшим відтінком',
                explain: "<strong>as</strong> and <strong>since</strong> work exactly like <em>because</em> (full sentence follows) but are slightly more formal, and often come at the START of the sentence. \u201cAs it was raining, we stayed home.\u201d \u2192 <strong>due to</strong> works like <em>because of</em> — followed by a NOUN. More formal, common in written English. \u2192 One trick: if you can say <em>because</em>, you can usually say <em>as</em> or <em>since</em>. If you can say <em>because of</em>, you can usually say <em>due to</em>.",
                explainUk: "<em>as</em> і <em>since</em> працюють точно як <em>because</em> (після них ПОВНЕ речення), але формальніші й часто на ПОЧАТКУ речення. «As it was raining, we stayed home.» \u2192 <em>due to</em> — як <em>because of</em>, після нього ІМЕННИК. Формальніше, частіше в письмі. \u2192 Лайфхак: якщо працює <em>because</em> — працюватиме й <em>as/since</em>. Якщо працює <em>because of</em> — працюватиме й <em>due to</em>.",
                formula: '<em>as</em> / <em>since</em> + subject + verb &nbsp;|&nbsp; <em>due to</em> + noun',
                examples: [
                  { en: "As she was tired of notifications, Maya turned them all off.", uk: 'Оскільки Майя втомилася від сповіщень, вона їх усі вимкнула.' },
                  { en: "Since teens spend so much time online, digital balance matters more than ever.", uk: 'Оскільки підлітки проводять багато часу онлайн, цифровий баланс важливий як ніколи.' },
                  { en: "Due to too much screen time, my eyes started hurting.", uk: 'Через забагато часу перед екраном мої очі почали боліти.' },
                  { en: "The camp was popular due to its total no-phone rule.", uk: 'Табір був популярним завдяки повному правилу «без телефонів».' }
                ]
              }
            ]
          },

          grammarPractice: {
            title: 'Grammar Practice', titleUk: 'Практика граматики',
            exercises: [
              {
                type: 'mcq',
                title: 'Purpose or reason? Pick the right connector',
                instruction: 'Read each sentence and choose the word or phrase that best fits.',
                questions: [
                  { q: 'I set a screen-time limit ___ waste less time.', options: ['because', 'in order to', 'due to'], correct: 1 },
                  { q: 'Nick was exhausted ___ he had scrolled until 2 AM.', options: ['so as to', 'because', 'for'], correct: 1 },
                  { q: 'Sofia turned off her phone ___ she could enjoy the sunset.', options: ['because of', 'so that', 'due to'], correct: 1 },
                  { q: '___ the heavy screen use, many teens report bad sleep.', options: ['Because', 'Due to', 'So that'], correct: 1 },
                  { q: 'This weekend retreat is ___ people who want a digital detox.', options: ['for', 'because', 'so as to'], correct: 0 },
                  { q: '___ he was tired of comparing himself to others, Nick deleted Instagram.', options: ['As', 'For', 'In order to'], correct: 0 },
                  { q: 'I take a break every 45 minutes ___ my eyes don\u2019t hurt.', options: ['because of', 'so that', 'due to'], correct: 1 },
                  { q: '___ her poor sleep, Anya finally tried a full digital detox.', options: ['Because', 'Because of', 'So that'], correct: 1 }
                ]
              },
              {
                type: 'fill',
                title: 'Because or because of? Due to or since?',
                instruction: 'Fill in the correct word or phrase. Watch what comes NEXT — a full sentence, or just a noun?',
                questions: [
                  { before: 'I love offline activities', after: 'they help me relax fully.', answer: 'because', hint: 'full sentence next' },
                  { before: 'I love offline activities', after: 'the calm they give me.', answer: 'because of', hint: 'noun next' },
                  { before: '', after: 'my constant headaches, I started a digital detox.', answer: 'Due to', hint: 'formal, noun next' },
                  { before: '', after: 'I couldn\u2019t focus at school, I turned off social media.', answer: 'Since', hint: 'full sentence at start' },
                  { before: 'Sofia felt happier last month', after: 'her weekly no-phone Sunday routine.', answer: 'because of', hint: 'noun phrase next' },
                  { before: 'Sofia felt happier last month', after: 'she disconnected every Sunday.', answer: 'because', hint: 'full sentence next' },
                  { before: '', after: 'many students study online now, digital balance is a school topic.', answer: 'As', hint: 'formal, at start, full sentence' }
                ]
              },
              {
                type: 'fill',
                title: 'In order to, so that, for — pick the right purpose word',
                instruction: 'Choose the correct PURPOSE connector. Look at what comes after: verb? full clause with modal? noun/-ing?',
                questions: [
                  { before: 'I bought this notebook', after: 'writing down my offline hobbies.', answer: 'for', hint: 'noun/-ing next' },
                  { before: 'Nick keeps his phone in another room', after: 'he can sleep better.', answer: 'so that', hint: 'full clause with modal' },
                  { before: 'Anya joined a book club', after: 'meet new people offline.', answer: 'in order to', hint: 'verb base form next' },
                  { before: 'Sofia deleted TikTok', after: 'she wouldn\u2019t waste her evenings.', answer: 'so that', hint: 'full clause with would' },
                  { before: 'This weekend camp is', after: 'families who want a real digital detox.', answer: 'for', hint: 'noun next' },
                  { before: 'We put our phones in a basket', after: 'have a real conversation at dinner.', answer: 'in order to', hint: 'verb next, formal-ish' }
                ]
              },
              {
                type: 'mcq',
                title: 'Spot the mistake',
                instruction: 'One sentence in each pair sounds wrong. Pick the correct, natural one.',
                questions: [
                  { q: 'Reason with a full sentence:', options: ['I did the detox because of I was tired.', 'I did the detox because I was tired.'], correct: 1 },
                  { q: 'Reason with a noun:', options: ['She left the app because the ads.', 'She left the app because of the ads.'], correct: 1 },
                  { q: 'Purpose (formal, with verb):', options: ['I woke up early in order to went for a run.', 'I woke up early in order to go for a run.'], correct: 1 },
                  { q: 'Purpose with a modal:', options: ['Mum hides our phones so that we talking.', 'Mum hides our phones so that we can talk.'], correct: 1 },
                  { q: 'Formal reason at the start:', options: ['Due to she was exhausted, she took a break.', 'Since she was exhausted, she took a break.'], correct: 1 },
                  { q: 'Purpose with a noun/-ing:', options: ['This journal is for track my mood.', 'This journal is for tracking my mood.'], correct: 1 },
                  { q: 'Reason with a noun phrase:', options: ['I stayed home due to a bad weather.', 'I stayed home due to the bad weather.'], correct: 1 }
                ]
              }
            ]
          },

          reading: {
            title: 'Reading', titleUk: 'Читання', emoji: '🌱',
            textTitle: 'Anya\u2019s digital-balance plan — a letter to her future self',
            text: [
              "Dear Future Anya,",
              "It\u2019s me, 12-year-old you. I\u2019m writing this because I just spent a whole month trying to find a real balance between my online life and my offline life — and I want you to remember what worked.",
              "First, some honesty. Last summer, I was spending 6 hours a day on TikTok. Six. My mum wasn\u2019t angry — she was worried. Due to that constant scrolling, I couldn\u2019t focus in class, I stopped drawing, and I hadn\u2019t seen my best friend in person for weeks. Something had to change.",
              "So in September, I started what I called \u201cThe Balance Project.\u201d Here\u2019s the plan I made in order to fix things — and here\u2019s what actually worked (and what didn\u2019t).",
              "Rule 1: NO phone in my bedroom at night. Since my phone was there, I was scrolling till 1 AM every day. Now I charge it in the kitchen. My sleep changed in three days.",
              "Rule 2: One full digital detox day per week — Sunday. No apps. No notifications. Just offline activities: I go for a walk, cook with my grandma, read, or paint. The first Sunday was awful because I felt bored constantly. By the fourth Sunday, I was actually looking forward to it.",
              "Rule 3: I take a break every 45 minutes when I\u2019m studying, so that my eyes and brain don\u2019t die. Even 5 minutes helps. Sometimes I stretch. Sometimes I just look out the window.",
              "Rule 4: I put social media apps in a folder called \u201cLater\u201d on the third page of my phone. It sounds silly, but I open them way less now — just because I have to actually look for them.",
              "Rule 5: I joined a book club at school in order to have real social interactions again. Twelve girls, one book a month, snacks. I have made 3 new friends because of it. Real friends, real conversations.",
              "The hardest part? I still slip up. Last Wednesday, I spent 4 hours on Instagram due to boredom. That\u2019s okay. One bad day doesn\u2019t erase 30 good ones.",
              "The biggest thing I learned is this: I don\u2019t hate my phone. I hate what I become when I use it without limits. Balance isn\u2019t about deleting everything. It\u2019s about deciding what deserves your time.",
              "So, Future Anya — if you\u2019re reading this and you\u2019ve slipped back into 6-hour TikTok days, start again. Small rules. One Sunday at a time. You did it once. You can do it again.",
              "Love,",
              "Your 12-year-old self 💛"
            ],
            questions: [
              { q: 'Why is Anya writing this letter?', options: ['To complain about her mum', 'To remember what worked in her balance project', 'To promote a phone app'], correct: 1 },
              { q: 'How many hours a day was Anya on TikTok last summer?', options: ['2 hours', '4 hours', '6 hours'], correct: 2 },
              { q: 'Why did she start The Balance Project? (What was the main REASON?)', options: ['Her mum forced her', 'She couldn\u2019t focus, stopped drawing, and lost touch with her friend', 'Her phone broke'], correct: 1 },
              { q: 'What is Rule 2?', options: ['No phones in the bedroom', 'One full digital detox day per week', 'Delete all social media'], correct: 1 },
              { q: 'Why does she take a 5-minute break every 45 minutes? (Purpose)', options: ['So that her eyes and brain don\u2019t die', 'Because she\u2019s tired', 'Due to school rules'], correct: 0 },
              { q: 'Why did she join the book club?', options: ['To improve her grades', 'In order to have real social interactions', 'Because her mum told her to'], correct: 1 },
              { q: 'What is Anya\u2019s big final lesson?', options: ['Phones are evil and must be destroyed', 'Balance is about deciding what deserves your time', 'You should never use social media'], correct: 1 }
            ]
          },

          speaking: {
            title: 'Speaking', titleUk: 'Говоріння',
            questions: [
              "Name one offline activity you love. Explain WHY you love it using \u201cbecause\u201d.",
              "Complete: \u201cI would try a digital detox weekend in order to ___.\u201d",
              "Do you take enough breaks when studying? Explain your habits using \u201cso that\u201d.",
              "Describe your last real social interaction (face-to-face, no screens). Why was it meaningful? Try \u201cbecause of\u201d or \u201cdue to\u201d.",
              "Complete: \u201cSince I don\u2019t want to waste my weekend scrolling, I ___.\u201d",
              "What leisure activity would you like to START this month? Explain your reason AND your purpose (use two different connectors).",
              "Imagine your friend spends 8 hours a day on their phone. Give them 3 pieces of advice using \u201cin order to\u201d, \u201cso that\u201d, and \u201cfor\u201d."
            ]
          },

          summary: {
            title: 'Summary', titleUk: 'Підсумок',
            keyPoints: [
              "6 essential balance words: offline activity, social interactions, leisure activities, disconnecting, digital detox, take a break.",
              "PURPOSE (looking forward — WHY the goal?):",
              "in order to / so as to + verb — formal, one subject: \u201cI turned off notifications in order to focus.\u201d",
              "so that + subject + can/could/will/would — perfect for two different subjects: \u201cMum hides phones so that we can talk.\u201d",
              "for + noun / -ing — for the general function: \u201cThis app is for staying connected.\u201d",
              "REASON (looking back — WHY the cause?):",
              "because + full sentence: \u201cI\u2019m tired because I stayed up late.\u201d",
              "because of + noun: \u201cI\u2019m tired because of the noise.\u201d",
              "as / since + full sentence — like because, more formal: \u201cSince it was late, we stopped.\u201d",
              "due to + noun — like because of, more formal: \u201cDue to the storm, we stayed home.\u201d",
              "Trick to never forget: what comes NEXT is your compass. Full sentence \u2192 because / since / as / so that. Just a noun \u2192 because of / due to / for. Just a verb \u2192 in order to / so as to."
            ],
            finalQuiz: {
              title: 'Quick check — 3 questions',
              questions: [
                { q: '\u201cI took a break ___ I was exhausted.\u201d Which fits?', options: ['because of', 'because', 'due to'], correct: 1 },
                { q: '\u201cShe left early ___ catch the last bus.\u201d Which fits?', options: ['in order to', 'because', 'due to'], correct: 0 },
                { q: '\u201c___ the bad Wi-Fi, we all had to use our data.\u201d Which fits?', options: ['Because', 'Since', 'Due to'], correct: 2 }
              ]
            }
          },

          homework: {
            title: 'Homework', titleUk: 'Домашнє завдання',
            writing: {
              title: 'My balance plan — 7 sentences',
              task: "Write a <strong>7-sentence balance plan</strong> for yourself — real or imaginary. You MUST include: <strong>at least 4 vocabulary words</strong> from this lesson, <strong>at least 2 PURPOSE connectors</strong> (in order to / so as to / so that / for), and <strong>at least 2 REASON connectors</strong> (because / because of / since / as / due to). Bonus: try to use each one only once — no repeats!",
              taskUk: 'Напиши план особистого балансу з 7 речень — реальний або уявний. Обов\u2019язково включи: щонайменше 4 слова зі словника цього уроку, щонайменше 2 сполучники МЕТИ (in order to / so as to / so that / for) і щонайменше 2 сполучники ПРИЧИНИ (because / because of / since / as / due to). Бонус: спробуй кожен використати лише один раз — без повторів!',
              tip: 'Structure: 2 sentences about your problem (reason) → 3 rules you\u2019ll set (purpose) → 2 sentences about what will change and why.'
            },
            speaking: {
              title: '90-second digital-balance interview',
              task: "Imagine a friend interviews you: \u201cWhat\u2019s your BIGGEST digital problem, and what\u2019s ONE thing you\u2019re going to change this month?\u201d Record a <strong>90-second answer</strong>. Include: <strong>at least 3 vocabulary words</strong>, one sentence with <strong>BECAUSE (or BECAUSE OF)</strong>, and one sentence with <strong>IN ORDER TO (or SO THAT)</strong>.",
              taskUk: 'Уяви: друг бере в тебе інтерв\u2019ю: «Яка твоя НАЙБІЛЬША цифрова проблема і що ти зробиш цього місяця, щоб її вирішити?» Запиши 90-секундну відповідь. Включи: щонайменше 3 слова зі словника, одне речення з BECAUSE (або BECAUSE OF) і одне з IN ORDER TO (або SO THAT).',
              tip: 'Speak like you\u2019re thinking out loud, not reciting. Little pauses are natural. Real problems make real answers.'
            }
          }
        }

      ]
    }
  ]
});
