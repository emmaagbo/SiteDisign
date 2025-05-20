import { Palette, Code, Layout, Camera } from 'lucide-react';
import logo from '../assets/image.jpg'

const SkillCard = ({ icon, title }) => (
  <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-50 rounded-xl">
    {icon}
    <h3 className="font-medium">{title}</h3>
  </div>
);

const AboutSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
    <div className="flex flex-col">
      <h2 className="text-4xl font-bold mb-6 text-purple-500">À Propos</h2>
      <p className="text-lg mb-4 text-gray-300">
        Designer créatif passionné par l'intersection de l'art et de la technologie. 
        Je crée des expériences numériques immersives qui captent l'attention et stimulent l'imagination.
      </p>
      <p className="text-lg mb-6 text-gray-300">
        Avec plus de 5 ans d'expérience dans le design interactif et le développement frontend, 
        je transforme des concepts complexes en interfaces élégantes et intuitives.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <SkillCard icon={<Palette className="text-purple-500 w-8 h-8 mb-2" />} title="Design UI/UX" />
        <SkillCard icon={<Code className="text-blue-500 w-8 h-8 mb-2" />} title="Développement" />
        <SkillCard icon={<Layout className="text-pink-500 w-8 h-8 mb-2" />} title="Webdesign" />
        <SkillCard icon={<Camera className="text-green-500 w-8 h-8 mb-2" />} title="3D & Animation" />
      </div>
    </div>
    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-400 opacity-80"></div>
      <img src={logo} alt="Profil créatif" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay " />
    </div>
  </div>
);

export default AboutSection;