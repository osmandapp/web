import { copyObj } from "../../util/Utils";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

export function isReady() {
    return (this.loaded === true && this.paused === false);
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

export function getProfileColor({router = this.router, profile = this.profile} = {}) {
    return '#123456';
}

export function getProfileIcon({router = this.router, profile = this.profile} = {}) {
    const color = this.getProfileColor({ router, profile });
    if (profile === 'line') {
        return <LinearScaleIcon sx={{ color: color }} fontSize="small"/>
    } else {
        return <img color={color}
                    src={"/map/images/profile_icons/" + profile + ".svg"} height={25} width={25} alt={profile}/>
    }
}

export function getProfileName({router = this.router, profile = this.profile} = {}) {
    return __getProfile.call(this, router, profile)?.name || 'unknown';
}

function __getProfile(router, profile) {
    return __allProfiles.call(this, router)
        ?.find(p => p.key === profile) ?? {};
}

function __allProfiles(router) {
    return __getProvider.call(this, router)?.profiles ?? [];
}

function __getProvider(router) {
    return __allProviders.call(this)?.find(r => r.key === router) ?? {};
};

function __allProviders() {
    return this.providers;
};

// getters (use copy to prevent direct modify by parents)
export function allProviders() { return this._allProviders() }; // no-copy-need
export function getProvider(router = this.router) { return copyObj(this._getProvider(router)) };
export function allProfiles(router = this.router) { return copyObj(this._allProfiles(router)) };
export function getProfile(router = this.router, profile = this.profile) { return copyObj(this._getProfile(router, profile)) };
export function getParams(router = this.router, profile = this.profile) { return copyObj(this._getParams(router, profile)) };
export function getResetParams(router = this.router, profile = this.profile) { return copyObj(this._getResetParams(router, profile)) };
export function getURL(router = this.router, profile = this.profile) { return this._getURL(router, profile) };
export function getProviderByType(type = this.type) { return copyObj(this._getProviderByType(type)) };

// internals (strict and fast)
export function _allProviders() { return this.providers; }
export function _getProvider(router) { return this._allProviders()?.find(r => r.key === router) ?? {} };
export function _allProfiles(router) { return this._getProvider(router)?.profiles ?? [] };
export function _getProfile(router, profile) { return this._allProfiles(router)?.find(p => p.key === profile) ?? {} };
export function _getParams(router, profile) { return this._getProfile(router, profile)?.params };
export function _getResetParams(router, profile) { return this._getProfile(router, profile)?.backup };
export function _getURL(router, profile) { return this._getProfile(router, profile)?.url ?? this._getProvider(router)?.url };
export function _getProviderByType(type) { return this._allProviders()?.find(r => r.type === type) ?? {} };