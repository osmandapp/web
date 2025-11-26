/**
 * Plugin to draw vertical line following mouse cursor on graph.
 * Line appears on hover and moves with tooltip.
 *
 * @param {string} color - Line color (default: '#757575')
 * @returns {Object} Chart.js plugin
 */
export function createMouseLinePlugin(color = '#757575') {
    return {
        id: 'mouseLine',
        afterEvent: (chart, e) => {
            const chartArea = chart.chartArea;

            if (!chart.options.mouseLine) {
                chart.options.mouseLine = {};
            }

            const oldX = chart.options.mouseLine.x;

            if (
                e.event.x >= chartArea.left &&
                e.event.y >= chartArea.top &&
                e.event.x <= chartArea.right &&
                e.event.y <= chartArea.bottom
            ) {
                chart.options.mouseLine.x = e.event.x;
            } else {
                chart.options.mouseLine.x = Number.NaN;
            }

            // Trigger redraw if position changed
            if (oldX !== chart.options.mouseLine.x) {
                e.changed = true;
            }
        },
        beforeTooltipDraw: (chart) => {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const x = chart.options.mouseLine?.x;

            if (!Number.isNaN(x)) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x, chartArea.bottom);
                ctx.lineTo(x, chartArea.top);
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.restore();
            }
        },
    };
}
