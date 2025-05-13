import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import {
  containerVariants,
  imageVariants,
  textVariants,
  buttonVariants,
  socialLinkVariants,
  arrowVariants,
} from "src/animations";

import Container from "src/components/Container";

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/marko-737" },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/marko-kostic1307/",
  },
  { icon: <Twitter size={20} />, href: "https://twitter.com" },
  { icon: <Mail size={20} />, href: "mailto:tomarkokostic@gmail.com" },
];

const Hero: React.FC = () => {
  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <Container>
        <motion.div
          className="flex flex-col items-center text-center space-y-8 md:space-y-12"
          variants={containerVariants}
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl"
            variants={imageVariants}
          >
            <img
              src="src/assets/images/marko.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6 max-w-2xl"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Frontend <span className="text-blue-500">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Creating beautiful, responsive, and user-friendly web experiences.
              Specialized in modern frameworks and performance optimization.
            </p>
            <motion.div
              className="flex justify-center space-x-4 pt-2"
              variants={buttonVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                  aria-label={`Social link ${index + 1}`}
                  variants={socialLinkVariants}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="flex space-x-4 pt-6" variants={buttonVariants}>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={socialLinkVariants}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium transition-all duration-300"
              variants={socialLinkVariants}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.a
            href="#skills"
            className="animate-bounce mt-12 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Scroll down"
            variants={arrowVariants}
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Hero;
