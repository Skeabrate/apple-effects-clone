import styled from 'styled-components';

interface Props {
  $isHighlighted: number;
}

export const Wrapper = styled.section<Props>`
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
`;
