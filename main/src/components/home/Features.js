import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Map',
    Svg: require('../../../static/img/svg/explore.svg').default,
    description: (
      <ul>
        <li>Carry highly detailed, fully offline maps of any region world wide on your device!</li>
        <li>Offline 3D terrain maps: 3D relief, hillshade, and slope</li>
        <li>Map styles for every activity: Touring, Topo, Offroad, Winter and Ski, Nautical, Desert, and more</li>
        <li>Display your position and orientation on the map</li>
        <li>Optionally align the map according to compass or your direction of motion</li>
        <li>Save your most important places as Favorites</li>
        <li>Display POIs (points of interest) around you</li>
        <li>Popular Places: top landmarks and attractions with photos from Wikipedia and Wikimedia Commons</li>
        <li>Offline Wikipedia articles for POIs and travel guides based on Wikivoyage, great for sightseeing</li>
        <li>Use raster maps (satellite, topo, online or offline tiles) as the main map, overlay, or underlay with adjustable transparency</li>
        <li>Display GPX tracks on the map</li>
        <li>Optionally display place names in English, local, or phonetic spelling</li>
        <li>Weather forecast layers: temperature, precipitation, wind, clouds, and pressure</li>
        <li>Customizable screen: choose your widgets, Quick Action buttons, and map markers</li>
      </ul>
    ),
  },
  {
    title: 'Navigation',
    Svg: require('../../../static/img/svg/directions.svg').default,
    description: (
      <ul>
        <li>Works totally offline (no roaming charges when you are abroad)</li>
        <li>Turn-by-turn voice guidance (recorded and synthesized voices)</li>
        <li>Announce traffic warnings like stop signs, pedestrian crosswalks, or when you are exceeding the speed limit</li>
        <li>Optional lane guidance, street name display, and estimated time of arrival</li>
        <li>Supports intermediate points on your itinerary</li>
        <li>Automatic re-routing whenever you deviate from the route</li>
        <li>Search for places by address, by type (e.g.: restaurant, hotel, gas station, museum), or by geographical coordinates</li>
        <li>Profiles for car, truck, motorcycle, bicycle, walking, horse riding, skiing, boat, train, and more</li>
        <li>Create your own profiles with custom routing, map style, widgets, and settings</li>
        <li>Fine-tune routing: avoid specific roads, prefer or avoid unpaved roads, and set vehicle size, weight, and fuel type</li>
        <li>Route details: distance, time, elevation graph, road surface and other road attributes, turn-by-turn instructions</li>
        <li>Plan a route: draw your own route by points, following roads or straight lines, save it as a GPX track, and navigate along it</li>
        <li>Routing modes: offline OsmAnd routing, BRouter, online routing, direct-to-point, and straight line</li>
        <li>Public transport navigation</li>
        <li>Android Auto and CarPlay support</li>
      </ul>
    ),
  },


  {
    title: 'Bicycle and pedestrian routes',
    Svg: require('../../../static/img/svg/directions_bike.svg').default,
    description: (
      <ul>
        <li>The offline maps include foot, hiking, and bike paths, great for outdoor activities</li>
        <li>Map display and navigation mode for bicycle and pedestrian</li>
        <li>Optionally display public transport stops (bus, tram, train) including line names</li>
        <li>Trip recording to GPX or online tracking, with on-map widgets for distance, time, speed, altitude, and slope</li>
        <li>Track analysis: speed, altitude, and slope graphs; color tracks by speed, altitude, or slope</li>
        <li>Contour lines, hillshade, and slope maps for outdoor planning</li>
        <li>Hiking, cycling, and MTB routes on the map: tap a route to see its details and elevation profile, and navigate along it</li>
        <li>Connect external sensors: heart rate, bike speed, cadence, and power</li>
      </ul>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../../static/img/svg/logo.svg').default,
    description: (
      <ul>
        <li>Privacy first: no account required, your data stays on your device</li>
        <li>No ads, even in the free version</li>
        <li>Open source code on GitHub; extend the app with custom plugins</li>
        <li>Map data from OpenStreetMap and Wikipedia, the world's largest collaborative projects</li>
        <li>Edit OpenStreetMap right from the app: add and change POIs, create OSM notes</li>
        <li>Compact offline vector maps, available per country or region</li>
        <li>Monthly map updates, plus hourly Live updates</li>
        <li>Optional OsmAnd Cloud: back up and sync favorites, tracks, profiles, and settings across Android, iOS, and the web</li>
        <li>Web version at osmand.net/map: plan routes and view your tracks and favorites synced with OsmAnd Cloud</li>
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

export default function Features({ altSectionClass }) {
  return (
    <section className={clsx(styles.features, 'section', altSectionClass)}>
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
