import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Numerical Image Recognition",
    period: "January 2025",
    technologies: ["Python", "PyTorch", "Google Colab"],
    points: [
      "Developed an image recognition model to classify handwritten digits using a neural network.",
      "Implemented Python and PyTorch in Google Colab to train and evaluate the model.",
      "Achieved high accuracy in digit classification through optimized model training."
    ],
    gradient: "from-primary to-secondary"
  },
  {
    title: "Runner's Performance Monitoring System",
    period: "September 2024 – November 2024",
    technologies: ["Verilog", "Logisim"],
    points: [
      "Designed a system to track key metrics such as steps taken, distance traveled, max heart rate, and average heart rate.",
      "Implemented Verilog-based software and developed circuit diagrams in Logisim.",
      "Integrated safety alert mechanisms to enhance performance tracking."
    ],
    gradient: "from-secondary to-primary"
  },
  {
    title: "Go Back-N ARQ",
    period: "Ongoing",
    technologies: ["Python", "Scapy", "Matplotlib"],
    points: [
      "Built a tool to emulate the working of Go Back-N ARQ protocol.",
      "Implemented Graphs to show the results in different cases.",
      "Used Scapy as a packet manipulation library."
    ],
    gradient: "from-accent to-secondary"
  }
];

// Badge color mapping
const badgeColors: Record<string, string> = {
  "Python": "bg-blue-100 text-blue-800",
  "PyTorch": "bg-purple-100 text-purple-800",
  "Google Colab": "bg-green-100 text-green-800",
  "Verilog": "bg-yellow-100 text-yellow-800",
  "Logisim": "bg-indigo-100 text-indigo-800",
  "Scapy": "bg-red-100 text-red-800",
  "Matplotlib": "bg-orange-100 text-orange-800"
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-animate py-16 opacity-0 translate-y-4 transition-all duration-500">
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
                <ul className="space-y-2 text-gray-600">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-primary mr-2 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-end">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                    aria-label="View details"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
