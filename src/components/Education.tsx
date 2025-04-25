
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
  description: string;
  achievements: string[];
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science",
      institution: "Dr. Mahalingam College of Engineering and Technology",
      description: "Specialized in advanced web technologies and distributed systems.",
      achievements: [
        "Graduated with distinction",
        "Achieved a score of 87%",
        "Recipient of the Academic Excellence Scholarship",
        "Completed certifications in Web Development"
      ]
    },    
    {
      degree: "SSLC",
      institution: "Bharathiya Vidya Mandir Matriculation Higher Secondary School",
      description: "Completed the SSLC with a strong foundation in core academic subjects, developing skills in mathematics, science, and languages.",
      achievements: [
        "Achieved a score of 82%",
        "Active participant in school events and extracurricular activities",
        "Awarded Best Student in the Science Club",
      ]
    },    
    {
      degree: "HSC",
      institution: "Bharathiya Vidya Mandir Matriculation Higher Secondary School",
      description: "Completed the HSC with a focus on advanced science subjects, including Physics, Chemistry, and Mathematics, while developing critical thinking and problem-solving skills.",
      achievements: [
        "Achieved a score of 66%",
        "Active participant in school sports and cultural events",
        "Contributed to the school's annual science exhibition",
        "Member of the school cricket team"
      ]
    }    
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each education item
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="education" className="bg-muted/30">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-underline">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey that has shaped my
            knowledge and expertise in software development.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={index} 
                className="relative opacity-0"
                ref={el => itemRefs.current[index] = el}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''} pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <Card className="card-hover overflow-hidden border-l-4 border-l-portfolio-secondary">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={16} className="mr-1" />
                          {item.period}
                        </div>
                      </div>
                      
                      <div className="mb-4 flex items-center text-portfolio-secondary">
                        <GraduationCap size={16} className="mr-2" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      
                      <p className="mb-4 text-muted-foreground">
                        {item.description}
                      </p>
                      
                      <div className="mb-2 flex items-center">
                        <BookOpen size={16} className="mr-2 text-portfolio-secondary" />
                        <span className="font-medium">Key Achievements</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-secondary mt-2 mr-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
          <p className="mb-6">
            I'm committed to continuous learning and staying updated with the latest technologies and industry trends.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-card card-hover">
              <h4 className="font-medium mb-1">Advanced React Patterns</h4>
              <p className="text-sm text-muted-foreground">Frontend Masters</p>
            </div>
            <div className="p-4 border rounded-lg bg-card card-hover">
              <h4 className="font-medium mb-1">Introduction - Advanced Redux with Redux Toolkit</h4>
              <p className="text-sm text-muted-foreground">Frontend Masters</p>
            </div>
            <div className="p-4 border rounded-lg bg-card card-hover">
              <h4 className="font-medium mb-1">Node.js, Express, MongoDB & More: The Complete Bootcamp</h4>
              <p className="text-sm text-muted-foreground">Udemy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
