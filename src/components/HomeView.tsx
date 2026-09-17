import React from "react";
import { Award, Leaf, Smile, CreditCard, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import ProductCard from "./ProductCard";
import heroBannerImg from "../assets/images/brand_hero_banner_1781844799703.jpg";
import premiumProductImg from "../assets/images/premium_skincare_product_1781844815842.jpg";

interface HomeViewProps {
  onAddToBag: (product: Product, selectedShade?: string) => void;
}

export default function HomeView({ onAddToBag }: HomeViewProps) {
  const navigate = useNavigate();
  // Select first 3 items for featured presentation
  const featuredProducts = PRODUCTS.slice(0, 3);
  
  // Custom hero image path from bundled assets with online fallback
  const heroImage = heroBannerImg || "/images/brand_hero_banner.jpg";
  const heroFallback = "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80";

  // Spotlight product image with online fallback
  const spotlightImage = premiumProductImg || "/images/premium_skincare_product.jpg";
  const spotlightFallback = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80";

  const categories = [
    {
      title: "Skincare Essentials",
      desc: "Hydrating moisturizers, serums & organic botanical cleansers",
      image: "/images/products/glow-radiance-cream.jpg",
      fallback: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
      badge: "Best Seller",
    },
    {
      title: "Makeup & Beauty",
      desc: "Velvet matte foundation & tinted moisturizing lip balms",
      image: "/images/products/matte-foundation.jpg",
      fallback: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
      badge: "Trending",
    },
    {
      title: "Herbal Sun & Barrier",
      desc: "Zinc oxide SPF 40+ with antioxidant green tea shield",
      image: "/images/products/herbal-sunscreen.jpg",
      fallback: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      badge: "Pure Botanicals",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Premium Quality Products",
      desc: "Carefully formulated with premium botanicals and dermatologically certified ingredients.",
    },
    {
      icon: ShieldCheck,
      title: "Safe and Skin-Friendly Ingredients",
      desc: "Free from harsh parabens, toxic sulfates, and heavy chemicals to preserve youthfulness.",
    },
    {
      icon: Leaf,
      title: "Cruelty-Free and Eco-Friendly",
      desc: "Proudly certified vegan chemistry, never tested on animals, wrapped in recyclable tubes.",
    },
    {
      icon: Smile,
      title: "Suitable for All Skin Types",
      desc: "Tested on highly sensitive epidermal surfaces for completely balanced moisture protection.",
    },
    {
      icon: CreditCard,
      title: "Affordable Beauty Solutions",
      desc: "Premium, salon-grade cosmetic beauty accessible to everyone without inflated markup costs.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Cosmetic Product",
    "url": "https://cosmeticproductmuskan.netlify.app/",
    "logo": "https://cosmeticproductmuskan.netlify.app/images/brand_hero_banner.jpg",
    "description": "Shop premium cosmetic products including skincare, makeup, beauty essentials, and personal care items. Quality products at affordable prices.",
    "priceRange": "₹500-₹1900",
    "telephone": "+91-98765-43210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Organic Botanical Boulevard",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="space-y-16 pb-16 animate-fade-in">
      <Helmet>
        <title>Cosmetic Products Online | Beauty & Skincare Collection</title>
        <meta name="description" content="Shop premium cosmetic products including skincare, makeup, beauty essentials, and personal care items. Quality products at affordable prices." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* LUXURIOUS EDITORIAL HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Main title stack */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-amber-100/80 border border-amber-200 px-3.5 py-1 text-xs font-semibold text-amber-900 tracking-wide">
              <Sparkles className="h-3.5 w-3.5 text-amber-800" />
              <span>Dermatologist Approved Formula</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08] block">
              Enhance Your <br />
              <span className="text-amber-800 italic">Natural Beauty</span> <br />
              with Premium Skincare
            </h1>

            <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base max-w-lg">
              At <strong className="text-stone-900 font-semibold">Cosmetic Product</strong>, we believe that beauty begins with healthy skin. Our carefully crafted cosmetic products are made with high-quality ingredients to provide nourishment, hydration, and confidence. Whether you are looking for skincare essentials or makeup products, we have everything you need to achieve a radiant glow.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-shop-now-btn"
                onClick={() => navigate("/services")}
                className="group flex items-center justify-center space-x-2 rounded-full bg-stone-950 hover:bg-stone-850 text-[#FAF8F5] px-7 py-3.5 text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              >
                <span>Explore Formulas</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                id="hero-about-learn-btn"
                onClick={() => navigate("/about")}
                className="flex items-center justify-center border border-stone-300 hover:border-stone-800 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide text-stone-700 hover:text-stone-950 transition-all duration-200 cursor-pointer bg-white"
              >
                Our Botanical Mission
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-stone-200/70 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900">100%</span>
                <span className="text-[11px] text-stone-500 font-sans">Clean & Vegan</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900">4.9 ★</span>
                <span className="text-[11px] text-stone-500 font-sans">User Rating</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-stone-900">0%</span>
                <span className="text-[11px] text-stone-500 font-sans">Harmful Chemicals</span>
              </div>
            </div>
          </div>

          {/* High-end generated banner showcase image */}
          <div className="lg:col-span-6 mt-10 lg:mt-0 relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-200/30 via-rose-100/20 to-amber-100/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-2xl bg-stone-100 aspect-4/3 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
              <img
                id="hero-banner-image"
                src={heroImage}
                alt="Cosmetic Product Luxury Skincare & Editorial Beauty Banner"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallbackApplied) {
                    target.dataset.fallbackApplied = "true";
                    target.src = heroFallback;
                  }
                }}
                className="h-full w-full object-cover shadow-inner hover:scale-102 transition-transform duration-700"
              />
              
              {/* Floating Luxury Badges */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 border border-stone-200/80 shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Pure Botanical Elegance</div>
                  <div className="text-[11px] text-stone-500">Cruelty-Free & Dermatologically Verified</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 rounded-full bg-stone-950/85 backdrop-blur-xs text-[#FAF8F5] px-3.5 py-1.5 text-xs font-semibold shadow-md">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Clinical Standard</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SHOP BY CATEGORY WITH VISUAL IMAGES */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="text-left space-y-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9C826A] font-bold block">
              Curated Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
              Shop by Category
            </h2>
          </div>
          <button
            onClick={() => navigate("/services")}
            className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 hover:text-amber-950 cursor-pointer self-start sm:self-auto"
          >
            <span>Browse All Collections</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => navigate("/services")}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallbackApplied) {
                      target.dataset.fallbackApplied = "true";
                      target.src = cat.fallback;
                    }
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-800 border border-stone-200/60 shadow-xs">
                  {cat.badge}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 text-left">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-850 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-stone-950">
                  <span>Explore Items</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT FORMULATION WITH LUXURY BOTTLE IMAGE */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative mx-auto aspect-square max-w-[360px] overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-3 shadow-xl">
                <img
                  id="spotlight-product-image"
                  src={spotlightImage}
                  alt="Botanical Radiance Dropper Serum Formulation"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallbackApplied) {
                      target.dataset.fallbackApplied = "true";
                      target.src = spotlightFallback;
                    }
                  }}
                  className="h-full w-full object-cover rounded-xl transition-transform duration-500 hover:scale-103"
                />
                <span className="absolute bottom-6 left-6 rounded-full bg-stone-950/80 backdrop-blur-xs text-[#FAF8F5] px-3.5 py-1 text-[11px] font-semibold">
                  Lab Batch #2026-B
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                <Sparkles className="h-3.5 w-3.5 text-amber-800" />
                <span>Featured Breakthrough Formulation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 leading-tight">
                Pure Radiance &amp; Vitamin Complex Elixir
              </h2>

              <p className="font-sans text-stone-650 text-sm sm:text-base leading-relaxed">
                Formulated with concentrated L-Ascorbic acid, botanical ferulic stabilizing agents, and multi-molecular hyaluronic hydration, our signature serum works overnight to balance skin tones and diminish oxidative dullness.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Cruelty-Free &amp; 100% Vegan</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Dermatologist Lab Verified</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Zero Parabens &amp; Sulfates</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Safe for Sensitive Skin</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate("/services")}
                  className="flex items-center space-x-2 rounded-full bg-stone-950 hover:bg-stone-850 text-[#FAF8F5] px-6 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>Discover Serum In Store</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "WHY CHOOSE US" CONVERTED TO BENTO GRID STRUCTURE OR CLEAN LAYOUT */}
      <section className="mx-auto max-w-7xl px-6 bg-stone-50/50 py-12 rounded-3xl border border-stone-100">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#9C826A] font-bold block">
            Quality Standard
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-stone-950">
            Why Choose Us?
          </h2>
          <div className="h-[2px] w-12 bg-amber-800/80 mx-auto" />
          <p className="font-sans text-xs md:text-sm text-stone-605">
            Combining organic plant essences with dermatological technology, we design clean cosmetics that respect and nourish your skin barrier.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl border border-stone-200 bg-white transition-all hover:shadow-xs hover:border-amber-100"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                <b.icon className="h-5.5 w-5.5" />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-base font-bold text-stone-900 mb-1 leading-snug">
                  {b.title}
                </h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="text-left space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#9C826A] font-bold block">
              Curated Favorites
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-950">
              Featured Products
            </h2>
          </div>

          <button
            id="featured-see-all-btn"
            onClick={() => navigate("/services")}
            className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 hover:text-amber-950 cursor-pointer self-start sm:self-auto"
          >
            <span>View All 6 Products</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToBag={onAddToBag}
            />
          ))}
        </div>
      </section>

    </div>
  );
}