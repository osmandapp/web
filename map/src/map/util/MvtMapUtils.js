const MAX_MVT_ZOOM = 24;

export function getMvtDataTileUrl(tileUrl, shift) {
    return shift ? `${tileUrl}${tileUrl.includes('?') ? '&' : '?'}shift=${shift}` : tileUrl;
}

export function setMapDataZoomShift(maplibreMap, sources, tileUrl, shift) {
    const url = getMvtDataTileUrl(tileUrl, shift);
    const source = maplibreMap.getSource('osm');
    if (source && source.tiles?.[0] !== url) {
        source.setTiles([url]);
    }
    sources.forEach((source) => {
        if (source.id === 'osm') {
            source.url = url;
        }
    });
}

export function setMapStyleDetailShift(maplibreMap, style, shift, minZoomIdFilter = '') {
    const filter = parseMinZoomIdFilter(minZoomIdFilter);
    style.layers.forEach((layer) => {
        if ((layer.minzoom !== undefined || layer.maxzoom !== undefined) && maplibreMap.getLayer(layer.id)) {
            const layerShift = filter?.test(layer.id) ? shift : 0;
            const [minzoom, maxzoom] = [layer.minzoom, layer.maxzoom].map((zoom) =>
                zoom === undefined ? undefined : Math.max(0, Math.min(MAX_MVT_ZOOM, zoom - layerShift))
            );
            maplibreMap.setLayerZoomRange(layer.id, minzoom, maxzoom);
        }
    });
}

export function watchMvtZoom(map, sources, setStats) {
    const update = () => {
        const mapZoom = Number(map.getZoom().toFixed(2));
        const zooms = sources.map((source) =>
            Math.max(source.minzoom, Math.min(source.maxzoom, Math.floor(source.getZoom())))
        );
        const zoom = zooms.length ? Math.max(...zooms) : null;
        setStats((stats) => (stats?.mapZoom === mapZoom && stats?.zoom === zoom ? stats : { ...stats, mapZoom, zoom }));
    };
    map.on('zoomend', update);
    update();

    return () => map.off('zoomend', update);
}

export function watchMvtTileTimings(maplibreMap) {
    const timings = new Map();
    const handleData = (event) => {
        if (event.source?.type !== 'vector') {
            return;
        }
        // MapLibre 5.x delivers vector Resource Timing on the sourcedata event's tile.
        for (const entry of event.resourceTiming ?? event.tile?.resourceTiming ?? []) {
            if (entry.entryType === 'resource') {
                const previous = timings.get(entry.name);
                if (!previous || entry.startTime >= previous.startTime) {
                    timings.set(entry.name, entry);
                }
            }
        }
    };
    maplibreMap.on('sourcedata', handleData);

    return { timings, stop: () => maplibreMap.off('sourcedata', handleData) };
}

export function getMvtTileStats(maplibreMap, map, sources, timings) {
    const viewport = map.getPixelBounds();
    const worldSize = map.options.crs.scale(map.getZoom());
    const tiles = new Map();
    let zoom = null;
    const mapZoom = maplibreMap.getZoom();
    const visibleSources = new Set(
        maplibreMap
            .getStyle()
            .layers.filter(
                (layer) =>
                    layer.layout?.visibility !== 'none' &&
                    (layer.minzoom === undefined || mapZoom >= layer.minzoom) &&
                    (layer.maxzoom === undefined || mapZoom < layer.maxzoom)
            )
            .map((layer) => layer.source)
    );
    // Use the Leaflet viewport to exclude MapLibre canvas padding.
    for (const source of sources) {
        if (!visibleSources.has(source.id) || mapZoom < source.minzoom) {
            continue;
        }
        const z = Math.max(source.minzoom, Math.min(source.maxzoom, Math.floor(mapZoom)));
        const n = 2 ** z;
        const size = worldSize / n;
        const minX = Math.floor(viewport.min.x / size);
        const maxX = Math.min(Math.ceil(viewport.max.x / size) - 1, minX + n - 1);
        const minY = Math.max(0, Math.floor(viewport.min.y / size));
        const maxY = Math.min(n - 1, Math.ceil(viewport.max.y / size) - 1);
        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                const tileX = ((x % n) + n) % n;
                const tileY = source.scheme === 'tms' ? n - y - 1 : y;
                const url = new URL(
                    source.url.replace('{z}', z).replace('{x}', tileX).replace('{y}', tileY),
                    window.location.href
                ).href;
                // World copies share the same payload; missing data must not appear as zero bytes.
                tiles.set(url, timings.get(url));
                zoom = Math.max(zoom ?? z, z);
            }
        }
    }

    const sizes = [...tiles.values()].map((entry) => {
        // Cross-origin responses without Timing-Allow-Origin hide sizes, including cache hits.
        const available = entry && (entry.responseStart > 0 || entry.decodedBodySize > 0 || entry.transferSize > 0);

        return {
            transferSize: available ? (entry.transferSize ?? NaN) : NaN,
            decodedBodySize: available ? (entry.decodedBodySize ?? NaN) : NaN,
        };
    });

    return {
        count: tiles.size,
        transferSize: sizes.reduce((sum, size) => sum + size.transferSize, 0),
        decodedBodySize: sizes.reduce((sum, size) => sum + size.decodedBodySize, 0),
        zoom,
        mapZoom: Number(map.getZoom().toFixed(2)),
    };
}

export function parseMinZoomIdFilter(pattern) {
    try {
        return new RegExp(pattern);
    } catch {
        return null;
    }
}
