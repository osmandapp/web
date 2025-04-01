export function directionFrom(lat, lon, ctx) {
    if (lat && lon) {
        ctx.routeObject.setOption('route.points.start', {
            lat: Number(lat),
            lng: Number(lon),
        });
    }
}

export function directionTo(lat, lon, ctx) {
    if (lat && lon) {
        ctx.routeObject.setOption('route.points.finish', {
            lat: Number(lat),
            lng: Number(lon),
        });
    }
}
