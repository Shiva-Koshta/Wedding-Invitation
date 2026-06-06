import { useEffect, useState } from 'react'
import { COUNTDOWN_TICK_MS, MS_PER } from '../constants'

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isPast: boolean
}

const compute = (target: Date): TimeLeft => {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  return {
    days: Math.floor(diff / MS_PER.day),
    hours: Math.floor((diff % MS_PER.day) / MS_PER.hour),
    minutes: Math.floor((diff % MS_PER.hour) / MS_PER.minute),
    seconds: Math.floor((diff % MS_PER.minute) / MS_PER.second),
    isPast: false,
  }
}

/** Live time remaining until `target`, refreshed every second. */
export function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(() => compute(target))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(compute(target)), COUNTDOWN_TICK_MS)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}
