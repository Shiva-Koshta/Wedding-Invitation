interface MapLinkProps {
  url: string
  label?: string
  className?: string
}

/** A small gold "View on map" link with a pin icon; opens Google Maps in a new tab. */
export default function MapLink({ url, label = 'View on map', className = '' }: MapLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1 font-serif text-gold underline-offset-2 transition-colors hover:text-maroon hover:underline ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
      {label}
    </a>
  )
}
