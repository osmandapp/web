import { formatPhoneNumber } from '@map/util/phoneFmt';

describe('formatPhoneNumber', () => {
    test('known numbering plans', () => {
        expect(formatPhoneNumber('+33612345678')).toBe('+33 6 12 34 56 78');
        expect(formatPhoneNumber('+33 612 345 678')).toBe('+33 6 12 34 56 78');
        expect(formatPhoneNumber('0033 6 12 34 56 78')).toBe('+33 6 12 34 56 78');
        expect(formatPhoneNumber('+1 (415) 555-1234')).toBe('+1 415 555 1234');
        expect(formatPhoneNumber('+79123456789')).toBe('+7 912 345 67 89');
    });

    test('generic groups', () => {
        expect(formatPhoneNumber('+493012345678')).toBe('+49 301 234 5678');
        expect(formatPhoneNumber('+380441234567')).toBe('+380 441 234 567');
        expect(formatPhoneNumber('+44 2079460958')).toBe('+44 207 946 0958');
    });

    test('kept as is', () => {
        for (const value of [
            '+49 30 1234567',
            '+44 (0)20 7946 0958',
            '+33 (0)6 12 34 56 78',
            '0612345678',
            '+33 6 12 34 56 78 ext. 12',
            '+3312',
            '',
        ]) {
            expect(formatPhoneNumber(value)).toBe(value);
        }
    });

    test('several numbers', () => {
        expect(formatPhoneNumber('+33612345678;+33123456789')).toBe('+33 6 12 34 56 78; +33 1 23 45 67 89');
        expect(formatPhoneNumber('+33612345678; 112')).toBe('+33 6 12 34 56 78; 112');
    });
});
