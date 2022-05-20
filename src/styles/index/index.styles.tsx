import styled, { css } from 'styled-components';

interface IndexProps {
  $isHighlighted?: number;
  $sliderIndex?: number;
  $isVideoLoaded?: boolean;
  $sixthSectParalaxIsActive?: boolean;
  $sixthSectParalaxIsOnTop?: boolean;
}

const wrapperHelper = css`
  max-width: 2000px;
  margin: 0 auto;
`;

export const Wrapper = styled.main`
  margin: 0 auto;
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
    line-height: 1.25;

    h1 {
      position: absolute;
      font-size: 3rem;
      width: fit-content;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }

    div {
      opacity: 0;

      p {
        font-size: 2rem;
        font-weight: 500;
      }

      h2 {
        font-size: ${({ theme }) => theme.fontSize.headingTablet};
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
        font-size: 6rem;
        letter-spacing: -2px;
      }

      div {
        p {
          font-size: 3rem;
        }

        h2 {
          letter-spacing: ${({ theme }) => theme.letterSpacing.heading};
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
  ${wrapperHelper};
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  background: white;

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
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: right;
    margin-right: -50px;

    img {
      width: 250px;
    }

    h2 {
      left: -100px;
      z-index: 0;
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
    height: auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    margin-left: -200px;

    img {
      width: 221px;
    }

    h2 {
      right: -100px;
      z-index: 0;
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
  ${wrapperHelper};
  position: relative;
`;

export const FourthInner = styled.div<IndexProps>`
  display: grid;
  grid-template-columns: 1fr;

  /* After element to extend scrolling */
  @media screen and (min-height: 670px) and (min-width: 768px) {
    &::after {
      content: '';
      position: relative;
      left: 0;
      height: 300px;
      width: 100%;
      z-index: -1;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const FourthInnerDivHelper = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 670px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  img,
  video {
    bottom: 0px;
    min-height: 500px;
    height: 75vh;
    max-height: 1000px;
    width: auto;
  }

  &:nth-child(2) {
    background-color: black;
  }
`;

const FourthSecondandThirdHelper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0 30px;
  gap: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    object-fit: contain;
  }
`;

export const FourtInnerFirstDiv = styled.div<IndexProps>`
  ${FourthInnerDivHelper};
  &:nth-child(2) {
    div {
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        left: 10%;
        transition: opacity 1.2s ease;

        &:not(:nth-child(${({ $sliderIndex = 0 }) => $sliderIndex + 1})) {
          opacity: 0;
        }

        &:nth-child(${({ $sliderIndex = 0 }) => $sliderIndex + 1}) {
          z-index: 1;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) and (max-height: 1000px) {
    &:nth-child(2) {
      div {
        img {
          height: 95vh;
          max-height: unset;
          bottom: unset;
          top: 15%;
        }
      }
    }
  }
`;

export const FourtInnerSecondDiv = styled.div`
  ${FourthInnerDivHelper};
  &:nth-child(1) {
    ${FourthSecondandThirdHelper};
    img {
      max-height: 600px;
    }
  }

  &:nth-child(2) {
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    &:nth-child(1) {
      grid-column: 2;
    }

    &:nth-child(2) {
      grid-column: 1;
      grid-row: 1;
    }
  }
`;

export const FourtInnerThirdDiv = styled.div`
  ${FourthInnerDivHelper};
  &:nth-child(1) {
    ${FourthSecondandThirdHelper};

    img {
      max-height: 550px;
    }
  }

  &:nth-child(2) {
    video {
      position: absolute;
      left: 55%;
      transform: translateX(-50%);
    }
  }
`;

export const FifthSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background: white;
  gap: 3rem;
  padding: 4rem 2rem;

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
    gap: 5rem;
    padding: 10rem 2rem;

    img {
      width: unset;
    }
  }
`;

export const SixthSection = styled.section`
  background-color: #fbfbfd;
  color: #86868b;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

export const SixthSectionText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  font-weight: 500;
  line-height: 1.1;
  max-width: 690px;
  margin: 0 auto;
  padding: 35rem 4rem 85rem 4rem;

  span {
    color: #1d1d1f;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headingTablet};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.heading};
    letter-spacing: ${({ theme }) => theme.letterSpacing.heading};

    max-width: 1050px;
  }
`;

export const SixthSectionHelperUp = styled.div`
  position: absolute;
  top: 566px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: red;
  z-index: 2;
`;

export const SixthSectionHelperDown = styled.div`
  position: absolute;
  bottom: 488px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: red;
  z-index: 2;
`;

export const SixthSectionImg = styled.div<IndexProps>`
  width: 100%;
  position: ${({ $sixthSectParalaxIsActive }) =>
    $sixthSectParalaxIsActive ? 'fixed' : 'absolute'};
  top: ${({ $sixthSectParalaxIsOnTop, $sixthSectParalaxIsActive }) => {
    if ($sixthSectParalaxIsActive) return 'unset';
    else if ($sixthSectParalaxIsOnTop) return '0';
  }};
  bottom: ${({ $sixthSectParalaxIsOnTop, $sixthSectParalaxIsActive }) => {
    if ($sixthSectParalaxIsActive) return '0 !important';
    else if ($sixthSectParalaxIsOnTop) return 'unset';
    else return '490px';
  }};
  left: 0;

  img {
    position: relative;
    margin-left: -791px;
    top: 290px;
    left: 50%;
    z-index: 1;
  }
`;

export const SeventhSection = styled.section`
  width: 100%;
  height: 100vh;
  background: blue;
`;
