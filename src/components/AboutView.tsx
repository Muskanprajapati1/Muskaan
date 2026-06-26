import React from "react";
import { Helmet } from "react-helmet-async";
import { Target, Eye, Shield, Users, Heart, ArrowUpRight } from "lucide-react";

export default function AboutView() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      desc: "We prioritize pure skin safety above everything. We screen every raw ingredient to guarantee standard clinical biocompatibility."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      desc: "Our responsive beauty advisors and formulations aim to restore confidence and skin harmony for every single customer."
    },
    {
      icon: Users,
      title: "Sustainability",
      desc: "We utilize bio-degradable components, low-waste refining chemistry, and plant-based packaging to secure planetary health."
    },
    {
      icon: Target,
      title: "Ethical Practices",
      desc: "Strictly Leaping-Bunny certified cruelty-free. We practice certified fair-trade sourcing across our botanical chains."
    },
    {
      icon: Eye,
      title: "Innovation and Excellence",
      desc: "Combining clean clinical dermatological research with the world's most potent natural herbal extracts."
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Cosmetic Product",
    "description": "Learn about Cosmetic Product's mission to combine clean clinical research with potent natural herbal extracts.",
    "url": "https://cosmeticproductmuskan.netlify.app/about"
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-16 animate-fade-in">
      <Helmet>
        <title>About Us - Cosmetic Product</title>
        <meta name="description" content="Learn about Cosmetic Product's mission to combine clean clinical research with potent natural herbal extracts." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* BRAND INTRODUCTION */}
      <section className="text-left space-y-6">
        <div className="inline-flex items-center space-x-2 text-stone-500 font-mono text-[10px] uppercase tracking-widest font-bold">
          <span>Our Story</span>
          <span className="h-1 w-6 bg-stone-300" />
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
          About Cosmetic Product
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-2">
          <p className="font-sans text-sm md:text-base text-stone-650 leading-relaxed">
            **Cosmetic Product** is dedicated to helping individuals feel beautiful and confident through high-quality beauty and skincare solutions. Founded with a passion for skincare and wellness, we combine natural ingredients with modern cosmetic science to create products that deliver visible results.
          </p>
          <div className="bg-[#FAF8F5] border border-stone-200/80 p-6 rounded-2xl relative">
            <span className="absolute top-4 right-4 text-xs font-mono font-semibold text-amber-700/60 uppercase">Est. 2026</span>
            <blockquote className="font-serif italic text-stone-700 text-sm md:text-base mt-2">
              "We believe that looking radiant is a natural by-product of treating your skin with gentle, scientific, and ethically-sourced nutrition."
            </blockquote>
            <p className="font-sans text-[11px] font-bold text-stone-600 uppercase tracking-widest mt-4">
              — Formulation Lab Directors
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        
        {/* Mission card */}
        <div className="flex flex-col justify-between p-8 rounded-2xl bg-amber-50/50 border border-amber-150/80 hover:shadow-xs transition-shadow">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-900 mb-6 border border-amber-200">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">Our Mission</h2>
            <p className="font-sans text-sm text-stone-650 leading-relaxed mb-6">
              To provide safe, effective, and affordable cosmetic products that promote healthy and glowing skin.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-850 font-bold flex items-center">
            Nourish & Empower <ArrowUpRight className="ml-1 h-3 w-3" />
          </span>
        </div>

        {/* Vision card */}
        <div className="flex flex-col justify-between p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:shadow-xs transition-shadow">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-200/80 text-stone-850 mb-6 border border-stone-300">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">Our Vision</h2>
            <p className="font-sans text-sm text-stone-655 leading-relaxed mb-6">
              To become a trusted beauty brand known for innovation, quality, and customer satisfaction worldwide.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600 font-bold flex items-center">
            Global Inspiration <ArrowUpRight className="ml-1 h-3 w-3" />
          </span>
        </div>

      </section>

      {/* BEHIND THE SCENES GALLERY */}
      <section className="space-y-8 pt-4">
        <div className="text-left space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9C826A] font-bold block">
            Inside Our Labs
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-950">
            Behind Our Formulations
          </h2>
          <div className="h-[2.5px] w-12 bg-amber-800/80" />
          <p className="font-sans text-xs text-stone-605 max-w-xl">
            Take a look at how we combine natural herbs with scientific safety standard procedures. Our labs are clean-room certified and 100% eco-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="aspect-4/3 overflow-hidden rounded-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                alt="Organic herbal harvesting and petals extraction"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-3 text-left">
              <h4 className="font-serif text-sm font-bold text-stone-900">1. Botanical Harvesting</h4>
              <p className="font-sans text-[11px] text-stone-550 mt-1">Sourcing fresh, high-density organic elements directly from certified fair-trade partners globally.</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="aspect-4/3 overflow-hidden rounded-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Clinical laboratory formulation testing"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-3 text-left">
              <h4 className="font-serif text-sm font-bold text-stone-900">2. Clinical Refining</h4>
              <p className="font-sans text-[11px] text-stone-550 mt-1">Our clean-room chemists screen compound densities, ensuring premium skin bio-compatibility.</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-xs hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="aspect-4/3 overflow-hidden rounded-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
                alt="Finished premium skincare and makeup products"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="p-3 text-left">
              <h4 className="font-serif text-sm font-bold text-stone-900">3. Immaculate Packaging</h4>
              <p className="font-sans text-[11px] text-stone-550 mt-1">Each formulation is safely packaged in low-waste, beautiful, and recyclable glass or bio-plastics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="space-y-8 pt-4">
        <div className="text-left space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9C826A] font-bold block">
            Guiding Precepts
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-950">
            Our Key Values
          </h2>
          <div className="h-[2.5px] w-12 bg-amber-800/80" />
        </div>

        {/* Values Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-6 rounded-2xl border border-stone-200 bg-white shadow-xs hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-805 mb-4 border border-stone-200/60">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {v.title}
                </h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
