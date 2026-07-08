import { useCallback, useContext } from 'react';
import MapContext from '../../../context/MapContext';
import { MAP_VIEW_ZOOM_FIT } from '../../../map/util/MapManager';

// Map-view navigation: fit to a selection and save/restore previous views on a shared, keyed stack.
// Sets request flags in MapContext; the actual map work is done by MapStateLayer.
export function useZoomToFit() {
    const mtx = useContext(MapContext);

    const hasMapView = useCallback((key) => mtx.mapViewStack.some((entry) => entry.key === key), [mtx.mapViewStack]);

    const requestMapViewPop = useCallback((key) => mtx.setMapViewStackRequest({ action: 'pop', key }), [mtx]);

    const zoomToFit = useCallback(
        ({ type, object }) => {
            if (!type) return;
            if (!object) return;
            mtx.setZoomToFitRequest({ type, object });
        },
        [mtx]
    );

    const restoreMapView = useCallback(() => {
        if (hasMapView(MAP_VIEW_ZOOM_FIT)) {
            requestMapViewPop(MAP_VIEW_ZOOM_FIT);
        }
    }, [hasMapView, requestMapViewPop]);

    return { zoomToFit, restoreMapView, hasMapView, requestMapViewPop };
}
