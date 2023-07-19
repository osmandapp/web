import { copyObj } from '../../util/Utils';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import TracksManager from '../../context/TracksManager';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

/**
 * <geoProfile> is object: { type, router, profile, params }
 *
 * When geoProfile used as getter parameters, all fields are optional.
 * If some fields are omited, they will be taken from this class current vars.
 *
 * When you got geoProfile as a result, it must be stored as is into track.point.geoProfile
 */

/**
 * Return this Router status:
 * loaded: all providers loaded.
 * paused: pause route calculate.
 * Add it to Effect deps if you call it inside.
 * @note ignore pause for OSRM and/or Line
 * @return {bool}
 */
export function isReady() {
    return this.loaded === true && (this.paused === false || this.type !== 'osmand' || this.profile === PROFILE_LINE);
}

/**
 * Return useEffect() dependency to monitor changes.
 * React uses Object.is() to compare dependencies.
 * If we return new object, React will cycle.
 * Therefore, string is the best to return.
 * @return {string}
 */
export function getEffectDeps() {
    return JSON.stringify({
        type: this.type,
        router: this.router,
        profile: this.profile,
        preview: this.preview,
        ready: this.isReady(),
    });
}

/**
 * @return [{ key, name }]
 */
export function listProviders() {
    return this.providers.map(({ key, name }) => ({ key, name }));
}

/**
 * Return current/specified profile.
 * @param { type, router, profile } optional ||
 * @return { key, name, color, icon, type, router, profile }
 *
 * Bad case, don't use it:
 * @param { ..., geoProfile }
 * @note it allows to call with { track.point } not with { track.point.geoProfile }
 */
export function getProfile({ type = this.type, router = this.router, profile = this.profile, geoProfile } = {}) {
    if (geoProfile) {
        type = geoProfile.type ?? type;
        router = geoProfile.router ?? router;
        profile = geoProfile.profile ?? profile;
        // console.log('getProfile(geoProfile)', geoProfile);
    }
    const r = this.providers.find((r) => r.key === router);
    const p = r?.profiles?.find((p) => p.key === profile);
    if (r && p) {
        return getProfileDetails.call(this, { p, type, router, profile }); // quick
    } else {
        return getProfileDetails.call(this, this.pickTypeRouterProfile({ type, router, profile })); // slower
    }
}

/**
 * Return JSON for track.point.geoProfile
 * @return { type, router, profile, params } <geoProfile>
 */
export function getGeoProfile(geoProfile) {
    const { type, router, profile, params } = this.getProfile(geoProfile);
    return {
        type,
        router,
        profile,
        params: params ?? {},
    };
}

/**
 * @return [{ key, name, color, icon, type, router, profile }]
 */
export function listProfiles({ type = this.type, router = this.router, profile = this.profile } = {}) {
    const r = this.providers.find((r) => r.key === router);
    return r?.profiles?.map((p) => getProfileDetails.call(this, { p, type, router, profile }));
}

// return copy of profile's params
export function getParams({ router, profile } = {}) {
    return copyObj(this.getProfile({ router, profile })?.params);
}

// return copy of profile's resetParams
export function getResetParams({ router, profile } = {}) {
    return copyObj(this.getProfile({ router, profile })?.resetParams);
}

export function isParamsChanged({ params, type, router, profile } = {}) {
    if (params) {
        const json = JSON.stringify(params);
        if (json.length > 0) {
            if (json !== JSON.stringify(this.getResetParams({ type, router, profile }))) {
                return true;
            }
        }
    }
    return false;
}

// return profile's URL or provider's URL
export function getURL({ router = this.router, profile = this.profile } = {}) {
    const r = this.providers.find((r) => r.key === router);
    const p = r?.profiles?.find((p) => p.key === profile);
    return p.url ?? r.url;
}

function getProfileDetails({ p, type, router, profile } = {}) {
    const key = p.key;
    const name = p.name;
    const params = p.params;
    const resetParams = p.resetParams;
    const color = this.colors[key] ?? 'black';
    const icon = getProfileIcon({ color, profile: key });
    return {
        key,
        name,
        color,
        icon,
        params,
        resetParams,
        type,
        router,
        profile,
    };
}

function getProfileIcon({ color, profile } = {}) {
    if (profile === PROFILE_LINE) {
        return <LinearScaleIcon sx={{ color: color }} fontSize="small" />;
    } else if (profile.includes('rescuetrack')) {
        return <BusAlertIcon sx={{ color: color }} fontSize="small" />;
    } else {
        const path = '/map/images/profile_icons/' + profile + '.svg';
        return <img src={path} width={25} height={25} alt={profile} />;
        // return (
        //     <svg height="25" width="25" alt={profile}>
        //         <image href={path} width="25" height="25" />
        //     </svg>
        // );
    }
}

export function getColor(geoProfile) {
    return this.getProfile(geoProfile)?.color || 'black';
}
