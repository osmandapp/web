import { useEffect, useState } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

export function useGeoLocation(ctx) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        if (ctx.stopUseGeoLocation === false) {
            const fetchData = async () => {
                const coord = await getCoordinates();
                setLoc(coord);
            };
            fetchData().then();
        }
    }, [ctx]);

    function getCoordinates() {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

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
