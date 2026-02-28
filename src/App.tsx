import { useState } from 'react'
import { DayHeader } from './components/DayHeader'
import { NewWordCard } from './components/NewWordCard'
import { ReviewWordList } from './components/ReviewWordList'
import {
  getCurrentDay,
  getTotalDays,
  getNewWordsForDay,
  getReviewWordsForDay,
  getTotalLearnedWords,
  getTotalWords,
} from './lib/days'

export default function App() {
  const maxDay = getCurrentDay()
  const [day, setDay] = useState(maxDay)

  const newWords = getNewWordsForDay(day)
  const reviewWords = getReviewWordsForDay(day)
  const learnedCount = getTotalLearnedWords(day)

  return (
    <div className="min-h-screen bg-sky-50 px-4 py-6 max-w-lg mx-auto">
      <h1 className="text-center text-2xl font-bold text-sky-600 mb-4">
        🌟 Nursery Words
      </h1>

      <DayHeader
        day={day}
        totalDays={getTotalDays()}
        learnedCount={learnedCount}
        totalWords={getTotalWords()}
        onPrev={() => setDay(d => Math.max(1, d - 1))}
        onNext={() => setDay(d => Math.min(maxDay, d + 1))}
        canGoPrev={day > 1}
        canGoNext={day < maxDay}
      />

      {newWords.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-amber-500 text-center mb-3 uppercase tracking-wider">
            ✨ New Today
          </h2>
          <div className="space-y-3">
            {newWords.map(w => (
              <NewWordCard key={w.word} word={w} />
            ))}
          </div>
        </div>
      )}

      {newWords.length === 0 && (
        <div className="bg-green-100 rounded-2xl p-6 text-center mb-6">
          <div className="text-4xl mb-2">🎉</div>
          <div className="text-xl font-bold text-green-700">Review day!</div>
          <div className="text-green-600">All words learned. Let's practice!</div>
        </div>
      )}

      <ReviewWordList words={reviewWords} />

      <div className="text-center text-sm text-slate-400 mt-8 pb-4">
        Made with ❤️ for learning
      </div>
    </div>
  )
}
