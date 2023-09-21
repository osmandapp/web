export function osrmToFeaturesCollection({ osrm, style = {} }) {
    /*
        convert OSRM routes[] to features[] "LineString"
        convert OSRM legs[].steps[] to features[] "Point" (OSRM's turns)
        convert OSRM waypoints[] to features[] "Point" (OSRM's start-end)
        convert OSRM duration/distance to properties

        now support only 1st of routes[]
    */
    const features = [];

    const cap = (s) => s && s[0].toUpperCase() + s.slice(1);

    const maneuver = (s) => {
        // imperative
        const type = cap(s?.maneuver?.type ?? ''); // Turn
        const modifier = cap(s?.maneuver?.modifier ?? ''); // Left

        // target
        const name = s?.name ?? ''; // Street
        const ref = s?.ref ? ` (${s.ref})` : ''; // (REF)

        // go
        const distance = s?.distance ?? '';

        const imperative = type + ' ' + modifier;
        const target = name ? 'to ' + name + ' ' + ref : '';
        const go = distance > 0 ? 'and go ' + distance + ' meters' : '';

        return `${imperative} ${target} ${go}`; // Turn Left to Street and go 621 meters
    };

    osrm?.routes?.forEach((r) => {
        // parse geo
        features.push({
            type: 'Feature',
            geometry: r.geometry,
            properties: {
                overall: {
                    time: r.duration,
                    distance: r.distance,
                },
            },
            style,
        });
        // parse turns
        r.legs?.forEach((l) => {
            l.steps?.forEach((s) => {
                features.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: s.maneuver?.location,
                    },
                    properties: {
                        description: maneuver(s),
                    },
                });
            });
        });
    });

    // parse points (really need?)
    osrm?.waypoints?.forEach((w) => {
        features.push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: w.location,
            },
            properties: {
                description: w.name,
            },
        });
    });

    return { type: 'FeatureCollection', features };
}
