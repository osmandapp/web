import { act, createElement } from 'react';
import MapContext from '@map/context/MapContext';
import HeightmapLayer from '@map/map/layers/HeightmapLayer';
import {
    FREE_INFO,
    FREE_USER,
    PRO_INFO,
    PRO_USER,
    holdAccountInfo,
    renderWithLogin,
    serveProSession,
} from '../../util/login';
import { createMap, removeMap } from '../../util/map';

const HILLSHADE = { key: 'hillshade', url: 'https://tiles.test/heightmap/hillshade/{z}/{x}/{y}.png', opacity: 1 };

let map;
let view;

beforeEach(() => {
    serveProSession();
    map = createMap([50.45, 30.52], 9);
});

afterEach(() => {
    view?.unmount();
    removeMap(map);
});

function terrainUrls() {
    const urls = [];
    map.eachLayer((layer) => layer._url && urls.push(layer._url));

    return urls;
}

test('terrain is drawn only while a Pro account is logged in and its account is known', async () => {
    const mapContext = { heightmap: HILLSHADE, setProcessHeightmaps: () => {} };
    view = await renderWithLogin(
        createElement(MapContext.Provider, { value: mapContext }, createElement(HeightmapLayer))
    );
    expect(terrainUrls()).toEqual([HILLSHADE.url]);

    await act(() => view.login().setLoginUser(''));
    expect(terrainUrls()).toEqual([]);

    // a login form sets the user before get-account-info answers: a free account must not get the layer meanwhile
    const answerFree = holdAccountInfo();
    await act(() => view.login().setLoginUser(FREE_USER));
    expect(terrainUrls()).toEqual([]);
    await answerFree(FREE_INFO);
    expect(terrainUrls()).toEqual([]);

    await act(() => view.login().setLoginUser(''));
    const answerPro = holdAccountInfo();
    await act(() => view.login().setLoginUser(PRO_USER));
    expect(terrainUrls()).toEqual([]);
    await answerPro(PRO_INFO);
    expect(terrainUrls()).toEqual([HILLSHADE.url]);
});
