import type { ReactNode } from 'react'
import { useActiveSection } from '../lib/useActiveSection'
import FloralCorners from './FloralCorners'
import NavControls from './NavControls'

/** Vertical scrolling story: each page stacks full-bleed; corners frame the viewport, dots track progress. */
export default function Storybook({ pages }: { pages: ReactNode[] }) {
  const { active, scrollTo } = useActiveSection(pages.length)

  return (
    <div className="parchment-grain relative">
      <FloralCorners />

      <main>
        {pages.map((page, i) => (
          <div key={i} id={`section-${i}`} data-index={i} className="snap-start">
            {page}
          </div>
        ))}
      </main>

      <NavControls count={pages.length} active={active} onJump={scrollTo} />
    </div>
  )
}
