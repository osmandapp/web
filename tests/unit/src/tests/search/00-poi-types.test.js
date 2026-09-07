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

describe('brand types', () => {
    test('a brand is a type with a language after the colon', () => {
        expect(isBrandType('okko:en')).toBe(true);
        expect(parseBrandType('okko:en')).toEqual({ brandName: 'okko', lang: 'en' });
    });

    test('the other formats of a type are not brands', () => {
        expect(isBrandType('shop')).toBeFalsy();
        expect(isBrandType('name:en')).toBe(false);
        expect(isBrandType('lang:en')).toBe(false);
        expect(isBrandType('top_index_brand_okko:en')).toBe(false);
        expect(parseBrandType('shop')).toBeNull();
    });
});

describe('getCategoryName', () => {
    test('a category is translated, a top index one shows the value itself', () => {
        expect(getCategoryName('shop', t)).toBe('poi_shop');
        expect(getCategoryName('top_index_brand_okko', t)).toBe('okko');
        expect(getTopIndexValueName('top_index_brand_burger_king')).toBe('burger_king');
    });

    test('a search by name or by language has its own format', () => {
        expect(getCategoryName('name:de', t)).toBe('poi_name (lang_de)');
        expect(getCategoryName('lang:de', t)).toBe('poi_lang_de');
    });

    test('no category gives an empty name', () => {
        expect(getCategoryName(null, t)).toBe('');
    });
});

describe('formattingPoiType', () => {
    test('the type is read as a sentence', () => {
        expect(formattingPoiType('drinking_water')).toBe('Drinking water');
        expect(formattingPoiType('')).toBe('');
        expect(formattingPoiType(undefined)).toBeUndefined();
    });
});

describe('the icon of a poi type', () => {
    test('the osm tag and value of the point win over the other names', () => {
        const name = getIconNameForPoiType({
            typeOsmTag: 'amenity',
            typeOsmValue: 'bank',
            iconKeyName: 'shop_alcohol',
            iconName: 'shop_alcohol',
        });

        expect(name).toBe('amenity_bank');
    });

    test('the next names are tried in turn: icon key, topo, icon of the poi', () => {
        expect(getIconNameForPoiType({ typeOsmTag: 'a', typeOsmValue: 'b', iconKeyName: 'shop_alcohol' })).toBe(
            'shop_alcohol'
        );
        expect(getIconNameForPoiType({ iconKeyName: 'aerodrome' })).toBe('topo_aerodrome');
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', iconName: 'shop_alcohol' })).toBe('shop_alcohol');
    });

    test('an unknown type falls back to the default icon, or to nothing when asked', () => {
        // the server sends the string "null" when a poi has no icon of its own
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', iconName: 'null' })).toBe(DEFAULT_POI_ICON);
        expect(getIconNameForPoiType({ iconKeyName: 'not_existing', useDefault: false })).toBeNull();
    });

    test('the parent category gives the icon when the point has none', () => {
        const own = { [TYPE_OSM_TAG]: 'amenity', [TYPE_OSM_VALUE]: 'bank' };
        const fromCategory = {
            [ICON_KEY_NAME]: 'not_existing',
            [POI_ICON_NAME]: 'not_existing',
            [MAIN_CATEGORY_KEY_NAME]: 'shop_alcohol',
        };

        expect(getCatPoiIconName(own)).toBe('amenity_bank');
        expect(getCatPoiIconName(fromCategory)).toBe('shop_alcohol');
        expect(getCatPoiIconName({ [ICON_KEY_NAME]: 'not_existing', [CATEGORY_ICON]: 'shop_alcohol' })).toBe(
            'shop_alcohol'
        );
        expect(getCatPoiIconName({})).toBe(DEFAULT_POI_ICON);
    });
});
