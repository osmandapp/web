import { useMap } from 'react-leaflet';
import React from 'react';
import { POSITION_CLASSES } from '../util/MapStylesManager';
import { IconButton, Paper, SvgIcon } from '@mui/material';
import { ReactComponent as ZoomInIcon } from '../../assets/icons/ic_map_zoom_in.svg';
import { ReactComponent as ZoomOutIcon } from '../../assets/icons/ic_map_zoom_out.svg';
import styles from './map.module.css';

const XYZ_HASH_SYNC = 'hash'; // use Ctrl + ZoomIn / ZoomOut to save/restore map x/y/z

export default function CustomZoomControl({ position = 'bottomright' }) {
    const map = useMap();

    const positionClass = POSITION_CLASSES[position];

    function zoom(inout, event) {
        if (event.ctrlKey) {
            if (inout === 'in') {
                localStorage.setItem(XYZ_HASH_SYNC, window.location.hash);
            } else {
                window.location.hash = localStorage.getItem(XYZ_HASH_SYNC);
            }
            return;
        }
        if (inout) {
            map.doubleClickZoom.disable();
            inout === 'in' ? map.zoomIn() : map.zoomOut();
            setTimeout(() => map.doubleClickZoom.enable(), 1000);
        }
    }

    return (
        <div className={positionClass}>
            <div
                className="leaflet-bar leaflet-control"
                style={{ padding: '8px', marginBottom: '12px', marginRight: '12px' }}
            >
                <Paper className={styles.button} sx={{ mb: 1 }}>
                    <IconButton onClick={(event) => zoom('in', event)}>
                        <SvgIcon className={styles.customIconPath} component={ZoomInIcon} inheritViewBox />
                    </IconButton>
                </Paper>
                <Paper className={styles.button}>
                    <IconButton onClick={(event) => zoom('out', event)}>
                        <SvgIcon className={styles.customIconPath} component={ZoomOutIcon} inheritViewBox />
                    </IconButton>
                </Paper>
            </div>
        </div>
    );
}
