import { copyObj } from '../../../util/Utils';
import { apiGet } from '../../../util/HttpApi';
import TracksManager from '../../../manager/track/TracksManager';
import onlineRoutingProviders from '../../../resources/generated/online-routing-providers.json';

const PROFILE_LINE = TracksManager.PROFILE_LINE;
const PROFILE_LINE_NAME = PROFILE_LINE[0].toUpperCase() + PROFILE_LINE.slice(1);

function getColors() {
    return {
        car: '#1976d2',
        truck: '#2F4F4F',
        motorcycle: '#f8931d',
        bicycle: '#9053bd',
        boat: '#08b5ff',
        horsebackriding: '#7f3431',
        pedestrian: '#d90139',
        ski: '#ffacdf',
        [PROFILE_LINE]: '#2F6E80',
        moped: '#3e690e',
        train: '#a56b6f',
        rescuetrack: '#0000ff',
        'rescuetrack-emergency': '#ff0000',
        'OSRM-car': '#1976d2',
        'OSRM-bike': '#9053bd',
        'OSRM-foot': '#d90139',
    };
}

async function loadProvidersOSRM() {
    let json = onlineRoutingProviders; // imported

    if (!json) {
        const osrm = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/online-routing-providers.json`, {
            apiCache: true,
        });
        if (osrm.ok) {
            json = osrm.data;
        }
    }

    if (json && json?.providers && json?.providers[0]?.name) {
        json.providers.forEach((p) => {
            // routes to profiles
            p.name = p.webName ?? p.name;
            p.key = p.name; // name acts as key
            if (p.routes) {
                p.routes.forEach((r) => {
                    // type to key
                    r.key = r.type;
                    delete r.type;
                });
                p.routes.push({
                    key: PROFILE_LINE,
                    name: PROFILE_LINE_NAME,
                });
                p.profiles = p.routes;
                delete p.routes;
            }
        });

        return json.providers; // success
    }

    console.error('failed to load osrm providers');
    return null;
}

async function loadProfilesOsmAnd() {
    // load OsmAnd provider as advanced solution
    // OsmAnd JSON profiles list is converted from Object to Array (for OSRM compatibility)
    const osmand = await apiGet(`${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`, { apiCache: true });

    const data = osmand.data;

    if (osmand.ok && data && data.car) {
        // convert OsmAnd "profiles" {} to OSRM "profiles" [] array
        // note: sort, filter, additional profiles will be processed here
        // copy .params to .reset (used later to reset params in settings)
        const converted = [];

        /*
            OsmAnd provider Data will be modified later (profile params might change).
            As it's not read-only, data must be unique for every geoRouter instance.
            HttpApi cache might return shared-cache-object. Shared!
            Therefore, copy received object to made it unique.
        */
        const json = copyObj(data);

        Object.keys(json).forEach((k) => {
            if (k.includes('rescuetrack') && process.env.REACT_APP_DEVEL_FEATURES !== 'yes') {
                return;
            }
            if (json[k]?.params) {
                json[k].resetParams = copyObj(json[k]?.params);
            }
            converted.push(json[k]);
        });

        converted.push({
            key: PROFILE_LINE,
            name: PROFILE_LINE_NAME,
            params: {},
        });

        return converted; // success
    }

    console.error('failed to load osmand profiles');
    return null;
}

export async function loadProviders({ parseQueryString = false } = {}) {
    const next = this.nextState();

    const profilesOsmAnd = await loadProfilesOsmAnd();

    const osmand = profilesOsmAnd ? [Object.assign({}, next.fallback, { profiles: profilesOsmAnd })] : [next.fallback];

    const osrm = (await loadProvidersOSRM()) || [];

    next.providers = [].concat(osmand, osrm); // OsmAnd is default since HH-routing was activated

    // set 1st router/profile
    next.type = next.providers[0].type;
    next.router = next.providers[0].key;
    next.profile = next.providers[0].profiles[0].key;

    // set type/profile [/mode] according to window.location.search
    if (parseQueryString) {
        const searchParams = new URLSearchParams(window.location.search);

        const type = searchParams.get('type') ?? 'osmand';
        const profile = searchParams.get('profile');

        if (type && profile) {
            const picked = next.pickTypeRouterProfile.call(next, { type, profile });
            next.type = picked.type;
            next.router = picked.router;
            next.profile = picked.profile;

            if (searchParams.get('params')) {
                const freshParams = TracksManager.decodeRouteMode({
                    profile,
                    routeMode: searchParams.get('params').toString().replaceAll(':', '='),
                    params: next.getResetParams({ router: picked.router, profile: picked.profile }),
                });

                // update picked route-profile's params
                next.providers.forEach((r, providerIdx) => {
                    if (r.key === picked.router) {
                        r.profiles?.forEach((p, profileIdx) => {
                            if (p.key === picked.profile) {
                                next.providers[providerIdx].profiles[profileIdx].params = freshParams;
                            }
                        });
                    }
                });
            }
        }
    }

    next.colors = getColors();

    next.loaded = true;

    next.flushState(next);
}
