import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon,
  onClick 
}: ButtonProps) {
  const baseStyles = "flex items-center px-8 py-3 rounded-sm transition-colors";
  const variants = {
    primary: "bg-white text-zinc-900 hover:bg-gray-100",
    secondary: "border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {Icon && <Icon className="h-5 w-5 mr-2" />}
      {children}
    </button>
  );
}