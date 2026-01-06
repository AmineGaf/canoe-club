'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for lighter, smoother scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smooth but responsive
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out for lighter feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // More responsive scroll
      touchMultiplier: 1.5, // Better touch feel
      infinite: false,
      syncTouch: false,
      syncTouchLerp: 0.075, // Faster touch sync
    });

    lenisRef.current = lenis;

    // Make lenis available globally for hooks
    (window as any).lenis = lenis;

    // Optimized animation frame loop with performance check
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}

