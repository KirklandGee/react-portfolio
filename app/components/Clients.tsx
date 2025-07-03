import Image from 'next/image'

const clients = [
  {
    name: 'Ubisoft',
    logo: '/images/Ubisoft.png',
    timeframe: '2022-2023',
    description: 'Led technical SEO initiatives for major game launches, optimizing site architecture and spearheading editorial SEO campaigns.',
    result: '+40% organic visibility for Rocksmith+ marketing site',
    type: 'SEO & Content',
    featured: true,
    sortDate: '2023-01'
  },
  {
    name: 'Universal Music Group',
    logo: '/images/UMG.png',
    timeframe: '2021-2022',
    description: 'Technical and Editorial SEO for Sound of Vinyl and UMG artist brands.',
    result: '$300k+ in incremental organic revenue in 6 months',
    type: 'SEO & Content',
    featured: false,
    sortDate: '2022-12'
  },
  {
    name: 'Entrepreneur.com',
    logo: '/images/Entrepreneur.png',
    timeframe: '2022-2023',
    description: 'Overhaul site structure, content, and SEO strategy for Entrepreneur.com.',
    result: '20% organic traffic growth to target subfolder with no net-new content',
    type: 'SEO & Content',
    featured: false,
    sortDate: '2022-06'
  },
  {
    name: 'Boisson',
    logo: '/images/Boisson.png',
    timeframe: '2024',
    description: 'Built programmatic content engine on Shopify for targeted landing pages',
    result: 'Nothing happened, really, but it was fun',
    type: 'AI Workflows',
    featured: false,
    sortDate: '2024-01'
  },
  {
    name: 'Mood',
    logo: '/images/HelloMood.png',
    timeframe: '2024-2025',
    description: 'Built Programmatic SEO, data pipelines/dashboards, and custom growth tools for their SEO team.',
    result: 'Non-branded blog traffic up 10x in 6 months',
    type: 'Building',
    featured: true,
    sortDate: '2025-01'
  },
  {
    name: 'Lashify',
    logo: '/images/Lashify.png',
    timeframe: '2021-2022',
    description: 'SEO and content for their beauty e-commerce platform.',
    result: '2x+ organic traffic growth to key product pages',
    type: 'SEO & Content',
    featured: false,
    sortDate: '2021-12'
  }
]

// Sort clients by timeline descending (most recent first)
const sortedClients = [...clients].sort((a, b) => b.sortDate.localeCompare(a.sortDate))

const getTimeframeColor = (featured: boolean) => {
  return featured 
    ? 'bg-[#f7768e] text-[#1a1b26]' 
    : 'bg-[#7aa2f7] text-[#1a1b26]'
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'AI Workflows':
      return 'bg-[#9ece6a] text-[#1a1b26]' // Green
    case 'SEO & Content':
      return 'bg-[#bb9af7] text-[#1a1b26]' // Purple
    case 'E-commerce':
      return 'bg-[#e0af68] text-[#1a1b26]' // Yellow
    case 'Building':
      return 'bg-[#7aa2f7] text-[#1a1b26]' // Blue
    default:
      return 'bg-[#565f89] text-[#c0caf5]' // Gray
  }
}

export default function Clients() {
  return (
    <section id="clients" className="py-8">
      <h2 className="text-3xl font-florent font-bold mb-8 text-[#c0caf5]">Who I&apos;ve Worked With</h2>
      
      {/* Client Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedClients.map((client) => (
          <div 
            key={client.name}
            className="bg-[#24283b] border border-[#414868] rounded-lg p-6 hover:bg-[#414868]/30 transition-colors group"
          >
            {/* Header with Timeframe and Type */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${getTimeframeColor(client.featured)}`}>
                {client.timeframe}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${getTypeColor(client.type)}`}>
                {client.type}
              </span>
            </div>
            
            {/* Extra Large Logo - The main star */}
            <div className="flex justify-center mb-4">
              <div className="p-20 relative w-32 h-32 bg-white rounded-xl border border-[#414868] group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src={client.logo} 
                  alt={client.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
            
            {/* Client Name */}
            <h3 className="font-florent font-semibold text-[#c0caf5] group-hover:text-[#f7768e] transition-colors mb-3 text-center">
              {client.name}
            </h3>
            
            {/* Results - Key impact metric */}
            <div className="mb-4 text-center">
              <p className="text-sm font-mono font-semibold text-[#9ece6a] bg-[#9ece6a]/10 px-3 py-2 rounded-lg border border-[#9ece6a]/20">
                {client.result}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-sm text-[#a9b1d6] leading-relaxed text-center">
              {client.description}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline Footer */}
      <div className="mt-8 p-4 bg-[#1a1b26] border border-[#414868] rounded-lg">
        <p className="text-xs font-mono text-[#565f89] text-center">
          {clients.length} clients • Organized by timeline (most recent first)
        </p>
      </div>
    </section>
  )
}
