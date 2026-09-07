import {
    DEFAULT_POI_ICON,
    formattingPoiType,
    getCatPoiIconName,
    getCategoryName,
    getIconNameForPoiType,
    getTopIndexValueName,
    isBrandType,
    parseBrandType,
} from '@map/manager/PoiManager';
import {
    CATEGORY_ICON,
    ICON_KEY_NAME,
    MAIN_CATEGORY_KEY_NAME,
    POI_ICON_NAME,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '@map/infoblock/components/wpt/WptTagsProvider';

/** Translation stub: returns the key, so the tests read the key the ui would ask for. */
const t = (key) => key;
const firstSubstring = (s) => s;

describe('brand types', () => {
    test('a brand is a type with a language after the colon', () => {
        expect(isBrandType('okko:en')).toBe(true);
        expect(parseBrandType('okko:en')).toEqual({ brandName: 'okko', lang: 'en' });
    });

    test('a plain category is not a brand', () => {
        expect(isBrandType('shop')).toBeFalsy();
        expect(parseBrandType('shop')).toBeNull();
    });

    test('the name and lang search formats are not brands', () => {
        expect(isBrandType('name:en')).toBe(false);
        expect(isBrandType('lang:en')).toBe(false);
        expect(parseBrandType('name:en')).toBeNull();
    });

    test('a top index key is not a brand', () => {
        expect(isBrandType('top_index_brand_okko:en')).toBe(false);
    });
});

describe('getTopIndexValueName', () => {
    test('the value is taken after the key of the top index', () => {
        expect(getTopIndexValueName('top_index_brand_okko')).toBe('okko');
        expect(getTopIndexValueName('top_index_brand_burger_king')).toBe('burger_king');
    });

    test('a key without a value is left as it is', () => {
        expect(getTopIndexValueName('top_index_brand')).toBe('brand');
    });
});

describe('getCategoryName', () => {
    test('a plain category is translated', () => {
        expect(getCategoryName('shop', t, firstSubstring)).toBe('poi_shop');
    });

    test('a top index category shows the value itself, it has no translation', () => {
        expect(getCategoryName('top_index_brand_okko', t, firstSubstring)).toBe('okko');
    });

    test('a search by name in a language adds the language in brackets', () => {
        expect(getCategoryName('name:de', t, firstSubstring)).toBe('poi_name (lang_de)');
    });

    test('a search by language uses its own translation key', () => {
        expect(getCategoryName('lang:de', t, firstSubstring)).toBe('poi_lang_de');
    });

    test('no category gives an empty name', () => {
        expect(getCategoryName(null, t, firstSubstring)).toBe('');
    });
});

describe('formattingPoiType', () => {
    test('the type is read as a sentence', () => {
        expect(formattingPoiType('drinking_water')).toBe('Drinking water');
        expect(formattingPoiType('shop')).toBe('Shop');
    });

    test('an empty type is left as it is', () => {
        expect(formattingPoiType('')).toBe('');
        expect(formattingPoiType(undefined)).toBeUndefined();
    });
});

describe('getIconNameForPoiType', () => {
    test('the osm tag and value of the point win over the other names', () => {
        const name = getIconNameForPoiType({
            typeOsmTag: 'amenity',
            typeOsmValue: 'bank',
            iconKeyName: 'shop_alcohol',
            iconName: 'shop_alcohol',
        });

        expect(name).toBe('amenity_bank');
    });

    test('the icon key is used when the osm pair has no icon', () => {
        const name = getIconNameForPoiType({
            typeOsmTag: 'amenity',
            typeOsmValue: 'not_existing',
            iconKeyName: 'shop_alcohol',
        });

        expect(name).toBe('shop_alcohol');
    });

    test('a topo icon is used when there is no plain one', () => {
        expect(getIconNameForPoiType({ iconKeyName: 'aerodrome' })).toBe('topo_aerodrome');
    });

    test('the icon of the poi is the last name to try', () => {
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', iconName: 'shop_alcohol' })).toBe('shop_alcohol');
    });

    test('the string null of the server is not an icon name', () => {
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', iconName: 'null' })).toBe(DEFAULT_POI_ICON);
    });

    test('an unknown type falls back to the default icon, or to nothing when asked', () => {
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing' })).toBe(DEFAULT_POI_ICON);
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', useDefault: false })).toBeNull();
    });
});

describe('getCatPoiIconName', () => {
    test('the icon of the point itself is used', () => {
        expect(getCatPoiIconName({ [TYPE_OSM_TAG]: 'amenity', [TYPE_OSM_VALUE]: 'bank' })).toBe('amenity_bank');
    });

    test('the parent category gives the icon when the point has none', () => {
        const props = {
            [ICON_KEY_NAME]: 'not_existing',
            [POI_ICON_NAME]: 'not_existing',
            [MAIN_CATEGORY_KEY_NAME]: 'shop_alcohol',
        };

        expect(getCatPoiIconName(props)).toBe('shop_alcohol');
    });

    test('the icon of the category is the last name to try', () => {
        const props = { [ICON_KEY_NAME]: 'not_existing', [CATEGORY_ICON]: 'shop_alcohol' };

        expect(getCatPoiIconName(props)).toBe('shop_alcohol');
    });

    test('an unknown point still gets the default icon', () => {
        expect(getCatPoiIconName({})).toBe(DEFAULT_POI_ICON);
    });
});
