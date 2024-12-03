import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function Button({
  children,
  icon: Icon,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-200';
  const variantClasses = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-700 active:bg-indigo-800',
    secondary: 'bg-dark-400/50 text-gray-300 hover:bg-dark-300/50 border border-dark-100 hover:border-dark-50',
  };
  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}