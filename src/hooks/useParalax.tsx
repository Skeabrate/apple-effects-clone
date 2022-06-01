import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface AnimationParametr {
  current: HTMLDivElement | HTMLImageElement | null;
}

export const useParalax = (...ref: AnimationParametr[]) => {
  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
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
      },
      '(max-width: 768px)': function () {
        ref.forEach(({ current }) => {
          if (current) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: current,
                  start: '0% bottom',
                  end: 'center bottom',
                  scrub: true,
                },
              })
              .fromTo(current, { y: 70 }, { y: 0 });
          }
        });
      },
    });
  }, [...ref]);
};
