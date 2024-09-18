import { useState, useEffect } from 'react';

function useHashParams() {
    const [hashParams, setHashParams] = useState({ zoom: null, lat: null, lon: null });

    useEffect(() => {
        const parseHash = () => {
            const hash = window.location.hash;
            const hashParts = hash.split('/');
            if (hashParts.length === 3) {
                const zoom = hashParts[0].replace('#', '');
                const lat = hashParts[1];
                const lon = hashParts[2];
                return { zoom, lat, lon };
            }
            return { zoom: null, lat: null, lon: null };
        };

        setHashParams(parseHash());

        const handleHashChange = () => {
            setHashParams(parseHash());
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hashParams;
}

export default useHashParams;
