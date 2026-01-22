import { Briefcase, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';

const experiences = [
  {
    type: 'work',
    title: 'Jr. MERN Stack Developer',
    company: 'ML Bench (Pvt) Ltd · Full-time',
    period: 'Jun 2025 - Present · 8 mos',
    description:
      'Building MERN features and delivering production-grade web applications. On-site in Lahore, Punjab, Pakistan. Focus on Stripe integrations, React.js feature delivery, and backend APIs.',
    highlights: ['Stripe integration', 'React.js components', 'Node/Express APIs', 'On-site collaboration'],
  },
  {
    type: 'work',
    title: 'Web Developer',
    company: 'PNY Trainings · Part-time',
    period: 'Jun 2023 - Aug 2023 · 3 mos',
    description:
      'Developed training projects and web modules, supporting learners with practical MERN stack implementations. On-site in Lahore, Punjab, Pakistan.',
    highlights: ['MERN practice projects', 'Responsive UI', 'Mentoring support'],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Magnatec Systems Private Limited · Internship',
    period: 'Jul 2022 - Sep 2022 · 3 mos',
    description:
      'Contributed to software development tasks and learned best practices in a professional environment. On-site in Lahore, Punjab, Pakistan.',
    highlights: ['Feature prototyping', 'Bug fixes', 'Team collaboration'],
  },
];

const education = [
  {
    degree: 'BS Computer Science',
    school: 'University of Engineering and Technology, Lahore',
    period: '2021 - 2025',
    description: 'Computer Science with focus on software engineering and web technologies.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30 relative">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">My Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Experience & <span className="text-primary">Education</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
            </Reveal>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Reveal key={index} delay={index * 150}>
                    <div className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-black border-2 border-primary flex items-center justify-center">
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
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
            </Reveal>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Reveal key={index} delay={index * 120}>
                  <div className="p-6 rounded-xl border border-border bg-card card-hover">
                    <span className="text-sm font-mono text-primary">{edu.period}</span>
                    <h4 className="text-lg font-semibold mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Certifications or Additional Info */}
            {/* <Reveal delay={200}>
              <div className="mt-8 p-6 rounded-xl border border-border bg-primary/5">
                <h4 className="font-semibold mb-4">Continuous Learning</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Online courses on advanced React patterns</li>
                  <li>• AWS Cloud Practitioner certification</li>
                  <li>• Active contributor to open source projects</li>
                  <li>• Regular attendee of tech conferences</li>
                </ul>
              </div>
            </Reveal> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
