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
  const [day, setDay] = useState(getCurrentDay())
  const totalDays = getTotalDays()

  const newWords = getNewWordsForDay(day)
  const reviewWords = getReviewWordsForDay(day)
  const learnedCount = getTotalLearnedWords(day)

  return (
    <div className="min-h-screen spidey-bg px-4 py-6 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-extrabold mb-4 spidey-title">
        🕷️ Word Hero
      </h1>

      <DayHeader
        day={day}
        totalDays={totalDays}
        learnedCount={learnedCount}
        totalWords={getTotalWords()}
        onPrev={() => setDay(d => Math.max(1, d - 1))}
        onNext={() => setDay(d => Math.min(totalDays, d + 1))}
        canGoPrev={day > 1}
        canGoNext={day < totalDays}
      />

      {newWords.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-extrabold text-center mb-3 uppercase tracking-wider spidey-new-label">
            💥 New Words!
          </h2>
          <div className="space-y-3">
            {newWords.map(w => (
              <NewWordCard key={w.word} word={w} />
            ))}
          </div>
        </div>
      )}

      {newWords.length === 0 && (
        <div className="spidey-review-banner rounded-2xl p-6 text-center mb-6">
          <div className="text-4xl mb-2">💪</div>
          <div className="text-xl font-extrabold text-white">Super Review!</div>
          <div className="text-red-100">All words unlocked. Practice your powers!</div>
        </div>
      )}

      <ReviewWordList words={reviewWords} />

      <div className="text-center text-sm text-red-300 mt-8 pb-4">
        Made with 🕸️ for little heroes
      </div>
    </div>
  )
}
