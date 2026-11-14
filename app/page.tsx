import Link from 'next/link'
import { Edit, HandNote, PenArrow, Scribble } from './components/Pen'
import JournalCal from './components/JournalCal'
import { formatPostDate, getPosts } from '../lib/posts'

const EMAIL = 'kirkland@kirklandgee.com'
const CAL = 'https://cal.com/kirkland-gee-4vhn4z'

const CLIENTS: { name: string; mark: string; note: React.ReactNode }[] = [
  {
    name: 'Brex',
    mark: 'brex',
    note: (
      <>
        Programmatic landing pages for card charges and expenses, which grew to 20k+ new visits a month.
      </>
    ),
  },
  {
    name: 'Webflow',
    mark: 'webflow',
    note: 'Created a programmatic framework for generating new code components within their design language.',
  },
  {
    name: 'Ramp',
    mark: 'ramp',
    note: 'Calibrating context and brand voice to improve content performance and LLM visibility.',
  },
  {
    name: 'Lovable',
    mark: 'lovable',
    note: 'Full website templates generated through LLMs, via a custom prompt chain.',
  },
  {
    name: 'Vercel',
    mark: 'vercel',
    note: 'A directory of LLM model stats and performance, pulling from their AI Gateway data.',
  },
  {
    name: 'Augment Code',
    mark: 'augment',
    note: 'Editorial, plus two full programmatic sites: a library of skills and one of open-source plugins.',
  },
  {
    name: 'Airbyte',
    mark: 'airbyte',
    note: 'Automations that update connector pages every day from changes in a GitHub repo, wired into their CMS.',
  },
]

const NOW = [
  { label: 'right now', text: 'Forward deployed at GrowthX, building agentic AI systems and applications for teams like Brex and Airbyte.' },
  { label: 'before', text: 'Led technical SEO and organic growth for ClickUp and their marketing team.' },
  { label: 'sometimes', text: 'Father, husband, aspiring TCG pro.' },
]

const BUSINESSES = [
  {
    name: 'Stock Swap',
    href: 'https://www.the-stock-swap.com',
    line: 'eBay for livestock.',
    details: [
      'Simple and easy to use, built for small farmers like the ones I know.',
      'List an animal, take bids from anywhere, and skip the drive to the sale barn.',
    ],
    shot: '/images/stockswap-listing.jpg',
    alt: 'Stock Swap auction listings',
    tilt: '-2.4deg',
    delay: '0.1s',
  },
  {
    name: 'Buyline',
    href: 'https://buyline.app',
    line: 'merch stores for creator agencies.',
    details: [
      'POD and custom orders, email marketing, promotions and shipping, all in one place.',
      'Run every creator’s store from one login instead of a tab for each.',
    ],
    shot: '/images/buyline-home.jpg',
    alt: 'Buyline homepage',
    tilt: '2.2deg',
    delay: '0.3s',
  },
]

function Portrait({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/profile.jpg" alt="Kirkland Gee" width={96} height={96} className="avatar w-[72px] h-[72px] xl:w-[96px] xl:h-[96px]" />
      <div className="flex items-center gap-2 mt-2 xl:justify-end">
        <PenArrow className="w-9 h-6 -scale-x-100 xl:hidden" d="M4 18c10-9 22-12 34-9m-8-6 8 6-7 7" viewBox="0 0 44 26" delay={0.9} />
        <HandNote className="text-[1.4rem] block" rotate={-6} delay={1.1}>
          that’s me
        </HandNote>
      </div>
    </div>
  )
}

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 4)

  return (
    <>
      <nav className="page-col pt-7">
        <div className="col flex justify-end text-[1.05rem]">
          <a href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" className="pen-link">
            Writing
          </a>
        </div>
      </nav>

      <main>
        <section data-pen className="page-col section pt-[8vh]">
          <Portrait className="margin-note left hidden xl:block" />
          <div className="col">
            <Portrait className="flex items-center gap-3 mb-8 xl:hidden" />

            <h1 className="display mb-9">
              Kirkland <Scribble delay={0.35}>Gee</Scribble>
            </h1>

            <p className="lede max-w-[44ch] mb-6">
              I sit with a team, find the part of the job they <Edit from="tolerate" to="hate," /> and build the thing that does it for them.
            </p>

            <p className="body-copy max-w-[56ch] mb-9">
              If everyone has to be a middle manager now, you should at least have your robot employees doing the things
              you never liked. I take the time to sit with teams, find where AI is immensely useful, and help them
              implement systems to drive progress.
            </p>

<div className="space-y-2.5 text-muted list-copy">
              {NOW.map((n, i) => (
                <p key={n.label} className="has-hang">
                  <span className="hang hang-left">
                    <HandNote className="text-[1.4rem] leading-none" rotate={-4} delay={1.2 + i * 0.2}>
                      {n.label}
                    </HandNote>
                  </span>
                  <span className="hand text-[1.3rem] mr-2 xl:hidden">{n.label}</span>
                  {n.text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section data-pen id="work" className="page-col section">
          <div className="col">
            <h2 className="title mb-3">A few teams I’ve done this for</h2>
            <HandNote className="text-[1.4rem] block mb-9" rotate={-2} delay={0.6}>
              forward deployed work, building with their teams
            </HandNote>

            <ul className="work-list clients">
              {CLIENTS.map((c) => (
                <li key={c.name} className="client">
                  <span className="mark align-[-0.12em] mr-1.5" style={{ ['--src' as string]: `url(/images/marks/${c.mark}.svg)` }} aria-hidden="true" />
                  <span className="font-medium">{c.name}</span>
                  <span className="text-muted"> — {c.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section data-pen className="page-col section">
          <div className="col">
            <h2 className="title mb-3">Two businesses of my own</h2>
            <p className="body-copy mb-9">Things I built for myself that turned into the real thing. Together they process six figures in revenue.</p>
            <div className="space-y-6">
              {BUSINESSES.map((b) => (
                <div key={b.name} className="has-hang xl:min-h-[9rem]">
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="hang hang-right margin-shot shot" style={{ ['--r' as string]: b.tilt, ['--d' as string]: b.delay }} tabIndex={-1} aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.shot} alt="" loading="lazy" />
                  </a>
                  <ul className="work-list">
                    <li>
                      <a href={b.href} target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
                        {b.name}
                      </a>
                      <span className="text-muted"> — {b.line}</span>
                    </li>
                    {b.details.map((d) => (
                      <li key={d} className="detail text-muted">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4 xl:hidden">
              {BUSINESSES.map((b) => (
                <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className="shot flex-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.shot} alt={b.alt} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section data-pen className="page-col section">
          <div className="col">
            <h2 className="title mb-3">Field Notes</h2>
            <p className="body-copy mb-7">The newsletter. Dates in the margin, like the notebook.</p>
            <ol className="journal-index mb-8">
              {posts.map((post) => (
                <li key={post.href}>
                  <a href={post.href} target="_blank" rel="noopener noreferrer" className="group">
                    <span className="when">{formatPostDate(post.date)}</span>
                    <span>
                      <span className="block leading-tight group-hover:text-pen transition-colors">{post.title}</span>
                      <span className="block text-muted text-[0.98rem] mt-1">{post.excerpt}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <a href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" className="pen-link body-copy !text-ink">
              Subscribe on Substack
            </a>
          </div>
        </section>
      </main>

      <footer data-pen className="page-col pb-14">
        <div className="margin-note hidden xl:block pt-2">
          <JournalCal />
        </div>
        <div className="col">
          <h2 className="title mb-3">Let’s talk.</h2>
          <div className="body-copy max-w-[50ch] mb-6 space-y-4">
            <p>We’re all a little lost in this age of AI. I know how the systems work, and I can make them work for you.</p>
            <p>
              My real specialty is people. How a team actually operates, where the work piles up, and which parts of the
              job everyone quietly dreads. I automate those parts, so your team spends its days on the work it’s good at
              and actually enjoys. More tokens was never the point.
            </p>
            <p>Grab 30 minutes and I’ll tell you where I’d start.</p>
          </div>
          <div className="mb-8 xl:hidden">
            <JournalCal />
          </div>
          <p className="flex flex-wrap gap-x-7 gap-y-2 body-copy mb-16">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
              Book a time
            </a>
            <a href={`mailto:${EMAIL}`} className="pen-link !text-ink">
              {EMAIL}
            </a>
            <a className="pen-link !text-ink" href="https://www.linkedin.com/in/kirkland-gee/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="pen-link !text-ink" href="https://github.com/KirklandGee" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
          <p className="text-[0.92rem] text-muted flex gap-5">
            <span>© {new Date().getFullYear()} Kirkland Gee</span>
            <Link href="/boring-info" className="hover:text-pen">
              Boring info
            </Link>
          </p>
        </div>
      </footer>
    </>
  )
}
