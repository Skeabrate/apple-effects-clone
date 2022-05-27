import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect, useState, useRef } from 'react';
import HeadComponent from 'components/Head/Head';
import ScrollContext from 'context/ScrollContext';
import {
  SixthSection,
  SixthSectionHelperUp,
  SixthSectionHelperDown,
  SixthSectionImg,
  SixthSectionText,
  SeventhSection,
  EightSection,
  NinthSection,
  NinthHeader,
} from 'styles/index/index.styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Heading from 'components/Heading/Heading';
import FirstSection from 'components/Index/FirstSection/FirstSection';
import SecondSection from 'components/Index/SecondSection/SecondSection';
import ThirdSection from 'components/Index/ThirdSection/ThirdSection';
import FourthSection from 'components/Index/FourthSection/FourthSection';
import FifthSection from 'components/Index/FifthSection/FifthSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {
  const [fourthSectionRef, setFourthSectionRef] = useState(null);
  const [fifthSectionRef, setFifthSectionRef] = useState(null);
  const [sixthSectParalax, setSixthSectParalax] = useState<{ isActive: boolean; isOnTop: boolean }>(
    {
      isActive: false,
      isOnTop: true,
    }
  );

  const { isSticky } = useContext(ScrollContext);

  /* Sixth Section */
  const sixthSectionHelperUpRef = useRef<HTMLDivElement>(null);
  const sixthSectionHelperDownRef = useRef<HTMLDivElement>(null);
  const sixthSectionImageRef = useRef<HTMLDivElement>(null);

  /* Seventh Section */
  const seventhSectVideoRef = useRef<HTMLVideoElement>(null);
  const seventhSectFirstRef = useRef<HTMLDivElement>(null);
  const seventhSectSecondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Sixth section */
    if (sixthSectionHelperUpRef.current && sixthSectionImageRef.current) {
      gsap.to(sixthSectionImageRef.current, {
        scrollTrigger: {
          trigger: sixthSectionHelperUpRef.current,
          scrub: true,
          start: '0% bottom',
          end: '100% bottom',
        },
        y: '-10%',
      });
    }

    /* Seventh section video */
    if (seventhSectVideoRef.current) {
      ScrollTrigger.create({
        trigger: seventhSectVideoRef.current,
        start: 'top center',
        onEnter: () => seventhSectVideoRef.current && seventhSectVideoRef.current.play(),
      });
    }

    if (seventhSectFirstRef.current && seventhSectSecondRef.current) {
      const paralaxTable = [seventhSectFirstRef.current, seventhSectSecondRef.current];
      paralaxTable.forEach((item) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: '40% bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          })
          .to(item, { y: 0, opacity: 1 }, 0);
      });
    }
  }, []);

  useEffect(() => {
    /* Sixth section */
    if (sixthSectionHelperUpRef.current && sixthSectionHelperDownRef.current) {
      if (
        sixthSectionHelperUpRef.current.getBoundingClientRect().top <= window.innerHeight &&
        sixthSectionHelperDownRef.current.getBoundingClientRect().top >= window.innerHeight
      ) {
        setSixthSectParalax((state) => ({
          ...state,
          isActive: true,
        }));
      } else if (
        sixthSectionHelperUpRef.current.getBoundingClientRect().top >= window.innerHeight
      ) {
        setSixthSectParalax({
          isActive: false,
          isOnTop: true,
        });
      } else if (
        sixthSectionHelperDownRef.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        setSixthSectParalax({
          isActive: false,
          isOnTop: false,
        });
      }
    }
  }, [isSticky, sixthSectionHelperUpRef, sixthSectionHelperDownRef, sixthSectionImageRef]);

  return (
    <main>
      <HeadComponent title='Apple effects clone' />

      <FirstSection />

      <SecondSection />

      <ThirdSection fourthSectionRef={fourthSectionRef} />

      <FourthSection setFourthSectionRef={setFourthSectionRef} fifthSectionRef={fifthSectionRef} />

      <FifthSection setFifthSectionRef={setFifthSectionRef} />

      <SixthSection>
        <SixthSectionHelperUp ref={sixthSectionHelperUpRef} />
        <SixthSectionImg
          ref={sixthSectionImageRef}
          $sixthSectParalaxIsActive={sixthSectParalax.isActive}
          $sixthSectParalaxIsOnTop={sixthSectParalax.isOnTop}
        >
          <img src='/images/SixthSection.png' alt='Pro camera system' />
        </SixthSectionImg>
        <SixthSectionText>
          Our <span>Pro camera system</span> gets its biggest upgrade ever. With{' '}
          <span>next-level hardware</span> that captures so much more detail.{' '}
          <span>Super-intelligent software</span> for new photo and filmmaking techniques. And a{' '}
          <span>mind-blowingly fast chip</span> that makes it all possible.{' '}
          <span>It’ll change the way you shoot.</span>
        </SixthSectionText>
        <SixthSectionHelperDown ref={sixthSectionHelperDownRef} />
      </SixthSection>

      <SeventhSection>
        <div>
          <Image
            src='/images/macro_photography__e2abtsqe82c2_large.jpg'
            height='1019'
            width='1358'
          />
        </div>

        <div>
          <Heading>Whoa.</Heading>

          <div style={{ opacity: 0, transform: 'translateY(40px)' }} ref={seventhSectFirstRef}>
            <h3>Macro photography comes to iPhone.</h3>
            <p>
              With its redesigned lens and powerful autofocus system, the new Ultra Wide camera can
              focus at just 2cm — making even the smallest details seem epic. Transform a leaf into
              abstract art. Capture a caterpillar’s fuzz. Magnify a dewdrop. The beauty of tiny
              awaits.
            </p>
          </div>
        </div>

        <video height='768' width='1358' ref={seventhSectVideoRef} muted playsInline preload='auto'>
          <source src='/images/seventh.mp4' type='video/mp4' />
        </video>

        <div style={{ opacity: 0, transform: 'translateY(40px)' }} ref={seventhSectSecondRef}>
          <h3>Macro video, anyone?</h3>
          <p>
            Macro stills are just the beginning. You can also shoot macro videos — including slow
            motion and time-lapse. Prepare to be mesmerised.
          </p>
        </div>
      </SeventhSection>

      <EightSection>
        <div>
          <div>
            <Heading>
              Bring on <span>the night.</span>
            </Heading>
            <p>
              iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our
              largest sensor yet — and it leverages the LiDAR scanner for Night mode portraits.
              Ultra Wide gets a wider aperture, a faster sensor and all-new autofocus. And Telephoto
              now has Night mode.
            </p>
          </div>

          <div>
            <Image
              src='/images/night_mode_photography_1__q70ptc5ot9u2_large.jpg'
              height='902'
              width='676'
              alt=''
              aria-hidden='true'
            />
          </div>
        </div>

        <div>
          <div>
            <p>The Wide camera captures up to</p>
            <h3>2.2x more light</h3>
            <p>for better photos and videos</p>
          </div>

          <div>
            <Image
              src='/images/night_mode_photography_2__cbzts548jxyu_large.jpg'
              height='829'
              width='621'
              alt=''
              aria-hidden='true'
            />
          </div>
        </div>

        <div>
          <div>
            <p>The Ultra Wide camera captures</p>
            <h3>92% more light</h3>
            <p>for better photos and videos</p>
          </div>

          <div>
            <Image
              src='/images/night_mode_photography_3__ciuu9113qhea_large.jpg'
              height='939'
              width='676'
              alt=''
              aria-hidden='true'
            />
          </div>
        </div>

        <div>
          <Image
            src='/images/night_mode_photography_4__eshaa1swvdoy_large.jpg'
            height='663'
            width='884'
            alt=''
            aria-hidden='true'
          />
        </div>

        <div>
          <div>
            <h3>Night mode now on every camera</h3>
          </div>

          <div>
            <Image
              src='/images/night_mode_photography_5__y26qxwgyqyq2_large.jpg'
              height='848'
              width='635'
              alt=''
              aria-hidden='true'
            />
          </div>
        </div>

        <div>
          <h3>Sharper, more detailed photos and videos</h3>
          <p>in any light</p>
        </div>
      </EightSection>

      <NinthSection>
        <NinthHeader>
          <Heading>
            Shift the focus.
            <span>Up the drama.</span>
          </Heading>
          <p>
            Presenting <span>Cinematic mode.</span>
          </p>
        </NinthHeader>

        <video
          style={{ height: '100vh', width: 'auto' }}
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
        >
          <source src='/images/ninthsect.mp4' type='video/mp4' />
        </video>
      </NinthSection>
    </main>
  );
};

export default Home;
