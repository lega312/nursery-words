import { speak } from '../lib/speech'

interface SpeakButtonProps {
  word: string
}

export function SpeakButton({ word }: SpeakButtonProps) {
  return (
    <button
      onClick={() => speak(word)}
      className="bg-sky-100 hover:bg-sky-200 active:scale-90 transition-all rounded-full w-12 h-12 flex items-center justify-center"
      aria-label={`Listen to ${word}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#0ea5e9" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  )
}
