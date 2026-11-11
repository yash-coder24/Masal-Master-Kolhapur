import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-amber-600 flex items-center justify-center font-bold text-white text-xs">
                MM
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Misal Master, Kolhapur
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Authentic Kolhapuri Matka Dum Misal & spiced breakfast kitchen on National Highway 48, Toap, Kolhapur.
            </p>
            <p className="text-[11px] text-stone-500">
              100% Pure Vegetarian · Fresh Daily Sprouting
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Signature Menu & Prices
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-amber-400 transition-colors">
                  Build Your Misal Bowl
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-400 transition-colors">
                  The Kolhapuri Kat Tradition
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  Highway Location & Parking
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Traveler Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Timings */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Operating Hours
            </div>
            <div className="flex items-start gap-2 text-stone-300">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Open Every Day (7 Days)</p>
                <p className="text-[11px] text-stone-400">7:00 AM – 10:30 PM IST</p>
                <p className="text-[11px] text-stone-500 mt-1">Breakfast, Lunch & Highway Dinner</p>
              </div>
            </div>
          </div>

          {/* Col 4: Highway Address & Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wider">
              Highway Address
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-stone-300 text-[11px] leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
            </div>
            <div className="pt-1">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-10 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Misal Master, Kolhapur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-stone-300 transition-colors">
              Phone: {RESTAURANT_INFO.phone}
            </a>
            <span>·</span>
            <span>NH 48 Toap Highway Junction</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
