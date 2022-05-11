import type { NextPage } from 'next';
import HeadComponent from 'components/Head/Head';
import { FirstSection, Wrapper } from 'assets/styles/index/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <HeadComponent title='Apple effects clone' />

      <FirstSection>
        <header>
          <h1>iPhone 13 Pro</h1>
          <div>
            <p>iPhone 13 Pro</p>
            <h2>Every inch a pro.</h2>
          </div>
        </header>

        <video
          autoPlay
          muted
          playsInline
          poster='/images/hero_startframe__tjgmpy97igqy_xlarge'
          preload='auto'
        >
          <source src='/images/medium.mp4' type='video/mp4' />
        </video>
      </FirstSection>
    </Wrapper>
  );
};

export default Home;
