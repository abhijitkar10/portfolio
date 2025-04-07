import { BookOpen, Calendar, CheckCircle, ChevronDown } from "lucide-react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { educationItems, coursework } from "@/data/portfolio-data";

export default function EducationSection() {
  return (
    <section id="education" className="section-animate py-16 bg-gray-800 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Education</span>
        </h2>
        
        <Timeline>
          {educationItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              icon={<BookOpen className="w-4 h-4 text-white" />}
              iconColor={item.color}
            >
              <div className="bg-white rounded-lg shadow-md p-6 flex-1 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-lg">{item.institution}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{item.degree}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
        

      </div>
    </section>
  );
}
