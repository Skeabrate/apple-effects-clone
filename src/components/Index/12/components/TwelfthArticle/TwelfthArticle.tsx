import React from 'react';
import AnimatedHeader from '../AnimatedHeader/AnimatedHeader';
import BlueLink from 'components/BlueLink/BlueLink';
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
        <BlueLink label={button} isDark={isDark} />
      </StyledText>
    </Wrapper>
  );
};

export default TwelfthArticle;
