import { Facebook, Youtube, Instagram, Linkedin, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <footer className="bg-background">
      {/* Main Footer Content - Always Visible */}
      <div className="py-12 px-8 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Social */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-black">
                  FIT<span className="text-primary">LIFE</span>
                </span>
              </div>
              <p className="text-xs text-foreground/60 mb-4">
                This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. 
                FACEBOOK™ is a trademark of FACEBOOK™, Inc.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="text-foreground/60 hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Coaches</a></li>
                <li><a href="#success" className="text-foreground/60 hover:text-primary transition-colors">Success</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-foreground/60 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="mailto:support@fitlifeelite.com" className="text-foreground/60 hover:text-primary transition-colors">Customer Support</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
            <p>© 2025 FitLife Elite. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Collapsible Newsletter Section - At Bottom */}
      <div className="relative">
        {/* Pink glow decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>

        {/* Toggle Button Bar */}
        <div className="relative bg-background border-t border-primary/20">
          <button
            onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
            className="w-full py-4 flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-bold"
            aria-label={isNewsletterOpen ? "Close newsletter" : "Open newsletter"}
          >
            <span>GET YOUR FREE TRAINING</span>
            <ChevronUp
              className={`w-5 h-5 transition-transform duration-300 ${
                isNewsletterOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Newsletter Content - Slides Down */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isNewsletterOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="py-12 px-8 bg-background/95 backdrop-blur-sm relative">
            <div className="max-w-[1200px] mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                Get Your <span className="text-primary">free training</span> & Exclusive bonuses now
              </h3>
              <p className="text-foreground/70 mb-6">
                Just add your info here and get access to the free training & your bonuses!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-secondary border-border flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8">
                  GET ACCESS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
