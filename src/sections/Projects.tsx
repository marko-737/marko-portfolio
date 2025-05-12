import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Charts.js'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive fitness tracker that allows users to log workouts, track progress with visualizations, and set goals.',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Redux', 'Firebase', 'Styled Components'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Recipe Finder',
      description: 'An application that helps users find recipes based on ingredients they have available, with filtering options and favorites.',
      image: 'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Vuex', 'API Integration', 'CSS Grid'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Collaborative task management platform with drag-and-drop interfaces, real-time updates, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Interactive weather application with 7-day forecasts, location-based services, and animated weather displays.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'API Integration', 'CSS Animation'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'Customizable portfolio template for developers with sections for projects, skills, and contact information.',
      image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Framer Motion', 'Responsive Design'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      featured: false,
    },
  ];

  // Get unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A showcase of my work, personal projects, and contributions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Projects Section */}
        {filter === 'all' && (
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white text-center">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="flex space-x-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                            aria-label="View demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                            aria-label="View code"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      aria-label="View demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.codeUrl}
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
              <div className="p-5 flex-grow">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;