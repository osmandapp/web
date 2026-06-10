import { useEffect, useRef, useCallback, useState } from 'react';
import { Client } from '@stomp/stompjs';
import { getColorByIndex } from '../../../menu/analyzer/util/SegmentColorizer';
import {
    encryptLocation,
    decryptLocation,
    generateTranslationKey,
    computeTranslationId,
} from '../../livetracks/liveTrackCrypto';
import { GEO_ERROR_DENIED, GEO_ERROR_UNAVAILABLE, LIVE_TRACKS_STORAGE_KEY } from '../../livetracks/liveTrackUtils';

// sessionStorage key: my active broadcast tids (JSON array), restored after page refresh.
const BROADCAST_TID_SESSION = '__liveTrackBroadcastTids__';

// Initial /load fetches the last 6h only (fast open); older windows via loadEarlier().
const INITIAL_LOAD_WINDOW_MS = 6 * 60 * 60 * 1000;

// Cap on points kept per participant (newest first) — bounds memory and per-render computations.
const MAX_PARTICIPANT_POINTS = 10000;

export default function useLiveTracking(ctx, enabled = true) {
    const clientRef = useRef(null);
    const subscribedRef = useRef(new Map()); // translationId → STOMP subscription (kept so we can unsubscribe)
    const pendingCreateRef = useRef(null); // { onSuccess, onError } for the in-flight /create
    const geoErrorRef = useRef(null); // onGeoError(errCode) for the active broadcast — fired from the watchPosition error

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
        // Unsubscribe from the STOMP topic so the client stops receiving updates for this translation.
        subscribedRef.current.get(id)?.unsubscribe();
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

    // Broadcast my position into every translation I'm sharing into. Each translation has its own
    // key, so the point is encrypted per key and addressed (translationId) — the server then routes
    // each ciphertext to that one translation. Gated on `connected` so we don't POST during reconnect.
    useEffect(() => {
        const tids = ctx.myBroadcastTids;
        if (!tids.length || !navigator.geolocation || !connected) {
            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude, altitude, speed, accuracy } = position.coords;
                const locationData = {
                    lat: latitude,
                    lon: longitude,
                    time: position.timestamp,
                    ...(speed != null && { speed }),
                    ...(altitude != null && { ele: altitude }),
                    // Browser geolocation reports accuracy as a radius in metres (not DOP), so send it
                    // under `acc` rather than mislabeling it as the mobile broadcaster's `hdop`.
                    ...(accuracy != null && { acc: accuracy }),
                };
                for (const tid of tids) {
                    const key = keysRef.current[tid];
                    if (!key) continue;
                    encryptLocation(key, locationData)
                        .then((encData) => {
                            fetch(
                                `/mapapi/translation/msg?translationId=${encodeURIComponent(tid)}&encryptedData=${encodeURIComponent(encData)}`
                            ).catch(() => {});
                        })
                        .catch(() => {});
                }
            },
            (error) => {
                const code = error?.code === error?.PERMISSION_DENIED ? GEO_ERROR_DENIED : GEO_ERROR_UNAVAILABLE;
                geoErrorRef.current?.(code);
            },
            { enableHighAccuracy: true, maximumAge: 5000 }
        );

        return () => navigator.geolocation.clearWatch(watchId);
    }, [ctx.myBroadcastTids, connected]);

    // Add a live point to a participant (newest at index 0).
    const updateParticipant = useCallback(
        (translationId, nickname, point) => {
            ctx.setLiveParticipants((prev) => {
                const byTranslation = prev[translationId] ?? {};
                const existing = byTranslation[nickname];
                const color = existing?.color ?? getColorByIndex(Object.keys(byTranslation).length, 100);
                const locations = existing?.locations ?? [];
                // Skip a duplicate of the newest point (geolocation may re-deliver a cached fix);
                // returning prev unchanged also avoids a needless re-render.
                if (point?.time != null && locations[0]?.time === point.time) {
                    return prev;
                }
                return {
                    ...prev,
                    [translationId]: {
                        ...byTranslation,
                        [nickname]: {
                            nickname,
                            owner: existing?.owner,
                            mine: existing?.mine,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: [point, ...locations].slice(0, MAX_PARTICIPANT_POINTS),
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
                        owner: loc.owner === true,
                        // mine is only present in the personal load reply; preserve it on broadcasts.
                        mine: loc.mine ?? existing?.mine ?? false,
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

            const subscription = client.subscribe(`/topic/translation/${translationId}`, (message) => {
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
            subscribedRef.current.set(translationId, subscription);
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

    // Start broadcasting into this translation. Added to the active set — other broadcasts keep going.
    const startSharing = useCallback(
        (translationId) => {
            sendCommand(`/app/translation/${translationId}/startSharing`);
            ctx.setMyBroadcastTids((prev) => {
                const next = prev.includes(translationId) ? prev : [...prev, translationId];
                saveBroadcastTids(next);
                return next;
            });
        },
        [sendCommand, ctx.setMyBroadcastTids]
    );

    // Stop broadcasting into this translation. Removed from the active set; the rest keep going.
    // The translation stays bookmarked, so the owner can start it again later (acts as pause/resume).
    const stopSharing = useCallback(
        (translationId) => {
            sendCommand(`/app/translation/${translationId}/stopSharing`);
            ctx.setMyBroadcastTids((prev) => {
                const next = prev.filter((t) => t !== translationId);
                saveBroadcastTids(next);
                return next;
            });
        },
        [sendCommand, ctx.setMyBroadcastTids]
    );

    // Ask the owner of a translation (that I only have view access to) for permission to share.
    const requestShare = useCallback(
        (translationId) => {
            sendCommand(`/app/translation/${translationId}/requestShare`);
        },
        [sendCommand]
    );

    // Drop a handled request from the owner's pending list (shown as map notifications).
    const dropShareRequest = useCallback(
        (translationId, userId) => {
            ctx.setLiveShareRequests((prev) =>
                prev.filter((r) => !(r.translationId === translationId && r.userId === userId))
            );
        },
        [ctx.setLiveShareRequests]
    );

    // Owner approves a pending sharer; the server registers them and notifies the requester.
    const approveShare = useCallback(
        (translationId, userId) => {
            clientRef.current?.publish({
                destination: `/app/translation/${translationId}/approveShare`,
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ userId }),
            });
            dropShareRequest(translationId, userId);
        },
        [dropShareRequest]
    );

    // Owner denies a pending sharer (also used when the owner dismisses the notification).
    const denyShare = useCallback(
        (translationId, userId) => {
            clientRef.current?.publish({
                destination: `/app/translation/${translationId}/denyShare`,
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ userId }),
            });
            dropShareRequest(translationId, userId);
        },
        [dropShareRequest]
    );

    // Expose approve/deny so the map-level notifications (rendered in GlobalFrame) can act on them.
    useEffect(() => {
        ctx.setLiveShareActions({ approve: approveShare, deny: denyShare });
    }, [approveShare, denyShare, ctx.setLiveShareActions]);

    // Create a new translation on the server (id is derived from the key — see computeTranslationId()). On success:
    // save it as owner, select it, and start sharing. The server reply arrives on
    // /user/queue/updates and is handled in the mount effect (pendingCreateRef).
    // replaceId (optional): regenerate — drop that old translation and revoke it server-side.
    const createLiveTrack = useCallback(
        (translationId, key, name, durationHours, onCreated, onGeoError, onCreateError, replaceId) => {
            geoErrorRef.current = onGeoError ?? null;

            pendingCreateRef.current = {
                onSuccess: (id) => {
                    const autoName = name?.trim() || `Live Track ${ctx.liveTranslations.length + 1}`;
                    const newTranslation = { id, name: autoName, key, isOwner: true };
                    keysRef.current[id] = key;
                    // Brand-new translation: nothing older than now, so disable "load earlier".
                    setHistoryExhausted((prev) => ({ ...prev, [id]: true }));
                    const others = replaceId
                        ? ctx.liveTranslations.filter((t) => t.id !== replaceId)
                        : ctx.liveTranslations;
                    saveTranslations([...others, newTranslation]);
                    ctx.setSelectedLiveTranslation(newTranslation);
                    const client = clientRef.current;
                    if (client?.connected) {
                        subscribeToTranslation(client, id);
                    }
                    // Start broadcasting into the new translation (the geolocation watch starts via useEffect).
                    sendCommand(`/app/translation/${id}/startSharing`);
                    ctx.setMyBroadcastTids((prev) => {
                        // Regenerate: drop the revoked old tid and add the new one; otherwise just add.
                        const without = replaceId ? prev.filter((t) => t !== replaceId) : prev;
                        const next = without.includes(id) ? without : [...without, id];
                        saveBroadcastTids(next);
                        return next;
                    });
                    // Regenerate: revoke the old translation (its viewers get DELETE).
                    if (replaceId) {
                        sendCommand(`/app/translation/${replaceId}/delete`);
                        forgetTranslation(replaceId);
                    }
                    onCreated?.(newTranslation);
                },
                onError: onCreateError,
            };

            clientRef.current?.publish({
                destination: '/app/translation/create',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ translationId, durationHours }),
            });
        },
        [
            ctx.setMyBroadcastTids,
            ctx.liveTranslations,
            saveTranslations,
            ctx.setSelectedLiveTranslation,
            sendCommand,
            forgetTranslation,
            subscribeToTranslation,
        ]
    );

    // Regenerate the key/link for a translation I own: issue a new permanent key and
    // revoke the old one (old viewers lose access, my broadcast moves to the new link).
    // onDone(newTranslation) lets the caller navigate to the new tid URL.
    const regenerateLiveTrack = useCallback(
        async (oldId, onDone) => {
            const old = ctx.liveTranslations.find((t) => t.id === oldId);
            if (!old?.isOwner) {
                return;
            }
            const key = await generateTranslationKey();
            const newId = await computeTranslationId(key);
            createLiveTrack(newId, key, old.name, 0, onDone, null, null, oldId);
        },
        [ctx.liveTranslations, createLiveTrack]
    );

    // Delete the translation for everyone (owner only, enforced server-side).
    const deleteLiveTrack = useCallback(
        (id) => {
            ctx.setMyBroadcastTids((prev) => {
                if (!prev.includes(id)) return prev;
                sendCommand(`/app/translation/${id}/stopSharing`);
                const next = prev.filter((t) => t !== id);
                saveBroadcastTids(next);
                return next;
            });
            sendCommand(`/app/translation/${id}/delete`);
        },
        [ctx.setMyBroadcastTids, sendCommand]
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
                            owner: existing?.owner,
                            mine: existing?.mine,
                            color,
                            active: existing?.active ?? true,
                            startTime: existing?.startTime ?? Date.now(),
                            locations: combined.slice(0, MAX_PARTICIPANT_POINTS),
                        };
                    });
                    return { ...prev, [translationId]: byTranslation };
                });
            });
        },
        [ctx.setLiveParticipants]
    );

    // Connect while live tracks are in use; tears down when no longer enabled.
    useEffect(() => {
        if (!enabled) return;
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
                            // Viewer roster snapshot — keeps the count correct after a page refresh.
                            if (Array.isArray(msg.data.viewers)) {
                                const tid = msg.data.id;
                                const roster = {};
                                msg.data.viewers.forEach((n) => {
                                    roster[n] = true;
                                });
                                ctx.setLiveViewers((prev) => ({ ...prev, [tid]: roster }));
                            }
                            // Owner-only: viewers awaiting approval to share (delivered on load).
                            // Replace this translation's pending list with the server's, so the
                            // notifications reappear after a page refresh until handled.
                            if (Array.isArray(msg.data.pendingRequests)) {
                                const tid = msg.data.id;
                                ctx.setLiveShareRequests((prev) => [
                                    ...prev.filter((r) => r.translationId !== tid),
                                    ...msg.data.pendingRequests.map((r) => ({
                                        translationId: tid,
                                        userId: r.userId,
                                        nickname: r.nickname,
                                    })),
                                ]);
                            }
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
                    } else if (msg.type === 'SHARE_REQUEST' && msg.data?.translationId) {
                        // Owner side: a viewer asked to share into my translation.
                        const { translationId, userId, nickname } = msg.data;
                        ctx.setLiveShareRequests((prev) =>
                            prev.some((r) => r.translationId === translationId && r.userId === userId)
                                ? prev
                                : [...prev, { translationId, userId, nickname }]
                        );
                    } else if (msg.type === 'SHARE_APPROVED' && msg.data) {
                        // Requester side: approved — start broadcasting into that translation.
                        const tid = msg.data;
                        ctx.setMyBroadcastTids((prev) => {
                            const next = prev.includes(tid) ? prev : [...prev, tid];
                            saveBroadcastTids(next);
                            return next;
                        });
                    } else if (msg.type === 'ERROR' && pendingCreateRef.current) {
                        // /create rejected (e.g. not authenticated).
                        pendingCreateRef.current.onError?.(msg.data);
                        pendingCreateRef.current = null;
                    }
                });
                setConnected(true);
            },
            onDisconnect: () => {
                // Clear so the reconnect effect re-subscribes to topics on the new STOMP session.
                subscribedRef.current.clear();
                setConnected(false);
            },
        });

        client.activate();
        clientRef.current = client;

        return () => {
            client.deactivate();
            clientRef.current = null;
            subscribedRef.current.clear();
            setConnected(false);
        };
    }, [enabled]);

    useEffect(() => {
        if (!connected) return;
        const client = clientRef.current;
        if (!client?.connected) return;
        ctx.liveTranslations.forEach((t) => subscribeToTranslation(client, t.id));
        const sel = ctx.selectedLiveTranslation;
        if (sel && !ctx.liveTranslations.some((t) => t.id === sel.id)) {
            subscribeToTranslation(client, sel.id);
        }
    }, [connected, ctx.liveTranslations, ctx.selectedLiveTranslation, subscribeToTranslation]);

    // On (re)connect: re-register every active broadcast. Restores the set saved before a page
    // refresh (kept only for translations that are still bookmarked), then re-sends startSharing.
    useEffect(() => {
        if (!connected) return;
        const active = ctx.myBroadcastTids.length
            ? ctx.myBroadcastTids
            : loadBroadcastTids().filter((tid) => ctx.liveTranslations.some((t) => t.id === tid));
        if (!active.length) return;
        if (!ctx.myBroadcastTids.length) {
            ctx.setMyBroadcastTids(active);
        }
        active.forEach((tid) => sendCommand(`/app/translation/${tid}/startSharing`));
    }, [connected, sendCommand]);

    return {
        addLiveTrack,
        removeLiveTrack,
        createLiveTrack,
        deleteLiveTrack,
        startSharing,
        stopSharing,
        regenerateLiveTrack,
        loadEarlier,
        historyExhausted,
        requestShare,
    };
}

function saveBroadcastTids(tids) {
    try {
        if (tids.length) {
            sessionStorage.setItem(BROADCAST_TID_SESSION, JSON.stringify(tids));
        } else {
            sessionStorage.removeItem(BROADCAST_TID_SESSION);
        }
    } catch {}
}

function loadBroadcastTids() {
    try {
        return JSON.parse(sessionStorage.getItem(BROADCAST_TID_SESSION)) ?? [];
    } catch {
        return [];
    }
}
