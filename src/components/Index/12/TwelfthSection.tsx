import ScrollContext from 'context/ScrollContext';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { StyledHeader, StyledLock, StyledArticle, Wrapper } from './TwelfthSection.styles';

const TwelfthSection: React.FC = () => {
  const [animationState, setAnimationState] = useState<{
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
  }>({
    initial: '...................',
    final: 'Privacy is built in.',
  });

  const animationData = {
    singleFrameDuration: 10, // amount of items = 36, animation duration = 360px
    singleFrameWidth: 66,
    singleFrameHeight: 88,
    maxWidth: 330,
    maxHeight: 440,
  };

  const { isSticky } = useContext(ScrollContext);
  const animationRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const animationHandler = useCallback(() => {
    const { singleFrameDuration, singleFrameWidth, singleFrameHeight, maxWidth, maxHeight } =
      animationData;

    // Animation Duration State
    const animationEnd =
      window.innerHeight -
      animationRef.current.getBoundingClientRect().height / 2 -
      singleFrameDuration * 35;

    const animationInitialPosition = animationState.x === 0 && animationState.y === 0;
    const animationFinalPosition = animationState.x === maxWidth && animationState.y === maxHeight;

    const animationReachedMaxWidth = animationState.x === maxWidth;
    const animationReachedMinWidth = animationState.x === 0;

    const animationDirectionForwards =
      animationRef.current.getBoundingClientRect().top <= animationState.step &&
      animationRef.current.getBoundingClientRect().top >= animationEnd;
    const animationDirectionBackwards =
      animationRef.current.getBoundingClientRect().top >=
        animationState.step + singleFrameDuration && !animationInitialPosition;

    if (animationDirectionForwards) {
      if (animationFinalPosition) return;
      else if (animationReachedMaxWidth) {
        setAnimationState((state) => ({
          x: 0,
          y: state.y + singleFrameHeight,
          step: state.step - singleFrameDuration,
        }));
      } else {
        setAnimationState((state) => ({
          ...state,
          x: state.x + singleFrameWidth,
          step: state.step - singleFrameDuration,
        }));
      }
    } else if (animationDirectionBackwards) {
      if (animationInitialPosition) return;
      else if (animationReachedMinWidth) {
        setAnimationState((state) => ({
          x: maxWidth,
          y: state.y - singleFrameHeight,
          step: state.step + singleFrameDuration,
        }));
      } else {
        setAnimationState((state) => ({
          ...state,
          x: state.x - singleFrameWidth,
          step: state.step + singleFrameDuration,
        }));
      }
    }
  }, [animationState, animationRef]);

  useEffect(() => {
    if (animationRef.current)
      setAnimationState((state) => ({
        ...state,
        step: window.innerHeight - animationRef.current.getBoundingClientRect().height / 2,
      }));

    /* const [titleState, setTitleState] = useState<{
			initial: string;
			final: string;
		}>({
			initial: '...................',
			final: 'Privacy is built in.',
		}); */

    /* setTitleState((state) => ({
			...state,
			initial: 
		})) */
    /* console.log(titleState.initial.slice(0)) */
  }, [animationRef]);

  useEffect(() => {
    if (animationRef.current) animationHandler();
  }, [isSticky, animationRef, animationHandler]);

  return (
    <Wrapper>
      <StyledLock
        $animationState={animationState}
        $singleFrameWidth={animationData.singleFrameWidth}
        $singleFrameHeight={animationData.singleFrameHeight}
      />
      <StyledHeader>
        <h2 ref={animationRef}>{titleState.initial}</h2>
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
