
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 lg:pt-32">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-dark">
              Abrham Habtamu
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate">
              I build things for the web.
            </h2>
            <p className="text-lg text-slate max-w-2xl">
              I'm a web developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button className="btn-outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/demovg" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abrham-habtamu-771ab528b/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl"></div>
              <div className="relative aspect-square rounded-xl bg-navy-light shadow-lg overflow-hidden">
                <img 
                  src="./asset/pic.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
