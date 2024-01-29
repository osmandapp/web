import { React } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// components
import GlobalFrame from './frame/components/GlobalFrame';
import LoginDialog from './login/LoginDialog';
import { AppContextProvider } from './context/AppContext';
import DeleteAccountDialog from './login/DeleteAccountDialog';
import { AppServices } from './services/AppServices';
import './variables.css';
import './i18n';

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
                    <Route path="/map" element={<GlobalFrame />}>
                        <Route path="loginForm" element={<LoginDialog />}></Route>
                        <Route path="delete-account" element={<DeleteAccountDialog setDeleteAccountFlag={null} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
};

export default App;
