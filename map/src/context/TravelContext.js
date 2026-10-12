import React, { useState } from 'react';
import { DEFAULT_HEATMAP_APPEARANCE } from '../menu/travel/HeatmapAppearance';

export const TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY = 'travelHeatmapAppearance';
const HEATMAP_APPEARANCE_VERSION = 1;
export function saveHeatmapAppearance(appearance) {
    localStorage.setItem(
        TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY,
        JSON.stringify({ ...appearance, version: HEATMAP_APPEARANCE_VERSION })
    );
}
// the search radius follows the zoom
export const AUTO_SEARCH_RADIUS = 0;

const TravelContext = React.createContext();

export const TravelContextProvider = ({ children }) => {
    const [openTravel, setOpenTravel] = useState(false);
    const [openTravelFilters, setOpenTravelFilters] = useState(false);
    const [searchTravelRoutes, setSearchTravelRoutes] = useState(null);
    const [selectedTravelRoute, setSelectedTravelRoute] = useState(null);
    const [travelRouteIdByUrl, setTravelRouteIdByUrl] = useState(null);
    const [processingTravelRouteByUrl, setProcessingTravelRouteByUrl] = useState(false);
    const [travelRoutesHidden, setTravelRoutesHidden] = useState(false); // hide other travel routes on the map
    const [travelShowStartFinish, setTravelShowStartFinish] = useState(false);
    const [travelSearchRadius, setTravelSearchRadius] = useState(AUTO_SEARCH_RADIUS); // metres
    const [travelHeatmapMatch, setTravelHeatmapMatch] = useState(null); // { matched, total } tracks of the heatmap filter
    const [travelHeatmapAppearance, setTravelHeatmapAppearance] = useState(loadHeatmapAppearance);

    return (
        <TravelContext.Provider
            value={{
                openTravel,
                setOpenTravel,
                openTravelFilters,
                setOpenTravelFilters,
                searchTravelRoutes,
                setSearchTravelRoutes,
                selectedTravelRoute,
                setSelectedTravelRoute,
                travelRouteIdByUrl,
                setTravelRouteIdByUrl,
                processingTravelRouteByUrl,
                setProcessingTravelRouteByUrl,
                travelRoutesHidden,
                setTravelRoutesHidden,
                travelShowStartFinish,
                setTravelShowStartFinish,
                travelSearchRadius,
                setTravelSearchRadius,
                travelHeatmapMatch,
                setTravelHeatmapMatch,
                travelHeatmapAppearance,
                setTravelHeatmapAppearance,
            }}
        >
            {children}
        </TravelContext.Provider>
    );
};

function loadHeatmapAppearance() {
    try {
        const saved = JSON.parse(localStorage.getItem(TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY));
        if (saved?.version === HEATMAP_APPEARANCE_VERSION) {
            const { version, ...appearance } = saved;

            return { ...DEFAULT_HEATMAP_APPEARANCE, ...appearance };
        }
    } catch {}
    localStorage.removeItem(TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY);

    return DEFAULT_HEATMAP_APPEARANCE;
}

export default TravelContext;
