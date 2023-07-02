export function initSetter(setter = null) {
    if (setter && setter !== this.setter) {
        this.setter = setter; // TODO FIXME ..........
        this.flushState();
        /*
         * there is 3 alternative ways:
         *
         * setter(o => Object.assign(o, { setter })); // next render
         * setter(o => { o.setter = setter; return {...o}; } ); // next render
         * this.setter = setter; setter(() => Object.assign({}, this)); // current render
         */
    }
    if (!this.setter) {
        console.error('geoRouter incorrect initSetter() call');
    }
}