import { RESTAURANT_INFO } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Canoe Club Lakeside Grill",
  description: "Learn about Canoe Club's history, our owner's story, and our commitment to providing the best lakeside dining experience at Lake Lotawana, Missouri.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/indoor-image.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-forest-green to-dark-charcoal" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl">
            ABOUT US
          </h1>
          <p className="font-merriweather text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Jackson County's Favorite Gathering Place Since {RESTAURANT_INFO.established}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest text-sunset-orange font-inter font-semibold mb-4 block">
                Our Story
              </span>
              <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-6">
                Lake Life at Lotawana
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-inter text-lg text-medium-gray leading-relaxed">
                Canoe Club has been serving the Lake Lotawana community since {RESTAURANT_INFO.established}, 
                bringing together the best of lakeside dining with a warm, Colorado lodge atmosphere. 
                What started as a vision to create a unique gathering place has become Jackson County's 
                favorite destination for great food, live music, and unforgettable experiences.
              </p>
              <p className="font-inter text-lg text-medium-gray leading-relaxed">
                Our restaurant combines the rustic charm of a mountain lodge with the relaxed vibe of 
                lakeside living. We believe that great food brings people together, and our menu reflects 
                our commitment to quality, freshness, and flavor. From our famous Phish Tacos to our 
                weekend Prime Rib specials, every dish is crafted with care and attention to detail.
              </p>
              <p className="font-inter text-lg text-medium-gray leading-relaxed">
                At Canoe Club, we're more than just a restaurant—we're a community hub where families 
                gather, friends reconnect, and memories are made. Whether you're joining us for happy hour, 
                a family dinner, or a special event, we're committed to making every visit exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="py-20 sm:py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-sunset-orange font-inter font-semibold mb-4 block">
                Meet the Owner
              </span>
              <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-6">
                Nick Calkins
              </h2>
              <p className="font-inter text-lg text-medium-gray mb-6 leading-relaxed">
                Canoe Club is owned and operated by Nick Calkins, who has been dedicated to creating 
                an exceptional dining experience for the Lake Lotawana community. With a passion for 
                great food and genuine hospitality, Nick has built Canoe Club into a beloved local institution.
              </p>
              <p className="font-inter text-lg text-medium-gray leading-relaxed">
                From the kitchen to the dining room, every aspect of Canoe Club reflects Nick's 
                commitment to quality, community, and creating a welcoming atmosphere where everyone 
                feels at home.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-lake-blue to-forest-green rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                👨‍🍳
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl sm:text-5xl text-dark-charcoal mb-4">Our Values</h2>
            <p className="font-inter text-lg text-medium-gray">What makes Canoe Club special</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍽️', title: 'Quality Food', desc: 'Fresh ingredients, original recipes, and dishes made with care' },
              { icon: '🏞️', title: 'Lakeside Atmosphere', desc: 'Beautiful views and a relaxed, welcoming environment' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'A place where families can gather and create memories' },
              { icon: '🎵', title: 'Live Entertainment', desc: 'Regular live music and events for the community' },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 bg-cream rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-merriweather text-xl font-semibold mb-3 text-dark-charcoal">{value.title}</h3>
                <p className="font-inter text-sm text-medium-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

