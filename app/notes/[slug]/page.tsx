import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllNotes, getNoteBySlug } from '../../../lib/notes'

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug)
  if (!note) return {}
  return { title: `${note.title} — Notes — Kirkland Gee`, description: note.excerpt }
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug)
  if (!note) return notFound()

  return (
    <div className="pt-28 pb-24 paper-rule min-h-[70vh]">
      <article className="mx-auto max-w-2xl px-5 sm:px-8">
        <Link href="/notes" className="font-mono text-[12px] uppercase tracking-wide text-muted hover:text-rust">
          ← Notes
        </Link>

        <div className="mt-6 mb-10">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <time className="font-mono text-[12px] text-muted">{note.date}</time>
            {note.draft && (
              <span className="font-mono text-[10px] uppercase tracking-wide bg-rust/10 text-rust px-2 py-1 rounded-sm">
                Draft
              </span>
            )}
            {note.tags?.map((tag) => (
              <span key={tag} className="font-mono text-[10px] uppercase tracking-wide bg-ink/5 text-muted px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl leading-tight">{note.title}</h1>
        </div>

        <div className="prose-notes text-[17px] leading-[1.8] text-ink/85 space-y-6 [&_em]:text-muted [&_em]:not-italic [&_em]:font-mono [&_em]:text-[14px] [&_em]:block [&_em]:mt-8">
          <MDXRemote source={note.content} />
        </div>
      </article>
    </div>
  )
}
