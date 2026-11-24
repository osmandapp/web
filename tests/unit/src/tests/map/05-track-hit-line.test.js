import { createElement } from 'react';
import L from 'leaflet';
import { OBJECT_TYPE_CLOUD_TRACK } from '@map/context/AppContext';
import TrackLayerProvider from '@map/map/util/TrackLayerProvider';
import { createTooltip, formatTrackName } from '@map/map/util/MapManager';
import { useFocusVisibility } from '@map/util/hooks/map/useFocusMode';
import { createCtx, createEditorCtx, createPlainPoints, createTrack } from '../../util/fixtures/tracks';
import { createMap, removeMap, renderWithMapContexts } from '../../util/map';

const HIT_LINE = { weight: 16, opacity: 0 };

let map;
let view;

beforeEach(() => {
    map = createMap([50.05, 30], 10);
    createTooltip.mockImplementation((text, latlng) =>
        L.tooltip({ permanent: true }).setContent(text).setLatLng(latlng)
    );
    formatTrackName.mockImplementation((name) => name);
});

afterEach(() => {
    view?.unmount();
    removeMap(map);
});

const showTrack = (name, info = {}) => {
    const data = createTrack({
        name,
        pointsGroups: {},
        info: { show_start_finish: false, ...info },
        tracks: [{ points: createPlainPoints(11) }],
    });
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

test('events of the hit line reach the track, the hit line leaves the map with the track', () => {
    const track = showTrack('Track');
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

test('hit lines lie in their own pane under the lines of all tracks, also after a track is shown again', () => {
    const arrows = showTrack('Arrows', { show_arrows: true });
    const plain = showTrack('Plain');
    map.removeLayer(arrows);
    arrows.addTo(map);

    const lines = [...trackLines(arrows), ...trackLines(plain)];
    const paneOf = (layer) => layer.getElement().closest('.leaflet-pane');
    const overlayPane = map.getPane('overlayPane');
    const hitPane = paneOf(lines[0].hitLine);

    expect(hitPane).not.toBe(overlayPane);
    expect(lines.map(paneOf)).toEqual([overlayPane, overlayPane]);
    expect(lines.map((l) => paneOf(l.hitLine))).toEqual([hitPane, hitPane]);
});

test('lines of the track editor get no hit line, a line with arrows keeps its arrows and gets one', () => {
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

    const arrows = showTrack('Arrows', { show_arrows: true });
    const [line] = trackLines(arrows);
    const [hitLine] = linesOnMap().filter((l) => l !== line);

    expect(line.getElement().closest('svg').querySelectorAll('.arrowhead').length).toBeGreaterThan(0);
    fire(hitLine, 'click');
    expect(arrows.clicks).toBe(1);
});

test('focus mode: a hidden track lets clicks beside its line through, a dimmed one catches them and its hit line stays invisible', () => {
    const focused = showTrack('Focused');
    const other = showTrack('Other');
    const ctx = createCtx({
        gpxFiles: { Focused: { name: 'Focused', gpx: focused }, Other: { name: 'Other', gpx: other } },
    });
    const focusMtx = (focusModeOn) => ({
        selectionFocus: { type: OBJECT_TYPE_CLOUD_TRACK, id: 'Focused' },
        focusModeOn,
    });

    function FocusVisibility() {
        useFocusVisibility();

        return null;
    }

    const lineState = (track) => {
        const [line] = trackLines(track);

        return {
            opacity: line.options.opacity,
            hitOpacity: line.hitLine.options.opacity,
            hitEvents: line.hitLine.getElement().style.pointerEvents,
        };
    };

    view = renderWithMapContexts(createElement(FocusVisibility), { ctx, mtx: focusMtx(true) });
    expect([lineState(focused), lineState(other)]).toEqual([
        { opacity: 1, hitOpacity: 0, hitEvents: '' },
        { opacity: 0, hitOpacity: 0, hitEvents: 'none' },
    ]);

    view.rerender({ ctx, mtx: focusMtx(false) });
    expect([lineState(focused), lineState(other)]).toEqual([
        { opacity: 1, hitOpacity: 0, hitEvents: '' },
        { opacity: 0.9, hitOpacity: 0, hitEvents: '' },
    ]);
});
