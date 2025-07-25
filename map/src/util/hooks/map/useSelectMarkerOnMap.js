import { useEffect } from 'react';
import { createSecondaryMarker } from '../../../map/util/Clusterizer';
import { hideSelectedMarker, selectMarker } from '../../../manager/PoiManager';
import { POI_ID } from '../../../infoblock/components/wpt/WptTagsProvider';

const COLOR_POINTER = '#237bff';
export const SELECTED_POI_COLOR = '#237bff';

// The marker has two selection states:
// 1. On hover, a COLOR_POINTER circular outline appears around the marker. (ctx.selectedPoiId)
// 2. On click, the marker’s color changes to COLOR_POINTER to indicate it’s selected. (ctx.selectedWpt.poi)

export function useSelectMarkerOnMap({ ctx, layers, type, map, prevSelectedMarker = { current: null } }) {
    // add hover marker
    useEffect(() => {
        if (layers && ctx.selectedPoiId?.id && ctx.selectedPoiId?.type === type) {
            hideOldMarker();
            let foundMarker = null;
            layers.forEach((layer) => {
                if (layer.options.idObj === ctx.selectedPoiId.id) {
                    foundMarker = layer;
                }
            });
            if (foundMarker) {
                removeOldPointer();
                if (ctx.selectedPoiId.show) {
                    foundMarker.fire('selectMarker'); // Show the selected marker
                } else {
                    foundMarker.fire('mouseout'); // Hide the marker
                }
            } else {
                if (ctx.selectedPoiId.show && !ctx.selectedSearchMarker) {
                    const circle = createSecondaryMarker(ctx.selectedPoiId.obj);
                    if (circle) {
                        ctx.setSelectedSearchMarker(circle);
                        circle.options.fillColor = COLOR_POINTER;
                        circle.options.pane = createPane();
                        circle.addTo(map);
                    }
                } else if (!ctx.selectedPoiId.show && ctx.selectedSearchMarker) {
                    removeOldPointer();
                }
            }
        }
    }, [ctx.selectedPoiId, layers, type]);

    // Change the marker’s color to COLOR_POINTER
    useEffect(() => {
        if (ctx.selectedWpt?.wikidata) {
            // skip wikidata markers
            return;
        }
        if (!ctx.selectedWpt && prevSelectedMarker?.current) {
            // hide old marker after closing left info
            hideSelectedMarker(prevSelectedMarker.current);
            prevSelectedMarker.current = null;
            return;
        }
        layers?.forEach((layer) => {
            if (layer.options.idObj === ctx.selectedWpt?.poi?.options[POI_ID]) {
                if (ctx.selectedPoiId.show === false) {
                    hideSelectedMarker(layer);
                    prevSelectedMarker.current = null;
                } else {
                    if (prevSelectedMarker.current && prevSelectedMarker.current === layer) {
                        // If the marker is already selected, do nothing
                        return;
                    }
                    prevSelectedMarker.current = selectMarker(layer, prevSelectedMarker.current);
                }
            }
        });
    }, [ctx.selectedWpt]);

    function hideOldMarker() {
        if (ctx.selectedPoiId.prev && ctx.selectedPoiId.prev.id !== ctx.selectedPoiId.id) {
            const prevMarker = layers.find((layer) => layer.options.idObj === ctx.selectedPoiId.prev.id);
            if (prevMarker) {
                prevMarker.fire('mouseout');
            }
        }
    }

    function removeOldPointer() {
        if (ctx.selectedSearchMarker && map.hasLayer(ctx.selectedSearchMarker)) {
            map.removeLayer(ctx.selectedSearchMarker);
            ctx.setSelectedSearchMarker(null);
        }
    }

    function createPane() {
        const paneName = 'selectedPane';
        if (!map.getPane(paneName)) {
            map.createPane(paneName);
            map.getPane(paneName).style.zIndex = '1000';
        }
        return paneName;
    }
}
