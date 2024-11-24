import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Code,
  Database,
  Cloud,
  Cpu,
} from 'lucide-react';

const education = [
  {
    degree: 'Master Systèmes Informatiques Ambiants Mobiles Embarqués',
    school: 'Université Paul Sabatier',
    location: 'Toulouse, France',
    period: '2017 - 2020',
    description: 'Spécialisation en développement mobile et systèmes embarqués',
    icon: Code,
    highlights: [
      'Développement Mobile',
      'IoT',
      'Systèmes Embarqués',
      'Architecture Logicielle',
    ],
  },
  {
    degree: 'Licence Électronique, Énergie électrique et Automatique',
    school: 'Université de Nantes',
    location: 'Nantes, France',
    period: '2016 - 2017',
    description: 'Formation en électronique et systèmes automatisés',
    icon: Cpu,
    highlights: [
      'Électronique',
      'Automatique',
      'Systèmes Embarqués',
      'Microcontrôleurs',
    ],
  },
  {
    degree: '1ère année du cycle ingénieur génie électrique (EEA)',
    school: 'École Nationale polytechnique',
    location: 'Oran, Algérie',
    period: '2015 - 2016',
    description: 'Fondamentaux en génie électrique et électronique',
    icon: Database,
    highlights: [
      'Génie Électrique',
      'Électronique',
      'Mathématiques',
      'Physique',
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Parcours académique en informatique et électronique
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

          <div className="space-y-12">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-4 border-purple-500">
                      <Icon className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:pr-32' : 'md:pl-32'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300">
                      <div className="flex flex-col space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.degree}
                        </h3>

                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-purple-500" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-blue-500" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <div className="font-medium text-gray-800 dark:text-gray-200">
                          {item.school}
                        </div>

                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700 dark:text-gray-300 rounded-full border border-purple-200 dark:border-purple-800"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
