import { apiGet, apiPost } from '../util/HttpApi';
import i18n from 'i18next';
import { parseColorToRgba, toColorString } from '../util/ColorUtil';

const COLOR_PALETTE_FILE = 'color-palette/user_palette_default.txt';
const COLOR_PALETTE_TYPE = 'FILE';
const PALETTE_HEADER = '# Index,R,G,B,A';
const LOCAL_PALETTE_KEY = 'osmand_color_palette';

// Each entry: { id: number, value: string }
export function parsePalette(text) {
    if (!text) return [];
    return text
        .split('\n')
        .filter((line) => line.trim() && !line.startsWith('#'))
        .map((line) => {
            const parts = line.split(',');
            if (parts.length < 4) return null;
            const id = Number.parseInt(parts[0], 10);
            const r = Number.parseInt(parts[1], 10);
            const g = Number.parseInt(parts[2], 10);
            const b = Number.parseInt(parts[3], 10);
            const a = parts.length >= 5 ? Number.parseInt(parts[4], 10) : 255;
            if (!Number.isFinite(id)) return null;

            return { id, value: toColorString(r, g, b, a) };
        })
        .filter(Boolean);
}

export function stringifyPalette(items) {
    const lines = [PALETTE_HEADER];
    const total = items.length;
    items.forEach(({ value }, index) => {
        const { r, g, b, a } = parseColorToRgba(value);
        lines.push(`${total - index}.0,${r},${g},${b},${a}`);
    });
    return lines.join('\n') + '\n';
}

export async function loadColorPalette() {
    const resp = await apiGet(`${process.env.REACT_APP_USER_API_SITE}/mapapi/get-color-palette`, {});
    if (resp?.data) {
        return parsePalette(resp.data);
    }
    return [];
}

export async function saveColorPalette(items, setNotification) {
    try {
        const text = stringifyPalette(items);
        const zipped = require('pako').gzip(new TextEncoder().encode(text), { to: 'Uint8Array' });
        const blob = new Blob([zipped.buffer], { type: 'application/octet-stream' });
        const data = new FormData();
        data.append('file', blob, COLOR_PALETTE_FILE);
        const params = { name: COLOR_PALETTE_FILE, type: COLOR_PALETTE_TYPE };

        const res = await apiPost(`${process.env.REACT_APP_USER_API_SITE}/mapapi/upload-file`, data, { params });
        if (res?.ok && res?.data?.status === 'ok') {
            return true;
        }
        setNotification?.({
            text: i18n.t('web:color_palette_save_failed'),
            severity: 'error',
        });
        return false;
    } catch (e) {
        setNotification?.({
            text: i18n.t('web:color_palette_save_failed'),
            severity: 'error',
        });
        return false;
    }
}

export function nextPaletteId(items) {
    return (items?.length ?? 0) + 1;
}

export function loadLocalPalette() {
    try {
        const raw = localStorage.getItem(LOCAL_PALETTE_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export function saveLocalPalette(items) {
    try {
        localStorage.setItem(LOCAL_PALETTE_KEY, JSON.stringify(items));
    } catch {
        // localStorage unavailable — silently ignore
    }
}

export function clearLocalPalette() {
    localStorage.removeItem(LOCAL_PALETTE_KEY);
}
