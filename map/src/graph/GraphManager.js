export function getPrimaryFontFamily() {
    if (typeof document === 'undefined') return 'Inter';
    return getComputedStyle(document.documentElement).getPropertyValue('--font-family-primary').trim() || 'Inter';
}

//graph
export const ELEVATION = 'Elevation';
export const ELEVATION_SRTM = 'ElevationSRTM';
export const SPEED = 'Speed';
export const DISTANCE = 'Distance';
export const SLOPE = 'Slope';

export const SLOPE_COLOR = '#14CC9E';
export const ELEVATION_COLOR = '#2183F4';
export const ELEVATION_FILL_COLOR = 'rgba(35, 123, 255, 0.10)';

export function cap(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}

/**
 * Handles mouse movement on graph to show marker on map.
 * Interpolates position between points for smooth movement.
 *
 * @param {Event} event - Mouse event
 * @param {Object} chartRef - React ref to Chart component
 * @param {Object} ctx - AppContext
 * @param {Array} coordinates - Array of coordinates [{lat, lng, distance}, ...]
 * @param {Function} onPointSelect - Optional callback when point is selected (receives {index, lat, lng, distance})
 */
function handleGraphMouseMove(event, chartRef, ctx, coordinates, onPointSelect = null) {
    if (!chartRef?.current || !ctx.mapMarkerListener || !coordinates || coordinates.length === 0) {
        return;
    }

    const chart = chartRef.current;
    const xScale = chart.scales.x;
    const chartArea = chart.chartArea;

    if (!xScale || !chartArea) {
        return;
    }

    // Get mouse X position relative to canvas
    const rect = chart.canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;

    // Check if mouse is within chart area
    if (mouseX < chartArea.left || mouseX > chartArea.right) {
        ctx.mapMarkerListener(null);
        if (onPointSelect) {
            onPointSelect(null);
        }
        return;
    }

    // Convert pixel position to distance value
    const distance = xScale.getValueForPixel(mouseX);

    if (distance === null || distance === undefined || distance < 0) {
        return;
    }

    // Find two nearest points for interpolation
    let beforePoint = null;
    let afterPoint = null;

    for (let i = 0; i < coordinates.length; i++) {
        const point = coordinates[i];
        if (point.distance <= distance) {
            beforePoint = { ...point, index: i };
        }
        if (point.distance >= distance) {
            afterPoint = { ...point, index: i };
            break;
        }
    }

    if (beforePoint && afterPoint && beforePoint.index !== afterPoint.index) {
        // Interpolate between two points
        const ratio = (distance - beforePoint.distance) / (afterPoint.distance - beforePoint.distance);
        const lat = beforePoint.lat + (afterPoint.lat - beforePoint.lat) * ratio;
        const lng = beforePoint.lng + (afterPoint.lng - beforePoint.lng) * ratio;

        ctx.mapMarkerListener(lat, lng);

        if (onPointSelect) {
            onPointSelect({
                index: beforePoint.index,
                lat,
                lng,
                distance,
            });
        }
    } else if (beforePoint || afterPoint) {
        // Use closest point if only one is available
        const point = beforePoint || afterPoint;
        ctx.mapMarkerListener(point.lat, point.lng);

        if (onPointSelect) {
            onPointSelect({
                index: point.index,
                lat: point.lat,
                lng: point.lng,
                distance: point.distance,
            });
        }
    }
}

/**
 * Hides marker on map.
 *
 * @param {Object} ctx - AppContext
 * @param {Function} onPointSelect - Optional callback when point is deselected
 */
function hideGraphMarker(ctx, onPointSelect = null) {
    if (ctx.mapMarkerListener) {
        ctx.mapMarkerListener(null);
    }
    if (onPointSelect) {
        onPointSelect(null);
    }
}

const GraphManager = {
    handleGraphMouseMove: handleGraphMouseMove,
    hideGraphMarker: hideGraphMarker,
};
export default GraphManager;
