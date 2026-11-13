'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Marks every [data-pen] block as seen the first time it scrolls into view,
 * which lets its pen marks draw in and its notes get written. Runs once.
 */
export default function PenObserver() {
  const pathname = usePathname()
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('pen-ready')
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-pen]'))
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.setAttribute('data-seen', ''))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-seen', '')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -18% 0px', threshold: 0.2 }
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}
