import { copyObj } from "../../../util/Utils";
import { apiGet } from "../../../util/HttpApi";
import onlineRoutingProviders from "../../../generated/online-routing-providers.json";

function addModes(data) {
    data['line'] = { name: 'Line', params: {} };
    return data;
}

function filterMode(data) {
    return Object.fromEntries(Object.entries(data).filter(([key]) => !key.includes('rescuetrack')));
}

function getColors() {
    return {
        'car': '#1976d2',
        'truck': '#2F4F4F',
        'motorcycle': '#f8931d',
        'bicycle': '#9053bd',
        'boat': '#08b5ff',
        'horsebackriding': '#7f3431',
        'pedestrian': '#d90139',
        'ski': '#ffacdf',
        'line': '#5F9EA0',
        'moped': '#3e690e',
        'train': '#a56b6f'
    };
}

async function loadProvidersOSRM() {
    let json = onlineRoutingProviders; // imported

    if(!json) {
        const osrm = await apiGet(
            `${process.env.REACT_APP_USER_API_SITE}/online-routing-providers.json`,
            { apiCache: true }
        );
        if (osrm.ok) {
            json = osrm.data;
        }
    }

    if (json && json?.providers && json?.providers[0]?.name) {

        json.providers.forEach(p => { // routes to profiles
            p.name = p.webName ?? p.name;
            p.key = p.name; // name acts as key
            if (p.routes) {
                p.routes.forEach(r => { // type to key
                    r.key = r.type;
                    delete r.type;
                });
                p.routes.push({
                    key: 'line',
                    name: 'Line'
                });
                p.profiles = p.routes;
                delete p.routes;
            }
        });

        return json.providers; // success
    }

    console.log('failed to load osrm providers');
    return null;
}

async function loadProfilesOsmAnd({ creatingRouteMode, setCreatingRouteMode }) {
    // load OsmAnd provider as advanced solution
    // TracksManager compatibility: provide OsmAnd to setCreatingRouteMode
    // OsmAnd JSON profiles list is converted from Object to Array (for OSRM compatibility)
    const osmand = await apiGet(
        `${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`,
        { apiCache: true }
    );

    const json = osmand.data;

    if (osmand.ok && json && json.car) {
        // Tracks-routing compatibility
        if (json && setCreatingRouteMode) {
            let creatingData = copyObj(json);
            creatingData = filterMode(creatingData);
            creatingData = addModes(creatingData);
            setCreatingRouteMode( {
                mode: creatingRouteMode.mode,
                modes: creatingData,
                opts: creatingData[creatingRouteMode.mode]?.params,
                colors: getColors()
                }
            );
        }

        if (json) {
            // convert OsmAnd "profiles" {} to OSRM "profiles" [] array
            // note: sort, filter, additional profiles will be processed here
            // copy .params to .backup (used later to reset params in settings)

            const converted = [];

            Object.keys(json).forEach((k) => {
                if (json[k]?.params) {
                    json[k].backup = copyObj(json[k]?.params);
                }
                if(!k.includes('rescuetrack')) {
                    converted.push(json[k]);
                }
            });

            converted.push({
                key: 'line',
                name: 'Line',
                params: {}
            });

            return converted; // success
        }
    }

    console.log('failed to load osmand profiles');
    return null;
}

export async function loadProviders({ parseQueryString, creatingRouteMode = null, setCreatingRouteMode = null }) {
    const next = this.nextState();

    const profilesOsmAnd = await loadProfilesOsmAnd({ creatingRouteMode, setCreatingRouteMode });

    const osmand = profilesOsmAnd
        ? [Object.assign({}, next.fallback, { profiles: profilesOsmAnd })]
        : [next.fallback];

    const osrm = await loadProvidersOSRM() || [];

    next.providers = [].concat(osrm, osmand); // default OSRM first

    // set 1st router/profile
    next.type = next.providers[0].type;
    next.router = next.providers[0].key;
    next.profile = next.providers[0].profiles[0].key;

    // set type/profile according to window.location.search
    if (parseQueryString) {
        const searchParams = new URLSearchParams(window.location.search);
        const type = searchParams.get('type');
        const profile = searchParams.get('profile');
        if (type && profile) {
            const picked = next.pickTypeRouterProfile.call(next, { type, profile });
            next.type = picked.type;
            next.router = picked.router;
            next.profile = picked.profile;
        }
    }

    next.colors = getColors();

    next.loaded = true;

    next.flushState(next);
}