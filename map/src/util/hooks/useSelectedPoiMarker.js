import { useEffect } from 'react';
import { createSecondaryMarker } from '../../map/util/Clusterizer';

const COLOR_POINTER = '#237bff';

export function useSelectedPoiMarker(ctx, layers, type, map) {
    useEffect(() => {
        async function handleMarkerSelection() {
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
                        const circle = await createSecondaryMarker(ctx.selectedPoiId.obj);
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
        }

        handleMarkerSelection();
    }, [ctx.selectedPoiId, layers, type]);

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
