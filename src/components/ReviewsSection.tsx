import React, { useState } from 'react';
import { Star, MessageSquarePlus, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [dishTried, setDishTried] = useState('Special Matka Dum Misal');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: name,
      city: city || 'Foodie Traveler',
      rating,
      date: 'Just now',
      comment,
      dishTried,
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setName('');
      setCity('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
              Food Explorer Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Loved by Locals & Highway Road-Trippers
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              From Pune weekenders to local Kolhapuri misal connoisseurs, see what patrons have to say about the spice, matka dum, and hospitality.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="self-start md:self-auto px-4 py-2.5 bg-stone-950 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 rounded-lg text-xs font-semibold text-stone-200 hover:text-white transition-colors flex items-center gap-2"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-500" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-950 rounded-xl p-6 border border-stone-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Date */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-stone-500">{rev.date}</span>
                </div>

                {/* Dish Tried quiet tag */}
                <div className="text-xs text-amber-400/90 font-medium">
                  Tried: {rev.dishTried}
                </div>

                {/* Comment */}
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-stone-800/80 text-xs">
                <span className="font-bold text-white block">{rev.author}</span>
                <span className="text-stone-500">{rev.city}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-stone-100">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white text-sm"
              >
                ✕
              </button>

              <h3 className="text-lg font-bold text-white mb-1">
                Share Your Misal Master Experience
              </h3>
              <p className="text-xs text-stone-400 mb-4">
                Your feedback helps highway road-trippers discover authentic Kolhapuri flavors.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <Check className="w-10 h-10 text-emerald-500 mx-auto" />
                  <p className="text-sm font-bold text-white">Thank You for Your Review!</p>
                  <p className="text-xs text-stone-400">Your review has been recorded.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Shinde"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">City / Region</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Kolhapur, Pune"
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 font-medium mb-1">Rating</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value={5}>5 Stars - Outstanding</option>
                        <option value={4}>4 Stars - Great</option>
                        <option value={3}>3 Stars - Good</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Dish Tried</label>
                    <input
                      type="text"
                      value={dishTried}
                      onChange={(e) => setDishTried(e.target.value)}
                      placeholder="Special Matka Dum Misal"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-medium mb-1">Review Details *</label>
                    <textarea
                      required
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="How was the Kat rassa, spice level, and service?"
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-stone-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors"
                  >
                    Post Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
