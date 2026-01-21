const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Jest/Testing', level: 80 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

const techStack = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '📝' },
  { name: 'Tailwind', icon: '🎨' },
];

import Reveal from '@/components/Reveal';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">My Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A comprehensive toolkit built over 3+ years of hands-on development experience
            </p>
          </div>
        </Reveal>

        {/* Tech Stack Icons */}
        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <span>{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 150}>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-5">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
