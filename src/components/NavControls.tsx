interface NavControlsProps {
  count: number
  active: number
  onJump: (index: number) => void
}

/** A fixed vertical rail of dots tracking scroll position; click to jump to a section. */
export default function NavControls({ count, active, onJump }: NavControlsProps) {
  return (
    <nav
      aria-label="Story sections"
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-6"
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to section ${i + 1}`}
          aria-current={i === active}
          onClick={() => onJump(i)}
          className={`w-2 rounded-full transition-all duration-300 ${
            i === active ? 'h-6 bg-gold' : 'h-2 bg-gold/35 hover:bg-gold/60'
          }`}
        />
      ))}
    </nav>
  )
}
