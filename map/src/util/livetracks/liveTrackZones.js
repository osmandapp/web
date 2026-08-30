// Elevation-zone analysis for a live track: splits a participant's point list into
// uphill / downhill / flat intervals using Ramer–Douglas–Peucker simplification of the
// elevation profile. Kept out of the UI so it can be reused and unit-tested.
import { getDistance } from '../Utils';

// Colors per zone type — shared with the UI (interval icon fill).
export const ZONE_COLORS = { UPHILL: '#d35400', DOWNHILL: '#27ae60', FLAT: '#7f8c8d' };

// Ramer–Douglas–Peucker on the (cumulative distance, elevation) profile.
function simplifyRDP(pts, epsilon) {
    if (pts.length <= 2) return pts;
    let dmax = 0;
    let index = 0;
    const end = pts.length - 1;
    const x0 = pts[0].cumDist;
    const y0 = pts[0].ele;
    const x1 = pts[end].cumDist;
    const y1 = pts[end].ele;
    for (let i = 1; i < end; i++) {
        const px = pts[i].cumDist;
        const py = pts[i].ele;
        const yLine = x1 === x0 ? y0 : y0 + ((y1 - y0) * (px - x0)) / (x1 - x0);
        const d = Math.abs(py - yLine);
        if (d > dmax) {
            index = i;
            dmax = d;
        }
    }
    if (dmax > epsilon) {
        const left = simplifyRDP(pts.slice(0, index + 1), epsilon);
        const right = simplifyRDP(pts.slice(index), epsilon);
        return left.slice(0, -1).concat(right);
    }

    return [pts[0], pts[end]];
}

// Splits `locations` (newest-first) into elevation zones. minEleDiff (m) is both the RDP
// epsilon and the threshold to classify a segment as UPHILL/DOWNHILL vs FLAT.
export function computeZones(locations, minEleDiff = 7) {
    if (!locations || locations.length < 2) return [];
    const N = locations.length;
    const track = [];
    for (let i = 0; i < N; i++) {
        const loc = locations[N - 1 - i];
        track.push({
            origIdx: N - 1 - i,
            lat: loc.lat,
            lon: loc.lon,
            ele: loc.ele || 0,
            kmh: loc.speed != null ? loc.speed * 3.6 : 0,
            time: loc.time,
        });
    }
    track[0].cumDist = 0;
    for (let i = 1; i < track.length; i++) {
        track[i].cumDist =
            track[i - 1].cumDist + getDistance(track[i - 1].lat, track[i - 1].lon, track[i].lat, track[i].lon);
    }
    const filtered = [track[0]];
    for (let i = 1; i < track.length - 1; i++) {
        const prev = track[i - 1];
        const curr = track[i];
        const next = track[i + 1];
        const dx1 = curr.cumDist - prev.cumDist;
        const dy1 = curr.ele - prev.ele;
        const dx2 = next.cumDist - curr.cumDist;
        const dy2 = next.ele - curr.ele;
        if (dx1 < 1 || dx2 < 1) {
            filtered.push(curr);
            continue;
        }
        const isPeak = dy1 > 0 && dy2 < 0;
        const isValley = dy1 < 0 && dy2 > 0;
        if ((isPeak || isValley) && Math.abs(dy1 / dx1) > 0.7 && Math.abs(dy2 / dx2) > 0.7) continue;
        filtered.push(curr);
    }
    filtered.push(track.at(-1));
    const extremums = simplifyRDP(filtered, minEleDiff);
    const zones = [];
    for (let i = 1; i < extremums.length; i++) {
        const startPt = extremums[i - 1];
        const endPt = extremums[i];
        const dEle = endPt.ele - startPt.ele;
        let type = 'FLAT';
        if (dEle >= minEleDiff) type = 'UPHILL';
        else if (dEle <= -minEleDiff) type = 'DOWNHILL';
        const actualStartIdx = Math.max(startPt.origIdx, endPt.origIdx);
        const actualEndIdx = Math.min(startPt.origIdx, endPt.origIdx);
        const dist = endPt.cumDist - startPt.cumDist;
        let maxSpeed = 0;
        for (let j = actualEndIdx; j <= actualStartIdx; j++) {
            const kmh = (locations[j]?.speed ?? 0) * 3.6;
            if (kmh > maxSpeed) maxSpeed = kmh;
        }
        const duration = Math.abs((locations[actualEndIdx]?.time ?? 0) - (locations[actualStartIdx]?.time ?? 0));
        const last = zones.at(-1);
        if (last?.type === type) {
            last.endIdx = actualEndIdx;
            last.distance += dist;
            last.duration += duration;
            last.eleDiff += dEle;
            if (maxSpeed > last.maxSpeed) last.maxSpeed = maxSpeed;
            last.avgSpeed = last.duration > 0 ? (last.distance / (last.duration / 1000)) * 3.6 : 0;
        } else {
            const avgSpeed = duration > 0 ? (dist / (duration / 1000)) * 3.6 : 0;
            zones.push({
                type,
                startIdx: actualStartIdx,
                endIdx: actualEndIdx,
                distance: dist,
                duration,
                eleDiff: dEle,
                maxSpeed,
                avgSpeed,
            });
        }
    }

    return zones;
}
