'use strict';

import { Builder, By } from 'selenium-webdriver';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { Options } from 'selenium-webdriver/chrome.js'; // ServiceBuilder for logging

const TESTS_DIR = 'src/tests/';

export const TEST_LOGIN = 'osmand@grr.la';
export const TEST_PASSWORD = '0xDEADBEEF';
export const TEST_LOGIN2 = 'osmandtest2@gmail.com';
export const TEST_PASSWORD2 = 'osmandTest2osmandTest2';

export const TIMEOUT_OPTIONAL = 1000; // optional element timeout and driver.implicitlyWait() (1s)
export let TIMEOUT_REQUIRED = 45 * 1000; // required element timeout (waitBy / clickBy / enclose) (45s)
export const LONG_TIMEOUT = 300 * 1000; // used with --longtimeout to prolong default TIMEOUT_REQUIRED (300s)
export const HIDDEN_TIMEOUT = 10000; // hidden timeout (waitBy) (10s)

export const IDLE_DELAY = 1000; // additional delay after global window.seActivityTimestamp (1s)
export const FINAL_DELAY = 3000; // increased final idle delay - used after complex actions such as upload-tracks (3s)

export const ROUTE_SUMMARY_SELECTOR = By.id('se-route-summary-info');

export let driver = null;

export let url = null;

export let stop = false;
export let cycle = false;
export let debug = false;
export let verbose = false;
export let ignore = false;
export let mobile = false;
export let noexit = false;
export let headless = false;

export const tests = []; // used by main

export function parseArgs() {
    for (const a of process.argv.slice(2)) {
        if (a === '-h' || a === '--help') {
            showUsage();
            process.kill(process.pid);
        } else if (a === '--ls' || a === '--list') {
            showList();
            process.kill(process.pid);
        } else if (a.match(/^(http:|https:)/)) {
            url = a;
        } else if (a.match(/^--/)) {
            a === '--longtimeout' && (TIMEOUT_REQUIRED = LONG_TIMEOUT);
            a === '--headless' && (headless = true);
            a === '--mobile' && (mobile = true);
            a === '--ignore' && (ignore = true);
            a === '--noexit' && (noexit = true);
            a === '--verbose' && (verbose = true);
            a === '--debug' && (debug = true);
            a === '--cycle' && (cycle = true);
            a === '--stop' && (stop = true);
        } else {
            findTestsByMask(a);
        }
    }
    if (tests.length === 0) {
        findAllTests();
    }
}

function scanTestsDir(startDir, filterFn = null) {
    const found = [];
    const scanDir = (dir) => {
        const entries = readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else if (entry.name.endsWith('.mjs')) {
                const relativePath = fullPath.replace(TESTS_DIR, '');
                if (!filterFn || filterFn(entry.name, relativePath)) {
                    found.push(relativePath);
                }
            }
        }
    };
    scanDir(startDir);
    return found;
}

function findAllTests() {
    const allTests = scanTestsDir(TESTS_DIR);
    allTests.sort((a, b) => a.localeCompare(b));
    tests.push(...allTests);
}

function findTestsByMask(mask) {
    const testDir = `${TESTS_DIR}${mask}`;
    if (existsSync(testDir) && statSync(testDir).isDirectory()) {
        const found = scanTestsDir(testDir);
        found.sort((a, b) => a.localeCompare(b));
        tests.push(...found);
        return;
    }

    let found;
    const rangeMatch = mask.match(/^(\d+)-(\d+)$/);
    if (rangeMatch) {
        const [, from, to] = rangeMatch.map(Number);
        found = scanTestsDir(TESTS_DIR, (filename) => {
            const nums = [...filename.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
            return nums.some((n) => n >= from && n <= to);
        });
    } else {
        const regexp = mask2regexp(mask);
        found = scanTestsDir(TESTS_DIR, (filename) => filename.match(regexp));
    }

    found.sort((a, b) => a.localeCompare(b));
    tests.push(...found);

    if (found.length === 0) {
        throw Error('test not found');
    }
}

export function mask2regexp(mask) {
    // convert mask (support only * as a wildcard, eg *wiki*.gpx)
    const regexp = mask.replaceAll('.', '\\.').replaceAll('*', '.*');
    return new RegExp('^' + regexp); // '^' + regexp to behave as filesystem wildcards
}

function showList() {
    const scanDir = (dir, indent = '') => {
        const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            if (entry.isDirectory()) {
                console.log(indent + entry.name + '/');
                scanDir(fullPath, indent + '  ');
            } else if (entry.name.endsWith('.mjs')) {
                console.log(indent + entry.name);
            }
        }
    };
    scanDir(TESTS_DIR);
}

function showUsage() {
    console.log(`Usage: yarn [test|test:test|test:main] [options] [tests]

Target:
    test            Run on Local OsmAnd map
    test:test       Run on TEST OsmAnd map
    test:main       Run on MAIN OsmAnd map

Options:
    --longtimeout   Use 5 minute timeout instead of 45 seconds
    --headless      Run browser in headless (background) mode
    --mobile        Run browser in smartphone emulation mode
    --ignore        Ignore failed tests (exit with success)
    --stop          Stop tests after first failure happens
    --noexit        Do not close browser after test done
    --debug         Print debug info and full errors
    --verbose       Print console and network logs
    --cycle         Restart cycle of tests forever
    --list (--ls)   List tests and exit
    --help          Help and exit

Tests: 
    - No argument: run all tests
    - Directory name: run all tests in that directory (e.g., 'weather', 'tracks')
    - Test name: run specific test(s) (wildcards are ok)
    - Number range: run tests matching number range (e.g., '70-75')

Examples:
    yarn test weather                  Run all weather tests
    yarn test tracks                   Run all tracks tests
    yarn test *wiki*                   Run all tests matching 'wiki'
    yarn test 70-75                    Run tests 70 through 75
    yarn test base/00-load-site.mjs    Run specific test

Defaults: run all tests using foreground desktop mode
`);
}

export async function prepareDriver() {
    const width = 1500;
    const height = 1500;
    const deviceName = 'iPad Air';

    const options = new Options();

    options.addArguments('--incognito');

    mobile && options.setMobileEmulation({ deviceName });
    // headless && options.headless().windowSize({ width, height }); // use --window-size
    headless && options.addArguments('--headless', '--disable-gpu', '--no-sandbox', `--window-size=${width},${height}`);

    const tryHomeBinary = process.env.HOME + '/bin/chromium';
    const useLocalHomeBinary = existsSync(tryHomeBinary);
    useLocalHomeBinary && options.setChromeBinaryPath(tryHomeBinary);

    options.setLoggingPrefs({
        browser: 'ALL',
        performance: 'ALL',
    });

    options.setUserPreferences({
        'profile.default_content_setting_values.geolocation': 2, // 2 means block geolocation requests
    });
    const builder = new Builder().forBrowser('chrome').setChromeOptions(options);

    // debug && builder.setChromeService(new ServiceBuilder().loggingTo('/tmp/log').enableVerboseLogging());

    driver = builder.build();

    // setRect might cause unknown error: failed to change window state to 'normal'
    useLocalHomeBinary || (await driver.manage().window().setRect({ width, height }));

    await driver.manage().setTimeouts({ implicit: TIMEOUT_OPTIONAL });
}
