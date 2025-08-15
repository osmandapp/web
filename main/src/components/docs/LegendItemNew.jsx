import {React, useEffect, useState, useRef, useMemo} from 'react';
import styles from './LegendItem.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export default function LegendItemNew({svgPathDay, itemsName, props}) {

  const [splitSvgs, setSplitSvgs] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  let itemsTmp = [];
  let arr = [];
  const [svgContent, setSvgContent] = useState('');
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!svgPathDay) {
      setSvgContent('');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    fetch(svgPathDay)
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
        console.error('Error fetching SVG:', err);
        setError(err);
        setLoading(false);
      });
  }, [svgPathDay]);

  useEffect(() => {
    if (svgContent !== '') {

      try {
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
            console.log(`Removing 'transform' attribute from group with ID: ${clonedGroupElement.id || 'N/A'}`);
            clonedGroupElement.removeAttribute('transform');
          }
          newSvg.appendChild(clonedGroupElement);
          const toRemove = document.body.insertAdjacentElement("beforeend", newSvg);
          const bbox = getVisualBBox(newSvg);
          toRemove?.remove();
          newSvg.setAttribute('width', bbox.width.toFixed(2));
          newSvg.setAttribute('height', bbox.height.toFixed(2));
          newSvg.setAttribute('viewBox', `${bbox.x.toFixed(2)} ${bbox.y.toFixed(2)} ${bbox.width.toFixed(2)} ${bbox.height.toFixed(2)}`)
          const serializer = new XMLSerializer();
          const serializedGroup = serializer.serializeToString(newSvg);
          svgArray.push({ id: groupElement.id || `group-${svgArray.length}`, svgString: serializedGroup });
        });

        Object.entries(itemsName).forEach((entry) => {
          arr.push(entry[1]);
          if (arr.length == 3) {
            itemsTmp.push(arr);
            arr = [];
          }
        });
        if (arr.length > 0) {
          itemsTmp.push(arr);
        }

        setItems(itemsTmp)
        setSplitSvgs(svgArray);
        setError(null);
      } catch (e) {
        setError(e.message);
        setSplitSvgs([]);
      }
    }
  }, [svgContent]);

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

  if (loading) {
    return <p>Loading SVG...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!svgContent) {
    return <p>No SVG content to display.</p>;
  }

  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

  const rows = chunkArray(splitSvgs, 3);

  return (
    <div className="container row">
      <Tabs groupId="map-legend">
        <TabItem value="dayMode" label="Day mode">
          {splitSvgs.length > 0 ? (
            <table className={styles.table}>
              <tbody>
                {rows.map((itemArray, rowIndex) => {
                  return <>
                    <tr key={rowIndex * 2}>
                      {itemArray.length > 0 && <td key={rowIndex * 2 + itemArray[0].id} className='text--center'>{itemArray[0].id}</td>}
                      {itemArray.length > 1 && <td key={rowIndex * 2 + itemArray[1].id} className='text--center'>{itemArray[1].id}</td>}
                      {itemArray.length > 2 && <td key={rowIndex * 2 + itemArray[2].id} className='text--center'>{itemArray[2].id}</td>}
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
          ) : (
            !error && <p>No groups found in the SVG (after processing).</p>
          )}
        </TabItem>
      </Tabs>
    </div>
  );
}

