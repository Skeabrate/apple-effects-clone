import { useEffect } from 'react';
import gsap from 'gsap';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useFadeInAnimation = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const animationHandler = (end: string, item: HTMLDivElement) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: '50% bottom',
            end: `${end} bottom`,
            scrub: true,
          },
        })
        .fromTo(item, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });
    };

    if (ref && mediaQuery.matches) {
      // desktop
      ref.forEach((item) => item.current && animationHandler('200%', item.current));
    } else if (ref) {
      // mobile
      ref.forEach((item) => item.current && animationHandler('300%', item.current));
    }
  }, [...ref]);
};
