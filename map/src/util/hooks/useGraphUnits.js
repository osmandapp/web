import { useContext, useMemo } from 'react';
import AppContext from '../../context/AppContext';
import { graphUnits } from '../../menu/settings/units/UnitsConverter';

export function useGraphUnits() {
    const ctx = useContext(AppContext);

    return useMemo(() => graphUnits(ctx.unitsSettings), [ctx.unitsSettings]);
}
