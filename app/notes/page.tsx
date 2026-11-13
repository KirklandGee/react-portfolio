import Link from 'next/link'
import { formatNoteDate, getVisibleNotes } from '../../lib/notes'

export const metadata = {
  title: 'Notes — Kirkland Gee',
  description: 'Things Kirkland Gee is figuring out about AI, growth and building, written down.',
}

export default function NotesIndexPage() {
  const notes = getVisibleNotes()

  return (
    <main data-pen className="pt-[10vh]">
      <h1 className="display mb-5">Notes</h1>
      <p className="body-copy mb-14">Things I’m figuring out, written down.</p>

      {notes.length === 0 ? (
        <p className="hand text-[1.6rem] -rotate-2">first entries coming soon</p>
      ) : (
        <ol className="flex flex-col gap-9">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`} className="group block">
                <span className="block text-[1.5rem] leading-tight group-hover:text-pen transition-colors">
                  {note.title}
                  {note.draft && <span className="hand text-[1.15rem] ml-2">(draft)</span>}
                </span>
                <span className="block text-muted text-[1.05rem] leading-snug mt-1.5">{note.excerpt}</span>
                <span className="block text-muted text-[0.95rem] mt-1.5">{formatNoteDate(note.date)}</span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  )
}
