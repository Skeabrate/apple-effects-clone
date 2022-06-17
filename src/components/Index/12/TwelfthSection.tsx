import React from 'react';
import TwelfthArticle from './components/TwelfthArticle/TwelfthArticle';

const TwelfthSection: React.FC = () => {
  return (
    <section>
      <TwelfthArticle
        iconUrl={'/images/privacy_icon__dlw1ars629g2_large.png'}
        iconWidth={66}
        iconHeight={88}
        header={'Privacy is built in.'}
        text={
          'iPhone helps put you in control of your personal information. For example, when you’re browsing, Safari intelligently helps block trackers from profiling you and shows you which ones have been blocked in your Privacy Report. And the list goes on.'
        }
        button={'Learn more about Apple and privacy'}
        isAnimated
        isDark
      />

      <TwelfthArticle
        iconUrl={'/images/environment_icon__epb71nmm8bau_large.jpg'}
        iconWidth={57}
        iconHeight={69}
        header={'Lighter on the planet.'}
        text={
          'Our stores, offices and data centres are already carbon neutral. By 2030 our products — and your carbon footprint from using them — will be too. And this year we eliminated the plastic wrapping around the iPhone 13 and iPhone 13 Pro boxes, saving 600 tonnes of plastic.'
        }
        button={'Learn more about Apple and the environment'}
      />
    </section>
  );
};

export default React.memo(TwelfthSection);
