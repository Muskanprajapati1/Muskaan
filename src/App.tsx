import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import ProductsView from "./components/ProductsView";
import BlogView from "./components/BlogView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";
import SitemapView from "./components/SitemapView";
import Cart from "./components/Cart";
import { Product, CartItem } from "./types";
import { Sparkles, Mail, Heart, Check } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);

  // Load cart from localStorage on mount (safe client-side persistence)
  useEffect(() => {
    const savedCart = localStorage.getItem("cosmetic_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Sync cart to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cosmetic_cart", JSON.stringify(newCart));
  };

  const handleAddToBag = (product: Product, selectedShade?: string) => {
    const existingIdx = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedShade === selectedShade
    );

    if (existingIdx > -1) {
      const updated = [...cart];
      updated[existingIdx].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cart, { product, quantity: 1, selectedShade }]);
    }
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updated = cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(updated);
  };

  const handleRemoveItem = (productId: string) => {
    const updated = cart.filter((item) => item.product.id !== productId);
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubbed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 3000);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-stone-850 font-sans flex flex-col justify-between selection:bg-amber-100 selection:text-stone-900">
        
        {/* GLOBAL HEADER */}
        <Header
          cartCount={totalCartCount}
          onOpenCart={() => setCartOpen(true)}
        />

        {/* PRIMARY STAGE AREA */}
        <main className="flex-1 relative">
          {/* Soft elegant glows in the background corners */}
          <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-amber-100/40 glow-blur pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-orange-100/30 glow-blur pointer-events-none" />
          
          <Routes>
            <Route path="/" element={<HomeView onAddToBag={handleAddToBag} />} />
            <Route path="/services" element={<ProductsView onAddToBag={handleAddToBag} />} />
            <Route path="/products" element={<ProductsView onAddToBag={handleAddToBag} />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/sitemap" element={<SitemapView />} />
          </Routes>
        </main>

      {/* NEWSLETTER CAPTURE BAR */}
      <section className="bg-stone-900 text-white border-t border-stone-800 py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-amber-100 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-300" />
              <span>Join the Beauty Circle</span>
            </h3>
            <p className="font-sans text-xs md:text-sm text-stone-350 max-w-md leading-relaxed">
              Subscribe to unlock early formulations access, organic tips research, and 15% discount on your first order.
            </p>
          </div>

          <div className="relative">
            {newsletterSubbed ? (
              <div className="flex items-center space-x-2 bg-stone-800 border border-emerald-500 text-emerald-300 p-4 rounded-xl animate-scale-up">
                <Check className="h-5 w-5" />
                <span className="text-xs font-semibold">Thank you for joining! Your 15% voucher has been dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-stone-800/80 border border-stone-700 text-xs text-white rounded-full px-5 py-3.5 focus:border-amber-200 focus:outline-hidden flex-1"
                />
                <button
                  id="newsletter-join-btn"
                  type="submit"
                  className="rounded-full bg-amber-100 text-stone-950 text-xs font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-amber-20s hover:shadow-lg transition-all active:scale-95 shrink-0 cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <Mail className="h-4 w-4" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LUXURIOUS EDITORIAL FOOTER */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left pb-10 border-b border-stone-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8DCC4] text-[#705335]">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                Cosmetic Product
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-stone-500">
              Pioneering pure natural beauty, combing active botanical extracts with clinically evaluated cosmetic science.
            </p>
          </div>

          {/* Quick Menu Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-stone-200 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                id="foot-nav-home"
                to="/"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
              >
                Home page
              </Link>
              <Link
                id="foot-nav-products"
                to="/services"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
              >
                Our Products
              </Link>
              <Link
                id="foot-nav-blog"
                to="/blog"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
              >
                Beauty Journal
              </Link>
              <Link
                id="foot-nav-about"
                to="/about"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5"
              >
                About Us
              </Link>
              <Link
                id="foot-nav-contact"
                to="/contact"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5 border-r border-[#ffffff20] pr-1"
              >
                Contact Team
              </Link>
              <Link
                id="foot-nav-sitemap"
                to="/sitemap"
                className="hover:text-white transition-colors cursor-pointer text-left py-0.5 font-bold text-amber-100"
              >
                Sitemap Index
              </Link>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-bold text-[#E8DCC4] uppercase tracking-widest">
              Active Focus
            </h4>
            <ul className="text-xs space-y-1.5 text-stone-500">
              <li>• Intense Moisturization</li>
              <li>• Hyaluronic Re-plumping</li>
              <li>• Fine Minerals Foundations</li>
              <li>• broad-Spectrum UV Guards</li>
            </ul>
          </div>

          {/* Slogan details */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-stone-200 uppercase tracking-widest">
              Natural Promises
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              We pledge to preserve eco-systems. Our raw elements are certified vegan, paraben-free, and dermatologically tested for delicate complexions.
            </p>
          </div>

        </div>

        {/* Footnote Copyright & developer parameters */}
        <div className="mx-auto max-w-7xl pt-8 flex flex-col md:flex-row items-center justify-between text-left text-xs text-stone-600 gap-4">
          <p>© 2026 Cosmetic Product Inc. All Rights Reserved.</p>
          <div className="flex items-center space-x-1.5 grayscale opacity-70">
            <span>Formulated with</span>
            <Heart className="h-3.5 w-3.5 text-red-600 fill-red-600 animate-pulse" />
            <span>for healthy natural skin.</span>
          </div>
        </div>
      </footer>

      {/* COMPACT SHOPPING BAG SIDE DRAWER */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
    </HelmetProvider>
  );
}
