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
  background-color: ${({ theme, $isDark }) => ($isDark ? 'black' : theme.colors.grey3)};
  color: ${({ $isDark }) => ($isDark ? 'white' : 'black')};
  font-weight: 500;
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
  ${({ theme }) => theme.fontSize.font32()};
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
  color: ${({ theme, $isDark }) => ($isDark ? theme.colors.grey2 : theme.colors.grey1)};

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
