import { motion } from 'motion/react'
import GoldenSparkleText from '../components/GoldenSparkleText'
import NextChapter from '../components/NextChapter'
import PageShell, { Eyebrow } from '../components/PageShell'
import { ANIM, IMAGES, SCROLL_HINT } from '../constants'
import { COUPLE } from '../data/wedding'

export default function CoverPage() {
  return (
    <PageShell backdrop={IMAGES.coverManuscript} backdropOpacity="opacity-40">
      <Eyebrow>A wedding invitation</Eyebrow>
      <GoldenSparkleText text="Once upon a time…" />
      <motion.p
        className="mt-6 max-w-md font-serif text-lg text-maroon/90 sm:mt-8 sm:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM.revealDuration, delay: ANIM.textRevealDuration * 0.8 }}
      >
        …two souls were written into the very same story.
      </motion.p>
      <motion.p
        className="mt-5 font-script text-5xl text-gold sm:mt-6 sm:text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: ANIM.revealDuration, delay: ANIM.textRevealDuration }}
      >
        {COUPLE.groom.name}
        <span className="mx-3 text-maroon/70">&amp;</span>
        {COUPLE.bride.name}
      </motion.p>
      <NextChapter label={SCROLL_HINT} delay={ANIM.textRevealDuration + 0.6} />
    </PageShell>
  )
}
