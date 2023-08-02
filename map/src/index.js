import React from 'react';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

const markerEventHandler = (e) => {
    if (
        e.target?.draggable &&
        e.target?.alt === 'Marker' &&
        e.target?.classList?.contains('leaflet-marker-draggable')
    ) {
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        if (e.type === 'touchend') {
            e.preventDefault();
            e.target.dispatchEvent(new Event('contextmenu', e));
        }
    }
};

// _touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart'
document.addEventListener('touchstart', markerEventHandler, { passive: false });
document.addEventListener('touchend', markerEventHandler, { passive: false });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
