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
    <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className="text-3xl w-12 h-12 flex items-center justify-center rounded-full active:bg-sky-100 disabled:opacity-20 transition"
        >
          ◀️
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold text-sky-600">
            Day {day} <span className="text-slate-400 font-normal">/ {totalDays}</span>
          </div>
        </div>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="text-3xl w-12 h-12 flex items-center justify-center rounded-full active:bg-sky-100 disabled:opacity-20 transition"
        >
          ▶️
        </button>
      </div>
      <div className="bg-sky-100 rounded-full h-3 overflow-hidden">
        <div
          className="bg-sky-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-center text-sm text-slate-500 mt-1">
        {learnedCount} of {totalWords} words learned ⭐
      </div>
    </div>
  )
}
