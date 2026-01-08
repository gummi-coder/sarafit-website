import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Verðskrá", href: "/verdskra" },
    { name: "Fjarþjálfun", href: "/how-it-works" },
    { name: "Tilbúin prógröm", href: "/pricing" },
    { name: "Um mig", href: "/about" },
  ];

  const handleSignupClick = () => {
    setIsMenuOpen(false);
    scrollToSignupSection(navigate, location.pathname);
  };

  return (
    <nav className="fixed top-6 left-4 right-4 md:left-8 md:right-8 z-50">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 md:px-8 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/sarafit-logo.png"
              alt="Sarafit"
              className="h-16 w-auto md:h-20"
              loading="lazy"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1 font-sans"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1 font-sans"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-md uppercase text-sm tracking-wide"
              onClick={handleSignupClick}
            >
              SKRÁ MIG NÚNA!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/90 hover:text-white transition-colors font-medium py-2 font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors font-medium py-2 font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-md uppercase"
              onClick={handleSignupClick}
            >
              SKRÁ MIG NÚNA!
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
