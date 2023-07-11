export function onOpenSettings() { this.flushState((o) => o.paused = true); }
export function onCloseSettings() { this.flushState((o) => o.paused = false); }

export function onDragStart() { this.flushState((o) => o.preview = true); }
export function onDragEnd() { this.flushState((o) => o.preview = false); }

/**
 * Save changed params to current router/profile
 */
export function onParamsChanged({ params }) {
    const next = this.nextState();

    const router = next.router;
    const profile = next.profile;

    next.providers.forEach(r => {
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