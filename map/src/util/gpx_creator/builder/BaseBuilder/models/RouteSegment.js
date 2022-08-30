class RouteSegment {

    constructor(id, {
        length,
        segmentTime,
        speed,
        turnType,
        skipTurn,
        turnAngle,
        types,
        pointTypes,
        names,
    } = {}) {
        this.id = id;
        this.length = length;
        this.segmentTime = segmentTime;
        this.speed = speed;
        this.turnType = turnType;
        this.skipTurn = skipTurn;
        this.turnAngle = turnAngle;
        this.types = types;
        this.pointTypes = pointTypes;
        this.names = names;
    }

    toObject() {
        const {
            id,
            length,
            segmentTime,
            speed,
            turnType,
            skipTurn,
            turnAngle,
            types,
            pointTypes,
            names,
        } = this;
        return {
            attributes: {
                id,
                length,
                segmentTime,
                speed,
                turnType,
                skipTurn,
                turnAngle,
                types,
                pointTypes,
                names
            }
        };
    }

}

module.exports = RouteSegment;
