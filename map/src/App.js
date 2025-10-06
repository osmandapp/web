import { createContext, React, useCallback, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalFrame from './frame/GlobalFrame';
import { AppContextProvider } from './context/AppContext';
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
    WEATHER_URL,
    EXPLORE_URL,
    TRAVEL_URL,
    SHARE_FILE_URL,
    TRACK_ANALYZER_URL,
    INFO_MENU_URL,
    SHARE_MENU_URL,
    PURCHASES_URL,
    PRICING_URL,
    WEATHER_FORECAST_URL,
    POI_CATEGORIES_URL,
    SEARCH_RESULT_URL,
    POI_URL,
} from './manager/GlobalManager';
import ExploreMenu from './menu/search/explore/ExploreMenu';
import SearchMenu from './menu/search/SearchMenu';
import Weather from './menu/weather/Weather';
import FavoritesMenu from './menu/favorite/FavoritesMenu';
import NavigationMenu from './menu/navigation/NavigationMenu';
import PlanRouteMenu from './menu/planroute/PlanRouteMenu';
import TracksMenu from './menu/tracks/TracksMenu';
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
import PricingPage from './shop/PricingPage';
import WeatherForecastDetails from './menu/weather/WeatherForecastDetails';
import PoiCategoriesList from './menu/search/search/PoiCategoriesList';
import SearchResults from './menu/search/search/SearchResults';
import WptDetails from './infoblock/components/wpt/WptDetails';

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

    return (
        <ResetAppContext.Provider value={resetApp}>
            <LoginContextProvider key={`login-${resetKey}`}>
                <AppContextProvider key={`app-${resetKey}`}>
                    <BrowserRouter
                        key={`router-${resetKey}`}
                        // Enable React Router v7 features: concurrent transitions and correct relative splat path resolution
                        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
                    >
                        <AppServices />
                        <NavigateGlobal />
                        <Routes>
                            <Route path={MAIN_URL} element={<GlobalFrame />}>
                                <Route path={LOGIN_URL} element={<LoginMenu />}>
                                    <Route path={PURCHASES_URL} element={<PurchasesMenu />}>
                                        <Route path=":key" element={<PurchaseInfo />}></Route>
                                    </Route>
                                </Route>
                                <Route
                                    path={DELETE_ACCOUNT_URL}
                                    element={<DeleteAccountDialog setDeleteAccountFlag={null} />}
                                />
                                <Route path={SEARCH_URL} element={<SearchMenu />}>
                                    <Route path={EXPLORE_URL} element={<ExploreMenu />}></Route>
                                    <Route path={POI_CATEGORIES_URL} element={<PoiCategoriesList />}></Route>
                                    <Route path={SEARCH_RESULT_URL} element={<SearchResults />}></Route>
                                </Route>
                                <Route path={CONFIGURE_URL} element={<ConfigureMap />}></Route>
                                <Route path={WEATHER_URL} element={<Weather />}>
                                    <Route path={WEATHER_FORECAST_URL} element={<WeatherForecastDetails />}></Route>
                                </Route>
                                <Route path={TRACKS_URL} element={<TracksMenu />}>
                                    <Route path={INFO_MENU_URL + ':filename'} element={<InformationBlock />}>
                                        <Route path={SHARE_MENU_URL} element={<ShareFileMenu />} />
                                    </Route>
                                </Route>
                                <Route path={FAVORITES_URL} element={<FavoritesMenu />}>
                                    <Route path={INFO_MENU_URL + ':favgroup/:favname'} element={<InformationBlock />}>
                                        <Route path={SHARE_MENU_URL} element={<ShareFileMenu />} />
                                    </Route>
                                </Route>
                                <Route path={NAVIGATE_URL} element={<NavigationMenu />}></Route>
                                <Route path={PLANROUTE_URL} element={<PlanRouteMenu />}></Route>
                                <Route path={TRAVEL_URL} element={<TravelMenu />}></Route>
                                <Route path={SETTINGS_URL} element={<SettingsMenu />}></Route>
                                <Route path={SHARE_FILE_URL} element={<ShareFile />}></Route>
                                <Route path={TRACK_ANALYZER_URL} element={<TrackAnalyzerMenu />}></Route>
                                <Route path={POI_URL} element={<WptDetails />}></Route>
                            </Route>
                            <Route path={PRICING_URL} element={<PricingPage />}></Route>
                        </Routes>
                    </BrowserRouter>
                </AppContextProvider>
            </LoginContextProvider>
        </ResetAppContext.Provider>
    );
};

export default App;
