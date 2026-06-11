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
 * --- Stress test: backfill 24h of history, then go live (big-data test) ---
 *   const sim = await window.__liveTrackSim.start({ backfillHours: 24 });
 *
 * --- Join an existing translation (e.g. after page refresh or sim.stop()) ---
 *   const sim = await window.__liveTrackSim.start({ tid: 'abc123', key: '<64-hex key>' });
 *   // tid + key are printed in the console when the translation is first created
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
 *   key        — 64-hex private key, required to SEND when joining via tid
 *   alias      — display name (default: 'WebSimulator')
 *   lat        — start latitude  (default: 50.4501)
 *   lon        — start longitude (default: 30.5234)
 *   speed      — km/h (default: 20, bicycle pace)
 *   bearing    — direction 0-360° (default: 45)
 *   interval   — ms between points (default: 2000)
 *   eleProfile — 'flat' | 'hilly' | 'alpine' (default: 'flat')
 *   maxPoints  — stop after N points, then call sim.resume() (default: 0 = infinite)
 *   backfillHours — send a burst of back-dated points spanning N hours before going live (default: 0 = off)
 *   backfillStep  — ms between back-dated points (default: 0 = auto, fits the whole window
 *                   under the client 10k-point cap; set explicitly to stress-test the cap)
 */

import { Client } from '@stomp/stompjs';
import {
    generateTranslationKey,
    computeTranslationId,
    encryptLocation,
    decryptLocation,
} from '../util/livetracks/liveTrackCrypto';
import { apiPost } from '../util/HttpApi';

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
        backfillHours: opts.backfillHours ?? 0,
        backfillStep: opts.backfillStep ?? 0, // 0 = auto (fit the whole window under the client cap)
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
                            // Back-date creation so the backfilled history isn't cut off as "before
                            // creation" (dev-only on the server) — lets loadEarlier paging be tested.
                            const creationDate =
                                options.backfillHours > 0 ? Date.now() - options.backfillHours * 3600 * 1000 : 0;
                            client.publish({
                                destination: '/app/translation/create',
                                body: JSON.stringify({ translationId: tid, creationDate }),
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
                        apiPost(
                            '/mapapi/translation/msg',
                            `translationId=${encodeURIComponent(translationId)}&encryptedData=${encodeURIComponent(encData)}`,
                            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
                        ).catch(() => {});
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

        // Stress test
        async function backfill() {
            if (!encKey) return;
            const BACKFILL_TARGET_POINTS = 9500;
            const windowMs = options.backfillHours * 3600 * 1000;
            const stepMs =
                options.backfillStep > 0
                    ? options.backfillStep
                    : Math.max(2000, Math.ceil(windowMs / BACKFILL_TARGET_POINTS));
            const end = Date.now();
            const startTime = end - windowMs;

            // Build the path sequentially (coherent track), then send concurrently in chunks.
            const points = [];
            let lat = currentLat;
            let lon = currentLon;
            let bearing = currentBearing;
            for (let t = startTime; t < end; t += stepMs) {
                bearing = (bearing + (Math.random() - 0.5) * 40 + 360) % 360;
                const speed = (options.speed / 3.6) * (0.7 + Math.random() * 0.6);
                const next = movePoint(lat, lon, speed * (stepMs / 1000), bearing);
                lat = next.lat;
                lon = next.lon;
                points.push({ lat, lon, time: t, speed, ele: getEle() });
            }
            currentLat = lat;
            currentLon = lon;
            currentBearing = bearing;

            console.log(
                `%c⏳ Backfilling ${points.length} points over ${options.backfillHours}h (step ${stepMs}ms)...`,
                'color: cyan; font-weight: bold'
            );
            if (points.length > 10000) {
                console.warn(
                    `⚠️ ${points.length} points exceed the client cap (10000): the oldest hours will be dropped on merge, loadEarlier won't reach the start of the window`
                );
            }
            // Give the server a moment to process startSharing (sent over WS just before this),
            // otherwise the first chunks are rejected as NOT_SHARED and the oldest points are lost.
            await new Promise((r) => setTimeout(r, 500));
            let failed = 0;
            const CHUNK = 50;
            for (let i = 0; i < points.length; i += CHUNK) {
                await Promise.all(
                    points.slice(i, i + CHUNK).map(async (p) => {
                        try {
                            const encData = await encryptLocation(encKey, p);
                            await apiPost(
                                '/mapapi/translation/msg',
                                `translationId=${encodeURIComponent(translationId)}&encryptedData=${encodeURIComponent(encData)}&serverReceiveTime=${p.time}`,
                                {
                                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                    throwErrors: true,
                                }
                            );
                        } catch {
                            failed++;
                        }
                    })
                );
            }
            pointCount += points.length - failed;
            console.log(
                `%c✅ Backfill done: ${points.length - failed} points sent${failed ? ` (${failed} FAILED — check the server)` : ''}`,
                `color: ${failed ? 'orange' : 'green'}; font-weight: bold`
            );
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

            if (options.backfillHours > 0) {
                backfill().then(() => startInterval(tid));
            } else {
                startInterval(tid);
            }

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
