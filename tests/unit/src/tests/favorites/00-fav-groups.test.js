import FavoritesManager, {
    addFavGroupsToMap,
    addLocDist,
    createFavGroupFreeName,
    decodeGroupNameFromFile,
    extractBaseFavFileName,
    getFavGroupKey,
    getFavMenuListByLayers,
    getSize,
    isCurrentLocation,
    LOCATION_UNAVAILABLE,
    MAP_CENTER_LOCATION,
    normalizeFavoritePointsGroupName,
    normalizeGroupNameForFile,
} from '@map/manager/FavoritesManager';
import { fakeIndexedDbStore } from '../../util/indexedDb';

const t = (key) => key;

function favFile(name, updatetimems = 1000) {
    return { name: `favorites-${name}.gpx`, type: 'FAVOURITES', userid: 1, updatetimems };
}

describe('group names', () => {
    test('a group name travels to the file name and back', () => {
        const groupName = 'Trips/Alps: 2026';
        const inFileName = normalizeGroupNameForFile(groupName);

        expect(inFileName).toBe('Trips_%_Alps_-_ 2026');
        expect(decodeGroupNameFromFile(inFileName)).toBe(groupName);
        expect(extractBaseFavFileName(`favorites-${inFileName}.gpx`)).toBe(inFileName);
        // the default group is kept under an empty name inside the file
        expect(normalizeFavoritePointsGroupName(FavoritesManager.DEFAULT_GROUP_NAME)).toBe('');
        expect(normalizeFavoritePointsGroupName(groupName)).toBe(groupName);
    });

    test('a new group gets a free name', () => {
        const groups = [{ name: 'Trips' }, { name: 'Trips - 1' }];

        expect(createFavGroupFreeName('Alps', groups)).toBe('Alps');
        expect(createFavGroupFreeName('Trips', groups)).toBe('Trips - 2');
        expect(createFavGroupFreeName('Trips', null)).toBe('Trips');

        const occupied = Array.from({ length: 100 }, (_, i) => ({ name: i === 0 ? 'Trips' : `Trips - ${i}` }));
        expect(() => createFavGroupFreeName('Trips', occupied)).toThrow();
    });
});

describe('groups restored from the cache', () => {
    function cached(groups) {
        const files = groups.map((g) => favFile(normalizeGroupNameForFile(g.name)));
        const favGroups = {
            groups: files.map((file) => FavoritesManager.createGroup(file)),
            mapObjs: {},
        };
        const records = new Map(
            favGroups.groups.map((group, i) => [
                getFavGroupKey(group),
                { name: groups[i].name, pointsGroups: { [groups[i].name]: groups[i].pointsGroup } },
            ])
        );
        fakeIndexedDbStore(records);

        return favGroups;
    }

    test('the hidden and pinned flags are read for the group the file holds', async () => {
        const favGroups = cached([
            { name: 'Trips/Alps', pointsGroup: { hidden: true, pinned: true } },
            { name: 'Old', pointsGroup: { points: [{ ext: { extensions: { hidden: 'true' } } }, { ext: {} }] } },
            { name: 'Visible', pointsGroup: { points: [{ ext: {} }] } },
            { name: 'personal', pointsGroup: {} },
        ]);

        const res = await addFavGroupsToMap(favGroups);

        expect(res.groups.map((g) => g.hidden)).toEqual(['true', 'true', 'false', 'false']);
        expect(res.mapObjs[res.groups[0].id].hidden).toBe('true');
        expect(res.groups.map((g) => g.pinned)).toEqual([true, undefined, undefined, true]);
    });
});

describe('the favorites of a group in the menu', () => {
    const wpts = [
        { name: 'Hut', category: 'Trips' },
        { name: 'Peak', category: 'Trips', color: '#ff0000' },
    ];
    const pointsGroups = { Trips: { color: '#00ff00' } };
    const layers = {
        1: { options: { name: 'Hut' }, _latlng: { lat: 50, lng: 30 } },
        2: { options: { name: 'Peak' }, _latlng: { lat: 50.01, lng: 30 } },
        3: { options: { name: 'Deleted' }, _latlng: { lat: 50, lng: 30 } },
        4: { options: {} },
    };

    test('only the waypoints of the group are listed, with the distance to the current location', () => {
        const list = getFavMenuListByLayers({ layers, wpts, currentLoc: { lat: 50, lng: 30 }, pointsGroups });

        expect(list.map((m) => m.name)).toEqual(['Hut', 'Peak']);
        expect(list.map((m) => m.locDist)).toEqual([0, 1112]);
        // the color of the group is used until the waypoint has its own
        expect(list.map((m) => m.color)).toEqual(['#00ff00', '#ff0000']);
        expect(list[0].icon).toContain('svg');
    });

    test('without a location the list is left as it is', () => {
        const list = getFavMenuListByLayers({ layers, wpts, currentLoc: null, pointsGroups });

        expect(list.map((m) => m.locDist)).toEqual([undefined, undefined]);
        expect(addLocDist({ location: null, wpts })).toBe(wpts);
    });

    test('the direction to a favorite is measured from the same point as the distance', () => {
        const north = { layer: { _latlng: { lat: 50.01, lng: 30 } } };
        const east = { layer: { _latlng: { lat: 50, lng: 30.01 } } };
        const south = { latlng: { lat: 49.99, lng: 30 } };

        addLocDist({ location: { lat: 50, lng: 30 }, markers: [north, east] });
        addLocDist({ location: { lat: 50, lng: 30 }, wpts: [south] });

        expect(north.locBearing).toBeCloseTo(0);
        expect(east.locBearing).toBeCloseTo(90, 0);
        expect(south.locBearing).toBeCloseTo(180);
    });

    test('only a real position counts as the location of the user', () => {
        expect(isCurrentLocation({ lat: 50, lng: 30 })).toBe(true);
        expect(isCurrentLocation(LOCATION_UNAVAILABLE)).toBe(false);
        expect(isCurrentLocation(MAP_CENTER_LOCATION)).toBe(false);
        expect(isCurrentLocation(null)).toBe(false);
    });
});

describe('the size of a group', () => {
    const group = (name, pointsGroup) => ({ name, pointsGroups: { [name]: pointsGroup } });

    test('the size comes from the group, or from the points it holds', () => {
        expect(FavoritesManager.getGroupSize(group('Trips', { groupSize: '5' }))).toBe(5);
        expect(FavoritesManager.getGroupSize(group('Trips', { points: [{}, {}] }))).toBe(2);
        expect(FavoritesManager.getGroupSize(group('Trips', {}))).toBe(0);
        expect(FavoritesManager.getGroupSize({ name: 'Trips' })).toBe(0);

        expect(getSize(group('Trips', { groupSize: '5' }), t)).toBe('5 shared_string_gpx_points');
        expect(getSize(group('Trips', {}), t)).toBe('empty');
    });
});
