import { useState } from 'react';

export default function Header({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <header className="fixed w-full z-40 px-8 py-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-purple-500">Port</span>
          <span className="text-blue-600">folio</span>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex space-x-8">
          {sections.map((section) => (
            <button
              key={section}
              className={`text-lg font-medium transition-colors ${
                activeSection === section
                  ? 'text-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md p-6 rounded-b-2xl">
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                className={`text-lg font-medium transition-colors ${
                  activeSection === section
                    ? 'text-purple-500'
                    : 'text-gray-400 hover:text-white'
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
  );
}
