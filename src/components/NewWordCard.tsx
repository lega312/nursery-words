import type { Word } from '../data/words'
import { SpeakButton } from './SpeakButton'

interface NewWordCardProps {
  word: Word
}

export function NewWordCard({ word }: NewWordCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
      <div className="text-6xl mb-3">{word.emoji}</div>
      <div className="text-3xl font-bold text-slate-800 mb-1">{word.word}</div>
      <div className="text-xl text-slate-500 mb-3">{word.translation}</div>
      <SpeakButton word={word.word} />
    </div>
  )
}
