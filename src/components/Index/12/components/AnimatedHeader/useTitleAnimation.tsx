import React, { useCallback, useEffect, useMemo, useRef } from 'react';

export const useTitleAnimation = (
  header: string,
  animationRef: React.RefObject<HTMLDivElement> | null,
  animationMediaQuery: string
) => {
  const titleAnimationRef = useRef<{ step: number; frameCount: number }>({
    step: 0,
    frameCount: 0,
  });
  const titleAnimationData = useMemo(
    () => ({
      amountOfFrames: 20,
      frameDuration: 21.6, // animation duration = 20 * 21.6 = 432px
      initialTitle: '····················'.substring(
        0,
        '····················'.length - titleAnimationRef.current.frameCount
      ),
      finalTitle: header.slice(0, titleAnimationRef.current.frameCount),
    }),
    [titleAnimationRef.current.frameCount, header]
  );

  const titleAnimationHandler = useCallback(() => {
    if (!animationRef?.current) return;

    const { frameDuration, amountOfFrames } = titleAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight - animationRefgetBoundingRect.height / 2 - frameDuration * amountOfFrames;
    const animationFinalPosition = titleAnimationRef.current.frameCount === amountOfFrames;
    const animationInitialPosition = !titleAnimationRef.current.frameCount;
    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= titleAnimationRef.current.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= titleAnimationRef.current.step + frameDuration &&
      !animationInitialPosition;

    if (animationRefgetBoundingRect.top <= animationEnd) {
      titleAnimationRef.current.frameCount = amountOfFrames;
      titleAnimationRef.current.step = animationEnd;
    }

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else {
        titleAnimationRef.current.frameCount += 1;
        titleAnimationRef.current.step -= frameDuration;
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else {
        titleAnimationRef.current.frameCount -= 1;
        titleAnimationRef.current.step += frameDuration;
      }
    }
  }, [animationRef, titleAnimationData]);

  useEffect(() => {
    if (window.matchMedia(animationMediaQuery).matches && animationRef?.current) {
      titleAnimationRef.current.step =
        window.innerHeight - animationRef.current.getBoundingClientRect().height / 2;
    }
  }, [animationRef, animationMediaQuery]);

  return {
    finalTitle: titleAnimationData.finalTitle,
    initialTitle: titleAnimationData.initialTitle,
    titleAnimationHandler,
  };
};
