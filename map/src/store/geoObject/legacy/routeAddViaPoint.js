import Utils from '../../../util/Utils';

/**
 * Add (Shift/Push/Insert) new Inter-point.
 */

export function routeAddViaPoint({ ll } = {}) {
    /*

    TODO:

        1. start is the nearest point = add 1st inter

        2. end is the nearest point = add last inter

        3. inter is the nearest point && start is closer to this inter
            compare distance start<->inter vs start<->new
                if new is closer to start, add before inter
                if inter is closer to start, add after inter

        4. inter is the nearest point && end is closer to this inter
            compare distance end<->inter vs end<->new
                if new is closer to end, add after inter
                if inter is closer to end, add before inter
    */

    const startPoint = this.getOption('route.points.start');
    const finishPoint = this.getOption('route.points.finish');
    const viaPoints = this.getOption('route.points.viaPoints');

    let newViaPoints = Object.assign([], viaPoints);
    let minInd = -1;

    if (viaPoints.length > 0) {
        let minDist = dist(finishPoint, ll) + dist(viaPoints[viaPoints.length - 1], ll);
        for (let i = 0; i < viaPoints.length; i++) {
            let dst = dist(i === 0 ? startPoint : viaPoints[i - 1], ll) + dist(viaPoints[i], ll);
            if (dst < minDist) {
                minInd = i;
                minDist = dst;
            }
        }
    }
    if (minInd < 0) {
        newViaPoints.push(ll);
    } else {
        newViaPoints.splice(minInd, 0, ll);
    }

    this.setOption('route.points.viaPoints', newViaPoints);
}

function dist(a1, a2) {
    return Utils.getDistance(a1.lat, a1.lon, a2.lat, a2.lon);
}
