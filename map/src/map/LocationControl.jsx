import L from 'leaflet';

import { useMap } from 'react-leaflet';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';

import { Paper, Tooltip, IconButton, CircularProgress } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import GpsOffIcon from '@mui/icons-material/GpsOff';

import { apiGet } from '../util/HttpApi';

const flyZoom = 9;
const locationZoom = 17;

export const initialZoom = 5;
export const initialPosition = [50, 5]; // use != instead of !== to compare coordinates

export async function detectGeoByIp({ map, hash }) {
    if (hash) {
        const [zoom, lat, lon] = (hash.lastHash ?? window.location.hash ?? '').split('/');
        if (
            zoom &&
            lat &&
            lon &&
            (zoom !== '#' + initialZoom || lat != initialPosition[0] || lon != initialPosition[1])
        ) {
            // console.debug('location-is-defined-by-hash', zoom, lat, lon);
            return;
        }
    }

    const response = await apiGet(process.env.REACT_APP_GEO_IP_URL);

    if (response.ok) {
        let { lat, lon } = {};
        try {
            ({ lat, lon } = await response.json());
        } finally {
            if (lat && lon) {
                // hash+flyTo requires a little delay after map-ready
                setTimeout(() => map.flyTo([lat, lon], flyZoom), 100);
                // console.debug('location-defined-by-ip', flyZoom, lat, lon);
            }
        }
    }
}

const POSITION_CLASSES = {
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
};

const POSITION_STYLES = {
    topleft: { marginTop: 80 },
    topright: { marginTop: 80 },
    bottomleft: { marginBottom: 70 },
    bottomright: { marginBottom: 70 },
};

const TOOLTIP_PLACEMENT = {
    topleft: 'right',
    topright: 'left',
    bottomleft: 'right',
    bottomright: 'left',
};

const icons = {
    new: <GpsFixedIcon />,
    loading: <CircularProgress size={40 - 16} />,
    found: <GpsFixedIcon color="primary" />,
    errorDenied: <GpsOffIcon color="error" />,
    errorUnavailable: <GpsOffIcon color="warning" />,
    errorTimeout: <GpsOffIcon />,
};

const circleStyle = {
    className: 'leaflet-control-locate-circle',
    fillColor: '#1166EE',
    fillOpacity: 0.15,
    color: '#1166EE',
    weight: 1,
};

const markerStyle = {
    className: 'leaflet-control-locate-marker',
    color: '#fff',
    fillColor: '#3399EE',
    fillOpacity: 1,
    weight: 3,
    opacity: 1,
    radius: 7,
};

export const LocationControl = ({ position = 'bottomright' } = {}) => {
    const map = useMap();
    const element = useRef();

    const positionStyle = POSITION_STYLES[position];
    const positionClass = POSITION_CLASSES[position];
    const tooltipPlacement = TOOLTIP_PLACEMENT[position];

    const [status, setStatus] = useState('new');
    const [marker, setMarker] = useState(null);
    const [circle, setCircle] = useState(null);
    const [message, setMessage] = useState('GPS');

    useEffect(() => {
        if (element.current) {
            L.DomEvent.disableClickPropagation(element.current);
        }
    }, []);

    useEffect(() => {
        marker?.addTo(map);
    }, [marker]);

    useEffect(() => {
        circle?.addTo(map);
    }, [circle]);

    const onLocationError = useCallback((e) => {
        const errors = {
            1: 'errorDenied', // use "error" color
            2: 'errorUnavailable', // "warning"
            3: 'errorTimeout', // no color
        };
        // console.debug('gps-error', e.code, e.message);

        setTimeout(() => setMessage(''), 3000);
        setMessage(e.code + ': ' + e.message);

        setStatus(errors[e.code] ?? 'errorUnavailable');
    }, []);

    const onLocationFound = useCallback((e) => {
        // console.debug('gps-found', e);
        if (e.latlng && e.accuracy) {
            setMarker(L.circleMarker(e.latlng).setStyle(markerStyle));
            setCircle(L.circle(e.latlng, { radius: e.accuracy }).setStyle(circleStyle));

            setMessage(e.latlng.lat + ', ' + e.latlng.lng);
            setTimeout(() => setMessage(''), 3000);

            map.setView(e.latlng, locationZoom); // flyTo has buggy marker animation

            setStatus('found');
        }
    }, []);

    const onClick = useCallback(() => {
        circle?.removeFrom(map);
        marker?.removeFrom(map);
        if (status === 'found') {
            setStatus('new');
        } else {
            setStatus('loading');
            map.on('locationerror', onLocationError);
            map.on('locationfound', onLocationFound);
            map.locate({
                timeout: 30 * 1000, // seconds
                watch: false,
                setView: false,
                maxZoom: locationZoom,
                enableHighAccuracy: true,
            });
        }
    }, [status, message]);

    const control = useMemo(
        () => (
            <Paper>
                <Tooltip title={message} placement={tooltipPlacement} arrow>
                    <IconButton onClick={onClick}>{icons[status]}</IconButton>
                </Tooltip>
            </Paper>
        ),
        [status, message]
    );

    return (
        <div ref={element} className={positionClass} style={positionStyle}>
            <div className="leaflet-control leaflet-bar leaflet-control-zoom">{control}</div>
        </div>
    );
};
