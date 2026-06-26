import React from "react";
import { Award, Leaf, Smile, CreditCard, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import ProductCard from "./ProductCard";

interface HomeViewProps {
  onAddToBag: (product: Product, selectedShade?: string) => void;
}

export default function HomeView({ onAddToBag }: HomeViewProps) {
  const navigate = useNavigate();
  // Select first 3 items for featured presentation
  const featuredProducts = PRODUCTS.slice(0, 3);
  
  // Custom hero image path we generated earlier
  const heroImage = "/src/assets/images/brand_hero_banner_1781844799703.jpg";

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
    "logo": "https://cosmeticproductmuskan.netlify.app/src/assets/images/brand_hero_banner_1781844799703.jpg",
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
      <section className="relative overflow-hidden bg-stone-550 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20 lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Main title stack */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-amber-100 border border-amber-200/50 px-3.5 py-1 text-xs font-semibold text-amber-900 tracking-wide">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Dermatologist Approved Formula</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08] block">
              Enhance Your <br />
              <span className="text-amber-850 italic">Natural Beauty</span> <br />
              with Premium Skincare
            </h1>

            <p className="font-sans text-stone-650 leading-relaxed text-sm md:text-base max-w-lg">
              At **Cosmetic Product**, we believe that beauty begins with healthy skin. Our carefully crafted cosmetic products are made with high-quality ingredients to provide nourishment, hydration, and confidence. Whether you are looking for skincare essentials or makeup products, we have everything you need to achieve a radiant glow.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                id="hero-shop-now-btn"
                onClick={() => navigate("/services")}
                className="group flex items-center justify-center space-x-2 rounded-full bg-stone-950 hover:bg-stone-850 text-[#FAF8F5] px-7 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
              >
                <span>Explore Formulas</span>
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                id="hero-about-learn-btn"
                onClick={() => navigate("/about")}
                className="flex items-center justify-center border border-stone-300 hover:border-stone-800 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-stone-700 hover:text-stone-950 transition-all duration-200 cursor-pointer"
              >
                Our Botanical Mission
              </button>
            </div>
          </div>

          {/* High-end generated banner showcase image */}
          <div className="lg:col-span-6 mt-10 lg:mt-0 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-100 to-amber-50 opacity-30 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-stone-200 shadow-xl bg-stone-100 aspect-16/9 md:aspect-4/3 max-h-[380px] lg:max-h-none">
              <img
                src={heroImage}
                alt="Cosmetic Product Luxury Editorial Banner"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover shadow-inner hover:scale-101 transition-transform duration-700"
              />
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
