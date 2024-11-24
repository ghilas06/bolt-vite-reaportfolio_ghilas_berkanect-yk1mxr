import React, { useEffect, useState } from 'react';
import { Instagram, Linkedin, Twitter, Facebook, FolderKanban, Mail, Smartphone, Globe, Wifi } from 'lucide-react';

interface SocialAppProps {
  icon: React.ElementType;
  color: string;
  link: string;
}

const SocialApp: React.FC<SocialAppProps> = ({ icon: Icon, color, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} p-2 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`}
  >
    <Icon className="w-5 h-5 text-white" />
  </a>
);

const PlatformIcon: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 flex items-center space-x-3 hover:bg-gray-700/80 transition-colors">
    <img src={icon} alt={label} className="w-6 h-6" />
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Tech Icons */}
          <div className="flex justify-center lg:justify-start gap-8 mb-8">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/10">
                <Smartphone className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-white/10">
                <Globe className="w-8 h-8 text-purple-500" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="p-4 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-2xl backdrop-blur-sm border border-white/10">
                <Wifi className="w-8 h-8 text-pink-500" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ghilas Berkane
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
            Développeur Mobile & IoT
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8">
            Passionné par le développement d'applications mobiles et de solutions IoT innovantes.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              <FolderKanban className="w-5 h-5" />
              <span>Mes Projets</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Me Contacter</span>
            </button>
          </div>
        </div>

        {/* Right Content - Phone */}
        <div className="relative">
          <div className="w-[300px] h-[600px] bg-gray-800 rounded-[3rem] p-4 relative overflow-hidden border-8 border-gray-700">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 px-6 flex items-center justify-between bg-gray-800/90 backdrop-blur-sm z-10">
              <div className="text-sm text-gray-300">Paris, France</div>
              <div className="text-sm text-white">{currentTime}</div>
            </div>

            {/* Content */}
            <div className="mt-16 space-y-8">
              {/* Profile Section */}
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img 
                    src="/assets/profile.png" 
                    alt="Ghilas Berkane"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<span class="flex items-center justify-center w-full h-full text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">GB</span>';
                    }}
                  />
                </div>
              </div>

              {/* Social Apps */}
              <div className="flex justify-center space-x-4">
                <SocialApp
                  icon={Linkedin}
                  color="bg-[#0077B5]"
                  link="https://www.linkedin.com/in/ghilas-berkane"
                />
                <SocialApp
                  icon={Facebook}
                  color="bg-[#1877F2]"
                  link="https://facebook.com/your-profile"
                />
                <SocialApp
                  icon={Twitter}
                  color="bg-[#1DA1F2]"
                  link="https://twitter.com/your-profile"
                />
                <SocialApp
                  icon={Instagram}
                  color="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
                  link="https://instagram.com/your-profile"
                />
              </div>

              {/* Platform Icons */}
              <div className="space-y-3 px-4">
                <PlatformIcon 
                  icon="https://www.apple.com/v/swift/c/images/swift-logo_light-mode_dark-bg_2x.png"
                  label="iOS"
                />
                <PlatformIcon 
                  icon="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg"
                  label="Android"
                />
                <PlatformIcon 
                  icon="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"
                  label="React Native"
                />
              </div>
            </div>
          </div>

          {/* Floating Language Tags */}
          <div className="absolute -left-20 top-1/4 animate-float">
            <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-white">
              React Native
            </div>
          </div>
          <div className="absolute -right-16 top-1/3 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-white">
              Swift
            </div>
          </div>
          <div className="absolute -left-16 bottom-1/3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full text-white">
              Kotlin
            </div>
          </div>
          <div className="absolute -right-20 bottom-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-white">
              JavaScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;