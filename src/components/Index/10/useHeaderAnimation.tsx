import { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useHeaderAnimation = (...ref: AnimationParametr[]) => {
  const animationHandler = useCallback(
    (item: HTMLElement, x: number) => {
      const triggerItem = ref[ref.length - 1];

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: triggerItem.current,
                start: '100% bottom',
                end: '400% bottom',
                scrub: true,
              },
            })
            .fromTo(item, { x: 0 }, { x });
        },
        '(max-width: 768px)': function () {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: triggerItem.current,
                start: '100% bottom',
                end: '400% bottom',
                scrub: true,
              },
            })
            .fromTo(item, { x: 0 }, { x: x < 0 ? x + 80 : x - 40 });
        },
      });
    },
    [ref]
  );

  useEffect(() => {
    ref.forEach((item, index) => {
      if (!item.current) return;
      return index !== 1
        ? animationHandler(item.current, 80)
        : animationHandler(item.current, -120);
    });
  }, [ref, animationHandler]);
};
