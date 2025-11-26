/**
 * Creates tooltip for graphs showing distance, main parameters, and optional attributes.
 *
 * @param {Function} t - Translation function
 * @param {string} distanceUnit - Large distance unit (km/mi)
 * @param {string} smallDistanceUnit - Small distance unit (m/ft)
 * @param {number} totalDistance - Total distance to determine unit display
 * @param {Array<Object>} mainParams - Main parameters to display
 * @param {string} mainParams[].id - Parameter ID (matches yAxisID)
 * @param {string} mainParams[].label - Parameter label key for translation
 * @param {string} mainParams[].unit - Parameter unit
 * @param {Object} attributes - Optional attributes data
 * @returns {Object} Chart.js tooltip options
 */
export function createTooltip({
    t,
    distanceUnit,
    smallDistanceUnit,
    totalDistance,
    mainParams = [],
    attributes = null,
}) {
    return {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: '#757575',
        displayColors: false,
        callbacks: {
            // Display distance in tooltip title
            title: (items) => {
                const dist = items[0]?.parsed?.x;
                if (!Number.isFinite(dist)) {
                    return '';
                }

                const distLabel = t('distance');

                // Show in small units (m/ft) for short distances
                if (totalDistance < 1 || dist < 1) {
                    return `${distLabel}: ${Math.round(dist * 1000)} ${smallDistanceUnit}`;
                }

                return `${distLabel}: ${dist.toFixed(1)} ${distanceUnit}`;
            },
            // Display main parameters (elevation, slope, speed)
            label: (context) => {
                const param = mainParams.find((p) => p.id === context.dataset.yAxisID);
                if (!param) {
                    return '';
                }

                const label = t(param.label);
                const value = context.parsed.y;

                if (!Number.isFinite(value)) {
                    return `${label}: N/A`;
                }

                return `${label}: ${value.toFixed(1)} ${param.unit}`;
            },
            // Display optional attributes below separator line
            afterBody: (items) => {
                if (!attributes || !items[0]) {
                    return [];
                }

                const result = [];
                const xValue = items[0].parsed.x;

                // Find road attributes at current distance
                const foundAttributes = [];
                for (const attrKey of Object.keys(attributes)) {
                    const attrData = attributes[attrKey];
                    if (attrData?.datasets) {
                        for (const dataset of attrData.datasets) {
                            if (dataset.data) {
                                const point = dataset.data.find((p) => Math.abs(p.x - xValue) < 0.01);
                                if (point && dataset.label && dataset.label !== 'undefined') {
                                    foundAttributes.push(dataset.label);
                                }
                            }
                        }
                    }
                }

                if (foundAttributes.length > 0) {
                    result.push('―――――――――――――――');
                    for (const attr of foundAttributes) {
                        result.push(attr);
                    }
                }

                return result;
            },
        },
    };
}
