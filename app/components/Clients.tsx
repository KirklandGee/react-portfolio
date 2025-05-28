import Image from 'next/image'

export default function Clients() {
  return (
    <section id="clients" className="py-16 mb-16">
      <h2 className="text-4xl font-florent font-bold mb-12 text-center text-foreground dark:text-foreground">Clients</h2>
      
      {/* Random Grid Layout */}
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 min-h-[400px] md:min-h-[500px]">
          
          {/* Boisson - top left area */}
          <div className="col-span-3 col-start-1 row-start-1 flex items-center justify-center">
            <div className="relative w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 group cursor-pointer">
              <Image 
                src="/images/Boisson.png" 
                alt="Boisson" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Ubisoft - featured, center-ish */}
          <div className="col-span-4 col-start-6 row-start-2 flex items-center justify-center">
            <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 group cursor-pointer">
              <Image 
                src="/images/Ubisoft.png" 
                alt="Ubisoft" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Entrepreneur - featured, top right */}
          <div className="col-span-4 col-start-9 row-start-1 flex items-center justify-center">
            <div className="relative w-28 h-16 md:w-36 md:h-20 lg:w-44 lg:h-24 group cursor-pointer">
              <Image 
                src="/images/Entrepreneur.png" 
                alt="Entrepreneur.com" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Universal Music Group - featured, bottom left */}
          <div className="col-span-4 col-start-2 row-start-4 flex items-center justify-center">
            <div className="relative w-28 h-16 md:w-36 md:h-20 lg:w-44 lg:h-24 group cursor-pointer">
              <Image 
                src="/images/UMG.png" 
                alt="Universal Music Group" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          {/* HelloMood - middle right */}
          <div className="col-span-3 col-start-10 row-start-3 flex items-center justify-center">
            <div className="relative w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 group cursor-pointer">
              <Image 
                src="/images/HelloMood.png" 
                alt="HelloMood" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Lashify - bottom center */}
          <div className="col-span-3 col-start-6 row-start-5 flex items-center justify-center">
            <div className="relative w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 group cursor-pointer">
              <Image 
                src="/images/Lashify.png" 
                alt="Lashify" 
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
