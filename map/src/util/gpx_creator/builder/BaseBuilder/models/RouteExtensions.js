class RouteExtensions {

    constructor(routeSegments, routeTypes) {
        this.routeSegments = routeSegments;
        this.routeTypes = routeTypes;
    }

    toObject() {
        const {
            routeSegments,
            routeTypes
        } = this;
        let segList = {};
        let typeList = {};
        if (routeSegments.length > 0) {
            segList = {
                ...({
                    'segment': routeSegments.map(segment => segment.toObject())
                })
            }
        }
        if (routeSegments.length > 0) {
            typeList = {
                ...({
                    'type': routeTypes.map(segment => segment.toObject())
                })
            }
        }

        return {
            ...(routeSegments.length > 0 ? {
                'osmand:route': segList
            } : {}),
            ...(routeTypes.length > 0 ? {
                'osmand:types': typeList
            } : {})
        };
    }

}

module.exports = RouteExtensions;
