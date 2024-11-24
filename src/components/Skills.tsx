import React from 'react';
import {
  Code,
  Server,
  Cpu,
  Globe,
  Languages,
  Smartphone,
  Laptop,
  Database,
  Cloud,
  Wifi,
  Radio,
  Bluetooth,
  Settings,
  Terminal,
  GitBranch,
  Package,
  Monitor,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Swift/SwiftUI', icon: Monitor, color: 'text-orange-500' },
      { name: 'Kotlin', icon: Terminal, color: 'text-purple-500' },
      { name: 'React Native', icon: Code, color: 'text-blue-500' },
      { name: 'Objective-C', icon: Package, color: 'text-gray-500' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Laptop,
    skills: [
      { name: 'JavaScript/TypeScript', icon: Code, color: 'text-yellow-500' },
      { name: 'React.js', icon: Code, color: 'text-blue-400' },
      { name: 'HTML/CSS', icon: Monitor, color: 'text-pink-500' },
      { name: 'Node.js', icon: Server, color: 'text-green-500' },
    ],
  },
  {
    title: 'IoT & Protocols',
    icon: Wifi,
    skills: [
      { name: 'MQTT', icon: Radio, color: 'text-purple-500' },
      { name: 'BLE', icon: Bluetooth, color: 'text-blue-500' },
      { name: 'CoAP', icon: Cloud, color: 'text-cyan-500' },
      { name: 'REST APIs', icon: Server, color: 'text-green-500' },
    ],
  },
  {
    title: 'Hardware & Systems',
    icon: Cpu,
    skills: [
      { name: 'Raspberry Pi', icon: Cpu, color: 'text-red-500' },
      { name: 'Arduino', icon: Cpu, color: 'text-teal-500' },
      { name: 'STM32', icon: Cpu, color: 'text-blue-500' },
      { name: 'Linux/Ubuntu', icon: Terminal, color: 'text-orange-500' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise technique en développement mobile et IoT
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
                    <category.icon className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${skill.color}`}>
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
