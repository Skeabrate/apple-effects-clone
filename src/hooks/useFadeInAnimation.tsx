import { useEffect } from 'react';
import gsap from 'gsap';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useFadeInAnimation = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if (ref && mediaQuery.matches) {
      ref.forEach((item) => {
        if (item.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item.current,
                start: '50% bottom',
                end: '200% bottom',
                scrub: true,
              },
            })
            .fromTo(item.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });
        }
      });
    } else if (ref) {
      ref.forEach((item) => {
        if (item.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item.current,
                start: '50% bottom',
                end: '300% bottom',
                scrub: true,
              },
            })
            .fromTo(item.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });
        }
      });
    }
  }, [...ref]);
};
