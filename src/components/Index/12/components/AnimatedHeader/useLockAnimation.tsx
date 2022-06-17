import React, { useCallback, useEffect, useMemo, useRef } from 'react';

export const useLockAnimation = (
  animationRef: React.RefObject<HTMLDivElement> | null,
  animationMediaQuery: string,
  iconWidth: number,
  iconHeight: number
) => {
  const lockAnimationRef = useRef<{ x: number; y: number; step: number }>({
    x: 0,
    y: 0,
    step: 0,
  });
  const lockAnimationData = useMemo(
    () => ({
      amountOfFrames: 36,
      frameDuration: 12, // animation duration = 36 * 12 = 432px
      frameWidth: iconWidth,
      frameHeight: iconHeight,
      maxWidth: iconWidth * 5,
      maxHeight: iconHeight * 5,
    }),
    [iconWidth, iconHeight]
  );

  const lockAnimationHandler = useCallback(() => {
    if (!animationRef?.current) return;

    const { amountOfFrames, frameDuration, frameWidth, frameHeight, maxWidth, maxHeight } =
      lockAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight - animationRefgetBoundingRect.height / 2 - frameDuration * amountOfFrames;
    const animationInitialPosition =
      lockAnimationRef.current.x === 0 && lockAnimationRef.current.y === 0;
    const animationFinalPosition =
      lockAnimationRef.current.x === maxWidth && lockAnimationRef.current.y === maxHeight;
    const animationReachedMaxWidth = lockAnimationRef.current.x === maxWidth;
    const animationReachedMinWidth = lockAnimationRef.current.x === 0;
    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= lockAnimationRef.current.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= lockAnimationRef.current.step + frameDuration &&
      !animationInitialPosition;

    if (animationRefgetBoundingRect.top <= animationEnd) {
      lockAnimationRef.current.x = maxWidth;
      lockAnimationRef.current.y = maxHeight;
      lockAnimationRef.current.step = animationEnd;
    }

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else if (animationReachedMaxWidth) {
        lockAnimationRef.current.x = 0;
        lockAnimationRef.current.y += frameHeight;
        lockAnimationRef.current.step -= frameDuration;
      } else {
        lockAnimationRef.current.x += frameWidth;
        lockAnimationRef.current.step -= frameDuration;
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else if (animationReachedMinWidth) {
        lockAnimationRef.current.x = maxWidth;
        lockAnimationRef.current.y -= frameHeight;
        lockAnimationRef.current.step += frameDuration;
      } else {
        lockAnimationRef.current.x -= frameWidth;
        lockAnimationRef.current.step += frameDuration;
      }
    }
  }, [animationRef, lockAnimationData]);

  useEffect(() => {
    if (window.matchMedia(animationMediaQuery).matches && animationRef?.current) {
      lockAnimationRef.current.step =
        window.innerHeight - animationRef.current.getBoundingClientRect().height / 2;
    }
  }, [animationRef, animationMediaQuery]);

  return {
    positionX: lockAnimationRef.current.x,
    positionY: lockAnimationRef.current.y,
    lockAnimationHandler,
  };
};
