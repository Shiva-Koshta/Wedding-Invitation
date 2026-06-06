import { motion } from 'motion/react'
import { ANIM, IMAGES } from '../constants'

/** Painted marigold corner art fixed to the four viewport corners, framing the whole experience. */
const CORNERS = [
  { pos: 'top-0 left-0', mirror: '' },
  { pos: 'top-0 right-0', mirror: '-scale-x-100' },
  { pos: 'bottom-0 left-0', mirror: '-scale-y-100' },
  { pos: 'bottom-0 right-0', mirror: '-scale-x-100 -scale-y-100' },
]

export default function FloralCorners() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {CORNERS.map(({ pos, mirror }, i) => (
        <motion.div
          key={pos}
          aria-hidden
          className={`absolute ${pos}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: ANIM.cornerDuration,
            delay: i * ANIM.cornerStagger,
            ease: ANIM.easeSoft,
          }}
        >
          <img src={IMAGES.floralCorner} alt="" className={`w-16 sm:w-24 md:w-32 ${mirror}`} />
        </motion.div>
      ))}
    </div>
  )
}
