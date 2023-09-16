'use strict';

import chalk from 'chalk';

import { url, headless, mobile, debug } from './options.mjs';

let started = 0;
export let passed = 0;
export let failed = 0;

const time = (ms) => Number(ms / 1000).toFixed(2) + 's';
const sequence = ({ i, total }) => `[${i + 1}/${total}]`;

export function loggerRun({ i, total, file }) {
    const seq = sequence({ i, total });
    const out = `${seq} ${file} ...\r`;
    process.stdout.write(out);
}

export function loggerPass({ i, total, file, runtime }) {
    const seq = sequence({ i, total });
    const status = chalk.bgGreenBright('PASS');
    const out = `${seq} ${status} ${file} (${time(runtime)})\n`;
    process.stdout.write(out);
    passed++;
}

export function loggerFail({ i, total, file, runtime, error }) {
    const seq = sequence({ i, total });
    const status = chalk.bgRedBright('FAILED');
    const message = debug ? error : error.message.replace(/\n.*/g, '');
    const out = `${seq} ${status} ${file} (${time(runtime)}) ${message}\n`;
    process.stdout.write(out);
    failed++;
}

export function loggerTitle() {
    const options = [];
    started = Date.now();
    mobile && options.push('--mobile');
    headless && options.push('--headless');
    const out = `url ${url} ${options.join(' ')}\n\n`;
    process.stdout.write(out);
}

export async function loggerReport() {
    const report = [];
    failed > 0 && report.push(failed + ' ' + chalk.red('failed'));
    passed > 0 && report.push(passed + ' ' + chalk.green('passed'));
    report.push(failed + passed + ' ' + 'total');
    report.push(`(${time(Date.now() - started)})`);
    const out = `\n${report.join(' ')}\n\n`;
    process.stdout.write(out);
}
