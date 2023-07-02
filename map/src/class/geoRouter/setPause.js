export function setPause({ setter = null, pause }) {
    // const next = this.nextState();
    // next.paused = !!pause;
    // this.flushState(next);

    this.flushState((o) => o.paused = !!pause);
}