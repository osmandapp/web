import React from 'react';
import styles from './legenditem.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Translate from '@site/src/components/Translate.js';

export default function LegendItem({ itemsMap }) {
  // {'Access Private' : 'access/access_PrivateColor' }
  let items = [];
  let arr = [];
  Object.entries(itemsMap).forEach((entry) => {
    arr.push(entry);
    if (arr.length == 3) {
      items.push(arr);
      arr = [];
    }
  });
  if (arr.length > 0) {
    items.push(arr);
  }

  const LegendTable = ({ items, useBaseUrl, mode }) => {
    const isNightMode = mode === 'night';
    const legendStyle = isNightMode ? styles.legendNight : styles.legendDay;
    const imageSuffix = isNightMode ? '_night.svg' : '_day.svg';
    const altSuffix = isNightMode ? ' Night' : ' Day';

    return (
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className="col-3" style={{ display: 'none' }} />
            <th className="col-3" style={{ display: 'none' }} />
            <th className="col-3" style={{ display: 'none' }} />
          </tr>
          {items.map((itemArray, rowIndex) => (
            <React.Fragment key={`legend-row-${rowIndex}`}>
              <tr>
                {itemArray.map(([title, imageName]) => (
                  <td key={`title-${imageName}`} className='text--center'>
                    {title.startsWith('poi_') ? <Translate android="yes" id={title} getFirstPart={true} /> : title}
                  </td>
                ))}
              </tr>
              <tr className={legendStyle}>
                {itemArray.map(([title, imageName]) => (
                  <td key={`image-${imageName}`}>
                    <img className={styles.img} src={useBaseUrl(`/img/legend/osmand/${imageName}${imageSuffix}`)} alt={`${title}${altSuffix}`} />
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container row">
      <Tabs groupId="map-legend">
        <TabItem value="dayMode" label="Day mode">
          <LegendTable items={items} useBaseUrl={useBaseUrl}  mode="day" />
        </TabItem>
        <TabItem value="nightMode" label="Night mode">
          <LegendTable items={items} useBaseUrl={useBaseUrl} mode="night"/>
        </TabItem>
      </Tabs>
    </div>
  );
}
