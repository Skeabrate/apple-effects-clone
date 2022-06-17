import React, { useContext, useEffect, useRef } from 'react';
import ScrollContext from 'context/ScrollContext';
import { StyledAnimatedIcon, StyledHeader } from '../TwelfthArticle/TwelfthArticle.styles';
import { useLockAnimation } from './useLockAnimation';
import { useTitleAnimation } from './useTitleAnimation';

interface Props {
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
  header: string;
}

const AnimatedHeader: React.FC<Props> = ({ iconUrl, iconWidth, iconHeight, header }) => {
  const { isSticky } = useContext(ScrollContext);
  const animationRef = useRef<HTMLDivElement>(null);
  const animationMediaQuery = '(min-height: 500px)';

  const { positionX, positionY, lockAnimationHandler } = useLockAnimation(
    animationRef,
    animationMediaQuery,
    iconWidth,
    iconHeight
  );

  const { finalTitle, initialTitle, titleAnimationHandler } = useTitleAnimation(
    header,
    animationRef,
    animationMediaQuery
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(animationMediaQuery);

    if (animationRef.current && mediaQuery.matches) {
      lockAnimationHandler();
      titleAnimationHandler();
    }
  }, [isSticky, animationRef, lockAnimationHandler, titleAnimationHandler]);

  return (
    <>
      <StyledAnimatedIcon
        $iconUrl={iconUrl}
        $positionX={positionX}
        $positionY={positionY}
        $iconWidth={iconWidth}
        $iconHeight={iconHeight}
      />
      <StyledHeader>
        <h2 ref={animationRef}>
          <span>{finalTitle}</span>
          <span>{initialTitle}</span>
        </h2>
      </StyledHeader>
    </>
  );
};

export default AnimatedHeader;
