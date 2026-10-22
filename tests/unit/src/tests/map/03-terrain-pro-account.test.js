import { act, createElement } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
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

const HILLSHADE = { key: 'hillshade', url: 'https://tiles.test/heightmap/hillshade/{z}/{x}/{y}.png', opacity: 1 };

let map;
let container;
let view;

beforeEach(() => {
    serveProSession();
    container = document.createElement('div');
    document.body.append(container);
    map = L.map(container, { zoomAnimation: false, fadeAnimation: false }).setView([50.45, 30.52], 9);
    useMap.mockReturnValue(map);
});

afterEach(() => {
    view?.unmount();
    map.remove();
    container.remove();
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
