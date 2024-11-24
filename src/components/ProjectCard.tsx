import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectLinks {
  github?: string;
  demo?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: string;
  links: ProjectLinks;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex space-x-2 z-20">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
