import ScrollContext from 'context/ScrollContext';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { StyledHeader, StyledLock, StyledArticle, Wrapper } from './TwelfthSection.styles';

const TwelfthSection: React.FC = () => {
  const [lockAnimationState, setLockAnimationState] = useState<{
    x: number;
    y: number;
    step: number;
  }>({
    x: 0,
    y: 0,
    step: 0,
  });
  const [titleAnimationState, setTitleAnimationState] = useState<{
    step: number;
    frameCount: number;
  }>({
    step: 0,
    frameCount: 0,
  });

  const lockAnimationData = useMemo(
    () => ({
      amountOfFrames: 36,
      frameDuration: 14, // animation duration = 36 * 14 = 504px
      frameWidth: 66,
      frameHeight: 88,
      maxWidth: 330,
      maxHeight: 440,
    }),
    []
  );

  const titleAnimationData = useMemo(
    () => ({
      amountOfFrames: 20,
      frameDuration: 25.2, // animation duration = 20 * 25.2 = 504px
      initialTitle: '····················'.substring(
        0,
        '····················'.length - titleAnimationState.frameCount
      ),
      finalTitle: 'Privacy is built in.'.slice(0, titleAnimationState.frameCount),
    }),
    [titleAnimationState]
  );

  const { isSticky } = useContext(ScrollContext);
  const animationRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const titleAnimationHandler = useCallback(() => {
    const { frameDuration, amountOfFrames } = titleAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight - animationRefgetBoundingRect.height / 2 - frameDuration * amountOfFrames;

    const animationFinalPosition = titleAnimationState.frameCount === amountOfFrames;
    const animationInitialPosition = !titleAnimationState.frameCount;

    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= titleAnimationState.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= titleAnimationState.step + frameDuration &&
      !animationInitialPosition;

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else {
        setTitleAnimationState((state) => ({
          ...state,
          step: state.step - frameDuration,
          frameCount: state.frameCount + 1,
        }));
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else {
        setTitleAnimationState((state) => ({
          ...state,
          step: state.step + frameDuration,
          frameCount: state.frameCount - 1,
        }));
      }
    }
  }, [titleAnimationData, titleAnimationState]);

  const lockAnimationHandler = useCallback(() => {
    const { amountOfFrames, frameDuration, frameWidth, frameHeight, maxWidth, maxHeight } =
      lockAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight - animationRefgetBoundingRect.height / 2 - frameDuration * amountOfFrames;

    const animationInitialPosition = lockAnimationState.x === 0 && lockAnimationState.y === 0;
    const animationFinalPosition =
      lockAnimationState.x === maxWidth && lockAnimationState.y === maxHeight;

    const animationReachedMaxWidth = lockAnimationState.x === maxWidth;
    const animationReachedMinWidth = lockAnimationState.x === 0;

    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= lockAnimationState.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= lockAnimationState.step + frameDuration &&
      !animationInitialPosition;

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else if (animationReachedMaxWidth) {
        setLockAnimationState((state) => ({
          x: 0,
          y: state.y + frameHeight,
          step: state.step - frameDuration,
        }));
      } else {
        setLockAnimationState((state) => ({
          ...state,
          x: state.x + frameWidth,
          step: state.step - frameDuration,
        }));
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else if (animationReachedMinWidth) {
        setLockAnimationState((state) => ({
          x: maxWidth,
          y: state.y - frameHeight,
          step: state.step + frameDuration,
        }));
      } else {
        setLockAnimationState((state) => ({
          ...state,
          x: state.x - frameWidth,
          step: state.step + frameDuration,
        }));
      }
    }
  }, [lockAnimationState, animationRef, lockAnimationData]);

  useEffect(() => {
    if (animationRef.current) {
      const initialStep =
        window.innerHeight - animationRef.current.getBoundingClientRect().height / 2;

      setLockAnimationState((state) => ({
        ...state,
        step: initialStep,
      }));
      setTitleAnimationState((state) => ({
        ...state,
        step: initialStep,
      }));
    }
  }, [animationRef]);

  useEffect(() => {
    if (animationRef.current) {
      lockAnimationHandler();
      titleAnimationHandler();
    }
  }, [isSticky, animationRef, lockAnimationHandler, titleAnimationHandler]);

  return (
    <Wrapper>
      <StyledLock
        $lockAnimationState={lockAnimationState}
        $frameWidth={lockAnimationData.frameWidth}
        $frameHeight={lockAnimationData.frameHeight}
      />
      <StyledHeader>
        <h2 ref={animationRef}>
          <span>{titleAnimationData.finalTitle}</span>
          <span>{titleAnimationData.initialTitle}</span>
        </h2>
      </StyledHeader>

      <StyledArticle>
        <p>
          iPhone helps put you in control of your personal information. For example, when you’re
          browsing, Safari intelligently helps block trackers from profiling you and shows you which
          ones have been blocked in your Privacy Report. And the list goes on.
        </p>
        <a href='#'>
          Learn more about Apple and privacy <span>arrow SVG</span>
        </a>
      </StyledArticle>
    </Wrapper>
  );
};

export default React.memo(TwelfthSection);
