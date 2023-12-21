import TracksManager from '../../manager/track/TracksManager';

const PROFILE_LINE = TracksManager.PROFILE_LINE;

export function onOpenSettings() {
    this.flushState((o) => (o.preview = true));
}

export function onCloseSettings() {
    this.flushState((o) => (o.preview = false));
}

export function onDragStart() {
    this.flushState((o) => (o.preview = true));
}

export function onDragEnd() {
    this.flushState((o) => (o.preview = false));
}

/**
 * Save changed params to current router/profile
 */
export function onParamsChanged({ router = this.router, profile = this.profile, params }) {
    this.providers.forEach((r, providerIdx) => {
        if (r.key === router) {
            r.profiles?.forEach((p, profileIdx) => {
                if (p.key === profile) {
                    this.flushState((o) => {
                        o.providers[providerIdx].profiles[profileIdx].params = params;
                    });
                }
            });
        }
    });
}

/**
 * Pick available type/router/profile and set as current.
 *
 * Use cases:
 *
 * 1. Select router/profile from Forms
 * 2. Init router/profile when site loaded
 * 3. Restore Track profile/geoProfile on load track
 * 4. Get back profile/geoProfile when Undo/Redo called
 * 5. Reset previous router/profile when dialog cancelled
 *
 * Optionally, set given { params } to picked profile.
 *
 * Usual way:
 * @param { type, router, profile, params }
 *
 * Track-Point way:
 * @param { ... profile, geoProfile: { type, router, profile, params } }
 * With Track-Point way, point.profile will be used if no point.geoProfile found.
 *
 * @alias onRouterProfileSelected
 */
export function onGeoProfile({ type = null, router = null, profile = null, params = null, geoProfile } = {}) {
    if (geoProfile) {
        type = geoProfile.type ?? type;
        router = geoProfile.router ?? router;
        profile = geoProfile.profile ?? profile;
        params = geoProfile.params ?? params;
        // console.debug('onGeoProfile() with geoProfile', geoProfile);
    }

    const picked = this.pickTypeRouterProfile({ type, router, profile });

    this.flushState((o) => {
        o.type = picked.type;
        o.router = picked.router;
        o.profile = picked.profile;
    });

    if (params) {
        this.onParamsChanged({ router: picked.router, profile: picked.profile, params });
    }
}

/**
 * Escape from Line profile.
 * Called by TracksManager.createTrack()
 * Used to stick off Line profile after GPX track uploaded.
 */
export function escapeFromLineProfile() {
    if (this.profile === PROFILE_LINE) {
        const profile = this.fallback.profiles[0].key;
        this.onGeoProfile({ profile });
    }
}
