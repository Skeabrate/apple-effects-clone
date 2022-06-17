import React from 'react';
import AnimatedHeader from '../AnimatedHeader/AnimatedHeader';
import { StyledHeader, StyledIcon, StyledText, Wrapper } from './TwelfthArticle.styles';

interface Props {
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
  header: string;
  text: string;
  button: string;
  isAnimated?: boolean;
  isDark?: boolean;
}

const TwelfthArticle: React.FC<Props> = ({
  iconUrl,
  iconWidth,
  iconHeight,
  header,
  text,
  button,
  isAnimated,
  isDark,
}) => {
  return (
    <Wrapper $isDark={isDark ? isDark : false}>
      {isAnimated ? (
        <AnimatedHeader
          header={header}
          iconUrl={iconUrl}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
        />
      ) : (
        <>
          <StyledIcon $iconUrl={iconUrl} $iconWidth={iconWidth} $iconHeight={iconHeight} />
          <StyledHeader>
            <h2>{header}</h2>
          </StyledHeader>
        </>
      )}

      <StyledText $isDark={isDark ? isDark : false}>
        <p>{text}</p>
        <a href='#'>
          {button}
          <span>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
              <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
            </svg>
          </span>
        </a>
      </StyledText>
    </Wrapper>
  );
};

export default TwelfthArticle;
