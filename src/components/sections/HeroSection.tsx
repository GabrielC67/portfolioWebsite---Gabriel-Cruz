import React from 'react';
import NeonButton from '../NeonButton';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center neon-grid">
      {/* Animated background orbs */}
      <div className="neon-orb neon-orb-aqua w-96 h-96 -top-48 -left-48 animate-pulse-glow" />
      <div className="neon-orb neon-orb-purple w-80 h-80 top-1/2 -right-40 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="neon-orb neon-orb-aqua w-64 h-64 -bottom-32 left-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-36 h-36 mx-auto rounded-full border-2 border-primary bg-card flex items-center justify-center shadow-neon-lg animate-glow-pulse">
            <span className="text-7xl">👨‍💻</span>
          </div>
        </div>

        {/* Title */}
        <p className="text-secondary font-display uppercase tracking-[0.3em] text-sm mb-4 neon-text-purple">
          Junior Software Engineer
        </p>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary neon-text neon-flicker">Gabriel Cruz</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-body leading-relaxed">
          I craft modern web experiences with clean code and bold designs. 
          Passionate about building applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <NeonButton variant="solid" onClick={() => onNavigate('projects')}>
            View Projects
          </NeonButton>
          <NeonButton variant="purple" onClick={() => onNavigate('contact')}>
            Contact Me
          </NeonButton>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:gabriel@portfolio.dev"
             className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => onNavigate('about')}
          className="animate-float text-primary hover:text-primary-light transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
