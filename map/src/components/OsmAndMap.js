import React, {useEffect, useRef, useContext, useState, useMemo, useCallback} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { MapContainer, TileLayer, ZoomControl, Marker, ScaleControl} from "react-leaflet";
import AppContext from "../context/AppContext";
import MapContextMenu from "./MapContextMenu"
// import { RouteLayer, WeatherLayer } from "./layers/"
import RouteLayer from "./layers/RouteLayer"
import WeatherLayer from "./layers/WeatherLayer"
import L from 'leaflet';
import MarkerIcon from './MarkerIcon.js'
import 'leaflet-gpx';
import 'leaflet-hash';
import Utils from "../util/Utils";

// import 'leaflet.awesome-markers';
// import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
// import 'ionicons/css/ionicons.min.css'

import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
}));

const markerOptions = {
  startIcon: MarkerIcon({ bg: 'blue' }),
  endIcon: MarkerIcon({ bg: 'red' }),
  wptIcons: {
    '': MarkerIcon({ bg: 'yellow' }),
  }
};


// initial location on map
const position = [50, 5];


async function addTrackToMap(ctx, file, map) {
  let trackData;
  if (file.url.substr(0, 1) === '<') { // direct XML has to start with a <
    trackData = file.url;
  } else {
    // file.urlopts
    let response = await Utils.fetchUtil(file.url, file.urlopts ? file.urlopts : {});
    if (response.ok) {
      trackData = await response.text();
    } else {
      trackData = '<gpx version="1.1" />'
    }
  }
  file.gpx = new L.GPX(trackData, {
    async: true,
    marker_options: markerOptions
  }).on('loaded', function (e) {
    let trackPoints = Object.values(e.layers._layers)[0]._latlngs;
    trackPoints.forEach((point) => {
      let pointObj = { lat: point.lat, lng: point.lng };
      // if need distFromStart:e.target._info.elevation._points[index][0]
      file.points.push(pointObj);
    })
    //file.points.push(getPoints(e));
    map.current.fitBounds(e.target.getBounds());
  }).addTo(map.current);
  file.points = [];
  ctx.setGpxFiles(ctx.gpxFiles);
}

function removeTrackFromMap(file, map) {
  map.current.removeLayer(file.gpx);
  file.gpx = null;
}

const updateMarker = (lat, lng, setHoverPoint, hoverPointRef) => {
  if (lat) {
    if (hoverPointRef.current) {
      hoverPointRef.current.setLatLng([lat, lng]);
    } else {
      setHoverPoint({ lat: lat, lng: lng });
    }
  } else {
    setHoverPoint(null);
  }
}

const OsmAndMap = () => {

  const classes = useStyles();
  const mapRef = useRef(null);
  const tileLayer = useRef(null);
  const hoverPointRef = useRef(null);
  
  let hash = null;
  const ctx = useContext(AppContext);
  const [hoverPoint, setHoverPoint] = useState(null);

  const whenReadyHandler = event => {
    const { target: map } = event;
    map.attributionControl.setPrefix('');
    hash = new L.Hash(map);
    mapRef.current = map;
    if (!ctx.mapMarkerListener) {
      ctx.setMapMarkerListener(() => (lat, lng) => updateMarker(lat, lng, setHoverPoint, hoverPointRef));
    }
  }
  

  useEffect(() => {
    // var gpx = 'https://www.openstreetmap.org/trace/4020415/data'; // URL to your GPX file or the GPX itself
    let filesMap = ctx.gpxFiles ? ctx.gpxFiles : {} ;
    Object.values(filesMap).forEach((file) => {
      // could be done in react style ?
      if (file.url && !file.gpx) {
        addTrackToMap(ctx, file, mapRef);
      } else if (!file.url && file.gpx) {
        removeTrackFromMap(file, mapRef);
      }
    });
  }, [ctx.gpxFiles, ctx.setGpxFiles]);

  useEffect(() => {
    if (tileLayer.current) {
      tileLayer.current.setUrl(ctx.tileURL.url);
    }
  }, [ctx.tileURL]);

  return (
    <MapContainer center={position} zoom={5} className={classes.root} minZoom={1} maxZoom={20}
      zoomControl={false} whenReady={whenReadyHandler} contextmenu={true} contextmenuItems={[]}
      >
      
      <RouteLayer />
      <WeatherLayer />
      <TileLayer
        ref={tileLayer}
        attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        minZoom={1}
        maxZoom={20}
        maxNativeZoom={18}
        url={ctx.tileURL.url}
      />
   
      {hoverPoint // && <CircleMarker ref={hoverPointRef} center={hoverPoint} radius={5} pathOptions={{ color: 'blue' }} opacity={1} />
        && <Marker ref={hoverPointRef} position={hoverPoint} icon={MarkerIcon({ bg: 'yellow' })} />}
      <MapContextMenu />
      <ZoomControl position="bottomleft" />
      <ScaleControl imperial={false} position="bottomright"/>
    </MapContainer>
  );
};
export default OsmAndMap;
