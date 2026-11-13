import SketchHeading from './SketchHeading'

/**
 * Hero — the one dealt moment on this page: a dog-eared page-corner that
 * folds back into place on load (CSS only, data-enter), on a kraft ground
 * with a faint dot-grid, like the cover of a notebook.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      data-enter
      className="relative pt-16 min-h-[92vh] flex items-center overflow-hidden paper-dots"
    >
      {/* dog-eared corner fold — the hero's one dealt moment */}
      <div
        aria-hidden="true"
        className="absolute top-16 right-0 w-24 h-24 sm:w-32 sm:h-32 animate-pageTurn"
        style={{ transformOrigin: 'top right' }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm">
          <polygon points="120,0 120,120 0,120" fill="#ddcda8" />
          <polygon points="120,0 120,120 0,120" fill="#241b14" opacity="0.06" />
          <path d="M0,120 L120,0" stroke="#241b14" strokeOpacity="0.15" strokeWidth="1" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <p className="font-mono text-[13px] uppercase tracking-wide text-rust mb-5">
          Field notes · Nov 2026 · Based remote
        </p>

        <SketchHeading as="h1" underline className="text-[13vw] sm:text-[72px] leading-[1.02] tracking-tight max-w-3xl">
          Kirkland Gee
        </SketchHeading>

        <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink/85 leading-relaxed">
          I build sharp AI and product tools — came up through a decade of SEO
          and growth engineering, now I ship software for a living.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="btn-press inline-flex items-center rounded-sm bg-ink text-kraft px-6 py-3 font-mono text-[13px] uppercase tracking-wide hover:bg-rust"
          >
            See who I&apos;ve worked with
          </a>
          <a
            href="#projects"
            className="btn-press inline-flex items-center rounded-sm border border-ink/25 px-6 py-3 font-mono text-[13px] uppercase tracking-wide hover:border-rust hover:text-rust"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  )
}
