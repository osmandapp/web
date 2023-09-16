# TODO

- split timeouts by soft/hard limit (soft should grow up to hard, raising with window.seActivityTimestamp)

# Test groups

- 00 base (load site, login, ...)
- 10 local tracks (upload gpx, ...)
- 20 cloud tracks (save to cloud, ...)
- 30 track visualisation (local, cloud, ...)
- 40 routing (osrm-profiles, osmand-profiles, ...)

# Apple MacOS (m1/arm64) install fix for node-canvas

*https://github.com/Automattic/node-canvas/issues/1733
*https://github.com/Automattic/node-canvas/issues/1662

1) Install required packages directly for your MacOS:

arch -arm64 brew install pkg-config cairo pango libpng jpeg giflib librsvg

2) Install canvas package (now it refers to just installed packages):

cd tests/selenium && npm install canvas

3) Install rest of dependences:

yarn && yarn lint

4) Play with tests:

yarn test
yarn test --mobile
yarn test --headless
yarn test --headless --mobile
