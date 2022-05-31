import { useEffect } from 'react';
import gsap from 'gsap';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useFadeInAnimation = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    if (ref) {
      ref.forEach((item) => {
        if (item.current) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item.current,
                start: '40% bottom',
                end: 'bottom bottom',
                scrub: true,
              },
            })
            .fromTo(item.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 });
        }
      });
    }
  }, [...ref]);
};
