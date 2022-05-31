import React, { useRef } from 'react';
import Heading from 'components/Heading/Heading';
import {
  StyledFifthArticle,
  StyledFirstArticle,
  StyledFourthArticle,
  StyledSecondArticle,
  StyledSixthArticle,
  StyledThirdArticle,
  Wrapper,
} from './EightSection.styles';

const EightSection = () => {
  const firstRef = useRef<HTMLDivElement>(null);
  const firstImgRef = useRef<HTMLImageElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const secondImgRef = useRef<HTMLImageElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const thirdImgRef = useRef<HTMLImageElement>(null);
  const fourthImgRef = useRef<HTMLImageElement>(null);
  const fifthRef = useRef<HTMLDivElement>(null);
  const fifthImgRef = useRef<HTMLImageElement>(null);
  const sixthRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <StyledFirstArticle>
        <div>
          <Heading>
            Bring on <span>the night.</span>
          </Heading>
          <p ref={firstRef}>
            iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our
            largest sensor yet — and it leverages the LiDAR scanner for Night mode portraits. Ultra
            Wide gets a wider aperture, a faster sensor and all-new autofocus. And Telephoto now has
            Night mode.
          </p>
        </div>

        <img
          ref={firstImgRef}
          src='/images/night_mode_photography_1__q70ptc5ot9u2_large.jpg'
          height='902'
          width='676'
          alt='Bring on the night.'
        />
      </StyledFirstArticle>

      <StyledSecondArticle>
        <div ref={secondRef}>
          <p>The Wide camera captures up to</p>
          <h3>2.2x more light</h3>
          <p>for better photos and videos</p>
        </div>

        <img
          ref={secondImgRef}
          src='/images/night_mode_photography_2__cbzts548jxyu_large.jpg'
          height='829'
          width='621'
          alt='2.2x more light'
        />
      </StyledSecondArticle>

      <StyledThirdArticle>
        <div ref={thirdRef}>
          <p>The Ultra Wide camera captures</p>
          <h3>92% more light</h3>
          <p>for better photos and videos</p>
        </div>

        <img
          ref={thirdImgRef}
          src='/images/night_mode_photography_3__ciuu9113qhea_large.jpg'
          height='939'
          width='676'
          alt='92% more light'
        />
      </StyledThirdArticle>

      <StyledFourthArticle>
        <div></div>

        <img
          ref={fourthImgRef}
          src='/images/night_mode_photography_4__eshaa1swvdoy_large.jpg'
          height='663'
          width='884'
          alt='The Ultra Wide camera captures'
        />
      </StyledFourthArticle>

      <StyledFifthArticle>
        <div ref={fifthRef}>
          <h3>
            Night mode now <span>on every camera</span>
          </h3>
        </div>

        <img
          ref={fifthImgRef}
          src='/images/night_mode_photography_5__y26qxwgyqyq2_large.jpg'
          height='848'
          width='635'
          alt='Night mode now on every camera'
        />
      </StyledFifthArticle>

      <StyledSixthArticle>
        <div ref={sixthRef}>
          <h3>
            Sharper, more <span>detailed photos</span> and videos
          </h3>
          <p>in any light</p>
        </div>
      </StyledSixthArticle>
    </Wrapper>
  );
};

export default EightSection;
