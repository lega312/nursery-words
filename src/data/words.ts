export interface Word {
  word: string
  translation: string
  emoji: string
  day: number
}

export const words: Word[] = [
  // Day 1 - Basic needs
  { word: "want", translation: "хочу", emoji: "🙏", day: 1 },
  { word: "help", translation: "помоги", emoji: "🤝", day: 1 },
  { word: "more", translation: "ещё", emoji: "➕", day: 1 },

  // Day 2 - Yes/No/Please
  { word: "yes", translation: "да", emoji: "✅", day: 2 },
  { word: "no", translation: "нет", emoji: "❌", day: 2 },
  { word: "please", translation: "пожалуйста", emoji: "🙏", day: 2 },

  // Day 3 - Basic actions
  { word: "eat", translation: "есть", emoji: "🍽️", day: 3 },
  { word: "drink", translation: "пить", emoji: "🥤", day: 3 },
  { word: "sleep", translation: "спать", emoji: "😴", day: 3 },

  // Day 4 - Movement
  { word: "go", translation: "идти", emoji: "🚶", day: 4 },
  { word: "stop", translation: "стоп", emoji: "🛑", day: 4 },
  { word: "come", translation: "иди сюда", emoji: "👋", day: 4 },

  // Day 5 - Body needs
  { word: "hungry", translation: "голодный", emoji: "😋", day: 5 },
  { word: "thirsty", translation: "хочу пить", emoji: "💧", day: 5 },
  { word: "tired", translation: "устал", emoji: "🥱", day: 5 },

  // Day 6 - Social basics
  { word: "hello", translation: "привет", emoji: "👋", day: 6 },
  { word: "bye", translation: "пока", emoji: "👋", day: 6 },
  { word: "thank you", translation: "спасибо", emoji: "💛", day: 6 },

  // Day 7 - Play & share
  { word: "play", translation: "играть", emoji: "🎮", day: 7 },
  { word: "share", translation: "поделиться", emoji: "🤲", day: 7 },
  { word: "my turn", translation: "моя очередь", emoji: "☝️", day: 7 },

  // Day 8 - Feelings
  { word: "happy", translation: "счастливый", emoji: "😊", day: 8 },
  { word: "sad", translation: "грустный", emoji: "😢", day: 8 },
  { word: "scared", translation: "страшно", emoji: "😨", day: 8 },

  // Day 9 - Self care
  { word: "toilet", translation: "туалет", emoji: "🚽", day: 9 },
  { word: "wash", translation: "мыть", emoji: "🧼", day: 9 },
  { word: "clean", translation: "чистый", emoji: "✨", day: 9 },

  // Day 10 - Movement 2
  { word: "run", translation: "бежать", emoji: "🏃", day: 10 },
  { word: "walk", translation: "ходить", emoji: "🚶", day: 10 },
  { word: "sit", translation: "сидеть", emoji: "🪑", day: 10 },

  // Day 11 - Instructions
  { word: "stand up", translation: "встань", emoji: "🧍", day: 11 },
  { word: "sit down", translation: "садись", emoji: "🪑", day: 11 },
  { word: "come here", translation: "иди сюда", emoji: "👈", day: 11 },

  // Day 12 - Objects
  { word: "water", translation: "вода", emoji: "💧", day: 12 },
  { word: "food", translation: "еда", emoji: "🍎", day: 12 },
  { word: "milk", translation: "молоко", emoji: "🥛", day: 12 },

  // Day 13 - Clothing
  { word: "shoes", translation: "обувь", emoji: "👟", day: 13 },
  { word: "coat", translation: "куртка", emoji: "🧥", day: 13 },
  { word: "hat", translation: "шапка", emoji: "🧢", day: 13 },

  // Day 14 - Actions 2
  { word: "look", translation: "смотри", emoji: "👀", day: 14 },
  { word: "listen", translation: "слушай", emoji: "👂", day: 14 },
  { word: "wait", translation: "подожди", emoji: "⏳", day: 14 },

  // Day 15 - Temperature & state
  { word: "cold", translation: "холодно", emoji: "🥶", day: 15 },
  { word: "hot", translation: "горячо", emoji: "🥵", day: 15 },
  { word: "hurt", translation: "больно", emoji: "🤕", day: 15 },

  // Day 16 - Responses
  { word: "I can", translation: "я могу", emoji: "💪", day: 16 },
  { word: "I can't", translation: "не могу", emoji: "🙅", day: 16 },
  { word: "sorry", translation: "извини", emoji: "😔", day: 16 },

  // Day 17 - Actions 3
  { word: "give", translation: "дай", emoji: "🤲", day: 17 },
  { word: "open", translation: "открой", emoji: "📂", day: 17 },
  { word: "close", translation: "закрой", emoji: "📁", day: 17 },

  // Day 18 - Instructions 2
  { word: "let's go", translation: "пойдём", emoji: "🚀", day: 18 },
  { word: "be careful", translation: "осторожно", emoji: "⚠️", day: 18 },
  { word: "quiet", translation: "тихо", emoji: "🤫", day: 18 },

  // Day 19 - Social 2
  { word: "friend", translation: "друг", emoji: "👫", day: 19 },
  { word: "nice", translation: "хороший", emoji: "😊", day: 19 },
  { word: "kind", translation: "добрый", emoji: "💕", day: 19 },

  // Day 20 - Reading & activities
  { word: "read", translation: "читать", emoji: "📖", day: 20 },
  { word: "draw", translation: "рисовать", emoji: "🎨", day: 20 },
  { word: "hold", translation: "держи", emoji: "✊", day: 20 },

  // Day 21 - Actions 4
  { word: "push", translation: "толкать", emoji: "👐", day: 21 },
  { word: "pull", translation: "тянуть", emoji: "🤏", day: 21 },
  { word: "try", translation: "попробуй", emoji: "🌟", day: 21 },

  // Day 22 - Questions
  { word: "what", translation: "что", emoji: "❓", day: 22 },
  { word: "where", translation: "где", emoji: "📍", day: 22 },
  { word: "who", translation: "кто", emoji: "🤔", day: 22 },

  // Day 23 - People
  { word: "mum", translation: "мама", emoji: "👩", day: 23 },
  { word: "dad", translation: "папа", emoji: "👨", day: 23 },
  { word: "baby", translation: "малыш", emoji: "👶", day: 23 },

  // Day 24 - Feelings 2
  { word: "angry", translation: "злой", emoji: "😠", day: 24 },
  { word: "good", translation: "хорошо", emoji: "👍", day: 24 },
  { word: "bad", translation: "плохо", emoji: "👎", day: 24 },

  // Day 25 - Preferences
  { word: "like", translation: "нравится", emoji: "❤️", day: 25 },
  { word: "don't like", translation: "не нравится", emoji: "💔", day: 25 },
  { word: "need", translation: "нужно", emoji: "🔑", day: 25 },

  // Day 26 - Objects 2
  { word: "ball", translation: "мяч", emoji: "⚽", day: 26 },
  { word: "book", translation: "книга", emoji: "📚", day: 26 },
  { word: "toy", translation: "игрушка", emoji: "🧸", day: 26 },

  // Day 27 - Clothes 2
  { word: "put on", translation: "надень", emoji: "👕", day: 27 },
  { word: "take off", translation: "сними", emoji: "👔", day: 27 },
  { word: "socks", translation: "носки", emoji: "🧦", day: 27 },

  // Day 28 - Instructions 3
  { word: "pick up", translation: "подними", emoji: "⬆️", day: 28 },
  { word: "tidy up", translation: "убери", emoji: "🧹", day: 28 },
  { word: "gentle", translation: "нежно", emoji: "🤗", day: 28 },

  // Day 29 - Places
  { word: "home", translation: "дом", emoji: "🏠", day: 29 },
  { word: "outside", translation: "на улице", emoji: "🌳", day: 29 },
  { word: "park", translation: "парк", emoji: "🏞️", day: 29 },

  // Day 30 - Praise & encouragement
  { word: "well done", translation: "молодец", emoji: "🏆", day: 30 },
  { word: "good job", translation: "отлично", emoji: "⭐", day: 30 },
  { word: "your turn", translation: "твоя очередь", emoji: "👉", day: 30 },

  // Day 31 - Questions 2
  { word: "why", translation: "почему", emoji: "🤷", day: 31 },
  { word: "how", translation: "как", emoji: "💡", day: 31 },
  { word: "I don't know", translation: "не знаю", emoji: "🤷", day: 31 },

  // Day 32 - Pointing & choosing
  { word: "this one", translation: "это", emoji: "👆", day: 32 },
  { word: "that one", translation: "то", emoji: "👉", day: 32 },
  { word: "ready", translation: "готов", emoji: "✅", day: 32 },

  // Day 33 - Completion
  { word: "finished", translation: "закончил", emoji: "🏁", day: 33 },
  { word: "wet", translation: "мокрый", emoji: "💦", day: 33 },

  // Day 34 - Last batch
  { word: "hug", translation: "обнять", emoji: "🤗", day: 34 },
  { word: "bag", translation: "сумка", emoji: "🎒", day: 34 },
]
