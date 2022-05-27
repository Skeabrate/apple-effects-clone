import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const useParalax = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-height: 820px) and (min-width: 768px)');
    const currRef = ref.current;

    if (mediaQuery.matches && currRef) {
      ScrollTrigger.create({
        trigger: currRef,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    }
  }, [ref]);
};
