import React, { useRef, useCallback } from 'react';
import styles from './legenditem.module.css';
import useSvgContent from './hooks/useSvgContent.js';
import useSplitSvg from './hooks/useSplitSvg.js';
import SvgMeasurementComponent from './SvgMeasurementComponent.jsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import LazyVisible from '@site/src/components/docs/legend/LazyVisible';
export const TOP_LEVEL_GROUPS_SELECT = ':scope > g';

export default function LegendItemWithProcessing({ svgPath, svgParts, height }) {
  const measurementComponentRef = useRef(null);

  const chunkArray = (arr, chunkSize) => {
    if (!arr) {
      return [];
    }
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  const SvgProcessor = ({ mode }) => {
    const SVG_DAY_FILE_SUFFIX = '-day.svg';
    const SVG_NIGHT_FILE_SUFFIX = '-night.svg';
    const svgFileSuffix = mode === 'night' ? SVG_NIGHT_FILE_SUFFIX : SVG_DAY_FILE_SUFFIX;

    const splitSvgToArray = useCallback((svgContent) => {
      const svgPartsMap = new Map(Object.entries(svgParts));
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const originalSvgElement = svgDoc.documentElement;
      if (originalSvgElement.querySelector('parsererror')) {
        throw new Error('Failed to parse the SVG markup.');
      }
      const groupElements = originalSvgElement.querySelectorAll(TOP_LEVEL_GROUPS_SELECT);
      const svgArray = [];
      groupElements.forEach(groupElement => {
        const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        for (const attr of originalSvgElement.attributes) {
          if (!['width', 'height', 'viewBox'].includes(attr.name)) {
            newSvg.setAttribute(attr.name, attr.value);
          }
        }
        if (originalSvgElement.querySelector('defs')) {
          newSvg.appendChild(originalSvgElement.querySelector('defs').cloneNode(true));
        }
        originalSvgElement.querySelectorAll('style').forEach(s => newSvg.appendChild(s.cloneNode(true)));
        const clonedGroupElement = groupElement.cloneNode(true);
        if (clonedGroupElement.hasAttribute('transform')) {
           clonedGroupElement.removeAttribute('transform');
        }
        newSvg.appendChild(clonedGroupElement);
        const serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(newSvg);
        const groupBBox = measurementComponentRef?.current.measureGroupBBox(svgString);
        const width = groupBBox.width.toFixed(2);
        const heightVal = groupBBox.height.toFixed(2);
        newSvg.setAttribute('width', width);
        newSvg.setAttribute('height', heightVal);
        newSvg.setAttribute('viewBox', `${groupBBox.x.toFixed(2)} ${groupBBox.y.toFixed(2)} ${width} ${heightVal}`);
        svgString = serializer.serializeToString(newSvg);
        const title = svgPartsMap.get(groupElement.id);
        svgArray.push({ id: groupElement.id || `group-${svgArray.length}`, svgString, title });
      });
      return svgArray;
    }, [svgParts]);

    const { svgContent, loading } = useSvgContent(svgPath + svgFileSuffix);
    const splitSvgs = useSplitSvg(svgContent, splitSvgToArray);
    const rows = chunkArray(splitSvgs, 3);
    const legendStyle = mode === 'night' ? styles.legendNight : styles.legendDay;

    if (loading) {
      return <p>Processing Interactive Map...</p>;
    }

    return (
      <table className={styles.table}>
        <tbody>
          {rows.map((itemArray, rowIndex) => (
            <React.Fragment key={`${mode}-row-${rowIndex}`}>
              <tr>
                {itemArray.map((item) => (
                  <td key={`${mode}-title-${item.id}`} className='text--center'>
                    {item.title}
                  </td>
                ))}
              </tr>
              <tr className={legendStyle}>
                {itemArray.map((item) => (
                  <td key={`${mode}-svg-${item.id}`} className={styles.svg}>
                    <div dangerouslySetInnerHTML={{ __html: item.svgString }} />
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  const placeholderHeight = height ? `${height}px` : '400px';

  return (
    <div className='container row'>
      <Tabs groupId='map-legend'>
        <TabItem value='dayMode' label='Day mode'>
          <div style={{ minHeight: placeholderHeight, width: '100%' }}>
            <LazyVisible once={true}>
              {({ isVisible }) => isVisible ?
                <SvgProcessor mode="day" /> :
                <div className={styles.loadingIndicator}>Loading Legend...</div>
              }
            </LazyVisible>
          </div>
        </TabItem>
        <TabItem value='nightMode' label='Night mode'>
          <div style={{ minHeight: placeholderHeight, width: '100%' }}>
            <LazyVisible once={true}>
              {({ isVisible }) => isVisible ?
                <SvgProcessor mode="night" /> :
                <div className={styles.loadingIndicator}>Loading Legend...</div>
              }
            </LazyVisible>
          </div>
        </TabItem>
      </Tabs>
      <SvgMeasurementComponent ref={measurementComponentRef} />
    </div>
  );
}