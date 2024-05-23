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
    EXPLORE_URL,
    FAVORITES_URL,
    LOGIN_URL,
    MAIN_URL,
    NAVIGATE_URL,
    PLANROUTE_URL,
    SETTINGS_URL,
    TRACKS_URL,
    WEATHER_URL,
} from './manager/GlobalManager';

export let globalNavigate = () => null;

const NavigateGlobal = () => {
    globalNavigate = useNavigate();
    return false;
};

const EmptyComponent = () => null;

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
                        <Route path={EXPLORE_URL} element={<EmptyComponent />}></Route>
                        <Route path={CONFIGURE_URL} element={<EmptyComponent />}></Route>
                        <Route path={WEATHER_URL} element={<EmptyComponent />}></Route>
                        <Route path={TRACKS_URL} element={<EmptyComponent />}></Route>
                        <Route path={FAVORITES_URL} element={<EmptyComponent />}></Route>
                        <Route path={NAVIGATE_URL} element={<EmptyComponent />}></Route>
                        <Route path={PLANROUTE_URL} element={<EmptyComponent />}></Route>
                        <Route path={SETTINGS_URL} element={<EmptyComponent />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;
