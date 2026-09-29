import { useContext, useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import { PMTiles } from 'pmtiles';
import { useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import AppContext, { isTravelTrack } from '../../context/AppContext';
import { ACTIVITY_ALL, ACTIVITY_ERROR, ACTIVITY_GARBAGE, ALL_YEARS } from '../../menu/travel/TravelMenu';
import { UNIDENTIFIED_TRACKS_KEY } from '../../menu/travel/ActivitySelect';
import { HEATMAP_PALETTES, HEATMAP_SCALE_LOG } from '../../menu/travel/HeatmapAppearance';
import { apiGet } from '../../util/HttpApi';
import { ensureLeafletPane } from './MvtHybridDemo';
import { HEATMAP_PANE_Z_INDEX } from '../util/ZIndexes';

const HEATMAP_PANE = 'heatmapPane';
const OSM_TRACES_URL = 'https://www.openstreetmap.org/traces';
const HEATMAP_DIMMED_FACTOR = 0.4;
const HEATMAP_SPEED_SUFFIX = '~speed';
const HEATMAP_UNKNOWN = 'unknown';
const HEATMAP_IGNORED_ERROR = 'ignored_error';
const HEATMAP_IGNORED_GROUP = 'ignored';
const TILE_SIZE = 256;
const TILE_PIXELS = TILE_SIZE * TILE_SIZE;
const CACHE_FILES = 320;
const CDF_MAX = 1024;
const KERNELS_CACHE = 24;

const kernels = new Map();

export default function HeatmapLayer() {
    const ctx = useContext(AppContext);

    const { t } = useTranslation();

    const map = useMap();

    const [meta, setMeta] = useState(null);

    const activity = ctx.searchTravelRoutes?.activity ?? ACTIVITY_ALL;
    const year = ctx.searchTravelRoutes?.year ?? ALL_YEARS;
    const isDimmed = !!ctx.searchTravelRoutes?.point || (isTravelTrack(ctx) && ctx.selectedGpxFile?.id != null);

    useEffect(() => {
        if (!ctx.openTravel || meta) {
            return;
        }
        apiGet(`${process.env.REACT_APP_HEATMAP_URL}meta.json`).then((response) => {
            if (response?.data) {
                setMeta(response.data);
            }
        });
    }, [ctx.openTravel]);

    const layer = useMemo(
        () =>
            meta &&
            new HeatmapGridLayer(meta, process.env.REACT_APP_HEATMAP_URL, {
                pane: HEATMAP_PANE,
                maxZoom: 20,
                updateWhenZooming: false,
                keepBuffer: 2,
                attribution: t('web:travel_tracks_attribution', {
                    link: `<a href="${OSM_TRACES_URL}" target="_blank">OpenStreetMap</a>`,
                }),
            }),
        [meta]
    );

    useEffect(() => {
        if (!layer) {
            return;
        }
        const acts = meta.acts.map((a) =>
            activity === ACTIVITY_ALL ? a.group !== HEATMAP_IGNORED_GROUP : activity.includes(storedActivity(a))
        );
        if (year === ALL_YEARS) {
            layer.setFilter(acts, meta.monthMin, meta.monthMax);
        } else {
            const from = (year - meta.monthsBase) * 12;
            layer.setFilter(acts, from, from + 11);
        }
    }, [layer, activity, year]);

    useEffect(() => {
        layer?.setOpacity(ctx.travelHeatmapAppearance.opacity * (isDimmed ? HEATMAP_DIMMED_FACTOR : 1));
    }, [layer, isDimmed, ctx.travelHeatmapAppearance.opacity]);

    useEffect(() => {
        layer?.setAppearance(ctx.travelHeatmapAppearance);
    }, [
        layer,
        ctx.travelHeatmapAppearance.palette,
        ctx.travelHeatmapAppearance.scale,
        ctx.travelHeatmapAppearance.width,
        ctx.travelHeatmapAppearance.glow,
    ]);

    useEffect(() => {
        if (!layer || !ctx.openTravel) {
            return;
        }
        ensureLeafletPane(map, HEATMAP_PANE, HEATMAP_PANE_Z_INDEX);
        layer.addTo(map);

        return () => {
            map.removeLayer(layer);
        };
    }, [layer, ctx.openTravel]);
}

// heat_build.py activity key -> the id the Activity filter sends
function storedActivity(act) {
    if (act.key.endsWith(HEATMAP_SPEED_SUFFIX)) {
        return act.group;
    }
    if (act.key === HEATMAP_UNKNOWN) {
        return UNIDENTIFIED_TRACKS_KEY;
    }
    if (act.key === HEATMAP_IGNORED_ERROR) {
        return ACTIVITY_ERROR;
    }
    if (act.group === HEATMAP_IGNORED_GROUP) {
        return ACTIVITY_GARBAGE;
    }

    return act.key;
}

// Gaussian drawing from public/prototypes/heatmap.html over tiles built by web-server-config/test/heat_build.py
const HeatmapGridLayer = L.GridLayer.extend({
    initialize(meta, baseUrl, options) {
        this._meta = meta;
        this._archives = {};
        Object.entries(meta.archives).forEach(([level, archive]) => {
            this._archives[level] = new PMTiles(baseUrl + archive.file);
        });
        this._levelsDesc = Object.keys(meta.archives)
            .map(Number)
            .sort((a, b) => b - a);
        L.setOptions(this, { ...options, minZoom: this._levelsDesc.at(-1) - 8 });

        this._files = new Map();
        this._clock = 0;
        this._binMask = new Uint8Array(65536);
        this._filterEpoch = 0;
        this._norms = {};

        this.on('load', this._updateAutoScale, this);
    },

    onAdd(map) {
        L.GridLayer.prototype.onAdd.call(this, map);
        map.on('moveend', this._updateAutoScale, this);
    },

    onRemove(map) {
        map.off('moveend', this._updateAutoScale, this);
        L.GridLayer.prototype.onRemove.call(this, map);
    },

    createTile(coords, done) {
        const tile = document.createElement('canvas');
        tile.width = tile.height = TILE_SIZE;
        this._drawTile(tile, coords, () => done(null, tile));

        return tile;
    },

    // acts: on/off per meta.acts index; from, to: months since meta.monthsBase
    setFilter(acts, from, to) {
        const monthBits = this._meta.monthBits;
        this._binMask = new Uint8Array(65536);
        acts.forEach((on, a) => {
            if (!on) return;
            for (let m = from; m <= to; m++) {
                this._binMask[(a << monthBits) | m] = 1;
            }
        });
        this._filterEpoch++;
        this._norms = {};
        if (this._map && !this._updateAutoScale()) {
            this._repaint();
        }
    },

    setAppearance({ palette, scale, width, glow }) {
        this._lut = buildLut(HEATMAP_PALETTES[palette].stops);
        this._scale = scale;
        this._width = width;
        this._glow = glow;
        if (this._map) {
            this._repaint();
        }
    },

    _levelFor(z) {
        return this._levelsDesc.find((level) => level <= z + 8) ?? null;
    },

    _loadFile(level, x, y) {
        const key = `${level}/${x}/${y}`;
        let entry = this._files.get(key);
        if (entry) {
            entry.used = ++this._clock;
            return entry.promise;
        }
        entry = { used: ++this._clock, data: null };
        entry.promise = this._archives[level]
            .getZxy(level - 8, x, y)
            .then((tile) => (tile ? parseTile(new Uint8Array(tile.data)) : null))
            .catch(() => null)
            .then((data) => {
                entry.data = data;
                entry.loaded = true;
                return data;
            });
        this._files.set(key, entry);
        if (this._files.size > CACHE_FILES) {
            [...this._files.entries()]
                .sort((a, b) => a[1].used - b[1].used)
                .slice(0, this._files.size - CACHE_FILES)
                .forEach(([k]) => this._files.delete(k));
        }

        return entry.promise;
    },

    _sums(f) {
        if (f.sumsEpoch === this._filterEpoch) return f.sums;
        const s = f.sums || new Uint32Array(f.nc);
        for (let i = 0; i < f.nc; i++) {
            let v = 0;
            for (let j = f.off[i]; j < f.off[i + 1]; j++) {
                if (this._binMask[f.bin[j]]) v += f.cnt[j];
            }
            s[i] = v;
        }
        f.sums = s;
        f.sumsEpoch = this._filterEpoch;

        return s;
    },

    _tileGeom(coords) {
        const level = this._levelFor(coords.z);
        if (level === null) return null;
        const dz = coords.z - (level - 8);
        const cellPx = 1 << dz;
        const span = TILE_SIZE >> dz;
        const cx0 = coords.x * span;
        const cy0 = coords.y * span;
        const m = Math.ceil(kernelFor(cellPx, this._width, this._glow).R / cellPx);

        return {
            level,
            dz,
            cellPx,
            span,
            m,
            cx0,
            cy0,
            fx0: Math.floor((cx0 - m) / TILE_SIZE),
            fx1: Math.floor((cx0 + span - 1 + m) / TILE_SIZE),
            fy0: Math.floor((cy0 - m) / TILE_SIZE),
            fy1: Math.floor((cy0 + span - 1 + m) / TILE_SIZE),
        };
    },

    _filesAround(g) {
        const n = 1 << (g.level - 8);
        const files = [];
        for (let fx = Math.max(0, g.fx0); fx <= Math.min(n - 1, g.fx1); fx++) {
            for (let fy = Math.max(0, g.fy0); fy <= Math.min(n - 1, g.fy1); fy++) {
                files.push([fx, fy]);
            }
        }

        return files;
    },

    _loadedFiles(g) {
        return this._filesAround(g).filter(([fx, fy]) => this._files.get(`${g.level}/${fx}/${fy}`)?.loaded).length;
    },

    // shown as soon as its own file is in; the neighbours only add the blur that crosses the tile edges
    async _drawTile(canvas, coords, onShown) {
        const g = this._tileGeom(coords);
        const files = g ? this._filesAround(g) : [];
        const own = [];
        const neighbours = [];
        files.forEach(([fx, fy]) => {
            const file = this._loadFile(g.level, fx, fy);
            if (fx === Math.floor(g.cx0 / TILE_SIZE) && fy === Math.floor(g.cy0 / TILE_SIZE)) {
                own.push(file);
            } else {
                neighbours.push(file);
            }
        });
        await Promise.all(own);
        const complete = !g || this._loadedFiles(g) === files.length;
        this._paintTile(canvas, coords);
        onShown?.();
        if (!complete) {
            await Promise.all(neighbours);
            this._paintTile(canvas, coords);
        }
    },

    // every cell is splatted with a Gaussian: W = coverage, V = coverage x tracks; colour from V / W
    _paintTile(canvas, coords) {
        const ctx = canvas.getContext('2d');
        const g = this._tileGeom(coords);
        if (!g) {
            ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
            return;
        }
        const key = `${g.level}|${g.dz}|${g.cx0}|${g.cy0}|${this._width}|${this._glow > 0}|${this._filterEpoch}|${this._loadedFiles(g)}`;
        let F = canvas._heatSplat;
        if (F?.key !== key) {
            F = canvas._heatSplat = this._splat(g, key);
        }
        ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
        if (!F.any) return;

        const tf = this._normFor(g.level);
        const colour = new Int32Array(CDF_MAX + 2).fill(-1);
        const img = ctx.createImageData(TILE_SIZE, TILE_SIZE);
        const px = img.data;
        for (let p = 0; p < TILE_PIXELS; p++) {
            const w = F.W[p];
            if (w < 0.004) continue;
            const a = Math.max(smoothstep(0.12, 0.42, w), this._glow * 0.55 * smoothstep(0.004, 0.12, w));
            if (a <= 0) continue;
            const n = Math.min(CDF_MAX + 1, Math.max(1, Math.round(F.V[p] / w)));
            let c = colour[n];
            if (c < 0) {
                c = colour[n] = Math.round(tf(n) * 255) * 3;
            }
            const k = p * 4;
            px[k] = this._lut[c];
            px[k + 1] = this._lut[c + 1];
            px[k + 2] = this._lut[c + 2];
            px[k + 3] = a * 255;
        }
        ctx.putImageData(img, 0, 0);
    },

    _splat(g, key) {
        const K = kernelFor(g.cellPx, this._width, this._glow);
        const W = new Float32Array(TILE_PIXELS);
        const V = new Float32Array(TILE_PIXELS);
        let any = false;
        for (let fx = g.fx0; fx <= g.fx1; fx++) {
            for (let fy = g.fy0; fy <= g.fy1; fy++) {
                const f = this._files.get(`${g.level}/${fx}/${fy}`)?.data;
                if (!f) continue;
                const ly0 = Math.max(0, g.cy0 - g.m - fy * TILE_SIZE);
                const ly1 = Math.min(TILE_SIZE - 1, g.cy0 + g.span - 1 + g.m - fy * TILE_SIZE);
                const lx0 = g.cx0 - g.m - fx * TILE_SIZE;
                const lx1 = g.cx0 + g.span - 1 + g.m - fx * TILE_SIZE;
                if (ly0 > ly1 || lx1 < 0 || lx0 > TILE_SIZE - 1) {
                    continue;
                }
                const s = this._sums(f);
                const i1 = lowerBound(f.cell, f.nc, (ly1 + 1) * TILE_SIZE);
                for (let i = lowerBound(f.cell, f.nc, ly0 * TILE_SIZE); i < i1; i++) {
                    const v = s[i];
                    if (v < 1) continue;
                    const cx = f.cell[i] & 255;
                    if (cx < lx0 || cx > lx1) {
                        continue;
                    }
                    const bx = (fx * TILE_SIZE + cx - g.cx0) * g.cellPx + K.half;
                    const by = (fy * TILE_SIZE + (f.cell[i] >> 8) - g.cy0) * g.cellPx + K.half;
                    const ky0 = Math.max(-K.R, -by);
                    const ky1 = Math.min(K.R, TILE_SIZE - 1 - by);
                    const kx0 = Math.max(-K.R, -bx);
                    const kx1 = Math.min(K.R, TILE_SIZE - 1 - bx);
                    for (let ky = ky0; ky <= ky1; ky++) {
                        const row = (by + ky) * TILE_SIZE + bx;
                        const krow = (ky + K.R) * K.size + K.R;
                        for (let kx = kx0; kx <= kx1; kx++) {
                            const w = K.w[krow + kx];
                            W[row + kx] += w;
                            V[row + kx] += w * v;
                        }
                    }
                    any = true;
                }
            }
        }

        return { key, W, V, any };
    },

    // count -> 0..1: half mid-rank CDF of the visible cells (1, 2, 3 tracks get distinct colours), half log
    _normFor(level) {
        const n = this._norms[level];
        if (n && this._scale !== HEATMAP_SCALE_LOG) {
            const lo = n.cdf[n.vmin];
            const span = n.cdf[Math.min(n.top, CDF_MAX)] - lo;
            const lt = Math.log(n.top / n.vmin);
            if (span <= 0 || lt <= 0) {
                return () => 0;
            }

            return (v) =>
                Math.min(
                    1,
                    Math.max(0, (0.5 * ((v <= CDF_MAX ? n.cdf[v] : 1) - lo)) / span + (0.5 * Math.log(v / n.vmin)) / lt)
                );
        }
        const lt = Math.log(Math.max(2, n?.top ?? (this._meta.levelStats[level]?.p995 || 10)));

        return (v) => Math.min(1, Math.log(v) / lt);
    },

    // histogram of the visible cells; repaints (and returns true) only when the colour scale moved
    _updateAutoScale() {
        if (!this._map) return false;
        const z = Math.round(this._map.getZoom());
        const level = this._levelFor(z);
        if (level === null) return false;
        const bounds = this._map.getBounds();
        const nw = this._map.project(bounds.getNorthWest(), z);
        const se = this._map.project(bounds.getSouthEast(), z);
        const s = TILE_SIZE * Math.pow(2, z - (level - 8));
        const hist = new Float64Array(CDF_MAX + 2);
        let n = 0;
        for (let fx = Math.floor(nw.x / s); fx <= Math.floor(se.x / s); fx++) {
            for (let fy = Math.floor(nw.y / s); fy <= Math.floor(se.y / s); fy++) {
                const f = this._files.get(`${level}/${fx}/${fy}`)?.data;
                if (!f) continue;
                const v = this._sums(f);
                for (const element of v) {
                    if (element >= 1) {
                        hist[Math.min(CDF_MAX + 1, element)]++;
                        n++;
                    }
                }
            }
        }
        if (!n) return false;

        let acc = 0;
        let top = 0;
        let vmin = 0;
        for (let v = 1; v <= CDF_MAX + 1; v++) {
            if (!vmin && hist[v]) {
                vmin = v;
            }
            acc += hist[v];
            if (!top && acc >= n * 0.995) {
                top = v;
            }
        }
        top = Math.max(vmin + 1, top);
        const cdf = new Float32Array(CDF_MAX + 1);
        acc = 0;
        for (let v = 1; v <= CDF_MAX; v++) {
            const below = acc;
            acc += hist[v];
            cdf[v] = (below + acc) / 2 / n;
        }
        const probe = [vmin, vmin + 1, vmin + 2, vmin + 4, vmin + 9].map((v) => cdf[Math.min(v, CDF_MAX)]);
        const old = this._norms[level];
        const moved =
            old?.vmin !== vmin ||
            Math.abs(Math.log(top / old.top)) > 0.2 ||
            probe.some((p, i) => Math.abs(p - old.probe[i]) > 0.05);
        if (!moved) return false;
        this._norms[level] = { top, vmin: Math.min(vmin, CDF_MAX), cdf, probe };
        this._repaint();

        return true;
    },

    _repaint() {
        Object.values(this._tiles).forEach((t) => this._drawTile(t.el, t.coords));
    },
});

// 'THT1', uint32 cells, uint32 bins, uint16 cell[cells], uint16 nbins[cells], uint16 bin[bins], uint16 count[bins]
function parseTile(buf) {
    const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    const nc = dv.getUint32(4, true);
    const nb = dv.getUint32(8, true);
    const ab = buf.buffer.slice(buf.byteOffset + 12, buf.byteOffset + 12 + 4 * nc + 4 * nb);
    const nbins = new Uint16Array(ab, 2 * nc, nc);
    const off = new Uint32Array(nc + 1);
    for (let i = 0; i < nc; i++) {
        off[i + 1] = off[i] + nbins[i];
    }

    return {
        nc,
        cell: new Uint16Array(ab, 0, nc),
        off,
        bin: new Uint16Array(ab, 4 * nc, nb),
        cnt: new Uint16Array(ab, 4 * nc + 2 * nb, nb),
        sums: null,
        sumsEpoch: -1,
    };
}

// sigma >= half a cell hides the staircase of neighbouring cells; a straight run of cells peaks at ~1
function kernelFor(cellPx, width, glow) {
    const key = `${cellPx}|${width}|${glow > 0}`;
    let k = kernels.get(key);
    if (k) return k;
    const sigma = Math.max(width / 3.2, cellPx * 0.55);
    const R = Math.min(160, Math.ceil(sigma * (glow > 0 ? 3 : 2)));
    const size = 2 * R + 1;
    const w = new Float32Array(size * size);
    const shift = cellPx === 1 ? 0 : 0.5;
    const norm = cellPx / (sigma * Math.sqrt(2 * Math.PI));
    for (let ky = -R; ky <= R; ky++) {
        for (let kx = -R; kx <= R; kx++) {
            const dx = kx + shift;
            const dy = ky + shift;
            w[(ky + R) * size + kx + R] = Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma)) * norm;
        }
    }
    k = { R, size, w, half: cellPx >> 1 };
    kernels.set(key, k);
    if (kernels.size > KERNELS_CACHE) {
        kernels.delete(kernels.keys().next().value);
    }

    return k;
}

function buildLut(stops) {
    const lut = new Uint8ClampedArray(768);
    const hex = (h) => [1, 3, 5].map((i) => Number.parseInt(h.slice(i, i + 2), 16));
    for (let i = 0; i < 256; i++) {
        const t = i / 255;
        let k = 1;
        while (k < stops.length - 1 && stops[k][0] < t) {
            k++;
        }
        const [t0, c0] = stops[k - 1];
        const [t1, c1] = stops[k];
        const a = hex(c0);
        const b = hex(c1);
        const f = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)));
        for (let j = 0; j < 3; j++) {
            lut[i * 3 + j] = a[j] + (b[j] - a[j]) * f;
        }
    }

    return lut;
}

function lowerBound(a, n, x) {
    let lo = 0;
    let hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }

    return lo;
}

function smoothstep(e0, e1, x) {
    const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));

    return t * t * (3 - 2 * t);
}
