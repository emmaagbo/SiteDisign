import { Layout, Mail } from 'lucide-react';

export default function HomeSection({ setActiveSection }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold mb-4 tracking-tight">
        <span className="text-purple-600">Design</span> ·{' '}
        <span className="text-blue-500">Créativité</span> ·{' '}
        <span className="text-pink-500">Innovation</span>
      </h1>
      <p className="text-xl mb-8 text-gray-300 max-w-2xl">
        Transformez vos idées en expériences visuelles interactives. Un portfolio
        qui repousse les limites de la créativité.
      </p>
      <div className="flex gap-6 mt-6">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
          onClick={() => setActiveSection('projects')}
        >
          <Layout className="w-5 h-5" /> Voir mes projets
        </button>
        <button
          className="border border-black hover:border-blue-500 hover:bg-blue-500 hover:text-white text-black font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
          onClick={() => setActiveSection('contact')}
        >
          <Mail className="w-5 h-5" /> Contact
        </button>
      </div>
    </div>
  );
}
