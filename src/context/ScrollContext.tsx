import React from 'react';

interface Ctx {
  isSticky: number;
}

const ScrollContext = React.createContext<Ctx>({
  isSticky: 0,
});

export default ScrollContext;
