import { useEffect, useState } from 'react';
import { LOCATION_UNAVAILABLE } from '../../manager/FavoritesManager';

export function useLocation(ctx) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const coord = await getCoordinates();
            setLoc(coord);
        };

        fetchData().then();
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
                        ctx.setRoutingErrorMsg('Error getting coordinates.');
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
