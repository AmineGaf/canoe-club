'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VisitUsCTA() {
  const infoCards = [
    {
      icon: MapPin,
      label: 'Location',
      value: '27905 E Colbern Rd\nLake Lotawana, MO 64086',
      delay: 0.2
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon: 3PM-9PM\nTue-Sat: 11AM-9PM\nSun: Closed',
      delay: 0.3
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '(816) 578-5700',
      delay: 0.4,
      link: 'tel:8165785700'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[var(--color-dark-charcoal)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-canoe-orange)] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-canoe-orange)]/20 border-2 border-[var(--color-canoe-orange)]/30 mb-8"
          >
            <Store className="w-10 h-10 text-[var(--color-canoe-orange)]" />
          </motion.div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            GET YOUR CANOE CLUB MERCH
          </h2>
          
          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-serif mb-12 max-w-2xl mx-auto leading-relaxed">
            All merchandise is available for purchase in-store. 
            Stop by and take home a piece of Lake Life!
          </p>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[var(--color-canoe-orange)]/30 transition-all duration-300"
              >
                <card.icon className="w-10 h-10 text-[var(--color-canoe-orange)] mx-auto mb-4" />
                <p className="text-sm font-sans mb-3 text-white/60 uppercase tracking-wider">
                  {card.label}
                </p>
                {card.link ? (
                  <a 
                    href={card.link}
                    className="font-serif text-base md:text-lg hover:text-[var(--color-canoe-orange)] transition-colors whitespace-pre-line block"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="font-serif text-base md:text-lg whitespace-pre-line">
                    {card.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://goo.gl/maps/SW8XjT2ZzvXT9xUf7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider px-10 py-7 shadow-lg shadow-[var(--color-canoe-orange)]/30 hover:shadow-xl hover:shadow-[var(--color-canoe-orange)]/40 hover:scale-105 transition-all duration-300 group"
              >
                <Navigation className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get Directions
              </Button>
            </a>
            
            <a href="tel:8165785700">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-dark-charcoal)] font-sans uppercase tracking-wider px-10 py-7 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/50 font-sans text-sm mt-12"
          >
            Need help finding something specific? Give us a call and we'll be happy to assist!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

