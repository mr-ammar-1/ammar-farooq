import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Hero = () => {
  const phrases = useMemo(
    () => [
      'Full-Stack Developer',
      'JavaScript Engineer',
      'MERN Specialist',
    ],
    []
  );

  const [pIndex, setPIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[pIndex];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setPIndex((p) => (p + 1) % phrases.length);
    }
    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [subIndex, deleting, pIndex, phrases]);

  const displayText = phrases[pIndex].slice(0, subIndex);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-40 left-[15%] w-48 h-48 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute bottom-32 right-[10%] w-64 h-64 border border-primary/15 rotate-45 animate-[spin_25s_linear_infinite]" />
        <div className="absolute top-1/4 right-[20%] w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-[25%] w-2 h-2 bg-primary/60 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-[30%] w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm text-primary font-medium">Open to opportunities</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-muted-foreground text-lg mb-2 font-mono">Hello, I'm</p>
            </Reveal>

            <Reveal delay={150}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                Ammar <span className="text-primary">Farooq</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="h-[2px] w-8 bg-primary" />
                <p className="text-xl sm:text-2xl font-semibold text-foreground" aria-live="polite">
                  <span className="text-primary">{displayText}</span>
                  <span className="typewriter-cursor" />
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Building scalable web applications with <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Node.js</span>, and <span className="text-foreground font-medium">MongoDB</span>. 
                Passionate about crafting seamless user experiences and robust systems.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#projects"
                  className="group w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect flex items-center justify-center gap-2"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/resume/Ammar Farooq Resume.pdf"
                  download
                  className="w-full sm:w-auto px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center justify-center lg:justify-start gap-1">
                <span className="text-muted-foreground text-sm mr-3">Connect with me</span>
                <a
                  href="https://github.com/mr-ammar-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ammar-farooq207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:ammarfarooq207@gmail.com"
                  className="p-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right content - Image with decorative frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={200}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl rotate-3 hidden sm:block" />
                <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl -rotate-3 hidden sm:block" />
                
                {/* Main image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden border-2 border-primary/30 bg-card">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                  <img
                    src="/images/MyPhoto.png"
                    alt="Ammar Farooq"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 sm:-left-8 px-4 py-2 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-lg font-bold text-primary">1+ Years</p>
                </div>

                {/* Tech stack floating card */}
                <div className="absolute -top-4 -right-4 sm:-right-8 px-4 py-2 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm hidden sm:block">
                  <p className="text-xs text-muted-foreground mb-1">Tech Stack</p>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-mono">React</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-mono">Node</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-mono">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
