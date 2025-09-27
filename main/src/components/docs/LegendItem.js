import React from 'react';
import styles from './legenditem.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Translate from '@site/src/components/Translate.js';
import LazyIcon from './LazyIcon';

export default function LegendItem({ itemsMap }) {
  let items = [];
  let arr = [];
  Object.entries(itemsMap).forEach((entry) => {
    arr.push(entry);
    if (arr.length === 3) {
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
                {itemArray.map(([title, image]) => (
                  <td key={`title-${image.folderName}`} className='text--center'>
                    {<Translate android="yes" id={'poi_' + image.poiName} getFirstPart={true} />}
                    {image.poiName2 !== null ? (
                      <>{' ('}<Translate android="yes" id={'poi_' + image.poiName2} getFirstPart={true} />{')'}
                      </>
                    ) : null}
                  </td>
                ))}
              </tr>
              <tr className={legendStyle}>
                {itemArray.map(([title, image]) => (
                  <td key={`image-${image.folderName}`}>
                    <LazyIcon
                      legendBackground={legendStyle}
                      className={styles.img}
                      src={useBaseUrl(`/img/legend/osmand/${image.folderName}${imageSuffix}`)}
                      alt={`${title}${altSuffix}`}
                    />
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
          <LegendTable items={items} useBaseUrl={useBaseUrl} mode="day" />
        </TabItem>
        <TabItem value="nightMode" label="Night mode">
          <LegendTable items={items} useBaseUrl={useBaseUrl} mode="night" />
        </TabItem>
      </Tabs>
    </div>
  );
}