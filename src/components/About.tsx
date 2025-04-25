
import React from 'react';
import { Star, Code, Database, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-8 w-8 text-portfolio-primary" />,
      technologies: ["React", "Javascript", "TypeScript", "Tailwind CSS", "CSS", "Material UI", "Bootstrap"],
      rating: 90,
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-portfolio-primary" />,
      technologies: ["Node.js", "Express", "ASP.NET Core"],
      rating: 85,
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-portfolio-primary" />,
      technologies: ["MongoDB", "MSSQL Server"],
      rating: 80,
    }
  ];

  const renderStarRating = (rating: number) => {
    const maxStars = 5;
    const filledStars = Math.round((rating / 100) * maxStars);
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(maxStars)].map((_, i) => (
          <Star 
            key={i}
            className={`h-5 w-5 ${i < filledStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-underline">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer
            building robust and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Background</h3>
            <p className="leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I bring a holistic 
              approach to software development. I'm constantly exploring new technologies and methodologies
              to enhance my skills and deliver better solutions.
            </p>
            <p className="leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet.
              This curiosity evolved into a passion for creating digital experiences that are not only 
              functional but also intuitive and enjoyable to use.
            </p>
            <p className="leading-relaxed">
              I thrive in collaborative environments and enjoy working with cross-functional teams to
              transform ideas into reality. My goal is to create software that makes a positive impact
              on users lives while maintaining high standards of quality and performance.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">My Skills</h3>
            
            {skills.map((skill, index) => (
              <div key={skill.category} className="card-hover">
                <Card className={`overflow-hidden border-l-4 border-l-portfolio-primary animate-fade-in`} 
                      style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <h4 className="text-xl font-medium">{skill.category}</h4>
                      </div>
                      {renderStarRating(skill.rating)}
                    </div>
                    
                    <div className="mb-4">
                      <div className="skill-progress-bar">
                        <div 
                          className="skill-progress-value transition-all duration-1000 animate-pulse-glow"
                          style={{ width: `${skill.rating}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
