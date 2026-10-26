import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './styles.module.css';
import TRACE from './data/tetris';
import { WORDS, fmt, maskName, portugalView, setupCanvas, drawPortugal, useWidth } from './common';

// Rows from the engine's real search for the Leiria crossing (the same rows as in the video): pieces (objects grouped
// by the words they cover) dock into one row of 8 word columns; every docking is checked on the map and leaves only
// the places that still meet. A row that drops to zero is gone; a row that covers every word is an answer.
const PIECE_COLORS = ['#c9d1dd', '#ffd166', '#ff8800', '#e879f9', '#7bdff2', '#b48cff'];
const FULL = 255;
const PICK = [164, 1, 14, 54, 165, 109, 267, 182, 197];  // the answer first, then rows that die and rows that fill
const places = (n) => `${fmt(n)} ${n === 1 ? 'place' : 'places'}`;

const ROWS = (() => {
  const st = [];
  const nodes = TRACE.nodes.map(([d, , m, count, checks, left], i) => {
    st.length = d;
    const n = { i, m, count, checks, left, path: st.slice() };
    st[d] = n;
    return n;
  });
  return PICK.map((i) => {
    const pieces = [...nodes[i].path, nodes[i]];
    const left = nodes[i].left, full = pieces.reduce((a, p) => a | p.m, 0) === FULL && left > 0;
    return { pieces, left, full };
  });
})();
const STEPS = ROWS.flatMap((row, r) => row.pieces.map((_, k) => ({ r, k })));
const TOTAL = { pieces: TRACE.nodes.length, answers: 24 };

function Row({ pieces, upto, left, state, fresh }) {  // state: 'live' | 'zero' | 'full' | 'kept'
  const cells = WORDS.map((_, b) => {
    const k = pieces.findIndex((p, i) => i <= upto && (p.m >> b) & 1);
    return k < 0 ? null : { color: PIECE_COLORS[k % PIECE_COLORS.length], fresh: fresh && k === upto };
  });
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 4, opacity: state === 'kept' ? 0.6 : 1 }}>
      <div className={clsx(s.board, state === 'zero' && s.rowZero, state === 'full' && s.rowFull)} style={{ flex: '1 1 auto' }}>
        {cells.map((c, b) => <div key={b} className={clsx(s.cell, c?.fresh && s.drop)} style={c ? { background: c.color } : undefined} />)}
      </div>
      <div className={clsx(s.num, state === 'zero' && s.bad, (state === 'full' || state === 'kept') && s.good)} style={{ fontSize: 13, flex: '0 0 76px' }}>
        {places(left)}
      </div>
    </div>
  );
}

function Mini({ m, color }) {
  return (
    <div className={s.board} style={{ width: 96, gap: 2 }}>
      {WORDS.map((w, b) => <div key={w} style={{ height: 9, borderRadius: 2, background: (m >> b) & 1 ? color : '#1b2230' }} />)}
    </div>
  );
}

export default function Tetris() {
  const [t, setT] = useState(0), [play, setPlay] = useState(false);
  const end = t >= STEPS.length;
  const wrap = useRef(null), cv = useRef(null);
  const w = useWidth(wrap, 220);
  useEffect(() => {
    if (!play) return undefined;
    if (end) { setPlay(false); return undefined; }
    const { r, k } = STEPS[t], last = k === ROWS[r].pieces.length - 1;
    const id = setTimeout(() => setT(t + 1), last ? 2200 : 1300);
    return () => clearTimeout(id);
  }, [play, t, end]);

  const cur = end ? null : STEPS[t], row = cur && ROWS[cur.r], piece = cur && row.pieces[cur.k];
  const kept = useMemo(() => ROWS.filter((x, r) => x.full && (end || r < cur.r)), [t]);  // eslint-disable-line
  const last = cur && cur.k === row.pieces.length - 1;
  const left = cur && piece.left;

  let say = null, verdict = null;
  if (cur && cur.k === 0) say = <>A piece falls into a new row: <b>{maskName(piece.m)}</b> — {places(piece.count)}.</>;
  else if (cur) {
    const prev = row.pieces[cur.k - 1].left;
    say = <><b>{maskName(piece.m)}</b> ({places(piece.count)}) docks. The map is checked{prev * piece.count === piece.checks ? ` (${fmt(prev)} × ${fmt(piece.count)})` : ''}: <b>{places(left)}</b> still meet.</>;
  }
  if (cur && last && !row.full) verdict = <span className={s.bad}>Zero — the row is gone, and nothing built on it is ever tried.</span>;
  else if (cur && last) verdict = <span className={s.good}>Every word is covered: this row is an answer.</span>;
  const state = cur && last ? (row.full ? 'full' : 'zero') : 'live';
  const ranked = [...ROWS.filter((x) => x.full)].sort((a, b) => a.pieces.length - b.pieces.length);
  const queue = STEPS.slice(t + 1, t + 4).map(({ r, k }) => ({ p: ROWS[r].pieces[k], k, color: PIECE_COLORS[k % PIECE_COLORS.length] }));

  useEffect(() => {  // the places that still meet after this docking
    const v = portugalView(w), g = setupCanvas(cv.current, v.w, v.h);
    drawPortugal(g, v);
    const dot = (la, lo, r, fill) => {
      const [x, y] = v.xy(la, lo);
      g.beginPath(); g.arc(x, y, r, 0, 7); g.fillStyle = fill; g.fill();
      g.lineWidth = 1.5; g.strokeStyle = '#0b0d12'; g.stroke();
    };
    if (cur) (TRACE.tmap[piece.i] || []).forEach(([la, lo]) => dot(la, lo, cur.k === 0 && piece.count > 100 ? 1.6 : 4, PIECE_COLORS[cur.k % PIECE_COLORS.length]));
    else { dot(TRACE.answer[0], TRACE.answer[1], 6, '#ffffff'); }
  }, [t, w]);  // eslint-disable-line

  return (
    <div className={s.box}>
      <div className={s.title}>Tetris with words</div>
      <div className={s.hint}>
        8 words, 8 columns. A piece is a group of objects that cover the same words; its number is how many places stand behind it.
        Pieces dock into a row until every word is covered — or until no places are left.
      </div>
      <div className={s.split}>
      <div style={{ flex: '1 1 340px', minWidth: 0 }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <div className={s.board} style={{ flex: '1 1 auto' }}>
          {WORDS.map((w) => <div key={w} className={s.colHead} title={w}>{w}</div>)}
        </div>
        <div style={{ flex: '0 0 76px' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', minHeight: 5 * 30 }}>
        {kept.map((x) => <Row key={x.pieces[x.pieces.length - 1].i} pieces={x.pieces} upto={9} left={x.left} state="kept" />)}
        {cur && <Row key={`r${cur.r}`} pieces={row.pieces} upto={cur.k} left={left} state={state} fresh />}
      </div>
      {cur && (
        <div style={{ marginTop: 10, fontSize: 13 }}>
          {row.pieces.slice(0, cur.k + 1).map((p, i) => (
            <span key={p.i} style={{ marginRight: 14, whiteSpace: 'nowrap' }}>
              <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, background: PIECE_COLORS[i % PIECE_COLORS.length], marginRight: 5 }} />
              {maskName(p.m)} <span className={s.dim}>{fmt(p.count)}</span>
            </span>
          ))}
        </div>
      )}
      <div className={s.say}>
        {cur ? <>{say}<br />{verdict}</> : (
          <>
            Answers are ranked: the fewest pieces go on top. On top is the crossing in Leiria — Travessa de Santo António
            at Rua Joaquim Ribeiro de Carvalho. Played to the end, the engine docks {fmt(TOTAL.pieces)} pieces, and {TOTAL.answers} rows fill up.
          </>
        )}
      </div>
      {end && (
        <div className={s.list} style={{ marginBottom: 8 }}>
          {ranked.map((x, i) => (
            <div key={i}>
              <span className={s.good}>{x.pieces.length} pieces</span> · {places(x.left)} ·{' '}
              <span className={i ? s.dim : undefined}>{x.pieces.map((p) => maskName(p.m)).join(' + ')}</span>
            </div>
          ))}
        </div>
      )}
      <div className={s.row}>
        <button type="button" className={s.btn} onClick={() => setPlay(!play)} disabled={end}>{play ? 'Pause' : t === 0 ? 'Play' : 'Continue'}</button>
        <button type="button" className={s.btn} onClick={() => { setPlay(false); setT(Math.min(STEPS.length, t + 1)); }} disabled={end}>Next piece</button>
        <button type="button" className={s.btn} onClick={() => { setPlay(false); setT(Math.max(0, t - 1)); }} disabled={t === 0}>Back</button>
        <button type="button" className={s.btn} onClick={() => { setPlay(false); setT(STEPS.length); }} disabled={end}>Skip to answers</button>
        <button type="button" className={s.btn} onClick={() => { setPlay(false); setT(0); }} disabled={t === 0}>Restart</button>
      </div>
      </div>
      <div style={{ flex: '0 1 220px', minWidth: 0 }}>
        <div className={s.dim} style={{ fontSize: 13, marginBottom: 6 }}>Next pieces</div>
        <div style={{ minHeight: 3 * 34 }}>
          {queue.map(({ p, k, color }, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, fontSize: 12, opacity: 1 - i * 0.25 }}>
              <Mini m={p.m} color={color} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{k === 0 ? 'new row: ' : ''}{maskName(p.m)}</span>
            </div>
          ))}
          {queue.length === 0 && <div className={s.dim} style={{ fontSize: 12 }}>none</div>}
        </div>
        <div className={s.dim} style={{ fontSize: 13, margin: '8px 0 6px' }}>{cur ? 'Places that still meet' : 'The answer: Leiria'}</div>
        <div ref={wrap} style={{ width: '100%', maxWidth: 220 }}>
          <canvas ref={cv} className={s.canvas} style={{ width: '100%', maxWidth: w, height: 'auto' }} />
        </div>
      </div>
      </div>
    </div>
  );
}
