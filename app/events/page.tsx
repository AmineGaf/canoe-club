import Link from "next/link";
import { Clock, Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Live Music | Canoe Club Lakeside Grill",
  description: "Join us for live music performances and special events at Canoe Club. Check our calendar for upcoming shows and entertainment at Lake Lotawana.",
};

const upcomingEvents = [
  {
    date: "2025-02-15",
    title: "Live Acoustic Night",
    artist: "Local Artist",
    time: "7:00 PM - 9:00 PM",
    description: "Intimate acoustic sets with lake ambiance.",
  },
  {
    date: "2025-02-22",
    title: "Weekend Music Series",
    artist: "The Lake Band",
    time: "8:00 PM - 10:00 PM",
    description: "Upbeat evening with crowd favorites and classics.",
  },
  {
    date: "2025-03-01",
    title: "Jazz Night",
    artist: "KC Jazz Collective",
    time: "7:30 PM - 9:30 PM",
    description: "Smooth jazz, cocktails, and prime rib weekend.",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-forest-green to-dark-charcoal" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl">
            EVENTS & MUSIC
          </h1>
          <p className="font-merriweather text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Live music and special events at Lake Lotawana
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-sunset-orange font-inter font-semibold mb-4 block">
              Coming Up
            </span>
            <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-4">Upcoming Events</h2>
            <p className="font-inter text-lg text-medium-gray">Join us for unforgettable evenings</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-light-gray"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-sunset-orange rounded-lg p-6 text-white text-center min-w-[120px]">
                      <div className="text-3xl font-bold font-bebas">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm uppercase font-inter">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-merriweather text-2xl font-semibold mb-3 text-dark-charcoal leading-tight">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-medium-gray font-inter">
                      <div className="flex items-center gap-2">
                        <Music size={18} className="text-sunset-orange" />
                        <span>{event.artist}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-sunset-orange" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className="font-inter text-medium-gray mb-4 leading-relaxed">{event.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white transition-all duration-300 rounded-lg font-inter font-medium text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 sm:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-sunset-orange font-inter font-semibold mb-4 block">
                Private Events
              </span>
              <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-6">The Hearth Room</h2>
              <p className="font-inter text-lg text-medium-gray mb-6 leading-relaxed">
                The Hearth Room can be reserved for private or special events. Availability is limited. 
                Please call (816) 578-5700 for reservations.
              </p>
              <p className="font-inter text-lg text-medium-gray mb-8 leading-relaxed">
                Our Hearth Room is the private back room at Canoe Club. It can accommodate private 
                events up to 25 people, features the full dinner and drink menus, a private restroom, 
                and fireplace. The room has a cozy atmosphere with knotty pine and ambient lighting.
              </p>
              <ul className="space-y-3 mb-8 text-medium-gray font-inter">
                {['Capacity: Up to 25 people', 'Full dinner and drink menus available', 'Private restroom', 'Cozy fireplace atmosphere'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sunset-orange mt-1">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-sunset-orange text-white hover:bg-copper transition-all duration-300 rounded-lg font-inter font-medium shadow-md hover:shadow-lg"
              >
                Book Private Event
              </Link>
            </div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-warm-brown to-dark-charcoal rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                🔥
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

