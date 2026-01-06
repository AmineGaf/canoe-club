'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '@/lib/constants';

const categories = ['All', 'Apps', 'Tacos', 'Sandwiches', 'Entrees', 'Desserts'];

const categoryMap: Record<string, string> = {
  'All': 'all',
  'Apps': 'apps',
  'Tacos': 'tacos',
  'Sandwiches': 'sandwiches',
  'Entrees': 'entrees',
  'Desserts': 'desserts',
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? Object.values(MENU_ITEMS).flat()
    : MENU_ITEMS[categoryMap[activeCategory] as keyof typeof MENU_ITEMS] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-forest-green to-dark-charcoal" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-3 sm:mb-4 drop-shadow-2xl">
            OUR MENU
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Discover our signature dishes and seasonal favorites
          </p>
        </div>
      </section>

      {/* Category Filter - Static (Not Sticky) */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 touch-manipulation
                  ${activeCategory === cat
                    ? 'bg-[var(--color-canoe-orange)] text-white shadow-lg shadow-[var(--color-canoe-orange)]/30'
                    : 'bg-[var(--color-cream)] border-2 border-[var(--color-canoe-orange)]/20 text-[var(--color-dark-charcoal)] hover:border-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)]/5'
                  }
                `}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, i) => (
                  <motion.div
                    key={`${activeCategory}-${i}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group touch-manipulation active:scale-[0.98]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-lake-blue/10 to-forest-green/10">
                      <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                        {item.category === 'apps' ? '🍤' : item.category === 'tacos' ? '🌮' : item.category === 'sandwiches' ? '🥪' : item.category === 'entrees' ? '🍽️' : '🍰'}
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-[var(--color-dark-charcoal)] mb-1.5 sm:mb-2 leading-tight">{item.name}</h3>
                      <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3">{item.description}</p>
                      <p className="font-display text-xl sm:text-2xl font-semibold text-[var(--color-canoe-orange)]">${item.price}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 sm:py-16">
                  <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)]">No items found in this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

