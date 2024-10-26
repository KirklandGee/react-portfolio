import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-sm font-florent mb-2">Contact Me</h2>
          <p className="mb-1 text-xs">Email: <a href="mailto:kirkland@kirklandgee.com" className="hover:text-[#D0B8A8] transition duration-300">kirkland@kirklandgee.com</a></p>
        </div>
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-sm font-florent mb-2">Privacy & Boring Stuff</h2>
          <p className="text-xs mb-1"><a href="/boring-info" className="hover:text-[#D0B8A8] transition duration-300">Payment Terms</a></p>
        </div>
        <nav className="flex flex-col items-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="https://www.linkedin.com/in/kirkland-gee/" target="_blank" rel="noopener noreferrer" className="hover:text-bittersweet-shimmer transition duration-300">
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/KirklandGee" target="_blank" rel="noopener noreferrer" className="hover:text-bittersweet-shimmer transition duration-300">
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/KirklandGee" target="_blank" rel="noopener noreferrer" className="hover:text-bittersweet-shimmer transition duration-300">
                <FaTwitter size={20} className="sm:w-6 sm:h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-bittersweet-shimmer transition duration-300">
                <SiSubstack size={20} className="sm:w-6 sm:h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
