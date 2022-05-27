import styled from 'styled-components';

interface IndexProps {
  $isHighlighted?: number;
  $sliderIndex?: number;
  $isVideoLoaded?: boolean;
  $sixthSectParalaxIsActive?: boolean;
  $sixthSectParalaxIsOnTop?: boolean;
}

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
  padding: 15rem 4rem 30rem 4rem;

  span {
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headingTablet};
    padding: 25rem 4rem 60rem 4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.heading};
    letter-spacing: ${({ theme }) => theme.letterSpacing.heading};
    max-width: 1050px;
    padding: 35rem 4rem 85rem 4rem;
  }
`;

export const SixthSectionHelperUp = styled.div`
  position: absolute;
  top: 184px;
  left: 0;
  width: 100%;
  height: calc(100% - 150px - 184px);

  ${({ theme }) => theme.mq.tablet} {
    top: 408px;
    height: calc(100% - 290px - 408px);
  }

  ${({ theme }) => theme.mq.desktop} {
    top: 566px;
    height: calc(100% - 400px - 566px);
  }
`;

export const SixthSectionHelperDown = styled.div`
  position: absolute;
  bottom: 150px;
  left: 0;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    bottom: 290px;
  }
  ${({ theme }) => theme.mq.desktop} {
    bottom: 400px;
  }
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
    if ($sixthSectParalaxIsActive) return '0';
    else if ($sixthSectParalaxIsOnTop) return 'unset';
    else return '150px';
  }};
  left: 0;

  img {
    position: relative;
    height: 180px;
    width: auto;
    margin-left: -252.5px;
    left: 50%;
    top: 90px;
  }

  ${({ theme }) => theme.mq.tablet} {
    bottom: ${({ $sixthSectParalaxIsOnTop, $sixthSectParalaxIsActive }) => {
      if ($sixthSectParalaxIsActive) return '0';
      else if ($sixthSectParalaxIsOnTop) return 'unset';
      else return '290px';
    }};

    img {
      height: 405px;
      margin-left: -534px;
      top: 210px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    bottom: ${({ $sixthSectParalaxIsOnTop, $sixthSectParalaxIsActive }) => {
      if ($sixthSectParalaxIsActive) return '0';
      else if ($sixthSectParalaxIsOnTop) return 'unset';
      else return '400px';
    }};

    img {
      top: 290px;
      height: unset;
      margin-left: -791px;
    }
  }
`;

export const SeventhSection = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
  position: relative;
  background: white;

  p {
    color: #6e6e73;
    font-weight: 500;
    font-size: 1.8rem;
  }

  h3 {
    font-size: 24px;
    width: 250px;
    line-height: 1.1;
    padding-bottom: 16px;
  }

  div:first-child {
    padding-top: 10rem;
    width: fit-content;
    margin: 0 auto;
  }

  div:nth-of-type(2),
  div:nth-of-type(3) {
    padding: 3rem 5vw 5rem;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  video {
    width: 800px;
    height: auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  ${({ theme }) => theme.mq.tablet} {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.headingMobile};
      width: unset;
    }

    div:first-child {
      padding-top: 15rem;
    }

    div:nth-of-type(2),
    div:nth-of-type(3) {
      flex-direction: row;
      width: fit-content;
      gap: 150px;
      margin: 0 auto;
      padding: 5rem 5vw 12rem;

      div,
      p {
        max-width: 255px;
      }
    }

    div:nth-of-type(2) h3 {
      width: 300px;
    }

    video {
      width: unset;
      height: auto;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    div:nth-of-type(2),
    div:nth-of-type(3) {
      gap: 200px;

      h3 {
        font-size: 40px;
      }

      p {
        max-width: 330px;
      }
    }

    div:nth-of-type(2) h3 {
      padding-top: 10px;
      width: 380px;
    }
  }
`;

export const EightSection = styled.section`
  width: 100%;
  background-color: black;
  color: white;
`;

export const NinthSection = styled.section`
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  overflow: hidden;
`;

export const NinthHeader = styled.header`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  padding: 0 5vw;

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
