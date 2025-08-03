import { Box, CircularProgress, Typography } from '@mui/material';
import {React, useEffect, useState, useRef, useMemo} from 'react';
import clsx from 'clsx';
import styles from './LegendItem.module.css';
import { ReactComponent as Waterways } from '../assets/waterways.svg';
//import useB aseUrl from '@docusaurus/useBaseUrl';
import {Tabs,TabItem } from './Tabs';
//import TabItem from './Tabs';
import { use } from 'react';


export default function LegendItemNew(props, {columns = 3}) {
  // {'Access Private' : 'access/access_PrivateColor' }
  // const [svgString, setSvgString] = useState('');
  const [splitSvgs, setSplitSvgs] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const svgRef = useRef(null);
                        
                        const itemsMap={
        'Regular Building' : 'buildigns/building_RegularColor',
        'Industrianl, garagaes etc.' : 'buildigns/building_IndustrialColor',
        'Residential' : 'buildigns/building_ResidentialColor',
        'Hospital, civic, educational' : 'buildigns/building_HospitalColor',
        'Commercial, retail' : 'buildigns/building_CommercialColor',
        'Place of worship, historic tower' : 'buildigns/building_churchColor',
        'Abandoned, damaged, collapsed' : 'buildigns/building_AbandonedColor',
        'Construction' : 'buildigns/building_ConstructionColor',
        'Proposed' : 'buildigns/building_ProposedColor',
        'Military: barraks' : 'buildigns/building_MilitaryColor',
        'Bunker' : 'buildigns/building_bunker',
        'Railway station' : 'buildigns/building_railway_station',
        'Aerialway station' : 'buildigns/building_aerialway_station',
        'Public transport platform' : 'buildigns/building_public_transport_platform',
        'Aerodrome' : 'buildigns/building_aerodromeColor',
        'Aeroway terminal' : 'buildigns/building_aerowayTerminalColor',
        'Apron' : 'buildigns/building_apronColor',
        'Helipad' : 'buildigns/building_aeroway_helipad',
        }
        const imageFilePath="built-up-areas/built-up_waterways_day"
        const itemsName=[
        'River',
        'Canal',
        'Stream',
        'Drain',
        'Ditch',
        'Intermittent stream',
        'Dam',
        'Weir',
        'Groyne',
        'Breakwater',
        'Pier',
        'Cliff',
        'Slope',
        'Earth bank',
        'Ridge, arete',
        'Valley',
        'Waterfall',
        'Tree row',
        'Cutline',
        'Water-slide'
        ]
  let itemsTmp = [];
  let arr = [];

    //       Object.entries(itemsName).forEach((entry) => {
    //     arr.push(entry[1]);
    //     if (arr.length == 3) {
    //       items.push(arr);
    //       arr = [];
    //     }
    //     });
    // if (arr.length > 0) {
    //   items.push(arr);
    // }
  
   // const fetchSvg = () => {
     // try {
     //   const imageFilePath = '/map/assets/waterways.svg';
        // const response = await fetch(imageFilePath);
        //const response = await fetch(imageFilePath);
        // if (!response.ok) {
          // throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const text = await response.text();
        // setSvgString(svgRef.current.outerHTML);
        // setError(null); // Clear any previous errors
      // } catch (e) {
      //   console.error("Failed to fetch SVG:", e);
      //   setError(`Could not load SVG from path: ${imageFilePath}`);
      //   setSvgString(''); // Clear any previous SVG data
      //   setSplitSvgs([]);
      // }
   // };
  //fetchSvg();


 // const SvgSplitter = ({ filePath }) => {


  // 2. The useEffect hook now has an empty dependency array [].
  // This is because `Waterways` is a static import and not a prop,
  // so the effect only needs to run once after the initial render.


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
    setItems(itemsTmp)

      try {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const originalSvgElement = svgDoc.documentElement;

        if (originalSvgElement.querySelector('parsererror')) {
          throw new Error("Failed to parse the Waterways SVG markup.");
        }

        const groupElements = originalSvgElement.querySelectorAll('g');
        const svgArray = [];

        groupElements.forEach(groupElement => {
          const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          for (const attr of originalSvgElement.attributes) {
            newSvg.setAttribute(attr.name, attr.value);
          }
          newSvg.appendChild(groupElement.cloneNode(true));
          const serializer = new XMLSerializer();
          svgArray.push(serializer.serializeToString(newSvg));
        });

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
    <Box>

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
      <div>
        {splitSvgs.map((svg, index) => (
    <div
                      key={index}
            style={{ 
              border: '1px solid #ccc', 
              margin: '10px', 
              display: 'inline-block', 
              verticalAlign: 'top',
              backgroundColor: '#f9f9f9', // Added a subtle background for contrast
              minWidth: '150px', // Ensure a minimum size
              minHeight: '100px',// Ensure a minimum size
              boxSizing: 'border-box' // Include padding/border in width/height
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
          />

        ))}
        {splitSvgs.length === 0 && !error && <p>No groups found in the SVG.</p>}
      </div>
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
    </Box>

  );
}

