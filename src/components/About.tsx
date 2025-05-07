
import React from 'react';

const About: React.FC = () => {
  // List of skills
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 
    'HTML & CSS', 'Tailwind CSS', 'Git'
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          About Me
          <span className="block h-1 w-20 bg-primary mx-auto mt-4"></span>
        </h2>
        <p className="section-subtitle text-center">
          Here's a little background about me and my skills.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            <p className="text-navy-dark">
              Hello! I'm Abrham Habtamu, a passionate web developer based in Addis Ababa, Ethiopia. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between.
            </p>
            <p className="text-navy-dark">
              My interest in web development started back in 2021 G.C when I decided to try 
              customizing a template for my personal blog. Fast-forward to today, and I've had 
              the privilege of working as a freelancer.
            </p>
            <p className="text-navy-dark">
              My main focus these days is building accessible, inclusive products and digital 
              experiences for a variety of clients. I'm always looking forward to learning new 
              technologies and improving my skills.
            </p>
            <p className="text-navy-dark">
              When I'm not at the computer, I'm usually reading.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-navy-dark">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-navy-dark">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 card border border-slate-100">
              <h3 className="text-lg font-semibold mb-4 text-navy-dark">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-navy-dark">Bachelor of Computer Science</h4>
                  <p className="text-slate">Unity University, 2022-2026(current)</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy-dark">Web Development Bootcamp</h4>
                  <p className="text-slate">freeCodeCamp, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
