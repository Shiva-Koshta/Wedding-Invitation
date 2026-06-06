import Divider from '../components/Divider'
import MapLink from '../components/MapLink'
import NextChapter from '../components/NextChapter'
import PageShell, { Eyebrow } from '../components/PageShell'
import { IMAGES } from '../constants'
import { useCountdown } from '../lib/useCountdown'
import { RECEPTION, VENUE, WEDDING_DATE } from '../data/wedding'

function CountUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex w-16 flex-col items-center rounded-2xl border border-gold/40 bg-cream/60 px-1.5 py-3 shadow-sm sm:w-28 sm:px-2 sm:py-5">
      <span className="font-serif text-3xl font-medium tabular-nums text-maroon sm:text-6xl">
        {value}
      </span>
      <span className="mt-1 text-[0.55rem] uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.25em]">
        {label}
      </span>
    </div>
  )
}

export default function CountdownPage() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(WEDDING_DATE)
  const pad = (n: number) => String(n).padStart(2, '0')

  const units = [
    { label: 'Days', value: String(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ]

  return (
    <PageShell backdrop={IMAGES.coverManuscript} backdropOpacity="opacity-30">
      <Eyebrow>Counting the moments</Eyebrow>
      <h2 className="mb-6 font-script text-4xl text-gold sm:mb-8 sm:text-6xl">
        {isPast ? 'The day is finally here' : "Until We Say 'I Do'"}
      </h2>

      {isPast ? (
        <p className="max-w-md font-serif text-xl text-maroon/90 sm:text-2xl">
          Let the celebrations begin — thank you for being part of our story.
        </p>
      ) : (
        <div className="flex flex-nowrap justify-center gap-2 sm:gap-5">
          {units.map((u) => (
            <CountUnit key={u.label} value={u.value} label={u.label} />
          ))}
        </div>
      )}

      <Divider className="my-6 sm:my-8" />
      <p className="font-serif text-xl font-medium text-maroon sm:text-2xl">{RECEPTION.date}</p>
      <p className="mt-1 font-serif text-base text-maroon/80 sm:text-lg">{VENUE.name}, Jabalpur</p>
      {VENUE.mapUrl && <MapLink url={VENUE.mapUrl} className="mt-2 text-base" />}

      <NextChapter />
    </PageShell>
  )
}
