import BlueLink from 'components/BlueLink/BlueLink';
import React from 'react';
import ArticleSvg from './ArticleSvg';
import {
  StyledFirstArticle,
  StyledGrid,
  StyledGridArticle,
  StyledHeading,
  StyledLinks,
  Wrapper,
} from './FourteenthSection.styles';

const FourteenthSection: React.FC = () => {
  const gridContent = [
    {
      header: 'AirPods',
      text: 'Take the perfect iPhone accessory and make it yours with free engraving — only from Apple.',
      links: ['Shop', 'Learn more'],
      image: '/images/accessories_1__coig8kr925aq_large.jpg',
    },
    {
      header: 'AirTag',
      text: 'Attach one to your keys. Put another in your backpack. If they’re misplaced, simply use the Find My app.',
      links: ['Shop', 'Learn more'],
      image: '/images/accessories_2__esyrgqqfga6a_large.jpg',
    },
    {
      header: 'MagSafe',
      text: 'Snap on a magnetic case, wallet, or both. And get faster wireless charging.',
      links: ['Shop MagSafe accessories'],
      image: '/images/accessories_3__fwokxv7lak6e_large.jpg',
    },
  ];

  return (
    <Wrapper>
      <StyledHeading>Check it out.</StyledHeading>
      <StyledFirstArticle>
        <div>
          <header>
            <ArticleSvg />
            <h3>See iPhone 13 Pro and 13 Pro Max in AR.</h3>
          </header>

          <p>Open this page in Safari on your iPhone or iPad.</p>
        </div>

        <img src='/images/ar_alpine_green__c9l94dc60nue_large.jpg' alt='ar_alpine_green' />
      </StyledFirstArticle>

      <StyledHeading>Deck it out.</StyledHeading>
      <StyledGrid>
        {gridContent.map(({ header, text, links, image }, index) => (
          <StyledGridArticle $isLast={index === gridContent.length - 1}>
            <div>
              <header>
                <h3>{header}</h3>
              </header>

              <p>{text}</p>

              <StyledLinks>
                {links.map((item, index) => (
                  <BlueLink key={index} label={item} />
                ))}
              </StyledLinks>
            </div>

            <img src={image} alt={text} />
          </StyledGridArticle>
        ))}
      </StyledGrid>
    </Wrapper>
  );
};

export default FourteenthSection;
