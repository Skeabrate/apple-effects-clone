import styled from 'styled-components';

interface Props {
  $sliderIndex: number;
}

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 20px 0 50px;
`;

export const SliderItem = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;

  img {
    min-width: 200px;
    width: 30vh;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledDots = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  ul {
    li {
      width: 20px;
      height: 20px;
      margin: 10px;

      button {
        width: 100%;
        height: 100%;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
        border-radius: 100px;

        &:focus {
          outline: none;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%), 0 0 0 3px white, 0 0 0 4px #0071e3,
            0 0 0 8px rgba(0, 125, 250, 0.6) !important;
        }

        &::before {
          display: none;
        }
      }

      &:nth-child(${({ $sliderIndex }) => $sliderIndex + 1}) button {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%), 0 0 0 3px white, 0 0 0 4px #0071e3;
      }

      &:nth-child(1) button {
        background-color: #576856;
      }
      &:nth-child(2) button {
        background-color: #f1f2ed;
      }
      &:nth-child(3) button {
        background-color: #fae7cf;
      }
      &:nth-child(4) button {
        background-color: #54524f;
      }
      &:nth-child(5) button {
        background-color: #a7c1d9;
      }
    }
  }

  div {
    color: rgba(0, 0, 0, 0.25);
    font-weight: bold;
    width: 250px;
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    text-align: center;

    span {
      transition: color 0.2s ease-in-out;

      &:nth-child(${({ $sliderIndex }) => $sliderIndex + 1}) {
        color: #1d1d1f;
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    div {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 1024px) and (min-height: 700px) {
    margin-top: 40px;
  }
`;
