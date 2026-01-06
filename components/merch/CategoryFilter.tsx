'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { categories, type MerchCategory } from '@/lib/merch-data';

interface CategoryFilterProps {
  activeCategory: MerchCategory;
  onCategoryChange: (category: MerchCategory) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="bg-white border-b border-[var(--color-canoe-orange)]/10 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryChange(category.id as MerchCategory)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative px-6 py-3 rounded-full font-sans text-sm uppercase tracking-wider font-semibold transition-all duration-300 overflow-hidden",
                activeCategory === category.id
                  ? "bg-[var(--color-canoe-orange)] text-white shadow-lg shadow-[var(--color-canoe-orange)]/30"
                  : "bg-white border-2 border-[var(--color-canoe-orange)]/20 text-[var(--color-dark-charcoal)] hover:border-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-orange)]/5"
              )}
            >
              {/* Active indicator */}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-[var(--color-canoe-orange)]"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-[var(--color-canoe-orange)]/10 text-[var(--color-canoe-orange)]"
                )}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

