import { useState, useEffect, useRef } from 'react';
import { Camera, Code, Palette, Layout, Mail } from 'lucide-react';
import logo from './assets/image.jpg'
import * as THREE from 'three';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  
  // Gestion de l'interaction avec la souris pour l'effet de curseur personnalisé
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  // Animation du curseur personnalisé
  useEffect(() => {
    if (!cursorRef.current) return;
    
    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
      }
      requestAnimationFrame(animate);
    };
    
    animate();
  }, [mousePosition]);
  
  // Configuration de la scène Three.js
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Création de la scène Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;
    
    // Création des particules pour l'arrière-plan
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: '#8a2be2',
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation de la scène
    const animate = () => {
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  // Sections du portfolio
  const sections = {
    home: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          <span className="text-purple-600">Design</span> · <span className="text-blue-500">Créativité</span> · <span className="text-pink-500">Innovation</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl">
          Transformez vos idées en expériences visuelles interactives. 
          Un portfolio qui repousse les limites de la créativité.
        </p>
        <div className="flex gap-6 mt-6">
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
            onClick={() => setActiveSection('projects')}
          >
            <Layout className="w-5 h-5" /> Voir mes projets
          </button>
          <button 
            className="border border-white hover:bg-white hover:text-black text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
            onClick={() => setActiveSection('contact')}
          >
            <Mail className="w-5 h-5" /> Contact
          </button>
        </div>
      </div>
    ),
    about: (
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
            <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-50 rounded-xl">
              <Palette className="text-purple-500 w-8 h-8 mb-2" />
              <h3 className="font-medium">Design UI/UX</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-50 rounded-xl">
              <Code className="text-blue-500 w-8 h-8 mb-2" />
              <h3 className="font-medium">Développement</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-50 rounded-xl">
              <Layout className="text-pink-500 w-8 h-8 mb-2" />
              <h3 className="font-medium">Webdesign</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-50 rounded-xl">
              <Camera className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-medium">3D & Animation</h3>
            </div>
          </div>
        </div>
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-400 opacity-80"></div>
          <img src={logo} alt="Profil créatif" className="absolute inset-0 object-cover w-full h-full mix-blend-overlay" />
        </div>
      </div>
    ),
    projects: (
      <div className="flex flex-col h-full">
        <h2 className="text-4xl font-bold mb-8 text-blue-500">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-105">
              <img 
                src={`/api/placeholder/600/${400 + item * 10}`} 
                alt={`Projet ${item}`} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Projet {item}</h3>
                  <p className="text-gray-300">Design & Développement</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-6 text-pink-500">Contact</h2>
          <p className="text-lg mb-8 text-gray-300">
            Intéressé par une collaboration ou vous avez des questions ? 
            N'hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <Mail className="w-6 h-6 text-pink-500" />
              <span>contact@portfolio-creatif.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500">
                <span className="text-white font-bold">in</span>
              </div>
              <span>linkedin.com/portfolio-creatif</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-50 p-8 rounded-xl backdrop-blur-sm">
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Nom</label>
            <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email</label>
            <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
          </div>
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300">
            Envoyer le message
          </button>
        </div>
      </div>
    )
  };
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas Three.js pour l'arrière-plan interactif */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Curseur personnalisé */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      />
      
      {/* En-tête avec navigation */}
      <header className="fixed w-full z-40 px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-purple-500">Port</span>
            <span className="text-white">folio</span>
          </div>
          
          {/* Menu pour mobile */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Navigation principale */}
          <nav className="hidden lg:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                className={`text-lg font-medium transition-colors ${
                  activeSection === section ? 'text-purple-500' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md p-6 rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === section ? 'text-purple-500' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Contenu principal */}
      <main className="relative min-h-screen z-10 px-6 md:px-12 py-32">
        <div className="container mx-auto">
          {sections[activeSection]}
        </div>
      </main>
      
      {/* Pied de page */}
      <footer className="relative z-10 px-8 py-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Portfolio Créatif · Tous droits réservés</p>
      </footer>
    </div>
  );
}