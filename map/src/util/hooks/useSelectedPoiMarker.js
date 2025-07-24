import { useEffect } from 'react';
import { createSecondaryMarker } from '../../map/util/Clusterizer';
import { hidePoiMarker, selectPoiMarker } from '../../manager/PoiManager';
import { POI_ID } from '../../infoblock/components/wpt/WptTagsProvider';

const COLOR_POINTER = '#237bff';

export function useSelectedPoiMarker(ctx, layers, type, map, prevSelectedMarker) {
    useEffect(() => {
        if (layers && ctx.selectedPoiId?.id && ctx.selectedPoiId?.type === type) {
            hideOldMarker();
            let foundMarker = null;
            layers.forEach((layer) => {
                if (layer.options.idObj === ctx.selectedPoiId.id) {
                    foundMarker = layer;
                }
            });
            if (foundMarker && ctx.selectedWpt?.poi?.options[POI_ID] !== ctx.selectedPoiId.id) {
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

    useEffect(() => {
        if (ctx.selectedPoiId?.show === false && ctx.selectedPoiId?.id === -1 && prevSelectedMarker) {
            // hide marker after closing left info
            hidePoiMarker(prevSelectedMarker);
            prevSelectedMarker = null;
            return;
        }
        if (ctx.selectedPoiId?.id && ctx.selectedPoiId.id !== 1) {
            // get marker from layers
            layers?.forEach((layer) => {
                if (layer.options.idObj === ctx.selectedPoiId.id) {
                    if (ctx.selectedPoiId.show === false) {
                        hidePoiMarker(layer);
                        prevSelectedMarker = null;
                    } else if (ctx.selectedWpt?.poi?.options[POI_ID] === ctx.selectedPoiId?.id) {
                        prevSelectedMarker = selectPoiMarker(layer, prevSelectedMarker);
                    }
                }
            });
        }
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
