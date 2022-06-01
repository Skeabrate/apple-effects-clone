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

  img {
    display: none;
  }

  video {
    width: 100%;
    height: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;

export const StyledVideoInner = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: initial;
      position: absolute;
      top: -29%;
      width: auto;
      height: 170%;
    }

    video {
      width: 100%;
      height: 100%;
      will-change: transform;
      transform-origin: center;
      object-fit: cover;
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
    margin: 0 auto; /* needs change */

    div:first-child {
      max-width: 300px;
    }

    div:nth-child(2) {
      gap: 50px;
      max-width: 400px;
    }
  }
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
