import React from 'react';
import Heading from 'components/Heading/Heading';
import Image from 'next/image';
import { Wrapper } from './EightSection.styles';

const EightSection = () => {
  return (
    <Wrapper>
      <div>
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

        <div>
          <Image
            src='/images/night_mode_photography_1__q70ptc5ot9u2_large.jpg'
            height='902'
            width='676'
            alt=''
            aria-hidden='true'
          />
        </div>
      </div>

      <div>
        <div>
          <p>The Wide camera captures up to</p>
          <h3>2.2x more light</h3>
          <p>for better photos and videos</p>
        </div>

        <div>
          <Image
            src='/images/night_mode_photography_2__cbzts548jxyu_large.jpg'
            height='829'
            width='621'
            alt=''
            aria-hidden='true'
          />
        </div>
      </div>

      <div>
        <div>
          <p>The Ultra Wide camera captures</p>
          <h3>92% more light</h3>
          <p>for better photos and videos</p>
        </div>

        <div>
          <Image
            src='/images/night_mode_photography_3__ciuu9113qhea_large.jpg'
            height='939'
            width='676'
            alt=''
            aria-hidden='true'
          />
        </div>
      </div>

      <div>
        <Image
          src='/images/night_mode_photography_4__eshaa1swvdoy_large.jpg'
          height='663'
          width='884'
          alt=''
          aria-hidden='true'
        />
      </div>

      <div>
        <div>
          <h3>Night mode now on every camera</h3>
        </div>

        <div>
          <Image
            src='/images/night_mode_photography_5__y26qxwgyqyq2_large.jpg'
            height='848'
            width='635'
            alt=''
            aria-hidden='true'
          />
        </div>
      </div>

      <div>
        <h3>Sharper, more detailed photos and videos</h3>
        <p>in any light</p>
      </div>
    </Wrapper>
  );
};

export default EightSection;