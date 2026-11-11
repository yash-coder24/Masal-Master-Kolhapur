import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CustomBowlBuilder } from './components/CustomBowlBuilder';
import { MisalStory } from './components/MisalStory';
import { LocationHighwayGuide } from './components/LocationHighwayGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { Footer } from './components/Footer';
import { MenuItem } from './data/restaurantData';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Cart operations
  const handleAddToCart = (item: MenuItem, spiceLevel?: 1 | 2 | 3) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { item, quantity: 1, spiceLevel: spiceLevel || item.spiceLevel }];
    });
  };

  const handleAddCustomMisal = (customItem: MenuItem) => {
    setCart((prevCart) => [...prevCart, { item: customItem, quantity: 1, spiceLevel: customItem.spiceLevel }]);
    setIsDrawerOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotalPrice = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsDrawerOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onScrollToMenu={() => scrollTo('menu')}
          onScrollToCustomizer={() => scrollTo('customizer')}
          onScrollToLocation={() => scrollTo('location')}
        />

        <MenuSection onAddToCart={handleAddToCart} />

        <CustomBowlBuilder onAddCustomMisal={handleAddCustomMisal} />

        <MisalStory />

        <LocationHighwayGuide />

        <ReviewsSection />
      </main>

      {/* Floating Bottom Mobile Order Strip (Complies with 15% mobile sticky cap rule) */}
      {cartTotalCount > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-30 p-3 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white text-xs font-bold">
                {cartTotalCount}
              </div>
              <div className="text-xs">
                <span className="text-stone-400 block">{cartTotalCount} {cartTotalCount === 1 ? 'item' : 'items'}</span>
                <span className="font-bold font-mono text-white text-sm tabular-nums">₹{cartTotalPrice}</span>
              </div>
            </div>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md"
            >
              <span>View Order</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Slide-over Checkout Drawer */}
      <OrderDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
