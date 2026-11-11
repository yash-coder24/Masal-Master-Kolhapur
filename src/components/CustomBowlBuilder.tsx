import React, { useState } from 'react';
import { Utensils, Check, Flame, Plus, Sparkles, RefreshCw } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface CustomBowlBuilderProps {
  onAddCustomMisal: (customItem: MenuItem) => void;
}

export const CustomBowlBuilder: React.FC<CustomBowlBuilderProps> = ({ onAddCustomMisal }) => {
  const [usalBase, setUsalBase] = useState<'matki' | 'batata' | 'mix'>('matki');
  const [katBroth, setKatBroth] = useState<'matka_dum' | 'kolhapuri_tikha' | 'mild_tari'>('matka_dum');
  const [spiceLevel, setSpiceLevel] = useState<1 | 2 | 3>(2);
  const [farsanType, setFarsanType] = useState<'kolhapuri' | 'gathiya' | 'shev'>('kolhapuri');
  const [includeOnion, setIncludeOnion] = useState(true);
  const [includeCoriander, setIncludeCoriander] = useState(true);
  const [includeLemon, setIncludeLemon] = useState(true);
  const [pavChoice, setPavChoice] = useState<'butter' | 'plain'>('butter');
  const [extraSide, setExtraSide] = useState<'none' | 'solkadhi' | 'taak' | 'dahi'>('solkadhi');
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Price Calculation
  const basePrice = 90;
  const matkaDumExtra = katBroth === 'matka_dum' ? 15 : 0;
  const butterPavExtra = pavChoice === 'butter' ? 15 : 0;
  let sideExtra = 0;
  if (extraSide === 'solkadhi') sideExtra = 35;
  if (extraSide === 'taak') sideExtra = 25;
  if (extraSide === 'dahi') sideExtra = 20;

  const totalPrice = basePrice + matkaDumExtra + butterPavExtra + sideExtra;

  const handleBuildAndAdd = () => {
    const usalNames = {
      matki: 'Tender Sprouted Matki Usal',
      batata: 'Spiced Batata Usal',
      mix: 'Matki & Batata Mix Usal',
    };

    const brothNames = {
      matka_dum: 'Clay Matka Dum Rassa',
      kolhapuri_tikha: 'Fiery Kolhapuri Kat',
      mild_tari: 'Mild Golden Tari',
    };

    const customName = `Custom ${brothNames[katBroth]} (${usalNames[usalBase]})`;
    const marathiName = `स्वकल्पित मिसळ थाळी (${katBroth === 'matka_dum' ? 'मटका दम' : 'कोल्हापुरी कट'})`;

    const description = `Custom Misal: ${usalNames[usalBase]}, ${brothNames[katBroth]}, ${
      spiceLevel === 3 ? 'Fire Jhatka' : spiceLevel === 2 ? 'Kolhapuri Zanzanit' : 'Medium Mild'
    }, ${farsanType} Farsan, with ${pavChoice === 'butter' ? 'Butter Pav' : 'Regular Pav'}${
      extraSide !== 'none' ? ` + Chilled ${extraSide}` : ''
    }.`;

    const customMenuItem: MenuItem = {
      id: `custom-misal-${Date.now()}`,
      name: customName,
      marathiName: marathiName,
      category: 'signature_misal',
      price: totalPrice,
      description: description,
      spiceLevel: spiceLevel,
      image: katBroth === 'matka_dum'
        ? '/src/assets/images/dish_matka_dum_misal_1794369003040.jpg'
        : '/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg',
      portion: `Custom Bowl + 2 ${pavChoice === 'butter' ? 'Butter' : 'Plain'} Pav${extraSide !== 'none' ? ` + ${extraSide}` : ''}`,
      prepTime: '6-8 mins',
    };

    onAddCustomMisal(customMenuItem);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const resetCustomizer = () => {
    setUsalBase('matki');
    setKatBroth('matka_dum');
    setSpiceLevel(2);
    setFarsanType('kolhapuri');
    setIncludeOnion(true);
    setIncludeCoriander(true);
    setIncludeLemon(true);
    setPavChoice('butter');
    setExtraSide('solkadhi');
  };

  return (
    <section id="customizer" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
              Interactive Kitchen Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              थाळी सजवा · Build Your Own Misal Bowl
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Every Kolhapuri has their own personal formula. Choose your usal, slow-dummed rassa, spice kick, farsan texture, and sides.
            </p>
          </div>

          <button
            onClick={resetCustomizer}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Selections</span>
          </button>
        </div>

        {/* 2-Column Layout: Controls on Left, Live Visual Plate on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Customization Controls */}
          <div className="lg:col-span-7 space-y-6">

            {/* Step 1: Usal Base */}
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">
                1. Select Usal Base (उसळ)
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'matki', label: 'Sprouted Matki', desc: 'Classic 100% dew beans' },
                  { id: 'batata', label: 'Spiced Batata', desc: 'Tender potato cubes' },
                  { id: 'mix', label: 'Matki + Batata', desc: 'Balanced combination' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setUsalBase(item.id as any)}
                    className={`p-3 rounded-lg text-left border transition-all text-xs ${
                      usalBase === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <div className="font-semibold text-stone-100">{item.label}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Kat Broth & Dum Technique */}
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">
                2. Select Rassa Broth (कट / रस्सा)
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'matka_dum', label: 'Clay Matka Dum', desc: 'Smoky slow pot (+₹15)', highlight: true },
                  { id: 'kolhapuri_tikha', label: 'Traditional Kat', desc: 'Classic red oil layer' },
                  { id: 'mild_tari', label: 'Medium Tari', desc: 'Gentle golden simmer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setKatBroth(item.id as any)}
                    className={`p-3 rounded-lg text-left border transition-all text-xs ${
                      katBroth === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <div className="font-semibold text-stone-100">{item.label}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Spice Level */}
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>3. Spice Kick (तिखटपणा)</span>
                <span className="text-amber-400 font-mono text-[11px]">
                  {spiceLevel === 1 ? 'Medium' : spiceLevel === 2 ? 'Kolhapuri Zanzanit' : 'Extreme Fire Jhatka'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { level: 1, label: '1x Medium', desc: 'Aromatic & flavorful' },
                  { level: 2, label: '2x Kolhapuri', desc: 'Authentic local heat' },
                  { level: 3, label: '3x Jhatka', desc: 'Fiery Lavangi chillies' },
                ].map((item) => (
                  <button
                    key={item.level}
                    onClick={() => setSpiceLevel(item.level as any)}
                    className={`p-3 rounded-lg text-left border transition-all text-xs ${
                      spiceLevel === item.level
                        ? 'border-red-500 bg-red-500/10 text-white'
                        : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-300'
                    }`}
                  >
                    <div className="font-semibold flex items-center gap-1 text-stone-100">
                      <Flame className={`w-3.5 h-3.5 ${item.level === 3 ? 'text-red-500 fill-red-500' : 'text-amber-500'}`} />
                      <span>{item.label}</span>
                    </div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Farsan & Garnish */}
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">
                4. Crunchy Farsan & Fresh Garnish
              </div>
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                  { id: 'kolhapuri', label: 'Kolhapuri Mix', desc: 'Crunchy gathiya & nuts' },
                  { id: 'gathiya', label: 'Crispy Gathiya', desc: 'Thick gram flour sticks' },
                  { id: 'shev', label: 'Fine Masala Shev', desc: 'Delicate crisp texture' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFarsanType(item.id as any)}
                    className={`p-2.5 rounded-lg text-left border transition-all text-xs ${
                      farsanType === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-stone-800 bg-stone-950 text-stone-400'
                    }`}
                  >
                    <div className="font-semibold text-stone-100">{item.label}</div>
                  </button>
                ))}
              </div>

              {/* Garnish toggles */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-800 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                  <input
                    type="checkbox"
                    checked={includeOnion}
                    onChange={(e) => setIncludeOnion(e.target.checked)}
                    className="rounded border-stone-700 bg-stone-950 text-amber-600 focus:ring-0"
                  />
                  <span>Diced Red Onions</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                  <input
                    type="checkbox"
                    checked={includeCoriander}
                    onChange={(e) => setIncludeCoriander(e.target.checked)}
                    className="rounded border-stone-700 bg-stone-950 text-amber-600 focus:ring-0"
                  />
                  <span>Fresh Coriander</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-stone-300">
                  <input
                    type="checkbox"
                    checked={includeLemon}
                    onChange={(e) => setIncludeLemon(e.target.checked)}
                    className="rounded border-stone-700 bg-stone-950 text-amber-600 focus:ring-0"
                  />
                  <span>Lime Wedge</span>
                </label>
              </div>
            </div>

            {/* Step 5: Pav & Soothing Side */}
            <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
              <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-3">
                5. Pav & Digestive Cooling Side
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <button
                  onClick={() => setPavChoice('butter')}
                  className={`p-3 rounded-lg text-left border transition-all text-xs ${
                    pavChoice === 'butter'
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-semibold text-stone-100">Desi Butter Pav (2 Pcs)</div>
                  <div className="text-[11px] text-stone-500">+₹15</div>
                </button>
                <button
                  onClick={() => setPavChoice('plain')}
                  className={`p-3 rounded-lg text-left border transition-all text-xs ${
                    pavChoice === 'plain'
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-stone-800 bg-stone-950 text-stone-400'
                  }`}
                >
                  <div className="font-semibold text-stone-100">Plain Ladi Pav (2 Pcs)</div>
                  <div className="text-[11px] text-stone-500">Included</div>
                </button>
              </div>

              {/* Cooling Drink selection */}
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[
                  { id: 'solkadhi', label: 'Solkadhi', price: '+₹35' },
                  { id: 'taak', label: 'Masala Taak', price: '+₹25' },
                  { id: 'dahi', label: 'Fresh Dahi', price: '+₹20' },
                  { id: 'none', label: 'No Extra Side', price: '₹0' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setExtraSide(item.id as any)}
                    className={`p-2 rounded-lg text-center border transition-all ${
                      extraSide === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-stone-800 bg-stone-950 text-stone-400'
                    }`}
                  >
                    <div className="font-semibold text-stone-200">{item.label}</div>
                    <div className="text-[10px] text-stone-500">{item.price}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Plate Preview & Action Card */}
          <div className="lg:col-span-5 sticky top-20 space-y-5">
            <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-white">Your Custom Thali Preview</span>
                </div>
                <span className="text-xs text-stone-400">Live Config</span>
              </div>

              {/* Visual Bowl Rendering */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-800 bg-stone-950">
                <img
                  src={katBroth === 'matka_dum'
                    ? '/src/assets/images/dish_matka_dum_misal_1794369003040.jpg'
                    : '/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg'
                  }
                  alt="Custom Misal Bowl"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />
                
                {/* Active selections banner */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-stone-300 space-y-1">
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span>{katBroth === 'matka_dum' ? 'Terracotta Clay Dum' : 'Traditional Kolhapuri Kat'}</span>
                    <span className="text-amber-400">{spiceLevel === 3 ? '🌶️🌶️🌶️ Extreme' : spiceLevel === 2 ? '🌶️🌶️ Zanzanit' : '🌶️ Medium'}</span>
                  </div>
                  <div className="text-[11px] text-stone-400 flex flex-wrap gap-2">
                    <span>{usalBase.toUpperCase()} USAL</span>
                    <span>·</span>
                    <span>{farsanType.toUpperCase()} FARSAN</span>
                    <span>·</span>
                    <span>{pavChoice.toUpperCase()} PAV</span>
                  </div>
                </div>
              </div>

              {/* Summary List */}
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Base Misal & Usal:</span>
                  <span className="font-mono tabular-nums">₹{basePrice}</span>
                </div>
                {matkaDumExtra > 0 && (
                  <div className="flex justify-between">
                    <span className="text-stone-400">Terracotta Clay Matka Dum:</span>
                    <span className="font-mono tabular-nums">+₹{matkaDumExtra}</span>
                  </div>
                )}
                {butterPavExtra > 0 && (
                  <div className="flex justify-between">
                    <span className="text-stone-400">Amul Butter Ladi Pav:</span>
                    <span className="font-mono tabular-nums">+₹{butterPavExtra}</span>
                  </div>
                )}
                {sideExtra > 0 && (
                  <div className="flex justify-between">
                    <span className="text-stone-400">Side ({extraSide}):</span>
                    <span className="font-mono tabular-nums">+₹{sideExtra}</span>
                  </div>
                )}
                <div className="border-t border-stone-800 pt-3 flex justify-between items-center text-sm font-bold text-white">
                  <span>Total Custom Thali Price:</span>
                  <span className="text-xl font-mono tabular-nums text-amber-400">₹{totalPrice}</span>
                </div>
              </div>

              {/* Add to Order Button */}
              <button
                onClick={handleBuildAndAdd}
                className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-600 hover:bg-amber-500 text-white'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added Custom Misal to Order!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add Custom Misal to Order (₹{totalPrice})</span>
                  </>
                )}
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
