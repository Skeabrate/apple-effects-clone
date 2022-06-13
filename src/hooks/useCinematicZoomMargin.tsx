import { useEffect, useState } from 'react';

export const useCinematicZoomMargin = (videoHeight: number) => {
  const [margin, setMargin] = useState<number>(0);

  useEffect(() => {
    setMargin(window.innerHeight / 2 - videoHeight);
  }, [videoHeight]);

  return { margin };
};
