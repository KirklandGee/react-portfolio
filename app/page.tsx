import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Button from './components/Button'
import KeyStats from './components/KeyStats'
import Image from 'next/image'
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center min-h-[600px]">
          <h1 className="text-6xl font-florent font-bold text-center mt-15">
            I Build <span className="relative inline-block">
              <span className="relative z-10">
                <span className="relative inline-block">
                  <span className="relative z-10">Growth</span>
                  <span className="absolute -inset-1 top-[15%] h-[85%] bg-moonstone/60 transform origin-left scale-x-0 -skew-x-10 animate-highlight"></span>
                </span>
                {" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Solutions</span>
                  <span className="absolute -inset-1 top-[15%] h-[85%] bg-moonstone/60 transform origin-left scale-x-0 -skew-x-10 animate-highlightDelayed opacity-0"></span>
                </span>
              </span>
            </span>
          </h1>
          <p className="text-lg text-center mt-3">I help businesses find new growth opportunities through data, AI, and custom tools.</p>
          <Image src="/images/kirkland_headshot.jpeg" alt="Kirkland Headshot" width={220} height={220} className="mt-10 border-full border-2 border-licorice dark:border-isabelline rounded-full"/>  
          <Button className="mt-20 bg-licorice text-isabelline ease-in-out hover:animate-glow text-xl py-3 px-6">
            <a target="_blank" rel="noopener noreferrer" href="https://forms.clickup.com/9011305725/f/8chv77x-2771/NNJ6RB2QJWGUVH99LY">
              Work With Me
            </a>
          </Button>
        </div>
        <div className="mt-16 w-screen">
          <Chatbot />
        </div>
        <Clients />
        <KeyStats />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
