import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10 pt-16 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="order-1 lg:order-1 max-w-2xl mx-auto lg:mx-0 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Ammar Farooq</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-xl md:text-2xl font-semibold mb-2">
                Full Stack Developer
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-muted-foreground max-w-2xl mb-10">
                1+ years of experience building scalable web applications with React.js, Node.js, Express, and MongoDB. 
                Passionate about creating seamless user experiences and robust backend systems.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 mb-12">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex items-center justify-start gap-6">
                <a
                  href="https://github.com/mr-ammar-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ammar-farooq207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ammarfarooq207@gmail.com"
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-2 lg:order-2 relative w-full flex justify-center">
            <Reveal delay={300}>
              <div className="w-[90%] sm:w-[90%] md:w-[500px] max-w-full mx-auto rounded-2xl overflow-hidden mt-6">
                <img
                  src="/images/MyPhoto.png"
                  alt="Ammar Farooq"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
