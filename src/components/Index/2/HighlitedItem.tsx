import ScrollContext from 'context/ScrollContext';
import { useContext, useEffect, useRef } from 'react';

type Item = {
  id: number;
  caption: string;
  subCaption?: string[];
};

export default function HighlitedItem({
  item: { id, caption, subCaption },
  setHighlightedItem,
}: {
  item: Item;
  setHighlightedItem: Function;
}) {
  const { isSticky } = useContext(ScrollContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const refTop = ref.current.getBoundingClientRect().top;
      const middleOfTheScreen = window.innerHeight / 2;

      if (refTop <= middleOfTheScreen) setHighlightedItem(id);
    }
  }, [isSticky, id, setHighlightedItem]);

  return (
    <span ref={ref}>
      {caption}{' '}
      {subCaption?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </span>
  );
}
