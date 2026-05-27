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
 * --- Join an existing translation ---
 *   const sim = await window.__liveTrackSim.start({ tid: 'abc123', speed: 30 });
 *
 * --- Pause (after maxPoints or manually) ---
 *   sim.pause();
 *
 * --- Resume ---
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
 *   speed      — km/h (default: 30)
 *   bearing    — direction 0-360° (default: 45)
 *   interval   — ms between points (default: 2000)
 *   eleProfile — 'flat' | 'hilly' | 'alpine' (default: 'hilly')
 *   maxPoints  — stop after N points, then call sim.resume() (default: 0 = infinite)
 */

import { Client } from '@stomp/stompjs';

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
        speed: opts.speed ?? 30,
        bearing: opts.bearing ?? 45,
        interval: opts.interval ?? 2000,
        eleProfile: opts.eleProfile ?? 'hilly',
        maxPoints: opts.maxPoints ?? 0,
    };

    const brokerURL = 'ws://localhost:8080/osmand-websocket';

    const speedMs = options.speed / 3.6;
    const getEle = makeElevationGenerator(options.eleProfile);

    let currentLat = options.lat;
    let currentLon = options.lon;
    let translationId = options.tid;
    let intervalHandle = null;
    let pointCount = 0;
    let paused = false;
    let started = false;

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

                    if (msg.type === 'TRANSLATION' && msg.data?.id && !translationId) {
                        translationId = msg.data.id;
                        console.log('%c📍 Translation ready!', 'color: blue; font-weight: bold');
                        console.log(`   tid: ${translationId}`);
                        console.log(
                            `   Share URL: ${globalThis.location.origin}/map/live/?tid=${translationId}&name=${encodeURIComponent(options.alias)}`
                        );
                        subscribeAndSimulate(translationId);
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
                    console.log('📡 Creating new translation...');
                    client.publish({ destination: '/app/translation/create', body: '{}' });
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

                const distStep = speedMs * (options.interval / 1000);
                const next = movePoint(currentLat, currentLon, distStep, options.bearing);
                currentLat = next.lat;
                currentLon = next.lon;
                const ele = getEle();
                pointCount++;

                const params = new URLSearchParams({
                    lat: currentLat,
                    lon: currentLon,
                    timestamp: Date.now(),
                    speed: speedMs,
                    altitude: ele,
                });
                fetch(`/mapapi/translation/msg?${params}`).catch(() => {});

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
                    const pt = msg.content?.point;
                    if (pt) {
                        const spd = Number.isFinite(pt.speed) ? (pt.speed * 3.6).toFixed(1) + 'km/h' : '-';
                        const ele = Number.isFinite(pt.ele) ? pt.ele + 'm' : '-';
                        console.log(
                            `📍 ${msg.sender}: lat=${pt.lat?.toFixed(5)} lon=${pt.lon?.toFixed(5)} spd=${spd} ele=${ele}`
                        );
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
                `   Speed: ${options.speed} km/h | Bearing: ${options.bearing}° | Profile: ${options.eleProfile}${limitMsg}`
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
                    client.publish({ destination: `/app/translation/${tid}/stopSharing`, body: '{}' });
                    console.log(`%c⏹ Stopped after ${pointCount} points`, 'color: red; font-weight: bold');
                    setTimeout(() => client.deactivate(), 500);
                },
            });
        }

        client.activate();
    });
}

export function stop(handle) {
    handle?.stop();
}
