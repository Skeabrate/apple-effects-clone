import React from 'react';
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
  return (
    <Wrapper>
      <StyledFirstArticle>
        <div>
          <Heading>
            Bring on <span>the night.</span>
          </Heading>
          <p>
            iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our
            largest sensor yet — and it leverages the LiDAR scanner for Night mode portraits. Ultra
            Wide gets a wider aperture, a faster sensor and all-new autofocus. And Telephoto now has
            Night mode.
          </p>
        </div>

        <img
          src='/images/night_mode_photography_1__q70ptc5ot9u2_large.jpg'
          height='902'
          width='676'
          alt='Bring on the night.'
        />
      </StyledFirstArticle>

      <StyledSecondArticle>
        <div>
          <p>The Wide camera captures up to</p>
          <h3>2.2x more light</h3>
          <p>for better photos and videos</p>
        </div>

        <img
          src='/images/night_mode_photography_2__cbzts548jxyu_large.jpg'
          height='829'
          width='621'
          alt='2.2x more light'
        />
      </StyledSecondArticle>

      <StyledThirdArticle>
        <div>
          <p>The Ultra Wide camera captures</p>
          <h3>92% more light</h3>
          <p>for better photos and videos</p>
        </div>

        <img
          src='/images/night_mode_photography_3__ciuu9113qhea_large.jpg'
          height='939'
          width='676'
          alt='92% more light'
        />
      </StyledThirdArticle>

      <StyledFourthArticle>
        <div></div>

        <img
          src='/images/night_mode_photography_4__eshaa1swvdoy_large.jpg'
          height='663'
          width='884'
          alt='The Ultra Wide camera captures'
        />
      </StyledFourthArticle>

      <StyledFifthArticle>
        <div>
          <h3>
            Night mode now <span>on every camera</span>
          </h3>
        </div>

        <img
          src='/images/night_mode_photography_5__y26qxwgyqyq2_large.jpg'
          height='848'
          width='635'
          alt='Night mode now on every camera'
        />
      </StyledFifthArticle>

      <StyledSixthArticle>
        <div>
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
