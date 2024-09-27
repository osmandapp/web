import { useEffect } from 'react';

const useZoomMoveMapHandlers = (map, onZoomChange, onMapMove) => {
    useEffect(() => {
        const handleZoomEnd = () => {
            onZoomChange(map.getZoom());
        };

        const handleDragEnd = () => {
            onMapMove(true);
        };

        if (map) {
            map.on('zoomend', handleZoomEnd);
            map.on('dragend', handleDragEnd);

            return () => {
                map.off('zoomend', handleZoomEnd);
                map.off('dragend', handleDragEnd);
            };
        }
    }, []);
};

export default useZoomMoveMapHandlers;
