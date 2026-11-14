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
        Programmatic landing pages for card charges and expenses, which grew to{' '}
        <Scribble kind="circle" delay={0.5}>20k+</Scribble> new visits a month.
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
        <section data-pen className="page-col pt-[10vh] pb-[14vh]">
          <Portrait className="margin-note left hidden xl:block" />
          <div className="col">
            <Portrait className="flex items-center gap-3 mb-8 xl:hidden" />

            <h1 className="display mb-9">
              Kirkland <Scribble delay={0.35}>Gee</Scribble>
            </h1>

            <p className="lede max-w-[44ch] mb-6">
              I sit with a team, find the thing that <Edit from="won’t scale" to="eats their week," /> and build the thing that does.
            </p>

            <p className="body-copy max-w-[56ch] mb-10">
              It usually starts with something nobody has time for. Pages that should exist. A report someone still
              updates by hand. A tool the team needs that doesn’t exist yet. I find that thing and I ship it.
            </p>

            <p className="flex items-center gap-3 text-muted text-[1.02rem]">
              <span className="now-dot" aria-hidden="true" />
              Right now: forward deployed at GrowthX, building AI agents and small apps for teams like Brex and Airbyte.
            </p>
          </div>
        </section>

        <section data-pen id="work" className="page-col pb-[14vh]">
          <div className="col">
            <h2 className="title mb-2">A few teams I’ve done this for</h2>
            <HandNote className="text-[1.4rem] block mb-10" rotate={-2} delay={0.6}>
              forward deployed work, building with their teams
            </HandNote>

            <ul className="work-list">
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

        <section data-pen className="page-col pb-[14vh]">
          <div className="margin-note hidden xl:block">
            <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="margin-shot shot" style={{ ['--r' as string]: '-2.4deg', ['--d' as string]: '0.1s' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/stockswap-listing.jpg" alt="Stock Swap auction listings" loading="lazy" />
            </a>
            <a href="https://buyline.app" target="_blank" rel="noopener noreferrer" className="margin-shot shot" style={{ ['--r' as string]: '2.2deg', ['--d' as string]: '0.28s' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/buyline-home.jpg" alt="Buyline homepage" loading="lazy" />
            </a>
          </div>
          <div className="col">
            <h2 className="title mb-4">Two businesses of my own</h2>
            <p className="body-copy mb-8">Things I built for myself that turned into the real thing. Close to $100K run through them so far.</p>
            <ul className="work-list">
              <li>
                <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
                  Stock Swap
                </a>
                <span className="text-muted"> — livestock auctions, online.</span>
              </li>
              <li className="!pl-7 !text-[0.98rem] text-muted">Live bidding, proxy bids, and settlement after the hammer.</li>
              <li className="!pl-7 !text-[0.98rem] text-muted">Built for people who still buy and sell on a handshake.</li>
              <li>
                <a href="https://buyline.app" target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
                  Buyline
                </a>
                <span className="text-muted"> — merch stores for creator agencies.</span>
              </li>
              <li className="!pl-7 !text-[0.98rem] text-muted">One workspace to launch a creator’s store in an afternoon.</li>
              <li className="!pl-7 !text-[0.98rem] text-muted">POD plus custom orders, payouts through Stripe Connect.</li>
            </ul>
            <div className="mt-8 flex gap-4 xl:hidden">
              <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="shot flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/stockswap-listing.jpg" alt="Stock Swap auction listings" loading="lazy" />
              </a>
              <a href="https://buyline.app" target="_blank" rel="noopener noreferrer" className="shot flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/buyline-home.jpg" alt="Buyline homepage" loading="lazy" />
              </a>
            </div>
          </div>
        </section>

        <section data-pen className="page-col pb-[14vh]">
          <div className="col">
            <h2 className="title mb-2">Field Notes</h2>
            <p className="body-copy mb-8">The newsletter. Dates in the margin, like the notebook.</p>
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
          <h2 className="title mb-4">Let’s talk.</h2>
          <p className="body-copy max-w-[46ch] mb-6">
            If something’s eating your week, grab 30 minutes. I’ll tell you how I’d fix it.
          </p>
          <p className="mb-8 xl:hidden">
            <JournalCal />
          </p>
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
