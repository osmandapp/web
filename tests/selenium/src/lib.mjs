'use strict';

// import { strict as assert } from 'node:assert';
import { Condition, By } from 'selenium-webdriver';

import { driver, debug, TIMEOUT_OPTIONAL, TIMEOUT_REQUIRED } from './options.mjs';

// helper
function isStaleError(e) {
    return e && e.toString().match(/StaleElementReferenceError/);
}

/**
 * Lib: enclose(callback, { tag, optional })
 *
 * Wrap callback([driver]) into driver.wait/Condition.
 * Restart callback() in case of "StaleElementReferenceError".
 * Used to enclose (findBy/waitBy ... actions) against stale element errors.
 *
 * Return: callback result (should be truthy to finish Condition positively).
 *
 * test: failed on other errors, including callback() errors or wait timed out
 * test-ok: optional === true enforces return null in case of any error happens
 */
export async function enclose(callback, { tag = 'enclose', optional = false } = {}) {
    try {
        return await driver.wait(
            new Condition(tag, async (d) => {
                try {
                    return await callback(d); // awaiting for truthy, using (d) is optional
                } catch (e) {
                    if (isStaleError(e)) {
                        return false;
                    }
                    throw e;
                }
            }),
            optional ? TIMEOUT_OPTIONAL : TIMEOUT_REQUIRED
        );
    } catch (error) {
        if (optional === true) {
            return null;
        }
        throw error;
    }
}

/**
 * Lib: waitBy(by, { optional })
 *
 * Wait (by) for any visible element.
 * Return: element
 *
 * test: failed if no visible element found
 * test-ok: optional === true enforces return null in case of any error happens
 */
export async function waitBy(by, { optional = false } = {}) {
    try {
        return await driver.wait(
            new Condition('waitBy' + by.value, async () => {
                const found = await driver.findElements(by);
                if (found && found.length > 0) {
                    for (let i = 0; i < found.length; i++) {
                        const element = found[i];
                        try {
                            // don't check with element.isDisplayed() = wrong result
                            if ((await element.getCssValue('visibility')) === 'hidden') {
                                continue; // hidden - continue
                            }
                        } catch (e) {
                            if (isStaleError(e)) {
                                continue; // stale - continue
                            }
                        }
                        return element; // found - success
                    }
                }
                return false;
            }),
            optional ? TIMEOUT_OPTIONAL : TIMEOUT_REQUIRED
        );
    } catch (error) {
        if (optional === true) {
            return null;
        }
        throw error;
    }
}

/**
 * Lib: clickBy(by, { optional })
 *
 * Find (by), check visible, delay until transition, click.
 * Works with non-interactive elements such as MenuItem.
 * Return: element
 *
 * test: failed if not found or not visible element
 * test-ok: optional===true is processed by enclose()
 */
export async function clickBy(by, { optional = false } = {}) {
    const clicker = async () => {
        const element = await waitBy(by, { optional });
        if (element) {
            await transitionDelay(element); // wait for CSS transition finish
            await classDelay(element, delaysBeforeClick); // class-based delay

            await element.click(); // the best way to click
            // worse way, possibly allowed for non-interactive elements only:
            // await driver.actions().move({ origin: element }).click().perform();

            await classDelay(element, delaysAfterClick);
            return element;
        }
        return true; // enclose needs truthy
    };
    return await enclose(clicker, { tag: 'clickBy', optional });
}

const delaysBeforeClick = {
    'MuiMenuItem-root': 550,
};

const delaysAfterClick = {
    'MuiSelect-select': 550,
};

// sleep by max(element-class in delays{})
async function classDelay(element, delays) {
    let delayMs = 0;
    const classes = await element.getAttribute('class');
    if (classes) {
        classes.split(' ').forEach((c) => delays[c] > 0 && delays[c] > delayMs && (delayMs = delays[c]));
        if (delayMs > 0) {
            await driver.actions().pause(delayMs).perform();
        }
    }
}

// sleep by max(CSS-transition-delay) before click
async function transitionDelay(element) {
    let delayMs = 0;
    const extend = 1.15; // +15% to finish transition
    const transition = await element.getCssValue('transition');
    if (transition) {
        transition.split(',').forEach((t) => {
            // background-color 0.25s cubic-bezier(0.4 ...
            if (t.trim().match(/^(color|background-color|border-color|box-shadow)/)) {
                const [, seconds] = t.trim().split(' '); // 'color 0.25s' -> '0.25s'
                const ms = seconds.replace('s', '') * 1000; // '0.25s' -> 250
                ms > 0 && ms > delayMs && (delayMs = ms); // max
            }
        });
    }
    // validate and sleep
    if (delayMs > 0 && delayMs < 10000) {
        const delay = Math.trunc(delayMs * extend);
        await driver.actions().pause(delay).perform();
    }
}

/**
 * Lib: enumerateIds(match)
 *
 * Param: id <String> xpath starts-with match
 * Return: id's array[] of all visible elements
 * Example: const tracks = await enumerateIds('se-local-track-');
 *
 * test: failed if no ids was found and/or timeout was reached
 */
export async function enumerateIds(match) {
    const enumerator = async () => {
        const ids = [];
        const found = await driver.findElements(By.xpath('//*[starts-with(@id, "' + match + '")]'));

        if (found && found.length > 0) {
            for (let i = 0; i < found.length; i++) {
                const element = found[i];
                if ((await element.getCssValue('visibility')) !== 'hidden') {
                    ids.push(await element.getAttribute('id'));
                }
            }
            if (ids.length > 0) {
                return ids;
            }
        }

        return false; // try again
    };

    return await enclose(enumerator, { tag: 'enumerateIds' });
}

// navigate to #hash (via javascript)
export async function navigateHash(hash) {
    await driver.executeScript(`window.location.hash = '${hash}'`);
}

async function getValueBy(by) {
    const getter = async () => {
        const element = await waitBy(by);
        const value = await element.getAttribute('value');
        return value.toString();
    };
    return await enclose(getter, { tag: 'getValueBy' });
}

async function getTextBy(by) {
    const getter = async () => {
        const element = await waitBy(by);
        const text = await element.getText();
        return text.toString();
    };
    return await enclose(getter, { tag: 'getTextBy' });
}

/**
 * Lib: matchBy(by, match, getter)
 *
 * Param: by = By.id()
 * Param: match <String> <Regexp>
 * Param: getter <Function> [getTextBy, getValueBy, ...]
 *
 * Return: text of found and matched element
 * Example: await matchTextBy(By.id('se-route-info'), '123.45 km')
 * Example: await matchValueBy(By.id('se-route-start-point'), '50.123, 25.123')
 *
 * test-ok: element found (by)
 * test-ok: text match (match)
 */
async function matchBy(by, match, getter) {
    const validate = async () => {
        const text = await getter(by);
        if ((typeof match === 'object' && text.match(match)) || text.includes(match)) {
            return text;
        }
        debug && console.log('matchBy (', match, ') NOT IN (', text, ')');
        return null;
    };
    return await enclose(validate, { tag: `matchTextBy (${match.toString()})` });
}

export async function matchTextBy(by, match) {
    return await matchBy(by, match, getTextBy);
}

export async function matchValueBy(by, match) {
    return await matchBy(by, match, getValueBy);
}
