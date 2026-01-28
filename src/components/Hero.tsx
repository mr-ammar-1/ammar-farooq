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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
      {/* Subtle background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Minimal floating elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-32 left-[8%] w-64 h-64 border border-border rounded-full opacity-40" />
        <div className="absolute bottom-40 right-[8%] w-48 h-48 border border-border rotate-45 opacity-30" />
        <div className="absolute top-1/4 right-[15%] w-2 h-2 bg-foreground/20 rounded-full" />
        <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-foreground/30 rounded-full" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1 text-center lg:text-left w-full">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-4 sm:mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">Open to opportunities</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-muted-foreground text-base sm:text-lg mb-2 font-mono">Hello, I'm</p>
            </Reveal>

            <Reveal delay={150}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">
                Ammar <span className="text-primary">Farooq</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                <div className="h-[2px] w-6 sm:w-8 bg-foreground/60" />
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground" aria-live="polite">
                  {displayText}
                  <span className="typewriter-cursor" />
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                Building scalable web applications with <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Node.js</span>, and <span className="text-foreground font-medium">MongoDB</span>. 
                Passionate about crafting seamless user experiences.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href="#projects"
                  className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/resume/Ammar Farooq Resume.pdf"
                  download
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center justify-center lg:justify-start gap-1">
                <span className="text-muted-foreground text-xs sm:text-sm mr-2 sm:mr-3">Connect</span>
                <a
                  href="https://github.com/mr-ammar-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ammar-farooq207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:ammarfarooq207@gmail.com"
                  className="p-2 rounded-lg hover:bg-secondary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right content - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Reveal delay={200}>
              <div className="relative">
                {/* Main image container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-border bg-card">
                  <img
                    src="/images/MyPhoto.png"
                    alt="Ammar Farooq"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Experience badge - positioned outside image on larger screens */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-lg shadow-lg z-20">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Experience</p>
                  <p className="text-base sm:text-lg font-bold text-foreground">1+ Years</p>
                </div>

                {/* Tech stack badge - hidden on very small screens */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-lg shadow-lg z-20 hidden sm:block">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Stack</p>
                  <div className="flex gap-1">
                    <span className="px-1.5 sm:px-2 py-0.5 bg-secondary text-foreground text-[10px] sm:text-xs rounded font-mono">React</span>
                    <span className="px-1.5 sm:px-2 py-0.5 bg-secondary text-foreground text-[10px] sm:text-xs rounded font-mono">Node</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
