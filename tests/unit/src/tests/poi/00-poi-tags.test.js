import WptTagsProvider, {
    getOsmIdFromOsmUrl,
    openWikipediaContent,
    WIKIPEDIA,
} from '@map/infoblock/components/wpt/WptTagsProvider';
import { apiGet } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';

describe('openWikipediaContent', () => {
    function openArticle(url) {
        const setDevWikiContent = jest.fn();
        apiGet.mockResolvedValue({ data: '<div>article</div>' });

        openWikipediaContent({ key: WIKIPEDIA, value: url }, setDevWikiContent);

        return setDevWikiContent;
    }

    test('the language and the title are taken from the article link', async () => {
        openArticle('https://de.wikipedia.org/wiki/M%C3%BCnchen');
        await Promise.resolve();

        const { options } = findRequest(apiGet, '/search/get-wiki-content');
        expect(options.params).toEqual({ lang: 'de', title: 'München' });
    });

    test('an article of a language with a dash in its code is opened too', async () => {
        openArticle('https://be-tarask.wikipedia.org/wiki/Mensk');
        await Promise.resolve();

        const { options } = findRequest(apiGet, '/search/get-wiki-content');
        expect(options.params).toEqual({ lang: 'be-tarask', title: 'Mensk' });
    });

    test('a link that is not an article is not requested', async () => {
        openArticle('https://example.com/Munich');
        await Promise.resolve();

        expect(apiGet).not.toHaveBeenCalled();
    });
});

describe('getWptTags: the tags of a poi', () => {
    const CTX = { poiIconCache: {}, setPoiIconCache: jest.fn() };

    beforeEach(() => {
        apiGet.mockResolvedValue({ data: '' });
        // icons are loaded with a plain fetch, no unit test is allowed to reach the network
        global.fetch = jest.fn().mockResolvedValue({ ok: true, text: async () => '<svg width="24"/>' });
    });

    async function tagsOf(options) {
        const { res } = await WptTagsProvider.getWptTags({ options }, { isPoi: true }, CTX);

        return Object.fromEntries(res.map((tag) => [tag.key, tag]));
    }

    test('a wikipedia article of the recommended format is a working link', async () => {
        const tags = await tagsOf({ wikipedia: 'de:München' });

        expect(tags.wikipedia.isUrl).toBe(true);
        expect(tags.wikipedia.url).toBe('https://de.wikipedia.org/wiki/München');
    });

    test('a wikipedia article given as a link is kept', async () => {
        const tags = await tagsOf({ wikipedia: 'https://de.wikipedia.org/wiki/München' });

        expect(tags.wikipedia.url).toBe('https://de.wikipedia.org/wiki/München');
    });

    test('a wikipedia article without a language is read as english', async () => {
        const tags = await tagsOf({ wikipedia: 'Munich' });

        expect(tags.wikipedia.url).toBe('https://en.wikipedia.org/wiki/Munich');
    });

    test('a social network account is shown as a link to it', async () => {
        const tags = await tagsOf({ facebook: 'bluecafe', instagram: '/blue.cafe/' });

        expect(tags.facebook.socialMediaUrl).toBe('https://facebook.com/bluecafe');
        expect(tags.facebook.isUrl).toBe(true);
        expect(tags.instagram.socialMediaUrl).toBe('https://instagram.com/blue.cafe');
    });

    test('a social network given as a link is not prefixed twice', async () => {
        const tags = await tagsOf({ facebook: 'facebook.com/bluecafe' });

        expect(tags.facebook.socialMediaUrl).toBe('https://facebook.com/bluecafe');
    });

    test('a phone and an email are marked for their own links', async () => {
        const tags = await tagsOf({ phone: '+380 44 000', email: 'cafe@example.com' });

        expect(tags.phone.isPhoneNumber).toBe(true);
        expect(tags.email.isEmail).toBe(true);
    });

    test('the name of the poi is shown as the name row', async () => {
        const tags = await tagsOf({ web_poi_name: 'Blue Cafe' });

        expect(tags.shared_string_name.value).toBe('Blue Cafe');
    });

    test('the days of the opening hours are localized', async () => {
        const tags = await tagsOf({ opening_hours: 'Mo-Fr 09:00-18:00' });

        expect(tags.opening_hours.value).toBe('Mon-Fri 09:00-18:00');
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

describe('getOsmIdFromOsmUrl', () => {
    test('the id is the last part of the link', () => {
        expect(getOsmIdFromOsmUrl('https://www.openstreetmap.org/node/123')).toBe('123');
    });

    test('no link, no id', () => {
        expect(getOsmIdFromOsmUrl(null)).toBeNull();
    });
});
