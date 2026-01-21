import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Developing and maintaining web applications using React, Node.js, and MongoDB. Leading frontend development initiatives and mentoring junior developers.',
    highlights: ['Led migration to TypeScript', 'Improved performance by 40%', 'Implemented CI/CD pipelines'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2022 - 2023',
    description: 'Built responsive web applications for various clients using React and modern JavaScript. Collaborated with designers to implement pixel-perfect UIs.',
    highlights: ['Delivered 15+ client projects', 'Built component library', 'Optimized SEO rankings'],
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    company: 'Startup',
    period: '2021 - 2022',
    description: 'Started my professional journey building web applications and learning best practices in software development.',
    highlights: ['Learned MERN stack', 'Contributed to core product', 'Improved testing coverage'],
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    school: 'University Name',
    period: '2017 - 2021',
    description: 'Focused on software engineering, algorithms, and web technologies.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Experience & <span className="text-primary">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="p-6 rounded-xl border border-border bg-card card-hover">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <span className="text-sm font-mono text-primary">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-xl border border-border bg-card card-hover">
                  <span className="text-sm font-mono text-primary">{edu.period}</span>
                  <h4 className="text-lg font-semibold mt-2">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications or Additional Info */}
            <div className="mt-8 p-6 rounded-xl border border-border bg-primary/5">
              <h4 className="font-semibold mb-4">Continuous Learning</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Online courses on advanced React patterns</li>
                <li>• AWS Cloud Practitioner certification</li>
                <li>• Active contributor to open source projects</li>
                <li>• Regular attendee of tech conferences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
