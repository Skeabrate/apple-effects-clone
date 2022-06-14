import React, { useEffect, useState } from 'react';
import { Wrapper } from './CinematicZoomMarginWrapper.styles';

interface Props {
  children: React.ReactNode;
  videoHeight: number;
  hasImgOrnament?: boolean;
}

const CinematicZoomMarginWrapper: React.FC<Props> = ({ children, videoHeight, hasImgOrnament }) => {
  const [margin, setMargin] = useState<number>(0);

  useEffect(() => {
    const withOrnament = window.innerHeight / 2 - videoHeight;
    const withoutOrnament = window.innerHeight / 2 - videoHeight / 3;
    setMargin(hasImgOrnament ? withOrnament : withoutOrnament);
  }, [videoHeight, hasImgOrnament]);

  return <Wrapper $margin={margin}>{children}</Wrapper>;
};

export default CinematicZoomMarginWrapper;
