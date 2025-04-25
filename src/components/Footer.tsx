
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold heading-gradient mb-2">Thank you for visiting!</h3>
            <p className="text-muted-foreground">
              Building amazing web experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home" 
              className="p-3 rounded-full bg-card border hover:bg-portfolio-primary hover:text-white transition-colors mb-4"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            <p className="text-muted-foreground text-sm">
              &copy; <b>{currentYear} Arawind. All rights reserved.</b>
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <b>
            Designed and built with React, Tailwind CSS
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
