import styled from 'styled-components';

interface Props {
  $isHighlighted: number;
}

export const Wrapper = styled.section<Props>`
  position: relative;
  z-index: 1;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100%;
    width: auto;
    min-height: 100%;
    height: auto;
    z-index: -1;
    object-fit: contain;
  }

  div {
    max-width: 690px;
    margin: 0 auto;
    padding: 0 4rem;

    span {
      color: #f5f5f7;
      font-size: ${({ theme }) => theme.fontSize.headingMobile};
      font-weight: 500;
      line-height: 1.1;
      opacity: 0.25;
      transition: opacity 0.3s ease-out;
      display: block;
      padding-block: 0.2rem;

      &:nth-child(${({ $isHighlighted = 0 }) => $isHighlighted + 1}) {
        opacity: 1;
      }

      &:last-child {
        margin-top: 3rem;
        display: block;

        p {
          font-size: 2rem;
          display: flex;
          flex-direction: column;
          margin-top: 2rem;

          &:first-child {
            margin-top: 3rem;
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 15rem 0;

    div {
      span {
        display: initial;
        font-size: ${({ theme }) => theme.fontSize.headingTablet};
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
      max-width: 950px;

      span {
        font-size: ${({ theme }) => theme.fontSize.heading};
        letter-spacing: ${({ theme }) => theme.letterSpacing.heading};

        &:last-child {
          margin-top: 8rem;

          p {
            letter-spacing: -0.6px;

            &:first-child {
              margin-top: 8rem;
            }
          }
        }
      }
    }
  }

  /* @media (min-width: 1600px) {
    video {
      width: 100%;
      height: auto;
    }
  } */
`;
