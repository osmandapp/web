import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './styles.module.css';
import { WORDS, WORD_COLORS, fmt, getPoints, portugalView, setupCanvas, drawPortugal, useWidth, tileXY, zNumber, tileBounds } from './common';

// Two words become two sorted lists of tile numbers; one pass over both finds every tile they share
function tilesOf(b, z) {
  const P = getPoints(), byNum = new Map();
  let objects = 0;
  for (let i = 0; i < P.n; i++) {
    if (!((P.m[i] >> b) & 1)) continue;
    objects++;
    const [x, y] = tileXY(P.la[i], P.lo[i], z), num = zNumber(x, y, z);
    if (!byNum.has(num)) byNum.set(num, [x, y]);
  }
  const nums = [...byNum.keys()].sort((p, q) => p - q);
  return { nums, xy: byNum, objects };
}

function zip(A, B) {  // every step of the walk: [i, j, hit]
  const steps = [];
  let i = 0, j = 0;
  while (i < A.length && j < B.length) {
    const hit = A[i] === B[j];
    steps.push([i, j, hit]);
    if (hit) { i++; j++; } else if (A[i] < B[j]) i++; else j++;
  }
  return steps;
}

function TileList({ nums, cur, hits, done, color }) {
  const SHOW = 48, from = Math.max(0, Math.min(cur - 16, nums.length - SHOW)), part = nums.slice(from, from + SHOW);
  return (
    <div className={s.tiles}>
      {from > 0 && <span className={s.dim}>… {from} more</span>}
      {part.map((t, k) => {
        const i = from + k;
        return (
          <span key={t} className={clsx(s.tile, hits.has(t) && s.tileHit, i === cur && s.tileCur, i < done && !hits.has(t) && s.tileDone)}
            style={i === cur || hits.has(t) ? undefined : { borderColor: color }}>{t}</span>
        );
      })}
      {from + SHOW < nums.length && <span className={s.dim}>… {nums.length - from - SHOW} more</span>}
    </div>
  );
}

export default function Zipper() {
  const [a, setA] = useState(4), [b, setB] = useState(6), [z, setZ] = useState(9);
  const [k, setK] = useState(0), [play, setPlay] = useState(false);
  const wrap = useRef(null), cv = useRef(null);
  const w = useWidth(wrap, 280);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const data = useMemo(() => {
    if (!ready) return null;
    const A = tilesOf(a, z), B = tilesOf(b, z);
    return { A, B, steps: zip(A.nums, B.nums) };
  }, [a, b, z, ready]);
  useEffect(() => { setK(0); setPlay(false); }, [a, b, z]);
  useEffect(() => {
    if (!play || !data) return undefined;
    if (k >= data.steps.length) { setPlay(false); return undefined; }
    const t = setTimeout(() => setK(k + 1), 180);
    return () => clearTimeout(t);
  }, [play, k, data]);

  const hits = useMemo(() => new Set(data ? data.steps.slice(0, k).filter((x) => x[2]).map((x) => data.A.nums[x[0]]) : []), [data, k]);
  const cur = data && (k < data.steps.length ? data.steps[k] : [data.A.nums.length, data.B.nums.length, false]);

  useEffect(() => {
    if (!data) return;
    const v = portugalView(w), g = setupCanvas(cv.current, v.w, v.h);
    drawPortugal(g, v);
    const box = ([x, y], fill, stroke, lw = 1) => {
      const t = tileBounds(x, y, z), [x0, y0] = v.xy(t.la1, t.lo0), [x1, y1] = v.xy(t.la0, t.lo1);
      if (fill) { g.fillStyle = fill; g.fillRect(x0, y0, x1 - x0, y1 - y0); }
      if (stroke) { g.strokeStyle = stroke; g.lineWidth = lw; g.strokeRect(x0 + 0.5, y0 + 0.5, x1 - x0 - 1, y1 - y0 - 1); }
    };
    g.globalAlpha = 0.3;
    data.A.xy.forEach((xy) => box(xy, WORD_COLORS[a], null));
    g.globalAlpha = 0.9;
    data.B.xy.forEach((xy) => box(xy, null, WORD_COLORS[b], 1.5));
    g.globalAlpha = 0.8;
    hits.forEach((t) => box(data.A.xy.get(t), '#ffffff', null));
    g.globalAlpha = 1;
    if (k < data.steps.length) {
      const [i, j] = data.steps[k];
      box(data.A.xy.get(data.A.nums[i]), null, '#fff', 2.5);
      box(data.B.xy.get(data.B.nums[j]), null, '#fff', 2.5);
    }
  }, [data, hits, k, w, a, b, z]);

  const opts = (other) => WORDS.map((word, i) => <option key={word} value={i} disabled={i === other}>{word}</option>);
  let say = 'Press Step: compare the two current numbers.';
  if (data && k > 0) {
    const [i, j, hit] = data.steps[k - 1], x = data.A.nums[i], y = data.B.nums[j];
    say = hit ? `${fmt(x)} = ${fmt(y)}: the same tile. Only here do we compare the objects themselves.`
      : `${fmt(x)} ${x < y ? '<' : '>'} ${fmt(y)}: the smaller number steps forward.`;
  }
  if (data && k >= data.steps.length) say = `Done in ${fmt(data.steps.length)} steps: ${fmt(hits.size)} shared tiles, one pass over both lists.`;

  return (
    <div className={s.box}>
      <div className={s.title}>The zipper</div>
      <div className={s.hint}>
        Each word becomes a sorted list of tile numbers on the Z-curve. Walk both lists at once: the smaller number steps
        forward, equal numbers mean a shared tile. Change the level to see how the lists grow.
      </div>
      <div className={s.row}>
        <select className={s.select} value={a} onChange={(e) => setA(+e.target.value)} style={{ color: WORD_COLORS[a] }}>{opts(b)}</select>
        <span className={s.dim}>×</span>
        <select className={s.select} value={b} onChange={(e) => setB(+e.target.value)} style={{ color: WORD_COLORS[b] }}>{opts(a)}</select>
        <label className={s.dim} style={{ marginLeft: 8 }}>
          level {z}{' '}
          <input type="range" min={7} max={14} value={z} onChange={(e) => setZ(+e.target.value)} style={{ verticalAlign: 'middle' }} />
        </label>
      </div>
      {data && (
        <div className={s.split}>
          <div ref={wrap} style={{ flex: '0 1 280px', maxWidth: 280, width: '100%' }}>
            <canvas ref={cv} className={s.canvas} style={{ width: '100%', maxWidth: w, height: 'auto' }} />
          </div>
          <div className={s.side}>
            <div style={{ color: WORD_COLORS[a] }}>{WORDS[a]} · {fmt(data.A.nums.length)} tiles</div>
            <TileList nums={data.A.nums} cur={cur[0]} hits={hits} done={cur[0]} color={WORD_COLORS[a]} />
            <div style={{ color: WORD_COLORS[b] }}>{WORDS[b]} · {fmt(data.B.nums.length)} tiles</div>
            <TileList nums={data.B.nums} cur={cur[1]} hits={hits} done={cur[1]} color={WORD_COLORS[b]} />
            <div className={s.row}>
              <button type="button" className={s.btn} onClick={() => setK(Math.min(k + 1, data.steps.length))} disabled={k >= data.steps.length}>Step</button>
              <button type="button" className={s.btn} onClick={() => setPlay(!play)} disabled={k >= data.steps.length}>{play ? 'Pause' : 'Play'}</button>
              <button type="button" className={s.btn} onClick={() => { setPlay(false); setK(data.steps.length); }}>Finish</button>
              <button type="button" className={s.btn} onClick={() => { setPlay(false); setK(0); }}>Reset</button>
            </div>
            <div className={s.say}>{say}</div>
            <div className={s.stats}>
              <span className={s.dim}>Steps</span><span className={s.num}>{fmt(k)} of at most {fmt(data.A.nums.length + data.B.nums.length)}</span>
              <span className={s.dim}>Shared tiles</span><span className={s.num}>{fmt(hits.size)}</span>
              <span className={s.dim}>Every pair instead</span>
              <span className={s.num}>{fmt(data.A.objects)} × {fmt(data.B.objects)} = {fmt(data.A.objects * data.B.objects)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
