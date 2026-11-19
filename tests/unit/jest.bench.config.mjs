import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from './jest.config.js';
import { RESULTS_DIR_VARIABLE, RESULTS_FOLDER } from '../bench.mjs';

process.env[RESULTS_DIR_VARIABLE] = join(dirname(fileURLToPath(import.meta.url)), '..', RESULTS_FOLDER);

// the benchmarks of src/bench run only by yarn bench, never with the tests
export default {
    ...config,
    testMatch: ['<rootDir>/src/bench/**/*.bench.js'],
    testTimeout: 10 * 60 * 1000,
};
