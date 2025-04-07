import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Calendar, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Machine Learning: Classification and Regression",
    issuer: "Stanford via Coursera",
    date: "January 2025",
    details: [
      "Completed multiple lab assignments focused on machine learning and data analysis.",
      "Used Python libraries like NumPy, Matplotlib, and PyPlot for data visualization and numerical computations.",
      "Implemented classification, regression, and clustering models using Scikit-learn.",
      "Gained hands-on experience in feature engineering, model evaluation, and performance tuning."
    ]
  }
  // More certifications can be added here
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-animate py-16 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Certifications & Courses</span>
        </h2>
        
        {certifications.map((cert, index) => (
          <Card key={index} className="mb-6 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
              <h3 className="font-bold text-xl mb-1">{cert.title}</h3>
              <div className="flex items-center text-white/80">
                <Award className="w-4 h-4 mr-1" />
                <span>{cert.issuer}</span>
                <Calendar className="w-4 h-4 ml-4 mr-1" />
                <span>{cert.date}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-2 text-gray-600">
                {cert.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-end">
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                  aria-label="View certificate"
                >
                  <span>View Certificate</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
