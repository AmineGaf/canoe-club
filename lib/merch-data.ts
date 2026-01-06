export type MerchCategory = 'all' | 'apparel' | 'hats' | 'accessories';

export interface MerchItem {
  id: number;
  image: string;
  alt: string;
  category: MerchCategory;
  featured?: boolean;
}

export const merchItems: MerchItem[] = [
  // Apparel
  { 
    id: 1, 
    image: '/images/merch/product-1.jpeg', 
    alt: 'Canoe Club Orange Logo T-Shirt', 
    category: 'apparel', 
    featured: true 
  },
  { 
    id: 2, 
    image: '/images/merch/product-2.jpeg', 
    alt: 'Lake Life T-Shirt', 
    category: 'apparel' 
  },
  { 
    id: 3, 
    image: '/images/merch/product-3.jpeg', 
    alt: 'Navy Canoe Club Hoodie', 
    category: 'apparel', 
    featured: true 
  },
  { 
    id: 4, 
    image: '/images/merch/product-4.jpeg', 
    alt: 'Gray Lake Lotawana Hoodie', 
    category: 'apparel' 
  },
  { 
    id: 5, 
    image: '/images/merch/product-5.jpeg', 
    alt: 'Performance Dry-Fit Shirt', 
    category: 'apparel' 
  },
  { 
    id: 6, 
    image: '/images/merch/product-6.jpeg', 
    alt: 'Summer Tank Top', 
    category: 'apparel' 
  },
  
  // Hats
  { 
    id: 7, 
    image: '/images/merch/product-7.jpeg', 
    alt: 'Canoe Club Trucker Hat', 
    category: 'hats', 
    featured: true 
  },
  { 
    id: 8, 
    image: '/images/merch/product-8.jpeg', 
    alt: 'Lake Life Snapback', 
    category: 'hats' 
  },
  { 
    id: 9, 
    image: '/images/merch/product-9.jpeg', 
    alt: 'Vintage Logo Cap', 
    category: 'hats' 
  },
  { 
    id: 10, 
    image: '/images/merch/product-10.jpeg', 
    alt: 'Winter Beanie', 
    category: 'hats' 
  },
  
  // Accessories
  { 
    id: 11, 
    image: '/images/merch/product-11.jpeg', 
    alt: 'Canoe Club Koozie', 
    category: 'accessories' 
  },
  { 
    id: 12, 
    image: '/images/merch/product-12.jpeg', 
    alt: 'Logo Sticker Pack', 
    category: 'accessories' 
  },
  { 
    id: 13, 
        image: '/images/merch/product-13.jpeg', 
    alt: 'Lake Life Bandana', 
    category: 'accessories' 
  },
  { 
    id: 14, 
    image: '/images/merch/product-14.jpeg', 
    alt: 'Insulated Tumbler', 
    category: 'accessories' 
  },
  { 
    id: 15, 
    image: '/images/merch/product-15.jpeg', 
    alt: 'Canvas Tote Bag', 
    category: 'accessories' 
  },
  { 
    id: 16, 
    image: '/images/merch/product-16.jpeg', 
    alt: 'Logo Keychain', 
    category: 'accessories' 
  },
  { 
    id: 17, 
    image: '/images/merch/product-17.jpeg', 
    alt: 'Bottle Opener', 
    category: 'accessories' 
  },
];

export const categories = [
  { id: 'all', label: 'All Items', count: merchItems.length },
  { id: 'apparel', label: 'Apparel', count: merchItems.filter(i => i.category === 'apparel').length },
  { id: 'hats', label: 'Hats', count: merchItems.filter(i => i.category === 'hats').length },
  { id: 'accessories', label: 'Accessories', count: merchItems.filter(i => i.category === 'accessories').length },
];
