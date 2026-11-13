'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const NAV = [
  { href: '/#work', label: 'Worked with' },
  { href: '/#projects', label: 'Projects' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('nav') && !target.closest('button')) setIsOpen(false)
    }
    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [isOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-kraft/95 backdrop-blur-[2px] border-b border-ink/10">
      <div className="mx-auto max-w-6xl h-full px-5 sm:px-8 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-tight" onClick={() => setIsOpen(false)}>
          Kirkland Gee
          <span className="ml-1 text-rust">·</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden z-50 p-2 rounded-sm hover:bg-ink/5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-ink transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>

        <nav
          className={`
            fixed sm:static top-16 right-0 left-0 sm:left-auto
            bg-kraft sm:bg-transparent
            border-b border-ink/10 sm:border-none
            flex flex-col sm:flex-row items-stretch sm:items-center gap-0 sm:gap-7
            px-5 sm:px-0 py-4 sm:py-0
            transition-transform duration-200
            ${isOpen ? 'translate-y-0' : '-translate-y-[150%] sm:translate-y-0'}
          `}
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-[13px] uppercase tracking-wide text-ink/80 hover:text-rust py-2.5 sm:py-0 relative group"
            >
              {item.label}
              <span className="hidden sm:block absolute -bottom-1.5 left-0 h-[1.5px] w-full bg-rust scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
