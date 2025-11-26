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

                if (xScale.ticks) {
                    xScale.ticks.display = false;
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

            // Determine current min and max
            const currentMin = xScale.min ?? 0;
            const currentMax = xScale.max ?? totalDistance;
            const currentRange = currentMax - currentMin;

            const interval = calculateNiceInterval(currentRange);
            const allTicks = [];
            const minDistance = interval * 0.8; // Minimum distance between ticks

            // Generate all potential ticks
            allTicks.push(currentMin);

            let current = Math.ceil(currentMin / interval) * interval;
            while (current <= currentMax) {
                allTicks.push(current);
                current += interval;
            }

            allTicks.push(currentMax);

            // filter ticks to ensure minimum distance
            const ticks = [];
            for (let i = 0; i < allTicks.length; i++) {
                const value = allTicks[i];
                const isFirst = i === 0;
                const isLast = i === allTicks.length - 1;

                if (isFirst || isLast) {
                    ticks.push({ value, label: formatDistance(value) });
                } else {
                    const prevValue = ticks[ticks.length - 1]?.value ?? currentMin;
                    const nextValue = allTicks[i + 1] ?? currentMax;

                    if (value - prevValue >= minDistance && nextValue - value >= minDistance) {
                        ticks.push({ value, label: formatDistance(value) });
                    }
                }
            }

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

            // Draw ticks
            for (const tick of xScale.ticks) {
                const x = xScale.getPixelForValue(tick.value);

                ctx.beginPath();
                ctx.moveTo(x, yPosition - 4);
                ctx.lineTo(x, yPosition + 4);
                ctx.stroke();
            }

            // Draw labels
            ctx.font = '500 10px Roboto, sans-serif';
            ctx.fillStyle = '#757575';
            ctx.letterSpacing = '0.1px';

            for (let i = 0; i < xScale.ticks.length; i++) {
                const tick = xScale.ticks[i];
                const x = xScale.getPixelForValue(tick.value);
                const label = formatDistance(tick.value);

                if (i === 0) {
                    // First label - align left
                    ctx.textAlign = 'left';
                } else if (i === xScale.ticks.length - 1) {
                    // Last label - align right
                    ctx.textAlign = 'right';
                } else {
                    // Middle labels - align center
                    ctx.textAlign = 'center';
                }

                ctx.fillText(label, x, yPosition + 18);
            }

            ctx.restore();
        },
    };
}
