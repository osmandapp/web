import { fmt, localizeWeekTokens } from '@map/util/dateFmt';

// i18next is not initialised in tests, so the module falls back to navigator.language
function withLanguage(language, run) {
    const prev = navigator.language;
    Object.defineProperty(navigator, 'language', { value: language, configurable: true });
    try {
        run();
    } finally {
        Object.defineProperty(navigator, 'language', { value: prev, configurable: true });
    }
}

const SEP_4_2025 = new Date(2025, 8, 4); // Thursday

describe('localizeWeekTokens', () => {
    test('empty input is returned as is', () => {
        expect(localizeWeekTokens('')).toBe('');
        expect(localizeWeekTokens(null)).toBeNull();
        expect(localizeWeekTokens(undefined)).toBeUndefined();
    });

    test('two-letter tokens become weekday names', () => {
        withLanguage('en-US', () => {
            expect(localizeWeekTokens('Mo-Fr')).toBe('Mon-Fri');
            expect(localizeWeekTokens('Sa,Su')).toBe('Sat,Sun');
        });
    });

    test('the rest of the schedule is untouched', () => {
        withLanguage('en-US', () => {
            expect(localizeWeekTokens('Mo-Fr 09:00-18:00; Sa 10:00-14:00')).toBe(
                'Mon-Fri 09:00-18:00; Sat 10:00-14:00'
            );
        });
    });

    test('a token inside a word is not a token', () => {
        withLanguage('en-US', () => {
            expect(localizeWeekTokens('Mode Sunny Wet')).toBe('Mode Sunny Wet');
        });
    });

    test('localized weekdays', () => {
        withLanguage('uk', () => {
            expect(localizeWeekTokens('Mo-Fr')).toBe('Пн-Пт');
        });
    });
});

describe('fmt', () => {
    test('MMMdY', () => {
        withLanguage('en-US', () => {
            expect(fmt.MMMdY(SEP_4_2025)).toBe('Sep 4, 2025');
        });
    });

    test('ddMMyyyy and ddMM keep two digits', () => {
        withLanguage('en-GB', () => {
            expect(fmt.ddMMyyyy(SEP_4_2025)).toBe('04/09/2025');
            expect(fmt.ddMM(SEP_4_2025)).toBe('04/09');
        });
    });

    test('short weekday is capitalized and loses the trailing dot', () => {
        withLanguage('en-US', () => {
            expect(fmt.wkShort(SEP_4_2025)).toBe('Thu');
        });
        withLanguage('uk', () => {
            expect(fmt.wkShort(SEP_4_2025)).toBe('Чт');
        });
    });

    test('long weekday and month are capitalized', () => {
        withLanguage('uk', () => {
            expect(fmt.wkLong(SEP_4_2025)).toMatch(/^Ч/);
            expect(fmt.monthYearLong(SEP_4_2025)).toMatch(/^В/);
        });
    });

    test('time is 24-hour and zero padded', () => {
        withLanguage('en-US', () => {
            expect(fmt.time24(new Date(2025, 8, 4, 0, 5))).toBe('00:05');
            expect(fmt.time24(new Date(2025, 8, 4, 18, 30))).toBe('18:30');
        });
    });

    test('date and time together', () => {
        withLanguage('en-US', () => {
            expect(fmt.dateTimeShort(new Date(2025, 8, 4, 18, 30))).toBe('Sep 4, 2025 – 18:30');
        });
    });
});
