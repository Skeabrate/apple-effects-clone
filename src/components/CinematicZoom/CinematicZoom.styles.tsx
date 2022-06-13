import styled from 'styled-components';

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

export const WrapperInner = styled.div`
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
    align-items: center;

    img {
      display: initial;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: 172%;
      object-fit: cover;
    }

    video {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      width: auto;
      height: 100%;
      object-fit: cover;
      will-change: transform;
      transform-origin: center;
    }
  }
`;
