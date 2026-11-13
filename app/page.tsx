import Link from 'next/link'
import { HandNote, PenArrow, Scribble } from './components/Pen'
import { formatNoteDate, getVisibleNotes } from '../lib/notes'

const EMAIL = 'kirkland@kirklandgee.com'

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
  { name: 'Webflow', mark: 'webflow', note: 'Helped design a framework that generates code components for a library of React components.' },
  { name: 'Ramp', mark: 'ramp', note: 'Editorial, mostly: workflows that adapt content to the brand’s voice.' },
  { name: 'Lovable', mark: 'lovable', note: 'Custom website templates, built programmatically.' },
  { name: 'Vercel', mark: 'vercel', note: 'A custom directory of LLM model stats and performance.' },
  { name: 'Augment Code', mark: 'augment', note: 'Editorial, plus two full programmatic sites: a library of skills and one of open-source plugins.' },
  { name: 'Airbyte', mark: 'airbyte', note: 'Automations that update connector pages every day from changes in a GitHub repo, straight into their CMS.' },
  { name: 'Strapi', mark: 'strapi', note: 'Editorial fact-checking and content work.' },
]

const wrap = 'mx-auto w-full max-w-[60rem] px-6 sm:px-10'

export default function HomePage() {
  const notes = getVisibleNotes().slice(0, 3)

  return (
    <>
      <nav className={`${wrap} flex justify-end pt-7 text-[1.05rem]`}>
        <Link href="/notes" className="pen-link">
          Notes
        </Link>
      </nav>

      <main>
        {/* hello */}
        <section data-pen className={`${wrap} pt-[12vh] pb-[16vh]`}>
          <div className="flex items-center gap-3 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/kirkland_headshot.jpeg" alt="Kirkland Gee" width={72} height={72} className="avatar w-[72px] h-[72px]" />
            <PenArrow className="w-10 h-7 -scale-x-100" d="M4 18c10-9 22-12 34-9m-8-6 8 6-7 7" viewBox="0 0 44 26" delay={0.9} />
            <HandNote className="text-[1.55rem]" rotate={-4} delay={1.1}>
              that’s me
            </HandNote>
          </div>

          <h1 className="display mb-9">
            Kirkland <Scribble delay={0.35}>Gee</Scribble>
          </h1>

          <p className="lede max-w-[30ch] mb-6">I use AI to help companies grow, and to fix whatever is slowing them down.</p>

          <p className="body-copy max-w-[56ch] mb-8">
            It usually starts with something that won’t scale: pages nobody has time to write, updates someone makes by
            hand every morning, a tool the team needs that doesn’t exist yet. I find the fix and build it, whether that’s
            an AI system, a piece of software or a better way of working.
          </p>

          <a href={`mailto:${EMAIL}`} className="pen-link body-copy !text-ink">
            {EMAIL}
          </a>
        </section>

        {/* who */}
        <section data-pen id="work" className={`${wrap} pb-[16vh]`}>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-12">
            <h2 className="title">A few teams I’ve done this for</h2>
            <HandNote className="text-[1.45rem]" rotate={-2} delay={0.9}>
              agency work, so ask me for the details
            </HandNote>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-16 gap-y-9">
            {CLIENTS.map((c) => (
              <li key={c.name} className="client">
                <span className="flex items-center gap-2.5 text-[1.32rem] font-medium leading-none mb-2">
                  <span className="mark" style={{ ['--src' as string]: `url(/images/marks/${c.mark}.svg)` }} aria-hidden="true" />
                  {c.name}
                </span>
                <span className="block text-[1.04rem] leading-snug text-muted max-w-[40ch]">{c.note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* how */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title max-w-[20ch] mb-8">
            Most growth problems are really <Scribble>scale</Scribble> problems.
          </h2>
          <div className="body-copy max-w-[56ch] flex flex-col gap-5">
            <p>
              A team knows what it should be doing: more pages, faster updates, sharper content, better use of its own
              data. It just doesn’t have the hours.
            </p>
            <p>
              So I look at where the time actually goes, then build whatever gets it back. AI where it helps, plain
              software where it doesn’t, and a workflow your team will still be using in six months, after I’ve gone.
            </p>
          </div>
        </section>

        {/* side */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title mb-4">On the side</h2>
          <p className="body-copy max-w-[54ch] mb-10">
            Two things I built for myself that turned into real businesses, with close to $100K run through them so far.
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <a href="https://www.the-stock-swap.com" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="shot mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/stockswap-listing.jpg" alt="Stock Swap's auction listings" loading="lazy" />
              </span>
              <span className="block text-[1.25rem] group-hover:text-pen transition-colors">Stock Swap</span>
              <span className="block text-muted">Livestock auctions, online.</span>
            </a>
            <a href="https://buyline.app" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="shot mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/buyline-home.jpg" alt="Buyline's homepage" loading="lazy" />
              </span>
              <span className="block text-[1.25rem] group-hover:text-pen transition-colors">Buyline</span>
              <span className="block text-muted">Merch stores for creator agencies.</span>
            </a>
          </div>
        </section>

        {/* notes */}
        <section data-pen className={`${wrap} pb-[16vh]`}>
          <h2 className="title mb-4">Notes</h2>
          <p className="body-copy mb-10">Things I’m figuring out, written down.</p>
          {notes.length === 0 ? (
            <HandNote className="text-[1.6rem]" rotate={-2}>
              first entries coming soon
            </HandNote>
          ) : (
            <ol className="flex flex-col gap-7 max-w-[44rem]">
              {notes.map((note) => (
                <li key={note.slug}>
                  <Link href={`/notes/${note.slug}`} className="group block">
                    <span className="block text-[1.3rem] leading-tight group-hover:text-pen transition-colors">
                      {note.title}
                      {note.draft && <span className="hand text-[1.15rem] ml-2">(draft)</span>}
                    </span>
                    <span className="block text-muted mt-1">{formatNoteDate(note.date)}</span>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </section>
      </main>

      <footer data-pen className={`${wrap} pb-14`}>
        <h2 className="title mb-4">Say hello.</h2>
        <p className="body-copy max-w-[46ch] mb-6">Tell me what’s slowing your team down, and I’ll tell you how I’d fix it.</p>
        <p className="flex flex-wrap gap-x-7 gap-y-2 body-copy mb-16">
          <a href={`mailto:${EMAIL}`} className="pen-link !text-ink">
            {EMAIL}
          </a>
          <a className="pen-link !text-ink" href="https://www.linkedin.com/in/kirkland-gee/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="pen-link !text-ink" href="https://x.com/KirklandGee" target="_blank" rel="noopener noreferrer">
            X
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
