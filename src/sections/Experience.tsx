import React from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Lead the frontend development of the company\'s flagship product, resulting in a 40% improvement in user engagement metrics.',
        'Architected and implemented a new component library using React and TypeScript, which reduced development time by 30%.',
        'Mentored junior developers and conducted code reviews to ensure high code quality and adherence to best practices.',
        'Collaborated with UI/UX designers to implement responsive designs and improve user experience.'
      ],
      skills: ['React', 'TypeScript', 'Redux', 'Next.js', 'Jest', 'CI/CD']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      location: 'Austin, TX',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple client websites using modern JavaScript frameworks and responsive design principles.',
        'Optimized website performance, achieving a 50% reduction in load time and improving SEO rankings.',
        'Implemented automated testing strategies that reduced bug reports by 35%.',
        'Participated in agile development process, including daily standups, sprint planning, and retrospectives.'
      ],
      skills: ['JavaScript', 'Vue.js', 'CSS3/SCSS', 'Webpack', 'REST APIs']
    },
    {
      title: 'Web Developer Intern',
      company: 'StartUp Ventures',
      location: 'Boston, MA',
      period: 'Jun 2019 - Feb 2020',
      description: [
        'Assisted in the development of the company website and internal tools.',
        'Created responsive UI components and integrated them with backend APIs.',
        'Participated in UX research and implemented design improvements based on user feedback.',
        'Gained practical experience in modern web development workflows and version control.'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git']
    }
  ];

  const education = [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors. Specialized in Web Technologies and Human-Computer Interaction.'
    }
  ];

  const certifications = [
    {
      name: 'Advanced React and Redux',
      issuer: 'Frontend Masters',
      year: '2022'
    },
    {
      name: 'Web Performance Optimization',
      issuer: 'Google Developers',
      year: '2021'
    },
    {
      name: 'UI/UX Design Fundamentals',
      issuer: 'Interaction Design Foundation',
      year: '2020'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            My professional journey and career path in the tech industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute left-0 md:left-1/2 -mt-1.5 h-6 w-6 rounded-full bg-blue-500 transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-auto' : 'md:pl-12 ml-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    
                    <div className="text-blue-500 dark:text-blue-400 font-medium mb-4">
                      {exp.company} • {exp.location}
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <Calendar size={20} className="mr-3 text-blue-500" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-blue-500 dark:text-blue-400 mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <Award size={20} className="mr-3 text-blue-500" />
                Certifications
              </h3>
              
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    {cert.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-500 dark:text-blue-400">
                      {cert.issuer}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                      {cert.year}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-6">
                <a 
                  href="#"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                >
                  Download Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;