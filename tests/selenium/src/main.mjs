'use strict';

import compareImages from 'resemblejs/compareImages.js';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

import { failed, loggerRun, loggerPass, loggerFail, loggerTitle, loggerReport } from './logger.mjs';
import { driver, cycle, stop, mobile, headless, noexit, tests, parseArgs, prepareDriver } from './options.mjs';

console.debug = () => {}; // suppress selenium's console.debug

parseArgs();

loggerTitle();

do {
    await cycleTests();
    await loggerReport();
    if (failed > 0 && stop) {
        break;
    }
} while (cycle);

process.exitCode = failed > 0 ? 1 : 0;

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
                error = e;
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
            loggerPass({ file, i, total, runtime: Date.now() - started });
        },
        (error) => {
            loggerFail({ file, i, total, error, runtime: Date.now() - started });
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
    const name = tag + (mobile ? 'mobile-' : '') + (headless ? 'headless-' : '') + file.replaceAll('.mjs', '') + '.png';

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
