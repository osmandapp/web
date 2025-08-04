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
          // Copy attributes (like viewBox, width, height, xmlns) from original SVG

          const attributesToExclude = ['width', 'height', 'viewBox'];
          for (const attr of originalSvgElement.attributes) {
            if (!attributesToExclude.includes(attr.name)) {
              newSvg.setAttribute(attr.name, attr.value);
            }
          }
          // Append cloned <defs> and <style> to the new SVG
          if (originalDefs) {
            newSvg.appendChild(originalDefs.cloneNode(true));
          }
          originalStyles.forEach(styleNode => {
              newSvg.appendChild(styleNode.cloneNode(true));
          });
          
          // --- START OF NEW LOGIC FOR TRANSFORM REMOVAL ---
          const clonedGroupElement = groupElement.cloneNode(true); // Clone the group
          
          // Check if the cloned group has a 'transform' attribute
          if (clonedGroupElement.hasAttribute('transform')) {
            console.log(`Removing 'transform' attribute from group with ID: ${clonedGroupElement.id || 'N/A'}`);
            clonedGroupElement.removeAttribute('transform'); // Remove it
          }
          // --- END OF NEW LOGIC ---

          // Append the (potentially modified) cloned group element to the new SVG
          newSvg.appendChild(clonedGroupElement);
          const serializer = new XMLSerializer();
          svgArray.push(serializer.serializeToString(newSvg));
        });

        setItems(itemsTmp)
        setSplitSvgs(svgArray);
        setError(null);

      } catch (e) {
        setError(e.message);
        setSplitSvgs([]);
      }
    }
  }, []);
//}
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
          
        {splitSvgs.map((svg, index) => (
        <div style={{ 
        display: 'block', 
        lineHeight: '50px', // Crucial: give the parent line box height
        lineWidth: '350px',
        border: '1px dashed blue', // Visualize the line box
        fontSize: '0' // Prevents extra space from font-size affecting baseline
        }}>
        <div
            key={index}
            style={{ 
              border: '1px solid #ccc', 
              margin: '10px', 
              display: 'flex', 
              verticalAlign: 'middle',
              width: '300px',
                        height: '30px',
              backgroundColor: '#f9f9f9', // Added a subtle background for contrast
              boxSizing: 'border-box' // Include padding/border in width/height
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
         />

      </div>
        ))}
        {splitSvgs.length === 0 && !error && <p>No groups found in the SVG.</p>}
 
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

