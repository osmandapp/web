import React, {useEffect, useRef, useContext, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {MapContainer, TileLayer, ZoomControl, Marker, ScaleControl} from "react-leaflet";
import AppContext from "../../context/AppContext";
import MapContextMenu from "../../contextmenu/components/MapContextMenu"
import RouteLayer from "../layers/RouteLayer"
import WeatherLayer from "../layers/WeatherLayer"
import MarkerIcon from '../MarkerIcon.js'
import '../../util/gpx.js';
import 'leaflet-hash';

import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import FavoriteLayer from "../layers/FavoriteLayer";
import TrackLayer from "../layers/TrackLayer";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%"
    },
}));

// initial location on map
const position = [50, 5];

const updateMarker = (lat, lng, setHoverPoint, hoverPointRef) => {
    if (lat) {
        if (hoverPointRef.current) {
            hoverPointRef.current.setLatLng([lat, lng]);
        } else {
            setHoverPoint({lat: lat, lng: lng});
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

    const ctx = useContext(AppContext);
    const [hoverPoint, setHoverPoint] = useState(null);

    const whenReadyHandler = event => {
        const {target: map} = event;
        map.attributionControl.setPrefix('');
        mapRef.current = map;
        if (!ctx.mapMarkerListener) {
            ctx.setMapMarkerListener(() => (lat, lng) => updateMarker(lat, lng, setHoverPoint, hoverPointRef));
        }
    }

    useEffect(() => {
        if (tileLayer.current) {
            tileLayer.current.setUrl(ctx.tileURL.url);
        }
    }, [ctx.tileURL]);

    return (
        <MapContainer center={position} zoom={5} className={classes.root} minZoom={1} maxZoom={20}
                      zoomControl={false} whenReady={whenReadyHandler} contextmenu={true} contextmenuItems={[]} editable={true}
        >
            <RouteLayer/>
            <WeatherLayer/>
            <FavoriteLayer/>
            <TrackLayer/>
            <TileLayer
                ref={tileLayer}
                attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                minZoom={1}
                maxZoom={20}
                maxNativeZoom={18}
                url={ctx.tileURL.url}
            />

            {hoverPoint // && <CircleMarker ref={hoverPointRef} center={hoverPoint} radius={5} pathOptions={{ color: 'blue' }} opacity={1} />
                && <Marker ref={hoverPointRef} position={hoverPoint} icon={MarkerIcon({bg: 'yellow'})}/>}
            <MapContextMenu/>
            <ZoomControl position="bottomleft"/>
            <ScaleControl imperial={false} position="bottomright"/>
        </MapContainer>
    );
};
export default OsmAndMap;
