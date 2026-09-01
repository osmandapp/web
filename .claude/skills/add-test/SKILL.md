---
name: add-test
description: Write or extend Selenium e2e tests for OsmAnd Web Map (tests/selenium). Use when asked to add a test, cover a fix with a test, or fix a failing selenium test.
---

# Selenium tests for OsmAnd Web Map

Tests live in `tests/selenium/src/tests/<category>/NN-name.mjs` (categories: base, tracks, navigation, favorites, weather, search, map, purchases, plan-route; see `tests/selenium/TESTS_STRUCTURE.md`). A test is `export default async function test()` that runs top to bottom; any thrown error fails it. Numbers define run order and are used for selection (`yarn test 70-75`).

## Before writing

1. Read 2–3 existing tests of the same category and the actions they use — copy their patterns, do not invent new helpers.
2. Find element ids in `map/src`: every testable element has `id="se-..."`. Grep for the id before using it; never guess. Ids with names use the raw name (`se-actions-${wptName}`, spaces and brackets included).
3. Prefer an existing action from `src/actions/**` over inline steps (see the folder — login, upload, open/delete/rename actions per category). Add a new action only if the same steps appear in more than one test.

## Skeleton

```js
import { By } from 'selenium-webdriver';
import { clickBy, sendKeysBy, waitBy, waitByRemoved } from '../../lib.mjs';
import actionOpenMap from '../../actions/map/actionOpenMap.mjs';
import actionLogIn from '../../actions/login/actionLogIn.mjs';
import actionFinish from '../../actions/actionFinish.mjs';

export default async function test() {
    await actionOpenMap();
    await actionLogIn();
    // cleanup of everything the test creates (also from previous failed runs)
    // steps: act -> waitBy(result) / waitByRemoved(old)
    // cleanup again at the end
    await actionFinish();
}
```

## Helpers (`src/lib.mjs`)

- `waitBy(by, { optional, idle })` — waits for a visible element (45s), throws otherwise; `optional: true` returns null after 1s; `idle: true` waits for app idle (`window.seActivityTimestamp`) first — use before clicking items in freshly rendered lists.
- `waitByRemoved(by)` — waits until no such element exists.
- `clickBy(by, { optional })` — waits, then clicks (falls back to move+click for non-interactable).
- `sendKeysBy(by, keys)`, `matchTextBy`, `enumerateIds('se-prefix-')` (visible ids in DOM order — use for order/count checks), `enclose(cb, { tag })` (retry a condition until truthy — use for assertions that need time), `getUrl()`.
- `actionIdleWait()` after heavy actions (upload, delete).

Assert with waits, not with plain `assert`: expected element → `waitBy`, expected absence → `waitByRemoved`, order/count → `enclose(() => enumerateIds(...))`.

## UI rules

- Main menu items toggle: clicking a menu button while that menu is already open closes it. Helpers that open a menu must be called from another menu; if you are already there, close it first and let the helper reopen it.
- A step that can end in two states (list or "nothing found", opened or closed) must check both: the expected one with `waitBy`, the alternative with `{ optional: true }`.
- Sub-pages hide their parent lists (opened folder/group hides the list of folders): go back with the page's back button before waiting for list items.
- Dialogs: click the submit id, then `waitByRemoved` the dialog id before the next click.
- After create/delete/rename wait for the concrete element to appear/disappear, never for time.

## Data and cleanup

- Test files: `tests/selenium/gpx/*.gpx`, `tests/selenium/favorites/*.gpx` via `getFiles({ folder })` from `src/util.mjs`. Check the file content before relying on names inside it.
- Everything the test creates or renames must be deleted at the end AND at the start (a previous run may have failed mid-way). Cleanup by name prefix so renamed items are covered too.

## Run and check

```bash
cd tests/selenium
yarn test <category>/<NN-name>.mjs   # one test against localhost:3000
yarn test <category> --headless      # category
yarn lint                            # eslint + prettier
```

Failed runs leave screenshots in `tests/selenium/screenshots/failed/`. The failure message names the locator that timed out — read the app code for that step before changing the test.
