
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Majestic People Infotech",
      period: "August 7, 2023 - Present",
      description: [
        "Worked as a Full Stack Developer contributing to both front-end and back-end development across multiple projects. This role helped me strengthen my skills in real-world application development, improve my problem-solving abilities, and work collaboratively with cross-functional teams. I actively participated in project planning, coding, testing, and deployment phases.",
        "<b>Key Responsibilities and Achievements:</b>",
        "Developed and maintained responsive front-end interfaces using React.js, ensuring seamless user experiences across devices.",
        "Built and optimized backend APIs using Node.js and Express, integrating with databases like MongoDB and MySQL.",
        "Collaborated with UI/UX designers to implement clean and intuitive interfaces aligned with project requirements.",
        "Handled version control and collaborative development using Git and GitHub in a team-oriented Agile environment.",
        "Enhanced application performance by identifying bottlenecks and implementing efficient coding practices.",
        "Actively participated in daily stand-ups, sprint planning, and code reviews to improve team productivity and code quality."
      ],
      skills: ["React", "Node.js", "Typescript", ".NET Core Web API", "MSSQL Server", "MongoDB"]
    },
    {
      title: "React JS Internship",
      company: "Amypo Technologies Pvt Ltd",
      period: "Feb 2023 - April 2023",
      description: [
        "Built interactive UI components using modern JavaScript frameworks",
        "Converted design mockups into responsive, cross-browser compatible implementations",
        "Component Creation: Developing reusable and modular components to make code more maintainable and scalable.",
        "Reduced load times by 60% through optimization techniques",
        "Using Git for source control to collaborate with teams and manage the codebase.",
        "Collaborated with designers to improve user experience"
      ],
      skills: ["HTML5", "CSS", "JavaScript", "Bootstrap", "Material UI", "ReactJS"]
    },
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

    // Observe each experience item
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
    <section id="experience" className="" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-underline">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a developer, highlighting the roles and responsibilities
          </p>
        </div>

        <div className="relative mt-4">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {experienceItems.map((item, index) => (
              <div 
                key={index} 
                className="relative opacity-0"
                ref={el => itemRefs.current[index] = el}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                <div className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''} pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <Card className="card-hover overflow-hidden border-l-4 border-l-portfolio-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={16} className="mr-1" />
                          {item.period}
                        </div>
                      </div>
                      
                      <div className="mb-4 flex items-center text-portfolio-primary">
                        <Briefcase size={16} className="mr-2" />
                        <span className="font-medium">{item.company}</span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-portfolio-primary mt-2 mr-2"></span>
                            <span dangerouslySetInnerHTML={{ __html: point }} />
                            {/* <span>{point}</span> */}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
