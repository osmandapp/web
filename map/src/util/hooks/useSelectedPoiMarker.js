import { useEffect } from 'react';

export function useSelectedPoiMarker(ctx, layers, type) {
    useEffect(() => {
        if (layers && ctx.selectedPoiId?.id && ctx.selectedPoiId?.type === type) {
            let foundMarker = null;
            layers.forEach((layer) => {
                if (layer.options.idObj === ctx.selectedPoiId.id) {
                    foundMarker = layer;
                }
            });
            if (foundMarker) {
                if (ctx.selectedPoiId.show) {
                    foundMarker.fire('selectMarker'); // Show the selected marker
                } else {
                    foundMarker.fire('mouseout'); // Hide the marker
                }
            }
        }
    }, [ctx.selectedPoiId, layers, type]);
}
