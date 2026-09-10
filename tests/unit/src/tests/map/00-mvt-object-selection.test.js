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

describe('pickClickableFeature', () => {
    test('only a rendered symbol with an osm id is clickable, the topmost one wins', () => {
        const fill = feature({ layer: { type: 'fill' }, name: 'Park' });
        const line = feature({ layer: { type: 'line' }, name: 'Road' });
        const cafe = feature({ name: 'Cafe' });
        const shop = feature({ name: 'Shop' });

        expect(pickClickableFeature([fill, line, cafe, shop])).toBe(cafe);
        expect(pickClickableFeature([fill, line])).toBeUndefined();
    });

    test('captions drawn along a path and features without an osm id are not clickable', () => {
        const roadLabel = feature({ layer: { type: 'symbol', layout: { 'symbol-placement': 'line' } }, name: 'Road' });
        const noId = feature({ name: 'Cafe' });
        delete noId.properties.osm_id;
        const pointLabel = feature({
            layer: { type: 'symbol', layout: { 'symbol-placement': 'point' } },
            name: 'Park',
        });

        expect(pickClickableFeature([roadLabel, noId, pointLabel])).toBe(pointLabel);
    });
});

describe('createMvtObject', () => {
    test('a named point: preview with the plain name at the symbol location, the tags for the details', () => {
        const cafe = feature({ id: 200, name: 'Cafe', 'name:en': 'Cafe EN', amenity: 'cafe' });

        expect(createMvtObject(cafe, CLICK)).toEqual({
            poi: {
                key: 100,
                options: { [POI_NAME]: 'Cafe' },
                latlng: { lat: 50.4, lng: 30.5 },
                mapObj: true,
            },
            mvt: { osmId: 100, mapObjectId: 200, tags: cafe.properties },
        });
    });

    test('a polygon is located at the click point', () => {
        const park = feature({ geometry: { type: 'Polygon', coordinates: [] }, name: 'Park' });

        expect(createMvtObject(park, CLICK).poi.latlng).toEqual(CLICK);
    });

    test('a house number without a name is an address, same as the HOUSE search result, without tags', () => {
        const house = feature({ building: '', 'addr:housenumber': '42' });

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
    });

    test('a named building with a house number is a poi', () => {
        const named = feature({ building: '', 'addr:housenumber': '42', name: 'Mall' });

        expect(createMvtObject(named, CLICK).poi.options).toEqual({ [POI_NAME]: 'Mall' });
    });
});
