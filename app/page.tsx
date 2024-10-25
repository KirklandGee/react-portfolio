import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Button from './components/Button'
import KeyStats from './components/KeyStats'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center h-96">
          <h1 className="text-4xl font-florent text-center">I Do Technical SEO.</h1>
          <p className="text-md text-center mt-3">I help businesses find new growth opportunities through technical SEO, AI, and custom tools.</p>
          <Button className="mt-20 bg-licorice text-background dark:bg-foreground dark:text-background ease-in-out hover:animate-glow text-xl py-3 px-6">
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
