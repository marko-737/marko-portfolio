import React from "react";
import Container from "src/components/Container";
import JobCard from "src/components/JobCard";
import SectionHeader from "src/components/SectionHeader";

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
      title: "Frontend Developer",
      company: "InnoBee",
      location: "Remote",
      period: "Nov 2024 - Present",
      description: [
        "Collaborated with a team of developers to build a feature-rich platform using React and Tailwind CSS, empowering users to share ideas and solve technical challenges across various industries.",
        "Developed reusable UI components, implemented forms using React Hook Form with Zod for robust validation, and managed global state through Zustand.",
        "Utilized React Query for efficient and scalable data fetching and caching, ensuring optimal performance and user experience.",
        "Collaborated with UI/UX designers to implement responsive designs and improve user experience.",
      ],
      skills: ["React", "Tailwind", "Zustand", "React Query", "Axios"],
    },
    {
      title: "Frontend Developer",
      company: "Valcon",
      location: "Belgrade, Serbia",
      period: "Nov 2022 - Aug 2023",
      description: [
        "Developed pages, components, and forms using Angular 14, PrimeNG, RxJS, and NgRx for the Pando Mission Control Gaming platform",
        "Implemented responsive UI elements that improved client usability, focusing on real-time data insights and SKU management for global retail markets.",
        "Participated in agile development process, including daily standups, sprint planning, and retrospectives.",
      ],
      skills: ["Angular 14", "PrimeNG", "SCSS", "RxJS", "Axios"],
    },
    {
      title: "Frontend Developer",
      company: "DEVersity",
      location: "Belgrade, Serbia",
      period: "Oct 2020 - Nov 2022",
      description: [
        "Worked on several web applications across diverse domains including education, internal tools, and promotional platforms.",
        "Built responsive UI components and complete pages, ensuring optimal performance and accessibility across devices.",
        "Collaborated in teams of 3 to 7 members to implement features, fix complex layout issues, and optimize user interfaces.",
        "Integrated with backend APIs, managed state using Redux, and improved performance through caching and design refinements.",
      ],
      skills: [
        "React",
        "Redux",
        "Redux Toolkit",
        "Tailwind CSS",
        "SCSS",
        "Material UI",
        "Headless UI",
        "Context API",
        "fullPage.js",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50"
    >
      <Container>
        <SectionHeader
          title="Professional Experience"
          subtitle=" My professional journey and career path in the tech industry."
        />

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>

            {experiences.map((item, index) => (
              <JobCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
