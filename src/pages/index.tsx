import type { NextPage } from 'next';
import HeadComponent from 'components/Head/Head';

const Home: NextPage = () => {
  return (
    <main>
      <HeadComponent title='Apple effects clone' />

      <h2>Apple effects</h2>
      <p>deploy test</p>
    </main>
  );
};

export default Home;
