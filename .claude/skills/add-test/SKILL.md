---
name: add-test
description: Write or extend tests for OsmAnd Web Map - jest unit tests (tests/unit) and Selenium e2e tests (tests/selenium). Use when asked to add a test, cover a fix with a test, or fix a failing test.
---

# Tests for OsmAnd Web Map

Two suites, each a separate yarn package with its own `node_modules` (run `yarn` in it once; `tests/unit` also needs `map` installed, since it imports `map/src` directly).

- `tests/unit` - jest over `map/src`, no browser and no network. Logic: what the app sends to the API, data transforms, name and path building, pure helpers.
- `tests/selenium` - real browser against a running site. UI flows: clicks, menus, dialogs, what the user sees.

Cover a fix with a unit test whenever the broken logic is reachable without the UI - it is faster, it pins the exact payload, and it does not need an account. Fall back to selenium only for behaviour that lives in components.

# Unit tests (tests/unit)

Tests live in `tests/unit/src/tests/<category>/NN-name.test.js` (see `tests/unit/TESTS_STRUCTURE.md`). Numbers are used for selection (`yarn test 01`), shared code is in `src/util/`.

## Rules

1. Import app code through the `@map` alias: `import { saveTrackToCloud } from '@map/manager/track/SaveTrackManager';`
2. No `jest.mock` in a test. Stubs are wired once in `tests/unit/jest.config.js` (`moduleNameMapper`). If a new import drags in UI or ESM (`Unexpected token 'export'`, react-leaflet, `.svg`), add a pattern there - patterns are matched against the import string as written, so they are suffix-based (`FavoritesManager$`, not the full path). The first matching pattern wins: a mapping to the real file must come BEFORE the broad UI stubs.
3. Mock the boundary, never the subject. `apiGet` / `apiPost` are already `jest.fn()` in every test - assert on their arguments instead of stubbing the function you are testing.
4. Never assert against a stub. If the module under test compares with a constant of a stubbed module (`searchTypeMap.POI`) or takes defaults from one (`MarkerOptions.DEFAULT_WPT_COLOR`), both sides are `undefined` and the test proves nothing. Map that module to the real file, or move the plain constants out of the heavy module into a constants file of their own.
5. Build data with `src/util/fixtures/*` and extend the existing builders instead of assembling objects inline.
6. Read what the app really sent with `src/util/` helpers: `findRequest(apiPost, '/mapapi/upload-file')`, `readUploadedInfo(apiPost)` (FormData -> gunzip -> JSON).
7. Assert a whole payload with `toEqual`, not field by field - that also catches fields nobody meant to send. `toMatchObject` only when the object carries more fields than the test is about.

## Skeleton

```js
import { saveTrackToCloud } from '@map/manager/track/SaveTrackManager';
import { apiPost } from '@map/util/HttpApi';
import { findRequest } from '../../util/requests';
import { createCtx, createTrack } from '../../util/fixtures/tracks';

beforeEach(() => {
    // one endpoint: apiPost.mockResolvedValue({ data: { status: 'ok' } })
    // several: route by url
    apiPost.mockImplementation(async (url) => {
        if (url.endsWith('/mapapi/upload-file')) {
            return { data: { status: 'ok' } };
        }

        return null;
    });
});

test('what the app sends for <case>', async () => {
    const ctx = createCtx({ track: createTrack({ name: 'Track' }) });

    await saveTrackToCloud({ ctx, ltx: { loginUser: 'osmand@grr.la' }, currentFolder: 'Folder', fileName: 'Track', type: 'GPX', open: false });

    const { options } = findRequest(apiPost, '/mapapi/upload-file');
    expect(options.params).toEqual({ type: 'GPX', name: 'Folder/Track.gpx' });
});
```

## Keep the suite small

A test earns its place only if the behaviour can break silently and the user would notice it. Few dense tests, not many thin ones.

- One test per behaviour, not per assertion. All the cases of one function belong together: the plain, the `name:` and the `lang:` format of a category name read better as one test than as three.
- Group the branches of a function into one test with a few `expect`s - six kinds of search result, four fallbacks of an icon path, three formats of a wikipedia tag.
- Do not test one-line guards (`if (!x) return null`), getters, constants, or the content of a generated resource file.
- Do not test that a mock was called - test what the app decided.
- Do not test behaviour that is unreachable from the app: check the callers first, an unguarded read is not a bug when every caller guards it.
- The name says the behaviour, not the function: `a shared file is not confused with an own file of the same path`.

A manager or a formatting module is 10-15 tests, not 30.

## Expect what the app should do, not what it does

The expected value comes from the contract, never from running the code and copying the result. Before pinning a value, find where it is decided and check there:

- a file name, a key, a format shared with the phone or the server - read the Android code (osmandapp/android, e.g. `FavouritesFileHelper`) or the server (osmandapp/tools, e.g. `WebGpxParser`, `MapApiController`) and expect what they produce; a test that pins the web's own encoding proves nothing when the other side disagrees;
- a value shown to the user - ask whether a person would call it right (a date order, a name with the extension, a lowercase language);
- a limit - check what it is measured against (255 bytes of the name, or of the name with the prefix and the extension on the phone).

If a suspected bug's test passes on the first run, suspect the test: it compares live references with themselves (snapshot the numbers before the second call), or the fixture is not what the app really holds (`favorites/favorites.gpx` is not a favorite file name). Write down the reason a value is expected when it is not obvious from the name of the test.

## Look for bugs while writing

Writing the test is the review. Report the bugs first, before describing the tests, and never write a test that blesses broken behaviour.

- A red new test is a finding: decide whether the code or the expectation is wrong, and check the real callers before calling it a bug.
- Usual suspects: a value read from another module at module level (breaks inside an import cycle), a regex without an anchor or a word boundary, a lookup key built differently on the write and on the read side, an optional chain on one access and not on the next.
- A real defect that is out of scope goes to `KNOWN_ISSUES.md` with the file, the line and the mechanism.

## Prove the test is real

Revert the fix (or break the line under test), run the suite - the new test must fail. Restore and run again. A test that stays green with the bug reintroduced is worthless. After merging tests together, run the check again: every fix must still fail its test.

## Run and check

```bash
cd tests/unit
yarn test tracks/NN-name   # one file
yarn test tracks           # category
yarn test                  # all
yarn lint                  # eslint + prettier
```

# Selenium tests (tests/selenium)

Tests live in `tests/selenium/src/tests/<category>/NN-name.mjs` (categories: base, tracks, navigation, favorites, weather, search, map, menu, purchases; see `tests/selenium/TESTS_STRUCTURE.md`). A test is `export default async function test()` that runs top to bottom; any thrown error fails it. Numbers define run order and are used for selection (`yarn test 70-75`).

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
