'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener)
      })
    }
  }, [])

  return (
    <header className="bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-florent">Kirkland Gee</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#clients" className="hover:text-[#D0B8A8] transition duration-300">Clients</a></li>
            <li><a href="#projects" className="hover:text-[#D0B8A8] transition duration-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-[#D0B8A8] transition duration-300">What I Do</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
