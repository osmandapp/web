import i18n from 'i18next';
import { normalizeLang } from '../i18n';

const lang = () => normalizeLang(i18n?.language) || (typeof navigator !== 'undefined' ? navigator.language : 'en-US');

const capFirst = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const normAbbr = (s) => capFirst(String(s).replace(/\.$/, ''));

export const fmt = {
    // "MMM d, yyyy" (e.g., "Sep 4, 2025")
    MMMdY: (d) =>
        new Date(d).toLocaleDateString(lang(), {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }),

    // "d MMMM yyyy" (e.g., "4 September 2025")
    dMMMMY: (d) =>
        new Date(d).toLocaleDateString(lang(), {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }),

    // "dd.MM.yyyy" (e.g., "04.09.2025")
    ddMMyyyy: (d) =>
        new Date(d).toLocaleDateString(lang(), {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),

    // "dd.MM" (e.g., "04.09")
    ddMM: (d) =>
        new Date(d).toLocaleDateString(lang(), {
            day: '2-digit',
            month: '2-digit',
        }),

    // Short weekday, capitalized, without trailing dot (e.g., "Mon", "Пн")
    wkShort: (d) => normAbbr(new Date(d).toLocaleDateString(lang(), { weekday: 'short' })),

    // Long weekday, capitalized (e.g., "Monday", "Понедельник")
    wkLong: (d) => capFirst(new Date(d).toLocaleDateString(lang(), { weekday: 'long' })),

    // "MMMM yyyy", capitalized (e.g., "September 2025")
    monthYearLong: (d) => capFirst(new Date(d).toLocaleDateString(lang(), { month: 'long', year: 'numeric' })),

    // 24h time "HH:mm"
    time24: (d) =>
        new Date(d).toLocaleTimeString(lang(), {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }),

    // "MMM d" with month first (e.g., "Sep 13"; uk: "серп. 13")
    monthShortDay: (d) => {
        const date = new Date(d);
        const mon = date.toLocaleDateString(lang(), { month: 'short' });
        const day = date.toLocaleDateString(lang(), { day: 'numeric' });
        return `${mon} ${day}`;
    },

    // "MMM d, yyyy – HH:mm"
    dateTimeShort: (d) =>
        `${new Date(d).toLocaleDateString(lang(), {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })} – ${new Date(d).toLocaleTimeString(lang(), {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })}`,

    // "<Weekday>, HH:mm"
    wkLongTime: (d) =>
        `${capFirst(new Date(d).toLocaleDateString(lang(), { weekday: 'long' }))}, ${new Date(d).toLocaleTimeString(
            lang(),
            { hour: '2-digit', minute: '2-digit', hour12: false }
        )}`,
};

// Replace "Mo/Tu/We/Th/Fr/Sa/Su" tokens with localized short weekday names
export function localizeWeekTokens(scheduleStr) {
    if (!scheduleStr) return scheduleStr;

    const now = new Date();
    const day = (now.getDay() + 6) % 7;
    const base = new Date(now);
    base.setHours(0, 0, 0, 0);
    base.setDate(now.getDate() - day);

    const dayName = (offset) => {
        const d = new Date(base);
        d.setDate(base.getDate() + offset);
        return normAbbr(d.toLocaleDateString(lang(), { weekday: 'short' }));
    };

    const map = {
        Mo: dayName(0),
        Tu: dayName(1),
        We: dayName(2),
        Th: dayName(3),
        Fr: dayName(4),
        Sa: dayName(5),
        Su: dayName(6),
    };

    return scheduleStr.replace(/\b(Mo|Tu|We|Th|Fr|Sa|Su)\b/g, (m) => map[m]);
}
