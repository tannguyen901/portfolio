import React from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Tan Nguyen</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}              </button>
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
                    className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
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
      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Frontend Developer
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Passionate about creating responsive and user-friendly web applications
              </p>
              <div className="mt-6 flex justify-center space-x-6">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                  <GithubIcon size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                  <LinkedinIcon size={24} />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
                  <MailIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card Placeholder */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/api/placeholder/400/300"
                  alt="Project preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                  <p className="text-gray-600 mb-4">
                    Brief project description goes here. Explain what problem it solves.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-600">React, JavaScript, HTML/CSS</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold mb-2">Styling</h3>
                <p className="text-gray-600">Tailwind CSS, Styled Components</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-gray-600">Git, VS Code, Figma</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-semibold mb-2">Learning</h3>
                <p className="text-gray-600">Node.js, Express, PostgreSQL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Get In Touch
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                I'm currently looking for new opportunities. Whether you have a question
                or just want to say hi, feel free to reach out!
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Tan Nguyen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;