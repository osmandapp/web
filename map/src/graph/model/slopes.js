const SLOPE_STEP = 10; //m
const MAX_SLOPE_POINTS = 10000;

const FORWARD_DIFFERENCE_POINTS = 2;

const SMOOTHING_ALPHA = 0.3;

export function computeSlopes(profile) {
    const withElevation = profile.filter((p) => p.elevation !== null);
    if (withElevation.length === 0) {
        return null;
    }
    const totalDistance = profile.at(-1).distance;
    const step = slopeStep(totalDistance, profile.length);
    const values = smooth(slopesOf(interpolate(withElevation, totalDistance, step), step));
    const nearest = nearestProfileIndexes(profile, values.length, step);
    const grid = values.map((slope, k) => ({ distance: k * step, slope, index: nearest[k] }));

    return {
        step,
        grid,
        pointSlopes: profile.map((p) => values[Math.min(Math.floor(p.distance / step), values.length - 1)]),
    };
}

function slopeStep(totalDistance, pointsCount) {
    let step = SLOPE_STEP;
    let l = 10;
    while (l > 0 && totalDistance / step > MAX_SLOPE_POINTS) {
        step = Math.max(step, totalDistance / (pointsCount * l--));
    }

    return step;
}

function interpolate(points, totalDistance, step) {
    const count = Math.floor(totalDistance / step) + 1;
    const heights = [points[0].elevation];
    let next = 0;
    for (let k = 1; k < count; k++) {
        const x = k * step;
        while (next < points.length - 1 && x > points[next].distance) {
            next++;
        }
        const px = next === 0 ? 0 : points[next - 1].distance;
        const py = next === 0 ? points[0].elevation : points[next - 1].elevation;
        heights[k] = py + ((points[next].elevation - py) / (points[next].distance - px)) * (x - px);
    }

    return heights;
}

function slopesOf(heights, step) {
    return heights.map((height, k) => {
        const slope =
            k < FORWARD_DIFFERENCE_POINTS
                ? ((-1.5 * height + 2.0 * heights[k + 1] - 0.5 * heights[k + 2]) * 100) / step
                : ((0.5 * heights[k - 2] - 2.0 * heights[k - 1] + 1.5 * height) * 100) / step;

        return isNaN(slope) ? 0 : Math.trunc(slope * 100) / 100;
    });
}

function smooth(values) {
    let previous = values[0];

    return values.map((value) => {
        previous = SMOOTHING_ALPHA * value + (1 - SMOOTHING_ALPHA) * previous;

        return previous;
    });
}

function nearestProfileIndexes(profile, count, step) {
    const indexes = [];
    let i = 0;
    for (let k = 0; k < count; k++) {
        const x = k * step;
        while (i < profile.length - 1 && Math.abs(profile[i + 1].distance - x) <= Math.abs(profile[i].distance - x)) {
            i++;
        }
        indexes.push(i);
    }

    return indexes;
}
