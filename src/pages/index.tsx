import type { NextPage } from 'next';
import { useState } from 'react';
import HeadComponent from 'components/Head/Head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import FirstSection from 'components/Index/1/FirstSection';
import SecondSection from 'components/Index/2/SecondSection';
import ThirdSection from 'components/Index/3/ThirdSection';
import FourthSection from 'components/Index/4/FourthSection';
import FifthSection from 'components/Index/5/FifthSection';
import SixthSection from 'components/Index/6/SixthSection';
import SeventhSection from 'components/Index/7/SeventhSection';
import EightSection from 'components/Index/8/EightSection';
import NinthSection from 'components/Index/9/NinthSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [fourthSectionRef, setFourthSectionRef] = useState(null);
  const [fifthSectionRef, setFifthSectionRef] = useState(null);

  return (
    <main>
      <HeadComponent title='Apple effects clone' />

      <FirstSection />
      <SecondSection />
      <ThirdSection fourthSectionRef={fourthSectionRef} />
      <FourthSection setFourthSectionRef={setFourthSectionRef} fifthSectionRef={fifthSectionRef} />
      <FifthSection setFifthSectionRef={setFifthSectionRef} />
      <SixthSection />
      <SeventhSection />
      {/* <EightSection /> */}
      <NinthSection />
    </main>
  );
};

export default Home;
