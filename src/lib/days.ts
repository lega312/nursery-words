import { words, type Word } from '../data/words'

const START_DATE = new Date(2026, 2, 1) // March 1, 2026 (months are 0-indexed)
const TOTAL_DAYS = 50

export function getCurrentDay(): number {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diffMs = today.getTime() - START_DATE.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1
  return Math.max(1, Math.min(diffDays, TOTAL_DAYS))
}

export function getTotalDays(): number {
  return TOTAL_DAYS
}

export function getNewWordsForDay(day: number): Word[] {
  return words.filter(w => w.day === day)
}

export function getReviewWordsForDay(day: number): Word[] {
  return words.filter(w => w.day < day)
}

export function getTotalLearnedWords(day: number): number {
  return words.filter(w => w.day <= day).length
}

export function getTotalWords(): number {
  return words.length
}
