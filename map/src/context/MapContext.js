import React, { useState, useContext } from 'react';
import { useMutator } from '../util/Utils';
import { MAP_OBJ_URL, POI_URL, STOP_URL } from '../manager/GlobalManager';
import AppContext, { LOCAL_STORAGE_CONFIGURE_MAP } from './AppContext';
import { osmandTileURL } from '../map/baseTileURL';
import { getPinPointFromUrl } from '../map/util/initialMapView';

const MapContext = React.createContext();

function getInitialHeightmap() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_CONFIGURE_MAP);
        return saved ? (JSON.parse(saved).terrain ?? null) : null;
    } catch {
        return null;
    }
}

function getInitialPinPoint() {
    if (globalThis.location.pathname.includes(POI_URL)) return null;
    if (globalThis.location.pathname.includes(STOP_URL)) return null;
    if (globalThis.location.pathname.includes(MAP_OBJ_URL)) return null;

    return getPinPointFromUrl();
}

export const MapContextProvider = ({ children }) => {
    const [zoomToFitRequest, setZoomToFitRequest] = useState(null);
    const [mapViewStack, setMapViewStack] = useState([]);
    const [mapViewStackRequest, setMapViewStackRequest] = useState(null);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

    // currently focused selection ({ type, id })
    const [selectionFocus, setSelectionFocus] = useState(null);
    const [focusModeOn, setFocusModeOn] = useState(false);

    // map tile — seeded from the single source of truth (configureMap in AppContext)
    const { configureMapState } = useContext(AppContext);
    const [tileURL, setTileURL] = useState(() => configureMapState.mapStyle?.tileURL ?? osmandTileURL);
    const [mvtTileStats, setMvtTileStats] = useState(null);
    const [mvtTweaks, setMvtTweaks] = useState({ fractionalZoom: true });

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
                mapViewStack,
                setMapViewStack,
                mapViewStackRequest,
                setMapViewStackRequest,
                fitBoundsPadding,
                mutateFitBoundsPadding,
                selectionFocus,
                setSelectionFocus,
                focusModeOn,
                setFocusModeOn,
                tileURL,
                setTileURL,
                mvtTileStats,
                setMvtTileStats,
                mvtTweaks,
                setMvtTweaks,
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
