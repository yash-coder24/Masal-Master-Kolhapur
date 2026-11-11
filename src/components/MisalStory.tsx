import React from 'react';
import { Flame, Droplet, Sparkles, Heart } from 'lucide-react';
import { MISAL_ANATOMY } from '../data/restaurantData';

export const MisalStory: React.FC = () => {
  return (
    <section id="story" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
            Kolhapuri Culinary Heritage
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            The Anatomy of Authentic Kolhapuri Misal
          </h2>
          <p className="text-stone-400 text-sm mt-2 leading-relaxed">
            Unlike sweet or mild misals from Mumbai or Pune, real Kolhapuri misal is an art of slow reduction, dry-roasted spices, and balancing intense spicy heat with natural cooling elements.
          </p>
        </div>

        {/* 2-Column Split: Visual & Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual feature */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-xl aspect-[4/3] bg-stone-950">
              <img
                src="/src/assets/images/beverage_solkadhi_taak_1794369003403.jpg"
                alt="Chilled Solkadhi and Masala Taak at Misal Master Kolhapur"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-amber-400 font-semibold tracking-wide">
                  THE ESSENTIAL ANTIDOTE
                </p>
                <p className="text-sm font-bold">
                  Fresh Kokum Solkadhi & Village Masala Taak
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">The Kolhapuri "Tari" Secret:</p>
              <p>
                The red layer of oil swimming atop the bowl isn't excess oil—it's <em>Kat</em>, infused over 3 hours with roasted dried coconut, stone-crushed garlic, and authentic Sankeshwari mirchi.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Elements */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MISAL_ANATOMY.map((item, index) => (
              <div
                key={index}
                className="bg-stone-950 p-4 rounded-xl border border-stone-800/90 hover:border-stone-700 transition-colors"
              >
                <h3 className="text-sm font-bold text-amber-400 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
