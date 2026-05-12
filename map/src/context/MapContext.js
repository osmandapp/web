import React, { useState } from 'react';
import { useMutator } from '../util/Utils';

const MapContext = React.createContext();

export const MapContextProvider = ({ children }) => {
    const [zoomToFitRequest, setZoomToFitRequest] = useState(null);
    const [mapViewBeforeZoomFit, setMapViewBeforeZoomFit] = useState(null);
    const [restoreMapViewRequest, setRestoreMapViewRequest] = useState(false);
    const [fitBoundsPadding, mutateFitBoundsPadding] = useMutator({ left: 0, top: 0, right: 0, bottom: 0 });

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
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export default MapContext;
