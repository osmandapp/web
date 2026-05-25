import React, { useEffect, useRef, useState } from 'react';

export default function AutoHeightIframe({
  src,
  minHeight = 500,
  maxHeight = 900,
}) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(minHeight);

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

        if (!container) {
          setHeight(minHeight);
          return;
        }

        const rect = container.getBoundingClientRect();
        const styles = iframe.contentWindow.getComputedStyle(container);

        const marginTop = parseFloat(styles.marginTop) || 0;
        const marginBottom = parseFloat(styles.marginBottom) || 0;

        const contentHeight = Math.ceil(
          rect.height + marginTop + marginBottom + 8
        );

        const nextHeight = Math.min(
          Math.max(contentHeight, minHeight),
          maxHeight
        );

        setHeight((currentHeight) => {
          if (Math.abs(currentHeight - nextHeight) < 4) {
            return currentHeight;
          }

          return nextHeight;
        });
      } catch (error) {
        console.warn('Could not calculate iframe height:', error);
      }
    };

    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      /**
       * Important:
       * We do NOT accept height from iframe.
       * We only recalculate height ourselves.
       */
      if (
        event.data &&
        event.data.type === 'osmandQuizContentChanged'
      ) {
        updateHeight();
      }
    };

    const setupIframe = () => {
      updateHeight();

      timeoutIds = [
        setTimeout(updateHeight, 300),
        setTimeout(updateHeight, 800),
        setTimeout(updateHeight, 1500),
      ];
    };

    const iframe = iframeRef.current;

    if (iframe) {
      iframe.addEventListener('load', setupIframe);
    }

    window.addEventListener('resize', updateHeight);
    window.addEventListener('message', handleMessage);

    setupIframe();

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', setupIframe);
      }

      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('message', handleMessage);

      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [src, minHeight, maxHeight]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      width="100%"
      height={`${height}px`}
      scrolling="auto"
      style={{
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        margin: '20px 0',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'block',
      }}
      title="OsmAnd Birthday Quiz"
    />
  );
}