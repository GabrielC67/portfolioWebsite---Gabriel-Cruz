import React from 'react';

interface NeonProgressBarProps {
  value: number;
  label?: string;
  showPercentage?: boolean;
}

export const NeonProgressBar: React.FC<NeonProgressBarProps> = ({ 
  value, 
  label,
  showPercentage = true
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && (
            <span className="text-sm font-bold text-primary">{value}%</span>
          )}
        </div>
      )}
      <div className="neon-progress">
        <div 
          className="neon-progress-fill"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
};

export default NeonProgressBar;
