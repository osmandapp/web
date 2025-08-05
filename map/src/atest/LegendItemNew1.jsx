import { Box, CircularProgress, Typography } from '@mui/material';
import {React, useEffect, useState, useRef, useMemo} from 'react';
import clsx from 'clsx';
import styles from './LegendItem.module.css';
import { ReactComponent as Waterways } from '../assets/waterways.svg';
//import useB aseUrl from '@docusaurus/useBaseUrl';
import {Tabs,TabItem } from './Tabs';
//import TabItem from './Tabs';
import { use } from 'react';


export default function LegendItemNew({itemsName, props}) {

  const [splitSvgs, setSplitSvgs] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const svgRef = useRef(null);
  let itemsTmp = [];
  let arr = [];


   useEffect(() => {

    if (svgRef.current) {
     const svgString = svgRef.current.outerHTML;

      try {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const originalSvgElement = svgDoc.documentElement;

        if (originalSvgElement.querySelector('parsererror')) {
          throw new Error("Failed to parse the Waterways SVG markup.");
        }

        const groupElements = originalSvgElement.querySelectorAll('g');
        const svgArray = [];

        const originalDefs = originalSvgElement.querySelector('defs');
        const originalStyles = originalSvgElement.querySelectorAll('style');

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
          const clonedGroupElement = groupElement.cloneNode(true); // Clone the group
          
          // Check if the cloned group has a 'transform' attribute
          if (clonedGroupElement.hasAttribute('transform')) {
            console.log(`Removing 'transform' attribute from group with ID: ${clonedGroupElement.id || 'N/A'}`);
            clonedGroupElement.removeAttribute('transform'); // Remove it
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
          svgArray.push({id: groupElement.id || `group-${svgArray.length}`, svgString: serializedGroup});
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
    }, []);


  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  };

const rows = chunkArray(splitSvgs, 3);

function useBaseUrl(relativePath){
    return relativePath;
}


  return (


    <div className="container row">
       <div style={{ display: 'none' }}>
        <Waterways ref={svgRef} {...props} />
      </div>
     {// <Tabs groupId="map-legend">
       // <TabItem value="dayMode" label="Day mode"> 
       }
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="col-3" style={{ display: 'none' }} />
                <th className="col-3" style={{ display: 'none' }} />
                <th className="col-3" style={{ display: 'none' }} />
              </tr>
            </thead>
            <tbody>
            {items.map((itemArray, ind) => {
              return <>
                <tr key={ind * 2}>
                  {itemArray.length > 0 && <td className='text--center'>{itemArray[0]}</td>}
                  {itemArray.length > 1 && <td className='text--center'>{itemArray[1]}</td>}
                  {itemArray.length > 2 && <td className='text--center'>{itemArray[2]}</td>}
                </tr>
                <tr key={ind * 2 + 1} className={styles.legendDay}>
                  {itemArray.length > 0 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[0][1] + '_day.svg')}
                    alt={itemArray[0] + " Day"} /></td>}
                  {itemArray.length > 1 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[1][1] + '_day.svg')}
                    alt={itemArray[1] + " Day"} /></td>}
                  {itemArray.length > 2 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[2][1] + '_day.svg')}
                    alt={itemArray[2] + " Day"} /></td>}
                </tr>
              </>

            })}
            </tbody>
          </table>
          End table
      {splitSvgs.length > 0 ? (
        <table className={styles.table}>
          <tbody>
            {rows.map((itemArray, rowIndex) => {
               return <>
              <tr key={rowIndex *2}>

                  {itemArray.length > 0 && <td className='text--center'>{itemArray[0].id}</td>}
                  {itemArray.length > 1 && <td className='text--center'>{itemArray[1].id}</td>}
                  {itemArray.length > 2 && <td className='text--center'>{itemArray[2].id}</td>}
              </tr>
              <tr key={rowIndex * 2 + 1} className={styles.legendDay}>
                {itemArray.length > 0 &&<td> <div className={styles.img}> <div dangerouslySetInnerHTML={{ __html: itemArray[0].svgString }}/></div></td>}
                {itemArray.length > 1 &&<td> <div className={styles.img}> <div dangerouslySetInnerHTML={{ __html: itemArray[1].svgString }}/></div></td>}
                {itemArray.length > 2 &&<td> <div className={styles.img}> <div dangerouslySetInnerHTML={{ __html: itemArray[2].svgString }}/></div></td>}

                 {/* Fill remaining columns if the last row is not full */}
                {itemArray.length < 3 && Array.from({ length: 3 - itemArray.length }).map((_, i) => (
                  <td key={`empty-${rowIndex}-${i}`} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f9f9f9', height: '35px' }}></td>
                ))}
              </tr>
              </>
            })}
          </tbody>
        </table>
      ) : (
        !error && <p>No groups found in the SVG (after processing).</p>
      )}
 
       {/* </TabItem>
        {/*<TabItem value="nightMode" label="Night mode">
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="col-3" style={{ display: 'none' }} />
                <th className="col-3" style={{ display: 'none' }} />
                <th className="col-3" style={{ display: 'none' }} />
              </tr>
            </thead>
            {items.map((itemArray, ind) => {
              return <>
                <tr key={ind * 2}>
                  {itemArray.length > 0 && <td className='text--center'>{itemArray[0][0]}</td>}
                  {itemArray.length > 1 && <td className='text--center'>{itemArray[1][0]}</td>}
                  {itemArray.length > 2 && <td className='text--center'>{itemArray[2][0]}</td>}
                </tr>
                <tr key={ind * 2 + 1} className={styles.legendNight}>
                  {itemArray.length > 0 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[0][1] + '_night.svg')}
                    alt={itemArray[0][0] + " Night"} /></td>}
                  {itemArray.length > 1 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[1][1] + '_night.svg')}
                    alt={itemArray[1][0] + " Night"} /></td>}
                  {itemArray.length > 2 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[2][1] + '_night.svg')}
                    alt={itemArray[2][0] + " Night"} /></td>}
                </tr>
              </>

            })}
          </table>
        </TabItem>

      </Tabs>*/}
    </div>
  );
}

