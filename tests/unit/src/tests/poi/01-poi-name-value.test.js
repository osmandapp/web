import { getGroupRowLabels, getGroupValueLabel, splitNameValue } from '@map/manager/PoiManager';

// POI additional values are translated "Name: value" (android OsmAnd/res/values/phrases.xml)
describe('splitNameValue', () => {
    test('a value is split at the first colon', () => {
        expect(splitNameValue('Fridge: yes')).toEqual(['Fridge', 'yes']);
        expect(splitNameValue('Payant : non')).toEqual(['Payant', 'non']);
        expect(splitNameValue('Холодильник: есть')).toEqual(['Холодильник', 'есть']);
    });

    test('a translation without a name stays whole', () => {
        expect(splitNameValue('Cash')).toBeNull();
        expect(splitNameValue('1:25 fuel')).toBeNull();
        expect(splitNameValue('')).toBeNull();
        expect(splitNameValue(undefined)).toBeNull();
    });
});

describe('group labels', () => {
    test('values of one tag: the name over the values', () => {
        expect(getGroupRowLabels(['Smoking: no'], ['no'], true, 'Smoking')).toEqual({
            prefix: 'Smoking',
            values: ['No'],
        });
        expect(
            getGroupRowLabels(['Smoking: allowed', 'Smoking: outside only'], ['yes', 'outside'], true, 'Smoking')
        ).toEqual({ prefix: 'Smoking', values: ['Allowed', 'Outside only'] });
    });

    test('options of a list: the group over the names, other values whole', () => {
        expect(getGroupRowLabels(['Kayaks: yes'], ['yes'], false, 'Rented boats')).toEqual({
            prefix: 'Rented boats',
            values: ['Kayaks'],
        });
        expect(
            getGroupRowLabels(['Kayaks: yes', 'Canoe: limited', 'Cash'], ['yes', 'limited', 'yes'], false, 'Group')
        ).toEqual({ prefix: 'Group', values: ['Kayaks', 'Canoe: limited', 'Cash'] });
    });

    test('older translations without a name are shown as before', () => {
        expect(getGroupRowLabels(['Yes'], ['yes'], true, 'Fridge')).toEqual({ prefix: 'Fridge', values: ['Yes'] });
        expect(getGroupValueLabel('Yes', 'yes')).toBe('Yes');
        expect(getGroupValueLabel('Toilets: yes', 'yes')).toBe('Toilets');
        expect(getGroupValueLabel('Toilets: no', 'no')).toBe('Toilets: no');
    });
});
