
export function setPause({ setter = null, pause }) {
    if (pause === true || pause === false) {
        this.initSetter(setter);
        this.paused = pause;
        this.flushState();
    }
}