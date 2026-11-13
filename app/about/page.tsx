import SketchHeading from '../components/SketchHeading'

export const metadata = {
  title: 'About — Kirkland Gee',
  description: 'From SEO and growth engineering to building software, honestly.',
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 paper-dots min-h-[70vh]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <p className="font-mono text-[13px] uppercase tracking-wide text-rust mb-4">About</p>
        <SketchHeading as="h1" underline className="text-4xl sm:text-5xl mb-10">
          The pivot, honestly.
        </SketchHeading>

        <div className="prose-notes space-y-6 text-[17px] leading-[1.75] text-ink/85">
          <p>
            I spent close to a decade doing SEO and growth engineering —
            mostly agency-side, usually as the forward-deployed engineer
            parachuted into a client&apos;s stack to make the strategy actually
            ship. Programmatic landing pages, content pipelines, CMS
            automations, the occasional dashboard nobody asked for but
            everybody used by week two.
          </p>
          <p>
            Somewhere in there the pattern became obvious: I was happiest on
            the weeks where the &ldquo;growth tactic&rdquo; was really just a well-built
            tool. Scripts that re-generated hundreds of pages correctly.
            Workflows that kept editorial voice consistent across a
            content library. A little app that saved someone two hours a day.
            The marketing framing was often incidental — the actual work was
            software.
          </p>
          <p>
            So that&apos;s what I do now. I still understand growth and SEO at a
            level most engineers don&apos;t bother with, which is useful — but the
            job has shifted to building product: real apps with real
            databases, real payments, real users, shipped and maintained, not
            just demoed.
          </p>
          <p>
            Stock Swap and Buyline (under Projects) are the clearest proof of
            that: full-stack apps with money moving through them, built and
            run solo. The client work under &ldquo;Worked with&rdquo; is the
            other half — automations and systems built inside other
            people&apos;s codebases, under their constraints, for their editorial
            and engineering teams.
          </p>
          <p>
            No pitch beyond that. If you want the long version in writing as
            it happens, I&apos;m keeping notes at <a href="/notes" className="text-rust underline underline-offset-4">/notes</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
