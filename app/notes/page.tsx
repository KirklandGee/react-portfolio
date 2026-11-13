import Link from 'next/link'
import { getAllNotes } from '../../lib/notes'
import SketchHeading from '../components/SketchHeading'

export const metadata = {
  title: 'Notes — Kirkland Gee',
  description: 'A running notebook on software, growth, and the pivot between them.',
}

export default function NotesIndexPage() {
  const notes = getAllNotes()

  return (
    <div className="pt-28 pb-24 paper-rule min-h-[70vh]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <p className="font-mono text-[13px] uppercase tracking-wide text-rust mb-4">Notes</p>
        <SketchHeading as="h1" underline className="text-4xl sm:text-5xl mb-4">
          A running notebook.
        </SketchHeading>
        <p className="text-ink/70 mb-12 max-w-lg">
          Short, dated entries on what I&apos;m building. Some of these are marked as
          drafts while I get the real writing done — the rendering is real even
          when the words are placeholders.
        </p>

        <ol className="flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
          {notes.map((note) => (
            <li key={note.slug} className="py-6">
              <Link href={`/notes/${note.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2 className="font-serif text-xl group-hover:text-rust transition-colors">
                    {note.title}
                  </h2>
                  <time className="font-mono text-[12px] text-muted shrink-0">{note.date}</time>
                </div>
                <p className="text-[15px] text-ink/70 leading-relaxed mb-3">{note.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
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
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
