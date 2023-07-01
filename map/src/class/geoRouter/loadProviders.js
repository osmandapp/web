import _ from "lodash";
import { copyObj } from "../../util/Utils";
import { apiGet } from "../../util/HttpApi";
import onlineRoutingProviders from "../../generated/online-routing-providers.json";

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

// load and validate OSRM and OsmAnd routing providers
export async function loadProviders({ setter = null, creatingRouteMode = null, setCreatingRouteMode = null }) {
    this.initSetter(setter);

    let json = onlineRoutingProviders;

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
                p.profiles = p.routes;
                delete p.routes;
            }
        });

        this.providersOSRM = json.providers;
        this.type = json.providers[0].type;
        this.router = json.providers[0].key; // select first OSRM key and type
        this.profile = json.providers[0]?.profiles[0]?.key; // select first profile
    } else {
        console.log('failed to load osrm providers');
    }

    // load OsmAnd provider as advanced solution
    // TracksManager compatibility: provide OsmAnd to setCreatingRouteMode
    // OsmAnd JSON profiles list is converted from Object to Array (for OSRM compatibility)
    const osmand = await apiGet(
        `${process.env.REACT_APP_ROUTING_API_SITE}/routing/routing-modes`,
        { apiCache: true }
    );
    if (osmand.ok) {
        try {
            const json = await osmand.json();

            // Tracks-routing compatibility
            if (json && setCreatingRouteMode) {
                let creatingData = _.cloneDeep(json);
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
                    converted.push(json[k]);
                });

                // update default OsmAnd provider with actual profiles
                this.providersOsmAnd = [
                    Object.assign({},
                        this.providersOsmAnd[0], // keep preloaded
                        { profiles: converted } // add profiles
                    )
                ];
            }
        } catch { console.log('failed to load osmand profiles'); }

    }

    // set type/profile according to window.location.search
    const searchParams = new URLSearchParams(window.location.search);
    const type = searchParams.get('type');
    const profile = searchParams.get('profile');
    if (type && profile) {
        this.choose({ type, profile });
    }

    this.loaded = true;

    this.flushState();
}