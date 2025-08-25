import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { TOP_LEVEL_GROUPS_SELECT } from './LegendItemWithProcessing';

const SvgMeasurementComponent = forwardRef((props, ref) => {
  const measurementContainerRef = useRef(null);
  const SVG_SELECT = 'svg';
  const DEBUG = false;

  useImperativeHandle(ref, () => ({
    /**
     * Measures the bounding box of an first group in SVG string.
     * @param {string} svgString The full string of the SVG element to measure.
     * @returns {DOMRect | null} The bounding box of the SVG's content, or null if failed.
     */
    measureGroupBBox: (svgString) => {
      const container = measurementContainerRef.current;
      if (!container) {
        DEBUG && console.error("Measurement container is not ready.");
        return null;
      }
      
      try {
        container.innerHTML = svgString;
        const svgElement = container.querySelector(SVG_SELECT);
        const groupElement = svgElement.querySelector(TOP_LEVEL_GROUPS_SELECT);
        if (!groupElement) {
          DEBUG && console.error("Provided string does not contain an SVG element.");
          return null;
        }
        const groupBBox = getVisualBBox(groupElement)
        return groupBBox;
      } finally {
        container.innerHTML = '';
      }
    }
    }));

    function getSvgGroupVisualMetrics(groupElement) {
      const groupBBox = groupElement.getBBox();
      let topStroke = 0, bottomStroke = 0, leftStroke = 0, rightStroke = 0;
      const topY = groupBBox.y;
      const bottomY = groupBBox.y + groupBBox.height;
      const leftX = groupBBox.x;
      const rightX = groupBBox.x + groupBBox.width;
      for (const child of groupElement.children) {
        const childBBox = child.getBBox();
        const style = window.getComputedStyle(child);
        const strokeWidth = parseFloat(style.getPropertyValue('stroke-width')) || 0;
        if (childBBox.y === topY) { topStroke = Math.max(topStroke, strokeWidth); }
        if (childBBox.y + childBBox.height === bottomY) { bottomStroke = Math.max(bottomStroke, strokeWidth); }
        if (childBBox.x === leftX) { leftStroke = Math.max(leftStroke, strokeWidth); }
        if (childBBox.x + childBBox.width === rightX) { rightStroke = Math.max(rightStroke, strokeWidth); }
      }
      return { groupBBox, topStroke, bottomStroke, leftStroke, rightStroke };
    }
  
    function getVisualBBox(groupElement) {
      if (!groupElement || typeof groupElement.getBBox !== 'function') {
        DEBUG && console.error('Invalid SVG group element provided.');
        return { x: 0, y: 0, width: 0, height: 0 };
      }
      const { groupBBox, topStroke, bottomStroke, leftStroke, rightStroke } = getSvgGroupVisualMetrics(groupElement);
      const finalWidth = groupBBox.width + (leftStroke / 2) + (rightStroke / 2);
      const finalHeight = groupBBox.height + (topStroke / 2) + (bottomStroke / 2);
      const finalX = groupBBox.x - (leftStroke / 2);
      const finalY = groupBBox.y - (topStroke / 2);
      return { x: finalX, y: finalY, width: finalWidth, height: finalHeight };
    }

  // The hidden div for our off-screen rendering
  const containerStyles = {
    position: 'absolute',
    visibility: 'hidden',
    pointerEvents: 'none',
    zIndex: -1,
  };

  return <div ref={measurementContainerRef} style={containerStyles} />;
});

export default SvgMeasurementComponent;