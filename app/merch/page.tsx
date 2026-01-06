'use client';

import { useState } from 'react';
import { MerchHero } from '@/components/merch/MerchHero';
import { CategoryFilter } from '@/components/merch/CategoryFilter';
import { MerchGallery } from '@/components/merch/MerchGallery';
import { VisitUsCTA } from '@/components/merch/VisitUsCTA';
import type { MerchCategory } from '@/lib/merch-data';

export default function MerchPage() {
  const [activeCategory, setActiveCategory] = useState<MerchCategory>('all');

  return (
    <>
      <MerchHero />
      <CategoryFilter 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <MerchGallery activeCategory={activeCategory} />
      <VisitUsCTA />
    </>
  );
}

