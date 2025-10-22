import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Use repo-relative imports if possible
import logoWhite from '@/assets/hrtLogoWhite.png';
import logoBlack from '@/assets/hrtLogoBlack.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

// detect homepage (Router provides pathname relative to basename)
const isHome = location.pathname === "/";

// only show white when on homepage AND at the top (not scrolled)
const showWhite = isHome && !isScrolled;

const defaultLinkClass = showWhite ? "text-white" : "text-foreground";
const brandClass = showWhite ? "text-white" : "text-primary";
const currentLogo = showWhite ? logoWhite : logoBlack;


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* taller header + small vertical padding to ensure logo fits */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 lg:h-20 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className={`flex items-center text-2xl font-bold transition-colors ${brandClass}`}>
                {/* constrained logo size, responsive, no top margin */}
                <img
                  src={currentLogo}
                  alt="HRT Group Logo"
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 object-contain transition-all duration-300"
                  style={{ maxHeight: '80px' }}
                />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const linkClass = isActive ? 'text-accent' : defaultLinkClass;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${linkClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const linkClass = isActive ? 'text-accent' : defaultLinkClass;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 text-base font-medium transition-colors hover:text-accent ${linkClass}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
