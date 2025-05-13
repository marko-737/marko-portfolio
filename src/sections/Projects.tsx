import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import ProjectCard from "src/components/Project/ProjectCard";
import FilterButtons from "src/components/Project/FilterButtons";
import ProjectList from "src/components/Project/ProjectList";
import ProjectHeader from "src/components/Project/ProjectHeader";
import SectionHeader from "src/components/SectionHeader";
import Container from "src/components/Container";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "English for Aviation Website",
    description:
      "Website provides ICAO-compliant English training for aviation professionals, including pilots, air traffic controllers, and cabin crew. ",
    image: "/images/aviation-english.png",
    tags: ["React", "CSS", "EmailJS", "Responsive Design"],
    demoUrl: "https://englishforaviation-icao.com/",
    codeUrl: "https://github.com/marko-737/aviation-english",
  },
  {
    id: 2,
    title: "Iphone 15 pro",
    description:
      "A responsive showcase website for the iPhone 15 Pro, built to highlight key features and sleek design using modern web technologies",
    image: "/images/apple-website.png",
    tags: ["React", "Tailwind", "GSAP", "React Three Fiber"],
    demoUrl: "https://website-iphone-15-pro.netlify.app",
    codeUrl: "https://github.com/marko-737/apple-website/tree/main",
  },
  {
    id: 3,
    title: "Movie rating app",
    description:
      "Movie rating application that allows users to browse, rate, and review movies",
    image: "/images/movie-rating-app.png",
    tags: ["React", "Typescript", "CSS", "React-Query"],
    demoUrl: "https://movie-tvshow-rating-app.netlify.app/",
    codeUrl: "https://github.com/marko-737/movie-rating-app",
  },
  {
    id: 4,
    title: "English Placement Test",
    description:
      "Application allows users to assess their English language proficiency by answering multiple-choice questions",
    image: "/images/english-placement-test.png",
    tags: ["React", "MaterialUI", "EmailJS"],
    demoUrl: "https://english-placement-test.netlify.app/",
    codeUrl: "https://github.com/marko-737/english-test-quiz",
  },
  {
    id: 5,
    title: "Prescripto doctor app",
    description:
      "Prescripto is a healthcare app that simplifies booking doctor appointments and managing health records, providing users with a seamless and efficient medical experience",
    image: "/images/prescripto-app.png",
    tags: ["React", "Tailwind", "ContextAPI", "Axios"],
    demoUrl: "https://prescripto-doctorapp.netlify.app/",
    codeUrl: "https://github.com/marko-737/Prescripto-app",
  },
  {
    id: 6,
    title: "React Chat App",
    description:
      "This is a real-time chat application built with React, utilizing Firebase for backend services. The app is designed for seamless communication and includes features like user authentication and messaging",
    image: "/images/react-chat-app.png",
    tags: ["React", "Tailwind", "DaisyUI", "Firebase"],
    demoUrl: "https://reactchat-app1.netlify.app/chat",
    codeUrl: "https://github.com/marko-737/react-chat-app",
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Get unique tags from all projects
  const allTags = [
    "all",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  // Filter projects based on selected tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeader
          title="My Projects"
          subtitle="A showcase of my work, personal projects, and contributions."
        />

        <FilterButtons
          allTags={allTags}
          selectedTag={filter}
          onSelect={setFilter}
        />

        <ProjectList projects={filteredProjects} />
      </Container>
    </section>
  );
};

export default Projects;
