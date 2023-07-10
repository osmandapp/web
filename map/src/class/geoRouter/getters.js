import { copyObj } from "../../util/Utils";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

/**
 * Return this Router status:
 * loaded: all providers loaded.
 * paused: pause route calculate.
 * Add it to Effect deps if you call it inside.
 * @note ignore pause for OSRM and/or Line
 * @return {bool}
 */
export function isReady() {
    return (this.loaded === true && (
            this.paused === false
            || this.type !=='osmand'
            || this.profile === 'line'
        )
    );
};

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
 * @param { type, router, profile } optional
 * @return { key, name, color, icon, type, router, profile }
 */
export function getProfile({ type = this.type, router = this.router, profile = this.profile } = {}) {
    const r = this.providers.find(r => r.key === router);
    const p = r?.profiles?.find(p => p.key === profile);
    return getProfileDetails.call(this, { p, type, router, profile });
}

/**
 * @return [{ key, name, color, icon, type, router, profile }]
 */
export function listProfiles({ type = this.type, router = this.router, profile = this.profile } = {}) {
    const r = this.providers.find(r => r.key === router);
    return r?.profiles?.map(p => getProfileDetails.call(this, { p, type, router, profile }));
}

// return copy of profile's params
export function getParams({ router = this.router, profile = this.profile } = {}) {
    return copyObj(this.getProfile({ router, profile })?.params);
};

// return copy of profile's resetParams
export function getResetParams({ router = this.router, profile = this.profile } = {}) {
    return copyObj(this.getProfile({ router, profile })?.resetParams);
};

// return profile's URL or provider's URL
export function getURL({ router = this.router, profile = this.profile } = {}) {
    const r = this.providers.find(r => r.key === router);
    const p = r?.profiles?.find(p => p.key === profile);
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
        profile
    };
}

function getProfileIcon({ color, profile } = {}) {
    if (profile === 'line') {
        return <LinearScaleIcon sx={{ color: color }} fontSize="small"/>
    } else {
        const path = '/map/images/profile_icons/' + profile + '.svg';
        return <svg height="25" width="25" alt={profile}><image href={path} /></svg>;
    }
}