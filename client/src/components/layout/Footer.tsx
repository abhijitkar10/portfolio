import { Link } from "wouter";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
              className="text-xl font-bold"
            >
              Abhijit Kar
            </a>
            <p className="text-gray-400 mt-1">Computer Science Engineering Student</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#about");
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#education");
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Education
            </a>
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#projects");
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#skills");
              }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Abhijit Kar. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="https://linkedin.com/in/abhijit-kar-471a33214" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/abhijitkar10" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
