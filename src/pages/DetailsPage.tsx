import Divider from '../components/Divider'
import MapLink from '../components/MapLink'
import NextChapter from '../components/NextChapter'
import PageShell, { Eyebrow } from '../components/PageShell'
import { IMAGES } from '../constants'
import { EVENTS, RECEPTION, VENUE, type WeddingEvent } from '../data/wedding'

function EventRow({ event, highlight = false }: { event: WeddingEvent; highlight?: boolean }) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 rounded-xl border px-4 py-3 text-left ${
        highlight ? 'border-gold bg-gold/10' : 'border-gold/30 bg-cream/60'
      }`}
    >
      <div>
        <p className={`font-serif text-lg sm:text-xl ${highlight ? 'text-maroon' : 'text-maroon/90'}`}>
          {event.name}
        </p>
        {event.time && <p className="font-serif text-sm text-maroon/60">{event.time}</p>}
        {event.mapUrl && <MapLink url={event.mapUrl} className="mt-1 text-sm" />}
      </div>
      <div className="shrink-0 text-right">
        <p className="font-serif text-base text-gold sm:text-lg">{event.date}</p>
        <p className="font-serif text-xs uppercase tracking-widest text-maroon/60">{event.day}</p>
      </div>
    </div>
  )
}

export default function DetailsPage() {
  return (
    <PageShell backdrop={IMAGES.mandapBackdrop} backdropOpacity="opacity-20">
        <Eyebrow>The Celebrations</Eyebrow>
        <h2 className="mb-6 font-script text-4xl text-gold sm:text-5xl">Join Us in Joy</h2>

        <div className="flex w-full flex-col gap-3">
          {EVENTS.map((event) => (
            <EventRow key={event.name} event={event} />
          ))}
          <EventRow event={RECEPTION} highlight />
        </div>

        <Divider className="my-7" />

        <div className="flex flex-col items-center font-serif text-maroon">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Reception Venue</p>
          <p className="mt-2 text-xl font-medium sm:text-2xl">{VENUE.name}</p>
          <p className="text-base text-maroon/80 sm:text-lg">{VENUE.address}</p>
          {VENUE.mapUrl && <MapLink url={VENUE.mapUrl} className="mt-2 text-base" />}
        </div>

        <p className="mt-8 max-w-md font-script text-2xl text-gold sm:text-3xl">
          Your presence will be the happiest chapter of our story.
        </p>
      <NextChapter />
    </PageShell>
  )
}
