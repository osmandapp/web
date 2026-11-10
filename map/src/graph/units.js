import { useContext, useMemo } from 'react';
import AppContext from '../context/AppContext';
import { convertMeters, convertSpeedMS, LARGE_UNIT, SMALL_UNIT } from '../menu/settings/units/UnitsConverter';

export function useGraphUnits() {
    const ctx = useContext(AppContext);

    return useMemo(() => graphUnits(ctx.unitsSettings), [ctx.unitsSettings]);
}

export function graphUnits(unitsSettings) {
    const large = convertMeters(1, unitsSettings.len, LARGE_UNIT);
    const small = convertMeters(1, unitsSettings.len, SMALL_UNIT);

    return {
        distance: (meters) => meters * large,
        largeToSmall: (value) => (value / large) * small,
        elevation: (meters) => (meters === null ? null : meters * small),
        speed: (metersPerSecond) =>
            metersPerSecond === null ? null : convertSpeedMS(metersPerSecond, unitsSettings.speed),
    };
}
