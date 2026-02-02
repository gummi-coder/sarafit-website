import { Facebook, Instagram } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Custom Spotify Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.25 7.73c-1.73-.32-3.13-1.36-3.32-2.39V4h-3.19v11.45A2.33 2.33 0 0111.46 18a2.33 2.33 0 01-2.33-2.33c0-1.27 1-2.31 2.27-2.33V9.94a5.3 5.3 0 00-5.3 5.3A5.3 5.3 0 0011.4 20.5a5.3 5.3 0 005.3-5.3v-6.1c.7.52 1.61.94 2.55.94h.75V8.01a6.1 6.1 0 01-.75-.28z" />
  </svg>
);

interface FooterProps {
  theme?: "dark" | "light";
}

const Footer = ({ theme = "dark" }: FooterProps) => {
  const footerFormRef = useRef<HTMLDivElement | null>(null);

  const isLight = theme === "light";
  const textColor = isLight ? "text-slate-900" : "text-white";
  const mutedTextColor = isLight ? "text-slate-500" : "text-white/60";
  const bgColor = isLight ? "bg-slate-50 border-slate-200" : "bg-black/40 border-white/10";
  const borderColor = isLight ? "border-slate-200" : "border-white/10";

  useEffect(() => {
    if (!footerFormRef.current) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "e5f8dfba21");
    script.src = "https://sarafit.kit.com/e5f8dfba21/index.js";
    footerFormRef.current.appendChild(script);

    return () => {
      if (footerFormRef.current && script.parentNode === footerFormRef.current) {
        footerFormRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="pb-6 px-8 mb-0">
      {/* Main Footer */}
      <div className={`${bgColor} backdrop-blur-md border rounded-2xl px-8 py-8 max-w-[1200px] mx-auto transition-colors duration-300`}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start mb-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <img src="/sarafit-logo.png" alt="Sarafit" className={`h-16 w-auto ${isLight ? "brightness-0 opacity-80" : ""}`} />
            </div>
            <p className={`${mutedTextColor} text-xs leading-relaxed`}>
              Ég hjálpa konum að verða sterkari og finna sjálfstraust.
            </p>
            <a href="mailto:sara@sarafit.is" className={`${mutedTextColor} hover:text-primary transition-colors text-xs mt-2 mb-4 inline-block`}>
              sara@sarafit.is
            </a>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/gudrunsaraxo/" className={`${mutedTextColor} hover:text-primary transition-colors`} target="_blank" rel="noreferrer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@gudrunsaraxo" className={`${mutedTextColor} hover:text-primary transition-colors`} target="_blank" rel="noreferrer">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61558887181745" className={`${mutedTextColor} hover:text-primary transition-colors`} target="_blank" rel="noreferrer">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://open.spotify.com/user/gudrun_sara22" className={`${mutedTextColor} hover:text-primary transition-colors`} target="_blank" rel="noreferrer">
                <SpotifyIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-bold mb-3 text-sm ${textColor}`}>Flýtileiðir</h4>
            <ul className="space-y-2">
              <li><Link to="/" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Heim</Link></li>
              <li><Link to="/um-mig" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Um mig</Link></li>
              <li><Link to="/macros" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Macros reiknivél</Link></li>
              <li><Link to="/blog" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-bold mb-3 text-sm ${textColor}`}>Fjarþjálfun</h4>
            <ul className="space-y-2">
              <li><Link to="/fjarþjálfun" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Fjarþjálfun</Link></li>
              <li><Link to="/verdskra" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Verðskrá</Link></li>
              <li><Link to="/tilbun-progrom" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Tilbúin prógröm</Link></li>
              <li><Link to="/skraning" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Skráning</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-bold mb-3 text-sm ${textColor}`}>Skilmálar</h4>
            <ul className="space-y-2">
              <li><Link to="/skilmalar" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Skilmálar</Link></li>
              <li><Link to="/skilmalar#privacy" className={`${mutedTextColor} hover:text-primary transition-colors text-xs`}>Persónuverndarstefna</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`border-t ${borderColor} pt-6 mb-6`}>
          <div className="text-center mb-4">
            <h3 className={`text-sm font-bold ${textColor} mb-1`}>Skráðu þig á póstlistann</h3>
            <p className={`${mutedTextColor} text-xs`}>Fáðu ný fitness tips send beint í tölvupóstinn þinn</p>
          </div>
          
          <div className="relative flex justify-center">
            <div className={`w-full max-w-lg rounded-3xl border p-4 md:p-6 ${isLight ? "bg-white border-slate-200" : "bg-black/30 border-white/5"}`}>
              <div ref={footerFormRef} className="space-y-4" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${borderColor} pt-6`}>
          <div className="text-center">
            <div className={`${mutedTextColor} text-xs`}>
              <p>© 2025 Sarafit. Öll réttindi áskilin.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
