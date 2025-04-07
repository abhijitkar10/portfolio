import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Drill, Layers } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-primary mr-3" />,
    skills: ["C", "C++", "Python", "HTML/CSS", "JavaScript", "MYSQL"],
    colorClass: "bg-blue-50 text-blue-700"
  },
  {
    title: "Developer Tools",
    icon: <Drill className="w-6 h-6 text-secondary mr-3" />,
    skills: ["VS Code", "Logisim", "Cisco Packet Tracer", "Google Cloud"],
    colorClass: "bg-purple-50 text-purple-700"
  },
  {
    title: "Technologies/Frameworks",
    icon: <Layers className="w-6 h-6 text-accent mr-3" />,
    skills: ["Linux", "GitHub", "WordPress"],
    colorClass: "bg-green-50 text-green-700"
  }
];

const skillProficiency = [
  { name: "Python", percentage: 90 },
  { name: "C/C++", percentage: 85 },
  { name: "Data Structures & Algorithms", percentage: 80 },
  { name: "HTML/CSS/JavaScript", percentage: 75 },
  { name: "Database Management", percentage: 70 },
  { name: "Machine Learning", percentage: 65 }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-animate py-16 bg-gray-50 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className={`skill-tag px-3 py-1.5 ${category.colorClass} rounded-full text-sm border-none transition-all duration-200 hover:translate-y-[-2px] hover:shadow-sm`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Skill Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillProficiency.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.percentage}%</span>
                </div>
                <ProgressBar 
                  value={skill.percentage} 
                  max={100} 
                  className="w-full h-2.5 bg-gray-200 rounded-full"
                  barClassName="bg-primary h-2.5 rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
