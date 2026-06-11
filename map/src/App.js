import { createContext, React, useCallback, useContext, useMemo, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalFrame from './frame/GlobalFrame';
import { AppContextProvider } from './context/AppContext';
import { WeatherContextProvider } from './context/WeatherContext';
import { MapContextProvider } from './context/MapContext';
import { LiveTrackingProvider } from './context/LiveTrackingContext';
import DeleteAccountDialog from './login/dialogs/DeleteAccountDialog';
import { AppServices } from './services/AppServices';
import './variables.css';
import './i18n';
import {
    CONFIGURE_URL,
    DELETE_ACCOUNT_URL,
    SEARCH_URL,
    FAVORITES_URL,
    LOGIN_URL,
    MAIN_URL,
    NAVIGATE_URL,
    PLANROUTE_URL,
    SETTINGS_URL,
    TRACKS_URL,
    LIVE_TRACKS_URL,
    VISIBLE_TRACKS_URL,
    WEATHER_URL,
    EXPLORE_URL,
    TRAVEL_URL,
    SHARE_FILE_URL,
    TRACK_ANALYZER_URL,
    INFO_MENU_URL,
    SHARE_MENU_URL,
    PURCHASES_URL,
    GARMIN_URL,
    PRICING_URL,
    WEATHER_FORECAST_URL,
    POI_CATEGORIES_URL,
    SEARCH_RESULT_URL,
    POI_URL,
    STOP_URL,
} from './manager/GlobalManager';
import ExploreMenu from './menu/search/explore/ExploreMenu';
import SearchMenu from './menu/search/SearchMenu';
import Weather from './menu/weather/Weather';
import FavoritesMenu from './menu/favorite/FavoritesMenu';
import NavigationMenu from './menu/navigation/NavigationMenu';
import PlanRouteMenu from './menu/planroute/PlanRouteMenu';
import TracksMenu from './menu/tracks/TracksMenu';
import VisibleTracks from './menu/visibletracks/VisibleTracks';
import SettingsMenu from './menu/settings/SettingsMenu';
import ConfigureMap from './menu/configuremap/ConfigureMap';
import LoginMenu from './login/LoginMenu';
import TravelMenu from './menu/travel/TravelMenu';
import ShareFile from './menu/share/ShareFile';
import TrackAnalyzerMenu from './menu/analyzer/TrackAnalyzerMenu';
import InformationBlock from './infoblock/components/InformationBlock';
import ShareFileMenu from './menu/share/ShareFileMenu';
import { LoginContextProvider } from './context/LoginContext';
import PurchasesMenu from './login/purchases/PurchasesMenu';
import PurchaseInfo from './login/purchases/PurchaseInfo';
import GarminConnectMenu from './login/garmin/GarminConnectMenu';
import PricingPage from './shop/PricingPage';
import WeatherForecastDetails from './menu/weather/WeatherForecastDetails';
import PoiCategoriesList from './menu/search/search/PoiCategoriesList';
import SearchResults from './menu/search/search/SearchResults';
import WptDetails from './infoblock/components/wpt/WptDetails';

const muiTheme = createTheme({
    typography: {
        fontFamily: 'var(--font-family-primary), sans-serif',
    },
});

export let globalNavigate = () => null;

const NavigateGlobal = () => {
    globalNavigate = useNavigate();
    return false;
};

export const ResetAppContext = createContext(() => {});
export const useResetApp = () => useContext(ResetAppContext);

const App = () => {
    const [resetKey, setResetKey] = useState(0);

    const resetApp = useCallback(() => {
        clearMapInstances();
        setResetKey((k) => k + 1);
    }, []);

    // clear leaflet map and hash instances to avoid errors after app reset
    function clearMapInstances() {
        try {
            const map = window.__leafletMap;
            const hash = window.__leafletHash;

            // remove event listeners
            if (map && hash?.onMapMove) map.off('moveend', hash.onMapMove, hash);
            if (hash?.onHashChange) window.removeEventListener('hashchange', hash.onHashChange, false);

            // disable hash update function
            if (hash) hash.update = () => {};

            window.__leafletMap = null;
            window.__leafletHash = null;
        } catch (e) {
            console.warn('dispose leaflet-hash failed', e);
        }
    }

    const router = useMemo(
        () =>
            createBrowserRouter(
                [
                    {
                        path: '/',
                        element: (
                            <LiveTrackingProvider>
                                <AppServices />
                                <NavigateGlobal />
                                <Outlet />
                            </LiveTrackingProvider>
                        ),
                        children: [
                            {
                                path: MAIN_URL,
                                element: <GlobalFrame />,
                                children: [
                                    {
                                        path: LOGIN_URL,
                                        element: <LoginMenu />,
                                        children: [
                                            {
                                                path: PURCHASES_URL,
                                                element: <PurchasesMenu />,
                                                children: [{ path: ':key', element: <PurchaseInfo /> }],
                                            },
                                            { path: GARMIN_URL, element: <GarminConnectMenu /> },
                                        ],
                                    },
                                    {
                                        path: DELETE_ACCOUNT_URL,
                                        element: <DeleteAccountDialog setDeleteAccountFlag={null} />,
                                    },
                                    {
                                        path: SEARCH_URL,
                                        element: <SearchMenu />,
                                        children: [
                                            { path: EXPLORE_URL, element: <ExploreMenu /> },
                                            { path: POI_CATEGORIES_URL, element: <PoiCategoriesList /> },
                                            { path: SEARCH_RESULT_URL, element: <SearchResults /> },
                                        ],
                                    },
                                    { path: CONFIGURE_URL, element: <ConfigureMap /> },
                                    {
                                        path: WEATHER_URL,
                                        element: <Weather />,
                                        children: [{ path: WEATHER_FORECAST_URL, element: <WeatherForecastDetails /> }],
                                    },
                                    {
                                        path: TRACKS_URL,
                                        element: <TracksMenu />,
                                        children: [
                                            {
                                                path: INFO_MENU_URL + ':filename',
                                                element: <InformationBlock />,
                                                children: [{ path: SHARE_MENU_URL, element: <ShareFileMenu /> }],
                                            },
                                        ],
                                    },
                                    { path: LIVE_TRACKS_URL, element: <TracksMenu /> },
                                    { path: VISIBLE_TRACKS_URL, element: <VisibleTracks /> },
                                    {
                                        path: FAVORITES_URL,
                                        element: <FavoritesMenu />,
                                        children: [
                                            {
                                                path: INFO_MENU_URL + ':favgroup/:favname',
                                                element: <InformationBlock />,
                                            },
                                            {
                                                path: INFO_MENU_URL + ':filename' + '/' + SHARE_MENU_URL,
                                                element: <ShareFileMenu />,
                                            },
                                        ],
                                    },
                                    { path: NAVIGATE_URL, element: <NavigationMenu /> },
                                    { path: PLANROUTE_URL, element: <PlanRouteMenu /> },
                                    { path: TRAVEL_URL, element: <TravelMenu /> },
                                    { path: SETTINGS_URL, element: <SettingsMenu /> },
                                    { path: SHARE_FILE_URL, element: <ShareFile /> },
                                    { path: TRACK_ANALYZER_URL, element: <TrackAnalyzerMenu /> },
                                    { path: POI_URL, element: <WptDetails /> },
                                    { path: STOP_URL, element: <WptDetails /> },
                                ],
                            },
                            { path: PRICING_URL, element: <PricingPage /> },
                        ],
                    },
                ],
                {
                    future: { v7_relativeSplatPath: true },
                }
            ),
        [resetKey]
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <ResetAppContext.Provider value={resetApp}>
                <LoginContextProvider key={'login-' + resetKey}>
                    <AppContextProvider key={'app-' + resetKey}>
                        <WeatherContextProvider>
                            <MapContextProvider>
                                <RouterProvider router={router} future={{ v7_startTransition: true }} />
                            </MapContextProvider>
                        </WeatherContextProvider>
                    </AppContextProvider>
                </LoginContextProvider>
            </ResetAppContext.Provider>
        </ThemeProvider>
    );
};

export default App;
