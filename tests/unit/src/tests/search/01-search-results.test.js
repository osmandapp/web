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

describe('getPropsFromSearchResultItem', () => {
    test('a poi is named by itself and typed by its subtype', () => {
        const props = {
            [CATEGORY_TYPE]: searchTypeMap.POI,
            [POI_NAME]: 'Blue Cafe;Cafe',
            [POI_SUBTYPE]: 'cafe;restaurant',
            [POI_TYPE]: 'sustenance',
        };

        // a list of values is cut down to the first one
        expect(getPropsFromSearchResultItem(props, t)).toMatchObject({ name: 'Blue Cafe', type: 'Cafe' });
        expect(getFirstSubstring('Cafe;Restaurant')).toBe('Cafe');
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

    test('the other kinds of result are named and typed by their own rules', () => {
        const of = (props) => getPropsFromSearchResultItem(props, t);

        expect(of({ [POI_NAME]: 'Blue Cafe' })).toMatchObject({ name: 'Blue Cafe' });
        expect(of({ [CATEGORY_TYPE]: searchTypeMap.FAVORITE, [POI_NAME]: 'Home' })).toMatchObject({
            name: 'Home',
            type: 'My favorites',
        });
        expect(of({ [CATEGORY_TYPE]: searchTypeMap.GPX_TRACK, [CATEGORY_NAME]: 'Folder/Track.gpx' })).toMatchObject({
            name: 'Folder/Track.gpx',
        });
        expect(of({ [CATEGORY_TYPE]: searchTypeMap.WPT, [POI_NAME]: 'Camp', [CATEGORY_NAME]: 'Track' })).toMatchObject({
            name: 'Camp',
            type: 'Track',
        });
        expect(
            of({
                [CATEGORY_TYPE]: searchTypeMap.POI_TYPE,
                [CATEGORY_NAME]: 'Cafe',
                [MAIN_CATEGORY_KEY_NAME]: 'sustenance',
            })
        ).toMatchObject({ name: 'Cafe', type: 'Sustenance' });
        expect(of({ [CATEGORY_TYPE]: searchTypeMap.STREET, [CATEGORY_NAME]: 'Main street' })).toMatchObject({
            type: 'Street',
        });
    });

    test('both address lines are shown, a street shows only the first one', () => {
        const house = {
            [CATEGORY_TYPE]: searchTypeMap.HOUSE,
            [CATEGORY_NAME]: '12',
            [ADDRESS_1]: 'Main street',
            [ADDRESS_2]: 'Kyiv',
            [CITY]: 'Kyiv',
        };
        const street = {
            [CATEGORY_TYPE]: searchTypeMap.STREET,
            [CATEGORY_NAME]: 'Main street',
            [ADDRESS_1]: 'Kyiv',
            [ADDRESS_2]: 'Ukraine',
        };

        expect(getPropsFromSearchResultItem(house, t)).toMatchObject({ info: 'Main street, Kyiv', city: 'Kyiv' });
        expect(getPropsFromSearchResultItem(street, t).info).toBe('Kyiv');
    });
});

describe('getPoiParentCategory', () => {
    test('the category of a poi type comes from its own tags', () => {
        expect(getPoiParentCategory({ [WEB_POI_ADDITIONAL_CATEGORY]: 'cuisine' }, t)).toBe('Cuisine');
        expect(getPoiParentCategory({ [MAIN_CATEGORY_KEY_NAME]: 'sustenance' }, t)).toBe('Sustenance');
        expect(getPoiParentCategory({ [MAIN_CATEGORY_KEY_NAME]: 'brand:de' }, t)).toBe('Brand (german)');
    });

    test('a filter is shown with its additional category, an empty poi has no category', () => {
        const props = { [WEB_POI_FILTER_NAME]: 'shop_food', [WEB_POI_ADDITIONAL_CATEGORY]: 'cuisine' };

        expect(getPoiParentCategory(props, t)).toBe('Shop food (Cuisine)');
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
    test('a search by word keeps the engine and the query, a category needs only the type', () => {
        expect(buildSearchParamsFromQuery({ engine: 'classic', query: 'cafe' })).toBe('?engine=classic&query=cafe');
        expect(buildSearchParamsFromQuery({ engine: 'classic', type: 'shop_food' })).toBe('?type=shop_food');
        expect(buildSearchParamsFromQuery(null)).toBe('');
    });
});
