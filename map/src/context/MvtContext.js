import React, { useState } from 'react';

const MvtContext = React.createContext();

export const MvtContextProvider = ({ children }) => {
    const [mvtTileStats, setMvtTileStats] = useState(null);
    const [mvtTweaks, setMvtTweaks] = useState({
        fractionalZoom: true,
        dataZoomShift: 0,
        styleDetailShift: 0,
        minZoomIdFilter: '',
    });
    const [mvtStyleUpdating, setMvtStyleUpdating] = useState(false);

    return (
        <MvtContext.Provider
            value={{
                mvtTileStats,
                setMvtTileStats,
                mvtTweaks,
                setMvtTweaks,
                mvtStyleUpdating,
                setMvtStyleUpdating,
            }}
        >
            {children}
        </MvtContext.Provider>
    );
};

export default MvtContext;
