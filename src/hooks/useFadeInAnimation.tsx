import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useFadeInAnimation = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    const animationHandler = (item: HTMLDivElement) => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item,
                start: '50% bottom',
                end: '200% bottom',
                scrub: true,
              },
            })
            .fromTo(item, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });
        },

        '(max-width: 768px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item,
                start: '50% bottom',
                end: '300% bottom',
                scrub: true,
              },
            })
            .fromTo(item, { y: 60, opacity: 0 }, { y: 0, opacity: 1 });
        },
      });
    };

    if (ref) {
      ref.forEach((item) => item.current && animationHandler(item.current));
    }
  }, [...ref]);
};
