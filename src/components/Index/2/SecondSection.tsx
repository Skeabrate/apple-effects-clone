import React, { useState, useEffect, useContext, useRef } from 'react';
import ScrollContext from 'context/ScrollContext';
import { Wrapper } from './SecondSection.styles';
import HighlitedItem from './HighlitedItem';

const SecondSection: React.FC = () => {
  const [highlightedItem, setHighlightedItem] = useState<number>(1);

  const highlightedItems = [
    { id: 1, caption: 'A dramatically more powerful camera system.' },
    { id: 2, caption: 'A display so responsive, every interaction feels new again.' },
    { id: 3, caption: 'The world’s fastest smartphone chip.' },
    { id: 4, caption: 'Exceptional durability.' },
    { id: 5, caption: 'And a huge leap in battery life.' },
    {
      id: 6,
      caption: 'Let’s Pro.',
      subCaption: ['From £39.54/mo. or £949 before trade‑in*', 'Watch the film Watch the event'],
    },
  ];

  return (
    <Wrapper $highlightedItem={highlightedItem}>
      <video autoPlay loop muted playsInline preload='auto' height='1100' width='1440'>
        <source src='/images/section2.mp4' type='video/mp4' />
      </video>

      <div>
        {highlightedItems.map((item) => (
          <HighlitedItem key={item.id} item={item} setHighlightedItem={setHighlightedItem} />
        ))}
      </div>
    </Wrapper>
  );
};

export default React.memo(SecondSection);
