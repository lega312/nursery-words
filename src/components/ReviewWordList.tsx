import type { Word } from '../data/words'
import { SpeakButton } from './SpeakButton'

interface ReviewWordListProps {
  words: Word[]
}

export function ReviewWordList({ words }: ReviewWordListProps) {
  if (words.length === 0) return null

  return (
    <div>
      <h2 className="spidey-review-label text-lg font-extrabold text-center mb-3 uppercase tracking-wider">
        🕸️ Review
      </h2>
      <div className="space-y-2">
        {words.map(w => (
          <div
            key={w.word}
            className="spidey-row rounded-xl px-4 py-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{w.emoji}</span>
              <div className="min-w-0">
                <span className="text-lg font-bold text-white">{w.word}</span>
                <span className="text-red-400 mx-2">—</span>
                <span className="text-blue-300">{w.translation}</span>
              </div>
            </div>
            <SpeakButton word={w.word} />
          </div>
        ))}
      </div>
    </div>
  )
}
