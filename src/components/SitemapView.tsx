import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Map, Home, ShoppingBag, BookOpen, User, Mail, FileText, ArrowRight } from "lucide-react";
import { PRODUCTS, BLOG_POSTS } from "../data";

export default function SitemapView() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-12 animate-fade-in">
      <Helmet>
        <title>HTML Sitemap - Cosmetic Product</title>
        <meta name="description" content="Sitemap directory of Cosmetic Product. Easily discover our organic beauty skincare lines, makeup, and latest blog tips." />
      </Helmet>

      {/* Hero Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex h-9 items-center justify-center rounded-full bg-amber-50 border border-amber-200/50 px-3.5 text-[10.5px] font-bold text-amber-900 uppercase tracking-widest">
          <Map className="mr-1.5 h-3.5 w-3.5 text-amber-700" />
          <span>Website Index Directory</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
          HTML Sitemap
        </h1>
        <div className="h-[2px] w-12 bg-amber-800 mx-auto" />
        <p className="font-sans text-xs md:text-sm text-stone-600">
          Navigate easily through our clean clinical research portals, organic skincare and makeup listings, botanical blog tutorials, and custom consultation forms.
        </p>
      </section>

      {/* Sitemap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* Main Navigational Pages */}
        <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-900 mb-6 border border-amber-150">
            <Home className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Primary Pages</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>Home Page — Luxury Skincare & Beauty formulas</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>Services & Products — All custom formulations</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>Beauty Journal & Blog — Dermatologist tips</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>About Us — Botanical research team & values</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>Contact Us — Skin advisory consultation desk</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Product Items Index */}
        <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-900 mb-6 border border-amber-150">
            <ShoppingBag className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Products Catalog</h2>
          <ul className="space-y-3 text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.id}>
                <Link to="/services" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                  <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                  <span>{product.name} ({product.category})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Journal Blogs Index */}
        <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-900 mb-6 border border-amber-150">
            <BookOpen className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Beauty Journal Articles</h2>
          <ul className="space-y-3 text-sm">
            {BLOG_POSTS.map((post) => (
              <li key={post.id}>
                <Link to="/blog" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                  <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                  <span>{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical/Meta Links */}
        <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-900 mb-6 border border-amber-150">
            <FileText className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4 border-b border-stone-100 pb-2">Search Engine Documents</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>robots.txt (Crawler Instructions)</span>
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-stone-700 hover:text-amber-800 transition-colors py-1">
                <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                <span>sitemap.xml (XML Crawling Feed)</span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
