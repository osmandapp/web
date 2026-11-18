import { useEffect, useState } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

const POSITION_TIMEOUT_MS = 5000;

export function useGeoLocation(ctx, useHighPrecision = true) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        let cancelled = false;
        let resetCount = 0;
        let permission = null;

        const requestCoordinates = async () => {
            const resetCountAtStart = resetCount;
            const coord = await getCoordinates();
            if (!cancelled && resetCount === resetCountAtStart) {
                setLoc(coord);
            }
        };

        const onPermissionChange = () => {
            if (permission.state === 'denied') {
                ctx.setStopUseGeoLocation(true);
            } else if (permission.state === 'prompt') {
                resetCount++;
                setLoc(LOCATION_UNAVAILABLE);
            } else if (permission.state === 'granted') {
                if (ctx.stopUseGeoLocation) {
                    ctx.setStopUseGeoLocation(false);
                } else {
                    requestCoordinates().then();
                }
            }
        };

        const fetchData = async () => {
            permission = await queryLocationPermission();
            if (cancelled) return;
            permission?.addEventListener('change', onPermissionChange);
            if (ctx.stopUseGeoLocation) {
                setLoc(LOCATION_UNAVAILABLE);
                return;
            }
            // the browser keeps silent until the prompt is answered - the map center is used meanwhile
            if (permission?.state !== 'granted') {
                setLoc(LOCATION_UNAVAILABLE);
            }
            await requestCoordinates();
        };

        fetchData().then();

        return () => {
            cancelled = true;
            permission?.removeEventListener('change', onPermissionChange);
        };
    }, [ctx.stopUseGeoLocation]);

    function getCoordinates() {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = useHighPrecision
                            ? position.coords.latitude
                            : Math.round(position.coords.latitude * 1000) / 1000;
                        const longitude = useHighPrecision
                            ? position.coords.longitude
                            : Math.round(position.coords.longitude * 1000) / 1000;
                        resolve({ lat: latitude, lng: longitude });
                    },
                    (error) => {
                        // a timeout is not a denial - the next consumer may still get a position
                        if (error.code !== error.TIMEOUT) {
                            ctx.setStopUseGeoLocation(true);
                        }
                        resolve(LOCATION_UNAVAILABLE);
                    },
                    { enableHighAccuracy: true, timeout: POSITION_TIMEOUT_MS }
                );
            } else {
                resolve(LOCATION_UNAVAILABLE);
            }
        });
    }

    return loc;
}

// only a granted permission is answered without a prompt; an unknown state is treated as a prompt
async function queryLocationPermission() {
    try {
        return await navigator.permissions?.query({ name: 'geolocation' });
    } catch {
        return null;
    }
}
