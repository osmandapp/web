import React, { useEffect, useRef, useState } from 'react';

export default function AutoHeightIframe({ src }) {
  const iframeRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    let timeoutIds = [];

    const updateHeight = () => {
      const iframe = iframeRef.current;

      if (!iframe) {
        return;
      }

      try {
        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow?.document;

        if (!iframeDocument) {
          return;
        }

        const container = iframeDocument.querySelector('.container');

        let nextHeight = 800;

        if (container) {
          const rect = container.getBoundingClientRect();
          const styles = iframe.contentWindow.getComputedStyle(container);

          const marginTop = parseFloat(styles.marginTop) || 0;
          const marginBottom = parseFloat(styles.marginBottom) || 0;

          nextHeight = Math.ceil(rect.height + marginTop + marginBottom);
        } else {
          nextHeight = Math.ceil(
            Math.max(
              iframeDocument.body?.scrollHeight || 0,
              iframeDocument.documentElement?.scrollHeight || 0
            )
          );
        }

        nextHeight = Math.max(400, nextHeight);

        setHeight((currentHeight) => {
          if (Math.abs(currentHeight - nextHeight) < 4) {
            return currentHeight;
          }

          return nextHeight;
        });
      } catch (error) {
        // This can happen if the iframe is loaded from another domain.
        // For /birthday_quiz_preview.html on the same site, it should work.
        console.warn('Could not calculate iframe height:', error);
      }
    };

    const setupObserver = () => {
      const iframe = iframeRef.current;

      if (!iframe) {
        return;
      }

      try {
        const iframeDocument =
          iframe.contentDocument || iframe.contentWindow?.document;

        if (!iframeDocument) {
          return;
        }

        if (resizeObserverRef.current) {
          resizeObserverRef.current.disconnect();
        }

        const container =
          iframeDocument.querySelector('.container') ||
          iframeDocument.body;

        resizeObserverRef.current = new ResizeObserver(() => {
          requestAnimationFrame(updateHeight);
        });

        if (container) {
          resizeObserverRef.current.observe(container);
        }

        const images = iframeDocument.querySelectorAll('img');

        images.forEach((image) => {
          image.addEventListener('load', updateHeight);
        });

        updateHeight();

        timeoutIds = [
          setTimeout(updateHeight, 300),
          setTimeout(updateHeight, 1000),
          setTimeout(updateHeight, 2000),
        ];
      } catch (error) {
        console.warn('Could not set iframe resize observer:', error);
      }
    };

    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('load', setupObserver);
    }

    window.addEventListener('resize', updateHeight);

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', setupObserver);
      }

      window.removeEventListener('resize', updateHeight);

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [src]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="100%"
      height={`${height}px`}
      scrolling="no"
      style={{
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        margin: '20px 0',
        overflow: 'hidden',
        display: 'block',
      }}
      title="OsmAnd Birthday Quiz"
    />
  );
}