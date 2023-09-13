'use strict';

import { Builder } from 'selenium-webdriver';
import { existsSync, readdirSync } from 'node:fs';
import { Options, ServiceBuilder } from 'selenium-webdriver/chrome.js';

export const TEST_LOGIN = 'osmand@grr.la';
export const TEST_PASSWORD = '0xDEADBEEF';

export const TIMEOUT_OPTIONAL = 1000; // optional element timeout and driver.implicitlyWait() (1000)
export const TIMEOUT_REQUIRED = 10000; // required element timeout (waitBy / clickBy / enclose defaults) (10000)

export const IDLE_DELAY = 1000; // additional delay after global window.seActivityTimestamp (1000)
export const FINAL_DELAY = 3000; // increased final idle delay - used after complex actions such as upload-tracks (3000)

export let driver = null;

export let url = null;
export let stop = false;
export let verbose = false;
export let mobile = false;
export let noexit = false;
export let headless = false;

export const tests = []; // used by main

export function parseArgs() {
    process.argv.slice(2).forEach((a) => {
        if (a.match(/^(http:|https:)/)) {
            url = a;
        } else if (a.match(/^--/)) {
            a === '--mobile' && (mobile = true);
            a === '--headless' && (headless = true);
            a === '--verbose' && (verbose = true);
            a === '--noexit' && (noexit = true);
            a === '--stop' && (stop = true);
        } else {
            if (existsSync('src/tests/' + a + '.mjs')) {
                tests.push(a + '.mjs');
            } else if (existsSync('src/tests/' + a)) {
                tests.push(a);
            } else {
                throw Error('unknown test:', a);
            }
        }
    });
    if (tests.length === 0) {
        readdirSync('src/tests/')
            .sort()
            .forEach((file) => {
                file.match(/\.mjs$/) && tests.push(file);
            });
    }
    return { url, tests, stop, verbose, mobile, headless };
}

export async function prepareDriver() {
    const width = 1280;
    const height = 720;
    const deviceName = 'Samsung Galaxy S20 Ultra';

    const options = new Options();

    options.addArguments('--incognito');

    mobile && options.setMobileEmulation({ deviceName });
    headless && options.headless().windowSize({ width, height });

    const tryHomeBinary = process.env.HOME + '/bin/chromium';
    existsSync(tryHomeBinary) && options.setChromeBinaryPath(tryHomeBinary);

    const builder = await new Builder().forBrowser('chrome');

    builder.setChromeOptions(options);

    if (verbose) {
        builder.setChromeService(new ServiceBuilder().loggingTo('/tmp/log').enableVerboseLogging());
    }

    driver = builder.build();

    await driver.manage().setTimeouts({ implicit: TIMEOUT_OPTIONAL });

    return driver;
}
