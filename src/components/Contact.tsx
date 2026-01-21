import { useState } from 'react';
import { toast } from '@/components/ui/sonner';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        toast.success('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data?.error || 'Failed to send message');
      }
    } catch {
      toast.error('Network error. Please try again');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding relative scroll-mt-20 md:scroll-mt-24">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Reveal direction="right">
            <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:ammarfarooq207@gmail.com"
                className="flex flex-wrap items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">ammarfarooq207@gmail.com</p>
                </div>
              </a>
        
            

              <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="p-3 rounded-lg bg-secondary">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">03259727611</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="p-3 rounded-lg bg-secondary">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="left" delay={100}>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 glow-effect disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
