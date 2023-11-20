import { prepareDesc } from '../manager/track/TracksManager';

jest.mock('../util/Utils', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../manager/FavoritesManager', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../util/HttpApi', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../store/geoRouter/geoRouter', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../util/GzipBase64.mjs', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('leaflet', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('../map/markers/MarkerOptions', () => ({
    __esModule: true,
    default: jest.fn(),
}));

const testData = [
    '        1 test\n' + '        2 test\n' + '        3 test\n' + '        www.osmand.net',
    '<a href="http://www.osmand.net">www.osmand.net</a>',
    'Go next</span></h2><div class="content"><p></p><ul><li><a class="external free" href="https://en.wikivoyage.org/wiki/Cherkasy" rel="nofollow">Cherkasy</a> - 190 km SW</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Chernihiv" rel="nofollow">Chernihiv</a> - 155 km N. Possible visit like a day tour</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Chernobyl" rel="nofollow">Chernobyl</a> - 130 km N. There are day tours to the exclusion zone.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Kropyvnytskyi" rel="nofollow">Kropyvnytskyi</a> - 305 km S</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Lviv" rel="nofollow">Lviv</a> - direct flights.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Odessa" rel="nofollow">Odessa</a>- direct flights.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Poltava" rel="nofollow">Poltava</a> - 350 km SE</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Sumy" rel="nofollow">Sumy</a> - 330 km E</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Uman" rel="nofollow">Uman</a> - 230 km S</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Vinnytsya" rel="nofollow">Vinnytsya</a> - 260 km SW</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Zhytomyr" rel="nofollow">Zhytomyr</a> - 140 km W. Possible visit like a day tour</li></ul>',
];
const results = [
    '        1 test<br />        2 test<br />        3 test<br />        <a target="_blank" href="http://www.osmand.net">www.osmand.net</a>',
    '<a href="http://www.osmand.net">www.osmand.net</a>',
    'Go next</span></h2><div class="content"><p></p><ul><li><a class="external free" href="https://en.wikivoyage.org/wiki/Cherkasy" rel="nofollow">Cherkasy</a> - 190 km SW</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Chernihiv" rel="nofollow">Chernihiv</a> - 155 km N. Possible visit like a day tour</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Chernobyl" rel="nofollow">Chernobyl</a> - 130 km N. There are day tours to the exclusion zone.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Kropyvnytskyi" rel="nofollow">Kropyvnytskyi</a> - 305 km S</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Lviv" rel="nofollow">Lviv</a> - direct flights.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Odessa" rel="nofollow">Odessa</a>- direct flights.</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Poltava" rel="nofollow">Poltava</a> - 350 km SE</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Sumy" rel="nofollow">Sumy</a> - 330 km E</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Uman" rel="nofollow">Uman</a> - 230 km S</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Vinnytsya" rel="nofollow">Vinnytsya</a> - 260 km SW</li><li><a class="external free" href="https://en.wikivoyage.org/wiki/Zhytomyr" rel="nofollow">Zhytomyr</a> - 140 km W. Possible visit like a day tour</li></ul>',
];

test('Validate desc = data1', () => {
    expect(prepareDesc(testData[0])).toBe(results[0]);
});
test('Validate desc = data2', () => {
    expect(prepareDesc(testData[1])).toBe(results[1]);
});
test('Validate desc = data3', () => {
    expect(prepareDesc(testData[2])).toBe(results[2]);
});
test('Validate desc = null', () => {
    expect(prepareDesc(null)).toBe(null);
});
test('Validate desc = undefined', () => {
    expect(prepareDesc(undefined)).toBe(null);
});
test('Validate desc = "" ', () => {
    expect(prepareDesc('')).toBe(null);
});
test('Validate desc = number', () => {
    expect(prepareDesc(123)).toBe(null);
});
