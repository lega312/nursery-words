interface DayHeaderProps {
  day: number
  totalDays: number
  learnedCount: number
  totalWords: number
  onPrev: () => void
  onNext: () => void
  canGoPrev: boolean
  canGoNext: boolean
}

export function DayHeader({
  day,
  totalDays,
  learnedCount,
  totalWords,
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: DayHeaderProps) {
  const progress = Math.round((learnedCount / totalWords) * 100)

  return (
    <div className="spidey-header rounded-2xl p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className="spidey-nav text-2xl w-12 h-12 flex items-center justify-center"
        >
          ◀
        </button>
        <div className="text-center">
          <div className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Bangers, cursive', letterSpacing: '1px' }}>
            Day {day} <span className="text-blue-400 font-normal">/ {totalDays}</span>
          </div>
        </div>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="spidey-nav text-2xl w-12 h-12 flex items-center justify-center"
        >
          ▶
        </button>
      </div>
      <div className="spidey-progress-track rounded-full h-3 overflow-hidden">
        <div
          className="spidey-progress-fill h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-center text-sm text-blue-300 mt-1" style={{ fontFamily: 'Bangers, cursive', letterSpacing: '1px' }}>
        {learnedCount} of {totalWords} words unlocked ⚡
      </div>
    </div>
  )
}
