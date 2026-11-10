export const activeMouseLinePlugin = {
    id: 'mouseLine',
    afterEvent: function (chart, e) {
        const chartArea = chart.chartArea;
        chart.options.mouseLine = {};
        if (
            e.event.x >= chartArea.left &&
            e.event.y >= chartArea.top &&
            e.event.x <= chartArea.right &&
            e.event.y <= chartArea.bottom &&
            chart._active.length > 0
        ) {
            chart.options.mouseLine.x = chart._active[0].element.x;
        } else {
            chart.options.mouseLine.x = NaN;
        }
    },
    beforeTooltipDraw: function (chart) {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const x = chart.options.mouseLine?.x;
        if (!Number.isNaN(x)) {
            ctx.save();
            ctx.moveTo(chart.options.mouseLine.x, chartArea.bottom);
            ctx.lineTo(chart.options.mouseLine.x, chartArea.top);
            ctx.strokeStyle = chart.options.mouseLine?.color || '#737D8C';
            ctx.stroke();
            ctx.restore();
        }
    },
};

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
                // Draw vertical line from bottom to top
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
