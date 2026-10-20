import { getValueLabelParts, splitNameValue } from '@map/manager/PoiManager';

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

describe('getValueLabelParts', () => {
    test('a value outside a group or of one tag: the tag name over the value', () => {
        expect(getValueLabelParts('Smoking: not allowed', 'NAME_OVER_VALUE')).toEqual({
            tagName: 'Smoking',
            tagValue: 'Not allowed',
        });
        expect(getValueLabelParts('Takeaway: yes', 'NAME_OVER_VALUE')).toEqual({
            tagName: 'Takeaway',
            tagValue: 'Yes',
        });
    });

    test('an option of a list: its name for yes, other values whole', () => {
        expect(getValueLabelParts('Kayaks: yes', 'NAME')).toEqual({ tagName: null, tagValue: 'Kayaks' });
        expect(getValueLabelParts('Kayaks: limited', 'WHOLE')).toEqual({ tagName: null, tagValue: 'Kayaks: limited' });
    });

    test('a translation without a name or no label from an older server: as it is', () => {
        expect(getValueLabelParts('Not allowed', 'NAME_OVER_VALUE')).toEqual({
            tagName: null,
            tagValue: 'Not allowed',
        });
        expect(getValueLabelParts('Cash', 'NAME')).toEqual({ tagName: null, tagValue: 'Cash' });
        expect(getValueLabelParts('Toilets: yes', undefined)).toEqual({ tagName: null, tagValue: 'Toilets: yes' });
    });
});
