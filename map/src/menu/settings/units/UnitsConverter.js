import convert from 'convert-units';

// Mapping of speed units used in the system.
// - `default` stores values for translations and display purposes.
// - `converter` stores the actual units used in calculations and unit conversion.

export const speedUnitsMap = {
    si_kmh: { default: 'km_h', converter: 'km/h' },
    si_mph: { default: 'mile_per_hour' },
    si_m_s: { default: 'm_s', converter: 'm/s' },
    si_min_m: { default: 'min_mile' },
    si_min_km: { default: 'min_km' },
    si_nm_h: { default: 'nm_h', converter: 'knot' },
};

// - In `default`, the first value represents the smaller unit, and the second represents the larger unit.
export const lengthUnitsMap = {
    si_km_m: { default: ['m', 'km'], converter: ['m', 'km'] },
    si_mi_feet: { default: ['foot', 'mile'], converter: ['ft', 'mi'] },
    si_mi_meters: { default: ['m', 'mile'], converter: ['m', 'mi'] },
    si_mi_yard: { default: ['yd', 'mile'], converter: ['yd', 'mi'] },
    si_nm_mt: { default: ['m', 'nmi'], converter: ['m', 'nmi'] },
    si_nm_ft: { default: ['foot', 'nmi'], converter: ['ft', 'nmi'] },
};

/**
 * Converts speed from meters per second (m/s) to the specified target unit.
 *
 * @param {number} value - Speed value in meters per second (m/s).
 * @param {string} toUnit - Target unit (one of the predefined keys in speedUnitsMap).
 * @returns {number|null} - Converted speed value in the requested unit.
 * @throws {Error} - If the target unit is unsupported.
 */
export function convertSpeed(value, toUnit) {
    if (!value) {
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
 * @returns {number|null} - Converted length value in the requested unit.
 * @throws {Error} - If the target unit is unsupported.
 */
export function convertLength(value, toUnit) {
    if (!value) {
        return null;
    }

    const units = lengthUnitsMap[toUnit].converter;

    if (!units) {
        throw new Error(`Unsupported unit: ${toUnit}`);
    }
    return convert(value).from('m').to(units[0]);
}
