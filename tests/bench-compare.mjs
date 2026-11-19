import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BYTES, COUNT, FPS, MB, MS, RESULTS_FOLDER, readResults, resultsFile } from './bench.mjs';

// timings and heap sizes are noisy, counts are exact
const TOLERANCE = 0.15;
const MIN_DELTA = { [MS]: 2, [MB]: 1, [FPS]: 2 };

const RESULTS_DIR = join(dirname(fileURLToPath(import.meta.url)), RESULTS_FOLDER);

const WORSE = 'WORSE';
const MISSING = 'missing';
const NEW = 'new';
const OK = 'ok';

const [before, after] = process.argv.slice(2);
if (!before || !after) {
    console.log('Usage: node tests/bench-compare.mjs <label before> <label after>');
    process.exit(2);
}

const base = readResults(resultsFile(before, RESULTS_DIR));
const next = readResults(resultsFile(after, RESULTS_DIR));
const names = [...new Set([...Object.keys(base), ...Object.keys(next)])].sort();

const rows = names.map((name) => {
    const was = base[name];
    const now = next[name];
    const unit = (was ?? now).unit;

    return { name, was: was?.value, now: now?.value, unit, status: getStatus(was, now, unit) };
});

printTable([
    ['benchmark', before, after, 'unit', 'change', ''],
    ...rows.map(({ name, was, now, unit, status }) => [name, was ?? '—', now ?? '—', unit, change(was, now), status]),
]);

const worse = rows.filter(({ status }) => status === WORSE || status === MISSING);
if (worse.length > 0) {
    console.log(`\n${worse.length} benchmark(s) worse than ${before} or missing`);
    process.exit(1);
}

// a benchmark added by the branch has nothing to compare with, one that the branch lost did not run
function getStatus(was, now, unit) {
    if (!was) {
        return NEW;
    }
    if (!now) {
        return MISSING;
    }

    return isWorse(was.value, now.value, unit) ? WORSE : OK;
}

function isWorse(was, now, unit) {
    if (unit === COUNT || unit === BYTES) {
        return now > was;
    }
    const growth = unit === FPS ? was - now : now - was;

    return growth > Math.max(was * TOLERANCE, MIN_DELTA[unit]);
}

function change(was, now) {
    if (was === undefined || now === undefined || was === 0) {
        return '';
    }
    const percent = Math.round(((now - was) / was) * 100);

    return `${percent > 0 ? '+' : ''}${percent}%`;
}

function printTable(table) {
    const widths = table[0].map((_, i) => Math.max(...table.map((row) => String(row[i]).length)));
    table.forEach((row) => console.log(row.map((cell, i) => String(cell).padEnd(widths[i])).join('  ')));
}
