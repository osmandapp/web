import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext from '@map/context/AppContext';
import MapContext from '@map/context/MapContext';
import MapStateLayer from '@map/map/layers/MapStateLayer';
import CustomTileLayer from '@map/map/layers/CustomTileLayer';
import { createPoiLayer } from '@map/map/layers/PoiLayer';
import { addMarkerTooltip, clusterMarkers } from '@map/map/util/Clusterizer';
import { createTooltip } from '@map/map/util/MapManager';
import { getSelectedMarkerHideRadiusM } from '@map/map/util/MarkerSelectionService';
import { DEFAULT_POI_ICON } from '@map/manager/PoiManager';
import { FINAL_POI_ICON_NAME, POI_ELO, POI_ID, POI_NAME } from '@map/infoblock/components/wpt/WptTagsProvider';
import { DYNAMIC_RENDERING } from '@map/menu/configuremap/ConfigureMap';
import { apiGet } from '@map/util/HttpApi';

jest.mock('react-leaflet', () => ({ useMap: jest.fn() }));
jest.mock('react-router-dom', () => ({ useLocation: () => ({ pathname: '/map' }) }));
jest.mock('leaflet.vectorgrid', () => ({}));
jest.mock('leaflet-spin', () => ({}));
jest.mock('leaflet.markercluster', () => ({}));
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

function mountLayers({ raster = false, infoBlockWidth = 0 } = {}) {
    const context = {
        setVisibleBboxInfo: jest.fn(),
        renderingType: DYNAMIC_RENDERING,
        tileURL: { url: 'https://tiles.test/{z}/{x}/{y}.png', infoUrl: 'https://tiles.test/{z}/{x}/{y}.json' },
    };
    act(() => {
        root.render(
            React.createElement(
                AppContext.Provider,
                { value: { infoBlockWidth } },
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

function wheel(deltaY, point = L.point(400, 300)) {
    container.dispatchEvent(
        new WheelEvent('wheel', { deltaY, deltaMode: 0, clientX: point.x, clientY: point.y, cancelable: true })
    );
}

function nextFrame() {
    const pending = [...frames.values()];
    frames.clear();
    act(() => pending.forEach((callback) => callback()));
}

function finishZoom(checkFrame = () => {}) {
    for (let i = 0; frames.size && i < 100; i++) {
        nextFrame();
        checkFrame();
    }
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

describe('zoom button animation regression (89f4884fe)', () => {
    // Baseline: 344d7c96a (89f4884fe^). Exercise the existing ZoomControl API;
    // the old implementation emits zoomanim and CSS-scales the MVT canvas.
    beforeEach(() => {
        jest.useFakeTimers();
        map.setView([50.4501, 30.5234], 13.65);
        // Enable Leaflet's real CSS animation path despite the default test setup.
        map.options.zoomAnimation = true;
        map._zoomAnimated = true;
        map._createAnimProxy();
        L.control.zoom({ position: 'bottomright' }).addTo(map);
        mountLayers({ infoBlockWidth: 320 });
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    function clickZoom(direction) {
        act(() => {
            container
                .querySelector(`.leaflet-control-zoom-${direction}`)
                .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
        });
    }

    async function advanceButtonFrame() {
        nextFrame();
        // Leaflet's bundled code captures its own RAF, bypassing the L.Util spy.
        // Wait for that frame too, so the pre-fix CSS animation actually starts.
        await act(async () => {
            await new Promise((resolve) => {
                L.Util.requestFn.call(window, resolve);
                // Also support Leaflet's setTimeout fallback for RAF.
                jest.advanceTimersByTime(20);
            });
        });
    }

    test.each([
        ['in', 1],
        ['out', -1],
    ])('zoom %s changes the view over multiple frames without CSS zoom animation', async (direction, delta) => {
        const initialZoom = map.getZoom();
        // 800x600 viewport, 64px menu + 320px info block on the left, 60px header.
        const anchor = L.point(592, 330);
        const anchorLatLng = map.containerPointToLatLng(anchor);
        const zoomanim = jest.fn();
        const zoomend = jest.fn();
        const viewreset = jest.fn();
        const zooms = [];
        map.on({ zoomanim, zoomend, viewreset, zoom: () => zooms.push(map.getZoom()) });

        function expectAnchor() {
            const position = map.project(anchorLatLng).subtract(map.project(map.getCenter())).add([400, 300]);
            expect(position.x).toBeCloseTo(anchor.x, 6);
            expect(position.y).toBeCloseTo(anchor.y, 6);
        }

        clickZoom(direction);
        expect(map.getZoom()).toBe(initialZoom);
        await advanceButtonFrame();

        expect(zoomanim).not.toHaveBeenCalled();
        expect((map.getZoom() - initialZoom) * delta).toBeGreaterThan(0);
        expect((map.getZoom() - initialZoom) * delta).toBeLessThan(1);
        expectAnchor();
        finishZoom(expectAnchor);

        expect(map.getZoom()).toBeCloseTo(initialZoom + delta);
        expect(zooms.length).toBeGreaterThan(1);
        expect(zoomanim).not.toHaveBeenCalled();
        expect(zoomend).toHaveBeenCalledTimes(1);
        expect(viewreset).not.toHaveBeenCalled();
    });

    test.each([
        ['in', 1],
        ['out', -1],
    ])('a second zoom %s click during animation adds another full level', async (direction, delta) => {
        const initialZoom = map.getZoom();
        const zoomanim = jest.fn();
        const zoomend = jest.fn();
        map.on({ zoomanim, zoomend });

        clickZoom(direction);
        await advanceButtonFrame();
        clickZoom(direction);
        finishZoom();

        expect(map.getZoom()).toBeCloseTo(initialZoom + 2 * delta);
        expect(zoomanim).not.toHaveBeenCalled();
        expect(zoomend).toHaveBeenCalledTimes(1);
    });
});

describe('POI tooltip zoom regression (3e5a98110)', () => {
    // Baseline: 11732bdcc (3e5a98110^). Use the existing addMarkerTooltip API:
    // the old handlers remove/recreate the tooltip on hover and close it on zoomend.
    let tooltipRef;
    let setSelectedId;
    let hoveredMarker;
    let tooltipopen;
    let tooltipclose;

    beforeEach(() => {
        // MapManager is stubbed by Jest; use real Leaflet tooltip layers for these tests.
        createTooltip.mockImplementation((text, latlng, options) =>
            L.tooltip({ permanent: true, direction: 'bottom', ...options })
                .setContent(text)
                .setLatLng(latlng)
        );
        tooltipRef = { current: null };
        setSelectedId = jest.fn();
        hoveredMarker = null;
        tooltipopen = jest.fn();
        tooltipclose = jest.fn();
        map.on({ tooltipopen, tooltipclose });
    });

    afterEach(() => createTooltip.mockReset());

    function addPoi(id, latlng = [0, 0]) {
        const marker = L.marker(latlng, { icon: L.divIcon(), idObj: id }).addTo(map);
        const element = marker.getElement();
        const matches = element.matches.bind(element);
        // jsdom cannot hit-test the cursor against moving marker elements.
        jest.spyOn(element, 'matches').mockImplementation((selector) =>
            selector === ':hover' ? hoveredMarker === marker : matches(selector)
        );
        addMarkerTooltip({ marker, text: id, latlng, map, ctx: { searchTooltipRef: tooltipRef }, setSelectedId });
        return marker;
    }

    function enter(marker) {
        hoveredMarker = marker;
        marker.fire('mouseover', { originalEvent: new MouseEvent('mouseover') });
    }

    function leave(marker) {
        hoveredMarker = null;
        marker.fire('mouseout', { originalEvent: new MouseEvent('mouseout') });
    }

    function expectTooltipUnchanged(tooltip) {
        expect(tooltipRef.current).toBe(tooltip);
        expect(map.hasLayer(tooltip)).toBe(true);
        expect(tooltip.getElement().isConnected).toBe(true);
        expect(tooltipopen).toHaveBeenCalledTimes(1);
        expect(tooltipclose).not.toHaveBeenCalled();
        expect(setSelectedId).toHaveBeenCalledTimes(1);
    }

    test('hover events during zoom keep the same tooltip without switching to another POI', () => {
        const owner = addPoi('POI 1');
        const other = addPoi('POI 2', [0.001, 0.001]);
        enter(owner);
        const tooltip = tooltipRef.current;

        map.fire('zoomstart');
        for (let i = 0; i < 3; i++) {
            leave(owner);
            expectTooltipUnchanged(tooltip);
            enter(other);
            expectTooltipUnchanged(tooltip);
            leave(other);
            enter(owner);
            expectTooltipUnchanged(tooltip);
        }
        map.fire('zoomend');
        nextFrame();
        expectTooltipUnchanged(tooltip);

        // Normal hover switching must resume after the animation.
        leave(owner);
        enter(other);
        expect(map.hasLayer(tooltip)).toBe(false);
        expect(tooltipRef.current.getContent()).toBe('POI 2');
        expect(tooltipopen).toHaveBeenCalledTimes(2);
        expect(tooltipclose).toHaveBeenCalledTimes(1);
    });

    test('zoomend keeps the tooltip when the cursor is still over its marker', () => {
        enter(addPoi('POI 1'));
        const tooltip = tooltipRef.current;

        map.fire('zoomstart');
        map.fire('zoomend');
        nextFrame();

        expectTooltipUnchanged(tooltip);
    });

    test('leaving the marker during zoom closes its tooltip only after the final frame', () => {
        const owner = addPoi('POI 1');
        enter(owner);
        const tooltip = tooltipRef.current;

        map.fire('zoomstart');
        leave(owner);
        expectTooltipUnchanged(tooltip);
        map.fire('zoomend');
        expectTooltipUnchanged(tooltip);
        nextFrame();

        expect(tooltipRef.current).toBeNull();
        expect(map.hasLayer(tooltip)).toBe(false);
        expect(tooltip.getElement().isConnected).toBe(false);
        expect(tooltipopen).toHaveBeenCalledTimes(1);
        expect(tooltipclose).toHaveBeenCalledTimes(1);
        expect(setSelectedId).toHaveBeenCalledTimes(2);
        expect(setSelectedId).toHaveBeenLastCalledWith({ id: -1, show: false, type: null });
    });
});

describe('POI wheel jitter regression (b6981228)', () => {
    // Use the API that exists in b6981228^, so the same tests can fail on coordinates
    // before the fix, without importing a marker class introduced by the fix.
    async function addPois(points) {
        const poiList = points.map((point, i) => {
            const { lat, lng } = map.containerPointToLatLng(point);
            return {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [lng, lat] },
                properties: {
                    [POI_ID]: `poi-${i}`,
                    [POI_NAME]: `POI ${i}`,
                    [POI_ELO]: points.length - i,
                    [FINAL_POI_ICON_NAME]: DEFAULT_POI_ICON,
                },
            };
        });
        const cache = {
            [DEFAULT_POI_ICON]: '<svg width="24" height="24"><path fill="#000" d="M0 0L24 24"/></svg>',
        };
        const layer = await createPoiLayer({
            ctx: { poiIconCache: cache, setPoiIconCache: jest.fn(), searchTooltipRef: { current: null } },
            poiList,
            globalPoiIconCache: cache,
            type: 'poi',
            map,
            zoom: map.getZoom(),
        });
        layer.addTo(map);
        const markers = layer.getLayers();
        expect(markers).toHaveLength(points.length);
        return points.map((_, i) => markers.find((marker) => marker.options[POI_ID] === `poi-${i}`));
    }

    function markerPosition(marker) {
        // Inspect the rendered position: latLngToContainerPoint itself rounds coordinates.
        return L.DomUtil.getPosition(marker.getElement()).add(L.DomUtil.getPosition(map.getPane('mapPane')));
    }

    function expectPosition(marker, expected) {
        const actual = markerPosition(marker);
        expect(actual.x).toBeCloseTo(expected.x, 6);
        expect(actual.y).toBeCloseTo(expected.y, 6);
    }

    beforeEach(() => {
        // Avoid the projection origin, where rounding errors can be hidden.
        map.setView([50.4501, 30.5234], 13.65);
    });

    test.each([
        { deltaY: -100, panned: false },
        { deltaY: 100, panned: false },
        { deltaY: -100, panned: true },
        { deltaY: 100, panned: true },
    ])(
        'POI icons and dots follow the cursor anchor on every frame (deltaY=$deltaY, panned=$panned)',
        async ({ deltaY, panned }) => {
            if (panned) map.panBy([73, -41], { animate: false });
            mountLayers();
            const anchor = L.point(637, 219);
            // More than 64 px gives another main icon; between 12 and 64 px gives a dot.
            const offsets = [L.point(0, 0), L.point(-93.25, 87.375), L.point(25.25, -18.375)];
            const markers = await addPois(offsets.map((offset) => anchor.add(offset)));
            expect(markers.map((marker) => !!marker.options.simple)).toEqual([false, false, true]);
            const initialZoom = map.getZoom();
            let checkedFrames = 0;

            wheel(deltaY, anchor);
            finishZoom(() => {
                // The POI under the cursor stays fixed; distances to other POIs scale with zoom.
                const scale = 2 ** (map.getZoom() - initialZoom);
                markers.forEach((marker, i) => expectPosition(marker, anchor.add(offsets[i].multiplyBy(scale))));
                checkedFrames++;
            });

            expect(checkedFrames).toBeGreaterThan(1);
            expect(map.getZoom()).not.toBe(initialZoom);
        }
    );

    test('moving the cursor during a wheel gesture preserves the displayed POI position', async () => {
        mountLayers();
        const anchor = L.point(637, 219);
        const [marker] = await addPois([anchor]);
        wheel(-100, anchor);
        nextFrame();

        const position = markerPosition(marker);
        const zoom = map.getZoom();
        const nextAnchor = L.point(481, 327);
        wheel(-100, nextAnchor);
        expectPosition(marker, position);

        finishZoom(() => {
            const scale = 2 ** (map.getZoom() - zoom);
            expectPosition(marker, nextAnchor.add(position.subtract(nextAnchor).multiplyBy(scale)));
        });
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
