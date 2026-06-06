import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ANIM } from '../constants'

interface PageShellProps {
  children: ReactNode
  /** Optional full-bleed background image (illustration placeholder). */
  backdrop?: string
  /** Tailwind opacity class for the backdrop, e.g. 'opacity-30'. */
  backdropOpacity?: string
  className?: string
}

/** A full-viewport, full-width section; content sits in a centered column and reveals on scroll. */
export default function PageShell({
  children,
  backdrop,
  backdropOpacity = 'opacity-30',
  className = '',
}: PageShellProps) {
  return (
    <section
      className={`relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center sm:px-10 sm:py-16 ${className}`}
    >
      {backdrop && (
        <>
          <img
            src={backdrop}
            alt=""
            aria-hidden
            className={`absolute inset-0 z-0 h-full w-full object-cover ${backdropOpacity}`}
          />
          <div className="absolute inset-0 z-0 bg-cream/55" aria-hidden />
        </>
      )}

      <motion.div
        className="relative z-10 flex w-full max-w-2xl flex-col items-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: ANIM.revealDuration, ease: ANIM.easeSoft }}
      >
        {children}
      </motion.div>
    </section>
  )
}

/** Small uppercase gold eyebrow used to title each chapter. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">{children}</p>
  )
}
