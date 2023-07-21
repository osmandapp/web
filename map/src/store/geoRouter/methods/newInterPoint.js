import Utils from '../../../util/Utils';

/**
 * Add (Shift/Push/Insert) new Inter-point.
 * Temporarly use ctx to access variables/setters.
 * Later, startPoint, endPoint, interPoints, etc will be moved into class.
 */

export function newInterPoint({ ctx, ll } = {}) {
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

    let newInterPoints = Object.assign([], ctx.interPoints);
    let minInd = -1;

    if (ctx.interPoints.length > 0) {
        let minDist = dist(ctx.endPoint, ll) + dist(ctx.interPoints[ctx.interPoints.length - 1], ll);
        for (let i = 0; i < ctx.interPoints.length; i++) {
            let dst = dist(i === 0 ? ctx.startPoint : ctx.interPoints[i - 1], ll) + dist(ctx.interPoints[i], ll);
            if (dst < minDist) {
                minInd = i;
                minDist = dst;
            }
        }
    }
    if (minInd < 0) {
        newInterPoints.push(ll);
    } else {
        newInterPoints.splice(minInd, 0, ll);
    }
    ctx.setInterPoints(newInterPoints);
}

function dist(a1, a2) {
    return Utils.getDistance(a1.lat, a1.lon, a2.lat, a2.lon);
    // // distance is not correct
    // return (a1.lat - a2.lat) * (a1.lat - a2.lat) +
    //     (a1.lng - a2.lng) * (a1.lng - a2.lng);
}
