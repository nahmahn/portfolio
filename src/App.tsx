import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import { portfolioData } from './portfolioData';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />

        <footer className="py-20 px-6 border-t border-white/10 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              {/* Left Side: Branding */}
              <div className="space-y-2">
                <h3 className="text-2xl font-medium text-white tracking-tight">{portfolioData.personal.name}</h3>
                <p className="text-gray-500 font-light">{portfolioData.personal.role}</p>
              </div>

              {/* Right Side: Links */}
              <div className="flex flex-wrap gap-8">
                <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-sm text-gray-500 hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-gray-500 hover:text-white transition-colors">Skills</a>
                <a href="#experience" className="text-sm text-gray-500 hover:text-white transition-colors">Experience</a>
                <a href="#resume" className="text-sm text-gray-500 hover:text-white transition-colors">Resume</a>
                <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-mono">
              <p>© {currentYear} {portfolioData.personal.name}</p>
              <p>Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
