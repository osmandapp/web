/**
 * Pause routing when Setting dialog is opened
 * @todo ignore pause for OSRM and Line profile
 */
export function onOpenSettings({ opened }) {
    this.flushState((o) => o.paused = !!opened);
}

/**
 * Save profile params is not easy:
 * 1. We can't modify _getProfile().params directly because allProviders() consist of joined arrays
 * 2. We assume that params are applicable to providersOsmAnd only (OSRM options aren't supported)
 * 3. Therefore, we look into providersOsmAnd, rewrite params and call ctx-setter
 */
export function onParamsChanged({ params }) {
    const next = this.nextState();

    const router = next.router;
    const profile = next.profile;

    next.providersOsmAnd?.forEach(r => {
        if (r.key === router) {
            r.profiles?.forEach(p => {
                if (p.key === profile) {
                    p.params = params;
                }
            });
        }
    });

    next.flushState(next);
}

/**
 * Pick type/router/profile based on selected one(s)
 */
export function onRouterProfileSelected({ type = null, router = null, profile = null } = {}) {
    const picked = this.pickTypeRouterProfile({ type, router, profile });
    this.flushState((o) => {
        o.type = picked.type;
        o.router = picked.router;
        o.profile = picked.profile;
    });
}