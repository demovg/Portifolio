
import React from 'react';

const Footer: React.FC = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/demovg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abrham-habtamu-771ab528b/' },
    { name: 'Twitter', url: 'https://x.com/AbrhamAb774385' },
    { name: 'Instagram', url: 'https://www.instagram.com/demov_g/' },
  ];

  return (
    <footer className="bg-yellowblack-dark text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold mb-4">Portfolio<span className="text-primary">.</span></h3>
            <p className="text-yellowblack-light max-w-md">
              Thank you for visiting my portfolio. If you're interested in working together, please don't hesitate to reach out!
            </p>
          </div>
          
          <div className="md:col-span-4 md:justify-self-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-yellowblack-light hover:text-primary transition-colors duration-200">Home</a>
              <a href="#about" className="text-yellowblack-light hover:text-primary transition-colors duration-200">About</a>
              <a href="#projects" className="text-yellowblack-light hover:text-primary transition-colors duration-200">Projects</a>
              <a href="#contact" className="text-yellowblack-light hover:text-primary transition-colors duration-200">Contact</a>
            </nav>
          </div>
          
          <div className="md:col-span-4 md:justify-self-end">
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellowblack-light hover:text-primary transition-colors duration-200"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-yellowblack-light/30 rounded-full hover:border-primary">
                    {link.name[0]}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-yellowblack-light/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-yellowblack-light text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-yellowblack-light text-sm mt-2 md:mt-0">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
