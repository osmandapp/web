import { useEffect } from 'react';
import { FINAL_POI_ICON_NAME, ICON_KEY_NAME, POI_ID, TYPE_OSM_TAG, TYPE_OSM_VALUE } from '../../../infoblock/components/wpt/WptTagsProvider';
import { EXPLORE_PHOTO_ICON_SIZE, applySelectedPin, resetSelectedPin } from '../../../map/util/MarkerSelectionService';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE, getIconNameForPoiType } from '../../../manager/PoiManager';
import { getIconUrlByName } from '../../../map/markers/MarkerOptions';
import { FAVORITE_FILE_TYPE } from '../../../manager/FavoritesManager';

function extractLatlng(selectedWptId, type) {
    const obj = selectedWptId?.obj;
    if (!obj) return null;

    if (type === FAVORITE_FILE_TYPE) return obj.getLatLng() ?? null;

    const coords = obj.geometry?.coordinates;
    if (coords?.length >= 2) return { lat: coords[1], lng: coords[0] };

    return null;
}

function iconHtmlFromIconName(finalIconName) {
    if (!finalIconName) return null;
    const url = getIconUrlByName('poi', finalIconName) || getIconUrlByName('map', finalIconName);
    return url ? `<image href="${url}" />` : null;
}

const loadedPhotoUrls = new Set();

function resolveLayers(getLayers, layersProp) {
    if (typeof getLayers === 'function') return getLayers();
    if (Array.isArray(layersProp)) return layersProp;
    return null;
}

function findLayerById(layers, id) {
    if (!layers?.length || !id) return null;
    return (
        layers.find((l) => {
            const opts = l?.options ?? {};
            return opts.idObj === id || opts[POI_ID] === id;
        }) ?? null
    );
}

export function useSelectMarkerOnMap({ ctx, getLayers, layers: layersProp, type, map }) {
    const selectedObjId =
        ctx.selectedWpt?.wikidata?.properties?.id ??
        ctx.selectedWpt?.poi?.options[POI_ID] ??
        ctx.selectedWpt?.poi?.options?.idObj ??
        ctx.selectedWpt?.selectionId ??
        null;

    const hoverId =
        ctx.selectedWptId?.type === type &&
        ctx.selectedWptId?.show !== false &&
        ctx.selectedWptId?.id !== -1 &&
        ctx.selectedWptId?.id != null
            ? ctx.selectedWptId.id
            : null;

    // ========== SELECTED PIN ==========
    useEffect(() => {
        if (!map) return;

        if (!selectedObjId) {
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
        }
    }, [selectedObjId, type, getLayers, layersProp]);

    // ========== HOVER PIN ==========
    useEffect(() => {
        if (!map || selectedObjId) return;

        if (!hoverId) {
            resetSelectedPin({ ctx, map });
            return;
        }

        const found = findLayerById(resolveLayers(getLayers, layersProp), hoverId);
        if (found) {
            applyPinForLayer(found, false);
        } else {
            // Marker not on the map (e.g. hidden by clustering) — create a temporary hover pin.
            const latlng = extractLatlng(ctx.selectedWptId, type);
            if (latlng) {
                applyHoverPinFallback(latlng);
            }
        }
    }, [hoverId, selectedObjId, type, getLayers, layersProp]);

    // Builds markerData from layer options
    function applyPinForLayer(layer, isSelection) {
        const latlng = layer.getLatLng();
        if (!latlng) return;

        // Skip if this layer is already the active pin
        const currentRef = isSelection ? ctx.selectedCreatedLayerRef?.current : ctx.selectedUpdatedLayerRef?.current;
        if (currentRef === layer) return;

        const photoUrl = layer.options?.photoUrl;
        if (photoUrl) {
            applyPhotoPin(layer, latlng, photoUrl, isSelection);
            return;
        }

        const markerData = buildMarkerData(layer);
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

        applySelectedPin({ ctx, map, layer, latlng, markerData, isSelection });
    }

    function applyPhotoPin(layer, latlng, photoUrl, isSelection) {
        const itemId = layer?.options?.idObj;
        const markerData = {
            color: DEFAULT_POI_COLOR,
            iconHtml: `<img src="${photoUrl}" width="${EXPLORE_PHOTO_ICON_SIZE}" height="${EXPLORE_PHOTO_ICON_SIZE}" style="width:${EXPLORE_PHOTO_ICON_SIZE}px;height:${EXPLORE_PHOTO_ICON_SIZE}px;object-fit:cover;border-radius:50%;" />`,
        };
        const doApply = () => applySelectedPin({ ctx, map, layer, latlng, markerData, isSelection });

        if (loadedPhotoUrls.has(photoUrl)) {
            doApply();
            return;
        }

        const img = new Image();
        img.onload = () => {
            loadedPhotoUrls.add(photoUrl);
            const stillActive =
                (ctx.selectedWptId?.type === type &&
                    ctx.selectedWptId?.id === (itemId ?? hoverId) &&
                    ctx.selectedWptId?.show !== false) ||
                (selectedObjId && itemId && (selectedObjId === itemId || selectedObjId === layer?.options?.[POI_ID]));
            if (stillActive) doApply();
        };
        img.src = photoUrl;
    }

    function applyHoverPinFallback(latlng) {
        const photoUrl = ctx.selectedWptId?.photoUrl;
        if (photoUrl) {
            applyPhotoPin(null, latlng, photoUrl, false);
            return;
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

        applySelectedPin({
            ctx,
            map,
            layer: null,
            latlng,
            markerData: {
                color: markerOpts.color ?? DEFAULT_POI_COLOR,
                background: markerOpts.background ?? DEFAULT_POI_SHAPE,
                iconHtml,
            },
            isSelection: false,
        });
    }

    function buildMarkerData(layer) {
        const isSimpleDot = !!layer.options?.simple;
        return {
            color: (isSimpleDot ? layer.options?.fillColor : layer.options?.color) ?? DEFAULT_POI_COLOR,
            background: layer.options?.background ?? DEFAULT_POI_SHAPE,
            iconHtml: layer.options?.svg ?? iconHtmlFromIconName(layer.options?.[FINAL_POI_ICON_NAME]),
        };
    }
}
