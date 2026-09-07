import {
    buildFavoriteFeatures,
    buildTrackFeatures,
    buildWptFeatures,
    getObjIdSearch,
    getPhotoTitle,
    COMMONS_WIKI_BASE_URL,
    OSMAND_WIKI_BASE_URL,
} from '@map/manager/SearchManager';
import { parseTagWithLang } from '@map/manager/PoiManager';
import { FAVORITE_HIT_GROUP_ID, searchTypeMap, WPT_TRACK_FILE, WPT_TRACK_SHARED } from '@map/manager/searchConstants';
import {
    BACKGROUND_TYPE_EXTENSION,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    COLOR_NAME_EXTENSION,
    ICON_KEY_NAME,
    POI_ID,
    POI_NAME,
} from '@map/infoblock/components/wpt/WptTagsProvider';

const WPT = { name: 'Home', lat: 50.45, lon: 30.52, category: 'My group', icon: 'star', color: '#ff0000' };

/** Favorites as the app keeps them: groups with their file, and the loaded points by group id. */
function favorites({ shared = false, wpts = [WPT] } = {}) {
    return {
        groups: [{ id: 'g1', file: { name: 'favorites/favorites.gpx' }, sharedWithMe: shared }],
        mapObjs: { g1: { wpts } },
    };
}

describe('buildFavoriteFeatures', () => {
    test('a point found by the server is shown with its own appearance', () => {
        const points = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Home' }];

        const [feature] = buildFavoriteFeatures(favorites(), points);

        expect(feature.properties).toMatchObject({
            [CATEGORY_TYPE]: searchTypeMap.FAVORITE,
            [POI_NAME]: 'Home',
            [CATEGORY_NAME]: 'My group',
            [FAVORITE_HIT_GROUP_ID]: 'g1',
            [ICON_KEY_NAME]: 'star',
            [COLOR_NAME_EXTENSION]: '#ff0000',
        });
    });

    test('a shared file is not confused with an own file of the same path', () => {
        const ownPoint = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Home' }];
        const sharedPoint = [{ file: 'favorites/favorites.gpx', shared: true, name: 'Home' }];

        expect(buildFavoriteFeatures(favorites({ shared: false }), sharedPoint)).toEqual([]);
        expect(buildFavoriteFeatures(favorites({ shared: true }), ownPoint)).toEqual([]);
        expect(buildFavoriteFeatures(favorites({ shared: true }), sharedPoint)).toHaveLength(1);
    });

    test('a point that is not loaded is skipped', () => {
        const points = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Not loaded' }];

        expect(buildFavoriteFeatures(favorites(), points)).toEqual([]);
    });

    test('a point without coordinates is not searchable', () => {
        const wpts = [{ ...WPT, lat: null }];
        const points = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Home' }];

        expect(buildFavoriteFeatures(favorites({ wpts }), points)).toEqual([]);
    });

    test('nothing is loaded yet', () => {
        expect(buildFavoriteFeatures(null, [{ file: 'f.gpx', shared: false, name: 'Home' }])).toEqual([]);
    });
});

describe('buildWptFeatures', () => {
    const TRACK_WPT = { name: 'Camp', lat: '50.45', lon: '30.52' };

    function ctx({ shared = false, wpts = [TRACK_WPT], pointsGroups } = {}) {
        const file = { name: 'Folder/Track.gpx', wpts, info: pointsGroups ? { pointsGroups } : undefined };
        return shared
            ? { shareWithMeFiles: { tracks: { 'Folder/Track.gpx': file } } }
            : { gpxFiles: { 'Folder/Track.gpx': file } };
    }

    test('a waypoint of an opened track keeps its coordinates and track', () => {
        const points = [{ file: 'Folder/Track.gpx', shared: false, name: 'Camp', lat: 50.45, lon: 30.52 }];

        const [feature] = buildWptFeatures(ctx(), points);

        expect(feature.geometry.coordinates).toEqual([30.52, 50.45]);
        expect(feature.properties).toMatchObject({
            [CATEGORY_TYPE]: searchTypeMap.WPT,
            [POI_NAME]: 'Camp',
            [WPT_TRACK_FILE]: 'Folder/Track.gpx',
            [WPT_TRACK_SHARED]: false,
        });
    });

    test('the appearance of the waypoint group is used', () => {
        const wpts = [{ ...TRACK_WPT, category: 'Camps' }];
        const pointsGroups = { Camps: { color: '#00ff00', iconName: 'tent' } };
        const points = [{ file: 'Folder/Track.gpx', shared: false, name: 'Camp', lat: 50.45, lon: 30.52 }];

        const [feature] = buildWptFeatures(ctx({ wpts, pointsGroups }), points);

        expect(feature.properties[COLOR_NAME_EXTENSION]).toBe('#00ff00');
        expect(feature.properties[ICON_KEY_NAME]).toBe('tent');
        expect(feature.properties[BACKGROUND_TYPE_EXTENSION]).toBe('circle');
    });

    test('a waypoint of a shared track is read from the shared files', () => {
        const points = [{ file: 'Folder/Track.gpx', shared: true, name: 'Camp', lat: 50.45, lon: 30.52 }];

        const [feature] = buildWptFeatures(ctx({ shared: true }), points);

        expect(feature.properties[WPT_TRACK_SHARED]).toBe(true);
    });

    test('a waypoint of a track that is not opened is skipped', () => {
        const points = [{ file: 'Other.gpx', shared: false, name: 'Camp', lat: 50.45, lon: 30.52 }];

        expect(buildWptFeatures(ctx(), points)).toEqual([]);
    });

    test('a waypoint that moved is not the same waypoint', () => {
        const points = [{ file: 'Folder/Track.gpx', shared: false, name: 'Camp', lat: 50.46, lon: 30.52 }];

        expect(buildWptFeatures(ctx(), points)).toEqual([]);
    });
});

describe('buildTrackFeatures', () => {
    test('a track is shown by its file name', () => {
        const [feature] = buildTrackFeatures([{ file: 'Folder/Track.gpx' }]);

        expect(feature.properties).toEqual({
            [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK,
            [CATEGORY_NAME]: 'Folder/Track.gpx',
        });
    });
});

describe('getObjIdSearch', () => {
    test('the id of the server is used when there is one', () => {
        const obj = { properties: { [POI_ID]: 123 }, geometry: { coordinates: [30.52, 50.45] } };

        expect(getObjIdSearch(obj)).toBe(123);
    });

    test('a result without an id is addressed by its coordinates', () => {
        const obj = { properties: {}, geometry: { coordinates: [30.52, 50.45] } };

        expect(getObjIdSearch(obj)).toBe('50.45,30.52');
    });

    test('a result of the user own data has no place on the map', () => {
        const obj = { properties: {}, geometry: { coordinates: [0, 0] } };

        expect(getObjIdSearch(obj)).toBeNull();
    });
});

describe('parseTagWithLang', () => {
    test('the language is taken after the colon', () => {
        expect(parseTagWithLang('brand:de')).toEqual({ key: 'brand', lang: 'de' });
    });

    test('a tag without a language is left as it is', () => {
        expect(parseTagWithLang('brand')).toEqual({ key: 'brand', lang: null });
        expect(parseTagWithLang(undefined)).toEqual({ key: undefined, lang: null });
    });
});

describe('getPhotoTitle', () => {
    test('the file name is taken from a wikimedia link', () => {
        expect(getPhotoTitle(COMMONS_WIKI_BASE_URL + 'Kyiv.jpg')).toBe('Kyiv.jpg');
    });

    test('the file name is taken from an osmand link', () => {
        expect(getPhotoTitle(OSMAND_WIKI_BASE_URL + 'a/b/Kyiv.jpg')).toBe('Kyiv.jpg');
    });

    test('an unknown link is shown as it is', () => {
        expect(getPhotoTitle('https://example.com/photo.jpg')).toBe('https://example.com/photo.jpg');
    });

    test('a photo of the gallery is read by its title', () => {
        expect(getPhotoTitle({ properties: { imageTitle: COMMONS_WIKI_BASE_URL + 'Kyiv.jpg' } })).toBe('Kyiv.jpg');
    });
});
