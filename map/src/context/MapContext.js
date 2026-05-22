import React, { useState } from 'react';
import { useMutator } from '../util/Utils';
import { POI_URL, STOP_URL } from '../manager/GlobalManager';
import { mvtDemoTileURL } from '../map/mvt/MvtDemoConfig';

const MapContext = React.createContext();

function getInitialHeightmap() {
    try {
        const saved = localStorage.getItem('configureMap');
        return saved ? (JSON.parse(saved).terrain ?? null) : null;
    } catch {
        return null;
    }
}

function getInitialPinPoint() {
    try {
        const searchParams = new URLSearchParams(globalThis.location.search);
        const pin = searchParams.get('pin');
        if (!pin) return null;
        if (globalThis.location.pathname.includes(POI_URL)) return null;
        if (globalThis.location.pathname.includes(STOP_URL)) return null;
        const arr = pin.split(',');
        const lat = Number.parseFloat(arr[0]);
        const lng = Number.parseFloat(arr[1]);
        if (arr.length === 2 && !Number.isNaN(lat) && !Number.isNaN(lng)) {
            return { lat, lng };
        }
    } catch {
        // ignore
    }
    return null;
}

export const MapContextProvider = ({ children }) => {
    const [zoomToFitRequest, setZoomToFitRequest] = useState(null);
    const [mapViewBeforeZoomFit, setMapViewBeforeZoomFit] = useState(null);
    const [restoreMapViewRequest, setRestoreMapViewRequest] = useState(false);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

    // currently focused selection ({ type, id })
    const [selectionFocus, setSelectionFocus] = useState(null);
    const [focusModeOn, setFocusModeOn] = useState(false);

    // map tile and rendering
    const [tileURL, setTileURL] = useState(mvtDemoTileURL);
    const [renderingType, setRenderingType] = useState(null);

    const [heightmap, setHeightmap] = useState(getInitialHeightmap);
    const [processHeightmaps, setProcessHeightmaps] = useState(false);
    const [visibleBboxInfo, setVisibleBboxInfo] = useState(null);
    const [mapBbox, setMapBbox] = useState(null);
    const [pinPoint, setPinPoint] = useState(getInitialPinPoint);

    return (
        <MapContext.Provider
            value={{
                zoomToFitRequest,
                setZoomToFitRequest,
                mapViewBeforeZoomFit,
                setMapViewBeforeZoomFit,
                restoreMapViewRequest,
                setRestoreMapViewRequest,
                fitBoundsPadding,
                mutateFitBoundsPadding,
                selectionFocus,
                setSelectionFocus,
                focusModeOn,
                setFocusModeOn,
                tileURL,
                setTileURL,
                renderingType,
                setRenderingType,
                heightmap,
                setHeightmap,
                processHeightmaps,
                setProcessHeightmaps,
                visibleBboxInfo,
                setVisibleBboxInfo,
                mapBbox,
                setMapBbox,
                pinPoint,
                setPinPoint,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export default MapContext;
