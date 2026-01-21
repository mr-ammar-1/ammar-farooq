import { Download, Code2, Zap, Users, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-primary font-mono text-sm">About Me</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Passionate about building <span className="text-primary">exceptional web experiences</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a dedicated MERN Stack Developer with a passion for creating seamless, 
                user-centric web applications. With expertise in JavaScript, React, Node.js, 
                and MongoDB, I bring ideas to life through clean, efficient code.
              </p>
              <p>
                My journey in web development has equipped me with a deep understanding of 
                both frontend and backend technologies, allowing me to build full-stack 
                solutions that are both beautiful and functional.
              </p>
              <p>
                I'm constantly learning and staying up-to-date with the latest technologies 
                and best practices to deliver cutting-edge solutions that exceed expectations.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {highlights.map((item, index) => (
              <Reveal key={index} delay={index * 120}>
                <div className="p-4 rounded-xl border border-border bg-card card-hover">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <a
              href="/resume/Ammar%20Farooq%20Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </Reveal>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/mr-ammar-1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ammar-farooq207/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ammarfarooq207@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
