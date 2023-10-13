import { useMap } from 'react-leaflet';
import React from 'react';
import { POSITION_CLASSES } from '../util/MapStylesManager';
import { IconButton, Paper, SvgIcon } from '@mui/material';
import { ReactComponent as ZoomInIcon } from '../../assets/icons/ic_map_zoom_in.svg';
import { ReactComponent as ZoomOutIcon } from '../../assets/icons/ic_map_zoom_out.svg';
import styles from './map.module.css';

export default function CustomZoomControl({ position = 'bottomright' }) {
    const map = useMap();

    const positionClass = POSITION_CLASSES[position];

    return (
        <div className={positionClass}>
            <div
                className="leaflet-bar leaflet-control"
                style={{ padding: '8px', marginBottom: '12px', marginRight: '12px' }}
            >
                <Paper className={styles.button} sx={{ mb: 1 }}>
                    <IconButton onClick={() => map.zoomIn()}>
                        <SvgIcon className={styles.customIconPath} component={ZoomInIcon} inheritViewBox />
                    </IconButton>
                </Paper>
                <Paper className={styles.button}>
                    <IconButton onClick={() => map.zoomOut()}>
                        <SvgIcon className={styles.customIconPath} component={ZoomOutIcon} inheritViewBox />
                    </IconButton>
                </Paper>
            </div>
        </div>
    );
}
