'use client';

import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      {
        threshold: 0.3,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={` ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1500`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
