import React from 'react';
import { Smartphone, Cpu, Globe } from 'lucide-react';

const ExpertiseCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}> = ({ icon: Icon, title, description, gradient }) => (
  <div className={`${gradient} backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 transition-transform`}>
    <Icon className="w-8 h-8 text-white mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const About: React.FC = () => {
  const expertise = [
    {
      icon: Smartphone,
      title: 'Mobile Native',
      description: 'Expert en développement iOS (Swift/SwiftUI) et Android (Kotlin/Jetpack Compose)',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Création d\'applications multiplateformes performantes avec React Native',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Cpu,
      title: 'Architecture',
      description: 'Clean Architecture, State Management, CI/CD et déploiement continu',
      gradient: 'bg-gradient-to-br from-pink-500/20 to-blue-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            5 ans d'expertise en développement mobile natif et cross-platform. Je conçois des applications robustes et intuitives en privilégiant la qualité et l'expérience utilisateur. À l'écoute de nouvelles opportunités en freelance ou CDI, n'hésitez pas à échanger avec moi ! 👋
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;