import Link from "next/link";
import { Check, Gift, Percent, Calendar, Star } from "lucide-react";
import { VIP_BENEFITS, RESTAURANT_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIP Membership | Canoe Club Lakeside Grill",
  description: "Join Canoe Club VIP membership program. Get $40 monthly credit, 20% off food, BOGO drinks, and over $800 in value every year!",
};

export default function Membership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-sunset-orange via-copper to-warm-brown" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl">
            BECOME A VIP
          </h1>
          <p className="font-merriweather text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Join the Club to Get Instant Benefits!
          </p>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <div className="bg-cream rounded-2xl p-6 border-2 border-light-gray">
              <div className="text-center mb-6">
                <h2 className="font-merriweather text-3xl font-semibold mb-3 text-dark-charcoal">Standard</h2>
                <div className="text-4xl font-bold text-lake-blue mb-2">FREE</div>
                <p className="font-inter text-medium-gray leading-relaxed">Basic membership benefits</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Newsletter updates', 'Event notifications', 'Special offers'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-medium-gray font-inter">
                    <Check size={20} className="text-forest-green flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white transition-all duration-300 rounded-lg font-inter font-medium"
              >
                Sign Up Free
              </Link>
            </div>

            {/* VIP */}
            <div className="bg-gradient-to-br from-sunset-orange via-copper to-warm-brown rounded-2xl p-6 border-2 border-sunset-orange text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-sunset-orange px-3 py-1 rounded-full text-sm font-bold font-inter">
                BEST VALUE
              </div>
              <div className="text-center mb-6">
                <h2 className="font-merriweather text-3xl font-semibold mb-3">VIP</h2>
                <div className="text-4xl font-bold mb-2">&lt; $1/day</div>
                <p className="text-white/90 font-inter leading-relaxed">Over $800 in value every year!</p>
              </div>
              <ul className="space-y-3 mb-8">
                {VIP_BENEFITS.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 font-inter">
                    <Check size={20} className="flex-shrink-0 mt-1" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-white text-sunset-orange hover:bg-cream transition-all duration-300 rounded-lg font-inter font-medium shadow-lg hover:shadow-xl"
              >
                Become a VIP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-4">VIP Membership Benefits</h2>
            <p className="font-inter text-lg text-medium-gray">See what makes VIP membership so valuable</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Gift, title: '$40 Monthly Credit', desc: '$40 to spend every month on food and drinks', bgColor: 'bg-lake-blue/10', iconColor: 'text-lake-blue' },
              { icon: Percent, title: '20% Off Food', desc: 'Save 20% on all food orders, every time', bgColor: 'bg-forest-green/10', iconColor: 'text-forest-green' },
              { icon: Calendar, title: 'BOGO Drinks', desc: 'Three BOGO FREE drinks every month', bgColor: 'bg-sunset-orange/10', iconColor: 'text-sunset-orange' },
              { icon: Star, title: 'Birthday Entree', desc: 'A FREE birthday entree every year', bgColor: 'bg-copper/10', iconColor: 'text-copper' },
              { icon: Gift, title: 'Welcome Gift', desc: 'A Free Koozie when you sign up', bgColor: 'bg-warm-brown/10', iconColor: 'text-warm-brown' },
              { icon: Star, title: '$800+ Value', desc: 'Over $800 in value every year!', bgColor: 'bg-lake-blue/10', iconColor: 'text-lake-blue' },
            ].map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className={`${benefit.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon size={32} className={benefit.iconColor} />
                </div>
                <h3 className="font-merriweather text-xl font-semibold mb-3 text-dark-charcoal">{benefit.title}</h3>
                <p className="font-inter text-sm text-medium-gray leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-lake-blue to-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display-text text-4xl sm:text-5xl mb-6">Ready to Join?</h2>
          <p className="font-inter text-xl mb-8 text-white/90">
            Start enjoying instant benefits today. Visit us in person or call to sign up for your VIP membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-lake-blue hover:bg-cream transition-all duration-300 rounded-lg font-inter font-medium shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 rounded-lg font-inter font-medium"
            >
              Call {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

