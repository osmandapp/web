import FavoritesManager, {
    addFavGroupsToMap,
    addLocDist,
    createFavGroupFreeName,
    decodeGroupNameFromFile,
    DEFAULT_FAV_FILE_NAME,
    DEFAULT_FAV_GROUP_NAME,
    DEFAULT_GROUP_NAME_POINTS_GROUPS,
    extractBaseFavFileName,
    findFavGroupByFileName,
    findSelectedWpt,
    getFavGroupKey,
    getFavMenuListByLayers,
    getFavPointsGroupKey,
    getSize,
    isDefaultFavGroup,
    normalizeFavoritePointsGroupName,
    normalizeGroupNameForFile,
} from '@map/manager/FavoritesManager';
import TracksManager from '@map/manager/track/TracksManager';
import { buildGroupTree, groupTreeToList } from '@map/infoblock/components/favorite/FavoriteGroupTree';
import { apiGet } from '@map/util/HttpApi';
import { fakeIndexedDbStore } from '../../util/indexedDb';
import { SHARE_TYPE } from '@map/menu/share/shareConstants';
import { FAVORITE_SORT_KEYS_VERSION, getFavoriteSortKey, migrateFavoriteSortKeys } from '@map/menu/actions/SortActions';

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

    test('the default group is kept in its file under an empty name, a group named favorites under its name', () => {
        const defaultGroup = FavoritesManager.createGroup({ name: DEFAULT_FAV_FILE_NAME, userid: 1 });
        const favoritesGroup = FavoritesManager.createGroup(favFile(DEFAULT_FAV_GROUP_NAME));

        expect([defaultGroup.name, favoritesGroup.name]).toEqual([DEFAULT_FAV_GROUP_NAME, DEFAULT_FAV_GROUP_NAME]);
        expect(getFavPointsGroupKey(defaultGroup)).toBe(DEFAULT_GROUP_NAME_POINTS_GROUPS);
        expect(getFavPointsGroupKey(favoritesGroup)).toBe(DEFAULT_FAV_GROUP_NAME);
        expect(getFavPointsGroupKey({ name: DEFAULT_FAV_GROUP_NAME })).toBe(DEFAULT_GROUP_NAME_POINTS_GROUPS);
        expect(getFavPointsGroupKey({ name: 'Trips' })).toBe('Trips');
        expect([defaultGroup, favoritesGroup, null].map(isDefaultFavGroup)).toEqual([true, false, false]);
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

describe('the default group next to a group named favorites on load', () => {
    const defaultGroupFile = (pointsGroup) => ({
        file: { name: DEFAULT_FAV_FILE_NAME, type: 'FAVOURITES', userid: 1, updatetimems: 1000 },
        pointsGroups: { [DEFAULT_GROUP_NAME_POINTS_GROUPS]: { points: [{}], ...pointsGroup } },
    });
    const favoritesGroupFile = (pointsGroup) => ({
        file: favFile(DEFAULT_FAV_GROUP_NAME),
        pointsGroups: { [DEFAULT_FAV_GROUP_NAME]: { points: [{}], ...pointsGroup } },
    });

    function fromCache(groups, files) {
        fakeIndexedDbStore(
            new Map(
                groups.map((group, i) => [
                    getFavGroupKey(group),
                    { name: DEFAULT_FAV_GROUP_NAME, pointsGroups: files[i].pointsGroups },
                ])
            )
        );
    }

    function fromFile(groups, files) {
        fakeIndexedDbStore();
        apiGet.mockResolvedValue({ ok: true, text: async () => '<gpx/>' });
        jest.spyOn(TracksManager, 'getTrackData').mockImplementation(async (file) => ({
            pointsGroups: files.find((f) => f.file.name === file.name).pointsGroups,
            wpts: [],
        }));
    }

    async function load(source, files) {
        const groups = files.map((f) => FavoritesManager.createGroup(f.file));
        source(groups, files);
        const res = await addFavGroupsToMap({ groups, mapObjs: {} });

        return {
            map: groups.map((g) => res.mapObjs[g.id].hidden),
            menu: res.groups.map((g) => ({ hidden: g.hidden, pinned: g.pinned })),
        };
    }

    describe.each([
        ['the cache', fromCache],
        ['the file', fromFile],
    ])('read from %s', (_, source) => {
        test('a group named favorites gets the hidden and pinned flags of its own file', async () => {
            const res = await load(source, [favoritesGroupFile({ hidden: true, pinned: true })]);

            expect(res.map).toEqual(['true']);
            expect(res.menu).toEqual([{ hidden: 'true', pinned: true }]);
        });

        test('each of the two groups is shown or hidden on the map by its own file', async () => {
            const favoritesFirst = await load(source, [
                favoritesGroupFile({ hidden: false }),
                defaultGroupFile({ hidden: true }),
            ]);
            const defaultFirst = await load(source, [
                defaultGroupFile({ hidden: false }),
                favoritesGroupFile({ hidden: true }),
            ]);

            expect(favoritesFirst.map).toEqual(['false', 'true']);
            expect(defaultFirst.map).toEqual(['false', 'true']);
        });
    });
});

describe('the folder tree of the favorite groups', () => {
    const DEFAULT_FILE = { name: DEFAULT_FAV_FILE_NAME, userid: 1 };
    const FAVORITES_FILE = favFile(DEFAULT_FAV_GROUP_NAME);

    function tree(files) {
        const groups = files.map((file) => FavoritesManager.createGroup({ ...file }));

        return groupTreeToList(buildGroupTree(groups, t)).map((f) => [f.displayName, f.group.file.name]);
    }

    test('only the group of favorites.gpx is My favorites and goes first', () => {
        expect(tree([favFile('Zoo'), DEFAULT_FILE, favFile('Alps')])).toEqual([
            ['shared_string_my_favorites', DEFAULT_FAV_FILE_NAME],
            ['Alps', 'favorites-Alps.gpx'],
            ['Zoo', 'favorites-Zoo.gpx'],
        ]);
        expect(tree([favFile('Zoo'), FAVORITES_FILE, favFile('Alps')])).toEqual([
            ['Alps', 'favorites-Alps.gpx'],
            [DEFAULT_FAV_GROUP_NAME, FAVORITES_FILE.name],
            ['Zoo', 'favorites-Zoo.gpx'],
        ]);
    });

    test('next to a group named favorites, the default group keeps the row of My favorites', () => {
        const myFavorites = [
            ['shared_string_my_favorites', DEFAULT_FAV_FILE_NAME],
            ['Alps', 'favorites-Alps.gpx'],
        ];

        expect(tree([DEFAULT_FILE, FAVORITES_FILE, favFile('Alps')])).toEqual(myFavorites);
        expect(tree([FAVORITES_FILE, DEFAULT_FILE, favFile('Alps')])).toEqual(myFavorites);
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

    test('only the waypoints of the group are listed, with the distance and the direction from the location', () => {
        const list = getFavMenuListByLayers({ layers, wpts, location: { lat: 50, lng: 30 }, pointsGroups });

        expect(list.map((m) => m.name)).toEqual(['Hut', 'Peak']);
        expect(list.map((m) => m.locDist)).toEqual([0, 1112]);
        expect(list[1].locBearing).toBeCloseTo(0);
        // the color of the group is used until the waypoint has its own
        expect(list.map((m) => m.color)).toEqual(['#00ff00', '#ff0000']);
        expect(list[0].icon).toContain('svg');
    });

    test('without a location the list is left as it is', () => {
        const list = getFavMenuListByLayers({ layers, wpts, location: null, pointsGroups });

        expect(list.map((m) => m.locDist)).toEqual([undefined, undefined]);
    });

    test('the distance is added to copies of the markers', () => {
        const markers = [{ name: 'Peak', layer: layers[2] }];
        const list = addLocDist({ location: { lat: 50, lng: 30 }, markers });

        expect(list[0].locDist).toBe(1112);
        expect(markers[0].locDist).toBeUndefined();
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

        const list = getFavMenuListByLayers({ layers: twinLayers, wpts: twins, location: null, pointsGroups });

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

describe('the saved sort of favorites', () => {
    test('the list of groups, the shared folder and every group keep their own sort', () => {
        const defaultGroup = FavoritesManager.createGroup({ name: 'favorites.gpx', userid: 1 });
        const ownGroup = FavoritesManager.createGroup(favFile('food'));
        const sharedGroup = FavoritesManager.createGroup({ ...favFile('food'), userid: 2, sharedWithMe: true });
        const keys = [
            getFavoriteSortKey(DEFAULT_FAV_GROUP_NAME),
            getFavoriteSortKey(DEFAULT_FAV_GROUP_NAME, { type: SHARE_TYPE }),
            getFavoriteSortKey(defaultGroup),
            getFavoriteSortKey(ownGroup),
            getFavoriteSortKey(sharedGroup, { type: SHARE_TYPE }),
        ];

        expect(defaultGroup.name).toBe(DEFAULT_FAV_GROUP_NAME);
        expect(new Set(keys).size).toBe(keys.length);
    });

    test('a sort saved under the group name moves to the group id once', () => {
        const defaultGroup = FavoritesManager.createGroup({ name: 'favorites.gpx', userid: 1 });
        const ownGroup = FavoritesManager.createGroup(favFile('food'));
        const sharedGroup = FavoritesManager.createGroup({ ...favFile('food'), userid: 2, sharedWithMe: true });
        const shopsGroup = FavoritesManager.createGroup(favFile('shops'));
        const groups = [defaultGroup, ownGroup, sharedGroup, shopsGroup];
        const oldSort = {
            tracks: { Trips: 'az' },
            favorites: { [DEFAULT_FAV_GROUP_NAME]: 'za', food: 'az', shops: 'time', [shopsGroup.id]: 'za', gone: 'az' },
        };

        // without the groups (not logged in yet) the sort is not marked, so it still moves after the login
        expect(migrateFavoriteSortKeys(oldSort, [])).toBeNull();
        // before the saved sort is read nothing is marked, or the mark would be saved over it
        expect(migrateFavoriteSortKeys({}, groups)).toBeNull();

        const migrated = migrateFavoriteSortKeys(oldSort, groups);

        // an own and a shared group of one name shared the old key; 'favorites' is still the sort of the group list
        expect(migrated).toEqual({
            tracks: { Trips: 'az' },
            favorites: {
                [DEFAULT_FAV_GROUP_NAME]: 'za',
                [ownGroup.id]: 'az',
                [sharedGroup.id]: 'az',
                [shopsGroup.id]: 'za',
                gone: 'az',
            },
            favoritesKeysVersion: FAVORITE_SORT_KEYS_VERSION,
        });
        // a group created later with the name of a removed one does not take its old sort
        const goneGroup = FavoritesManager.createGroup(favFile('gone'));
        expect(migrateFavoriteSortKeys(migrated, [...groups, goneGroup])).toBeNull();
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
