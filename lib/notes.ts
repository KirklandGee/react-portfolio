import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes')

export type NoteFrontmatter = {
  title: string
  date: string
  tags: string[]
  excerpt: string
  draft?: boolean
}

export type Note = NoteFrontmatter & {
  slug: string
  content: string
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return []
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.mdx'))
  const notes = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    return { slug, content, ...(data as NoteFrontmatter) }
  })
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNoteBySlug(slug: string): Note | null {
  const file = path.join(NOTES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(raw)
  return { slug, content, ...(data as NoteFrontmatter) }
}
