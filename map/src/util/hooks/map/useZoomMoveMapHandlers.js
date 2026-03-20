import { useEffect } from 'react';

const useZoomMoveMapHandlers = (map, onZoomChange, onMapMove) => {
    useEffect(() => {
        const handleZoomEnd = () => {
            onZoomChange(map.getZoom());
        };

        const handleMapMoveEnd = () => {
            onMapMove(Date.now());
        };

        if (map) {
            map.on('zoomend', handleZoomEnd);
            map.on('moveend', handleMapMoveEnd);

            return () => {
                map.off('zoomend', handleZoomEnd);
                map.off('moveend', handleMapMoveEnd);
            };
        }
    }, []);
};

export default useZoomMoveMapHandlers;
