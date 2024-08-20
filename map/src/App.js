import { React } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import GlobalFrame from './frame/components/GlobalFrame';
import LoginDialog from './login/LoginDialog';
import { AppContextProvider } from './context/AppContext';
import DeleteAccountDialog from './login/DeleteAccountDialog';
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
} from './manager/GlobalManager';
import ExploreMenu from './menu/search/explore/ExploreMenu';
import SearchMenu from './menu/search/SearchMenu';
import Weather from './menu/weather/Weather';
import FavoritesMenu from './menu/favorite/FavoritesMenu';
import RouteMenu from './menu/route/RouteMenu';
import PlanRouteMenu from './menu/planroute/PlanRouteMenu';
import TracksMenu from './menu/tracks/TracksMenu';
import SettingsMenu from './menu/settings/SettingsMenu';
import ConfigureMap from './menu/configuremap/ConfigureMap';

export let globalNavigate = () => null;

const NavigateGlobal = () => {
    globalNavigate = useNavigate();
    return false;
};

const App = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <AppServices />
                <NavigateGlobal />
                <Routes>
                    <Route path={MAIN_URL} element={<GlobalFrame />}>
                        <Route path={LOGIN_URL} element={<LoginDialog />}></Route>
                        <Route
                            path={DELETE_ACCOUNT_URL}
                            element={<DeleteAccountDialog setDeleteAccountFlag={null} />}
                        />
                        <Route path={SEARCH_URL} element={<SearchMenu />}></Route>
                        <Route path={EXPLORE_URL} element={<ExploreMenu />}></Route>
                        <Route path={CONFIGURE_URL} element={<ConfigureMap />}></Route>
                        <Route path={WEATHER_URL} element={<Weather />}></Route>
                        <Route path={TRACKS_URL} element={<TracksMenu />}></Route>
                        <Route path={FAVORITES_URL} element={<FavoritesMenu />}></Route>
                        <Route path={NAVIGATE_URL} element={<RouteMenu />}></Route>
                        <Route path={PLANROUTE_URL} element={<PlanRouteMenu />}></Route>
                        <Route path={SETTINGS_URL} element={<SettingsMenu />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;
