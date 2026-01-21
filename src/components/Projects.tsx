import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Development',
    description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration using Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    image: '/placeholder.svg',
  },
  {
    title: 'Task Management App',
    category: 'Web Application',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example-taskapp.com',
    image: '/placeholder.svg',
  },
  {
    title: 'Social Media Dashboard',
    category: 'Analytics Platform',
    description: 'An analytics dashboard for social media managers with data visualization, scheduling, and multi-platform integration.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Express'],
    liveUrl: 'https://example-dashboard.com',
    image: '/placeholder.svg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills in full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card overflow-hidden card-hover"
            >
              {/* Project Preview - Website Embed Style */}
              <div className="relative">
                {/* Browser Chrome */}
                <div className="bg-secondary/80 px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 max-w-md bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground truncate">
                      {project.liveUrl}
                    </div>
                  </div>
                </div>
                
                {/* Website Preview Image */}
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {project.category}
                </span>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-sm font-mono bg-secondary rounded-lg text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all"
          >
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
