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
          }
        }

      ]
    }
  ]
});
