import { Facebook, Youtube, Instagram, Linkedin, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <footer className="bg-background relative">
      {/* Footer Links - Always Visible */}
      <div className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
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

      {/* Collapsible Newsletter Section at Bottom */}
      <div className="relative">
        {/* Pink glow decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[5%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute top-0 right-[5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        {/* Toggle Button */}
        <div className="relative flex justify-center">
          <button
            onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-t-2xl px-8 py-3 shadow-lg transition-all hover:scale-105 font-bold"
          >
            <ChevronUp
              className={`w-6 h-6 transition-transform duration-300 ${
                isNewsletterOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>

        {/* Newsletter Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isNewsletterOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-12 px-4 bg-background/80 backdrop-blur-sm border-t border-primary/20 relative">
            <div className="container mx-auto max-w-2xl text-center">
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
