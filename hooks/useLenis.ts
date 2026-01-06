'use client';

import { useEffect } from 'react';

export function useLenis(callback: (lenis: any) => void, deps: any[] = []) {
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      callback(lenis);
    }
  }, deps);
}

export function scrollTo(target: string | number, options?: any) {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(target, options);
  }
}

