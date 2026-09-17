import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '@map/context/AppContext';
import MapContext from '@map/context/MapContext';
import MapStateLayer from '@map/map/layers/MapStateLayer';
import CustomTileLayer from '@map/map/layers/CustomTileLayer';
import { clusterMarkers } from '@map/map/util/Clusterizer';
import { getSelectedMarkerHideRadiusM } from '@map/map/util/MarkerSelectionService';
import { DYNAMIC_RENDERING } from '@map/menu/configuremap/ConfigureMap';
import { apiGet } from '@map/util/HttpApi';

jest.mock('react-leaflet', () => ({ useMap: jest.fn() }));
jest.mock('react-router-dom', () => ({ useLocation: () => ({ pathname: '/map' }) }));
jest.mock('leaflet.vectorgrid', () => ({}));
jest.mock('@map/context/AppContext', () => ({
    ...jest.requireActual('@map/context/AppContext'),
    default: require('react').createContext(null),
}));
jest.mock('@map/context/MapContext', () => ({
    __esModule: true,
    default: require('react').createContext(null),
}));

let map;
let root;
let container;
let reactContainer;
let frames;
let any3d;
const previousActEnvironment = globalThis.IS_REACT_ACT_ENVIRONMENT;

beforeAll(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
});

afterAll(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
});

beforeEach(() => {
    // jsdom has no CSS transforms; enable Leaflet's fractional zoom support.
    any3d = L.Browser.any3d;
    L.Browser.any3d = true;
    frames = new Map();
    let frameId = 0;
    jest.spyOn(L.Util, 'requestAnimFrame').mockImplementation((callback) => {
        frames.set(++frameId, callback);
        return frameId;
    });
    jest.spyOn(L.Util, 'cancelAnimFrame').mockImplementation((id) => frames.delete(id));

    container = document.createElement('div');
    reactContainer = document.createElement('div');
    document.body.append(container, reactContainer);
    Object.defineProperties(container, {
        clientWidth: { value: 800 },
        clientHeight: { value: 600 },
    });
    map = L.map(container, {
        zoomSnap: 0.01,
        minZoom: 2,
        maxZoom: 20,
        scrollWheelZoom: false,
        zoomAnimation: false,
        fadeAnimation: false,
        zoomControl: false,
        attributionControl: false,
    }).setView([0, 0], 10);
    useMap.mockReturnValue(map);
    root = createRoot(reactContainer);
});

afterEach(() => {
    act(() => root.unmount());
    map.remove();
    container.remove();
    reactContainer.remove();
    L.Browser.any3d = any3d;
});

function mountLayers({ raster = false } = {}) {
    const context = {
        setVisibleBboxInfo: jest.fn(),
        renderingType: DYNAMIC_RENDERING,
        tileURL: { url: 'https://tiles.test/{z}/{x}/{y}.png', infoUrl: 'https://tiles.test/{z}/{x}/{y}.json' },
    };
    act(() => {
        root.render(
            React.createElement(
                AppContext.Provider,
                { value: { infoBlockWidth: 0 } },
                React.createElement(
                    MapContext.Provider,
                    { value: context },
                    React.createElement(MapStateLayer),
                    raster &&
                        React.createElement(CustomTileLayer, {
                            minZoom: 2,
                            maxZoom: 20,
                            maxNativeZoom: 19,
                            updateWhenZooming: false,
                        })
                )
            )
        );
    });
}

function wheel(deltaY) {
    container.dispatchEvent(
        new WheelEvent('wheel', { deltaY, deltaMode: 0, clientX: 400, clientY: 300, cancelable: true })
    );
}

function nextFrame() {
    const pending = [...frames.values()];
    frames.clear();
    act(() => pending.forEach((callback) => callback()));
}

function finishZoom() {
    for (let i = 0; frames.size && i < 100; i++) nextFrame();
    expect(frames.size).toBe(0);
}

describe('fractional wheel zoom', () => {
    test('a wheel notch finishes once, keeps hundredths and does not reset raster tiles', () => {
        mountLayers();
        const zoomend = jest.fn();
        const moveend = jest.fn();
        const viewreset = jest.fn();
        map.on({ zoomend, moveend, viewreset });

        wheel(-100);
        finishZoom();

        expect(map.getZoom()).toBeCloseTo(10.22);
        expect(zoomend).toHaveBeenCalledTimes(1);
        expect(moveend).toHaveBeenCalledTimes(1);
        expect(viewreset).not.toHaveBeenCalled();
    });

    test('small trackpad deltas accumulate across animation frames', () => {
        mountLayers();
        for (let i = 0; i < 100; i++) {
            wheel(-1);
            nextFrame();
        }
        finishZoom();

        expect(map.getZoom()).toBeCloseTo(10.22);
    });

    test('an explicit setView supersedes an unfinished wheel gesture', () => {
        mountLayers();
        wheel(-100);
        nextFrame();
        act(() => map.setView([1, 1], 15, { animate: false }));
        expect(map.getZoom()).toBe(15);
        finishZoom();

        expect(map.getZoom()).toBe(15);
        expect(map.getCenter().equals([1, 1])).toBe(true);
    });
});

describe('dynamic raster labels', () => {
    function rasterLayer() {
        let raster;
        map.eachLayer((layer) => {
            if (layer instanceof L.TileLayer) raster = layer;
        });
        return raster;
    }

    async function loadLabels(z) {
        apiGet.mockResolvedValue({
            ok: true,
            json: async () => ({
                features: [
                    {
                        geometry: { type: 'point' },
                        iconX: 0.00001,
                        iconY: 0.00001,
                        text: 'Regression label',
                        textSize: 16,
                        textColor: 0,
                        textShadow: 0,
                        textShadowColor: 0,
                        mainIcon: '',
                        shield: '',
                        shieldRes: '',
                    },
                ],
            }),
        });
        const coords = map.project([0.00001, 0.00001], z).divideBy(256).floor();
        coords.z = z;
        const raster = rasterLayer();
        const tile = raster._tiles[raster._tileCoordsToKey(coords)];
        expect(tile).toBeDefined();
        await act(async () => {
            // Complete one real tile load without fetching an image in jsdom.
            tile.el.dispatchEvent(new Event('load'));
        });
        expect(apiGet).toHaveBeenCalledTimes(1);
    }

    test.each([13, 13.65, 19.65])('adds labels for the active raster tile level at map zoom %s', async (zoom) => {
        map.setZoom(zoom);
        mountLayers({ raster: true });
        const tileZoom = Math.min(19, Math.round(zoom));
        expect(rasterLayer()._tileZoom).toBe(tileZoom);
        await loadLabels(tileZoom);

        expect(container.querySelector('.custom-text-icon')?.textContent.trim()).toBe('Regression label');
    });

    test('keeps loaded labels when wheel zoom reuses the same raster tile level', async () => {
        map.setZoom(13);
        mountLayers({ raster: true });
        await loadLabels(13);
        expect(container.querySelector('.custom-text-icon')?.textContent.trim()).toBe('Regression label');

        wheel(-100);
        finishZoom();

        expect(map.getZoom()).toBeCloseTo(13.22);
        expect(rasterLayer()._tileZoom).toBe(13);
        expect(apiGet).toHaveBeenCalledTimes(1);
        expect(container.querySelector('.custom-text-icon')?.textContent.trim()).toBe('Regression label');
    });
});

describe('marker geometry at fractional zoom', () => {
    test.each([false, true])('nearby favorites stay clustered just above an integer zoom (ext=%s)', (inExt) => {
        // 2.2 m apart, on opposite sides of a cell boundary at zoom 11, but in one cell at zoom 10.
        const places = [-0.0879, -0.08788].map((lon, i) => ({
            name: `point-${i}`,
            ...(inExt ? { ext: { lat: 0, lon } } : { lat: 0, lon }),
        }));
        const clusterAt = (zoom) => clusterMarkers({ places, zoom, latitude: 0, isFavorites: true });
        expect(clusterAt(10).mainMarkers).toEqual([places[0]]);

        expect(clusterAt(10.01).mainMarkers).toEqual([places[0]]);
        expect(clusterAt(10.01).secondaryMarkers).toEqual([]);
    });

    test('the selected pin hide radius does not collapse just below zoom 16', () => {
        const minimum = getSelectedMarkerHideRadiusM(16);
        expect(minimum).toBe(50);

        expect(getSelectedMarkerHideRadiusM(15.99)).toBeGreaterThanOrEqual(minimum);
    });
});
