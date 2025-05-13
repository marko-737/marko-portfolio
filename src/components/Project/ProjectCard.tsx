import { ExternalLink, Github } from "lucide-react";
import { Project } from "src/types/types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({
  project: { id, title, description, image, demoUrl, codeUrl, tags },
}: ProjectCardProps) => {
  return (
    <div
      key={id}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              aria-label="View demo"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              aria-label="View code"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex  flex-col p-5 flex-grow justify-between">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
