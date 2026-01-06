'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HappyHourSection() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Happy Hour
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark-charcoal)] mb-4 sm:mb-6 px-4">
            DAILY HAPPY HOUR
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)]" />
            <p>Daily 3:00 PM - 5:00 PM</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12">
          {[
            '$1 off all beers',
            '$6 appetizers',
            '$5 house wines',
          ].map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--color-off-white)] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center border-2 border-[var(--color-canoe-orange)]/20 hover:border-[var(--color-canoe-orange)] transition-all duration-300 touch-manipulation active:scale-[0.98]"
            >
              <p className="font-serif font-bold text-base sm:text-lg md:text-xl text-[var(--color-dark-charcoal)]">
                {special}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-4">
          <Link href="/contact" className="inline-block w-full sm:w-auto max-w-xs sm:max-w-none">
            <Button 
              size="lg"
              className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 shadow-warm transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
            >
              Join Us for Happy Hour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

