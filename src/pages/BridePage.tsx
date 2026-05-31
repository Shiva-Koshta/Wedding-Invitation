import PersonChapter from '../components/PersonChapter'
import { IMAGES } from '../constants'
import { COUPLE } from '../data/wedding'

export default function BridePage() {
  return (
    <PersonChapter
      eyebrow="Chapter Two · The Bride"
      person={COUPLE.bride}
      portrait={IMAGES.bridePortrait}
      relations={{ grand: 'Granddaughter', child: 'Daughter' }}
      narration="And then there is she — grace wrapped in laughter, a heart full of marigold-bright joy that turns ordinary days into something golden."
    />
  )
}
