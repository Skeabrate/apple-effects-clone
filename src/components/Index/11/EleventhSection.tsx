import React from 'react';
import HeaderWithCaption from 'components/HeaderWithCaption/HeaderWithCaption';
import GeekOut from 'components/GeekOut/GeekOut';
import { Wrapper } from './EleventhSection.styles';

const EleventhSection: React.FC = () => {
  return (
    <Wrapper>
      <HeaderWithCaption
        mainHeading={['Pure. Pro. Power.']}
        captions={['A15 Bionic is the world’s', 'fastest smartphone chip.']}
      />

      <div>
        <div>
          <h3>All-new 5‑core GPU</h3>
          <p>
            delivers faster graphics performance for immersive games, advanced camera features and
            more
          </p>
        </div>
        <div>
          <h3>New CPU performance and efficiency cores</h3>
          <p>power through complex tasks and preserve battery life</p>
        </div>
        <div>
          <h3>Superfast Neural Engine</h3>
          <p>
            performs up to 15.8 trillion operations per second and helps drive Cinematic mode, Smart
            HDR 4 and more
          </p>
        </div>
        <div>
          <h3>Advanced ISP</h3>
          <p>takes noise reduction and tone mapping to the next level</p>
        </div>
        <div>
          <h3>Secure Enclave</h3>
          <p>protects personal information like your Face ID data, contacts and more</p>
        </div>
        <div>
          <h3>On-device processing</h3>
          <p>keeps things like your Siri requests and interactions with Live Text private</p>
        </div>
      </div>

      <GeekOut text={'See how A15 Bionic is powered by collaboration.'} />
    </Wrapper>
  );
};

export default React.memo(EleventhSection);
