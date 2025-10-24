'use strict';

import compareImages from 'resemblejs/compareImages.js';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { TestIgnored } from './TestIgnored.mjs';
import { recordResult, generateReport } from './reporter.mjs';
import { failed, loggerRun, loggerPass, loggerFail, loggerTitle, loggerReport } from './logger.mjs';
import { driver, ignore, cycle, stop, mobile, headless, noexit, tests, parseArgs, prepareDriver } from './options.mjs';

console.debug = () => {}; // suppress selenium's console.debug

parseArgs();

loggerTitle();

do {
    await cycleTests();
    if (failed > 0 && stop) {
        break;
    }
} while (cycle);

await loggerReport();
await generateReport();

process.exitCode = failed > 0 && ignore === false ? 1 : 0;

async function cycleTests() {
    for (let i = 0; i < tests.length; i++) {
        await runTest({ file: tests[i], i, total: tests.length });
        if (failed > 0 && stop) {
            break;
        }
    }
}

async function runTest({ file, i, total }) {
    let started = Date.now();
    loggerRun({ file, i, total });
    await (async function () {
        try {
            let error = null;

            await prepareDriver();

            const { default: test } = await import('./tests/' + file);

            try {
                await test();
            } catch (e) {
                if (e instanceof TestIgnored) {
                    console.log(`Test ${file} is ignored`);
                    return;
                } else {
                    error = e;
                }
            }

            try {
                // don't validate screenshot if test was failed with error
                await manageScreenshot({ file, error });
            } catch (e) {
                // test's error is more important than screenshot's
                error === null && (error = e);
            }

            if (error) {
                throw error;
            }
        } finally {
            noexit === false && (await driver) && driver.quit();
        }
    })().then(
        () => {
            const runtime = Date.now() - started;
            loggerPass({ file, i, total, runtime });
            recordResult({ file, status: 'passed', runtime });
        },
        (error) => {
            const runtime = Date.now() - started;
            loggerFail({ file, i, total, error, runtime });
            recordResult({ file, status: 'failed', error, runtime });
        }
    );
}

async function manageScreenshot({ file, error = false }) {
    mkdirSync('screenshots/diff', { recursive: true });
    mkdirSync('screenshots/failed', { recursive: true });
    mkdirSync('screenshots/latest', { recursive: true });
    mkdirSync('screenshots/trusted', { recursive: true });

    const ss = await driver.takeScreenshot();

    const tag = (process.env.npm_lifecycle_event ?? 'test').replace(/[^a-z]/g, '-') + '-'; // yarn command as tag
    const name =
        tag +
        (mobile ? 'mobile-' : '') +
        (headless ? 'headless-' : '') +
        file.replaceAll('.mjs', '').replaceAll('/', '-') +
        '.png';

    const diff = 'screenshots/diff/' + name;
    const failed = 'screenshots/failed/' + name;
    const latest = 'screenshots/latest/' + name;
    const trusted = 'screenshots/trusted/' + name;

    writeFileSync(error === null ? latest : failed, ss, { encoding: 'base64' });

    if (error === null && existsSync(trusted)) {
        const options = {
            output: {
                largeImageThreshold: 0,
                outputDiff: true,
                errorColor: {
                    red: 255,
                    green: 0,
                    blue: 255,
                },
                // errorType: 'movement',
                // transparency: 0.5,
            },
            scaleToSameSize: true,
            ignore: 'antialiasing',
        };
        const resemble = await compareImages(latest, trusted, options);
        if (resemble.misMatchPercentage > 0) {
            writeFileSync(diff, resemble.getBuffer());
            throw new Error('screenshot mismatch ' + resemble.misMatchPercentage + '%');
        }
    }
}
