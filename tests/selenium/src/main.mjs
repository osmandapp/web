'use strict';

import chalk from 'chalk';
import compareImages from 'resemblejs/compareImages.js';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

import { driver, stop, verbose, mobile, headless, noexit, tests, parseArgs, prepareDriver } from './options.mjs';

parseArgs();

console.debug = () => {}; // suppress selenium's console.debug

let failed = 0;
let successful = 0;

console.log();
await cycleTests();

console.log();
failed > 0 && console.log(chalk.red('failed', failed));
successful > 0 && console.log(chalk.green('successful', successful));

console.log();
process.exitCode = failed > 0 ? 1 : 0;

async function cycleTests() {
    for (let i = 0; i < tests.length; i++) {
        await runTest({ file: tests[i], info: `[${i + 1}/${tests.length}]` });
        if (failed > 0 && stop) {
            break;
        }
    }
}

async function timer(callback) {
    const started = Date.now();
    await callback(); // async
    return Date.now() - started;
}

async function runTest({ file, info }) {
    let runtime = 0;
    await (async function () {
        try {
            let error = null;

            await prepareDriver();

            const { default: test } = await import('./tests/' + file);

            try {
                runtime += await timer(() => test());
            } catch (e) {
                error = e;
            }

            try {
                // don't validate screenshot if test was failed with error
                await manageScreenshot({ file, validate: error === null });
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
            successful++;
            console.log(info, file, chalk.bgGreenBright('OK'), Number(runtime / 1000).toFixed(2) + 's');
        },
        (error) => {
            failed++;
            const message = verbose ? error : error.message.replace(/\n.*/g, ''); // keep 1st line
            console.log(info, file, chalk.bgRedBright('FAILED'), message);
        }
    );
}

async function manageScreenshot({ file, validate = true }) {
    mkdirSync('screenshots/diff', { recursive: true });
    mkdirSync('screenshots/latest', { recursive: true });
    mkdirSync('screenshots/trusted', { recursive: true });

    const ss = await driver.takeScreenshot();

    const tag = (process.env.npm_lifecycle_event ?? 'test').replace(/[^a-z]/g, '-') + '-'; // yarn command as tag
    const name = tag + (mobile ? 'mobile-' : '') + (headless ? 'headless-' : '') + file.replaceAll('.mjs', '') + '.png';

    const diff = 'screenshots/diff/' + name;
    const latest = 'screenshots/latest/' + name;
    const trusted = 'screenshots/trusted/' + name;

    writeFileSync(latest, ss, { encoding: 'base64' });

    if (validate && existsSync(trusted)) {
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
