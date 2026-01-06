'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Store, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function MerchHero() {
  const productTags = [
    'T-Shirts',
    'Hoodies',
    'Dry-Fit Shirts',
    'Hats',
    'Stickers',
    'Koozies',
    'Bandanas',
    '& More!'
  ];

  return (
    <section className="relative pt-32 pb-20 md:pb-28 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-warm-white)] to-[var(--color-canoe-tan)] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--color-canoe-orange)] blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--color-canoe-blue)] blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon Badge with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--color-canoe-orange)]/10 border-2 border-[var(--color-canoe-orange)]/20 mb-8 relative"
          >
            <ShoppingBag className="w-12 h-12 text-[var(--color-canoe-orange)]" />
            <Sparkles className="w-5 h-5 text-[var(--color-canoe-orange)] absolute -top-1 -right-1" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-dark-charcoal)] mb-6 leading-tight"
          >
            TAKE HOME A PIECE OF
            <br />
            <span className="text-[var(--color-canoe-orange)]">CANOE CLUB</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 text-lg md:text-xl font-serif mb-8 max-w-3xl mx-auto"
          >
            Show your Lake Life pride with official Canoe Club merchandise
          </motion.p>

          {/* Product Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
          >
            {productTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.8 + (i * 0.05),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white border-2 border-[var(--color-canoe-orange)]/20 text-[var(--color-dark-charcoal)] font-sans text-sm font-medium hover:border-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)]/5 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#gallery">
              <Button 
                size="lg"
                className="bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider px-10 py-7 shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-lg-warm)] hover:scale-105 transition-all duration-300 group"
              >
                Browse Merchandise
                <ShoppingBag className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[var(--color-canoe-orange)] text-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)] hover:text-white font-sans uppercase tracking-wider px-10 py-7 transition-all duration-300 hover:scale-105"
              >
                <Store className="w-5 h-5 mr-2" />
                Visit Us In-Store
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

