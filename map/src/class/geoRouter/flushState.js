export function flushState() {
    if (this.setter) {
        this.setter((previous) => Object.assign({}, previous, this)); // queue
    } else {
        console.error('geoRouter incorrect flushState() call');
    }
}