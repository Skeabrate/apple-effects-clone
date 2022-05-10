import type { NextPage } from 'next';
import HeadComponent from 'components/Head/Head';
import { StyledFirstSection } from 'assets/styles/index/index.styles';

const Home: NextPage = () => {
  return (
    <main>
      <HeadComponent title='Apple effects clone' />

      <StyledFirstSection></StyledFirstSection>
    </main>
  );
};

export default Home;
