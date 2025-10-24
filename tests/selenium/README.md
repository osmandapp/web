# OsmAnd Web Selenium Tests

## Quick Start

```bash
yarn test                # Run all tests on localhost
yarn test:test           # Run on test.osmand.net
yarn test:main           # Run on osmand.net
```

## Test Organization

Tests are organized into categories. See [TESTS_STRUCTURE.md](./TESTS_STRUCTURE.md) for detailed information.

```
src/tests/
├── base/           # Basic tests (8 tests)
├── tracks/         # Track management (21 tests)
├── navigation/     # Navigation and routing (4 tests)
├── favorites/      # Favorites and waypoints (10 tests)
├── weather/        # Weather functionality (4 tests)
├── search/         # Search and POI (8 tests)
├── map/            # Map operations (2 tests)
├── purchases/      # Purchases (1 test)
└── plan-route/     # Route planning (1 test)
```

## Running Tests

```bash
# Run all tests
yarn test

# Run tests by category (pass folder name as argument)
yarn test weather                    # All tests in weather/ directory
yarn test tracks                     # All tests in tracks/ directory
yarn test favorites                  # All tests in favorites/ directory

# Run specific tests
yarn test 70-75                      # Tests numbered 70-75
yarn test *wiki*                     # Tests matching 'wiki'
yarn test base/00-load-site.mjs      # Specific test file
```

## Options

```bash
yarn test --list            # List all available tests
yarn test --headless        # Run in headless mode
yarn test --mobile          # Run in mobile emulation
yarn test --stop            # Stop after first failure
yarn test --longtimeout     # Use 5 minute timeout
yarn test --help            # Show all options
```

## TODO

- split timeouts by soft/hard limit (soft should grow up to hard, raising with window.seActivityTimestamp)

# Apple MacOS (m1/arm64) install fix for node-canvas

The problem: yarn can not install canvas package

*https://github.com/Automattic/node-canvas/issues/1733
*https://github.com/Automattic/node-canvas/issues/1662

1) Install required packages directly for your MacOS:

arch -arm64 brew install pkg-config cairo pango libpng jpeg giflib librsvg

2) Install base packages with yarn (incl. broken canvas):

yarn

3) Rebuild canvas with npm (using installed brew-libs):

npm rebuild canvas

4) Play with tests:

yarn test
yarn test --mobile
yarn test --headless
yarn test --headless --mobile

# Ubuntu 22.04 Chromium setup without Snap

The problem:

- By default, Chromium is installed as Snap package (both by apt/snap)
- Snap Chromium failed to start when HOME located not in /home
- Our Jenkins installed with /var/lib/jenkins as its HOME

The solution:

- Don't install (or remove) Chromium as Snap package
- Add special repository (ppa:xtradeb/apps)
- Install usual Chromium

*https://www.linuxcapable.com/install-chromium-browser-on-ubuntu-linux/#Section-2-Install-Chromium-with-Flatpak-and-Flathub

Linux commands:

sudo add-apt-repository ppa:xtradeb/apps -y

sudo apt update

sudo apt install chromium
