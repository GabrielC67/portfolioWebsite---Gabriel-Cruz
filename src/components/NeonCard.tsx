import React from 'react';

interface NeonCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'aqua' | 'purple';
  className?: string;
  icon?: React.ReactNode;
}

export const NeonCard: React.FC<NeonCardProps> = ({ 
  title, 
  children, 
  variant = 'aqua',
  className = '',
  icon
}) => {
  const isAqua = variant === 'aqua';
  
  return (
    <div className={`${isAqua ? 'neon-card' : 'neon-card-purple'} ${className}`}>
      {/* Header */}
      <div className={`px-4 py-3 border-b ${isAqua ? 'border-primary/20' : 'border-secondary/20'}`}>
        <div className="flex items-center gap-3">
          {icon && (
            <span className={`text-xl ${isAqua ? 'text-primary' : 'text-secondary'}`}>
              {icon}
            </span>
          )}
          <h3 className={`font-display font-bold text-lg tracking-wider uppercase ${
            isAqua ? 'text-primary neon-text' : 'text-secondary neon-text-purple'
          }`}>
            {title}
          </h3>
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

export default NeonCard;
