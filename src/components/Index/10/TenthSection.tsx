import Heading from 'components/Heading/Heading';
import React from 'react';
import { Wrapper } from './TenthSection.styles';

const TenthSection: React.FC = () => {
  return (
    <Wrapper>
      <h2>
        <span>A snap­shot</span>
        <span> of each </span>
        <span>cam­era.</span>
      </h2>

      <div>
        <div>
          <div>
            <h3>Telephoto</h3>
            <ul>
              <li>77mm focal length</li>
              <li>3x optical zoom</li>
              <li>ƒ/2.8 aperture</li>
              <li>Focus Pixels</li>
              <li>6-element lens</li>
              <li>OIS</li>
            </ul>
          </div>

          <div>
            <h3>Ultra Wide</h3>
            <ul>
              <li>13mm focal length</li>
              <li>ƒ/1.8 aperture</li>
              <li>Faster sensor</li>
              <li>Focus Pixels</li>
              <li>6-element lens</li>
            </ul>
          </div>

          <div>
            <h3>Wide</h3>
            <ul>
              <li>26mm focal length</li>
              <li>1.9 μm pixels</li>
              <li>ƒ/1.5 aperture</li>
              <li>100% Focus Pixels</li>
              <li>7-element lens</li>
              <li>Sensor-shift OIS</li>
            </ul>
          </div>
        </div>

        <img
          src='/images/camera_redesign__epvv5uvn9lea_large.jpg'
          alt='A snap­shot of each cam­era.'
        />

        <p>Our three most powerful cameras ever</p>
      </div>
    </Wrapper>
  );
};

export default TenthSection;
