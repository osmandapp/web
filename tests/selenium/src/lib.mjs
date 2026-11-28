'use strict';

// import { strict as assert } from 'node:assert';
import { By, Condition, logging } from 'selenium-webdriver';

import {
    debug,
    driver,
    HIDDEN_TIMEOUT,
    LONG_TIMEOUT,
    TIMEOUT_OPTIONAL,
    TIMEOUT_REQUIRED,
    verbose,
    consumeInterrupt,
} from './options.mjs';
import actionIdleWait from './actions/actionIdleWait.mjs';

// helpers
const isStaleError = (e) => e.toString().match(/StaleElementReferenceError/);
const isNotInteractableError = (e) => e.toString().match(/ElementNotInteractableError/);

// site error dialog (GlobalFrame se-error-dialog), checked by waitBy/waitByRemoved with { failOnError }
class SiteError extends Error {}
const ERROR_DIALOG = By.id('se-error-dialog');
async function failOnErrorDialog() {
    const dialog = await driver.findElements(ERROR_DIALOG);
    if (dialog.length > 0) {
        throw new SiteError(`Site error: ${await dialog[0].getText()}`);
    }
}

// thrown once by the next wait after the run is interrupted, by an optional wait too
class Interrupted extends Error {}
function failOnInterrupt() {
    if (consumeInterrupt()) {
        throw new Interrupted('Run interrupted');
    }
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
                failOnInterrupt();
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
        if (optional === true && !(error instanceof Interrupted)) {
            return null;
        }
        verbose && (await logBrowserAndNetworkErrors(driver));
        throw error;
    }
}

/**
 Function: waitBy(by, { optional, idle, now, failOnError })

 This function waits for a visible element on the page.

 @param {By} by - An object that describes the locator strategy for the element.
 @param {Object} options - An object with optional parameters.
 @param {boolean} options.optional - If true, the function will return null if the element is not found. If false, the function will throw an error when the element is not found.
 @param {boolean} options.idle - If true, the function will wait for all ongoing actions to complete before proceeding with the search for the element. This is useful in situations where the element might not be immediately available due to ongoing processes or animations.
 @param {boolean} options.now - With optional: check once instead of polling for TIMEOUT_OPTIONAL. Implied by idle (the page is settled, the element is either there or not).
 @param {boolean} options.sized - Skip matches without layout (0x0, e.g. inside a hidden menu panel). Used by clickBy; off by default, hidden file inputs are found for sendKeys.

  Returns the first visible matching element.
  With optional: true returns null when nothing is found within TIMEOUT_OPTIONAL (at once with now: true).
  Otherwise throws on timeout; with failOnError throws SiteError (also when optional). */
export async function waitBy(
    by,
    { optional = false, idle = false, now = idle, sized = false, failOnError = false } = {}
) {
    debug && console.log('waitBy', by.value || by);
    if (idle) {
        await actionIdleWait();
    }
    const findVisible = async () => {
        failOnInterrupt();
        failOnError && (await failOnErrorDialog());
        const found = await driver.findElements(by);
        if (found && found.length > 0) {
            for (let i = 0; i < found.length; i++) {
                const element = found[i];
                try {
                    // don't check with element.isDisplayed() = wrong result
                    if ((await element.getCssValue('visibility')) === 'hidden') {
                        continue; // hidden - continue
                    }
                    if (sized) {
                        const { width, height } = await element.getRect();
                        if (width === 0 || height === 0) {
                            continue; // not laid out - continue
                        }
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
    };
    try {
        if (optional && now) {
            return (await findVisible()) || null;
        }
        return await driver.wait(
            new Condition('waitBy' + by.value, findVisible),
            optional ? TIMEOUT_OPTIONAL : TIMEOUT_REQUIRED
        );
    } catch (error) {
        if (optional === true && !(error instanceof SiteError || error instanceof Interrupted)) {
            return null;
        }
        verbose && (await logBrowserAndNetworkErrors(driver));
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
 * @param allowHidden
 The function uses a predefined timeout (HIDDEN_TIMEOUT) for waiting. If the element is not removed within this timeout, the function will throw an error. */
export async function waitByRemoved(by, allowHidden = false, { failOnError = false } = {}) {
    await actionIdleWait();
    const found = await driver.findElements(by);
    if (found && found.length > 0) {
        return await driver.wait(
            new Condition('waitByRemoved' + by.value, async () => {
                failOnInterrupt();
                failOnError && (await failOnErrorDialog());
                try {
                    const found = await driver.findElements(by);
                    if (!found || found.length === 0) {
                        return true;
                    }
                    if (allowHidden) {
                        const element = found[0];
                        return (
                            (await element.getCssValue('display')) === 'none' ||
                            (await element.getCssValue('visibility')) === 'hidden' ||
                            !(await element.isDisplayed()) // hidden by ancestor
                        );
                    }
                    return false;
                } catch (e) {
                    if (isStaleError(e)) {
                        return true; // stale - success
                    }
                    console.error(`Error in waitByRemoved for element: ${by.value}`, e);
                    if (isNotInteractableError(e)) {
                        return false;
                    }
                    throw e;
                }
            }),
            HIDDEN_TIMEOUT
        );
    }
    return true;
}

/**
 * Lib: clickBy(by, { optional, now, failOnError })
 *
 * Find (by) a visible and laid out element, wait for layout transitions, click.
 * now: with optional, check once instead of polling (see waitBy).
 * Works with non-interactive elements such as MenuItem.
 * Return: element
 *
 * test: failed if not found or not visible element
 * test-ok: optional===true is processed by enclose()
 */
export async function clickBy(by, { optional = false, now = false, failOnError = false } = {}) {
    const clicker = async () => {
        const element = await waitBy(by, { optional, now, sized: true, failOnError });
        if (element) {
            const classes = await element.getAttribute('class');

            await transitionDelay(); // wait for layout transitions (Menu / Collapse / Dialog) to finish

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

            if (classes?.match(/MuiSelect-select|MuiMenuItem-root/)) {
                await driver.sleep(60); // let Menu/Select close-transition start
                await transitionDelay();
            }
            return element;
        }
        return true; // enclose needs truthy
    };
    debug && console.log('clickBy', by.value || by);
    return await enclose(clicker, { tag: 'clickBy ' + (by.value || by), optional });
}

const TRANSITION_DELAY_MAX = 600; // ms

// count running CSS transitions/animations that move or reveal elements (color-like transitions, ripple and endless spinners are ignored)
const RUNNING_LAYOUT_ANIMATIONS = `
    const layoutProps = /^(transform|opacity|height|width|max-height|max-width|top|left|right|bottom|margin|padding)/;
    return document.getAnimations().filter((a) => {
        if (a.playState !== 'running') return false;
        if (a.effect?.getTiming().iterations === Infinity) return false;
        if (a.transitionProperty) return layoutProps.test(a.transitionProperty);
        return !a.effect?.target?.className?.toString().includes('MuiTouchRipple');
    }).length;
`;

// wait until layout transitions (Menu, Collapse, Dialog, Popover) are finished
async function transitionDelay() {
    const started = Date.now();
    while ((await driver.executeScript(RUNNING_LAYOUT_ANIMATIONS)) > 0) {
        if (Date.now() - started > TRANSITION_DELAY_MAX) {
            return;
        }
        await driver.sleep(40);
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

                await driver.executeScript('arguments[0].scrollIntoView(true);', element);

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

export const getTextBy = async (by) =>
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
async function matchBy(by, match, getter, optional = false) {
    const validate = async () => {
        const text = await getter(by);
        if ((typeof match === 'object' && text.match(match)) || (typeof match !== 'object' && text.includes(match))) {
            return text;
        }
        debug && console.log('matchBy (', match, ') NOT IN (', text, ')');
        return null;
    };
    return await enclose(validate, { tag: `matchTextBy (${match.toString()})`, optional });
}

export const matchTextBy = async (by, match, optional = false) => await matchBy(by, match, getTextBy, optional);
export const matchValueBy = async (by, match, optional = false) => await matchBy(by, match, getValueBy, optional);
export const matchInnerHtmlBy = async (by, match, optional = false) =>
    await matchBy(by, match, getInnerHtmlBy, optional);
export const matchInnerTextBy = async (by, match, optional = false) =>
    await matchBy(by, match, getInnerTextBy, optional);

export async function sendKeysBy(by, keys) {
    await enclose(
        async () => {
            const element = await waitBy(by);
            await element.sendKeys(keys);
            return true;
        },
        { tag: `sendKeysBy (${by.value || by}) (${keys})` }
    );
}

/** Types `text` over the whole value of the input: a triple click selects it first. */
export async function replaceTextBy(by, text) {
    const input = await waitBy(by);
    await driver.actions().click(input).click(input).click(input).perform();
    await input.sendKeys(text);
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
        verbose && (await logBrowserAndNetworkErrors(driver));
        debug && console.log(`Condition not met for element (${searchString})`);
    }
}

async function logBrowserAndNetworkErrors(driver) {
    console.warn('\n');
    const browserLogs = await driver.manage().logs().get(logging.Type.BROWSER);
    if (browserLogs && browserLogs.length > 0) {
        console.warn('--- Browser Console Logs ---');
        browserLogs.forEach((entry) => {
            console.warn(`[${entry.level}] ${entry.message}`);
        });
    } else {
        console.warn('No browser errors logged.');
    }

    const networkLogs = await driver.manage().logs().get(logging.Type.PERFORMANCE);
    if (networkLogs && networkLogs.length > 0) {
        console.warn('--- Network Logs ---');
        networkLogs.forEach((entry) => {
            const message = JSON.parse(entry.message).message;
            if (message.method === 'Network.responseReceived' || message.method === 'Network.requestFailed') {
                console.warn(`[${message.method}] ${message.params.response ? message.params.response.url : ''}`);
            }
        });
    } else {
        console.warn('No network errors logged.');
    }
    console.warn('\n' + 'Current URL:', await driver.getCurrentUrl(), '\n');
}

export async function clickOnMapCenter() {
    await new Promise((resolve) => setTimeout(resolve, TIMEOUT_OPTIONAL));
    const mapElement = await driver.findElement(By.className('leaflet-container'));
    const actions = driver.actions({ async: true });
    await actions.move({ origin: mapElement, x: 100, y: 100 }).contextClick().perform();
}

export async function getUrl() {
    return await driver.getCurrentUrl();
}

export async function getMapHash() {
    const [z, lat, lon] = ((await getUrl()).split('#')[1] ?? '').split('/').map(Number);

    return `${z}/${lat.toFixed(3)}/${lon.toFixed(3)}`;
}

/** Counts the requests of the page to `endpoint` from now on, read them with getRequestCount(). */
export async function countRequests(endpoint) {
    await driver.executeScript(`
        window.seRequestCount = 0;
        const fetch = window.fetch;
        window.fetch = function (url) {
            String(url).includes('${endpoint}') && window.seRequestCount++;
            return fetch.apply(this, arguments);
        };
    `);
}

export async function getRequestCount() {
    return await driver.executeScript('return window.seRequestCount');
}

const TRACK_HIT_LINE_PANE = 'trackHitLinePane';

// Counts on-map items (markers + vector layers) by opacity bucket.
// Used to verify Focus mode: dim=0.35 by default, hidden=0 when Focus toggle is on.
export async function countMapItemsByOpacity() {
    return await driver.executeScript(`
        const map = window.__leafletMap;
        const r = { full: 0, dim: 0, hidden: 0, total: 0 };
        if (!map) return r;
        function walk(layer) {
            if (typeof layer.eachLayer === 'function') {
                layer.eachLayer(walk);
                return;
            }
            const isMarker = typeof layer.getLatLng === 'function';
            const isVector = typeof layer.getLatLngs === 'function' && typeof layer.setStyle === 'function';
            if (!isMarker && !isVector) return;
            if (layer.options.pane === '${TRACK_HIT_LINE_PANE}') return;
            const op = layer.options.opacity == null ? 1 : layer.options.opacity;
            if (op === 0) r.hidden++;
            else if (op < 1) r.dim++;
            else r.full++;
            r.total++;
        }
        map.eachLayer(walk);
        return r;
    `);
}

export async function assert(condition, message) {
    if (!condition) {
        verbose && (await logBrowserAndNetworkErrors(driver));
        throw new Error(message || 'Assertion failed');
    }
}

export async function fillLoginData(login, password) {
    await enclose(
        async () => {
            const input = await waitBy(By.id('username'));
            await input.sendKeys(login);
            return true;
        },
        { tag: 'login' }
    );

    await enclose(
        async () => {
            const input = await waitBy(By.id('pwd'));
            await input.sendKeys(password);
            return true;
        },
        { tag: 'password' }
    );

    await clickBy(By.id('se-submit-login'));
}

async function getMapCoords(lat, lon) {
    const container = await driver.findElement(By.className('leaflet-container'));

    const [px, py] = await driver.executeScript(
        'const p = window.__leafletMap.latLngToContainerPoint([arguments[0], arguments[1]]);' +
            'return [Math.round(p.x), Math.round(p.y)];',
        lat,
        lon
    );

    const { left, top } = await driver.executeScript(
        'const r = arguments[0].getBoundingClientRect(); return { left: r.left, top: r.top };',
        container
    );

    const xAbs = Math.round(left + px);
    const yAbs = Math.round(top + py);

    return { container, xAbs, yAbs };
}

/**
 * Converts geographic coordinates to pixel coordinates within the Leaflet map container
 * and performs a right‑click at that position.
 *
 * @param {number} lat             - latitude
 * @param {number} lon             - longitude
 * @param {Object} opts
 * @param {boolean} opts.optional  - if true, returns null instead of throwing
 */
export async function rightClickBy(lat, lon, { optional = false } = {}) {
    const fn = async () => {
        await actionIdleWait({ tiles: true });

        const { container, xAbs, yAbs } = await getMapCoords(lat, lon);

        await driver.actions({ async: true }).move({ origin: 'viewport', x: xAbs, y: yAbs }).contextClick().perform();

        return container;
    };

    try {
        return await enclose(fn, { tag: 'rightClickBy', optional });
    } catch (e) {
        if (optional) return null;
        throw e;
    }
}

/**
 * Uses the Leaflet map instance exposed on window to convert
 * geographic coordinates into container pixel coordinates,
 * then performs a left-click at that position.
 *
 * @param {number} lat            – latitude
 * @param {number} lon            – longitude
 * @param {Object} opts
 * @param {boolean} opts.optional – if true, returns null instead of throwing
 */
export async function leftClickBy(lat, lon, { optional = false } = {}) {
    const fn = async () => {
        await actionIdleWait({ tiles: true });

        const { container, xAbs, yAbs } = await getMapCoords(lat, lon);

        await driver.actions({ async: true }).move({ origin: 'viewport', x: xAbs, y: yAbs }).click().perform();

        return container;
    };

    try {
        return await enclose(fn, { tag: 'leftClickBy', optional });
    } catch (e) {
        if (optional) return null;
        throw e;
    }
}

/**
 * Lib: getMarker(lat, lon, { optional })
 *
 * Find a Leaflet marker by geographic coordinates and return its data (properties or options).
 *
 * @param {number} lat             – latitude
 * @param {number} lon             – longitude
 * @param {Object} opts
 * @param {boolean} opts.optional  – if true, returns null instead of throwing when not found
 */
export async function hoverBy(lat, lon) {
    await actionIdleWait({ tiles: true });
    const { xAbs, yAbs } = await getMapCoords(lat, lon);
    await driver.actions({ async: true }).move({ origin: 'viewport', x: xAbs, y: yAbs }).perform();
}

export async function getOpenTrackName() {
    const actions = await waitBy(By.css('[id^="se-actions-"]'));

    return (await actions.getAttribute('id')).replace('se-actions-', '');
}

export async function validateEnabled(id, enabled) {
    await enclose(async () => (await (await waitBy(By.id(id))).isEnabled()) === enabled, {
        tag: `${id} ${enabled ? 'enabled' : 'disabled'}`,
    });
}

export async function dragBy([fromLat, fromLon], [toLat, toLon], { duration = 500 } = {}) {
    await actionIdleWait({ tiles: true });
    const from = await getMapCoords(fromLat, fromLon);
    const to = await getMapCoords(toLat, toLon);
    await driver
        .actions({ async: true })
        .move({ origin: 'viewport', x: from.xAbs, y: from.yAbs })
        .press()
        .move({ origin: 'viewport', x: to.xAbs, y: to.yAbs, duration })
        .release()
        .perform();
}

export async function getMarkersNear(lat, lon) {
    return await driver.executeScript(
        `return Object.values(window.__leafletMap._layers)
            .filter((layer) =>
                typeof layer.getLatLng === 'function' &&
                Math.abs(layer.getLatLng().lat - arguments[0]) < 1e-4 &&
                Math.abs(layer.getLatLng().lng - arguments[1]) < 1e-4)
            .map((layer) => ({
                type: layer.options.type,
                title: layer.options.title,
                draggable: !!layer.options.draggable,
                visible: layer._icon?.style.display !== 'none',
            }))`,
        lat,
        lon
    );
}

// also runs in the page, see ROUTE_POINT_COUNT_JS
const isRoutePointMarker = (options) =>
    options.type === 'localTracksLayers' && options.draggable && options.title !== 'poly';

/** A point of the edited track at [lat, lon], not the marker to drag a new point from the line. */
export async function hasRoutePointNear(lat, lon) {
    return (await getMarkersNear(lat, lon)).some(isRoutePointMarker);
}

/** A point of the edited track at [lat, lon] with its marker hidden. */
export async function hasHiddenRoutePointNear(lat, lon) {
    return (await getMarkersNear(lat, lon)).some((marker) => isRoutePointMarker(marker) && !marker.visible);
}

/** The pointer of a point picked in the Track tab at [lat, lon]. */
export async function hasPointerNear(lat, lon) {
    return (await getMarkersNear(lat, lon)).some((marker) => !marker.type && !marker.draggable);
}

/** Names of the waypoints of the edited track on the map. */
export async function getWaypointNames() {
    return await driver.executeScript(`
        return Object.values(window.__leafletMap._layers)
            .filter((layer) => layer.options.wpt && layer.options.type === 'localTracksLayers')
            .map((layer) => layer.options.name);
    `);
}

export async function getMarker(lat, lon, { optional = false } = {}) {
    const fn = async () => {
        await actionIdleWait({ tiles: true });
        const layersInfo = await driver.executeScript(`
      return Object.values(window.__leafletMap._layers)
        .filter(layer => typeof layer.getLatLng === 'function')
        .map(layer => {
          const info = {};
          const { lat: la, lng: lo } = layer.getLatLng();
          info.lat = la;
          info.lng = lo;
          const opts = {};
          for (const [k, v] of Object.entries(layer.options || {})) {
            if (v == null || ['string','number','boolean'].includes(typeof v)) {
              opts[k] = v;
            }
          }
          info.options = opts;
          // icon options
          if (layer.options.icon && layer.options.icon.options) {
            const ico = {};
            for (const [k, v] of Object.entries(layer.options.icon.options)) {
              if (v == null || ['string','number','boolean'].includes(typeof v)) {
                ico[k] = v;
              }
            }
            info.iconOptions = ico;
          }
          return info;
        });
    `);

        const found = layersInfo.find((l) => l.lat === lat && l.lng === lon);
        // console.log('Found marker:', found);
        return found;
    };

    try {
        return await enclose(fn, { tag: 'getMarker', optional });
    } catch (e) {
        if (optional) return null;
        throw e;
    }
}

export function pointsCount(n) {
    return new RegExp(`Points: ${n}\\b`);
}

/** Page code: the infoblock of the open track shows `n` points. */
export function pointsCountJs(n) {
    return `${pointsCount(n)}.test(document.getElementById('se-track-context-menu')?.innerText)`;
}

export async function matchPointsCount(n) {
    await matchTextBy(By.id('se-track-context-menu'), pointsCount(n));
}

/** Distance of the open track in its infoblock, km. */
export async function getTrackDistance() {
    const text = await getTextBy(By.id('se-track-context-menu'));

    return parseFloat(text.match(/Distance: ([\d.]+) km/)?.[1]);
}

export async function waitNoPointsCount() {
    await enclose(async () => !/Points:/.test(await getTextBy(By.id('se-track-context-menu'))), {
        tag: 'no point count',
    });
}

/**
 * Lines of the edited track, or of a track shown on the map outside the editor.
 *
 * @param {string} [trackName] - the track outside the editor, the edited track when omitted
 */
export async function getTrackLines(trackName) {
    return await driver.executeScript(
        `
        return Object.values(window.__leafletMap._layers)
            .filter((layer) => typeof layer.getLatLngs === 'function' &&
                (arguments[0] ? layer.options.trackName === arguments[0] : layer.options.type === 'localTracksLayers'))
            .map((layer) => {
                const points = layer.getLatLngs().flat(Infinity);
                const [start, middle, end] = [points[0], points[Math.floor(points.length / 2)], points.at(-1)].map(
                    (point) => point && { lat: point.lat, lng: point.lng }
                );
                const { dashArray, color, weight } = layer.options;

                return { size: points.length, dashed: !!dashArray, color, weight, start, middle, end };
            });
    `,
        trackName
    );
}

// page code of the number of the point markers of the edited track
export const ROUTE_POINT_COUNT_JS = `Object.values(window.__leafletMap._layers).filter(
    (layer) => (${isRoutePointMarker})(layer.options)
).length`;

export async function getRoutePointCount() {
    return await driver.executeScript(`return ${ROUTE_POINT_COUNT_JS};`);
}

/**
 * Time from the start of `act` until the page expression `isDone` is true on a drawn frame, ms.
 */
export async function measureInPage(act, isDone) {
    await driver.manage().setTimeouts({ script: LONG_TIMEOUT });
    await driver.executeScript('window.seBenchStart = performance.now()');
    await act();

    return await driver.executeAsyncScript(`
        const done = arguments[arguments.length - 1];
        const check = () => ((${isDone}) ? done(performance.now() - window.seBenchStart) : requestAnimationFrame(check));
        requestAnimationFrame(check);
    `);
}

/** Used JS heap of the page after a garbage collection, MB; yarn bench starts Chrome with gc and exact sizes. */
export async function getHeapMb() {
    return await driver.executeScript('window.gc(); return performance.memory.usedJSHeapSize / 1048576;');
}

// the edited track is saved and its analysis comes back within this quiet time after an edit
export const SETTLE_MS = 3000;

/** Total of the long tasks of the page, the main thread busy for over 50 ms, from `act` until the page settles, ms. */
export async function measureLongTasks(act) {
    await driver.executeScript(`
        window.seLongTasksMs = 0;
        window.seLongTasks = new PerformanceObserver((list) =>
            list.getEntries().forEach((task) => (window.seLongTasksMs += task.duration))
        );
        window.seLongTasks.observe({ type: 'longtask' });
    `);
    await act();
    await actionIdleWait({ idle: SETTLE_MS });

    return await driver.executeScript('window.seLongTasks.disconnect(); return window.seLongTasksMs;');
}

/** Frames per second the page draws during `act`. */
export async function measureFps(act) {
    await driver.executeScript(`
        const frames = { count: 0, start: performance.now(), on: true };
        const tick = () => frames.on && ++frames.count && requestAnimationFrame(tick);
        window.seFrames = frames;
        requestAnimationFrame(tick);
    `);
    await act();

    return await driver.executeScript(`
        const frames = window.seFrames;
        frames.on = false;
        return (frames.count * 1000) / (performance.now() - frames.start);
    `);
}

export async function waitRoutedLines(count) {
    let routed;
    await enclose(
        async () => {
            const lines = await getTrackLines();
            routed = lines.filter((line) => line.size > 2).length;
            return !lines.some((line) => line.dashed) && (count === undefined || routed === count);
        },
        { tag: 'routed segments' }
    );

    return routed;
}

/**
 * Zooms the Leaflet map via its built‑in ZoomControl.
 *
 * @param {'in'|'out'} direction  – "in" to zoom in, "out" to zoom out.
 * @returns {Promise<void>}
 */
export async function zoomMap(direction) {
    const zoomButton = direction === 'in' ? By.css('.leaflet-control-zoom-in') : By.css('.leaflet-control-zoom-out');
    const button = await waitBy(zoomButton, { optional: false, idle: true });
    await button.click();
}

/**
 * Centers the Leaflet map on the given coordinates.
 *
 * @param {number} lat - latitude
 * @param {number} lon - longitude
 * @param {number} [zoom] - zoom, the current one when omitted
 */
export async function setMapCenter(lat, lon, zoom) {
    await driver.executeScript(
        'window.__leafletMap.setView([arguments[0], arguments[1]], arguments[2] ?? window.__leafletMap.getZoom(), { animate: false });',
        lat,
        lon,
        zoom
    );
    await actionIdleWait({ tiles: true });
}

/**
 * Fetches the value of an input and asserts it matches the expected string exactly.
 *
 * @param {By} by - locator for the input element
 * @param {string} expected - expected value
 */
export async function expectInputExactBy(by, expected) {
    const input = await waitBy(by);
    const value = await input.getAttribute('value');
    await assert(value === expected, `Unexpected value for ${by.value}: expected "${expected}", got "${value}"`);
}

/**
 * Asserts the selected (big) pin on the map stands at the favorite with the given name.
 *
 * @param {string} name - favorite name
 */
export async function expectSelectedPinAtFavorite(name) {
    const { pin, fav } = await driver.executeScript(
        `
        const layers = Object.values(window.__leafletMap._layers).filter((l) => typeof l.getLatLng === 'function');
        const pin = layers.find((l) => (l.getElement?.()?.id ?? '').startsWith('se-selected-marker-'));
        const fav = layers.find((l) => l.options?.name === arguments[0] && l.options?.idObj);
        return { pin: pin?.getLatLng(), fav: fav?.getLatLng() };
        `,
        name
    );
    await assert(
        pin && fav,
        `selected pin ${JSON.stringify(pin)} or favorite ${name} ${JSON.stringify(fav)} not found`
    );
    const dist = await driver.executeScript(
        'return window.__leafletMap.distance(arguments[0], arguments[1])',
        pin,
        fav
    );
    await assert(dist < 10, `selected pin is ${Math.round(dist)} m away from the favorite ${name}`);
}

/**
 * Format latitude/longitude with fixed precision.
 *
 * @param {{lat:number, lon:number}} coords
 * @param {number} digits - number of fractional digits (default 5)
 * @returns {string}
 */
export function formatLatLon(coords, digits = 5) {
    return `${coords.lat.toFixed(digits)}, ${coords.lon.toFixed(digits)}`;
}
