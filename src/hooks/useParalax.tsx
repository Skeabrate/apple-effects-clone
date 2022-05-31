import { useEffect } from 'react';
import gsap from 'gsap';

interface AnimationParametr {
  current: HTMLDivElement | HTMLImageElement | null;
}

export const useParalax = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if (ref && mediaQuery.matches) {
      ref.forEach(({ current }, index) => {
        if (current && index % 2 === 0) {
          gsap.to(current, {
            yPercent: -25,
            ease: 'none',
            scrollTrigger: {
              trigger: current,
              start: '0% bottom',
              scrub: true,
            },
          });
        }
      });
    } else if (ref) {
      ref.forEach(({ current }) => {
        if (current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: current,
                start: '10% bottom',
                end: 'center bottom',
                scrub: true,
              },
            })
            .fromTo(current, { y: 80 }, { y: 0 });
        }
      });
    }
  }, [...ref]);
};
