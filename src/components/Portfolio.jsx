import React, { useState, useEffect } from 'react';
import { 
  MenuIcon, 
  XIcon, 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon,
  Moon,
  Sun,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Project data with SVG previews
  const projects = [
    {
      title: "Netflix Clone",
      description: "A streaming platform clone featuring movie recommendations, user authentication, and responsive design. Implements TMDB API for real movie data.",
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <rect width="400" height="300" fill="#000"/>
          <rect x="20" y="20" width="360" height="40" fill="#E50914"/>
          <rect x="20" y="80" width="170" height="100" fill="#333"/>
          <rect x="210" y="80" width="170" height="100" fill="#333"/>
          <rect x="20" y="200" width="170" height="100" fill="#333"/>
          <rect x="210" y="200" width="170" height="100" fill="#333"/>
        </svg>
      ),
      tags: ["React", "Firebase", "TMDB API", "Tailwind CSS"],
      link: "https://github.com",
      demoLink: "https://netflix-clone-demo.com"
    },
    {
      title: "AI Recipe Generator",
      description: "An AI-powered app that generates unique recipes based on available ingredients. Features meal planning and nutritional analysis.",
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <rect width="400" height="300" fill="#F3F4F6"/>
          <circle cx="200" cy="100" r="60" fill="#4F46E5"/>
          <rect x="100" y="180" width="200" height="20" fill="#9CA3AF"/>
          <rect x="120" y="210" width="160" height="20" fill="#9CA3AF"/>
          <rect x="140" y="240" width="120" height="20" fill="#9CA3AF"/>
        </svg>
      ),
      tags: ["React", "OpenAI API", "MongoDB", "Express"],
      link: "https://github.com",
      demoLink: "https://ai-recipe-gen.com"
    },
    {
      title: "Financial Dashboard",
      description: "A comprehensive financial tracking platform with real-time stock updates, portfolio management, and expense tracking using interactive charts.",
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <rect width="400" height="300" fill="#1E293B"/>
          <path d="M 50 250 L 150 100 L 250 200 L 350 50" 
                stroke="#10B981" 
                strokeWidth="3" 
                fill="none"/>
          <circle cx="150" cy="100" r="5" fill="#10B981"/>
          <circle cx="250" cy="200" r="5" fill="#10B981"/>
          <rect x="50" y="50" width="80" height="40" rx="5" fill="#334155"/>
          <rect x="270" y="50" width="80" height="40" rx="5" fill="#334155"/>
        </svg>
      ),
      tags: ["React", "D3.js", "Alpha Vantage API", "Redux"],
      link: "https://github.com",
      demoLink: "https://finance-dashboard-demo.com"
    }
  ];

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle smooth scrolling
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleScroll));

    return () => links.forEach(link => link.removeEventListener('click', handleScroll));
  }, []);

  // Show content with fade-in effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header/Navigation */}
      <header className={`fixed w-full ${isDarkMode ? 'bg-gray-900 shadow-gray-800' : 'bg-white'} shadow-sm z-50 transition-colors duration-300`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Tan Nguyen
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isDarkMode ? 'text-white' : 'text-gray-600'}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } px-3 py-2 text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className={`pt-16 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {/* Hero Section */}
        <section id="about" className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className={`text-4xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Frontend Developer
              </h2>
              <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about creating responsive and user-friendly web applications
              </p>
              <div className="mt-6 flex justify-center space-x-6">
                <a 
                  href="https://github.com" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                  aria-label="Email Contact"
                >
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`${
                    isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                  } rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="w-full h-48 bg-gray-100 dark:bg-gray-700">
                    {project.image}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                          aria-label="View source code"
                        >
                          <GithubIcon size={20} />
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                          aria-label="View live demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Experience Section */}
<section className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 flex justify-center">
                <a
                  href="/path-to-resume.pdf"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume (PDF)
                </a>
              </div>
              
              {/* Experience Timeline */}
              <div className="space-y-8">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Full Stack Developer
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AllTrue</p>
                    </div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>April 2023 - Present</span>
                  </div>
                  <ul className={`list-disc pl-5 mt-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Designed and implemented scalable database schema and RESTful API using FastAPI and GraphQL</li>
                    <li>Developed responsive dashboard with React, TypeScript, and Next.js, featuring interactive charts</li>
                    <li>Implemented advanced incident management system with real-time updates</li>
                    <li>Optimized database queries and API calls, significantly improving application performance</li>
                  </ul>
                </div>
                
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Junior Full Stack Developer
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>HSBC</p>
                    </div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Jul 2022 - March 2023</span>
                  </div>
                  <ul className={`list-disc pl-5 mt-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Implemented redux/react framework for Wealth Compass, reducing load times by 45%</li>
                    <li>Refactored existing codebase to TypeScript and improved code reusability</li>
                    <li>Developed React and Spring Boot application for database interactions</li>
                  </ul>
                </div>

                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        AWS and Systems Administrator Intern
                      </h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Payment Source</p>
                    </div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>May 2021 - Aug 2021</span>
                  </div>
                  <ul className={`list-disc pl-5 mt-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li>Mapped Oracle table relationships and reconciled development/production databases</li>
                    <li>Documented AWS tools, shortening training time for new hires</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning & Growth Section */}
        <section className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Learning & Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Certifications
                </h3>
                <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>
                    <span className="font-medium">Meta Frontend Developer Certificate</span>
                    <p className="text-sm">Completed December 2023</p>
                  </li>
                  <li>
                    <span className="font-medium">AWS Cloud Practitioner</span>
                    <p className="text-sm">Completed August 2023</p>
                  </li>
                </ul>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Recent Learning
                </h3>
                <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>
                    <span className="font-medium">TypeScript & Next.js</span>
                    <p className="text-sm">Currently learning through building side projects</p>
                  </li>
                  <li>
                    <span className="font-medium">Testing with Jest & React Testing Library</span>
                    <p className="text-sm">Implementing in current work projects</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Education
            </h2>
            <div className="max-w-3xl mx-auto">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Diploma in Computer Information Technology
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>British Columbia Institute of Technology</p>
                  </div>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded text-sm">
                      Honors
                    </span>
                  </div>
                </div>
                <ul className={`list-disc pl-5 mt-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>Won first place at technology fair for QR code generator project</li>
                  <li>Focus on full-stack development and cloud technologies</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Bachelor of Science in Biology
                    </h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Simon Fraser University</p>
                  </div>
                </div>
                <p className={`mt-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Foundation in analytical thinking and scientific methodology
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Side Projects Section */}
        <section className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Locations Sharing App
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A social location-sharing platform where users can log and share their visited places. 
                  Features include image uploading, location editing, and user-specific viewing permissions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'MongoDB', 'CRUD'].map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/tannguyen901"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} className="mr-1" /> Code
                  </a>
                  <a 
                    href="#"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg`}>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  BuiltSpace QR Code Generator
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Award-winning project that improved QR code generation system. Led frontend development using React,
                  working closely with Product Owner for weekly requirement updates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'UI/UX', 'Agile', 'QR Technology'].map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/tannguyen901"
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon size={16} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } p-6 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frontend</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>React, Next.js, TypeScript, JavaScript</p>
              </div>
              <div className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } p-6 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Styling</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Tailwind CSS, SCSS, Material UI, Framer Motion</p>
              </div>
              <div className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } p-6 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Backend</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Node.js, Express, MongoDB, PostgreSQL</p>
              </div>
              <div className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } p-6 rounded-lg shadow-sm text-center transition-transform duration-300 hover:scale-105`}>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Tools & Others</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Git, Docker, AWS, CI/CD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:your.email@example.com"
                  className={`inline-flex items-center px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200`}
                >
                  Say Hello <MailIcon size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a 
                href="https://github.com" 
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                aria-label="Email Contact"
              >
                <MailIcon size={20} />
              </a>
            </div>
            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Tan Nguyen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;