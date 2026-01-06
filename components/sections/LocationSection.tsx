'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Map } from '@/components/Map';

export function LocationSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Find Us
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark-charcoal)] mb-4 sm:mb-6 px-4">
            VISIT CANOE CLUB
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-serif max-w-2xl mx-auto px-4">
            Located at the heart of Lake Lotawana, just 30 minutes from Kansas City
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          
          {/* Map Side */}
          <Map height="400px" className="sm:h-[450px] md:h-[500px]" />

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-[var(--color-cream)] rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[var(--color-dark-charcoal)] mb-1.5 sm:mb-2">
                  Address
                </h3>
                <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                  27905 E Colbern Rd
                  <br />
                  Lake Lotawana, MO 64086
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-[var(--color-cream)] rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[var(--color-dark-charcoal)] mb-1.5 sm:mb-2">
                  Phone
                </h3>
                <a 
                  href="tel:8165785700"
                  className="text-gray-600 hover:text-[var(--color-canoe-orange)] font-sans text-base sm:text-lg transition-colors touch-manipulation active:scale-95 inline-block"
                >
                  (816) 578-5700
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-[var(--color-cream)] rounded-xl sm:rounded-2xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[var(--color-dark-charcoal)] mb-2 sm:mb-3">
                  Hours
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-gray-600 font-sans text-xs sm:text-sm">
                  <div className="flex justify-between gap-2">
                    <span>Monday</span>
                    <span className="font-medium whitespace-nowrap">3:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="min-w-0">Tuesday - Thursday</span>
                    <span className="font-medium whitespace-nowrap">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Friday - Saturday</span>
                    <span className="font-medium whitespace-nowrap">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Sunday</span>
                    <span className="font-medium text-[var(--color-canoe-red)] whitespace-nowrap">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 sm:pt-4">
              <a href="tel:8165785700" className="block">
                <Button 
                  size="lg"
                  className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 shadow-warm transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
                >
                  Call to Book
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
