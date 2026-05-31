import Divider from '../components/Divider'
import NextChapter from '../components/NextChapter'
import PageShell, { Eyebrow } from '../components/PageShell'
import { IMAGES } from '../constants'
import { COUPLE, RECEPTION, VENUE } from '../data/wedding'

export default function AnnouncementPage() {
  return (
    <PageShell backdrop={IMAGES.announcementScene} backdropOpacity="opacity-25">
      <Eyebrow>And so it was written&hellip;</Eyebrow>
        <p className="max-w-md font-serif text-lg text-maroon/90 sm:text-xl">
          Together with their families, we joyfully invite you to celebrate the wedding of
        </p>
        <h2 className="mt-6 font-script text-5xl leading-tight text-gold sm:text-7xl">
          {COUPLE.groom.name}
          <span className="mx-3 text-maroon/70">&amp;</span>
          {COUPLE.bride.name}
        </h2>
        <Divider className="my-7" />
        <p className="font-serif text-2xl font-medium text-maroon sm:text-3xl">{RECEPTION.date}</p>
        <p className="mt-1 font-serif text-lg text-maroon/80">
          {RECEPTION.day} · {RECEPTION.time}
        </p>
        <p className="mt-4 font-serif text-base text-maroon/80 sm:text-lg">
          {VENUE.name}, {VENUE.address}
        </p>
      <NextChapter />
    </PageShell>
  )
}
