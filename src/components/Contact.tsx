
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success notification
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="text-portfolio-primary" />,
      title: "Phone",
      details: "+91 790407 9957",
      link: "tel:+12345678910"
    },
    {
      icon: <Mail size={20} className="text-portfolio-primary" />,
      title: "Email",
      details: "raamarawind555@gmail.com",
      link: "mailto:raamarawind555@gmail.com"
    },
    {
      icon: <MapPin size={20} className="text-portfolio-primary" />,
      title: "Location",
      details: "Coimbatore, Tamil Nadu, India",
      link: "https://maps.app.goo.gl/vS5b2iWVaGEfxWmk6"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/arawind-s-399268234",
      label: "LinkedIn"
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-muted/30 to-background">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-portfolio-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-portfolio-secondary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-underline">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-start p-4 rounded-lg border bg-card hover:border-portfolio-primary transition-colors card-hover"
                  target={item.title === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <div className="p-3 rounded-full bg-muted mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-portfolio-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-2xl font-semibold mb-8">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-card"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  className="min-h-32 resize-none bg-card"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
