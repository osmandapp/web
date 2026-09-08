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
        // no unit test is allowed to reach the network
        HttpApi$: `${STUBS}/httpApi.js`,
        // the local tracks storage is real: setup.js gives every suite an in-memory indexedDB fake
        'context/LocalTrackStorage$': path.join(MAP_DIR, 'src/context/LocalTrackStorage.js'),
        // AppContext pulls in the whole app - only the track-type helpers are needed
        'context/AppContext$': `${STUBS}/appContext.js`,
        // modules pulling map layers / routing / i18n - not exercised by unit tests
        // leaflet itself works in jsdom, the map layers around it do not
        '^leaflet$': path.join(MAP_DIR, 'node_modules/leaflet/dist/leaflet-src.js'),
        // sorting is plain logic that createTrackGroups depends on, keep it real
        'menu/actions/SortActions$': path.join(MAP_DIR, 'src/menu/actions/SortActions.jsx'),
        // the visible-tracks cache is plain localStorage logic used by the managers
        'visibletracks/VisibleTracks$': path.join(MAP_DIR, 'src/menu/visibletracks/VisibleTracks.jsx'),
        // poi tag names and formatting are plain logic shared by the poi menus
        'wpt/WptTagsProvider$': path.join(MAP_DIR, 'src/infoblock/components/wpt/WptTagsProvider.js'),
        // the row of a search result and the query it builds are plain logic
        'search/SearchResults$': path.join(MAP_DIR, 'src/menu/search/search/SearchResults.jsx'),
        'search/SearchResultItem$': path.join(MAP_DIR, 'src/menu/search/search/SearchResultItem.jsx'),
        // plain constants shared by the managers
        'menu/share/shareConstants$': path.join(MAP_DIR, 'src/menu/share/shareConstants.js'),
        // unit conversion is plain math used by the poi tags
        'units/UnitsConverter$': path.join(MAP_DIR, 'src/menu/settings/units/UnitsConverter.js'),
        // the router profiles and their params are plain logic over the loaded providers
        'geoRouter/geoRouter$': path.join(MAP_DIR, 'src/store/geoRouter/geoRouter.js'),
        // icons and marker shapes are plain svg logic
        'markers/MarkerOptions$': path.join(MAP_DIR, 'src/map/markers/MarkerOptions.js'),
        // marker clustering is plain geometry over the places, no map is involved
        'map/util/Clusterizer$': path.join(MAP_DIR, 'src/map/util/Clusterizer.js'),
        // map layers and the tooltip helper reach react-leaflet, the clustering geometry does not
        '/MapManager$': `${STUBS}/empty.js`,
        'layers/(FavoriteLayer|ExploreLayer)$': `${STUBS}/empty.js`,
        // rebuilding the favorite groups after a change is plain logic over the server response
        'favorite/FavoriteHelper$': path.join(MAP_DIR, 'src/infoblock/components/favorite/FavoriteHelper.js'),
        // UI layers - unit tests cover managers, not components
        '/(menu|frame|infoblock|dialogs)/': `${STUBS}/empty.js`,
        '/map/(layers|util|markers)/': `${STUBS}/empty.js`,
        FavoritesManager$: path.join(MAP_DIR, 'src/manager/FavoritesManager.js'),
        'geoRouter(\\.js)?$': `${STUBS}/empty.js`,
        // the app i18n module boots the whole translation setup, i18next itself stays real
        '/i18n$': `${STUBS}/i18n.js`,
        // app sources
        '^@map/(.*)$': path.join(MAP_DIR, 'src/$1'),
    },
};
