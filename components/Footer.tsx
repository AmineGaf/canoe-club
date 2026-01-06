import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RESTAURANT_INFO, HOURS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-charcoal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/logo.png"
              alt="Canoe Club"
              width={160}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Lake Life at Lotawana
            </p>
            <p className="text-sm text-white/60">
              Est. {RESTAURANT_INFO.established}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-sm text-white/70 hover:text-white transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-white/70 hover:text-white transition-colors">
                  Tacos
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-white/70 hover:text-white transition-colors">
                  Sandwiches
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-white/70 hover:text-white transition-colors">
                  Entrees
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-white/70 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-sunset-orange" />
                <div>
                  <p>{RESTAURANT_INFO.address}</p>
                  <p>{RESTAURANT_INFO.location}</p>
                </div>
              </div>
              <a href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} className="text-sunset-orange" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
              <a href={`mailto:${RESTAURANT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors break-all">
                <Mail size={16} className="text-sunset-orange" />
                <span className="text-xs">{RESTAURANT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 pt-2">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-sunset-orange" />
                <div className="text-xs">
                  <p>Mon: {HOURS.springSummer.monday}</p>
                  <p>Tue-Thu: {HOURS.springSummer.tuesday}</p>
                  <p>Fri-Sat: {HOURS.springSummer.friday}</p>
                  <p>Sun: {HOURS.springSummer.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Canoe Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

