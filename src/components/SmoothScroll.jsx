import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SmoothScrollComponent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse',
        // add smooth scrollbar
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className=" bg-gray-200">
     
    </div>
  );
};

export default SmoothScrollComponent;
