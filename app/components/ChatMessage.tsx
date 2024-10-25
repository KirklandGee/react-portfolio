import React from 'react';

interface MessageProps {
  message: {
    text: string;
    isUser: boolean;
  };
}

export default function ChatMessage({ message }: MessageProps) {
  return (
    <div className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
      <span className={`inline-block p-2 rounded-lg ${
        message.isUser ? 'bg-moonstone text-isabelline' : 'bg-licorice text-isabelline'
      }`}>
        {message.text}
      </span>
    </div>
  );
}