import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pb-6 px-8">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-lg font-black">
                FIT<span className="text-primary">LIFE</span>
              </span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Home</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-primary transition-colors text-xs">How It Works</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Coaches</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Resources</h4>
            <ul className="space-y-1.5">
              <li><a href="#blog" className="text-white/60 hover:text-primary transition-colors text-xs">Blog</a></li>
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors text-xs">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Legal</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Terms</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Privacy</a></li>
              <li><a href="mailto:support@fitlifeelite.com" className="text-white/60 hover:text-primary transition-colors text-xs">Support</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-span-2 md:col-span-1 text-white/60 text-xs flex items-center">
            <p>© 2025 FitLife Elite</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
