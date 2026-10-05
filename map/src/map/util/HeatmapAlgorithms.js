export const TILE_SIZE = 256;
export const TILE_PIXELS = TILE_SIZE * TILE_SIZE;
export const CDF_MAX = 1024;
const KERNELS_CACHE = 24;

const kernels = new Map();

// 'THT1', uint32 cells, uint32 bins, uint16 cell[cells], uint16 nbins[cells], uint16 bin[bins], uint16 count[bins]
export function parseTile(buf) {
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
export function kernelFor(cellPx, width, glow) {
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

// tent of half-width h >= one cell: neighbouring tents add up to bilinear occupancy, so at low zoom a line of cells is
// a crisp band `width` px wide and an empty cell stays empty
export function tentFor(cellPx, width) {
    const h = Math.max(cellPx, (width + cellPx) / 2);
    const key = `t|${cellPx}|${h}`;
    let k = kernels.get(key);
    if (k) return k;
    const R = Math.ceil(h);
    const size = 2 * R + 1;
    const w = new Float32Array(size * size);
    const shift = cellPx === 1 ? 0 : 0.5;
    for (let ky = -R; ky <= R; ky++) {
        for (let kx = -R; kx <= R; kx++) {
            w[(ky + R) * size + kx + R] =
                Math.max(0, 1 - Math.abs(kx + shift) / h) * Math.max(0, 1 - Math.abs(ky + shift) / h);
        }
    }
    k = { R, size, w, half: cellPx >> 1, h };
    kernels.set(key, k);
    if (kernels.size > KERNELS_CACHE) {
        kernels.delete(kernels.keys().next().value);
    }

    return k;
}

export function buildLut(stops) {
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

export function lowerBound(a, n, x) {
    let lo = 0;
    let hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }

    return lo;
}

export function smoothstep(e0, e1, x) {
    const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));

    return t * t * (3 - 2 * t);
}
