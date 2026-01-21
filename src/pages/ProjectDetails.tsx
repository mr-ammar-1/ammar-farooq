import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Reveal from '@/components/Reveal';

const websites = [
  { key: 'stelomic', title: 'Stelomic', url: 'https://stelomic.com/' },
  { key: 'catering', title: 'Munich Catering', url: 'https://catering-lac.vercel.app/' },
  { key: 'ubuildus', title: 'UBuildUs', url: 'https://u-build-us.vercel.app/' },
];

const siteDetails: Record<string, { headline: string; bullets: string[] }> = {
  stelomic: {
    headline: 'Automated cell segmentation and research-grade analytics',
    bullets: [
      'Expert-trained AI labeling and one-click metrics: count, area, perimeter, circularity, confluency, solidity',
      'Ready-to-use model with thousands of annotated images; no coding or training needed',
      'Private and secure; designed to support HIPAA and GDPR compliance',
      'Compatible with brightfield, darkfield, phase contrast, fluorescence, confocal, EM',
      'Performance analytics: accuracy, precision, recall, specificity, Dice/F1, IoU, Hausdorff distance',
    ],
  },
  catering: {
    headline: 'Premium catering in Munich for events that impress',
    bullets: [
      'Bespoke menus, refined culinary artistry, and impeccable service',
      '4.8/5 average rating with strong repeat customers',
      'Business and private catering plus additional services and event equipment',
      'Opening hours: Mon–Thu 10:00–01:00, Fri–Sun 11:00–22:00',
    ],
  },
  ubuildus: {
    headline: 'AI-powered resume insights and recruiting workflow',
    bullets: [
      'Instant resume analysis with personalized suggestions',
      'Smart talent search and AI chat for deeper candidate understanding',
      'Interview management with scheduling, tracking, and AI-assisted evaluation',
      'Three-step flow: Upload & Analyze, Search & Chat, Interview & Connect',
    ],
  },
};

const ProjectDetails = () => {
  const { key } = useParams<{ key?: string }>();
  const selected = key ? websites.find((s) => s.key === key) : undefined;
  const isSingle = !!selected;

  return (
    <section className="min-h-screen section-padding">
      <div className="container-custom">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={18} />
              Back
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-8">
            <span className="text-primary font-mono text-sm">Project Details</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{isSingle ? selected!.title : 'Live Previews'}</h1>
            <p className="text-muted-foreground mt-3">
              {isSingle ? 'Focused view for this project.' : 'Preview all project websites directly below.'}
            </p>
          </div>
        </Reveal>

        {isSingle ? (
          <div className="w-full">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="bg-secondary/80 px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 max-w-md bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground truncate">
                      {selected!.url}
                    </div>
                    <a
                      href={selected!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={16} />
                      Open
                    </a>
                  </div>
                </div>
                <div className="aspect-[16/9] bg-muted">
                  <iframe src={selected!.url} title={selected!.title} className="w-full h-full" loading="lazy" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-3">{siteDetails[selected!.key].headline}</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {siteDetails[selected!.key].bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ) : (
          <Tabs defaultValue="stelomic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {websites.map((site) => (
                <TabsTrigger key={site.key} value={site.key}>
                  {site.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {websites.map((site) => (
              <TabsContent key={site.key} value={site.key} className="mt-6">
                <Reveal>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="bg-secondary/80 px-4 py-3 flex items-center gap-3 border-b border-border">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-primary/60" />
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 max-w-md bg-background/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground truncate">
                          {site.url}
                        </div>
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={16} />
                          Open
                        </a>
                      </div>
                    </div>
                    <div className="aspect-[16/9] bg-muted">
                      <iframe src={site.url} title={site.title} className="w-full h-full" loading="lazy" />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-3">{siteDetails[site.key].headline}</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {siteDetails[site.key].bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
