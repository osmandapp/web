/**
 * Save useState() setter function for this class
 *
 * @name initSetter
 * @category geoRouter
 *
 * @example
 *
 * const [routeRouter, setRouteRouter] = useState(initRouteRouter);
 * routeRouter.initSetter({ setter: setRouteRouter });
 */
export function initSetter({ setter = null }) {
    if (setter && setter !== this.setter) {
        setter((previous) => Object.assign(proto(previous), previous, { setter }));
    }
}

/**
 * Return Object copy of current state.
 *
 * @name nextState
 * @category geoRouter
 *
 * @example
 *
 * const next = this.nextState();
 * next.router = router;
 * next.profile = profile;
 * next.flushState(next);
 */
export function nextState() {
    return Object.assign(proto(this), this);
}

/**
 * Flush state by queue changes into React useState() setter (this.setter)
 *
 * @name flushState
 * @category geoRouter
 *
 * @param {Object|Function|null} state
 *
 * Function: flush by applying callback: (old) => old.foo = bar -- BEST WAY
 * Object: flush based on previously copied @see nextState -- USE ONCE PER RENDER
 * null: flush fresh copy of "this" (BAD idea to modify "this" by parent) - DON'T USE
 *
 * @example
 *
 * this.flushState((o) => o.option = !!flag); // simple mutate
 *
 * const next = this.nextState(); // complex mutate
 * next.router = router;
 * next.profile = profile;
 * next.flushState(next);
 *
 * this.option = !!flag; // bad mutate (you aren't allowed to mutate context)
 * this.flushState();
 */

export function flushState(state = null) {
    if (!this.setter) {
        console.error('geoRouter incorrect flushState() call');
        return;
    }

    if (state && typeof state === 'object') {
        this.setter(() => state);
        return;
    }

    if (state && typeof state === 'function') {
        this.setter((previous) => {
            const next = Object.assign(proto(previous), previous);
            state(next); // callback
            return next;
        });
        return;
    }

    if (state === null && typeof state === 'object') {
        this.setter((previous) => Object.assign(proto(previous), previous, this));
        return;
    }
}

/**
 * @param {object|class} instance
 * @return empty object of same prototype
 */
function proto(instance) {
    return Object.create(Object.getPrototypeOf(instance));
}
