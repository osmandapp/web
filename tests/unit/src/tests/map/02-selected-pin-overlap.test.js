import L from 'leaflet';
import { applyHoverOutline, applySelectedPin, hideMarkersUnderPin } from '@map/map/util/MarkerSelectionService';

const MARKER_SIZE = 24;

let map;
let container;
let markersGroup;

// jsdom has no layout: an element's box is where Leaflet placed it, shifted by the icon anchor
function leafletIconBox() {
    const pos = this._leaflet_pos ?? { x: 0, y: 0 };
    const left = pos.x + (parseFloat(this.style.marginLeft) || 0);
    const top = pos.y + (parseFloat(this.style.marginTop) || 0);
    const width = parseFloat(this.style.width) || 0;
    const height = parseFloat(this.style.height) || 0;

    return { left, top, right: left + width, bottom: top + height, width, height };
}

beforeEach(() => {
    jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(leafletIconBox);
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
    }).setView([50.4501, 30.5234], 18);
    // layers keep their markers in groups, as the favorite and poi layers do
    markersGroup = L.layerGroup().addTo(map);
});

afterEach(() => {
    map.remove();
    container.remove();
});

function createCtx() {
    return {
        selectedWpt: null,
        selectedCreatedLayerRef: { current: null },
        selectedUpdatedLayerRef: { current: null },
        selectedHiddenLayersRef: { current: [] },
    };
}

// a marker whose center is (dx, dy) px away from the selected point
function addMarker(name, dx, dy) {
    const center = map.latLngToLayerPoint(map.getCenter());
    const latlng = map.layerPointToLatLng(center.add([dx, dy]));

    return L.marker(latlng, { name, icon: L.divIcon({ iconSize: [MARKER_SIZE, MARKER_SIZE] }) }).addTo(markersGroup);
}

function hiddenNames(markers) {
    return markers.filter((m) => m.getElement().style.visibility === 'hidden').map((m) => m.options.name);
}

test('the selected pin hides only the markers it overlaps, the pin is taller above the point than below', () => {
    const ctx = createCtx();
    const selected = addMarker('selected', 0, 0);
    const markers = [
        selected,
        addMarker('above', 0, -40),
        addMarker('beside head', 35, -40),
        addMarker('far above', 0, -90),
        addMarker('below', 0, 20),
        addMarker('beside tip', 30, 5),
    ];

    applySelectedPin({ ctx, map, layer: selected, markerData: { color: '#ff0000' }, isSelection: true });

    expect(hiddenNames(markers)).toEqual(['selected', 'above', 'beside head']);
    // each hidden marker is listed once, although the map visits both the group and its markers
    expect(ctx.selectedHiddenLayersRef.current).toHaveLength(3);
});

test('a hover outline hides nothing, not even the hovered marker', () => {
    const ctx = createCtx();
    const hovered = addMarker('hovered', 0, 0);
    const markers = [hovered, addMarker('above', 0, -20)];

    applyHoverOutline({ ctx, map, latlng: hovered.getLatLng() });
    hideMarkersUnderPin(map, ctx);

    expect(hiddenNames(markers)).toEqual([]);
});
