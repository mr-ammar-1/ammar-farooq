import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';

const projects = [
  {
    key: 'stelomic',
    title: 'Stelomic',
    category: 'AI Cell Segmentation',
    description:
      'Automated cell segmentation and analytics with expert-trained AI. One-click metrics (count, area, perimeter, circularity, confluency), research-grade accuracy, HIPAA/GDPR-friendly privacy, and validation across 40+ cell types.',
    tech: ['AI', 'Microscopy', 'Metrics', 'Privacy', 'Validation'],
    liveUrl: 'https://stelomic.com/',
    image: '/placeholder.svg',
  },
  {
    key: 'catering',
    title: 'Munich Catering',
    category: 'Catering Website',
    description:
      'Premium catering in Munich with bespoke menus and impeccable service. 4.8/5 rating, business and private catering, additional services, and elegant dining experiences.',
    tech: ['Catering', 'Services', 'Menus', 'Rating'],
    liveUrl: 'https://catering-lac.vercel.app/',
    image: '/placeholder.svg',
  },
  {
    key: 'ubuildus',
    title: 'UBuildUs',
    category: 'AI Recruiting Platform',
    description:
      'AI-powered resume insights, smart talent search, and interview management. Upload and analyze resumes, chat for recommendations, and streamline scheduling and evaluation.',
    tech: ['AI', 'Recruiting', 'Resume', 'Chat', 'Scheduling'],
    liveUrl: 'https://u-build-us.vercel.app/',
    image: '/placeholder.svg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A selection of projects that showcase my skills in full-stack development
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="group rounded-2xl border border-border bg-card overflow-hidden card-hover flex flex-col">
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
                
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <iframe
                    src={project.liveUrl}
                    title={project.title}
                    className="w-full h-full"
                    loading="lazy"
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
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs font-mono bg-secondary rounded-lg text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-mono bg-secondary/60 rounded-lg text-muted-foreground">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/details/${project.key}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
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
            </Reveal>
          ))}
        </div>

        {/* View All Projects Link */}
        <Reveal delay={100}>
          <div className="text-center mt-12">
            <Link
              to="/projects/details"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
