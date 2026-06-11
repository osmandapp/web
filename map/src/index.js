import React from 'react';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { ensureAppDataVersion } from './util/appDataVersion';

globalThis.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (reason?.name === 'AbortError' || String(reason?.message).includes('aborted')) {
        event.preventDefault();
    }
});

const container = document.getElementById('root');
const root = createRoot(container);

try {
    await ensureAppDataVersion();
} catch (e) {
    console.error(e);
}
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (process.env.NODE_ENV === 'development') {
    import('./test/liveTrackSimulator').then((sim) => {
        globalThis.__liveTrackSim = sim;
    });
}
