import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

export default function HeroSection() {
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
    <section id="about" className="section-animate py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-500 animated-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center parallax">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              {/* SVG Placeholder for profile image */}
              <svg 
                className="w-full h-full bg-gray-200 text-gray-400" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="100" height="100" fill="#E5E7EB" />
                <text 
                  x="50" 
                  y="50" 
                  fontFamily="Inter, sans-serif" 
                  fontSize="12" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  fill="#6B7280"
                >
                  Abhijit Kar
                </text>
                <circle cx="50" cy="40" r="12" fill="#6B7280" />
                <path 
                  d="M30,70 Q50,90 70,70" 
                  stroke="#6B7280" 
                  strokeWidth="2" 
                  fill="none" 
                />
                <path 
                  d="M50,52 L50,65" 
                  stroke="#6B7280" 
                  strokeWidth="2" 
                />
                <path 
                  d="M35,80 L50,65 L65,80" 
                  stroke="#6B7280" 
                  strokeWidth="2" 
                  fill="none" 
                />
              </svg>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Hi, I'm Abhijit Kar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-6">Computer Science Engineering Student</h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Passionate about technology and problem-solving. Currently pursuing Bachelor of Technology in Computer Science and Engineering at National Institute of Technology Karnataka. My interests include machine learning, software development, and data structures & algorithms.
            </p>
            <div className="flex flex-col space-y-4 mb-8">
              <a 
                href="mailto:abhijitkar0815@gmail.com" 
                className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xl"
              >
                <Mail className="w-7 h-7" />
                <span>abhijitkar0815@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/abhijit-kar-471a33214" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xl font-medium"
              >
                <Linkedin className="w-7 h-7 text-[#0077b5]" />
                <span>linkedin.com/in/abhijit-kar-471a33214</span>
              </a>
              <a 
                href="https://github.com/abhijitkar10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xl font-medium"
              >
                <Github className="w-7 h-7 text-white" />
                <span>github.com/abhijitkar10</span>
              </a>
              <a 
                href="https://abhijitkar.website" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xl"
              >
                <Globe className="w-7 h-7" />
                <span>abhijitkar.website</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-md"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
