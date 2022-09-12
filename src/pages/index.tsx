import type { NextPage } from 'next';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import HeadComponent from 'components/Head/Head';
import FirstSection from 'components/Index/1/FirstSection';
import SecondSection from 'components/Index/2/SecondSection';
import FifthSection from 'components/Index/5/FifthSection';
import SeventhSection from 'components/Index/7/SeventhSection';
import FourteenthSection from 'components/Index/14/FourteenthSection';
import FallbackComponent from 'components/FallbackComponent';

const ThirdSection = dynamic(() => import('../components/Index/3/ThirdSection'), {
  suspense: true,
});
const FourthSection = dynamic(() => import('../components/Index/4/FourthSection'), {
  suspense: true,
});
const SixthSection = dynamic(() => import('../components/Index/6/SixthSection'), {
  suspense: true,
});
const EightSection = dynamic(() => import('../components/Index/8/EightSection'), {
  suspense: true,
});
const NinthSection = dynamic(() => import('../components/Index/9/NinthSection'), {
  suspense: true,
});
const TenthSection = dynamic(() => import('../components/Index/10/TenthSection'), {
  suspense: true,
});
const EleventhSection = dynamic(() => import('../components/Index/11/EleventhSection'), {
  suspense: true,
});
const TwelfthSection = dynamic(() => import('../components/Index/12/TwelfthSection'), {
  suspense: true,
});

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [fourthSectionRef, setFourthSectionRef] = useState<HTMLDivElement | null>(null);
  const [fifthSectionRef, setFifthSectionRef] = useState<HTMLDivElement | null>(null);

  const components = [
    {
      component: FirstSection,
      isDynamic: false,
    },
    {
      component: SecondSection,
      isDynamic: false,
    },
    {
      component: ThirdSection,
      isDynamic: true,
      props: {
        fourthSectionRef,
      },
    },
    {
      component: FourthSection,
      isDynamic: true,
      props: {
        setFourthSectionRef,
        fifthSectionRef,
      },
    },
    {
      component: FifthSection,
      isDynamic: false,
      props: {
        setFifthSectionRef,
      },
    },
    {
      component: SixthSection,
      isDynamic: true,
    },
    {
      component: SeventhSection,
      isDynamic: false,
    },
    {
      component: EightSection,
      isDynamic: true,
    },
    {
      component: NinthSection,
      isDynamic: true,
    },
    {
      component: TenthSection,
      isDynamic: true,
    },
    {
      component: EleventhSection,
      isDynamic: true,
    },
    {
      component: TwelfthSection,
      isDynamic: true,
    },
    {
      component: FourteenthSection,
      isDynamic: false,
    },
  ];

  return (
    <main>
      <HeadComponent title='Apple Clone' />

      {components.map((Component, index) => (
        <React.Fragment key={index}>
          {Component.isDynamic ? (
            <Suspense key={index} fallback={<FallbackComponent />}>
              <Component.component {...(Component.props as any)} />
            </Suspense>
          ) : (
            <Component.component {...(Component.props as any)} />
          )}
        </React.Fragment>
      ))}
    </main>
  );
};

export default Home;
