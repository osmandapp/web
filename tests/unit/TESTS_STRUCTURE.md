# Unit Tests Structure

## Directory Structure

```
src/tests/
├── tracks/         # map/src/manager/track/*
└── util/           # map/src/util/*
```

Categories mirror the app layout: a test for `map/src/<area>/…` goes to `src/tests/<area>/`. Add a new category by creating a directory under `src/tests/` — no config change is needed.

## File Naming

`NN-short-name.test.js`, numbered inside the category (`00-`, `01-`, …), same convention as the
selenium tests. The number is what `yarn test 01` matches.

## Shared Code (`src/util/`)

| Path | Purpose |
|---|---|
| `fixtures/` | builders for test data: tracks, waypoint groups, app context, cloud file entries |
| `stubs/` | module stubs wired through `moduleNameMapper` in `jest.config.js` |
| `requests.js` | finds the request the app has sent to a given endpoint |
| `infoFile.js` | reads the `.info` payload the app uploaded (FormData → gunzip → JSON) |
| `setup.js` | jsdom polyfills (`TextEncoder`) and `REACT_APP_*` env |

## Stubs

`jest.config.js` maps modules to stubs by the import string, so a test file needs no `jest.mock`:

| Pattern | Stub | Why |
|---|---|---|
| `HttpApi$` | `stubs/httpApi.js` | no unit test may reach the network; `apiPost` is a `jest.fn()` |
| `LocalTrackStorage$` | `stubs/localTrackStorage.js` | IndexedDB is not available in jsdom |
| `context/AppContext$` | `stubs/appContext.js` | the real one pulls in the whole app; only track-type helpers are needed |
| `menu/`, `frame/`, `infoblock/`, `dialogs/`, `map/layers/`… | `stubs/empty.js` | UI layers are not covered by unit tests |
| `*.css`, `*.svg`, … | `stubs/style.js`, `stubs/file.js` | static assets |

`stubs/empty.js` is a proxy: any named export of a stubbed module is a `jest.fn()`.

If a new test fails with `Unexpected token` or drags in map layers, add the module to
`moduleNameMapper` — patterns are matched against the import string as written, so they are
suffix-based (`FavoritesManager$`, not the full path).

## Running

```bash
yarn test                # all
yarn test tracks         # category
yarn test 01             # by number
yarn test --listTests    # list
```
