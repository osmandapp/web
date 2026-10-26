import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import s from './styles.module.css';
import LIB from './data/librarian';
import { fmt } from './common';

// The old search as a librarian: find the town, walk its shelf of streets book by book, open the street, find the house
const RYE = LIB.rye, LONDON = LIB.london;

function useWalk(target, msPerBook, maxMs) {  // animates a pointer from 0 to target
  const [pos, setPos] = useState(-1), [run, setRun] = useState(0);
  useEffect(() => {
    if (!run) return undefined;
    const dur = Math.max(1, Math.min(maxMs, target * msPerBook));
    let id, t0;
    const frame = (now) => {
      if (t0 === undefined) t0 = now;
      const p = Math.min(target, Math.round(((now - t0) / dur) * target));
      setPos(p);
      if (p < target) id = requestAnimationFrame(frame);
    };
    id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [run, target, msPerBook, maxMs]);
  return [pos, () => setRun((r) => r + 1), () => { setRun(0); setPos(-1); }];
}

function Shelf({ items, pos, found, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current?.children[Math.max(0, pos)];
    if (el && ref.current) ref.current.scrollTop = el.offsetTop - 90;  // the shelf is the offset parent
  }, [pos]);
  return (
    <div>
      <div className={s.dim} style={{ fontSize: 13, marginBottom: 4 }}>{label}</div>
      <div ref={ref} className={s.shelf} style={{ position: 'relative' }}>
        {items.map((name, i) => (
          <div key={i} className={clsx(s.book, i < pos && s.bookSeen, i === pos && (found ? s.bookFound : s.bookCur))}>{name}</div>
        ))}
      </div>
    </div>
  );
}

function Rye() {
  const [street, setStreet] = useState('High Street'), [house, setHouse] = useState('10');
  const si = RYE.streets.indexOf(street), hi = RYE.street.houses.indexOf(house);
  const [sp, startS, resetS] = useWalk(si, 40, 2500);
  const [hp, startH, resetH] = useWalk(hi, 60, 1500);
  const streetFound = sp === si, houseFound = hp === hi;
  useEffect(() => { if (streetFound && street === RYE.street.name && hp < 0) startH(); }, [streetFound]);  // eslint-disable-line
  const reset = () => { resetS(); resetH(); };
  const opened = (sp < 0 ? 0 : sp + 1) + (hp < 0 ? 0 : hp + 1);
  return (
    <>
      <div className={s.row}>
        <span className={s.dim}>Rye, England ·</span>
        <select className={s.select} value={street} onChange={(e) => { setStreet(e.target.value); reset(); }}>
          {RYE.streets.map((x) => <option key={x}>{x}</option>)}
        </select>
        {street === RYE.street.name && (
          <select className={s.select} value={house} onChange={(e) => { setHouse(e.target.value); reset(); }}>
            {RYE.street.houses.map((x, i) => <option key={i}>{x}</option>)}
          </select>
        )}
        <button type="button" className={s.btn} onClick={() => { reset(); setTimeout(startS, 0); }}>Find</button>
      </div>
      <div className={s.split}>
        <div className={s.side}><Shelf items={RYE.streets} pos={sp} found={streetFound} label={`Shelf of Rye · ${RYE.streets.length} streets`} /></div>
        <div className={s.side}>
          {street === RYE.street.name
            ? <Shelf items={RYE.street.houses} pos={hp} found={houseFound} label={`${RYE.street.name} · ${RYE.street.houses.length} houses`} />
            : <div className={s.dim} style={{ fontSize: 13 }}>Houses are shown for High Street.</div>}
        </div>
      </div>
      <div className={s.say}>
        Books opened: <span className={s.num}>{fmt(opened)}</span>
        {streetFound && (street !== RYE.street.name || houseFound) && <span className={s.good}> — found. A small town is an easy shelf.</span>}
      </div>
    </>
  );
}

function London() {
  const [pos, start, reset] = useWalk(LONDON.anchor, 1, 3500);
  const found = pos === LONDON.anchor;
  const at = Math.max(0, pos), rows = [];
  for (let i = Math.max(0, at - 5); i <= Math.min(LONDON.n - 1, at + 5); i++) rows.push(i);
  return (
    <>
      <div className={s.row}>
        <span className={s.dim}>London · Downing Street</span>
        <button type="button" className={s.btn} onClick={() => { reset(); setTimeout(start, 0); }}>Find</button>
      </div>
      <div className={s.split}>
        <div className={s.side}>
          <div className={s.dim} style={{ fontSize: 13, marginBottom: 4 }}>One shelf · {fmt(LONDON.n)} streets</div>
          <div className={s.shelf} style={{ overflow: 'hidden' }}>
            {rows.map((i) => (
              <div key={i} className={clsx(s.book, i < pos && s.bookSeen, i === pos && (found ? s.bookFound : s.bookCur))}>
                <span className={s.dim} style={{ display: 'inline-block', width: '4.2em' }}>{fmt(i + 1)}</span>
                {LONDON.names[i] || <span style={{ display: 'inline-block', verticalAlign: 'middle', height: 8, width: 50 + ((i * 37) % 90), background: '#2a3346', borderRadius: 2 }} />}
              </div>
            ))}
          </div>
        </div>
        <div className={s.side}>
          <div className={s.dim}>Books opened</div>
          <div className={s.big}>{fmt(pos < 0 ? 0 : pos + 1)}</div>
          <div className={s.dim}>of {fmt(LONDON.n)} on one shelf</div>
          {found && <div className={s.say}>Downing Street is book {fmt(LONDON.anchor + 1)}. And a street name that is not on the shelf means opening all {fmt(LONDON.n)}.</div>}
        </div>
      </div>
    </>
  );
}

export default function Librarian() {
  const [tab, setTab] = useState('rye');
  const total = LIB.antonio.reduce((a, x) => a + x.ans, 0);
  return (
    <div className={s.box}>
      <div className={s.title}>The librarian</div>
      <div className={s.hint}>
        The old search walked a library: town → its shelf of streets → the street → the house. Real shelves from OsmAnd maps.
      </div>
      <div className={s.row}>
        <button type="button" className={clsx(s.chip, tab === 'rye' && s.chipOn)} style={tab === 'rye' ? { background: '#ffd166', borderColor: '#ffd166' } : undefined} onClick={() => setTab('rye')}>A small town</button>
        <button type="button" className={clsx(s.chip, tab === 'london' && s.chipOn)} style={tab === 'london' ? { background: '#ffd166', borderColor: '#ffd166' } : undefined} onClick={() => setTab('london')}>London</button>
        <button type="button" className={clsx(s.chip, tab === 'word' && s.chipOn)} style={tab === 'word' ? { background: '#ffd166', borderColor: '#ffd166' } : undefined} onClick={() => setTab('word')}>One word: António</button>
      </div>
      {tab === 'rye' && <Rye />}
      {tab === 'london' && <London />}
      {tab === 'word' && (
        <>
          <div className={s.hint}>Without a town, a word can be anything. «António» in Portugal is 3,884 objects, and every kind asks its own question:</div>
          <table className={s.table}>
            <thead><tr><th>Objects</th><th>Kind</th><th>Question</th><th className={s.right}>Answers</th></tr></thead>
            <tbody>
              {LIB.antonio.map((x) => (
                <tr key={x.kind}><td className={s.num}>{x.n}</td><td>{x.kind}</td><td className={s.dim}>{x.q}</td><td className={clsx(s.right, s.num)}>{fmt(x.ans)}</td></tr>
              ))}
              <tr><td /><td /><td>Questions for a single word</td><td className={clsx(s.right, s.num)}>{fmt(total)}</td></tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
