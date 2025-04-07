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
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Relevant Coursework</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="coursework">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  View Completed Courses
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {coursework.map((course, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
