'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('nav') && !target.closest('button')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', closeMenu)
    return () => document.removeEventListener('click', closeMenu)
  }, [isOpen])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline py-4 sticky top-0 z-50">
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-white/20 z-40" 
             onClick={() => setIsOpen(false)} />
      )}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-florent font-regular z-50">Kirkland Gee</Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Navigation */}
          <nav className={`
            fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto
            bg-isabelline dark:bg-licorice md:bg-transparent
            transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
            transition-transform duration-300 ease-in-out
            flex flex-col md:flex-row items-start md:items-center
            pt-20 md:pt-0 px-6 md:px-0
            z-40 md:z-auto
          `}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto md:mr-4">
              <li><a href="#clients" onClick={() => setIsOpen(false)} className="block hover:text-moonstone transition duration-300">Clients</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-moonstone transition duration-300">Projects</a></li>
              <li><a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-moonstone transition duration-300">What I Do</a></li>
              <li>
                <a 
                  href="https://github.com/KirklandGee/react-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-moonstone transition duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>Source</span>
                </a>
              </li>
            </ul>
            
            <button 
              onClick={() => {
                toggleDarkMode();
                setIsOpen(false);
              }} 
              className="mt-4 md:mt-0 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
