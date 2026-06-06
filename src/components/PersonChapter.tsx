import { IMAGES } from '../constants'
import type { Person } from '../data/wedding'
import Divider from './Divider'
import NextChapter from './NextChapter'
import PageShell, { Eyebrow } from './PageShell'
import PortraitFrame from './PortraitFrame'

interface PersonChapterProps {
  eyebrow: string
  person: Person
  portrait: string
  narration: string
  /** Relationship labels, e.g. { grand: 'Grandson', child: 'Son' }. */
  relations: { grand: string; child: string }
}

export default function PersonChapter({
  eyebrow,
  person,
  portrait,
  narration,
  relations,
}: PersonChapterProps) {
  return (
    <PageShell backdrop={IMAGES.coverManuscript} backdropOpacity="opacity-30">
      <Eyebrow>{eyebrow}</Eyebrow>
      <PortraitFrame src={portrait} alt={person.name} />
      <h2 className="font-script text-5xl leading-none text-gold sm:text-6xl">{person.name}</h2>
      {person.nickname && (
        <p className="mt-2 font-serif text-base italic text-maroon/70 sm:text-lg">&ldquo;{person.nickname}&rdquo;</p>
      )}
      <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-maroon/90 sm:mt-5 sm:text-xl">
        {narration}
      </p>
      <Divider className="my-5 sm:my-7" />
      <div className="space-y-1 font-serif text-sm text-maroon/80 sm:text-lg">
        <p>
          {relations.grand} of <span className="text-maroon">{person.grandfather}</span>
        </p>
        <p>
          {relations.child} of <span className="text-maroon">{person.father}</span>
        </p>
      </div>
      <NextChapter />
    </PageShell>
  )
}
