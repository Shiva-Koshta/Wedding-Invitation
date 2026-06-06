import { IMAGES } from '../constants'

/** Painted floral divider between sections inside a page. */
export default function Divider({ className = '' }: { className?: string }) {
  return (
    <img
      src={IMAGES.floralDivider}
      alt=""
      aria-hidden
      className={`mx-auto h-5 w-auto opacity-90 sm:h-6 ${className}`}
    />
  )
}
