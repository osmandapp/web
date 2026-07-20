import { useEffect, useMemo } from 'react';
import {
    FINAL_POI_ICON_NAME,
    ICON_KEY_NAME,
    POI_ID,
    TYPE_OSM_TAG,
    TYPE_OSM_VALUE,
} from '../../../infoblock/components/wpt/WptTagsProvider';
import {
    EXPLORE_PHOTO_ICON_SIZE,
    applySelectedPin,
    applySelectedPins,
    applyHoverOutline,
    applyDirectionPin,
    resetSelectedPin,
} from '../../../map/util/MarkerSelectionService';
import { isOutsideVisibleMap } from '../../../map/layers/MapStateLayer';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE, getIconNameForPoiType } from '../../../manager/PoiManager';
import { getIconUrlByName } from '../../../map/markers/MarkerOptions';
import { iconPathMap } from '../../../map/util/MapManager';
import { FAVORITE_FILE_TYPE } from '../../../manager/FavoritesManager';
import { TRANSPORT_STOPS_LAYER_ID } from '../../../map/layers/TransportStopsLayer';
import { SEARCH_LAYER_ID } from '../../../manager/GlobalManager';

const EXPLORE_MAIN_MARKER_PIN_BACKGROUND = '#ffffff';
const HOVER_OUTLINE_GAP = 6;

function extractLatlng(selectedWptId, type) {
    const obj = selectedWptId?.obj;
    if (!obj) return null;

    if (type === FAVORITE_FILE_TYPE) return obj.getLatLng() ?? null;
    if (type === TRANSPORT_STOPS_LAYER_ID) return obj.getLatLng?.() ?? null;

    const coords = obj.geometry?.coordinates;
    if (coords?.length >= 2) return { lat: coords[1], lng: coords[0] };

    return null;
}

function escapeHtmlAttr(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function iconHtmlFromIconName(finalIconName) {
    if (!finalIconName) return null;
    const url =
        iconPathMap[finalIconName] || getIconUrlByName('poi', finalIconName) || getIconUrlByName('map', finalIconName);
    return url ? `<image href="${url}" />` : null;
}

const loadedPhotoUrls = new Set();

/** Add favorite from map/POI, or add track waypoint (context menu / track) — preview pin until save/cancel.
 * Not when editing an existing wpt (`editWpt`). */
function isAddFavoritePreviewActive(ctx) {
    return !!(ctx.addFavorite?.location && !ctx.addFavorite?.editWpt);
}

function resolveLayers(getLayers, layersProp) {
    if (typeof getLayers === 'function') return getLayers();
    if (Array.isArray(layersProp)) return layersProp;
    return null;
}

function findLayerById(layers, id) {
    if (!layers?.length || id == null) return null;
    return layers.find((l) => layerMatchesIds(l, [id])) ?? null;
}

function findLayersByIds(layers, ids) {
    if (!layers?.length || !ids?.length) return [];
    return layers.filter((l) => layerMatchesIds(l, ids));
}

function layerMatchesIds(layer, ids) {
    const opts = layer?.options ?? {};
    const layerIds = [opts.idObj, opts[POI_ID], opts.hoverIdObj, ...(opts.hoverIdObjs ?? [])].filter(
        (id) => id != null
    );
    return layerIds.some((id) => ids.includes(id));
}

export function useSelectMarkerOnMap({ ctx, getLayers, layers: layersProp, type, map, zoom, move }) {
    const selectedObjId = ctx.selectedWpt?.id ?? null;

    const hoverId =
        ctx.selectedWptId?.type === type &&
        ctx.selectedWptId?.show !== false &&
        ctx.selectedWptId?.id !== -1 &&
        ctx.selectedWptId?.id != null
            ? ctx.selectedWptId.id
            : null;
    const hoverIds = useMemo(
        () => (hoverId ? (ctx.selectedWptId?.ids ?? [hoverId]) : []),
        [hoverId, ctx.selectedWptId?.ids]
    );

    useEffect(() => {
        if (zoom === undefined || move === undefined) return;

        if (ctx.selectedWpt?.id != null) return;
        if (ctx.selectedWptId?.type !== type || ctx.selectedWptId?.show !== true) return;

        ctx.setSelectedWptId((prev) => (prev ? { ...prev, show: false } : prev));
    }, [type, zoom, move]);

    // ========== SELECTED PIN ==========
    useEffect(() => {
        if (!map) return;

        if (ctx.addFavorite?.editWpt && ctx.exitGuards.wptEdit?.hasChanges) {
            return;
        }

        if (!selectedObjId) {
            if (isAddFavoritePreviewActive(ctx)) {
                return;
            }
            resetSelectedPin({ ctx, map });
            return;
        }

        // Skip if the correct pin is already on the map
        const existingPin = ctx.selectedCreatedLayerRef?.current;
        if (existingPin && map.hasLayer(existingPin) && existingPin.options?.idObj === selectedObjId) {
            return;
        }

        const found = findLayerById(resolveLayers(getLayers, layersProp), selectedObjId);
        if (found) {
            applyPinForLayer(found, true);
            return;
        }

        if (type === SEARCH_LAYER_ID) {
            const latlng = extractLatlng(ctx.selectedWptId, type) ?? ctx.selectedWpt?.poi?.latlng ?? null;
            if (latlng) {
                const pin = applySelectedPin({
                    ctx,
                    map,
                    layer: null,
                    latlng,
                    markerData: resolveHoverMarkerData(null),
                    isSelection: true,
                });
                if (pin) {
                    pin.options.idObj = selectedObjId;
                }
            }
        }
    }, [
        selectedObjId,
        type,
        getLayers,
        layersProp,
        ctx.addFavorite?.location,
        ctx.addFavorite?.editWpt,
        ctx.selectedWpt,
    ]);

    // ========== HOVER PIN ==========
    useEffect(() => {
        if (!map || selectedObjId) return;

        if (!hoverId) {
            if (isAddFavoritePreviewActive(ctx)) {
                return;
            }
            resetSelectedPin({ ctx, map });
            return;
        }

        if (type === TRANSPORT_STOPS_LAYER_ID && ctx.selectedWptId?.hoverFromMap) {
            resetSelectedPin({ ctx, map });
            return;
        }

        const layers = resolveLayers(getLayers, layersProp);
        const found = findLayerById(layers, ctx.selectedWptId?.hoverLayerId ?? hoverId);
        const foundLayers = findLayersByIds(layers, hoverIds);

        // Hover originating on the map: show an outline ring around the point instead of
        // replacing the marker with a full selected pin. List hover keeps the pin behavior below.
        if (ctx.selectedWptId?.hoverFromMap) {
            // Secondary (simple dot) points across all layers get no hover outline.
            if (found?.options?.simple) {
                resetSelectedPin({ ctx, map });
                return;
            }

            const latlng =
                ctx.selectedWptId?.hoverLatlng ?? found?.getLatLng() ?? extractLatlng(ctx.selectedWptId, type);
            if (latlng) {
                applyHoverOutline({ ctx, map, latlng, ...resolveHoverOutlineStyle(found) });
            } else {
                resetSelectedPin({ ctx, map });
            }
            return;
        }

        const latlng = found?.getLatLng() ?? extractLatlng(ctx.selectedWptId, type);

        if (type === SEARCH_LAYER_ID && latlng && isOutsideVisibleMap({ ctx, map, latlng })) {
            applyDirectionPin({ ctx, map, latlng, markerData: resolveHoverMarkerData(found) });
            return;
        }

        if (found) {
            if (type === SEARCH_LAYER_ID && foundLayers.length > 1) {
                applyPinsForLayers(foundLayers);
            } else {
                applyPinForLayer(found, false);
            }
        } else if (latlng) {
            applyHoverPinFallback(latlng);
        } else if (type === TRANSPORT_STOPS_LAYER_ID) {
            resetSelectedPin({ ctx, map });
        }
    }, [
        hoverId,
        hoverIds,
        selectedObjId,
        type,
        getLayers,
        layersProp,
        ctx.addFavorite?.location,
        ctx.addFavorite?.editWpt,
    ]);

    // Resolves the outline ring shape/color/size from the hovered layer (falls back to selectedWptId markerOptions).
    function resolveHoverOutlineStyle(layer) {
        const opts = layer?.options ?? {};
        const markerOpts = ctx.selectedWptId?.markerOptions ?? {};
        const isPhoto = !!opts.photoUrl;
        const isSimpleDot = !!opts.simple;
        const color = (isSimpleDot ? opts.fillColor : opts.color) ?? markerOpts.color ?? DEFAULT_POI_COLOR;
        // Photo markers (e.g. large Explore images) are round — wrap them with a circle regardless of poi shape.
        const shape = isPhoto ? 'circle' : (opts.background ?? markerOpts.background ?? DEFAULT_POI_SHAPE);

        return { shape, color, size: measureMarkerSize(layer) };
    }

    // Diameter to wrap the marker with: its rendered size plus a small gap (clamped to a minimum inside the icon builder).
    function measureMarkerSize(layer) {
        const el = layer?.getElement?.();
        const rendered = el ? Math.max(el.offsetWidth, el.offsetHeight) : 0;
        if (rendered > 0) {
            return rendered + HOVER_OUTLINE_GAP;
        }

        return 0;
    }

    // Builds markerData from layer options
    function applyPinForLayer(layer, isSelection) {
        const latlng = layer.getLatLng();
        if (!latlng) return;

        // Skip if this layer is already the active pin
        const currentRef = isSelection ? ctx.selectedCreatedLayerRef?.current : ctx.selectedUpdatedLayerRef?.current;
        const currentRefs = Array.isArray(currentRef) ? currentRef : currentRef ? [currentRef] : [];
        if (currentRefs.includes(layer)) return;

        const photoUrl = layer.options?.photoUrl;
        if (photoUrl) {
            applyPhotoPin(layer, latlng, photoUrl, isSelection);
            return;
        }

        const markerData = buildMarkerData(layer, isSelection, type);
        fillSimpleMarkerIcon(markerData, layer);

        applySelectedPin({ ctx, map, layer, latlng, markerData, isSelection });
    }

    function applyPinsForLayers(layers) {
        const items = layers
            .filter((layer) => layer?.getLatLng?.())
            .map((layer) => {
                const markerData = buildMarkerData(layer, false, type);
                fillSimpleMarkerIcon(markerData, layer);
                return { layer, markerData };
            });
        applySelectedPins({ ctx, map, items });
    }

    function fillSimpleMarkerIcon(markerData, layer) {
        if (markerData.iconHtml || !layer.options?.simple) return;
        const props = ctx.selectedWptId?.obj?.properties;
        markerData.iconHtml = iconHtmlFromIconName(
            props?.[FINAL_POI_ICON_NAME] ??
                getIconNameForPoiType({
                    iconKeyName: props?.[ICON_KEY_NAME],
                    typeOsmTag: props?.[TYPE_OSM_TAG],
                    typeOsmValue: props?.[TYPE_OSM_VALUE],
                })
        );
    }

    function photoIconHtml(photoUrl) {
        return `<img src="${escapeHtmlAttr(photoUrl)}" width="${EXPLORE_PHOTO_ICON_SIZE}" height="${EXPLORE_PHOTO_ICON_SIZE}" style="width:${EXPLORE_PHOTO_ICON_SIZE}px;height:${EXPLORE_PHOTO_ICON_SIZE}px;object-fit:cover;border-radius:50%;" />`;
    }

    function applyPhotoPin(layer, latlng, photoUrl, isSelection) {
        const markerData = {
            color: EXPLORE_MAIN_MARKER_PIN_BACKGROUND,
            iconHtml: photoIconHtml(photoUrl),
        };
        applySelectedPin({ ctx, map, layer, latlng, markerData, isSelection });

        if (!loadedPhotoUrls.has(photoUrl)) {
            const img = new Image();
            img.onload = () => loadedPhotoUrls.add(photoUrl);
            img.src = photoUrl;
        }
    }

    function resolveHoverMarkerData(layer) {
        const photoUrl = layer?.options?.photoUrl ?? ctx.selectedWptId?.photoUrl;
        if (photoUrl) {
            return { color: EXPLORE_MAIN_MARKER_PIN_BACKGROUND, iconHtml: photoIconHtml(photoUrl) };
        }

        if (layer) {
            const markerData = buildMarkerData(layer, false, type);
            if (!markerData.iconHtml && layer.options?.simple) {
                const props = ctx.selectedWptId?.obj?.properties;
                markerData.iconHtml = iconHtmlFromIconName(
                    props?.[FINAL_POI_ICON_NAME] ??
                        getIconNameForPoiType({
                            iconKeyName: props?.[ICON_KEY_NAME],
                            typeOsmTag: props?.[TYPE_OSM_TAG],
                            typeOsmValue: props?.[TYPE_OSM_VALUE],
                        })
                );
            }
            return markerData;
        }

        const markerOpts = ctx.selectedWptId?.markerOptions ?? {};
        const props = ctx.selectedWptId?.obj?.properties;
        const iconHtml =
            markerOpts.iconHtml ??
            iconHtmlFromIconName(
                props?.[FINAL_POI_ICON_NAME] ??
                    getIconNameForPoiType({
                        iconKeyName: props?.[ICON_KEY_NAME],
                        typeOsmTag: props?.[TYPE_OSM_TAG],
                        typeOsmValue: props?.[TYPE_OSM_VALUE],
                    })
            );
        // Only apply white filter when icon came from URL (iconHtmlFromIconName), not when caller passed custom iconHtml (e.g. favorites)
        const invertIcon = markerOpts.invertIcon ?? markerOpts.iconHtml == null;

        return {
            color: markerOpts.color ?? DEFAULT_POI_COLOR,
            background: markerOpts.background ?? DEFAULT_POI_SHAPE,
            iconHtml,
            invertIcon,
        };
    }

    function applyHoverPinFallback(latlng) {
        const photoUrl = ctx.selectedWptId?.photoUrl;
        if (photoUrl) {
            applyPhotoPin(null, latlng, photoUrl, false);
            return;
        }

        applySelectedPin({
            ctx,
            map,
            layer: null,
            latlng,
            markerData: resolveHoverMarkerData(null),
            isSelection: false,
        });
    }

    function buildMarkerData(layer, isSelection, layerType) {
        const isSimpleDot = !!layer.options?.simple;
        const isFavorites = layerType === FAVORITE_FILE_TYPE;
        const iconFromLayer = layer.options?.icon?.options?.html;

        let iconHtml;

        if (layerType === TRANSPORT_STOPS_LAYER_ID) {
            return {
                color: layer.options?.color,
                background: layer.options?.background,
                iconHtml: layer.options?.svg,
            };
        }

        if (isSimpleDot) {
            iconHtml = iconHtmlFromIconName(layer.options?.[FINAL_POI_ICON_NAME]) ?? '';
        } else if (isSelection) {
            if (isFavorites) {
                iconHtml = iconFromLayer ?? '';
            } else {
                iconHtml = layer.options?.svg ?? iconFromLayer ?? '';
            }
        } else {
            // hover
            if (isFavorites) {
                iconHtml = layer.options?.originalIcon?.options?.html ?? iconFromLayer ?? '';
            } else {
                iconHtml = layer.options?.svg ?? layer.options?.originalIcon?.options?.html ?? iconFromLayer ?? '';
            }
        }

        return {
            color: (isSimpleDot ? layer.options?.fillColor : layer.options?.color) ?? DEFAULT_POI_COLOR,
            background: layer.options?.background ?? DEFAULT_POI_SHAPE,
            iconHtml,
            invertIcon: isSimpleDot,
        };
    }
}
