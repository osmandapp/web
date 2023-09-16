'use strict';

import chalk from 'chalk';

import { url, headless, mobile, debug, cycle } from './options.mjs';

export let passed = 0;
export let failed = 0;
let started = Date.now();

const SPACER = 70;
const time = (ms) => Number(ms / 1000).toFixed(2) + 's';
const sequence = ({ i, total }) => `[${i + 1}/${total}]`;

export function loggerRun({ i, total, file }) {
    const seq = sequence({ i, total });
    const out = `${seq} ${file} ...\r`;
    process.stdout.write(out);
}

export function loggerPass({ i, total, file, runtime }) {
    passed++;

    const seq = sequence({ i, total });
    const status = chalk.bgGreenBright('PASS');
    const out = `${seq} ${status} ${file} (${time(runtime)})`;

    const report = cycle ? getReport() : ''; // add report when --cycle enabled
    const spacer = SPACER - out.length > 0 ? ' '.repeat(SPACER - out.length) : ' ';
    process.stdout.write(out + spacer + report + '\n');
}

export function loggerFail({ i, total, file, runtime, error }) {
    failed++;

    const seq = sequence({ i, total });
    const status = chalk.bgRedBright('FAILED');
    const message = chalk.red(debug ? error : error.message.replace(/\n.*/g, ''));
    const out = `${seq} ${status} ${file} (${time(runtime)}) ${message}`;

    const report = cycle ? getReport() : ''; // add report when --cycle enabled
    const spacer = SPACER - out.length > 0 ? ' '.repeat(SPACER - out.length) : ' ';
    process.stdout.write(out + spacer + report + '\n');
}

export function loggerTitle() {
    const options = [];
    mobile && options.push('--mobile');
    headless && options.push('--headless');
    const out = `url ${url} ${options.join(' ')}\n\n`;
    process.stdout.write(out);
}

export async function loggerReport() {
    const out = `\n${getReport()}\n\n`;
    process.stdout.write(out);
}

function getReport() {
    const parts = [];
    failed > 0 && parts.push(failed + ' ' + chalk.red('failed'));
    passed > 0 && parts.push(passed + ' ' + chalk.green('passed'));
    parts.push(failed + passed + ' ' + 'total');
    parts.push(`(${time(Date.now() - started)})`);
    return parts.join(' ');
}
