import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-dark-400/50 rounded-xl p-6 border border-dark-100 ${
        onClick ? 'cursor-pointer hover:border-primary-500/50' : ''
      } transition-colors ${className}`}
    >
      {children}
    </div>
  );
}