import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Allt");
  
  const featuredPost = blogPosts[0];
  
  const displayedPosts = selectedCategory === "Allt"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = ["Allt", "Næring", "Æfingar", "Hugarfar", "Lífsstíll"];

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <SEO
        title="Blogg - SARAFIT"
        description="Lestu nýjustu greinarnar um þjálfun, næringu og heilbrigðan lífsstíl frá SARAFIT."
        url="https://sarafit.is/blog"
        keywords="blogg, heilsa, þjálfun, næring, uppskriftir, SARAFIT"
      />
      <Navigation />
      
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <section className="px-4 mb-16 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-display text-white">
              SARAFIT <span className="text-primary">Bloggið</span>
            </h1>
            <p className="text-lg text-white/90 font-sans max-w-2xl mx-auto">
              Hér finnur þú fróðleik, ráð og innblástur fyrir þína vegferð. Allt frá næringu og æfingum yfir í hugarfar og lífsstíl.
            </p>
          </div>
        </section>

        {/* Featured Post Section - Always visible */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              Nýasta
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card/50 rounded-3xl overflow-hidden border border-white/10 shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video md:aspect-auto md:h-full min-h-[300px] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-white/70 text-sm">
                    <Calendar className="w-3 h-3 mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display leading-tight text-white">
                  {featuredPost.title}
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-white/70 text-sm font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                  <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-primary/80 group" asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Lesa meira <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Recent Posts */}
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
              {categories.map((cat, i) => (
                <Button 
                  key={i} 
                  variant={selectedCategory === cat ? "default" : "outline"} 
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" 
                    : "border-white/20 text-white/80 hover:text-primary hover:border-primary/50 hover:bg-white/5 rounded-full bg-transparent"}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.length > 0 ? (
                displayedPosts.map((post, index) => (
                  <Card key={index} className="border-white/10 bg-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-black/60 text-white hover:bg-black/80 backdrop-blur-sm border-none shadow-sm">
                          {post.category}
                        </Badge>
                      </div>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="flex items-center gap-3 text-xs text-white/60 mb-3 font-medium">
                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-display text-white group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <Button variant="link" className="text-primary font-bold p-0 h-auto hover:text-primary/80 group/btn" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Lesa meira <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-white/60">
                  Engar greinar fundust í þessum flokki.
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Blog;

