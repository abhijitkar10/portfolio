import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;
      
      // Basic validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required' 
        });
      }
      
      // In a real implementation, you would:
      // 1. Send an email using a service like SendGrid, Mailgun, etc.
      // 2. Or store the message in a database
      
      // For now, we'll just log the data and return success
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Simulate a short delay to make it feel like something is happening
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        message: 'Message received successfully' 
      });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
