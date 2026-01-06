'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles, Star, Utensils, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PhishTacosSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-gradient-to-b from-[var(--color-cream)] via-white to-[var(--color-cream)] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[var(--color-canoe-orange)]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[var(--color-canoe-blue)]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Image Side - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group order-2 lg:order-1"
          >
            {/* Main Image Container with Decorative Border */}
            <div className="relative">
              {/* Decorative Corner Accents - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[var(--color-canoe-orange)] rounded-tl-2xl sm:rounded-tl-3xl opacity-50" />
              <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[var(--color-canoe-orange)] rounded-br-2xl sm:rounded-br-3xl opacity-50" />
              
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group-hover:shadow-[0_30px_80px_rgba(217,112,56,0.3)] transition-all duration-700">
                <Image
                  src="/images/phish-tacos-hero.jpg"
                  alt="Famous Phish Tacos at Canoe Club"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-canoe-orange)]/0 via-transparent to-transparent group-hover:from-[var(--color-canoe-orange)]/20 transition-all duration-700" />
              </div>

              {/* Floating Price Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 bg-gradient-to-br from-[var(--color-canoe-orange)] to-[var(--color-canoe-red)] text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl z-10"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <Sparkles className="w-6 h-6 sm:w-8 md:w-10 h-8 md:h-10 mb-1 sm:mb-2 animate-pulse" />
                  <div className="text-center">
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">$3</p>
                    <p className="text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold">Thursdays</p>
                    <p className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 opacity-90">Special Price</p>
                  </div>
                </div>
              </motion.div>

              {/* Popular Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 bg-white/95 backdrop-blur-md px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full shadow-lg sm:shadow-xl flex items-center gap-1.5 sm:gap-2 z-10"
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)]" />
                <span className="font-sans text-xs sm:text-sm font-bold text-[var(--color-dark-charcoal)]">
                  #1 Best Seller
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Eyebrow with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <span className="text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold">
                Our Famous Dish
              </span>
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[var(--color-dark-charcoal)] leading-[0.9] tracking-tight"
            >
              PHISH
              <br />
              <span className="text-[var(--color-canoe-orange)]">TACOS</span>
            </motion.h2>

            {/* Description with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-serif leading-relaxed font-medium">
                Grilled tilapia, fresh cabbage, pico de gallo, monterey jack, 
                our signature <span className="text-[var(--color-canoe-orange)] font-semibold">jalapeño cream sauce</span> served on soft flour tortillas.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans leading-relaxed">
                Come and try one of our locally famous dishes today. Our original 
                recipes cross borders of land and sea with prices suitable for all 
                budgets and attire.
              </p>
            </motion.div>

            {/* Award Badge - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative bg-gradient-to-br from-[var(--color-warm-white)] to-white border-2 border-[var(--color-canoe-orange)]/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[var(--color-canoe-orange)]/5 rounded-full blur-2xl" />
              
              <div className="relative flex items-start gap-3 sm:gap-4 md:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--color-canoe-orange)] to-[var(--color-canoe-red)] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <p className="font-serif font-bold text-base sm:text-lg md:text-xl text-[var(--color-dark-charcoal)]">
                      Local Favorite
                    </p>
                    <div className="flex gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[var(--color-canoe-orange)] text-[var(--color-canoe-orange)]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
                    Voted <span className="font-semibold text-[var(--color-canoe-orange)]">"Best Tacos in Kansas City"</span> by local foodies
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans mt-1.5 sm:mt-2">
                    Featured in multiple local publications
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Link href="/menu#tacos" className="flex-1 sm:flex-none w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 shadow-xl sm:shadow-2xl shadow-[var(--color-canoe-orange)]/40 hover:shadow-[var(--color-canoe-orange)]/60 transition-all duration-300 hover:scale-105 active:scale-95 group touch-manipulation"
                >
                  <span className="flex items-center gap-2">
                    Order Now
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                </Button>
              </Link>
              
              <Link href="/menu" className="flex-1 sm:flex-none w-full sm:w-auto">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[var(--color-canoe-orange)] text-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)] hover:text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                >
                  View Full Menu
                </Button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200"
            >
              {[
                { label: 'Years', value: '17+', sub: 'Serving KC' },
                { label: 'Orders', value: '10K+', sub: 'This Year' },
                { label: 'Rating', value: '4.9', sub: '★ Stars' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--color-canoe-orange)] font-bold mb-0.5 sm:mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs font-sans uppercase tracking-wider text-gray-500 mb-0.5 sm:mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
