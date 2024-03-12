import { useEffect, useState } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

export function useGeoLocation(ctx, useHighPrecision = true) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        if (ctx.stopUseGeoLocation === false) {
            const fetchData = async () => {
                const coord = await getCoordinates();
                setLoc(coord);
            };
            fetchData().then();
        } else {
            setLoc(LOCATION_UNAVAILABLE);
        }
    }, [ctx]);

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
                        ctx.setRoutingErrorMsg('Enabling browser GeoLocation would improve location-based features.');
                        ctx.setStopUseGeoLocation(true);
                        resolve(LOCATION_UNAVAILABLE);
                    },
                    { enableHighAccuracy: true }
                );
            } else {
                ctx.setRoutingErrorMsg('Geolocation is not supported by your browser.');
                resolve(LOCATION_UNAVAILABLE);
            }
        });
    }

    return loc;
}
