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
import TenthSection from 'components/Index/10/TenthSection';
import EleventhSection from 'components/Index/11/EleventhSection';
import TwelfthSection from 'components/Index/12/TwelfthSection';
import FourteenthSection from 'components/Index/14/FourteenthSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [fourthSectionRef, setFourthSectionRef] = useState<HTMLDivElement | null>(null);
  const [fifthSectionRef, setFifthSectionRef] = useState<HTMLDivElement | null>(null);

  return (
    <main>
      <HeadComponent title='Apple Clone' />

      <FirstSection />
      <SecondSection />
      <ThirdSection fourthSectionRef={fourthSectionRef} />
      <FourthSection setFourthSectionRef={setFourthSectionRef} fifthSectionRef={fifthSectionRef} />
      <FifthSection setFifthSectionRef={setFifthSectionRef} />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <NinthSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection />
      <FourteenthSection />
    </main>
  );
};

export default Home;
