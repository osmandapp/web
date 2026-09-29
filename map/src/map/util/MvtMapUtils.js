import L from 'leaflet';

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

export function getMvtTileStats(maplibreMap, map, tileStatsCache) {
    const viewport = map.getPixelBounds();
    const worldSize = map.options.crs.scale(map.getZoom());
    const tiles = new Map();
    let zoom = null;
    // MapLibre 5.24 internals: exclude canvas padding and count full, HTTP-decompressed MVT buffers.
    for (const [source, manager] of Object.entries(maplibreMap.style.tileManagers)) {
        if (!manager.used || manager.getSource().type !== 'vector') {
            continue;
        }
        for (const id of manager.getIds()) {
            const tile = manager.getTileByID(id);
            const { canonical, wrap } = tile.tileID;
            const { z, x, y } = canonical;
            const size = worldSize / 2 ** z;
            const min = L.point((x + wrap * 2 ** z) * size, y * size);
            if (viewport.overlaps(L.bounds(min, min.add([size, size])))) {
                zoom = Math.max(zoom ?? z, z);
                // World copies share the same payload; missing data must not appear as zero bytes.
                tiles.set(`${source}/${z}/${x}/${y}`, tile);
            }
        }
    }

    const stats = [...tiles.values()].map((tile) => getMvtTileDataStats(tile, tileStatsCache));

    return {
        count: tiles.size,
        bytes: stats.reduce((sum, tile) => sum + tile.bytes, 0),
        features: stats.reduce((sum, tile) => sum + tile.features, 0),
        vertices: stats.reduce((sum, tile) => sum + tile.vertices, 0),
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

function getMvtTileDataStats(tile, cache) {
    const data = tile.latestRawTileData;
    const cached = data && cache.get(data);
    if (cached) {
        return cached;
    }
    const stats = { bytes: data?.byteLength ?? NaN, features: NaN, vertices: NaN };
    const layers = data && tile.latestFeatureIndex?.loadVTLayers();
    if (!layers) {
        return stats;
    }
    stats.features = 0;
    stats.vertices = 0;
    for (const layer of Object.values(layers)) {
        stats.features += layer.length;
        for (let i = 0; i < layer.length; i++) {
            const feature = layer.feature(i);
            for (const line of feature.loadGeometry()) {
                stats.vertices += line.length;
                // ClosePath repeats the first point; it does not add a vertex to the MVT payload.
                if (
                    feature.type === 3 &&
                    line.length > 1 &&
                    line[0].x === line[line.length - 1].x &&
                    line[0].y === line[line.length - 1].y
                ) {
                    stats.vertices--;
                }
            }
        }
    }
    cache.set(data, stats);

    return stats;
}
