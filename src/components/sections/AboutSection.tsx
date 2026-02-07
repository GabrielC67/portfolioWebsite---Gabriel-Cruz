import React from 'react';
import NeonCard from '../NeonCard';
import { Code, Palette, Zap, Coffee } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    { icon: <Code className="w-6 h-6" />, title: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
    { icon: <Palette className="w-6 h-6" />, title: 'Design Focus', desc: 'Bringing UX/UI concepts to life' },
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Learner', desc: 'Always exploring new technologies' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Team Player', desc: 'Collaborative and communicative' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="neon-orb neon-orb-purple w-72 h-72 -left-36 top-1/2 animate-pulse-glow" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary neon-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <NeonCard title="Who I Am" icon="👨‍💻">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Gabriel Cruz</span>, 
                a passionate Junior Software Engineer with a love for creating intuitive 
                and engaging web experiences.
              </p>
              
              <p>
                My journey in tech started with curiosity and has grown into a full-fledged 
                career. I specialize in <span className="text-secondary">React</span> and 
                <span className="text-secondary"> TypeScript</span>, building responsive, 
                accessible interfaces that users love.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying a good cup of coffee while 
                listening to lo-fi beats.
              </p>
            </div>
          </NeonCard>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="neon-card p-4 text-center hover:shadow-neon-lg transition-all duration-300"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-foreground mb-1 text-sm uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
