/**
 * Flushes state by queue changes into React setState() (this.setter)
 *
 * @category geoRouter
 *
 * @param {Object|Function|null} state
 *
 * Object: flush based on previously copied @see nextState
 * Function: flush by applying callback: (old) => old.foo = bar
 * null: flush fresh copy of "this" (BAD idea to modify "this" by parent)
 *
 * @example
 *
 * const next = this.nextState();
 * next.paused = !!pause;
 * this.flushState(next);
 *
 * this.flushState((o) => o.paused = !!pause);
 *
 * this.paused = !!pause; // BAD: you must not mutate React state
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
            const next = Object.assign({}, previous);
            state(next); // callback
            return next;
        });
        return;
    }

    if (state === null && typeof state === 'object') {
        this.setter((previous) => Object.assign({}, previous, this));
        return;
    }
}