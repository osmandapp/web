import FavoritesManager, {
    addFavGroupsToMap,
    addLocDist,
    createFavGroupFreeName,
    decodeGroupNameFromFile,
    extractBaseFavFileName,
    findFavGroupByFileName,
    findSelectedWpt,
    getFavGroupKey,
    getFavMenuListByLayers,
    getSize,
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
        expect(list.map((m) => m.locDist)).toEqual(['0', '1112']);
        // the color of the group is used until the waypoint has its own
        expect(list.map((m) => m.color)).toEqual(['#00ff00', '#ff0000']);
        expect(list[0].icon).toContain('svg');
    });

    test('without a location the list is left as it is', () => {
        const list = getFavMenuListByLayers({ layers, wpts, currentLoc: null, pointsGroups });

        expect(list.map((m) => m.locDist)).toEqual([undefined, undefined]);
        expect(addLocDist({ location: null, wpts })).toBe(wpts);
    });

    test('two waypoints with the same name are listed with their own points', () => {
        const twins = [
            { name: 'Hut', category: 'Trips' },
            { name: 'Hut', category: 'Trips', address: 'second' },
        ];
        const twinLayers = {
            1: { options: { name: 'Hut', point: twins[0] }, _latlng: { lat: 50, lng: 30 } },
            2: { options: { name: 'Hut', point: twins[1] }, _latlng: { lat: 50, lng: 30 } },
        };

        const list = getFavMenuListByLayers({ layers: twinLayers, wpts: twins, currentLoc: null, pointsGroups });

        expect(list.map((m) => m.point)).toEqual([twins[0], twins[1]]);
        expect(list[1].point).toBe(twins[1]);
    });
});

describe('the selected favorite among the waypoints of its group', () => {
    const wpts = [
        { name: 'Hut', category: 'Trips' },
        { name: 'Hut', category: 'Trips', address: 'second' },
        { name: 'Peak', category: 'Trips' },
    ];

    test('the point itself wins, then the point at the remembered index with the same name, then the name', () => {
        expect(findSelectedWpt({ name: 'Hut', point: wpts[1], pointIndex: 1 }, wpts)).toBe(wpts[1]);

        // the group was reloaded from the server: the same points as new objects
        const reloaded = wpts.map((w) => ({ ...w }));
        expect(findSelectedWpt({ name: 'Hut', point: wpts[1], pointIndex: 1 }, reloaded)).toBe(reloaded[1]);
        // the remembered index points to another name: the first one with the name is taken
        expect(findSelectedWpt({ name: 'Hut', point: wpts[1], pointIndex: 2 }, reloaded)).toBe(reloaded[0]);
        expect(findSelectedWpt({ name: 'Peak' }, reloaded)).toBe(reloaded[2]);
        expect(findSelectedWpt({ name: 'Lake' }, reloaded)).toBeUndefined();
        expect(findSelectedWpt(null, reloaded)).toBeUndefined();
        expect(findSelectedWpt({ name: 'Hut' }, null)).toBeUndefined();
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

describe('the group of a file in the Share menu', () => {
    test('the group is found by the file name, before and after the groups are loaded', () => {
        const listFile = favFile('Trips_%_Alps');
        // the Share menu opened by URL keeps a copy of the list-files entry made before createGroup sets folder
        const sharedFile = { ...listFile, mapObj: true };

        expect(findFavGroupByFileName(undefined, sharedFile.name)).toBeUndefined();

        const groups = [FavoritesManager.createGroup(favFile('Hikes')), FavoritesManager.createGroup(listFile)];

        expect(sharedFile.folder).toBeUndefined();
        expect(findFavGroupByFileName(groups, sharedFile.name)).toBe(groups[1]);
        expect(findFavGroupByFileName(groups, favFile('Lakes').name)).toBeUndefined();
    });
});
