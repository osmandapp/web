import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './styles.module.css';
import LIB from './data/librarian';
import ryeMap from './data/rye_map.webp';
import { fmt, setupCanvas, useWidth } from './common';

// The old search as a librarian, step by step as in the video: the key word on the map of Portugal, which word is the key,
// the shelf of a small town, London's one shelf, one word with five kinds of objects. Drawn at 1920×1080 and scaled down.
const W = 1920, H = 1080, FONT = '-apple-system, "Helvetica Neue", sans-serif';
const ORANGE = '#ff8800', RED = '#ff6b7a', GREEN = '#3ddc84', GOLD = '#ffd166', BLUE = '#4ea1ff', DIM = '#9aa3b2';
const TR = LIB.travessa, RYE = LIB.rye, LON = LIB.london, TILE = LIB.ryeTile;

const clamp = (x) => Math.max(0, Math.min(1, x));
const ease = (x) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const pr = (t, a, b) => ease((t - a) / (b - a));
const lerp = (a, b, k) => a + (b - a) * k;
const rnd = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

const Q = ({ children }) => <code className={s.code}>{children}</code>;

// Every step: its scene, the line under the picture and how long it stays when playing
const STEPS = [
  { sc: 'key', ms: 5000, say: <>Every search starts with a key: take the rarest word, find every place that has it, and let the other words filter.</> },
  { sc: 'key', ms: 5000, say: <><Q>Travessa de Santo António</Q> in Portugal. <b>Travessa</b> alone: 2,601 places.</> },
  { sc: 'key', ms: 3500, say: <>Add <b>Santo</b>: 545 places are left.</> },
  { sc: 'key', ms: 3500, say: <>Add <b>António</b>: 479.</> },
  { sc: 'key', ms: 4500, say: <>The nearest one wins — the street in Leiria.</> },
  { sc: 'key', ms: 6500, say: <>But that only works if all the words sit in one name. A street and its town are two objects: look for <Q>Travessa Leiria</Q> in one name, and you get zero.</> },
  { sc: 'which', ms: 6000, say: <>So which word is the key? <Q>Pennsylvania Avenue, Utah, United States of America</Q>: how many objects have each word, worldwide.</> },
  { sc: 'which', ms: 5000, say: <><b>Avenue</b> is in over a million street names, <b>of</b> in 400,000 places.</> },
  { sc: 'which', ms: 6000, say: <>Our own code changed its mind three times: America, then Utah, then Pennsylvania.</> },
  { sc: 'shelf', ms: 4500, say: <>OsmAnd searched like a librarian from day one: every town is a shelf, every street a book on it. Here is Rye, a small town in England.</> },
  { sc: 'shelf', ms: 5500, say: <>In 2010 you did it yourself: pick a city, then a street, then a house.</> },
  { sc: 'shelf', ms: 4000, say: <>Later the app took those steps for you. Find the town…</> },
  { sc: 'shelf', ms: 5000, say: <>…walk along its shelf of {RYE.streets.length} streets, book by book…</> },
  { sc: 'shelf', ms: 5000, say: <>…open the street, find the house: <Q>10 High Street, Rye</Q>.</> },
  { sc: 'london', ms: 4000, say: <>It works — until the town is London. Downing Street is one book…</> },
  { sc: 'london', ms: 6000, say: <>…on one shelf of {fmt(LON.n)} streets. And a street that is not on the shelf means opening every book.</> },
  { sc: 'word', ms: 5000, say: <>And one word can be anything. <Q>António</Q> in Portugal is 3,884 objects of five kinds.</> },
  { sc: 'word', ms: 4000, say: <>A village asks: which of my streets match?</> },
  { sc: 'word', ms: 4000, say: <>A street asks: which town am I in?</> },
  { sc: 'word', ms: 4000, say: <>A place asks: what is around me?</> },
  { sc: 'word', ms: 5000, say: <>{fmt(LIB.antonio.reduce((a, x) => a + x.ans, 0))} questions for a single word — and the query has more words.</> },
];
const SCENES = [['key', 'The key'], ['which', 'Which word?'], ['shelf', 'A small town'], ['london', 'London'], ['word', 'One word']];
const FIRST = Object.fromEntries(SCENES.map(([id]) => [id, STEPS.findIndex((x) => x.sc === id)]));

// ---------- drawing (g is the context of the frame being drawn) ----------
let g = null, NOW = 0, IMG = null;
function rrect(x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }
function text(str, x, y, size, color, a = 1, weight = 700, align = 'left', halo = 0) {
  if (a <= 0) return;
  g.globalAlpha = a; g.fillStyle = color; g.font = `${weight} ${size}px ${FONT}`; g.textAlign = align;
  if (halo) { g.lineJoin = 'round'; g.lineWidth = halo; g.strokeStyle = 'rgba(11,13,18,.85)'; g.strokeText(str, x, y); }
  g.fillText(str, x, y); g.globalAlpha = 1; g.textAlign = 'left';
}
function panel(x, y, w, h, a, border = '#2a303c', fill = '#121821') {
  if (a <= 0) return; g.save(); g.globalAlpha = a; rrect(x, y, w, h, 18); g.fillStyle = fill; g.fill();
  g.lineWidth = 3; g.strokeStyle = border; g.stroke(); g.restore();
}
function stamp(str, cx, cy, size, color, rot, p, a = 1) {
  if (p <= 0 || a <= 0) return; const k = lerp(2.2, 1, ease(p * 1.4));
  g.save(); g.translate(cx, cy); g.rotate(rot); g.scale(k, k); g.globalAlpha = a * clamp(p * 3);
  g.font = `900 ${size}px ${FONT}`; const bw = g.measureText(str).width + size * 0.9, bh = size * 1.5;
  rrect(-bw / 2, -bh / 2, bw, bh, size * 0.18); g.fillStyle = 'rgba(8,12,10,.82)'; g.fill();
  g.lineWidth = size * 0.12; g.strokeStyle = color; g.stroke();
  g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(str, 0, size * 0.04);
  g.restore(); g.textAlign = 'left'; g.textBaseline = 'alphabetic';
}
const ROLE = { key: ORANGE, filter: BLUE, street: BLUE, town: GREEN, word: DIM };
function chipW(str, size) { g.font = `800 ${size}px ${FONT}`; return g.measureText(str).width + size * 0.9; }
function chip(str, cx, cy, size, role, a = 1, label = '', glow = 0) {
  if (a <= 0) return; const col = ROLE[role], w = chipW(str, size), h = size * 1.45;
  g.save(); g.globalAlpha = a;
  if (glow > 0) { g.shadowColor = col; g.shadowBlur = 40 * glow; }
  rrect(cx - w / 2, cy - h / 2, w, h, size * 0.28); g.fillStyle = '#151a23'; g.fill(); g.shadowColor = 'transparent';
  g.globalAlpha = a * 0.22; g.fillStyle = col; g.fill(); g.globalAlpha = a; g.lineWidth = Math.max(3, size * 0.05); g.strokeStyle = col; g.stroke();
  g.restore();
  text(str, cx, cy + size * 0.36, size, '#fff', a, 800, 'center');
  if (label) text(label.toUpperCase(), cx, cy + h / 2 + size * 0.5, Math.max(22, size * 0.3), col, a, 800, 'center');
}
function chipRow(items, cx, size, gap = 0.3) {
  const ws = items.map((x) => chipW(x, size)), tot = ws.reduce((a, b) => a + b, 0) + gap * size * (items.length - 1);
  let x = cx - tot / 2;
  return ws.map((w) => { const c = x + w / 2; x += w + gap * size; return c; });
}
function mapPin(x, y, a = 1, color = ORANGE, size = 1) {
  if (a <= 0) return; g.save(); g.globalAlpha = a; g.translate(x, y); g.scale(size, size);
  g.fillStyle = color; g.beginPath(); g.arc(0, -46, 26, Math.PI * 0.85, Math.PI * 0.15); g.lineTo(0, 0); g.closePath(); g.fill();
  g.fillStyle = '#fff'; g.beginPath(); g.arc(0, -46, 10, 0, 7); g.fill(); g.restore();
}

// --- the key: the map of Portugal ---
const PTC = { lat: 39.6, lon: -8.0, s: 160, cx: 1450, cy: 560 };
const PP = (lat, lon) => [PTC.cx + (lon - PTC.lon) * PTC.s * Math.cos((39.6 * Math.PI) / 180), PTC.cy - (lat - PTC.lat) * PTC.s];
function portugal(a) {
  if (a <= 0) return; g.save(); g.globalAlpha = a; g.beginPath();
  TR.outline.forEach(([lo, la], i) => { const [x, y] = PP(la, lo); if (i) g.lineTo(x, y); else g.moveTo(x, y); }); g.closePath();
  g.fillStyle = '#1a2130'; g.fill(); g.strokeStyle = '#3d4a60'; g.lineWidth = 3; g.stroke(); g.restore();
  text('PORTUGAL', ...PP(41.75, -7.3), 30, '#5d6a80', a, 800, 'center');
}

// --- books: Rye's shelf and London's wall ---
const BOOK = ['#7a2e2a', '#2f4a6b', '#2e5a45', '#8a6a2a', '#5a3a2a', '#3a2f4f', '#6b6b2f', '#1f2a38', '#8c4a2f', '#4a5a6b', '#6a2f45', '#2f5a5a'];
function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${[n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.round(f < 0 ? v * (1 + f) : v + (255 - v) * f))})`;
}
const LIT = Object.fromEntries(BOOK.map((c) => [c, shade(c, 0.25)]));
function spine(x, y, w, h, col, name, a, glow = 0, cur = 0) {  // a cloth spine, gilt bands, the street name along it
  if (a <= 0) return;
  if (w < 5) { g.globalAlpha = a; g.fillStyle = LIT[col]; g.fillRect(x, y, w, h); g.globalAlpha = 1; return; }
  g.save(); g.globalAlpha = a;
  const gr = g.createLinearGradient(x, 0, x + w, 0);
  gr.addColorStop(0, shade(col, -0.5)); gr.addColorStop(0.32, shade(col, 0.14)); gr.addColorStop(1, shade(col, -0.55));
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  if (cur) { g.globalAlpha = a * cur; g.fillStyle = GOLD; g.fillRect(x, y, w, h); g.globalAlpha = a; }
  if (w > 10) { g.fillStyle = 'rgba(214,178,94,.8)'; const bh = Math.max(1, h * 0.012); g.fillRect(x + 1, y + h * 0.06, w - 2, bh); g.fillRect(x + 1, y + h * 0.1, w - 2, bh); g.fillRect(x + 1, y + h * 0.9, w - 2, bh); }
  if (name && w >= 13) {
    let fs = Math.min(w * 0.52, 30); g.font = `700 ${fs}px ${FONT}`; const L = g.measureText(name).width, maxL = h * 0.72;
    if (L > maxL) { fs *= maxL / L; g.font = `700 ${fs}px ${FONT}`; }
    g.translate(x + w / 2 + fs * 0.36, y + h * 0.86); g.rotate(-Math.PI / 2); g.fillStyle = cur > 0.5 ? '#0b0d12' : '#f3e6c4'; g.fillText(name, 0, 0);
  }
  g.restore();
  if (glow > 0) { g.save(); g.globalAlpha = a * glow; g.strokeStyle = ORANGE; g.lineWidth = 5; g.shadowColor = ORANGE; g.shadowBlur = 24; g.strokeRect(x - 3, y - 3, w + 6, h + 6); g.restore(); }
}
function plank(x, y, w, a, th = 22) {
  if (a <= 0) return; g.save(); g.globalAlpha = a; const gr = g.createLinearGradient(0, y, 0, y + th);
  gr.addColorStop(0, '#8a6242'); gr.addColorStop(1, '#4a3222'); g.fillStyle = gr; g.fillRect(x, y, w, th);
  g.fillStyle = 'rgba(0,0,0,.45)'; g.fillRect(x, y + th, w, th * 0.6); g.restore();
}
// Rye: one book per street, alphabetical, on four shelves around the bookcase centre
const RS = (() => {
  const r = rnd(7), out = [], RW = 900, RH = 230; let x = 0, row = 0;
  RYE.streets.forEach((nm) => { const w = 26 + r() * 10; if (x + w > RW) { x = 0; row++; } out.push({ nm, x: x - RW / 2, w, h: RH * (0.7 + 0.2 * r()), row, col: BOOK[Math.floor(r() * BOOK.length)] }); x += w + 2; });
  return { books: out, rows: row + 1, RW, RH };
})();
const RYE_HI = RS.books.findIndex((b) => b.nm === RYE.street.name);
function ryeShelf(cx, cy, sc, a, { hi = 0, pull = 0, walk = -1 } = {}) {  // walk: the book the librarian is at
  if (a <= 0) return; const { books, rows, RW, RH } = RS, top = (-rows * RH) / 2;
  g.save(); g.translate(cx, cy); g.scale(sc, sc);
  g.save(); g.globalAlpha = a; rrect(-RW / 2 - 40, top - 30, RW + 80, rows * RH + 50, 8); g.fillStyle = '#21160f'; g.fill(); g.restore();
  for (let j = 0; j < rows; j++) plank(-RW / 2 - 40, top + (j + 1) * RH - 22, RW + 80, a);
  books.forEach((b, i) => {
    const yb = top + (b.row + 1) * RH - 22 - b.h, up = i === RYE_HI ? pull * (b.h + 30) : 0;
    const seen = walk >= 0 && i < walk, isCur = i === walk;
    spine(b.x, yb - up, b.w, b.h, b.col, b.nm, a * (seen ? 0.45 : hi > 0 && i !== RYE_HI ? 1 - 0.45 * hi : 1), i === RYE_HI ? hi : 0, isCur ? 1 : 0);
  });
  g.restore();
}
const RH_NUM = RYE.street.houses.filter((h) => /^\d/.test(h[0]));
const H10 = RH_NUM.findIndex((h) => h[0] === '10');
function openBook(cx, cy, w, a, pick, p) {  // High Street open: its houses in the order the map keeps them
  if (a <= 0) return; const h = w * 0.62;
  g.save(); g.globalAlpha = a; rrect(cx - w / 2 - 14, cy - h / 2 - 10, w + 28, h + 24, 14); g.fillStyle = '#5a2e22'; g.fill();
  [-1, 1].forEach((sd) => {
    const gr = g.createLinearGradient(cx, 0, cx + (sd * w) / 2, 0); gr.addColorStop(0, '#d9ccb0'); gr.addColorStop(0.08, '#f4ecd8'); gr.addColorStop(1, '#efe5cf');
    g.fillStyle = gr; g.fillRect(Math.min(cx, cx + (sd * w) / 2), cy - h / 2, w / 2, h);
  });
  g.restore();
  text(RYE.street.name, cx - w / 4, cy - h / 2 + 64, 44, '#3a2a18', a, 800, 'center'); text('Rye', cx + w / 4, cy - h / 2 + 64, 44, '#3a2a18', a, 800, 'center');
  const per = 18, cols = 3, cw = (w / 2 - 60) / cols, at = Math.floor(p * pick);
  RH_NUM.slice(0, per * 2).forEach(([n], i) => {
    const sd = Math.floor(i / per), k = i % per, x = cx + (sd ? 30 : -w / 2 + 30) + (k % cols) * cw, y = cy - h / 2 + 130 + Math.floor(k / cols) * 52;
    const on = i === at && p > 0 ? 1 : 0, found = on && i === pick;
    if (on) { g.save(); g.globalAlpha = a; rrect(x - 8, y - 38, cw - 10, 50, 10); g.fillStyle = found ? ORANGE : 'rgba(255,209,102,.6)'; g.fill(); g.restore(); }
    text(n, x + 6, y, 34, found ? '#fff' : i < at ? '#a8987a' : '#3a2a18', a, 700);
  });
}
// London: LON.per books to a shelf; names known around Downing Street
const LW = (() => {
  const r = rnd(11), n = LON.n, w = new Float32Array(n), h = new Float32Array(n), x = new Float32Array(n), c = new Uint8Array(n); let rowW = 0;
  for (let i = 0; i < n; i++) { w[i] = 26 + r() * 10; h[i] = 0.7 + 0.2 * r(); c[i] = Math.floor(r() * BOOK.length); x[i] = i % LON.per ? x[i - 1] + w[i - 1] + 2 : 0; rowW = Math.max(rowW, x[i] + w[i]); }
  return { w, h, x, c, rowW, rows: Math.ceil(n / LON.per), RH: 230 };
})();
const LON_AT = [LW.x[LON.anchor] + LW.w[LON.anchor] / 2, Math.floor(LON.anchor / LON.per) * LW.RH + LW.RH / 2];
function londonWall(z, wx, wy, a, glow = 0) {  // world point (wx, wy) at the centre, z screen px per world px
  const { w, h, x, c, rowW, rows, RH } = LW, sx = (X) => (X - wx) * z + W / 2, sy = (Y) => (Y - wy) * z + H / 2;
  g.save(); g.globalAlpha = a; g.fillStyle = '#170f0a';
  g.fillRect(Math.max(0, sx(-30)), Math.max(0, sy(-30)), Math.min(W, sx(rowW + 30)) - Math.max(0, sx(-30)), Math.min(H, sy(rows * RH + 10)) - Math.max(0, sy(-30))); g.restore();
  const r0 = Math.max(0, Math.floor((wy - H / 2 / z) / RH) - 1), r1 = Math.min(rows - 1, Math.ceil((wy + H / 2 / z) / RH));
  for (let j = r0; j <= r1; j++) {
    const yb = sy((j + 1) * RH - 22);
    plank(sx(-30), yb, (rowW + 60) * z, a, Math.max(1, 22 * z));
    for (let i = j * LON.per; i < Math.min(LON.n, (j + 1) * LON.per); i++) {
      const X = sx(x[i]), bw = w[i] * z; if (X + bw < 0 || X > W) continue;
      const bh = RH * h[i] * z; spine(X, yb - bh, bw, bh, BOOK[c[i]], bw >= 13 ? LON.names[i] : null, a, i === LON.anchor ? glow : 0);
    }
  }
}
function oldPhone(cx, cy, title, typed, rows, pick, a, p) {  // the 2010 step-by-step address screens
  if (a <= 0) return; const w = 400, h = 660, x = cx - w / 2, y = cy - h / 2;
  g.save(); g.globalAlpha = a; rrect(x - 14, y - 40, w + 28, h + 90, 40); g.fillStyle = '#1b1e25'; g.fill(); g.strokeStyle = '#3a404c'; g.lineWidth = 3; g.stroke();
  rrect(x, y, w, h, 6); g.clip(); g.fillStyle = '#f4f4f4'; g.fillRect(x, y, w, h); g.fillStyle = ORANGE; g.fillRect(x, y, w, 76);
  g.fillStyle = '#fff'; rrect(x + 16, y + 92, w - 32, 64, 8); g.fill(); g.strokeStyle = '#bbb'; g.lineWidth = 2; g.stroke(); g.restore();
  text(title, x + 24, y + 50, 34, '#fff', a, 800); text(typed + (Math.floor(NOW * 2) % 2 ? '|' : ''), x + 34, y + 136, 34, '#222', a, 600);
  rows.forEach((r, i) => {
    const yy = y + 230 + i * 86, hl = i === pick ? p : 0;
    if (hl > 0) { g.save(); g.globalAlpha = a * hl; g.fillStyle = 'rgba(255,136,0,.28)'; g.fillRect(x, yy - 54, w, 84); g.restore(); }
    text(r, x + 26, yy, 36, '#222', a, i === pick && hl > 0.5 ? 800 : 500);
    g.save(); g.globalAlpha = a; g.fillStyle = '#ddd'; g.fillRect(x + 20, yy + 30, w - 40, 2); g.restore();
  });
}
// the Rye map: 4×3 tiles of zoom 16, (lat, lon) at the centre of the box, k screen px per tile px / 512
function mercXY(lat, lon, z) { const n = 2 ** z, r = (lat * Math.PI) / 180; return [((lon + 180) / 360) * n, ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * n]; }
function tilePx(lat, lon) { const [x, y] = mercXY(lat, lon, TILE.z); return [(x - TILE.x0) * 512, (y - TILE.y0) * 512]; }
function geoMap(lat, lon, k, x, y, w, h, a) {
  const [px, py] = tilePx(lat, lon), cx = x + w / 2, cy = y + h / 2;
  g.save(); g.globalAlpha = a; rrect(x, y, w, h, 12); g.fillStyle = '#1a2130'; g.fill(); g.clip();
  if (IMG && IMG.complete && IMG.naturalWidth) g.drawImage(IMG, cx - px * k, cy - py * k, 2048 * k, 1536 * k);
  g.restore();
  text('© OpenStreetMap contributors', x + w - 12, y + h - 14, 20, '#333', a * 0.9, 600, 'right');
  return (la, lo) => { const [qx, qy] = tilePx(la, lo); return [cx + (qx - px) * k, cy + (qy - py) * k]; };
}

// ---------- the scenes: k = step inside the scene, p = seconds since the step began ----------
function drawKey(k, p) {
  const on = (K, a = 0, b = 0.6) => (k > K ? 1 : k < K ? 0 : pr(p, a, b));
  if (k === 5) return drawTwoObjects(p);
  const mv = on(1, 0, 0.7), csz = lerp(96, 64, mv), ccy = lerp(500, 220, mv), xs = chipRow(['Travessa', 'de', 'Santo', 'António'], lerp(W / 2, 560, mv), csz);
  const kOn = on(0, 0.6, 1), sa = on(2, 0, 0.4), an = on(3, 0, 0.4);
  chip('Travessa', xs[0], ccy, csz, kOn > 0.5 ? 'key' : 'word', 1, kOn > 0.5 ? 'the key: rarest' : '', k === 0 ? kOn * (1 - kOn) * 4 : 0);
  chip('de', xs[1], ccy, csz, 'word', 1);
  chip('Santo', xs[2], ccy, csz, sa > 0.5 ? 'filter' : 'word', 1, kOn > 0.5 ? 'filter' : '');
  chip('António', xs[3], ccy, csz, an > 0.5 ? 'filter' : 'word', 1, kOn > 0.5 ? 'filter' : '');
  text('Every search starts with a key', W / 2, 300, 56, '#fff', 1 - mv, 800, 'center');
  text('The rarest word gives the candidates, the others filter them', W / 2, 720, 44, DIM, on(0, 1.2, 1.8) * (1 - mv), 700, 'center');
  portugal(mv);
  const d0 = on(1, 0.5, 2), f1 = on(2, 0, 0.8), f2 = on(3, 0, 0.8), win = on(4, 0, 0.6), n0 = TR.pts.length;
  if (d0 > 0) {
    g.save();
    TR.pts.forEach(([la, lo, lv], i) => {
      if (i / n0 > d0) return; const al = (lv >= 1 ? 1 : 1 - f1) * (lv >= 2 ? 1 : 1 - f2); if (al <= 0.02) return;
      const [x, y] = PP(la, lo); g.globalAlpha = al * (1 - 0.6 * win); g.fillStyle = lv >= 2 && f2 > 0.5 ? GOLD : ORANGE; g.beginPath(); g.arc(x, y, 4.5, 0, 7); g.fill();
    });
    g.restore();
  }
  const n = k < 2 ? 2601 * d0 : k === 2 ? lerp(2601, 545, f1) : k === 3 ? lerp(545, 479, f2) : 479;
  text(fmt(n), 560, 600, 190, '#fff', mv * (1 - win), 800, 'center');
  text('Places', 560, 680, 48, DIM, mv * (1 - win), 700, 'center');
  if (win > 0) {
    const [ux, uy] = PP(...TR.user), [nx, ny] = PP(...TR.near), r = 30 + 160 * on(4, 0, 1.2);
    g.save(); g.globalAlpha = win * (1 - on(4, 1.2, 1.8)) * 0.8; g.strokeStyle = BLUE; g.lineWidth = 4; g.beginPath(); g.arc(ux, uy, r, 0, 7); g.stroke(); g.restore();
    mapPin(nx, ny, win, GOLD, 1.2); text('Leiria', nx - 40, ny + 10, 40, '#fff', win, 800, 'right', 8);
    text('The nearest one wins', 560, 600, 64, GOLD, win, 800, 'center'); text('479 → 1', 560, 690, 48, DIM, win, 700, 'center');
  }
}
function drawTwoObjects(p) {  // one name holds all the words; a street and its town are two objects
  const sp = pr(p, 1, 1.6), cardW = lerp(1100, 860, sp), x1 = lerp(W / 2, 540, sp), y = 330;
  panel(x1 - cardW / 2, y - 110, cardW, 220, 1, sp > 0.5 ? BLUE : GREEN);
  text(sp > 0.5 ? 'object 1 · a street' : 'one name', x1 - cardW / 2 + 30, y - 66, 30, sp > 0.5 ? BLUE : GREEN, 1, 800);
  text('Travessa de Santo António', x1, y + 30, lerp(64, 54, sp), '#fff', 1, 800, 'center');
  panel(1240, y - 110, 520, 220, sp, GREEN); text('object 2 · a town', 1270, y - 66, 30, GREEN, sp, 800); text('Leiria', 1500, y + 30, 70, '#fff', sp, 800, 'center');
  stamp('✓', x1 + cardW / 2 - 40, y - 100, 50, GREEN, 0.1, pr(p, 0.2, 0.6) * (1 - sp));
  const qa = pr(p, 2.4, 2.9), xs = chipRow(['Travessa', 'Leiria'], 700, 80, 1.2);
  chip('Travessa', xs[0], 720, 80, 'street', qa, 'in one name?');
  text('+', (xs[0] + chipW('Travessa', 80) / 2 + xs[1] - chipW('Leiria', 80) / 2) / 2, 745, 80, DIM, qa, 800, 'center');
  chip('Leiria', xs[1], 720, 80, 'town', qa, 'in one name?');
  const za = pr(p, 3.4, 3.9); text('=', 1200, 760, 120, DIM, za, 800, 'center'); text('0', 1420, 800, 260, RED, za, 900, 'center');
}
function drawWhich(k, p) {
  const on = (K, a = 0, b = 0.6) => (k > K ? 1 : k < K ? 0 : pr(p, a, b));
  const WS = LIB.words, xs = chipRow(WS.map(([w]) => w), W / 2, 50, 0.9), base = 800, hmax = 500;
  const hb = (n) => ((Math.log10(n) - 2.6) / (6.3 - 2.6)) * hmax;
  text('Objects with this word, worldwide (log scale)', W / 2, 110, 36, DIM, 1, 700, 'center');
  WS.forEach(([w, n], i) => {
    const grow = on(0, 0.3 + i * 0.35, 1.1 + i * 0.35), hi = w === 'Avenue' ? on(1, 0, 0.4) : w === 'of' ? on(1, 1.2, 1.6) : 0;
    chip(w, xs[i], base + 70, 50, hi > 0.5 ? 'key' : 'word', 1);
    const h = hb(n) * grow, bw = 86; g.save();
    if (w === 'Utah') { g.setLineDash([10, 8]); g.strokeStyle = '#5d6676'; g.lineWidth = 3; g.strokeRect(xs[i] - bw / 2, base - h, bw, h); g.setLineDash([]); }
    else { g.fillStyle = hi > 0 ? ORANGE : '#3a4660'; g.fillRect(xs[i] - bw / 2, base - h, bw, h); }
    g.restore();
    text(w === 'Utah' ? '< 2,000' : fmt(n), xs[i], base - h - 18, hi > 0 ? 44 : 30, hi > 0 ? ORANGE : '#c9d1dd', grow, 800, 'center');
  });
  [['Sep 2025', 6], ['Nov 2025', 2], ['Oct 2026', 0]].forEach(([lb, i], j) => {
    stamp('KEY · ' + lb, xs[i], base - hb(WS[i][1]) - 110 - (j === 1 ? 40 : 0), 42, j === 2 ? GREEN : GOLD, -0.08 + 0.05 * j, on(2, 0.6 + j * 1.3, 1.1 + j * 1.3));
  });
  text('Our own code changed its mind three times', W / 2, 190, 44, GOLD, on(2, 0, 0.4), 800, 'center');
}
function drawShelf(k, p) {
  const on = (K, a = 0, b = 0.6) => (k > K ? 1 : k < K ? 0 : pr(p, a, b));
  if (k === 0) {  // a librarian: Rye's streets, one book each
    ryeShelf(W / 2 + 120, 760, lerp(1.6, 1.75, clamp(p / 4)), pr(p, 0, 0.5));
    g.save(); const gr = g.createLinearGradient(0, 0, 0, 360); gr.addColorStop(0, '#0b0d12'); gr.addColorStop(1, 'rgba(11,13,18,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, 360); g.restore();
    text('A librarian', 120, 170, 96, '#fff', pr(p, 0.2, 0.7), 800, 'left', 12);
    text(`Rye · ${RYE.streets.length} streets, a book each`, 120, 250, 48, GOLD, pr(p, 0.8, 1.3), 800, 'left', 10);
    return;
  }
  if (k === 1) {  // 2010: you pick a city, a street, a house
    text('2010', W / 2, 110, 64, ORANGE, 1, 800, 'center');
    oldPhone(460, 600, 'Select city', 'Lon', ['London', 'Long Eaton', 'Long Melford', 'Longridge'], 0, pr(p, 0, 0.4), pr(p, 0.8, 1.2));
    oldPhone(960, 600, 'Select street', 'Down', LON.near, 2, pr(p, 1.5, 1.9), pr(p, 2.3, 2.7));
    oldPhone(1460, 600, 'Select house', '', LON.houses, 1, pr(p, 3, 3.4), pr(p, 3.8, 4.2));
    return;
  }
  // the app takes the steps: the town on the map, its shelf, the street's book, the house
  const hs = RH_NUM[H10], zo = on(4, 2.6, 3.4);
  text('The app takes the steps for you', W / 2, 110, 56, '#fff', 1, 800, 'center');
  const MX = 70, MY = 170, MW = 800, MH = 820;
  const P = geoMap(lerp(RYE.loc[0], hs[1], zo), lerp(RYE.loc[1], hs[2], zo), lerp(0.7, 1.25, zo), MX, MY, MW, MH, on(2, 0, 0.4));
  const fa = on(2, 0.3, 0.8) * (1 - zo), [px, py] = P(...RYE.loc);
  if (fa > 0) {
    g.save(); g.globalAlpha = fa * 0.35; g.fillStyle = ORANGE; g.beginPath(); g.arc(px, py, 60 + 14 * Math.sin(NOW * 5), 0, 7); g.fill(); g.restore();
    mapPin(px, py, fa, ORANGE, 1.3); chip('Rye', px, py - 120, 52, 'town', fa);
  }
  const sa = on(3, 0, 0.5), walk = k === 3 ? Math.floor(RYE_HI * pr(p, 0.6, 3.6)) : -1;
  const hi = on(4, 0, 0.3), pull = on(4, 0.1, 0.5), bo = on(4, 0.5, 0.9);
  ryeShelf(1390, 600, 0.8, (0.25 + 0.75 * sa) * (1 - 0.8 * bo), { hi, pull, walk });
  text(`Rye · ${RYE.streets.length} streets`, 1390, 182, 44, GOLD, sa * (1 - bo), 800, 'center');
  if (k === 3) text(`Books opened: ${walk + 1}`, 1390, 1030, 40, '#fff', sa, 800, 'center');
  if (sa > 0 && fa > 0) {
    g.save(); g.globalAlpha = fa * sa; g.strokeStyle = ORANGE; g.lineWidth = 5; g.setLineDash([16, 12]); g.beginPath();
    g.moveTo(px + 30, py - 40); g.lineTo(lerp(px + 30, 960, sa), lerp(py - 40, 600, sa)); g.stroke(); g.restore();
  }
  openBook(1390, 600, 900, bo, H10, on(4, 1, 2.6));
  if (zo > 0) { const [hx, hy] = P(hs[1], hs[2]); mapPin(hx, hy, zo, ORANGE, 1.4); chip('10 High Street', hx, hy - 130, 48, 'key', zo); }
}
function drawLondon(k, p) {  // one shelf of 56,266 books, and the camera pulls back
  const q0 = k === 0 ? 0 : pr(p, 0.2, 3.5), zE = 0.1, z = Math.exp(lerp(0, Math.log(zE), q0)), q = Math.pow(q0, 1.5);
  const wx = lerp(LON_AT[0], LW.rowW / 2, q), wy = lerp(LON_AT[1], (LW.rows * LW.RH) / 2, q);
  londonWall(z, wx, wy, 1, k === 0 ? pr(p, 0.8, 1.4) : 1 - pr(p, 0, 0.6));
  const ra = k === 0 ? pr(p, 1, 1.6) : 1, rx = (LON_AT[0] - wx) * z + W / 2, ry = (LON_AT[1] - wy) * z + H / 2;
  if (ra > 0 && k === 1) {
    g.save(); g.globalAlpha = ra; g.strokeStyle = ORANGE; g.lineWidth = 6; g.shadowColor = ORANGE; g.shadowBlur = 20;
    g.beginPath(); g.arc(rx, ry, 26 + 4 * Math.sin(NOW * 6), 0, 7); g.stroke(); g.restore();
  }
  text('Downing Street', k === 0 ? W / 2 : rx + 44, k === 0 ? 200 : ry + 16, 44, GOLD, ra, 800, k === 0 ? 'center' : 'left', 12);
  text('London', 80, 120, 96, '#fff', 1, 800, 'left', 14);
  if (k === 1) {
    const ca = pr(p, 2.6, 3.4);
    g.save(); g.globalAlpha = ca * 0.85; const gb = g.createLinearGradient(0, 760, 0, H); gb.addColorStop(0, 'rgba(11,13,18,0)'); gb.addColorStop(0.45, '#0b0d12'); g.fillStyle = gb; g.fillRect(0, 760, W, H - 760); g.restore();
    text(fmt(LON.n * pr(p, 2.6, 3.8)), W / 2 - 16, 930, 110, ORANGE, ca, 800, 'right', 12);
    text('streets on one shelf', W / 2 + 10, 930, 60, '#fff', ca, 800, 'left', 12);
  }
}
const TYPE_COL = { town: GREEN, villages: GREEN, parishes: '#b48cff', streets: BLUE, places: ORANGE };
const ASKS = [0, 0, 0, 1, 2];  // which "asks" step reveals the question of each kind
function drawWord(k, p) {
  const on = (K, a = 0, b = 0.6) => (k > K ? 1 : k < K ? 0 : pr(p, a, b));
  chip('António', 200, 540, 64, 'key', 1);
  text('3,884 objects', 200, 650, 44, '#fff', on(0, 0.3, 0.8), 800, 'center');
  text('Answers', 1790, 100, 34, DIM, on(1, 0.6, 1), 700, 'right');
  LIB.antonio.forEach((ty, i) => {
    const y = 170 + i * 170, col = TYPE_COL[ty.kind], ta = on(0, 0.6 + i * 0.3, 1 + i * 0.3), qa = on(1 + ASKS[i], 0, 0.5);
    g.save(); g.globalAlpha = ta; g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); g.moveTo(330, 540); g.bezierCurveTo(380, 540, 380, y, 430, y); g.stroke(); g.restore();
    panel(430, y - 62, 420, 124, ta, col); text(ty.n, 460, y + 16, 56, col, ta, 800);
    g.font = `800 56px ${FONT}`; const nw = g.measureText(ty.n).width;
    text(ty.kind, 480 + nw, y - 6, 36, '#fff', ta, 800); text(ty.ex, 480 + nw, y + 34, 22, DIM, ta, 600);
    g.save(); g.globalAlpha = qa; g.strokeStyle = col; g.lineWidth = 3; g.beginPath(); g.moveTo(850, y); g.lineTo(900, y); g.stroke(); g.restore();
    text(ty.q, 910, y + 16, 42, '#fff', qa, 700);
    text(fmt(ty.ans), 1790, y + 18, 52, col, on(1 + ASKS[i], 0.6, 1), 800, 'right');
  });
  const sa = on(4, 0, 0.5);
  if (sa > 0) {
    g.save(); g.globalAlpha = sa * 0.85; g.fillStyle = '#0b0d12'; g.fillRect(0, 0, W, H); g.restore();
    text(fmt(LIB.antonio.reduce((a, x) => a + x.ans, 0)), W / 2, 560, 220, ORANGE, sa, 800, 'center');
    text('questions for one word', W / 2, 660, 56, '#fff', sa, 800, 'center');
  }
}
const DRAW = { key: drawKey, which: drawWhich, shelf: drawShelf, london: drawLondon, word: drawWord };

export default function Librarian() {
  const [step, setStep] = useState(0), [play, setPlay] = useState(false);
  const wrap = useRef(null), cv = useRef(null), t0 = useRef(0), seen = useRef(false), ctx = useRef(null);
  const w = useWidth(wrap, 1000), h = Math.round((w * H) / W);
  const cur = STEPS[step], k = step - FIRST[cur.sc];

  useEffect(() => {  // the picture of the image map arrives later than the first frame
    if (IMG) return;
    IMG = new Image();
    IMG.src = typeof ryeMap === 'string' ? ryeMap : ryeMap.default;
  }, []);
  useEffect(() => { ctx.current = setupCanvas(cv.current, w, h); }, [w, h]);
  useEffect(() => { t0.current = performance.now(); }, [step]);
  useEffect(() => {  // the first step starts when the demo scrolls into view
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !seen.current) { seen.current = true; t0.current = performance.now(); } });
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    let id;
    const frame = (now) => {
      const p = seen.current ? (now - t0.current) / 1000 : 0;
      g = ctx.current; NOW = now / 1000;
      if (g) {
        const r = window.devicePixelRatio || 1;
        g.setTransform(r * (w / W), 0, 0, r * (w / W), 0, 0);
        g.fillStyle = '#0b0d12'; g.fillRect(0, 0, W, H);
        DRAW[cur.sc](k, p);
      }
      if (play && p * 1000 > cur.ms) { if (step < STEPS.length - 1) setStep(step + 1); else setPlay(false); return; }
      id = requestAnimationFrame(frame);
    };
    id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [step, play, w, h]);  // eslint-disable-line

  const go = (n) => { setPlay(false); setStep(Math.max(0, Math.min(STEPS.length - 1, n))); };
  return (
    <div className={s.box}>
      <div className={s.title}>The librarian</div>
      <div className={s.hint}>How the old search looked for an address. Real data from OsmAnd maps — the same scenes as in the video.</div>
      <div className={s.row}>
        {SCENES.map(([id, name]) => (
          <button key={id} type="button" className={clsx(s.chip, cur.sc === id && s.chipOn)} style={cur.sc === id ? { background: '#ffd166', borderColor: '#ffd166' } : undefined} onClick={() => go(FIRST[id])}>{name}</button>
        ))}
      </div>
      <div ref={wrap} style={{ width: '100%' }}>
        <canvas ref={cv} className={s.canvas} style={{ width: w, height: h }} />
      </div>
      <div className={s.say}>{cur.say}</div>
      <div className={s.row}>
        <button type="button" className={s.btn} onClick={() => { if (!play && step === STEPS.length - 1) setStep(0); setPlay(!play); }}>{play ? 'Pause' : step === STEPS.length - 1 ? 'Play again' : 'Play'}</button>
        <button type="button" className={s.btn} onClick={() => go(step - 1)} disabled={step === 0}>Back</button>
        <button type="button" className={s.btn} onClick={() => go(step + 1)} disabled={step === STEPS.length - 1}>Next</button>
        <span className={s.dim} style={{ fontSize: 13 }}>{step + 1} / {STEPS.length}</span>
      </div>
    </div>
  );
}
