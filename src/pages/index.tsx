import type { NextPage } from 'next';
import HeadComponent from 'components/Head/Head';
import {
  FirstSection,
  SecondSection,
  StyledFirstVideo,
  Wrapper,
} from 'assets/styles/index/index.styles';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <HeadComponent title='Apple effects clone' />

      <FirstSection>
        <StyledFirstVideo>
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
        </StyledFirstVideo>
      </FirstSection>

      <SecondSection>
        <div></div>

        <video autoPlay loop muted playsInline preload='auto'>
          <source src='/images/section2.mp4' type='video/mp4' />
        </video>

        <div>
          <span>A dramatically more powerful camera system. </span>
          <span>A display so responsive, every interaction feels new again. </span>
          <span>The world’s fastest smartphone chip. </span>
          <span>Exceptional durability. </span>
          <span>And a huge leap in battery life. </span>
          <span>
            Let’s Pro.
            <div>
              From £39.54/mo. or £949 before trade‑in*
              <div>
                <button>Watch the film</button>
                <button>Watch the event</button>
              </div>
            </div>{' '}
          </span>
        </div>
      </SecondSection>
    </Wrapper>
  );
};

export default Home;
