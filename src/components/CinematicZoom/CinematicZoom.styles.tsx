import styled, { css } from 'styled-components';

interface VideoProps {
  $isWide: boolean;
}

export const WrapperOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const WrapperInner = styled.div<VideoProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: none;
  }

  video {
    width: 100%;
    height: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    position: relative;

    img {
      display: initial;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: 172%;
      object-fit: contain;
    }

    video {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      will-change: transform;
      transform-origin: center;
      min-height: 100%;
      min-width: 100%;

      ${({ $isWide }) => {
        if ($isWide)
          return css`
            width: auto;
            height: 100%;
            object-fit: cover;
          `;
        else
          return css`
            width: 100%;
            height: auto;
            object-fit: contain;
          `;
      }}
    }
  }
`;
