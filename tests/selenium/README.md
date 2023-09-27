# TODO

- split timeouts by soft/hard limit (soft should grow up to hard, raising with window.seActivityTimestamp)

# Test groups

- 00 base (load site, login, ...)
- 10 local tracks (upload gpx, ...)
- 20 cloud tracks (save to cloud, ...)
- 30 track visualisation (local, cloud, ...)
- 40 routing (osrm-profiles, osmand-profiles, ...)

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
