import { useCallback, useRef, useState } from 'react';

export const useCinematicZoomOpacity = () => {
  const [opacity, setOpacity] = useState<number>(0);

  const opacityAnimationStartPoint = 0.8;
  const opacityAnimationSingleStepValue = 0.02;
  const roundNumberHandler = (number: number) => +number.toFixed(2);

  const opacityAnimationStep = useRef<number>(opacityAnimationStartPoint);

  const opacityAnimationHandler = useCallback((progress: number) => {
    if (progress >= opacityAnimationStep.current) {
      opacityAnimationStep.current = roundNumberHandler(
        opacityAnimationStep.current + opacityAnimationSingleStepValue
      );
      setOpacity((state) => roundNumberHandler(state + 0.1));
    } else if (
      progress <=
        roundNumberHandler(opacityAnimationStep.current - opacityAnimationSingleStepValue) &&
      progress >= opacityAnimationStartPoint
    ) {
      opacityAnimationStep.current = roundNumberHandler(
        opacityAnimationStep.current - opacityAnimationSingleStepValue
      );
      setOpacity((state) => roundNumberHandler(state - 0.1));
    }
    if (progress <= 1 && progress >= 0.95) setOpacity(1);
  }, []);

  return { opacity, opacityAnimationHandler };
};
