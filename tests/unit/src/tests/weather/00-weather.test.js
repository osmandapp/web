import {
    dayFormatter,
    ECWMF_WEATHER_TYPE,
    GFS_WEATHER_TYPE,
    getAlignedStep,
    getBaseStep,
    getSavedWeekForecast,
    LOCAL_STORAGE_WEATHER_FORECAST_WEEK,
    timeFormatter,
} from '@map/manager/WeatherManager';

const gfs = { weatherType: GFS_WEATHER_TYPE };
const ecmwf = { weatherType: ECWMF_WEATHER_TYPE };

test('the forecast row is looked up by the utc day and hour', () => {
    const date = new Date('2026-09-08T22:00:00Z');
    date.getDate = () => 9; // east of utc the same moment is already the next day

    expect(`${dayFormatter(date)} ${timeFormatter(date)}`).toBe('0908 22:00');
});

describe('getBaseStep', () => {
    beforeEach(() => {
        jest.useFakeTimers().setSystemTime(new Date('2026-09-08T10:00:00Z'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('the step grows with the distance from now', () => {
        expect(getBaseStep(23, gfs)).toBe(1);
        expect(getBaseStep(24, gfs)).toBe(3);
        // ecmwf counts the five days from the start of the current day, not from now
        expect(getBaseStep(109, ecmwf)).toBe(3);
        expect(getBaseStep(110, ecmwf)).toBe(6);
    });
});

describe('getAlignedStep', () => {
    const at = (hoursUTC) => new Date(Date.UTC(2026, 8, 10, hoursUTC));
    const step = (direction, hoursUTC) =>
        getAlignedStep({ direction, weatherDate: at(hoursUTC), wtx: gfs, diffHours: 30 }); // 3-hour step

    test('an hour off the grid is pulled onto it, an aligned one moves by a whole step', () => {
        expect(step(0, 12)).toBe(0);
        expect(step(0, 13)).toBe(2);
        expect(step(+1, 12)).toBe(3);
        expect(step(+1, 13)).toBe(2);
        expect(step(-1, 12)).toBe(-3);
        expect(step(-1, 13)).toBe(-1);
    });

    test('every hour is on the grid while the forecast is hourly', () => {
        const hourly = (direction) => getAlignedStep({ direction, weatherDate: at(13), wtx: gfs, diffHours: 5 });

        expect(hourly(0)).toBe(0);
        expect(hourly(+1)).toBe(1);
        expect(hourly(-1)).toBe(-1);
    });
});

describe('getSavedWeekForecast', () => {
    test('only a saved list of forecast rows is restored', () => {
        expect(getSavedWeekForecast()).toBeNull();

        const save = (value) => localStorage.setItem(LOCAL_STORAGE_WEATHER_FORECAST_WEEK, value);

        save('not a json');
        expect(getSavedWeekForecast()).toBeNull();

        save(JSON.stringify([{ temp: 1 }]));
        expect(getSavedWeekForecast()).toBeNull();

        save(JSON.stringify([{ ts: 1, temp: 1 }]));
        expect(getSavedWeekForecast()).toEqual([{ ts: 1, temp: 1 }]);
    });
});
