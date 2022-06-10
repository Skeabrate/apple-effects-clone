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

  const { isSticky } = useContext(ScrollContext);
  const animationRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const animationHandler = useCallback(() => {
    // Animation Properties
    const singleFrameDuration = 10; // amount of items = 36, animation duration = 360px;
    const singleFrameWidth = 66;
    const singleFrameHeight = 88;
    const maxWidth = 330;
    const maxHeight = 440;

    // Animation Duration State
    const isAnimationDirectionForwards =
      animationRef.current.getBoundingClientRect().top <= animationState.step;
    const isAnimationDirectionBackwards =
      animationRef.current.getBoundingClientRect().top >= animationState.step + singleFrameDuration;
    const animationInitialState = animationState.x === 0 && animationState.y === 0;
    const animationFinalState = animationState.x === maxWidth && animationState.y === maxHeight;
    const animationReachedMaxWidth = animationState.x === maxWidth;
    const animationReachedMinWidth = animationState.x === 0;

    if (isAnimationDirectionForwards) {
      if (animationFinalState) return;
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
    } else if (isAnimationDirectionBackwards) {
      if (animationInitialState) return;
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
  }, [animationRef]);

  useEffect(() => {
    if (animationRef.current) animationHandler();
  }, [isSticky, animationRef, animationHandler]);

  return (
    <Wrapper>
      <StyledLock $animationState={animationState} />
      <StyledHeader>
        <h2 ref={animationRef}>Privacy is built in.{/* ....................*/}</h2>
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
