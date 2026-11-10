import { createTooltip } from '@map/graph/plugins/tooltipPlugin';
import { createDistanceXAxisPlugin } from '@map/graph/plugins/distanceXAxisPlugin';

const MILES = { len: 'si_mi_feet', speed: 'si_mph' };
const KILOMETRES = { len: 'si_km_m', speed: 'si_kmh' };
const UNIT_NAMES = { [MILES.len]: ['mile', 'foot'], [KILOMETRES.len]: ['km', 'm'] };

const t = (key) => key;

function axisLabels(unitsSettings, totalDistance) {
    const chart = { scales: { x: { min: 0, max: totalDistance } } };
    createDistanceXAxisPlugin({ unitsSettings, totalDistance, t }).afterBuildTicks(chart);

    return chart.scales.x.ticks.map((tick) => tick.label);
}

function tooltipTitle(unitsSettings, totalDistance, distance) {
    const [distanceUnit, smallDistanceUnit] = UNIT_NAMES[unitsSettings.len];
    const tooltip = createTooltip({ t, unitsSettings, distanceUnit, smallDistanceUnit, totalDistance });

    return tooltip.callbacks.title([{ parsed: { x: distance } }]);
}

test('a short route shows the axis and the tooltip in feet when the units are miles', () => {
    expect(axisLabels(MILES, 0.5)).toEqual(['0 foot', '528', '1056', '1584', '2112', '2640 foot']);
    expect(tooltipTitle(MILES, 3, 0.25)).toBe('distance: 1320 foot');
    expect(tooltipTitle(MILES, 3, 1.5)).toBe('distance: 1.5 mile');

    expect(axisLabels(KILOMETRES, 0.5)).toEqual(['0 m', '100', '200', '300', '400', '500 m']);
    expect(tooltipTitle(KILOMETRES, 3, 0.25)).toBe('distance: 250 m');
});
