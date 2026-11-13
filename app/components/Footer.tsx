import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiSubstack } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-kraft-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-wide text-muted mb-2">Get in touch</p>
          <a href="mailto:kirkland@kirklandgee.com" className="font-serif text-xl hover:text-rust transition-colors">
            kirkland@kirklandgee.com
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[12px] uppercase tracking-wide text-muted">Elsewhere</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/kirkland-gee/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-rust transition-colors">
              <FaLinkedin size={20} aria-hidden="true" focusable="false" />
            </Link>
            <Link href="https://github.com/KirklandGee" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-rust transition-colors">
              <FaGithub size={20} aria-hidden="true" focusable="false" />
            </Link>
            <Link href="https://x.com/KirklandGee" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-rust transition-colors">
              <FaTwitter size={20} aria-hidden="true" focusable="false" />
            </Link>
            <Link href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="hover:text-rust transition-colors">
              <SiSubstack size={20} aria-hidden="true" focusable="false" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[12px] text-muted">
          <Link href="/boring-info" className="hover:text-rust transition-colors">Boring info</Link>
          <span>&copy; {new Date().getFullYear()} Kirkland Gee</span>
        </div>
      </div>
    </footer>
  )
}
