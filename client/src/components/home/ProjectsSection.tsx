import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";

// Badge color mapping
const badgeColors: Record<string, string> = {
  "Python": "bg-blue-900 text-blue-200",
  "PyTorch": "bg-purple-900 text-purple-200",
  "Google Colab": "bg-green-900 text-green-200",
  "Verilog": "bg-yellow-900 text-yellow-200",
  "Logisim": "bg-indigo-900 text-indigo-200",
  "Scapy": "bg-red-900 text-red-200",
  "Matplotlib": "bg-orange-900 text-orange-200"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-animate py-16 opacity-0 translate-y-4 transition-all duration-500 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className={`bg-gradient-to-r ${project.gradient} p-4 text-white`}>
                <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{project.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className={`px-2 py-1 text-xs font-medium ${badgeColors[tech] || "bg-gray-100 text-gray-800"} rounded border-none`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-3 text-gray-300">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-end">
                  <a 
                    href="https://github.com/abhijitkar10" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                      aria-label="View details on GitHub"
                    >
                      <span>View on GitHub</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
