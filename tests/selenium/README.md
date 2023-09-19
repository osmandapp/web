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

2) Install base packages with yarn (incl. broken canvas):

yarn

3) Rebuild canvas with npm (using installed brew-libs):

npm rebuild canvas

4) Play with tests:

yarn test
yarn test --mobile
yarn test --headless
yarn test --headless --mobile

# Jenkins setup @ creator (proposal)

1) bind jenkins' home directory within /home (original directory kept as is)

mkdir -p /home/jenkins
mount --bind /var/lib/jenkins /home/jenkins
usermod -d /home/jenkins jenkins # change home directory

2) test jenkins jobs, if success, modify /etc/fstab:

/var/lib/jenkins /home/jenkins none defaults,bind 0 0

3) if failed, get back changes:

usermod -d /var/lib/jenkins jenkins
umount /home/jenkins
rmdir /home/jenkins
