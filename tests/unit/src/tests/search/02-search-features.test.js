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
    const POINTS = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Home' }];

    test('a point found by the server is shown with its own appearance', () => {
        const [feature] = buildFavoriteFeatures(favorites(), POINTS);

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
        const sharedPoint = [{ file: 'favorites/favorites.gpx', shared: true, name: 'Home' }];

        expect(buildFavoriteFeatures(favorites({ shared: false }), sharedPoint)).toEqual([]);
        expect(buildFavoriteFeatures(favorites({ shared: true }), POINTS)).toEqual([]);
        expect(buildFavoriteFeatures(favorites({ shared: true }), sharedPoint)).toHaveLength(1);
    });

    test('a point that is not loaded or has no coordinates is skipped', () => {
        const notLoaded = [{ file: 'favorites/favorites.gpx', shared: false, name: 'Not loaded' }];

        expect(buildFavoriteFeatures(favorites(), notLoaded)).toEqual([]);
        expect(buildFavoriteFeatures(favorites({ wpts: [{ ...WPT, lat: null }] }), POINTS)).toEqual([]);
        expect(buildFavoriteFeatures(null, POINTS)).toEqual([]);
    });
});

describe('buildWptFeatures', () => {
    const TRACK_WPT = { name: 'Camp', lat: '50.45', lon: '30.52' };
    const POINT = { file: 'Folder/Track.gpx', shared: false, name: 'Camp', lat: 50.45, lon: 30.52 };

    function ctx({ shared = false, wpts = [TRACK_WPT], pointsGroups } = {}) {
        const file = { name: 'Folder/Track.gpx', wpts, info: pointsGroups ? { pointsGroups } : undefined };

        return shared
            ? { shareWithMeFiles: { tracks: { 'Folder/Track.gpx': file } } }
            : { gpxFiles: { 'Folder/Track.gpx': file } };
    }

    test('a waypoint of an opened track keeps its coordinates and its track', () => {
        const [feature] = buildWptFeatures(ctx(), [POINT]);

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

        const [feature] = buildWptFeatures(ctx({ wpts, pointsGroups }), [POINT]);

        expect(feature.properties[COLOR_NAME_EXTENSION]).toBe('#00ff00');
        expect(feature.properties[ICON_KEY_NAME]).toBe('tent');
        expect(feature.properties[BACKGROUND_TYPE_EXTENSION]).toBe('circle');
    });

    test('a waypoint of a shared track is read from the shared files', () => {
        const [feature] = buildWptFeatures(ctx({ shared: true }), [{ ...POINT, shared: true }]);

        expect(feature.properties[WPT_TRACK_SHARED]).toBe(true);
    });

    test('a waypoint of a track that is not opened, or one that moved, is skipped', () => {
        expect(buildWptFeatures(ctx(), [{ ...POINT, file: 'Other.gpx' }])).toEqual([]);
        expect(buildWptFeatures(ctx(), [{ ...POINT, lat: 50.46 }])).toEqual([]);
    });
});

describe('the id of a result', () => {
    test('the id of the server is used, otherwise the coordinates', () => {
        expect(getObjIdSearch({ properties: { [POI_ID]: 123 }, geometry: { coordinates: [30.52, 50.45] } })).toBe(123);
        expect(getObjIdSearch({ properties: {}, geometry: { coordinates: [30.52, 50.45] } })).toBe('50.45,30.52');
    });

    test('a result of the user own data has no place on the map', () => {
        expect(getObjIdSearch({ properties: {}, geometry: { coordinates: [0, 0] } })).toBeNull();
    });

    test('a track is shown by its file name', () => {
        const [feature] = buildTrackFeatures([{ file: 'Folder/Track.gpx' }]);

        expect(feature.properties).toEqual({
            [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK,
            [CATEGORY_NAME]: 'Folder/Track.gpx',
        });
    });
});

describe('tags and photos of a result', () => {
    test('the language of a tag is taken after the colon', () => {
        expect(parseTagWithLang('brand:de')).toEqual({ key: 'brand', lang: 'de' });
        expect(parseTagWithLang('brand')).toEqual({ key: 'brand', lang: null });
        expect(parseTagWithLang(undefined)).toEqual({ key: undefined, lang: null });
    });

    test('the file name of a photo is taken from its link', () => {
        expect(getPhotoTitle(COMMONS_WIKI_BASE_URL + 'Kyiv.jpg')).toBe('Kyiv.jpg');
        expect(getPhotoTitle(OSMAND_WIKI_BASE_URL + 'a/b/Kyiv.jpg')).toBe('Kyiv.jpg');
        expect(getPhotoTitle('https://example.com/photo.jpg')).toBe('https://example.com/photo.jpg');
        expect(getPhotoTitle({ properties: { imageTitle: COMMONS_WIKI_BASE_URL + 'Kyiv.jpg' } })).toBe('Kyiv.jpg');
    });
});
