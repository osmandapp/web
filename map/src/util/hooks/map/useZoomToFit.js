import { useCallback, useContext } from 'react';
import MapContext from '../../../context/MapContext';

// Unified zoom-to-fit entry for favorite group / track.
// Sets request flags in MapContext; the actual map work is done by MapStateLayer.
export function useZoomToFit() {
    const mtx = useContext(MapContext);

    const zoomToFit = useCallback(
        ({ type, object }) => {
            if (!type) return;
            if (!object) return;
            mtx.setZoomToFitRequest({ type, object });
        },
        [mtx]
    );

    const restoreMapView = useCallback(() => {
        if (!mtx.mapViewBeforeZoomFit) return;
        mtx.setRestoreMapViewRequest(true);
    }, [mtx]);

    return { zoomToFit, restoreMapView };
}
