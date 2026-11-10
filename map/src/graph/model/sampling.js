export function hasValue(point) {
    return Number.isFinite(point.y);
}

export function sampleSeries(series, maxPoints) {
    const valued = series.filter(hasValue);
    const step = Math.max(1, Math.floor(valued.length / maxPoints));

    return valued.filter((_, i) => i % step === 0);
}
