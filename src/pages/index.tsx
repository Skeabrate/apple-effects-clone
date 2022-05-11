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

        <ul>
          <li>A dramatically more powerful camera system.</li>
          <li>A display so responsive, every interaction feels new again.</li>
          <li>The world’s fastest smartphone chip.</li>
          <li>Exceptional durability.</li>
          <li>And a huge leap in battery life.</li>
          <li>
            Let’s Pro.
            <div>
              From £39.54/mo. or £949 before trade‑in*
              <div>
                <button>Watch the film</button>
                <button>Watch the event</button>
              </div>
            </div>
          </li>
        </ul>
      </SecondSection>
    </Wrapper>
  );
};

export default Home;
