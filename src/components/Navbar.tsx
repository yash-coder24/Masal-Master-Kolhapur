import React from 'react';
import { ShoppingBag, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center font-bold text-lg text-white shadow-sm group-hover:bg-amber-500 transition-colors">
            MM
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white font-['Outfit']">
              Misal Master
            </span>
            <span className="text-[11px] text-amber-400 font-medium tracking-wide">
              कोल्हापूर · NH 48
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Concise single-line Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Menu
          </a>
          <a href="#customizer" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Build Your Bowl
          </a>
          <a href="#story" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Kolhapuri Kat
          </a>
          <a href="#location" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Highway Location
          </a>
          <a href="#reviews" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Reviews
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Cart & Order Drawer) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="Open in Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Maps</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order / Cart</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-white text-stone-900 rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
