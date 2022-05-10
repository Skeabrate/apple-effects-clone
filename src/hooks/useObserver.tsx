import { useState, useEffect, useMemo } from 'react';

export const useObserver = (ref: any) => {
  const [isSticky, setIsSticky] = useState(true);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsSticky(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const refCurr = ref.current;

    if (refCurr) observer.observe(refCurr);

    return () => refCurr && observer.unobserve(refCurr);
  }, [ref, options]);

  return { isSticky };
};
