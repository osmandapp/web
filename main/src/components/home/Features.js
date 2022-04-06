import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Map',
    Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <ul>
        <li>Carry highly detailed, fully offline maps of any region world wide on your device!</li>
        <li>Display your position and orientation on the map</li>
        <li>Optionally align the map according to compass or your direction of motion</li>
        <li>Save your most important places as Favorites</li>
        <li>Display POIs (points of interest) around you</li>
        <li>Can also display specialized online tile maps</li>
        <li>Can display different overlays like touring/navigation GPX tracks and additional maps with customizable transparency</li>
        <li>Optionally display place names in English, local, or phonetic spelling</li>
      </ul>
    ),
  },
  {
    title: 'Navigation',
    Svg: require('../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <ul>
        <li>Works totally offline (no roaming charges when you are abroad)</li>
        <li>Turn-by-turn voice guidance (recorded and synthesized voices)</li>
        <li>Announce traffic warnings like stop signs, pedestrian crosswalks, or when you are exceeding the speed limit</li>
        <li>Optional lane guidance, street name display, and estimated time of arrival</li>
        <li>Supports intermediate points on your itinerary</li>
        <li>Automatic re-routing whenever you deviate from the route</li>
        <li>Search for places by address, by type (e.g.: restaurant, hotel, gas station, museum), or by geographical coordinates</li>
      </ul>
    ),
  },


  {
    title: 'Bicycle and pedestrian routes',
    Svg: require('../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li>The offline maps include foot, hiking, and bike paths, great for outdoor activities</li>
        <li>Map display and navigation mode for bicycle and pedestrian</li>
        <li>Optionally display public transport stops (bus, tram, train) including line names</li>
        <li>Optional trip recording to local GPX file or online service</li>
        <li>Optional speed and altitude display</li>
        <li>Display of contour lines and hill-shading (via additional plugin)</li>
      </ul>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <ul>
        <li>High quality information from the 2 best collaborative projects of the world</li>
        <li>Compact offline vector maps</li>
        <li>Global maps from OpenStreetMap, available per country or region</li>
        <li>Wikipedia POIs, great for sightseeing</li>
        <li>Always up-to-date maps (updated once a month)</li>
        <li>Hourly map updates (OsmAnd Live)</li>
        <li>Online or cached raster tile maps</li>
      </ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className="text--left">{description}</div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
