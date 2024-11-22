import Image from 'next/image'

const projects = [
  {
    title: 'SEO Analytics Dashboard',
    description: 'A Python-based web application for visualizing SEO metrics.',
    image: '/images/streamlit.png?height=200&width=300',
    link: 'https://gsc-tools.streamlit.app/'
  },
  {
    title: 'The Search Engineering Framework',
    description: 'My newsletter to help you learn how to think about marketing like an engineer.',
    image: '/images/newsletter.png?height=200&width=300',
    link: 'https://kirklandgee.substack.com/'
  },
  {
    title: 'Code and Tools You Can Use',
    description: 'A GitHub repository where I share code and tools that I use to make my life easier.',
    image: '/images/GitHub.png?height=200&width=300',
    link: 'https://github.com/KirklandGee/search-engineering-framework'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-florent font-bold mb-8 text-center text-licorice dark:text-foreground">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-isabelline rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-foreground dark:text-background">
            <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-licorice">{project.title}</h3>
              <p className="text-foreground dark:text-background mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-licorice text-isabelline px-4 py-2 rounded-full hover:bg-bittersweet-shimmer transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}