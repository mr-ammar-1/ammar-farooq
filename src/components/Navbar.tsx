import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Reveal from '@/components/Reveal';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Reveal>
            <a href="#home" className="text-xl font-bold text-primary">
              Ammar Farooq
            </a>
          </Reveal>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Reveal key={link.href} delay={i * 80}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Let's Talk
              </a>
            </Reveal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent
            side="right"
            className="bg-background/95 backdrop-blur-md border-l border-border p-0"
          >
            <div className="flex h-full w-full flex-col">
              <div className="px-6 py-5 border-b border-border">
                <span className="text-lg font-semibold text-primary">Menu</span>
              </div>
              <nav className="flex-1 overflow-y-auto py-2">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block px-6 py-3 text-sm text-foreground hover:bg-secondary/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="px-6 py-4 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex w-full justify-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://github.com/mr-ammar-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ammar-farooq207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:ammarfarooq207@gmail.com"
                    className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
