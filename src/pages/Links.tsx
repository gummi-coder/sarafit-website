import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

// Brand Logo Components
const InstagramLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SpotifyLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const PinterestLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
  </svg>
);

const Links = () => {
  const links = [
    {
      title: "Skráðu þig í fjarþjálfun",
      url: "/verdskra",
      color: "bg-white text-black",
    },
    {
      title: "Tilbúin prógröm",
      url: "/pricing",
      color: "bg-white text-black",
    },
    {
      title: "FRÍTT æfingar blueprint PDF",
      url: "/æfingar",
      color: "bg-white text-black",
    },
    {
      title: 'FRÍTT "6 vikna byrjenda blueprint" PDF',
      url: "https://www.sarafit.is/blueprint",
      color: "bg-white text-black",
    },
    {
      title: "Macros reiknivél",
      url: "/macros",
      color: "bg-white text-black",
    },
  ];

  const socialLinks = [
    {
      title: "Instagram",
      url: "https://www.instagram.com/gudrunsaraxo/",
      icon: <InstagramLogo className="w-6 h-6" />,
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@gudrunsaraxo",
      icon: <TikTokLogo className="w-6 h-6" />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61558887181745",
      icon: <FacebookLogo className="w-6 h-6" />,
    },
    {
      title: "Spotify",
      url: "https://open.spotify.com/user/gudrun_sara22",
      icon: <SpotifyLogo className="w-6 h-6" />,
    },
    {
      title: "Pinterest",
      url: "https://www.pinterest.com/gudrun_sara/food-inspo/?invite_code=a24ad5dc6ae9479b94e51e2d3c460a9a&sender=346355165000909976",
      icon: <PinterestLogo className="w-6 h-6" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center px-4 py-20 w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10 w-full max-w-md">
      <SEO
        title="Links - SARAFIT"
        description="Allar tenglar SARAFIT - fylgdu mér á samfélagsmiðlum og skráðu þig í þjálfun"
        url="https://sarafit.is/links"
        noindex={true}
      />
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="/DSC02083.JPG"
              alt="SARAFIT"
              className="h-32 w-32 mx-auto rounded-full border-4 border-primary/20 object-cover"
            />
          </div>
          <h1 className="text-3xl font-black mb-2 font-display text-foreground">
            Guðrún <span className="text-primary">Sara</span>
          </h1>
        </div>

        {/* Links */}
        <div className="space-y-4 flex flex-col items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block w-full max-w-xs"
            >
              <Button
                className={`w-full ${link.color} hover:bg-white/90 font-sans py-6 rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center border border-black/10`}
              >
                <span className="font-sans">{link.title}</span>
              </Button>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-foreground/50 text-xs font-sans">
            © 2025 Sarafit. Öll réttindi áskilin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;

