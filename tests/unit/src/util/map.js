import { act, createElement } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '@map/context/AppContext';
import MapContext from '@map/context/MapContext';
import { mountRoot } from './reactRoot';

/** An 800×600 map without animations and controls, also returned by useMap(); removeMap() removes it with its container. */
export function createMap(center, zoom, options = {}) {
    const container = document.createElement('div');
    document.body.append(container);
    Object.defineProperties(container, {
        clientWidth: { value: 800 },
        clientHeight: { value: 600 },
    });
    const map = L.map(container, {
        zoomAnimation: false,
        fadeAnimation: false,
        zoomControl: false,
        attributionControl: false,
        ...options,
    }).setView(center, zoom);
    useMap.mockReturnValue(map);

    return map;
}

export function removeMap(map) {
    const container = map.getContainer();
    map.remove();
    container.remove();
}

/** Renders the element inside AppContext.Provider (ctx) and MapContext.Provider (mtx); rerender() gives them new values. */
export function renderWithMapContexts(element, { ctx, mtx }) {
    const { root, unmount } = mountRoot();
    const render = (values) =>
        act(() =>
            root.render(
                createElement(
                    AppContext.Provider,
                    { value: values.ctx },
                    createElement(MapContext.Provider, { value: values.mtx }, element)
                )
            )
        );
    render({ ctx, mtx });

    return { rerender: render, unmount };
}
