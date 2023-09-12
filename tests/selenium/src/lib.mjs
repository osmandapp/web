import { Condition } from 'selenium-webdriver';
import { strict as assert } from 'node:assert';
import { TIMEOUT_WAIT } from './settings.mjs';

function isStaleError(e) {
    return e && e.toString().match(/StaleElementReferenceError/);
}

/**
 * Lib: enclose(props, tag, callback)
 *
 * Wrap callback(driver) into driver.wait/Condition.
 * Restart callback() in case of "StaleElementReferenceError".
 * Used to enclose (findBy/waitBy ... actions) against stale element errors.
 *
 * Return: callback result (should be truthy to finish Condition positively).
 *
 * test: failed on other errors, including callback() errors or wait timed out
 */
export async function enclose({ driver }, tag, callback) {
    return await driver.wait(
        new Condition(tag, async (d) => {
            try {
                return callback(d); // awaiting for truthy
            } catch (e) {
                if (isStaleError(e)) {
                    return false;
                }
                throw e;
            }
        }),
        TIMEOUT_WAIT
    );
}

/**
 * Lib: waitBy(props, by)
 *
 * Wait (by) for any visible element.
 * Return: element
 *
 * test: failed if no visible element found
 */
export async function waitBy({ driver }, by) {
    const result = await driver.wait(
        new Condition('waitBy' + by.value, async (driver) => {
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
        TIMEOUT_WAIT
    );

    return result;
}

/**
 * Lib: clickBy(props, by)
 *
 * Find (by), check visible, delay until transition, click.
 * Works with non-interactive elements such as MenuItem.
 * Return: element
 *
 * test: failed if not found or not visible element
 */
export async function clickBy(props, by) {
    const clicker = async (driver) => {
        const element = await driver.findElement(by);
        assert.notEqual('hidden', await element.getCssValue('visibility'), 'click-element is hidden');
        await transitionDelay({ driver }, element); // wait for CSS transition finish
        await driver.actions().move({ origin: element }).click().perform();
        return element;
    };
    return await enclose(props, 'clickBy', clicker);
}

// sleep by max(CSS-transition-delay) before click
async function transitionDelay({ driver }, element) {
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
