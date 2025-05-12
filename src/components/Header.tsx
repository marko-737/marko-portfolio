import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Developer<span className="font-light">.io</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-blue-500 dark:text-blue-400 font-medium' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-5 px-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-blue-500 dark:text-blue-400 font-medium' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;