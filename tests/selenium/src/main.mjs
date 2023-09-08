'use strict';

/**
 * DONE 1) urls (local, test, main)
 * DONE 2) desktop/mobile mode
 * DONE 3) real/headless mode
 * DONE 4) use private window (always reset cookies)
 *
 * DONE a) ONE test = SEQUENCE of actions (each action may fail = whole test failed)
 *
 * DONE - local chromium correct startup
 * - how to store login/password
 * - where to store gpx
 * - report png via tg
 *
 * test chains: login, upload-gpx
 */

import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import compareImages from 'resemblejs/compareImages.js';
import chalk from 'chalk';

import { existsSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';

console.debug = () => {}; // suppress selenium's console.debug

const { url, stop, verbose, mobile, headless, tests } = parseArgs();

let failed = 0;
let successful = 0;

await cycleTests();

console.log();
failed > 0 && console.log(chalk.red('failed', failed));
successful > 0 && console.log(chalk.green('successful', successful));

process.exitCode = failed > 0 ? 1 : 0;

async function cycleTests() {
    for (let i = 0; i < tests.length; i++) {
        await runTest({ file: tests[i], info: `[${i + 1}/${tests.length}]` });
        if (failed > 0 && stop) {
            break;
        }
    }
}

async function runTest({ file, info }) {
    await (async function () {
        let driver = null;
        try {
            let error = null;

            driver = await prepareDriver();
            const { default: test } = await import('./tests/' + file);

            try {
                await test({ driver, url, mobile, headless });
            } catch (e) {
                error = e;
            }

            try {
                await manageScreenshot({ driver, file });
            } catch (e) {
                error === null && (error = e);
            }

            if (error) {
                throw error;
            }
        } finally {
            (await driver) && driver.quit();
        }
    })().then(
        () => {
            successful++;
            console.log(info, file, chalk.bgGreenBright('OK'));
        },
        (error) => {
            failed++;
            const message = verbose ? error : error.message.replace(/\n.*/, '');
            console.log(info, file, chalk.bgRedBright('FAILED'), message);
        }
    );
}

async function manageScreenshot({ driver, file }) {
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

    if (existsSync(trusted)) {
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

async function prepareDriver() {
    const width = 1280;
    const height = 720;
    const deviceName = 'Samsung Galaxy S20 Ultra';

    const options = new Options();

    options.addArguments('--incognito');

    mobile && options.setMobileEmulation({ deviceName });
    headless && options.headless().windowSize({ width, height });

    const tryHomeBinary = process.env.HOME + '/bin/chromium';
    existsSync(tryHomeBinary) && options.setChromeBinaryPath(tryHomeBinary);

    const driver = await new Builder().forBrowser('chrome');

    driver.setChromeOptions(options);

    return driver.build();
}

function parseArgs() {
    let url = null;
    const tests = [];
    let stop = false;
    let verbose = false;
    let mobile = false;
    let headless = false;

    process.argv.slice(2).forEach((a) => {
        if (a.match(/^(http:|https:)/)) {
            url = a;
        } else if (a.match(/^--/)) {
            a === '--mobile' && (mobile = true);
            a === '--headless' && (headless = true);
            a === '--verbose' && (verbose = true);
            a === '--stop' && (stop = true);
        } else {
            if (existsSync('src/tests/' + a + '.mjs')) {
                tests.push(a + '.mjs');
            } else {
                throw Error('unknown test:', a);
            }
        }
    });
    if (tests.length === 0) {
        readdirSync('src/tests/').forEach((dir) => {
            dir.match(/\.mjs$/) && tests.push(dir);
        });
    }
    return { url, tests, stop, verbose, mobile, headless };
}
