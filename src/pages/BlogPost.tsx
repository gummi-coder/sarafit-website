import { useParams, Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || "");

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "generic":
        navigator.clipboard.writeText(window.location.href);
        toast({
          description: "Hlekkur afritaður!",
          duration: 3000,
        });
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-white w-full overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <SEO
        title={`${post.title} - SARAFIT Blogg`}
        description={post.excerpt}
        url={`https://sarafit.is/blog/${slug}`}
        keywords={`${post.category}, blogg, heilsa, þjálfun, SARAFIT`}
      />

      <main className="pt-32 pb-20">
        {/* Article Header */}
        <section className="px-4 mb-12">
          <div className="container mx-auto max-w-3xl">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary text-white/70" asChild>
              <Link to="/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Til baka í blogg</Link>
            </Button>
            
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none mb-6">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-black mb-6 font-display text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm mb-8 border-b border-white/10 pb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 mr-2 overflow-hidden">
                  <img src="/DSC02083.JPG" alt={post.author} className="w-full h-full object-cover" />
                </div>
                <span className="font-medium text-white">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="container mx-auto max-w-5xl mb-12">
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-card shadow-sm border border-white/10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 mb-16">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg prose-invert max-w-none text-white prose-headings:text-white prose-p:text-white/90 prose-strong:text-white prose-li:text-white/90" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4 text-white">Deildu þessari grein:</h3>
              <div className="flex gap-2">
                <Button onClick={() => handleShare("facebook")} size="icon" variant="outline" className="rounded-full bg-black/40 border-white/20 text-white/80 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button onClick={() => handleShare("twitter")} size="icon" variant="outline" className="rounded-full bg-black/40 border-white/20 text-white/80 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button onClick={() => handleShare("linkedin")} size="icon" variant="outline" className="rounded-full bg-black/40 border-white/20 text-white/80 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button onClick={() => handleShare("generic")} size="icon" variant="outline" className="rounded-full bg-black/40 border-white/20 text-white/80 hover:text-primary hover:border-primary hover:bg-primary/10 transition-colors">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section (Product Integration) */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-display text-white">
                Viltu meiri hjálp við að ná þínum markmiðum?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Skráðu þig í fjarþjálfun hjá SARAFIT og fáðu sérsniðið æfingaplan, næringarráðgjöf og aðgang að appinu okkar.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25" asChild>
                <Link to="/verdskra">Skoða fjarþjálfun</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

