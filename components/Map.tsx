'use client';

import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapProps {
  height?: string;
  className?: string;
  showDirectionsButton?: boolean;
  animate?: boolean;
}

export function Map({ 
  height = '500px', 
  className = '',
  showDirectionsButton = true,
  animate = true 
}: MapProps) {
  const mapContent = (
    <div 
      className={`relative rounded-3xl overflow-hidden shadow-2xl group ${className}`}
      style={{ height }}
    >
      {/* Google Maps Embed with Pin - Using search query for better pin display */}
      <iframe
        src="https://www.google.com/maps?q=27905+E+Colbern+Rd,+Lake+Lotawana,+MO+64086&output=embed&zoom=15"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
        title="Canoe Club Location"
      />
      
      {/* Overlay button */}
      {showDirectionsButton && (
        <div className="absolute bottom-6 left-6 right-6">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Canoe+Club+Restaurant,+27905+E+Colbern+Rd,+Lake+Lotawana,+MO+64086"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="w-full bg-white hover:bg-[var(--color-canoe-orange)] text-[var(--color-dark-charcoal)] hover:text-white shadow-xl transition-all duration-300"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </a>
        </div>
      )}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {mapContent}
      </motion.div>
    );
  }

  return mapContent;
}

