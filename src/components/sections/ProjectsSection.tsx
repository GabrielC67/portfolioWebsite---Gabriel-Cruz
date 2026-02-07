import React from 'react';
import NeonCard from '../NeonCard';
import NeonButton from '../NeonButton';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for managing online store products, orders, and analytics.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: '📊',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'Real-time weather application with location-based forecasts and beautiful animations.',
    tech: ['React', 'API Integration', 'CSS'],
    icon: '🌤️',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Task Manager',
    description: 'A productivity app for organizing tasks with drag-and-drop functionality and local storage.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    icon: '✅',
    status: 'In Progress',
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'This very website! A neon-themed portfolio showcasing my work and skills.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    icon: '💼',
    status: 'Completed',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="neon-orb neon-orb-purple w-96 h-96 -left-48 bottom-0 animate-pulse-glow" />
      <div className="neon-orb neon-orb-aqua w-64 h-64 right-0 top-1/3 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary neon-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="neon-card group hover:shadow-neon-lg transition-all duration-500"
            >
              {/* Header */}
              <div className="p-4 border-b border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="font-display font-bold text-foreground uppercase tracking-wider">
                    {project.name}
                  </h3>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-primary/20 text-primary border border-primary/40' 
                    : 'bg-secondary/20 text-secondary border border-secondary/40'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-4 mb-4">
                  <Folder className="w-10 h-10 text-primary/50 flex-shrink-0 group-hover:text-primary transition-colors" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted border border-border rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <NeonButton className="flex items-center gap-2 text-xs py-1.5 px-4">
                    <ExternalLink className="w-3 h-3" />
                    Demo
                  </NeonButton>
                  <NeonButton variant="purple" className="flex items-center gap-2 text-xs py-1.5 px-4">
                    <Github className="w-3 h-3" />
                    Code
                  </NeonButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
