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

        const groupElements = originalSvgElement.querySelectorAll('g');
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
          let bbox = newSvg.getBBox();
          toRemove?.remove();
          console.log(bbox);
          newSvg.setAttribute('width', bbox.width.toFixed(2));
          newSvg.setAttribute('height', bbox.height.toFixed(2));
          newSvg.setAttribute('viewBox', `0 0 ${bbox.width.toFixed(2)} ${bbox.height.toFixed(2)}`);
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

