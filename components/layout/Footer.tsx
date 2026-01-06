'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark-charcoal)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          
          {/* Brand Section */}
          <div>
            <Image
              src="/images/canoe-club-logo.png"
              alt="Canoe Club"
              width={160}
              height={50}
              className="h-10 sm:h-12 w-auto mb-4 sm:mb-6"
            />
            <p className="text-white/70 font-serif text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Lake Life at Lotawana
              <br />
              Established 2007
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.facebook.com/canoeclubkc" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[var(--color-canoe-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://www.instagram.com/canoeclubkc" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[var(--color-canoe-orange)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Apps', 'Tacos', 'Sandwiches', 'Entrees', 'Desserts'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/menu#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors font-sans text-sm sm:text-base touch-manipulation active:scale-95 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">About</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors font-sans text-sm sm:text-base touch-manipulation active:scale-95 inline-block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors font-sans text-sm sm:text-base touch-manipulation active:scale-95 inline-block">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors font-sans text-sm sm:text-base touch-manipulation active:scale-95 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.toasttab.com/canoe-club-lees-summit/giftcards" className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors font-sans text-sm sm:text-base touch-manipulation active:scale-95 inline-block">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-6">Visit Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)] flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <a 
                    href="https://goo.gl/maps/SW8XjT2ZzvXT9xUf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95 inline-block"
                  >
                    27905 E Colbern Rd
                    <br />
                    Lake Lotawana, MO 64086
                  </a>
                </div>
              </li>
              
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)] flex-shrink-0" />
                <a 
                  href="tel:8165785700"
                  className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95 inline-block"
                >
                  (816) 578-5700
                </a>
              </li>
              
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)] flex-shrink-0" />
                <a 
                  href="mailto:info@canoeclubkc.com"
                  className="text-white/70 hover:text-[var(--color-canoe-orange)] transition-colors break-all touch-manipulation active:scale-95 inline-block"
                >
                  info@canoeclubkc.com
                </a>
              </li>

              <li className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-canoe-orange)] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-[10px] sm:text-xs min-w-0">
                  <p className="font-semibold text-white mb-0.5 sm:mb-1">Hours:</p>
                  <p>Mon: 3:00 PM - 9:00 PM</p>
                  <p>Tue-Thu: 11:00 AM - 9:00 PM</p>
                  <p>Fri-Sat: 11:00 AM - 9:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/50">
            <p className="font-sans text-center sm:text-left">
              © {new Date().getFullYear()} Canoe Club. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[var(--color-canoe-orange)] transition-colors touch-manipulation active:scale-95">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
