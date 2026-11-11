import React from 'react';
import { MapPin, Flame, Clock, Star, ArrowRight, ShieldCheck, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onScrollToMenu: () => void;
  onScrollToCustomizer: () => void;
  onScrollToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToMenu,
  onScrollToCustomizer,
  onScrollToLocation,
}) => {
  return (
    <section className="relative bg-stone-950 text-stone-100 overflow-hidden border-b border-stone-800">
      {/* Background ambient warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            {/* Trust and Highway Proof Marker (Zero-pill compliant clean text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400">
              <span className="flex items-center gap-1 text-white">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <strong className="font-semibold text-stone-100 font-mono tabular-nums">{RESTAURANT_INFO.rating}</strong> / 5.0
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-300 font-mono tabular-nums">{RESTAURANT_INFO.reviewCount.toLocaleString()} Foodie Reviews</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-amber-400 font-semibold">NH 48 Highway Landmark</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Authentic Kolhapuri Misal & Clay Pot Matka Dum
            </h1>

            {/* Natural Prose Description */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              Fresh sprouted matki simmered with traditional Kolhapuri Lavangi chillies, slow-roasted dry coconut, and hand-ground Kanda-Lasun masala. Served bubbling hot with crispy farsan, chilled Solkadhi, and soft butter ladi pav.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onScrollToMenu}
                className="px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors shadow-md flex items-center gap-2 shrink-0"
              >
                <span>View Menu & Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCustomizer}
                className="px-5 py-3 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-stone-500 rounded-lg transition-colors flex items-center gap-2 shrink-0"
              >
                <Utensils className="w-4 h-4 text-amber-500" />
                <span>Build Your Misal</span>
              </button>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-amber-400 hover:text-amber-300 border border-amber-500/30 hover:border-amber-500 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MapPin className="w-4 h-4" />
                <span>Google Maps</span>
              </a>
            </div>

            {/* Quick Operating Info Line */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Open Daily: 7:00 AM – 10:30 PM</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Pure Veg · Ample Car Parking</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Food Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
              <img
                src="/src/assets/images/hero_misal_master_1794369001019.jpg"
                alt="Authentic Kolhapuri Misal Pav feast on traditional brass thali at Misal Master"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div className="space-y-0.5">
                  <p className="text-xs text-amber-400 font-semibold tracking-wide">
                    FRESHLY SERVED DAILY
                  </p>
                  <p className="text-base sm:text-lg font-bold">
                    Special Kolhapuri Thali with Butter Pav & Kat
                  </p>
                </div>
                <div className="text-right shrink-0 pl-2">
                  <span className="text-xs text-stone-300 block">Starting from</span>
                  <span className="text-xl font-bold font-mono tabular-nums text-amber-400">₹90</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Feature Strip Below Hero */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Matka Dum Technique</div>
            <div className="text-sm font-bold text-stone-100">Slow-Smoked In Terracotta</div>
            <p className="text-xs text-stone-400">Clay pots enrich the spicy rassa with distinct earthy mineral notes.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Kolhapuri Masala</div>
            <div className="text-sm font-bold text-stone-100">Hand-Ground Sankeshwari</div>
            <p className="text-xs text-stone-400">Pure dry-roasted coconut, native garlic, and fiery Maharashtrian spices.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Highway Pitstop</div>
            <div className="text-sm font-bold text-stone-100">Express Car Service</div>
            <p className="text-xs text-stone-400">Quick pickup right at Toap on NH 48 with dedicated clean parking.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Natural Cooling</div>
            <div className="text-sm font-bold text-stone-100">Chilled Solkadhi & Taak</div>
            <p className="text-xs text-stone-400">Fresh kokum coconut milk & tempered village buttermilk to calm the heat.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
