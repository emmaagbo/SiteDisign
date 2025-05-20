import { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Logique d'envoi du formulaire irait ici
    setFormData({ name: '', email: '', message: '' });
  };

  return (
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
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea 
            rows="4" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>
        <button 
          onClick={handleSubmit}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
        >
          Envoyer le message
        </button>
      </div>
    </div>
  );
};

export default ContactSection;