import { useEffect, useState } from 'react';

const svgCache = new Map();

function useSvgContent(svgPath) {
  const [svgContent, setSvgContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!svgPath) {
      setSvgContent('');
      setLoading(false);
      return;
    }
    setLoading(true)
    if (svgCache.has(svgPath)) {
      setSvgContent(svgCache.get(svgPath));
      setLoading(false)
      return;
    }
    fetch(svgPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setSvgContent({ svgPath, data });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [svgPath]);

  return { svgContent, loading };
}

export default useSvgContent;