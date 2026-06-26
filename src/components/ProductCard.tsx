import { Star, ShoppingCart, Info, Eye, X, Check } from "lucide-react";
import React, { useState } from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToBag: (product: Product, selectedShade?: string) => void;
  key?: React.Key;
}

export default function ProductCard({ product, onAddToBag }: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedShade, setSelectedShade] = useState<string>("Warm Beige");
  const [addedAnimation, setAddedAnimation] = useState(false);

  const shades = ["Ivory Light", "Warm Beige", "Golden Honey", "Espresso Deep"];
  const isFoundation = product.id === "matte-foundation";

  const handleAdd = () => {
    onAddToBag(product, isFoundation ? selectedShade : undefined);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <>
      <div
        id={`product-card-${product.id}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-200"
      >
        {/* Category Sticker */}
        <span className="absolute top-4 left-4 z-10 rounded-full bg-stone-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
          {product.category}
        </span>

        {/* Product Image Panel with Zoom effect */}
        <div className="relative h-64 overflow-hidden bg-stone-50">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay actions */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              id={`quick-view-btn-${product.id}`}
              onClick={() => setShowQuickView(true)}
              className="flex items-center space-x-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900 hover:bg-amber-50 shadow-sm transition-transform hover:scale-105 cursor-pointer"
            >
              <Eye className="h-4.5 w-4.5" />
              <span>Full Details</span>
            </button>
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-1 flex-col p-5">
          {/* Stars & Reviews */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-500 text-amber-500"
                      : "text-stone-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-stone-500">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-bold text-stone-950 mb-1 group-hover:text-amber-950 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Description summary */}
          <p className="font-sans text-xs text-stone-600 line-clamp-2 mb-3 h-8">
            {product.description}
          </p>

          {/* Skin Compatibility Label */}
          <div className="mb-4 bg-stone-50 border border-stone-100 p-2 rounded-lg text-[10.5px] text-stone-600 font-medium">
            <span className="text-[#8B5E3C] font-semibold uppercase text-[9px] block mb-0.5 tracking-wider">Skin Match</span>
            {product.skinType}
          </div>

          {/* Price & Action Button */}
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100">
            <span className="font-serif text-lg font-bold text-stone-900">
              ₹{product.price.toFixed(2)}
            </span>

            <button
              id={`add-bag-btn-${product.id}`}
              onClick={handleAdd}
              className={`flex items-center space-x-1.5 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
                addedAnimation
                  ? "bg-emerald-700 text-white"
                  : "bg-amber-900 text-white hover:bg-amber-950 hover:shadow-xs"
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="h-3.5 w-3.5 animate-bounce" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* LUXURY SLIDE-IN / MODAL CARD DETAILS (QUICK VIEW) */}
      {showQuickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            id={`modal-qv-${product.id}`}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 max-h-[90vh] flex flex-col"
          >
            {/* Header close */}
            <button
              id={`close-modal-${product.id}`}
              onClick={() => setShowQuickView(false)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="overflow-y-auto p-6 md:p-8 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 h-64 md:h-full min-h-[250px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#E8DCC4] text-[#705335] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2 leading-tight">
                      {product.name}
                    </h2>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-xs text-stone-500">
                        {product.rating} ({product.reviewsCount} reviews)
                      </span>
                    </div>

                    <p className="font-sans text-sm text-stone-600 mb-4 bg-stone-50 p-3 rounded-xl leading-relaxed">
                      {product.description}
                    </p>

                    {/* Skin Suitability */}
                    <div className="mb-4">
                      <h4 className="text-[11px] font-bold text-[#8B5E3C] uppercase tracking-wider mb-1">Skin Compatibility</h4>
                      <p className="text-xs text-stone-700">{product.skinType}</p>
                    </div>

                    {/* Shade Selector if foundation */}
                    {isFoundation && (
                      <div className="mb-4 bg-[#FAF8F5] p-3 rounded-xl border border-amber-150">
                        <label className="block text-xs font-bold text-[#9C826A] uppercase tracking-widest mb-2">
                          Select Perfection Shade
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {shades.map((shade) => (
                            <button
                              key={shade}
                              onClick={() => setSelectedShade(shade)}
                              className={`flex items-center justify-between px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                                selectedShade === shade
                                  ? "border-amber-700 bg-amber-50 text-amber-900 font-semibold"
                                  : "border-stone-200 bg-white hover:border-stone-400 text-stone-600"
                              }`}
                            >
                              <span>{shade}</span>
                              {selectedShade === shade && <Check className="h-3.5 w-3.5 text-amber-700" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Ingredients list */}
                    <div className="mb-5">
                      <h4 className="text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-2">
                        Active Ingredient Spotlight
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {product.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="text-[10px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-sm border border-stone-200 font-mono"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Benefits */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-2">
                        Key Skincare Benefits
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-stone-900">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Add action */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
                    <span className="font-serif text-2xl font-bold text-stone-900">
                      ₹{product.price.toFixed(2)}
                    </span>

                    <button
                      id={`modal-add-bag-${product.id}`}
                      onClick={() => {
                        handleAdd();
                        setShowQuickView(false);
                      }}
                      className="flex items-center space-x-2 rounded-full bg-amber-900 px-6 py-2.5 text-xs font-semibold tracking-wider text-white hover:bg-amber-950 shadow-sm transition-all active:scale-95 duration-200 cursor-pointer uppercase"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add To Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
