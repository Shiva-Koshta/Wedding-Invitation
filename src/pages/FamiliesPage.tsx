import Divider from '../components/Divider'
import NextChapter from '../components/NextChapter'
import PageShell, { Eyebrow } from '../components/PageShell'
import { IMAGES } from '../constants'
import { COUPLE } from '../data/wedding'

function FamilyColumn({ title, elders }: { title: string; elders: string[] }) {
  return (
    <div className="flex-1">
      <h3 className="font-script text-2xl text-gold sm:text-3xl">{title}</h3>
      <div className="mt-2 space-y-1 font-serif text-sm text-maroon/80 sm:text-base">
        {elders.map((e) => (
          <p key={e}>{e}</p>
        ))}
      </div>
    </div>
  )
}

export default function FamiliesPage() {
  return (
    <PageShell backdrop={IMAGES.coverManuscript} backdropOpacity="opacity-30">
      <Eyebrow>Chapter Three · Two Families, One Story</Eyebrow>
      <div className="relative mb-4 w-full max-w-sm overflow-hidden rounded-2xl border-2 border-gold/50 shadow-lg sm:mb-6">
        <img
          src={IMAGES.familiesUnion}
          alt="Two families coming together"
          className="h-36 w-full object-cover sm:h-52"
        />
      </div>
      <p className="max-w-md font-serif text-base leading-relaxed text-maroon/90 sm:text-xl">
        When two hearts are joined, so too are the families who raised them. With blessings from
        every elder and the love of all who came before, two homes become one.
      </p>
      <Divider className="my-5 sm:my-7" />
      <div className="flex w-full items-start justify-between gap-4 text-center">
        <FamilyColumn
          title="The Groom's Family"
          elders={[COUPLE.groom.grandfather, COUPLE.groom.father]}
        />
        <span className="self-center font-script text-3xl text-gold">&amp;</span>
        <FamilyColumn
          title="The Bride's Family"
          elders={[COUPLE.bride.grandfather, COUPLE.bride.father]}
        />
      </div>
      <NextChapter />
    </PageShell>
  )
}
