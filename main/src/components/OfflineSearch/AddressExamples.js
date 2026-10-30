import React from 'react';
import s from './styles.module.css';

// One query, more than one reading: the words of an address and the role each one plays
const ROLE = { house: '#ff8800', street: '#4ea1ff', town: '#3ddc84', state: '#b48cff', name: '#e879f9' };

const EXAMPLES = [
  {
    q: '5 Ave New York',
    readings: [
      [[['5 Ave', 'street'], ['New York', 'town']], 'Fifth Avenue in New York City'],
      [[['5', 'house'], ['Ave … New York', 'street']], 'house 5 on New York Avenue'],
    ],
  },
  {
    q: 'Pennsylvania Avenue, Utah',
    readings: [
      [[['Pennsylvania Avenue', 'street'], ['Utah', 'state']], 'a street named after one state, in another'],
      [[['Pennsylvania', 'state']], 'also a state on the other side of the country — and "Avenue" is in over a million street names'],
    ],
  },
  {
    q: '48 Free Street, Portland, Maine',
    readings: [
      [[['48', 'house'], ['Free Street', 'street'], ['Portland', 'town'], ['Maine', 'state']], 'the state of Maine'],
      [[['Maine', 'street']], 'there is also a Maine Street, 37 km away'],
    ],
  },
  {
    q: 'New Philadelphia',
    readings: [
      [[['New Philadelphia', 'town']], 'a town in Ohio'],
      [[['New', 'street'], ['Philadelphia', 'town']], 'New Street in Philadelphia'],
    ],
  },
  {
    q: 'Calle 20 301, Mérida',
    readings: [[[['Calle 20', 'street'], ['301', 'house'], ['Mérida', 'town']], 'the first number is the street, the second the house']],
  },
  {
    q: 'Rue du 8 Mai 1945',
    readings: [[[['Rue du 8 Mai 1945', 'street']], 'two numbers, and neither is a house']],
  },
  {
    q: '14-54 31st Road, Queens',
    readings: [[[['14-54', 'house'], ['31st Road', 'street'], ['Queens', 'town']], 'one house number with a dash']],
  },
  {
    q: 'Calle L entre 23 y 25, La Habana',
    readings: [[[['Calle L', 'street'], ['between 23 and 25', 'street'], ['La Habana', 'town']], 'no house number at all — just the streets around it']],
  },
];

const SAME = [
  ['23 South 2nd Street, Saint Clair', 'Saint Clair, South 2nd Street 23'],
  ['S Mountain Blvd', 'South Mountain Boulevard'],
  ['Hemauerstraße', 'Hemauer Straße'],
  ['Mcdonalds', "McDonald's"],
];

function Chip({ text, role }) {
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginRight: 6 }}>
      <span style={{ border: `1.5px solid ${ROLE[role]}`, borderRadius: 6, padding: '1px 8px', whiteSpace: 'nowrap' }}>{text}</span>
      <span style={{ fontSize: 10, color: ROLE[role], textTransform: 'uppercase', letterSpacing: '0.04em' }}>{role}</span>
    </span>
  );
}

export default function AddressExamples() {
  return (
    <div className={s.box}>
      <div className={s.title}>One line of text, many readings</div>
      <div className={s.hint}>Real queries from our tests. The colour shows what each word turns out to be.</div>
      {EXAMPLES.map((ex) => (
        <div key={ex.q} style={{ padding: '10px 0', borderTop: '1px solid #1f2735' }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>«{ex.q}»</div>
          {ex.readings.map(([chips, note], i) => (
            <div key={i} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '4px 0', marginBottom: 6 }}>
              {ex.readings.length > 1 && <span className={s.dim} style={{ marginRight: 8, fontSize: 13, paddingTop: 2 }}>{i ? 'or' : ''}</span>}
              {chips.map(([text, role], k) => <Chip key={k} text={text} role={role} />)}
              <span className={s.dim} style={{ fontSize: 13, paddingTop: 2, marginLeft: 4 }}>— {note}</span>
            </div>
          ))}
        </div>
      ))}
      <div style={{ padding: '10px 0 0', borderTop: '1px solid #1f2735' }}>
        <div style={{ fontWeight: 600, marginBottom: 6 }}>Same place, different text</div>
        {SAME.map(([a, b]) => (
          <div key={a} style={{ fontSize: 14, marginBottom: 3 }}>«{a}» <span className={s.dim}>=</span> «{b}»</div>
        ))}
      </div>
    </div>
  );
}
