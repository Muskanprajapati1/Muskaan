import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import ProductCard from "./ProductCard";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

interface ProductsViewProps {
  onAddToBag: (product: Product, selectedShade?: string) => void;
}

export default function ProductsView({ onAddToBag }: ProductsViewProps) {
  const [activeCategory, setActiveCategory] = useState<"All" | "Skincare" | "Makeup">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(1900);

  const categories = [
    { id: "All", label: "All Formulas" },
    { id: "Skincare", label: "Skincare Essentials" },
    { id: "Makeup", label: "Signature Makeup" },
  ];

  // Filtering logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.skinType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cosmetic Product Catalog",
    "description": "Premium cosmetic products, including skincare and makeup essentials at affordable prices.",
    "url": "https://cosmeticproductmuskan.netlify.app/services",
    "itemListElement": PRODUCTS.map((prod, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": prod.name,
        "image": prod.image,
        "description": prod.description,
        "category": prod.category,
        "offers": {
          "@type": "Offer",
          "price": prod.price.toString(),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 space-y-12 animate-fade-in">
      <Helmet>
        <title>Services & Products - Cosmetic Product</title>
        <meta name="description" content="Explore our luxurious range of cosmetic services and skincare products, designed to bring out your best." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* HEADER TITLE SECTION */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex h-9 items-center justify-center rounded-full bg-[#E5D2BA]/20 border border-[#E5D2BA] px-3.5 text-[10.5px] font-bold text-[#7A5B3D] uppercase tracking-widest">
          <Sparkles className="mr-1.5 h-3.5 w-3.5 animate-pulse" />
          <span>Professional formulas list</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
          Our Products
        </h1>
        <div className="h-[2px] w-12 bg-amber-800 mx-auto" />
        <p className="font-sans text-xs md:text-sm text-stone-600">
          Explore our complete collection of scientifically certified cosmetics. Made with ethically extracted botanicals, skin-friendly nourishing lipids, and high-performance minerals.
        </p>
      </section>

      {/* FILTER & SEARCH UTILITY SECTION */}
      <section className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 md:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Tabs switch */}
          <div className="lg:col-span-5 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`product-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all uppercase cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#8B5E3C] text-white shadow-xs"
                    : "bg-white hover:bg-stone-100 text-stone-700 border border-stone-250"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box input */}
          <div className="lg:col-span-4 relative">
            <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              id="product-search-input"
              type="text"
              placeholder="Search by ingredient, skin type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs placeholder-stone-450 border border-stone-200 rounded-full py-2.5 pl-10 pr-4 bg-white focus:border-[#8B5E3C] focus:outline-hidden"
            />
          </div>

          {/* Price Range selector */}
          <div className="lg:col-span-3 flex items-center space-x-3.5 bg-white px-4 py-2 rounded-full border border-stone-200">
            <SlidersHorizontal className="h-4 w-4 text-stone-450 shrink-0" />
            <div className="w-full text-left">
              <div className="flex justify-between text-[10px] font-mono text-stone-500 font-bold uppercase tracking-wider mb-1">
                <span>Max Cost</span>
                <span className="text-[#8B5E3C]">₹{maxPrice}</span>
              </div>
              <input
                id="product-price-range"
                type="range"
                min="500"
                max="1900"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#8B5E3C]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS DISPLAY LISTING GRID */}
      <section>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-2xl border border-stone-200 max-w-lg mx-auto">
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">No Formulas Match Your Filter</h3>
            <p className="font-sans text-xs text-stone-500 mb-4 max-w-xs mx-auto">
              Please adjust your target price threshold, clean your search query, or restore category selector tags.
            </p>
            <button
              id="reset-filters-btn"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
                setMaxPrice(1900);
              }}
              className="rounded-full bg-stone-900 text-[#FAF8F5] font-semibold text-xs py-1.5 px-4 uppercase hover:bg-stone-850 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToBag={onAddToBag}
              />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
