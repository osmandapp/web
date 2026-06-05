import { useContext, useEffect, useRef, useCallback, useState } from 'react';
import { Client } from '@stomp/stompjs';
import AppContext, { LIVE_TRACKS_STORAGE_KEY } from '../../../context/AppContext';
import { getColorByIndex } from '../../../menu/analyzer/util/SegmentColorizer';
import { encryptLocation, decryptLocation } from '../../livetracks/liveTrackCrypto';

// sessionStorage key: my broadcast tid, restored after page refresh.
const BROADCAST_TID_SESSION = '__liveTrackBroadcastTid__';

// Initial /load fetches the last 6h only (fast open); older windows via loadEarlier().
const INITIAL_LOAD_WINDOW_MS = 6 * 60 * 60 * 1000;

export default function useLiveTracking() {
    const ctx = useContext(AppContext);

    const clientRef = useRef(null);
    const subscribedRef = useRef(new Set()); // translationIds we've already subscribed to
    const pendingCreateRef = useRef(null); // { onSuccess, onError } for the in-flight /create

    // Per-translation maps (refs: change off-render, never displayed).
    const keysRef = useRef({}); // tid → AES key (hex)
    const lastTimeRef = useRef({}); // tid → newest serverReceiveTime seen; reconnect fetches the delta
    const earliestFromRef = useRef({}); // tid → oldest fromTime requested; loadEarlier steps it back

    const [connected, setConnected] = useState(false);
    // tid → true when no older history remains (earliest request passed creationDate). Disables "load earlier".
    const [historyExhausted, setHistoryExhausted] = useState({});

    // Publish a body-less command to the server (startSharing / stopSharing / delete).
    const sendCommand = useCallback((destination) => {
        clientRef.current?.publish({ destination, body: '{}' });
    }, []);

    // Save the translations list to state and localStorage together.
    const saveTranslations = useCallback(
        (list) => {
            ctx.setLiveTranslations(list);
            localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(list));
        },
        [ctx.setLiveTranslations]
    );

    // Drop all client-side state for one translation.
    const forgetTranslation = useCallback((id) => {
        subscribedRef.current.delete(id);
        delete keysRef.current[id];
        delete lastTimeRef.current[id];
        delete earliestFromRef.current[id];
        setHistoryExhausted((prev) => {
            if (!(id in prev)) return prev;
            const next = { ...prev };
            delete next[id];
            return next;
        });
    }, []);

    // Keep keysRef in sync so the LOCATION handler can always decrypt.
    useEffect(() => {
        ctx.liveTranslations.forEach((t) => {
            if (t.key) keysRef.current[t.id] = t.key;
        });
        if (ctx.selectedLiveTranslation?.key) {
            keysRef.current[ctx.selectedLiveTranslation.id] = ctx.selectedLiveTranslation.key;
        }
    }, [ctx.liveTranslations, ctx.selectedLiveTranslation]);

    // Broadcast my position: watch geolocation while sharing is active and connected.
    // Gated on `connected` so we don't POST during a STOMP reconnect.
    useEffect(() => {
        if (!ctx.myBroadcastTid || ctx.isMyBroadcastPaused || !navigator.geolocation || !connected) return;

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude, altitude, speed, accuracy } = position.coords;
                const key = keysRef.current[ctx.myBroadcastTid];
                if (!key) return;
                const locationData = {
                    lat: latitude,
                    lon: longitude,
                    time: position.timestamp,
                    ...(speed != null && { speed }),
                    ...(altitude != null && { ele: altitude }),
                    ...(accuracy != null && { hdop: accuracy }),
                };
                encryptLocation(key, locationData)
                    .then((encData) => {
                        fetch(`/mapapi/translation/msg?encryptedData=${encodeURIComponent(encData)}`).catch(() => {});
                    })
                    .catch(() => {});
            },
            () => {},
            { enableHighAccuracy: true, maximumAge: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, [ctx.myBroadcastTid, ctx.isMyBroadcastPaused, connected]);

    // Add a live point to a participant (newest at index 0).
    const updateParticipant = useCallback(
        (translationId, nickname, point) => {
            ctx.setLiveParticipants((prev) => {
                const byTranslation = prev[translationId] ?? {};
                const existing = byTranslation[nickname];
                const color = existing?.color ?? getColorByIndex(Object.keys(byTranslation).length, 100);
                const locations = existing?.locations ?? [];
                return {
                    ...prev,
                    [translationId]: {
                        ...byTranslation,
                        [nickname]: {
                            nickname,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: [point, ...locations],
                        },
                    },
                };
            });
        },
        [ctx.setLiveParticipants]
    );

    // Apply a METADATA snapshot: mark who is currently sharing active/inactive.
    // Their location history is filled separately by processEncryptedHistory.
    const handleMetadata = useCallback(
        (translationId, data) => {
            if (!Array.isArray(data.shareLocations)) return;

            ctx.setLiveParticipants((prev) => {
                const byTranslation = { ...(prev[translationId] ?? {}) };
                const activeNicknames = new Set();
                data.shareLocations.forEach((loc, index) => {
                    activeNicknames.add(loc.nickname);
                    const existing = byTranslation[loc.nickname];
                    byTranslation[loc.nickname] = {
                        nickname: loc.nickname,
                        color: existing?.color ?? getColorByIndex(index, data.shareLocations.length),
                        active: true,
                        startTime: loc.startTime ?? existing?.startTime ?? Date.now(),
                        locations: existing?.locations ?? [],
                    };
                });
                // Mark participants no longer sharing as inactive
                Object.keys(byTranslation).forEach((nick) => {
                    if (!activeNicknames.has(nick)) {
                        byTranslation[nick] = { ...byTranslation[nick], active: false };
                    }
                });
                return { ...prev, [translationId]: byTranslation };
            });
        },
        [ctx.setLiveParticipants]
    );

    // Subscribe to a translation's topic (once) and request its initial history.
    const subscribeToTranslation = useCallback(
        (client, translationId) => {
            if (subscribedRef.current.has(translationId)) {
                return;
            }

            subscribedRef.current.add(translationId);

            client.subscribe(`/topic/translation/${translationId}`, (message) => {
                const msg = JSON.parse(message.body);
                // Track newest server time so reconnect only re-fetches the delta.
                if (msg.serverReceiveTime && msg.serverReceiveTime > (lastTimeRef.current[translationId] ?? 0)) {
                    lastTimeRef.current[translationId] = msg.serverReceiveTime;
                }
                if (msg.type === 'LOCATION') {
                    const encryptedData = msg.content?.encryptedData;
                    const key = keysRef.current[translationId];
                    if (encryptedData && key && msg.sender) {
                        decryptLocation(key, encryptedData)
                            .then((decryptedPoint) => {
                                if (decryptedPoint) {
                                    updateParticipant(translationId, msg.sender, decryptedPoint);
                                }
                            })
                            .catch(() => {});
                    }
                } else if (msg.type === 'METADATA') {
                    handleMetadata(translationId, msg.content);
                } else if (msg.type === 'JOIN' && msg.content) {
                    ctx.setLiveViewers((prev) => {
                        const byTranslation = { ...(prev[translationId] ?? {}) };
                        byTranslation[msg.content] = true;
                        return { ...prev, [translationId]: byTranslation };
                    });
                } else if (msg.type === 'LEAVE' && msg.content) {
                    ctx.setLiveViewers((prev) => {
                        const byTranslation = { ...(prev[translationId] ?? {}) };
                        delete byTranslation[msg.content];
                        return { ...prev, [translationId]: byTranslation };
                    });
                } else if (msg.type === 'DELETE') {
                    // Owner deleted the translation — wipe it from client state.
                    ctx.setLiveTranslations((prev) => {
                        const updated = prev.filter((t) => t.id !== translationId);
                        localStorage.setItem(LIVE_TRACKS_STORAGE_KEY, JSON.stringify(updated));
                        return updated;
                    });
                    ctx.setLiveParticipants((prev) => {
                        const next = { ...prev };
                        delete next[translationId];
                        return next;
                    });
                    ctx.setSelectedLiveTranslation((sel) => (sel?.id === translationId ? null : sel));
                    forgetTranslation(translationId);
                }
            });
            // Initial load: delta since the last point seen, or the recent window on first open.
            const last = lastTimeRef.current[translationId];
            const fromTime = last ? last + 1 : Date.now() - INITIAL_LOAD_WINDOW_MS;
            if (earliestFromRef.current[translationId] == null) {
                earliestFromRef.current[translationId] = fromTime;
            }
            client.publish({
                destination: `/app/translation/${translationId}/load`,
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ fromTime }),
            });
        },
        [updateParticipant, handleMetadata, forgetTranslation, ctx.setLiveViewers]
    );

    // Fetch the previous INITIAL_LOAD_WINDOW_MS of history (merged + de-duped on arrival).
    const loadEarlier = useCallback(
        (translationId) => {
            if (historyExhausted[translationId]) {
                return;
            }
            const currentFrom = earliestFromRef.current[translationId] ?? Date.now() - INITIAL_LOAD_WINDOW_MS;
            const newFrom = currentFrom - INITIAL_LOAD_WINDOW_MS;
            earliestFromRef.current[translationId] = newFrom;
            clientRef.current?.publish({
                destination: `/app/translation/${translationId}/load`,
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ fromTime: newFrom, toTime: currentFrom }),
            });
        },
        [historyExhausted]
    );

    // Save a translation to the list (key needed to decrypt). If already saved, just
    // select it, backfilling the key if we now have one.
    const addLiveTrack = useCallback(
        (id, name, key) => {
            const existing = ctx.liveTranslations.find((t) => t.id === id);
            if (existing) {
                if (key && !existing.key) {
                    saveTranslations(ctx.liveTranslations.map((t) => (t.id === id ? { ...t, key } : t)));
                    keysRef.current[id] = key;
                    ctx.setSelectedLiveTranslation({ ...existing, key });
                } else {
                    ctx.setSelectedLiveTranslation(existing);
                }
                return;
            }

            const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
            const newTranslation = { id, name: autoName, ...(key ? { key } : {}) };
            if (key) keysRef.current[id] = key;
            saveTranslations([...ctx.liveTranslations, newTranslation]);
            ctx.setSelectedLiveTranslation(newTranslation);

            const client = clientRef.current;
            if (client?.connected) {
                subscribeToTranslation(client, id);
            }
        },
        [ctx.liveTranslations, saveTranslations, ctx.setSelectedLiveTranslation, subscribeToTranslation]
    );

    // Remove a translation from the list and drop all its client state.
    const removeLiveTrack = useCallback(
        (id) => {
            saveTranslations(ctx.liveTranslations.filter((t) => t.id !== id));
            forgetTranslation(id);
            ctx.setLiveParticipants((prev) => {
                const next = { ...prev };
                delete next[id];
                return next;
            });
            if (ctx.selectedLiveTranslation?.id === id) {
                ctx.setSelectedLiveTranslation(null);
            }
        },
        [
            ctx.liveTranslations,
            saveTranslations,
            forgetTranslation,
            ctx.setLiveParticipants,
            ctx.selectedLiveTranslation,
            ctx.setSelectedLiveTranslation,
        ]
    );

    // Start (or resume) sharing this translation, stopping any other active one first.
    const startSharing = useCallback(
        (translationId) => {
            if (ctx.myBroadcastTid && ctx.myBroadcastTid !== translationId) {
                sendCommand(`/app/translation/${ctx.myBroadcastTid}/stopSharing`);
            }
            sendCommand(`/app/translation/${translationId}/startSharing`);
            sessionStorage.setItem(BROADCAST_TID_SESSION, translationId);
            ctx.setMyBroadcastTid(translationId);
            ctx.setIsMyBroadcastPaused(false);
        },
        [ctx.myBroadcastTid, sendCommand, ctx.setMyBroadcastTid, ctx.setIsMyBroadcastPaused]
    );

    // Pause sharing but keep myBroadcastTid so the owner can resume later.
    const pauseSharing = useCallback(() => {
        if (ctx.myBroadcastTid) {
            sendCommand(`/app/translation/${ctx.myBroadcastTid}/stopSharing`);
        }
        sessionStorage.removeItem(BROADCAST_TID_SESSION);
        ctx.setIsMyBroadcastPaused(true);
    }, [ctx.myBroadcastTid, sendCommand, ctx.setIsMyBroadcastPaused]);

    // Create a new translation on the server (id must equal SHA-256(key)). On success:
    // save it as owner, select it, and start sharing. The server reply arrives on
    // /user/queue/updates and is handled in the mount effect (pendingCreateRef).
    const createLiveTrack = useCallback(
        (translationId, key, name, durationHours, onCreated, onGeoError, onCreateError) => {
            if (ctx.myBroadcastTid) {
                sendCommand(`/app/translation/${ctx.myBroadcastTid}/stopSharing`);
                ctx.setMyBroadcastTid(null);
                ctx.setIsMyBroadcastPaused(false);
            }

            pendingCreateRef.current = {
                onSuccess: (id) => {
                    const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
                    const newTranslation = { id, name: autoName, key, isOwner: true };
                    keysRef.current[id] = key;
                    saveTranslations([...ctx.liveTranslations, newTranslation]);
                    ctx.setSelectedLiveTranslation(newTranslation);
                    const client = clientRef.current;
                    if (client?.connected) {
                        subscribeToTranslation(client, id);
                    }
                    // Mark as my broadcast — the geolocation watch starts via useEffect.
                    sessionStorage.setItem(BROADCAST_TID_SESSION, id);
                    ctx.setMyBroadcastTid(id);
                    ctx.setIsMyBroadcastPaused(false);
                    sendCommand(`/app/translation/${id}/startSharing`);
                    onCreated?.(newTranslation);
                },
                onError: onCreateError,
            };

            clientRef.current?.publish({
                destination: '/app/translation/create',
                body: JSON.stringify({ translationId, durationHours }),
            });
        },
        [
            ctx.myBroadcastTid,
            ctx.setMyBroadcastTid,
            ctx.setIsMyBroadcastPaused,
            ctx.liveTranslations,
            saveTranslations,
            ctx.setSelectedLiveTranslation,
            sendCommand,
            subscribeToTranslation,
        ]
    );

    // Delete the translation for everyone (owner only, enforced server-side).
    const deleteLiveTrack = useCallback(
        (id) => {
            if (ctx.myBroadcastTid === id) {
                sendCommand(`/app/translation/${id}/stopSharing`);
                sessionStorage.removeItem(BROADCAST_TID_SESSION);
                ctx.setMyBroadcastTid(null);
                ctx.setIsMyBroadcastPaused(false);
            }
            sendCommand(`/app/translation/${id}/delete`);
        },
        [ctx.myBroadcastTid, sendCommand, ctx.setMyBroadcastTid, ctx.setIsMyBroadcastPaused]
    );

    // Decrypt a /load history batch into participant tracks (newest-first, de-duped by time).
    const processEncryptedHistory = useCallback(
        (translationId, history) => {
            // Advance the delta cursor from server times (even for messages we can't decrypt).
            if (Array.isArray(history)) {
                for (const m of history) {
                    if (m.serverReceiveTime && m.serverReceiveTime > (lastTimeRef.current[translationId] ?? 0)) {
                        lastTimeRef.current[translationId] = m.serverReceiveTime;
                    }
                }
            }
            const key = keysRef.current[translationId];
            if (!key || !Array.isArray(history) || history.length === 0) {
                return;
            }

            const encMessages = history.filter((m) => m.type === 'LOCATION' && m.content?.encryptedData && m.sender);
            if (encMessages.length === 0) return;

            Promise.all(
                encMessages.map((m) =>
                    decryptLocation(key, m.content.encryptedData).then((pt) => (pt ? { sender: m.sender, pt } : null))
                )
            ).then((results) => {
                const pointsBySender = {};
                results.filter(Boolean).forEach(({ sender, pt }) => {
                    if (!pointsBySender[sender]) pointsBySender[sender] = [];
                    pointsBySender[sender].push(pt);
                });
                if (Object.keys(pointsBySender).length === 0) return;

                ctx.setLiveParticipants((prev) => {
                    const byTranslation = { ...(prev[translationId] ?? {}) };
                    Object.entries(pointsBySender).forEach(([nickname, pts], index) => {
                        pts.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
                        const existing = byTranslation[nickname];
                        const color =
                            existing?.color ?? getColorByIndex(Object.keys(byTranslation).length + index, 100);
                        // Merge with existing live points, deduplicate by time.
                        const existingTimes = new Set((existing?.locations ?? []).map((p) => p.time));
                        const newPts = pts.filter((p) => !existingTimes.has(p.time));
                        const combined = [...(existing?.locations ?? []), ...newPts];
                        combined.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
                        byTranslation[nickname] = {
                            nickname,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: combined,
                        };
                    });
                    return { ...prev, [translationId]: byTranslation };
                });
            });
        },
        [ctx.setLiveParticipants]
    );

    // Connect once on mount.
    useEffect(() => {
        const client = new Client({
            brokerURL: process.env.REACT_APP_WS_URL,
            reconnectDelay: 5000,
            onConnect: () => {
                // Private queue: replies to /load (history snapshot) and /create.
                client.subscribe('/user/queue/updates', (message) => {
                    const msg = JSON.parse(message.body);
                    if (msg.type === 'TRANSLATION' && msg.data?.id) {
                        if (pendingCreateRef.current && msg.data.shareLocations == null) {
                            // /create reply — fire the callback and clear it.
                            pendingCreateRef.current.onSuccess(msg.data.id);
                            pendingCreateRef.current = null;
                        } else {
                            handleMetadata(msg.data.id, msg.data);
                            processEncryptedHistory(msg.data.id, msg.data.history);
                            // No older history once our earliest request predates creation.
                            // Runs on the first load too, so a fresh translation disables at once.
                            const earliest = earliestFromRef.current[msg.data.id];
                            const created = msg.data.creationDate;
                            if (created && earliest != null) {
                                const exhausted = earliest <= created;
                                setHistoryExhausted((prev) =>
                                    prev[msg.data.id] === exhausted ? prev : { ...prev, [msg.data.id]: exhausted }
                                );
                            }
                        }
                    } else if (msg.type === 'ERROR' && pendingCreateRef.current) {
                        // /create rejected (e.g. not authenticated).
                        pendingCreateRef.current.onError?.(msg.data);
                        pendingCreateRef.current = null;
                    }
                });
                setConnected(true);
            },
            onDisconnect: () => setConnected(false),
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
            clientRef.current = null;
            subscribedRef.current.clear();
            setConnected(false);
        };
    }, []);

    // On (re)connect: subscribe to saved + selected translations and re-register my sharing.
    useEffect(() => {
        if (!connected) return;
        const client = clientRef.current;
        if (!client?.connected) return;
        ctx.liveTranslations.forEach((t) => subscribeToTranslation(client, t.id));
        const sel = ctx.selectedLiveTranslation;
        if (sel && !ctx.liveTranslations.find((t) => t.id === sel.id)) {
            subscribeToTranslation(client, sel.id);
        }
        if (ctx.myBroadcastTid && !ctx.isMyBroadcastPaused) {
            sendCommand(`/app/translation/${ctx.myBroadcastTid}/startSharing`);
        } else if (!ctx.myBroadcastTid) {
            // Resume my broadcast saved before a page refresh.
            const savedTid = sessionStorage.getItem(BROADCAST_TID_SESSION);
            if (savedTid && ctx.liveTranslations.find((t) => t.id === savedTid)) {
                ctx.setMyBroadcastTid(savedTid);
                ctx.setIsMyBroadcastPaused(false);
                sendCommand(`/app/translation/${savedTid}/startSharing`);
            }
        }
    }, [connected, ctx.liveTranslations, ctx.selectedLiveTranslation, subscribeToTranslation, sendCommand]);

    return {
        addLiveTrack,
        removeLiveTrack,
        createLiveTrack,
        deleteLiveTrack,
        startSharing,
        pauseSharing,
        loadEarlier,
        historyExhausted,
    };
}
