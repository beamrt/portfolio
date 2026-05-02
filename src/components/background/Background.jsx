import * as background from './styled';
import PropTypes from 'prop-types';
import Star from './Star';

import { useMemo } from 'react';

export default function Background({ children }) {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <background.BackgroundColor>
      {stars.map((star, index) => (
        <background.DecoBackground
          key={index}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            filter: blur,
          }}
        >
          <Star />
        </background.DecoBackground>
      ))}

      {children}
    </background.BackgroundColor>
  );
}

Background.propTypes = {
  children: PropTypes.node,
};
