import { useEffect, useState } from 'react';

export function useLocation({ ctx }) {
    const [loc, setLoc] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const coord = await getCoordinates();
            setLoc(coord);
        };

        fetchData().then();
    }, []);

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
                    },
                    { enableHighAccuracy: true }
                );
            } else {
                ctx.setRoutingErrorMsg('Geolocation is not supported by your browser.');
            }
        });
    }

    return loc;
}
