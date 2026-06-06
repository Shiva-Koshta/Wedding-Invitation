import PersonChapter from '../components/PersonChapter'
import { IMAGES } from '../constants'
import { COUPLE } from '../data/wedding'

export default function GroomPage() {
  return (
    <PersonChapter
      eyebrow="Chapter One · The Groom"
      person={COUPLE.groom}
      portrait={IMAGES.groomPortrait}
      relations={{ grand: 'Grandson', child: 'Son' }}
      narration="Our story begins with a young man of warmth and quiet strength — steady as a banyan, with a smile that lights every room he enters."
    />
  )
}
