import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
}

interface NeonNavProps {
  items?: NavItem[];
  onNavigate?: (id: string) => void;
}

export const NeonNav: React.FC<NeonNavProps> = ({ 
  items = [],
  onNavigate
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`neon-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-primary neon-text tracking-wider">
          GC
        </a>
        
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NeonNav;
