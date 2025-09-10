import React, { useState, useRef, useEffect } from 'react';

export default function LazyVisible({ children, once = true, options }) {

  const placeholderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ref = placeholderRef.current;
    if (!ref) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(ref);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [once, options]);

  const content = typeof children === 'function'
    ? children({ isVisible })
    : isVisible ? children : null;

  return (
    <div ref={placeholderRef}>
      {content}
    </div>
  );
}