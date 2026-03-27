import React, { useContext, useMemo } from 'react';
import { Box, CircularProgress, ListItemText, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { getMapCenter } from '../../../map/layers/MapStateLayer';
import { getBearing, getDistance } from '../../../util/Utils';
import DistanceInfo from './DistanceInfo';
import styles from '../../infoblock.module.css';
import wptStyles from '../wpt/wptDetails.module.css';

const ADDRESS_NOT_FOUND = 'No data';
const EMPTY_DISTANCE_INFO = { distance: null, bearing: null };

export default function LocationInfoLine({ wpt, track }) {
    const ctx = useContext(AppContext);
    const location = useLocation();

    const coords = useMemo(() => {
        if (wpt?.latlon?.lat != null && wpt?.latlon?.lon != null) {
            return { lat: wpt.latlon.lat, lon: wpt.latlon.lon };
        }
        const firstTrackPoint = track?.points?.[0] ?? track?.tracks?.[0]?.points?.[0];
        const lat = firstTrackPoint?.lat ?? firstTrackPoint?.latlon?.lat;
        const lon = firstTrackPoint?.lng ?? firstTrackPoint?.lon ?? firstTrackPoint?.latlon?.lon;
        if (lat == null || lon == null) {
            return null;
        }
        return { lat, lon };
    }, [track, wpt?.latlon?.lat, wpt?.latlon?.lon]);

    const distanceInfo = useMemo(() => {
        if (!coords) {
            return EMPTY_DISTANCE_INFO;
        }
        const mapCenter = getMapCenter(ctx, location.hash);
        if (!mapCenter) {
            return EMPTY_DISTANCE_INFO;
        }
        const distance = getDistance(mapCenter.lat, mapCenter.lng, coords.lat, coords.lon);
        const bearing = getBearing(mapCenter.lat, mapCenter.lng, coords.lat, coords.lon);
        return { distance, bearing };
    }, [coords, ctx, location.hash]);

    if (wpt) {
        if (wpt?.address && wpt?.address !== ADDRESS_NOT_FOUND) {
            return (
                <Box className={styles.wptCategory}>
                    <ListItemText onClick={() => ctx.setZoomToCoords(wpt.latlon)} sx={{ cursor: 'pointer' }}>
                        <Typography id={'se-wpt-address'} className={wptStyles.placeAddress}>
                            {distanceInfo.distance && (
                                <DistanceInfo
                                    distance={distanceInfo.distance}
                                    bearing={distanceInfo.bearing}
                                    isUserLocation={true}
                                />
                            )}
                            {distanceInfo.distance && wpt.address && (
                                <span className={wptStyles.placeDistance}> · </span>
                            )}
                            {wpt.address}
                        </Typography>
                    </ListItemText>
                </Box>
            );
        }
        if (wpt?.address !== ADDRESS_NOT_FOUND) {
            return <CircularProgress sx={{ ml: 2 }} size={19} />;
        }
        return null;
    }

    if (track) {
        if (!distanceInfo.distance) return null;
        return (
            <Box className={styles.wptCategory}>
                <ListItemText>
                    <Typography className={wptStyles.placeAddress}>
                        <DistanceInfo
                            distance={distanceInfo.distance}
                            bearing={distanceInfo.bearing}
                            isUserLocation={true}
                        />
                    </Typography>
                </ListItemText>
            </Box>
        );
    }

    return null;
}
