import { useEffect, useState } from 'react'

/**
 * Tracks which stacked section is currently in view (via IntersectionObserver)
 * and exposes a smooth-scroll jump. Sections are matched by id `section-{i}`.
 */
export function useActiveSection(count: number) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = Array.from({ length: count }, (_, i) =>
      document.getElementById(`section-${i}`),
    ).filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute('data-index')))
        })
      },
      { threshold: 0.55 },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [count])

  const scrollTo = (index: number) =>
    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' })

  return { active, scrollTo }
}
