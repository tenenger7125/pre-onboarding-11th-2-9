import { useEffect, useRef } from 'react';

export const useScrollObserver = (callback: () => void) => {
  const observerRef = useRef(null);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) callback();
      });
    },
    { threshold: 0.7 },
  );

  useEffect(() => {
    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [observerRef.current]);

  return observerRef;
};
