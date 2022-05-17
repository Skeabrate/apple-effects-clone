import styled, { keyframes } from 'styled-components';

interface IndexProps {
  $isHighlighted?: number;
}

export const Wrapper = styled.main`
  max-width: 2000px;
  margin: 0 auto;
`;

const appearH1 = keyframes`
	0% {
		opacity: 0;
	} 50% {
		opacity:1;
	} 100% {
		opacity: 0;
	}
`;
const appearDiv = keyframes`
	from {
		opacity:0;
	} to {
		opacity:1;
	}
`;

export const FirstSection = styled.section<IndexProps>`
  position: relative;
  overflow: hidden;
  min-height: 600px;
  max-height: 1000px;
  width: 100%;
  z-index: -1;

  ${({ theme }) => theme.mq.tablet} {
    min-height: 700px;
  }

  ${({ theme }) => theme.mq.desktop} {
    min-height: 800px;
  }

  ${({ theme }) => theme.mq.huge} {
    min-height: 900px;
  }
`;

export const StyledFirstVideo = styled.div<IndexProps>`
  header {
    width: fit-content;
    text-align: center;
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    line-height: 1.5;

    h1 {
      position: absolute;
      font-size: 2rem;
      opacity: 0;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      animation: ${appearH1} 3s forwards;
      animation-delay: 0.5s;
    }

    div {
      opacity: 0;
      animation: ${appearDiv} 1s forwards;
      animation-delay: 3.6s;

      p {
        font-size: 2rem;
        font-weight: bold;
      }

      h2 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
      }
    }
  }

  video {
    position: absolute;
    bottom: -200px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
  }

  ${({ theme }) => theme.mq.tablet} {
    header {
      bottom: 400px;

      h1 {
        font-size: 3rem;
      }

      div {
        p {
          font-size: 3rem;
        }

        h2 {
          font-size: ${({ theme }) => theme.fontSize.heading};
        }
      }
    }

    video {
      width: 1200px;
      bottom: -300px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    header {
      bottom: 500px;
    }

    video {
      width: 1800px;
      bottom: -500px;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    header {
      bottom: 600px;
    }

    video {
      width: 2200px;
      bottom: -600px;
    }
  }
`;

export const SecondSection = styled.section<IndexProps>`
  position: relative;
  z-index: 1;
  background: white;
  margin-bottom: 12rem;

  video {
    position: absolute;
    width: 100%;
    height: calc(100% + 12rem);
    z-index: -1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    object-fit: fill;
  }

  div {
    position: relative;
    top: 6rem;
    z-index: 1;
    max-width: 690px;
    margin: 0 auto;
    padding: 0 4rem;

    span {
      color: #f5f5f7;
      font-size: 3rem;
      font-weight: bold;
      opacity: 0.25;
      transition: opacity 0.3s ease-out;
      display: block;
      padding-block: 0.2rem;

      &:nth-child(${({ $isHighlighted = 0 }) => $isHighlighted + 1}) {
        opacity: 1;
      }

      &:last-child {
        margin-block: 3rem;
        display: block;

        p {
          font-size: 2rem;
          display: flex;
          flex-direction: column;
          margin-block: 2rem;

          &:first-child {
            margin-top: 3rem;
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 30rem;

    video {
      height: calc(100% + 30rem);
    }

    div {
      top: 15rem;

      span {
        display: initial;
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
        padding-block: 0;

        &:last-child {
          margin-top: 5.6rem;

          p {
            font-size: 24px;

            &:first-child {
              margin-top: 5.6rem;
            }
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div {
      max-width: 930px;

      span {
        font-size: ${({ theme }) => theme.fontSize.heading};

        &:last-child {
          margin-top: 8rem;

          p {
            &:first-child {
              margin-top: 8rem;
            }
          }
        }
      }
    }
  }
`;

export const ThirdSection = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 0 20px;

  ${({ theme }) => theme.mq.desktop} {
    height: 900px;
  }
`;

export const ThirdInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    h2 {
      display: flex;
      flex-direction: column;
      font-size: ${({ theme }) => theme.fontSize.paragraph};
      opacity: 1;

      span {
        font-size: 4rem;
      }
    }

    img {
      object-fit: contain;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    div {
      justify-content: flex-end;

      h2 {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
        opacity: 0;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div {
      height: 650px;
    }
  }
`;

export const ThirdLeft = styled.div`
  margin-right: -40px;

  img {
    width: 200px;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: right;
    margin-right: -50px;

    img {
      width: 250px;
    }

    h2 {
      left: -100px;
      z-index: -1;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-right: -70px;

    img {
      width: unset;
    }
  }
`;

export const ThirdRight = styled.div`
  margin-left: -40px;
  text-align: right;

  img {
    width: 171px;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    margin-left: -200px;

    img {
      width: 221px;
    }

    h2 {
      right: -100px;
      z-index: -1;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: -200px;

    img {
      width: unset;
    }
  }
`;

export const FourthSection = styled.section`
  display: grid;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FourthInner = styled.div`
  min-height: 700px;
  height: 100vh;
  max-height: 1000px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  &:first-child {
    overflow: hidden;
    width: 100%;
  }

  &:nth-child(even) {
    background-color: black;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 100vh;

    &:nth-child(3) {
      grid-column: 2;
    }

    &:nth-child(4) {
      grid-column: 1;
      grid-row: 2;
    }
  }
`;

export const FifthSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 2rem;

  span {
    display: block;
  }

  img {
    width: 300px;
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 650px;
    overflow: hidden;

    img {
      width: 600px;
      height: auto;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 900px;

    img {
      width: unset;
    }
  }
`;

export const SixthSection = styled.section`
  height: 100vh;
  background-color: #fbfbfd;
`;
