'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Map } from '@/components/Map';

export function LocationSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Find Us
          </span>
          
          <h2 className="font-display text-display-md md:text-display-lg text-[var(--color-dark-charcoal)] mb-6">
            VISIT CANOE CLUB
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            Located at the heart of Lake Lotawana, just 30 minutes from Kansas City
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Map Side */}
          <Map height="500px" />

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            
            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-[var(--color-cream)] rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[var(--color-dark-charcoal)] mb-2">
                  Address
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed">
                  27905 E Colbern Rd
                  <br />
                  Lake Lotawana, MO 64086
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-[var(--color-cream)] rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[var(--color-dark-charcoal)] mb-2">
                  Phone
                </h3>
                <a 
                  href="tel:8165785700"
                  className="text-gray-600 hover:text-[var(--color-canoe-orange)] font-sans text-lg transition-colors"
                >
                  (816) 578-5700
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-[var(--color-cream)] rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-canoe-orange)]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[var(--color-canoe-orange)]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-xl text-[var(--color-dark-charcoal)] mb-3">
                  Hours
                </h3>
                <div className="space-y-2 text-gray-600 font-sans text-sm">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span className="font-medium">3:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday - Thursday</span>
                    <span className="font-medium">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-[var(--color-canoe-red)]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a href="tel:8165785700">
                <Button 
                  size="lg"
                  className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider shadow-warm transition-all duration-300 hover:scale-105"
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
