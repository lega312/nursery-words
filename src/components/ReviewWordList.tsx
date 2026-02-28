import type { Word } from '../data/words'
import { SpeakButton } from './SpeakButton'

interface ReviewWordListProps {
  words: Word[]
}

export function ReviewWordList({ words }: ReviewWordListProps) {
  if (words.length === 0) return null

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-400 text-center mb-3 uppercase tracking-wider">
        Review
      </h2>
      <div className="space-y-2">
        {words.map(w => (
          <div
            key={w.word}
            className="bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{w.emoji}</span>
              <div className="min-w-0">
                <span className="text-lg font-semibold text-slate-700">{w.word}</span>
                <span className="text-slate-400 mx-2">—</span>
                <span className="text-slate-500">{w.translation}</span>
              </div>
            </div>
            <SpeakButton word={w.word} />
          </div>
        ))}
      </div>
    </div>
  )
}
