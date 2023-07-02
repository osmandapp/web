/*
    Saving profile params isn't easy process:

    1. We can't modify _getProfile().params directly because allProviders() consist of joined arrays
    2. We assume that opts are applicable to providersOsmAnd only (OSRM options aren't supported)
    3. Therefore, we look into providersOsmAnd, rewrite params and call ctx-setter
*/

export function setParams({ opts }) {
    const next = this.nextState();

    const router = next.router;
    const profile = next.profile;

    next.providersOsmAnd?.forEach(r => {
        if (r.key === router) {
            r.profiles?.forEach(p => {
                if (p.key === profile) {
                    p.params = opts;
                }
            });
        }
    });

    this.flushState(next);
}