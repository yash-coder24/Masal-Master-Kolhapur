import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, CheckCircle2, Car, UtensilsCrossed, Clock, Printer } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  spiceLevel?: 1 | 2 | 3;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [vehicleOrTable, setVehicleOrTable] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderToken, setOrderToken] = useState<string>('');

  if (!isOpen) return null;

  // Calculation
  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gst;

  const handleGenerateToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const token = `MM-${randomNum}`;
    setOrderToken(token);
    setOrderConfirmed(true);
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    let message = `*MISAL MASTER, KOLHAPUR - NEW ORDER*\n`;
    message += `Type: ${orderType === 'takeaway' ? 'Highway Express Takeaway' : 'Dine-In Table Order'}\n`;
    message += `Customer: ${customerName || 'Customer'}\n`;
    message += `Phone: ${customerPhone || 'Not provided'}\n`;
    if (vehicleOrTable) {
      message += `${orderType === 'takeaway' ? 'Vehicle No' : 'Table No'}: ${vehicleOrTable}\n`;
    }
    message += `\n*Order Items:*\n`;
    cart.forEach((c, idx) => {
      message += `${idx + 1}. ${c.item.name} x ${c.quantity} = ₹${c.item.price * c.quantity}\n`;
    });
    message += `\nSubtotal: ₹${subtotal}\n`;
    message += `GST (5%): ₹${gst}\n`;
    message += `*Total Amount: ₹${grandTotal}*\n`;
    if (specialInstructions) {
      message += `Note: ${specialInstructions}\n`;
    }
    message += `\nPickup: Toap, NH 48, Kolhapur`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919822054122?text=${encoded}`, '_blank');
  };

  const resetAndClose = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-stone-900 border-l border-stone-800 text-stone-100 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-white text-base">
              {orderConfirmed ? 'Order Confirmed' : 'Your Misal Order'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {orderConfirmed ? (
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                Kitchen Token Number
              </div>
              <div className="text-3xl font-extrabold font-mono tracking-wider text-white mt-1 tabular-nums">
                {orderToken}
              </div>
              <p className="text-xs text-stone-400 mt-2">
                Order successfully sent to kitchen counter at Toap, Kolhapur.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Order Mode:</span>
                <span className="font-semibold text-white capitalize">
                  {orderType === 'takeaway' ? 'Highway Express Takeaway' : 'Dine-In Table'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Estimated Ready Time:</span>
                <span className="font-semibold text-amber-400">8–12 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Customer:</span>
                <span className="text-stone-200">{customerName} ({customerPhone})</span>
              </div>
              {vehicleOrTable && (
                <div className="flex justify-between">
                  <span className="text-stone-400">
                    {orderType === 'takeaway' ? 'Vehicle:' : 'Table:'}
                  </span>
                  <span className="text-stone-200">{vehicleOrTable}</span>
                </div>
              )}
              <div className="border-t border-stone-800 pt-2 flex justify-between font-bold text-white text-sm">
                <span>Total Amount:</span>
                <span className="font-mono tabular-nums text-amber-400">₹{grandTotal}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Token via WhatsApp</span>
              </button>

              <button
                onClick={resetAndClose}
                className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold transition-colors"
              >
                Start New Order / Close
              </button>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center text-stone-500">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <p className="text-sm font-semibold text-stone-300">Your order is currently empty</p>
            <p className="text-xs text-stone-500 max-w-xs">
              Explore our special Matka Dum Misal, Kolhapuri Jhatka Misal, and refreshing Solkadhi!
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Order Type Toggle (Takeaway vs Dine-In) */}
            <div className="p-4 border-b border-stone-800 bg-stone-950">
              <div className="grid grid-cols-2 gap-2 bg-stone-900 p-1 rounded-lg border border-stone-800">
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    orderType === 'takeaway'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Highway Takeaway</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('dinein')}
                  className={`py-2 px-3 rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                    orderType === 'dinein'
                      ? 'bg-amber-600 text-white shadow-sm'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Dine-In Table</span>
                </button>
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-800 space-y-3">
              {cart.map((entry) => (
                <div key={entry.item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {entry.item.name}
                    </h4>
                    <p className="text-[11px] text-stone-400">
                      ₹{entry.item.price} each
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-stone-950 px-2 py-1 rounded-lg border border-stone-800 shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(entry.item.id, -1)}
                      className="text-stone-400 hover:text-white"
                      title="Decrease"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono font-bold text-stone-200 w-4 text-center tabular-nums">
                      {entry.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(entry.item.id, 1)}
                      className="text-stone-400 hover:text-white"
                      title="Increase"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Item Total & Delete */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                      ₹{entry.item.price * entry.quantity}
                    </span>
                    <button
                      onClick={() => onRemoveItem(entry.item.id)}
                      className="text-stone-500 hover:text-red-400 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Customer Details Form & Checkout Bottom */}
            <form onSubmit={handleGenerateToken} className="p-4 bg-stone-950 border-t border-stone-800 space-y-3 text-xs">
              
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder={orderType === 'takeaway' ? 'Car/Vehicle No (MH09...)' : 'Table Number'}
                  value={vehicleOrTable}
                  onChange={(e) => setVehicleOrTable(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Special Note (e.g. Extra Kat)"
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="bg-stone-900 border border-stone-800 rounded-lg p-2 text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Bill Breakdown */}
              <div className="space-y-1 pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono tabular-nums text-stone-300">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5%):</span>
                  <span className="font-mono tabular-nums text-stone-300">₹{gst}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-white pt-1 border-t border-stone-800">
                  <span>Grand Total:</span>
                  <span className="text-amber-400 font-mono text-sm tabular-nums">₹{grandTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Generate Kitchen Token & Pay at Counter</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2 bg-stone-900 hover:bg-stone-800 border border-emerald-600/40 text-emerald-400 hover:text-emerald-300 font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Order via WhatsApp</span>
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
