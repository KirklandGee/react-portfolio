import React from 'react';

interface MessageProps {
  message: {
    text: string;
    isUser: boolean;
  };
}

export default function ChatMessage({ message }: MessageProps) {
  // Add email detection function
  const findEmail = (text: string) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    return text.match(emailRegex)?.[0];
  };

  const email = !message.isUser ? findEmail(message.text) : null;

  return (
    <>
      <div className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
        <span className={`inline-block p-2 rounded-lg ${
          message.isUser ? 'bg-moonstone text-isabelline' : 'bg-licorice text-isabelline'
        }`}>
          {message.text}
        </span>
      </div>
      {email && (
        <div className="mb-4 text-left">
          <a
            href={`mailto:${email}`}
            className="inline-block px-4 py-2 bg-bittersweet-shimmer text-isabelline rounded-full font-bold hover:bg-opacity-90 transition-opacity"
          >
            Send Me An Email!
          </a>
        </div>
      )}
    </>
  );
}
