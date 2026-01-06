'use client';

import { motion } from 'framer-motion';
import { 
  Wine, 
  Beef, 
  Utensils, 
  Fish, 
  Award, 
  Clock 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Special {
  day: string;
  icon: LucideIcon;
  special: string;
  price: string;
  description: string;
  available: string;
}

const specials: Special[] = [
  {
    day: 'MONDAY',
    icon: Wine,
    special: 'Moscow Mules',
    price: '$5',
    description: 'House-made, served all night',
    available: 'All Day',
  },
  {
    day: 'TUESDAY',
    icon: Beef,
    special: 'Burger & Fries',
    price: '$9',
    description: '8oz classic steak burger with hand-cut fries',
    available: 'All Day',
  },
  {
    day: 'WEDNESDAY',
    icon: Utensils,
    special: 'Filet Mignon',
    price: '$27',
    description: '8oz bacon-wrapped beef filet, perfectly grilled',
    available: 'Dinner Only',
  },
  {
    day: 'THURSDAY',
    icon: Fish,
    special: 'Phish Tacos',
    price: '$3',
    description: 'Our famous tacos at an unbeatable price',
    available: 'All Day',
  },
  {
    day: 'FRIDAY',
    icon: Award,
    special: 'Prime Rib',
    price: 'Market',
    description: '10oz / 14oz cuts, slow-roasted to perfection',
    available: 'Dinner Only',
  },
  {
    day: 'SATURDAY',
    icon: Award,
    special: 'Prime Rib',
    price: 'Market',
    description: '10oz / 14oz cuts, slow-roasted to perfection',
    available: 'Dinner Only',
  },
];

export function DailySpecialsSection() {
  return (
    <section 
      id="specials"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-dark-charcoal)] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-canoe-orange)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-canoe-orange)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Daily Specials
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 px-4">
            YOUR WEEK AT CANOE CLUB
          </h2>
          
          <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl font-serif max-w-2xl mx-auto px-4">
            Something special every day of the week
          </p>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {specials.map((item, index) => (
            <SpecialCard key={item.day} special={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/menu">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-dark-charcoal)] font-sans uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SpecialCard({ special, index }: { special: Special; index: number }) {
  const Icon = special.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-[var(--color-off-white)] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden touch-manipulation active:scale-[0.98]"
    >
      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-canoe-orange)]/0 to-[var(--color-canoe-orange)]/0 group-hover:from-[var(--color-canoe-orange)]/5 group-hover:to-[var(--color-canoe-red)]/5 transition-all duration-500" />
      
      <div className="relative">
        {/* Icon */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[var(--color-canoe-orange)]/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[var(--color-canoe-orange)] group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--color-canoe-orange)] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
          </div>
        </div>

        {/* Day */}
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--color-dark-charcoal)] mb-1.5 sm:mb-2 tracking-wide">
          {special.day}
        </h3>

        {/* Special Name & Price */}
        <div className="flex items-baseline justify-between mb-2 sm:mb-3 gap-2">
          <p className="font-serif font-bold text-base sm:text-lg md:text-xl text-[var(--color-dark-charcoal)] flex-1 min-w-0">
            {special.special}
          </p>
          <span className="font-display text-2xl sm:text-2.5xl md:text-3xl text-[var(--color-canoe-orange)] flex-shrink-0">
            {special.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed mb-3 sm:mb-4">
          {special.description}
        </p>

        {/* Availability Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="uppercase tracking-wider font-sans font-medium">
            {special.available}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

