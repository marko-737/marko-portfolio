import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  const frontendSkills: Skill[] = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
    { name: 'React', level: 92, color: 'bg-cyan-500' },
    { name: 'Vue', level: 75, color: 'bg-green-500' },
    { name: 'HTML5', level: 95, color: 'bg-orange-500' },
    { name: 'CSS3/SCSS', level: 88, color: 'bg-purple-500' },
  ];
  
  const otherSkills: Skill[] = [
    { name: 'Node.js', level: 80, color: 'bg-green-600' },
    { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
    { name: 'Git', level: 85, color: 'bg-red-500' },
    { name: 'UI/UX Design', level: 78, color: 'bg-indigo-500' },
    { name: 'Performance Optimization', level: 82, color: 'bg-amber-500' },
    { name: 'Testing (Jest, Cypress)', level: 76, color: 'bg-emerald-500' },
  ];

  useEffect(() => {
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateSkills = () => {
    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.style.width = `${
            [...frontendSkills, ...otherSkills][index]?.level || 0
          }%`;
          ref.style.opacity = '1';
        }, index * 100);
      }
    });
  };

  const renderSkill = (skill: Skill, index: number) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={(el) => (skillRefs.current[index] = el)}
          className={`h-full ${skill.color} rounded-full opacity-0 transition-all duration-1000 ease-out`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              My technical skills and areas of expertise in frontend development and related technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Frontend Development
              </h3>
              {frontendSkills.map((skill, index) => renderSkill(skill, index))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Other Skills
              </h3>
              {otherSkills.map((skill, index) => renderSkill(skill, index + frontendSkills.length))}
            </div>
          </div>

          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Webpack', 'Vite', 'Redux', 'Next.js', 'Figma', 'Tailwind CSS', 'SASS', 'Material UI', 'Bootstrap', 'Firebase', 'AWS', 'Docker'].map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;