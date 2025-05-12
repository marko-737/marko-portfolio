import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Developer<span className="font-light">.io</span>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Creating beautiful web experiences since 2019
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium text-sm text-gray-800 dark:text-white">Quick Links</h3>
              <div className="flex space-x-3">
                <a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium text-sm text-gray-800 dark:text-white">Social Media</h3>
              <div className="flex space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Frontend Developer. All rights reserved.
          </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;