import { Interaction } from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

export const CUSTOM_MODE = 'myCustomMode';

Interaction.modes[CUSTOM_MODE] = function (chart, e, options, useFinalPosition) {
    const position = getRelativePosition(e, chart);
    const items = [];
    Interaction.evaluateInteractionItems(chart, 'x', position, (element, datasetIndex, index) => {
        //filter slope points and duplicates
        if (
            element.inXRange(position.x, useFinalPosition) &&
            datasetIndex !== 2 &&
            !items.some((i) => i.datasetIndex === datasetIndex)
        ) {
            items.push({ element, datasetIndex, index });
        }
    });

    return items;
};
