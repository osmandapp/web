'use strict';

const path = require('node:path');

const MAP_DIR = path.resolve(__dirname, '../../map');
const STUBS = '<rootDir>/src/util/stubs';

// tests import the app sources directly from ../../map/src (alias @map), so they are transformed too.
// moduleNameMapper is matched against the import string as it is written, so patterns are suffix-based;
// stubs come before the @map alias - the first match wins.
module.exports = {
    rootDir: __dirname,
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/tests/**/*.test.js'],
    setupFiles: ['<rootDir>/src/util/setup.js'],
    clearMocks: true,
    // REPORTER=junit writes test-results/results.xml for the jenkins junit plugin, as the selenium job does
    reporters:
        process.env.REPORTER === 'junit'
            ? ['default', ['jest-junit', { outputDirectory: 'test-results', outputName: 'results.xml' }]]
            : ['default'],
    restoreMocks: true,
    transform: {
        '^.+\\.[mc]?jsx?$': ['babel-jest', { configFile: path.resolve(__dirname, 'babel.config.js') }],
    },
    transformIgnorePatterns: ['/node_modules/(?!(lodash-es)/)'],
    moduleNameMapper: {
        // static assets
        '\\.(css|less|sass|scss)$': `${STUBS}/style.js`,
        '\\.(svg|png|jpe?g|gif|webp|avif|ico|bmp|woff2?|eot|ttf|otf|mp3|mp4|wav)$': `${STUBS}/file.js`,
        // no unit test is allowed to reach the network or IndexedDB
        HttpApi$: `${STUBS}/httpApi.js`,
        LocalTrackStorage$: `${STUBS}/localTrackStorage.js`,
        // AppContext pulls in the whole app - only the track-type helpers are needed
        'context/AppContext$': `${STUBS}/appContext.js`,
        // modules pulling map layers / routing / i18n - not exercised by unit tests
        '^leaflet$': `${STUBS}/empty.js`,
        // sorting is plain logic that createTrackGroups depends on, keep it real
        'menu/actions/SortActions$': path.join(MAP_DIR, 'src/menu/actions/SortActions.jsx'),
        // plain constants shared by the managers
        'menu/share/shareConstants$': path.join(MAP_DIR, 'src/menu/share/shareConstants.js'),
        // UI layers - unit tests cover managers, not components
        '/(menu|frame|infoblock|dialogs)/': `${STUBS}/empty.js`,
        '/map/(layers|util|markers)/': `${STUBS}/empty.js`,
        FavoritesManager$: `${STUBS}/empty.js`,
        MarkerOptions$: `${STUBS}/empty.js`,
        'geoRouter(\\.js)?$': `${STUBS}/empty.js`,
        '/i18n$': `${STUBS}/empty.js`,
        // app sources
        '^@map/(.*)$': path.join(MAP_DIR, 'src/$1'),
    },
};
