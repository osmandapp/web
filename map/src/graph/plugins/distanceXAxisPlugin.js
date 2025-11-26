import { getLargeLengthUnit, getSmallLengthUnit } from '../../menu/settings/units/UnitsConverter';

/**
 * Configures X axis for distance display with automatic unit selection.
 * Automatically switches between large units (km/mi) and small units (m/ft) based on distance.
 *
 * @param {Object} unitsSettings - User's unit settings
 * @param {number} totalDistance - Total distance in large units to determine scale
 * @param {Function} t - Translation function
 * @returns {Object} Chart.js plugin
 */
export function createDistanceXAxisPlugin({ unitsSettings, totalDistance, t }) {
    const largeUnit = t(getLargeLengthUnit({ unitsSettings }));
    const smallUnit = t(getSmallLengthUnit({ unitsSettings }));

    function formatDistance(value) {
        if (!Number.isFinite(value)) {
            return '';
        }

        if (totalDistance < 1 || value < 1) {
            return `${Math.round(value * 1000)} ${smallUnit}`;
        }

        return `${value.toFixed(1)} ${largeUnit}`;
    }

    function calculateNiceInterval(maxValue) {
        const distanceInMeters = maxValue * 1000;
        const targetTicks = 5;
        const roughInterval = distanceInMeters / targetTicks;

        const magnitude = Math.pow(10, Math.floor(Math.log10(roughInterval)));
        const normalized = roughInterval / magnitude;

        let niceNormalized;
        if (normalized < 1.5) {
            niceNormalized = 1;
        } else if (normalized < 3) {
            niceNormalized = 2;
        } else if (normalized < 7) {
            niceNormalized = 5;
        } else {
            niceNormalized = 10;
        }

        return (niceNormalized * magnitude) / 1000;
    }

    return {
        id: 'distanceXAxis',
        beforeUpdate: (chart) => {
            if (chart.options.scales?.x) {
                const xScale = chart.options.scales.x;

                xScale.min = 0;
                xScale.max = totalDistance;

                if (xScale.ticks) {
                    xScale.ticks.callback = formatDistance;
                    xScale.ticks.font = {
                        family: 'Roboto',
                        size: 10,
                        weight: 500,
                        lineHeight: 'normal',
                    };
                    xScale.ticks.color = '#757575';
                }

                if (xScale.border) {
                    xScale.border.color = '#BEBCC2';
                    xScale.border.width = 1;
                }
            }
        },
        afterBuildTicks: (chart) => {
            const xScale = chart.scales.x;
            if (!xScale) return;

            const interval = calculateNiceInterval(totalDistance);
            const ticks = [];

            ticks.push({ value: 0, label: formatDistance(0) });

            let current = interval;
            while (current < totalDistance) {
                if (totalDistance - current > interval * 0.3) {
                    ticks.push({ value: current, label: formatDistance(current) });
                }
                current += interval;
            }

            ticks.push({ value: totalDistance, label: formatDistance(totalDistance) });

            xScale.ticks = ticks;
        },
        afterDatasetsDraw: (chart) => {
            const xScale = chart.scales.x;
            if (!xScale) return;

            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const yPosition = chartArea.bottom;

            ctx.save();
            ctx.strokeStyle = '#BEBCC2';
            ctx.lineWidth = 1;

            for (const tick of xScale.ticks) {
                const x = xScale.getPixelForValue(tick.value);

                ctx.beginPath();
                ctx.moveTo(x, yPosition - 4);
                ctx.lineTo(x, yPosition + 4);
                ctx.stroke();
            }

            ctx.restore();
        },
    };
}
