// Writing lives on Substack for now; the site reads its RSS feed and refreshes hourly.

export type Post = {
  title: string
  excerpt: string
  date: string // ISO
  href: string
}

const FEED = 'https://kirklandgee.substack.com/feed'

function pick(item: string, tag: string): string {
  const m = item.match(new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`))
  return m ? m[1].trim() : ''
}

function decode(s: string): string {
  return s
    .replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []
    return items
      .map((item) => ({
        title: decode(pick(item, 'title')),
        excerpt: decode(pick(item, 'description')),
        date: new Date(pick(item, 'pubDate')).toISOString(),
        href: pick(item, 'link'),
      }))
      .filter((p) => p.title && p.href && p.title.toLowerCase() !== 'coming soon')
  } catch {
    return []
  }
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
