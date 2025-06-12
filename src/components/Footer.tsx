
import { Link } from 'react-router-dom';
import { Mail, BookOpen, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-heading font-semibold">Vynora</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              Empowering the intersection of computer science and healthcare through comprehensive resources, 
              research insights, and community-driven learning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">AI in Healthcare</li>
              <li className="text-primary-foreground/80">CS for Pre-Med</li>
              <li className="text-primary-foreground/80">Biotech Innovations</li>
              <li className="text-primary-foreground/80">Research Tools</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Vynora. Supporting the future of healthcare technology.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Mail className="h-4 w-4 text-primary-foreground/60" />
            <BookOpen className="h-4 w-4 text-primary-foreground/60" />
            <Users className="h-4 w-4 text-primary-foreground/60" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
