export function choose({ setter = null, type = null, router = null, profile = null } = {}) {
    /*
        Switch to selected "router" and/or "profile":

        1. use current router|profile when (any)===null
        2. use first available when router|profile is not applicable
        3. type is changed automatically according to applicated router

        Examples:

        choose({ [setter], profile }) - switch profile, keep router
        choose({ [setter], router }) - switch router, try to keep profile
        choose({ [setter], router, profile }) - switch both (if applicable)

        Special case (used for searchParams / share route link):

        choose({ [setter], type, [profile] }) - select 1st type's provider
    */

    this.initSetter(setter);

    if (type && !router) {
        router = this.getProviderByType(type)?.key ?? 'osmand';
        // console.log('type', type, 'router', router);
    }

    // use current values if not defined
    router = router ?? this.router;
    profile = profile ?? this.profile;

    const providers = this.allProviders();

    if (!providers.find(r => r.key === router)) {
        router = providers[0].key ?? 'osmand'; // fallback
    }

    const profiles = this.allProfiles(router);

    if (!profiles.find(p => p.key === profile)) {
        profile = profiles[0].key ?? 'car'; // fallback
    }

    if (router && profile) {
        type = this.getProvider(router)?.type ?? 'osmand'; // fallback
        // console.log('choosen:', type, router, profile);

        this.type = type;
        this.router = router;
        this.profile = profile;

        this.flushState();
    }
}