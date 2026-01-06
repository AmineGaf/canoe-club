import Link from "next/link";
import { Camera, Utensils, Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Canoe Club Lakeside Grill",
  description: "View photos of our delicious food, beautiful lakeside location, live music events, and the warm atmosphere at Canoe Club.",
};

const galleryCategories = [
  { title: "Food & Drinks", icon: Utensils, items: 12, color: "from-sunset-orange to-copper" },
  { title: "Ambiance", icon: Camera, items: 15, color: "from-lake-blue to-forest-green" },
  { title: "Live Music", icon: Music, items: 10, color: "from-warm-brown to-sunset-orange" },
  { title: "Lake Views", icon: Camera, items: 8, color: "from-forest-green to-lake-blue" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-forest-green to-dark-charcoal" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl">
            GALLERY
          </h1>
          <p className="font-merriweather text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            See what makes Canoe Club special
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-4">Explore Our Gallery</h2>
            <p className="font-inter text-lg text-medium-gray">Food, atmosphere, events, and more</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryCategories.map((category, index) => (
              <div
                key={index}
                className={`relative h-64 rounded-xl overflow-hidden bg-gradient-to-br ${category.color} cursor-pointer group hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 z-10">
                  <category.icon size={32} className="mb-4" />
                  <h3 className="font-merriweather text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="font-inter text-sm text-white/90">{category.items} photos</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-lake-blue to-forest-green group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  📸
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-lake-blue to-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display-text text-4xl sm:text-5xl mb-6">Experience It Yourself</h2>
          <p className="font-inter text-xl mb-8 text-white/90">
            Photos can only capture so much. Visit us at Lake Lotawana to experience 
            the full Canoe Club atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-lake-blue hover:bg-cream transition-all duration-300 rounded-lg font-inter font-medium shadow-lg hover:shadow-xl"
            >
              Make a Reservation
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 rounded-lg font-inter font-medium"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

