import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-dark-900 tracking-wide";
  
  const variants = {
    // Primary: Strong lime background with an electric glow (Reduced opacity)
    primary: "bg-brand-accent text-dark-950 hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.15)] hover:shadow-[0_0_35px_rgba(163,230,53,0.4)] font-bold",
    
    // Outline: Glassmorphism feel with lime border on hover
    outline: "border border-white/10 text-white bg-white/5 backdrop-blur-sm hover:bg-brand-accent/10 hover:border-brand-accent/50 hover:text-brand-accent hover:shadow-[0_0_20px_rgba(163,230,53,0.1)]",
    
    // Ghost: Simple text interaction
    ghost: "text-brand-accent hover:text-white hover:translate-x-1 p-0 bg-transparent text-glow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;