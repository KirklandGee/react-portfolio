import Image from 'next/image'

const projects = [
  {
    title: 'SEO Analytics Dashboard',
    description: 'A Python-based web application for visualizing SEO metrics and performance data.',
    type: 'Tool',
    status: 'Live',
    tech: ['Python', 'Streamlit', 'Analytics'],
    link: 'https://gsc-tools.streamlit.app/',
    image: '/images/streamlit.png',
    year: '2024'
  },
  {
    title: 'The Search Engineering Framework',
    description: 'My newsletter to help you learn how to think about growth solutions like an engineer.',
    type: 'Content',
    status: 'Active',
    tech: ['Newsletter', 'Growth', 'Engineering'],
    link: 'https://kirklandgee.substack.com/',
    image: '/images/newsletter.png',
    year: '2024'
  },
  {
    title: 'Code and Tools You Can Use',
    description: 'A GitHub repository where I share code and tools that I use to make my life easier.',
    type: 'Repository',
    status: 'Live',
    tech: ['GitHub', 'Open Source', 'Tools'],
    link: 'https://github.com/KirklandGee/search-engineering-framework',
    image: '/images/GitHub.png',
    year: '2024'
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Tool':
      return 'bg-[#9ece6a] text-[#1a1b26]' // Terminal green
    case 'Content':
      return 'bg-[#bb9af7] text-[#1a1b26]' // Terminal purple
    case 'Repository':
      return 'bg-[#7aa2f7] text-[#1a1b26]' // Terminal blue
    default:
      return 'bg-[#565f89] text-[#c0caf5]' // Default gray
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live':
      return 'bg-[#9ece6a] text-[#1a1b26]' // Green
    case 'Active':
      return 'bg-[#f7768e] text-[#1a1b26]' // Pink
    case 'In Progress':
      return 'bg-[#e0af68] text-[#1a1b26]' // Yellow
    case 'Archived':
      return 'bg-[#565f89] text-[#c0caf5]' // Gray
    default:
      return 'bg-[#565f89] text-[#c0caf5]'
  }
}

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-florent font-bold mb-8 text-[#c0caf5]">What I&apos;ve Built</h2>
      
      {/* Table Container */}
      <div className="bg-[#24283b] border border-[#414868] rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-[#1a1b26] border-b border-[#414868] text-sm font-mono font-semibold text-[#a9b1d6]">
          <div className="col-span-1">Preview</div>
          <div className="col-span-3">Project</div>
          <div className="col-span-3">Description</div>
          <div className="col-span-1">Type</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Tech Stack</div>
          <div className="col-span-1">Year</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#414868]">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="grid grid-cols-12 gap-4 p-4 hover:bg-[#414868]/30 transition-colors group cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Image */}
              <div className="col-span-1">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#414868]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Name */}
              <div className="col-span-3">
                <h3 className="font-florent font-semibold text-[#c0caf5] group-hover:text-[#f7768e] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-3">
                <p className="text-sm text-[#a9b1d6] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Type Tag */}
              <div className="col-span-1">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono font-semibold ${getTypeColor(project.type)}`}>
                  {project.type}
                </span>
              </div>

              {/* Status Tag */}
              <div className="col-span-1">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-mono font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Tech Stack - Show all technologies */}
              <div className="col-span-2">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="inline-block px-2 py-1 bg-[#414868] text-[#a9b1d6] rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1">
                <span className="text-sm font-mono text-[#565f89]">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-[#1a1b26] border-t border-[#414868]">
          <p className="text-xs font-mono text-[#565f89]">
            {projects.length} projects • Click any row to view project
          </p>
        </div>
      </div>
    </section>
  )
}