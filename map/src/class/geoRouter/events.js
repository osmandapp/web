export function onOpenSettings() {
    this.flushState((o) => (o.paused = true));
}

export function onCloseSettings() {
    this.flushState((o) => (o.paused = false));
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
export function onParamsChanged({ params, router = this.router, profile = this.profile }) {
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
 * Pick and set { type/router/profile } based params.
 * Optionally, set given { params } to just picked profile.
 * @alias onRouterProfileSelected { type, router, profile, params }
 */
export function onGeoProfile({ type = null, router = null, profile = null, params = null } = {}) {
    const picked = this.pickTypeRouterProfile({ type, router, profile });
    this.flushState((o) => {
        o.type = picked.type;
        o.router = picked.router;
        o.profile = picked.profile;
    });
    if (params) {
        this.onParamsChanged({ params, router: picked.router, profile: picked.profile });
    }
}
