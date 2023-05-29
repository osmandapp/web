import {useEffect, useRef, useContext, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {MapContainer, TileLayer, ZoomControl, Marker, ScaleControl} from "react-leaflet";
import AppContext from "../../context/AppContext";
import RouteLayer from "../layers/RouteLayer"
import WeatherLayer from "../layers/WeatherLayer"
import 'leaflet-hash';
import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';
import FavoriteLayer from "../layers/FavoriteLayer";
import TrackLayer from "../layers/TrackLayer";
import LocalClientTrackLayer from "../layers/LocalClientTrackLayer";
import MarkerOptions from "../markers/MarkerOptions";
import ContextMenu from "./ContextMenu";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        '& .leaflet-control-layers': {
            border: "0px !important"
        },
        '& .leaflet-control-layers-toggle': {
            width: "0px !important",
            height: "0px !important"
        },
        '& .leaflet-bar': {
            border: '4px !important',
        },
        '& .leaflet-bar a': {
            width: "36px !important",
            color: "#757575",
            border: '4px !important'
        },
        '& .leaflet-bar a:first-child': {
            borderTopLeftRadius: '4px !important',
            borderTopRightRadius: '4px !important'
        },
        '& .leaflet-bar a:last-child': {
            borderBottomLeftRadius: '4px !important',
            borderBottomRightRadius: '4px !important'
        },
        '& .leaflet-control': {
            boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            color: 'black',
            borderRadius: '4px'
        },
    }
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

    const [geocodingData, setGeocodingData] = useState(null);

    const ctx = useContext(AppContext);
    const [hoverPoint, setHoverPoint] = useState(null);

    const whenReadyHandler = event => {
        const {target: map} = event;
        if (map) {
            map.attributionControl.setPrefix('');
            mapRef.current = map;
            if (!ctx.mapMarkerListener) {
                ctx.setMapMarkerListener(() => (lat, lng) => updateMarker(lat, lng, setHoverPoint, hoverPointRef));
            }
        }

    }

    useEffect(() => {
        if (tileLayer.current) {
            tileLayer.current.setUrl(ctx.tileURL.url);
        }
    }, [ctx.tileURL]);

    return (
        <MapContainer center={position} zoom={5} className={classes.root} minZoom={1} maxZoom={20}
                      zoomControl={false} whenReady={whenReadyHandler} contextmenu={true} contextmenuItems={[]}
                      editable={true}
        >
            <LocalClientTrackLayer/>
            <RouteLayer geocodingData={geocodingData}/>
            <FavoriteLayer/>
            <WeatherLayer/>
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
                && <Marker ref={hoverPointRef} position={hoverPoint} icon={MarkerOptions.options.pointerIcons}/>}
            <ZoomControl position="bottomleft"/>
            <ScaleControl imperial={false} position="bottomright"/>
            <ContextMenu setGeocodingData={setGeocodingData}/>
        </MapContainer>
    );
};
export default OsmAndMap;
