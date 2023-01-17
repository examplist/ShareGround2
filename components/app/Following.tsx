import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as s from 'styles/components/Following';

export default function Following() {
  const refToTop = useRef<HTMLButtonElement>(null);

  const click$toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const where = [
        // from
        { transform: `translateY(${scrollY}px)` },
        // to
        { transform: `translateY(${scrollY}px)` },
      ];
      const how: KeyframeAnimationOptions = {
        duration: 300,
        iterations: 1,
        delay: 300,
        fill: 'forwards',
        easing: 'ease-in',
      };
      if (refToTop.current) {
        refToTop.current.animate(where, how);
      }
    });
  }, []);

  return (
    <s.toTop ref={refToTop} onClick={click$toTop}>
      <FontAwesomeIcon icon={faAngleUp} />
    </s.toTop>
  );
}
