import React from 'react';
import Slider from 'react-slick';
import { SliderItem, StyledDots, Wrapper } from './ImageSlider.styles';

interface Props {
  sliderIndex: number;
  setSliderIndex: Function;
}

const ImageSlider: React.FC<Props> = ({ sliderIndex, setSliderIndex }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
      return (
        <StyledDots $sliderIndex={sliderIndex}>
          <ul>{dots}</ul>

          <div>
            <span>Alpine Green</span>,<span> Silver</span>,<span> Gold</span>,{' '}
            <span>Graphite </span>and <span>Sierra Blue</span>
          </div>
        </StyledDots>
      );
    },
    beforeChange: (oldIndex: number, newIndex: number) => setSliderIndex(newIndex),
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
};

export default ImageSlider;
