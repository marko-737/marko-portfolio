import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fade in animation on load
    const section = sectionRef.current;
    if (section) {
      section.style.opacity = "0";
      setTimeout(() => {
        section.style.opacity = "1";
      }, 300);
    }
  }, []);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Mail size={20} />, href: "mailto:contact@example.com" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-16 transition-opacity duration-1000 ease-in-out"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl">
            <img
              src="src/assets/marko.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="space-y-4 md:space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Frontend <span className="text-blue-500">Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Creating beautiful, responsive, and user-friendly web experiences.
              Specialized in modern frameworks and performance optimization.
            </p>

            <div className="flex justify-center space-x-4 pt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                  aria-label={`Social link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <a
            href="#skills"
            className="animate-bounce mt-12 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
