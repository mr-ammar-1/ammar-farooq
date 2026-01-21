import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Ammar Farooq</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mr-ammar-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ammar-farooq207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ammarfarooq207@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
