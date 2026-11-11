import React, { useState, useMemo } from 'react';
import { Flame, Plus, Check, Search, Sparkles } from 'lucide-react';
import { MenuItem, MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, spiceLevel?: 1 | 2 | 3, extraButterPav?: boolean) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSpice, setSelectedSpice] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'signature_misal', label: 'Signature Misal (मिसळ)' },
    { id: 'snacks_sides', label: 'Snacks & Extras' },
    { id: 'cooling_drinks', label: 'Cooling Drinks' },
    { id: 'desserts', label: 'Sweets & Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Spice match
      if (selectedSpice !== 'all' && item.spiceLevel !== selectedSpice) {
        return false;
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesMarathi = item.marathiName.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesMarathi && !matchesDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSpice, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const getSpiceBadge = (level: 1 | 2 | 3) => {
    if (level === 3) {
      return (
        <span className="text-red-500 font-semibold flex items-center gap-1 text-xs">
          <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
          <span>Fire Jhatka (अति झणझणीत)</span>
        </span>
      );
    }
    if (level === 2) {
      return (
        <span className="text-amber-500 font-semibold flex items-center gap-1 text-xs">
          <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Kolhapuri Spicy (झणझणीत)</span>
        </span>
      );
    }
    return (
      <span className="text-emerald-500 font-medium flex items-center gap-1 text-xs">
        <span>Medium Mild</span>
      </span>
    );
  };

  return (
    <section id="menu" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
              Authentic Kitchen Menu
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Misal Master Special Menu
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Freshly prepared with pure ground Kolhapuri spices, tender sprouted matki, and slow-dummed rassa broth.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search misal, drinks, pav..."
              className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-800">
          
          {/* Category Tabs (Segmented Button Group - Permitted per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-950 rounded-lg border border-stone-800/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-sm font-semibold'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Spice Preference Filter */}
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <span className="font-medium shrink-0">Spice:</span>
            <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-lg border border-stone-800/80">
              <button
                onClick={() => setSelectedSpice('all')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  selectedSpice === 'all'
                    ? 'bg-stone-800 text-white font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedSpice(1)}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  selectedSpice === 1
                    ? 'bg-stone-800 text-emerald-400 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Mild
              </button>
              <button
                onClick={() => setSelectedSpice(2)}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  selectedSpice === 2
                    ? 'bg-stone-800 text-amber-400 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Kolhapuri
              </button>
              <button
                onClick={() => setSelectedSpice(3)}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${
                  selectedSpice === 3
                    ? 'bg-stone-800 text-red-400 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Jhatka
              </button>
            </div>
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-950 rounded-xl border border-stone-800">
            <p className="text-base text-stone-300 font-medium">No dishes match your filter.</p>
            <p className="text-xs text-stone-500 mt-1">Try resetting the spice level or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSpice('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-amber-400 hover:text-amber-300 border border-amber-500/40 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemMap[item.id];
              return (
                <div
                  key={item.id}
                  className="group bg-stone-950 rounded-xl border border-stone-800/90 hover:border-stone-700 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  {/* Food Image Container */}
                  <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Quiet editorial text banner if popular */}
                    {item.isPopular && (
                      <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-sm border border-amber-500/30 px-2.5 py-1 rounded text-[11px] font-semibold text-amber-400 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Highway Special</span>
                      </div>
                    )}

                    <div className="absolute bottom-2.5 right-2.5 bg-stone-950/85 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-mono text-stone-300 tabular-nums">
                      {item.prepTime}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      
                      {/* Spice and Category Metadata line (Zero-pill clean text) */}
                      <div className="flex items-center justify-between text-xs text-stone-400">
                        {getSpiceBadge(item.spiceLevel)}
                        {item.calories && (
                          <span className="font-mono tabular-nums text-stone-500 text-[11px]">
                            {item.calories}
                          </span>
                        )}
                      </div>

                      {/* Title & Marathi script */}
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-amber-400/90 font-medium">
                          {item.marathiName}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-400 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Portion detail */}
                      <p className="text-[11px] text-stone-500 font-medium pt-1">
                        Includes: {item.portion}
                      </p>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Price</span>
                        <span className="text-xl font-bold font-mono tabular-nums text-white">
                          ₹{item.price}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(item)}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-600 hover:bg-amber-500 text-white shadow-sm'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
