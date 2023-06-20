import { React } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// components
import OsmAndMapFrame from './drawer/components/OsmAndMapFrame';
import LoginDialog from './login/LoginDialog';
import { AppContextProvider } from './context/AppContext'

export let globalNavigate = () => null;

const NavigateGlobal = () => {
  globalNavigate = useNavigate();
  return false;
};

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavigateGlobal />
        <Routes>
          <Route path="/map" element={<OsmAndMapFrame />}>
            <Route path="loginForm" element={<LoginDialog />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;