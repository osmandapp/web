import React, { useContext } from 'react';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isMvtTileURL } from '../../map/layers/MvtLayerConfig';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleText from '../../frame/components/other/SimpleText';

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

    return { count: tiles.size, bytes: [...tiles.values()].reduce((sum, size) => sum + size, 0), zoom };
}

export default function MvtTweaks() {
    const mtx = useContext(MapContext);
    if (!isMvtTileURL(mtx.tileURL)) {
        return null;
    }
    const size = Number.isFinite(mtx.mvtTileStats?.bytes) ? (mtx.mvtTileStats.bytes / 1024 ** 2).toFixed(2) : '—';

    return (
        <>
            <SubTitleMenu text="MVT tweaks" />
            <SimpleText
                id="se-mvt-tile-stats"
                text={`Size: ${size} MB (${mtx.mvtTileStats?.count ?? '—'} tiles, z${mtx.mvtTileStats?.zoom ?? '—'})`}
                maxLines={1}
            />
        </>
    );
}
