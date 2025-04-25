
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import img1 from '../Images/balloons-sky.jpg'
import img2 from '../Images/medical.jpg'
import img3 from '../Images/FoodSafetyManagement.png'
import img4 from '../Images/inmate.jpg'
import img5 from '../Images/RMT.avif'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  myRole?:string;
}

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Warehouse Management System",
      description: "A fully responsive platform with product filtering, cart management, and payment integration.",
      image: img1,
      category: ["web", "fullstack"],
      technologies: ["React", ".NET Core Web API", "MS SQL Server", "Stripe"],
      myRole: "Developed front-end master pages and provided API integration support and bug fixing"
      // liveLink: "https://example.com",
      // githubLink: "https://github.com/example"
    },
    {
      id: 2,
      title: "Cirque  ",
      description: "A hospital management system that allows patients to register and schedule consultations with doctors efficiently",
      image: img2,
      category: ["web", "fullstack"],
      technologies: ["React", ".NET Core Web API", "MS SQL Server"],
      // liveLink: "https://example.com",
      // githubLink: "https://github.com/example",
      myRole: "Led full UI prototype, created master pages, provided Web API support, and handled bug fixing."
    },
    {
      id: 3,
      title: "Foodwatch - Dubai Municipality (Dubai Project)",
      description: "The project is a comprehensive food safety management system targeting of all food related business including cafeterias, restaurants, and manufactures. The system ensures each business adheres to set of standards and requirements",
      image: img3,
      category: ["mobile", "fullstack"],
      technologies: ["React JS", "Java"],
      myRole: "Developed sprint points and performed bug fixing to ensure project stability and progress."
      // liveLink: "https://example.com",
      // githubLink: "https://github.com/example"
    },
    {
      id: 4,
      title: "Inmate",
      description: "A secure and reliable messaging platform designed to facilitate confidential communication, allowing users to send and receive electronic messages with their loved ones.",
      image: img4,
      category: ["web", "fullstack"],
      technologies: ["React JS", "ASP.NET Core", "MS SQL Server"],
      myRole: 'Responsible for resolving bugs to ensure the smooth functionality and performance of the platform'
      // liveLink: "https://example.com",
      // githubLink: "https://github.com/example"
    },
    {
      id: 5,
      title: "Requirement Management Tool",
      description: "A project developed for HR managers and team leaders to manage job requirements, track responses, and monitor candidates' interview progress, including selection or rejection status.",
      image: img5,
      category: ["backend", "api"],
      myRole: "Developed the front-end, supported backend API and database integration, and optimized platform performance by fixing bugs.",
      technologies: ["React JS", "ASP.NET Core", "MS SQL Server"],
      githubLink: "https://github.com/example"
    },
  ];
  
  // const categories = [
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'web', name: 'Web Apps' },
  //   { id: 'mobile', name: 'Mobile Apps' },
  //   { id: 'fullstack', name: 'Full Stack' },
  //   { id: 'backend', name: 'Backend' },
  //   { id: 'api', name: 'APIs' }
  // ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

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

    // Observe each project item
    projectRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      projectRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [filter]);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-underline">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in building
            digital products, applications, and services.
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card h-80 opacity-0 card-hover"
              ref={el => projectRefs.current[index] = el}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="project-overlay">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4 text-sm line-clamp-2">{project.description}</p>
                  <p className="text-white/80 mb-4 text-sm line-clamp-2"><b>My Role:</b> {project.myRole}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                    
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    
                    <a 
                      href="#" 
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-auto"
                    >
                      <FolderOpen size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
