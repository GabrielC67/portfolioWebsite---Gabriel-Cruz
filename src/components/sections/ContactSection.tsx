import React, { useState } from 'react';
import NeonCard from '../NeonCard';
import NeonButton from '../NeonButton';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative pb-32">
      <div className="neon-orb neon-orb-aqua w-80 h-80 -right-40 top-0 animate-pulse-glow" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary neon-text-purple mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <NeonCard title="Send a Message" icon="✉️" variant="purple">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="neon-input text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="neon-input text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here..."
                  rows={4}
                  className="neon-input text-sm resize-none"
                />
              </div>

              <NeonButton variant="solid" type="submit" className="w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </NeonButton>

              {sent && (
                <div className="p-4 neon-card text-center text-primary font-medium">
                  ✅ Message sent successfully!
                </div>
              )}
            </form>
          </NeonCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <NeonCard title="Contact Info" icon="📍">
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Want to work together or just say hi? Feel free to reach out through any of these channels:
                </p>

                <div className="space-y-3">
                  <a 
                    href="mailto:gabriel@portfolio.dev"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:shadow-neon" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Email</p>
                      <p className="text-xs text-muted-foreground">gabriel@portfolio.dev</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-sm text-foreground">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Connect with me</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all group"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <div>
                      <p className="font-medium text-sm text-foreground">GitHub</p>
                      <p className="text-xs text-muted-foreground">Check out my code</p>
                    </div>
                  </a>
                </div>
              </div>
            </NeonCard>

            <NeonCard title="Status" icon="🟢" variant="purple">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-neon" />
                <span className="text-sm text-foreground">Currently open for opportunities!</span>
              </div>
            </NeonCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
