import { fmt, localizeOpeningHours } from '@map/util/dateFmt';

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

describe('localizeOpeningHours', () => {
    test('empty input is returned as is', () => {
        expect(localizeOpeningHours('')).toBe('');
        expect(localizeOpeningHours(null)).toBeNull();
        expect(localizeOpeningHours(undefined)).toBeUndefined();
    });

    test('two-letter tokens become weekday names', () => {
        withLanguage('en-US', () => {
            expect(localizeOpeningHours('Mo-Fr')).toBe('Mon-Fri');
            expect(localizeOpeningHours('Sa,Su')).toBe('Sat,Sun');
        });
    });

    test('the rest of the schedule is untouched', () => {
        withLanguage('en-US', () => {
            expect(localizeOpeningHours('Mo-Fr 09:00-18:00; Sa 10:00-14:00')).toBe(
                'Mon-Fri 09:00-18:00; Sat 10:00-14:00'
            );
            // the parser writes the comment of a rule after " - ", the apps show it as it is
            expect(localizeOpeningHours('Mo 10:00-12:00 - off on Mo; Sa 10:00-14:00')).toBe(
                'Mon 10:00-12:00 - off on Mo; Sat 10:00-14:00'
            );
            // a raw value may write a range with spaces, that dash starts no comment
            expect(localizeOpeningHours('Mo - Fr 08:00 - 18:00; Jan - Mar Sa')).toBe(
                'Mon - Fri 08:00 - 18:00; Jan - Mar Sat'
            );
        });
    });

    test('a token inside a word is not a token', () => {
        withLanguage('en-US', () => {
            expect(localizeOpeningHours('Mode Sunny Wet')).toBe('Mode Sunny Wet');
        });
    });

    test('localized weekdays and months', () => {
        withLanguage('uk', () => {
            expect(localizeOpeningHours('Mo-Fr')).toBe('Пн-Пт');
            expect(localizeOpeningHours('Apr-Oct')).toBe('квіт.-жовт.');
        });
        // the es Tuesday is "Mar", it must not be taken for March once more
        withLanguage('es', () => {
            expect(localizeOpeningHours('Tu; Mar')).toBe('Mar; mar');
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
            expect(fmt.wkLongTime(new Date(2025, 8, 4, 18, 30))).toBe('Thursday, 18:30');
        });
    });

    test('long month, with and without the year', () => {
        withLanguage('en-US', () => {
            expect(fmt.dMMMMY(SEP_4_2025)).toBe('September 4, 2025');
            expect(fmt.dMMMM(SEP_4_2025)).toBe('September 4');
        });
        // the day comes first in most locales, the format follows the locale rather than the name
        withLanguage('en-GB', () => {
            expect(fmt.dMMMMY(SEP_4_2025)).toBe('4 September 2025');
            expect(fmt.dMMMM(SEP_4_2025)).toBe('4 September');
        });
    });

    test('month always before the day, whatever the locale order is', () => {
        withLanguage('en-US', () => {
            expect(fmt.monthShortDay(SEP_4_2025)).toBe('Sep 4');
        });
        // uk puts the day first in its own formats, this one keeps the month first
        withLanguage('uk', () => {
            expect(fmt.monthShortDay(SEP_4_2025)).toBe('вер. 4');
        });
    });
});
