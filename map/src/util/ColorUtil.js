// Generic color helpers shared across the app. Anything specific to the
// user color palette stays in `manager/ColorPaletteManager.js`.

// '#rrggbb' (opaque) / '#aarrggbb' (OsmAnd alpha-first) → {r,g,b,a}.
export function parseColorToRgba(color) {
    if (!color) return { r: 0, g: 0, b: 0, a: 255 };
    const clean = color.replace(/^#/, '');
    if (clean.length === 8) {
        return {
            a: Number.parseInt(clean.substring(0, 2), 16),
            r: Number.parseInt(clean.substring(2, 4), 16),
            g: Number.parseInt(clean.substring(4, 6), 16),
            b: Number.parseInt(clean.substring(6, 8), 16),
        };
    }
    return {
        r: Number.parseInt(clean.substring(0, 2), 16),
        g: Number.parseInt(clean.substring(2, 4), 16),
        b: Number.parseInt(clean.substring(4, 6), 16),
        a: 255,
    };
}

// Channel quartet → '#rrggbb' (opaque) / '#aarrggbb' (OsmAnd alpha-first).
export function toColorString(r, g, b, a = 255) {
    const channels = a === 255 ? [r, g, b] : [a, r, g, b];
    return '#' + channels.map((v) => v.toString(16).padStart(2, '0')).join('');
}

export function hasAlpha(color) {
    return !!color && parseColorToRgba(color).a < 255;
}

export function hexToRgba(hex) {
    return toCssRgb(parseColorToRgba(hex));
}

// Packed ARGB integer → CSS `rgb(...)`.
export function numberToRgba(argb) {
    return toCssRgb(parseArgbInt(argb));
}

// sRGB channels 0–255 → HSV (h 0–360, s,v 0–1).
export function rgbToHsv(r, g, b) {
    let rn = r / 255;
    let gn = g / 255;
    let bn = b / 255;
    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    const d = max - min;
    const v = max;
    const s = max === 0 ? 0 : d / max;
    let h = 0;
    if (d !== 0) {
        if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) * 60;
        else if (max === gn) h = ((bn - rn) / d + 2) * 60;
        else h = ((rn - gn) / d + 4) * 60;
    }

    return { h, s, v };
}

// HSV → sRGB channels 0–255 (h degrees, s and v unit interval).
export function hsvToRgb(h, s, v) {
    const c = v * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = v - c;
    let r = 0;
    let g = 0;
    let b = 0;
    if (h < 60) {
        r = c;
        g = x;
    } else if (h < 120) {
        r = x;
        g = c;
    } else if (h < 180) {
        g = c;
        b = x;
    } else if (h < 240) {
        g = x;
        b = c;
    } else if (h < 300) {
        r = x;
        b = c;
    } else {
        r = c;
        b = x;
    }

    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}

// CSS 'rgb(r, g, b)' / 'rgba(r, g, b, a)' string → {r,g,b,a} or null if not matched.
// Alpha can be 0–1 float, 0–255 integer, or percentage.
export function parseCssRgb(text) {
    const m = text.trim().match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/i);
    if (!m) return null;
    const r = Number.parseInt(m[1], 10);
    const g = Number.parseInt(m[2], 10);
    const b = Number.parseInt(m[3], 10);
    let a = 255;
    if (m[4] !== undefined) {
        const raw = m[4].trim();
        if (raw.endsWith('%')) {
            a = Math.round((Number.parseFloat(raw) / 100) * 255);
        } else {
            const v = Number.parseFloat(raw);
            a = v <= 1 ? Math.round(v * 255) : Math.round(v);
        }
    }
    if ([r, g, b, a].some((v) => Number.isNaN(v) || v < 0 || v > 255)) return null;

    return { r, g, b, a };
}

// Comma-separated channels 'R, G, B' or 'R, G, B, A' (0–255 integers) → {r,g,b,a} or null.
export function parseRgbaChannels(text) {
    const parts = text.split(',').map((s) => Number.parseInt(s.trim(), 10));
    if (parts.length < 3 || parts.length > 4 || parts.some(Number.isNaN)) return null;
    const [r, g, b, a = 255] = parts;
    if ([r, g, b, a].some((v) => v < 0 || v > 255)) return null;

    return { r, g, b, a };
}

// 'RRGGBB' or 'RRGGBBAA' (CSS standard, alpha last) → {r,g,b,a}.
// Use when the 8-char hex has alpha at the end, unlike OsmAnd's AARRGGBB.
export function parseHexAlphaLast(clean) {
    return {
        r: Number.parseInt(clean.substring(0, 2), 16),
        g: Number.parseInt(clean.substring(2, 4), 16),
        b: Number.parseInt(clean.substring(4, 6), 16),
        a: clean.length === 8 ? Number.parseInt(clean.substring(6, 8), 16) : 255,
    };
}

// 'RGB' (3-char shorthand) → {r,g,b,a} with each channel doubled (e.g. 'F' → 0xFF).
export function parseShortHex(clean) {
    return {
        r: Number.parseInt(clean[0] + clean[0], 16),
        g: Number.parseInt(clean[1] + clean[1], 16),
        b: Number.parseInt(clean[2] + clean[2], 16),
        a: 255,
    };
}

// Channel quartet → CSS `rgb(r g b)` / `rgb(r g b / xx%)`. Single source of truth
// for CSS formatting used by hexToRgba / numberToRgba.
function toCssRgb({ r, g, b, a }) {
    if (a === 255) return `rgb(${r} ${g} ${b})`;
    const pct = Number(((a / 255) * 100).toFixed(2));
    return `rgb(${r} ${g} ${b} / ${pct}%)`;
}

// Packed 32-bit integer 0xAARRGGBB → channel quartet.
function parseArgbInt(argb) {
    // >>> 0 turns it into an unsigned 32-bit (e.g. -15679248)
    const u = argb >>> 0;
    return {
        a: (u >>> 24) & 0xff,
        r: (u >>> 16) & 0xff,
        g: (u >>> 8) & 0xff,
        b: u & 0xff,
    };
}
