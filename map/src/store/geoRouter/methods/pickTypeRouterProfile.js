/**
 * @param { type, router, profile } combination to pick
 * @return { type, router, profile, p } || null
 * @note returned { p } is profile object
 * @example
 * pick...({ profile }) - pick profile, keep router
 * pick...({ router }) - pick router, try to keep profile
 * pick...({ router, profile }) - pick both (if applicable)
 * pick...({ type, [profile] }) - pick 1st type's provider (special usage)
 */
export function pickTypeRouterProfile({ type = null, router = null, profile = null } = {}) {
    const providers = this.providers;

    if (type && !router) {
        router = providers.find((r) => r.type === type)?.key ?? this.fallback.key;
        // console.debug('type-router-profile:', type, router, profile);
    }

    router = router ?? this.router; // current
    profile = profile ?? this.profile; // current

    let provider = providers.find((r) => r.key === router);

    if (!provider) {
        router = providers[0].key ?? this.fallback.key;
        provider = providers.find((r) => r.key === router);
    }

    const profiles = provider.profiles ?? [];

    if (!profiles.find((p) => p.key === profile)) {
        profile = profiles[0].key ?? this.fallback.profiles[0].key;
    }

    if (router && profile) {
        type = provider.type ?? this.fallback.type;
        const p = provider?.profiles?.find((p) => p.key === profile);
        // console.debug('picked:', type, router, profile, p);
        return { type, router, profile, p };
    } else {
        console.error('pickTypeRouterProfile failed:', type, router, profile);
        return null;
    }
}
