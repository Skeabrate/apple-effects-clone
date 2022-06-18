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
  const animationHandler = useCallback(
    (elementType: string, itemCurrent: HTMLElement, trigger: HTMLElement) => {
      switch (elementType) {
        case 'heading':
          return gsap
            .timeline({
              scrollTrigger: {
                trigger,
                start: '100% bottom',
                end: '300% bottom',
                scrub: true,
              },
            })
            .fromTo(itemCurrent, { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
        case 'line':
          return gsap
            .timeline({
              scrollTrigger: {
                trigger,
                start: '300% bottom',
                end: '1000% bottom',
                scrub: true,
              },
            })
            .fromTo(itemCurrent, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1 });
        case 'description':
          return gsap
            .timeline({
              scrollTrigger: {
                trigger,
                start: '125% bottom',
                end: '600% bottom',
                scrub: true,
              },
            })
            .fromTo(itemCurrent, { y: 80, opacity: 0 }, { y: 0, opacity: 1 });
      }
    },
    []
  );

  useEffect(() => {
    for (const key in ref) {
      const innerArr = ref[key as keyof typeof ref];
      let trigger = innerArr[0].current;

      innerArr.forEach((item, index) => {
        if (!item.current || !trigger) return null;

        if (index === 0) animationHandler('heading', item.current, trigger);
        else if (index === 1) animationHandler('line', item.current, trigger);
        else if (index === 2) animationHandler('description', item.current, trigger);
      });
    }
  }, [ref, animationHandler]);
};
