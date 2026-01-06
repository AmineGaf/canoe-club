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
      className="py-24 md:py-32 bg-[var(--color-dark-charcoal)] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-canoe-orange)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-canoe-orange)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Daily Specials
          </span>
          
          <h2 className="font-display text-display-md md:text-display-lg text-white mb-6">
            YOUR WEEK AT CANOE CLUB
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl font-serif max-w-2xl mx-auto">
            Something special every day of the week
          </p>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      className="bg-[var(--color-off-white)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-canoe-orange)]/0 to-[var(--color-canoe-orange)]/0 group-hover:from-[var(--color-canoe-orange)]/5 group-hover:to-[var(--color-canoe-red)]/5 transition-all duration-500" />
      
      <div className="relative">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-[var(--color-canoe-orange)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--color-canoe-orange)] group-hover:scale-110 transition-all duration-300">
            <Icon className="w-8 h-8 text-[var(--color-canoe-orange)] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
          </div>
        </div>

        {/* Day */}
        <h3 className="font-display text-4xl text-[var(--color-dark-charcoal)] mb-2 tracking-wide">
          {special.day}
        </h3>

        {/* Special Name & Price */}
        <div className="flex items-baseline justify-between mb-3">
          <p className="font-serif font-bold text-xl text-[var(--color-dark-charcoal)]">
            {special.special}
          </p>
          <span className="font-display text-3xl text-[var(--color-canoe-orange)]">
            {special.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">
          {special.description}
        </p>

        {/* Availability Badge */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="uppercase tracking-wider font-sans font-medium">
            {special.available}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

