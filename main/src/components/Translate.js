import React, {useMemo} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const dictCache = {};

function loadDicts(locale = 'en') {
  if (dictCache[locale]) {
    return dictCache[locale];
  }

  // Helper that tries the locale-specific file first and
  // falls back to the generic one if it is missing.
  const load = (prefix) => {
    try {
      // e.g. ../translations/android-values-fr.json
      //      (Webpack bundles all matching files automatically)
      return require(`../translations/${prefix}-values-${locale}.json`);
    } catch {
      // Fallback: ../translations/android-values.json
      return require(`../translations/${prefix}-values.json`);
    }
  };

  dictCache[locale] = {
    android: load('android'),
    ios: load('ios'),
    other: load('other'),
  };

  return dictCache[locale];
}

function decodeEscapes(str) {
  return str.replace(/\\+u\{?([0-9a-fA-F]{4,6})\}?/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)), ).replace(/\\(['"`])/g, '$1');
} 

/**
 * Return the resolved string or a highlighted “MISSING …” marker.
 */
function pick(id, dicts, isAndroid) {
  const {other, android, ios} = dicts;

  const str = other[id] ?? (isAndroid ? android[id] : ios[id]);
  if (str) return decodeEscapes(str);

  return (<span>{`MISSING ${isAndroid ? 'Android' : 'iOS'} resource: ${id}!`}</span>);
}

export default function Translate({ id, android, ids, delimeter = ' → '}) {
  const {i18n} = useDocusaurusContext();
  const locale = i18n?.currentLocale ?? 'en';

  // Load the three dictionaries only once per locale.
  const dicts = useMemo(() => loadDicts(locale), [locale]);

  const isAndroid = !!android && android !== 'no' && android !== 'false';

  if (id) {
    return pick(id, dicts, isAndroid);
  }

  if (ids) {
    return ids
      .split(',')
      .map((k) => pick(k.trim(), dicts, isAndroid))
      .join(delimeter);
  }

  return 'UNKNOWN <Translate> args!';
}