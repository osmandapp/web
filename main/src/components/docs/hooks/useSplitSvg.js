import { useMemo, useState } from 'react';

const svgSplitCache = new Map();

function useSplitSvg(svgContent, splitSvgToArray) {
  const [splitSvgs, setSplitSvgs] = useState([]);

  useMemo(() => {
    if (svgContent) {
      if (svgSplitCache.has(svgContent.svgPath)) {
        setSplitSvgs(svgSplitCache.get(svgContent.svgPath));
        return;
      }
      try {
        const svgArray = splitSvgToArray(svgContent.data);
        svgSplitCache.set(svgContent.svgPath, svgArray);
        setSplitSvgs(svgArray);
      } catch (e) {
        setSplitSvgs([]);
      }
    } else {
      setSplitSvgs([]);
    }
  }, [svgContent, splitSvgToArray]);

  return splitSvgs;
};

export default useSplitSvg;