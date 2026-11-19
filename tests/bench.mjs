import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const RESULTS_FOLDER = 'bench-results';
// set to tests/bench-results by yarn bench of tests/unit and tests/selenium
export const RESULTS_DIR_VARIABLE = 'BENCH_RESULTS_DIR';

export const MS = 'ms';
export const MB = 'MB';
export const FPS = 'fps';
export const COUNT = 'count';
export const BYTES = 'bytes';

const RUNS = 5;

export const GENERATED_STEP = 0.0001;

/** Vertex `i` of a generated track going north from 50°, `step` degrees apart. */
export function generatedVertex(i, step = GENERATED_STEP) {
    return [50 + i * step, 30 + (i % 2) * step];
}

/**
 * Median time of RUNS calls of `run`, ms. `prepare` makes a fresh input for every call outside the timing.
 */
export async function measure(run, { prepare = () => undefined } = {}) {
    const times = [];
    for (let i = 0; i < RUNS; i++) {
        const input = await prepare();
        const start = performance.now();
        await run(input);
        times.push(performance.now() - start);
    }

    return median(times);
}

function median(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

/**
 * Stores a number of the run labelled by BENCH_LABEL in bench-results/<label>.json.
 */
export function record(name, value, unit) {
    const dir = process.env[RESULTS_DIR_VARIABLE];
    if (!dir) {
        throw new Error(`${RESULTS_DIR_VARIABLE} is not set, run the benchmarks by yarn bench`);
    }
    const file = resultsFile(process.env.BENCH_LABEL ?? 'current', dir);
    const results = readResults(file);
    results[name] = { value: Math.round(value * 100) / 100, unit };
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify(results, null, 2));
    process.stdout.write(`bench: ${name} = ${results[name].value} ${unit}\n`);
}

export function resultsFile(label, dir) {
    return join(dir, `${label}.json`);
}

export function readResults(file) {
    return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
}
