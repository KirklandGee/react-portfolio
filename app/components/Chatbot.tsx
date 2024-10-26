'use client'

import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import Button from './Button';

interface Message {
  text: string;
  isUser: boolean;
}

// Predefined responses map
const responseMap: { [key: string]: string } = {
  "Who are you?": "I'm Kirkland, a Technical SEO Lead at ClickUp, one of the fastest growing software companies in the world. I also sometimes help other businesses with their SEO—especially more complex, technical projects that your average SEO agency can't handle.",
  "What do you do?": "I help businesses unlock growth. Primarily, I do this through programmatic SEO, automating technical SEO tasks with AI, and helping businesses understand the impact of SEO on their bottom line.",
  "What's your favorite SEO tool?": "This might be cheating, but I'd say Python. It allows me to automate almost any SEO task, and I can replicate most features of other SEO tools for clients, but at a fraction of the cost, and with a lot more customization.",
  "Why should I hire you?": "Well, that depends. Are you trying to level up your team's approach to SEO data? Looking to experiment with new, emerging strategies? Want to build a custom tool to automate your SEO workflow? I've done all of these things and more for my clients, and I can do the same for you.\n\nIf you're just looking to write some content and build some backlinks, I'm probably not the best fit. But if you want to unlock real growth let's chat."
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleUserInput = (input: string) => {
    const newUserMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = responseMap[input] || "I'm not sure how to respond to that.";
      const newBotMessage = { text: response, isUser: false };
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      <Button 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300
          ${!isOpen && !hasInteracted ? 'animate-glisten bg-gradient-to-r from-licorice via-[rgba(245,241,237,0.4)] to-licorice bg-[length:300%_100%] dark:from-isabelline dark:via-[rgba(13,1,6,0.4)] dark:to-isabelline' : ''}
          ${isOpen ? 'bg-bittersweet-shimmer' : 'bg-licorice text-isabelline hover:bg-bittersweet-shimmer dark:bg-isabelline dark:text-licorice dark:hover:bg-bittersweet-shimmer'}
          ${isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onClick={() => {
          setIsOpen(!isOpen);
          setHasInteracted(true);
        }}
      >
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </Button>

      {isOpen && (
        <div className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex flex-col bg-isabelline dark:bg-licorice rounded-xl shadow-lg overflow-hidden h-[600px] w-full max-w-md">
            {/* Header */}
            <div className="bg-isabelline dark:bg-licorice text-licorice dark:text-isabelline p-4 text-xl font-bold border-b border-licorice dark:border-isabelline flex justify-between items-center">
              <span>Chat with Me</span>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-licorice dark:text-isabelline hover:text-bittersweet-shimmer dark:hover:text-bittersweet-shimmer"
                aria-label="Close Chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 bg-isabelline dark:bg-licorice"
            >
              {messages.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-bittersweet-shimmer">
                  <div className="w-3 h-3 bg-bittersweet-shimmer rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-bittersweet-shimmer rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-bittersweet-shimmer rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}
            </div>

            {/* Predefined input buttons */}
            <div className="p-4 border-t border-bittersweet-shimmer flex flex-wrap gap-2 bg-isabelline dark:bg-licorice">
              {Object.keys(responseMap).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleUserInput(question)}
                  className="px-3 py-1 bg-licorice text-isabelline dark:bg-isabelline dark:text-licorice rounded-full text-md hover:bg-bittersweet-shimmer focus:outline-none focus:ring-2 focus:ring-licorice dark:focus:ring-isabelline"
                >
                  {question}
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-bittersweet-shimmer flex flex-wrap gap-2 bg-isabelline dark:bg-licorice">
              <input 
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-1 bg-isabelline text-licorice dark:bg-licorice dark:text-isabelline rounded-full text-md border-2 border-licorice dark:border-isabelline focus:outline-none focus:ring-1 focus:ring-licorice dark:focus:ring-isabelline"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleUserInput(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
