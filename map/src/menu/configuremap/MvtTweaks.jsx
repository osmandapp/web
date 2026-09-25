import React, { useContext } from 'react';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isMvtTileURL } from '../../map/layers/MvtLayerConfig';
import SubTitleMenu from '../../frame/components/titles/SubTitleMenu';
import SimpleText from '../../frame/components/other/SimpleText';
import SimpleItemWithSwitch from '../../frame/components/items/SimpleItemWithSwitch';

export function enableMvtIntegerZoom(map) {
    const zoomSnap = map.options.zoomSnap;
    map.stop();
    map.options.zoomSnap = 1;
    map.setZoom(Math.trunc(map.getZoom()), { animate: false });

    const onWheel = (event) => {
        L.DomEvent.stop(event);
        const delta = L.DomEvent.getWheelDelta(event);
        if (delta) {
            map.setZoomAround(map.mouseEventToContainerPoint(event), map.getZoom() + Math.sign(delta), {
                animate: false,
            });
        }
    };
    L.DomEvent.on(map.getContainer(), 'wheel', onWheel);

    return () => {
        L.DomEvent.off(map.getContainer(), 'wheel', onWheel);
        map.options.zoomSnap = zoomSnap;
    };
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
    map.on('zoom', update);
    update();

    return () => map.off('zoom', update);
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
                text={`Size: ${size} MB (${mtx.mvtTileStats?.count ?? '—'} tiles, map z${mtx.mvtTileStats?.mapZoom ?? '—'}, mvt z${mtx.mvtTileStats?.zoom ?? '—'})`}
                maxLines={1}
            />
            <SimpleItemWithSwitch
                id="se-mvt-fractional-zoom"
                text="Enable fractional zoom"
                checked={mtx.mvtTweaks.fractionalZoom}
                onChange={() => mtx.setMvtTweaks((prev) => ({ ...prev, fractionalZoom: !prev.fractionalZoom }))}
            />
        </>
    );
}
