import { BookOpen, Calendar, CheckCircle } from "lucide-react";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

const educationItems = [
  {
    institution: "National Institute of Technology Karnataka",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Mangalore, Karnataka",
    period: "Aug. 2023 - Present",
    color: "primary"
  },
  {
    institution: "Global Indian International School",
    degree: "CBSE Class 12 : 96.2%",
    location: "Kuala Lumpur, Malaysia",
    period: "Apr. 2022 – Mar. 2023",
    color: "secondary"
  },
  {
    institution: "Global Indian International School",
    degree: "CBSE Class 10 : 93.4%",
    location: "Kuala Lumpur, Malaysia",
    period: "Apr. 2020 – Mar. 2021",
    color: "accent"
  },
];

const coursework = [
  "Linear Algebra and Matrices",
  "C Programming",
  "Operating Systems",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Discrete Mathematical Structures",
  "Database Management System",
  "Data Communication",
  "Theory of Computation",
  "Computer Organization and Architecture",
];

export default function EducationSection() {
  return (
    <section id="education" className="section-animate py-16 bg-gray-50 opacity-0 translate-y-4 transition-all duration-500">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {coursework.map((course, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5" />
                  <span>{course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
