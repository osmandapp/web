import { useEffect, useState } from 'react';
import styles from './LegendItem.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export default function LegendItemNew({ svgPath, itemsName }) {

  const [splitSvgsDay, setSplitSvgsDay] = useState([]);
  const [splitSvgsNight, setSplitSvgsNight] = useState([]);
  const [error, setError] = useState(null);
  const [svgContentDay, setSvgContentDay] = useState('');
  const [svgContentNight, setSvgContentNight] = useState('');
  const [loadingDay, setLoadingDay] = useState(true);
  const [loadingNight, setLoadingNight] = useState(true);

  useEffect(() => {
    if (!svgPath) {
      setSvgContentDay('');
      setSvgContentNight('');
      setLoadingDay(false);
      setLoadingNight(false);
      return;
    }
    setLoadingDay(true);
    setLoadingNight(true);
    setError(null);

    fetch(svgPath + "-day.svg")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setSvgContentDay(data);
        setLoadingDay(false);
      })
      .catch(err => {
        console.error('Error fetching SVG:', err);
        setError(err);
        setLoadingDay(false);
      });
    fetch(svgPath + "-day.svg")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setSvgContentNight(data);
        setLoadingNight(false);
      })
      .catch(err => {
        console.error('Error fetching SVG:', err);
        setError(err);
        setLoadingNight(false);
      });
  }, [svgPath]);

  function splitSvgToArray(svgContent) {
    const itemsMap = new Map(Object.entries(itemsName));
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const originalSvgElement = svgDoc.documentElement;

    if (originalSvgElement.querySelector('parsererror')) {
      throw new Error("Failed to parse the Waterways SVG markup.");
    }

    const topLevelGroups = ':scope > g';
    const groupElements = originalSvgElement.querySelectorAll(topLevelGroups);
    const originalDefs = originalSvgElement.querySelector('defs');
    const originalStyles = originalSvgElement.querySelectorAll('style');
    const svgArray = [];
    groupElements.forEach(groupElement => {
      const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const attributesToExclude = ['width', 'height', 'viewBox'];
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
      if (clonedGroupElement.hasAttribute('transform')) {
        clonedGroupElement.removeAttribute('transform');
      }
      newSvg.appendChild(clonedGroupElement);
      const toRemove = document.body.insertAdjacentElement("beforeend", newSvg);
      const bbox = getVisualBBox(clonedGroupElement);
      toRemove?.remove();
      newSvg.setAttribute('width', bbox.width.toFixed(2));
      newSvg.setAttribute('height', bbox.height.toFixed(2));
      newSvg.setAttribute('viewBox', `${bbox.x.toFixed(2)} ${bbox.y.toFixed(2)} ${bbox.width.toFixed(2)} ${bbox.height.toFixed(2)}`)
      const serializer = new XMLSerializer();
      const serializedGroup = serializer.serializeToString(newSvg);
      const title = itemsMap.get(groupElement.id)
      svgArray.push({ id: groupElement.id || `group-${svgArray.length}`, svgString: serializedGroup, title });
    });
    return svgArray;
  }

  useEffect(() => {
    if (svgContentDay !== '') {
      try {
        const svgArray = splitSvgToArray(svgContentDay)
        setSplitSvgsDay(svgArray);
        setError(null);
      } catch (e) {
        setError(e.message);
        setSplitSvgsDay([]);
      }
    }
  }, [svgContentDay]);

  useEffect(() => {
    if (svgContentNight !== '') {
      try {
        const svgArray = splitSvgToArray(svgContentNight)
        setSplitSvgsNight(svgArray);
        setError(null);
      } catch (e) {
        setError(e.message);
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
      console.error("Invalid SVG group element provided.");
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    const { groupBBox, topStroke, bottomStroke, leftStroke, rightStroke } = getSvgGroupVisualMetrics(groupElement);
    const finalWidth = groupBBox.width + (leftStroke / 2) + (rightStroke / 2);
    const finalHeight = groupBBox.height + (topStroke / 2) + (bottomStroke / 2);
    const finalX = groupBBox.x - (leftStroke / 2);
    const finalY = groupBBox.y - (topStroke / 2);
    return { x: finalX, y: finalY, width: finalWidth, height: finalHeight };
  }

  if (error) {
    console.error(error.message);
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

  const SvgTable = ({ rows }) => {
    return (<table className={styles.table}>
      <tbody>
        {rows.map((itemArray, rowIndex) => {
          return <>
            <tr key={rowIndex * 2}>
              {itemArray.length > 0 && <td key={rowIndex * 2 + itemArray[0].id} className='text--center'>{itemArray[0].title}</td>}
              {itemArray.length > 1 && <td key={rowIndex * 2 + itemArray[1].id} className='text--center'>{itemArray[1].title}</td>}
              {itemArray.length > 2 && <td key={rowIndex * 2 + itemArray[2].id} className='text--center'>{itemArray[2].title}</td>}
            </tr>
            <tr key={rowIndex * 2 + 1} className={styles.legendDay}>
              {itemArray.length > 0 && <td key={rowIndex * 2 + 1 + itemArray[0].id} className={styles.svg}>
                <div dangerouslySetInnerHTML={{ __html: itemArray[0].svgString }} /></td>}
              {itemArray.length > 1 && <td key={rowIndex * 2 + 1 + itemArray[1].id} className={styles.svg}>
                <div dangerouslySetInnerHTML={{ __html: itemArray[1].svgString }} /></td>}
              {itemArray.length > 2 && <td key={rowIndex * 2 + 1 + itemArray[2].id} className={styles.svg}>
                <div dangerouslySetInnerHTML={{ __html: itemArray[2].svgString }} /></td>}
            </tr>
          </>
        })}
      </tbody>
    </table>
    );
  };

  return (
    <div className="container row">
      <Tabs groupId="map-legend">
        <TabItem value="dayMode" label="Day mode">
          {splitSvgsDay.length > 0 ? (
            <SvgTable rows={rowsDay} />
          ) : (
            !error && !loadingDay && <p>No groups found in the SVG (after processing).</p>
          )}
          {loadingDay && <p>Loading SVG...</p>}
          {!svgContentDay && !loadingDay && <p>No SVG content to display.</p>}
        </TabItem>
        <TabItem value="nightMode" label="Night mode">
          {splitSvgsNight.length > 0 ? (
            <SvgTable rows={rowsNight} />
          ) : (
            !error && !loadingNight && <p>No groups found in the SVG (after processing).</p>
          )}
          {loadingNight && <p>Loading SVG...</p>}
          {!svgContentNight && !loadingNight && <p>No SVG content to display.</p>}
        </TabItem>
      </Tabs>
    </div>
  );
}

