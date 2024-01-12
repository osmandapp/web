'use strict';

import { Builder } from 'selenium-webdriver';
import { existsSync, readdirSync } from 'node:fs';
import { Options } from 'selenium-webdriver/chrome.js'; // ServiceBuilder for logging

export const TEST_LOGIN = 'osmand@grr.la';
export const TEST_PASSWORD = '0xDEADBEEF';

export const TIMEOUT_OPTIONAL = 1000; // optional element timeout and driver.implicitlyWait() (1s)
export const TIMEOUT_REQUIRED = 45000; // required element timeout (waitBy / clickBy / enclose defaults) (45s)
export const HIDDEN_TIMEOUT = 10000; // hidden timeout (waitBy) (10s)

export const IDLE_DELAY = 1000; // additional delay after global window.seActivityTimestamp (1s)
export const FINAL_DELAY = 3000; // increased final idle delay - used after complex actions such as upload-tracks (3s)

export let driver = null;

export let url = null;

export let stop = false;
export let cycle = false;
export let debug = false;
export let ignore = false;
export let mobile = false;
export let noexit = false;
export let headless = false;

export const tests = []; // used by main

export function parseArgs() {
    process.argv.slice(2).forEach((a) => {
        if (a === '-h' || a === '--help') {
            showUsage();
            process.kill(process.pid);
        } else if (a === '--ls' || a === '--list') {
            showList();
            process.kill(process.pid);
        } else if (a.match(/^(http:|https:)/)) {
            url = a;
        } else if (a.match(/^--/)) {
            a === '--headless' && (headless = true);
            a === '--mobile' && (mobile = true);
            a === '--ignore' && (ignore = true);
            a === '--noexit' && (noexit = true);
            a === '--debug' && (debug = true);
            a === '--cycle' && (cycle = true);
            a === '--stop' && (stop = true);
        } else {
            findTestsByMask(a);
        }
    });
    if (tests.length === 0) {
        readdirSync('src/tests/')
            .sort()
            .forEach((file) => file.match(/\.mjs$/) && tests.push(file));
    }
}

function findTestsByMask(mask) {
    let found = 0;
    const regexp = mask2regexp(mask);
    readdirSync('src/tests/')
        .sort()
        .forEach((file) => file.match(/\.mjs$/) && file.match(regexp) && tests.push(file) && found++);
    if (found === 0) {
        throw Error('test not found');
    }
}

export function mask2regexp(mask) {
    // convert mask (support only * as a wildcard, eg *wiki*.gpx)
    const regexp = mask.replaceAll('.', '\\.').replaceAll('*', '.*');
    return new RegExp('^' + regexp); // '^' + regexp to behave as filesystem wildcards
}

function showList() {
    readdirSync('src/tests/')
        .sort()
        .forEach((file) => file.match(/\.mjs$/) && console.log(file));
}

function showUsage() {
    console.log(`Usage: yarn [test|test:test|test:main] [options] [tests]

Target:
    test            Run on Local OsmAnd map
    test:test       Run on TEST OsmAnd map
    test:main       Run on MAIN OsmAnd map

Options:
    --headless      Run browser in headless (background) mode
    --mobile        Run browser in smartphone emulation mode
    --ignore        Ignore failed tests (exit with success)
    --stop          Stop tests after first failure happens
    --noexit        Do not close browser after test done
    --debug         Print debug info and full errors
    --cycle         Restart cycle of tests forever
    --list (--ls)   List tests and exit
    --help          Help and exit

Tests: specify distinct test(s) to run (wildcards are ok)

Defaults: run all tests using foreground desktop mode
`);
}

export async function prepareDriver() {
    const width = 1280;
    const height = 720;
    const deviceName = 'iPad Air';

    const options = new Options();

    options.addArguments('--incognito');

    mobile && options.setMobileEmulation({ deviceName });
    headless && options.headless().windowSize({ width, height });

    const tryHomeBinary = process.env.HOME + '/bin/chromium';
    existsSync(tryHomeBinary) && options.setChromeBinaryPath(tryHomeBinary);

    const builder = await new Builder().forBrowser('chrome');

    builder.setChromeOptions(options);

    // debug && builder.setChromeService(new ServiceBuilder().loggingTo('/tmp/log').enableVerboseLogging());

    driver = builder.build();

    await driver.manage().setTimeouts({ implicit: TIMEOUT_OPTIONAL });
}
