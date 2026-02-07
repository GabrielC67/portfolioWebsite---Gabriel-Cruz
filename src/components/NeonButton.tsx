import React from 'react';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'aqua' | 'purple' | 'solid';
  children: React.ReactNode;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  variant = 'aqua', 
  children, 
  className = '',
  ...props 
}) => {
  const variantClass = variant === 'purple' 
    ? 'neon-button neon-button-purple' 
    : variant === 'solid'
      ? 'neon-button neon-button-solid'
      : 'neon-button';

  return (
    <button 
      className={`${variantClass} rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
