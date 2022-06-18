import styled, { css } from 'styled-components';

interface ThemeProps {
  $isDark: boolean;
}

interface IconProps {
  $iconUrl: string;
  $iconWidth: number;
  $iconHeight: number;
}

interface AnimatedIconProps extends IconProps {
  $positionX: number;
  $positionY: number;
}

export const Wrapper = styled.article<ThemeProps>`
  display: grid;
  background-color: ${({ $isDark }) => ($isDark ? 'black' : '#f5f5f7')};
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};
  font-weight: 500;
  font-size: 1.9rem;
  ${({ theme }) => theme.paddingMobile()};
  padding-block: 6rem;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 400px 1fr;
    column-gap: 4rem;
    place-content: center;
    height: 700px;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 400px 400px;
    column-gap: 16rem;
  }
`;

const IconHelper = (iconUrl: string, iconWidth: number, iconHeight: number) => css`
  background-image: url(${iconUrl});
  background-repeat: no-repeat;
  width: ${iconWidth}px;
  height: ${iconHeight}px;
  margin-bottom: 16px;

  ${({ theme }) => theme.mq.tablet} {
    grid-column: 1/3;
    grid-row: 1;
  }
`;

export const StyledIcon = styled.p<IconProps>`
  background-position: 0 0;
  ${({ $iconUrl, $iconWidth, $iconHeight }) => IconHelper($iconUrl, $iconWidth, $iconHeight)};
`;

export const StyledAnimatedIcon = styled.p<AnimatedIconProps>`
  background-position: ${({ $positionX, $positionY }) => `-${$positionX}px -${$positionY}px`};
  ${({ $iconUrl, $iconWidth, $iconHeight }) => IconHelper($iconUrl, $iconWidth, $iconHeight)};
`;

export const StyledHeader = styled.header`
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  margin-bottom: 16px;

  h2 {
    word-break: break-word;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: 44px;
    line-height: 1.1;
    margin-bottom: 0;

    h2 {
      height: 200px;
    }
  }
`;

export const StyledText = styled.div<ThemeProps>`
  color: ${({ $isDark }) => ($isDark ? '#86868b' : '#6e6e73')};

  p {
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 20px;

    p {
      margin-bottom: 16px;
    }
  }
`;
