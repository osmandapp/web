import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Box, CircularProgress, ListItemText, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import i18n from 'i18next';
import AppContext from '../../../context/AppContext';
import { getMapCenter } from '../../../map/layers/MapStateLayer';
import { getBearing, getDistance } from '../../../util/Utils';
import DistanceInfo from './DistanceInfo';
import styles from '../../infoblock.module.css';
import wptStyles from '../wpt/wptDetails.module.css';
import { apiGet } from '../../../util/HttpApi';
import { ReactComponent as LocationIcon } from '../../../assets/icons/ic_action_location_16.svg';
import { ReactComponent as DotIcon } from '../../../assets/icons/ic_action_dot_16.svg';
import { getTrackPoints } from '../../../manager/track/TracksManager';

const ADDRESS_NOT_FOUND = i18n.t('web:no_data');
const EMPTY_DISTANCE_INFO = { distance: null, bearing: null };

export default function LocationInfoLine({ wpt = null, track = null }) {
    const ctx = useContext(AppContext);
    const location = useLocation();

    const [trackAddress, setTrackAddress] = useState(null);
    const [trackAddressLoading, setTrackAddressLoading] = useState(false);

    const coords = useMemo(() => {
        if (wpt?.latlon?.lat != null && wpt?.latlon?.lon != null) {
            return { lat: wpt.latlon.lat, lon: wpt.latlon.lon };
        }
        const points = getTrackPoints(track);
        const firstPoint = points?.[0];
        if (firstPoint?.lat == null || firstPoint?.lng == null) {
            return null;
        }
        return { lat: firstPoint.lat, lon: firstPoint.lng };
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

    useEffect(() => {
        if (!track || !coords) {
            setTrackAddress(null);
            setTrackAddressLoading(false);
            return;
        }

        let isCancelled = false;
        setTrackAddressLoading(true);

        apiGet(`${process.env.REACT_APP_WEATHER_API_SITE}/weather-api/get-address-by-latlon`, {
            apiCache: true,
            params: {
                lat: Number(coords.lat).toFixed(6),
                lon: Number(coords.lon).toFixed(6),
            },
        })
            .then((response) => {
                if (isCancelled) return;
                const cityLocalNames = response?.data?.cityLocalNames;
                if (!response?.ok || !cityLocalNames) {
                    setTrackAddress(ADDRESS_NOT_FOUND);
                    return;
                }
                const localizedName = cityLocalNames[i18n.language];
                setTrackAddress(localizedName ? cityLocalNames : ADDRESS_NOT_FOUND);
            })
            .catch(() => {
                if (!isCancelled) {
                    setTrackAddress(ADDRESS_NOT_FOUND);
                }
            })
            .finally(() => {
                if (!isCancelled) {
                    setTrackAddressLoading(false);
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [track, coords, ctx.mapBbox]);

    const trackAddressText = useMemo(() => {
        if (!trackAddress) {
            return null;
        }
        if (trackAddress === ADDRESS_NOT_FOUND) {
            return ADDRESS_NOT_FOUND;
        }
        return trackAddress[i18n.language] ?? null;
    }, [trackAddress]);

    if (wpt) {
        if (wpt?.address && wpt?.address !== ADDRESS_NOT_FOUND) {
            return (
                <Box className={`${styles.wptCategory} ${styles.locationInfoLineContainer}`}>
                    <ListItemText
                        className={wptStyles.wptAddressClickable}
                        onClick={() => ctx.setZoomToCoords(wpt.latlon)}
                    >
                        <Typography id={'se-wpt-address'} className={wptStyles.placeAddress}>
                            {distanceInfo.distance && (
                                <DistanceInfo
                                    distance={distanceInfo.distance}
                                    bearing={distanceInfo.bearing}
                                    isUserLocation={true}
                                />
                            )}
                            {distanceInfo.distance && wpt.address && <DotIcon className={wptStyles.dotInfoIcon} />}
                            {wpt.address}
                        </Typography>
                    </ListItemText>
                </Box>
            );
        }
        if (wpt?.address !== ADDRESS_NOT_FOUND) {
            return <CircularProgress className={wptStyles.locationInfoLoader} size={19} />;
        }
        return null;
    }

    if (track) {
        if (!distanceInfo.distance) return null;
        return (
            <Box className={`${styles.wptCategory} ${styles.locationInfoLineContainer}`}>
                <ListItemText>
                    <Typography className={wptStyles.placeAddress}>
                        <DistanceInfo
                            distance={distanceInfo.distance}
                            bearing={distanceInfo.bearing}
                            isUserLocation={true}
                        />
                        <DotIcon className={wptStyles.dotInfoIcon} />
                        {trackAddressLoading && !trackAddress && (
                            <CircularProgress className={wptStyles.trackLocationInfoLoader} size={13} />
                        )}
                        {trackAddressText && (
                            <>
                                <LocationIcon className={wptStyles.locationInfoIcon} />
                                <Typography component="span" className={wptStyles.placeDistance}>
                                    {trackAddressText}
                                </Typography>
                            </>
                        )}
                    </Typography>
                </ListItemText>
            </Box>
        );
    }

    return null;
}
