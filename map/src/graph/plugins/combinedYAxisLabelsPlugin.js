const GRID_LINES_COUNT = 3; // Number of horizontal grid lines to draw (top, middle, bottom)

/**
 * Plugin to draw dashed grid lines and combined labels on right Y axes
 *
 * @param {Array<Object>} axes - Array of axis configurations
 * @param {string} axes[].id - Axis ID (e.g., 'y', 'y1')
 * @param {string} axes[].color - Color for axis labels
 * @param {string} axes[].unit - Unit label for axis (e.g., 'm', '%')
 *
 * @returns {Object} Chart.js plugin object
 */
export function createCombinedYAxisLabelsPlugin(axes) {
    if (!axes || axes.length === 0) {
        throw new Error('combinedYAxisLabelsPlugin requires at least one axis');
    }

    return {
        id: 'combinedYAxisLabels',
        beforeDatasetsDraw: (chart) => {
            const firstScale = chart.scales[axes[0].id];
            if (!firstScale) return;

            const ctx = chart.ctx;
            const chartArea = chart.chartArea;

            // Draw horizontal dashed grid lines
            ctx.save();
            ctx.strokeStyle = '#BBBBBB';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);

            // Draw horizontal grid lines
            for (let i = 0; i < GRID_LINES_COUNT; i++) {
                const ratio = i / (GRID_LINES_COUNT - 1);
                const value = firstScale.min + (firstScale.max - firstScale.min) * ratio;
                const pixel = firstScale.getPixelForValue(value);

                ctx.beginPath();
                ctx.moveTo(chartArea.left, pixel);
                ctx.lineTo(chartArea.right, pixel);
                ctx.stroke();
            }

            ctx.setLineDash([]);
            ctx.restore();
        },
        afterDatasetsDraw: (chart) => {
            const firstScale = chart.scales[axes[0].id];
            if (!firstScale) return;

            // Get all scales
            const scales = axes.map((axis) => chart.scales[axis.id]).filter(Boolean);
            if (scales.length === 0) return;

            const ctx = chart.ctx;
            const chartArea = chart.chartArea;

            // Draw combined colored labels on the right side
            ctx.save();
            ctx.font = '500 10px Roboto, sans-serif';
            ctx.letterSpacing = '0.1px';
            ctx.textAlign = 'left';

            // Draw labels for grid lines
            for (let i = 0; i < GRID_LINES_COUNT; i++) {
                const ratio = i / (GRID_LINES_COUNT - 1);
                const pixel = firstScale.getPixelForValue(firstScale.min + (firstScale.max - firstScale.min) * ratio);

                let x = chartArea.right + 8; // Offset from right edge

                // Draw values for all axes (e.g., "150 m, -10 %")
                for (let index = 0; index < axes.length; index++) {
                    const axis = axes[index];
                    const scale = chart.scales[axis.id];
                    if (!scale) continue;

                    const value = scale.min + (scale.max - scale.min) * ratio;
                    const text = `${Math.round(value)} ${axis.unit}`;

                    // Draw axis value in axis color
                    ctx.fillStyle = axis.color;
                    ctx.fillText(text, x, pixel + 4); // Vertical offset
                    x += ctx.measureText(text).width;

                    // Draw separator between values
                    if (index < axes.length - 1) {
                        ctx.fillStyle = '#757575';
                        ctx.fillText(', ', x, pixel + 4);
                        x += ctx.measureText(', ').width;
                    }
                }
            }
            ctx.restore();
        },
    };
}
