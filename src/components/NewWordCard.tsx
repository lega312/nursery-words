import type { Word } from '../data/words'
import { SpeakButton } from './SpeakButton'

interface NewWordCardProps {
  word: Word
}

export function NewWordCard({ word }: NewWordCardProps) {
  return (
    <div className="spidey-card rounded-2xl p-6 flex flex-col items-center">
      <div className="text-6xl mb-3">{word.emoji}</div>
      <div className="text-3xl font-extrabold text-white mb-1" style={{ fontFamily: 'Bangers, cursive', letterSpacing: '2px' }}>
        {word.word}
      </div>
      <div className="text-xl text-blue-300 mb-3">{word.translation}</div>
      <SpeakButton word={word.word} />
    </div>
  )
}
