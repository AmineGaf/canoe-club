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
    <section className="py-24 md:py-32 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-[var(--color-canoe-orange)]" />
            <span className="text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] text-sm font-semibold">
              @canoeclubkc
            </span>
          </div>
          
          <h2 className="font-display text-display-md md:text-display-lg text-[var(--color-dark-charcoal)] mb-6">
            FOLLOW OUR JOURNEY
          </h2>
          
          <p className="text-gray-600 text-lg font-serif max-w-2xl mx-auto">
            Join our community and stay updated with daily specials, events, and lakeside moments
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
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
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <Instagram className="w-8 h-8" />
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
          className="text-center"
        >
          <a
            href="https://www.instagram.com/canoeclubkc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[var(--color-canoe-orange)] text-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)] hover:text-white font-sans uppercase tracking-wider transition-all duration-300 hover:scale-105"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us on Instagram
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

