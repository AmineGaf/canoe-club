'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Mock Instagram posts - replace with actual API integration
const instagramPosts = [
  { id: 1, image: '/images/ig-1.jpg', likes: 234 },
  { id: 2, image: '/images/ig-2.jpg', likes: 189 },
  { id: 3, image: '/images/ig-3.jpg', likes: 312 },
  { id: 4, image: '/images/ig-4.jpg', likes: 256 },
  { id: 5, image: '/images/ig-5.jpg', likes: 198 },
  { id: 6, image: '/images/ig-6.jpg', likes: 287 },
];

export function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--color-canoe-orange)]" />
            <span className="text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm font-semibold">
              @canoeclubkc
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--color-dark-charcoal)] mb-4 sm:mb-6 px-4">
            FOLLOW OUR JOURNEY
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-serif max-w-2xl mx-auto px-4">
            Join our community and stay updated with daily specials, events, and lakeside moments
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/canoeclubkc"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer touch-manipulation"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center px-4"
        >
          <a
            href="https://www.instagram.com/canoeclubkc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <Button 
              size="lg"
              variant="outline"
              className="w-full border-2 border-[var(--color-canoe-orange)] text-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)] hover:text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Follow Us on Instagram
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

