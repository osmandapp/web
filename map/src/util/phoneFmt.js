// Display-only formatting of international phone numbers without libphonenumber:
// "+33612345678" -> "+33 6 12 34 56 78". Same rules as PhoneNumberFormatter in OsmAnd-shared.
// Numbers without a country code, with letters or extensions are returned as is.

const ALLOWED = /^[0-9+\-.()  ]*$/;

// ITU calling codes are prefix-free: 1 and 7 have one digit, these have two, the rest three
const TWO_DIGIT_CODES = new Set(
    (
        '20 27 30 31 32 33 34 36 39 40 41 43 44 45 46 47 48 49 51 52 53 54 55 56 57 58 ' +
        '60 61 62 63 64 65 66 81 82 84 86 90 91 92 93 94 95 98'
    ).split(' ')
);

// country code -> groups of a national number (without trunk prefix) of the expected length
const NUMBERING_PLANS = {
    1: [3, 3, 4],
    7: [3, 3, 2, 2],
    33: [1, 2, 2, 2, 2],
};

const sum = (groups) => groups.reduce((a, b) => a + b, 0);

function getCountryCode(digits) {
    if (digits[0] === '1' || digits[0] === '7') {
        return digits.substring(0, 1);
    }
    return TWO_DIGIT_CODES.has(digits.substring(0, 2)) ? digits.substring(0, 2) : digits.substring(0, 3);
}

// keep grouping written by the mapper: they know where the area code ends, we don't
function isAlreadyGrouped(value) {
    return value.includes('(') || value.split(/[^0-9]+/).filter((s) => s).length > 2;
}

function getGenericGroups(length) {
    if (length <= 4) {
        return [length];
    }
    let tail = [];
    if (length % 3 === 1) {
        tail = [4];
    } else if (length % 3 === 2) {
        tail = length >= 8 ? [4, 4] : [2, 3];
    }
    return [...new Array((length - sum(tail)) / 3).fill(3), ...tail];
}

function formatNumber(number) {
    const value = number.trim();
    if (!ALLOWED.test(value)) {
        return number;
    }
    let digits = value.replace(/\D/g, '');
    if (value.startsWith('00')) {
        digits = digits.substring(2);
    } else if (!value.startsWith('+')) {
        return number;
    }
    if (digits.length < 8 || value.indexOf('+', 1) !== -1) {
        return number;
    }
    const code = getCountryCode(digits);
    const national = digits.substring(code.length);
    const plan = NUMBERING_PLANS[code];
    let groups;
    if (plan && sum(plan) === national.length) {
        groups = plan;
    } else {
        if (isAlreadyGrouped(value)) {
            return number;
        }
        groups = getGenericGroups(national.length);
    }
    let start = 0;
    const parts = groups.map((size) => {
        start += size;
        return national.substring(start - size, start);
    });
    return `+${code} ${parts.join(' ')}`;
}

export function formatPhoneNumber(value) {
    if (!value?.includes(';')) {
        return value ? formatNumber(value) : value;
    }
    return value
        .split(';')
        .map((v) => formatNumber(v.trim()))
        .join('; ');
}
