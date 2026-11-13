import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatNoteDate, getNoteBySlug, getVisibleNotes } from '../../../lib/notes'

export function generateStaticParams() {
  return getVisibleNotes().map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug)
  if (!note) return {}
  return { title: `${note.title} — Kirkland Gee`, description: note.excerpt }
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug)
  if (!note || (note.draft && process.env.NODE_ENV === 'production')) return notFound()

  return (
    <article className="pt-[10vh]">
      <p className="text-muted mb-4">
        {formatNoteDate(note.date)}
        {note.draft && <span className="hand text-[1.15rem] ml-2">(draft)</span>}
      </p>
      <h1 className="title !text-[clamp(2.2rem,5vw,3.4rem)] mb-10">{note.title}</h1>
      <div className="prose-note text-[1.16rem] leading-[1.75] text-ink/90">
        <MDXRemote source={note.content} />
      </div>
    </article>
  )
}
