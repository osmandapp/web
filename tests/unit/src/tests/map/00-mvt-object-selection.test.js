import { createMvtObject, pickClickableFeature } from '@map/map/util/MvtObjectSelection';
import { searchTypeMap, SEARCH_ICON_MAP_BUILDING } from '@map/manager/searchConstants';
import {
    CATEGORY_NAME,
    CATEGORY_TYPE,
    FINAL_POI_ICON_NAME,
    POI_NAME,
} from '@map/infoblock/components/wpt/WptTagsProvider';

const CLICK = { lat: 50.45, lng: 30.52 };

function feature({
    id = 1,
    layer = { type: 'symbol' },
    geometry = { type: 'Point', coordinates: [30.5, 50.4] },
    ...properties
}) {
    return { id, layer, geometry, properties: { osm_id: 100, ...properties } };
}

test('a click opens the topmost rendered symbol with an osm id, not areas, lines, captions along a path', () => {
    const fill = feature({ layer: { type: 'fill' }, name: 'Park' });
    const line = feature({ layer: { type: 'line' }, name: 'Road' });
    const roadLabel = feature({ layer: { type: 'symbol', layout: { 'symbol-placement': 'line' } }, name: 'Road' });
    const noId = feature({ name: 'Cafe' });
    delete noId.properties.osm_id;
    const cafe = feature({ layer: { type: 'symbol', layout: { 'symbol-placement': 'point' } }, name: 'Cafe' });
    const shop = feature({ name: 'Shop' });

    expect(pickClickableFeature([fill, line, roadLabel, noId, cafe, shop])).toBe(cafe);
    expect(pickClickableFeature([fill, line, roadLabel, noId])).toBeUndefined();
});

test('the preview of a clicked object: plain name at the symbol, address for a house number, tags for the details', () => {
    const cafe = feature({ id: 200, name: 'Cafe', 'name:en': 'Cafe EN', amenity: 'cafe' });
    const park = feature({ geometry: { type: 'Polygon', coordinates: [] }, name: 'Park' });
    const house = feature({ building: '', 'addr:housenumber': '42' });
    const namedHouse = feature({ building: '', 'addr:housenumber': '42', name: 'Mall' });

    // the name is the plain one, as the server returns it, so the header does not change on load
    expect(createMvtObject(cafe, CLICK)).toEqual({
        poi: { key: 100, options: { [POI_NAME]: 'Cafe' }, latlng: { lat: 50.4, lng: 30.5 }, mapObj: true },
        mvt: { osmId: 100, mapObjectId: 200, tags: cafe.properties },
    });
    // a polygon has no symbol coordinate, the click point is used
    expect(createMvtObject(park, CLICK).poi.latlng).toEqual(CLICK);
    // same as the HOUSE search result: number, house icon, no tags
    expect(createMvtObject(house, CLICK)).toMatchObject({
        poi: {
            options: {
                [CATEGORY_TYPE]: searchTypeMap.HOUSE,
                [CATEGORY_NAME]: '42',
                [FINAL_POI_ICON_NAME]: SEARCH_ICON_MAP_BUILDING,
            },
        },
        mvt: { tags: null },
    });
    expect(createMvtObject(namedHouse, CLICK).poi.options).toEqual({ [POI_NAME]: 'Mall' });
});
