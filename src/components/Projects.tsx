
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  // Project data
  const projects = [
    {
      title: "Record Label Website",
      description: " A modern, responsive web app for showcasing artists and albums, built with React, TypeScript, Tailwind CSS, and Supabase for backend data management.",
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: '/asset/pic2.jpg',
      githubLink: 'https://github.com/demovg/build-it-web',
      demoLink: null, // Set to null if not hosted yet
    },
    {
      title: "Vehicle Insurance Management",
      description: " A responsive web app for managing vehicle insurance policies, built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui for a clean, modern interface.",
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn-ui'],
      image: '/asset/pic3.jpg',
      githubLink: 'https://github.com/demovg/insure-future-portal',
      demoLink: null, // Set to null if not hosted yet
    },
    {
      title: "Landing page",
      description: "A responsive landing page for a local business, featuring custom animations and contact form integration.",
      tags: ['HTML', 'CSS'],
      image: '/placeholder.svg',
      githubLink: 'https://github.com/demovg/Codsoft/tree/main/landing-page/src',
      demoLink: null, // Set to null if not hosted yet
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          My Projects
          <span className="block h-1 w-20 bg-primary mx-auto mt-4"></span>
        </h2>
        <p className="section-subtitle text-center">
          Check out my GitHub repositories below. These projects are currently in development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-navy-dark">{project.title}</h3>
                <p className="text-slate">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" asChild className="flex items-center gap-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Source Code
                    </a>
                  </Button>
                  {project.demoLink && (
                    <Button variant="ghost" size="sm" asChild className="flex items-center gap-1">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="btn-outline flex items-center gap-2" asChild>
            <a href="https://github.com/demovg" target="_blank" rel="noopener noreferrer">
              <Github size={18} /> View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
