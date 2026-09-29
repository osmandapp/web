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

export function getMvtTileStats(maplibreMap, map) {
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
                tiles.set(`${source}/${z}/${x}/${y}`, tile.latestRawTileData?.byteLength ?? NaN);
            }
        }
    }

    return {
        count: tiles.size,
        bytes: [...tiles.values()].reduce((sum, size) => sum + size, 0),
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
