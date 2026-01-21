import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-muted-foreground">by Ammar Farooq</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ammarfarooq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ammar-farooq-99227423b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ammar@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
