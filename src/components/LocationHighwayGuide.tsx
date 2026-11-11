import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Phone, Car, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO, HIGHWAY_MILESTONES } from '../data/restaurantData';

export const LocationHighwayGuide: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Check if open currently (IST time roughly 7:00 to 22:30)
    const checkTime = () => {
      const now = new Date();
      // Indian Standard Time is UTC + 5:30
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;
      
      const openMinutes = 7 * 60; // 07:00 AM
      const closeMinutes = 22 * 60 + 30; // 10:30 PM

      setIsOpenNow(totalMinutes >= openMinutes && totalMinutes <= closeMinutes);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="location" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
              Google Maps & Highway Stop
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Location & Highway Travel Guide
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Strategically situated on NH 48 (Pune-Bengaluru Highway) at Toap, Kolhapur. Ideal pitstop before entering Kolhapur city or heading towards Goa and Bengaluru.
            </p>
          </div>

          {/* Live Open Indicator */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-stone-900 px-3.5 py-2 rounded-xl border border-stone-800 text-xs">
            <div className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-red-500'}`} />
            <span className="font-semibold text-white">
              {isOpenNow ? 'Kitchen Open Now' : 'Kitchen Closed (Opens 7:00 AM)'}
            </span>
            <span className="text-stone-400">· 7:00 AM – 10:30 PM</span>
          </div>
        </div>

        {/* 2-Column Split: Map & Address Details Left, Highway Milestones & Amenities Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Google Maps Card, Directions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 space-y-5 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {RESTAURANT_INFO.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {RESTAURANT_INFO.marathiName}
                  </p>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Landmark: Beside Shetimal Prakriya Sangh HP Petrol Pump, Patilnagar, Toap.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-800">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Navigation (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-4 py-2.5 bg-stone-950 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>Call Kitchen: {RESTAURANT_INFO.phone}</span>
                </a>
              </div>

              {/* Interactive Stylized Map Card */}
              <div className="relative rounded-xl overflow-hidden border border-stone-800 aspect-[16/9] bg-stone-950 group">
                {/* Visual Map Representation */}
                <div className="absolute inset-0 bg-[#1e2430] flex flex-col items-center justify-center p-6 text-center">
                  {/* Decorative Highway Grid & Pin */}
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center mb-3 text-amber-400 animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-white">
                    Misal Master, Kolhapur
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5 font-mono tabular-nums">
                    Lat: 16.7994° N, Long: 74.2845° E (NH 48 Toap)
                  </div>
                  <div className="mt-3">
                    <a
                      href={RESTAURANT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 text-white rounded-md text-xs font-medium hover:bg-amber-500 transition-colors"
                    >
                      <span>Open Live Pin in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Highway Facilities */}
            <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-500" />
                <span>Highway Pitstop Amenities</span>
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>50+ Free Car & Bike Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sanitized Family Restrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>In-Car Express Takeaway Tray</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>UPI, Cards & Cash Accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Air-Cooled Family Dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pet Friendly Outdoor Seating</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Distance from Key Landmarks Table */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Distance & Drive Times to Misal Master
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Estimated commute from major tourist points and highway entries
                  </p>
                </div>
              </div>

              <div className="divide-y divide-stone-800">
                {HIGHWAY_MILESTONES.map((stone, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-stone-200">{stone.location}</div>
                      <div className="text-[11px] text-stone-500">{stone.route}</div>
                    </div>
                    <div className="text-right shrink-0 pl-3">
                      <div className="font-mono font-bold text-amber-400 tabular-nums">
                        {stone.distance}
                      </div>
                      <div className="text-[11px] text-stone-400 font-mono tabular-nums">
                        ~{stone.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400">
                Tip: If driving towards Goa or Karnataka from Pune/Satara, Misal Master is on the left side right after the Toap flyover before Kolhapur city entry.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
