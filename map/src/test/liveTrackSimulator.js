/**
 * Live Track Simulator — browser dev tool
 *
 * Exposed on window.__liveTrackSim in development mode.
 *
 * --- Start ---
 *   const sim = await window.__liveTrackSim.start({ speed: 30, bearing: 45, eleProfile: 'hilly' });
 *
 * --- Start with a point limit (pause after 1000 points) ---
 *   const sim = await window.__liveTrackSim.start({ speed: 30, maxPoints: 1000 });
 *
 * --- Join an existing translation (e.g. after page refresh or sim.stop()) ---
 *   const sim = await window.__liveTrackSim.start({ tid: 'abc123' });
 *   // tid is printed in the console when the translation is first created,
 *   // or grab it from the share URL: ?tid=<value>
 *
 * --- Pause sending points (sim keeps connected) ---
 *   sim.pause();
 *
 * --- Resume sending points after pause ---
 *   sim.resume();
 *
 * --- Stop and disconnect ---
 *   sim.stop();
 *   // or: window.__liveTrackSim.stop(sim);
 *
 * --- Options ---
 *   tid        — join an existing translation (default: create a new one)
 *   alias      — display name (default: 'WebSimulator')
 *   lat        — start latitude  (default: 50.4501)
 *   lon        — start longitude (default: 30.5234)
 *   speed      — km/h (default: 20, bicycle pace)
 *   bearing    — direction 0-360° (default: 45)
 *   interval   — ms between points (default: 2000)
 *   eleProfile — 'flat' | 'hilly' | 'alpine' (default: 'flat')
 *   maxPoints  — stop after N points, then call sim.resume() (default: 0 = infinite)
 */

import { Client } from '@stomp/stompjs';
import {
    generateTranslationKey,
    computeTranslationId,
    encryptLocation,
    decryptLocation,
} from '../util/livetracks/liveTrackCrypto';

function movePoint(lat, lon, distanceMeters, bearingDeg) {
    const R = 6371000;
    const d = distanceMeters / R;
    const bearing = (bearingDeg * Math.PI) / 180;
    const lat1 = (lat * Math.PI) / 180;
    const lon1 = (lon * Math.PI) / 180;
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(bearing));
    const lon2 =
        lon1 +
        Math.atan2(Math.sin(bearing) * Math.sin(d) * Math.cos(lat1), Math.cos(d) - Math.sin(lat1) * Math.sin(lat2));

    return { lat: (lat2 * 180) / Math.PI, lon: (lon2 * 180) / Math.PI };
}

function makeElevationGenerator(profile) {
    let step = 0;
    const profiles = {
        flat: () => 100 + Math.sin(step * 0.05) * 2,
        hilly: () => 200 + Math.sin(step * 0.15) * 40 + Math.sin(step * 0.07) * 20,
        alpine: () => 800 + Math.sin(step * 0.08) * 150 + Math.sin(step * 0.03) * 80,
    };
    const fn = profiles[profile] || profiles.hilly;

    return () => {
        const e = fn();
        step++;
        return Math.round(e * 10) / 10;
    };
}

export function start(opts = {}) {
    const options = {
        tid: opts.tid ?? null,
        alias: opts.alias ?? 'WebSimulator',
        lat: opts.lat ?? 50.4501,
        lon: opts.lon ?? 30.5234,
        speed: opts.speed ?? 20,
        bearing: opts.bearing ?? 45,
        interval: opts.interval ?? 2000,
        eleProfile: opts.eleProfile ?? 'flat',
        maxPoints: opts.maxPoints ?? 0,
    };

    const brokerURL = 'ws://localhost:8080/osmand-websocket';

    const getEle = makeElevationGenerator(options.eleProfile);

    let currentLat = options.lat;
    let currentLon = options.lon;
    let currentBearing = options.bearing;
    let translationId = options.tid;
    let encKey = opts.key ?? null;
    let intervalHandle = null;
    let pointCount = 0;
    let paused = false;
    let started = false;
    let pendingConfirmation = false;

    return new Promise((resolve) => {
        const client = new Client({
            brokerURL,
            connectHeaders: { alias: options.alias },
            reconnectDelay: 0,
            debug: (str) => console.log('[STOMP]', str),

            onConnect: () => {
                if (started) return;
                started = true;

                console.log('%c✅ Connected to WebSocket', 'color: green; font-weight: bold');

                client.subscribe('/user/queue/updates', (message) => {
                    const msg = JSON.parse(message.body);
                    if (msg.type === 'TRANSLATION' && msg.data?.id) {
                        if (pendingConfirmation) {
                            pendingConfirmation = false;
                            console.log('%c📍 Translation ready!', 'color: blue; font-weight: bold');
                            console.log(`   tid: ${translationId}`);
                            const params = new URLSearchParams({ tid: translationId });
                            if (options.alias) params.set('name', options.alias);
                            const shareUrl = `${globalThis.location.origin}/map/live/?${params}#${encKey}`;
                            console.log('   Share URL (expand to copy):', { url: shareUrl });
                            console.log(`   Private key: ${encKey}`);
                            subscribeAndSimulate(translationId);
                        }
                    }

                    if (msg.type === 'USER_INFO') {
                        console.log(`👤 User: ${msg.data.nickname || msg.data.email}`);
                    }

                    if (msg.type === 'ERROR') {
                        console.error('❌ Server error:', msg.data);
                    }
                });

                client.publish({ destination: '/app/whoami' });

                if (options.tid) {
                    console.log(`🔗 Joining translation: ${options.tid}`);
                    subscribeAndSimulate(options.tid);
                } else {
                    console.log('📡 Creating new encrypted translation...');
                    generateTranslationKey()
                        .then((key) => {
                            encKey = key;
                            return computeTranslationId(key);
                        })
                        .then((tid) => {
                            translationId = tid;
                            pendingConfirmation = true;
                            client.publish({
                                destination: '/app/translation/create',
                                body: JSON.stringify({ translationId: tid }),
                            });
                        })
                        .catch((err) => console.error('❌ Key generation failed:', err));
                }
            },

            onDisconnect: () => {
                clearInterval(intervalHandle);
                console.log('❌ Disconnected');
            },
            onStompError: (frame) => console.error('STOMP error:', frame.headers?.message || frame),
        });

        function startInterval(tid) {
            intervalHandle = setInterval(() => {
                if (paused) return;

                const baseSpeedMs = options.speed / 3.6;
                const speedVariation = baseSpeedMs * (0.7 + Math.random() * 0.6);

                currentBearing = (currentBearing + (Math.random() - 0.5) * 40 + 360) % 360;

                const distStep = speedVariation * (options.interval / 1000);
                const next = movePoint(currentLat, currentLon, distStep, currentBearing);
                currentLat = next.lat;
                currentLon = next.lon;
                const ele = getEle();
                pointCount++;

                if (!encKey) return;
                const locationData = {
                    lat: currentLat,
                    lon: currentLon,
                    time: Date.now(),
                    speed: speedVariation,
                    ele,
                };
                encryptLocation(encKey, locationData)
                    .then((encData) => {
                        fetch(`/mapapi/translation/msg?encryptedData=${encodeURIComponent(encData)}`).catch(() => {});
                    })
                    .catch(() => {});

                if (options.maxPoints > 0 && pointCount >= options.maxPoints) {
                    paused = true;
                    console.log(
                        `%c⏸ Paused after ${pointCount} points. Call sim.resume() to continue.`,
                        'color: orange; font-weight: bold'
                    );
                }
            }, options.interval);
        }

        function subscribeAndSimulate(tid) {
            client.subscribe(`/topic/translation/${tid}`, (message) => {
                const msg = JSON.parse(message.body);
                if (msg.type === 'LOCATION') {
                    const encryptedData = msg.content?.encryptedData;
                    const pt = msg.content?.point;
                    function logPoint(p) {
                        if (!p) return;
                        const spd = Number.isFinite(p.speed) ? (p.speed * 3.6).toFixed(1) + 'km/h' : '-';
                        const ele = Number.isFinite(p.ele) ? p.ele + 'm' : '-';
                        console.log(
                            `📍 ${msg.sender}: lat=${p.lat?.toFixed(5)} lon=${p.lon?.toFixed(5)} spd=${spd} ele=${ele}`
                        );
                    }
                    if (encryptedData && encKey) {
                        decryptLocation(encKey, encryptedData)
                            .then(logPoint)
                            .catch(() => {});
                    } else if (pt) {
                        logPoint(pt);
                    }
                }
                if (msg.type === 'JOIN') {
                    console.log(`👤 ${msg.content} joined`);
                }
            });

            client.publish({ destination: `/app/translation/${tid}/load`, body: '{}' });
            client.publish({ destination: `/app/translation/${tid}/startSharing`, body: '{}' });

            const limitMsg = options.maxPoints > 0 ? ` | Limit: ${options.maxPoints} points` : ' | Continuous';
            console.log(
                '%c▶️  Simulation started — location output to console only',
                'color: orange; font-weight: bold'
            );
            console.log(
                `   Speed: ~${options.speed} km/h (±30% variation) | Bearing: ${options.bearing}° (±20° wander) | Profile: ${options.eleProfile}${limitMsg}`
            );

            startInterval(tid);

            resolve({
                translationId: tid,
                pause: () => {
                    paused = true;
                    console.log('%c⏸ Paused', 'color: orange');
                },
                resume: () => {
                    if (!paused) return;
                    paused = false;
                    console.log('%c▶️  Resumed', 'color: green');
                },
                stop: () => {
                    clearInterval(intervalHandle);
                    if (client?.connected) {
                        client.publish({ destination: `/app/translation/${tid}/stopSharing`, body: '{}' });
                        setTimeout(() => client.deactivate(), 500);
                    } else {
                        client.deactivate();
                    }
                    console.log(`%c⏹ Stopped after ${pointCount} points`, 'color: red; font-weight: bold');
                },
            });
        }

        client.activate();
    });
}

export function stop(handle) {
    handle?.stop();
}
