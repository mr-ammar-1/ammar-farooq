import { Download, Code2, Zap, Users } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border bg-secondary">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-[hsl(262,83%,58%)]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-[hsl(262,83%,58%)] flex items-center justify-center text-5xl font-bold text-primary-foreground">
                      AF
                    </div>
                    <p className="mt-4 text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-mono text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Passionate about building{' '}
              <span className="gradient-text">exceptional web experiences</span>
            </h2>
            
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

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border bg-card card-hover"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Download Resume */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
