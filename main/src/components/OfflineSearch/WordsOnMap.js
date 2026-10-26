import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './styles.module.css';
import { WORDS, WORD_COLORS, fmt, getPoints, portugalView, setupCanvas, drawPortugal, useWidth } from './common';

// Every word of the query lights up the objects that have it in their name; an object that has all the chosen words
// is where the lights meet
export default function WordsOnMap() {
  const [sel, setSel] = useState((1 << 4) | (1 << 6));  // Joaquim + Carvalho
  const [counts, setCounts] = useState(null);
  const wrap = useRef(null), cv = useRef(null);
  const w = useWidth(wrap, 280);

  useEffect(() => {
    const P = getPoints(), v = portugalView(w), g = setupCanvas(cv.current, v.w, v.h);
    drawPortugal(g, v);
    const per = WORDS.map(() => 0);
    let all = 0;
    const meet = [];
    for (let i = 0; i < P.n; i++) {
      const m = P.m[i], k = m & sel;
      if (!k) continue;
      WORDS.forEach((_, b) => { if ((k >> b) & 1) per[b]++; });
      if (k === sel) { all++; meet.push(i); continue; }
      const b = Math.log2(k & -k);
      const [x, y] = v.xy(P.la[i], P.lo[i]);
      g.fillStyle = WORD_COLORS[b];
      g.globalAlpha = 0.7;
      g.fillRect(x - 1.25, y - 1.25, 2.5, 2.5);
    }
    g.globalAlpha = 1;
    for (const i of meet) {
      const [x, y] = v.xy(P.la[i], P.lo[i]);
      g.beginPath();
      g.arc(x, y, 4, 0, 7);
      g.fillStyle = '#fff';
      g.fill();
      g.lineWidth = 1.5;
      g.strokeStyle = '#0b0d12';
      g.stroke();
    }
    setCounts({ per, all });
  }, [sel, w]);

  const toggle = (b) => setSel((m) => ((m ^ (1 << b)) || m));
  const n = WORDS.filter((_, b) => (sel >> b) & 1).length;
  return (
    <div className={s.box}>
      <div className={s.title}>Words on the map</div>
      <div className={s.hint}>
        Real objects OsmAnd found in Portugal for the query «Travessa Santo António Rua Joaquim Ribeiro Carvalho Portugal».
        Pick words: each one lights up the objects that have it. White dots are where all chosen words meet in one object.
      </div>
      <div className={s.row}>
        {WORDS.map((word, b) => {
          const on = (sel >> b) & 1;
          return (
            <button key={word} type="button" className={clsx(s.chip, on && s.chipOn)}
              style={on ? { background: WORD_COLORS[b], borderColor: WORD_COLORS[b] } : { borderColor: WORD_COLORS[b] }}
              onClick={() => toggle(b)}>{word}</button>
          );
        })}
      </div>
      <div className={s.split}>
        <div ref={wrap} className={s.canvasWrap} style={{ flex: '0 1 280px', maxWidth: 280, width: '100%' }}>
          <canvas ref={cv} className={s.canvas} style={{ width: '100%', maxWidth: w, height: 'auto' }} />
        </div>
        <div className={s.side}>
          {counts && (
            <>
              <div className={s.stats}>
                {WORDS.map((word, b) => ((sel >> b) & 1 ? (
                  <React.Fragment key={word}>
                    <span style={{ color: WORD_COLORS[b] }}>{word}</span>
                    <span className={s.num}>{fmt(counts.per[b])}</span>
                  </React.Fragment>
                ) : null))}
              </div>
              <div style={{ marginTop: 14 }} className={s.dim}>{n > 1 ? 'All chosen words in one object' : 'Objects with this word'}</div>
              <div className={s.big}>{fmt(n > 1 ? counts.all : counts.per[Math.log2(sel)])}</div>
              <div className={s.hint} style={{ marginTop: 10 }}>
                Try Joaquim and Carvalho, then add Ribeiro and Rua: every word you add leaves fewer places. A word like Rua
                alone lights up the whole country.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
