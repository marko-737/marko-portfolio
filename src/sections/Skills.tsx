import React, { useRef } from "react";
import { motion } from "framer-motion";
import { skillBarVariants } from "../animations"; // Adjust path if needed

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills: Skill[] = [
    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
    { name: "TypeScript", level: 75, color: "bg-blue-500" },
    { name: "React", level: 85, color: "bg-cyan-500" },
    { name: "Angular", level: 70, color: "bg-green-500" },
    { name: "HTML5", level: 90, color: "bg-orange-500" },
    { name: "CSS3/SCSS", level: 88, color: "bg-purple-500" },
  ];

  const otherSkills: Skill[] = [
    { name: "Problem solving", level: 80, color: "bg-green-600" },
    { name: "Time Management", level: 85, color: "bg-pink-500" },
    { name: "Teamwork & Collaboration", level: 85, color: "bg-red-500" },
    { name: "UI/UX Design", level: 78, color: "bg-indigo-500" },
    { name: "Performance Optimization", level: 82, color: "bg-amber-500" },
    { name: "Learning Agility:", level: 88, color: "bg-emerald-500" },
  ];

  const renderSkill = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${skill.color} rounded-full`}
          variants={skillBarVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={skill.level}
        />
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
              My technical skills and areas of expertise in frontend development
              and related technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Frontend Development
              </h3>
              {frontendSkills.map((skill) => renderSkill(skill))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Other Skills
              </h3>
              {otherSkills.map((skill) => renderSkill(skill))}
            </div>
          </div>

          <div className="mt-16 py-6 px-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Vite",
                "Zustand",
                "Reactjs",
                "Figma",
                "Tailwind CSS",
                "Material UI",
                "AntDesign",
                "Firebase",
              ].map((tool) => (
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
