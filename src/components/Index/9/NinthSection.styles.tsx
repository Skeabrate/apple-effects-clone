import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
`;

export const StyledHeader = styled.header`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  ${({ theme }) => theme.paddingMobile()};

  p {
    margin-top: 20px;
    font-weight: 500;
    font-size: 3rem;

    span {
      display: block;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 10rem auto;

    p {
      align-self: flex-end;
      font-size: 3rem;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 15rem auto;

    p {
      font-size: 4rem;
      margin-top: 4rem;
    }
  }
`;

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const StyledVideoInner = styled.div`
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

export const StyledContent = styled.div`
  ${({ theme }) => theme.paddingMobile()};
  font-weight: 500;
  width: fit-content;
  margin: 5rem auto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  div:first-child {
    color: #6e6e73;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    font-size: 24px;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    gap: 80px;

    div:first-child {
      max-width: 300px;
    }

    div:nth-child(2) {
      gap: 50px;
      max-width: 400px;
    }
  }

  /* @media (min-width: 1024px) and (min-height: 500px) {
    margin: 5rem auto;
  }

  @media (min-width: 1024px) and (min-height: 600px) {
    margin: 0rem auto;
  }

  @media (min-width: 1024px) and (min-height: 800px) {
    margin: -15vh auto 0;
  } */
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-weight: 500;
  font-size: 24px;
  padding: 40px 20px;
  margin: 60px 20px 20px;
  background-color: #f5f5f7;
  color: ${({ theme }) => theme.colors.black};

  p {
    line-height: 1.1;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 100px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    font-size: 16px;

    svg {
      width: 18px;
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: 40px;
    align-items: center;
    padding: 100px;
    gap: 50px;

    p {
      width: 400px;
      text-align: center;
      line-height: 1;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 950px;
    margin: 15rem auto;
  }
`;
