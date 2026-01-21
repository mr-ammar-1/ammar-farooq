import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers with data visualization, scheduling, and multi-platform integration.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Express'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and video call capabilities.',
    tech: ['React', 'WebSocket', 'Node.js', 'Redis'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'A content management system with markdown support, SEO optimization, and analytics.',
    tech: ['Next.js', 'MongoDB', 'TypeScript'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Weather App',
    description: 'A beautiful weather application with location detection and 7-day forecasts.',
    tech: ['React', 'OpenWeather API', 'Tailwind'],
    github: '#',
    live: '#',
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl border border-border bg-card card-hover"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Project Image Placeholder */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-[hsl(262,83%,58%)]/10 border border-border flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/50" />
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-mono bg-secondary rounded-full text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border bg-card card-hover flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
