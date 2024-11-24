import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Lead Mobile Developer',
    company: 'TechCorp',
    location: 'Paris, France',
    period: '2022 - Present',
    description:
      "Direction technique des projets mobiles et IoT, développement d'applications React Native et mise en place d'architectures IoT.",
    tags: ['React Native', 'IoT', 'AWS', 'Node.js'],
  },
  {
    id: 2,
    title: 'Mobile & IoT Developer',
    company: 'InnovLab',
    location: 'Lyon, France',
    period: '2020 - 2022',
    description:
      "Développement d'applications mobiles connectées et intégration de solutions IoT pour l'industrie 4.0.",
    tags: ['Flutter', 'BLE', 'MQTT', 'Python'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'StartupFlow',
    location: 'Bordeaux, France',
    period: '2018 - 2020',
    description:
      "Création d'applications web et mobiles, mise en place d'APIs RESTful et intégration continue.",
    tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'StartupFlow',
    location: 'Bordeaux, France',
    period: '2018 - 2020',
    description:
      "Création d'applications web et mobiles, mise en place d'APIs RESTful et intégration continue.",
    tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une expérience solide en développement mobile et IoT
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-25" />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <Briefcase className="w-4 h-4 text-purple-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
