import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-animate py-16 bg-gray-800 opacity-0 translate-y-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:abhijitkar0815@gmail.com" className="text-gray-800 hover:text-primary">abhijitkar0815@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:7363804723" className="text-gray-800 hover:text-primary">73638-04723</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800">NH 66, Mangalore, Karnataka, India 575025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Website</p>
                    <a href="https://abhijitkar.website" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary">abhijitkar.website</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/abhijit-kar-471a33214" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5]/20 flex items-center justify-center transition-colors" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </a>
                  <a 
                    href="https://github.com/abhijitkar10" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-800/10 hover:bg-gray-800/20 flex items-center justify-center transition-colors" 
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-800" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can I help you?" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Write your message here..." 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
