import Image from 'next/image'

const PROJECTS = [
  {
    name: 'Stock Swap',
    tag: 'Nov 2026 · Next.js · Prisma · Postgres · Stripe · WebSocket',
    blurb:
      'A livestock auction marketplace — real money, real auctions, real-time bidding over WebSocket.',
    image: '/images/stockswap-listing.jpg',
    href: 'https://github.com/KirklandGee',
  },
  {
    name: 'Buyline',
    tag: 'Rails · Inertia · React · Stripe Connect · Printful',
    blurb:
      '"Shopify for creator agencies" — multi-tenant ecommerce for agencies running influencer stores, Stripe Connect payouts, Printful fulfillment.',
    image: '/images/buyline-home.jpg',
    href: 'https://github.com/KirklandGee',
  },
]

/**
 * Projects — deliberately downplayed: lower visual weight than the logo
 * band above it, small case-study cards, background-of-the-page treatment.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-ink/10 bg-kraft-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[12px] uppercase tracking-wide text-muted mb-6">
          Also building — side projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lift-card group border border-ink/10 bg-parchment/50 rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} product screenshot`}
                  fill
                  className="object-cover object-top grayscale-[20%] opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted mb-1">{p.tag}</p>
                <h3 className="font-serif text-xl mb-1.5">{p.name}</h3>
                <p className="text-[14px] text-ink/70 leading-relaxed">{p.blurb}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
