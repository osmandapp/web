import L from 'leaflet';

import { useMap } from 'react-leaflet';
import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';

import { Paper, Tooltip, IconButton, CircularProgress, SvgIcon } from '@mui/material';
import { ReactComponent as LocationIcon } from '../../assets/icons/ic_map_get_location.svg';
import { ReactComponent as LocationOffIcon } from '../../assets/icons/ic_action_location_off.svg';

import { apiGet } from '../../util/HttpApi';
import styles from './map.module.css';
import { POSITION_CLASSES, TOOLTIP_PLACEMENT } from '../util/MapStylesManager';

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

const circleStyle = {
    className: 'leaflet-control-locate-circle',
    fillColor: '#1166EE',
    fillOpacity: 0.15,
    color: '#1166EE',
    weight: 1,
};

export const LocationControl = ({ position = 'bottomright' } = {}) => {
    const map = useMap();
    const element = useRef();

    const positionClass = POSITION_CLASSES[position];
    const tooltipPlacement = TOOLTIP_PLACEMENT[position];

    const [status, setStatus] = useState('new');
    const [marker, setMarker] = useState(null);
    const [circle, setCircle] = useState(null);
    const [message, setMessage] = useState('Find my position');

    const icons = {
        new: <SvgIcon className={styles.customIconPath} component={LocationIcon} inheritViewBox />,
        loading: <CircularProgress size={40 - 16} />,
        found: (
            <SvgIcon
                className={styles.customIconPath}
                component={LocationIcon}
                inheritViewBox
                sx={{ fill: '#237bff' }}
            />
        ),
        errorDenied: (
            <SvgIcon
                className={styles.customIconPath}
                component={LocationOffIcon}
                inheritViewBox
                sx={{ fill: '#ff595e' }}
            />
        ),
        errorUnavailable: (
            <SvgIcon
                className={styles.customIconPath}
                component={LocationOffIcon}
                inheritViewBox
                sx={{ fill: '#f8931d' }}
            />
        ),
        errorTimeout: <SvgIcon className={styles.customIconPath} component={LocationOffIcon} inheritViewBox />,
    };

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
            setCircle(L.circle(e.latlng, { radius: e.accuracy }).setStyle(circleStyle));
            setMarker(
                new L.Marker(e.latlng, {
                    icon: L.icon({
                        iconUrl: '/map/images/map_icons/circle.svg',
                        iconSize: [15, 15],
                    }),
                })
            );
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
            <Paper className={styles.button} sx={{ borderRadius: '20px' }}>
                <Tooltip title={message} placement={tooltipPlacement} arrow>
                    <IconButton onClick={onClick}>{icons[status]}</IconButton>
                </Tooltip>
            </Paper>
        ),
        [status, message]
    );

    return (
        <div ref={element} className={positionClass}>
            <div
                className="leaflet-control leaflet-bar"
                style={{
                    display: 'inline-block',
                    float: 'none',
                    marginRight: '60px',
                    padding: '8px',
                    marginBottom: '12px',
                }}
            >
                {control}
            </div>
        </div>
    );
};
