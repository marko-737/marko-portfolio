import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium text-sm text-gray-800 dark:text-white">
                Quick Links
              </h3>
              <div className="flex space-x-3">
                <a href="#home" className="link">
                  Home
                </a>
                <a href="#skills" className="link">
                  Skills
                </a>
                <a href="#projects" className="link">
                  Projects
                </a>
                <a href="#contact" className="link">
                  Contact
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-medium text-sm text-gray-800 dark:text-white">
                Social Media
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/marko-737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/marko-kostic1307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
