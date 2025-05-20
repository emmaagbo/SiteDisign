import { Code, Server, Globe, Database, Cloud, Layout } from 'lucide-react';

const ProjectCard = ({ id, icon, title, description, tags }) => (
  <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 bg-gray-800 p-8 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-2xl font-bold mb-4 text-blue-500">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span key={index} className="text-blue-400">{tag}</span>
        ))}
      </div>
    </div>
    {icon && <div className="self-end mt-4">{icon}</div>}
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Projet Frontend",
      description: "Création d'interfaces utilisateur modernes et responsives avec React.js et TailwindCSS.",
      tags: ["React.js", "TailwindCSS", "JavaScript"],
      icon: <Code className="w-8 h-8 text-blue-500" />
    },
    {
      id: 2,
      title: "Projet Backend",
      description: "Développement d'API robustes et sécurisées avec Node.js et Express.",
      tags: ["Node.js", "Express", "MongoDB"],
      icon: <Server className="w-8 h-8 text-pink-500" />
    },
    {
      id: 3,
      title: "Application Web",
      description: "Application web fullstack avec authentification et base de données.",
      tags: ["Vue.js", "Firebase", "Webpack"],
      icon: <Globe className="w-8 h-8 text-purple-500" />
    },
    {
      id: 4,
      title: "Base de Données",
      description: "Structure de base de données optimisée pour les applications haute performance.",
      tags: ["PostgreSQL", "Redis", "GraphQL"],
      icon: <Database className="w-8 h-8 text-green-500" />
    },
    {
      id: 5,
      title: "Cloud Computing",
      description: "Solutions cloud scalables et déploiement automatisé via CI/CD.",
      tags: ["AWS", "Docker", "Kubernetes"],
      icon: <Cloud className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 6,
      title: "Design System",
      description: "Bibliothèque de composants réutilisables pour une expérience cohérente.",
      tags: ["Storybook", "Figma", "TypeScript"],
      icon: <Layout className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-4xl font-bold mb-8 text-blue-500">Projets Récents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            icon={project.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;