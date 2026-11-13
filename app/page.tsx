import Link from 'next/link'
import { Edit, HandNote, PenArrow, Scribble } from './components/Pen'
import { formatPostDate, getPosts } from '../lib/posts'

const EMAIL = 'kirkland@kirklandgee.com'

const CLIENTS: { name: string; mark: string; note: React.ReactNode }[] = [
  {
    name: 'Brex',
    mark: 'brex',
    note: (
      <>
        Programmatic landing pages for card charges and expenses, which grew to{' '}
        <Scribble kind="highlight" delay={0.5}>20k+</Scribble> new visits a month.
      </>
    ),
  },
  { name: 'Webflow', mark: 'webflow', note: 'Helped design a framework that generates code components for a library of React components.' },
  { name: 'Ramp', mark: 'ramp', note: 'Editorial, mostly: workflows that adapt content to the brand’s voice.' },
  { name: 'Lovable', mark: 'lovable', note: 'Custom website templates, built programmatically.' },
  { name: 'Vercel', mark: 'vercel', note: 'A custom directory of LLM model stats and performance.' },
  { name: 'Augment Code', mark: 'augment', note: 'Editorial, plus two full programmatic sites: a library of skills and one of open-source plugins.' },
  {
    name: 'Airbyte',
    mark: 'airbyte',
    note: (
      <>
        Automations that update connector pages{' '}
        <Scribble kind="highlight" delay={0.9}>every day</Scribble> from changes in a GitHub repo, straight into their CMS.
      </>
    ),
  },
  { name: 'Strapi', mark: 'strapi', note: 'Editorial fact-checking and content work.' },
]

const wrap = 'mx-auto w-full max-w-[60rem] px-6 sm:px-10'

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 3)

  return (
    <>
      <nav className={`${wrap} flex justify-end pt-7 text-[1.05rem]`}>
        <a href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" className="pen-link">
          Writing
        </a>
      </nav>

      <main>
        {/* hello */}
        <section data-pen className={`${wrap} pt-[12vh] pb-[16vh]`}>
          <div className="flex items-center gap-3 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/profile.jpg" alt="Kirkland Gee" width={72} height={72} className="avatar w-[72px] h-[72px]" />
            <PenArrow className="w-10 h-7 -scale-x-100" d="M4 18c10-9 22-12 34-9m-8-6 8 6-7 7" viewBox="0 0 44 26" delay={0.9} />
            <HandNote className="text-[1.55rem]" rotate={-4} delay={1.1}>
              that’s me
            </HandNote>
          </div>

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
        </section>

        {/* who */}
        <section data-pen id="work" className={`${wrap} pb-[16vh]`}>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-12">
            <h2 className="title">A few teams I’ve done this for</h2>
            <HandNote className="text-[1.45rem]" rotate={-2} delay={0.9}>
              forward deployed: inside their teams, shipping
            </HandNote>
          </div>

          <ul className="work-list">
            {CLIENTS.map((c) => (
              <li key={c.name} className="client">
                <span className="mark align-[-0.12em] mr-1.5" style={{ ['--src' as string]: `url(/images/marks/${c.mark}.svg)` }} aria-hidden="true" />
                <span className="font-medium">{c.name}</span>
                <span className="text-muted"> — {c.note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* how */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title max-w-[20ch] mb-8">Most growth problems are really scale problems.</h2>
          <div className="body-copy max-w-[56ch] flex flex-col gap-5">
            <p>
              A team usually knows what it should be doing. More pages. Faster updates. Better use of its own data. It
              just doesn’t have the hours.
            </p>
            <p>
              I look at where the time actually goes, then build whatever gets it back. AI when it helps, plain software
              when it doesn’t.
            </p>
          </div>
        </section>

        {/* side */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title mb-4">Two businesses of my own</h2>
          <p className="body-copy max-w-[54ch] mb-8">
            Things I built for myself that turned into the real thing. Close to $100K run through them so far.
          </p>
          <ul className="work-list mb-10">
            <li>
              <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
                Stock Swap
              </a>
              <span className="text-muted"> — livestock auctions, online.</span>
            </li>
            <li>
              <a href="https://buyline.app" target="_blank" rel="noopener noreferrer" className="pen-link !text-ink">
                Buyline
              </a>
              <span className="text-muted"> — merch stores for creator agencies.</span>
            </li>
          </ul>
          <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="shot max-w-[36rem] block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/stockswap-listing.jpg" alt="Stock Swap auction listings" loading="lazy" />
          </a>
        </section>

        {/* writing */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title mb-4">
            <Scribble>Field Notes</Scribble>
          </h2>
          <p className="body-copy mb-10">My newsletter, on building products and the businesses around them.</p>
          <ol className="flex flex-col gap-7 max-w-[44rem] mb-10">
            {posts.map((post) => (
              <li key={post.href}>
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="block text-[1.3rem] leading-tight group-hover:text-pen transition-colors">{post.title}</span>
                  <span className="block text-muted mt-1">
                    {post.excerpt} <span className="whitespace-nowrap">· {formatPostDate(post.date)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <a href="https://kirklandgee.substack.com" target="_blank" rel="noopener noreferrer" className="pen-link body-copy !text-ink">
            Read it on Substack
          </a>
        </section>
      </main>

      <footer data-pen className={`${wrap} pb-14`}>
        <h2 className="title mb-4">Say hello.</h2>
        <p className="body-copy max-w-[46ch] mb-6">If something’s eating your week, email me.</p>
        <p className="flex flex-wrap gap-x-7 gap-y-2 body-copy mb-16">
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
      </footer>
    </>
  )
}
