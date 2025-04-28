import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import img1 from '../Images/Arawind.png';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple particles animation
    if (!particlesRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    particlesRef.current.appendChild(canvas);
    
    const resizeCanvas = () => {
      if (particlesRef.current) {
        canvas.width = particlesRef.current.offsetWidth;
        canvas.height = particlesRef.current.offsetHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(139, 92, 246, ${Math.random() * 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    init();
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (particlesRef.current && canvas.parentNode === particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles background */}
      <div ref={particlesRef} className="particles-container absolute inset-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo with floating animation */}
          <div className="mb-6 flex justify-center animate-float">
            <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-portfolio-primary shadow-lg transition-transform hover:scale-105 duration-300 flex flex-col justify-start" style={{marginTop:'70px'}}>
              <AvatarImage 
                src={img1}
                alt="Full Stack Developer Profile"
                className="object-cover"
              />
              <AvatarFallback>Arawind</AvatarFallback>
            </Avatar>
          </div>
                   
          <p className="text-lg md:text-xl text-muted-foreground  max-w-2xl mx-auto animate-fade-in" 
             style={{ animationDelay: '1s', fontWeight:500 }}>
      When life gives you JavaScript errors,
      console.log  your feelings and move on
          </p>

          <p className="text-portfolio-primary font-medium animate-fade-in" 
             style={{ animationDelay: '0.2s', fontSize:'20px' }}>
          Hey there! Explore my journey in full-stack development – <b><i>I'm Arawind, your future tech partner. </i></b>
          </p>
          
          <h1 className="text-4xl  font-bold ">
            <div className="bg-gradient-primary text-transparent bg-clip-text animate-gradient-shift">
              <span className="inline-block animate-fade-in hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: '0.4s' }}>Full</span>{" "}
              <span className="inline-block animate-fade-in hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: '0.6s' }}>Stack</span>{" "}
              <span className="inline-block animate-fade-in hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: '0.8s' }}>Developer</span>
            </div>
          </h1>
          
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full  animate-pulse-glow"></div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in mt-4" 
             style={{ animationDelay: '1s' }}>
           Passionate Full Stack Developer with expertise in both front-
          end and back-end technologies. Eager to leverage my skills
          in building scalable, efficient, and user-focused applications.
          Committed to continuous learning and delivering high-
          quality solutions that drive business success and enhance
          user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" 
               style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Contact Me
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <div className="transform -translate-x-1/2 animate-bounce hover:animate-float transition-all duration-300" style={{position:'absolute', bottom:'0px'}}>
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-sm mb-2 group-hover:scale-110 transition-transform duration-300">Scroll Down</span>
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
