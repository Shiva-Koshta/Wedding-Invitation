import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ANIM } from '../constants'

interface NextChapterProps {
  /** Text shown above the chevron (ignored on the last page, which offers a restart). */
  label?: string
  /** Optional fade-in delay so it can appear after page text has revealed. */
  delay?: number
}

/**
 * A clickable "go to the next page" affordance. It locates its own section via the
 * nearest [data-index] ancestor and smooth-scrolls to the following section. On the
 * final section it flips to "Return to the beginning".
 */
export default function NextChapter({ label = 'Continue the story', delay = 0 }: NextChapterProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const target = useRef(0)
  const [isLast, setIsLast] = useState(false)

  useEffect(() => {
    const section = ref.current?.closest('[data-index]')
    if (!section) return
    const index = Number(section.getAttribute('data-index'))
    const total = document.querySelectorAll('[data-index]').length
    const last = index >= total - 1
    setIsLast(last)
    target.current = last ? 0 : index + 1
  }, [])

  const text = isLast ? 'Return to the beginning' : label

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={text}
      onClick={() =>
        document.getElementById(`section-${target.current}`)?.scrollIntoView({ behavior: 'smooth' })
      }
      className="mt-7 flex cursor-pointer flex-col items-center gap-1.5 text-maroon/60 transition-colors hover:text-gold sm:mt-12 sm:gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIM.revealDuration, delay }}
    >
      <span className="text-xs uppercase tracking-[0.35em]">{text}</span>
      <motion.svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        style={{ rotate: isLast ? 180 : 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </motion.svg>
    </motion.button>
  )
}
