import { geoRouter } from '@map/store/geoRouter/geoRouter';

const OSMAND = {
    key: 'osmand',
    type: 'osmand',
    name: 'OsmAnd Advanced',
    url: 'https://api.test/routing/route',
    profiles: [
        {
            key: 'car',
            name: 'Car',
            params: { short_way: { key: 'short_way', value: false }, avoid: { key: 'avoid', value: 'toll' } },
            resetParams: { short_way: { key: 'short_way', value: false }, avoid: { key: 'avoid', value: '' } },
        },
        { key: 'bicycle', name: 'Bicycle', params: {}, resetParams: {} },
    ],
};

const OSRM = {
    key: 'OSRM',
    type: 'osrm',
    name: 'OSRM',
    url: 'https://osrm.test/route/v1/',
    profiles: [
        { key: 'OSRM-car', name: 'Car', url: 'https://osrm.test/route/v1/driving/' },
        { key: 'OSRM-bike', name: 'Bike' },
    ],
};

/** The router as it is after the providers are loaded: osmand is current. */
function router() {
    const geo = new geoRouter();
    geo.providers = [OSMAND, OSRM];
    geo.colors = { car: 'blue' };
    geo.loaded = true;

    return geo;
}

describe('getProfile', () => {
    test('a profile is described by the provider it belongs to', () => {
        const geo = router();

        expect(geo.getProfile()).toMatchObject({
            key: 'car',
            name: 'Car',
            color: 'blue',
            type: 'osmand',
            router: 'osmand',
            profile: 'car',
        });
        expect(geo.getProfile({ geoProfile: { type: 'osrm', router: 'OSRM', profile: 'OSRM-bike' } })).toMatchObject({
            key: 'OSRM-bike',
            color: 'black',
            router: 'OSRM',
        });
    });

    test('a profile or a provider that is gone falls back to an existing one', () => {
        const geo = router();

        expect(geo.getProfile({ router: 'OSRM', profile: 'OSRM-scooter' })).toMatchObject({
            key: 'OSRM-car',
            router: 'OSRM',
        });
        expect(geo.getProfile({ router: 'gone', profile: 'car' })).toMatchObject({ router: 'osmand' });
    });
});

describe('the profile of a track point', () => {
    test('the profile is stored with a cache key of everything it depends on', () => {
        const geo = router().getGeoProfile();

        expect(geo).toMatchObject({ type: 'osmand', router: 'osmand', profile: 'car' });
        expect(geo.cacheKey).toBe(
            'osmand_osmand_car_{"short_way":{"key":"short_way","value":false},"avoid":{"key":"avoid","value":"toll"}}'
        );
    });

    test('the short profile keeps only the key and the value of every param', () => {
        expect(router().getShortGeoProfile().params).toEqual({
            short_way: { key: 'short_way', value: false },
            avoid: { key: 'avoid', value: 'toll' },
        });
        expect(router().getGeoProfile({ profile: 'bicycle' }).params).toEqual({});
    });
});

describe('the params of a profile', () => {
    test('the caller gets a copy, the provider is not changed by it', () => {
        const geo = router();

        const params = geo.getParams();
        params.short_way.value = true;

        expect(geo.getParams().short_way.value).toBe(false);
    });

    test('only the params that differ from their reset value are a change', () => {
        const geo = router();

        expect(Object.keys(geo.getChangedParams())).toEqual(['avoid']);
        expect(geo.isParamsChanged({ params: geo.getResetParams() })).toBe(false);
        expect(geo.isParamsChanged({ params: geo.getParams() })).toBe(true);
    });
});

test('the url of the profile wins over the url of its provider', () => {
    const geo = router();

    expect(geo.getURL({ router: 'OSRM', profile: 'OSRM-car' })).toBe('https://osrm.test/route/v1/driving/');
    expect(geo.getURL({ router: 'OSRM', profile: 'OSRM-bike' })).toBe('https://osrm.test/route/v1/');
    expect(geo.getURL()).toBe('https://api.test/routing/route');
});
