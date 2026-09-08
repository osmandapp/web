import {
    createSearchMatchedObjectActions,
    getMatchedAmenityProperties,
    hasValidMatchedObjectCoords,
    MATCHED_OBJECT_TYPE_AMENITY,
    MATCHED_OBJECT_TYPE_CITY,
} from '@map/manager/SpatialSearchMatchedObjects';
import { CATEGORY_TYPE, MATCHED_OBJECTS, POI_ID, POI_NAME } from '@map/infoblock/components/wpt/WptTagsProvider';

const POI_TYPE = 'POI_TYPE';
const amenity = (name, extra = {}) => ({ type: MATCHED_OBJECT_TYPE_AMENITY, name, lat: 50, lon: 30, ...extra });

function actions(item) {
    const ctx = {
        setZoomToCoords: jest.fn(),
        setCurrentObjectType: jest.fn(),
        setSelectedPoiObj: jest.fn(),
        setSelectedWpt: jest.fn(),
        setMoveToMapObj: jest.fn(),
    };
    const deps = {
        item,
        t: (key) => key,
        ctx,
        navigate: jest.fn(),
        recentSaver: jest.fn(),
        setShowMatched: jest.fn(),
        formatSearchResultProperties: (props) => ({ name: props.name }),
        navigateToPoi: jest.fn(),
        objectSearchType: 'search',
        poiObjectsKey: 'poi',
        poiTypeCategory: POI_TYPE,
    };

    return { ...createSearchMatchedObjectActions(deps), ...deps };
}

const event = () => ({ stopPropagation: jest.fn(), preventDefault: jest.fn() });

test('the other places matched by a result are listed by name, the result itself is not', () => {
    const cafe = amenity('Cafe', { [POI_ID]: 7 });
    const res = actions({
        properties: {
            [CATEGORY_TYPE]: 'POI',
            [MATCHED_OBJECTS]: [amenity('The result'), cafe, { type: MATCHED_OBJECT_TYPE_CITY, name: 'Kyiv' }],
        },
    });

    expect(res.matchedNameObjects.map((m) => m.name)).toEqual(['Cafe']);
    expect(res.matchedDialogObjects.map((m) => m.key)).toEqual(['Amenity-50-30-0', 7, 'City-undefined-undefined-2']);

    res.matchedNameObjects[0].onClick(event());
    expect(res.ctx.setSelectedWpt).toHaveBeenCalledWith({
        poi: { key: 7, options: getMatchedAmenityProperties(cafe), latlng: { lat: 50, lng: 30 } },
        id: 7,
    });
    expect(res.navigateToPoi).toHaveBeenCalledTimes(1);

    // a place without coordinates cannot be opened
    res.matchedDialogObjects[2].onClick();
    expect(res.ctx.setZoomToCoords).not.toHaveBeenCalled();
});

test('a category result points to the first place it was matched in', () => {
    const res = actions({
        properties: {
            [CATEGORY_TYPE]: POI_TYPE,
            [MATCHED_OBJECTS]: [
                { type: 'Unknown' },
                { type: MATCHED_OBJECT_TYPE_CITY, name: 'Kyiv', lat: 50, lon: 30 },
            ],
        },
    });

    expect(res.matchedNameObjects.map((m) => m.name)).toEqual(['Kyiv']);
    res.moveToMatchedPoiTypeLocation();
    expect(res.ctx.setZoomToCoords).toHaveBeenCalledWith({ lat: 50, lon: 30, bbox: undefined });
    expect(res.setShowMatched).toHaveBeenCalledWith(false);

    expect(actions({ properties: {} }).matchedNameObjects).toEqual([]);
});

test('a matched amenity is described like a poi', () => {
    expect(getMatchedAmenityProperties({ name: 'Cafe' })).toEqual({
        name: 'Cafe',
        [CATEGORY_TYPE]: 'POI',
        [POI_NAME]: 'Cafe',
    });
    expect(getMatchedAmenityProperties({ [POI_NAME]: 'Cafe', [CATEGORY_TYPE]: 'WIKI' })).toMatchObject({
        name: 'Cafe',
        [CATEGORY_TYPE]: 'WIKI',
    });
    expect(hasValidMatchedObjectCoords({ lat: 0, lon: 0 })).toBe(false);
    expect(hasValidMatchedObjectCoords({ lat: '50', lon: 30 })).toBe(false);
    expect(hasValidMatchedObjectCoords({ lat: 50, lon: 30 })).toBe(true);
});
