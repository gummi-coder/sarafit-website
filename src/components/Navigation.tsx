import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSignupSection } from "@/lib/scroll-to-signup";

interface NavigationProps {
  theme?: "dark" | "light";
}

const Navigation = ({ theme = "dark" }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLight = theme === "light";
  const textColor = isLight ? "text-slate-900" : "text-white";
  const linkColor = isLight ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white";
  const bgColor = isLight ? "bg-white/80 border-slate-200" : "bg-black/40 border-white/10";
  const mobileBg = isLight ? "bg-white border-slate-200" : "bg-black/90 border-white/10";

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
      <div className={`${bgColor} backdrop-blur-md border rounded-2xl px-4 md:px-8 max-w-[1200px] mx-auto w-full transition-colors duration-300`}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/sarafit-logo.png"
              alt="Sarafit"
              className={`h-16 w-auto md:h-20 ${isLight ? "brightness-0 opacity-80" : ""}`}
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
                  className={`${linkColor} transition-colors font-medium text-sm flex items-center gap-1 font-sans`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${linkColor} transition-colors font-medium text-sm flex items-center gap-1 font-sans`}
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
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-6 space-y-4 animate-fade-in absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl border backdrop-blur-xl ${mobileBg}`}>
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block ${linkColor} transition-colors font-medium py-2 font-sans`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block ${linkColor} transition-colors font-medium py-2 font-sans`}
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
