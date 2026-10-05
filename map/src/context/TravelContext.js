import React, { useState } from 'react';
import { DEFAULT_HEATMAP_APPEARANCE } from '../menu/travel/HeatmapAppearance';

export const TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY = 'travelHeatmapAppearance';

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
    const [travelHeatmapMatch, setTravelHeatmapMatch] = useState(null); // { matched, total } tracks of the heatmap filter
    const [travelHeatmapAppearance, setTravelHeatmapAppearance] = useState(() => {
        try {
            const s = localStorage.getItem(TRAVEL_HEATMAP_APPEARANCE_STORAGE_KEY);
            return s ? { ...DEFAULT_HEATMAP_APPEARANCE, ...JSON.parse(s) } : DEFAULT_HEATMAP_APPEARANCE;
        } catch {
            return DEFAULT_HEATMAP_APPEARANCE;
        }
    });

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

export default TravelContext;
