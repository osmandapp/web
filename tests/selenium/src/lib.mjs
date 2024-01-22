'use strict';

// import { strict as assert } from 'node:assert';
import { Condition, By } from 'selenium-webdriver';

import { driver, debug, TIMEOUT_OPTIONAL, TIMEOUT_REQUIRED, HIDDEN_TIMEOUT } from './options.mjs';
import actionIdleWait from './actions/actionIdleWait.mjs';

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
 Function: waitBy(by, { optional, idle })

 This function waits for a visible element on the page.
 Returns: the element if found.

 @param {By} by - An object that describes the locator strategy for the element.
 @param {Object} options - An object with optional parameters.
 @param {boolean} options.optional - If true, the function will return null if the element is not found. If false, the function will throw an error when the element is not found.
 @param {boolean} options.idle - If true, the function will wait for all ongoing actions to complete before proceeding with the search for the element. This is useful in situations where the element might not be immediately available due to ongoing processes or animations.

  Note:
  The function will return true if the test fails, which is used to check if the element is not visible.
  The test will fail if no visible element is found.
  If optional is set to true, it enforces the function to return null in case of any error. */
export async function waitBy(by, { optional = false, idle = false } = {}) {
    debug && console.log('waitBy', by.value || by);
    if (idle) {
        await actionIdleWait();
    }
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

 Function: waitByRemoved(by)
 This function waits until a specified element is removed from the page.
 Returns: true if the element is successfully removed, otherwise waits until the timeout.

 @param {By} by - An object that describes the locator strategy for the element.

  Note:
  The function first checks if the element exists on the page. If it does, it waits until the element is removed.
  If the element is not found initially, the function returns true immediately, indicating that the element has been removed.
  The function uses a predefined timeout (HIDDEN_TIMEOUT) for waiting. If the element is not removed within this timeout, the function will throw an error. */
export async function waitByRemoved(by) {
    await actionIdleWait();
    const found = await driver.findElements(by);
    if (found && found.length > 0) {
        return await driver.wait(
            new Condition('waitByRemoved' + by.value, async () => {
                const found = await driver.findElements(by);
                return !found || found.length === 0;
            }),
            HIDDEN_TIMEOUT
        );
    }
    return true;
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
    await enclose(async () => (await (await waitBy(by)).getAttribute(attr)).toString(), { tag: 'getAttributeBy' });

const getValueBy = async (by) => await getAttributeBy(by, 'value');
const getInnerHtmlBy = async (by) => await getAttributeBy(by, 'innerHTML');
const getInnerTextBy = async (by) => await getAttributeBy(by, 'innerText');

const getTextBy = async (by) =>
    await enclose(async () => (await (await waitBy(by)).getText()).toString(), { tag: 'getTextBy' });

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

export async function checkElementByCss(searchString, exist = true) {
    const timeout = exist ? TIMEOUT_REQUIRED : HIDDEN_TIMEOUT;

    // If exist is false and the element does not exist, return immediately
    if (!exist) {
        const elements = await driver.findElements(By.css(searchString));
        if (elements.length === 0) {
            debug && console.log(`Element does not exist (${searchString})`);
            return;
        }
    }

    try {
        await driver.wait(
            new Condition('checkElementByCss', async () => {
                const elements = await driver.findElements(By.css(searchString));
                return exist ? elements.length > 0 : elements.length === 0;
            }),
            timeout
        );
        debug && console.log(`Condition met for element (${searchString})`);
    } catch (error) {
        debug && console.log(`Condition not met for element (${searchString})`);
    }
}
