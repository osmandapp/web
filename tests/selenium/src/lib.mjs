'use strict';

// import { strict as assert } from 'node:assert';
import { Condition, By } from 'selenium-webdriver';

import { driver, debug, TIMEOUT_OPTIONAL, TIMEOUT_REQUIRED } from './options.mjs';

// helpers
const isStaleError = (e) => e.toString().match(/StaleElementReferenceError/);
const isNotInteractableError = (e) => e.toString().match(/ElementNotInteractableError/);

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
 * hidden: return true if test failed. used for check if element isn't visible
 *
 * test: failed if no visible element found
 * test-ok: optional === true enforces return null in case of any error happens
 */
export async function waitBy(by, { optional = false, hidden = false } = {}) {
    debug && console.log('waitBy', by.value || by);
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
        if (hidden === true) {
            return true;
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
            const classes = await element.getAttribute('class');

            await classDelay(classes, delaysBeforeClick); // class-based delay
            await transitionDelay(element); // wait for CSS transition finish <Collapse>

            try {
                await element.click(); // the best way to click
            } catch (e) {
                if (isNotInteractableError(e)) {
                    // worse way, used for non-interactive elements only
                    console.log('clickBy', by.value || by, 'retry with move');
                    await driver.actions().move({ origin: element }).click().perform();
                } else {
                    throw e;
                }
            }

            await classDelay(classes, delaysAfterClick);
            return element;
        }
        return true; // enclose needs truthy
    };
    debug && console.log('clickBy', by.value || by);
    return await enclose(clicker, { tag: 'clickBy', optional });
}

const delaysBeforeClick = {
    'MuiSelect-select': 550, // <Select> close-transition (after previous click inside Select)
    'MuiMenuItem-root': 550, // <MenuItem> might be located inside <Collapse> but w/o transition css
};

const delaysAfterClick = {
    'MuiSelect-select': 550, // <Select> open-transition (before next click inside Select)
    'MuiMenuItem-root': 550, // <MenuItem> might be located inside <Collapse> but w/o transition css
};

// sleep by max(element-class in delays{})
async function classDelay(classes, delays) {
    let delayMs = 0;
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
                let ms = 0;
                const [, delay] = t.trim().split(' '); // '... 0.25s' -> '0.25s'
                if (delay.includes('ms')) {
                    ms = delay.replace('ms', ''); // 150ms -> 150
                } else if (delay.includes('s')) {
                    ms = delay.replace('s', '') * 1000; // '0.25s' -> 250
                }
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
    await driver.actions().pause(500).perform(); // allow leaflet to move map
}

const getAttributeBy = async (by, attr) =>
    await enclose(async () => (await (await waitBy(by)).getAttribute(attr)).toString());

const getValueBy = async (by) => await getAttributeBy(by, 'value');
const getInnerHtmlBy = async (by) => await getAttributeBy(by, 'innerHTML');
const getInnerTextBy = async (by) => await getAttributeBy(by, 'innerText');

const getTextBy = async (by) => await enclose(async () => (await (await waitBy(by)).getText()).toString());

/**
 * Lib: matchBy(by, match, getter)
 *
 * Param: by = By.id()
 * Param: match <String> <Regexp>
 * Param: getter <Function> [getTextBy, getValueBy, getInnerHtmlBy, getInnerTextBy]
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
        if ((typeof match === 'object' && text.match(match)) || (typeof match !== 'object' && text.includes(match))) {
            return text;
        }
        debug && console.log('matchBy (', match, ') NOT IN (', text, ')');
        return null;
    };
    return await enclose(validate, { tag: `matchTextBy (${match.toString()})` });
}

export const matchTextBy = async (by, match) => await matchBy(by, match, getTextBy);
export const matchValueBy = async (by, match) => await matchBy(by, match, getValueBy);
export const matchInnerHtmlBy = async (by, match) => await matchBy(by, match, getInnerHtmlBy);
export const matchInnerTextBy = async (by, match) => await matchBy(by, match, getInnerTextBy);

export async function sendKeysBy(by, keys) {
    enclose(
        async () => {
            const element = await waitBy(by);
            await element.sendKeys(keys);
            return true;
        },
        { tag: `sendKeysBy (${by.value || by}) (${keys})` }
    );
}
