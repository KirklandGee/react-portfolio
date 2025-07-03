import { useEffect, useRef } from 'react'

export default function TerminalAnimation({
  visibleLines,
  setVisibleLines,
  currentText,
  setCurrentText,
  isTyping,
  setIsTyping,
  isInteractive,
  setIsInteractive,
  chatMessages,
  setChatMessages,
  inputValue,
  setInputValue,
  isProcessing,
  setIsProcessing,
  showHelpCommands,
  setShowHelpCommands
}: {
  visibleLines: number,
  setVisibleLines: (n: number) => void,
  currentText: string,
  setCurrentText: (s: string) => void,
  isTyping: boolean,
  setIsTyping: (b: boolean) => void,
  isInteractive: boolean,
  setIsInteractive: (b: boolean) => void,
  chatMessages: Array<{text: string, isUser: boolean}>,
  setChatMessages: (msgs: Array<{text: string, isUser: boolean}>) => void,
  inputValue: string,
  setInputValue: (s: string) => void,
  isProcessing: boolean,
  setIsProcessing: (b: boolean) => void,
  showHelpCommands: boolean,
  setShowHelpCommands: (b: boolean) => void
}) {
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
    { type: 'command', text: 'Initializing Growth Engineer v2025.05...', delay: 400 },
    { type: 'success', text: '✓ Loading core competencies...', delay: 100 },
    { type: 'success', text: '✓ Scanning experience database...', delay: 100 },
    { type: 'success', text: '✓ Compiling success metrics...', delay: 100 },
    { type: 'header', text: '> PROFILE_LOADED', delay: 400 },
    { type: 'data', text: 'Name: Kirkland Gee', delay: 100 },
    { type: 'data', text: 'Role: Growth Engineer & Technical SEO', delay: 100 },
    { type: 'data', text: 'Location: Remote / Global', delay: 100 },
    { type: 'data', text: 'Experience: 5+ years', delay: 100 },
    { type: 'header', text: '> INSTALLING_DEPENDENCIES', delay: 400 },
    { type: 'install', text: '+ technical-seo@latest', delay: 50 },
    { type: 'install', text: '+ growth-engineering@4.2.0', delay: 50 },
    { type: 'install', text: '+ data-analytics@3.8.1', delay: 50 },
    { type: 'install', text: '+ ai-workflow-automation@2.1.5', delay: 50 },
    { type: 'install', text: '+ content-optimization@5.0.2', delay: 50 },
    { type: 'install', text: '+ python-development@3.11.0', delay: 50 },
    { type: 'header', text: '> PERFORMANCE_METRICS', delay: 400 },
    { type: 'metric', text: '▲ Organic Traffic Growth: +60% average', delay: 100},
    { type: 'metric', text: '▲ Revenue Impact: $300K+ generated', delay: 100 },
    { type: 'metric', text: '▲ Clients Served: 15+ companies', delay: 100 },
    { type: 'metric', text: '▲ Tools Built: 25+ custom solutions', delay: 100 },
    { type: 'header', text: '> CORE_SERVICES', delay: 400 },
    { type: 'service', text: '→ Technical SEO & Site Architecture', delay: 100 },
    { type: 'service', text: '→ Growth Engineering & Automation', delay: 100 },
    { type: 'service', text: '→ Custom Analytics & Dashboards', delay: 100 },
    { type: 'service', text: '→ Programmatic Content Systems', delay: 100 },
    { type: 'service', text: '→ Performance Optimization', delay: 100 },
    { type: 'service', text: '→ Data Pipeline Development', delay: 100 },
    { type: 'complete', text: 'Installation complete! Ready to accelerate your growth.', delay: 400 },
    { type: 'help', text: 'Terminal is now interactive. Type "help" for available commands.', delay: 100 }
  ]

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const currentLine = terminalLines[visibleLines]
      let charIndex = 0
      
      const typeText = () => {
        if (charIndex < currentLine.text.length) {
          setCurrentText(currentLine.text.slice(0, charIndex + 1))
          charIndex++
          setTimeout(typeText, 8)
        } else {
          setTimeout(() => {
            setVisibleLines(visibleLines + 1)
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

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [visibleLines, currentText, chatMessages, isProcessing, showHelpCommands])

  useEffect(() => {
    if (!isProcessing && isInteractive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isProcessing, isInteractive])

  const handleCommand = (command: string) => {
    const userMessage = { text: `$ ${command}`, isUser: true }
    setChatMessages([...chatMessages, userMessage])
    setIsProcessing(true)

    setTimeout(() => {
      const lowerCommand = command.toLowerCase().trim()
      
      if (lowerCommand === 'clear') {
        setChatMessages([])
        setShowHelpCommands(false)
        setIsProcessing(false)
        return
      }

      if (lowerCommand === 'help') {
        setShowHelpCommands(true)
      } else {
        setShowHelpCommands(false)
      }

      // Find matching command (partial matching)
      const matchedKey = Object.keys(responseMap).find(key => 
        lowerCommand.includes(key) || key.includes(lowerCommand)
      )
      
      const response = matchedKey ? responseMap[matchedKey] : 
        `Command not found: ${command}. Type "help" for available commands.`
      
      const botMessage = { text: response, isUser: false }
      setChatMessages([...chatMessages, botMessage])
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
      <div 
        ref={terminalRef}
        className="p-6 font-mono text-sm leading-relaxed min-h-[600px] max-h-[700px] overflow-y-auto" 
        style={{ scrollBehavior: 'smooth' }}
      >
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

          {/* Help Commands - shown after typing help */}
          {showHelpCommands && (
            <div className="mt-4 space-y-2">
              <div className="text-[#565f89] text-xs">Click any command below:</div>
              <div className="flex flex-wrap gap-2">
                {['who are you', 'what do you do', 'why hire you', 'what tools', 'contact'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setInputValue(cmd)
                      handleCommand(cmd)
                    }}
                    className="px-2 py-1 bg-[#414868] text-[#a9b1d6] rounded text-xs hover:bg-[#565f89] transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          )}
          
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
                ref={inputRef}
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
    </div>
  )
}
