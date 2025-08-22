import React, { useEffect, useState } from 'react';
import styles from './LegendItem.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export default function LegendItemWithSplit({ svgPath, svgParts }) {

  const SVG_DAY_FILE_SUFFIX = '-day.svg';
  const WIDTH_ATTR = 'width';
  const HEIGHT_ATTR = 'height';
  const VIEW_BOX_ATTR = 'viewBox';
  const TRANSFORM_ATTR = 'transform';
  const TOP_LEVEL_GROUPS_SELECT = ':scope > g';
  const DEFS_SELECT = 'defs';
  const STYLE_SELECT = 'style';
  const [splitSvgsDay, setSplitSvgsDay] = useState([]);
  const [splitSvgsNight, setSplitSvgsNight] = useState([]);
  const [svgContentDay, setSvgContentDay] = useState('');
  const [svgContentNight, setSvgContentNight] = useState('');
  const [loadingDay, setLoadingDay] = useState(true);
  const [loadingNight, setLoadingNight] = useState(true);
  const DEBUG = false;

  const useSvgContent = ((svgPath, setSvgContent, setLoading, fileSuffix) => {
    if (!svgPath) {
      setSvgContent('');
      setLoading(false);
      return;
    }
    setLoading(true)
    fetch(svgPath + fileSuffix)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setSvgContent(data);
        setLoading(false);
      })
      .catch(err => {
        DEBUG && console.error('Error fetching SVG:', err);
        setLoading(false);
      });
  })

  useEffect(() => {
    useSvgContent(svgPath, setSvgContentDay, setLoadingDay, SVG_DAY_FILE_SUFFIX);
    useSvgContent(svgPath, setSvgContentNight, setLoadingNight, SVG_DAY_FILE_SUFFIX);
  }, [svgPath]);

  function splitSvgToArray(svgContent) {
    const svgPartsMap = new Map(Object.entries(svgParts));
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const originalSvgElement = svgDoc.documentElement;

    if (originalSvgElement.querySelector('parsererror')) {
      throw new Error('Failed to parse the Waterways SVG markup.');
    }

    const groupElements = originalSvgElement.querySelectorAll(TOP_LEVEL_GROUPS_SELECT);
    const originalDefs = originalSvgElement.querySelector(DEFS_SELECT);
    const originalStyles = originalSvgElement.querySelectorAll(STYLE_SELECT);
    const svgArray = [];
    groupElements.forEach(groupElement => {
      const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const attributesToExclude = [WIDTH_ATTR, HEIGHT_ATTR, VIEW_BOX_ATTR];
      for (const attr of originalSvgElement.attributes) {
        if (!attributesToExclude.includes(attr.name)) {
          newSvg.setAttribute(attr.name, attr.value);
        }
      }
      if (originalDefs) {
        newSvg.appendChild(originalDefs.cloneNode(true));
      }
      originalStyles.forEach(styleNode => {
        newSvg.appendChild(styleNode.cloneNode(true));
      });
      const clonedGroupElement = groupElement.cloneNode(true);
      if (clonedGroupElement.hasAttribute(TRANSFORM_ATTR)) {
        clonedGroupElement.removeAttribute(TRANSFORM_ATTR);
      }
      newSvg.appendChild(clonedGroupElement);
      const toRemove = document.body.insertAdjacentElement('beforeend', newSvg);
      const bbox = getVisualBBox(clonedGroupElement);
      toRemove?.remove();
      newSvg.setAttribute(WIDTH_ATTR, bbox.width.toFixed(2));
      newSvg.setAttribute(HEIGHT_ATTR, bbox.height.toFixed(2));
      newSvg.setAttribute(VIEW_BOX_ATTR, `${bbox.x.toFixed(2)} ${bbox.y.toFixed(2)} ${bbox.width.toFixed(2)} ${bbox.height.toFixed(2)}`)
      const serializer = new XMLSerializer();
      const serializedGroup = serializer.serializeToString(newSvg);
      const title = svgPartsMap.get(groupElement.id)
      svgArray.push({ id: groupElement.id || `group-${svgArray.length}`, svgString: serializedGroup, title });
    });
    return svgArray;
  }

  useEffect(() => {
    if (svgContentDay !== '') {
      try {
        const svgArray = splitSvgToArray(svgContentDay)
        setSplitSvgsDay(svgArray);
      } catch (e) {
        setSplitSvgsDay([]);
      }
    }
  }, [svgContentDay]);

  useEffect(() => {
    if (svgContentNight !== '') {
      try {
        const svgArray = splitSvgToArray(svgContentNight)
        setSplitSvgsNight(svgArray);
      } catch (e) {
        setSplitSvgsNight([]);
      }
    }
  }, [svgContentNight]);

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

  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  const rowsDay = chunkArray(splitSvgsDay, 3);
  const rowsNight = chunkArray(splitSvgsNight, 3);

  const SvgTable = ({ rows, mode }) => {
    const isNightMode = mode === 'night';
    const hasRows = isNightMode ? rowsNight.length > 0 : rowsDay.length > 0;
    const isLoading = isNightMode ? loadingNight : loadingDay;
    const hasContent = isNightMode ? !svgContentNight && !loadingNight : !svgContentDay && !loadingDay
    const legendStyle = isNightMode ? styles.legendNight : styles.legendDay;

    if (hasRows) {
      return (
        <table className={styles.table}>
          <tbody>
            {rows.map((itemArray, rowIndex) => (
              <React.Fragment key={`${mode}-row-${rowIndex}`}>
                <tr>
                  {itemArray.map((item, itemIndex) => (
                    <td key={`${mode}-title-${rowIndex}-${item.id || itemIndex}`} className='text--center'>
                      {item.title}
                    </td>
                  ))}
                </tr>
                <tr className={legendStyle}>
                  {itemArray.map((item, itemIndex) => (
                    <td key={`${mode}-svg-${rowIndex}-${item.id || itemIndex}`} className={styles.svg}>
                      <div dangerouslySetInnerHTML={{ __html: item.svgString }} />
                    </td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      );
    } else {
      DEBUG && !isLoading && <p>No groups found in the SVG (after processing).</p>
    }
    if (isLoading) {
      return <p>Loading SVG...</p>
    }
    if (!hasContent) {
      return <p>No SVG content to display.</p>
    }
  };

  return (
    <div className='container row'>
      <Tabs groupId='map-legend'>
        <TabItem value='dayMode' label='Day mode'>
          <SvgTable rows={rowsDay} mode='day' />
        </TabItem>
        <TabItem value='nightMode' label='Night mode'>
          <SvgTable rows={rowsNight} mode='night' />
        </TabItem>
      </Tabs>
    </div>
  );
}

