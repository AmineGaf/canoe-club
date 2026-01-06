'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HappyHourSection() {
  return (
    <section className="pt-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Happy Hour
          </span>
          <h2 className="font-display text-display-md md:text-display-lg text-[var(--color-dark-charcoal)] mb-6">
            DAILY HAPPY HOUR
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600 font-sans">
            <Clock className="w-5 h-5 text-[var(--color-canoe-orange)]" />
            <p>Daily 3:00 PM - 5:00 PM</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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
              className="bg-[var(--color-off-white)] rounded-2xl p-8 text-center border-2 border-[var(--color-canoe-orange)]/20 hover:border-[var(--color-canoe-orange)] transition-all duration-300"
            >
              <p className="font-serif font-bold text-xl text-[var(--color-dark-charcoal)]">
                {special}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider shadow-warm transition-all duration-300 hover:scale-105"
            >
              Join Us for Happy Hour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

