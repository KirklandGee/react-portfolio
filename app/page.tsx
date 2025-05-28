'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Button from './components/Button'
import KeyStats from './components/KeyStats'
import Image from 'next/image'

// Terminal Animation Component
function TerminalAnimation() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isInteractive, setIsInteractive] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{text: string, isUser: boolean}>>([])
  const [inputValue, setInputValue] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Predefined responses map
  const responseMap: { [key: string]: string } = {
    "who are you": "I'm Kirkland, a Growth Engineer who helps businesses unlock growth through technical SEO, automation, and custom tools.",
    "what do you do": "I help businesses unlock growth through programmatic SEO, automating technical SEO tasks with AI, and building custom analytics solutions.",
    "why hire you": "I specialize in complex, technical projects that typical SEO agencies can't handle. I build custom tools, automate workflows, and deliver measurable growth.",
    "what tools": "My favorite 'tool' is Python - it lets me automate almost any SEO task and build custom solutions at a fraction of the cost of existing tools.",
    "contact": "You can reach me at kirkland@kirklandgee.com or through the contact form on this site.",
    "help": "Available commands: who are you, what do you do, why hire you, what tools, contact, clear",
    "clear": "CLEAR_TERMINAL"
  }

  const terminalLines = [
    { type: 'command', text: 'Initializing Growth Engineer v2025.05...', delay: 500 },
    { type: 'success', text: '✓ Loading core competencies...', delay: 200 },
    { type: 'success', text: '✓ Scanning experience database...', delay: 200 },
    { type: 'success', text: '✓ Compiling success metrics...', delay: 200 },
    { type: 'header', text: '> PROFILE_LOADED', delay: 500 },
    { type: 'data', text: 'Name: Kirkland Gee', delay: 200 },
    { type: 'data', text: 'Role: Growth Engineer & Technical SEO', delay: 200 },
    { type: 'data', text: 'Location: Remote / Global', delay: 200 },
    { type: 'data', text: 'Experience: 5+ years', delay: 200 },
    { type: 'header', text: '> INSTALLING_DEPENDENCIES', delay: 500 },
    { type: 'install', text: '+ technical-seo@latest', delay: 200 },
    { type: 'install', text: '+ growth-engineering@4.2.0', delay: 200 },
    { type: 'install', text: '+ data-analytics@3.8.1', delay: 200 },
    { type: 'install', text: '+ ai-workflow-automation@2.1.5', delay: 200 },
    { type: 'install', text: '+ content-optimization@5.0.2', delay: 200 },
    { type: 'install', text: '+ python-development@3.11.0', delay: 200 },
    { type: 'header', text: '> PERFORMANCE_METRICS', delay: 500 },
    { type: 'metric', text: '▲ Organic Traffic Growth: +60% average', delay: 200 },
    { type: 'metric', text: '▲ Revenue Impact: $300K+ generated', delay: 200 },
    { type: 'metric', text: '▲ Clients Served: 15+ companies', delay: 200 },
    { type: 'metric', text: '▲ Tools Built: 25+ custom solutions', delay: 200 },
    { type: 'header', text: '> CORE_SERVICES', delay: 500 },
    { type: 'service', text: '→ Technical SEO & Site Architecture', delay: 200 },
    { type: 'service', text: '→ Growth Engineering & Automation', delay: 200 },
    { type: 'service', text: '→ Custom Analytics & Dashboards', delay: 200 },
    { type: 'service', text: '→ Programmatic Content Systems', delay: 200 },
    { type: 'service', text: '→ Performance Optimization', delay: 200 },
    { type: 'service', text: '→ Data Pipeline Development', delay: 200 },
    { type: 'complete', text: 'Installation complete! Ready to accelerate your growth.', delay: 500 },
    { type: 'help', text: 'Terminal is now interactive. Type "help" for available commands.', delay: 200 }
  ]

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const currentLine = terminalLines[visibleLines]
      let charIndex = 0
      
      const typeText = () => {
        if (charIndex < currentLine.text.length) {
          setCurrentText(currentLine.text.slice(0, charIndex + 1))
          charIndex++
          setTimeout(typeText, 15) // Typing speed - made faster
        } else {
          setTimeout(() => {
            setVisibleLines(prev => prev + 1)
            setCurrentText('')
          }, currentLine.delay)
        }
      }
      
      setTimeout(typeText, 100)
    } else {
      setIsTyping(false)
      setTimeout(() => {
        setIsInteractive(true)
      }, 1000)
    }
  }, [visibleLines])

  const handleCommand = (command: string) => {
    const userMessage = { text: `$ ${command}`, isUser: true }
    setChatMessages(prev => [...prev, userMessage])
    setIsProcessing(true)

    setTimeout(() => {
      const lowerCommand = command.toLowerCase().trim()
      
      if (lowerCommand === 'clear') {
        setChatMessages([])
        setIsProcessing(false)
        return
      }

      // Find matching command (partial matching)
      const matchedKey = Object.keys(responseMap).find(key => 
        lowerCommand.includes(key) || key.includes(lowerCommand)
      )
      
      const response = matchedKey ? responseMap[matchedKey] : 
        `Command not found: ${command}. Type "help" for available commands.`
      
      const botMessage = { text: response, isUser: false }
      setChatMessages(prev => [...prev, botMessage])
      setIsProcessing(false)
    }, 800)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isProcessing) {
      handleCommand(inputValue.trim())
      setInputValue('')
    }
  }

  const getLineStyle = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-[#9ece6a]'
      case 'success':
        return 'text-[#a9b1d6] ml-2'
      case 'header':
        return 'text-[#f7768e] mt-4'
      case 'data':
        return 'text-[#bb9af7] mt-1'
      case 'install':
        return 'text-[#a9b1d6] mt-1'
      case 'metric':
        return 'text-[#9ece6a] mt-1'
      case 'service':
        return 'text-[#a9b1d6] mt-1'
      case 'complete':
        return 'text-[#9ece6a] mt-4'
      case 'help':
        return 'text-[#7aa2f7] mt-2'
      default:
        return 'text-[#c0caf5]'
    }
  }

  const formatText = (text: string, type: string) => {
    if (type === 'header') {
      return (
        <>
          <span className="text-[#565f89]">&gt;</span> {text.replace('> ', '')}
        </>
      )
    }
    if (type === 'command') {
      return (
        <>
          <span className="text-[#565f89]">$</span> {text}
        </>
      )
    }
    if (type === 'complete') {
      return (
        <>
          <span className="text-[#565f89]">$</span> {text}
        </>
      )
    }
    if (type === 'help') {
      return text
    }
    if (type === 'data') {
      const [key, ...valueParts] = text.split(': ')
      const value = valueParts.join(': ')
      return (
        <>
          {key}: <span className="text-[#c0caf5]">{value}</span>
        </>
      )
    }
    if (type === 'metric') {
      const parts = text.split(': ')
      if (parts.length === 2) {
        return (
          <>
            {parts[0]}: <span className="font-bold">{parts[1]}</span>
          </>
        )
      }
    }
    return text
  }

  const findEmail = (text: string) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    return text.match(emailRegex)?.[0];
  }

  return (
    <div className="bg-[#1a1b26] border border-[#414868] rounded-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-[#24283b] border-b border-[#414868] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
          <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
        </div>
        <span className="text-sm font-mono text-[#a9b1d6] ml-4">
          {isInteractive ? 'kirkland@portfolio:~$ Interactive Terminal' : 'kirkland@portfolio:~$ npm install growth-engineer'}
        </span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm leading-relaxed min-h-[500px] max-h-[600px] overflow-y-auto">
        <div className="space-y-1">
          {/* Render completed lines */}
          {terminalLines.slice(0, visibleLines).map((line, index) => (
            <div key={index} className={getLineStyle(line.type)}>
              {formatText(line.text, line.type)}
            </div>
          ))}
          
          {/* Render currently typing line */}
          {visibleLines < terminalLines.length && currentText && (
            <div className={getLineStyle(terminalLines[visibleLines].type)}>
              {formatText(currentText, terminalLines[visibleLines].type)}
              <span className="animate-pulse">|</span>
            </div>
          )}
          
          {/* Chat Messages */}
          {isInteractive && chatMessages.map((message, index) => (
            <div key={`chat-${index}`} className="mt-2">
              {message.isUser ? (
                <div className="text-[#c0caf5]">{message.text}</div>
              ) : (
                <>
                  <div className="text-[#a9b1d6] mt-1">{message.text}</div>
                  {findEmail(message.text) && (
                    <div className="mt-2">
                      <a
                        href={`mailto:${findEmail(message.text)}`}
                        className="inline-block px-3 py-1 bg-[#f7768e] text-[#1a1b26] rounded text-xs font-semibold hover:bg-[#ff9cad] transition-colors"
                      >
                        Send Email
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          
          {/* Processing indicator */}
          {isProcessing && (
            <div className="mt-2 flex items-center space-x-1 text-[#f7768e]">
              <div className="w-2 h-2 bg-[#f7768e] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#f7768e] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-[#f7768e] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
          
          {/* Interactive input */}
          {isInteractive && (
            <form onSubmit={handleSubmit} className="mt-4 flex items-center">
              <span className="text-[#565f89]">$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="ml-2 bg-transparent text-[#c0caf5] outline-none flex-1 font-mono"
                placeholder="Type a command..."
                disabled={isProcessing}
                autoFocus
              />
              {!isProcessing && (
                <div className="w-2 h-4 bg-[#f7768e] ml-1 animate-pulse"></div>
              )}
            </form>
          )}
          
          {/* Static cursor when not interactive */}
          {!isTyping && !isInteractive && (
            <div className="mt-4 flex items-center">
              <span className="text-[#565f89]">$</span>
              <span className="ml-2 text-[#c0caf5]">_</span>
              <div className="w-2 h-4 bg-[#f7768e] ml-1 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Command suggestions */}
      {isInteractive && (
        <div className="bg-[#24283b] border-t border-[#414868] p-4">
          <div className="text-xs text-[#565f89] mb-2">Quick commands:</div>
          <div className="flex flex-wrap gap-2">
            {['who are you', 'what do you do', 'why hire you', 'contact', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  setInputValue(cmd)
                  handleCommand(cmd)
                }}
                className="px-2 py-1 bg-[#414868] text-[#a9b1d6] rounded text-xs hover:bg-[#565f89] transition-colors"
                disabled={isProcessing}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('what-i-do')

  const renderMainContent = () => {
    switch (activeSection) {
      case 'what-i-do':
        return (
          <div className="space-y-8">
            {/* Animated Terminal Interface */}
            <TerminalAnimation />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <KeyStats />
              </div>
              <div className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-xl font-florent font-bold text-[#c0caf5] mb-4">Ready to Work Together?</h3>
                  <p className="text-[#a9b1d6] mb-6">
                    Let&apos;s build something that drives real growth for your business.
                  </p>
                  <Button className="bg-[#f7768e] text-[#1a1b26] hover:bg-[#ff9cad] text-lg py-3 px-6 font-mono">
                    <a target="_blank" rel="noopener noreferrer" href="https://forms.clickup.com/9011305725/f/8chv77x-2771/NNJ6RB2QJWGUVH99LY">
                      Start a Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'who-ive-worked-with':
        return (
          <div className="bg-[#24283b] border border-[#414868] rounded-lg p-8">
            <Clients />
          </div>
        )
      case 'what-ive-built':
        return (
          <div className="bg-[#24283b] border border-[#414868] rounded-lg p-8">
            <Projects />
          </div>
        )
      case 'get-in-touch':
        return (
          <div className="bg-[#24283b] border border-[#414868] rounded-lg p-8">
            <Chatbot />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#c0caf5]">
      {/* Mobile Header - only show on mobile */}
      <div className="lg:hidden">
        <Header />
      </div>

      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-[#24283b] border-r border-[#414868]">
          <div className="flex flex-col flex-1 min-h-0">
            {/* Profile Section */}
            <div className="flex flex-col items-center p-8 border-b border-[#414868]">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-florent font-bold text-[#f7768e]">Kirkland Gee</h1>
              </div>
              <Image 
                src="/images/kirkland_headshot.jpeg" 
                alt="Kirkland" 
                width={120} 
                height={120} 
                className="rounded-lg border border-[#414868] mb-4"
              />
              <div className="text-center">
                <h2 className="text-xl font-florent font-bold text-[#c0caf5]">About Me</h2>
                <p className="text-[#a9b1d6] text-sm mt-2 leading-relaxed">
                  I help businesses find new growth opportunities through data, AI, and custom tools.
                </p>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/kirklandgee" className="text-[#565f89] hover:text-[#f7768e] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/kirklandgee/" className="text-[#565f89] hover:text-[#f7768e] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@GeeWilliKirks" className="text-[#565f89] hover:text-[#f7768e] transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              <h3 className="text-lg font-florent font-bold mb-4 text-[#f7768e]">Projects</h3>
              {[
                { id: 'what-i-do', label: 'What I Do' },
                { id: 'who-ive-worked-with', label: 'Who I\'ve Worked With' },
                { id: 'what-ive-built', label: 'What I\'ve Built' },
                { id: 'get-in-touch', label: 'Get In Touch' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#f7768e] text-[#1a1b26]'
                      : 'text-[#a9b1d6] hover:bg-[#414868] hover:text-[#f7768e]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          {/* Desktop Content */}
          <div className="hidden lg:block p-8">
            {renderMainContent()}
          </div>

          {/* Mobile Content - Scrollable sections */}
          <div className="lg:hidden">
            <main className="px-4 py-8 space-y-8">
              {/* What I Do Section */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <div className="flex flex-col justify-center items-center min-h-[400px]">
                  <h1 className="text-4xl font-florent font-bold text-center">
                    I Build <span className="text-[#f7768e]">Growth Solutions</span>
                  </h1>
                  <p className="text-lg text-center mt-6 text-[#a9b1d6]">
                    I help businesses find new growth opportunities through data, AI, and custom tools.
                  </p>
                  <Image 
                    src="/images/kirkland_headshot.jpeg" 
                    alt="Kirkland Headshot" 
                    width={160} 
                    height={160} 
                    className="mt-8 border-2 border-[#f7768e] rounded-full"
                  />  
                  <Button className="mt-8 bg-[#f7768e] text-[#1a1b26] hover:bg-[#ff9cad] text-lg py-3 px-6 font-mono">
                    <a target="_blank" rel="noopener noreferrer" href="https://forms.clickup.com/9011305725/f/8chv77x-2771/NNJ6RB2QJWGUVH99LY">
                      Work With Me
                    </a>
                  </Button>
                </div>
              </section>

              {/* Key Stats */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <KeyStats />
              </section>

              {/* Skills */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <Skills />
              </section>

              {/* Clients */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <Clients />
              </section>

              {/* Projects */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <Projects />
              </section>

              {/* Chatbot */}
              <section className="bg-[#24283b] border border-[#414868] rounded-lg p-6">
                <Chatbot />
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
