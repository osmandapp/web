# OsmAnd Web Unit Tests

Jest tests for the app sources in `../../map/src`. No browser, no network, no running site —
unlike [../selenium](../selenium), which drives a real page.

## Quick Start

```bash
(cd ../../map && yarn)   # app dependencies - tests import map/src, which loads react, pako, lodash-es
yarn                     # test dependencies
yarn test                # run all tests
```

## Test Organization

Tests live in `src/tests/<category>/NN-name.test.js`, where the category mirrors the app layout —
a test for `map/src/<area>/…` goes to `src/tests/<area>/`. See [TESTS_STRUCTURE.md](./TESTS_STRUCTURE.md).

```
src/
├── tests/
│   ├── tracks/          # map/src/manager/track/*
│   └── util/            # map/src/util/*
└── util/
    ├── fixtures/        # test data builders (tracks, ctx, cloud files)
    ├── stubs/           # module stubs wired via jest.config.js
    ├── requests.js      # find a request the app has sent
    ├── infoFile.js      # read the .info payload it carried
    └── setup.js         # jsdom polyfills and env
```

## Running Tests

```bash
yarn test                            # all tests
yarn test tracks                     # all tests in tracks/
yarn test 01                         # tests numbered 01
yarn test tracks/01-cloud-info-file  # specific test file
yarn test -t 'full .info structure'  # single test by its name
```

## Options

```bash
yarn test --listTests       # list all test files
yarn test --watch           # re-run on change
yarn test --coverage        # coverage report
yarn test --help            # show all options
```

## Writing a Test

1. Create `src/tests/<category>/NN-name.test.js` (next free number).
2. Import app code through the `@map` alias: `import { … } from '@map/manager/track/TracksManager';`
3. Reuse `src/util/fixtures` for data and `src/util/stubs` for modules you do not exercise.
4. The test is discovered automatically.

Network (`util/HttpApi`) and IndexedDB (`context/LocalTrackStorage`) are replaced by stubs for every
test, so `apiPost` is always a `jest.fn()` — assert on its arguments instead of mocking it per test.
