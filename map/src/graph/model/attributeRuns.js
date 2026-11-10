export function routeSegments(roadPoints, routeTypes, distances) {
    const segments = [];
    roadPoints.forEach((point, from) => {
        const ext = point.segment?.ext;
        const length = Number(ext?.length);
        const to = from + length - 1;
        if (!ext?.types || !Number.isFinite(length) || length < 1 || to >= roadPoints.length) {
            return;
        }
        segments.push({
            from,
            to,
            length: distances[to] - distances[from],
            tags: segmentTags(ext.types, routeTypes),
        });
    });

    return segments;
}

export function attributeRuns(segments, valueOf, categoryOf) {
    const runs = [];
    segments.forEach((segment) => {
        const value = valueOf(segment.tags);
        const category = categoryOf(value);
        const last = runs.at(-1);
        if (last?.category === category) {
            last.length += segment.length;
            last.size += segment.to - segment.from;
        } else {
            runs.push({ category, value, from: segment.from, size: segment.to - segment.from, length: segment.length });
        }
    });

    return runs;
}

export function steepnessRuns(slopes, distances, classOf) {
    const runs = [];
    slopes.grid.forEach(({ distance, slope }) => {
        const category = classOf(slope);
        if (!category) {
            return;
        }
        const last = runs.at(-1);
        if (last?.category === category) {
            last.length += slopes.step;
        } else {
            runs.push({ category, value: category, from: pointBefore(distances, distance), length: slopes.step });
        }
    });
    runs.forEach((run, i) => {
        run.size = (runs[i + 1]?.from ?? distances.length - 1) - run.from;
    });

    return runs;
}

function segmentTags(types, routeTypes) {
    return Object.fromEntries(
        types
            .split(',')
            .map((type) => routeTypes?.[type])
            .filter(Boolean)
            .map(({ tag, value }) => [tag, value])
    );
}

function pointBefore(distances, distance) {
    return distances.findIndex((d, i) => distance >= d && i + 1 < distances.length && distance <= distances[i + 1]);
}
