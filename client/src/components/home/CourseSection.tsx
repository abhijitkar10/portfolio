import { CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { coursework } from "@/data/portfolio-data";

export default function CourseSection() {
  return (
    <section className="section-animate py-16 bg-gray-700 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          Relevant Coursework
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="coursework">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-lg">
                View Completed Courses
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {coursework.map((course, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}