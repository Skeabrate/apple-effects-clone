import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [isSticky, setIsSticky] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => setIsSticky(window.scrollY);

    document.addEventListener('scroll', scrollHandler, { passive: true });

    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return { isSticky };
};
