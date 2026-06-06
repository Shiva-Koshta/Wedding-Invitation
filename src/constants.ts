/**
 * Central constants — no magic numbers/paths scattered across components.
 * Colors & fonts live as Tailwind @theme tokens in index.css.
 */

/** Ordered keys for the storybook pages; also drives the page-dot count. */
export const PAGE_KEYS = [
  'cover',
  'groom',
  'bride',
  'families',
  'announcement',
  'details',
] as const

export type PageKey = (typeof PAGE_KEYS)[number]

/**
 * Image placeholders served from /public/images. Generation prompts live in /prompts.
 * To use real art: drop your file into /public/images and point the path here at it
 * (e.g. change '/images/groom-portrait.svg' → '/images/groom-portrait.png').
 */
export const IMAGES = {
  coverManuscript: '/images/cover-manuscript.svg',
  groomPortrait: '/images/groom-portrait.svg',
  bridePortrait: '/images/bride-portrait.svg',
  familiesUnion: '/images/families-union.svg',
  announcementScene: '/images/announcement-scene.svg',
  mandapBackdrop: '/images/mandap-backdrop.svg',
  floralCorner: '/images/floral-corner.svg',
  floralDivider: '/images/floral-divider.svg',
} as const

/** Animation timing (seconds) and easings, reused by all motion components. */
export const ANIM = {
  revealDuration: 0.8,
  sparkleDuration: 1.6,
  textRevealDuration: 2.4,
  cornerDuration: 1.1,
  cornerStagger: 0.15,
  easeSoft: [0.22, 1, 0.36, 1],
} as const

/** Number of golden sparkle/dust motes drifting around the title text. */
export const SPARKLE_COUNT = 22

/** Gentle hint prompting the reader to scroll down. */
export const SCROLL_HINT = 'Scroll to begin the story'

/** Countdown refresh interval and millisecond conversions. */
export const COUNTDOWN_TICK_MS = 1000
export const MS_PER = {
  second: 1000,
  minute: 60_000,
  hour: 3_600_000,
  day: 86_400_000,
} as const
