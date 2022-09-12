import { useState, useEffect, useCallback } from 'react';

export const useScrollPosition = () => {
  const [isSticky, setIsSticky] = useState<number>(0);

  const scrollHandler = useCallback(() => setIsSticky(window.scrollY), []);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler, { passive: true });
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return { isSticky };
};
