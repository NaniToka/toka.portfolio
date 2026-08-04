import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [shouldReduceMotion, setShouldReduceMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return shouldReduceMotion;
}
