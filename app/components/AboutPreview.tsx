import SketchHeading from './SketchHeading'

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-16 sm:py-20 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid sm:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <p className="font-mono text-[12px] uppercase tracking-wide text-muted">About</p>
        <div>
          <SketchHeading as="h2" className="text-2xl sm:text-3xl mb-4 max-w-xl">
            A decade in SEO and growth engineering, now building software.
          </SketchHeading>
          <p className="text-ink/80 leading-relaxed max-w-xl mb-5">
            I spent most of my career as an agency forward-deployed engineer —
            the person brought in to make growth and content systems actually
            work in code. That meant a lot of scrappy automation, a lot of
            CMS wiring, and a slow realization that I liked building the tool
            more than running the campaign.
          </p>
          <a href="/about" className="font-mono text-[13px] uppercase tracking-wide text-rust hover:underline underline-offset-4">
            Read the longer version →
          </a>
        </div>
      </div>
    </section>
  )
}
