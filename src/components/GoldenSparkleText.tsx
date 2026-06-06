import { motion } from 'motion/react'
import { useMemo } from 'react'
import { ANIM, SPARKLE_COUNT } from '../constants'

/** Title text that reveals left-to-right while golden dust motes twinkle around it. */
export default function GoldenSparkleText({ text }: { text: string }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: SPARKLE_COUNT }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * ANIM.textRevealDuration,
        gap: Math.random() * 2.5,
      })),
    [],
  )

  return (
    <div className="relative inline-block">
      <div className="pointer-events-none absolute -inset-10">
        {sparkles.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-champagne shadow-[0_0_8px_2px_rgba(200,160,74,0.7)]"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -10] }}
            transition={{
              duration: ANIM.sparkleDuration,
              delay: s.delay,
              repeat: Infinity,
              repeatDelay: s.gap,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.h2
        className="whitespace-nowrap font-script text-[clamp(2.25rem,11vw,7rem)] leading-tight text-gold drop-shadow-[0_1px_0_rgba(122,30,30,0.15)]"
        initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: ANIM.textRevealDuration, ease: 'easeInOut' }}
      >
        {text}
      </motion.h2>
    </div>
  )
}
