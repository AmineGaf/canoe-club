'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Clock, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/herosection.jpg"
          alt="Canoe Club Lakeside Sunset View"
          fill
          priority
          className="object-cover object-center"
          quality={75}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Main Content - Centered */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 px-4">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-[var(--color-canoe-orange)] font-sans uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-semibold px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full">
              Jackson County's Favorite Since 2007
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] sm:leading-[0.95] tracking-tight px-2"
            style={{ 
              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 8px 60px rgba(0,0,0,0.7)'
            }}
          >
            LAKE LIFE
            <br />
            <span 
              className="text-[var(--color-canoe-orange)]"
              style={{
                textShadow: `
                  0 0 20px rgba(217, 112, 56, 0.8),
                  0 0 40px rgba(217, 112, 56, 0.6),
                  0 4px 30px rgba(0, 0, 0, 1),
                  0 8px 60px rgba(0, 0, 0, 0.9)
                `,
                filter: 'drop-shadow(0 0 25px rgba(217, 112, 56, 0.7))'
              }}
            >
              AT LOTAWANA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif max-w-3xl mx-auto leading-relaxed px-4"
            style={{ 
              textShadow: '0 2px 20px rgba(0,0,0,0.8)'
            }}
          >
            Famous Phish Tacos • Live Music • Prime Rib Weekends • Stunning Lake Views
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 w-full px-4"
          >
            <Link href="/menu" className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button 
                size="lg" 
                className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-[var(--color-canoe-orange)]/50 touch-manipulation"
              >
                View Menu
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                const lenis = (window as any).lenis;
                if (lenis) {
                  lenis.scrollTo('#specials', { duration: 1.5 });
                }
              }}
              className="w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-[var(--color-dark-charcoal)] font-sans uppercase tracking-wider text-xs sm:text-sm px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
            >
              Daily Specials
            </Button>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-white/80 text-xs sm:text-sm font-sans pt-4 sm:pt-6 md:pt-8 px-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Open Today</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">11:00 AM - 9:00 PM</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <a 
              href="tel:8165785700"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">(816) 578-5700</span>
            </a>
            <div className="hidden md:block w-1 h-1 rounded-full bg-white/40" />
            <a 
              href="https://goo.gl/maps/SW8XjT2ZzvXT9xUf7"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 sm:gap-2 hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95"
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Lake Lotawana, MO</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 sm:bottom-4 md:bottom-2 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span 
            className="text-white/80 text-xs font-sans uppercase tracking-wider"
            style={{ 
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}
          >
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-[var(--color-canoe-orange)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
