import Image from 'next/image'

const clients = [
  { name: 'Boisson', logo: '/images/Boisson.png' },
  { name: 'Ubisoft', logo: '/images/Ubisoft.png' },
  { name: 'Entrepreneur.com', logo: '/images/Entrepreneur.png' },
  { name: 'Universal Music Group', logo: '/images/UMG.png' },
  { name: 'HelloMood', logo: '/images/HelloMood.png'},
  { name: 'Lashify', logo: '/images/Lashify.png' },
  
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 mb-16">
      <h2 className="text-4xl font-florent font-bold mb-4 text-center text-foreground dark:text-foreground">Clients</h2>
      <div className="relative overflow-hidden py-4">
        <div className="client-logo-container animate-scroll dark:bg-foreground p-4 rounded-lg">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="inline-block mx-12 w-40 h-20 relative">
              <Image 
                src={client.logo} 
                alt={client.name} 
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
