import styled, { css } from 'styled-components';

interface Props {
  $lockAnimationState: {
    x: number;
    y: number;
    step: number;
  };
  $frameWidth: number;
  $frameHeight: number;
}

export const Wrapper = styled.section`
  display: grid;
  background-color: black;
  color: white;
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

export const StyledLock = styled.p<Props>(
  ({ theme, $lockAnimationState, $frameWidth, $frameHeight }) => css`
    background-image: url('/images/privacy_icon__dlw1ars629g2_large.png');
    background-repeat: no-repeat;
    background-position: -${$lockAnimationState.x}px -${$lockAnimationState.y}px;
    width: ${$frameWidth}px;
    height: ${$frameHeight}px;
    margin-bottom: 16px;

    ${theme.mq.tablet} {
      grid-column: 1/3;
      grid-row: 1;
    }
  `
);

export const StyledHeader = styled.header`
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  margin-bottom: 16px;

  h2 {
    word-break: break-word;
    height: 120px;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headingTablet};
    line-height: 1.1;
    margin-bottom: 0;

    h2 {
      height: 200px;
    }
  }
`;

export const StyledArticle = styled.article`
  color: #86868b;

  p {
    margin-bottom: 8px;
  }

  a {
    color: #2997ff;
    text-decoration: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 20px;

    p {
      margin-bottom: 16px;
    }
  }
`;
