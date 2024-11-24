import React, { useState } from 'react';
import { Smartphone, Globe, Cpu, Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

type ProjectType = 'all' | 'mobile' | 'web' | 'iot';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');

  const filters = [
    { id: 'all', label: 'Tous', icon: null },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'iot', label: 'IoT', icon: Cpu },
  ] as const;

  const projects = [
    {
      id: 1,
      title: 'Smart Home IoT',
      description:
        'Application mobile connectée pour la gestion intelligente de la maison',
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'MQTT', 'Node.js'],
      type: 'mobile',
      links: {
        github: 'https://github.com',
        demo: 'https://demo.com',
      },
    },
    {
      id: 2,
      title: 'Health Monitor',
      description: 'Système de surveillance de la santé avec capteurs IoT',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tags: ['Arduino', 'BLE', 'React'],
      type: 'iot',
      links: {
        github: 'https://github.com',
      },
    },
    {
      id: 3,
      title: 'Fleet Management',
      description: 'Application de gestion de flotte en temps réel',
      image:
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'GraphQL', 'Maps'],
      type: 'mobile',
      links: {
        demo: 'https://demo.com',
      },
    },
    {
      id: 4,
      title: 'Fleet Management',
      description: 'Application de gestion de flotte en temps réel',
      image:
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'GraphQL', 'Maps'],
      type: 'mobile',
      links: {
        demo: 'https://demo.com',
      },
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.type === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mes dernières réalisations en développement mobile et IoT
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {filters.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`
                  px-4 py-2 rounded-lg flex items-center space-x-2 transition-all
                  ${
                    activeFilter === id
                      ? 'bg-white dark:bg-gray-700 shadow-md text-blue-500 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                  }
                `}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
