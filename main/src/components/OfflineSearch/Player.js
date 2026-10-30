import React from 'react';
import s from './styles.module.css';

// One transport bar for every step-by-step demo: it sits above the picture, so captions of any length never move it
const ICON = {
  start: 'M5 4h2v16H5zM19 4v16L8 12z',
  back: 'M17 4v16L6 12z',
  play: 'M7 4v16l13-8z',
  pause: 'M6 4h4v16H6zM14 4h4v16h-4z',
  next: 'M7 4v16l11-8z',
  finish: 'M17 4h2v16h-2zM5 4v16l11-8z',
};
const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d={d} fill="currentColor" /></svg>
);

export default function Player({ value, max, playing, onSeek, onPlay, label }) {
  const seek = (v) => { onPlay(false); onSeek(Math.max(0, Math.min(max, v))); };
  const atEnd = value >= max;
  return (
    <div className={s.player}>
      <div className={s.pbtns}>
        <button type="button" className={s.pbtn} onClick={() => seek(0)} disabled={value === 0} title="Start" aria-label="Start"><Icon d={ICON.start} /></button>
        <button type="button" className={s.pbtn} onClick={() => seek(value - 1)} disabled={value === 0}><Icon d={ICON.back} /> Back</button>
        <button type="button" className={s.pmain} onClick={() => { if (!playing && atEnd) onSeek(0); onPlay(!playing); }}>
          <Icon d={playing ? ICON.pause : ICON.play} /> {playing ? 'Pause' : 'Autoplay'}
        </button>
        <button type="button" className={s.pbtn} onClick={() => seek(value + 1)} disabled={atEnd}>Next <Icon d={ICON.next} /></button>
        <button type="button" className={s.pbtn} onClick={() => seek(max)} disabled={atEnd} title="Finish" aria-label="Finish"><Icon d={ICON.finish} /></button>
      </div>
      <div className={s.ptrack}>
        <input type="range" className={s.prange} min={0} max={max} value={value} onChange={(e) => seek(+e.target.value)} aria-label="Progress" />
        <span className={s.plabel}>{label}</span>
      </div>
    </div>
  );
}
