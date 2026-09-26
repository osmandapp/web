import React, { useContext } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import L from 'leaflet';
import MapContext from '../../context/MapContext';
import { isMvtTileURL } from '../../map/layers/MvtLayerConfig';
import SimpleText from '../../frame/components/other/SimpleText';
import SimpleItemWithSwitch from '../../frame/components/items/SimpleItemWithSwitch';
import ActionIconBtn from '../../frame/components/btns/ActionIconBtn';
import { ReactComponent as AddIcon } from '../../assets/icons/ic_action_add_outlined.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/ic_action_remove_outlined.svg';
import { ReactComponent as AddActiveIcon } from '../../assets/icons/ic_action_add_filled.svg';
import { ReactComponent as RemoveActiveIcon } from '../../assets/icons/ic_action_remove_filled.svg';

export function setMapStyleDetailShift(maplibreMap, style, shift) {
    style.layers.forEach((layer) => {
        if (layer.minzoom !== undefined && maplibreMap.getLayer(layer.id)) {
            const minzoom = Math.max(0, Math.min(24, layer.minzoom - shift));
            maplibreMap.setLayerZoomRange(layer.id, minzoom, layer.maxzoom);
        }
    });
}

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
    const zoomShifts = [
        { id: 'data-zoom-shift', name: 'Data zoom shift', value: 0 },
        {
            id: 'style-detail-shift',
            name: 'Style details (minZoom)',
            value: mtx.mvtTweaks.styleDetailShift,
            loading: mtx.mvtStyleUpdating,
            onChange: (delta) => {
                mtx.setMvtStyleUpdating(true);
                mtx.setMvtTweaks((prev) => ({
                    ...prev,
                    styleDetailShift: Math.max(-3, Math.min(3, prev.styleDetailShift + delta)),
                }));
            },
        },
    ];

    return (
        <>
            <SimpleText
                id="se-mvt-tile-stats"
                text={
                    <Typography component="div" align="center">
                        Size <strong>{size} MB</strong>
                        {` (${mtx.mvtTileStats?.count ?? '—'} tiles, map z${mtx.mvtTileStats?.mapZoom ?? '—'}, mvt z${mtx.mvtTileStats?.zoom ?? '—'})`}
                    </Typography>
                }
                maxLines={1}
            />
            {zoomShifts.map(({ id, name, value, loading, onChange }) => (
                <SimpleText
                    key={id}
                    id={`se-mvt-${id}`}
                    text={
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography>{name}</Typography>
                                {loading && <CircularProgress size={16} aria-label="Redrawing style" />}
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <ActionIconBtn
                                    aria-label={`Decrease ${name}`}
                                    disabled={value <= -3}
                                    onClick={onChange ? () => onChange(-1) : undefined}
                                    icon={<RemoveIcon />}
                                    activeIcon={<RemoveActiveIcon />}
                                />
                                <Typography>{value}</Typography>
                                <ActionIconBtn
                                    aria-label={`Increase ${name}`}
                                    disabled={value >= 3}
                                    onClick={onChange ? () => onChange(1) : undefined}
                                    icon={<AddIcon />}
                                    activeIcon={<AddActiveIcon />}
                                />
                            </Stack>
                        </Stack>
                    }
                />
            ))}
            <SimpleItemWithSwitch
                id="se-mvt-fractional-zoom"
                text="Enable fractional zoom"
                checked={mtx.mvtTweaks.fractionalZoom}
                onChange={() => mtx.setMvtTweaks((prev) => ({ ...prev, fractionalZoom: !prev.fractionalZoom }))}
            />
        </>
    );
}
