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
  const [titleState, setTitleState] = useState<{
    initial: string;
    final: string;
    step: number;
    frameCount: number;
  }>({
    initial: '····················',
    final: 'Privacy is built in.',
    step: 0,
    frameCount: 0,
  });

  const lockAnimationData = useMemo(
    () => ({
      amountOfFrames: 36,
      singleFrameDuration: 14, // amount of items = 36, animation duration = 504px
      singleFrameWidth: 66,
      singleFrameHeight: 88,
      maxWidth: 330,
      maxHeight: 440,
    }),
    []
  );

  const titleAnimationData = useMemo(
    () => ({
      amountOfFrames: 20,
      length: titleState.final.length,
      singleFrameDuration: 25.8,
      initialTitleDomHelper: titleState.initial.substring(
        0,
        titleState.initial.length - titleState.frameCount
      ),
      finalTitleDomHelper: titleState.final.slice(0, titleState.frameCount),
    }),
    [titleState]
  );

  const { isSticky } = useContext(ScrollContext);
  const animationRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const titleAnimationHandler = useCallback(() => {
    const { length, singleFrameDuration, amountOfFrames } = titleAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight -
      animationRefgetBoundingRect.height / 2 -
      singleFrameDuration * amountOfFrames;

    const animationFinalPosition = titleState.frameCount === length;
    const animationInitialPosition = !titleState.frameCount;

    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= titleState.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= titleState.step + singleFrameDuration &&
      !animationInitialPosition;

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else {
        setTitleState((state) => ({
          ...state,
          step: state.step - singleFrameDuration,
          frameCount: state.frameCount + 1,
        }));
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else {
        setTitleState((state) => ({
          ...state,
          step: state.step + singleFrameDuration,
          frameCount: state.frameCount - 1,
        }));
      }
    }
  }, [titleAnimationData, titleState]);

  const lockAnimationHandler = useCallback(() => {
    const {
      amountOfFrames,
      singleFrameDuration,
      singleFrameWidth,
      singleFrameHeight,
      maxWidth,
      maxHeight,
    } = lockAnimationData;
    const animationRefgetBoundingRect = animationRef.current.getBoundingClientRect();

    const animationEnd =
      window.innerHeight -
      animationRefgetBoundingRect.height / 2 -
      singleFrameDuration * amountOfFrames;

    const animationInitialPosition = lockAnimationState.x === 0 && lockAnimationState.y === 0;
    const animationFinalPosition =
      lockAnimationState.x === maxWidth && lockAnimationState.y === maxHeight;

    const animationReachedMaxWidth = lockAnimationState.x === maxWidth;
    const animationReachedMinWidth = lockAnimationState.x === 0;

    const animationDirectionForwards =
      animationRefgetBoundingRect.top <= lockAnimationState.step &&
      animationRefgetBoundingRect.top >= animationEnd;
    const animationDirectionBackwards =
      animationRefgetBoundingRect.top >= lockAnimationState.step + singleFrameDuration &&
      !animationInitialPosition;

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else if (animationReachedMaxWidth) {
        setLockAnimationState((state) => ({
          x: 0,
          y: state.y + singleFrameHeight,
          step: state.step - singleFrameDuration,
        }));
      } else {
        setLockAnimationState((state) => ({
          ...state,
          x: state.x + singleFrameWidth,
          step: state.step - singleFrameDuration,
        }));
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else if (animationReachedMinWidth) {
        setLockAnimationState((state) => ({
          x: maxWidth,
          y: state.y - singleFrameHeight,
          step: state.step + singleFrameDuration,
        }));
      } else {
        setLockAnimationState((state) => ({
          ...state,
          x: state.x - singleFrameWidth,
          step: state.step + singleFrameDuration,
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
      setTitleState((state) => ({
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
        $singleFrameWidth={lockAnimationData.singleFrameWidth}
        $singleFrameHeight={lockAnimationData.singleFrameHeight}
      />
      <StyledHeader>
        <h2 ref={animationRef}>
          <span>{titleAnimationData.finalTitleDomHelper}</span>
          <span>{titleAnimationData.initialTitleDomHelper}</span>
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
