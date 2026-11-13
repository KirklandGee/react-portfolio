import Image from 'next/image'
import SketchHeading from './SketchHeading'

type LogoEntry = {
  name: string
  note: string
  logo?: string // path under /public, real icon or wordmark file
  wordmark?: boolean // true: client must supply a mark, render a text placeholder
}

const CURRENT_WORK: LogoEntry[] = [
  {
    name: 'Brex',
    note: 'Built programmatic landing pages for card charges and expenses — 20k+ new visits a month.',
    logo: '/images/logos/brex.svg',
  },
  {
    name: 'Webflow',
    note: 'Designed a framework for programmatically generating code components for a React component library.',
    logo: '/images/logos/webflow.svg',
  },
  {
    name: 'Ramp',
    note: 'Editorial work; built workflows for adapting content to brand voice.',
    wordmark: true,
  },
  {
    name: 'Lovable',
    note: 'Custom website template builds, done programmatically.',
    logo: '/images/logos/lovable-icon.svg',
  },
  {
    name: 'Vercel',
    note: 'Built a custom directory for LLM model stats and performance.',
    logo: '/images/logos/vercel-icon.svg',
  },
  {
    name: 'Augment Code',
    note: 'Editorial work, plus two full programmatic site buildouts for libraries of skills and open-source plugins.',
    wordmark: true,
  },
  {
    name: 'Airbyte',
    note: 'Built automations that updated connector pages daily from GitHub repo changes, wired into their CMS.',
    logo: '/images/logos/airbyte-icon.svg',
  },
  {
    name: 'Strapi',
    note: 'Editorial fact-checking and content work.',
    logo: '/images/logos/strapi-icon.svg',
  },
]

// Found live on kirklandgee.com with no case-study copy — generic one-liner,
// client should refine with the real engagement detail.
const EARLIER_WORK: LogoEntry[] = [
  { name: 'Boisson', note: 'SEO & growth engineering.', logo: '/images/Boisson.png' },
  { name: 'Ubisoft', note: 'SEO & growth engineering.', logo: '/images/Ubisoft.png' },
  { name: 'Entrepreneur.com', note: 'SEO & growth engineering.', logo: '/images/Entrepreneur.png' },
  { name: 'Universal Music Group', note: 'SEO & growth engineering.', logo: '/images/UMG.png' },
  { name: 'HelloMood', note: 'SEO & growth engineering.', logo: '/images/HelloMood.png' },
  { name: 'Lashify', note: 'SEO & growth engineering.', logo: '/images/Lashify.png' },
]

function LogoTile({ entry }: { entry: LogoEntry }) {
  return (
    <div className="lift-card border border-ink/12 bg-parchment/60 rounded-sm p-5 flex flex-col gap-4 h-full">
      <div className="h-10 flex items-center">
        {entry.logo ? (
          <Image
            src={entry.logo}
            alt={entry.name}
            width={120}
            height={40}
            className="logo-mono h-8 w-auto object-contain object-left"
          />
        ) : (
          <span className="font-serif italic text-xl text-ink/70">{entry.name}</span>
        )}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{entry.name}</p>
      <p className="text-[15px] leading-relaxed text-ink/80">{entry.note}</p>
    </div>
  )
}

export default function LogoBand() {
  return (
    <section id="work" className="py-20 sm:py-28 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[13px] uppercase tracking-wide text-rust mb-3">Worked with</p>
        <SketchHeading as="h2" className="text-3xl sm:text-4xl mb-10 max-w-2xl">
          Teams whose tools and content I&apos;ve shipped.
        </SketchHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENT_WORK.map((entry) => (
            <LogoTile key={entry.name} entry={entry} />
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[12px] uppercase tracking-wide text-muted mb-5">
            Earlier work — SEO & growth engineering era
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EARLIER_WORK.map((entry) => (
              <div key={entry.name} className="flex items-center justify-center h-16 border border-ink/10 bg-parchment/40 rounded-sm p-3">
                <Image
                  src={entry.logo!}
                  alt={entry.name}
                  width={100}
                  height={32}
                  className="logo-mono h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[11px] text-muted">
            * one-liners above are placeholders — no case-study copy existed for these on the live site; replace with the real engagement detail.
          </p>
        </div>
      </div>
    </section>
  )
}
