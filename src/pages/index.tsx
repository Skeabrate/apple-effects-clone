import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import HeadComponent from 'components/Head/Head';
import { StyledFirstSection } from 'assets/styles/index/index.styles';

const Home: NextPage = () => {
  return (
    <main>
      <HeadComponent title='Apple effects clone' />

      <StyledFirstSection>
        <video id='vid' autoPlay muted controls>
          <source src='/images/medium.mp4'></source>
        </video>
      </StyledFirstSection>
    </main>
  );
};

export default Home;
