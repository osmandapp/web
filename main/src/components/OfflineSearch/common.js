import { useEffect, useState } from 'react';
import SPATIAL from './data/spatial';

export const WORDS = SPATIAL.words.map((w) => w[0].toUpperCase() + w.slice(1));
export const WORD_COLORS = ['#ff8800', '#ffd166', '#e879f9', '#7bdff2', '#3ddc84', '#b48cff', '#ff6b7a', '#4ea1ff'];
export const fmt = (n) => Math.round(n).toLocaleString('en-US');
export const bits = (m) => WORDS.map((_, i) => i).filter((i) => (m >> i) & 1);
export const maskName = (m) => bits(m).map((i) => WORDS[i]).join(' ');

// The objects the engine found for the 8 words: word mask + position, decoded once in the browser
let points = null;
export function getPoints() {
  if (points) return points;
  const b = Uint8Array.from(atob(SPATIAL.b64), (c) => c.charCodeAt(0));
  const dv = new DataView(b.buffer), n = b.length / 5;
  points = { n, m: new Uint8Array(n), la: new Float32Array(n), lo: new Float32Array(n) };
  for (let i = 0; i < n; i++) {
    points.m[i] = dv.getUint8(i * 5);
    points.la[i] = SPATIAL.la0 + dv.getUint16(i * 5 + 1, true) * SPATIAL.q;
    points.lo[i] = SPATIAL.lo0 + dv.getUint16(i * 5 + 3, true) * SPATIAL.q;
  }
  return points;
}

// An equirectangular view of mainland Portugal fitted into a canvas of width w
const LON0 = -9.65, LON1 = -6.05, LAT0 = 36.85, LAT1 = 42.25, KX = Math.cos((39.5 * Math.PI) / 180);
export function portugalView(w) {
  const s = w / ((LON1 - LON0) * KX), h = Math.round((LAT1 - LAT0) * s);
  return { w, h, xy: (la, lo) => [(lo - LON0) * KX * s, (LAT1 - la) * s] };
}

export function setupCanvas(cv, w, h) {
  const r = window.devicePixelRatio || 1;
  cv.width = Math.round(w * r);
  cv.height = Math.round(h * r);
  const g = cv.getContext('2d');
  g.setTransform(r, 0, 0, r, 0, 0);
  return g;
}

// The backdrop is every object found for the query, so the country is drawn by the data itself
export function drawPortugal(g, v) {
  const P = getPoints();
  g.fillStyle = '#0f131b';
  g.fillRect(0, 0, v.w, v.h);
  g.fillStyle = '#2a3346';
  for (let i = 0; i < P.n; i++) {
    const [x, y] = v.xy(P.la[i], P.lo[i]);
    g.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
  }
}

// Web map tile of a point, and its number on the Z-curve: the children of tile t are 4t … 4t + 3
export function tileXY(la, lo, z) {
  const n = 2 ** z, r = (la * Math.PI) / 180;
  return [Math.floor(((lo + 180) / 360) * n), Math.floor(((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n)];
}
export function zNumber(x, y, z) {
  let c = 0;
  for (let i = z - 1; i >= 0; i--) c = c * 4 + ((((y >> i) & 1) << 1) | ((x >> i) & 1));
  return c;
}
export function tileBounds(x, y, z) {
  const n = 2 ** z, lat = (t) => (Math.atan(Math.sinh(Math.PI * (1 - (2 * t) / n))) * 180) / Math.PI;
  return { lo0: (x / n) * 360 - 180, lo1: ((x + 1) / n) * 360 - 180, la1: lat(y), la0: lat(y + 1) };
}

// Width of the element, so canvases follow the column on phones
export function useWidth(ref, max) {
  const [w, setW] = useState(max);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const upd = () => setW(Math.min(max, Math.floor(el.clientWidth)));
    upd();
    const ro = new ResizeObserver(upd);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, max]);
  return w;
}
