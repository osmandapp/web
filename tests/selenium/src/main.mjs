'use strict';

/**
 * 1) urls (local, test, main)
 * 2) desktop/mobile tests
 * 3) real/headless
 * 4) use private window (always reset cookies)
 *
 * a) ONE test = SEQUENCE of actions (each action may fail = whole test failed)
 *
 * - local chromium correct startup
 * - how to store login/password
 * - where to store gpx
 * - report png via tg
 *
 * test chains: login, upload-gpx
 */

import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import chalk from 'chalk';

import { existsSync, readdirSync, writeFile } from 'node:fs';

console.debug = () => {}; // suppress selenium console.debug

const { url, stop, debug, mobile, headless, tests } = parseArgs();

let failed = 0;
let successful = 0;

await cycleTests();

console.log();
failed > 0 && console.log(chalk.red('failed', failed));
successful > 0 && console.log(chalk.green('successful', successful));

process.exitCode = failed > 0 ? 1 : 0;

async function cycleTests() {
    for (let i = 0; i < tests.length; i++) {
        await runTest(tests[i], `[${i + 1}/${tests.length}]`);
        if (failed > 0 && stop) {
            break;
        }
    }
}

async function runTest(file, info) {
    await (async function () {
        let driver = null;
        try {
            driver = await prepareDriver();
            const { default: test } = await import('./tests/' + file);
            await test({ driver, url, mobile, headless });
        } finally {
            driver.takeScreenshot().then(function (data) {
                const base64Data = data.replace(/^data:image\/png;base64,/, '');
                writeFile(
                    'tmp/' + file + (mobile ? '.mobile' : '') + (headless ? '.headless' : '') + '.png',
                    base64Data,
                    'base64',
                    function (err) {
                        if (err) console.log(err);
                    }
                );
            });
            (await driver) && driver.quit();
        }
    })().then(
        () => {
            successful++;
            console.log(info, file, chalk.bgGreenBright('OK'));
        },
        (error) => {
            failed++;
            const message = debug ? error : error.message.replace(/\n.*/, '');
            console.log(info, file, chalk.bgRedBright('FAILED'), message);
        }
    );
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
    let debug = false;
    let mobile = false;
    let headless = false;

    process.argv.slice(2).forEach((a) => {
        if (a.match(/^(http:|https:)/)) {
            url = a;
        } else if (a.match(/^--/)) {
            a === '--stop' && (stop = true);
            a === '--debug' && (debug = true);
            a === '--mobile' && (mobile = true);
            a === '--headless' && (headless = true);
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
    return { url, tests, stop, debug, mobile, headless };
}
