import { useCallback, useContext } from 'react';
import MapContext from '../../../context/MapContext';

export function useMapViewStack() {
    const mtx = useContext(MapContext);

    const requestMapViewPop = useCallback((key) => mtx.setMapViewStackRequest({ action: 'pop', key }), [mtx]);

    const hasMapView = useCallback((key) => mtx.mapViewStack.some((entry) => entry.key === key), [mtx.mapViewStack]);

    return { hasMapView, requestMapViewPop };
}
