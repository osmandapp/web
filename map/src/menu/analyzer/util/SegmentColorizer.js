/**
 * Returns a color based on the provided index.
 * Colors are first taken from a predefined palette, and if the palette is exhausted,
 * new colors are generated using HSL for contrast.
 *
 * @param {number} index - The index of the segment or item.
 * @param {number} total - The total number of items (used for generating HSL colors).
 * @returns {string} A color in HEX or HSL format.
 */
function getColorByIndex(index, total) {
    const basePalette = [
        '#FF0000', // Red
        '#00FF00', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FF00FF', // Magenta
        '#00FFFF', // Cyan
        '#FFA500', // Orange
        '#800080', // Purple
        '#008000', // Dark Green
        '#000000', // Black
    ];

    // If the index is within the palette, return the predefined color
    if (index < basePalette.length) {
        return basePalette[index];
    }

    // Otherwise, generate a new color using HSL
    const hue = (index * 360) / total; // Spread colors evenly across the color wheel
    return `hsl(${hue}, 70%, 50%)`; // Use medium saturation and brightness for contrast
}

export function addColorsToSegments(res) {
    const segments = res.segments;
    const segmentIds = Object.keys(segments);
    const totalSegments = segmentIds.length;

    segmentIds.forEach((key, index) => {
        const segmentArray = segments[key];

        segmentArray.forEach((segment) => {
            segment.color = getColorByIndex(index, totalSegments);
        });
    });

    return res;
}
