import { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface AnimationParametr {
  current: HTMLDivElement | null;
}

export const useContentAnimation = (animationRefs: {
  bigTitleAnimation: AnimationParametr[];
  smallTitleAnimation: AnimationParametr[];
}) => {
  const animationHandler = useCallback((item: HTMLDivElement, stagger: number, y: string) => {
    ScrollTrigger.matchMedia({
      '(min-width: 768px)': function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: `${75 + stagger}% bottom`,
              end: `${200 + stagger}% bottom`,
              scrub: true,
            },
          })
          .fromTo(item, { y, opacity: 0 }, { y: 0, opacity: 1 });
      },

      '(max-width: 768px)': function () {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: '200% bottom',
              end: '700% bottom',
              scrub: true,
            },
          })
          .fromTo(item, { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
      },
    });
  }, []);

  useEffect(() => {
    // add animations after setMargin for cinematicZoom section
    setTimeout(() => {
      animationRefs.bigTitleAnimation.forEach(
        (item) => item.current && animationHandler(item.current, 0, '40')
      );

      animationRefs.smallTitleAnimation.forEach(
        (item) => item.current && animationHandler(item.current, 30, '30')
      );
    }, 500);
  }, [animationRefs.bigTitleAnimation, animationRefs.smallTitleAnimation]);
};
