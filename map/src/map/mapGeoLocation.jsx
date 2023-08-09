import L from 'leaflet';

import { useMap } from 'react-leaflet';
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';

import { Paper, Tooltip, IconButton } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import GpsOffIcon from '@mui/icons-material/GpsOff';

import { apiGet } from '../util/HttpApi';

const flyZoom = 9;

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

export const LocationControl = ({ position = 'bottomright' } = {}) => {
    const map = useMap();
    const element = useRef();

    const positionStyle = POSITION_STYLES[position];
    const positionClass = POSITION_CLASSES[position];
    const tooltipPlacement = TOOLTIP_PLACEMENT[position];

    const [color, setColor] = useState();

    useEffect(() => {
        if (element.current) {
            L.DomEvent.disableClickPropagation(element.current);
        }
    }, []);

    const onClick = useCallback(() => {
        setColor('primary');
        map.locate({ watch: true, setView: true, enableHighAccuracy: true });
    }, []);

    const control = useMemo(
        () => (
            <Paper>
                <Tooltip title="GPS" placement={tooltipPlacement} arrow>
                    <IconButton onClick={onClick}>
                        <GpsFixedIcon color={color} />
                    </IconButton>
                </Tooltip>
            </Paper>
        ),
        [color]
    );

    return (
        <div ref={element} className={positionClass} style={positionStyle}>
            <div className="leaflet-control leaflet-bar leaflet-control-zoom">{control}</div>
        </div>
    );
};
