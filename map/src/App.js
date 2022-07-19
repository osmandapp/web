import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components
import OsmAndMapFrame from './components/OsmAndMapFrame';
import LoginDialog from './components/LoginDialog';
import { AppContextProvider } from './context/AppContext'



const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
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