'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Eye, Star, ShoppingBag } from 'lucide-react';
import { merchItems, type MerchCategory } from '@/lib/merch-data';
import { Lightbox } from './Lightbox';

interface MerchGalleryProps {
  activeCategory: MerchCategory;
}

export function MerchGallery({ activeCategory }: MerchGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeCategory === 'all' 
    ? merchItems 
    : merchItems.filter(item => item.category === activeCategory);

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredItems.length;
    setLightboxImage(filteredItems[nextIndex].image);
    setLightboxIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxImage(filteredItems[prevIndex].image);
    setLightboxIndex(prevIndex);
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(item.image, index)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-white shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-sans text-sm md:text-base font-medium text-center mb-2">
                        {item.alt}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/80">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-sans uppercase tracking-wider">
                          View
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2 + index * 0.05, type: "spring" }}
                      className="absolute top-3 right-3 bg-[var(--color-canoe-orange)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10"
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </motion.div>
                  )}

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-canoe-orange)] transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-[var(--color-canoe-orange)]/30"
            >
              <ShoppingBag className="w-16 h-16 text-[var(--color-canoe-orange)]/50 mx-auto mb-4" />
              <p className="text-gray-600 font-serif text-xl mb-2">
                No items in this category yet
              </p>
              <p className="text-gray-600/60 font-sans text-sm">
                Check back soon for new merchandise!
              </p>
            </motion.div>
          )}

          {/* Item Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 font-sans text-sm">
              Showing <span className="font-bold text-[var(--color-canoe-orange)]">{filteredItems.length}</span> items
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          alt={filteredItems[lightboxIndex].alt}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={lightboxIndex}
          totalImages={filteredItems.length}
        />
      )}
    </>
  );
}

