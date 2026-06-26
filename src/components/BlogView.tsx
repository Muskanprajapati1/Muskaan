import React from "react";
import { Helmet } from "react-helmet-async";
import { BookOpen, Sparkles, Star } from "lucide-react";
import { BLOG_POSTS } from "../data";
import BlogCard from "./BlogCard";

export default function BlogView() {
  const featuredPost = BLOG_POSTS[0]; // "5 Essential Skincare Tips"
  const restPosts = BLOG_POSTS.slice(1);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Cosmetic Product Journal",
    "description": "Discover the latest beauty tips, skincare advice, and natural organic formulations in our beauty journal.",
    "url": "https://cosmeticproductmuskan.netlify.app/blog",
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "summary": post.summary,
      "datePublished": "2026-06-14",
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 space-y-12 animate-fade-in">
      <Helmet>
        <title>Blog - Cosmetic Product</title>
        <meta name="description" content="Discover the latest beauty tips, skincare advice, and natural organic formulations in our beauty journal." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* Editorial Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex h-9 items-center justify-center rounded-full bg-amber-50 border border-amber-200/50 px-3.5 text-[10.5px] font-bold text-amber-900 uppercase tracking-widest">
          <BookOpen className="mr-1.5 h-3.5 w-3.5 text-amber-700" />
          <span>Cosmetic Product Journal</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
          Latest Beauty Tips & Articles
        </h1>
        <div className="h-[2px] w-12 bg-amber-800 mx-auto" />
        <p className="font-sans text-xs md:text-sm text-stone-600">
          Unlock the secrets of radiant dermatological care. Read our certified experts' guides on hydration cycles, active acids, foundation undertones, and botanical formulation synergy.
        </p>
      </section>

      {/* FEATURED ARTICLE HERO PREVIEW */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Aesthetic block */}
          <div className="lg:col-span-5 relative bg-stone-200 min-h-[250px] lg:min-h-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590156546746-c22221b69a19?auto=format&fit=crop&w=720&q=80"
              alt="Natural extracts face mask cosmetic application"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-101"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
            <span className="absolute bottom-6 left-6 inline-flex items-center space-x-1.5 rounded-full bg-[#E8DCC4] text-[#705335] px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-[#705335]" />
              <span>Recommended Read</span>
            </span>
          </div>

          {/* Text summary block */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between text-left space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-stone-500 font-semibold uppercase tracking-wider">
                <span className="text-amber-850 font-bold bg-amber-100/60 px-2.5 py-0.5 rounded-sm">
                  {featuredPost.category}
                </span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                {featuredPost.title}
              </h2>

              <p className="font-sans text-sm md:text-base text-stone-605 leading-relaxed">
                {featuredPost.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-stone-200 pt-6 gap-4">
              <div className="text-left">
                <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400">Written By</p>
                <p className="text-xs font-bold text-stone-880">{featuredPost.author}</p>
              </div>
              
              {/* This will reuse the same card click to stay consistent */}
              <BlogCard post={featuredPost} />
            </div>
          </div>

        </div>
      </section>

      {/* ARTICLES MASONRY/GRID LISTING */}
      <section className="space-y-8">
        <div className="text-left">
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">More Botanical Guides</h3>
          <p className="text-xs text-stone-550">Practical makeup and skincare guides authored by our chief herbal formulation chemist.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </div>
  );
}
