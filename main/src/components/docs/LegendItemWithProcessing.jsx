import React, { useEffect, useState, useRef } from 'react';
import styles from './LegendItem.module.css';
import SvgMeasurementComponent from './SvgMeasurementComponent.jsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const svgCache = new Map();
export const TOP_LEVEL_GROUPS_SELECT = ':scope > g';

export default function LegendItemWithProcessing({ svgPath, svgParts }) {

  const SVG_DAY_FILE_SUFFIX = '-day.svg';
  const SVG_NIGHT_FILE_SUFFIX = '-night.svg';
  const WIDTH_ATTR = 'width';
  const HEIGHT_ATTR = 'height';
  const VIEW_BOX_ATTR = 'viewBox';
  const TRANSFORM_ATTR = 'transform';
  const DEFS_SELECT = 'defs';
  const STYLE_SELECT = 'style';
  const [splitSvgsDay, setSplitSvgsDay] = useState([]);
  const [splitSvgsNight, setSplitSvgsNight] = useState([]);
  const [svgContentDay, setSvgContentDay] = useState('');
  const [svgContentNight, setSvgContentNight] = useState('');
  const [loadingDay, setLoadingDay] = useState(true);
  const [loadingNight, setLoadingNight] = useState(true);
  const COLUMN_COUNT = 3;
  const measurementComponentRef = useRef(null);
  const DEBUG = false;

  const useSvgContent = ((svgPath, setSvgContent, setLoading, setSplitSvgs) => {
    if (!svgPath) {
      setSvgContent('');
      setLoading(false);
      return;
    }
    setLoading(true)
    if (svgCache.has(svgPath)) {
      setSplitSvgs(svgCache.get(svgPath));
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
      .catch(err => {
        DEBUG && console.error('Error fetching SVG:', err);
        setLoading(false);
      });
  })

  useEffect(() => {
    useSvgContent(svgPath + SVG_DAY_FILE_SUFFIX, setSvgContentDay, setLoadingDay, setSplitSvgsDay);
    useSvgContent(svgPath + SVG_DAY_FILE_SUFFIX, setSvgContentNight, setLoadingNight, setSplitSvgsNight);
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
      const serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(newSvg);
      const groupBBox = measurementComponentRef?.current.measureGroupBBox(svgString);
      const width = groupBBox.width.toFixed(2);
      const height = groupBBox.height.toFixed(2);
      newSvg.setAttribute(WIDTH_ATTR, width);
      newSvg.setAttribute(HEIGHT_ATTR, height);
      newSvg.setAttribute(VIEW_BOX_ATTR, `${groupBBox.x.toFixed(2)} ${groupBBox.y.toFixed(2)} ${width} ${height}`)
      svgString = serializer.serializeToString(newSvg);
      const title = svgPartsMap.get(groupElement.id)
      svgArray.push({ id: groupElement.id || `group-${svgArray.length}`, svgString, title });
    });
    return svgArray;
  }

  const useSplitSvg = (svgContent, setSplitSvgs) => {
    useEffect(() => {
      if (svgContent) {
        if (svgCache.has(svgContent.svgPath)) {
          setSplitSvgs(svgCache.get(svgContent.svgPath));
          return;
        }
        try {
          const svgArray = splitSvgToArray(svgContent.data);
          svgCache.set(svgContent.svgPath, svgArray);
          setSplitSvgs(svgArray);
        } catch (e) {
          setSplitSvgs([]);
        }
      } else {
        setSplitSvgs([]);
      }
    }, [svgContent]);
  };

  useSplitSvg(svgContentDay, setSplitSvgsDay);
  useSplitSvg(svgContentNight, setSplitSvgsNight);

  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  const rowsDay = chunkArray(splitSvgsDay, COLUMN_COUNT);
  const rowsNight = chunkArray(splitSvgsNight, COLUMN_COUNT);

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
      <SvgMeasurementComponent ref={measurementComponentRef} />
    </div>
  );
}
