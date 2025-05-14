
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="section-padding bg-slate-50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          My Resume
          <span className="block h-1 w-20 bg-primary mx-auto mt-4"></span>
        </h2>
        <p className="section-subtitle text-center">
          A summary of my experience, skills, and qualifications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-navy-dark">
              <FileText size={24} className="text-primary" /> Education
            </h3>
            
            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-navy-dark">Computer Science Degree</h4>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2022-2026 G.C</span>
                </div>
                <p className="text-slate italic mt-1">Unity University</p>
                <p className="mt-3">Studied algorithms, data structures, software engineering principles and completed multiple projects as part of coursework.</p>
                <ul className="list-disc list-inside mt-3 text-slate">
                  <li>GPA: 2.8/4.0</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-navy-dark">Web Development Bootcamp</h4>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2017</span>
                </div>
                <p className="text-slate italic mt-1">freeCodeCamp</p>
                <p className="mt-3">Intensive training in full-stack web development technologies.</p>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-navy-dark">
              <FileText size={24} className="text-primary" /> Experience
            </h3>
            
            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-navy-dark">Frontend Developer</h4>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2024-Present</span>
                </div>
                <p className="text-slate italic mt-1">Freelancer</p>
                <p className="mt-3">Working on full-stack applications using modern technologies.</p>
                <ul className="list-disc list-inside mt-3 text-slate">
                  <li>Developed and maintained multiple client-facing web applications</li>
                  <li>Collaborated with design and product teams to implement new features</li>
                  <li>Improved application performance by 35%</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-xl font-semibold text-navy-dark">Web Developer Intern</h4>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2024</span>
                </div>
                <p className="text-slate italic mt-1">CodeAlpha</p>
                <p className="mt-3">Assisted in the development of web applications and gained hands-on experience.</p>
                <ul className="list-disc list-inside mt-3 text-slate">
                  <li>Built responsive UI components</li>
                  <li>Participated in code reviews and scrum meetings</li>
                  <li>Implemented new features based on user feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-navy-dark">Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'MongoDB', 'Git'].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
                <span className="font-medium text-navy-dark">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center mt-16">
          <Button className="btn-primary flex items-center gap-2" asChild>
            <a href="./asset/Resume.pdf" download>
              <Download size={18} /> Download Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
