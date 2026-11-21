import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import AppContext, { OBJECT_TYPE_CLOUD_TRACK } from '@map/context/AppContext';
import MapContext from '@map/context/MapContext';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import { createTooltip, formatTrackName } from '@map/map/util/MapManager';
import { useFocusVisibility } from '@map/util/hooks/map/useFocusMode';
import { createEditorCtx, createPlainPoints } from '../../util/fixtures/tracks';

const HIT_LINE = { weight: 16, opacity: 0 };

let container;
let map;

beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
    Object.defineProperties(container, {
        clientWidth: { value: 800 },
        clientHeight: { value: 600 },
    });
    map = L.map(container, {
        zoomAnimation: false,
        fadeAnimation: false,
        zoomControl: false,
        attributionControl: false,
    }).setView([50.05, 30], 10);
    useMap.mockReturnValue(map);
    createTooltip.mockImplementation((text, latlng) =>
        L.tooltip({ permanent: true }).setContent(text).setLatLng(latlng)
    );
    formatTrackName.mockImplementation((name) => name);
});

afterEach(() => {
    map.remove();
    container.remove();
});

const createTrackData = (name, info = {}) => ({
    name,
    info: { show_start_finish: false, ...info },
    tracks: [{ points: createPlainPoints(11) }],
});

const showTrack = (data) => {
    const track = TrackLayerProvider.createLayersByTrackData({ data, ctx: createEditorCtx(), map });
    track.clicks = 0;
    track.on('click', () => track.clicks++);
    track.addTo(map);

    return track;
};

const trackLines = (track) => TrackLayerProvider.getPolylines(track.getLayers());

const linesOnMap = () => {
    const lines = [];
    map.eachLayer((layer) => layer instanceof L.Polyline && lines.push(layer));

    return lines;
};

const tooltipsOnMap = () => {
    const texts = [];
    map.eachLayer((layer) => layer instanceof L.Tooltip && texts.push(layer.getContent()));

    return texts;
};

const fire = (line, type) => {
    const { x, y } = map.latLngToContainerPoint(line.getLatLngs()[5]);
    line.getElement().dispatchEvent(new MouseEvent(type, { bubbles: true, clientX: x, clientY: y }));
};

test('a click or a hover beside a track line reaches the track, the wide line leaves the map with the track', () => {
    const track = showTrack(createTrackData('Track'));
    const [line] = trackLines(track);
    const hitLines = linesOnMap().filter((l) => l !== line);

    expect(
        hitLines.map((l) => ({ weight: l.options.weight, opacity: l.options.opacity, latlngs: l.getLatLngs() }))
    ).toEqual([{ ...HIT_LINE, latlngs: line.getLatLngs() }]);

    fire(hitLines[0], 'click');
    expect(track.clicks).toBe(1);

    fire(hitLines[0], 'mouseover');
    expect(tooltipsOnMap()).toEqual(['Track']);
    fire(hitLines[0], 'mouseout');
    expect(tooltipsOnMap()).toEqual([]);

    map.removeLayer(track);
    expect(linesOnMap()).toEqual([]);

    track.addTo(map);
    expect(linesOnMap()).toEqual([line, hitLines[0]]);
});

test('a wide line never covers the line of another track, also after a track is shown again', () => {
    const first = showTrack(createTrackData('First'));
    const second = showTrack(createTrackData('Second'));
    map.removeLayer(first);
    first.addTo(map);

    const wideLines = [...trackLines(first), ...trackLines(second)].map((l) => l.hitLine.getElement());
    const paths = [...container.querySelectorAll('.leaflet-overlay-pane path')];

    expect(paths.map((p) => (wideLines.includes(p) ? 'wide' : 'line'))).toEqual(['wide', 'wide', 'line', 'line']);
});

test('lines of the track editor get no wide line, a line with arrows keeps its arrows and gets one', () => {
    const editorLayers = [];
    TrackLayerProvider.parsePoints({
        map,
        ctx: createEditorCtx(),
        points: createPlainPoints(11),
        layers: editorLayers,
        draggable: true,
        hidden: true,
    });
    const editor = L.featureGroup(editorLayers).addTo(map);
    expect(linesOnMap()).toEqual(trackLines(editor));
    map.removeLayer(editor);

    const arrows = showTrack(createTrackData('Arrows', { show_arrows: true }));
    const [line] = trackLines(arrows);
    const [hitLine] = linesOnMap().filter((l) => l !== line);

    expect(line.getElement().closest('svg').querySelectorAll('.arrowhead').length).toBeGreaterThan(0);
    fire(hitLine, 'click');
    expect(arrows.clicks).toBe(1);
});

test('focus mode: a hidden track lets clicks beside its line through, a dimmed one catches them and stays thin', () => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    const focused = showTrack(createTrackData('Focused'));
    const other = showTrack(createTrackData('Other'));
    const ctx = { gpxFiles: { Focused: { name: 'Focused', gpx: focused }, Other: { name: 'Other', gpx: other } } };
    const reactContainer = document.createElement('div');
    const root = createRoot(reactContainer);

    function FocusVisibility() {
        useFocusVisibility();

        return null;
    }

    const renderFocus = (focusModeOn) =>
        act(() =>
            root.render(
                createElement(
                    AppContext.Provider,
                    { value: ctx },
                    createElement(
                        MapContext.Provider,
                        { value: { selectionFocus: { type: OBJECT_TYPE_CLOUD_TRACK, id: 'Focused' }, focusModeOn } },
                        createElement(FocusVisibility)
                    )
                )
            )
        );

    const lineState = (track) => {
        const [line] = trackLines(track);

        return {
            opacity: line.options.opacity,
            hitOpacity: line.hitLine.options.opacity,
            hitEvents: line.hitLine.getElement().style.pointerEvents,
        };
    };

    renderFocus(true);
    expect([lineState(focused), lineState(other)]).toEqual([
        { opacity: 1, hitOpacity: 0, hitEvents: '' },
        { opacity: 0, hitOpacity: 0, hitEvents: 'none' },
    ]);

    renderFocus(false);
    expect([lineState(focused), lineState(other)]).toEqual([
        { opacity: 1, hitOpacity: 0, hitEvents: '' },
        { opacity: 0.9, hitOpacity: 0, hitEvents: '' },
    ]);

    act(() => root.unmount());
});
