import React from 'react';
import clsx from 'clsx';
import styles from './LegendItem.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function LegendItem({itemsMap, columns = 3}) {
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
                  {itemArray.length > 0 && <td className='text--center'>{itemArray[0][0]}</td>}
                  {itemArray.length > 1 && <td className='text--center'>{itemArray[1][0]}</td>}
                  {itemArray.length > 2 && <td className='text--center'>{itemArray[2][0]}</td>}
                </tr>
                <tr key={ind * 2 + 1} className={styles.legendDay}>
                  {itemArray.length > 0 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[0][1] + '_day.svg')}
                    alt={itemArray[0][0] + " Day"} /></td>}
                  {itemArray.length > 1 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[1][1] + '_day.svg')}
                    alt={itemArray[1][0] + " Day"} /></td>}
                  {itemArray.length > 2 && <td><img className={styles.img} src={useBaseUrl('/img/legend/osmand/' + itemArray[2][1] + '_day.svg')}
                    alt={itemArray[2][0] + " Day"} /></td>}
                </tr>
              </>

            })}
            </table>
        </TabItem>
        <TabItem value="nightMode" label="Night mode">
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

      </Tabs>
    </div>

  );
}
