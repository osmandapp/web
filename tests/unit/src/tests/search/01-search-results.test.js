import { getPropsFromSearchResultItem } from '@map/menu/search/search/SearchResultItem';
import { getFirstSubstring } from '@map/manager/PoiManager';
import { getPoiParentCategory } from '@map/manager/SearchManager';
import { searchByCategory } from '@map/menu/search/search/SearchResults';
import { buildSearchParamsFromQuery } from '@map/util/hooks/search/useSearchNav';
import { searchTypeMap } from '@map/manager/searchConstants';
import {
    ADDRESS_1,
    ADDRESS_2,
    CATEGORY_NAME,
    CATEGORY_TYPE,
    CITY,
    MAIN_CATEGORY_KEY_NAME,
    POI_NAME,
    POI_SUBTYPE,
    POI_TYPE,
    WEB_POI_ADDITIONAL_CATEGORY,
    WEB_POI_FILTER_NAME,
} from '@map/infoblock/components/wpt/WptTagsProvider';

const TRANSLATIONS = {
    poi_cafe: 'Cafe',
    poi_sustenance: 'Sustenance',
    poi_cuisine: 'Cuisine',
    poi_shop_food: 'Shop food',
    poi_brand: 'Brand',
    lang_de: 'German',
    search_address_street: 'Street',
    shared_string_my_favorites: 'My favorites',
};

const t = (key, fallback) => TRANSLATIONS[key] ?? fallback ?? key;

describe('getFirstSubstring', () => {
    test('only the first value of a list is shown', () => {
        expect(getFirstSubstring('Cafe;Restaurant')).toBe('Cafe');
        expect(getFirstSubstring('Cafe')).toBe('Cafe');
    });
});

describe('getPropsFromSearchResultItem', () => {
    test('a poi is named by itself and typed by its subtype', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.POI,
            [POI_NAME]: 'Blue Cafe',
            [POI_SUBTYPE]: 'cafe',
            [POI_TYPE]: 'sustenance',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Blue Cafe', type: 'Cafe' });
    });

    test('a poi without a name is named by its own type and typed by the parent one', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.POI,
            [POI_NAME]: '',
            [POI_SUBTYPE]: 'cafe',
            [POI_TYPE]: 'sustenance',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Cafe', type: 'Sustenance' });
    });

    test('a result with no type at all is read as a poi', () => {
        expect(getPropsFromSearchResultItem({ [POI_NAME]: 'Blue Cafe' }, t)).toMatchObject({ name: 'Blue Cafe' });
    });

    test('a favorite is typed as the favorites of the user', () => {
        const props = { [CATEGORY_TYPE]: searchTypeMap.FAVORITE, [POI_NAME]: 'Home' };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Home', type: 'My favorites' });
    });

    test('a track is named by its file name', () => {
        const props = { [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK, [CATEGORY_NAME]: 'Folder/Track.gpx' };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Folder/Track.gpx' });
    });

    test('a waypoint of a track is typed by the track it belongs to', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.WPT,
            [POI_NAME]: 'Camp',
            [CATEGORY_NAME]: 'Track',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Camp', type: 'Track' });
    });

    test('a poi type is typed by its parent category', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.POI_TYPE,
            [CATEGORY_NAME]: 'Cafe',
            [MAIN_CATEGORY_KEY_NAME]: 'sustenance',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Cafe', type: 'Sustenance' });
    });

    test('an address result is typed by its own kind', () => {
        const props = { [CATEGORY_TYPE]: searchTypeMap.STREET, [CATEGORY_NAME]: 'Main street' };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Main street', type: 'Street' });
    });

    test('both address lines are shown together', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.HOUSE,
            [CATEGORY_NAME]: '12',
            [ADDRESS_1]: 'Main street',
            [ADDRESS_2]: 'Kyiv',
            [CITY]: 'Kyiv',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ info: 'Main street, Kyiv', city: 'Kyiv' });
    });

    test('a street shows only its first address line', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.STREET,
            [CATEGORY_NAME]: 'Main street',
            [ADDRESS_1]: 'Kyiv',
            [ADDRESS_2]: 'Ukraine',
        };

        expect(getPropsFromSearchResultItem(props, t).info).toBe('Kyiv');
    });

    test('a list of values is cut down to the first one', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.POI,
            [POI_NAME]: 'Blue Cafe;Cafe',
            [POI_SUBTYPE]: 'cafe;restaurant',
        };

        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Blue Cafe', type: 'Cafe' });
    });
});

describe('getPoiParentCategory', () => {
    test('an additional category is used when there is no filter', () => {
        expect(getPoiParentCategory({ [WEB_POI_ADDITIONAL_CATEGORY]: 'cuisine' }, t)).toBe('Cuisine');
    });

    test('the main category is translated', () => {
        expect(getPoiParentCategory({ [MAIN_CATEGORY_KEY_NAME]: 'sustenance' }, t)).toBe('Sustenance');
    });

    test('a brand keeps its language in brackets', () => {
        expect(getPoiParentCategory({ [MAIN_CATEGORY_KEY_NAME]: 'brand:de' }, t)).toBe('Brand (german)');
    });

    test('a filter is shown with its additional category', () => {
        const props = { [WEB_POI_FILTER_NAME]: 'shop_food', [WEB_POI_ADDITIONAL_CATEGORY]: 'cuisine' };

        expect(getPoiParentCategory(props, t)).toBe('Shop food (Cuisine)');
    });

    test('nothing to show', () => {
        expect(getPoiParentCategory({}, t)).toBeNull();
    });
});

describe('searchByCategory', () => {
    function ctx() {
        const ctx = { setSearchQuery: jest.fn((q) => (ctx.searchQuery = q)) };
        return ctx;
    }

    test('a category is searched by its translated name', () => {
        const c = ctx();

        searchByCategory({ engine: 'classic', type: 'shop_food' }, c, t);

        expect(c.searchQuery).toEqual({ engine: 'classic', query: 'Shop food', type: 'shop_food', lang: null });
    });

    test('a brand is searched by its own name and language', () => {
        const c = ctx();

        searchByCategory({ engine: 'classic', type: 'okko:de' }, c, t);

        expect(c.searchQuery).toEqual({ engine: 'classic', query: 'Okko', type: 'okko:de', lang: 'de' });
    });
});

describe('buildSearchParamsFromQuery', () => {
    test('a search by word keeps the engine and the query', () => {
        expect(buildSearchParamsFromQuery({ engine: 'classic', query: 'cafe' })).toBe('?engine=classic&query=cafe');
    });

    test('a search by category needs only the type', () => {
        expect(buildSearchParamsFromQuery({ engine: 'classic', type: 'shop_food' })).toBe('?type=shop_food');
    });

    test('no search gives no params', () => {
        expect(buildSearchParamsFromQuery(null)).toBe('');
    });
});
