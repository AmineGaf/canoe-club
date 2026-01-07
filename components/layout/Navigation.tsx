'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/merch', label: 'Merch' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Pages with light backgrounds where navbar should be dark from start
const lightBackgroundPages = ['/merch', '/menu', '/about', '/contact', '/events'];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Check if current page has light background
  const isLightBackground = lightBackgroundPages.some(page => pathname?.startsWith(page));
  
  // Navbar should be dark (scrolled state) on light background pages or when actually scrolled
  const shouldShowDarkNav = isLightBackground || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          shouldShowDarkNav
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <Image
                src="/images/canoe-club-logo.png"
                alt="Canoe Club"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-sans text-sm uppercase tracking-wider font-medium transition-colors duration-300 group",
                    shouldShowDarkNav
                      ? "text-[var(--color-dark-charcoal)] hover:text-[var(--color-canoe-orange)]"
                      : "text-white hover:text-[var(--color-canoe-orange)]"
                  )}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-canoe-orange)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:8165785700"
                className={cn(
                  "flex items-center gap-2 font-sans text-sm font-medium transition-colors",
                  shouldShowDarkNav ? "text-[var(--color-dark-charcoal)]" : "text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                (816) 578-5700
              </a>
              
              <a
                href="https://www.toasttab.com/canoe-club-lees-summit/giftcards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider shadow-lg shadow-[var(--color-canoe-orange)]/30 hover:shadow-xl hover:shadow-[var(--color-canoe-orange)]/40 transition-all duration-300 hover:scale-105"
                >
                  Gift Cards
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors z-50",
                shouldShowDarkNav ? "text-[var(--color-dark-charcoal)]" : "text-white"
              )}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-dark-navy)] z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--color-dark-charcoal)] shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 sm:pt-24 px-6 sm:px-8 pb-6 sm:pb-8">
                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-display text-3xl sm:text-4xl text-white hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95 py-2"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="space-y-4 mt-auto"
                >
                  <a 
                    href="tel:8165785700"
                    className="flex items-center gap-3 text-white font-sans text-base sm:text-lg hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95 py-2"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>(816) 578-5700</span>
                  </a>
                  
                  <a
                    href="https://www.toasttab.com/canoe-club-lees-summit/giftcards"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 touch-manipulation active:scale-95"
                    >
                      Gift Cards
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

