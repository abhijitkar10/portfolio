import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Drill, Layers } from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

// Add icons to skill categories
const skillCategoriesWithIcons = skillCategories.map((category, index) => {
  let icon;
  if (category.title === "Languages") {
    icon = <Code className="w-6 h-6 text-primary mr-3" />;
  } else if (category.title === "Developer Tools") {
    icon = <Drill className="w-6 h-6 text-secondary mr-3" />;
  } else {
    icon = <Layers className="w-6 h-6 text-accent mr-3" />;
  }
  return { ...category, icon };
});

export default function SkillsSection() {
  return (
    <section id="skills" className="section-animate py-16 bg-gray-800 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategoriesWithIcons.map((category, index) => (
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


      </div>
    </section>
  );
}
