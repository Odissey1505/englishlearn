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
        }

      ]
    }
  ]
});
