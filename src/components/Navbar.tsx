import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      
      // Check if we're at the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // Otherwise, find the current section based on viewport position
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClass = (section: string) => {
    return `nav-link relative ${
      activeSection === section 
        ? 'text-blue-500 dark:text-blue-400 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:dark:bg-blue-400 after:transform after:scale-x-100 after:transition-transform'
        : 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:dark:bg-blue-400 after:transform after:scale-x-0 after:transition-transform hover:after:scale-x-100'
    }`;
  };

  const getMobileNavLinkClass = (section: string) => {
    return `mobile-nav-link w-full text-left ${
      activeSection === section ? 'text-blue-500 dark:text-blue-400' : ''
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex-shrink-0 font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Ghilas Berkane
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className={getNavLinkClass('about')}>
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('projects')} className={getNavLinkClass('projects')}>
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('experience')} className={getNavLinkClass('experience')}>
              {t('nav.experience')}
            </button>
            <button onClick={() => scrollToSection('contact')} className={getNavLinkClass('contact')}>
              {t('nav.contact')}
            </button>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <LanguageSelector />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="social-icon"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            <button onClick={() => {
              scrollToSection('about');
              setIsMenuOpen(false);
            }} className={getMobileNavLinkClass('about')}>
              {t('nav.about')}
            </button>
            <button onClick={() => {
              scrollToSection('projects');
              setIsMenuOpen(false);
            }} className={getMobileNavLinkClass('projects')}>
              {t('nav.projects')}
            </button>
            <button onClick={() => {
              scrollToSection('experience');
              setIsMenuOpen(false);
            }} className={getMobileNavLinkClass('experience')}>
              {t('nav.experience')}
            </button>
            <button onClick={() => {
              scrollToSection('contact');
              setIsMenuOpen(false);
            }} className={getMobileNavLinkClass('contact')}>
              {t('nav.contact')}
            </button>

            <div className="flex items-center justify-between px-4 pt-4">
              <div className="flex space-x-4">
                <LanguageSelector />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }} 
                  className="social-icon"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;