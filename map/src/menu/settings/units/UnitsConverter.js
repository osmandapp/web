import convert from 'convert-units';

export const speedUnitsMap = {
    si_kmh: { native: 'km_h', converter: 'km/h' },
    si_mph: { native: 'mile_per_hour' },
    si_m_s: { native: 'm_s', converter: 'm/s' },
    si_min_m: { native: 'min_mile' },
    si_min_km: { native: 'min_km' },
    si_nm_h: { native: 'nm_h', converter: 'knot' },
};

export const lengthUnitsMap = {
    si_km_m: { native: { small: 'm', large: 'km' }, converter: { small: 'm', large: 'km' } },
    si_mi_feet: { native: { small: 'foot', large: 'mile' }, converter: { small: 'ft', large: 'mi' } },
    si_mi_meters: { native: { small: 'm', large: 'mile' }, converter: { small: 'm', large: 'mi' } },
    si_mi_yard: { native: { small: 'yd', large: 'mile' }, converter: { small: 'yd', large: 'mi' } },
    si_nm_mt: { native: { small: 'm', large: 'nmi' }, converter: { small: 'm', large: 'nmi' } },
    si_nm_ft: { native: { small: 'foot', large: 'nmi' }, converter: { small: 'ft', large: 'nmi' } },
};

export const LARGE_UNIT = 'large';
export const SMALL_UNIT = 'small';

/**
 * Converts speed from meters per second (m/s) to the specified target unit.
 *
 * @param {number} value - Speed value in meters per second (m/s).
 * @param {string} toUnit - Target unit (one of the predefined keys in speedUnitsMap).
 * @returns {number|null} - Converted speed value in the requested unit.
 * @throws {Error} - If the target unit is unsupported.
 */
export function convertSpeedMS(value, toUnit) {
    if (!value && value !== 0) {
        return null;
    }

    if (toUnit === 'si_m_s') {
        return value;
    }

    if (toUnit === 'si_mph') {
        return convert(value).from('m/s').to('km/h') / 1.60934; // Convert m/s → km/h → mph
    }

    if (toUnit === 'si_min_m') {
        const milesPerHour = convert(value).from('m/s').to('km/h') / 1.60934; // Convert m/s → km/h → mph
        return milesPerHour > 0 ? 60 / milesPerHour : null; // Convert to min/mi
    }

    if (toUnit === 'si_min_km') {
        const kmPerHour = convert(value).from('m/s').to('km/h'); // Convert m/s → km/h
        return kmPerHour > 0 ? 60 / kmPerHour : null; // Convert to min/km
    }

    const units = speedUnitsMap[toUnit].converter;

    if (!units) {
        throw new Error(`Unsupported unit: ${toUnit}`);
    }

    return convert(value).from('m/s').to(units);
}

/**
 * Converts length from meters (m) to the specified target unit.
 *
 * @param {number} value - Length value in meters (m).
 * @param {string} toUnit - Target unit (one of the predefined keys in lengthUnitsMap).
 * @param {string} type
 * @returns {number|null} - Converted length value in the requested unit.
 * @throws {Error} - If the target unit is unsupported.
 */
export function convertMeters(value, toUnit, type = SMALL_UNIT) {
    if (!value && value !== 0) {
        return null;
    }

    const unit = lengthUnitsMap[toUnit].converter;

    if (!unit) {
        throw new Error(`Unsupported unit: ${toUnit}`);
    }
    return convert(value).from('m').to(unit[type]);
}

export function getSmallLengthUnit(ctx) {
    return lengthUnitsMap[ctx.unitsSettings.len].native.small;
}

export function getLargeLengthUnit(ctx) {
    return lengthUnitsMap[ctx.unitsSettings.len].native.large;
}

export function getSpeedUnit(ctx) {
    return speedUnitsMap[ctx.unitsSettings.speed].native;
}
