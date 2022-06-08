import { useCallback, useEffect } from 'react';
import gsap from 'gsap';

interface ArrayOfRefs {
  current: HTMLElement | null;
}

export const useContentAnimation = (ref: {
  first: ArrayOfRefs[];
  second: ArrayOfRefs[];
  third: ArrayOfRefs[];
}) => {
  const contentAnimationHandler = useCallback((itemCurrent: HTMLElement) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: itemCurrent,
          start: '100% bottom',
          end: '200% bottom',
          scrub: true,
        },
      })
      .fromTo(itemCurrent, { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  const lineAnimationHandler = useCallback((itemCurrent: HTMLElement, trigger: HTMLElement) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          start: '150% bottom',
          end: '300% bottom',
          scrub: true,
        },
      })
      .fromTo(itemCurrent, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1 });
  }, []);

  useEffect(() => {
    for (const key in ref) {
      const innerArr = ref[key as keyof typeof ref];
      let desctiptionRef = innerArr[1].current;

      innerArr.map((item, index) => {
        if (!item.current) return null;

        // line animation, trigger - heading
        if (index === innerArr.length - 1 && desctiptionRef) {
          lineAnimationHandler(item.current, desctiptionRef);
        } else contentAnimationHandler(item.current);
      });
    }
  }, [ref, contentAnimationHandler, lineAnimationHandler]);
};
