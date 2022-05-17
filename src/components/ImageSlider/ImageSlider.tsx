import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface SliderProps {
  $isHighlighted: number;
}

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SliderItem = styled.div`
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

const StyledDots = styled.div<SliderProps>`
  position: relative;
  margin-top: 50px;
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

      &:nth-child(${({ $isHighlighted }) => $isHighlighted + 1}) button {
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

      &:nth-child(${({ $isHighlighted }) => $isHighlighted + 1}) {
        color: #1d1d1f;
      }
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    div {
      font-size: 2rem;
    }
  }
`;

export default function ImageSlider() {
  const [isHighlighted, setIsHighlighted] = useState<number>(0);

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
      return (
        <StyledDots $isHighlighted={isHighlighted}>
          <ul>{dots}</ul>

          <div>
            <span>Alpine Green</span>,<span> Silver</span>,<span> Gold</span>,{' '}
            <span>Graphite </span>and <span>Sierra Blue</span>
          </div>
        </StyledDots>
      );
    },
    beforeChange: (oldIndex: number, newIndex: number) => setIsHighlighted(newIndex),
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderItem>
          <img src='/images/section3_green1.jpg' alt='iPhone 13 Pro Alpine Green' />
        </SliderItem>
        <SliderItem>
          <img src='/images/section3_white1.jpg' alt='iPhone 13 Pro Silver' />
        </SliderItem>
        <SliderItem>
          <img src='/images/section3_gold1.jpg' alt='iPhone 13 Pro Gold' />
        </SliderItem>
        <SliderItem>
          <img
            src='/images/finishes_1_graphite__cjq97aaf2yfm_large.jpg'
            alt='iPhone 13 Pro Graphite'
          />
        </SliderItem>
        <SliderItem>
          <img
            src='/images/finishes_1_sierra_blue__cn414556pbv6_large.jpg'
            alt='iPhone 13 Pro Sierra Blue'
          />
        </SliderItem>
      </Slider>
    </Wrapper>
  );
}
