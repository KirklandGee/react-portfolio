import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false, href }) => {
  const baseClasses = 'px-4 py-2 rounded-full text-md font-semibold text-foreground bg-background transition-colors duration-300 ease-in-out hover:bg-bittersweet-shimmer dark:text-background dark:bg-foreground focus:outline-none';
  
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

