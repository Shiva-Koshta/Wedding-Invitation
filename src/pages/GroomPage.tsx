import PersonChapter from '../components/PersonChapter'
import { IMAGES } from '../constants'
import { COUPLE } from '../data/wedding'

export default function GroomPage() {
  return (
    <PersonChapter
      eyebrow="Chapter Two · The Groom"
      person={COUPLE.groom}
      portrait={IMAGES.groomPortrait}
      relations={{ grand: 'Grandson', child: 'Son' }}
      narration="And then there is him — a young man of warmth and quiet strength, steady as a banyan, with a smile that lights every room he enters."
    />
  )
}
