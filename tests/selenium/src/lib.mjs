import { strict as assert } from 'node:assert';

export async function click({ driver }, by) {
    const element = await driver.findElement(by);

    assert.notEqual('hidden', await element.getCssValue('visibility'), 'click-element is hidden');

    await transitionDelay({ driver }, element); // wait for CSS transition finish

    await driver.actions().move({ origin: element }).click().perform();
}

// sleep by max(CSS transition delay) before click
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
