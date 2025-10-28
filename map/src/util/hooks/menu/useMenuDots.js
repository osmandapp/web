import { useEffect, useState } from 'react';
import {
    OBJECT_SEARCH,
    OBJECT_TRACK_ANALYZER,
    OBJECT_TYPE_CLOUD_TRACK,
    OBJECT_TYPE_FAVORITE,
    OBJECT_TYPE_LOCAL_TRACK,
    OBJECT_TYPE_NAVIGATION_TRACK,
    OBJECT_TYPE_TRAVEL,
    OBJECT_TYPE_WEATHER,
} from '../../../context/AppContext';
import { selectedForecastDetails } from '../../../menu/weather/Weather';

export default function useMenuDots(ctx) {
    const [menuDots, setMenuDots] = useState({});

    function setActiveMenu(type, value) {
        setMenuDots((prev) => ({ ...prev, [type]: value }));
    }

    useEffect(() => {
        setActiveMenu(OBJECT_TYPE_FAVORITE, ctx.openFavGroups?.length > 0 || ctx.selectedFavoriteObj);
    }, [ctx.openFavGroups, ctx.selectedFavoriteObj]);

    useEffect(() => {
        setActiveMenu(
            OBJECT_TYPE_CLOUD_TRACK,
            ctx.openGroups?.length > 0 || ctx.selectedCloudTrackObj || ctx.openVisibleMenu?.showTracks
        );
    }, [ctx.openGroups, ctx.selectedCloudTrackObj, ctx.openVisibleMenu?.showTracks]);

    useEffect(() => {
        const showDetails = selectedForecastDetails(ctx);
        const openLayers = ctx.weatherLayers[ctx.weatherType]?.some((l) => l.checked);

        setActiveMenu(OBJECT_TYPE_WEATHER, !isSameHour() || showDetails || openLayers);
    }, [ctx.weatherDate, ctx.weatherLayers, ctx.weatherType]);

    useEffect(() => {
        setActiveMenu(OBJECT_TYPE_TRAVEL, ctx.searchTravelRoutes && !ctx.searchTravelRoutes.clear);
    }, [ctx.searchTravelRoutes]);

    useEffect(() => {
        setActiveMenu(OBJECT_SEARCH, ctx.searchResult || ctx.exploreMenu || ctx.poiCatMenu || ctx.selectedPoiObj);
    }, [ctx.searchResult, ctx.exploreMenu, ctx.poiCatMenu, ctx.selectedPoiObj]);

    useEffect(() => {
        setActiveMenu(OBJECT_TRACK_ANALYZER, ctx.trackAnalyzer);
    }, [ctx.trackAnalyzer]);

    useEffect(() => {
        const startPoint = ctx.routeObject.getOption('route.points.start');
        const finishPoint = ctx.routeObject.getOption('route.points.finish');
        setActiveMenu(OBJECT_TYPE_NAVIGATION_TRACK, startPoint || finishPoint);
    }, [ctx.routeObject]);

    useEffect(() => {
        setActiveMenu(OBJECT_TYPE_LOCAL_TRACK, ctx.selectedLocalTrackObj);
    }, [ctx.selectedLocalTrackObj]);

    function isSameHour() {
        const initial = new Date();
        const current = ctx.weatherDate;

        return (
            initial.getFullYear() === current.getFullYear() &&
            initial.getMonth() === current.getMonth() &&
            initial.getDate() === current.getDate() &&
            initial.getHours() === current.getHours()
        );
    }

    return menuDots;
}
