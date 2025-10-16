import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "#how-it-works" },
    { name: "Company", href: "#company", hasDropdown: true },
    { name: "Success", href: "#success" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1400px]">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight uppercase">
              WARRIOR<span className="text-primary">Babe</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-md uppercase text-sm tracking-wide">
              APPLY NOW
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
              <a
                key={link.name}
                href={link.href}
                className="block text-white/90 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-md uppercase">
              APPLY NOW
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
