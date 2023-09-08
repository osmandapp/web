'use strict';

/**
 * DONE 1) urls (local, test, main)
 * DONE 2) desktop/mobile mode
 * DONE 3) real/headless mode
 * DONE 4) use private window (always reset cookies)
 *
 * a) ONE test = SEQUENCE of actions (each action may fail = whole test failed)
 *
 * DONE - local chromium correct startup
 * - how to store login/password
 * - where to store gpx
 * - report png via tg
 *
 * test chains: login, upload-gpx
 */

import { Builder /*, By, Key, until*/ } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
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
            driver = await prepareDriver();
            const { default: test } = await import('./tests/' + file);
            await test({ driver, url, mobile, headless });
        } finally {
            await manageScreenshot({ driver, file });
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

    const data = await driver.takeScreenshot();
    const base64 = data.replace(/^data:image\/png;base64,/, '');

    const path =
        'screenshots/latest/' +
        file.replaceAll('.mjs', '') +
        (mobile ? '.mobile' : '') +
        (headless ? '.headless' : '') +
        '.png';

    writeFileSync(path, base64, { encoding: 'base64' });
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
