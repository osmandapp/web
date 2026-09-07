import WptTagsProvider, {
    getOsmIdFromOsmUrl,
    openWikipediaContent,
    WIKIPEDIA,
} from '@map/infoblock/components/wpt/WptTagsProvider';
import { apiGet } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';

describe('openWikipediaContent', () => {
    function openArticle(url) {
        apiGet.mockResolvedValue({ data: '<div>article</div>' });
        openWikipediaContent({ key: WIKIPEDIA, value: url }, jest.fn());
    }

    test('the language and the title are taken from the article link', async () => {
        openArticle('https://de.wikipedia.org/wiki/M%C3%BCnchen');
        await Promise.resolve();

        expect(findRequest(apiGet, '/search/get-wiki-content').options.params).toEqual({
            lang: 'de',
            title: 'München',
        });
    });

    test('a language code with a dash is a language too', async () => {
        openArticle('https://be-tarask.wikipedia.org/wiki/Mensk');
        await Promise.resolve();

        expect(findRequest(apiGet, '/search/get-wiki-content').options.params.lang).toBe('be-tarask');
    });

    test('a link that is not an article is not requested', async () => {
        openArticle('https://example.com/Munich');
        await Promise.resolve();

        expect(apiGet).not.toHaveBeenCalled();
    });
});

describe('getWptTags: the tags of a poi', () => {
    const CTX = { poiIconCache: {}, setPoiIconCache: jest.fn(), unitsSettings: { len: 'si_km_m' } };

    beforeEach(() => {
        apiGet.mockResolvedValue({ data: '' });
        // icons are loaded with a plain fetch, no unit test is allowed to reach the network
        global.fetch = jest.fn().mockResolvedValue({ ok: true, text: async () => '<svg width="24"/>' });
    });

    async function tagsOf(options) {
        const { res } = await WptTagsProvider.getWptTags({ options }, { isPoi: true }, CTX);

        return Object.fromEntries(res.map((tag) => [tag.key, tag]));
    }

    test('a wikipedia article is a working link, whatever the format of the tag', async () => {
        const recommended = await tagsOf({ wikipedia: 'de:München' });
        const asLink = await tagsOf({ wikipedia: 'https://de.wikipedia.org/wiki/München' });
        const noLanguage = await tagsOf({ wikipedia: 'Munich' });

        expect(recommended.wikipedia.isUrl).toBe(true);
        expect(recommended.wikipedia.url).toBe('https://de.wikipedia.org/wiki/München');
        expect(asLink.wikipedia.url).toBe('https://de.wikipedia.org/wiki/München');
        expect(noLanguage.wikipedia.url).toBe('https://en.wikipedia.org/wiki/Munich');
    });

    test('a social network account is shown as a link to it', async () => {
        const tags = await tagsOf({ facebook: 'bluecafe', instagram: '/blue.cafe/', vk: 'vk.com/bluecafe' });

        expect(tags.facebook.socialMediaUrl).toBe('https://facebook.com/bluecafe');
        expect(tags.facebook.isUrl).toBe(true);
        expect(tags.instagram.socialMediaUrl).toBe('https://instagram.com/blue.cafe');
        // a value with a path is a link, not a user name
        expect(tags.vk.socialMediaUrl).toBe('https://vk.com/bluecafe');
    });

    test('a phone, an email and the name of the poi get their own rows', async () => {
        const tags = await tagsOf({ phone: '+380 44 000', email: 'cafe@example.com', web_poi_name: 'Blue Cafe' });

        expect(tags.phone.isPhoneNumber).toBe(true);
        expect(tags.email.isEmail).toBe(true);
        expect(tags.shared_string_name.value).toBe('Blue Cafe');
    });

    test('the days of the opening hours are localized', async () => {
        const tags = await tagsOf({ opening_hours: 'Mo-Fr 09:00-18:00' });

        expect(tags.opening_hours.value).toBe('Mon-Fri 09:00-18:00');
    });

    test('a measure is shown in the units of the user', async () => {
        const tags = await tagsOf({ ele: '1234', distance: '5000', maxweight: '3.25' });
        const inFeet = await WptTagsProvider.getWptTags(
            { options: { ele: '1234' } },
            { isPoi: true },
            { ...CTX, unitsSettings: { len: 'si_mi_feet' } }
        );

        expect(tags.ele.value).toBe('1234 m');
        expect(tags.distance.value).toBe('5 km');
        expect(tags.maxweight.value).toBe('3.3 metric_ton');
        expect(inFeet.res.find((tag) => tag.key === 'ele').value).toBe('4048.6 foot');
    });

    test('a measure that is not a number is left as it is', async () => {
        const tags = await tagsOf({ ele: 'high' });

        expect(tags.ele.value).toBe('high');
    });

    test('the tags of the web itself are not shown', async () => {
        const tags = await tagsOf({ web_poi_iconName: 'cafe', osm_tag_alt_name: 'Cafe', phone: '+380 44 000' });

        expect(Object.keys(tags)).toEqual(['phone']);
    });

    test('the tags of a favorite are read from its extensions', async () => {
        const favorite = { ext: { extensions: { amenity_type: 'shop', phone: '+380 44 000' } } };

        const { res, type } = await WptTagsProvider.getWptTags(favorite, { isFav: true }, CTX);

        expect(type).toBe('shop');
        expect(res.find((tag) => tag.key === 'phone').isPhoneNumber).toBe(true);
    });

    test('the id and the type of the poi are read from the tags', async () => {
        const { id, type, subtype } = await WptTagsProvider.getWptTags(
            { options: { web_poi_id: 42, type: 'sustenance', web_poi_subType: 'cafe' } },
            { isPoi: true },
            CTX
        );

        expect({ id, type, subtype }).toEqual({ id: 42, type: 'sustenance', subtype: 'cafe' });
    });
});

test('the osm id of a poi is the last part of its link', () => {
    expect(getOsmIdFromOsmUrl('https://www.openstreetmap.org/node/123')).toBe('123');
    expect(getOsmIdFromOsmUrl(null)).toBeNull();
});
