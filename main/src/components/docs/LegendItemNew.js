import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './LegendItem.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function LegendItemNew({itemsMap, imageFilePath ,itemsName, columns = 3}) {
  // {'Access Private' : 'access/access_PrivateColor' }
  const [svgString, setSvgString] = useState('');
  const [splitSvgs, setSplitSvgs] = useState([]);
  const [error, setError] = useState(null);

  let items = [];
  let arr = [];
  if (!imageFilePath) {
      return;
    }

    const fetchSvg = async () => {
      debugger;
      try {
        const response = await fetch(imageFilePath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setSvgString(text);
        setError(null); // Clear any previous errors
      } catch (e) {
        console.error("Failed to fetch SVG:", e);
        setError(`Could not load SVG from path: ${imageFilePath}`);
        setSvgString(''); // Clear any previous SVG data
        setSplitSvgs([]);
      }
    };
  Object.entries(itemsName).forEach((entry) => {
    arr.push(entry[1]);
    if (arr.length == 3) {
      items.push(arr);
      arr = [];
    }
  });
  if (arr.length > 0) {
    items.push(arr);
  }

 // const SvgSplitter = ({ filePath }) => {




  // Effect to split the SVG once the svgString is loaded
  useEffect(() => {
    if (!svgString) {
      setSplitSvgs([]);
      return;
    }

    const splitSvgByGroup = () => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
      const originalSvgElement = svgDoc.documentElement;

      if (originalSvgElement.querySelector('parsererror')) {
        console.error("Error parsing SVG string");
        setError("The fetched file contains invalid SVG markup.");
        return;
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
        const newSvgString = serializer.serializeToString(newSvg);
        svgArray.push(newSvgString);
      });

      setSplitSvgs(svgArray);
    };

    splitSvgByGroup();
  }, [svgString]); // This effect re-runs if the svgString state changes

  if (error) {
  //  return <div style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</div>;
  }
//}


  return (

    <div className="container row">
      <Tabs groupId="map-legend">
        <TabItem value="dayMode" label="Day mode">
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
            </table>
        </TabItem>
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
        </TabItem>*/}

      </Tabs>
    </div>

  );
}
