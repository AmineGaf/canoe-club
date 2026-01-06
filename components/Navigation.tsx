'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RESTAURANT_INFO } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-light-gray/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-28">
            <Link href="/" className="flex items-center z-10 group">
              <Image
                src="/logo.png"
                alt="Canoe Club"
                width={200}
                height={62}
                className="h-16 w-auto transition-all duration-300 group-hover:opacity-90"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl",
                      scrolled
                        ? isActive
                          ? "text-sunset-orange bg-[var(--color-cream)]"
                          : "text-[var(--color-dark-charcoal)] hover:text-sunset-orange hover:bg-[var(--color-cream)]/60"
                        : isActive
                        ? "text-white bg-white/15 backdrop-blur-sm"
                        : "text-white/95 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sunset-orange"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl",
                  scrolled
                    ? "text-[var(--color-dark-charcoal)] hover:text-sunset-orange hover:bg-[var(--color-cream)]"
                    : "text-white/95 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                )}
              >
                <Phone size={18} />
                <span className="hidden xl:inline">{RESTAURANT_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-sunset-orange text-white hover:bg-copper transition-all duration-300 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Table
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-3 rounded-xl transition-all duration-300",
                scrolled
                  ? "text-[var(--color-dark-charcoal)] hover:bg-[var(--color-cream)]"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-light-gray">
                  <Image
                    src="/logo.png"
                    alt="Canoe Club"
                    width={160}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[var(--color-dark-charcoal)] hover:bg-[var(--color-cream)] rounded-xl transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-5 py-3.5 text-base font-semibold rounded-xl transition-all duration-300",
                            isActive
                              ? "text-sunset-orange bg-[var(--color-cream)]"
                              : "text-[var(--color-dark-charcoal)] hover:text-sunset-orange hover:bg-[var(--color-cream)]/50"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
                <div className="p-6 border-t border-light-gray space-y-3">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 px-5 py-3.5 bg-[var(--color-cream)] rounded-xl text-[var(--color-dark-charcoal)] hover:bg-sunset-orange hover:text-white transition-all duration-300 font-semibold"
                  >
                    <Phone size={20} />
                    <span>{RESTAURANT_INFO.phone}</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-5 py-3.5 bg-sunset-orange text-white hover:bg-copper text-center rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  >
                    Book Table
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
