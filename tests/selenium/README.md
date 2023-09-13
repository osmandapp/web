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
