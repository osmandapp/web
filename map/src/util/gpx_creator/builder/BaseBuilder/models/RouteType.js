class RouteType {

    constructor({t, v}) {
        this.t = t;
        this.v = v;
    }

    toObject() {
        const {t, v} = this;
        return {
            attributes: {
                t, v
            }
        };
    }

}

module.exports = RouteType;
