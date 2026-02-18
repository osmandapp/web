import { useEffect } from 'react';
import { FINAL_POI_ICON_NAME, POI_ID } from '../../../infoblock/components/wpt/WptTagsProvider';
import { EXPLORE_PHOTO_ICON_SIZE, applySelectedPin, resetSelectedPin } from '../../../map/util/MarkerSelectionService';
import { DEFAULT_POI_COLOR, DEFAULT_POI_SHAPE } from '../../../manager/PoiManager';
import { getIconUrlByName } from '../../../map/markers/MarkerOptions';

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

        applySelectedPin({
            ctx,
            map,
            layer,
            latlng,
            markerData: buildMarkerData(layer),
            isSelection,
        });
    }

    function applyPhotoPin(layer, latlng, photoUrl, isSelection) {
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
                    ctx.selectedWptId?.id === layer.options?.idObj &&
                    ctx.selectedWptId?.show !== false) ||
                (selectedObjId &&
                    (selectedObjId === layer.options?.idObj || selectedObjId === layer.options?.[POI_ID]));
            if (stillActive) doApply();
        };
        img.src = photoUrl;
    }

    function buildMarkerData(layer) {
        const isSimpleDot = !!layer.options?.simple;
        const finalIconName = layer.options?.[FINAL_POI_ICON_NAME];
        const poiIconUrl = finalIconName
            ? getIconUrlByName('poi', finalIconName) || getIconUrlByName('map', finalIconName)
            : null;

        let iconHtml = layer.options?.svg ?? null;
        if (!iconHtml && poiIconUrl) {
            iconHtml = `<image href="${poiIconUrl}" />`;
        }

        return {
            color: (isSimpleDot ? layer.options?.fillColor : layer.options?.color) ?? DEFAULT_POI_COLOR,
            background: layer.options?.background ?? DEFAULT_POI_SHAPE,
            iconHtml,
        };
    }
}
