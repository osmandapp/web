import { useEffect, useState } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

const POSITION_TIMEOUT_MS = 5000;

export function useGeoLocation(ctx, useHighPrecision = true) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        if (ctx.stopUseGeoLocation === false) {
            const fetchData = async () => {
                // the browser keeps silent until the prompt is answered - the map center is used meanwhile
                if (await isPermissionPrompt()) {
                    setLoc(LOCATION_UNAVAILABLE);
                }
                const coord = await getCoordinates();
                setLoc(coord);
            };
            fetchData().then();
        } else {
            setLoc(LOCATION_UNAVAILABLE);
        }
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
                    () => {
                        ctx.setStopUseGeoLocation(true);
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

async function isPermissionPrompt() {
    try {
        return (await navigator.permissions?.query({ name: 'geolocation' }))?.state === 'prompt';
    } catch {
        return false;
    }
}
