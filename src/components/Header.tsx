import { Sparkles, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({
  cartCount,
  onOpenCart,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "/", label: "Home" },
    { id: "/services", label: "Services / Products" },
    { id: "/blog", label: "Blog" },
    { id: "/about", label: "About Us" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
        
        {/* Brand Name / Logo */}
        <Link
          id="brand-logo-btn"
          to="/"
          className="group flex items-center space-x-2.5 text-left cursor-pointer transition-transform active:scale-95"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8DCC4] text-[#705335] shadow-xs">
            <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold tracking-wide text-stone-900 group-hover:text-amber-800 transition-colors">
              Cosmetic Product
            </h1>
            <p className="font-sans text-[10px] tracking-widest text-[#9C826A] uppercase">
              Pure Natural Beauty
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              id={`nav-tab-${tab.id.replace('/', '') || 'home'}`}
              to={tab.id}
              className={({ isActive }) =>
                `relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-amber-800 font-semibold"
                    : "text-stone-600 hover:text-stone-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 bg-amber-800 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Shopping bag & Mobile toggle */}
        <div className="flex items-center space-x-4">
          <button
            id="header-cart-toggle"
            onClick={onOpenCart}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 transition-all active:scale-95 duration-200 cursor-pointer"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[10px] font-bold text-white shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Mobile */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-800 hover:bg-stone-200/80 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-250 bg-[#FAF8F5] px-6 py-4 space-y-3 animate-fade-in shadow-lg">
          {tabs.map((tab) => (
            <NavLink
              key={tab.id}
              id={`mobile-nav-tab-${tab.id.replace('/', '') || 'home'}`}
              to={tab.id}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={({ isActive }) =>
                `block w-full text-left py-2.5 px-4 rounded-lg text-base font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-amber-100/50 text-amber-900 font-semibold border-l-4 border-amber-700"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
